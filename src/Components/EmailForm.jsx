import React, { useState } from "react";
import { Button, Textarea, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // email service ID, template ID and Public Key
    const serviceId = "service_d0b4xjy";
    const templateId = "template_wrkhdfv";
    const publicKey = "aQaPOXxtDG44Xk-7N";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Camryn",
      message: message,
    };

    // send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Thank you for your email.", response);
        setName("");
        setMessage("");
        setEmail("");
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      });
  };

  return (
    <div className="mx-auto flex flex-col items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="emailForm flex w-full flex-col gap-4 text-gray-800 text:sm sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl"
      >
        <h3>Send me a message</h3>
        <div>
          <div>
            <Label
              htmlFor="fullName"
              value="Full Name"
              className="text-gray-500 text:sm sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl"
              required
            />
          </div>
          <TextInput
            id="text"
            type="text"
            name="user_name"
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
              className="text-gray-500 text:sm sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl"
              required
            />
          </div>
          <TextInput
            id="email"
            type="email"
            name="user_email"
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
              value="Message"
              name="message"
              className="text-gray-500 text:sm sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl"
              required
            />
          </div>
          <Textarea
            id="message"
            type="text"
            sizing="xl"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
            required
          />
        </div>

        <Button type="submit" color="dark">
          Submit
        </Button>
      </form>
    </div>
  );
}
