import PricingNavButton from "../components/PricingNavButton";
import { tourPricing } from "../lib/toursPricing";

export default function ToursLayout({ children }) {
  return (
    <section>
      <div className='flex gap-3'>
        {tourPricing.map((link) => {
          return <PricingNavButton key={link.name} link={link} />;
        })}
      </div>
      <div className='mt-10'>{children}</div>
    </section>
  );
}
