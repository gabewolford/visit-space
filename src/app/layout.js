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
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
