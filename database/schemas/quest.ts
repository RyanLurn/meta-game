import { timestamps } from "@/database/helpers/column";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const quest = sqliteTable("quest", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull().default("pending"),
  deadline: integer("deadline", { mode: "timestamp" }).notNull(),
  reward: integer("reward", { mode: "number" }).notNull(),
  importance: integer("importance", { mode: "number" }).notNull(),
  urgency: integer("urgency", { mode: "number" }).notNull(),
  ...timestamps
});

export { quest };
