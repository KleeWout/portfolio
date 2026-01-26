import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '../../../lib/blog'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.frontmatter.title} | Wout Klee`,
    description: post.frontmatter.excerpt,
  }
}

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// ... (previous imports)

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 pt-32 pb-20 md:px-8">
      <Link
        href="/blog"
        className="hover:text-foreground mb-8 inline-flex items-center text-gray-500 transition-colors"
      >
        &larr; Back to all posts
      </Link>

      <article>
        <header className="mb-12 border-b border-gray-200 pb-8 dark:border-gray-800">
          <h1 className="mb-4 font-serif text-4xl leading-tight font-bold text-gray-900 md:text-6xl dark:text-gray-100">
            {post.frontmatter.title}
          </h1>
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <time className="text-sm md:text-base">
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span>·</span>
            <span className="text-sm md:text-base">
              {post.frontmatter.readTime || '5 min read'}
            </span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-headings:font-sans prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 md:prose-h2:text-4xl prose-h3:text-2xl md:prose-h3:text-3xl dark:prose-headings:text-gray-100 prose-p:font-serif prose-p:text-xl prose-p:leading-8 prose-p:text-gray-800 dark:prose-p:text-gray-300 prose-a:text-gray-900 prose-a:underline hover:prose-a:text-gray-600 dark:prose-a:text-white dark:hover:prose-a:text-gray-300 max-w-none">
          <ReactMarkdown
            components={{
              code({ inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <div className="my-6 overflow-hidden rounded-md text-sm">
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code
                    className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-red-500 dark:bg-gray-800 dark:text-red-400"
                    {...props}
                  >
                    {children}
                  </code>
                )
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}
