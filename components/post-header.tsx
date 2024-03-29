import { ArrowLeft, Dot } from "lucide-react";
import PostTitle from "./post-title";
import { format } from "date-fns";
import Link from "next/link";

type Props = {
  title: string;
  publisedAt: string;
  readingTime: string;
};
const PostHeader = ({ title, publisedAt, readingTime }: Props) => {
  return (
    <div className="border-b mb-10 pb-4">
      <Link
        href="/blog"
        className="flex items-center gap-2 transform translate-x-0 hover:-translate-x-2 transition-all duration-200 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-5 w-4" />
        back
      </Link>
      <PostTitle>{title}</PostTitle>
      <div className="flex mt-2 text-muted-foreground text-sm ">
        <p>{format(new Date(publisedAt), "PP")}</p>
        <Dot />
        <p className="italic">{readingTime}</p>
      </div>
    </div>
  );
};
export default PostHeader;
