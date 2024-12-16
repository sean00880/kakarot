"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-lg text-white z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#hero" className="hover:text-orange-400 transition">
            Kakarot
          </a>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <a href="#hero" className="hover:text-orange-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#tokenomics" className="hover:text-orange-400 transition">
              Tokenomics
            </a>
          </li>
          <li>
            <a href="#roadmap" className="hover:text-orange-400 transition">
              Roadmap
            </a>
          </li>
          <li>
            <a href="#footer" className="hover:text-orange-400 transition">
              Footer
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
