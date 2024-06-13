import { Button } from "./ui/button";

const TopSales = () => {
  return (
    <div className="w-full h-auto bg-green-700 py-2">
      <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row gap-4">
        {/** Start box */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 items-center p-4">
          <h2 className="text-xl py-2 px-4 bg-green-900 text-white font-bold rounded-lg">
            Top Ventas Juegos de Mesa
          </h2>
          <div className="flex flex-row gap-2 rounded-lg p-4 bg-green-900">
            <div className="w-1/2 flex flex-col gap-4 bg-white rounded-lg p-4 group h-[450px]">
              <img src="/topsales/stay-cool.jpg" alt="" />
              <div className="text-center text-base font-bold h-16">
                Stay Cool
              </div>
              <div className="flex flex-row p-4 justify-between items-center">
                <div className="font-bold text-lg">8,00 €</div>
                <div className="text-sm line-through">19,95 €</div>
                <div className="bg-red-500 p-1 rounded-lg text-white text-sm">
                  -59%
                </div>
              </div>
              <Button className="hidden group-hover:block">Ver más</Button>
            </div>
            <div className="w-1/2 flex flex-col gap-4 bg-white rounded-lg p-4 group h-[450px]">
              <img src="/topsales/en-una-escala-de-1-a-t-rex.jpg" alt="" />
              <div className="text-center text-base font-bold h-16">
                En una Escala de 1 a T-Rex
              </div>
              <div className="flex flex-row p-4 justify-between items-center">
                <div className="font-bold text-lg">7,00 €</div>
                <div className="text-sm line-through">19,99 €</div>
                <div className="bg-red-500 p-1 rounded-lg text-white text-sm">
                  -64%
                </div>
              </div>
              <Button className="hidden group-hover:block">Ver más</Button>
            </div>
          </div>
        </div>
        {/** End box */}
        {/** Start box */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 items-center p-4">
          <h2 className="text-xl py-2 px-4 bg-amber-400 text-white font-bold rounded-lg">
            Novedades Juegos de Mesa
          </h2>
          <div className="flex flex-row gap-2 rounded-lg p-4 bg-amber-400">
            <div className="w-1/2 flex flex-col gap-4 bg-white rounded-lg p-4 group h-[450px]">
              <img src="/topsales/mystery-box-juegos-de-mesa.jpg" alt="" />
              <div className="text-center text-base font-bold h-16">
                Mystery Box: Juegos de Mesa
              </div>
              <div className="flex flex-row p-4 justify-center items-center">
                <div className="font-bold text-lg">49,99 €</div>
              </div>
              <Button className="hidden group-hover:block">Ver más</Button>
            </div>
            <div className="w-1/2 flex flex-col gap-4 bg-white rounded-lg p-4 group h-[450px]">
              <img src="/topsales/pagan-el-destino-de-roanoke.jpg" alt="" />
              <div className="text-center text-base font-bold h-16">
                Pagan: El destino de Roanoke
              </div>
              <div className="flex flex-row p-4 justify-between items-center">
                <div className="font-bold text-lg">7,00 €</div>
                <div className="text-sm line-through">19,99 €</div>
                <div className="bg-red-500 p-1 rounded-lg text-white text-sm">
                  -64%
                </div>
              </div>
              <Button className="hidden group-hover:block">Ver más</Button>
            </div>
          </div>
        </div>
        {/** End box */}
        {/** Start box */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 items-center p-4">
          <h2 className="text-xl py-2 px-4 bg-orange-500 text-white font-bold rounded-lg">
            Otras Novedades
          </h2>
          <div className="flex flex-row gap-2 rounded-lg p-4 bg-orange-500">
            <div className="w-1/2 flex flex-col gap-4 bg-white rounded-lg p-4 group h-[450px]">
              <img
                src="/topsales/lorcana-sobre-1-ursula-s-return-ingles.jpg"
                alt=""
              />
              <div className="text-center text-base font-bold h-16">
                Lorcana: Sobre Ursula's Return
              </div>
              <div className="flex flex-row p-4 justify-between items-center">
                <div className="font-bold text-lg">8,00 €</div>
                <div className="text-sm line-through">19,95 €</div>
                <div className="bg-red-500 p-1 rounded-lg text-white text-sm">
                  -59%
                </div>
              </div>
              <Button className="hidden group-hover:block">Ver más</Button>
            </div>
            <div className="w-1/2 flex flex-col gap-4 bg-white rounded-lg p-4 group h-[450px]">
              <img src="/topsales/kid-buu.jpg" alt="" />
              <div className="text-center text-base font-bold h-16">
                Kid Buu
              </div>
              <div className="flex flex-row p-4 justify-between items-center">
                <div className="font-bold text-lg">7,00 €</div>
                <div className="text-sm line-through">19,99 €</div>
                <div className="bg-red-500 p-1 rounded-lg text-white text-sm">
                  -64%
                </div>
              </div>
              <Button className="hidden group-hover:block">Ver más</Button>
            </div>
          </div>
        </div>
        {/** End box */}
      </div>
    </div>
  );
};

export default TopSales;
