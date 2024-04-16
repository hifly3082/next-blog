import Link from 'next/link'
import styles from './post.module.scss'

export interface PostI {
  id: number
  title: string
  body: number
  userId: string
  tags: string[]
  reactions: number
}

const Post = async ({ post }: { post: PostI }) => {
  return (
    <article className={styles.post}>
      <Link href={`/blog/${post.id}`}>
        <h3 className={styles.title}>{post.title}</h3>
      </Link>
      <p className={styles.info}>
        <span>12 Feb 2020</span> |
        {post.tags.map((tag: string) => (
          <span key={tag}>{tag}</span>
        ))}
      </p>
      <p>{post.body}</p>
    </article>
  )
}
export default Post
