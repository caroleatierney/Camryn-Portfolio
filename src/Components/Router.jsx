import React from "react";
// import App from "../App.jsx";
import About from "../Components/About.jsx";
import Footer from "../Components/Footer";
import Education from "../Components/Education";
import Contact from "../Components/Contact";
import PortfolioSwaponz from "../Components/PortfolioSwaponz";
import PortfolioEventProposal from "../Components/PortfolioEventProposal";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import.meta.env.BASE_URL;
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from "../Components/Contact";

export const router = createBrowserRouter([
  {
    path: "/Camryn-Portfolio/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/Camryn-Portfolio/footer",
  //   element: <Footer />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/Camryn-Portfolio/education",
    element: <Education />,
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
  {
    path: "/Camryn-Portfolio/portfolioEventProposal",
    element: <PortfolioEventProposal />,
    errorElement: <ErrorPage />,
  },
]);
