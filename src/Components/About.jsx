import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CamrynHeadshot from "../Images/Camryn-Headshot.jpg";

export default function About() {
  return (
    <div className="bg-webPageBackground text-mediumGrayText">
      <NavBar />
      <div className="text:xxs smallestMobile:text-xs smallMedMobile:text-sm tablet:text-lg laptop:text-xl desktop:text-2xl largeScreen:text-3xl w-5/6 regularMobile:pt-6 text-center items-center justify-center mx-auto bg-backgroundGray p-2 mt-2 tracking-tight dark:text-white flex flex-col mb-2">
        <div className="w-5/6 tablet:w-3/4 pt-2">
          <img
            className="object-cover border-4 border-darkGrayBorder mx-0"
            src={CamrynHeadshot}
            imgalt="Headshot"
          />
        </div>
        <div className="mb-2 largeScreen:w-3/4">
          <h1 className="pt-4 font-bold text:sm smallMedMobile:text-xl tablet:text-2xl laptop:text-2xl desktop:text-3xl largeScreen:text-4xl text-center pb-2">
            About me
          </h1>
          <p className="text-mediumGrayText tablet:px-10 largeScreen:px-0">
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
      <Footer />
    </div>
  );
}