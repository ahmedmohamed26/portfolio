"use client";
import { motion } from "framer-motion";
export default function Skills() {
  const skills: string[] = [
    "React",
    "Angular",
    "Next js",
    "Redux",
    "Ngrx",
    "Micro Frontend",
    "JS",
    "Ts",
    "Rxjs",
    "Webpack",
    "StoryBook",
    "React Native",
    "Ionic",
    "Angular Universal",
    "Styled Component",
    "Vite (basics)",
    "Node js (basics)",
    "Nest js (basics)",
    "MongoDB",
    "Express",
    "Git",
    "React Query",
    "Framer Motion",
    "Jest",
    "Jest",
    "Karma",
    "MUI",
    "Prime Ng",
    "Semantic HTML",
    "SEO",
    "Web Performance",
    "Html",
    "Css",
    "Sass",
  ];

  const boxVariant = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      delay: 0.3,
      opacity: 1,
      staggerChildren: 0.5,
    },
  };
  return (
    <section className="wrapper dark:bg-dark-gray">
      <div className=" ">
        <h1 className="text-4xl  main-color font-PoppinsMedium mb-5 dark:text-white">
          Skills
        </h1>
        <motion.ul
          className="flex flex-wrap gap-6 items-center"
          variants={boxVariant}
          animate="visible"
          initial="hidden"
        >
          {skills.map((skill, index) => (
            <li
              key={index}
              className=" bg-stone-200 white/10 py-3 px-5 rounded-2xl dark:bg-transparent   dark:border-gray-600 dark:border-[1px]"
            >
              <h6 className="font-PoppinsRegular">{skill}</h6>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
