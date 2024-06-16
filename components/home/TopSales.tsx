import TopSalesProduct from "./TopSalesProduct";

const TopSales = () => {
  return (
    <div className="w-full h-auto bg-green-700 py-2">
      <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row gap-4">
        {/** Start box */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 items-center p-4">
          <h2 className="text-xl py-2 px-4 bg-green-900 text-white font-bold rounded-lg">
            Top Ventas Juegos de Mesa
          </h2>
          <div className="flex flex-col md:flex-row gap-2 rounded-lg p-4 bg-green-900">
            <TopSalesProduct img="/topsales/stay-cool.jpg" title="Stay Cool" />

            <TopSalesProduct
              img="/topsales/en-una-escala-de-1-a-t-rex.jpg"
              title="En una Escala de 1 a T-Rex"
            />
          </div>
        </div>
        {/** End box */}
        {/** Start box */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 items-center p-4">
          <h2 className="text-xl py-2 px-4 bg-amber-400 text-white font-bold rounded-lg">
            Novedades Juegos de Mesa
          </h2>
          <div className="flex flex-col md:flex-row gap-2 rounded-lg p-4 bg-amber-400">
            <TopSalesProduct
              img="/topsales/mystery-box-juegos-de-mesa.jpg"
              title="Mystery Box: Juegos de Mesa"
            />

            <TopSalesProduct
              img="/topsales/pagan-el-destino-de-roanoke.jpg"
              title="Pagan: El destino de Roanoke"
            />
          </div>
        </div>
        {/** End box */}
        {/** Start box */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 items-center p-4">
          <h2 className="text-xl py-2 px-4 bg-orange-500 text-white font-bold rounded-lg">
            Otras Novedades
          </h2>
          <div className="flex flex-col md:flex-row gap-2 rounded-lg p-4 bg-orange-500">
            <TopSalesProduct
              img="/topsales/lorcana-sobre-1-ursula-s-return-ingles.jpg"
              title="Lorcana: Sobre Ursula's Return"
            />

            <TopSalesProduct img="/topsales/kid-buu.jpg" title="Kid Buu" />
          </div>
        </div>
        {/** End box */}
      </div>
    </div>
  );
};

export default TopSales;
