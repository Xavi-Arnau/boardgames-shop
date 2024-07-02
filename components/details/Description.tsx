"use client";

import { Instagram, Facebook, Twitter, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";

const Description = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col gap-4 min-h-[50vh]">
      <h1 className="text-green-700 text-3xl font-bold p-4">
        Shatterpoint Never Tell Me the Odds Mission Pack (Castellano)
      </h1>
      <h2 className="text-slate-500 font-bold p-4">ASM-SWP48</h2>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-end">
          <div className="text-3xl text-green-700 font-bold">18,00€</div>
          <div className="flex flex-row gap-2">
            (impuestos inc.)
            <span className="line-through text-slate-400">19,00€</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center md:items-end">
          <div>Compartir</div>
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex flex-row items-center">
          <Button onClick={() => setQuantity(quantity - 1 || 1)}>-</Button>
          <div className="p-4 w-14 text-center">{quantity}</div>
          <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
        </div>
        <Button className="flex gap-4">
          <ShoppingCart />
          Añadir al carrito
        </Button>
      </div>

      <div>
        <Tabs defaultValue="description" className="p-4">
          <TabsList className="justify-center flex bg-white">
            <TabsTrigger
              value="description"
              className=" data-[state=active]:text-white data-[state=active]:bg-green-700"
            >
              Descripción
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className="data-[state=active]:text-white data-[state=active]:bg-green-700"
            >
              Detalles del producto
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <div className="flex flex-col gap-4 border-2 border-green-700 p-4 rounded-lg bg-green-100">
              <p>
                ¡Puede que las probabilidades de éxito navegando en un campo de
                asteroides sean de 1 contra 3.750, pero seguro que hay muchas
                más de que los jugadores de Star WarsTM: Shatterpoint estén
                ansiosos por probar nuevas misiones!
              </p>
              <p>
                El pack de expansión No me hables de probabilidades añade un
                nuevo Set de Misión a tus partidas que no solo ofrece nuevas
                posiciones de los objetivos, sino que también plantea nuevos
                desafíos tácticos con reglas especiales de misión y nueve cartas
                de Confrontación que proporcionan nuevas oportunidades para
                obtener puntos de victoria durante la partida.
              </p>
              <h3>Contenido</h3>
              <p>10 cartas de misión, 1 hoja de fichas troqueladas</p>
            </div>
          </TabsContent>
          <TabsContent value="details">
            <div className="flex flex-col gap-4 border-2 border-green-700 p-4 rounded-lg bg-green-100">
              <h3>Ficha técnica</h3>
              <div className="flex flex-row justify-between">
                <div className="font-bold">Familia De Producto</div>
                <div>Juego de Mesa SW</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Description;
