// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router";
export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-neutral-100 text-neutral-950 h-screen flex items-center justify-center px-6 lg:px-80">
        {/* Faded background logo */}
        <img
          src="/logo.svg"
          alt="Logo background"
          className="absolute inset-0 m-auto w-1/2 h-1/2 object-contain opacity-10 pointer-events-none"
        />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
          <h1 className="text-5xl font-bold">The Rick and Morty API</h1>
          <p className="text-lg max-w-2xl text-neutral-500">
            This website showcases characters from the Rick and Morty TV show,
            including their appearances, origins, and unique traits.
          </p>
          <Link
            to="/characters"
            className="inline-block mt-4 bg-neutral-100 hover:bg-neutral-50 hover:text-neutral-900 text-black font-semibold py-3 px-6 rounded-lg transition"
          >
            Check Characters
          </Link>
        </div>
      </section>
    </main>
  );
}
