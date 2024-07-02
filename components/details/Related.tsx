import RelatedProduct from "./RelatedProduct";

const Related = () => {
  const test = {
    id: 1,
    name: "Shatterpoint: Clone Force 99 Squad Pack (Castellano)",
    picture: "/products/shatterpoint-clone-force-99-squad-pack-castellano.jpg",
  };
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto flex flex-col gap-4">
        <h3 className="p-4 border-2 text-green-700 font-bold text-xl md:w-fit rounded-xl shadow-xl">
          Los clientes que adquirieron este producto también compraron:
        </h3>
        <div className="flex flex-col md:flex-row">
          <RelatedProduct product={test} />
          <RelatedProduct product={test} />
          <RelatedProduct product={test} />
          <RelatedProduct product={test} />
          <RelatedProduct product={test} />
          <RelatedProduct product={test} />
        </div>
      </div>
    </div>
  );
};

export default Related;
