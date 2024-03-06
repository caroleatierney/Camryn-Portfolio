import React from "react";
import { Card } from "flowbite-react";
import NavBar from "./NavBar";
import CamrynHeadshot from "../Images/Camryn-Headshot.jpg";

export default function About() {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2 text:sm sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl w-5/6 items-center justify-center pt-10 mx-auto bg-gray-200 text-gray-500 dark:text-gray-400 p-2 text-center mt-12 tracking-tight dark:text-white">
        <div>
          <img
            className="object-cover m-10 border-8 border-zinc-400"
            src={CamrynHeadshot}
            imgAlt="Headshot"
          ></img>
        </div>
        <div className="ml-20 mr-10 mb-10">
          <h1 className="bg-gray-200 font-bold  text-center hover:animate-bounce sm:text.sm mb-10">
            About me
          </h1>
          <p className="font-normal text:sm sm:text-2xl md:text-xs lg:text-3xl xl:text-4xl text-gray-500">
            I am a graduate from the Isenberg School of Management at the
            University of Massachusetts Amherst. I chose to complete my degree at the Isenberg
            School of Management because of its exceptional education and strong
            reputation of preparing its students for their future career post
            college. I am interested in acquiring a job in a marketing, sales,
            or event management position and expand upon my prior knowledge by
            gaining new skills and experience. I would love to work for a
            company that allow me to combine my marketing skills with my passion
            for social media outreach and event planning.
          </p>
        </div>
      </div>
    </div>
  );
}