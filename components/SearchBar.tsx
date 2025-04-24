"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { HTMLAttributes, useState } from "react";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  expandable?: boolean;
}

const SearchBar = ({ className, expandable = false }: Props) => {
  const [expandSearch, setExpandSearch] = useState(!expandable);

  const handleSearchClick = () => {
    if (expandable) {
      setExpandSearch((prevValue) => !prevValue);
    }
  };

  return (
    <div
      className={`flex items-center border pl-2 py-1 transition-all duration-300 w-fit ${
        expandSearch ? "border-dark/10 rounded-md" : "border-transparent"
      } ${className}`}
    >
      <Search onClick={handleSearchClick} className="size-6 cursor-pointer" />
      <Input
        className={`border-none text-sm origin-right transition-all duration-300 ${
          expandSearch
            ? "scale-x-100 w-64"
            : "scale-x-0 opacity-0 w-0 px-0"
        }`}
        tabIndex={-1}
        placeholder="Explore timeless furniture..."
      />
    </div>
  );
};

export default SearchBar;
