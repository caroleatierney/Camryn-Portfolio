import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-slate-200">
        <Link to="/Camryn-Portfolio">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/portfolioSwaponz">PortfolioSwaponz</Link>
        <Link to="/portfolioEventProposal">PortfolioEventProposal</Link>
        <Link to="/contact">Contact</Link>
    </div>
  );
};
