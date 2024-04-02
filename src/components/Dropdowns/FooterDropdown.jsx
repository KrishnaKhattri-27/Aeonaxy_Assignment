import React from "react";
import { useState } from "react";

const FooterDropdown = ({ options, name }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="relative">
      {/* Dropdown button */}
      <button
        id={name + "dropdownDefaultButton"}
        onClick={toggleDropdown}
        className="text-customblue-800 bg-white hover:bg-[#d3d3d4] shadow  focus:outline-none font-medium rounded-lg text-lg px-3 py-2 text-center inline-flex w-full justify-between items-center font-menagrotesk-semi"
        type="button"
      >
        {/* Label for the respective dropdown */}
        {name}

        {/* Dropdown icon */}
        <svg
          className="w-2.5 h-2.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Condionally rendering, if the the dropdown is opened or closed */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-10  top-[108%] bg-white divide-y divide-gray-100 rounded-lg s min-w-full"
        >
          <ul
            className="p-3 text-base text-customblue-800 bg-white rounded-lg"
            aria-labelledby={name + "dropdownDefaultButton"}
          >
            {/* Maping options */}
            {options?.map((e, index) => (
              <li key={index}>
                <span
                  className="block py-2 hover:bg-[#d3d3d4] cursor-pointer  rounded-lg font-menagrotesk text-customGrey-200"
                  onClick={() => setIsOpen(false)}
                >
                  {e}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FooterDropdown;
