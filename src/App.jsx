import { useState } from "react";
import "./App.css";
import Logo from "../src/assets/Logo.png";
import Sidebar from "./layout/Sidebar";
import ExportCandidate from "./pages/ExportCandidate";
import Leftbar from "./layout/Leftbar";
import AddCompany from "./pages/Company/AddCompany";
import ViewCompany from "./pages/Company/ViewCompany";
import AddLocation from "./pages/Locatiom/AddLocation";
import ViewLocation from "./pages/Locatiom/ViewLocation";
import AddLineUp from "./pages/Lineup/AddLineUp";

function App() {
  return (
    <>
      <div className="grid lg:grid-cols-10 grid-cols-1 ">
        <div className="col-span-2 lg:block hidden">
          <Sidebar />
        </div>
        <div className="col-span-6 bg-[#D9D9D9] px-[1px]">
          {/* <ExportCandidate /> */}
          {/* <AddCompany /> */}
          {/* <ViewCompany /> */}
          {/* <AddLocation /> */}
          {/* <ViewLocation /> */}
          {/* <AddLineUp /> */}
        </div>{" "}
        <div className="col-span-2 ">
          <Leftbar />
        </div>
      </div>
    </>
  );
}

export default App;
