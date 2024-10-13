import { db } from "@/db";
import { projects as dbProject } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ChevronLeft, Code, Globe } from "lucide-react";
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
      <div>
        <Link
          href="/dashboard"
          className="flex items-center text-indigo-700 mb-3"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          <span>Back to projects</span>
        </Link>
      </div>
      <div className="flex justify-between items-start">
        <div className="proj-info">
          <h1 className="text-3xl font-bold mb-3">{project?.name}</h1>
          <h2 className="text-primary-background text-xl mb-2">
            {project?.description}
          </h2>
        </div>
        <div className="flex flex-col">
          {project.url ? (
            <Link
              className="underline text-indigo-700 flex items-center"
              href={project?.url}
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-lg">Visit site</span>
            </Link>
          ) : null}
          <Link
            href={`/projects/${project.id}/instructions`}
            className="underline text-indigo-700 flex items-center mt-2"
          >
            <Code className="w-5 h-5 mr-1" />
            <span className="text-lg">Embed code</span>
          </Link>
        </div>
      </div>
      <div>
        <Table data={project.feedbacks} />
      </div>
    </>
  );
}

export default page;
