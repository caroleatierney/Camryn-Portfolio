import React from "react";
import { Card } from "flowbite-react";
import NavBar from "./NavBar";
import CamrynHeadshot from "../Images/Camryn-Headshot.jpg";

export default function About() {
  return (
    <div className="bg-webPageBackground text-mediumGrayText">
      <NavBar />
      <div
        className="text:sm sm:text-sm md:text-lg text:sm md:text-xs lg:text-lg xl:text-3xl w-5/6 text-center items-center justify-center mx-auto bg-backgroundGray p-2 mt-12 tracking-tight dark:text-white flex flex-col md:flex-row lg:flex-row mb-20
      
          text-red-500 sm:text-purple-500 md:text-orange-700  lg:text-blue-500 xl:text-green-500"
      >
        <div className="md:p-8 md:w-1/2 lg:w-1/2">
          <img
            className="object-cover border-8 border-darkGrayBorder m-10 lg:m-0 mx-0"
            src={CamrynHeadshot}
            imgAlt="Headshot"
          />
        </div>
        <div className="mb-10 md:p-1 md:w-1/2 lg:w-1/2">
          {/* <h1 className="font-bold text-center sm:text.sm mb-10 text-darkGrayText"> */}
          <h1 className="font-bold text-center sm:text.sm lg:mb-1 mb-10 md:mb-2 text:sm sm:text-sm md:text-lg lg:text-3xl xl:text-5xl ">
            About me
          </h1>
          {/* <p className="font-normal text:sm sm:text-xs md:text-xs lg:text-3xl xl:text-4xl text-mediumGrayText"> */}
          <p className="font-normal">
            I am a graduate from the Isenberg School of Management at the
            University of Massachusetts Amherst. I chose to complete my degree
            at the Isenberg School of Management because of its exceptional
            education and strong reputation of preparing its students for their
            future career post college. I am interested in acquiring a job in a
            marketing, sales, or event management position and expand upon my
            prior knowledge by gaining new skills and experience. I would love
            to work for a company that will allow me to combine my marketing
            skills with my passion for social media outreach and event planning.
          </p>
        </div>
      </div>
    </div>
  );
}