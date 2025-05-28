// app/layout.js
import './globals.css'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'SiteMasters Tech',
  description: 'Custom websites and modern web solutions built for businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="flex flex-col min-h-screen text-gray-900 ">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

