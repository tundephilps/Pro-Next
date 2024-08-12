import { useEffect, useRef, useState } from "react";
import { FaBell, FaWallet } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { PiSquaresFourFill } from "react-icons/pi";
import { FaBuilding } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { MdPerson3 } from "react-icons/md";
import { PiListStarFill } from "react-icons/pi";
import { PiNotebookFill } from "react-icons/pi";
import { BiSolidNotepad } from "react-icons/bi";
import { FaFlag } from "react-icons/fa";
import { FaGraduationCap, FaMessage } from "react-icons/fa6";
import { PiOfficeChairFill } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BsCashCoin } from "react-icons/bs";
import { MdDynamicForm } from "react-icons/md";
import { TbShieldHeart } from "react-icons/tb";

const Menu = (props) => {
  const { children, items } = props;
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="">
      <button
        className="w-full flex items-center justify-between text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className="flex items-center gap-x-2">{children}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 duration-150 ${isOpened ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpened ? (
        <ul className="mx-4 px-2 border-l text-sm font-medium">
          {items.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
              >
                {item.icon ? (
                  <div className="text-gray-500">{item.icon}</div>
                ) : (
                  ""
                )}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

const Sidebar = () => {
  const navigation = [
    {
      href: "javascript:void(0)",
      name: "MENU",
    },
    // {
    //   href: "javascript:void(0)",
    //   name: "Integration",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-5 h-5"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
    //       />
    //     </svg>
    //   ),
    // },
  ];

  const navsFooter = [
    {
      href: "javascript:void(0)",
      name: "Message",
      icon: <FaMessage className="text-[#00439D] text-2xl" />,
    },
    {
      href: "javascript:void(0)",
      name: "Notification",
      icon: <FaBell className="text-[#00439D] text-2xl" />,
    },
    {
      href: "javascript:void(0)",
      name: "Account Settings",
      icon: <MdAccountCircle className="text-[#00439D] text-2xl" />,
    },
    {
      href: "javascript:void(0)",
      name: "Application Settings",
      icon: <IoMdSettings className="text-[#00439D] text-2xl" />,
    },
  ];

  const DashboardNest = [
    {
      name: "Main Dashboard",
      href: "javascript:void(0)",
      icon: <PiSquaresFourFill className="text-[#00439D] text-2xl" />,
    },
    {
      name: "Payment Dashboard",
      href: "javascript:void(0)",
      icon: <FaWallet className="text-[#00439D] text-2xl" />,
    },
  ];

  const CompanyNest = [
    {
      name: "Add Companies",
      href: "javascript:void(0)",
    },
    {
      name: "View Companies",
      href: "javascript:void(0)",
    },
  ];
  const JobLocationNest = [
    {
      name: "Add Location",
      href: "javascript:void(0)",
    },
    {
      name: "View Location",
      href: "javascript:void(0)",
    },
  ];
  const LineUpNest = [
    {
      name: "Add Line Up",
      href: "javascript:void(0)",
    },
    {
      name: "View Line Up",
      href: "javascript:void(0)",
    },
    {
      name: "Group Line Up",
      href: "javascript:void(0)",
    },
  ];
  const CandidateNest = [
    {
      name: "Add Review",
      href: "javascript:void(0)",
    },
    {
      name: "View Review",
      href: "javascript:void(0)",
    },
  ];
  const TipNest = [
    {
      name: "Personal Space",
      href: "javascript:void(0)",
    },
    {
      name: "General Space",
      href: "javascript:void(0)",
    },
    {
      name: "Dashboard Information",
      href: "javascript:void(0)",
    },
  ];
  const TaskNest = [
    {
      name: "Add Task",
      href: "javascript:void(0)",
    },
    {
      name: "View Task",
      href: "javascript:void(0)",
    },
  ];

  const CountryNest = [
    {
      name: "Add Country",
      href: "javascript:void(0)",
    },
    {
      name: "View Country",
      href: "javascript:void(0)",
    },
  ];

  const EducationNest = [
    {
      name: "Add Education",
      href: "javascript:void(0)",
    },
    {
      name: "View Education",
      href: "javascript:void(0)",
    },
  ];
  const ExperienceNest = [
    {
      name: "Add Experience",
      href: "javascript:void(0)",
    },
    {
      name: "View Experience",
      href: "javascript:void(0)",
    },
  ];
  const UserLogNest = [
    {
      name: "Users Log List",
      href: "javascript:void(0)",
    },
  ];

  const HumanResourcesNest = [
    {
      name: "Add User",
      href: "javascript:void(0)",
    },
    {
      name: "View User",
      href: "javascript:void(0)",
    },
    {
      name: "Create Group",
      href: "javascript:void(0)",
    },
    {
      name: "View Group",
      href: "javascript:void(0)",
    },
  ];

  const PaymentNest = [
    {
      name: "View Payment",
      href: "javascript:void(0)",
    },
    {
      name: "Complete Payment",
      href: "javascript:void(0)",
    },
    {
      name: "Group Payment",
      href: "javascript:void(0)",
    },
    {
      name: "Team Leader Incentive",
      href: "javascript:void(0)",
    },
    {
      name: "Add Fixed Payment",
      href: "javascript:void(0)",
    },
    {
      name: "View Fixed Payment",
      href: "javascript:void(0)",
    },
    {
      name: "Payment settings",
      href: "javascript:void(0)",
    },
    {
      name: "Billing",
      href: "javascript:void(0)",
    },
  ];

  const RecruitersNest = [
    {
      name: "Export Candidates",
      href: "javascript:void(0)",
    },
  ];

  const FormNest = [
    {
      name: "Create Form",
      href: "javascript:void(0)",
    },
    {
      name: "View Form",
      href: "javascript:void(0)",
    },
  ];

  const ServicesNest = [
    {
      name: "Services List",
      href: "javascript:void(0)",
    },
  ];

  const profileRef = useRef();

  const [isProfileActive, setIsProfileActive] = useState(false);

  return (
    <>
      <nav className="">
        <div class="flex flex-col h-full px-4">
          <div className="h-20 flex items-center pl-2">
            <img src={Logo} />
          </div>
          <div className="overflow-auto">
            <ul className="text-sm font-medium flex-1">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                  >
                    <div className="text-red-500">{item.icon}</div>
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <Menu items={DashboardNest}>DASHBOARD</Menu>
              </li>
              <p className="py-3">RECRUITMENT</p>
              <li>
                <Menu items={CompanyNest}>
                  <FaBuilding className="text-[#00439D] text-2xl" /> Company
                </Menu>
              </li>
              <li>
                <Menu items={JobLocationNest}>
                  {" "}
                  <IoBriefcase className="text-[#00439D] text-2xl" /> Job
                  Location
                </Menu>
              </li>
              <li>
                <Menu items={LineUpNest}>
                  {" "}
                  <MdPerson3 className="text-[#00439D] text-2xl" /> Line Up
                </Menu>
              </li>
              <li>
                <Menu items={CandidateNest}>
                  {" "}
                  <PiListStarFill className="text-[#00439D] text-2xl" />{" "}
                  Candidate Review
                </Menu>
              </li>
              <li>
                <Menu items={TipNest}>
                  {" "}
                  <PiNotebookFill className="text-[#00439D] text-2xl" /> Tips &
                  Space
                </Menu>
              </li>
              <li>
                <Menu items={TaskNest}>
                  {" "}
                  <BiSolidNotepad className="text-[#00439D] text-2xl" /> Tasks
                </Menu>
              </li>
              <p className="py-3">ADMINISTRATION</p>
              <li>
                <Menu items={CountryNest}>
                  {" "}
                  <FaFlag className="text-[#00439D] text-2xl" /> Country
                </Menu>
              </li>
              <li>
                <Menu items={EducationNest}>
                  {" "}
                  <FaGraduationCap className="text-[#00439D] text-2xl" />{" "}
                  Education
                </Menu>
              </li>
              <li>
                <Menu items={ExperienceNest}>
                  {" "}
                  <PiOfficeChairFill className="text-[#00439D] text-2xl" />{" "}
                  Experience
                </Menu>
              </li>
              <li>
                <Menu items={UserLogNest}>
                  {" "}
                  <FaTasks className="text-[#00439D] text-2xl" /> User Log
                </Menu>
              </li>
              <li>
                <Menu items={HumanResourcesNest}>
                  <FaUserFriends className="text-[#00439D] text-2xl" />
                  Human Resource
                </Menu>
              </li>
              <li>
                <Menu items={PaymentNest}>
                  <BsCashCoin className="text-[#00439D] text-2xl" />
                  Payment
                </Menu>
              </li>
              <li>
                <Menu items={RecruitersNest}>
                  <FaUserFriends className="text-[#00439D] text-2xl" />
                  Intrested Recruiter
                </Menu>
              </li>
              <li>
                <Menu items={FormNest}>
                  <MdDynamicForm className="text-[#00439D] text-2xl" />
                  Form
                </Menu>
              </li>
              <li>
                <Menu items={ServicesNest}>
                  <TbShieldHeart className="text-[#00439D] text-2xl" />
                  Services
                </Menu>
              </li>
            </ul>

            <div className="pt-2 mt-2 border-t">
              <p>PERSONAL ACCOUNT</p>
              <ul className="text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                    >
                      <div className="text-[#00439D]">{item.icon}</div>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
