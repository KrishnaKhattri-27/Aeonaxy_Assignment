import React, { useEffect, useState } from "react";
import items from "./data/NavItems";
import Dropdown from "../Dropdowns/Dropdown";
import LinkItem from "./LinkItem";
import "./Navbar.css";
import Hamburger from "./Hamuberger";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(false);
  const [showmenu, setShowmenu] = useState(false);

  const changedisplay = () => {
    if (window.innerWidth <= 1124) setScreenSize(true);
    else {
      setScreenSize(false);
      setShowmenu(false);
    }
  };

  window.addEventListener("resize", changedisplay);

  const hamsburgerhandler = () => {
    setShowmenu(!showmenu);
  };

  const handleClick = () => {
    setShowmenu(false);
  };

  useEffect(() => {
    changedisplay();
  }, []);

  return (
    <header className="flex justify-between items-center py-5 px-5 sm:px-10 relative">
      
      <div className="flex">
        <img src="" alt="" />
        <h1 className="font-menagrotesk-itallic text-3xl text-customblue-200">
          Calendly
        </h1>
      </div>

      <ul className="lg:flex hidden gap-x-6 lg:gap-x-8 justify-center items-center">
        {items.map((e) =>
          items.indexOf(e) === 3 || items.indexOf(e) === 5 ? (
            <Dropdown name={e.title} options={e.options} />
          ) : (
            <LinkItem name={e.title} link={e.link} />
          )
        )}
      </ul>

      <div className="lg:flex hidden items-center gap-x-4">
        <h3 className="text-black font-menagrotesk-semi text-base">Log In</h3>
        <button className="text-white bg-customblue-400 font-menagrotesk-semi text-sm px-6 py-3  rounded-l-full rounded-r-full">
          Get started
        </button>
      </div>

      <div
        className={`cursor-pointer flex lg:hidden flex-col justify-center items-end z-[3000] ${
          showmenu ? "change" : ""
        }  h-6 w-6 mt-21`}
        onClick={hamsburgerhandler}
      >
        <i
          className={`block ${
            showmenu ? "w-full " : "w-3/4 "
          } h-1 linex  line1 mb-1 bg-customblue-400`}
        ></i>
        <i className={`block w-full linex h-1 bg-customblue-400 line2 mb-1`}></i>
        <i
          className={`block linex ${
            showmenu ? "w-full " : "w-1/2 "
          } h-1 line3 bg-customblue-400`}
        ></i>
      </div>

      {screenSize ? (
        <Hamburger showmenu={showmenu} handleClick={handleClick} />
      ) : null}

    </header>
  );
};

export default Navbar;
