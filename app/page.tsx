import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

const Headline = ({
  className,
}: {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) => (
  <div className={className}>
    <p className="text-primary font-medium text-base lg:text-lg mb-2">
      Timeless Furnitures
    </p>
    <h1 className="font-bold text-2xl lg:text-4xl leading-snug mb-4 lg:mb-6">
      Redefining Comfort, One Room at a Time
    </h1>
    <div className="bg-primary hover:bg-primary-hover transition-all duration-300 text-background font-semibold text-sm lg:text-xl rounded-lg w-fit">
      <Link href="/furnitures" className="block py-3 lg:py-4 px-8 lg:px-9">
        Shop Now
      </Link>
    </div>
  </div>
);

const Home = () => {
  return (
    <main className="container">
      {/* HERO SECTION */}
      <section className="mb-20 lg:mt-8">
        <Headline className="block lg:hidden mt-4 mb-12" />

        <div className="flex items-center justify-center lg:justify-between bg-surface h-[70vh] max-h-96 lg:max-h-none rounded-2xl lg:px-18">
          <Headline className="hidden lg:block" />
          <Image
            src="/images/hero.svg"
            alt="Armchair"
            width={520}
            height={520}
            className="size-64 lg:size-[520px]"
          />
        </div>
      </section>

      {/* Category Section */}
    </main>
  );
};

export default Home;
