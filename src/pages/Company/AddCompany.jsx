import React, { useState } from "react";
import Header from "../../components/Company/Header";
import { FaFile, FaTrash } from "react-icons/fa";
import { PiUploadLight } from "react-icons/pi";

const AddCompany = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(null);

  const [selectedDoc, setSelectedDoc] = useState(null);
  const [docError, setDocError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
      setError("Please select an image file.");
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError(null);
  };
  // For Docs Files

  const handleDocChange = (event) => {
    const doc = event.target.files[0];
    if (doc) {
      setSelectedDoc(doc);
    }
  };

  const handleDocDelete = () => {
    setSelectedDoc(null);
  };

  return (
    <div>
      <Header />
      <div className="lg:p-2 py-2">
        <div className="bg-white p-4  min-h-[100vh]">
          <div className="flex flex-row items-center justify-between">
            <p>Add Company</p>
          </div>
          <hr className="my-3" />
          <div className="p-2  relative">
            <div className="grid grid-cols-2 gap-12">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="font-medium">Company Name</label>
                  <input
                    type="text"
                    placeholder="Enter the name of the company"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Country</label>
                  <input
                    type="email"
                    placeholder="Select Country"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Phone number</label>
                  <div className="relative mt-2">
                    <input
                      type="number"
                      placeholder="Enter the Phone number of the company"
                      required
                      className="w-full pl-[1.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <div></div>
                  <label className="font-medium">Additional Notes</label>
                  <textarea
                    required
                    placeholder="Enter the additional note of the company"
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-[#0045A1]  hover:bg-blue-900 rounded-lg duration-150">
                  Save Company
                </button>
              </form>
              <div className="space-y-12">
                <div>
                  <label className="font-bold">Company Logo</label>
                  <div className="max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center relative">
                    {previewUrl ? (
                      <div className="relative w-full h-full">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="max-w-[500px] max-h-full object-cover"
                        />
                        <button
                          onClick={handleDelete}
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="file"
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
                      id="file"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
                <div>
                  <label className="font-bold">Company Document</label>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCompany;
