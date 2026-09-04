import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://vailab-oh.github.io";
const lastModified = new Date("2026-09-04");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/research/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/people/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/publications/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/teaching/`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
