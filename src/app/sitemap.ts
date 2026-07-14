import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ahmed-portfolio.vercel.app";
  return [{ url: `${base}/`, lastModified: new Date() }];
}
