import React from 'react'

export default function Education() {
  return (
    <div className="text-red-500">
      <h1>Education</h1>
      <div>
        <div>
          <div className="flex flex-row justify-between bg-green-100">
            <a
              href="http://linkedin.com/in/camryn-buonacore"
              className="flex-1 block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="../Assets/Buonacore-Camryn-Resume.pdf"
              className="flex-1 block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              target="_blank"
            >
              Resume
            </a>
          </div>
          `{" "}
          <div className="text-gray-300">
            <div className="flex flex-row">
              <div>
                <img
                  className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
                  src="../Assets/Isenberg-Logo.png"
                  alt="CB Logo"
                />
                src/Assets/CB-Logo.png
                src/Components/Education.jsx

              </div>
              <div className="m-5">
                <h3>Isenberg School of Management, UMass Amherst</h3>
                <h6>Bachelor of Business Administration - BBA</h6>
                <h6>Marketing</h6>
                <h6>Sep 2020 - May- 2024</h6>
              </div>
            </div>

            <div className="flex flex-row">
              <div>
                <img
                  className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
                  src="./Assets/UMass-Logo.png"
                />
              </div>
              <div>
                <h3>University of Massachusetts Amherst</h3>
                <h6>Bachelor of Business Administration - BBA</h6>
                <h6>Marketing</h6>
                <h6>Sep 2020 - May- 2024</h6>
                <h6>Cumulative GPA: 4.0</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}