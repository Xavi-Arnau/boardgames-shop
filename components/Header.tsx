import Navbar from "./Navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-green-700 p-2 text-white">
        <div className="w-10/12 mx-auto flex flex-row gap-5 justify-between">
          <div className="flex flex-row justify-between gap-8 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm">
                TELÉFONOS
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Alicante: 966 32 26 27</DropdownMenuItem>
                <DropdownMenuItem>Alicante: 966 32 26 27</DropdownMenuItem>
                <DropdownMenuItem>Alicante: 966 32 26 27</DropdownMenuItem>
                <DropdownMenuItem>Alicante: 966 32 26 27</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm">
                NUESTRAS TIENDAS
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Alicante</DropdownMenuItem>
                <DropdownMenuItem>Alicante</DropdownMenuItem>
                <DropdownMenuItem>Alicante</DropdownMenuItem>
                <DropdownMenuItem>Alicante</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="text-sm">TÉRMINOS Y CONDICIONES</div>
          </div>
          <div>
            ¡Envío gratuito a partir de 70€! (Ver condiciones) o recoge gratis
            en NUESTRAS TIENDAS
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <Instagram />
            </Link>
            <Link href="/">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
      <Navbar />;
    </div>
  );
};

export default Header;
