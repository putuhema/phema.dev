import { notFound } from "next/navigation";
import { allWritings } from "contentlayer/generated";
import PostHeader from "@/components/post-header";
import { Mdx } from "@/components/mdx"
import "./mdx.css"

interface Params {
  params: {
    slug: string;
  };
}

const Writing = ({ params }: Params) => {
  const writing = allWritings.find((writing) => writing.slug === params.slug);
  if (!writing) {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto">
      <PostHeader
        title={writing.title}
        publisedAt={writing.publishedAt}
        readingTime={writing.readTime}
      />
      <article className=" prose prose-sm md:prose-base lg:prose-lg prose-gray dark:prose-invert">
        <Mdx code={writing.body.code} />
      </article>
    </main>
  );
};

export default Writing;

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
