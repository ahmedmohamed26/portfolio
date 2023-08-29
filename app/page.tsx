"use client";

import Image from "next/image";
import Link from "next/link";
import { CopyIcon, MarkerIcon, PhoneIcon } from "../public/svgs";

export default function Home() {
  const copylink = (entryText: any) => {
    navigator.clipboard.writeText(entryText);
  };

  return (
    <section className="wrapper">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl  main-color mb-5">About Me</h1>

        {/* <h2 className="text-white	text-xs tracking-[.05em] relative bg-green-500 py-1 px-2 rounded-full font-PoppinsRegular">
          AVAILABLE FOR WORK
        </h2> */}
      </div>
      <div className="profile-details ">
        <div className="info flex justify-between items-top gap-6    lg:flex-row   max-sm:flex-col md:flex-col 	">
          <Image
            width={300}
            height={300}
            src="/images/profile-image.jpg"
            alt="profile-image"
            className="rounded-lg h-60"
          />
          <div>
            <p className=" font-PoppinsRegular light-gray-color ">
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
        <div className="bg-[#f6f8fa] p-4 mt-8 rounded-md">
          <h3 className="main-color">Contact Me</h3>
          <ul className="mt-5 gap-3 flex flex-col	font-PoppinsRegular">
            <li className="flex items-center">
              <MarkerIcon className="text-[#4f535f] bg-white p-2 rounded-full w-8 h-8 drop-shadow-md border-zinc-600 " />
              <span className="mx-3 font-PoppinsRegular light-gray-color ">
                Cairo , Egypt
              </span>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="  text-[#4f535f] bg-white p-2 rounded-full w-8 h-8 drop-shadow-md border-zinc-600 " />
              <Link href={`tel:${+201124269532}`}>
                {" "}
                <span className="mx-3 font-PoppinsRegular light-gray-color ">
                  +20 112 4269 532
                </span>
              </Link>
            </li>
            <li className="flex items-center mt-8">
              <button
                onClick={() => copylink("ahmed.m.moneem@gmail.com")}
                className="flex items-center px-3 py-3 rounded-md drop-shadow-md bg-black"
              >
                <CopyIcon className="text-white" />
                <span className="text-white mx-2 text-sm font-PoppinsRegular">
                  Copy Email
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
