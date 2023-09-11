"use client";

import Image from "next/image";
import Link from "next/link";
import { CopyIcon, MarkerIcon, PhoneIcon, DownloadIcon } from "../public/svgs";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState<boolean>(false);
  const copylink = (entryText: any) => {
    navigator.clipboard.writeText(entryText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <section className="wrapper dark:bg-dark-gray">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl main-color font-PoppinsMedium dark:text-light-gray-text">
          About Me
        </h1>
        {
          <h2 className="text-white	text-xs tracking-[.05em] relative bg-green-500 py-1 px-2 rounded-full font-PoppinsRegular">
            AVAILABLE FOR WORK
          </h2>
        }
      </div>
      <div className="profile-details mt-10">
        <div className="info flex justify-between items-top gap-6 lg:flex-row   max-sm:flex-col md:flex-col 	">
          <Image
            width={300}
            height={300}
            src="/images/profile-image.jpg"
            alt="profile-image"
            // style={{ borderRadius: "30% 70% 70% 30% / 30% 38% 62% 70%" }}
            className="rounded-lg  h-60"
          />
          <div>
            <p className=" font-PoppinsRegular light-gray-color text-[17px]">
              Hi, I am Ahmed Mohamed an energetic and enthusiastic frontend web
              developer eager to learn new technologies and build amazing stuff.
              I'm 30 years old, up I om enjoying building elegant and
              professional web pages in a modern way. I have developed my skills
              in HTML, CSS, javascript, Angular, Reactjs, Nodejs (nest), and
              other skills to help me fulfill high qualifications and Finished
              Military Service in Mar 2017.
            </p>
            <p className="font-PoppinsRegular light-gray-color mt-9">
              Currently Working At{" "}
              <a
                href="https://www.afaqy.com/"
                target="_blank"
                className="text-green-700 font-bold"
              >
                AFAQY
              </a>
            </p>
          </div>
        </div>
        <div className="bg-[#f6f8fa] p-4 mt-8 rounded-md dark:bg-soft-gray">
          <h3 className="main-color font-PoppinsMedium dark:text-light-gray-text">
            Contact Me
          </h3>
          <ul className="mt-5 gap-3 flex flex-col	font-PoppinsRegular">
            <li className="flex items-center">
              <MarkerIcon className="text-[#4f535f] bg-white p-2 rounded-full w-8 h-8 drop-shadow-md border-zinc-600 dark:bg-soft-gray dark:border-gray-600 dark:border-[1px] dark:text-white" />
              <span className="mx-3 font-PoppinsRegular light-gray-color dark:text-light-gray-text dark:text-white">
                Cairo , Egypt
              </span>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="  text-[#4f535f] bg-white p-2 rounded-full w-8 h-8 drop-shadow-md border-zinc-600 dark:bg-soft-gray dark:border-gray-600 dark:border-[1px] dark:text-white" />
              <Link href={`tel:${+201124269532}`}>
                {` `}
                <span className="mx-3 font-PoppinsRegular light-gray-color dark:text-light-gray-text dark:text-white">
                  +20 112 4269 532
                </span>
              </Link>
            </li>
          </ul>
          <div className="flex mt-5 gap-5">
            <button
              onClick={() => copylink("ahmed.m.moneem@gmail.com")}
              className="flex items-center w-[130px] px-3 py-3 rounded-md drop-shadow-md bg-black"
            >
              <CopyIcon className="text-white" />
              <span className="text-white mx-2 text-sm font-PoppinsRegular">
                {!copied ? "Copy Email" : "Copied"}
              </span>
            </button>
            <Link
              href="/IAhmedMohamed.pdf"
              target="_blank"
              download
              className="flex items-center  w-[150px]  px-3 py-3 rounded-md drop-shadow-md bg-black hover:shadow-inner"
            >
              <DownloadIcon className="text-white" />
              <span className="text-white mx-2 text-sm font-PoppinsRegular">
                Download CV
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
