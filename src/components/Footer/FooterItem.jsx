import React from "react";

const FooterItem = ({ title, items }) => {
  return (
    <div className="text-left w-[33%]">
      <h4 className=" text-customblue-800 text-xl font-menagrotesk-bold">
        {title}
      </h4>
      <ul className="flex flex-col gap-y-4 mt-5">
        {items?.map((e) => (
          <li className=" text-customblue-800 font-menagrotesk-light  text-base ">
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
