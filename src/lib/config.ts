/**
 * The canonical site URL, driven by the NEXT_PUBLIC_SITE_URL environment variable.
 *
 * - Set it in .env.local for local development
 * - Set it in Vercel project settings → Environment Variables for production
 *
 * Falls back to localhost:3000 so the dev server always works without config.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";
