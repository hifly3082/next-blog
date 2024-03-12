import Image from 'next/image'
import styles from './works.module.scss'

const Works = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Featured works</h2>
      <div className={styles.workCard}>
        <div className={styles.workImg}>
          <Image src='/work1.png' alt='work1' fill />
        </div>
        <h3 className={styles.workTitle}>Designing Dashboard</h3>
        <div className={styles.workInfo}>
          <span className={styles.year}>2020</span>{' '}
          <span className={styles.tag}>Dashboard</span>
          <p className={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Works
