"use client";

import { useSearchParams } from "next/navigation";
import { decodeToParam } from "@/lib/utils";

export default function GuestName() {
  const sp = useSearchParams();
  const guest = decodeToParam(sp.get("to"));

  if (!guest) return <span className="text-gray-400 italic">Tamu Undangan</span>;

  return (
    <span className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-[#2c3e50] tracking-tight">
      {guest}
    </span>
  );
}
