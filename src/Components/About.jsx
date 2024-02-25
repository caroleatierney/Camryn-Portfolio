import React from "react";
export default function About() {
  return (
    <div>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 grid grid-cols-2">
          <div className="py-4 px-4 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <img
              src="./src/Assets/Camryn-Headshot.jpg"
              alt="Camryn's Headshot"
              className="object-cover"
            />
          </div>

          <div className="py-4 px-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <div>
              <h1 className="mb-8 text-2xl font-bold tracking-tight leading-none text-gray-400 md:text-4xl lg:text-6xl dark:text-white">
                About me
              </h1>
              <p className="mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-4 lg:px-48 dark:text-gray-400">
                I am a senior at the University of Massachusetts Amherst,
                pursuing a BBA in marketing and a minor in psychology. I chose
                to complete my degree at the Isenberg School of Management
                because of its exceptional education and strong reputation of
                preparing its students for their future career post college. I
                am interested in acquiring a job in a marketing position or
                related business position, where I can expand upon my prior
                knowledge with new information, skills, and experience. I would
                love to work for a company that allows me to combine my
                marketing skills with my passion for social media outreach and
                event planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
