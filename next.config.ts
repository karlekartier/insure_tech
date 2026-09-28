import type { NextConfig } from "next";

const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
const isVercel = Boolean(process.env.VERCEL);
const repo = process.env.GITHUB_REPOSITORY || "";

// Only use a subpath when deploying specifically to GitHub Pages
const repoName =
  !isVercel && isGithubActions && repo ? `/${repo.split("/")[1]}` : "";

const nextConfig: NextConfig = {
  // Static export is only required for GitHub Pages
  // Vercel supports full Next.js dynamic routes & serverless functions natively
  ...(isGithubActions && !isVercel ? { output: "export" } : {}),
  images: {
    unoptimized: true,
  },
  basePath: repoName || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName || "",
  },
};

export default nextConfig;

