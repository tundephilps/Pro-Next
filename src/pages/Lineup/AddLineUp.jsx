import React, { useState } from "react";
import Header from "../../components/LineUp/Header";
import { FaFile, FaSearch, FaTrash } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { PiUploadLight } from "react-icons/pi";

const AddLineUp = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [docError, setDocError] = useState(null);

  const handleDocChange = (event) => {
    const doc = event.target.files[0];
    if (doc) {
      setSelectedDoc(doc);
    }
  };

  const handleDocDelete = () => {
    setSelectedDoc(null);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setShowAdditionalFields(true);
  };

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

          <form
            onSubmit={(e) => e.preventDefault()}
            className=" grid gap-6 grid-cols-2"
          >
            <div>
              <label className="font-medium"> Company</label>
              <div className="relative mx-auto">
                <select className="w-full mt-2 px-3 py-2.5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                  <option>Company A</option>
                  <option>Company B</option>
                  <option>Company C</option>
                  <option>Company D</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-medium">Location</label>
              <div className="relative mx-auto">
                <select className="w-full mt-2 px-3 py-2.5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                  <option>Location A</option>
                  <option>Location B</option>
                  <option>Location C</option>
                  <option>Location D</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-medium">Email Address</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            {showAdditionalFields && (
              <>
                <div>
                  <label className="font-medium">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Middle Name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Lats Name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Date of Birth</label>
                  <input
                    type="date"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Marital Status</label>
                  <div className="relative mx-auto">
                    <select className="w-full mt-2 px-3 py-2.5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                      <option>Single</option>
                      <option>Married</option>
                      <option>Divorced</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-medium">Gender</label>
                  <div className="relative mx-auto">
                    <select className="w-full mt-2 px-3 py-2.5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-medium">City</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">
                    Educational Qualification
                  </label>
                  <div className="relative mx-auto">
                    <select className="w-full mt-2 px-3 py-2.5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                      <option>BSC</option>
                      <option>HND</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-medium">BPO Account</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div className="relative">
                  <div className="flex flex-row items-center justify-between">
                    <label className="font-medium">BPO Experience</label>
                    <div className="group relative">
                      <FaInfoCircle className="text-2xl text-gray-600 cursor-help" />
                      <span className="invisible group-hover:visible opacity-0 w-[200px] z-20 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm">
                        Kindly note that minimum of 6 months is required and
                        student is not allowed to apply
                      </span>
                    </div>
                  </div>

                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">Course of Study</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-medium">Status</label>
                  <div className="relative mx-auto">
                    <select className="w-full mt-2 px-3 py-2.5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                      <option>Line Up</option>

                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-bold">Upload Document</label>
                  <div className="max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center relative">
                    {selectedDoc ? (
                      <div className="flex items-center justify-between w-full px-4">
                        <div className="flex items-center">
                          <FaFile className="text-indigo-600 text-2xl mr-2" />
                          <span className="text-gray-700 truncate max-w-xs">
                            {selectedDoc.name}
                          </span>
                        </div>
                        <button
                          onClick={handleDocDelete}
                          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="document-file"
                        className="cursor-pointer text-center p-4 md:p-8"
                      >
                        <PiUploadLight className="text-indigo-600 text-6xl mx-auto" />
                        <p className="mt-3 text-gray-700 max-w-xs mx-auto">
                          Click to{" "}
                          <span className="font-medium text-indigo-600">
                            Upload your file
                          </span>{" "}
                          or drag and drop your file here
                        </p>
                      </label>
                    )}
                    <input
                      id="document-file"
                      type="file"
                      className="hidden"
                      onChange={handleDocChange}
                    />
                  </div>
                </div>
              </>
            )}
          </form>
          <div className="py-12" />
          <button
            onClick={handleContinue}
            className="w-full px-4 py-2 text-white font-medium bg-[#0045A1]  hover:bg-blue-900 rounded-lg duration-150"
          >
            {showAdditionalFields ? "Save" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLineUp;

{
  /* <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <h1 className="text-gray-400 text-2xl">Location Details</h1>
              <div>
                <label className="font-medium">Select Company</label>
                <div className="relative mx-auto">
                  <select className="w-full mt-2 px-3 py-2.5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                    <option>Company A</option>
                    <option>Company B</option>
                    <option>Company C</option>
                    <option>Company D</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-medium">Location Name</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Select Country</label>
                <div className="relative mx-auto">
                  <select className="w-full mt-2 px-3 py-2.5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                    <option>Country A</option>
                    <option>Country B</option>
                    <option>Country C</option>
                    <option>Country D</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-medium">State</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">City</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Address</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <div>
                <label className="font-bold">Upload Document</label>
                <div className="max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center relative">
                  {selectedDoc ? (
                    <div className="flex items-center justify-between w-full px-4">
                      <div className="flex items-center">
                        <FaFile className="text-indigo-600 text-2xl mr-2" />
                        <span className="text-gray-700 truncate max-w-xs">
                          {selectedDoc.name}
                        </span>
                      </div>
                      <button
                        onClick={handleDocDelete}
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="document-file"
                      className="cursor-pointer text-center p-4 md:p-8"
                    >
                      <PiUploadLight className="text-indigo-600 text-6xl mx-auto" />
                      <p className="mt-3 text-gray-700 max-w-xs mx-auto">
                        Click to{" "}
                        <span className="font-medium text-indigo-600">
                          Upload your file
                        </span>{" "}
                        or drag and drop your file here
                      </p>
                    </label>
                  )}
                  <input
                    id="document-file"
                    type="file"
                    className="hidden"
                    onChange={handleDocChange}
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Remark</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>

              <div>
                <label className="font-medium">Status</label>
                <div className="relative mx-auto">
                  <select className="w-full mt-2 px-3 py-2.5 pr-3 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg">
                    <option>Status A</option>
                    <option>Status B</option>
                    <option>Status C</option>
                    <option>Status D</option>
                  </select>
                </div>
              </div>
            </form> */
}
