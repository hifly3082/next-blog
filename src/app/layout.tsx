import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Heebo } from 'next/font/google'

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import styles from './layout.module.scss'
import './globals.scss'

const ReduxProvider = dynamic(() => import('@/store/provider'), {
  ssr: false
})

const heebo = Heebo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Blog',
  description: 'John +'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={heebo.className}>
        <ReduxProvider>
          <div className={styles.container}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
