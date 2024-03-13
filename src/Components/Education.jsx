import React             from 'react'
import NavBar            from "./NavBar";
import { Card }          from 'flowbite-react';
import Resume            from "../Assets/Buonacore-Camryn-Resume.pdf";
import UMassLogo             from "../Images/UMass-Logo.png";
import UMassIsenbergLogoI    from "../Images/Isenberg-Logo-I.jpeg";
import UMassIsenbergLogoName from "../Images/Isenberg-Name.png";

export default function Education() {
  return (
    <div className="text-UMassRed bg-webPageBackground">
      <NavBar />
      <div className="flex flex-wrap justify-center items-center mx-auto p-10 w-5/6">
        <Card className="text-xs sm:text-sm md:text-lg text:sm md:text-sm lg:text-lg xl:text-3xl w-full text-center font-normal tracking-tight bg-gray-300 text-gray-900 dark:text-white">
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-col items-center w-1/2 mx-auto">
              <div className="flex flex-wrap bg-gray-200 border-8 border-UMassRed h-full justify-center items-center p-4 m-6">
                <img
                  className="pb-10"
                  src={UMassIsenbergLogoI}
                  alt="Isenberg-Logo"
                />
                <img src={UMassIsenbergLogoName} alt="Isenberg-Logo" />
              </div>
              {/* <a
                href="http://linkedin.com/in/camryn-buonacore"
                className="mt-5 text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                target="_blank"
              >
                LinkedIn
              </a> */}
            </div>
            <div className="flex flex-col items-center w-1/2 mx-auto">
              <div className="border-8 border-UMassRed bg-gray-200 p-4 m-6 flex flex-wrap items-center">
                <img
                  className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
                  src={UMassLogo}
                  alt="UMass-Logo"
                />
                <span className="inline-block justify-center align-middle  leading-loose font-serif mx-auto p-1">
                  <p>Bachelor of Business Administration</p>
                  <p>Marketing</p>
                  <p>Sep 2020 - May- 2024</p>
                  <p>Cumulative GPA: 4.0</p>
                </span>
              </div>
              {/* <a
                href={Resume}
                className="mt-5 text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                target="_blank"
              >Resume
              </a> */}
            </div>
          </div>
        </Card>
        {/* <Card className="w-full text-center font-bold tracking-tight bg-gray-200 text-gray-900 dark:text-white">
          <div className="flex flex-wrap justify-evenly">
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap border-8 p-2 xl:p-10 m-5 border-red-900 h-full justify-center">
                <img
                  className="pb-2 xl:pb-10"
                  src={UMassIsenbergLogoI}
                  alt="Isenberg-Logo"
                />
                <img
                  className="pb-2 xl:pb-10"
                  src={UMassIsenbergLogoName}
                  alt="Isenberg-Logo"
                />
              </div>
              <a
                href="http://linkedin.com/in/camryn-buonacore"
                className="mt-5 text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-sm rounded-lg text-md px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 xl:text-sm"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-col p-2 xl:p-10 m-5 h-full justify-center">
              <div className="border-8 border-red-900 p-10 m-5 flex flex-wrap items-center">
                <img
                  className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
                  src={UMassLogo}
                  alt="UMass-Logo"
                />
                <span className="inline-block text-sm sm:text-1xl md:text-3xl lg:text-4xl xl:text-4xl justify-center align-middle text-red-900 leading-loose font-serif mx-auto p-2 xl:p-12">
                  <p>Bachelor of Business Administration</p>
                  <p>Marketing</p>
                  <p>Sep 2020 - May- 2024</p>
                  <p>Cumulative GPA: 4.0</p>
                </span>
              </div>
              <a
                href={Resume}
                className="mt-5 text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-md xl:text-smpx-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </Card> */}
      </div>
    </div>
  );
}