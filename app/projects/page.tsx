import { Card } from "@/components/card";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import PageHeader from "@/components/page-header";
import Project from "@/components/project";
import { allProjects } from "contentlayer/generated";

export default function Projects() {
  const projects = allProjects.sort((a, b) => {
    return new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() - new Date(a.date ?? Number.POSITIVE_INFINITY).getTime();
  });

  return (
    <div className="flex flex-col  bg-gradient-to-tl from-background to-background">
      <Nav />
      <Container>
        <PageHeader
          title="Projects"
          description="projects that i work on time in earth."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-8">
          <div className="grid grid-cols-1 gap-2">
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
          <div className="grid grid-cols-1 gap-2">
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
          <div className="grid grid-cols-1 gap-2">
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
        <Footer />
      </Container>
    </div>
  );
}
