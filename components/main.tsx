"use client";
import * as React from "react";

import Nav from "./nav";
import { ModeToggle } from "./mode-toggle";
import { Home, PenLine, Sparkles } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
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
    <div className="w-full relative">
      <div className="absolute  z-50 top-0 right-0 p-4">
        <ModeToggle />
      </div>
      <div className="flex max-w-5xl mx-auto z-50 gap-10 absolute top-0 left-0 p-4">
        <TooltipProvider>
          <Nav
            links={[
              {
                icon: Home,
                title: "home",
                href: "/",
                shortcut: "1",
              },
              {
                icon: Sparkles,
                title: "projects",
                href: "/projects",
                shortcut: "2",
              },
              {
                icon: PenLine,
                title: "writing",
                href: "/writing",
                shortcut: "3",
              },
            ]}
          />
        </TooltipProvider>
      </div>
      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
};

export default Main;
