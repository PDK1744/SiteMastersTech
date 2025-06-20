// app/layout.js
import './globals.css'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Background from '@/components/Background'

export const metadata = {
  title: 'SiteMasters Tech',
  description: 'Custom websites and modern web solutions built for businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="flex flex-col min-h-screen text-gray-900 ">
        <Background />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

