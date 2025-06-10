'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [phone, setPhone] = useState('');

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 10);
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{0,4})$/);
    if (!match) return cleaned;
    return `(${match[1]})-${match[2]}-${match[3]}`.replace(/-$/, '');
  };

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value));
  };

  return (
    <section className="py-12 px-6 max-w-3xl mx-auto text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-300">
        Contact Me
      </h1>

      <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-8 space-y-6">
        <p className="text-gray-300 mb-2 text-center">
          Have a project in mind or just want to say hello? Fill out the form below and I’ll get back to you as soon as possible.
        </p>

        <form
          action="https://formspree.io/f/xzzgeqkd" // Replace this
          method="POST"
          className="space-y-6"
        >
          {/* Honeypot for spam protection */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            aria-hidden="true"
            tabIndex="-1"
            autoComplete="off"
          />

          <div>
            <label className="block text-sm mb-1 text-purple-200" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 bg-white/10 border border-purple-500 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-purple-200" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              pattern="\(\d{3}\)-\d{3}-\d{4}"
              placeholder="(111)-444-0000"
              required
              className="w-full px-4 py-3 bg-white/10 border border-purple-500 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-purple-200" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-white/10 border border-purple-500 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-purple-200" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-white/10 border border-purple-500 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-3 px-6 rounded-full font-semibold hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
