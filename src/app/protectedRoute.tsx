// 'use client'

// import { ReactNode, useLayoutEffect } from 'react'
// // import { useRouter } from 'next/router'
// import { redirect } from 'next/navigation'
// import { useAppSelector } from '@/store/store'

// interface ProtectedRoute {
//   children: ReactNode
// }

// const ProtectedRoute: React.FC<ProtectedRoute> = ({ children }) => {
//   // const router = useRouter()
//   const authState = useAppSelector((state) => state.auth.authState)

//   useLayoutEffect(() => {
//     if (!authState) {
//       redirect('/login')
//       // router.push('/login') // NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted
//     }
//   }, [authState])

//   return <>{children}</>
// }

// export default ProtectedRoute
