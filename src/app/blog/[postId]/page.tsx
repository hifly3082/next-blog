async function getPostById(postId: string) {
  const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    method: 'GET'
  })

  return response.json()
}

const PostId = async ({ params }: { params: { postId: string } }) => {
  const { post } = await getPostById(params.postId)

  return (
    <div>
      <p>Post {params.postId}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostId
