"use client";
import { ArrowRightIcon } from "@/public/svgs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CompanyDetails(props: any) {
  const experienceList = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      companyName: "AFAQY",
      url: "AFAQY",
      website: "https://www.afaqy.com/",
      logo: "A",
      year: "Des 2021 - Present",
      projectType: "Live Tracking",
      responsibility: [
        "Make opp live tracking to help track the vehicles on your system using leaflet map",
        "create automatic systems to locate the car that you do some of the work assigned to it according to the business",
        " Unit testing with (Karma or jest)",
        "Create projects with angular +10 or Reactjs",
        "Mode recommendations for new technology integration bosed on suitability and alignment to business goals.",
        "Responsibility For Restful APIs",
        "Performance And Usability Testing",
      ],
    },
    {
      id: 2,
      title: "Senior Frontend Developer",
      companyName: "El-Dokan Software",
      url: "ElDokan",
      website: "https://el-dokan.com/cgi-sys/suspendedpage.cgi",
      logo: "D",
      year: "Feb 2021 - Nov 2021",
    },
    {
      id: 3,
      title: "Senior Frontend Developer",
      companyName: "Proemcs",
      website: "https://www.proemcs.com/",
      url: "Proemcs",
      logo: "P",
      year: "May 2019 - Jan 2021",
    },
    {
      id: 4,
      title: "Frontend Developer",
      companyName: "Valux Apps",
      url: "ValuxApps",
      website: "https://www.valuxapps.com/ar",
      logo: "V",
      year: "Jan 2018 - April 2019",
    },
  ];
  let [itemCompany, setItemCompany] = useState<any>({});
  useEffect(() => {
    let x: any = experienceList.find((item) => item.url === props.params.name);
    setItemCompany(x);
  }, []);
  return (
    <section className="bg-white p-4   rounded-md dark:bg-dark-gray">
      <div className="info bg-[#f6f8fa] p-4 rounded-md dark:bg-soft-gray">
        <ul className="text-[15px]">
          <li className="flex mb-3">
            <h6 className="light-gray-color w-[100px] font-PoppinsMedium dark:text-light-gray-text">
              Company
            </h6>
            <h6 className="font-PoppinsRegular"> {itemCompany.companyName}</h6>
          </li>
          <li className="flex mb-3">
            <h6 className=" light-gray-color w-[100px] font-PoppinsMedium dark:text-light-gray-text">
              Position
            </h6>
            <h6 className="font-PoppinsRegular"> {itemCompany.title}</h6>
          </li>
          <li className="flex mb-3">
            <h6 className=" light-gray-color w-[100px] font-PoppinsMedium dark:text-light-gray-text">
              Project Type
            </h6>
            <h6 className="font-PoppinsRegular"> {itemCompany.projectType}</h6>
          </li>
          <li className="flex">
            <h6 className="light-gray-color w-[100px] font-PoppinsMedium dark:text-light-gray-text">
              Year
            </h6>
            <h6 className="font-PoppinsRegular"> {itemCompany.year}</h6>
          </li>
        </ul>
        <Link
          href={`${itemCompany?.website}`}
          target="_blank"
          className="inline-flex  items-center px-3 py-3 mt-3 rounded-md drop-shadow-md bg-black dark:bg-transparent   dark:border-gray-600 dark:border-[1px]"
        >
          <span className="text-white   text-sm font-PoppinsRegular">
            Visit Website
          </span>
          <ArrowRightIcon className="text-white ml-2 text-xl" />
        </Link>
      </div>

      <ul className="p-4 list-disc">
        {itemCompany.responsibility?.map((item: any, index: number) => (
          <li
            key={index}
            className=" light-gray-color font-PoppinsRegular mb-2 text-sm dark:text-light-gray-text "
          >
            <p>{item}</p>
          </li>
        ))}
      </ul>

      {/* <div>{props.params.name}</div> */}
    </section>
  );
}
