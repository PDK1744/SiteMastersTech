"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-white/10 backdrop-blur-lg border-t border-white/20 text-gray-300 py-10 px-6 sm:px-12 mt-auto shadow-inner rounded-t-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">SiteMastersWeb</span>. All
          rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-purple-400 transition">
            About
          </Link>
          <Link href="/pricing" className="hover:text-purple-400 transition">
            Pricing
          </Link>
          <Link href="/services" className="hover:text-purple-400 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-purple-400 transition">
            Contact
          </Link>
          
        </div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-1 rounded-md shadow-md transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUpCircleIcon className="h-4 w-4" />
        </button>
      )}
    </footer>
  );
}
