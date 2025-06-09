//"use client";

import React from "react";
import { Mail, BellRing, ShoppingCart } from "lucide-react";

const Icons = () => {
  return (
    <div className="flex justify-between gap-2 items-center">
      <Mail className="cursor-pointer" />
      <BellRing className="cursor-pointer" />
      <ShoppingCart className="cursor-pointer" />
      <img
        src="/freelancer.png"
        alt="profile"
        className="w-10 h-10 cursor-pointer rounded-b-full"
      />
    </div>
  );
};

export default Icons;
