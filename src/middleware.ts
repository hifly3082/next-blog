import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/sign-in', '/sign-up', '/forgot-password', '/', '/api/(.)']
  // apiRoutes: ['/api/(.)', '/trpc/(.)']
})

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
