"use client";
import ResultsProduct from "@/components/results/ResultsProduct";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/components/types/product";

const ResultsPage = () => {
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/products/search?query=${search}`);
      const data = await response.json();

      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="w-8/12 mx-auto min-h-[500px]">
        <h1 className="w-fit p-4 border-2 rounded-lg shadow-lg">
          Results for: {search}
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-between">
          {products.map((product: Product) => (
            <ResultsProduct key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
