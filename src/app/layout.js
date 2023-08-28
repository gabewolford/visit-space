import BackgroundImage from './components/BackgroundImage'
import Navbar from './components/Navbar'
import './globals.css'
import { Barlow } from 'next/font/google'

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: ['400'], 
})

export const metadata = {
  title: 'Visit Space',
  description: 'Description here',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`flex flex-col relative bg-cover bg-center min-h-screen ${barlow.className}`}>
        <BackgroundImage />
        <Navbar />
        {children}
      </body>
    </html>
  );
}