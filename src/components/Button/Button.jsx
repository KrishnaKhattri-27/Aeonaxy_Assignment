import React from "react";

const Button = ({ title,color }) => {
  return (
    <button className={`text-white ${color} ${color==="bg-customblue-400"?null:"border-2 border-white"} font-menagrotesk-semi text-xs xs:text-sm px-7 xs:px-10 py-3 xs:py-5  rounded-l-full rounded-r-full`}>
      {title}
    </button>
  );
};

export default Button;
