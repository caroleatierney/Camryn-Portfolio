import React from "react";
import About from "../Components/About";
import Education from "../Components/Education";
import Awards from "../Components/Awards";
import Contact from "../Components/Contact";
import PortfolioSwaponz from "../Components/PortfolioSwaponz";
import EventProposal from "../Components/EventProposal";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/education",
      element: <Education />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/awards",
      element: <Awards />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/portfolioSwaponz",
      element: <PortfolioSwaponz />,
      errorElement: <ErrorPage />,
    },
    // {
    //   path: "/Camryn-Portfolio/portfolioEventProposal",
    //   element: <PortfolioEventProposal />,
    //   errorElement: <ErrorPage />,
    // },
    {
      path: "/eventProposal",
      element: <EventProposal />,
      errorElement: <ErrorPage />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);