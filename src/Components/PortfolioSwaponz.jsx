import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Card } from "flowbite-react";
export default function PortfolioSwaponz() {
  return (
    <div className="bg-webPageBackground text-mediumGrayText">
      <NavBar />
      <div className="w-screen flex justify-center pt-5 text-lg tablet:text-md laptop:text-lg desktop:text-xl largeScreen:text-2xl">
        <Card className="bg-backgroundGray w-5/6 laptop:w-5/6 desktop:w-3/4 largeScreen:w-5/6 mx-auto md:p-2 md:m-2">
          <div className="leading-loose font-serif mx-auto text-xs smallMedMobile:text-md tablet:text-md laptop:text-lg desktop:text-3xl largeScreen:text-4xl font-bold tracking-tight dark:text-white text-center flex flex-col tablet:flex-row justify-center">
            <div>
              <h1>Swaponz Internship</h1>
            </div>
            <div className="invisible tablet:visible laptop:visible px-5">
              <h1>|</h1>
            </div>
            <div>
              <h1>June 2023 - Present</h1>
            </div>
          </div>
          <div className="laptop:text-justify text-center font-serif mx-auto text-xxxs smallestMobile:text-xxxs smallMobile:text-xxs smallMedMobile:text-xs tablet:text-sm laptop:text-md desktop:text-2xl largeScreen:text-2xl pt-2">
            <p className="pb-6">
              This past summer I had the opportunity to begin an internship at a
              startup company called Swaponz. Swaponz is a phone case company
              that creates one of a kind and customizable phone cases that can
              be swapped with its unique non-sticky technology. Working at a
              startup, one of my jobs was to develop creative campaigns and
              collaborations to market Swaponz. One of my most success
              collaborations was with the Women in Business club at my
              university. I met with the presidents of the club and introduced
              them to Swaponz, as well as pitched my idea for our collaboration.
              I had the ability to plan and run a Women in Business meeting
              about Swaponz and my experience at the company. I informed
              students about the startup business world and created customized
              Women in Business Swaponz products to sell to members. My
              internship with Swaponz has given me the opportunity to plan and
              lead informational meetings that will be beneficial in any future
              positions.
            </p>
            <p>
              As a sales and marketing intern at Swaponz, I am creatively
              promoting Swaponz products both in person and online. I lead the
              ambassador program, where I create content for social media, as
              well as recruit other ambassadors to create content to share
              online. I work directly with the founder of Swaponz to develop
              business proposals and communicate ideas to the people and
              businesses involved. When the opportunities arise, I then become
              an integral part of planning and conducting the event.
            </p>
          </div>
          <div className="mx-auto">
            <a
              href="https://swaponz.com/"
              target="_blank"
              className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-serif mx-auto text-xxxs smallMedMobile:text-xs regularMobile:text-xs tablet:text-xs laptop:text-sm desktop:text-2xl largeScreen:text-2xl"
            >
              Check out Swaponz
            </a>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}