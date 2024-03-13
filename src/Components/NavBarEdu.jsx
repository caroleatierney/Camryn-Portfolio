import React from "react";
import Resume from "../Assets/Buonacore-Camryn-Resume.pdf";

const customTheme = {
  inlineWrapper:
    "text-slate-200 bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-md lg:text-xl xl:text-2xl px-0 py-0 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};

export default function NavBarEdu() {
  return (
    <div className="bg-webPageBackground flex flex-row justify:center justify-evenly text-xs lg:text-xl text-lightGrayText items-center">
      <a
        href="http://linkedin.com/in/camryn-buonacore"
        className="mt-5 text-white bg-mediumGray hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        target="_blank"
      >
        LinkedIn
      </a>
      <a
        href={Resume}
        className="mt-5 text-white bg-mediumGray hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        target="_blank"
      >
        Resume
      </a>
    </div>
  );
};
