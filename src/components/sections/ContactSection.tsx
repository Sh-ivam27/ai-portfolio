"use client";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const { personal } = portfolioData;

  return (
    <>
      <section id="contact" style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div>
            <span className="section-label">Contact</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.05, marginTop: "0.75rem", color: "var(--ink)" }}>
              Lets Connect.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--ink-muted)", lineHeight: 1.8, marginTop: "1.5rem", maxWidth: "380px" }}>
              Whether you have a project in mind, an opportunity to share, or just want to say hello — my inbox is always open.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { label: "Academic Email", value: personal.email.formal, href: `mailto:${personal.email.formal}` },
              { label: "Personal Email", value: personal.email.informal, href: `mailto:${personal.email.informal}` },
              { label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
              { label: "GitHub", value: "github.com/Sh-ivam27", href: personal.links.github },
              { label: "LinkedIn", value: "linkedin.com/in/shivam-madan", href: personal.links.linkedin },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: "1rem", borderBottom: "1px solid var(--border-soft)", gap: "1rem" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)", flexShrink: 0 }}>
                  {item.label}
                </span>
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--ink-soft)", textDecoration: "none", textAlign: "right", wordBreak: "break-all" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--gold)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--ink-soft)"}
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem", maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 400, color: "var(--ink)" }}>
          Shivam Madan<span style={{ color: "var(--gold)" }}>.</span>
        </span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--ink-faint)", letterSpacing: "0.08em" }}>
          Built with Next.js · Powered by Claude API
        </span>
      </footer>
    </>
  );
}
