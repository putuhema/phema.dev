import { Card } from "@/components/card";
import Nav from "@/components/nav";
import Project from "@/components/project";
import { allProjects } from "contentlayer/generated";

export default function Page() {
  const projects = allProjects;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gradient-to-tl from-background to-background">
      <div className="mx-auto">
        <Nav />
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p>projects that i worked on college, bootcamp and my free time.</p>
        <div className="border border-b my-8 " />
        <div className="grid grid-cols-3 gap-4">
          <div className="grid grid-cols-1 gap-4">
            {projects
              .filter((_, i) => i % 3 === 0)
              .map((project, i) => (
                <Card key={i}>
                  <Project
                    project={{
                      title: project.title,
                      date: project.date,
                      description: project.description,
                      repository: project.repository,
                      techstack: project.techstack,
                    }}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects
              .filter((_, i) => i % 3 === 1)
              .map((project, i) => (
                <Card key={i}>
                  <Project
                    project={{
                      title: project.title,
                      date: project.date,
                      description: project.description,
                      url: project.url!,
                      techstack: project.techstack,
                    }}
                  />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects
              .filter((_, i) => i % 3 === 2)
              .map((project, i) => (
                <Card key={i}>
                  <Project
                    project={{
                      title: project.title,
                      date: project.date,
                      description: project.description,
                      url: project.url!,
                      techstack: project.techstack,
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
