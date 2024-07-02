"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const Gallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [main, setMain] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  const handleClickMain = (newIndex: number) => {
    setMain(newIndex);
    if (api) {
      api.scrollTo(newIndex);
    }
  };

  return (
    <div className="flex flex-col gap-4 md:min-h-[500px]">
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem className="justify-center items-center flex">
            <img
              src="/detail/shatterpoint-clone-force-99-squad-pack-castellano.jpg"
              className="object-cover"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="justify-center items-center flex">
            <img
              src="/detail/shatterpoint-you-have-something-i-want-squad-pack-castellano.jpg"
              className="object-cover"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="justify-center items-center flex">
            <img
              src="/detail/star-wars-shatterpoint-real-quiet-like-squad-pack-castellano.jpg"
              className="object-cover"
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="flex flex-row gap-2 justify-center items-center">
        <div
          className={`hover:scale-110 w-20 cursor-pointer ${
            main === 0 ? "border-2" : ""
          }`}
          onClick={() => handleClickMain(0)}
        >
          <img
            src="/detail/shatterpoint-clone-force-99-squad-pack-castellano.jpg"
            className="object-cover"
            alt=""
          />
        </div>
        <div
          className={`hover:scale-110 w-20 cursor-pointer ${
            main === 1 ? "border-2" : ""
          }`}
          onClick={() => handleClickMain(1)}
        >
          <img
            src="/detail/shatterpoint-you-have-something-i-want-squad-pack-castellano.jpg"
            className="object-cover"
            alt=""
          />
        </div>
        <div
          className={`hover:scale-110 w-20 cursor-pointer ${
            main === 2 ? "border-2" : ""
          }`}
          onClick={() => handleClickMain(2)}
        >
          <img
            src="/detail/star-wars-shatterpoint-real-quiet-like-squad-pack-castellano.jpg"
            className="object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
