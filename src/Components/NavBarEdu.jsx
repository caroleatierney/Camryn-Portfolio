import React from "react";
import Resume from "../Assets/Buonacore-Camryn-Resume.pdf";

const customTheme = {
  inlineWrapper:
    "text-slate-200 bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-xxs smallestMobile:text-xxxs smallMobile:text-xxs smallMedMobile:text-sm tablet:text-sm laptop:text-xl desktop:text-2xl largeScreen:text-3xl px-0 py-0 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};

export default function NavBarEdu() {
  return (
    <div className="bg-webPageBackground flex flex-row justify:center justify-evenly text-xs text-lightGrayText items-center w-2/3 mx-auto">
      <a
        href="http://linkedin.com/in/camryn-buonacore"
        className="mt-5 text-white bg-mediumGray hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xxs px-2 py-1 regularMobile:px-4 regularMobile:py-2 regularMobile:text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        target="_blank"
      >
        LinkedIn
      </a>
      <a
        href={Resume}
        className="mt-5 text-white bg-mediumGray hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xxs px-2 py-1 regularMobile:px-4 regularMobile:py-2 regularMobile:text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        target="_blank"
      >
        Resume
      </a>
    </div>
  );
};
