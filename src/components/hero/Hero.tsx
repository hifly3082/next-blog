import Image from 'next/image'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='/photo.png'
          alt='hero-image'
          fill
          className={styles.heroImage}
        />
      </div>
      {/* <div> */}
      <h1 className={styles.title}>
        Hi, I am John, <br />
        Creative <br />
        Technologist
      </h1>
      <p className={styles.description}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <button className={styles.button}>Download Resume</button>
      {/* </div> */}
    </div>
  )
}
export default Hero
