"use client";
import * as React from "react";

import { useRouter } from "next/navigation";
import { useKeyPress } from "@/hooks/useKeyPress";

interface MainProps {
  children: React.ReactNode;
}
const Main = ({ children }: MainProps) => {
  const router = useRouter();
  const onKeyPress = (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.code === "Digit1") {
      router.push("/");
    } else if (event.code === "Digit2") {
      router.push("/projects");
    } else if (event.code === "Digit3") {
      router.push("/writing");
    }
  };
  useKeyPress(["Digit1", "Digit2", "Digit3"], onKeyPress);
  return (
    <div className="">{children}</div>
  );
};

export default Main;
