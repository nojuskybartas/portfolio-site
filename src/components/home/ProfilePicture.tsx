import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/profile.png";

export function ProfilePicture() {
  const radius = 100;

  return (
    <div className="w-full h-full flex place-content-center pt-[10vh]">
      <motion.div
        initial={{
          scale: 0.4,
          y: "100%",
          rotate: -720,
          filter: "brightness(80%)",
          opacity: 0,
        }}
        animate={{
          scale: 1,
          y: 0,
          rotate: 0,
          filter: "brightness(100%)",
          opacity: "100%",
          transition: {
            delay: 1,
            rotate: {
              type: "spring",
              damping: 8,
              stiffness: 200,
              duration: 0.5,
            },
          },
        }}
        className="w-60 h-60 z-10 rounded-full relative backgroundGradient p-[8px]"
      >
        <img
          className="w-full h-full object-cover rounded-full drop-shadow-4xl overflow-hidden"
          src={profileImg.src}
          alt="Bordered avatar"
        />
        <div className="absolute w-[90%] h-[90%] rounded-full ring-[6px] ring-white dark:ring-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </div>
  );
}
