import { getBlogPosts } from '@/app/(with-layout)/blog/utils'
import { formatRelativeDate } from '@/lib/utils'
import Link from 'next/link'

export function BlogPosts({ first3 = false }: { first3?: boolean }) {
  let allBlogs = getBlogPosts()
    .sort((a, b) => {
      if (
        new Date(a.metadata.date) > new Date(b.metadata.date)
      ) {
        return -1
      }
      return 1
    })

  return (
    <div>
      {
        (first3 ?
          allBlogs.slice(0, 3) : allBlogs)
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
                  {formatRelativeDate(new Date(post.metadata.date))}
                </p>
              </div>
            </Link>
          ))}
    </div>
  )
}
