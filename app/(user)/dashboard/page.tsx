import NewProjButton from "@/components/new_project";
import React from "react";

import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import ProjectsList from "./projects-list";
import { maxFreeProjects } from "@/lib/payments";

export default async function Page() {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));

  const projectCount = userProjects.length;
  const canCreateNewProject = projectCount < maxFreeProjects;

  return (
    <div>
      <NewProjButton
        canCreateNewProject={canCreateNewProject}
        maxFreeProjects={maxFreeProjects}
      />

      {projectCount > 0 && <ProjectsList projects={userProjects} />}
    </div>
  );
}
