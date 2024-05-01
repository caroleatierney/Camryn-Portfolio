import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Carousel, Flowbite} from "flowbite-react";
import CustomTheme from './CustomTheme';

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
    <div className="bg-webPageBackground h-screen">
      <NavBar />
      {/* <div className="w-full largeScreen:w-1/2 mx-auto p-6"> */}
      <div className="h-56 sm:h-64 xl:h-80 largeScreen:w-5/12 2xl:h-96 mx-auto p-5">
        <h1 className="smallestMobile:text-xxxs smallMobile:text-sm desktop:text-xl largeScreen:text-2xl text-center tracking-tight text-gray-300 dark:text-white mx-auto px-6">
          This is a sample event proposal I created in one of my college courses
          to gain real hands on experience in special events management. I
          decided to plan a Bridal Shower and was in charge of everything from
          theme and design, to budget, to venue and location.
        </h1>
      </div>
      <Flowbite theme={{ theme: CustomTheme }}>
        {/* <div className="w-9/10 largeScreen:w-2/5 tablet:w-1/2 laptop:w-3/5 desktop:w-1/2 smallestMobile:h-screen mx-auto"> */}
        {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96"> */}
        {/* <div className="overflow-hidden relative mx-auto h-screen w-full tablet:w-1/2 tablet:py-2 regularMobile:w-7/8 tablet:w-7/8 laptop:w-4/5 desktop:w-2/3 largeScreen:w-5/12"> */}
        <Carousel pauseOnHover className="w-5/6 h-full mx-auto">
          {/* <div className="carousel-image-container h-auto overflow-hidden"> */}
          {/* <div className="carousel-image-container h-100 overflow-hidden w-1/2"> */}
          <div className="w-full object-cover">
            <img src={Page1} alt="Page 1" />
          </div>
          <div className="w-full object-contain">
            <img src={Page2} alt="Page 2" />
          </div>
          {/* <div className="h-full w-full object-contain">
              <img src={Page3} alt="Page 3" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page4} alt="Page 4" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page5} alt="Page 5" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page6} alt="Page 6" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page7} alt="Page 7" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page8} alt="Page 8" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page9} alt="Page 9" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page10} alt="Page 10" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page11} alt="Page 11" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page12} alt="Page 12" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page13} alt="Page 13" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page14} alt="Page 14" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page15} alt="Page 15" />
            </div>
            <div className="h-full w-full object-contain">
              <img src={Page16} alt="Page 16" />
            </div>*/}
          <div className="w-full object-contain">
            <img src={Page17} alt="Page 17" />
          </div>
          {/* </div> */}
        </Carousel>
        {/* </div> */}
      </Flowbite>
      <Footer />
    </div>
  );
}