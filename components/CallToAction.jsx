import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 sm:py-28 text-white text-center relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to <span className="text-purple-400">elevate</span> your web presence?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Let's build a bold, modern website that reflects your brand.
          Reach out and let's get started.
        </p>
        <Link href="/contact"
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/40" >
            Get in Touch
          </Link>
        
      </div>
    </section>
  )
}
