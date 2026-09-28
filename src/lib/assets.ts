/**
 * Asset path helper for Next.js.
 * Handles subpath (e.g. /insure_tech) when deployed on GitHub Pages,
 * and root (/) in local development and on platforms like Vercel.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getAssetPath(path: string): string {
  if (!path) return "";
  // Do not modify external or data URLs
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // If BASE_PATH is set and path already begins with it, avoid duplicate prefix
  if (BASE_PATH && cleanPath.startsWith(BASE_PATH)) {
    return cleanPath;
  }

  return `${BASE_PATH}${cleanPath}`;
}
