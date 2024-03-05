import React from "react";
import { Card } from "flowbite-react";
import NavBar from "./NavBar";
import CamrynHeadshot from "../Images/Camryn-Headshot.jpg";

export default function About() {
  return (
    <div>
      <NavBar />
      <div className="w-1/2 mx-auto">
        <Card
          className="bg-gray-200 p-3"
          imgSrc={CamrynHeadshot}
          imgAlt="Headshot"
        >
          <h1 className="text:sm sm:text-3xl md:text-4xl lg:text-5xl bg-gray-200 font-bold tracking-tight text-gray-600 dark:text-white text-center p-2 hover:animate-bounce sm:text.sm">
            About me
          </h1>
          <p className="font-normal text:sm  text-red-500 sm:text-3xl sm:text-amber-500 md:text-4xl md:text-yellow-200 lg:text-5xl lg:text-blue-500 bg-gray-200 text-gray-500 dark:text-gray-400 p-2 text-center">
            I am a senior at the University of Massachusetts Amherst, pursuing a
            BBA in marketing and a minor in psychology. I chose to complete my
            degree at the Isenberg School of Management because of its
            exceptional education and strong reputation of preparing its
            students for their future career post college. I am interested in
            acquiring a job in a marketing position or related business
            position, where I can expand upon my prior knowledge with new
            information, skills, and experience. I would love to work for a
            company that allow me to combine my marketing skills with my passion
            for social media outreach and event planning.
          </p>
        </Card>
      </div>
    </div>
  );
}