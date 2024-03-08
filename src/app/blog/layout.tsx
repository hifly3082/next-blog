import { ReactNode } from 'react'

interface BlogLayoutProps {
  children: ReactNode
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>blog layout</h1>
      {children}
    </div>
  )
}

export default BlogLayout
