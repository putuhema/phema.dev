import { BlogPosts } from "@/components/posts";

const Page = () => {

  return (
    <main>
      <div className="mt-8">
        <div className="flex flex-col gap-2">
          <BlogPosts />
        </div>
      </div>
    </main>
  );
};
export default Page;
