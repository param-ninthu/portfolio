import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import linkedin from "./../assets/linkedin.png";
import github from "./../assets/github-logo.png";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Hello, I'm a software engineer with experience in full-stack
        development. My focus is on delivering high-quality software that meets
        the needs of users and drives business growth. I am committed to staying
        up-to-date with the latest technologies and industry trends, and
        continuously improving my skills. I believe that the best solutions come
        from collaboration and teamwork, and I'm comfortable working with
        designers, product managers, and other developers to achieve project
        goals. Thank you for visiting my profile, please feel free to reach out
        if you have any questions or potential project opportunities.
      </motion.p>
      <motion.div
        variants={fadeIn("", "", 0.8, 1)}
        className=" mt-3 flex flex-wrap gap-10 "
      >
        <a
          href="https://www.linkedin.com/in/ninthu-param/"
          className="cursor-pointer"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" className="w-8 h-8" />
        </a>
        <a
          href="https://github.com/param-ninthu"
          className="cursor-pointer"
          target="_blank"
        >
          <img src={github} alt="github" className="w-8 h-8" />
        </a>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
