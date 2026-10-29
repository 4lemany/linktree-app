import React from "react";
import "./styles.css";

const links = [
  { label: "Alina‑job search", url: "https://alina-brown.vercel.app/" },
  { label: "Tecnocracia", url: "https://tecnocracia.streamlit.app/" },
  { label: "Balearia‑Predictor de consumo", url: "https://baleariatravels.vercel.app/" },
  { label: "Who I am", url: "/" }
];

export default function Linktree() {
  return (
    <div className="linktree-container">
      <img src="/profile.jpg" alt="Adrian Alemany" className="avatar" />
      <h1>Adrian Alemany Martínez – IA &amp; Data Engineer</h1>
      <ul className="link-list">
        {links.map((link) => (
          <li key={link.label} className="link-item">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-anchor">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
