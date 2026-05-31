"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED = [
  "Tell me about ReFind",
  "What are your skills?",
  "What clubs are you part of?",
  "Where do you study?",
  "How can I contact you?",
];

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Shivam's AI Career Copilot. Ask me anything about his projects, skills, experience, or background.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function startListening() {
    const SpeechRecognition = window.SpeechRecognition || (window as unknown as { webkitSpeechRecognition: typeof window.SpeechRecognition }).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input is not supported in your browser. Try Chrome!");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }

  function stopListening() {
    recognitionRef.current?.stop();
    setListening(false);
  }

  async function send(text?: string) {
    const query = text ?? input.trim();
    if (!query || loading) return;
    setInput("");

    const newMessages: Message[] = [...messages, { role: "user", content: query }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="chat" style={{ maxWidth: "1100px", margin: "0 auto", padding: "6rem 2rem 8rem", borderTop: "1px solid var(--border)" }}>
      <div style={{ marginBottom: "3rem" }}>
        <span className="section-label">AI Copilot</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1, marginTop: "0.75rem", color: "var(--ink)" }}>
          Ask me anything
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--ink-muted)", marginTop: "0.75rem", maxWidth: "480px" }}>
          This AI is grounded in Shivam's real data. Type or use the mic to ask anything.
        </p>
      </div>

      <div style={{ background: "white", border: "1px solid var(--border-soft)", borderRadius: "6px", overflow: "hidden", display: "flex", flexDirection: "column", height: "520px" }}>
        <div style={{ padding: "1rem 1.5rem", borderBottom: "1px solid var(--border-soft)", display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--cream)" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--cream)", fontWeight: 500 }}>SM</div>
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 500, color: "var(--ink)" }}>Shivam's AI Copilot</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "var(--ink-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4caf50", display: "inline-block" }} />
              Online · Powered by Claude · Voice enabled
            </div>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
              <div className={msg.role === "user" ? "chat-user" : "chat-ai"} style={{ maxWidth: "72%", padding: "10px 16px", fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300 }}>
                {msg.content.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1')}
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div className="chat-ai" style={{ padding: "12px 16px", display: "flex", gap: "5px", alignItems: "center" }}>
                {[0, 1, 2].map((d) => (
                  <div key={d} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--ink-faint)", animation: "fadeUp 0.6s ease infinite alternate", animationDelay: `${d * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {messages.length <= 1 && (
          <div style={{ padding: "0 1.5rem 0.75rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {SUGGESTED.map((s) => (
              <button key={s} onClick={() => send(s)} style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", padding: "5px 12px", border: "1px solid var(--border)", borderRadius: "99px", background: "var(--cream)", color: "var(--ink-muted)", cursor: "pointer", fontWeight: 400 }}>
                {s}
              </button>
            ))}
          </div>
        )}

        <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid var(--border-soft)", display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder={listening ? "Listening..." : "Ask about Shivam's experience, projects, skills..."}
            style={{ flex: 1, border: "1px solid var(--border)", borderRadius: "3px", padding: "10px 14px", fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--ink)", background: listening ? "var(--gold-faint)" : "var(--cream)", outline: "none", fontWeight: 300, transition: "all 0.2s" }}
            onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = "var(--gold)"}
            onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
          />
          <button
            onClick={listening ? stopListening : startListening}
            style={{ padding: "10px 14px", background: listening ? "var(--gold)" : "var(--cream)", color: listening ? "white" : "var(--ink-muted)", border: "1px solid var(--border)", borderRadius: "3px", cursor: "pointer", fontSize: "1.1rem", transition: "all 0.2s" }}
            title={listening ? "Stop listening" : "Speak your question"}
          >
            🎤
          </button>
          <button onClick={() => send()} disabled={loading || !input.trim()} style={{ padding: "10px 20px", background: loading || !input.trim() ? "var(--border)" : "var(--ink)", color: loading || !input.trim() ? "var(--ink-faint)" : "var(--cream)", border: "none", borderRadius: "3px", fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", cursor: loading || !input.trim() ? "not-allowed" : "pointer" }}>
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
