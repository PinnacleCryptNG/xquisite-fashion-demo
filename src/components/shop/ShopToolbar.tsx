import { Suspense } from "react";

import { ShopSort } from "@/components/shop/ShopSort";

export function ShopToolbar({ count }: { count: number }) {
  const label = count === 1 ? "1 piece" : `${count} pieces`;

  return (
    <div className="flex items-center justify-between gap-6">
      <p className="font-sans text-[11px] tracking-[0.18em] text-stone uppercase">
        {label}
      </p>
      <Suspense fallback={null}>
        <ShopSort />
      </Suspense>
    </div>
  );
}
