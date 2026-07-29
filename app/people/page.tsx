import type { Metadata } from "next";
import { ProfileLinks } from "@/components/ProfileLinks";
import { RecruitmentCallout } from "@/components/RecruitmentCallout";
import { PageFrame } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "People · 오태근 교수",
  description: "Taegeun Oh (오태근), Dong Seoul University faculty profile and members of the Vision & Autonomous Intelligence Lab.",
};

export default function PeoplePage() {
  const undergraduateResearchers = [
    { name: "Minkwon Jeon", initials: "MJ", topic: "UAV Situation Perception" },
    { name: "Geunhyung Lee", initials: "GL", topic: "UAV Collision Avoidance" },
    { name: "Daein Lee", initials: "DL", topic: "Research focus to be confirmed" },
  ];

  return <PageFrame>
    <section className="section-shell pi-profile people-profile-first">
      <div className="portrait-placeholder" aria-label="Taegeun Oh monogram portrait"><span>TO</span><small>Principal Investigator</small></div>
      <div className="profile-copy"><p className="eyebrow">Principal investigator · 지도교수</p><h2>Taegeun Oh <span lang="ko">(오태근)</span>, Ph.D.</h2><p className="profile-role">Assistant Professor · Department of Electronic Engineering<br />Dong Seoul University · 동서울대학교 전자공학과</p><p>Taegeun Oh works across autonomous mission software, intelligent path planning, computer vision, and medical image intelligence. Before joining Dong Seoul University in 2022, he spent eight years as a senior researcher at the Agency for Defense Development, developing avionics and autonomy for unmanned aerial systems.</p><ProfileLinks /></div>
      <dl className="profile-facts"><div><dt>2022–present</dt><dd>Assistant Professor, Dong Seoul University<ul className="career-subitems"><li>Department Chair, Department of Electronic Engineering (since 2025)</li></ul></dd></div><div><dt>2014–2022</dt><dd>Senior Researcher, Agency for Defense Development</dd></div><div><dt>2014</dt><dd>Ph.D., Electrical & Electronic Engineering, Yonsei University</dd></div></dl>
    </section>
    <section className="section-shell member-section">
      <div className="section-heading split-heading"><div><p className="eyebrow">Current lab members</p><h2>Undergraduate<br />Researchers</h2></div><p>Our undergraduate researchers work on perception and planning problems for dependable autonomous UAV systems.</p></div>
      <div className="member-grid">{undergraduateResearchers.map((member, index) => <article className="member-card" key={member.name}><div className="member-card-top"><span>{String(index + 1).padStart(2, "0")}</span><span className="member-monogram" aria-hidden="true">{member.initials}</span></div><div><p>Undergraduate Researcher</p><h3>{member.name}</h3><dl><dt>Research focus</dt><dd>{member.topic}</dd></dl></div></article>)}</div>
    </section>
    <RecruitmentCallout />
    <section className="section-shell alumni-section">
      <div className="section-heading split-heading"><div><p className="eyebrow">Former lab members</p><h2>Alumni</h2></div><p>Former researchers continuing their academic and professional journeys.</p></div>
      <article className="alumni-card"><span className="member-monogram" aria-hidden="true">SJ</span><div><p>Alumnus</p><h3>Sungjun Jang</h3></div><dl><div><dt>Research focus</dt><dd>UAV Vision Perception</dd></div><div><dt>Current position</dt><dd>M.S. Student, Kyung Hee University</dd></div></dl></article>
    </section>
  </PageFrame>;
}
