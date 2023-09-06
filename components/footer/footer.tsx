import {
  InstgramIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
} from "@/public/svgs";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className="wrapper dark:bg-dark-gray">
      <div className="flex justify-between items-center bg-[#f6f8fa] p-4 rounded-md dark:bg-soft-gray   drop-shadow-sm">
        <h2 className="text-lg main-color font-PoppinsRegular dark:text-light-gray-text">
          Follow Me
        </h2>
        <ul className="flex gap-3">
          <li className="text-[#4f535f] bg-white p-2 rounded-full  drop-shadow-md border-zinc-600 dark:bg-soft-gray dark:border-gray-600 dark:border-[1px] dark:text-white">
            <Link
              href="https://www.linkedin.com/in/iahmedmohamed/"
              target="_blank"
            >
              <LinkedinIcon />
            </Link>
          </li>
          <li className="text-[#4f535f] bg-white p-2 rounded-full  drop-shadow-md border-zinc-600 dark:bg-soft-gray dark:border-gray-600 dark:border-[1px] dark:text-white">
            <Link href="https://github.com/ahmedmohamed26" target="_blank">
              <GithubIcon />
            </Link>
          </li>
          <li className="text-[#4f535f] bg-white p-2 rounded-full  drop-shadow-md border-zinc-600 dark:bg-soft-gray dark:border-gray-600 dark:border-[1px] dark:text-white">
            <Link href="https://twitter.com/Ahmedmoohamed26" target="_blank">
              <TwitterIcon />
            </Link>
          </li>

          <li className="text-[#4f535f] bg-white p-2 rounded-full  drop-shadow-md border-zinc-600 dark:bg-soft-gray dark:border-gray-600 dark:border-[1px] dark:text-white">
            <Link
              href="https://www.instagram.com/ahmed.m.moneem/"
              target="_blank"
            >
              <InstgramIcon />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
