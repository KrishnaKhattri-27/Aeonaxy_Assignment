import React from "react";

const LinkItem = ({ name, link }) => {
  return (
    <li className="text-black font-menagrotesk-semi text-base px-3 lg:px-0">
      <h3>{name}</h3>
    </li>
  );
};

export default LinkItem;
