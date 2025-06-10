"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Lena Matthews",
    role: "Marketing Director, BrightWave Co.",
    quote:
      "Working with Kobe and the SiteMasters team was an absolute game changer for our business. From the initial consultation to the final site launch, their communication, professionalism, and attention to detail were top-notch. Kobe took the time to really understand our brand and audience, and the end result was a beautifully designed, high-performing website that elevated our online presence in ways we hadn't imagined. Not only did we see a noticeable increase in traffic and engagement, but our brand now has a polished, professional digital home that we’re proud to show off. I’d highly recommend SiteMasters to any business looking to make a serious impact online.",
  },
  {
    name: "Arjun Patel",
    role: "Founder, GreenLeaf Startups",
    quote:
      "Kobe’s expertise made managing our site hosting and maintenance effortless. I trust SiteMasters completely to keep our business running smoothly online.",
  },
  {
    name: "Nova Sinclair",
    role: "Creative Director, PixelCraft Agency",
    quote:
      "SiteMasters delivered a stunning website that completely exceeded our expectations. From the very first meeting, Kobe was attentive to our vision and incredibly easy to work with. The final product not only looks beautiful, but functions flawlessly across all devices. Our clients have commented on how intuitive and enjoyable the user experience is, and it's made a noticeable difference in how we present our brand online. We couldn’t be happier with the results.",
  },
  {
    name: "Sarah Kim",
    role: "E-commerce Manager, Trendify",
    quote:
      "Since partnering with SiteMasters, our SEO rankings have improved dramatically. The team's strategies are clear, effective, and professional.",
  },
  {
    name: "David Chen",
    role: "CEO, Bright Horizons Consulting",
    quote:
      "Kobe and his team exceeded expectations on every front—from design to performance. Their proactive support makes them a trusted partner for our digital needs.",
  },
];


export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextTestimonial = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="py-10 px-6 bg-black/30 border-t border-purple-600">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-purple-300 drop-shadow-md tracking-tight">
          What Our Clients Say
        </h2>

        <div className="relative">
          <div className="flex justify-center">
            {/* Testimonial card */}
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white/10 border border-purple-500 backdrop-blur-md p-8 rounded-3xl shadow-lg max-w-xl mx-4 transition-transform duration-500 ease-in-out ${
                  i === current
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-90 absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
                }`}
                aria-hidden={i !== current}
              >
                <p className="text-lg italic text-gray-200 leading-relaxed mb-6">
                  “{t.quote}”
                </p>
                <h3 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text mb-1 drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">
                  {t.name}
                </h3>
                <p className="text-sm text-purple-400">{t.role}</p>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-10 mt-8">
            <button
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
              className="text-purple-400 hover:text-pink-500 rounded-full px-6 py-3 bg-white/10 border border-purple-500 shadow-lg transition-transform transform hover:scale-105"
            >
              Prev.
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next Testimonial"
              className="text-purple-400 hover:text-pink-500 rounded-full px-6 py-3 bg-white/10 border border-purple-500 shadow-lg transition-transform transform hover:scale-105"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
