import React from "react";
import { Link } from "react-router-dom";
// import Images from "./Images";
import CamrynLogo from "../Images/CB-Logo.png";
import { Dropdown } from "flowbite-react";

const customTheme = {
  inlineWrapper:
    "text-slate-200 bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-xxs smallestMobile:text-xxs smallMedMobile:text-xs regularMobile:text-sm tablet:text-lg laptop:text-lg desktop:text-3xl largeScreen:text-3xl px-0 py-0 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};

export default function NavBar() {
  return (
    <div className="bg-webPageBackground flex tablet:flex-row laptop:flex-row p-3 desktop:flex-row justify:center desktop:justify-evenly text-lightGrayText items-center">
      <div className="flex flex-row items-center space-x-4 rtl:space-x-reverse w-1/2 laptop:w-5/12">
        <img src={CamrynLogo} className="w-1/5 h-1/5" alt="CB Logo" />
        <span
          className="self-center text-xs smallestMobile:text-xs smallMobile:text-md  smallMedMobile:text-lg regularMobile:text-lg laptop:text-2xl desktop:text-3xl largeScreen:text-5xl dark:text-white xs:p-7
        
                text-orange-500
                smallestMobile:text-yellow-100
                smallMobile:text-orange-300
                smallMedMobile:text-green-100
                regularMobile:text-blue-200
                tablet:text-purple-500
                laptop:text-pink-500
                desktop:text-blue-500
                largeScreen:text-green-500
                
                "
        >
          CAMRYN BUONACORE
        </span>
      </div>
      <div className="flex flex-col pl-12 text-xxs smallestMobile:text-xxs smallMobile:text-xxs smallMedMobile:text-xs regularMobile:text-sm tablet:text-lg tablet:flex-row w-1/2 tablet:w-3/4 laptop:text-lg laptop:flex-row laptop:w-3/4 regularMobile:flex-row regularMobile:w-9/12 desktop:flex-row desktop:w-9/12 desktop:text-3xl largeScreen:text-3xl largeScreen:w-7/12 justify-evenly">
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
              <Link
                to="/Camryn-Portfolio/portfolioSwaponz"
                className="text-xxs smallMedMobile:text-xs tablet:text-lg desktop:text-3xl text-mediumGray"
              >
                PortfolioSwaponz
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {/* <Link to="/Camryn-Portfolio/portfolioEventProposal"> */}
              {/* PortfolioEventProposal */}
              {/* </Link> */}

              <Link
                to="/Camryn-Portfolio/EventProposal"
                className="text-xxs smallMedMobile:text-xs tablet:text-lg desktop:text-3xl text-mediumGray"
              >
                EventProposal
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
