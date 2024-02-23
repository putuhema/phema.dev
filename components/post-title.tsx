import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight ">
      {children}
    </h1>
  );
};

export default PostTitle;
