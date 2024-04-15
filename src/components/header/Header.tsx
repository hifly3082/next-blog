import { UserButton, auth } from '@clerk/nextjs'
import Links from './links/Links'
import styles from './header.module.scss'
import Link from 'next/link'

const Header = async () => {
  const { userId } = await auth()
  const isAuth = !!userId

  return (
    <header className={styles.header}>
      {!isAuth ? (
        <div className={styles.profile}>
          <Link href='/sign-in'>Log In</Link>
          <Link href='/sign-up'>Sign Up</Link>
        </div>
      ) : (
        <div className={styles.profile}>
          <UserButton afterSignOutUrl='/sign-in' />
        </div>
      )}
      <Links />
    </header>
  )
}
export default Header
