import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { ScrollToTop, Navbar, CodeTypography } from "../components";
import {
  ProfilePicture,
  Socials,
  Info,
  ProjectsSkillsToggle,
} from "../components/home";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full relative pb-20">
      <ScrollToTop />
      <Head>
        <title>Nojus Kybartas: Home</title>
        <meta name="Nojus Kybartas' portfolio" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <CodeTypography page="index.tsx" />

      {/* <ProfilePicture /> */}

      <motion.div
        initial={{ opacity: "0%", y: "100%" }}
        animate={{ opacity: "100%", y: "0%" }}
        transition={{ delay: 1.8 }}
        className="w-full h-full flex flex-col py-8
            place-items-center space-y-2"
      >
        {/* <Info /> */}
        <Socials />
        <ProjectsSkillsToggle />
      </motion.div>
    </div>
  );
};

export default Home;
