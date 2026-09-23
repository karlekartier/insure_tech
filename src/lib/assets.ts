/**
 * Asset path helper for Next.js static export deployed on GitHub Pages.
 * Handles subpath (e.g. /insure_tech) in production and root (/) in local development.
 */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/insure_tech" : "");

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
