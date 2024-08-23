import { getBlogPosts } from '@/app/(with-layout)/blog/utils'
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
            <div className="w-full flex justify-between items-center space-x-0 md:space-x-2 group">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline decoration-accent underline-offset-4">
                {post.metadata.title}
              </p>
              <p className="text-gray-11 tabular-nums">
                {format(new Date(post.metadata.date), "PP")}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
