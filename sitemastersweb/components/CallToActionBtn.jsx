"use client";

import Link from "next/link";

export default function CallToActionBtn({ href = "/contact", label = "Let's Talk" }) {
  return (
    <Link
      href={href}
      className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold text-lg shadow-lg hover:brightness-110 transition duration-300"
    >
      {label}
    </Link>
  );
}
