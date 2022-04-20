import Highlight from "react-highlight";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowDimensions";

// TODO: using framer motion might be a little overkill here

const CodeTypography = ({ page }) => {
  const [code, setCode] = useState("");
  const { isMobile } = useWindowDimensions();

  useEffect(() => {
    import("@auroratide/typewritten-text/lib/style.css");
    import("@auroratide/typewritten-text/lib/define.js");

    setTimeout(() => {
      const codeTypewritter = document.querySelector("typewritten-text");
      codeTypewritter.start();
    }, [3000]);
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

  return code ? (
    <motion.div
      initial={{ opacity: "0%" }}
      animate={{ opacity: "25%" }}
      transition={{ delay: 2 }}
      className="w-screen h-screen lg:text-lg absolute top-0 left-0 p-2 md:p-10 contrast-125 blur-[0.5px] overflow-hidden"
    >
      <typewritten-text letter-interval="75" paused>
        <Highlight className="language-typescript">{code}</Highlight>
      </typewritten-text>
    </motion.div>
  ) : null;
};

export default CodeTypography;
