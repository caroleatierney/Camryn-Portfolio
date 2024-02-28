import React from 'react'
import NavBar from "./NavBar";

export default function Education() {
  return (
    <div className="text-gray-300 bg-slate-700">
      <NavBar />
      <div className="text-3xl p-12 flex flex-row justify-evenly">
        <div>Education</div>
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
    </div>

    // <div className="text-gray-300">
    //   <div className="flex flex-row">
    //     <div>
    //       <img
    //         className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
    //         src="./src/Assets/Isenberg-Logo.png"
    //         alt="CB Logo"
    //       />
    //       src/Assets/CB-Logo.png src/Components/Education.jsx
    //     </div>
    //     <div className="m-5">
    //       <h3>Isenberg School of Management, UMass Amherst</h3>
    //       <h6>Bachelor of Business Administration - BBA</h6>
    //       <h6>Marketing</h6>
    //       <h6>Sep 2020 - May- 2024</h6>
    //     </div>
    //   </div>

    //   <div className="flex flex-row">
    //     <div>
    //       <img
    //         className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
    //         src="./Assets/UMass-Logo.png"
    //       />
    //     </div>
    //     <div>
    //       <h3>University of Massachusetts Amherst</h3>
    //       <h6>Bachelor of Business Administration - BBA</h6>
    //       <h6>Marketing</h6>
    //       <h6>Sep 2020 - May- 2024</h6>
    //       <h6>Cumulative GPA: 4.0</h6>
    //     </div>
    //   </div>
    // </div>
  );
}