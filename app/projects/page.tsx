import React from "react";
import projectsList from "../../public/projectsList.json";
import sideProjectsList from "../../public/sideProjectsList.json";

import { ArrowRightIcon } from "@/public/svgs";
import Link from "next/link";

function Projects() {
  return (
    <section className="wrapper dark:bg-dark-gray">
      <div className=" ">
        <h1 className="text-4xl  main-color font-PoppinsMedium mb-5 dark:text-white">
          Projects
        </h1>
        <ul className="mt-5	font-PoppinsRegular">
          {projectsList.map((item: any) => (
            <li className="mt-5 bg-[#f6f8fa] p-4 rounded-md dark:bg-soft-gray flex  justify-between  items-center drop-shadow-sm">
              <div className="flex gap-4  items-center ">
                <div
                  style={{ backgroundColor: item.colorLogo }}
                  className="border-[1px] w-[40px] h-[40px] rounded-full flex justify-center items-center drop-shadow-lg  dark:bg-soft-gray dark:border-gray-600 dark:border-[1px] dark:text-white"
                >
                  <h6 className="text-white">{item.logo}</h6>
                </div>
                <h5>{item.appName}</h5>
              </div>
              <Link
                href={`${item?.website}`}
                target="_blank"
                className="inline-flex  items-center px-3 py-3  rounded-md drop-shadow-md bg-black dark:bg-transparent   dark:border-gray-600 dark:border-[1px]"
              >
                <span className="text-white   text-sm font-PoppinsRegular">
                  Visit Website
                </span>
                <ArrowRightIcon className="text-white ml-2 text-xl" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="text-4xl  main-color font-PoppinsMedium mb-5 dark:text-white">
          Side Projects
        </h1>
        <ul className="mt-5	font-PoppinsRegular">
          {sideProjectsList.map((item: any) => (
            <li className="mt-5 bg-[#f6f8fa] p-4 rounded-md dark:bg-soft-gray flex  justify-between  items-center drop-shadow-sm">
              <div className="flex gap-4  items-center ">
                <div
                  style={{ backgroundColor: item.colorLogo }}
                  className="border-[1px] w-[40px] h-[40px] rounded-full flex justify-center items-center drop-shadow-lg  dark:bg-soft-gray dark:border-gray-600 dark:border-[1px] dark:text-white"
                >
                  <h6 className="text-white">{item.logo}</h6>
                </div>
                <h5>{item.appName}</h5>
              </div>
              <Link
                href={`${item?.website}`}
                target="_blank"
                className="inline-flex  items-center px-3 py-3  rounded-md drop-shadow-md bg-black dark:bg-transparent   dark:border-gray-600 dark:border-[1px]"
              >
                <span className="text-white   text-sm font-PoppinsRegular">
                  Visit Website
                </span>
                <ArrowRightIcon className="text-white ml-2 text-xl" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
