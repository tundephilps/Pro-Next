import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex lg:flex-row flex-col gap-6 items-center justify-between pt-6">
        <button className="px-4 py-2 text-white bg-[#292D32] text-xs rounded-full duration-150 hover:bg-indigo-500 active:bg-indigo-700">
          10,000 Results Found
        </button>
        <div className="flex flex-row items-center gap-6">
          <div>
            <div className="relative w-72 max-w-full mx-auto ">
              <MdArrowDropDown className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3" />
              <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                <option>Select File Type</option>
                <option>CSV</option>
                <option>XLSX</option>
                <option>PDF</option>
              </select>
            </div>
          </div>
          <button className="px-6 py-2 text-white duration-100 bg-indigo-600 rounded-lg shadow-md focus:shadow-none ring-offset-2 ring-indigo-600 focus:ring-2">
            Export
          </button>
        </div>
      </div>
      <div className="space-y-1  lg:block  w-full">
        <p className="pt-3">Candidate Listed</p>
        <div className="flex flex-row lg:w-full w-[600px] items-center justify-between px-8 rounded-full border border-blue-500 shadow-md py-2 overflow-x-auto">
          <p className="lg:w-52  lg:text-base text-xs">
            Badmus Blessing Joseph
          </p>
          <p className="lg:w-32  lg:text-base text-xs whitespace-nowrap">
            Teleperformance Vizman
          </p>
          <p className="lg:text-base text-xs">Line up</p>
          <p className="lg:text-base text-xs">04/06/2024</p>
          <MdOutlineKeyboardArrowDown className="text-blue-500" />
        </div>
        <div className="flex flex-row lg:w-full w-[600px] items-center justify-between px-8 rounded-full border border-blue-500 shadow-md py-2 overflow-x-auto">
          <p className="w-52 lg:text-base text-xs">Oni Abisola Gracw</p>
          <p className="lg:w-32  lg:text-base text-xs whitespace-nowrap">
            EXL Cebu
          </p>
          <p className="lg:text-base text-xs">Line up</p>
          <p className="lg:text-base text-xs">04/06/2024</p>
          <MdOutlineKeyboardArrowDown className="text-blue-500" />
        </div>
        <div className="flex flex-row lg:w-full w-[600px] items-center justify-between px-8 rounded-full border border-blue-500 shadow-md py-2 overflow-x-auto">
          <p className="w-52 lg:text-base text-xs">Oni Abisola Gracw</p>
          <p className="lg:w-32  lg:text-base text-xs whitespace-nowrap">
            Teleperfromer Passay
          </p>
          <p className="lg:text-base text-xs">Line up</p>
          <p className="lg:text-base text-xs">04/06/2024</p>
          <MdOutlineKeyboardArrowDown className="text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Table;
