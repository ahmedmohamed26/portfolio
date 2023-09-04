"use client";
import React, { useEffect, useState } from "react";

export default function CompanyDetails(props: any) {
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
  let [itemCompany, setItemCompany] = useState<any>({});
  useEffect(() => {
    let x: any = experienceList.find((item) => item.url === props.params.name);
    setItemCompany(x);
  }, []);
  return (
    <section className="bg-white p-2 mt-8 rounded-md dark:bg-dark-gray">
      <div className="info bg-[#f6f8fa] p-4 rounded-md dark:bg-soft-gray">
        <ul>
          <li className="flex gap-5">
            <h6>Company</h6>
            <h6> {itemCompany.companyName}</h6>
          </li>
        </ul>
      </div>
      {/* <div>{props.params.name}</div> */}
    </section>
  );
}
