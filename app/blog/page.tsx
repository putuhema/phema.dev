import PageHeader from "@/components/page-header";
import PostPreview from "@/components/post-preview";
import { allWritings } from "contentlayer/generated"

const Page = () => {
  const writings = allWritings.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <main>
      <PageHeader
        title="Blog"
        description="I write about things i find interesting, maybe you find them interesting too."
      />
      <div className="mt-8">
        {writings.length > 0 ? (
          <div className="flex flex-col gap-2">
            {writings.map((writing) => (
              <PostPreview
                publishedAt={writing.publishedAt}
                key={writing.slug}
                slug={writing.slug}
                title={writing.title}
                readingTime={writing.readTime}
                summary={writing.summary}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground italic">no post yet.</p>
        )}
      </div>
    </main>
  );
};
export default Page;
