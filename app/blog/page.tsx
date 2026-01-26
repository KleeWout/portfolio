import { getAllPosts } from '../../lib/blog'
import BlogList from './BlogList'

export const metadata = {
  title: 'Blog | Wout Klee',
  description: 'Thoughts, ideas, and guides on web development and technology.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-12">
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-6xl">Blog</h1>
        <p className="max-w-2xl text-xl text-gray-500">
          Thoughts, ideas, and guides on web development and technology.
        </p>
      </div>

      <BlogList posts={posts} />
    </div>
  )
}
