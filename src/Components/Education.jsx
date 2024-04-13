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
        <Card className="w-full mx-auto text-center bg-gray-300 text-gray-900 dark:text-white m-10">
          <div className="flex flex-col mx-auto w-full tablet:flex-row tablet:p-20 laptop:p-5">
            <div className="border-2 tablet:border-4 border-uMassRed bg-gray-200 flex flex-col items-center basis-1/2 mb-3 laptop:m-2">
              <div className="flex items-center justify-content-center basis-1/2">
                <img
                  className="object-cover border-4 tablet:border-8 laptop:border-4 border-white"
                  src={UMassIsenbergLogoI}
                  alt="Isenberg-Logo"
                />
              </div>
              <div className="p-3 tablet:p-8 laptop:p-2 flex items-center justify-content-center basis-1/2">
                <img
                  className="object-cover"
                  src={UMassIsenbergLogoName}
                  alt="Isenberg-Logo-Name"
                />
              </div>
            </div>

            <div className="border-2 tablet:border-4 border-uMassRed bg-gray-200 flex flex-col items-center basis-1/2 tablet:m-10 laptop:m-2">
              <div className="p-2 tablet:p-8">
                <img
                  className="object-cover"
                  src={UMassLogo}
                  alt="UMass-Logo"
                />
              </div>
              <div className="tablet:p-8">
                <span className="flex flex-col leading-loose font-serif mx-auto text-mini smallestMobile:text-mini smallMobile:text-xxs smallMedMobile:text-md tablet:text-sm laptop:text-lg desktop:text-2xl largeScreen:text-2xl items-center justify-center desktop:pt-3">
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