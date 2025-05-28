'use client'

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="max-w-4xl px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text">
          Build Bold. Build Retro. Build with SiteMastersWeb.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          We craft striking, retro-modern websites that grab attention and convert.
        </p>
        <button className="px-6 py-3 text-lg font-bold text-black bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          Get Started
        </button>
      </div>

      {/* Retro Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]"></div>
    </section>
  )
}
