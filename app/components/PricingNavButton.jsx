"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import { cn } from "../utils/cn";
import Link from "next/link";

export default function PricingNavButtons({ link }) {
  let segment = useSelectedLayoutSegments();
  const isActive = link.href === segment[1];
  if (segment.length === 2) {
    segment.pop();
  }

  return (
    <Link
      key={link.name}
      className={cn(
        "text-lg hover:border-b-2 hover:border-slate-400 text-slate-500",
        isActive &&
          "border-b-2 border-sky-500 text-slate-900 hover:border-b-2 hover:border-sky-700"
      )}
      href={`/${segment}/${link.href}`}
      type='button'
    >
      {link.name}
    </Link>
  );
}
