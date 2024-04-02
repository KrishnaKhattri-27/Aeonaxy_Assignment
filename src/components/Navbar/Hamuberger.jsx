import React from "react";
import LinkItem from "./LinkItem";
import items from "./data/NavItems";
import Dropdown from "../Dropdowns/Dropdown";

const Hamburger = ({ showmenu, handleClick }) => {
  return (
    <div
      className={`bg-white shadow-2xl text-base w-[85%] xxs:w-[70%] sm:w-[40%] h-screen absolute z-[2000]  top-0 transition-all duration-500 pt-32 pb-16 pl-16 flex flex-col justify-between ${
        showmenu ? "right-0" : "-right-[70%]"
      }`}
    >
      <ul className="flex flex-col gap-y-4">
        {items.map((e) =>
          items.indexOf(e) === 3 || items.indexOf(e) === 5 ? (
            <Dropdown name={e.title} options={e.options} />
          ) : (
            <LinkItem name={e.title} link={e.link} />
          )
        )}
      </ul>

      <div className="flex items-center gap-x-4 ">
        <h3 className="text-black font-menagrotesk-semi text-base">Log In</h3>
        <button className="text-white bg-customblue-400 font-menagrotesk-semi text-sm px-6 py-3  rounded-l-full rounded-r-full">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hamburger;
