import { db } from "@/db";
// import { projects as dbProject } from "@/db/schema";
import {
  projects as dbProject,
  feedbacks,
  feedbackDetail,
  feedbackOnlyFacialExpression,
} from "@/db/schema";
import { eq } from "drizzle-orm";
import { ChevronLeft, Code, Globe } from "lucide-react";
import Link from "next/link";
import Table from "@/components/tableBasic";
import TableDetail from "@/components/tableDetail";
import TableFace from "@/components/tableFace";

// type Project = InferSelectModel<typeof dbProject>;

async function page({ params }: { params: { projectId: string } }) {
  if (!params.projectId) {
    return <div>Project not found</div>;
  }

  // const projects = (await db.query.projects.findMany({
  //   where: eq(dbProject.id, parseInt(params.projectId)),
  //   with: {
  //     feedbacks: true,
  //   },
  // })) as any;

  // const project = projects[0];
  // console.log(project);

  // First, fetch the project to get the widgetType
  const [project] = await db.query.projects.findMany({
    where: eq(dbProject.id, parseInt(params.projectId)),
    columns: {
      id: true,
      name: true,
      description: true,
      url: true,
      widgetType: true,
    },
  });

  if (!project) {
    return <div>Project not found</div>;
  }

  // Now, fetch the appropriate feedback type based on widgetType
  let feedbackData: any;
  switch (project.widgetType) {
    case 1:
      feedbackData = await db.query.feedbacks.findMany({
        where: eq(feedbacks.projectId, project.id),
      });
      break;
    case 2:
      feedbackData = await db.query.feedbackDetail.findMany({
        where: eq(feedbackDetail.projectId, project.id),
      });
      break;
    case 3:
      feedbackData = await db.query.feedbackOnlyFacialExpression.findMany({
        where: eq(feedbackOnlyFacialExpression.projectId, project.id),
      });
      break;
    default:
      feedbackData = [];
  }

  // Function to render the appropriate table based on widgetType
  const renderTable = (widgetType: number, feedbacks: any[]) => {
    switch (widgetType) {
      case 1:
        return <Table data={feedbacks} />;
      case 2:
        return <TableDetail data={feedbacks} />;
      case 3:
        return <TableFace data={feedbacks} />;
      default:
        return <Table data={feedbacks} />;
    }
  };

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
            href={`/projects/${project.id}/instructions?widgetType=${project.widgetType}`}
            className="underline text-indigo-700 flex items-center mt-2"
          >
            <Code className="w-5 h-5 mr-1" />
            <span className="text-lg">Embed code</span>
          </Link>
        </div>
      </div>
      <div>
        {/* <Table data={project.feedbacks} /> */}
        {renderTable(project.widgetType ?? 3, feedbackData)}
      </div>
    </>
  );
}

export default page;
