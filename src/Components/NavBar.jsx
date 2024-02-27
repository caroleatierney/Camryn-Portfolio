"use client";

// import Link from "next/link";
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <div className="bg-slate-200">

        <Link to="/Camryn-Portfolio">Home</Link>

        <Link to="/about">About</Link>

    </div>
  );
};

export default NavBar;
