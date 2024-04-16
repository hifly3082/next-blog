import Post, { PostI } from '@/components/posts/Post'
import styles from './blog.module.scss'

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
  return data.posts.slice(0, 5)
}

const BlogPage = async () => {
  const posts = await getPosts()
  console.log(posts)

  return (
    <div className='container-md'>
      <h1 className={styles.pageTitle}>Blog</h1>
      {posts?.map((post: PostI) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}
export default BlogPage
