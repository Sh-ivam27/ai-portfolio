"use client";
import { portfolioData } from "@/data/portfolio";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ marginBottom: "3.5rem" }}>
        <span className="section-label">Education</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1, marginTop: "0.75rem", color: "var(--ink)" }}>
          Academic Background
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5px" }}>
        {education.map((edu, i) => (
          <div key={i} className="card-hover" style={{ background: i === 0 ? "var(--ink)" : "white", border: "1px solid var(--border-soft)", borderRadius: "3px", padding: "2rem" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 300, color: i === 0 ? "rgba(247,244,238,0.15)" : "var(--cream-dark)", lineHeight: 1, marginBottom: "1.5rem" }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: i === 0 ? "var(--gold-light)" : "var(--gold)", marginBottom: "0.5rem" }}>
              {edu.period}
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, color: i === 0 ? "var(--cream)" : "var(--ink)", lineHeight: 1.3, marginBottom: "0.5rem" }}>
              {edu.institution}
            </h3>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: i === 0 ? "rgba(247,244,238,0.7)" : "var(--ink-muted)", fontStyle: "italic", marginBottom: "0.875rem" }}>
              {edu.degree}
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: i === 0 ? "rgba(247,244,238,0.6)" : "var(--ink-soft)", lineHeight: 1.7 }}>
              {edu.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
