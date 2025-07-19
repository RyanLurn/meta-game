import { serverEnv } from "@/lib/env/server";
import { drizzle } from "drizzle-orm/libsql";

const db = drizzle(serverEnv.DB_FILE_NAME);

export { db };
