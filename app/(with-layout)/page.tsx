
import Contact, { ContactItem } from "@/components/contact-link";
import Section from "@/components/section";
import Link from "next/link";
import LinkPrimitive from "@/components/link-primitive";
import { ArrowUpRight, PencilLine, ScribbleLoop } from "@phosphor-icons/react/dist/ssr";
import { Suspense } from "react";
import Skeleton from "@/components/skeleton";
import StickerContainer from "@/components/sticker-container";
import { BlogPosts } from "@/components/posts";
import { getPostsSize } from "./blog/utils";

const Projects = () => {
  return (
    <Section heading="Projects">
      <ul className="flex flex-col gap-y-6">
        <li>
          <p>
            <LinkPrimitive href="https://github.com/putuhema/minigame" external>
              Minigame
            </LinkPrimitive>{" "}
            is a smaller version of a game or project I found interesting online. It captures the core mechanics of the original while being more compact and accessible. I created it to practice my skills or as a tribute, offering a quick and engaging experience, sometimes with my own personal twists.
          </p>
          <div className="flex items-center mt-2 gap-x-4">
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://github.com/putuhema/minigame"
              target="_blank"
              rel="noreferrer"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>
        <li>
          <p>
            <LinkPrimitive
              href="https://putuhema-dev.verce.app"
              external
            >
              phema.dev
            </LinkPrimitive>{" "}
            is a website that you looking at right now. While it serves its purpose now, I know it might change or evolve in the future as I continue to improve and update it.
          </p>
          <div className="flex items-center mt-3 gap-x-4">
            <a
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
              href="https://putuhema-dev.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live{" "}
              <span className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm">
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
            <a
              href="https://github.com/putuhema/phema.dev"
              className="flex gap-x-1.5 items-center text-gray-10 cursor-pointer text-sm"
            >
              Code{" "}
              <span
                className="w-3.5 h-3.5 p-0.5 bg-accent flex items-center justify-center rounded-sm"
                aria-hidden={true}
              >
                <ArrowUpRight size={12} className="shrink-0 text-gray-12" />
              </span>
            </a>
          </div>
        </li>

      </ul>
    </Section>
  );
};

const Footer = () => {
  return (
    <Section>
      <div className="max-w-xs mt-12 text-sm text-gray-11 md:mt-0">
        This website has recently been revamped and is constant a work in
        progress. Last updated on{" "}
        <Suspense fallback={<Skeleton className="inline-flex w-24 h-4" />}>
          <FooterDate />
        </Suspense>
        .
      </div>
    </Section>
  );
};

const FooterDate = async () => {
  const data = await fetch(
    "https://api.github.com/repos/putuhema/phema.dev/commits",
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  ).then((res) => res.json());

  // hack lazy way to bypass rate limit without going through auth
  // to add proper stuff later!
  const lastCommit = !data.message
    ? data.map((commit: any) => commit.commit.committer.date)[0]
    : "";
  const formatDate = lastCommit
    ? new Date(lastCommit).toLocaleDateString()
    : "2023/11/07";
  return (
    <LinkPrimitive href="https://github.com/putuhema/phema.dev" external>
      {formatDate}
    </LinkPrimitive>
  );
};

function RecentWriting() {
  return (
    <Section heading="Recent Writing">
      <BlogPosts first3 />
      {
        getPostsSize() > 3 &&
        <ContactItem className="w-max" icon={<PencilLine />}>
          <Link href="/blog">See More</Link>
        </ContactItem>
      }
    </Section>
  )
}

function AboutMe() {
  return (
    <Section>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center text-base ">
          <span className="h-2 w-2 animate-pulse bg-accent rounded-full inline-block" />Putu Mahendra</div>
        <ContactItem icon={<ScribbleLoop />}>
          <Link href="/visitors">Sign the visitor's log</Link>
        </ContactItem>
      </div>
      <div>

      </div>
      <p className="text-gray-11 text-sm mb-8">Web Developer</p>
      <p>Creating interesting stuff in web world. I dedicate most my time to continuous learning and refining my skillset and knowledge.</p>
    </Section>

  )
}


export default function Home() {
  return (
    <div className="px-10 md:px-0 w-full md:max-w-lg md:mx-auto min-h-screen relative ">
      <AboutMe />
      <Projects />
      <RecentWriting />
      <Contact />
      <Footer />
      <StickerContainer />
    </div>
  );
}
