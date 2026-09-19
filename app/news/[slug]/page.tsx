import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/SiteShell";
import { allNews } from "@/data/news";

export function generateStaticParams() { return allNews.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { return params.then(({ slug }) => { const item = allNews.find((entry) => entry.slug === slug); return item ? { title: item.title, description: item.summary, alternates: { canonical: item.url } } : {}; }); }
export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = allNews.find((entry) => entry.slug === slug); if (!item) notFound(); return <PageFrame><article className="section-shell news-detail"><Link className="back-link" href="/news">← All news</Link><header><div className="news-meta"><time dateTime={item.date}>{item.displayDate}</time><span>{item.category}</span></div><h1>{item.title}</h1><p>{item.summary}</p></header>{item.thumbnail && <figure className="news-detail-image"><Image src={item.thumbnail} alt="" width={1448} height={814} unoptimized /></figure>}<div className="news-content">{item.content.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>{(item.paper_url || item.code_url || item.external_url) && <div className="news-resources">{item.paper_url && <a className="button button-light" href={item.paper_url} target="_blank" rel="noreferrer">Paper <span>↗</span></a>}{item.code_url && <a className="button button-light" href={item.code_url} target="_blank" rel="noreferrer">Code <span>↗</span></a>}{item.external_url && <a className="button button-light" href={item.external_url} target="_blank" rel="noreferrer">External link <span>↗</span></a>}</div>}</article></PageFrame>; }
