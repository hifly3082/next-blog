import Image from 'next/image'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <section className='container'>
      <div className='flex hero'>
        <div className={styles.image}>
          <Image src='/photo.png' alt='hero-image' fill />
        </div>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Hi, I am John, <br />
            Creative Technologist
          </h1>
          <p className={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className={styles.cta}>Download Resume</button>
        </div>
      </div>
    </section>
  )
}
export default Hero
