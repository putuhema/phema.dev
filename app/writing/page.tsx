import PostPreview from "@/components/post-preview";
import { allWritings } from "contentlayer/generated"

const Page = () => {
  const writings = allWritings

  return (
    <main className="max-w-xl lg:max-w-6xl mx-auto">
      {writings.length > 0 ? (
        <div className="flex flex-col gap-2">
          {writings.map((writing) => (
            <PostPreview
              date={writing.date}
              key={writing.slug}
              slug={writing.slug}
              title={writing.title}
              readingTime={writing.readTime}
              description={writing.description}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">no post yet.</p>
      )}
    </main>
  );
};
export default Page;
