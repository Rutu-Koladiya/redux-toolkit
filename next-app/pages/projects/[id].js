import { useRouter } from "next/router";
import projects from "../../lib/projectData";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find((p) => p.id == id);

  if (!project) return <p>Project not found</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-400">{project.description}</p>
    </div>
  );
}
