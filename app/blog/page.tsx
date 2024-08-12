import { BlogPosts } from "@/components/posts";

const Page = () => {

  return (
    <main className="w-full lg:container mx-auto pt-10">
      <div className="flex flex-col gap-2">
        <BlogPosts />
      </div>
    </main>
  );
};
export default Page;
