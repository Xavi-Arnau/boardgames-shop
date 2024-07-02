import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="bg-black w-full">
      <div className="md:w-10/12 mx-auto flex flex-col md:flex-row py-8 px-8">
        <div className="md:w-1/4">
          <h3 className="text-green-700 font-bold text-2xl uppercase py-4">
            Goblintrader
          </h3>
          <ul className="text-slate-400">
            <li>Quiénes somos</li>
            <li>Condiciones</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h3 className="text-green-700 font-bold text-2xl uppercase py-4">
            Descubre más
          </h3>
          <ul className="text-slate-400">
            <li>Preguntas frecuentes</li>
            <li>Patrocinio</li>
            <li>Cookies y protección de datos</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h3 className="text-green-700 font-bold text-2xl uppercase py-4">
            Mi cuenta
          </h3>
          <ul className="text-slate-400">
            <li>Mi cuenta</li>
            <li>Mis pedidos</li>
            <li>Mis direcciones</li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <div className="flex flex-row gap-6 text-slate-400">
            <Link href="/">
              <Instagram />
            </Link>
            <Link href="/">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
      <Separator />
      <div className="md:w-10/12 mx-auto flex flex-col items-center">
        <div className="flex flex-row gap-4 items-center py-6">
          <img src="/payment/paymentvisa.png" alt="" className="object-cover" />
          <img
            src="/payment/paymentpaypal.png"
            alt=""
            className="object-cover"
          />
          <img
            src="/payment/paymentmastercard.png"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="text-slate-400 py-4">
          © 2024 GoblinTrader S.L. Todos los derechos reservados
        </div>
      </div>
    </div>
  );
};

export default Footer;
