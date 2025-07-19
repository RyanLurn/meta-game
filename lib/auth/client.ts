import clientEnv from "@/lib/env/client";
import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: clientEnv.NEXT_PUBLIC_BETTER_AUTH_URL
});

export default authClient;
