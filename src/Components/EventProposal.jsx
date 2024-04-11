import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "react-feather"
import NavBar from "./NavBar";
import Footer from "./Footer";

import Page1 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-1.jpg";
import Page2 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-2.jpg";
import Page3 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-3.jpg";
import Page4 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-4.jpg";
import Page5 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-5.jpg";
import Page6 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-6.jpg";
import Page7 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-7.jpg";
import Page8 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-8.jpg";
import Page9 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-9.jpg";
import Page10 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-10.jpg";
import Page11 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-11.jpg";
import Page12 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-12.jpg";
import Page13 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-13.jpg";
import Page14 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-14.jpg";
import Page15 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-15.jpg";
import Page16 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-16.jpg";
import Page17 from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-17.jpg";

export default function EventProposal() {
    const [curr, setCurr] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const prev = () =>
      setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () =>
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    const slides = [
      <img key="1"  src={Page1}  />,
      <img key="2"  src={Page2}  />,
      <img key="3"  src={Page3}  />,
      <img key="4"  src={Page4}  />,
      <img key="5"  src={Page5}  />,
      <img key="6"  src={Page6}  />,
      <img key="7"  src={Page7}  />,
      <img key="8"  src={Page8}  />,
      <img key="9"  src={Page9}  />,
      <img key="10" src={Page10} />,
      <img key="11" src={Page11} />,
      <img key="12" src={Page12} />,
      <img key="13" src={Page13} />,
      <img key="14" src={Page14} />,
      <img key="15" src={Page15} />,
      <img key="16" src={Page16} />,
      <img key="17" src={Page17} />,
    ];

    const Carousel = ({
    autoSlide = true,
    autoSlideInterval = 3000,
    }) => {
      useEffect(() => {
        const slideInterval = setInterval(() => {
          if (!isHovering) next();
        }, autoSlideInterval);
        return () => clearInterval(slideInterval);
      }, [autoSlide, isHovering]); // Dependencies on autoSlide and isHovering
    }
  return (
    <div className="bg-webPageBackground h-screen">
      <NavBar />
      <div className="h-45 smallestMobile:h-22 xl:h-80 desktop:w-4/5 largeScreen:w-1/2 2xl:h-96 mx-auto p-5">
        <h1 className="text-xxs smallestMobile:text-xxxs smallMobile:text-xxs smallMedMobile:text-sm tablet:text-sm laptop:text-xl desktop:text-2xl largeScreen:text-3xltext-center tracking-tight text-gray-300 dark:text-white mx-auto px-6">
          This is a sample event proposal I created in one of my college courses
          to gain real hands on experience in special events management. I
          decided to plan a Bridal Shower and was in charge of everything from
          theme and design, to budget, to venue and location.
        </h1>
      </div>

      <div className="overflow-hidden relative mx-auto w-5/6 regularMobile:w-7/8 tablet:w-7/8 laptop:w-4/5 desktop:w-2/3 largeScreen:w-5/12">
        <div
          className="flex transition-transform ease-out duration-500 items-center"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="absolute bottom-8 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-2.5 h-2.5 bg-backgroundGray rounded-full  ${
                  curr === i ? "p-0.5" : "bg-black/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}