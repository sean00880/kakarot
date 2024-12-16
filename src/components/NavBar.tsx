"use client";
import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-lg text-white z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl flex flex-row">
          <a  href="#hero" className="hover:text-orange-400 transition"><h1>
            Kakarot</h1><h3 className='text-white'><div className="flex flex-row"><Image alt='solana' src='/icons/solana.png' width={30} height={30}></Image> | SOL</div> </h3>
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
        </ul>
      </div>
    </nav>
  );
}
