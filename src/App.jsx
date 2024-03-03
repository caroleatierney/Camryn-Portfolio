// For some reason this is /Camryn-Portfolio - set up in package.json

import React from 'react';
import NavBar from './Components/NavBar';

export default function App() {
  return (
    <>
      <NavBar />
      <div className='justify-center'>
        <h1 className="text-5xl text-gray-300">Hi, I'm Camryn.</h1>
        <p className='text-3xl'>
          I'm a soon to be grad from UMass Amherst, Isenberg School of Management. I have a passion for Marketing, Social Media and Event Planning.
        </p>
      </div>
    </>
  );
}