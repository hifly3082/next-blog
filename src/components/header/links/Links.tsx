'use client'

import { useState } from 'react'
import classNames from 'classnames'
import NavLink from './NavLink'
import styles from './links.module.scss'

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

  const toggleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      {/* DESKTOP */}
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>

      {/* MOBILE */}
      <button
        type='button'
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
      </div>
    </>
  )
}

export default Links
