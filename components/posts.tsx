import { formatDate, getBlogPosts } from '@/app/blog/utils'
import { format } from 'date-fns'
import Link from 'next/link'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.date) > new Date(b.metadata.date)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col space-x-0 md:space-x-2">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 text-sm dark:text-neutral-400 tabular-nums">
                {format(new Date(post.metadata.date), "PP")}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
