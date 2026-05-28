"use client";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
        <div style={{ paddingTop: "0.25rem" }}>
          <span className="section-label">Experience</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 300, lineHeight: 1.1, marginTop: "0.75rem", color: "var(--ink)" }}>
            Roles and Activities
          </h2>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: "8px", bottom: "8px", width: "1px", background: "var(--border)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {experience.map((exp, i) => (
              <div key={i} style={{ paddingLeft: "2rem", paddingBottom: i < experience.length - 1 ? "2.5rem" : "0", position: "relative" }}>
                <div style={{ position: "absolute", left: "-4px", top: "6px", width: "9px", height: "9px", borderRadius: "50%", background: "var(--cream)", border: "1px solid var(--gold)" }} />
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.375rem" }}>{exp.period}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.2rem" }}>{exp.role}</h3>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--ink-muted)", marginBottom: "0.625rem", fontStyle: "italic" }}>{exp.organisation}</div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--ink-soft)", lineHeight: 1.75, maxWidth: "560px" }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
