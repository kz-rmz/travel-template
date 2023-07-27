"use client";
import Link from "next/link";
import { cn } from "../utils/cn";

export default function NavButton({ link, isActive }) {
  return (
    <Link
      href={link.href}
      className={cn(
        "px-3 py-1 text-slate-800 rounded-3xl text-lg tracking-wide border border-gray-200 hover:bg-gray-100",
        isActive && "bg-sky-100 border-sky-300 text-sky-600 hover:bg-sky-100"
      )}
    >
      {link.name}
    </Link>
  );
}
