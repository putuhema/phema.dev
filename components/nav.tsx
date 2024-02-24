"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PenLine, Sparkles, Home as HomeIcon, CodeSquareIcon } from "lucide-react";
import { useKeyPress } from "@/hooks/useKeyPress";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";


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
      title: "blog",
      href: "/blog",
      shortcut: "3",
    },
    {
      icon: CodeSquareIcon,
      title: "snippet",
      href: "/snippet",
      shortcut: "4",
    },
    {
      icon: CodeSquareIcon,
      title: "guestbook",
      href: "/guestbook",
      shortcut: "5",
    },
  ]

const Nav = () => {
  const pathname = usePathname();
  const ref = React.useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = React.useState(true);

  const router = useRouter();
  const onKeyPress = (event: KeyboardEvent) => {
    event.preventDefault();
    links.forEach((link) => {
      if (event.code === `Digit${link.shortcut}`) {
        router.push(link.href);
      }
    });
  };
  const digits = links.map((link) => `Digit${link.shortcut}`)
  useKeyPress(digits, onKeyPress);

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

  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = React.useState(true)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() >= 0.95) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <header ref={ref}>
      <AnimatePresence mode="wait">
        <div className="fixed inset-x-0 top-0 z-50 duration-200 p-4">
          <motion.div
            animate={{
              y: visible ? 0 : -100,
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className={cn("mx-auto container py-2 w-max backdrop-blur border rounded-full border-background transition-all duration-100",
              !isIntersecting && "border-zinc-600"
            )}
          >
            <div className="flex gap-4 w-max">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={cn(
                    "flex items-center text-muted-foreground/50 hover:text-foreground transition-all duration-200 rounded-md w-full",
                    pathname === link.href && "text-foreground",
                    pathname.startsWith("/blog") &&
                    link.href === "/blog" &&
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
          </motion.div>
        </div>
      </AnimatePresence>
    </header>
  );
};
export default Nav;
