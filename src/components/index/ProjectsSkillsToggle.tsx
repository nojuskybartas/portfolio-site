import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

function ProjectsSkillsToggle() {
  const [state, setState] = useState("skills");

  return (
    <div className="w-4/5 max-w-md h-16 flex border-4 border-solid border-gray-400 dark:border-gray-700 rounded-xl space-x-1 p-1 z-0">
      <ToggleItem
        name="Skills"
        stateName="skills"
        currentState={state}
        onClick={() => setState("skills")}
      />
      <ToggleItem
        name="Projects"
        stateName="projects"
        currentState={state}
        onClick={() => setState("projects")}
      />
    </div>
  );
}

export default ProjectsSkillsToggle;

function ToggleItem({
  name,
  stateName,
  currentState,
  onClick,
}: {
  name: string;
  stateName: string;
  currentState: string;
  onClick: () => void;
}) {
  const { theme } = useTheme();

  return (
    <motion.div
      whileHover={{
        paddingLeft: "10%",
        paddingRight: "10%",
        borderRadius: "4px",
      }}
      whileTap={{
        borderRadius: "10px",
      }}
      animate={
        currentState === stateName
          ? theme === "dark"
            ? {
                backgroundColor: "#5221A5",
                paddingLeft: "8%",
                paddingRight: "8%",
              }
            : {
                backgroundColor: "#787c81",
                paddingLeft: "8%",
                paddingRight: "8%",
              }
          : theme === "dark"
          ? { backgroundColor: "#AC94DA" }
          : { backgroundColor: "#d2d7df" }
      }
      transition={{
        backgroundColor: {
          duration: 0.3,
          type: "tween",
        },
      }}
      className={`flex-1 h-full cursor-pointer text-xl font-medium flex justify-center items-center rounded-lg`}
      onClick={onClick}
    >
      {name}
    </motion.div>
  );
}
