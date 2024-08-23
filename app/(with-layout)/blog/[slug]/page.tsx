import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { getBlogPosts } from '../utils'
import { baseUrl } from '@/app/sitemap'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

type Params = {
  params: {
    slug: string;
  }
}

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: Params) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return {}
  }

  let {
    title,
    date: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }: Params) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className='px-10 md:px-0 w-full md:max-w-lg md:mx-auto min-h-screen'>
      <Link
        href="/"
        className="flex gap-x-1 bg-accent text-gray-12 w-fit rounded-sm pl-0.5 pr-1 py-0.5 leading-none items-center hover:bg-accent/50 transition duration-100 mx-1"
        aria-label="Back"
      >
        <ArrowLeft size={16} className="shrink-0" />
        <span className="text-sm font-medium">Index</span>
      </Link>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {format(new Date(post.metadata.date), "PP")}
        </p>
      </div>
      <article className="prose pb-24">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
