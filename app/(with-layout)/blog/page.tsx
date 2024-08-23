import { BlogPosts } from "@/components/posts";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {

  return (
    <main className="space-y-4 px-10 md:px-0 w-full md:max-w-lg md:mx-auto min-h-screen">
      <Link
        href="/"
        className="flex gap-x-1 bg-accent text-gray-12 w-fit rounded-sm pl-0.5 pr-1 py-0.5 leading-none items-center hover:bg-accent/50 transition duration-100 mx-1"
        aria-label="Back"
      >
        <ArrowLeft size={16} className="shrink-0" />
        <span className="text-sm font-medium">Index</span>
      </Link>
      <BlogPosts />
    </main>
  );
};
export default Page;
