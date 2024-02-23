import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";

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

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="max-w-4xl mx-auto">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
};

export default Post;
