import { motion } from "framer-motion";
import Image from "next/image";
import exploredImage from "../../assets/projects/explored.png";

export function Projects() {
  return (
    <motion.div className="w-4/5 max-w-3xl h-fit flex flex-wrap border-4 border-solid border-gray-400 dark:border-gray-700 rounded-xl gap-3 p-3">
      {/* <Project
        label="Explored.Life"
        description="Travel agency platform"
        link="https://www.explored.life"
        image={exploredImage.src}
        languages={[<Javascript />, <HTML />, <CSS />]}
        technologies={[<React />, <Firebase />]}
        primaryColor="#587355"
        secondaryColor="#D3E0D6"
      />
      <Project
        label="ETH Tomorrow"
        description="Crypto price predictor"
        link="https://proj-a.vercel.app/"
        languages={[<Python />, <Javascript />, <HTML />, <CSS />]}
        technologies={[<Tensorflow />, <React />]}
        primaryColor="#70C5FC"
        secondaryColor="#acdcfc"
      /> */}
    </motion.div>
  );
}

interface ProjectProps {
  link: string;
  image?: string;
  label: string;
  description: string;
  languages: JSX.Element[];
  technologies?: JSX.Element[];
  primaryColor?: string;
  secondaryColor?: string;
}

export function Project({
  link,
  image,
  label,
  description,
  languages,
  technologies,
  primaryColor,
  secondaryColor,
}: ProjectProps) {
  return (
    <motion.div className="w-full md:flex-1 h-full space-y-4 border-2 border-solid border-gray-500 dark:border-gray-700 rounded-lg text-center flex flex-col justify-center backdrop-blur-sm">
      {image && <Image src={image} width={256} height={480} />}
      <a
        href={link}
        style={{ color: primaryColor }}
        className="font-semibold text-2xl"
      >
        {label}
      </a>
      <p style={{ color: secondaryColor }} className="text-lg">
        {description}
      </p>

      <div className="w-full h-fit flex justify-center space-x-4">
        {languages}
      </div>

      <div className="w-full h-fit flex justify-center space-x-4">
        {technologies}
      </div>
    </motion.div>
  );
}
