"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    
    
  ];

  return (
    <header className="sticky top-4 z-50 mx-4">
      <div className="container mx-auto backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            style={{ fontFamily: "var(--font-logo)" }}
          >
            SiteMastersWeb
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-purple-500 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-purple-500" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute left-0 right-0 md:hidden px-4 mt-2">
          <div className="flex flex-col space-y-2 backdrop-blur-md bg-black/70 border border-white/20 rounded-xl shadow-lg p-4 mx-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white font-medium hover:text-purple-500 transition px-4 py-2 rounded-lg hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
