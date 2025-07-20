import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4";

const serverEnv = createEnv({
  server: {
    TURSO_DATABASE_URL: z.string().min(1),
    TURSO_AUTH_TOKEN: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(1)
  },
  experimental__runtimeEnv: process.env
});

export { serverEnv };
