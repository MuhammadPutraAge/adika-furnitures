"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { reviews } from "@/constants";

const ReviewList = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleThumbClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem
            key={review.name}
            className="flex flex-col items-center xl:items-start"
          >
            <div className="bg-background p-2 rounded-full border-2 border-primary w-fit mb-8">
              <Image
                src={review.image}
                alt="Woman"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>

            <h4 className="font-semibold text-2xl md:text-3xl mb-6">{review.name}</h4>
            <p className="text-lg md:text-xl max-w-xl xl:max-w-[90%] text-dark-muted/80 text-center xl:text-left">
              {review.content}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex justify-center xl:justify-start items-center gap-2 mt-8">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleThumbClick(index)}
            className={`w-2 h-2 rounded-full border border-primary cursor-pointer ${
              index + 1 === current ? "bg-primary border" : "bg-surface"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center xl:justify-start items-center gap-2 mt-12 mb-20 xl:mb-0">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ReviewList;
