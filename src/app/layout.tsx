import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import { ClerkProvider, ClerkLoaded, ClerkLoading, auth } from '@clerk/nextjs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Loader from './../components/loader/Loader'
import styles from './layout.module.scss'
import './globals.scss'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Blog',
  description: 'John +'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning={true}>
        <body className={heebo.className} suppressHydrationWarning={true}>
          <div className={styles.container}>
            <ClerkLoading>
              <Loader />
            </ClerkLoading>
            <ClerkLoaded>
              <Header />
              <main className={styles.main}>{children}</main>
              <Footer />
            </ClerkLoaded>
            <ToastContainer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
