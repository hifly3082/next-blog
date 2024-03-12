import styles from './posts.module.scss'

const Posts = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent posts</h2>
      <article className={styles.post}>
        <h3 className={styles.postTitle}>
          Making a design system from scratch
        </h3>
        <p className={styles.postInfo}>
          <span className={styles.postDate}>12 Feb 2020</span> |{' '}
          <span className={styles.postTags}>Design, Pattern</span>
        </p>
        <p className={styles.postBody}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </article>
      <article className={styles.post}>
        <h3 className={styles.postTitle}>
          Creating pixel perfect icons in Figma
        </h3>
        <p className={styles.postInfo}>
          <span className={styles.postDate}>12 Feb 2020</span> |{' '}
          <span className={styles.postTags}>Design, Pattern</span>
        </p>
        <p className={styles.postBody}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </article>
      {/* <a href='/blog' className={styles.blogLink}>
        View all
      </a> */}
    </div>
  )
}
export default Posts
