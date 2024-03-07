import React from 'react'
import NavBar from "./NavBar";
import { Button, Textarea, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import ContactCard from "../Images/Contact-Card.png";
import QRCode from "../Images/QR-Code.png";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-3 text:sm sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl w-5/6 items-center justify-center pt-10 mx-auto bg-gray-200 text-gray-500 dark:text-gray-400 p-2 text-center mt-12 tracking-tight dark:text-white">
        <div className="mx-auto flex flex-col justify-center">
          <h3>Virtual Contact Card</h3>
          <h6>Click contact card image to access now</h6>
          <a
            href="https://www.dibiz.com/cbuonacore"
            alt="Digital Business Card"
            target="blank"
          >
            <img
              className="object-cover m-10 border-8 border-red-900"
              src={ContactCard}
              alt="Contact Card"
            />
          </a>
        </div>

        <div className="mx-auto flex flex-col items-center w-1/2">
          <form className="flex w-full flex-col gap-4">
            <h3>Send me a message</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="fullName" value="Full Name" required />
              </div>
              <TextInput id="text" type="text" required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="eMail" value="Email" required />
              </div>
              <TextInput id="email" type="email" rightIcon={HiMail} required />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="message" value="Message" required />
              </div>
              <Textarea
                id="message"
                type="text"
                sizing="xl"
                rows={8}
                required
              />
            </div>

            <Button type="submit" color="dark">
              Submit
            </Button>
          </form>

          <h1 className="text-blue-500 text-bold pt-16">TO DOS</h1>
          <h1 className="text-red-500 text-bold">Add logic to submit email</h1>
        </div>

        <div className="mx-auto flex flex-col justify-center w-3/5">
          <img
            className="object-cover m-10 border-8 border-gray-400"
            src={QRCode}
            alt="QR Code for Digital Contact Card"
          />
          <div className="flex flex-col mx-auto items-center mt-20 border-8 border-gray-400 p-7">
            <h1 className="text-gray-600 text-bold">
              Connect with me on LinkedIn
            </h1>
            <a
              href="https://www.linkedin.com/in/camryn-buonacore/"
              target="none"
            >
              <svg
                className="w-[130px] h-[130px] text-blue-600 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact