import React from "react";
import { Card } from "flowbite-react";
import NavBar from "./NavBar";
import CamrynHeadshot from "../Images/Camryn-Headshot.jpg";

export default function About() {
  return (
    <div className="bg-webPageBackground">
      <NavBar />
      <div className="text:sm sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl w-5/6 items-center justify-center pt-10 mx-auto bg-backgroundGray p-2 text-center mt-12 tracking-tight dark:text-white flex flex-col md:flex-row">
        <div className="md:p-8 md:w-1/2">
          <img
            className="object-cover border-8 border-darkGrayBorder m-10 mx-0"
            src={CamrynHeadshot}
            imgAlt="Headshot"
          />
        </div>
        <div className="mb-10 md:p-8 md:w-1/2">
          <h1 className="font-bold text-center sm:text.sm mb-10 text-darkGrayText">
            About me
          </h1>
          <p className="font-normal text:sm sm:text-xs md:text-xs lg:text-3xl xl:text-4xl text-mediumGrayText">
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