import { HomeIcon } from "@/public/svgs";
import { AboutIcon } from "@/public/svgs";
import React from "react";

function Header() {
  return (
    <div className="container h-[70px] bg-white shadow-sm flex items-center mt-5 rounded-md">
      <ul className="flex gap-8 p-5">
        <li>
          <HomeIcon className="text-stone-500 text-[25px]" />
        </li>
        <li>
          <AboutIcon className="text-stone-500 text-[25px]" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
