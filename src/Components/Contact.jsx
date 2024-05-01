import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import EmailForm from "./EmailForm";
import ContactCard from "../Images/Contact-Card.png";
import QRCode from "../Images/QR-Code.png";

export default function Contact() {
  return (
    <div className="bg-webPageBackground">
      <NavBar />
      <div className="smallestMobile:text-xs smallMobile:text-sm tablet:text-2xl laptop:text-2xl desktop:text-3xl largeScreen:text-5xl w-5/6 items-center justify-center py-5 mt-5 mx-auto bg-gray-200 text-gray-800 text-center font-bold">
        <h1>Ways to connect with me</h1>
      </div>

      <div className="flex flex-col xl:flex-row smallestMobile:text-xs tablet:text-lg desktop laptop:text-2xl desktop:text-3xl largeScreen:text-4xl items-center justify-center mx-auto bg-backgroundGray text-darkGray text-center tracking-tight dark:text-white w-5/6 min-h-screen mb-10">
        <div className="mx-auto flex flex-col justify-center w-full">
          <h1 className="pb-3">Click on my virtual contact card</h1>

          <div className="w-full mx-auto">
            <a
              href="https://www.dibiz.com/cbuonacore"
              alt="Digital Business Card"
              target="blank"
            >
              <img
                className="object-contain border-8 border-uMassRed w-2/3 desktop:w-1/3 mx-auto"
                src={ContactCard}
                alt="Contact Card"
              />
            </a>
          </div>
        </div>

        <EmailForm className="self-start" />

        <div className="flex flex-col mb-12">
          <div>
            <h1 className="font-bold smallestMobile:text-xs tablet:text-xl laptop:text-2xl largeScreen:text-3xl px-4 py-8">
              Scan the QR Code or click on the LinkedIn Icon to connect
            </h1>
          </div>
          <div className="flex flex-row items-center justify-evenly">
            <img
              className="border-4 border-lightBorderGray size-12 smallMobile:size-24 laptop:size-64 largeScreen:size-80"
              src={QRCode}
              alt="QR Code for Digital Contact Card"
            />
            <a
              href="https://www.linkedin.com/in/camryn-buonacore/"
              target="none"
            >
              <svg
                className="object-cover text-blue-600 dark:text-white size-12 smallMobile:size-24  laptop:size-64 largeScreen:size-80 border-4 border-lightBorderGray bg-white"
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
      <Footer />
    </div>
  );
}
