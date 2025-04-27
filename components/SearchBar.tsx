"use client";

import { Search } from "lucide-react";
import {
  FormEventHandler,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input } from "./ui/input";
import { useSearchParams } from "next/navigation";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  expandable?: boolean;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const SearchBar = ({ className, expandable = false, onSubmit }: Props) => {
  const [expandSearch, setExpandSearch] = useState(!expandable);
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const searchQuery = searchParams.get("q");

  useEffect(() => {
    if (!searchQuery && inputRef.current) {
      setExpandSearch(!expandable);
      inputRef.current.value = "";
      return;
    }

    if (inputRef.current) {
      setExpandSearch(true);
      inputRef.current.value = searchQuery || "";
    }
  }, [expandable, searchParams, searchQuery]);

  const handleSearchClick = () => {
    if (expandable) {
      setExpandSearch((prevValue) => !prevValue);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    if (onSubmit) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <div
      className={`flex items-center border pl-2 py-1 transition-all duration-300 w-fit ${
        expandSearch ? "border-dark/10 rounded-md" : "border-transparent"
      } ${className}`}
    >
      <div className="w-fit">
        <Search onClick={handleSearchClick} className="size-6 cursor-pointer" />
      </div>
      <form onSubmit={handleSubmit} className="flex-1">
        <Input
          ref={inputRef}
          name="search"
          className={`border-none text-sm origin-right transition-all duration-300 ${
            expandSearch ? "scale-x-100 w-64" : "scale-x-0 opacity-0 w-0 px-0"
          }`}
          tabIndex={-1}
          placeholder="Explore timeless furniture..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
