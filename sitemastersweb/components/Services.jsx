"use client";

const services = [
  {
    title: "Custom Web Design",
    description:
      "We design and develop beautiful, user-friendly websites tailored to your brand and goals. Every site is fast, mobile-optimized, and built to engage visitors and convert traffic into real customers.",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your search rankings and get discovered by your ideal audience. We use proven SEO strategies to improve visibility, increase organic traffic, and drive long-term growth for your business.",
  },
  {
    title: "Maintenance & Hosting",
    description:
      "Keep your site fast, secure, and up-to-date with reliable hosting and ongoing maintenance. We handle the tech so you can stay focused on your business — with peace of mind included.",
  },
];

export default function Services() {
  return (
    <section className="py-6 px-6 text-white relative z-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-purple-300 drop-shadow-md">
          Our Services
        </h2>
        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
          At SiteMasters, we specialize in crafting custom websites that are
          fast, secure, and built to convert. From mobile-optimized design to
          reliable hosting and proven SEO strategies — we deliver complete web
          solutions that help businesses grow and stand out online.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map(({ title, description }, index) => (
            <div
              key={index}
              className="bg-white/10 border border-purple-500 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-start h-full"
            >
              <h3 className="text-2xl font-bold mb-4 tracking-wide drop-shadow-[0_0_8px_rgba(255,0,255,0.5)] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-transparent bg-clip-text animate-gradient">
                {title}
              </h3>
              <p className="text-md text-white leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
