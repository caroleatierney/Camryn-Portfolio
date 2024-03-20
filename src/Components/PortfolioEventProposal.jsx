import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Carousel} from "flowbite-react";

import Page1  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-1.jpg"
import Page2  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-2.jpg";
import Page3  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-3.jpg";
import Page4  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-4.jpg";
import Page5  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-5.jpg";
import Page6  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-6.jpg";
import Page7  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-7.jpg";
import Page8  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-8.jpg";
import Page9  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-9.jpg";
import Page10 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-10.jpg";
import Page11 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-11.jpg";
import Page12 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-12.jpg";
import Page13 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-13.jpg";
import Page14 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-14.jpg";
import Page15 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-15.jpg";
import Page16 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-16.jpg";
import Page17 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-17.jpg";

export default function PortfolioEventProposal() {
  return (
    <div className="bg-webPageBackground">
      <NavBar />
      <div>
        <h1 className="text-md largeScreen:text-2xl text-center tracking-tight text-gray-300 dark:text-white mx-auto">
          This is a sample event proposal I created in one of my college courses
          to gain real hands on experience in special events management. I
          decided to plan a Bridal Shower and was in charge of everything from
          theme and design, to budget, to venue and location.
        </h1>
      </div>
      <div className="h-[20rem] w-1/3 justify-center items-center mx-auto">
        <Carousel pauseOnHover>
          <img src={Page1} alt="Page 1" />
          <img src={Page2} alt="Page 2" />
          <img src={Page3} alt="Page 3" />
          <img src={Page4} alt="Page 4" />
          <img src={Page5} alt="Page 5" />
          <img src={Page6} alt="Page 6" />
          <img src={Page7} alt="Page 7" />
          <img src={Page8} alt="Page 8" />
          <img src={Page9} alt="Page 9" />
          <img src={Page10} alt="Page 10" />
          <img src={Page11} alt="Page 11" />
          <img src={Page12} alt="Page 12" />
          <img src={Page13} alt="Page 13" />
          <img src={Page14} alt="Page 14" />
          <img src={Page15} alt="Page 15" />
          <img src={Page16} alt="Page 16" />
          <img src={Page17} alt="Page 17" />
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}