import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiFilter } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

const Filter = () => {
  // Date Picker
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  //   Company
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  // Location
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  // Years
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  //Education
  const [showEducationDropdown, setShowEducationDropdown] = useState(false);
  const [selectedEducations, setSelectedEducations] = useState([]);
  //Status
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  // Date Picker
  const toggleDatePicker = () => setShowDatePicker(!showDatePicker);

  const handleDateChange = (date) => {
    if (
      selectedDates.some(
        (selectedDate) => selectedDate.getTime() === date.getTime()
      )
    ) {
      setSelectedDates(
        selectedDates.filter(
          (selectedDate) => selectedDate.getTime() !== date.getTime()
        )
      );
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const applyFilter = () => {
    // Implement your filter logic here
    console.log("Applying filter with dates:", selectedDates);
    setShowDatePicker(false);
  };

  //   Company
  const companies = [
    "Teleperformance",
    "Accenture",
    "Foundever",
    "Concentrix",
    "EXL",
  ];
  const toggleCompanyDropdown = () =>
    setShowCompanyDropdown(!showCompanyDropdown);

  const handleCompanySelect = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  // Location
  const locations = ["Manila", "Cebu", "Davao", "Iloilo", "Bacolod"];

  const toggleLocationDropdown = () =>
    setShowLocationDropdown(!showLocationDropdown);

  const handleLocationSelect = (location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((l) => l !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  // Years
  const experiences = [
    "No experience",
    "1-6 months",
    "6-12 months",
    "2 years",
    "3 years",
    "4 years",
    "5 years",
    "5+ years",
  ];

  // Add this to your functions
  const toggleExperienceDropdown = () =>
    setShowExperienceDropdown(!showExperienceDropdown);

  const handleExperienceSelect = (experience) => {
    if (selectedExperiences.includes(experience)) {
      setSelectedExperiences(
        selectedExperiences.filter((e) => e !== experience)
      );
    } else {
      setSelectedExperiences([...selectedExperiences, experience]);
    }
  };

  const educations = [
    "HS Graduate",
    "SHS Graduate",
    "1 Year College",
    "2 Year College",
    "3 Year College",
    "4 Year College",
    "College Graduate",
    "Vocational Graduate",
    "ALS Graduate",
  ];

  // Add this to your functions
  const toggleEducationDropdown = () =>
    setShowEducationDropdown(!showEducationDropdown);

  const handleEducationSelect = (education) => {
    if (selectedEducations.includes(education)) {
      setSelectedEducations(selectedEducations.filter((e) => e !== education));
    } else {
      setSelectedEducations([...selectedEducations, education]);
    }
  };

  // Status
  const statuses = [
    "Line up",
    "Select",
    "Induction",
    "Billing",
    "Joined",
    "Walk in",
    "Drop",
    "Terminated",
    "Dispute",
    "Not a Select",
    "Tentative",
    "Active File",
  ];
  const toggleStatusDropdown = () => setShowStatusDropdown(!showStatusDropdown);

  const handleStatusSelect = (status) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== status));
    } else {
      setSelectedStatuses([...selectedStatuses, status]);
    }
  };

  return (
    <div className="relative flex lg:flex-row flex-wrap items-center border-2  justify-center border-gray-200 rounded-lg gap-4 text-xs">
      <div className="flex flex-row items-center gap-2 p-2 cursor-pointer">
        <CiFilter /> Filter By
      </div>
      <p
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={toggleDatePicker}
      >
        Interview Date <MdOutlineKeyboardArrowDown />
      </p>
      {showDatePicker && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg p-4 z-10">
          <DatePicker
            inline
            onChange={handleDateChange}
            selected={null}
            highlightDates={selectedDates}
            selectsRange={false}
            monthsShown={2}
          />
          <div className="mt-2 flex justify-between">
            <div>Selected dates: {selectedDates.length}</div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={applyFilter}
            >
              Apply
            </button>
          </div>
        </div>
      )}
      <p
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={toggleCompanyDropdown}
      >
        Company <MdOutlineKeyboardArrowDown />
      </p>
      {showCompanyDropdown && (
        <div className="absolute top-full left-22 mt-1 bg-white border border-gray-200 rounded-lg p-4 z-10 ">
          {companies.map((company) => (
            <div
              key={company}
              className={`cursor-pointer p-2 rounded  ${
                selectedCompanies.includes(company)
                  ? "bg-blue-500 text-white "
                  : "hover:bg-gray-100 "
              }`}
              onClick={() => handleCompanySelect(company)}
            >
              {company}
            </div>
          ))}
          <div className="mt-2 flex justify-between space-y-6">
            <div>
              You can chose multiple companies {selectedCompanies.length}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={applyFilter}
            >
              Apply
            </button>
          </div>
        </div>
      )}
      <p
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={toggleLocationDropdown}
      >
        Location <MdOutlineKeyboardArrowDown />
      </p>
      {showLocationDropdown && (
        <div className="absolute top-full right-[50%] mt-1 bg-white border  border-gray-200 rounded-lg p-4 z-10">
          {locations.map((location) => (
            <div
              key={location}
              className={`cursor-pointer p-2 rounded ${
                selectedLocations.includes(location)
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleLocationSelect(location)}
            >
              {location}
            </div>
          ))}
          <div className="mt-2 flex justify- space-y-6">
            <div>Selected locations: {selectedLocations.length}</div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={applyFilter}
            >
              Apply
            </button>
          </div>
        </div>
      )}
      <p
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={toggleExperienceDropdown}
      >
        Experience <MdOutlineKeyboardArrowDown />
      </p>
      {showExperienceDropdown && (
        <div className="absolute top-full left-[55%] mt-1 bg-white border border-gray-200 rounded-lg p-4 z-10">
          {experiences.map((experience) => (
            <div
              key={experience}
              className={`cursor-pointer p-2 rounded ${
                selectedExperiences.includes(experience)
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleExperienceSelect(experience)}
            >
              {experience}
            </div>
          ))}
          <div className="mt-2 flex justify-between space-y-6">
            <div>Selected experiences: {selectedExperiences.length}</div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={applyFilter}
            >
              Apply
            </button>
          </div>
        </div>
      )}
      <p
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={toggleEducationDropdown}
      >
        Education <MdOutlineKeyboardArrowDown />
      </p>
      {showEducationDropdown && (
        <div className="absolute top-full left-[60%] mt-1 bg-white border border-gray-200 rounded-lg p-4 z-10">
          {educations.map((education) => (
            <div
              key={education}
              className={`cursor-pointer p-2 rounded ${
                selectedEducations.includes(education)
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleEducationSelect(education)}
            >
              {education}
            </div>
          ))}
          <div className="mt-2 flex justify-between space-y-6">
            <div>Selected educations: {selectedEducations.length}</div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={applyFilter}
            >
              Apply
            </button>
          </div>
        </div>
      )}
      <p
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={toggleStatusDropdown}
      >
        Status <MdOutlineKeyboardArrowDown />
      </p>
      {showStatusDropdown && (
        <div className="absolute top-full left-[50%] mt-1 bg-white border border-gray-200 rounded-lg p-4 z-10">
          {statuses.map((status) => (
            <div
              key={status}
              className={`cursor-pointer p-2 rounded ${
                selectedStatuses.includes(status)
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleStatusSelect(status)}
            >
              {status}
            </div>
          ))}
          <div className="mt-2 flex justify-between space-y-6">
            <div>Selected statuses: {selectedStatuses.length}</div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={() => {
                applyFilter(selectedStatuses);
                setShowStatusDropdown(false);
              }}
            >
              Apply
            </button>
          </div>
        </div>
      )}
      <p className="flex flex-row items-center gap-2 text-red-500">
        <GrPowerReset /> Reset Filter
      </p>
    </div>
  );
};

export default Filter;
