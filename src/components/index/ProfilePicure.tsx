import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/profile.png";

function ProfilePicure() {
  const radius = 100;

  return (
    <div className="w-full h-fit flex place-content-center pt-[20vh]">
      <motion.div
        initial={{
          scale: 3,
          y: "100%",
          rotate: -720,
          filter: "brightness(80%)",
        }}
        animate={{
          scale: 1.01,
          y: 0,
          rotate: 0,
          filter: "brightness(100%)",
        }}
        transition={{
          default: {
            type: "spring",
            duration: 1.5,
            delay: 1,
          },
          filter: {
            ease: "circOut",
            duration: 0.8,
          },
          rotate: {
            type: "spring",
            damping: 8,
            stiffness: 200,
            duration: 0.5,
            delay: 1,
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

export default ProfilePicure;
