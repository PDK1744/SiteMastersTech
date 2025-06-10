"use client";

export default function Hero() {
  return (
    <section className="w-full min-h-[110vh] flex items-center justify-center text-white relative overflow-hidden px-6 md:px-12">
      {/* Glass Container */}
      <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 text-transparent bg-clip-text">
            Handcrafted Websites That Drive Results.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg mx-auto md:mx-0">
            Every line of code is written with purpose. At SiteMasters, we build
            custom, performance-driven websites designed to elevate your brand,
            engage visitors, and turn clicks into clients.
          </p>

          <button className="px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 max-w-md">
          <img
            src="/images/hero-img.png"
            alt="Retro computer design"
            className="w-full rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* Retro Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]"></div>
    </section>
  );
}
