import React from 'react'
import NavBar from "./NavBar";
import ContactCard from "../Images/Contact-Card.png";
import QRCode from "../Images/QR-Code.png";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2 text:sm sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl w-5/6 items-center justify-center pt-10 mx-auto bg-gray-200 text-gray-500 dark:text-gray-400 p-2 text-center mt-12 tracking-tight dark:text-white">
        <div className="w-1/2 mx-auto flex flex-col justify-center">
          <h1>Scan this QR Code:</h1>
          <h1>Select the contact icon</h1>
          <h1>Then save me in your contacts</h1>
          <img
            className="object-cover m-10"
            src={QRCode}
            alt="QR Code for Digital Contact Card"
          />
        </div>
        <div className="w-1/2 mx-auto flex flex-col justify-center">
          <h3>Virtual Contact Card</h3>
          <h6>Click contact card image to access now</h6>
          <a
            href="https://www.dibiz.com/cbuonacore"
            alt="Digital Business Card"
            target="blank"
          >
            <img
              className="object-cover m-10"
              src={ContactCard}
              alt="Contact Card"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact