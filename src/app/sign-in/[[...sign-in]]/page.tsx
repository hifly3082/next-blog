// 'use client'

// import styles from './login.module.scss'
// import Link from 'next/link'

// const LoginPage = () => {
//   return (
//     <section>
//       <form className={styles.form}>
//         <label htmlFor='username' className={styles.label}>
//           Username
//         </label>
//         <input
//           type='text'
//           id='username'
//           name='username'
//           autoComplete='off'
//           className={styles.input}
//         />

//         <label htmlFor='password' className={styles.label}>
//           Password
//         </label>
//         <input
//           type='password'
//           id='password'
//           name='password'
//           autoComplete='off'
//           className={styles.input}
//         />

//         <button type='submit' className={styles.submit}>
//           Log In
//         </button>
//         <div className={styles.links}></div>
//         <Link href='/forgot-password' className={styles.forgot}>
//           Forgot password?
//         </Link>
//       </form>
//     </section>
//   )
// }

// export default LoginPage

import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <SignIn />
}
