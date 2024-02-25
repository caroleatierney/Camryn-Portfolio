import React from "react";
import About from "/src/Components/About";
import PortfolioSwaponz from "/src/Components/PortfolioSwaponz";
import PortfolioEventProposal from "/src/Components/PortfolioEventProposal";

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-green-500">
        Hello world!
      </h1>
      <About></About>
      <PortfolioSwaponz></PortfolioSwaponz>
      <PortfolioEventProposal></PortfolioEventProposal>
    </div>
  );
}
