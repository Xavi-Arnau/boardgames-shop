"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const CarouselPanel = () => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        duration: 25,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="flex justify-center">
          <Image
            src="/carousel/anuncionuevatiendaportadagranadaabiertos.png"
            alt="Nueva tienda"
            width={800}
            height={375}
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <Image
            src="/carousel/hc.jpg"
            alt="Hail Caesar"
            width={800}
            height={375}
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center">
          <Image
            src="/carousel/vforvictoryportada-2.png"
            alt="V for Victory"
            width={800}
            height={375}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex hover:scale-125 rounded-none md:ml-20 opacity-60 hover:opacity-100" />
      <CarouselNext className="hidden md:flex hover:scale-125 rounded-none md:mr-20 opacity-60 hover:opacity-100" />
    </Carousel>
  );
};

export default CarouselPanel;
