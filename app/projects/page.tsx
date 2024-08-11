import { Card } from "@/components/card";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Project from "@/components/project";
import { getProjects } from "../blog/utils";

export default function Projects() {
  const projects = getProjects().sort((a, b) => {
    if (
      new Date(a.metadata.date) > new Date(b.metadata.date)
    ) {
      return -1
    }
    return 1
  })


  return (
    <div className="flex flex-col  bg-gradient-to-tl from-background to-background">
      <Nav />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-8">
          <div className="grid grid-cols-1 gap-2">
            {projects
              .filter((_, i) => i % 3 === 0)
              .map((project, i) => (
                <Card key={i}>
                  <Project
                    project={{
                      title: project.metadata.title,
                      date: project.metadata.date,
                      description: project.metadata.summary,
                      repository: project.metadata.repository,
                      techstack: project.metadata.techstack.split(","),
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
                      title: project.metadata.title,
                      date: project.metadata.date,
                      description: project.metadata.summary,
                      repository: project.metadata.repository,
                      techstack: project.metadata.techstack.split(","),
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
                      title: project.metadata.title,
                      date: project.metadata.date,
                      description: project.metadata.summary,
                      repository: project.metadata.repository,
                      techstack: project.metadata.techstack.split(","),
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
