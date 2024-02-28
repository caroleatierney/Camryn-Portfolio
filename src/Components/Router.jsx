import React from "react";
import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";

import About                  from "../Components/About.jsx";
import Header                 from "../Components/Header";
import Footer                 from "../Components/Footer";
import Education              from "../Components/Education";
import Contact                from "../Components/Contact";
import PortfolioSwaponz       from "../Components/PortfolioSwaponz";
import PortfolioEventProposal from "../Components/PortfolioEventProposal";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/camryn-portfolio", element: <App /> },
  { path: "/header", element: <Header /> },
  { path: "/about", element: <About /> },
  { path: "/footer", element: <Footer /> },
  { path: "/education", element: <Education /> },
  { path: "/contact", element: <Contact /> },
  { path: "/portfolioSwaponz", element: <PortfolioSwaponz /> },
  { path: "/portfolioEventProposal", element: <PortfolioEventProposal /> },
]);
