'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

import { LinkI } from './Links'
import styles from './navlink.module.scss'

interface NavLink {
  item: LinkI
}

const NavLink: React.FC<NavLink> = ({ item }) => {
  const pathName = usePathname()

  return (
    <Link
      href={item.path}
      className={classNames(
        styles.navlink,
        pathName === item.path && styles.active
      )}>
      {item.title}
    </Link>
  )
}
export default NavLink
