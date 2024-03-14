import styles from './blog.module.scss'

const BlogPage = () => {
  return (
    <div className='container-md'>
      <h1 className={styles.pageTitle}>Blog</h1>
      <article className={styles.post}>
        <h3 className={styles.title}>UI Interactions of the week</h3>
        <p className={styles.info}>
          <span className={styles.year}>12 Feb 2019</span> |{' '}
          <span className={styles.tag}>Express, Handlebars</span>
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </article>

      <article className={styles.post}>
        <h3 className={styles.title}>UI Interactions of the week</h3>
        <p className={styles.info}>
          <span className={styles.year}>12 Feb 2019</span> |{' '}
          <span className={styles.tag}>Express, Handlebars</span>
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </article>

      <article className={styles.post}>
        <h3 className={styles.title}>UI Interactions of the week</h3>
        <p className={styles.info}>
          <span className={styles.year}>12 Feb 2019</span> |{' '}
          <span className={styles.tag}>Express, Handlebars</span>
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </article>

      <article className={styles.post}>
        <h3 className={styles.title}>UI Interactions of the week</h3>
        <p className={styles.info}>
          <span className={styles.year}>12 Feb 2019</span> |{' '}
          <span className={styles.tag}>Express, Handlebars</span>
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </article>
    </div>
  )
}
export default BlogPage
