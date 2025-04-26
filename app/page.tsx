import { CategoryList } from "@/components/CategoryList";
import FurnitureItem from "@/components/FurnitureItem";
import ReasonItem from "@/components/ReasonItem";
import { furnitures, reasons } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

const Headline = ({
  className,
}: {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) => (
  <div className={className}>
    <p className="text-primary font-medium text-base xl:text-lg mb-2">
      Timeless Furnitures
    </p>
    <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-snug mb-4 xl:mb-6">
      Redefining Comfort, One Room at a Time
    </h1>
    <div className="bg-primary hover:bg-primary-hover transition-all duration-300 text-background font-semibold text-sm xl:text-xl rounded-lg w-fit">
      <Link href="/furnitures" className="block py-3 xl:py-4 px-8 xl:px-9">
        Shop Now
      </Link>
    </div>
  </div>
);

const Home = () => {
  return (
    <main className="container">
      {/* HERO SECTION */}
      <section className="mb-20 lg:mb-40 xl:mt-8">
        <Headline className="block xl:hidden mt-4 mb-12" />

        <div className="flex items-center justify-center xl:justify-between bg-surface h-[70vh] max-h-96 xl:max-h-none rounded-2xl xl:px-18">
          <Headline className="hidden xl:block" />
          <Image
            src="/images/hero.svg"
            alt="Armchair"
            width={520}
            height={520}
            className="h-full aspect-square"
          />
        </div>
      </section>

      {/* Category Section */}
      <section className="mb-20 lg:mb-40">
        <CategoryList />
      </section>

      {/* Featured Furnitures Section */}
      <section className="mb-20 lg:mb-40">
        <div className="mb-8">
          <p className="text-primary font-medium text-base xl:text-lg">
            Our Furnitures
          </p>
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
            Explore Our Furnitures
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {furnitures.slice(0, 8).map((furniture) => (
            <FurnitureItem key={furniture.slug} {...furniture} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-16">
          <Link href="/furnitures">
            <div className="bg-primary hover:bg-primary-hover transition-all duration-300 text-background font-semibold text-sm xl:text-xl rounded-lg w-fit py-3 px-8">
              <p className="text-white font-semibold text-lg">View All</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="mb-20 lg:mb-40">
        <div className="mb-12 md:mb-18 text-center">
          <p className="text-primary font-medium text-base xl:text-lg">
            Why Us
          </p>
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
            Why People Choose Us
          </h3>
        </div>

        <div className="flex justify-center flex-wrap gap-8">
          {reasons.map((reason) => (
            <ReasonItem key={reason.title} {...reason} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
