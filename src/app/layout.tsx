import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import styles from './layout.module.scss'
import './globals.scss'

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
    <html lang='en' suppressHydrationWarning={true}>
      <body className={heebo.className}>
        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  )
}
