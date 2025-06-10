import React from "react";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Services | SiteMasters Tech",
  description:
    "Explore expert services from SiteMasters Tech, including custom web design, SEO optimization, and reliable website maintenance and hosting solutions.",
};

export default function ServicesPage() {
  return (
    <main className="py-12 px-6 md:px-10 lg:px-20 text-white">
      {/* Header Section */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-300 tracking-tight">
          What We Offer
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          At SiteMasters Tech, I help bring your digital vision to life with tailored web solutions that deliver both beauty and performance.
        </p>
      </section>

      {/* Services Section */}
      <section className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Custom Web Design */}
        <div className="bg-white/10 border border-purple-500 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left">
          <h2 className="text-2xl font-bold mb-3 text-purple-200">Custom Web Design</h2>
          <p className="text-gray-300 leading-relaxed">
            Stand out with a unique website designed specifically for your brand and audience.
            I build fast, responsive, and accessible sites that leave lasting impressions and
            drive engagement — whether you're a startup, creative agency, or established business.
          </p>
        </div>

        {/* SEO Optimization */}
        <div className="bg-white/10 border border-purple-500 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left">
          <h2 className="text-2xl font-bold mb-3 text-purple-200">SEO Optimization</h2>
          <p className="text-gray-300 leading-relaxed">
            Search engines love well-structured, keyword-optimized websites — and so do your potential
            customers. I implement smart, proven SEO strategies to increase visibility, improve rankings,
            and drive quality traffic to your site, so you can grow with confidence.
          </p>
        </div>

        {/* Maintenance & Hosting */}
        <div className="bg-white/10 border border-purple-500 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left">
          <h2 className="text-2xl font-bold mb-3 text-purple-200">Maintenance & Hosting</h2>
          <p className="text-gray-300 leading-relaxed">
            Keep your website fast, secure, and always online with ongoing support and reliable hosting.
            I handle updates, monitoring, backups, and performance tuning — so you can focus on your business
            while I take care of the tech.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto mt-20">
        <CallToAction />
      </section>
    </main>
  );
}
