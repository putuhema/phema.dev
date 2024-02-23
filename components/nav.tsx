"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PenLine, Sparkles, Home as HomeIcon } from "lucide-react";
import { useKeyPress } from "@/hooks/useKeyPress";


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

const Nav = () => {
  const pathname = usePathname();
  const ref = React.useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = React.useState(true);

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

  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current)
    return () => {
      observer.disconnect();
    };
  }, [])

  return (
    <header ref={ref}>
      <div className={cn("fixed inset-x-0 top-0 z-50  duration-200 p-4"
      )}>
        <div className={cn("mx-auto container py-2  w-max",
          !isIntersecting && "border rounded-full backdrop-blur"
        )}>
          <div className="flex gap-4 w-max">
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
          </div>
        </div>
      </div>
    </header>
  );
};
export default Nav;
