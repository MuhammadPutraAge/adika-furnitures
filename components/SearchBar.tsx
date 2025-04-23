"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

const SearchBar = () => {
  const [expandSearch, setExpandSearch] = useState(false);

  const handleSearchClick = () => {
    setExpandSearch((prevValue) => !prevValue);
  };

  return (
    <div
      className={`flex items-center border pl-2 py-1 transition-all duration-300 w-fit ${
        expandSearch ? "border-dark/10 rounded-full" : "border-transparent"
      }`}
    >
      <Search onClick={handleSearchClick} className="size-7 cursor-pointer" />
      <Input
        className={`border-none text-sm origin-right transition-all duration-300 ${
          expandSearch ? "scale-x-100 w-64" : "scale-x-0 opacity-0 w-0 px-0"
        }`}
        placeholder="Explore timeless furniture..."
      />
    </div>
  );
};

export default SearchBar;
