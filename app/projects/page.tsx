import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <main className="bg-background  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative h-[100dvh]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
      <div className="max-w-4xl mx-auto pt-20 ">
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
              url={item.url}
              techstack={item.techstack}
            />
          ))}
        </BentoGrid>
      </div>
    </main>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Toten",
    description:
      "Toten is a multi-warehouse e-commerce platform for the clothing industry. The platform uses advanced inventory management algorithms to track stock levels across multiple warehouses in real-time, improving product availability and reducing stock-outs.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <GitHubLogoIcon className="h-4 w-4 text-neutral-500" />,
    url: "https://github.com/purwadhikafullstack/JCWDOL01101",
    techstack: [
      "Reactjs",
      "Tailwindcss",
      "Typescript",
      "Tanstack Query",
      "Clerk",
      "Nodejs",
      "Expressjs",
      "Sequelize",
      "shadcn/ui",
    ],
  },
  {
    title: "Hangout",
    description:
      "Hangout an event management application, to simplify the complex and time-consuming process of event planning and organization.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <GitHubLogoIcon className="h-4 w-4 text-neutral-500" />,
    url: "https://github.com/putuhema/Hangout",
    techstack: ["Reactjs", "JS", "Clerk", "Nodejs", "Expressjs", "Prisma"],
  },
  {
    title: "Kasirku",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <GitHubLogoIcon className="h-4 w-4 text-neutral-500" />,
    url: "https://github.com/putuhema/kasirku",
    techstack: ["Reactjs", "JS", "Nodejs", "Expressjs", "Chakra UI", "Redux"],
  },
  {
    title: "Giziku",
    description:
      "Giziku is a stunting detection app, to address the global health issue of stunting in human development. The app uses advanced algorithms to analyze health parameters for early detection of stunting.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <GitHubLogoIcon className="h-4 w-4 text-neutral-500" />,
    url: "https://github.com/putuhema/giziku",
    techstack: ["Javascript", "HTML", "Pug", "CSS", "Expressjs"],
  },
];
