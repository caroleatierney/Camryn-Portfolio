import React from "react";
import { Link } from "react-router-dom";
import CamrynLogo from "../Images/CB-Logo.png";

export default function NavBar() {
  return (
    <div className="bg-slate-700 flex flex-row p-3 justify-evenly text-3xl text-slate-200 items-center">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <img src={CamrynLogo} class="max-w-20" alt="CB Logo" />
        <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white text-gray-300 p-7">
          Camryn Buonacore
        </span>
      </div>
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
        <Link to="/portfolioSwaponz">PortfolioSwaponz</Link>
      </div>
      <div>
        <Link to="/portfolioEventProposal">PortfolioEventProposal</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};
