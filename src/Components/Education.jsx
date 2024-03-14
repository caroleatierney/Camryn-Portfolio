import React             from 'react'
import NavBar            from "./NavBar";
import NavBarEdu         from "./NavBarEdu";
import { Card }          from 'flowbite-react';
import UMassLogo             from "../Images/UMass-Logo.png";
import UMassIsenbergLogoI    from "../Images/Isenberg-Logo-I.jpeg";
import UMassIsenbergLogoName from "../Images/Isenberg-Name.png";

export default function Education() {
  return (
    <div className="text-UMassRed bg-webPageBackground">
      <NavBar />
      <NavBarEdu />
      <div className="flex flex-wrap justify-center items-center mx-auto p-6 w-5/6">
        <Card className="w-full text-center bg-gray-300 text-gray-900 dark:text-white xl:p-10">
          <div className="flex flex-col lg:flex-row xl:flex-row justify-evenly w-7/8">
            <div className="flex flex-col items-center mx-auto w-1/2 pb-5 md:pb-0">
              <div className="border-4 border-uMassRed bg-gray-200 flex flex-wrap items-center w-full md:p-5 md:mb-5 sm:mr-3 md:mr-0 lg:mr-3 xl:p-10 min-h-full min-w-full">
                <img
                  className="object-scale-down max-h-full drop-shadow-md m-auto p-2 xl:p-0 md:p-12 h-50 w-50"
                  src={UMassIsenbergLogoI}
                  alt="Isenberg-Logo"
                />
                <img
                  className="object-scale-down max-h-full max-w-full drop-shadow-md m-auto p-2 xl:p-0"
                  src={UMassIsenbergLogoName}
                  alt="Isenberg-Logo-Name"
                />
              </div>
            </div>
            <div className="flex flex-col items-center mx-auto w-1/2">
              <div className="border-4 border-uMassRed bg-gray-200 flex flex-wrap mx-auto sm:ml-3 md:ml-0 md:p-5 lg:ml-3 min-h-full min-w-full justify-center align-middle">
                <img
                  className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto p-2 md:p-12 lg:p-12 xl:p-0 h-50 w-50"
                  src={UMassLogo}
                  alt="UMass-Logo"
                />
                <span
                  className="flex flex-col leading-loose font-serif mx-auto text-xxs md:text-xl lg:text-2xl xl:text-3xl items-center justify-center
              
                   text-red-500 sm:text-purple-500 md:text-orange-700  lg:text-blue-500 xl:text-green-500"
                >
                  <p className="font-bold">
                    Bachelor of Business Administration
                  </p>
                  <p>Marketing</p>
                  <p>Sep 2020 - May- 2024</p>
                  <p>Cumulative GPA: 4.0</p>
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}