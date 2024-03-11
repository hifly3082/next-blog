import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import styles from './layout.module.scss'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next Blog',
  description: 'John +'
}

const heebo = Heebo({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={heebo.className}>
        <div className={styles.container}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
