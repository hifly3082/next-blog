import PostThumbnail, { PostI } from './PostThumbnail'
import styles from './posts.module.scss'

async function getPosts() {
  const res = await fetch('https://dummyjson.com/posts', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }

  const data = await res.json()
  return data.posts.slice(0, 2)
}

const Posts = async () => {
  const posts = await getPosts()

  return (
    <div className={styles.bg_blue}>
      <section className='container'>
        <div className={styles.header}>
          <h2 className='section-title'>Recent posts</h2>
          <a href='/blog' className={styles.link}>
            View all
          </a>
        </div>
        <div className='flex'>
          {posts.map((post: PostI) => (
            <PostThumbnail post={post} key={post.id} />
          ))}
        </div>
      </section>
    </div>
  )
}
export default Posts
