import { NextResponse } from 'next/server'

const posts: any = [
  {
    userId: 1,
    id: 12,
    title: 'Post title from api',
    body: 'Post body from api with a long description and some other data and images'
  }
]

export async function GET(request: Request, context: any) {
  const { params } = context
  return NextResponse.json({
    post: posts.find((x: any) => x.id.toString() === params.id)
  })
}
