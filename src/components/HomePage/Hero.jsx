import React from "react";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="flex flex-col gap-y-5 md:gap-y-10 items-center justify-center min-h-[85vh] sm:min-h-[85vh] relative overflow-hidden px-5 sm:px-10">
      <motion.h5
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-xs xxs:text-sm md:text-base font-menagrotesk-semi xxs:mb-5 text-customblue-200"
      >
        SOLUTIONS
      </motion.h5>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className=" text-customblue-800 text-2xl xxs:text-3xl xs:text-4xl md:text-6xl font-menagrotesk-bold text-center "
      >
        <span className=" text-customblue-400">Calendly</span> for the work{" "}
        <br className="block sm:hidden" />
        you do
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="w-[95%] xxs:w-[85%] md:w-[60%]  text-customGrey-200 text-center text-sm xxs:text-base xs:text-lg md:text-2xl"
      >
        Across a range of users, Calendly helps people and teams build
        efficiency, professionalism, and results into the work they do.
      </motion.p>
      <Button title={"Contact sales"} color={"bg-customblue-400"} />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="absolute w-[160%] xxs:w-[145%] sm:w-[95%] mx-auto aspect-square bottom-[-58vw] -z-10 rounded-full bg-[#f8fbff]"
      ></motion.div>
    </main>
  );
};

export default Hero;
