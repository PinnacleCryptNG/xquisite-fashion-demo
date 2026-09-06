"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  type BagEntry,
  type BagLine,
  bagEnquiryMessage,
  bagEstimatedTotal,
  bagItemCount,
  bagLineKey,
  clampBagQuantity,
  readBagEntries,
  resolveBagLines,
  writeBagEntries,
} from "@/lib/bag";
import type { ProductSize } from "@/types/product";

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
  const [entries, setEntries] = useState<BagEntry[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setEntries(readBagEntries());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    writeBagEntries(entries);
  }, [entries, ready]);

  const add = useCallback((item: AddArgs) => {
    setEntries((current) => upsertEntry(current, item));
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    setEntries((current) =>
      current.map((entry) =>
        bagLineKey(entry.slug, entry.size) === key
          ? { ...entry, quantity: clampBagQuantity(quantity) }
          : entry,
      ),
    );
  }, []);

  const remove = useCallback((key: string) => {
    setEntries((current) =>
      current.filter((entry) => bagLineKey(entry.slug, entry.size) !== key),
    );
  }, []);

  const clear = useCallback(() => setEntries([]), []);

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
