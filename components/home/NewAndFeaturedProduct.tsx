import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import { Product } from "../types/product";

interface NewAndFeaturedProductProps {
  product: Product;
}

const NewAndFeaturedProduct = ({ product }: NewAndFeaturedProductProps) => {
  return (
    <div className="w-full md:w-1/6 p-4">
      <div className="border-2 rounded-lg flex flex-col items-center group h-[380px] p-4 hover:scale-110 shadow-lg">
        <img src={product.picture} alt="" className="object-fil w-40" />
        <div className="font-bold text-sm mt-4 h-16">{product.name}</div>
        <div className="flex flex-row p-4 justify-between items-center">
          <div className="font-bold text-lg">8,00 €</div>
          <div className="text-sm line-through">19,95 €</div>
          <div className="bg-red-500 p-1 rounded-lg text-white text-sm">
            -59%
          </div>
        </div>
        <Button className="md:hidden group-hover:flex bg-green-700 text-sm">
          <Eye className="mr-2 h-4 w-4" /> Ver más
        </Button>
      </div>
    </div>
  );
};

export default NewAndFeaturedProduct;
