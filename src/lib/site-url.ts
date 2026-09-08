import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";

// og:image and twitter:image must be absolute URLs — relative paths are dropped
// by several crawlers. The deploy domain isn't known at build time, so resolve
// the origin per request on the server and from the location on the client.
export const getSiteOrigin = createIsomorphicFn()
  .server(() => new URL(getRequestUrl()).origin)
  .client(() => window.location.origin);
