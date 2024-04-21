import React from "react";
import About from "../Components/About.jsx";
import Education from "../Components/Education";
import Awards from "../Components/Awards";
import Contact from "../Components/Contact";
import PortfolioSwaponz from "../Components/PortfolioSwaponz";
// import PortfolioEventProposal from "../Components/PortfolioEventProposal";
import EventProposal from "../Components/EventProposal";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import.meta.env.BASE_URL;
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from "../Components/Contact";

export const router = createBrowserRouter([
  {
    path: "/Camryn-Portfolio/",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Camryn-Portfolio/education",
    element: <Education />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Camryn-Portfolio/awards",
    element: <Awards />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Camryn-Portfolio/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Camryn-Portfolio/portfolioSwaponz",
    element: <PortfolioSwaponz />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/Camryn-Portfolio/portfolioEventProposal",
  //   element: <PortfolioEventProposal />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/Camryn-Portfolio/eventProposal",
    element: <EventProposal />,
    errorElement: <ErrorPage />,
  },
]);