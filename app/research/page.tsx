import type { Metadata } from "next";
import Image from "next/image";
import { PageFrame } from "@/components/SiteShell";
import { researchAreas } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description: "Research themes and programs of the Vision & Autonomous Intelligence Lab.",
  alternates: { canonical: "/research/" },
};

export default function ResearchPage() {
  return <PageFrame>
    <section className="section-shell research-page-intro">
      <div><p className="eyebrow">Research</p><h1>Connected work,<br />clear directions.</h1></div>
      <p>Four complementary areas connect visual understanding, constrained planning, dependable autonomy, and medical image intelligence.</p>
      <nav className="research-area-index" aria-label="Research areas">{researchAreas.map((area) => <a href={`#${area.id}`} key={area.id}><span>{area.number}</span>{area.title}</a>)}</nav>
    </section>
    <section className="section-shell research-detail-list">{researchAreas.map((area) => <article id={area.id} key={area.id} className="research-detail"><div className="detail-number">{area.number}</div><div className="detail-copy"><p className="detail-kicker">{area.kicker}</p><h2>{area.title}</h2><p>{area.summary}</p></div><ul>{area.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul><figure className="research-visual"><Image src={area.image} alt={area.alt} width={1448} height={1086} sizes="(max-width: 700px) calc(100vw - 52px), (max-width: 980px) calc(100vw - 96px), 390px" unoptimized /></figure></article>)}</section>
    <section className="section-shell process-section"><div><p className="eyebrow">How we work</p><h2>Research through<br />the full loop.</h2></div><ol>
      <li><span>01</span><div><strong>Frame</strong><p>Define a real operational constraint, not just a benchmark target.</p></div></li>
      <li><span>02</span><div><strong>Model</strong><p>Build interpretable perception and planning methods around that constraint.</p></div></li>
      <li><span>03</span><div><strong>Validate</strong><p>Evaluate failure modes, efficiency, and robustness across environments.</p></div></li>
      <li><span>04</span><div><strong>Release</strong><p>Package papers, code, configurations, and citation guidance together.</p></div></li>
    </ol></section>
  </PageFrame>;
}
