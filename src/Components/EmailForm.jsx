import React, { useState } from "react";
import { Button, Textarea, Label, TextInput, Toast } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccesssMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // email service ID, template ID and Public Key
    const serviceId  = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey  = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Camryn",
      message: message,
    };

    // send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Message sent successfully");
        setName("");
        setMessage("");
        setEmail("");
        setSuccesssMessage("Message sent successfully");
        })
      .catch((error) => {
        console.log("Error sending email:", error);
      });
  };

  return (
    <div className="flex flex-col bg-backgroundGray w-full pt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col align-top gap-4 px-5 text-darkGrayText smallestMobile:text-xs tablet:text-2xl w-4/5 mx-auto"
      >
        <h3 className="font-bold">Send me a message</h3>
        <div>
          <div>
            <Label
              htmlFor="fullName"
              className="smallestMobile:text-xs xl:text-2xl"
              value="Full Name"
              required
            />
          </div>
          <TextInput
            id="text"
            type="text"
            name="user_name"
            className="smallestMobile:text-xs sm:text-1xl md:text-xl lg:text-xl xl:text-1xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="eMail"
              className="smallestMobile:text-xs xl:text-2xl"
              value="Email"
              required
            />
          </div>
          <TextInput
            id="email"
            type="email"
            name="user_email"
            className="smallestMobile:text-xs smallMobile:text-sm tablet:text-xl lg:text-xl xl:text-4xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            rightIcon={HiMail}
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="message"
              className="smallestMobile:text-xs xl:text-2xl"
              value="Message"
              name="message"
              required
            />
          </div>
          <Textarea
            id="message"
            type="text"
            className="text:sm sm:text-1xl md:text-xl lg:text-xl xl:text-1xl"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
            required
          />
        </div>

        <Button
          type="submit"
          color="dark"
          size="sm xl:md"
          className="text-white bg-gray-500 xl:text-2xl"
        >
          Submit
        </Button>
      </form>
      {successMessage && (
        <div className="flex pt-10 justify-center">
          <Toast className="w-full max-w-xl">
            <FaTelegramPlane className="h-20 w-20 text-cyan-600 dark:text-cyan-500" />
            <div className="pl-4 text:lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl font-normal">
              Thank you for your message. I look forward to connecting with you.
            </div>
          </Toast>
        </div>
      )}
    </div>
  );
}