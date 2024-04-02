import React from "react";
import Button from "../Button/Button";

const Booking = () => {
  return (
    <div className="w-full bg-customblue-800 flex flex-col gap-y-5 sm:gap-y-10 justify-center items-center py-16 px-3 xxs:px-5 sm:px-0">
      <h1 className=" text-white text-xl xxs:text-[22px] xs:text-[26px] sm:text-4xl text-center font-menagrotesk-bold">
        Easy access for easy bookings
      </h1>
      <p className="  text-white w-[95%] sm:w-[60%] text-center text-base xs:text-lg sm:text-xl leading-6 xs:leading-7 sm:leading-9">
        Share your Calendly link right from your browser, so you can schedule meetings without the back-and-forth
      </p>
      <div className="flex gap-x-3   xxs:gap-x-5">
        <Button color={"bg-customblue-400"} title={"Start for free"}/>
        <Button color={""} title={"Talk with sales"}/>
      </div>
    </div>
  );
};

export default Booking;
