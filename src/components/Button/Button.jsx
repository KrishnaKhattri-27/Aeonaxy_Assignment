import React from "react";
import { motion } from "framer-motion";

const Button = ({ title, color }) => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className={`text-white ${color} ${
        color === "bg-customblue-400" ? null : "border-2 border-white"
      } font-menagrotesk-semi text-xs xs:text-sm px-7 xs:px-10 py-3 xs:py-5  rounded-l-full rounded-r-full`}
    >
      {title}
    </motion.button>
  );
};

export default Button;
