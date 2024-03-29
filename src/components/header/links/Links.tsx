'use client'

import { useState } from 'react'
import NavLink from './NavLink'
import styles from './links.module.scss'
import classNames from 'classnames'
import { useAppDispatch } from '@/store/store'
import { setAuthState } from '@/store/authSlice'
import { redirect } from 'next/navigation'

export interface LinkI {
  title: string
  path: string
}

const links = [
  { title: 'Home', path: '/' },
  { title: 'Blog', path: '/blog' },
  { title: 'Works', path: '/works' },
  { title: 'Contact', path: '/contact' }
]

const Links = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  const toggleOpen = () => {
    setOpen((prev) => !prev)
  }

  const handleLogout = () => {
    dispatch(setAuthState(false))
    redirect('/login')
  }

  return (
    <>
      {/* DESKTOP */}
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        <button className='logout' onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MOBILE */}
      <button
        className={classNames(styles.menuButton, open && styles.active)}
        onClick={toggleOpen}>
        <span></span>
      </button>

      <div
        className={classNames(styles.mobileLinks, open && styles.activeNav)}
        onClick={toggleOpen}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        <button className='logout' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  )
}

export default Links
