import type { NextConfig } from "next";

const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
const repo = process.env.GITHUB_REPOSITORY || "";
const repoName = isGithubActions && repo ? `/${repo.split("/")[1]}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: repoName || undefined,
};

export default nextConfig;
