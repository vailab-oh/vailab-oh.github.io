import type { Metadata } from "next";
import { PageFrame } from "@/components/SiteShell";
import { allProjects, type Project } from "@/data/projects";
import { publications } from "@/data/publications";

export const metadata: Metadata = { title: "Projects", description: "Selected academic and research and development projects from VAI Lab.", alternates: { canonical: "/projects/" } };

function ProjectCard({ item }: { item: Project }) {
  const relatedPublications = (item.related_publication_ids ?? []).flatMap((id) => publications.filter((entry) => entry.id === id && entry.url));
  return <article className="project-card">
    {item.role && <div className="project-card-top"><span className="project-role">{item.role}</span></div>}
    <h2>{item.title}</h2>
    <dl className="project-facts">
      {item.period && <div><dt>Period</dt><dd>{item.period}</dd></div>}
      {item.supporting_organization && <div><dt>Supporting organization</dt><dd>{item.supporting_organization}</dd></div>}
      {item.collaboration && <div><dt>International collaboration</dt><dd>{item.collaboration}</dd></div>}
      {item.program && <div><dt>Program</dt><dd>{item.program}</dd></div>}
    </dl>
    <p className="project-area">{item.research_area}</p>
    <div className="project-content">{item.content.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
    {relatedPublications.length > 0 && <div className="project-publications">{relatedPublications.map((publication) => <a className="project-publication-link" href={publication.url!} target="_blank" rel="noreferrer" key={publication.id}>Related publication: {publication.title} <span aria-hidden="true">↗</span></a>)}</div>}
  </article>;
}

export default function ProjectsPage() { const academic = allProjects.filter((item) => item.group === "academic"); const add = allProjects.filter((item) => item.group === "add"); return <PageFrame><header className="section-shell projects-page-intro"><div><p className="eyebrow">Projects</p><h1>Research in practice.</h1></div><p>Selected research and development projects spanning autonomous systems, UAV technologies, artificial intelligence, and intelligent mobility.</p></header><section className="section-shell project-section"><div className="project-section-heading"><p className="eyebrow">Academic research projects</p><h2>Academic research projects</h2></div><div className="project-list">{academic.map((item) => <ProjectCard item={item} key={item.title} />)}</div></section><section className="section-shell project-section project-section-add"><div className="project-section-heading"><p className="eyebrow">Agency for Defense Development</p><h2>Defense R&amp;D</h2></div><div className="project-list">{add.map((item) => <ProjectCard item={item} key={item.title} />)}</div></section></PageFrame>; }
