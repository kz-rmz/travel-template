"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "../utils/cn";

const navMenuItems = [
  {
    name: "Как это работает?",
    href: "/faq",
  },
];

export default function HeaderNavMenu() {
  const pathname = usePathname();
  return (
    <div className='flex gap-5 items-center'>
      {navMenuItems.map((menuItem) => {
        const isActive = pathname.startsWith(menuItem.href);
        return (
          <Link
            className={cn("text-white", isActive && "text-slate-800")}
            href={menuItem.href}
            key={menuItem.name}
          >
            {menuItem.name}
          </Link>
        );
      })}
      <Link href={"/"}>Войти</Link>
      <select
        name=''
        id=''
        defaultValue={"kaz"}
        className=' self-center bg-sky-500 text-white'
      >
        <option value='kaz' className='text-white'>
          kaz
        </option>
        <option value='rus' className='text-white'>
          rus
        </option>
      </select>
    </div>
  );
}
