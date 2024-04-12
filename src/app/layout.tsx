import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import { ClerkProvider, ClerkLoaded, ClerkLoading, auth } from '@clerk/nextjs'

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import styles from './layout.module.scss'
import './globals.scss'
import Loader from './../components/loader/Loader'

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
  const { userId } = await auth()
  const isAuth = !!userId

  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning={true}>
        <body className={heebo.className}>
          <div className={styles.container}>
            <ClerkLoading>
              <Loader />
            </ClerkLoading>
            <ClerkLoaded>
              <Header />
              <main className={styles.main}>{children}</main>
              <Footer />
            </ClerkLoaded>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
