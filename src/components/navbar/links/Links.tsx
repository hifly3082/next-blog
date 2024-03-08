import Link from 'next/link'

const Links = () => {
  const links = [
    { title: 'Home', path: '/' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
    { title: 'Login', path: '/login' }
  ]
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  )
}

export default Links
