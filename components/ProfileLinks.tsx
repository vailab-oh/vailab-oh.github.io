const profiles = [
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/taegeun-oh-802b01134" },
  { label: "Google Scholar", icon: "GS", href: "https://scholar.google.com/citations?user=Cu0fIlUAAAAJ" },
] as const;

export function ProfileLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`profile-link-list${compact ? " profile-link-list-compact" : ""}`} aria-label="Taegeun Oh profiles">
      {profiles.map((profile) => {
        const external = profile.href.startsWith("http");
        return (
          <a href={profile.href} key={profile.label} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
            <span className="profile-link-icon" aria-hidden="true">{profile.icon}</span>
            <span>{profile.label}</span>
          </a>
        );
      })}
    </div>
  );
}
