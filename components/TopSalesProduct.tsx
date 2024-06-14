import { Button } from "./ui/button";
import { Eye } from "lucide-react";
interface TopSalesProductProps {
  img: string;
  title: string;
}

const TopSalesProduct = ({ img, title }: TopSalesProductProps) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-4 bg-white rounded-lg p-4 group md:h-[420px] items-center shadow-lg">
      <img src={img} alt="" className="object-fil w-40" />
      <div className="text-center text-base font-bold h-16">{title}</div>
      <div className="flex flex-row p-4 justify-between items-center">
        <div className="font-bold text-lg">8,00 €</div>
        <div className="text-sm line-through">19,95 €</div>
        <div className="bg-red-500 p-1 rounded-lg text-white text-sm">-59%</div>
      </div>
      <Button className="md:hidden group-hover:flex bg-green-700">
        <Eye className="mr-2 h-4 w-4" />
        Ver más
      </Button>
    </div>
  );
};

export default TopSalesProduct;
