import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export type NewsItem = { title: string; date: string; category: string; summary: string; featured: boolean; thumbnail?: string; paper_url?: string; code_url?: string; external_url?: string; content: string; slug: string; url: string; displayDate: string };
const newsDirectory = path.join(process.cwd(), "_news");

function value(raw: string): string | boolean { const trimmed = raw.trim(); if (trimmed === "true") return true; if (trimmed === "false") return false; return trimmed.replace(/^(["'])(.*)\1$/, "$2"); }
function parseNews(source: string, filename: string): NewsItem {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/); if (!match) throw new Error(`News entry ${filename} needs YAML front matter.`);
  const fields: Record<string, string | boolean> = {};
  for (const line of match[1].split(/\r?\n/)) { const separator = line.indexOf(":"); if (separator > 0) fields[line.slice(0, separator).trim()] = value(line.slice(separator + 1)); }
  const slug = filename.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, ""); const date = String(fields.date ?? "");
  if (!fields.title || !date || !fields.category || !fields.summary) throw new Error(`News entry ${filename} is missing a required field.`);
  return { title: String(fields.title), date, category: String(fields.category), summary: String(fields.summary), featured: fields.featured === true, thumbnail: fields.thumbnail ? String(fields.thumbnail) : undefined, paper_url: fields.paper_url ? String(fields.paper_url) : undefined, code_url: fields.code_url ? String(fields.code_url) : undefined, external_url: fields.external_url ? String(fields.external_url) : undefined, content: match[2].trim(), slug, url: `/news/${slug}`, displayDate: new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`)) };
}
export async function getAllNews(): Promise<NewsItem[]> { const files = (await readdir(newsDirectory)).filter((file) => file.endsWith(".md")); const entries = await Promise.all(files.map(async (file) => parseNews(await readFile(path.join(newsDirectory, file), "utf8"), file))); return entries.sort((a, b) => b.date.localeCompare(a.date)); }
export const allNews = await getAllNews();
export const featuredNews = allNews.filter((item) => item.featured);
