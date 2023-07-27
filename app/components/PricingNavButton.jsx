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
      className={cn("text-lg", isActive && "border-b-2 border-sky-600")}
      href={`/${segment}/${link.href}`}
      type='button'
    >
      {link.name}
    </Link>
  );
}
