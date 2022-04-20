import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { getCodeData } from "../lib/github";
import ProfilePicure from "../components/index/ProfilePicure";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Socials from "../components/index/Socials";
import ProjectsSkillsToggle from "../components/index/ProjectsSkillsToggle";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import CodeTypography from "../components/CodeTypography.js";
import Info from "../components/index/Info";

const Home: NextPage = ({
  code,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ParallaxProvider>
      <ScrollToTop />
      <Head>
        <title>Nojus Kybartas: Home</title>
        <meta name="Nojus Kybartas' portfolio" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <CodeTypography code={code} />

      <Parallax speed={8}>
        <ProfilePicure />
      </Parallax>

      <Parallax speed={-1}>
        <motion.div
          initial={{ opacity: "0%", y: "100%" }}
          animate={{ opacity: "100%", y: "0%" }}
          transition={{ delay: 1.8 }}
          className="w-full h-full flex flex-col place-items-center space-y-2 overflow-x-hidden"
        >
          <Info />
          <Socials />
          <ProjectsSkillsToggle />
        </motion.div>
      </Parallax>
    </ParallaxProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = await getCodeData(context.req.url || "");
  return {
    props: {
      code,
    },
  };
};

export default Home;
