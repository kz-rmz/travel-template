"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "../utils/cn";

const navMenuItems = [
  {
    name: "Частые вопросы",
    href: "/faq",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
  {
    name: "О Нас",
    href: "/about",
  },
];

export default function HeaderNavMenu() {
  const pathname = usePathname();
  return (
    <div className='flex gap-3'>
      {navMenuItems.map((menuItem) => {
        const isActive = pathname.startsWith(menuItem.href);
        return (
          <Link
            className={cn("text-slate-600", isActive && "text-blue-500")}
            href={menuItem.href}
            key={menuItem.name}
          >
            {menuItem.name}
          </Link>
        );
      })}
    </div>
  );
}
