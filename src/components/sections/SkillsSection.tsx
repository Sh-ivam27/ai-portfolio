"use client";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  const { skills } = portfolioData;

  const groups = [
    { label: "Languages", items: skills.languages },
    { label: "Frameworks & Libraries", items: skills.frameworks },
    { label: "Tools & Platforms", items: skills.tools },
    { label: "Areas of Focus", items: skills.areas },
  ];

  return (
    <section id="skills" style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
        <div style={{ paddingTop: "0.25rem" }}>
          <span className="section-label">Skills</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 300, lineHeight: 1.1, marginTop: "0.75rem", color: "var(--ink)" }}>
            What I work with
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {groups.map((group) => (
            <div key={group.label}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: "0.875rem" }}>
                {group.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.items.map((item) => (
                  <span key={item} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
