// For some reason this is /Camryn-Portfolio - set up in package.json

import React from 'react';
import NavBar from './Components/NavBar';

export default function App() {
  return (
    <>
      <div className="bg-webPageBackground min-height: 100vh">
        <NavBar />
        <div className="flex text-center text-lightGrayText flex-col mt-20">
          <h1 className="md:text-5xl">Hi, I'm Camryn.</h1>
          <p className="md:text-3xl mt-20">
            I am a graduate from the Isenberg School of Management at the
            University of Massachusetts Amherst. I have a passion for Marketing,
            Sales and Event Planning.
          </p>
          <h1 className="text-4xl mt-56 m-60 text-red-600 bg-backgroundGray">
            Camryn - I am hoping to add some images for marketing sales and
            event planning with some animation moving across the screen I could
            also remove this page entirely and have the home page be the about
            me page. Let me know what you prefer. If you want to keep this page
            and have any ideas for images you can send them to me as well. I
            think my next task is to get the education page to display
            responsively on different screens - then tackle the same with the
            event proposal.
          </h1>
        </div>
      </div>
    </>
  );
}