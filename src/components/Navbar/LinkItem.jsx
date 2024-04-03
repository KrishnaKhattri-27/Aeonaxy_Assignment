import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ name, link }) => {
  return (
    <li className="text-black font-menagrotesk-semi hover:bg-[#d3d3d4] text-base px-3 py-2 rounded-lg w-fit">
      <Link>
        {" "}
        <h3>{name}</h3>
      </Link>{" "}
    </li>
  );
};

export default LinkItem;
