"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categories } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export function CategoryList() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <div className="mb-8">
        <p className="text-primary font-medium text-base xl:text-lg">
          Furniture Categories
        </p>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
            Browse by Category
          </h3>

          <div className="hidden md:flex items-center gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </div>
      <CarouselContent>
        {categories.map((cateogry) => (
          <CarouselItem
            key={cateogry.href}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
          >
            <Link href={cateogry.href}>
              <div className="bg-surface px-8 py-4 xl:px-14 xl:py-8 rounded-lg">
                <Image
                  src={cateogry.iconSrc}
                  alt={cateogry.label}
                  width={40}
                  height={40}
                  className="w-full aspect-square"
                />

                <p className="text-center mt-2 font-bold text-xl">
                  {cateogry.label}
                </p>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex md:hidden items-center justify-center gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
