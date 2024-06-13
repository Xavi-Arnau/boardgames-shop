import CarouselPanel from "@/components/CarouselPanel";
import CardsPanel from "@/components/CardsPanel";
import TopSales from "@/components/TopSales";

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
    </div>
  );
}
