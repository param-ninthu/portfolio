import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from "./../assets/herobg.mp4";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src={herobg} type="video/mp4" />
      </video>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className=" flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#59ce8f] " />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#59ce8f]"> Ninthu </span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Web and Mobile Applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-4 w-full flex justify-center items-center mt-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
