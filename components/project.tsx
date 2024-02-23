import Link from "next/link";
import { format } from "date-fns"
import { Badge } from "./ui/badge";

type Props = {
  project: {
    title: string;
    description: string;
    date?: string;
    url?: string;
    repository?: string;
    techstack?: string[];
  };
};
const Project = ({ project }: Props) => {
  return (
    <Link href={`https://github.com/${project.repository}`} target="_blank">
      <article className="p-4 md:p-8">
        <div>
          <div className="flex justify-between gap-2 items-center">
            <h2 className="font-bold text-xl">{project.title}</h2>
            <p className="text-sm text-muted-foreground">{format(new Date(project.date!), "PP")}</p>
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        {
          project.techstack && (
            <div className="w-full flex flex-wrap gap-2 mt-4">
              {project.techstack.map((tech) => (
                <Badge
                  key={tech}
                  className="bg-transparent border border-zinc-600 text-foreground hover:bg-transparent"
                >
                  {tech}
                </Badge>
              ))}
            </div>

          )
        }
      </article>
    </Link>
  );
};

export default Project;
