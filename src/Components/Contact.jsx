import React from "react";
import NavBar from "./NavBar";
import EmailForm from "./EmailForm";
import ContactCard from "../Images/Contact-Card.png";
import QRCode from "../Images/QR-Code.png";

export default function Contact() {
  return (
    <div className="bg-webPageBackground">
      <NavBar />
      <div className="text:xs sm:text-1xl md:text-2xl lg:text-3xl xl:text-5xl w-5/6 items-center justify-center py-5 pb-3 mt-5 mx-auto bg-gray-200 text-gray-800 text-center font-bold">
        <h1>Ways to connect with me</h1>
      </div>

      <div className="flex flex-col xl:flex-row text:xs sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl items-center justify-center mx-auto bg-backgroundGray text-darkGray text-center tracking-tight dark:text-white w-5/6 min-h-screen mb-10">
        <div className="mx-auto flex flex-col justify-center w-9/10">
          <h1
            className="pb-3
          
                text-red-500 sm:text-purple-500 md:text-pink-500  lg:text-blue-500 xl:text-green-500"
          >
            Click on my virtual contact card
          </h1>

          <a
            className="w-5/6 mx-auto"
            href="https://www.dibiz.com/cbuonacore"
            alt="Digital Business Card"
            target="blank"
          >
            <img
              className="object-cover border-4 border-uMassRed"
              src={ContactCard}
              alt="Contact Card"
            />
          </a>
        </div>

        <EmailForm className="self-start" />

        <div className="mx-auto flex flex-col justify-center py-10 w-3/4 xl:w-1/3">
          <div className="min-height-screen flex flex-col items-center justify-center">
            <img
              className="object-cover border-8 border-lightBorderGray mx-auto md:w-[300px] md:h-[300px] w-2/3"
              src={QRCode}
              alt="QR Code for Digital Contact Card"
            />
            <div className="flex flex-col mx-auto items-center border-8 border-lightBorderGray mt-10 bg-white w-2/3">
              <h1 className="mt-5 font-bold text-5xl sm:text-1xl tablet:text-3xl md:text-3xl md:p-1 lg:text-5xl xl:text-3xl">
                Click to connect
              </h1>
              <div>
                <a
                  href="https://www.linkedin.com/in/camryn-buonacore/"
                  target="none"
                >
                  <svg
                    // className="mb-2 w-[150px] h-[150px] md:w-[200px] md:h-[200px] md:mx-11 lg:w-[500px] lg:h-[500px] xl:w-[350px] xl:h-[350px] text-blue-600 dark:text-white object-contain"
                    className="h-full w-full text-blue-600 dark:text-white" 
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                      clipRule="evenodd"
                    />
                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
