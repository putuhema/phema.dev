import PostPreview from "@/components/post-preview";
import { getAllPosts } from "@/lib/api";

const Page = () => {
  const posts = getAllPosts();

  return (
    <main className="max-w-xl lg:max-w-4xl mx-auto pt-10">
      <div className="flex flex-col gap-2">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            readingTime={post.readingTime}
          />
        ))}
      </div>
    </main>
  );
};
export default Page;
