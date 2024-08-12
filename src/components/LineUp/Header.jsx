import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white p-4 flex lg:flex-row flex-col lg:items-center lg:justify-between justify-start gap-6">
      <div className="">
        <p>Line Up</p>
        <p className="text-[#8A8686B2]">Hello Helen, Welcome to Pronext</p>
      </div>
      <div className="bg-[#F5F6FA] relative flex flex-row items-center h-[44px] rounded-md px-4">
        <input className="lg:w-[300px] outline-none bg-[#F5F6FA] " />
        <div className="absolute right-0 p-3.5 bg-[#0045A1] ">
          <FaSearch className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
