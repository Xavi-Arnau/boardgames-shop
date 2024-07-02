import { Truck, User, ThumbsUp, Smile } from "lucide-react";

const ConditionsPanel = () => {
  return (
    <div className="w-full">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-center py-10">
        <div className="md:w-1/4 flex flex-col items-center gap-6">
          <div className="rounded-full border-2 border-slate-900 w-32 h-32 flex items-center justify-center hover:text-white hover:bg-slate-900">
            <Truck size={40} />
          </div>
          <div>Envío gratuito a partir de 70€</div>
        </div>
        <div className="md:w-1/4 flex flex-col items-center gap-6">
          <div className="rounded-full border-2 border-slate-900 w-32 h-32 flex items-center justify-center hover:text-white hover:bg-slate-900">
            <User size={40} />
          </div>
          <div>Privacidad del usuario</div>
        </div>
        <div className="md:w-1/4 flex flex-col items-center gap-6">
          <div className="rounded-full border-2 border-slate-900 w-32 h-32 flex items-center justify-center hover:text-white hover:bg-slate-900">
            <ThumbsUp size={40} />
          </div>
          <div>Compra de manera segura</div>
        </div>
        <div className="md:w-1/4 flex flex-col items-center gap-6">
          <div className="rounded-full border-2 border-slate-900 w-32 h-32 flex items-center justify-center hover:text-white hover:bg-slate-900">
            <Smile size={40} />
          </div>
          <div>Clientes satisfechos</div>
        </div>
      </div>

      <div className="w-10/12 mx-auto flex flex-col md:flex-row gap-8 py-10">
        <div className="md:w-1/2 md:pl-60">
          <ul className="flex flex-col gap-4">
            <li className="bg-green-200 py-2 px-4 rounded-lg md:w-96">
              Alicante
            </li>
            <li className="bg-green-200 py-2 px-4 rounded-lg md:w-96">
              Alicante
            </li>
            <li className="bg-green-200 py-2 px-4 rounded-lg md:w-96">
              Alicante
            </li>
            <li className="bg-green-200 py-2 px-4 rounded-lg md:w-96">
              Alicante
            </li>
            <li className="bg-green-200 py-2 px-4 rounded-lg md:w-96">
              Alicante
            </li>
            <li className="bg-green-200 py-2 px-4 rounded-lg md:w-96">
              Alicante
            </li>
            <li className="bg-green-200 py-2 px-4 rounded-lg md:w-96">
              Alicante
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src="/conditions/goblintraderwebmapatiendas2024v2.jpg"
            alt=""
            className="object-cover w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ConditionsPanel;
