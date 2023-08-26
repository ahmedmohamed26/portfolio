import { HomeIcon } from "../../public/svgs";
import { AboutIcon } from "../../public/svgs";
import { SkillsIcon } from "../../public/svgs";
import { ProjectsIcon } from "../../public/svgs";

import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="container h-[70px] bg-white shadow-sm flex items-center mt-5 rounded-md">
      <ul className="flex gap-8 p-5">
        <li>
          <Link href="/">
            <HomeIcon className="text-stone-500 text-[25px]" />
          </Link>
        </li>
        <li>
          <Link href="/about">
            <AboutIcon className="text-stone-500 text-[25px]" />
          </Link>
        </li>
        <li>
          <Link href="/skills">
            <SkillsIcon className="text-stone-500 text-[25px]" />
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <ProjectsIcon className="text-stone-500 text-[25px]" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
