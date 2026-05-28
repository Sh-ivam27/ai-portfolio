"use client";
import { portfolioData } from "@/data/portfolio";

export default function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "1100px", margin: "0 auto", padding: "8rem 2rem 6rem", position: "relative" }}>
      <div className="animate-fade-up" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
        <span className="section-label">Portfolio</span>
        <span style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--ink-muted)", letterSpacing: "0.06em" }}>{personal.location}</span>
      </div>

      <h1 className="animate-fade-up delay-100" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "0.25rem", color: "var(--ink)" }}>
        Shivam
      </h1>
      <h1 className="animate-fade-up delay-200" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "2.5rem", fontStyle: "italic" }}>
        <span className="text-shimmer">Madan</span>
        <span style={{ color: "var(--gold)" }}>.</span>
      </h1>

      <div className="animate-fade-up delay-300" style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem" }}>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--ink-muted)", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{personal.tagline}</span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      <div className="animate-fade-up delay-400" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.8, maxWidth: "480px" }}>
          {personal.bio}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <a href="#chat" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "var(--ink)", color: "var(--cream)", textDecoration: "none", borderRadius: "3px", fontFamily: "var(--font-body)", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>
            <span>Chat with my AI Copilot</span>
            <span>→</span>
          </a>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a href={personal.links.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1, padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "3px", fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)", textDecoration: "none", textAlign: "center" }}>GitHub</a>
            <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer" style={{ flex: 1, padding: "12px 16px", border: "1px solid var(--border)", borderRadius: "3px", fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-muted)", textDecoration: "none", textAlign: "center" }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
