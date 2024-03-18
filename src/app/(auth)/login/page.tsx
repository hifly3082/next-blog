'use client'

import { setAuthState } from '@/store/authSlice'
import { useAppDispatch } from '@/store/store'
import { redirect } from 'next/navigation'

const LoginPage = async () => {
  const dispatch = useAppDispatch()

  const handleLogin = () => {
    dispatch(setAuthState(true))
    redirect('/')
  }

  return (
    <section>
      <form action={handleLogin}>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <br />
        <button type='submit'>Login</button>
      </form>
    </section>
  )
}

export default LoginPage
