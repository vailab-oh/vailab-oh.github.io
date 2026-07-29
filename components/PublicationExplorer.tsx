"use client";

import { Fragment, useMemo, useState } from "react";
import { publicationTypeLabels, publishedPublications, type PublicationIndex, type PublicationType } from "@/data/publications";

type TypeFilter = "all" | PublicationType;
type IndexFilter = "all" | "indexed" | "unindexed" | PublicationIndex;

const typeFilters: { value: TypeFilter; label: string }[] = [
  { value: "all", label: "All work" },
  { value: "journal", label: "International journals" },
  { value: "conference", label: "Conferences" },
  { value: "domestic", label: "Domestic journals" },
  { value: "book", label: "Books" },
];
const indexFilters: { value: IndexFilter; label: string }[] = [
  { value: "all", label: "All publications" },
  { value: "indexed", label: "Indexed" },
  { value: "SCIE", label: "SCIE" },
  { value: "Scopus", label: "Scopus" },
  { value: "KCI", label: "KCI" },
  { value: "unindexed", label: "Unindexed" },
];
const indexCounts = Object.fromEntries(
  indexFilters.map(({ value }) => [
    value,
    value === "all"
      ? publishedPublications.length
      : value === "indexed"
        ? publishedPublications.filter((item) => item.indexes?.length).length
        : value === "unindexed"
          ? publishedPublications.filter((item) => !item.indexes?.length).length
          : publishedPublications.filter((item) => item.indexes?.includes(value)).length,
  ]),
) as Record<IndexFilter, number>;

const highlightedAuthors = new Set(["Taegeun Oh", "Sungjun Jang", "Minkwon Jeon"]);

function renderAuthors(authors: string, correspondingAuthors: string[] = []) {
  const recognizedAuthors = Array.from(new Set([...highlightedAuthors, ...correspondingAuthors]))
    .sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${recognizedAuthors.map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const corresponding = new Set(correspondingAuthors);

  return authors.split(pattern).map((part, index) => {
    if (!recognizedAuthors.includes(part)) return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
    const content = (
      <>
        {part}
        {corresponding.has(part) && <sup className="corresponding-mark" title="Corresponding author" aria-label="corresponding author">*</sup>}
      </>
    );
    return highlightedAuthors.has(part)
      ? <strong className="highlighted-author" key={`${part}-${index}`}>{content}</strong>
      : <span key={`${part}-${index}`}>{content}</span>;
  });
}

export function PublicationExplorer() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [indexFilter, setIndexFilter] = useState<IndexFilter>("all");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return publishedPublications.filter((item) => {
      const matchesType = typeFilter === "all" || item.type === typeFilter;
      const matchesIndex = indexFilter === "all"
        ? true
        : indexFilter === "indexed"
          ? Boolean(item.indexes?.length)
          : indexFilter === "unindexed"
            ? !item.indexes?.length
            : Boolean(item.indexes?.includes(indexFilter));
      const haystack = `${item.title} ${item.authors} ${item.venue} ${item.year} ${item.indexes?.join(" ") ?? ""}`.toLowerCase();
      return matchesType && matchesIndex && (!normalized || haystack.includes(normalized));
    });
  }, [typeFilter, indexFilter, query]);

  return (
    <div className="publication-explorer">
      <div className="publication-tools">
        <div className="publication-filter-stack">
          <div className="filter-group">
            <span className="filter-label">Publication type</span>
            <div className="filter-row" role="group" aria-label="Filter by publication type">
              {typeFilters.map((item) => (
                <button key={item.value} className={typeFilter === item.value ? "active" : ""} type="button" onClick={() => setTypeFilter(item.value)}>{item.label}</button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-label">Indexing</span>
            <div className="filter-row index-filter-row" role="group" aria-label="Filter by publication index">
              {indexFilters.map((item) => (
                <button key={item.value} className={indexFilter === item.value ? "active" : ""} type="button" onClick={() => setIndexFilter(item.value)}>
                  {item.label}<span className="filter-count">{indexCounts[item.value]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <label className="search-field"><span className="sr-only">Search publications</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title, author, venue, or year" />
          <span aria-hidden="true">⌕</span>
        </label>
      </div>
      <div className="publication-summary"><p className="result-count" aria-live="polite">{visible.length} results</p><p className="author-legend"><strong>Bold</strong> VAI Lab author <span>*</span> Corresponding author</p></div>
      <div className="publication-list">
        {visible.map((item) => {
          const href = item.status === "Published" ? item.url : undefined;
          const showPublicationDetails = item.status === "Published";
          return (
            <article className={`publication-item${href ? "" : " publication-item-no-link"}`} key={item.id}>
              <div className="publication-year">{item.year}</div>
              <div className="publication-copy">
                <div className="publication-meta"><span>{publicationTypeLabels[item.type]}</span><span className={`status status-${item.status.toLowerCase().replace(" ", "-")}`}>{item.status}</span>{showPublicationDetails && item.indexes?.map((index) => <span className={`index-badge index-${index.toLowerCase()}`} key={index}>{index}</span>)}</div>
                <h2>{item.title}</h2><p className="authors">{renderAuthors(item.authors, item.correspondingAuthors)}</p>{showPublicationDetails && <p className="venue">{item.venue}{item.details ? ` · ${item.details}` : ""}</p>}
              </div>
              {href && <a className="publication-link" href={href} target="_blank" rel="noreferrer" aria-label={`Open the official publication page for ${item.title}`}>↗</a>}
            </article>
          );
        })}
      </div>
      {visible.length === 0 && <div className="empty-state"><strong>No matching publications.</strong><span>Try another keyword or category.</span></div>}
    </div>
  );
}
