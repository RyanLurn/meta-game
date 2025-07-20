import { serverEnv } from "@/lib/env/server";
import { drizzle } from "drizzle-orm/libsql";

const db = drizzle({
  connection: {
    url: serverEnv.TURSO_DATABASE_URL,
    authToken: serverEnv.TURSO_AUTH_TOKEN
  }
});

export { db };
