'use client'

import Link from 'next/link'
import { Card, CardHeader, CardBody, CardFooter, Divider } from '@heroui/react'
import { Post } from '../../lib/blog'

interface BlogListProps {
  posts: Post[]
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
          <Card className="h-full transition-transform duration-200 hover:scale-[1.02]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md text-foreground/90 font-serif font-semibold">
                  {post.frontmatter.title}
                </p>
                <p className="text-small text-default-500">
                  {post.frontmatter.date}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="text-default-500 line-clamp-3">
                {post.frontmatter.excerpt}
              </p>
            </CardBody>
            <CardFooter>
              <span className="text-primary group-hover:underline">
                Read more &rarr;
              </span>
            </CardFooter>
          </Card>
        </Link>
      ))}

      {posts.length === 0 && (
        <div className="col-span-full py-20 text-center text-gray-500">
          No posts found. Check back later!
        </div>
      )}
    </div>
  )
}
