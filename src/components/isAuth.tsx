'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'
import { useAppSelector } from '@/store/store'

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const auth = useAppSelector((state) => state.auth.authState)

    useEffect(() => {
      if (!auth) {
        redirect('/login')
      }
    }, [auth])

    if (!auth) {
      return null
    }

    return <Component {...props} />
  }
}
