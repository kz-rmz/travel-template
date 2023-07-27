"use client";
import Link from "next/link";
import { cn } from "../utils/cn";

export default function NavButton({ link, isActive }) {
  return (
    <Link
      href={link.href}
      className={cn(
        "px-3 py-1 text-black rounded-xl text-lg tracking-wide border border-gray-700",
        isActive && "bg-sky-600 border-sky-600 text-white"
      )}
    >
      {link.name}
    </Link>
  );
}
