import React from "react";
import { Card } from "flowbite-react";
import NavBar from "./NavBar";

export default function About() {
  return (
    <div>
      <NavBar />
      <Card
        className="max-w-full text-center"
        imgSrc="./Assets/Camryn-Headshot.jpg"
        horizontal
      >
        <h1 className="text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
          About me
        </h1>
        <p className="font-normal text-gray-500 dark:text-gray-400">
          I am a senior at the University of Massachusetts Amherst, pursuing a
          BBA in marketing and a minor in psychology. I chose to complete my
          degree at the Isenberg School of Management because of its exceptional
          education and strong reputation of preparing its students for their
          future career post college. I am interested in acquiring a job in a
          marketing position or related business position, where I can expand
          upon my prior knowledge with new information, skills, and experience.
          I would love to work for a company that allows me to combine my
          marketing skills with my passion for social media outreach and event
          planning.
        </p>
      </Card>
    </div>
  );
}
