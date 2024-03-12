import Hero from '@/components/hero/Hero'
import Posts from '@/components/posts/Posts'
import Works from '@/components/works/Works'
import Image from 'next/image'
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <Posts />
      <Works />
    </main>
  )
}
