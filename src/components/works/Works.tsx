import Image from 'next/image'
import styles from './works.module.scss'

const Works = () => {
  return (
    <section className='container'>
      <h2 className='section-title'>Featured works</h2>
      <div className='flex'>
        <div className={styles.image}>
          <Image src='/work1.png' alt='work1' fill />
        </div>
        <div>
          <h3>Designing Dashboard</h3>
          <div>
            <span>2020</span> <span> Dashboard</span>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Works
