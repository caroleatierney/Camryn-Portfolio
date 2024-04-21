import React from "react";
import Award from "../Images/Isenberg-Sales-Club-Award.jpg";

export default function Awards() {
  return (
    <div className="bg-webPageBackground text-mediumGrayText w-3/4 mx-auto mt-20">
      <div className="text:xxs smallestMobile:text-xs smallMedMobile:text-sm tablet:text-lg laptop:text-xl desktop:text-2xl largeScreen:text-3xl w-5/6 regularMobile:pt-6 text-center items-center justify-center mx-auto bg-backgroundGray p-2 mt-2 tracking-tight dark:text-white flex flex-col mb-2">
        <div>
          <h1 className="pt-4 font-bold text:sm smallMedMobile:text-xl tablet:text-2xl laptop:text-2xl desktop:text-3xl largeScreen:text-4xl text-center pb-2">
            Isenberg Sales Club Award
          </h1>
          <h3 className="pt-4 font-bold text:sm smallMedMobile:text-xl tablet:text-2xl laptop:text-2xl desktop:text-3xl largeScreen:text-2xl text-center pb-2">
            April 19, 2024
          </h3>
          <img
            className="object-cover border-8 border-darkGrayBorder mt-4 mx-auto"
            src={Award}
            imgalt="Award Image"
          />
          <p className="text-mediumGrayText tablet:px-10 largeScreen:px-0">
            Award details...
          </p>
          <p className="text-mediumGrayText tablet:px-10 largeScreen:px-0">
            also any info about the women in business club and your title and
            duties and dates you were in it.
          </p>
        </div>
      </div>
    </div>
  );
}