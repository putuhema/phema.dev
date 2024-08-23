"use client";

import Drag from "./drag";

const Sticker = ({ children }: { children: React.ReactNode }) => {
  return <Drag className="drop-shadow-sm">{children}</Drag>;
};

export default Sticker;