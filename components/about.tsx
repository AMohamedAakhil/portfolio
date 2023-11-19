"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  A passionate developer deeply immersed in the realms of{" "}
  <span className="font-medium">Machine Learning and Data Science</span>. My
  academic journey began at Don Bosco School of Excellence, where I delved
  into foundational ML techniques and data analysis for three years,
  setting the stage for my exploration of more advanced concepts. As I
  transitioned into deep learning research, I crafted small yet impactful
  projects that fueled my expertise. Now in my second year at Shiv Nadar
  University, I contribute actively to the fields of generative AI and
  traditional models through internships and building solutions for businesses. My commitment to continuous
  learning drives me to keep exploring the forefronts of AI-ML and Data Science,
  engaging in impactful projects and embracing emerging technologies.
</p>

    </motion.section>
  );
}
