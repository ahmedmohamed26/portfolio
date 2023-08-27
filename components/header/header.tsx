"use client"; // This is a client component 👈🏽

import { motion } from "framer-motion";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
let tabs = [
  { id: "home", label: "Home", icon: "/svgs/home.svg" },
  { id: "about", label: "About", icon: "/svgs/about.svg" },
  { id: "skills", label: "Skills", icon: "/svgs/skills.svg" },
  { id: "projects", label: "Projects", icon: "/svgs/projects.svg" },
];
function Header() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="container h-[70px] bg-white shadow-sm flex items-center mt-5 rounded-md">
      <ul className="flex  p-5">
        <li className="flex gap-2 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/60"
              } relative rounded-full px-2 py-2  text-sm font-medium bg-white text-white outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Image
                src={tab.icon}
                alt="Home"
                width={20}
                height={20}
                className="bg-white/60"
              />
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Header;
