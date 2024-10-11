import { relations } from "drizzle-orm";
import { integer, serial, pgTable, varchar, text } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  description: varchar("description", { length: 255 }),
  url: varchar("url", { length: 255 }),
  userId: varchar("user_id", { length: 255 }),
});

export const feedbacks = pgTable("feedbacks", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id"),
  userName: varchar("user_name"),
  userEmail: varchar("user_email"),
  message: varchar("message"),
});

// Now we have two tables, projects and feedbacks. Now we need to create a relation between them.
// relation will be one to many. One project can have many feedbacks.

export const feedbacksRelations = relations(feedbacks, ({ one }) => ({
  project: one(projects, {
    fields: [feedbacks.projectId],
    references: [projects.id],
  }),
}));

// relation will be many to one. Many feedbacks can belong to one project.
export const projectsRelations = relations(projects, ({ many }) => ({
  feedbacks: many(feedbacks),
}));
