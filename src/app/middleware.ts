// import { useAppSelector } from '@/store/store'
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// const protectedRoutes = ['/', '/blog', '/works', '/contact']

// export default function Middleware(req: NextRequest) {
//   const auth = useAppSelector((state) => state.auth.authState)
//   if (!auth && protectedRoutes.includes(req.nextUrl.pathname)) {
//     const absoluteURL = new URL('/login', req.nextUrl.origin)
//     return NextResponse.redirect(absoluteURL.toString())
//   }
// }
import { useAppSelector } from '@/store/store'
import { NextRequest, NextResponse } from 'next/server'

// const loggedInRoutes = ['/home', '/blog', '/works', '/contact']
// const loggedOutRoutes = ['/login', '/signup']

export async function Middleware(req: NextRequest) {
  const authState = useAppSelector((state) => state.auth.authState)

  if (authState) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}
