import React from "react";
import App from "../App.jsx";
import About from "../Components/About.jsx";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Education from "../Components/Education";
import Contact from "../Components/Contact";
import PortfolioSwaponz from "../Components/PortfolioSwaponz";
import PortfolioEventProposal from "../Components/PortfolioEventProposal";
import { createBrowserRouter } from "react-router-dom";
import.meta.env.BASE_URL;
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from "../Components/Contact";

export const router = createBrowserRouter([
  // { path: "/", element: <App /> },
  { path: "/Camryn-Portfolio", element: <App /> },
  { path: "/header", element: <Header /> },
  { path: "/about", element: <About /> },
  { path: "/footer", element: <Footer /> },
  { path: "/education", element: <Education /> },
  { path: "/contact", element: <Contact /> },
  { path: "/portfolioSwaponz", element: <PortfolioSwaponz /> },
  {
    path: "/portfolioEventProposal",
    element: <PortfolioEventProposal />,
    // { path: "/Camryn-Portfolio/header", element: <Header /> },
    // { path: "/Camryn-Portfolio/about", element: <About /> },
    // { path: "/Camryn-Portfolio/footer", element: <Footer /> },
    // { path: "/Camryn-Portfolio/education", element: <Education /> },
    // { path: "/Camryn-Portfolio/contact", element: <Contact /> },
    // { path: "/Camryn-Portfolio/portfolioSwaponz", element: <PortfolioSwaponz /> },
    // {
    //   path: "/Camryn-Portfolio/portfolioEventProposal",
    //   element: <PortfolioEventProposal />,
    //   { path: "/contact", element:
    //    (
    //       <ErrorBoundary FallbackComponent={<Contact />}>
    //         <Contact />
    //       </ErrorBoundary>
    //      )
    // },
  },
]);
