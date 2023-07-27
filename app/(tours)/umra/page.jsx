import { umraTours } from "@/lib/umraTours";
import ToursTable from "@/components/ToursTable";

export default function Page() {
  return (
    <div>
      <ToursTable tours={umraTours} />
    </div>
  );
}
