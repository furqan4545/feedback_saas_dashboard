import { NextResponse } from "next/server";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function DELETE(
  request: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const { projectId } = params;

    await db.delete(projects).where(eq(projects.id, parseInt(projectId)));

    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
