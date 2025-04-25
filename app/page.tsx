import { CategoryList } from "@/components/CategoryList";
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
      <section className="mb-20 xl:mt-8">
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
      <section className="mb-20">
        <CategoryList />
      </section>
    </main>
  );
};

export default Home;
