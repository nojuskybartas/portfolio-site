import React from "react";
import { motion } from "framer-motion";
import { languages, technologies } from "../../assets/icons";

interface SkillsProps {
  visible: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ visible }) => (
  <motion.div
    // initial={{ x: "-70%", opacity: "0%" }}
    // animate={
    //   visible ? { x: "0%", opacity: "100%" } : { x: "-70%", opacity: "0%" }
    // }
    transition={{
      opacity: {
        duration: 0.2,
      },
      default: {
        type: "spring",
      },
      staggerChildren: 2.2,
    }}
    className={`w-full max-w-lg h-fit flex flex-wrap gap-3 items-center justify-center`}
  >
    {languages.map((language) => (
      <motion.img
        animate={
          visible ? { x: "0%", opacity: "100%" } : { x: "-70%", opacity: "0%" }
        }
        className="w-24 h-24 dark:drop-shadow-purple dark:hover:drop-shadow-purple-accent hover:drop-shadow-lg"
        src={language.src}
      />
    ))}
    {technologies.map((technology) => (
      <img
        className="w-24 h-24 dark:drop-shadow-purple dark:hover:drop-shadow-purple-accent hover:drop-shadow-lg"
        src={technology.src}
      />
    ))}
  </motion.div>
);
