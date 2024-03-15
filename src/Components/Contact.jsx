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

      <div className="flex flex-col xl:flex-row text:xs sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl items-center justify-center mx-auto bg-backgroundGray text-darkGray text-center tracking-tight dark:text-white w-5/6">
        <div className="mx-auto flex flex-col justify-center w-3/4">
          <h1
            className="pb-3
          
                text-red-500 sm:text-purple-500 md:text-pink-500  lg:text-blue-500 xl:text-green-500"
          >
            Click on virtual contact card
          </h1>

          <a
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

        <EmailForm className="w-3/4 px-2 self-start" />

        <div className="mx-auto flex flex-col justify-center py-10 w-3/4 px-8">
          <div className="min-h-screen">
            <img
              className="object-cover m-5 border-8 border-gray-400 mx-auto"
              src={QRCode}
              alt="QR Code for Digital Contact Card"
            />
            <div className="flex flex-col mx-auto items-center mt-16 border-8 border-gray-400 p-7 lg:w-[500px] lg:h-[500px]">
              <h1 className="text-gray-800 font-bold text:xl sm:text-1xl md:text-3xl lg:text-5xl xl:text-3xl">
                Click to connect
              </h1>
              <a
                href="https://www.linkedin.com/in/camryn-buonacore/"
                target="none"
              >
                <svg
                  className="w-[230px] h-[230px] lg:w-[300px] lg:h-[300px] text-blue-600 dark:text-white object-scale-down"
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
  );
}
