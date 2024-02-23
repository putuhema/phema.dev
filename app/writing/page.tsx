import PostPreview from "@/components/post-preview";
import { allWritings } from "contentlayer/generated"

const Page = () => {
  const writings = allWritings.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return (
    <main>
      <h1 className="text-2xl font-bold">Writing</h1>
      <p>I write about things i find interesting.</p>
      <div className="border border-b my-8" />
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
        <p className="text-center text-muted-foreground italic">no post yet.</p>
      )}
    </main>
  );
};
export default Page;
