import React from "react";
import NavBar from "./NavBar";
import { Card } from "flowbite-react";
export default function PortfolioSwaponz() {
  return (
    <div>
      <NavBar />
      {/* <div className="w-screen flex flex-col items-center justify-center pt-10"> */}
        <Card className="bg-gray-200 m-10 p-5 h-auto w-3/4 md:w-3/4 lg:w-3/4 xl:w-5/6 mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl bg-gray-200 font-bold tracking-tight text-gray-600 dark:text-white text-center hover:animate-bounce">
            Swaponz Internship | June 2023 - Present
          </h1>
          <p className="font-normal text:xs sm:text-3xl  md:text-4xl 0 lg:text-3xl xl:text-4xl bg-gray-200 text-gray-500 dark:text-gray-400 p-2 text-justify">
            This past summer I had the opportunity to begin an internship at a
            startup company called Swaponz. Swaponz is a phone case company that
            creates one of a kind and customizable phone cases that can be
            swapped with its unique non-sticky technology. Working at a startup,
            one of my jobs was to develop creative campaigns and collaborations
            to market Swaponz. One of my most success collaborations was with
            the Women in Business club at my university. I met with the
            presidents of the club and introduced them to Swaponz, as well as
            pitched my idea for our collaboration. I had the ability to plan and
            run a Women in Business meeting about Swaponz and my experience at
            the company. I informed students about the startup business world
            and created customized Women in Business Swaponz products to sell to
            members. My internship with Swaponz has given me the opportunity to
            plan and lead informational meetings that will be beneficial in any
            future positions.
          </p>
          <p className="font-normal text:xs sm:text-3xl  md:text-4xl 0 lg:text-3xl xl:text-4xl bg-gray-200 text-gray-500 dark:text-gray-400 p-2 text-justify">
            As a sales and marketing intern at Swaponz, I am creatively
            promoting Swaponz products both in person and online. I lead the
            ambassador program, where I create content for social media, as well
            as recruit other ambassadors to create content to share online. I
            work directly with the founder of Swaponz to develop business
            proposals and communicate ideas to the people and businesses
            involved. When the opportunities arise, I then become an integral
            part of planning and conducting the event.
          </p>
          <div className="font-normal text-sm sm:text-2xl  md:text-2xl 0 lg:text-2xl xl:text-3xl pt-3 pb-2 justify-center flex">
            <a
              href="https://swaponz.com/"
              target="_blank"
              className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Check out Swaponz
            </a>
          </div>
        </Card>
      {/* </div> */}
    </div>
  );
}