import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import githubDark from "../../assets/icons/githubDark.png";
import githubLight from "../../assets/icons/githubLight.png";
import linkedIn from "../../assets/icons/linkedin.png";
import instagramRgb from "../../assets/icons/instagram_rgb.png";
import Image, { StaticImageData } from "next/image";

function Socials() {
  return (
    <div className="w-fit h-fit p-5 space-x-5 flex">
      <SocialItem
        link="https://www.instagram.com/nojuskybartas/"
        darkIcon={instagramRgb}
        lightIcon={instagramRgb}
      />
      <SocialItem
        link="https://www.linkedin.com/in/nojus-kybartas/"
        darkIcon={linkedIn}
        lightIcon={linkedIn}
      />
      <SocialItem
        link="https://github.com/nojuskybartas"
        darkIcon={githubDark}
        lightIcon={githubLight}
      />
    </div>
  );
}

export default Socials;

const SocialItem = ({
  link,
  darkIcon,
  lightIcon,
}: {
  link: string;
  darkIcon: StaticImageData;
  lightIcon: StaticImageData;
}) => {
  const { theme } = useTheme();

  return (
    <Link href={link}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Image
          height="32"
          width="32"
          objectFit="contain"
          className="cursor-pointer"
          src={theme === "dark" ? lightIcon : darkIcon}
        />
      </motion.div>
    </Link>
  );
};
