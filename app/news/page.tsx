import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/SiteShell";
import { allNews } from "@/data/news";

export const metadata: Metadata = { title: "News", description: "Updates from the Vision & Autonomous Intelligence Lab.", alternates: { canonical: "/news/" } };
export default function NewsPage() { const byYear = allNews.reduce<Record<string, typeof allNews>>((groups, item) => { (groups[item.date.slice(0, 4)] ??= []).push(item); return groups; }, {}); return <PageFrame><header className="section-shell news-page-intro"><div><p className="eyebrow">News</p><h1>Lab updates.</h1></div><p>Research milestones, publications, software releases, and other updates from VAI Lab.</p></header><section className="section-shell news-list-section">{Object.entries(byYear).map(([year, items]) => <div className="news-year" key={year}><h2>{year}</h2><div className="news-list">{items.map((item) => <article className="news-list-item" key={item.slug}><div className="news-meta"><time dateTime={item.date}>{item.displayDate}</time><span>{item.category}</span></div><div><h3><Link href={item.url}>{item.title}</Link></h3><p>{item.summary}</p><Link className="news-read-link" href={item.url}>Read more <span aria-hidden="true">→</span></Link></div></article>)}</div></div>)}</section></PageFrame>; }
