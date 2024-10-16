"use server";

import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function deleteProject(projectId: string) {
  try {
    await db.delete(projects).where(eq(projects.id, parseInt(projectId)));
    return { success: true };
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, error: "Failed to delete project" };
  }
}
