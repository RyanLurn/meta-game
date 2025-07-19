import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4";

const serverEnv = createEnv({
  server: {
    DB_FILE_NAME: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(1)
  },
  experimental__runtimeEnv: process.env
});

export { serverEnv };
