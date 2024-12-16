"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Roadmap() {
  const phases = [
    { title: "Phase 1", description: "Find the 1st dragon ball", image: "/images/1.png" },
    { title: "Phase 2", description: "Find the 2nd dragon ball", image: "/images/2.png" },
    { title: "Phase 3", description: "Find the 3rd dragon ball", image: "/images/3_1.png" },
    { title: "Phase 4", description: "Find the 4th dragon ball", image: "/images/4.png" },
    { title: "Phase 5", description: "Find the 5th dragon ball", image: "/images/5.png" },
    { title: "Phase 6", description: "Find the 6th dragon ball", image: "/images/6.png" },
    { title: "Phase 7", description: "Find the 7th dragon ball", image: "/images/7.webp" },
    { title: "Moon", description: "State your wish, ser.", image: "/images/shenron.png" },
  ];

  return (
    <div
      className="relative p-4 py-16 bg-green-900/20 backdrop-blur-lg"
      style={{
        backgroundImage: "url('/images/namek.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent pointer-events-none z-0"></div>
      
      <h2 className="text-4xl font-bold text-center mb-12 text-white z-10 relative">Roadmap</h2>
      
      {/* Grid Layout for Responsive Columns */}
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {phases.map((phase, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="p-6 rounded-lg backdrop-blur-lg shadow-lg flex flex-col items-center hover:shadow-2xl transform hover:scale-105 transition-all text-white border border-white/20"
          style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.1) 100%)"
          }}
      >  <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={phase.image}
                alt={phase.title}
                width={80}
                height={80}
                className="mb-4 "
              />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2 text-center text-black">{phase.title}</h3>
            <p className="text-center text-sm text-gray-700">{phase.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
