import Services from '@/components/Services'
import Hero from '../components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import CallToAction from '@/components/CallToAction'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      
    </main>
  )
}
