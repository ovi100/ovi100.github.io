import { IconsType } from "../types";

import { LuCode, LuDatabase } from "react-icons/lu";
import { TbBrandReactNative } from "react-icons/tb";
import { BsDatabaseUp } from "react-icons/bs";
import { GrDatabase } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa";
import { MdSecurityUpdate } from "react-icons/md";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPython,
  SiFirebase,
  SiGithub,
  SiFigma,
  SiVercel,
  SiNotion,
  SiGnometerminal,
  SiThreedotjs,
  SiGooglemaps,
  SiAuthelia,
  SiSupabase,
} from "react-icons/si";

export const Icons: IconsType = {
  "code": <LuCode />,
  "react": <SiReact size={22} />,
  "react native": <TbBrandReactNative size={22} />,
  "javascript": <SiJavascript size={22} />,
  "typescript": <SiTypescript size={22} />,
  "next.js": <SiNextdotjs size={22} />,
  "tailwind css": <SiTailwindcss size={22} />,
  "node.js": <SiNodedotjs size={22} />,
  "mongodb": <SiMongodb size={22} />,
  "express.js": <SiExpress size={22} />,
  "python": <SiPython size={22} />,
  "firebase": <SiFirebase size={22} />,
  "sql": <LuDatabase size={22} />,
  "git & github": <SiGithub size={22} />,
  "figma": <SiFigma size={22} />,
  "vercel": <SiVercel size={22} />,
  "restful apis": <GrDatabase size={22} />,
  "render": <BsDatabaseUp size={22} />,
  "notion": <SiNotion size={22} />,
  "ai tools": <SiGnometerminal size={22} />,
  "chart.js": <FaChartLine size={22} />,
  "three.js": <SiThreedotjs size={22} />,
  "maps api": <SiGooglemaps size={22} />,
  "jwt": <SiAuthelia size={22} />,
  "supabase": <SiSupabase size={22} />,
  "hotupdater": <MdSecurityUpdate size={22} />,
};