import NewAndFeaturedProduct from "./NewAndFeaturedProduct";

const NewAndFeatured = () => {
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto">
        <h2 className="border-2 text-xl font-bold w-1/5 shadow-lg py-2 px-4 text-green-700 my-6 text-center rounded-lg">
          Novedades y destacados
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-between">
          <NewAndFeaturedProduct />
          <NewAndFeaturedProduct />
          <NewAndFeaturedProduct />
          <NewAndFeaturedProduct />
          <NewAndFeaturedProduct />
          <NewAndFeaturedProduct />
          <NewAndFeaturedProduct />
          <NewAndFeaturedProduct />
          <NewAndFeaturedProduct />
          <NewAndFeaturedProduct />
          <NewAndFeaturedProduct />
          <NewAndFeaturedProduct />
        </div>
      </div>
    </div>
  );
};

export default NewAndFeatured;
