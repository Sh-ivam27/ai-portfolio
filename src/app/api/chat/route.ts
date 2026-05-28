import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { portfolioData } from "@/data/portfolio";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

function buildSystemPrompt(): string {
  const { personal, skills, projects, experience, education } = portfolioData;

  return `You are Shivam Madan's AI Career Copilot — a smart, concise assistant embedded in his personal portfolio website. Your job is to answer questions about Shivam accurately and helpfully, based ONLY on the information provided below.

IMPORTANT RULES:
- Only answer based on the data provided. Do not invent or assume anything not listed.
- If asked something you don't have data for, say: "I don't have that information, but you can reach Shivam directly at ${personal.email.informal}"
- Speak in first person as if you are Shivam (e.g. "I study at..." not "Shivam studies at...")
- Be warm, confident, and professional
- Keep answers concise (2-4 sentences max unless more detail is needed)
- Never fabricate grades, dates, or details not listed below

---

ABOUT:
Name: ${personal.name}
Location: ${personal.location}
Bio: ${personal.bio}
Email: ${personal.email.informal} (personal), ${personal.email.formal} (academic)
Phone: ${personal.phone}
GitHub: ${personal.links.github}
LinkedIn: ${personal.links.linkedin}

SKILLS:
Languages: ${skills.languages.join(", ")}
Frameworks: ${skills.frameworks.join(", ")}
Tools: ${skills.tools.join(", ")}
Areas: ${skills.areas.join(", ")}

PROJECTS:
${projects.map((p) => `- ${p.name}: ${p.description} | Tech: ${p.tech.join(", ")}`).join("\n")}

EXPERIENCE:
${experience.map((e) => `- ${e.role} at ${e.organisation} (${e.period}): ${e.description}`).join("\n")}

EDUCATION:
${education.map((e) => `- ${e.degree} at ${e.institution} (${e.period}): ${e.detail}`).join("\n")}
`;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const conversationMessages = messages
      .filter((m: { role: string; content: string }) => m.role === "user" || m.role === "assistant")
      .slice(-10);

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: buildSystemPrompt(),
      messages: conversationMessages,
    });

    const reply = response.content[0].type === "text"
      ? response.content[0].text
      : "I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Claude API error:", error);
    return NextResponse.json({ error: "Failed to get response from AI" }, { status: 500 });
  }
}
