'use client'

import { useState } from 'react'
import NavLink from './NavLink'
import styles from './links.module.scss'
import classNames from 'classnames'

export interface LinkI {
  title: string
  path: string
}

const links = [
  { title: 'Home', path: '/' },
  { title: 'Works', path: '/works' },
  { title: 'Blog', path: '/blog' },
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
