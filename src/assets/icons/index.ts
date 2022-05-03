// languages
import css from "./languages/css.svg";
import html from "./languages/html5.svg";
import javascript from "./languages/js.svg";
import python from "./languages/python.svg";
import typescript from "./languages/typescript.svg";

// technologies
import analytics from "./technologies/analytics.svg";
import docker from "./technologies/docker.svg";
import figma from "./technologies/figma.svg";
import gatsby from "./technologies/gatsby.svg";
import gitlab from "./technologies/gitlab.svg";
import pwa from "./technologies/pwa.svg";
import redux from "./technologies/redux.svg";
import tailwind from "./technologies/tailwind.svg";
// missing: recoil && styled-components
import firebase from "./technologies/firebase.svg";
import nextjs from "./technologies/nextjs.svg";
import reactjs from "./technologies/reactjs.svg";
import tensorflow from "./technologies/tensorflow.svg";

import githubDark from "./githubDark.png";
import githubLight from "./githubLight.png";
import instagram_rgb from "./instagram_rgb.png";
import linkedIn from "./linkedIn.png";

export type Technologies = keyof typeof technologies;
export const technologies = [
  firebase,
  nextjs,
  reactjs,
  tensorflow,
  analytics,
  docker,
  gatsby,
  gitlab,
  pwa,
  redux,
  tailwind,
];

export type Languages = keyof typeof languages;
export const languages = [css, html, javascript, python, typescript];

export { githubDark, githubLight, instagram_rgb, linkedIn };
