import { hajjTours } from "@/lib/hajjTours";
import ToursTable from "@/components/ToursTable";

export default function HajjPage() {
  return (
    <div>
      <ToursTable tours={hajjTours} />
    </div>
  );
}
