import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Imdb webiste',
  description: 'Show latest and upcoming movies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
