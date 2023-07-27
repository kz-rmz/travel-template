"use client";

import { usePathname } from "next/navigation";
import ToursTable from "@/components/ToursTable";
import { umraTours } from "@/lib/umraTours";

export default function Page() {
  const pathname = usePathname();
  const path = pathname.split("/");
  return (
    <ToursTable tours={umraTours.filter((tour) => tour.category === path[2])} />
  );
}
