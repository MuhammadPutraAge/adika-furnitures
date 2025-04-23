import { Equal, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="container py-10 flex items-center justify-between relative">
      <Link href="/">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={60} height={60} />
          <div className="font-semibold text-xl hidden lg:block">
            <p className="leading-tight">Adika</p>
            <p className="text-primary">Furnitures</p>
          </div>
        </div>
      </Link>

      <div className="bg-surface p-4 rounded-full absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
        <Equal className="text-dark size-6" />
      </div>

      <div className="flex items-center gap-6">
        <SearchBar />
        <ShoppingCart className="size-7" />
        <Link href="/login">
          <User className="size-7" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
