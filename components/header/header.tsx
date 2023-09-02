"use client"; // This is a client component 👈🏽

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DarkModeButton from "../darkmode/darkMode";

const tabs = [
  { id: "home", label: "Home", icon: "/svgs/home.svg", path: "/" },
  { id: "about", label: "About", icon: "/svgs/about.svg", path: "/about" },
  { id: "skills", label: "Skills", icon: "/svgs/skills.svg", path: "/skills" },
  {
    id: "projects",
    label: "Projects",
    icon: "/svgs/projects.svg",
    path: "/projects",
  },
];
function Header() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="container h-[70px] bg-white shadow-sm flex items-center mt-5 rounded-md justify-between p-5 dark:bg-light-gray">
      <ul className="flex ">
        <li className="flex gap-2 ">
          {tabs.map((tab) => (
            <Link key={tab.id} href={tab.path} className="text-stone-500 ">
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "" : "hover:text-white/60"
                } relative rounded-full px-2.5 py-2.5 bg-white text-white transition`}
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
                <Image src={tab.icon} alt="Home" width={20} height={20} />
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
