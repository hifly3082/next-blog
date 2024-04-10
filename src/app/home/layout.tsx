import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
