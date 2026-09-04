import Link from "next/link";
import Image from "next/image";
import { ProfileLinks } from "@/components/ProfileLinks";
import { RecruitmentCallout } from "@/components/RecruitmentCallout";
import { PageFrame } from "@/components/SiteShell";
import {
  latestPublishedScieJournals,
  publishedPublicationCounts,
} from "@/data/publications";
import { researchAreas } from "@/data/research";

export default function Home() {
  return (
    <PageFrame>
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse-dot" /> Dong Seoul University · Seongnam</p>
          <h1>Intelligence<br />in <em>motion.</em></h1>
          <p className="hero-lead">We develop vision and autonomy for systems that must understand complex scenes, choose reliable paths, and act safely in the real world.</p>
          <p className="hero-identity">Led by Taegeun Oh (오태근), Dong Seoul University (동서울대학교).</p>
          <ProfileLinks compact />
          <div className="hero-actions">
            <Link className="button button-primary" href="/research">Explore our research <span>↗</span></Link>
            <Link className="text-link" href="/publications">View publications <span>→</span></Link>
          </div>
        </div>
        <div className="hero-cycle" aria-label="Closed-loop autonomy: perceive, plan, and act">
          <div className="cycle-heading"><span>Research framework</span><strong>Closed-loop autonomy</strong></div>
          <ol>
            <li><span>01</span><div><strong>Perceive</strong><p>Turn visual scenes into structured understanding.</p></div></li>
            <li><span>02</span><div><strong>Plan</strong><p>Choose reliable paths under real constraints.</p></div></li>
            <li><span>03</span><div><strong>Act</strong><p>Execute missions safely and adapt from feedback.</p></div></li>
          </ol>
          <div className="cycle-feedback"><span aria-hidden="true">↻</span> Feedback informs the next decision</div>
        </div>
      </section>

      <section className="metrics-band"><div className="section-shell metrics-grid">
        <div><strong>{publishedPublicationCounts.journals}</strong><span>International journal papers</span></div>
        <div><strong>{publishedPublicationCounts.conferences}</strong><span>International conference papers</span></div>
      </div></section>

      <section className="section-shell content-section">
        <div className="section-heading split-heading"><div><p className="eyebrow">Research areas</p><h2>Four directions.<br />One research agenda.</h2></div><p>We connect reliable autonomy, constrained planning, multi-task perception, and medical image intelligence within one coherent research program.</p></div>
        <div className="research-grid">
          {researchAreas.map((area) => <Link className="research-card" href={`/research#${area.id}`} key={area.id}>
            <figure className="research-card-media"><Image src={area.image} alt="" width={1448} height={1086} sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 980px) 50vw, 590px" unoptimized /></figure>
            <div className="research-card-body"><div className="research-card-meta"><span>{area.number}</span><span>{area.kicker}</span></div><h3>{area.title}</h3><p>{area.cardSummary}</p><span className="card-arrow" aria-hidden="true">↗</span></div>
          </Link>)}
        </div>
      </section>

      <section className="section-shell content-section publication-preview">
        <div className="section-heading row-heading"><div><p className="eyebrow">Published · SCIE journals</p><h2>Latest published work</h2></div><Link className="text-link" href="/publications">All publications <span>→</span></Link></div>
        <div className="featured-publications">{latestPublishedScieJournals.map((item) => <article key={item.id}><div className="featured-meta"><span>{item.year}</span><span>SCIE journal</span></div><h3>{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a> : item.title}</h3><p>{item.venue}{item.dbUrl && <> · <a className="publication-resource-link" href={item.dbUrl} target="_blank" rel="noreferrer" aria-label={`Open the database for ${item.title}`}>DB</a></>}{item.codeUrl && <> · <a className="publication-resource-link" href={item.codeUrl} target="_blank" rel="noreferrer" aria-label={`Open the source code for ${item.title}`}>Code</a></>}</p></article>)}</div>
      </section>

      <RecruitmentCallout />
    </PageFrame>
  );
}
