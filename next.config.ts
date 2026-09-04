import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // The vailab-oh.github.io repository is served at the domain root. Keep
  // the Sites/local build unchanged while exporting a static Pages build.
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: isGitHubPages,
  // db/ and worker/ contain Cloudflare-only imports used by the Sites build.
  // The public Pages export is fully static and does not load those modules.
  typescript: { ignoreBuildErrors: isGitHubPages },
};

export default nextConfig;
