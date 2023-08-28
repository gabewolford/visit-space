import Navbar from './components/Navbar'
import './globals.css'
import { Barlow } from 'next/font/google'

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: ["400"], 
})

export const metadata = {
  title: 'Visit Space',
  description: 'Description here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-cover bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] ${barlow.className}`} 
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
