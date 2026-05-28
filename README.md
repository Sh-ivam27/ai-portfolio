# Shivam Madan — AI Portfolio Copilot

A smart, client-facing career portfolio powered by AI. Anyone visiting can ask questions about my work, projects, skills, and experience — and receive accurate, grounded answers via an AI Career Copilot.

Built as part of the CAARYA AI Track Work Order (4-Day Sprint).

---

## Live Demo

https://ai-portfolio-amber-two.vercel.app

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Custom CSS Variables |
| AI | Anthropic Claude API (claude-sonnet-4-6) |
| Data Layer | Structured TypeScript data file |
| Deployment | Vercel |

---

## Architecture

src/
├── app/
│   ├── api/chat/route.ts      <- Claude API backend
│   ├── globals.css             <- Design system
│   ├── layout.tsx              <- Root layout
│   └── page.tsx                <- Main page
├── components/
│   ├── ui/Navbar.tsx           <- Sticky navbar
│   └── sections/
│       ├── HeroSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── EducationSection.tsx
│       ├── ChatSection.tsx     <- AI Q&A interface
│       └── ContactSection.tsx
└── data/
    └── portfolio.ts            <- Single source of truth

---

## AI Design

1. All personal data is stored in src/data/portfolio.ts
2. On each chat request, a system prompt is dynamically built from this data
3. Claude is instructed to only answer from the provided data — no hallucinations
4. Last 10 messages passed for multi-turn conversation context
5. Graceful fallback for questions outside the data scope

---

## Setup and Running Locally

### Prerequisites
- Node.js 18+
- Anthropic API key from console.anthropic.com

### Steps

1. Clone the repo
   git clone https://github.com/Sh-ivam27/ai-portfolio.git
   cd ai-portfolio

2. Install dependencies
   npm install

3. Set up environment variables
   Create a .env.local file and add:
   ANTHROPIC_API_KEY=your_key_here

4. Run dev server
   npm run dev

5. Open http://localhost:3000

---

## Sample Q&A Pairs

| Question | Answer |
|---|---|
| What is ReFind? | Full-stack college thrift store built with React + Node.js |
| What college do you attend? | BITS Pilani, Hyderabad Campus — 2nd year CS |
| What programming languages do you know? | Python, C, C++, Java, JavaScript, TypeScript |
| What clubs are you part of? | DoPE, Embryo, SWMC, AUGSD |
| How can I contact you? | shivammadan2277@gmail.com, GitHub, LinkedIn |
| What is your tech stack? | React + Node.js for full-stack, Python/C++ for systems |
| Tell me about your mentoring role | Mentor at SWMC, helps junior students transition into BITS |
| What problem does ReFind solve? | Replaces chaotic WhatsApp groups for campus buy/sell |

---

## Deployment

1. Install Vercel CLI
   npm i -g vercel

2. Deploy
   vercel --prod

3. Add ANTHROPIC_API_KEY in Vercel dashboard under Environment Variables

---

## Future Plans

- Add more projects as they are built
- Streaming AI responses for better UX
- Resume PDF download
- Dark mode toggle
- Analytics on most asked questions

---

## Challenges

- Prompt engineering to prevent hallucinations
- Graceful edge case handling for unknown questions
- Managing conversation context window efficiently

---

Built by Shivam Madan · BITS Pilani Hyderabad Campus · 2026
