"use client";

import { Equal, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { navLinks, socialLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="container py-10 flex items-center justify-between relative">
      <Sheet>
        <SheetTrigger>
          <div className="bg-surface p-4 rounded-full cursor-pointer">
            <Equal className="text-dark size-6" />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="pt-24 pb-12">
          <SheetTitle />

          <div className="flex flex-col items-center gap-16 h-full">
            <SheetClose asChild>
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={60}
                  height={60}
                  className="size-18"
                />
              </Link>
            </SheetClose>

            <div className="flex-1 flex flex-col justify-between w-full px-6">
              <div className="flex flex-col items-center gap-8 lg:12">
                <SearchBar className="lg:hidden w-full" />
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={`text-xl hover:text-primary font-medium transition-all duration-300 ${
                        pathname === link.href && "text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild className="w-full">
                  <Link
                    href="/login"
                    className="flex lg:hidden justify-center items-center py-2 rounded-full bg-primary text-white w-full text-lg"
                  >
                    Login
                  </Link>
                </SheetClose>
              </div>

              <div className="flex items-center justify-center gap-4">
                {socialLinks.map(({ href, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-primary transition-all duration-300"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/" className="absolute left-1/2 -translate-x-1/2">
        <Image
          src="/logo.svg"
          alt="logo"
          width={60}
          height={60}
          className="size-12 lg:size-14"
        />
      </Link>

      <div className="flex items-center gap-6">
        <SearchBar className="hidden lg:flex" expandable />
        <ShoppingCart className="size-6" />
        <Link href="/login" className="hidden lg:block">
          <User className="size-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
