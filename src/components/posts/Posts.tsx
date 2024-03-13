import classNames from 'classnames'
import styles from './posts.module.scss'

const Posts = () => {
  return (
    <div className={styles.bg_blue}>
      <section className='container'>
        <div className={styles.header}>
          <h2 className='section-title'>Recent posts</h2>
          <a href='/blog'>View all</a>
        </div>
        <div className='flex'>
          <article className={styles.post}>
            <h3 className={styles.title}>
              Making a design system from scratch
            </h3>
            <p className={styles.info}>
              <span>12 Feb 2020</span> | <span>Design, Pattern</span>
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </article>
          <article className={styles.post}>
            <h3 className={styles.title}>
              Creating pixel perfect icons in Figma
            </h3>
            <p className={styles.info}>
              <span>12 Feb 2020</span> | <span>Design, Pattern</span>
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
export default Posts
