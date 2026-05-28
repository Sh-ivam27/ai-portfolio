"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.4s ease", background: scrolled ? "rgba(247,244,238,0.92)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid var(--border-soft)" : "1px solid transparent" }}>
      <nav style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, color: "var(--ink)", textDecoration: "none" }}>
          SM<span style={{ color: "var(--gold)" }}>.</span>
        </a>
        <div className="hidden-mobile" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="#chat" style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", padding: "8px 18px", border: "1px solid var(--ink)", color: "var(--ink)", background: "transparent", textDecoration: "none", borderRadius: "2px" }}>Ask AI</a>
        </div>
      </nav>
      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </header>
  );
}