"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="relative h-screen w-full flex flex-col lg:flex-row bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/goku_hero.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>

      {/* Left Section with Flickering Fade-In Effect */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/goku.png"
            alt="Goku"
            width={500}
            height={500}
            priority
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Right Content Section */}
      <div className="relative z-10 w-full flex flex-col justify-center px-8 text-white backdrop-blur-sm bg-black/50">
        <h1 className="text-6xl font-extrabold mb-4">Unleash the Power of Kakarot</h1>
        <p className="text-lg mb-8">
          Join the ultimate journey with Goku as we explore the origins, transformations,
          and achievements of the legendary Saiyan warrior.
        </p>

        {/* Glassmorphism Section */}
        <div className="mt-12 relative p-6 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg">
          <div className="flex justify-between items-center space-x-8">
            {/* Custom Icons */}
            <a href="https://x.com/kakarot_solana" className="hover:scale-110 transition-transform">
              <Image src="/icons/x.png" alt="Twitter" width={40} height={40} />
            </a>
            <a href="https://t.me/kakarotSol" className="hover:scale-110 transition-transform">
              <Image src="/icons/telegram.png" alt="Telegram" width={40} height={40} />
            </a>
            <a href="https://www.dextools.io/app/en/solana/pair-explorer/Bugxi4winSNKbJky68fDWb6w8ACUpvVeAvyx8DhHnH7R?t=1734356886412" className="hover:scale-110 transition-transform">
              <Image src="/icons/dextools.png" alt="Linktree" width={40} height={40} />
            </a>
            <a href="https://dexscreener.com/solana/bugxi4winsnkbjky68fdwb6w8acupvveavyx8dhhnh7r" className="hover:scale-110 transition-transform">
              <Image src="/icons/dexscreener.png" alt="Custom Icon" width={40} height={40} />
            </a>
            <a href="https://www.tickertrending.com/ticker/KAKAROT" className="hover:scale-110 transition-transform">
              <Image src="/icons/TickerTrending.jpg" alt="Custom Icon" width={40} height={40} />
            </a>
          </div>

          {/* Contract Address */}
          <p className="text-center mt-4 text-sm text-gray-200 tracking-widest">
            CA: 7GkBLWaCutiFgw1JT4J9jekNssJKVGnCQxdfxDM9pump
          </p>
        </div>
      </div>
    </div>
  );
}
