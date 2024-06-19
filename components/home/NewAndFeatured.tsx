import NewAndFeaturedProduct from "./NewAndFeaturedProduct";
import { Product } from "../types/Product";

const NewAndFeatured = async () => {
  async function fetchProducts() {
    //should use one of this solutions to be able to use partial urls here https://stackoverflow.com/questions/76995053/how-to-use-relative-path-fetch-in-nextjs-app-router
    const response = await fetch(
      "https://boardgames-shop.netlify.app/api/products"
    );

    const products = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 1000)); //wait 1 second

    return products;
  }
  const products = await fetchProducts();
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto">
        <h2 className="border-2 text-xl font-bold w-1/5 shadow-lg py-2 px-4 text-green-700 my-6 text-center rounded-lg">
          Novedades y destacados
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-between">
          {products.map((product: Product) => (
            <NewAndFeaturedProduct product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewAndFeatured;
