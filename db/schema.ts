import { relations } from "drizzle-orm";
import {
  integer,
  serial,
  pgTable,
  varchar,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

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
  rating: integer("rating"),
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

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 255 }),
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }),
  stripeSubscriptionId: varchar("stripe_subscription_id", { length: 255 }),
  subscribed: boolean("subscribed").notNull().default(false),
});

// new stuff here...

export const feedbackDetail = pgTable("feedback_detail", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id").notNull(),
  faceRating: integer("face_rating"),
  feedbackMessage: text("feedback_message"),
  feedbackSuggestion: text("feedback_suggestion"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const feedbackDetailRelations = relations(feedbackDetail, ({ one }) => ({
  project: one(projects, {
    fields: [feedbackDetail.projectId],
    references: [projects.id],
  }),
}));

export const projectsRelationWithDetailFB = relations(projects, ({ many }) => ({
  feedbackDetail: many(feedbackDetail),
}));

/// Feedback only facial expression

export const feedbackOnlyFacialExpression = pgTable("feedback_only_face", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id").notNull(),
  faceRating: integer("face_rating"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const feedbackOnlyFacialExpressionRelations = relations(
  feedbackOnlyFacialExpression,
  ({ one }) => ({
    project: one(projects, {
      fields: [feedbackOnlyFacialExpression.projectId],
      references: [projects.id],
    }),
  })
);

export const projectsRelationWithOnlyFacialExpression = relations(
  projects,
  ({ many }) => ({
    feedbackOnlyFacialExpression: many(feedbackOnlyFacialExpression),
  })
);
