import NewProjButton from "@/components/new_project";
import React from "react";

import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import ProjectsList from "./projects-list";

export default async function Page() {
  const { userId } = auth();
  const user = await currentUser();
  console.log(user);

  const allProjects = await db.select().from(projects);

  console.log(allProjects);
  return (
    <div>
      <NewProjButton />

      {allProjects.length > 0 && <ProjectsList projects={allProjects} />}
    </div>
  );
}
