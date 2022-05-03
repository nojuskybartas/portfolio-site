import Highlight from "react-highlight";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowDimensions";

// TODO: using framer motion might be a little overkill here

export const CodeTypography = ({ page }) => {
  const [code, setCode] = useState("");
  const { isMobile } = useWindowDimensions();

  useEffect(() => {
    import("@auroratide/typewritten-text/lib/style.css");
    import("@auroratide/typewritten-text/lib/define.js");

    setTimeout(() => {
      const codeTypewritter = document.querySelector("typewritten-text");
      codeTypewritter.start();
    }, [5000]);

    setTimeout(() => {
      randomizeTypingDirection();
      randomizeTypingInterval();
    }, [10000]);
  }, []);

  useEffect(() => {
    console.log("coding");
    const getCode = async () => {
      const res = await fetch(
        `/api/getFormattedCode?page=${page}&width=${isMobile ? 40 : 80}`
      );
      const data = await res.text();
      setCode(data);
    };
    getCode();
  }, [isMobile]);

  const randomizeTypingDirection = () => {
    const codeTypewritter = document.querySelector("typewritten-text");
    const randomTime = Math.floor(Math.random() * 30000);
    const randomDelete = Math.floor(Math.random() * 2000);
    setTimeout(() => {
      codeTypewritter.reverse();
      console.log("back");
      setTimeout(() => {
        codeTypewritter.reverse();
        console.log("forw");
        setTimeout(() => {
          randomizeTypingDirection();
        }, [20000]);
      }, [randomDelete]);
    }, [randomTime]);
  };

  const randomizeTypingInterval = () => {
    const codeTypewritter = document.querySelector("typewritten-text");
    const randomInterval = Math.floor(Math.random() * 300);
    codeTypewritter.letterInterval = randomInterval;
    const randomTime = Math.floor(Math.random() * 15000);
    setTimeout(() => {
      randomizeTypingInterval();
    }, [randomTime]);
  };

  return code ? (
    <motion.div
      initial={{ opacity: "0%" }}
      animate={{ opacity: "25%" }}
      transition={{ delay: 2 }}
      className="w-full h-fit lg:text-lg absolute top-0 left-0 p-2 md:p-10 contrast-125 blur-[.7px]"
    >
      <typewritten-text letter-interval="30" paused>
        <Highlight className="language-typescript">{code}</Highlight>
      </typewritten-text>
    </motion.div>
  ) : null;
};
