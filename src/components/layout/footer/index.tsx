import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <nav className="w-full px-2 sm:px-10 py-2 sm:py-3 h-full bg-gradient-to-t from-main-900 to-main-800 flex md:items-center justify-between flex-col md:flex-row">
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width={100}
        height={0}
        loading="lazy"
        priority={false}
      />
      <span className="text-white text-xs md:text-sm">
        2025 Abbott. All Rights Reserved
      </span>
    </nav>
  );
}
