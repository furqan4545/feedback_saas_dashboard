"use server";
import { db } from "@/db";
import { auth } from "@clerk/nextjs/server";
import { projects } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
  const { userId } = auth();

  const project = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    url: formData.get("url") as string,
    widgetType: Number(formData.get("widgetType")),
    userId: userId as string,
  };

  console.log("project: ", project);

  const [newProject] = await db
    .insert(projects)
    .values(project)
    .returning({ insertedId: projects.id, widgetType: projects.widgetType });

  console.log("project id: ", newProject.insertedId);
  // redirect(`/projects/${newProject.insertedId}/instructions`);
  redirect(
    `/projects/${newProject.insertedId}/instructions?widgetType=${newProject.widgetType}`
  );
}
