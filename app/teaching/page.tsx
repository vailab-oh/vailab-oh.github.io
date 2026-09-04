import type { Metadata } from "next";
import { PageFrame } from "@/components/SiteShell";
import { teachingAreas } from "@/data/teaching";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Courses taught by Taegeun Oh at Dong Seoul University.",
  alternates: { canonical: "/teaching/" },
};

export default function TeachingPage() {
  return <PageFrame>
    <section className="section-shell teaching-page teaching-first">
      <header className="teaching-heading">
        <div>
          <p className="eyebrow">Dong Seoul University</p>
          <h1>Teaching</h1>
        </div>
        <p>Courses spanning computing foundations, intelligent systems, and project-based engineering practice.</p>
      </header>
      <div className="teaching-areas">
        {teachingAreas.map((area) => <article className="teaching-area" key={area.number}>
          <div className="teaching-area-heading">
            <span>{area.number}</span>
            <h2>{area.title}</h2>
          </div>
          <p>{area.summary}</p>
          <ul>{area.courses.map((course) => <li key={course}>{course}</li>)}</ul>
        </article>)}
      </div>
    </section>
  </PageFrame>;
}
