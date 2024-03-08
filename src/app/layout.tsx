import type { Metadata } from 'next'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

import './globals.css'

export const metadata: Metadata = {
  title: 'Next Blog',
  description: 'Exploring Next.js 14+ features'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        main layout
        {children}
        <Footer />
      </body>
    </html>
  )
}
