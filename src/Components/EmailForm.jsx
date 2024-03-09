import React, { useState } from "react";
import { Button, Textarea, Label, TextInput, Alert } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Toast } from "flowbite-react";
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
    <div  className="flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col align-top gap-4 text-gray-800 text:base sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl"
      >
        <h3 className="pb-5">Send me a message</h3>
        <div>
          <div>
            <Label
              htmlFor="fullName"
              value="Full Name"
              className="text:sm sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl"
              required
            />
          </div>
          <TextInput
            id="text"
            type="text"
            name="user_name"
            className="text-4xl"
            size="4xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="eMail"
              value="Email"
              className="text:sm sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl"
              required
            />
          </div>
          <TextInput
            id="email"
            type="email"
            name="user_email"
            value={email}
            className="text-lg font-large"
            onChange={(e) => setEmail(e.target.value)}
            rightIcon={HiMail}
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="message"
              value="Message"
              name="message"
              className="text:sm sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl"
              required
            />
          </div>
          <Textarea
            id="message"
            type="text"
            className="text:sm sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
            required
          />
        </div>

        <Button
          type="submit"
          color="dark"
          size="2xl"
          className="text-white text:lg sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl bg-gray-500"
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