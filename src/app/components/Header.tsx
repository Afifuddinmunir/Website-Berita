import Link from "next/link";
import React from "react";
import Image from "next/image";
import Searchinput from "./Searchinput";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-1">
      <Link href="/">
        <div className="relative w-[200px] h-[50px]">
          <Image
            src="/img/news-u-logo.webp"
            alt="logo"
            fill
            sizes="(max-width:768px) 50vw,(max-width:1200px)"
            className="object-contain"
          />
        </div>
      </Link>
      <Searchinput/>
    </div>
  );
};

export default Header;
