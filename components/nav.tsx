"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavProps {
  links: {
    icon: LucideIcon;
    title: string;
    href: string;
    shortcut: string;
  }[];
}

const Nav = ({ links }: NavProps) => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col justify-center items-center gap-2 p-2 py-8 ">
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          className={cn(
            "flex items-center text-muted-foreground/50 hover:text-foreground transition-all duration-200 rounded-md w-full",
            pathname === link.href && "text-foreground",
          )}
        >
          <p>/{link.title}</p>
          <p className="px-2  border rounded-md ml-2">{link.shortcut}</p>
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
