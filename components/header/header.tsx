"use client"; // This is a client component 👈🏽

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import DarkModeButton from "../darkmode/darkMode";
import { ExperienceIcon, HomeIcon, SkillsIcon } from "../../public/svgs";
import { usePathname } from "next/navigation";

const tabs = [
  {
    id: "",
    label: "Home",
    icon: <HomeIcon className=" text-lg text-[#4f535f] dark:text-white" />,
    path: "/",
  },

  {
    id: "skills",
    label: "Skills",
    icon: <SkillsIcon className="text-lg text-[#4f535f] dark:text-white" />,
    path: "/skills",
  },
  {
    id: "experience",
    label: "Experience",
    icon: <ExperienceIcon className="text-lg text-[#4f535f] dark:text-white" />,
    path: "/experience",
  },
  // {
  //   id: "projects",
  //   label: "Projects",
  //   icon: <experienceIcon className="text-lg text-[#4f535f] dark:text-white" />,
  //   path: "/projects",
  // },
];
function Header() {
  const pathName = usePathname();
  let [activeTab, setActiveTab] = useState(pathName.replace("/", ""));
  return (
    <div className="container h-[70px] bg-white shadow-sm flex items-center my-5 rounded-md justify-between p-5 dark:bg-dark-gray sticky top-5">
      <ul className="flex ">
        <li className="flex gap-2 ">
          {tabs.map((tab) => (
            <Link key={tab.id} href={tab.path} className="text-stone-500 ">
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "" : "hover:text-white/60"
                } relative rounded-full px-2.5 py-2.5 bg-white text-white transition dark:bg-soft-gray dark:border-gray-600`}
                title={tab.label}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 mix-blend-difference bg-white/10"
                    style={{ borderRadius: 9999 }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                {tab.icon}{" "}
              </button>
            </Link>
          ))}
        </li>
      </ul>

      <DarkModeButton />
    </div>
  );
}

export default Header;
