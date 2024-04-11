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
          <Link href='/login'>Log In</Link>
          <Link href='/signup'>Sign Up</Link>
        </div>
      ) : (
        <div className={styles.profile}>
          <UserButton afterSignOutUrl='/sign-in' />
          <Link href='/profile' className={styles.link}>
            Profile
          </Link>
        </div>
      )}
      <Links />
    </header>
  )
}
export default Header
