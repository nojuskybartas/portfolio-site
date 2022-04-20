import React, { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-5 right-0 w-full h-14 flex justify-end pr-5 z-50">
      <div className="w-fit h-full border-solid border-2 border-gray-500 dark:bg-purple-800 p-3 md:p-6 rounded-2xl flex space-x-2">
        <NavItem
          icon={faMoon}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </nav>
  );
}

export default Navbar;

function NavItem({
  icon,
  onClick,
}: {
  icon: IconDefinition;
  onClick?: Function;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-fit h-full flex place-items-center cursor-pointer"
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <FontAwesomeIcon icon={icon} className="w-8 h-8" />
    </motion.div>
  );
}
