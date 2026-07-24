import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "brand-mark compact" : "brand-mark"} aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <rect x="10" y="10" width="38" height="46" rx="8" fill="none" stroke="currentColor" strokeWidth="4" />
        <rect x="20" y="5" width="20" height="11" rx="4" fill="currentColor" />
        <path d="m18 25 4 4 7-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 25h9M18 39h5M28 36v9M35 32v13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M43 31h9l8 8-12 12-8-8v-9l3-3Z" fill="var(--brand-accent)" stroke="var(--brand-accent)" strokeWidth="2" />
        <circle cx="48" cy="36" r="2" fill="var(--surface)" />
      </svg>
    </div>
  );
}

export function Logo({ href = "/", compact = false }: { href?: string; compact?: boolean }) {
  return (
    <Link className={compact ? "logo compact" : "logo"} href={href} aria-label="VendeLeve - página inicial">
      <BrandMark compact={compact} />
      <span className="logo-copy">
        <span className="logo-name"><strong>Vende</strong><em>Leve</em></span>
        {!compact && <span className="logo-tagline">Gestão simples para pequenas lojas</span>}
      </span>
    </Link>
  );
}
