import CallToActionBtn from "@/components/CallToActionBtn";

export default function PricingPage() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-purple-300">
        Pricing Plans
      </h1>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Choose the plan that fits your needs. Whether you prefer a one-time investment or a
        monthly all-inclusive solution, I’ve got you covered.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Lump Sum Plan */}
        <div className="bg-white/10 border border-purple-500 backdrop-blur-md p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">Lump Sum</h2>
          <p className="text-lg text-white mb-6">
            A one-time investment for a sleek, custom-built website — perfect for small businesses
            looking to get online fast and affordably.
          </p>
          <ul className="text-sm text-gray-300 mb-6 space-y-2 list-disc list-inside">
            <li>$500 initial payment</li>
            <li>$20/month hosting</li>
            <li>$50 fee per page after 5 pages</li>
            <li>Optional: $35/month unlimited edits add-on</li>
            <li><span className="line-through">24/7 support</span></li>
            <li><span className="line-through">Lifetime updates</span></li>
          </ul>
          <CallToActionBtn />
        </div>

        {/* Monthly Plan */}
        <div className="bg-white/10 border border-cyan-500 backdrop-blur-md p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">Monthly</h2>
          <p className="text-lg text-white mb-6">
            A flexible, all-inclusive plan with ongoing support — ideal for growing brands that
            want continuous improvements and peace of mind.
          </p>
          <ul className="text-sm text-gray-300 mb-6 space-y-2 list-disc list-inside">
            <li>$100/month (includes design, development & hosting)</li>
            <li>$50 fee per page after 5 pages</li>
            <li>Unlimited edits included</li>
            <li>24/7 support included</li>
            <li>Lifetime updates included</li>
          </ul>
          <CallToActionBtn />
        </div>
      </div>
    </section>
  );
}
