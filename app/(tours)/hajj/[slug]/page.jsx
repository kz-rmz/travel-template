"use client";

import { usePathname } from "next/navigation";
import ToursTable from "@/components/ToursTable";
import { hajjTours } from "@/lib/hajjTours";

export default function Page() {
  const pathname = usePathname();
  const path = pathname.split("/");
  return (
    <ToursTable tours={hajjTours.filter((tour) => tour.category === path[2])} />
  );
}
