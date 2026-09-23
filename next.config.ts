import type { NextConfig } from "next";

const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
const repo = process.env.GITHUB_REPOSITORY || "";
const repoName =
  isGithubActions && repo
    ? `/${repo.split("/")[1]}`
    : process.env.NODE_ENV === "production"
    ? "/insure_tech"
    : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: repoName || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName || "",
  },
};

export default nextConfig;
