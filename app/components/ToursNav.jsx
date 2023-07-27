"use client";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton";
import { toursNav } from "../lib/toursNav";

export default function ToursNav() {
  const pathname = usePathname();
  return (
    <div className='flex gap-3'>
      {toursNav.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return <NavButton key={link.name} link={link} isActive={isActive} />;
      })}
    </div>
  );
}
