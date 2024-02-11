"use client";

import { UserButton } from "@clerk/nextjs";

import { SearchInput } from "./search-input";

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>

      <UserButton />
    </div>
  );
};
