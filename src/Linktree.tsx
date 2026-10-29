import React, { useState, useEffect } from "react";
import "./styles.css";

// Imágenes de fondo dinámicas desde el directorio back/
import bg1 from "../back/1788348619622.png";
import bg2 from "../back/IMG-20250709-WA0045.jpg";
import bg3 from "../back/IMG-20251212-WA0023.jpg";
import bg4 from "../back/IMG-20260926-WA0006.jpg";
import bg5 from "../back/IMG20260911205328.jpg";
import bg6 from "../back/IMG_20261029_144449.jpg";
import bg7 from "../back/IMG_20261029_144827.jpg";
import bg8 from "../back/_1078566.jpg";

const BACKGROUND_IMAGES = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];

const Icons = {
  Sparkles: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7"/>
      <path d="M7 7h10v10"/>
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Share: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  Globe: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  ),
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
};

interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  isHero?: boolean;
  pillText?: string;
  iconBg: string;
  iconColor: string;
  icon: () => JSX.Element;
}

const LINKS: LinkItem[] = [
  {
    id: "who-i-am",
    title: "Who I am — Portfolio & Trayectoria",
    subtitle: "Explora mis proyectos de Machine Learning, visión interactiva 3D y perfil profesional",
    url: "https://adrianalemanytech.vercel.app/",
    isHero: true,
    pillText: "Portfolio Principal",
    iconBg: "#e0e7ff",
    iconColor: "#4338ca",
    icon: Icons.User,
  },
  {
    id: "alina-job-search",
    title: "Alina — Job Search AI Agent",
    subtitle: "Agente inteligente y autónomo para búsqueda y recomendación personalizada de empleo",
    url: "https://alina-brown.vercel.app/",
    iconBg: "#e0f2fe",
    iconColor: "#0284c7",
    icon: Icons.SearchJob,
  },
  {
    id: "tecnocracia",
    title: "Tecnocracia",
    subtitle: "Plataforma analítica e interactiva con visualización de datos en tiempo real",
    url: "https://tecnocracia.streamlit.app/",
    iconBg: "#fee2e2",
    iconColor: "#e11d48",
    icon: Icons.Cpu,
  },
  {
    id: "balearia-predictor",
    title: "Balearia — Predictor de Consumo",
    subtitle: "Modelo predictivo para eficiencia y optimización de consumo de combustible marítimo",
    url: "https://baleariatravels.vercel.app/",
    iconBg: "#dcfce7",
    iconColor: "#059669",
    icon: Icons.Ship,
  },
];

export default function Linktree() {
  const [copied, setCopied] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <>
      {/* Diapositivas de fondo dinámicas (cambian cada 7 segundos) */}
      <div className="background-slideshow" aria-hidden="true">
        {BACKGROUND_IMAGES.map((imgSrc, index) => (
          <div
            key={index}
            className={`bg-slide-item ${index === currentBgIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${imgSrc})` }}
          />
        ))}
        <div className="bg-slideshow-overlay"></div>
      </div>

      {/* Fondo Luminoso Editorial */}
      <div className="luminous-bg">
        <div className="aurora-sphere sphere-1"></div>
        <div className="aurora-sphere sphere-2"></div>
      </div>
      <div className="noise-dots"></div>

      <main className="linktree-app-container">
        {/* Barra Superior */}
        <header className="top-action-bar">
          <button 
            type="button" 
            className={`share-pill-btn ${copied ? "copied" : ""}`} 
            onClick={handleCopy}
            aria-label="Compartir perfil"
          >
            {copied ? (
              <>
                <Icons.Check />
                <span>¡Enlace copiado!</span>
              </>
            ) : (
              <>
                <Icons.Share />
                <span>Compartir perfil</span>
              </>
            )}
          </button>
        </header>

        {/* Sección de Perfil con Formato Rectangular Natural */}
        <section className="profile-section">
          <div className="avatar-wrapper">
            <div className="avatar-halo-glow"></div>
            <div className="avatar-ring-frame"></div>
            <div className="avatar-image-container">
              <img 
                src="/profile.jpg" 
                alt="Adrián Alemany Martínez" 
                className="avatar-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                }}
              />
            </div>
            <div className="status-badge" title="Disponible para nuevos proyectos">
              <span className="status-dot"></span>
              <span className="status-text">Available</span>
            </div>
          </div>

          <h1 className="profile-name">Adrián Alemany Martínez</h1>
          <div className="profile-role-pill">
            <Icons.Sparkles />
            <span>AI &amp; Data Engineer</span>
          </div>
          <p className="profile-bio">
            Diseñando arquitecturas de datos de alto rendimiento e implementando modelos de Inteligencia Artificial generativa orientados a producto.
          </p>
        </section>

        {/* Colección de Enlaces con diseño Editorial Refinado */}
        <section className="cards-stack" aria-label="Proyectos y enlaces">
          {LINKS.map((link, idx) => {
            const IconComponent = link.icon;
            const isHero = link.isHero;

            return (
              <a
                key={link.id}
                href={link.url}
                target={isHero ? "_self" : "_blank"}
                rel={isHero ? undefined : "noopener noreferrer"}
                className={`editorial-card ${isHero ? "hero-editorial-card" : ""}`}
                style={{
                  animationDelay: `${0.18 + idx * 0.09}s`,
                }}
              >
                <div 
                  className="card-visual-box"
                  style={{ 
                    backgroundColor: link.iconBg, 
                    color: link.iconColor 
                  }}
                >
                  <IconComponent />
                </div>

                <div className="card-body">
                  <div className="card-headline">
                    <span className="card-title">{link.title}</span>
                    {link.pillText && (
                      <span className="tag-badge">{link.pillText}</span>
                    )}
                  </div>
                  <p className="card-description">{link.subtitle}</p>
                </div>

                <div className="card-nav-arrow" aria-hidden="true">
                  <Icons.ArrowUpRight />
                </div>
              </a>
            );
          })}
        </section>

        {/* Dock Flotante de Conexión */}
        <nav className="floating-dock" aria-label="Canales de contacto y redes">
          <a 
            href="https://github.com/4lemany" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dock-item-btn"
            aria-label="GitHub de Adrián Alemany"
            title="GitHub"
          >
            <Icons.Github />
          </a>
          <a 
            href="https://www.linkedin.com/in/adri%C3%A1n-alemany-97202a227" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dock-item-btn"
            aria-label="LinkedIn de Adrián Alemany"
            title="LinkedIn"
          >
            <Icons.Linkedin />
          </a>
          <a 
            href="https://adrianalemanytech.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dock-item-btn"
            aria-label="Portfolio Web Oficial"
            title="Portfolio Web"
          >
            <Icons.Globe />
          </a>
          <a 
            href="mailto:adrianalemany40@gmail.com" 
            className="dock-item-btn"
            aria-label="Contactar por correo"
            title="Email"
          >
            <Icons.Mail />
          </a>
        </nav>

        {/* Footer */}
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Adrián Alemany Martínez</p>
        </footer>
      </main>
    </>
  );
}
