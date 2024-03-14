import Image from 'next/image'
import styles from './works.module.scss'
import classNames from 'classnames'

const Works = () => {
  return (
    <section className='container'>
      <h2 className='section-title'>Featured works</h2>
      <div className={classNames('flex', styles.workCard)}>
        <div className={styles.image}>
          <Image
            src='/work1.png'
            alt='work1'
            // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            fill
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>Designing Dashboard</h3>
          <div>
            <span className={styles.year}>2020</span>{' '}
            <span className={styles.tag}> Dashboard</span>
          </div>
          <p className={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className={classNames('flex', styles.workCard)}>
        <div className={styles.image}>
          <Image src='/work2.png' alt='work1' fill />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>Vibrant Portraits of 2020</h3>
          <div>
            <span className={styles.year}>2018</span>{' '}
            <span className={styles.tag}> Illustration</span>
          </div>
          <p className={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className={classNames('flex', styles.workCard)}>
        <div className={styles.image}>
          <Image src='/work3.png' alt='work1' fill />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>36 Days of Malayalam type</h3>
          <div>
            <span className={styles.year}>2018</span>{' '}
            <span className={styles.tag}> Typography</span>
          </div>
          <p className={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Works
