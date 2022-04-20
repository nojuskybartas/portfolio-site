import Highlight from "react-highlight";
import { useEffect } from "react";
import { motion } from "framer-motion";

// TODO: using framer motion might be a little overkill here

const CodeTypography = ({ code }) => {
  useEffect(() => {
    import("@auroratide/typewritten-text/lib/style.css");
    import("@auroratide/typewritten-text/lib/define.js");

    setTimeout(() => {
      const elem = document.querySelector("typewritten-text");
      elem.start();
    }, [3000]);
  }, []);

  return (
    <motion.div
      initial={{ opacity: "0%" }}
      animate={{ opacity: "25%" }}
      transition={{ delay: 2 }}
      className="w-full h-fit absolute top-0 left-0 p-2 md:p-10 z-0 contrast-125 blur-[1px]"
    >
      <typewritten-text letter-interval="75" paused>
        <Highlight className="language-typescript">{code}</Highlight>
      </typewritten-text>
    </motion.div>
  );
};

export default CodeTypography;
