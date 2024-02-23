import { getAllPosts, getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { allWritings } from "contentlayer/generated";
import PostHeader from "@/components/post-header";
import { Mdx } from "@/components/mdx"
import "./mdx.css"

interface Params {
  params: {
    slug: string;
  };
}

const Post = async ({ params }: Params) => {
  const writing = allWritings.find((writing) => writing.slug === params.slug);
  if (!writing) {
    return notFound();
  }

  return (
    <main className="max-w-6xl mx-auto mb-10">
      <PostHeader
        title={writing.title}
        date={writing.date}
        readingTime="2 min"
      />
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-gray dark:prose-invert">
        <Mdx code={writing.body.code} />
      </article>
    </main>
  );
};

export default Post;

export function generateMetadata({ params }: Params) {
  const writing = allWritings.find(writing => writing.slug === params.slug)
  if (!writing) {
    return notFound()
  }

  return {
    title: writing.title,
  }
}

export async function generateStaticParams() {
  return allWritings.map((writing) => ({
    slug: writing.slug,
  }));
}
