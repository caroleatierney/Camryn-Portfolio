import React             from 'react'
import NavBar            from "./NavBar";
import { Card } from 'flowbite-react';
import UMassLogo         from "../Images/UMass-Logo.png";
import UMassIsenbergLogo from "../Images/Isenberg-Logo.png";

export default function Education() {
  return (
    <div className="text-gray-300 bg-slate-700">
      <NavBar />
      <div className="text-3xl p-12 flex flex-row justify-evenly">
        <div>
          <a
            href="http://linkedin.com/in/camryn-buonacore"
            className="flex-1 block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>

        <div>
          <a
            href="../Assets/Buonacore-Camryn-Resume.pdf"
            className="flex-1 block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="text-gray-300 bg-slate-700 text-3xl p-12 flex flex-row justify-evenly">
        <Card className="w-full text-center font-bold tracking-tight text-gray-900 dark:text-white">
          <h1>University of Massachusetts Amherst</h1>
          <div className="flex flex-row justify-evenly">
            <img className="" src={UMassIsenbergLogo} alt="Isenberg-Logo" />
            <h5>Isenberg School of Management</h5>
          </div>
          <div>
              <img
                className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
                src={UMassLogo}
                alt="UMass-Logo"
              />
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <h6>Bachelor of Business Administration</h6>
                <h6>Marketing</h6>
                <h6>Sep 2020 - May- 2024</h6>
                <h6>Cumulative GPA: 4.0</h6>
              </p>
          </div>
        </Card>
      </div>
    </div>
  );
}