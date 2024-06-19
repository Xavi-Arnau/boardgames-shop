import CarouselPanel from "@/components/home/CarouselPanel";
import CardsPanel from "@/components/home/CardsPanel";
import TopSales from "@/components/home/TopSales";
import NewAndFeatured from "@/components/home/NewAndFeatured";
import ConditionsPanel from "@/components/home/ConditionsPanel";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 md:px-10">
          <CarouselPanel />
        </div>
        <div className="w-full md:w-2/5">
          <CardsPanel />
        </div>
      </div>
      <TopSales />

      <Suspense fallback={<div>Loading products...</div>}>
        <NewAndFeatured />
      </Suspense>

      <ConditionsPanel />
    </div>
  );
}
