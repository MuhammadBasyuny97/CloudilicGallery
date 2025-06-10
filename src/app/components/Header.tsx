"use client";

import React from "react";
import SearchBar from "./SearchBar";
import { BriefcaseBusiness } from "lucide-react";
import Icons from "./Icons";

const Header = () => {
  return (
    <header className="flex flex-col gap-2 p-4 md:flex-row justify-between items-center">
      <div className="font-bold text-xl flex  justify-center gap-1 ">
        <div className="w-8 h-8 bg-green-700 rounded-lg flex justify-center items-center">
          <BriefcaseBusiness className="rounded-b-sm text-white" />
        </div>
        <span>Logo Place</span>
      </div>
      <div className="md:w-1/3">
        <SearchBar />
      </div>

      <Icons />
    </header>
  );
};

export default Header;
