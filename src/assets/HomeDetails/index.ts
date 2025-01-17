// import { TooltipProps } from "@mui/material";
import { AiOutlineInfo } from "react-icons/ai";
import {
  MdCastForEducation,
  MdMail,
  MdOutlineContactPhone,
} from "react-icons/md";
import { IconType } from "react-icons";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { HiOfficeBuilding } from "react-icons/hi";
import { SiReaddotcv } from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

interface HomeDetail {
  id: number;
  title: string;
  href: string;
  icon: IconType;
  externalLink: boolean;
  // TooltipPlacement: TooltipProps["placement"];
}

export const homeDetails: HomeDetail[] = [
  {
    id: 1,
    title: "About Me",
    href: "/about",
    icon: AiOutlineInfo,
    externalLink: false,
    // TooltipPlacement: "top",
  },
  {
    id: 2,
    title: "Education",
    href: "/education",
    icon: MdCastForEducation,
    externalLink: false,
    // TooltipPlacement: "left",
  },
  {
    id: 3,
    title: "Skills",
    href: "/skills",
    icon: GiSkills,
    externalLink: false,
    // TooltipPlacement: "right",
  },
  {
    id: 4,
    title: "Projects",
    href: "/projects",
    icon: GrProjects,
    externalLink: false,
    // TooltipPlacement: "left",
  },
  {
    id: 5,
    title: "experience",
    href: "/experience",
    icon: HiOfficeBuilding,
    externalLink: false,
    // TooltipPlacement: "right",
  },
  {
    id: 6,
    title: "Resume",
    href: "https://drive.google.com/file/d/1u3jXqgsSLEOdkGcTozgSqsJMB3jf9pqS/view?usp=sharing",
    icon: SiReaddotcv,
    externalLink: true,
    // TooltipPlacement: "left",
  },
  {
    id: 7,
    title: "Email Me",
    href: `mailto:pradipramnawa@gmail.com?subject=${encodeURIComponent("Hello from Portfolio Website")}&body=${encodeURIComponent("Hi Pradip,\n\nI saw your portfolio and would like to connect!\n\nThanks,\n[Your name]")}`,
    icon: MdMail,
    externalLink: true,
    // TooltipPlacement: "right",
  },
  {
    id: 8,
    title: "Github",
    href: "https://github.com/Pradipram",
    icon: FaGithub,
    externalLink: true,
    // TooltipPlacement: "left",
  },
  {
    id: 9,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/pradip-ram-0bbb73222/",
    icon: FaLinkedinIn,
    externalLink: true,
    // TooltipPlacement: "right",
  },
  {
    id: 10,
    title: "X",
    href: "https://x.com/P__radip",
    icon: FaXTwitter,
    externalLink: true,
    // TooltipPlacement: "bottom",
  },
  {
    id: 11,
    title: "Contact Us",
    href: "/contact",
    icon: MdOutlineContactPhone,
    externalLink: false,
  },
];

export type { HomeDetail };
