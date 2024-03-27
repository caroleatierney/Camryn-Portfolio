import React from "react";
import { Link } from "react-router-dom";
// import Images from "./Images";
import CamrynLogo from "../Images/CB-Logo.png";
import { Dropdown } from "flowbite-react";

const customTheme = {
  inlineWrapper:
    "text-slate-200 bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-xs laptop:text-lg desktop:text-xl largeScreen:text-2xl px-0 py-0 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};

export default function NavBar() {
  return (
    <div className="bg-webPageBackground flex xs:flex-wrap tablet:text-sm tablet:flex-row laptop:flex-row p-3 laptop:text-lg desktop:text-xl largeScreen:text-2xl desktop:flex-row justify:center desktop:justify-evenly text-xs text-lightGrayText items-center">
      <div className="flex flex-row items-center space-x-4 rtl:space-x-reverse w-1/2 laptop:w-5/12 desktop:w-3/12">
        <img src={CamrynLogo} className="w-1/5 h-1/5" alt="CB Logo" />
        <span
          className="self-center text-xl laptop:text-2xl desktop:text-2xl desktop:flex desktop:justify-left largeScreen:text-3xl dark:text-white xs:p-7
        

                
                "
        >
          CAMRYN BUONACORE
        </span>
      </div>
      <div className="flex flex-col pl-12 tablet:flex-row w-1/2 tablet:w-3/4 laptop:flex-row laptop:w-3/4 desktop:flex-row desktop:w-9/12 largeScreen:w-7/12 justify-evenly">
        <div>
          <Link to="/Camryn-Portfolio/">About</Link>
        </div>
        <div>
          <Link to="/Camryn-Portfolio/education">Education</Link>
        </div>
        <div>
          <Dropdown
            inline={true}
            theme={customTheme}
            label="Portfolio"
            className="bg-slate-300 hover:bg-gray-300 text-black"
            dismissOnClick={false}
          >
            <Dropdown.Item>
              <Link to="/Camryn-Portfolio/portfolioSwaponz">
                PortfolioSwaponz
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/Camryn-Portfolio/portfolioEventProposal">
                PortfolioEventProposal
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <Link to="/Camryn-Portfolio/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};
