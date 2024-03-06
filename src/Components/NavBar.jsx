import React from "react";
import { Link } from "react-router-dom";
// import Images from "./Images";
import CamrynLogo from "../Images/CB-Logo.png";
import { Dropdown } from "flowbite-react";

const customTheme = {
  inlineWrapper:
    "text-slate-200 bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};

export default function NavBar() {
  return (
    <div className="bg-slate-700 flex flex-wrap p-3 justify-evenly text-3xl text-slate-200 items-center">
      <div className="flex flex-wrap items-center space-x-4 rtl:space-x-reverse">
        <img src={CamrynLogo} className="w-1/5 h-1/5" alt="CB Logo" />
        <span className="self-center text-5xl font-semibold  dark:text-white text-gray-300 p-7">
          CAMRYN BUONACORE
        </span>
      </div>
      {/* <div className="flex justify-evenly content-center"> */}
        <div>
          <Link to="/Camryn-Portfolio">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/education">Education</Link>
        </div>

        <div>
          <Dropdown
            inline={true}
            theme={customTheme}
            label="Portfolio"
            className="bg-slate-300 hover:bg-gray-300 text-black text-5xl"
            dismissOnClick={false}
          >
            <Dropdown.Item>
              <Link to="/portfolioSwaponz">PortfolioSwaponz</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/portfolioEventProposal">PortfolioEventProposal</Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      {/* </div> */}
    </div>
  );
};
