import React from "react";
import data from "./data/SolutionData";
import SolutionBox from "../SolutionBox/SolutionBox";

const Solutions = () => {
  return (
    <div className="py-10 sm:py-16 text-center px-10">
      <h5 className="text-xs xxs:text-sm md:text-base font-menagrotesk-semi xxs:mb-5 text-customblue-200">
        SOLUTIONS
      </h5>
      <h1 className=" text-customblue-800 text-xl xxs:text-[22px] xs:text-[26px] sm:text-4xl my-5 sm:my-7 font-menagrotesk-semi">
        Calendly can solve your <br className="xxs:block hidden sm:hidden"/> specific pain points
      </h1>
      <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-8 items-center justify-center">
        {data.map((e) => (
          <SolutionBox title={e.title} para={e.para} />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
