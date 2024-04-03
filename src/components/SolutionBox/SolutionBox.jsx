import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SolutionBox = ({ title, para, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="w-full xs:w-[80%] sm:w-[48%] md:w-[40%] lg:w-[30%] aspect-square p-5 rounded-lg shadow-lg flex flex-col justify-between gap-y-4 hover:scale-105"
    >
      <div className="text-start">
        {icon}
        <h1 className="font-menagrotesk-bold text-customblue-800 text-lg my-5">
          {title}
        </h1>
        <p className=" text-customGrey-200 text-base font-menagrotesk">
          {para}
        </p>
      </div>
      <Link className="flex gap-x-3 items-center">
        <h3 className="font-menagrotesk-semi text-customblue-400 text-base">
          Learn more
        </h3>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-customblue-400 fa-sm"
        />
      </Link>
    </motion.div>
  );
};

export default SolutionBox;
