"use client"
import * as React from "react"

import Nav from "./nav"
import { ModeToggle } from "./mode-toggle"
import { FollowerPointerCard } from "./ui/following-pointer"
import { Icon } from "./ui/icon"
import { TypewriterEffect } from "./ui/typewritter"
import { Home, PenLine, Sparkles } from "lucide-react"
import Footer from "./footer"
import { TooltipProvider } from "@/components/ui/tooltip"

interface MainProps {
  children: React.ReactNode
}
const Main = ({ children }: MainProps) => {
  return (
    <div className="w-full relative">
      <div className="absolute  z-50 top-0 right-0 p-4">
        <ModeToggle />
      </div>
      <div className="flex max-w-5xl mx-auto z-50 gap-10 absolute top-1/2 left-0 p-4">
        <TooltipProvider>
          <Nav
            links={[
              {
                icon: Home,
                title: "home",
                href: "/",
              },
              {
                icon: Sparkles,
                title: "projects",
                href: "/projects",
              },
              {
                icon: PenLine,
                title: "writing",
                href: "/writing",
              },
            ]}
          />
        </TooltipProvider>
      </div>
      <div className="w-full min-h-screen">{children}</div>
      <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Main