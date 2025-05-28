// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-6 py-3 font-medium rounded-md transition
     ${
       pathname === path
         ? "bg-black text-white" /* active = white bg, black text */
         : "text-black hover:bg-neutral-900 hover:text-white" /* hover = light gray bg, black text */
     }`;

  return (
    <nav className="bg-neutral-200 text-white shadow-md relative ">
      <div className="container mx-auto flex items-center justify-between lg:justify-normal lg:gap-10 p-4">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-2">
          {/* invert your logo if it’s colored */}
          <img
            src="logo.svg"
            alt="Rick and Morty icon"
            className="h-15 filter "
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/characters" className={linkClass("/characters")}>
            Characters
          </Link>
        </div>

        {/* Burger button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden focus:outline-none text-neutral-900"
        >
          {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-neutral-200 overflow-hidden transition-[max-height] duration-300
          ${menuOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <ul className="flex flex-col">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/characters"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/characters")}
            >
              Characters
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
