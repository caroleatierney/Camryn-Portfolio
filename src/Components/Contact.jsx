import React from "react";
import NavBar from "./NavBar";
import EmailForm from "./EmailForm";
import ContactCard from "../Images/Contact-Card.png";
import QRCode from "../Images/QR-Code.png";

export default function Contact() {
  return (
    <div className="bg-webPageBackground">
      <NavBar />
      <div className="text:xs tablet:text-1xl laptop:text-2xl desktop:text-3xl largeScreen:text-5xl w-5/6 items-center justify-center py-5 pb-3 mt-5 mx-auto bg-gray-200 text-gray-800 text-center font-bold">
        <h1>Ways to connect with me</h1>
      </div>

      <div className="flex flex-col xl:flex-row text:xs tablet:text-desktop laptop:text-2xl desktop:text-3xl largeScreen:text-4xl items-center justify-center mx-auto bg-backgroundGray text-darkGray text-center tracking-tight dark:text-white w-5/6 min-h-screen mb-10">
        <div className="mx-auto flex flex-col justify-center w-full">
          <h1
            className="pb-3
          
                text-orange-500
                tablet:text-purple-500
                laptop:text-pink-500
                desktop:text-blue-500
                largeScreen:text-green-500"
          >
            Click on my virtual contact card
          </h1>

          <div className="w-full mx-auto">
            <a
              href="https://www.dibiz.com/cbuonacore"
              alt="Digital Business Card"
              target="blank"
            >
              <img
                className="object-contain border-8 border-uMassRed w-1/3 mx-auto"
                src={ContactCard}
                alt="Contact Card"
              />
            </a>
          </div>
        </div>

        <EmailForm className="self-start" />

        <div className="mx-auto flex flex-col justify-center py-10 w-3/4 largeScreen:w-1/3">
          <div className="min-height-screen flex flex-col items-center justify-center">
            <img
              className="object-cover border-8 border-lightBorderGray mx-auto md:w-[300px] md:h-[300px] w-2/3"
              src={QRCode}
              alt="QR Code for Digital Contact Card"
            />
            <div className="flex flex-col mx-auto items-center border-8 border-lightBorderGray mt-10 bg-white w-2/3">
              <h1 className="mt-5 font-bold text-xs tablet:text-1xl laptop:text-3xl laptop:p-1 desktop:text-5xl largeScreen:text-3xl">
                Click to connect
              </h1>
              <div>
                <a
                  href="https://www.linkedin.com/in/camryn-buonacore/"
                  target="none"
                >
                  <svg
                    // className="mb-2 w-[150px] h-[150px] md:w-[200px] md:h-[200px] md:mx-11 desktop:w-[500px] desktop:h-[500px] largeScreen:w-[350px] largeScreen:h-[350px] text-blue-600 dark:text-white object-contain"
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
