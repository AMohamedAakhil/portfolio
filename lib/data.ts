import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import autohrImg from "@/public/axis.png";
import upmarktImg from "@/public/upmarkt.png";
import studybuddyImg from "@/public/studybuddy.png";
import reelsgptImg from "@/public/reelsGPT.jpg";
import timescanCRMImg from "@/public/timescanCRM.png";
import rgaiImg from "@/public/rgai.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Shiv Nadar University",
    location: "Chennai, Tamil Nadu",
    description:
      "Currently pursuing the B.Tech AI&DS Course.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-Present",
  },
  {
    title: "ML Intern",
    location: "Bengaluru, Karnataka, India",
    description:
      "Worked as a Machine Learning Intern at Brighter India for 4 months. Secured 2nd place at the Brighter India Hackathon, earning an internship opportunity with a stipend of 10k/month.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Present",
  },
  {
    title: "Software Developer (Part-time)",
    location: "Egmore, Tamil Nadu, India",
    description:
      "Part-time Software Developer at Timescan Logistics India for 9 months. Developing and maintaing custom CRM solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - Present",
  },
  {
    title: "Software Developer (Part-time)",
    location: "Chennai, Tamil Nadu, India (Remote)",
    icon: React.createElement(CgWorkAlt),
    description:
      "Part-time Software Developer at Upmarkt for 5 months. Currently revamping the existing e-commerce website using the T3 stack.",
    date: "Jul 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "GenRG",
    description: "A project that utilizes SDXL LoRA to generate content for Rahul Gandhi. Made for the internship under Brighter India",
    tags: ["Stable Diffusion", "PyTorch", "Streamlit"],
    imageUrl: rgaiImg,
  },
  {
    title: "StudyBuddy",
    description:
      "A platform that records university lectures and generates summarized notes available for download in PDF format.",
    tags: ["React.js", "FastAPI", "LLMs", "Tailwind"],
    imageUrl: studybuddyImg, // Replace studybuddyImg with the actual image URL
  },
  {
    title: "Upmarkt",
    description:
      "An e-commerce website with a complete multivendor supported dashboard.",
    tags: ["Next.js", "tRPC", "Tailwind", "Prisma", "PostgreSQL"],
    imageUrl: upmarktImg, // Replace upmarktImg with the actual image URL
  },
  {
    title: "TimescanCRM",
    description:
      "A custom CRM solution designed for a logistic freight forwarding business.",
    tags: ["Next.js", "tRPC", "Tailwind", "Prisma", "MySQL"],
    imageUrl: timescanCRMImg, // Replace timescanCRMImg with the actual image URL
  },

  {
    title: "AutoHR",
    description:
      "An app that utilizes llms (large language models) along with langchain to automate the HR recruitment process.",
    tags: ["LLMs", "Langchain", "Next.js", "Tailwind", "Prisma"],
    imageUrl: autohrImg, // Replace autohrImg with the actual image URL
  },
  {
    title: "ReelsGPT",
    description:
      "An application that transforms long-form content into short reels with subtitles.",
    tags: ["PyTorch", "LangChain", "Next.js", "Tailwind", "Prisma"],
    imageUrl: reelsgptImg, // Replace reelsgptImg with the actual image URL
  },

] as const;


export const skillsData = [
  "PyTorch",
  "Diffusers",
  "Transformers",
  "Tensorflow",
  "Next.js",
  "tRPC",
  "TailwindCSS",
  "Prisma",
  "TypeScript",
  "AWS",
] as const;
