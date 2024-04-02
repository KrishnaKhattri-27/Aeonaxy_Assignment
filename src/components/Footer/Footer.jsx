import React from "react";
import data1, { data2 } from "./data/ItemData";
import FooterItem from "./FooterItem";
import FooterDropdown from "../Dropdowns/FooterDropdown";

const Footer = () => {
  const mobileScreenData = data1.concat(data2);
  const lang = ["French", "Hindi", "Urdu"];

  return (
    <footer className="px-5 sm:px-10 pt-14 sm:pt-28 pb-7 sm:pb-14">
      <div className="flex md:flex-row flex-col gap-y-10 justify-between gap-x-10">
        <div className="md:w-[30%] md:order-1 order-2">
          <h3 className="text-4xl font-menagrotesk-ultra leading-[50px] text-customblue-800">
            Easy <br className="md:block hidden"/>
            <span className=" text-customblue-400">ahead</span>
          </h3>
          <p className="  text-customblue-800 text-base leading-7 md:mt-5 mb-12">
            We take the work out of connecting with <br /> others so you can
            accomplish more.
          </p>

          <select
            id="countries"
            class="bg-white border border-gray-300 text-black rounded-lg  block w-full px-2.5 py-3 shadow font-menagrotesk-semi max-w-[300px]"
          >
            <option
              className="text-black font-menagrotesk-semi text-base"
              selected
            >
              English
            </option>
            {lang.map((e) => (
              <option
                value={"lang" + lang.indexOf(e)}
                className="text-black font-menagrotesk-semi text-base"
              >
                {e}
              </option>
            ))}
          </select>
        </div>
        <div className="md:w-[65%] md:order-2 order-1">
          <div className="sm:flex hidden justify-between">
            {data1.map((e) => (
              <FooterItem title={e.title} items={e.items} />
            ))}
          </div>
          <div className="sm:flex hidden justify-between mt-14">
            {data2.map((e) => (
              <FooterItem title={e.title} items={e.items} />
            ))}
          </div>
          <div className="flex sm:hidden flex-col gap-y-8">
            {mobileScreenData?.map((e) => (
              <FooterDropdown name={e.title} options={e.items} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between text-[8px] xs:text-xs font-menagrotesk text-customGrey-200 mt-5 xs:mt-10">
        <h6>Copyright Calendly 2022</h6>
        <h6>Privacy / Terms and Conditions</h6>
      </div>
    </footer>
  );
};

export default Footer;
