import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb Clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  )
}
