async function getPostById(postId: string) {
  const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }

  const data = await res.json()
  return data
}

const PostId = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostById(params.postId)

  return (
    <div className='container-md'>
      <p>Post #{params.postId}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostId
