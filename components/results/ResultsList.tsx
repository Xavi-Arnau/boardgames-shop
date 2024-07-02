"use client";
import ResultsProduct from "@/components/results/ResultsProduct";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/components/types/product";

const ResultsList = () => {
  const [products, setProducts] = useState([]);

  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/products/search?query=${search}`, {
        next: { revalidate: 60 },
      });
      const data = await response.json();
      console.log("trololo");

      setProducts(data);
    };

    fetchData();
  }, [search]);

  return (
    <div>
      <div className="w-8/12 mx-auto min-h-[500px]">
        <h1 className="w-fit p-4 border-2 rounded-lg shadow-lg">
          Results for: {search}
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-between">
          {products &&
            products.map((product: Product) => (
              <ResultsProduct key={product.name} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsList;
