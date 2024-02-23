"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PenLine, Sparkles, Home as HomeIcon } from "lucide-react";


const links =
  [
    {
      icon: HomeIcon,
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
  ]

type Props = {
  orientation?: "vertical" | "horizontal";
}
const Nav = ({ orientation = "horizontal" }: Props) => {
  const pathname = usePathname();
  return (
    <nav className={cn("z-50 flex justify-center items-center gap-4 p-2 py-8", orientation === "vertical" && "flex-col")}>
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={cn(
            "flex items-center text-muted-foreground/50 hover:text-foreground transition-all duration-200 rounded-md w-full",
            pathname === link.href && "text-foreground",
            pathname.startsWith("/writing") &&
            link.href === "/writing" &&
            "text-foreground",
          )}
        >
          <p className=" text-xs h-5 w-5 grid place-content-center  border rounded-md mr-2">
            {link.shortcut}
          </p>
          <p>{link.title}</p>
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
