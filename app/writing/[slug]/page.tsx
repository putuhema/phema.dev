import { getAllPosts, getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import PostHeader from "@/components/post-header";

interface Params {
  params: {
    slug: string;
  };
}

const Post = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <main className="max-w-4xl mx-auto mb-10">
      <PostHeader
        title={post.title}
        date={post.date}
        readingTime={post.readingTime}
      />
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-gray dark:prose-invert">
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
};

export default Post;

export function generateMetadata({ params }: Params) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }
  const title = `${post.title} | putuhema.dev`;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
