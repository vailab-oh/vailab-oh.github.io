import Link from "next/link";

const navItems = [
  ["Research", "/research"],
  ["People", "/people"],
  ["Teaching", "/teaching"],
  ["Publications", "/publications"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="VAI Lab home">
          <span className="brand-mark" aria-hidden="true">V</span>
          <span><strong>VAI Lab</strong><small>Vision · Autonomy · Intelligence</small></span>
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <a className="header-cta" href="https://github.com/taegeun-oh/Vision-AI" target="_blank" rel="noreferrer">
          Research code <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div><p className="eyebrow">Vision & Autonomous Intelligence Lab · 오태근 교수 연구실</p><h2>From visual evidence to reliable intelligent action.</h2></div>
        <div className="footer-contact">
          <span>Dong Seoul University · 동서울대학교</span><span>Seongnam, Gyeonggi-do, Korea</span><a href="mailto:tgoh@du.ac.kr">tgoh@du.ac.kr</a>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} VAI Lab</span><span>Autonomy · Planning · Perception · Medical Image AI</span></div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}
