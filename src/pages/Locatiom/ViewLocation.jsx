import React, { useState } from "react";
import Header from "../../components/Location/Header";
import { FaSearch } from "react-icons/fa";

import Company from "../../assets/company.png";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Pagination from "../../components/ExportCandidate/Pagination";

const ViewLocation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = () => {
    // Implement your delete logic here
    console.log("Item deleted");
    closeModal();
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Header />
      <div className="lg:p-2 py-2">
        <div className="bg-white p-4  min-h-[100vh]">
          <div className="flex flex-row items-center justify-between">
            <p>View Location</p>
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
          <div className="space-y-1  lg:block  w-full min-h-[80vh]">
            <p className="pt-3">Country Listed</p>
            <div className="w-full lg:w-full">
              <div
                className="flex flex-row items-center justify-between px-8 rounded-full border border-blue-500 shadow-md py-2 cursor-pointer"
                onClick={toggleAccordion}
              >
                <div className="flex flex-row items-center gap-4">
                  <img src={Company} alt="Company Logo" />
                  <p className="lg:text-base text-xs lg:w-32 whitespace-nowrap">
                    Teleperformance Vizman
                  </p>
                </div>

                <div>Vizman</div>

                {isOpen ? (
                  <MdOutlineKeyboardArrowUp className="text-blue-500" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="text-blue-500" />
                )}
              </div>

              {isOpen && (
                <div className="px-8 py-4 border border-t-0 border-blue-500 rounded-b-lg">
                  <div className="grid grid-cols-4 gap-8 text-xs">
                    <div>
                      <p className="text-gray-400">Location Name</p>
                      <p>Teleperformance</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Company</p>
                      <p>Teleperform</p>
                    </div>{" "}
                    <div>
                      <p className="text-gray-400">Country</p>
                      <p>Phillipine</p>
                    </div>{" "}
                    <div>
                      <p className="text-gray-400">State</p>
                      <p>NCR</p>
                    </div>{" "}
                    <div>
                      <p className="text-gray-400">City</p>
                      <p>Vizman</p>
                    </div>{" "}
                    <div>
                      <p className="text-gray-400">Created By</p>
                      <p>Fagorusi Jeremiah</p>
                    </div>{" "}
                    <div>
                      <p className="text-gray-400">Created on</p>
                      <p>--/--/--</p>
                    </div>{" "}
                    <div>
                      <p className="text-gray-400">Updated by</p>
                      <p>********</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Updated on</p>
                      <p>Teleperformance</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Upload Document</p>
                      <p>***********</p>
                    </div>
                  </div>
                  <div className="w-full text-xs pt-6">
                    <p className="text-gray-400">Address</p>
                    <p>Tower 1, Villa Street, IT Park, Cebu City</p>
                  </div>

                  <h1 className="py-4">Account & Requirement</h1>

                  <div className="grid grid-cols-4 gap-8 text-xs">
                    <div>
                      <p className="text-gray-400">Account Name</p>
                      <p>Telco/Voice</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Minimum Education</p>
                      <p>High School graduate</p>
                    </div>{" "}
                    <div>
                      <p className="text-gray-400">Minimum Experience</p>
                      <p>6 Months</p>
                    </div>{" "}
                    <div>
                      <p className="text-gray-400">Salary Range</p>
                      <p>19,000 - 27,000</p>
                    </div>{" "}
                    <div>
                      <p className="text-gray-400">Operation Mode</p>
                      <p>Both Avaliable</p>
                    </div>{" "}
                    <div>
                      <p className="text-gray-400">Interview Mode</p>
                      <p>Walkin</p>
                    </div>{" "}
                    <div>
                      <p className="text-gray-400">Startup Date</p>
                      <p>--/--/--</p>
                    </div>{" "}
                  </div>
                  <div className="w-full text-xs pt-6">
                    <p className="text-gray-400">Other information</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tellus adipiscing
                      sit pulvinar neque eget egestas feugiat.
                    </p>
                  </div>

                  <p className="text-1xl py-6 ">Remark</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur. Tellus adipiscing
                    sit pulvinar neque eget egestas feugiat. Lorem ipsum dolor
                    sit amet consectetur. Tellus adipiscing sit pulvinar neque
                    eget egestas feugiat.
                  </p>
                  <div className="flex flex-row items-center gap-8 pt-8">
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2 "
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="py-2.5 px-8 me-2 mb-2 text-sm font-medium text-blue-600 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                      onClick={openModal}
                    >
                      Delete
                    </button>

                    {isModalOpen && (
                      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                        <div className="bg-white p-5 rounded-lg shadow-xl">
                          <h2 className="text-xl font-semibold mb-4">
                            Confirm Deletion
                          </h2>
                          <p className="mb-4">
                            Are you sure you want to delete from the database?
                          </p>
                          <div className="flex justify-end">
                            <button
                              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2 "
                              onClick={closeModal}
                            >
                              No
                            </button>
                            <button
                              className="py-2.5 px-8 me-2 mb-2 text-sm font-medium text-blue-600 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                              onClick={handleDelete}
                            >
                              Yes
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-row items-center justify-between px-8 rounded-full border border-blue-500 shadow-md py-2 cursor-pointer">
              <div className=" flex flex-row items-center gap-4">
                <img src={Company} />
                <p className=" lg:text-base lg:w-32 text-xs whitespace-nowrap">
                  Concentrix
                </p>
              </div>
              <p>CRN</p>

              <MdOutlineKeyboardArrowDown className="text-blue-500" />
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ViewLocation;
