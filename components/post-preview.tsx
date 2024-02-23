import { format } from "date-fns";
import Link from "next/link";

type PostPreviewProps = {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime?: string | number;
};

const PostPreview = ({
  title,
  slug,
  date,
  readingTime,
  description
}: PostPreviewProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <Link href={`/writing/${slug}`} className="hover:underline">
            {title}
          </Link>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-muted-foreground">
            {format(new Date(date), "PP")}
          </p>
          <p className="text-sm italic self-end">{readingTime}</p>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
