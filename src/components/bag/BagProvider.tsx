"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import {
  BAG_STORAGE_KEY,
  type BagEntry,
  type BagLine,
  bagEnquiryMessage,
  bagEstimatedTotal,
  bagItemCount,
  bagLineKey,
  clampBagQuantity,
  parseBagEntries,
  readBagEntries,
  resolveBagLines,
  writeBagEntries,
} from "@/lib/bag";
import type { ProductSize } from "@/types/product";

const BAG_CHANGE = "xquisite-edit-change";

type AddArgs = {
  slug: string;
  size?: ProductSize;
  quantity: number;
};

type BagContextValue = {
  lines: BagLine[];
  count: number;
  estimatedTotal: number;
  ready: boolean;
  add: (item: AddArgs) => void;
  setQuantity: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  enquiryMessage: string;
};

const BagContext = createContext<BagContextValue | null>(null);

function subscribeBag(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === BAG_STORAGE_KEY) onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(BAG_CHANGE, onChange);
  const timer = window.setTimeout(onChange, 0);
  return () => {
    window.clearTimeout(timer);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(BAG_CHANGE, onChange);
  };
}

function getBagSnapshot() {
  return window.localStorage.getItem(BAG_STORAGE_KEY) ?? "[]";
}

function getServerSnapshot() {
  return "[]";
}

function subscribeHydration(onChange: () => void) {
  const frame = window.requestAnimationFrame(() => onChange());
  const timer = window.setTimeout(onChange, 0);
  return () => {
    window.cancelAnimationFrame(frame);
    window.clearTimeout(timer);
  };
}

function getHydratedSnapshot() {
  return true;
}

function getHydratedServerSnapshot() {
  return false;
}

function commit(entries: BagEntry[]) {
  writeBagEntries(entries);
  window.dispatchEvent(new Event(BAG_CHANGE));
}

function upsertEntry(entries: BagEntry[], incoming: AddArgs): BagEntry[] {
  const key = bagLineKey(incoming.slug, incoming.size);
  const next = [...entries];
  const index = next.findIndex(
    (entry) => bagLineKey(entry.slug, entry.size) === key,
  );
  const quantity = clampBagQuantity(incoming.quantity);

  if (index === -1) {
    return [...next, { slug: incoming.slug, size: incoming.size, quantity }];
  }

  next[index] = {
    ...next[index],
    quantity: clampBagQuantity(next[index].quantity + quantity),
  };
  return next;
}

export function BagProvider({ children }: { children: React.ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribeBag,
    getBagSnapshot,
    getServerSnapshot,
  );
  const ready = useSyncExternalStore(
    subscribeHydration,
    getHydratedSnapshot,
    getHydratedServerSnapshot,
  );
  const entries = useMemo(() => parseBagEntries(snapshot), [snapshot]);

  const add = useCallback((item: AddArgs) => {
    commit(upsertEntry(readBagEntries(), item));
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    commit(
      readBagEntries().map((entry) =>
        bagLineKey(entry.slug, entry.size) === key
          ? { ...entry, quantity: clampBagQuantity(quantity) }
          : entry,
      ),
    );
  }, []);

  const remove = useCallback((key: string) => {
    commit(
      readBagEntries().filter(
        (entry) => bagLineKey(entry.slug, entry.size) !== key,
      ),
    );
  }, []);

  const clear = useCallback(() => commit([]), []);

  const value = useMemo(() => {
    const lines = resolveBagLines(entries);
    return {
      lines,
      count: bagItemCount(lines),
      estimatedTotal: bagEstimatedTotal(lines),
      ready,
      add,
      setQuantity,
      remove,
      clear,
      enquiryMessage: bagEnquiryMessage(lines),
    };
  }, [add, clear, entries, ready, remove, setQuantity]);

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error("useBag must be used within BagProvider");
  }
  return context;
}
