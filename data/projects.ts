import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export type Project = { title: string; group: "academic" | "add"; start_year: number; order?: number; period?: string; project_period?: string; involvement?: string; supporting_organization?: string; program?: string; program_authority?: string; project_management?: string; collaboration?: string; performing_organizations?: string; research_area: string; role?: string; related_publication_id?: string; content: string };
const projectDirectory = path.join(process.cwd(), "_projects");

function parseProject(source: string, filename: string): Project {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/); if (!match) throw new Error(`Project ${filename} needs YAML front matter.`);
  const fields: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) { const separator = line.indexOf(":"); if (separator > 0) fields[line.slice(0, separator).trim()] = line.slice(separator + 1).trim().replace(/^(["'])(.*)\1$/, "$2"); }
  if (!fields.title || !fields.group || !fields.start_year || !fields.research_area) throw new Error(`Project ${filename} is missing a required field.`);
  return { title: fields.title, group: fields.group as Project["group"], start_year: Number(fields.start_year), order: fields.order ? Number(fields.order) : undefined, period: fields.period, project_period: fields.project_period, involvement: fields.involvement, supporting_organization: fields.supporting_organization, program: fields.program, program_authority: fields.program_authority, project_management: fields.project_management, collaboration: fields.collaboration, performing_organizations: fields.performing_organizations, research_area: fields.research_area, role: fields.role, related_publication_id: fields.related_publication_id, content: match[2].trim() };
}

export async function getAllProjects(): Promise<Project[]> { const files = (await readdir(projectDirectory)).filter((file) => file.endsWith(".md")); const projects = await Promise.all(files.map(async (file) => parseProject(await readFile(path.join(projectDirectory, file), "utf8"), file))); return projects.sort((a, b) => b.start_year - a.start_year || (a.order ?? 999) - (b.order ?? 999) || a.title.localeCompare(b.title)); }
export const allProjects = await getAllProjects();
