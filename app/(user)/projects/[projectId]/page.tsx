import { db } from "@/db";
import { projects as dbProject } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Globe } from "lucide-react";
import Link from "next/link";
import Table from "@/components/table";

async function page({ params }: { params: { projectId: string } }) {
  if (!params.projectId) {
    return <div>Project not found</div>;
  }

  const projects = await db.query.projects.findMany({
    where: eq(dbProject.id, parseInt(params.projectId)),
    with: {
      feedbacks: true,
    },
  });

  const project = projects[0];
  console.log(project);

  return (
    <>
      <div className="flex justify-between items-start">
        <div className="proj-info">
          <h1 className="text-3xl font-bold mb-3">{project?.name}</h1>
          <h2 className="text-primary-background text-xl mb-2">
            {project?.description}
          </h2>
        </div>
        {project.url ? (
          <Link
            className="underline text-indigo-700 flex items-center"
            href={project?.url}
          >
            <Globe className="w-4 h-4 mr-1" />
            <span className="text-lg">Visit site</span>
          </Link>
        ) : null}
      </div>
      <div>
        <Table data={project.feedbacks} />
      </div>
    </>
  );
}

export default page;
