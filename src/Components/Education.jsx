import React                 from 'react'
import NavBar                from "./NavBar";
import NavBarEdu             from "./NavBarEdu";
import Footer                from "./Footer";
import { Card }              from 'flowbite-react';
import UMassLogo             from "../Images/UMass-Logo.png";
import UMassIsenbergLogoI    from "../Images/Isenberg-Logo-I.jpeg";
import UMassIsenbergLogoName from "../Images/Isenberg-Name.png";

export default function Education() {
  return (
    <div className="text-UMassRed bg-webPageBackground">
      <NavBar />
      <NavBarEdu />
      <div className="flex flex-wrap justify-center items-center mx-auto p-6 w-5/6">
        <Card className="w-full mx-auto text-center bg-gray-300 text-gray-900 dark:text-white largeScreen:p-10 largeScreen:w-3/4">
          <div className="flex flex-col tablet:flex-row desktop:flex-row largeScreen:flex-row justify-evenly w-7/8">
            <div className="flex flex-col items-center mx-auto w-3/4 laptop:w-1/2 py-5 tablet:p-3">
              <div className="border-4 border-uMassRed bg-gray-200 flex flex-wrap items-center w-full tablet:px-10 laptop:mb-5 largeScreen:p-5 min-h-full min-w-full">
                <img
                  className="object-scale-down max-h-full drop-shadow-md m-auto  h-50 w-50 border-8 border-black"
                  src={UMassIsenbergLogoI}
                  alt="Isenberg-Logo"
                />
                <img
                  className="object-scale-down max-h-full max-w-full drop-shadow-md m-auto p-2 largeScreen:p-0"
                  src={UMassIsenbergLogoName}
                  alt="Isenberg-Logo-Name"
                />
              </div>
            </div>

            <div className="flex flex-col items-center mx-auto w-3/4 laptop:w-1/2 pb-5 tablet:p-3">
              <div className="border-4 border-uMassRed bg-gray-200 flex flex-wrap mx-auto tablet:px-10 min-h-full min-w-full justify-center align-middle">
                <img
                  className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto p-2 laptop:p-12 desktop:p-12 largeScreen:pt-10 h-50 w-50"
                  src={UMassLogo}
                  alt="UMass-Logo"
                />
                <span className="flex flex-col leading-loose font-serif mx-auto text-md tablet:text-md laptop:text-xl desktop:text-2xl largeScreen:text-3xl items-center justify-center desktop:pt-3">
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
      <Footer />
    </div>
  );
}