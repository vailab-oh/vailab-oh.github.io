import type { Metadata } from "next";
import { PublicationExplorer } from "@/components/PublicationExplorer";
import { PageFrame } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Publications",
  description: "Journal, conference, domestic, and book publications from the VAI Lab.",
  alternates: { canonical: "/publications/" },
};

export default function PublicationsPage() {
  return <PageFrame>
    <header className="section-shell publication-page-intro">
      <div><p className="eyebrow">Publications</p><h1>Published research.</h1></div>
      <p>Peer-reviewed journal articles, conference papers, domestic publications, and books from the lab&apos;s research record.</p>
    </header>
    <section className="section-shell publication-section publication-first"><PublicationExplorer /></section>
  </PageFrame>;
}
