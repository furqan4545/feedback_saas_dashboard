import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";
// dotenv.config();
// Load environment variables
dotenv.config({ path: ".env.local" });

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set in the environment variables");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle", // Add this line
  migrations: {
    prefix: "supabase",
  },
  dbCredentials: {
    url: databaseUrl || "",
  },
});
