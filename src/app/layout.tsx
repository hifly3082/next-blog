import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import { ClerkProvider, auth } from '@clerk/nextjs'

import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
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
  const { userId } = await auth()
  const isAuth = !!userId

  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning={true}>
        <body className={heebo.className}>
          <div className={styles.container}>
            {isAuth && <Header />}
            <main className={styles.main}>{children}</main>
            {isAuth && <Footer />}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
