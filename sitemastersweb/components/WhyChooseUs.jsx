import { CheckCircleIcon } from '@heroicons/react/24/solid'

const features = [
  {
    title: 'Tailored Solutions',
    description: 'Custom websites designed to match your unique brand and business goals.',
  },
  {
    title: 'Speed & Performance',
    description: 'Lightning-fast, fully responsive sites optimized for every device and browser.',
  },
  {
    title: 'SEO Focused',
    description: 'Built using SEO best practices to boost your rankings and drive targeted traffic.',
  },
  {
    title: 'Client-Centric Approach',
    description: 'We prioritize your vision and success, ensuring every detail aligns with your needs.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
          Why Choose <span className="text-purple-400">SiteMastersWeb</span>
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          We're not just building websites — we're crafting digital experiences
          that leave a lasting impression.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-purple-500/30 transition duration-300"
            >
              <CheckCircleIcon className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2 text-purple-400">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
