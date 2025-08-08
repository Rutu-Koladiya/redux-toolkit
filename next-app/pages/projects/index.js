import Link from "next/link";
import projects from "../../lib/projectData";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects?.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </section>
  );
}
