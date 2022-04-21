import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/profile.png";

export function ProfilePicture() {
  const radius = 100;

  return (
    <div className="w-full h-full flex place-content-center pt-[20vh]">
      <motion.div
        initial={{
          scale: 0.4,
          y: "100%",
          rotate: -420,
          filter: "brightness(80%)",
          opacity: 0,
        }}
        animate={{
          scale: 0.9,
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
          transitionEnd: {
            width: "fit-content",
          },
        }}
        className="w-fit h-fit relative p-2 z-10"
      >
        <svg
          className="overflow-visible"
          height={radius * 2}
          width={radius * 2}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <motion.linearGradient
              id="profilePictureGradient"
              initial={{
                gradientTransform: `rotate(-270)`,
              }}
              animate={{
                gradientTransform: `rotate(270)`,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                duration: 3,
              }}
            >
              <stop offset="25%" stopColor="#5221A5" />
              <stop offset="75%" stopColor="#AC94DA" />
            </motion.linearGradient>
          </defs>
          <circle
            fill="url(#profilePictureGradient)"
            cx={radius}
            cy={radius}
            r={radius}
          />
          <circle
            cx={radius}
            cy={radius}
            r={radius * 1.1}
            stroke="url(#profilePictureGradient)"
            strokeWidth="7"
            fill="none"
          />
        </svg>
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 w-full h-full object-cover rounded-full drop-shadow-4xl overflow-hidden"
          src={profileImg.src}
          alt="Bordered avatar"
        />
      </motion.div>
    </div>
  );
}
