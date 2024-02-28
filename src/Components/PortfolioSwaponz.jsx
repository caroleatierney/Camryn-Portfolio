import React from "react";
import NavBar from "./NavBar";
export default function PortfolioSwaponz() {
  return (
    <div>
      <NavBar />
      <div className="text-center">
        <a
          href="portfolio-event-proposal.html"
          target="_blank"
          className="text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Event Proposal
        </a>
      </div>

      <div className="mx-auto text-center text-xs p-2">
        <div className="block max-w-lg p-6 border bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Swaponz Internship | June 2023 - Present
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
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
          <p>
            As a sales and marketing intern at Swaponz, I am creatively
            promoting Swaponz products both in person and online. I lead the
            ambassador program, where I create content for social media, as well
            as recruit other ambassadors to create content to share online. I
            work directly with the founder of Swaponz to develop business
            proposals and communicate ideas to the people and businesses
            involved. When the opportunities arise, I then become an integral
            part of planning and conducting the event.
          </p>
          <a
            href="https://swaponz.com/"
            target="_blank"
            className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Check out Swaponz
          </a>
        </div>
      </div>
    </div>
  );
}