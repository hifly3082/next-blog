import Image from 'next/image'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <section className='container'>
      <div className='flex'>
        <div className={styles.image}>
          <Image src='/photo.png' alt='hero-image' fill />
        </div>
        <div>
          <h1>
            Hi, I am John, <br />
            Creative Technologist
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button>Download Resume</button>
        </div>
      </div>
    </section>
  )
}
export default Hero
