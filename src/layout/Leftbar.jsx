import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import Profile from "../assets/Profile.png";

const Leftbar = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex flex-row items-center justify-around">
        <div className="p-3 bg-gray-200 rounded-full">
          <FaUserFriends className="text-2xl text-blue-500" />
        </div>
        <div className="p-3 bg-gray-200 rounded-full">
          <BsChatSquareTextFill className="text-2xl text-blue-500" />
        </div>{" "}
        <div className="p-3 bg-gray-200 rounded-full">
          <FaBell className="text-2xl text-blue-500" />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6 pt-8">
        <img src={Profile} className="h-[150px] w-[150px]" />
        <p className="text-3xl font-bold">Badmus Blessing</p>
        <p className="text-gray-500">Super Admin</p>
      </div>
      <div className="space-y-2 pt-8">
        <p>Message</p>
        <div className="flex items-center gap-4">
          <img src={Profile} className="h-8 w-8" />
          <div>
            <p className="font-bold">Ajao adekunle</p>
            <p className="text-xs">Hello there i want to ask you about</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={Profile} className="h-8 w-8" />
          <div>
            <p className="font-bold">Okafor Ifeoma Obianuju</p>
            <p className="text-xs">Hello Helen, What about what you...</p>
          </div>
        </div>
      </div>
      <div className="space-y-2 pt-8">
        <p>Recent Activities</p>
        <div className="relative">
          <div
            className="  z-10 mt-2 w-full rounded-md border border-gray-100 bg-white shadow-lg text-xs"
            role="menu"
          >
            <div className="p-2">
              <a
                href="#"
                className="block rounded-lg px-0 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                You: Changed John Oroca Kevin to select now
              </a>
              <a
                href="#"
                className="block rounded-lg px-0 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                You added a John Oroca Kevin to EXL at Aphaland
              </a>{" "}
              <a
                href="#"
                className="block rounded-lg px-0 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                You added a Andrea Babante Torreon to Teleperformance at Cebu
              </a>{" "}
              <a
                href="#"
                className="block rounded-lg px-0 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                You added a Arsenio Jr Condolon to Teleperformance at Cebu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
