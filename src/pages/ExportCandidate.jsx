import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../components/ExportCandidate/Header";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiUndo } from "react-icons/ci";
import Filter from "../components/ExportCandidate/Filter";
import Table from "../components/ExportCandidate/Table";
import Pagination from "../components/ExportCandidate/Pagination";

const ExportCandidate = () => {
  return (
    <div>
      <Header />
      <div className="lg:p-2 py-2">
        <div className="bg-white p-4  min-h-[100vh]">
          <div className="flex flex-row items-center justify-between">
            <p>Export</p>
            <div>
              <div className="bg-[#F5F6FA] relative flex flex-row items-center h-[44px] rounded-md px-4">
                <FaSearch className="absolute left-3 text-[#0045A199]" />
                <input
                  className="lg:w-[300px] w-[100px] ml-6 outline-none bg-[#F5F6FA] "
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div className="p-2  relative">
            <Filter />
            <div className="min-h-[80vh]">
              <Table />
            </div>

            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportCandidate;
