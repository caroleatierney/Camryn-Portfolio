import React from "react";
import NavBar from "./NavBar";
import Award from "../Images/Isenberg-Sales-Club-Award.jpg";
import Footer from "./Footer";

export default function Awards() {
  return (
    <div className="bg-webPageBackground text-mediumGrayText">
      <NavBar />
      <div className="text:xxs smallestMobile:text-xs smallMedMobile:text-sm tablet:text-lg laptop:text-xl desktop:text-2xl largeScreen:text-3xl w-3/4 regularMobile:pt-6 text-center items-center justify-center mx-auto bg-backgroundGray p-2 tracking-tight dark:text-white flex flex-col mb-2 mt-2">
        <div>
          <h1 className="font-bold text:sm smallMedMobile:text-xl tablet:text-2xl laptop:text-2xl desktop:text-3xl largeScreen:text-4xl text-center">
            Isenberg Sales Club Award
          </h1>
          <h3 className="text:sm smallMedMobile:text-xl tablet:text-2xl laptop:text-2xl desktop:text-3xl largeScreen:text-2xl text-center">
            April 19, 2024
          </h3>
          <img
            className="object-cover border-8 border-darkGrayBorder mt-4 mx-auto size-2/3"
            src={Award}
            imgalt="Award Image"
          />
          <p className="text-mediumGrayText tablet:px-10 largeScreen:px-0">
            <a
              href="https://www.isenberg.umass.edu/news/isenberg-sales-club-hosts-competition"
              className="mt-5 text-white bg-mediumGrayText hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xxs px-2 py-1 regularMobile:px-4 regularMobile:py-2 regularMobile:text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              target="_blank"
            >
              See more here
            </a>
          </p>
         </div>
      </div>
      <Footer />
    </div>
  );
}