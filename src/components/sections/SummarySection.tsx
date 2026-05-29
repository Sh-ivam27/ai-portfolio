"use client";
import { portfolioData } from "@/data/portfolio";

export default function SummarySection() {
  const { personal } = portfolioData;

  return (
    <section id="summary" style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", alignItems: "start" }}>
        <div>
          <span className="section-label">Summary</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 300, lineHeight: 1.1, marginTop: "0.75rem", color: "var(--ink)" }}>
            In Brief
          </h2>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.9, paddingTop: "0.25rem" }}>
          {personal.summary}
        </p>
      </div>
    </section>
  );
}
