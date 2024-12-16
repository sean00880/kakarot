import Image from "next/image";

export default function Tokenomics() {
  return (
    <div className="relative bg-gray-900 py-12 text-white p-4" style={{
      backgroundImage: "url('/images/goku1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* Transparent-to-Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0"></div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto flex justify-center items-center">
          <div className="relative w-full h-full bg-white/10 rounded-xl shadow-xl backdrop-blur-md overflow-hidden">
            <Image
              src="/images/ss3.png"
              alt="Tokenomics Illustration"
              className="w-full h-full object-cover"
              style={{ objectFit: "contain" }}
              width={1000}
              height={1000}
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-800 opacity-50"></div>
          </div>
        </div>
        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 md:pl-12">
          <div className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">Tokenomics</h2>
            <p className="mb-4 text-gray-300">
              Explore the Kakarot project's token supply and distribution.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="p-3 bg-white/10 rounded-md shadow-md text-gray-300">
                <span className="font-semibold text-white">Total Supply:</span> 999.99 million tokens
              </li>
              <li className="p-3 bg-white/10 rounded-md shadow-md text-gray-300">
                <span className="font-semibold text-white">Liquidity:</span> 100% burned
              </li>
              {/* Add more tokenomics details as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
