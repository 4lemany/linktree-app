import React, { useState } from "react";
import "./styles.css";

// SVG Icons crafted cleanly without heavy runtime packages
const Icons = {
  Sparkles: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
    </svg>
  ),
  User: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  SearchJob: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
      <path d="M11 8v6"/><path d="M8 11h6"/>
    </svg>
  ),
  Cpu: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="16" x="4" y="4" rx="2"/>
      <rect width="6" height="6" x="9" y="9" rx="1"/>
      <path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/>
      <path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
    </svg>
  ),
  Ship: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/>
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/>
      <path d="M12 10V2"/>
    </svg>
  ),
  ArrowUpRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7"/>
      <path d="M7 7h10v10"/>
    </svg>
  ),
  Check: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Share: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
    </svg>
  ),
  Github: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Globe: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  ),
};

interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  isFeatured?: boolean;
  pillText?: string;
  iconBg: string;
  iconColor: string;
  icon: () => JSX.Element;
}

const FEATURE_LINKS: LinkItem[] = [
  {
    id: "who-i-am",
    title: "Who I am — Portfolio & Trayectoria",
    subtitle: "Conoce mi perfil completo, proyectos 3D y experiencia interactiva",
    url: "https://adrianalemanytech.vercel.app/",
    isFeatured: true,
    pillText: "Portfolio Principal",
    iconBg: "linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(99, 102, 241, 0.35))",
    iconColor: "#c084fc",
    icon: Icons.User,
  },
  {
    id: "alina-job-search",
    title: "Alina — Job Search AI Agent",
    subtitle: "Plataforma inteligente y autónoma de búsqueda y análisis de ofertas",
    url: "https://alina-brown.vercel.app/",
    iconBg: "rgba(56, 189, 248, 0.15)",
    iconColor: "#38bdf8",
    icon: Icons.SearchJob,
  },
  {
    id: "tecnocracia",
    title: "Tecnocracia",
    subtitle: "Plataforma analítica interactiva y observatorio tecnológico en Streamlit",
    url: "https://tecnocracia.streamlit.app/",
    iconBg: "rgba(244, 63, 94, 0.15)",
    iconColor: "#fb7185",
    icon: Icons.Cpu,
  },
  {
    id: "balearia-predictor",
    title: "Balearia — Predictor de Consumo",
    subtitle: "Modelo predictivo de optimización de combustible e impacto marítimo",
    url: "https://baleariatravels.vercel.app/",
    iconBg: "rgba(16, 185, 129, 0.15)",
    iconColor: "#34d399",
    icon: Icons.Ship,
  },
];

export default function Linktree() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <>
      {/* Background Animated Aurora */}
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>
      <div className="grid-overlay"></div>

      {/* Main Content App */}
      <main className="linktree-app-container">
        {/* Top Share Bar */}
        <header className="top-action-bar">
          <button 
            type="button" 
            className={`share-pill-btn ${copied ? "copied" : ""}`} 
            onClick={handleShare}
            aria-label="Compartir perfil"
          >
            {copied ? (
              <>
                <Icons.Check />
                <span>¡Copiado al portapapeles!</span>
              </>
            ) : (
              <>
                <Icons.Share />
                <span>Compartir perfil</span>
              </>
            )}
          </button>
        </header>

        {/* Profile Card / Avatar with Halo */}
        <section className="profile-section">
          <div className="avatar-wrapper">
            <div className="avatar-glow"></div>
            <div className="avatar-border-ring"></div>
            <img 
              src="/profile.jpg" 
              alt="Adrián Alemany Martínez" 
              className="avatar-image"
              onError={(e) => {
                // Fallback to high-res stylized placeholder if profile.jpg fails
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
              }}
            />
            <div className="verified-badge" title="Ingeniero Verificado">
              <Icons.Sparkles />
            </div>
          </div>

          <h1 className="profile-name">Adrián Alemany Martínez</h1>
          <div className="profile-role-tag">
            <Icons.Sparkles />
            <span>AI &amp; Data Engineer</span>
          </div>
          <p className="profile-bio">
            Transformando datos complejos e inteligencia artificial generativa en soluciones de alto impacto y productos escalables.
          </p>
        </section>

        {/* Dynamic Feature Cards Stack */}
        <section className="cards-stack" aria-label="Enlaces destacados">
          {FEATURE_LINKS.map((link, idx) => {
            const IconComponent = link.icon;
            const isHero = link.isFeatured;

            return (
              <a
                key={link.id}
                href={link.url}
                target={isHero ? "_self" : "_blank"}
                rel={isHero ? undefined : "noopener noreferrer"}
                className={`feature-card ${isHero ? "hero-feature-card" : ""}`}
                style={{
                  animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${0.15 + idx * 0.08}s`,
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                }}
              >
                {/* Icon Column */}
                <div 
                  className="card-icon-box"
                  style={{ 
                    background: link.iconBg, 
                    color: link.iconColor 
                  }}
                >
                  <IconComponent />
                </div>

                {/* Info Column */}
                <div className="card-info">
                  <div className="card-title-row">
                    <span className="card-title">{link.title}</span>
                    {link.pillText && (
                      <span className="featured-pill">{link.pillText}</span>
                    )}
                  </div>
                  <p className="card-desc">{link.subtitle}</p>
                </div>

                {/* Arrow Action */}
                <div className="card-arrow-box" aria-hidden="true">
                  <Icons.ArrowUpRight />
                </div>
              </a>
            );
          })}
        </section>

        {/* Minimalist Floating Social Dock */}
        <nav className="social-dock-bar" aria-label="Redes sociales y contacto">
          <a 
            href="https://github.com/4lemany" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            aria-label="GitHub"
            title="GitHub"
          >
            <Icons.Github />
          </a>
          <a 
            href="https://linkedin.com/in/adrian-alemany" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Icons.Linkedin />
          </a>
          <a 
            href="https://adrianalemanytech.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            aria-label="Sitio Web Principal"
            title="Portfolio Web"
          >
            <Icons.Globe />
          </a>
          <a 
            href="mailto:contact@adrianalemany.tech" 
            className="social-icon-btn"
            aria-label="Enviar correo"
            title="Contacto directo"
          >
            <Icons.Mail />
          </a>
        </nav>

        {/* Footer Note */}
        <footer className="linktree-footer">
          <p>© {new Date().getFullYear()} Adrián Alemany Martínez · Built with Precision &amp; AI</p>
        </footer>
      </main>
    </>
  );
}
