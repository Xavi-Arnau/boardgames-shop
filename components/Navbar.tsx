"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import BrandsMenu from "./menu/BrandsMenu";
import FantasyMenu from "./menu/FantasyMenu";
import ScifiMenu from "./menu/ScifiMenu";
import HistoricalMenu from "./menu/HistoricalMenu";
import BoardgamesMenu from "./menu/BoardgamesMenu";

const Navbar = () => {
  return (
    <div className="bg-black text-white flex px-2 md:justify-center">
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-black text-white uppercase">
              Marcas
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <BrandsMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-black text-white uppercase">
              Fantasía
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <FantasyMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-black text-white uppercase">
              Sci-fi
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ScifiMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-black text-white uppercase">
              Històrico
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <HistoricalMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-black text-white uppercase">
              Juegos de mesa
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <BoardgamesMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Drawer direction="left">
        <DrawerTrigger className="md:hidden">
          <Menu />
        </DrawerTrigger>
        <DrawerContent className="h-full w-2/3 rounded-none">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>
              <ul>
                <li>Marcas</li>
                <li>Fantasía</li>
                <li>Sci-fi</li>
                <li>Històrico</li>
                <li>Juegos de Mesa</li>
              </ul>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
