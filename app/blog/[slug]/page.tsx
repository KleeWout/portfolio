import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '../../../lib/blog'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import SmartOfficePost from '../../../components/SmartOfficePost'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

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

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-20 md:px-8 md:py-24">
        {/* Back Link */}
        <Link
          href="/blog"
          className="group text-muted-foreground hover:text-foreground mb-12 inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            <h1 className="text-foreground mb-6 font-serif text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
              {post.frontmatter.title}
            </h1>

            <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-sm">
              <time dateTime={post.frontmatter.date}>
                {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span className="text-muted-foreground/40">•</span>
              <span>{post.frontmatter.readTime || '5 min read'}</span>
            </div>

            {post.frontmatter.excerpt && (
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                {post.frontmatter.excerpt}
              </p>
            )}
          </header>

          <div className="border-border border-t pt-12" />

          {/* Article Content */}
          {slug === 'my-first-post' ? (
            <SmartOfficePost />
          ) : (
            <div className="blog-content">
              <ReactMarkdown
                components={{
                  // Headings
                  h1: ({ children }) => (
                    <h1 className="text-foreground mt-12 mb-6 font-serif text-4xl leading-tight font-bold first:mt-0">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-foreground mt-12 mb-5 font-serif text-3xl leading-snug font-bold first:mt-0">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-foreground mt-10 mb-4 font-serif text-2xl leading-snug font-semibold first:mt-0">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-foreground mt-8 mb-3 text-xl leading-normal font-semibold first:mt-0">
                      {children}
                    </h4>
                  ),
                  h5: ({ children }) => (
                    <h5 className="text-foreground mt-6 mb-3 text-lg leading-normal font-semibold first:mt-0">
                      {children}
                    </h5>
                  ),
                  h6: ({ children }) => (
                    <h6 className="text-foreground mt-6 mb-2 text-base leading-normal font-semibold first:mt-0">
                      {children}
                    </h6>
                  ),

                  // Paragraphs
                  p: ({ children }) => (
                    <p className="text-foreground/90 mb-6 font-serif text-lg leading-relaxed">
                      {children}
                    </p>
                  ),

                  // Links
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-2 transition-colors hover:text-blue-700 hover:decoration-blue-700/50 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:text-blue-300 dark:hover:decoration-blue-300/50"
                      target={href?.startsWith('http') ? '_blank' : undefined}
                      rel={
                        href?.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {children}
                    </a>
                  ),

                  // Lists
                  ul: ({ children }) => (
                    <ul className="text-foreground/90 mb-6 ml-6 space-y-2 font-serif text-lg leading-relaxed">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="text-foreground/90 mb-6 ml-6 list-decimal space-y-2 font-serif text-lg leading-relaxed">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => <li className="pl-2">{children}</li>,

                  // Blockquotes
                  blockquote: ({ children }) => (
                    <blockquote className="border-muted-foreground/30 bg-muted/30 text-foreground/80 my-8 border-l-4 py-4 pr-4 pl-6 font-serif text-lg leading-relaxed italic">
                      {children}
                    </blockquote>
                  ),

                  // Code
                  code({ inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <div className="border-border my-8 overflow-hidden rounded-lg border shadow-sm">
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{
                            margin: 0,
                            padding: '1.5rem',
                            fontSize: '0.875rem',
                            lineHeight: '1.7',
                            background: 'rgb(30, 30, 30)',
                          }}
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code
                        className="bg-muted text-foreground rounded-md px-1.5 py-0.5 font-mono text-sm font-medium"
                        {...props}
                      >
                        {children}
                      </code>
                    )
                  },

                  // Horizontal Rule
                  hr: () => <hr className="border-border my-12" />,

                  // Images
                  img: ({ src, alt }) => (
                    <img
                      src={src}
                      alt={alt || ''}
                      className="border-border my-8 rounded-lg border shadow-md"
                    />
                  ),

                  // Strong/Bold
                  strong: ({ children }) => (
                    <strong className="text-foreground font-bold">
                      {children}
                    </strong>
                  ),

                  // Emphasis/Italic
                  em: ({ children }) => <em className="italic">{children}</em>,

                  // Tables
                  table: ({ children }) => (
                    <div className="my-8 overflow-x-auto">
                      <table className="divide-border border-border min-w-full divide-y border">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-muted">{children}</thead>
                  ),
                  tbody: ({ children }) => (
                    <tbody className="divide-border bg-background divide-y">
                      {children}
                    </tbody>
                  ),
                  tr: ({ children }) => <tr>{children}</tr>,
                  th: ({ children }) => (
                    <th className="text-foreground px-4 py-3 text-left text-sm font-semibold">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="text-foreground/90 px-4 py-3 text-sm">
                      {children}
                    </td>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          )}

          {/* Article Footer */}
          <div className="border-border mt-16 border-t pt-8">
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to all posts
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
