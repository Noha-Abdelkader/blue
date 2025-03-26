"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { CgProfile } from "react-icons/cg";


export default function Navbar() {

  const pathname = usePathname();
  function setColor(){
  switch(pathname ){
    case '/leader':
      return  'from-main to-transparent'
      default:
        return "from-main-900 to-main-800";
  }
  }

  return (
    <nav
      className={`w-full px-2 sm:px-10 py-2 sm:py-3 h-full bg-gradient-to-b  flex items-center justify-between ${setColor()}`}
    >
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width={100}
        height={0}
        loading="lazy"
        priority={false}
      />
      <CgProfile className="text-white text-2xl" />
    </nav>
  );
}
