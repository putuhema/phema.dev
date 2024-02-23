import React from "react";
import { Card } from "@/components/card";
import Project from "@/components/project";
import Particles from "@/components/particles";

export default function Page() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-gradient-to-tl from-background to-background">
      {/* <Particles */}
      {/*   className="absolute inset-0 z-0 animate-fade-in" */}
      {/*   quantity={100} */}
      {/* /> */}
      <div className="max-w-6xl mx-auto pt-10">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p>projects that i worked on college, bootcamp and my free time.</p>
        <div className="border border-b my-8 " />
        <div className="grid grid-cols-3 gap-4">
          <div className="grid grid-cols-1 gap-4">
            {items
              .filter((_, i) => i % 3 === 0)
              .map((item, i) => (
                <Card key={i}>
                  <Project
                    project={{
                      ...item,
                    }}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {items
              .filter((_, i) => i % 3 === 1)
              .map((item, i) => (
                <Card key={i}>
                  <Project
                    project={{
                      ...item,
                    }}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {items
              .filter((_, i) => i % 3 === 2)
              .map((item, i) => (
                <Card key={i}>
                  <Project
                    project={{
                      ...item,
                    }}
                  />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const items = [
  {
    title: "phema.dev",
    date: "22 Feb 2024",
    description: "The website you're looking at",
    url: "https://github.com/putuhema/phema.dev",
    techstack: ["Reactjs", "Tailwindcss", "Typescript", "shadcn/ui"],
  },
  {
    title: "Toten",
    date: "22 Feb 2024",
    description:
      "Toten is a multi-warehouse e-commerce platform for the clothing industry.",
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
    date: "22 Feb 2024",
    description:
      "Hangout an event management application, to simplify the complex and time-consuming process of event planning and organization.",
    url: "https://github.com/putuhema/Hangout",
    techstack: ["Reactjs", "JS", "Clerk", "Nodejs", "Expressjs", "Prisma"],
  },
  {
    title: "Kasirku",
    date: "22 Feb 2024",
    description: "Discover the beauty of thoughtful and functional design.",
    url: "https://github.com/putuhema/kasirku",
    techstack: ["Reactjs", "JS", "Nodejs", "Expressjs", "Chakra UI", "Redux"],
  },
  {
    title: "Giziku",
    date: "22 Feb 2024",
    description:
      "Giziku is a stunting detection app, to address the global health issue of stunting in human development.",
    url: "https://github.com/putuhema/giziku",
    techstack: ["Javascript", "HTML", "Pug", "CSS", "Expressjs"],
  },
];
