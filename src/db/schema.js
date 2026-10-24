import {
  pgTable,
  serial,
  varchar,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),

  title: varchar("title", {
    length: 255,
  }).notNull(),

  description: text("description"),

  completed: boolean("completed").default(false).notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});