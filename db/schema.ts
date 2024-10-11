import { integer, serial, pgTable, varchar } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  description: varchar("description", { length: 255 }),
  url: varchar("url", { length: 255 }),
  userId: varchar("user_id", { length: 255 }),
});
