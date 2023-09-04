import Link from "next/link";
import React from "react";
import { ArrowIcon } from "../../public/svgs";

function Experience() {
  const experienceList = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      companyName: "AFAQY",
      url: "AFAQY",
      logo: "A",
    },
    {
      id: 2,
      title: "Senior Frontend Developer",
      companyName: "El-Dokan Software",
      url: "ElDokan",
      logo: "D",
    },
    {
      id: 3,
      title: "Senior Frontend Developer",
      companyName: "Proemcs",
      url: "Proemcs",
      logo: "P",
    },
    {
      id: 4,
      title: "Frontend Developer",
      companyName: "Valux Apps",
      url: "ValuxApps",
      logo: "V",
    },
  ];
  return (
    <section className="wrapper dark:bg-dark-gray">
      <h1 className="text-4xl  main-color font-PoppinsMedium mb-5 dark:text-white">
        Experience
      </h1>

      <ul className="mt-5	font-PoppinsRegular">
        {experienceList.map((item) => (
          <Link href={`experience/${item.url}`}>
            <li
              className="mt-5 bg-[#f6f8fa] p-4 rounded-md dark:bg-soft-gray flex  justify-between  items-center drop-shadow-sm"
              key={item.id}
            >
              <div className="flex gap-4  items-center ">
                <div className="border-[1px] w-[40px] h-[40px] rounded-full flex justify-center items-center drop-shadow-lg border-zinc-400 dark:bg-soft-gray dark:border-gray-600 dark:border-[1px] dark:text-white">
                  <h6>{item.logo}</h6>
                </div>
                <div>
                  <h5>{item.companyName}</h5>
                  <h5>{item.title}</h5>
                </div>
              </div>
              <ArrowIcon />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
