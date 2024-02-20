"use client"
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface NavProps {
  links: {
    icon: LucideIcon;
    title: string;
    href: string;
  }[];
}

const Nav = ({ links }: NavProps) => {
  const pathname = usePathname()
  return (
    <nav className="flex flex-col justify-center items-center gap-4 p-2 py-8 border rounded-full bg-background/50 backdrop-blur-md">
      {links.map((link) => (
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Link
              href={link.href}
              key={link.title}
              className={cn("flex items-center text-muted-foreground/50 hover:text-foreground transition-all duration-200 rounded-md w-full", pathname === link.href && "text-foreground")}
            >
              <link.icon className="w-6 h-6" />
            </Link>
          </TooltipTrigger>
          <TooltipContent align="center" side="right" sideOffset={15} className="bg-background/60 backdrop-blur-md text-primary border ">
            <p>{link.title}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </nav>
  );
};
export default Nav;
