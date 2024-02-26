'use client';

import React from "react";
import { Navbar } from "flowbite-react";
import Link from 'next/link';

export default function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="#">
        <img
          src="./src/Assets/CB-Logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Camryn's Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          CAMRYN BUONACORE
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="app.jsx" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about.jsx">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Education</Navbar.Link>
        <Navbar.Link href="PortfolioEventProposal#">
          Banquet Proposal
        </Navbar.Link>
        <Navbar.Link href="PortfolioSwaponz">Swaponz Internship</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}