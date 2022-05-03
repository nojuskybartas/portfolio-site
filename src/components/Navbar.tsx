import React, { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useTheme } from "next-themes";
import { motion, useAnimation } from "framer-motion";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: "0%" }}
      animate={{
        opacity: "100%",
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 270, 360],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        transition: {
          delay: 2.3,
        },
      }}
      className="sticky top-0 right-0 left-full p-5 w-fit h-fit z-50"
    >
      <div className="w-fit h-full border-solid border-2 border-gray-500 dark:bg-purple-800 p-3 md:px-4 rounded-2xl flex space-x-2">
        <NavItem
          icon={faMoon}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </motion.nav>
  );
}

function NavItem({
  icon,
  onClick,
}: {
  icon: IconDefinition;
  onClick?: Function;
}) {
  const controls = useAnimation();

  const handleClick = () => {
    controls.start({
      rotate: [90, 180, 270, 360],
      transition: { duration: 0.3 },
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={controls}
      onClickCapture={handleClick}
      className="w-fit h-full flex place-items-center cursor-pointer"
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <FontAwesomeIcon icon={icon} className="w-8 h-8" />
    </motion.div>
  );
}
