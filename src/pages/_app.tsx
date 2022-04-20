import "../styles/globals.css";
import "../styles/atom-one-dark.css";
// import "../styles/atom-one-light.css";
import type { AppProps } from "next/app";
import { useRef } from "react";
import { ThemeProvider } from "next-themes";
import { loadScript } from "../lib/utils";

function MyApp({ Component, pageProps }: AppProps) {
  const loaded = useRef(false);

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("flowbiteJS")) {
      loadScript(`../path/to/flowbite/dist/flowbite.js`, "head", "flowbiteJS");
    }

    loaded.current = true;
  }

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
