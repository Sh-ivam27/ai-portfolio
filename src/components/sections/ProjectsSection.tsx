"use client";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ marginBottom: "3.5rem" }}>
        <span className="section-label">Work</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1, marginTop: "0.75rem", color: "var(--ink)" }}>
          Selected Projects
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5px" }}>
        {projects.map((project, i) => (
          <div key={project.name} className="card-hover" style={{ background: "white", border: "1px solid var(--border-soft)", borderRadius: "4px", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "0rem", right: "2rem", fontFamily: "var(--font-display)", fontSize: "5rem", fontWeight: 300, color: "var(--cream-dark)", lineHeight: 1, userSelect: "none" }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", position: "relative" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", padding: "3px 10px", border: "1px solid var(--gold-light)", borderRadius: "2px", background: "var(--gold-faint)" }}>{project.type}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)" }}>{project.status}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.25rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.5rem" }}>{project.name}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--ink-muted)", fontStyle: "italic", marginBottom: "1.25rem" }}>{project.tagline}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--ink-soft)", lineHeight: 1.8 }}>{project.description}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: "0.75rem" }}>The Problem</div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--ink-soft)", lineHeight: 1.7 }}>{project.problem}</p>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: "0.75rem" }}>The Solution</div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--ink-soft)", lineHeight: 1.7 }}>{project.solution}</p>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: "0.75rem" }}>Tech Stack</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {project.tech.map((t) => (
                      <span key={t} className="skill-pill" style={{ fontSize: "0.7rem" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
