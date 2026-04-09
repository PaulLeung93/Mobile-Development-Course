import { useState } from "react";

const PURPLE      = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT= "#EEEDFE";
const TEAL        = "#1D9E75";
const TEAL_DARK   = "#0F6E56";
const TEAL_LIGHT  = "#E1F5EE";
const AMBER       = "#EF9F27";
const AMBER_LIGHT = "#FAEEDA";
const BLUE        = "#185FA5";
const BLUE_LIGHT  = "#E6F1FB";
const GREEN       = "#3B6D11";
const GREEN_LIGHT = "#EAF3DE";
const GRAY        = "#F5F5F7";
const TEXT        = "#1a1a2e";
const MUTED       = "#6b7280";

const Tag = ({ children, color = "purple" }) => {
  const map = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK   },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806"   },
    blue:   { bg: BLUE_LIGHT,   fg: BLUE        },
    green:  { bg: GREEN_LIGHT,  fg: GREEN       },
    ai:     { bg: "#F9F0FF",    fg: "#6B21A8"   },
    red:    { bg: "#FCEBEB",    fg: "#A32D2D"   },
  };
  const c = map[color] || map.purple;
  return <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", background: c.bg, color: c.fg, padding: "2px 8px", borderRadius: 20 }}>{children}</span>;
};

const CodePane = ({ title, accent = PURPLE, children }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0", letterSpacing: ".04em" }}>{title}</div>
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: "0 0 8px 8px", lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Info = ({ children }) => (
  <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
    <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Callout = ({ color, fg, label, children }) => (
  <div style={{ background: color, borderRadius: 8, padding: "10px 12px" }}>
    {label && <p style={{ fontSize: 10, fontWeight: 700, color: fg, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em" }}>{label}</p>}
    <p style={{ fontSize: 11, color: fg, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Discussion = ({ children }) => (
  <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Discussion prompt</p>
    <p style={{ fontSize: 12, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Notes = ({ children }) => (
  <div style={{ background: GRAY, borderRadius: 8, padding: "8px 12px", marginTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em" }}>Speaker notes</p>
    <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Shell = ({ tag, tagColor = "teal", timer, title, subtitle, children, notes }) => (
  <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px 22px", minHeight: 340 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag color="purple">Week 7 · S1</Tag>
        {tag && <Tag color={tagColor}>{tag}</Tag>}
      </div>
      {timer && <span style={{ fontSize: 11, color: MUTED, background: GRAY, padding: "2px 8px", borderRadius: 20 }}>{timer} min</span>}
    </div>
    <h2 style={{ fontSize: 18, fontWeight: 500, color: TEXT, margin: "0 0 4px", lineHeight: 1.3 }}>{title}</h2>
    {subtitle && <p style={{ fontSize: 13, color: MUTED, margin: "0 0 12px" }}>{subtitle}</p>}
    <div style={{ marginTop: 10 }}>{children}</div>
    {notes && <Notes>{notes}</Notes>}
  </div>
);

const slides = [
  // 1: Title
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 600, background: BLUE_LIGHT, color: BLUE, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>Android track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: GREEN_LIGHT, color: GREEN, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>iOS track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: "#F9F0FF", color: "#6B21A8", padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>✨ AI Feature</span>
        </div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 7 · Session 1 · Phase 2</p>
        <h1 style={{ fontSize: 30, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.2 }}>Integrating a cloud LLM API</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>HTTP · Tokens · SSE streaming · A real chat screen</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "How LLM APIs differ from REST APIs",
            "Tokens — the unit every LLM thinks in",
            "The Claude Messages API — anatomy of a request",
            "Server-sent events — parsing the wire format",
            "Conversation history management",
            "Secure API key storage on both platforms",
            "Android: OkHttp + coroutines + Compose streaming UI",
            "iOS: URLSession AsyncBytes + SwiftUI streaming UI",
            "Platform-to-platform comparison",
            "Common bugs and how to diagnose them",
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: AMBER, fontWeight: 700, fontSize: 14, flexShrink: 0, marginTop: 1 }}>▸</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: "24px 0 0" }}>Mobile development in the age of AI · CodePath</p>
    </div>
  ),

  // 2: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 2 hours" notes="This is the week students have been waiting for since Week 1. Set the tone: today they are not learning a new UI pattern or a new data layer — they are adding a brain to their app. The concept section (slides 4–8) is genuinely new knowledge for most students. Do not rush it: students who understand how LLMs work will find the code obvious; students who skip to the code will cargo-cult it and struggle to debug.">
      {[
        { time: "0:00–0:05",  label: "Hook",                   desc: "The magic moment — why streaming changes everything", section: null },
        { time: "0:05–0:15",  label: "LLM APIs vs REST",       desc: "Three fundamental differences: tokens, statelessness, open connections", section: null },
        { time: "0:15–0:22",  label: "Tokens deep dive",       desc: "What a token is, cost/context implications, tokenisation examples", section: null },
        { time: "0:22–0:32",  label: "The Messages API",       desc: "Request anatomy: model, max_tokens, stream, system, messages, roles", section: null },
        { time: "0:32–0:42",  label: "SSE and streaming",      desc: "Wire format, parsing rules, pseudocode, thread safety", section: null },
        { time: "0:42–0:47",  label: "History + security",     desc: "You are the model's memory. API key storage.", section: null },
        { time: "0:47–1:05",  label: "Android implementation", desc: "OkHttp streaming, Flow, ViewModel, Compose chat UI", section: "android" },
        { time: "1:05–1:22",  label: "iOS implementation",     desc: "URLSession AsyncBytes, AsyncThrowingStream, SwiftUI chat UI", section: "ios" },
        { time: "1:22–1:27",  label: "Platform comparison",   desc: "Android vs iOS side-by-side — same architecture, different tools", section: null },
        { time: "1:27–1:32",  label: "Common bugs",            desc: "The 6 things that always go wrong and how to fix each", section: null },
        { time: "1:32–1:37",  label: "Lab intro",              desc: "Build a streaming chat screen — checklist walkthrough", section: null },
        { time: "1:37–2:25",  label: "Lab — breakout rooms",   desc: "API key → repository → ViewModel → streaming UI", section: "lab" },
        { time: "2:25–2:30",  label: "Wrap-up + survey",       desc: "What you built · Session 2 preview · M1 reminder", section: "wrapup" },
      ].map(r => (
        <div key={r.time} style={{
          display: "flex", gap: 12, padding: "7px 0",
          borderBottom: `0.5px solid ${GRAY}`,
          background: r.section === "android" ? BLUE_LIGHT : r.section === "ios" ? GREEN_LIGHT : r.section === "lab" ? TEAL_LIGHT : r.section === "wrapup" ? AMBER_LIGHT : "transparent",
          borderRadius: r.section ? 6 : 0, paddingLeft: r.section ? 8 : 0, marginLeft: r.section ? -8 : 0
        }}>
          <span style={{ fontSize: 11, minWidth: 90, flexShrink: 0, color: r.section === "android" ? BLUE : r.section === "ios" ? GREEN : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : MUTED }}>{r.time}</span>
          <span style={{ fontSize: 11, fontWeight: 600, minWidth: 170, flexShrink: 0, color: r.section === "android" ? BLUE : r.section === "ios" ? GREEN : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : PURPLE }}>{r.label}</span>
          <span style={{ fontSize: 11, color: r.section === "android" ? BLUE : r.section === "ios" ? GREEN : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : TEXT }}>{r.desc}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: 14, marginTop: 10, flexWrap: "wrap" }}>
        {[{ color: BLUE, label: "Android" }, { color: GREEN, label: "iOS" }, { color: TEAL, label: "Lab" }, { color: AMBER, label: "Wrap-up" }].map(l => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
            <span style={{ fontSize: 11, color: MUTED }}>{l.label}</span>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 3: Hook
  () => (
    <Shell tag="Hook" timer="5" title="The magic moment — and why it matters" subtitle="There is a specific feeling. You are going to create it today." notes="Open a phone and show ChatGPT or Claude.ai loading a response in real time. Then ask: would this feel as good if it showed a spinner for 8 seconds and then dumped all the text at once? No. Today they build the mechanism behind that feeling. Emphasise the time-to-first-token (TTFT) metric — it is a real production KPI, not just aesthetics.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Two ways to wait for an LLM</p>
          <div style={{ background: "#FCEBEB", borderRadius: 10, padding: "14px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 8px" }}>Non-streaming</p>
            {[
              { e: "⌛", t: "0–8s",    d: "Spinner. Nothing visible. User wonders if the app crashed." },
              { e: "💬", t: "8.3s",   d: "400 tokens appear in a single update. No sense of thought." },
              { e: "😐", t: "Result", d: "It works, but feels mechanical. The experience says: 'a machine processed your request.'" },
            ].map(s => (
              <div key={s.t} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{s.e}</span>
                <div><p style={{ fontSize: 10, fontWeight: 600, color: "#A32D2D", margin: 0 }}>{s.t}</p><p style={{ fontSize: 11, color: "#A32D2D", margin: 0, lineHeight: 1.4 }}>{s.d}</p></div>
              </div>
            ))}
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 8px" }}>Streaming — what you build today</p>
            {[
              { e: "⚡", t: "~300ms",   d: "First token arrives. App is alive. User is reading." },
              { e: "✍️", t: "300ms–8s", d: "Words appear one by one. Model visibly constructing an answer." },
              { e: "✅", t: "8s done",  d: "Complete. User has been reading and evaluating since second one." },
            ].map(s => (
              <div key={s.t} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{s.e}</span>
                <div><p style={{ fontSize: 10, fontWeight: 600, color: TEAL_DARK, margin: 0 }}>{s.t}</p><p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.4 }}>{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>Why this matters on mobile</p>
          {[
            { title: "TTFT is a production KPI", detail: "Time-to-first-token is measured the same way web teams measure LCP. Production AI teams at Notion, Figma, and Linear target sub-500ms TTFT as a hard SLA." },
            { title: "Mobile users abandon after 2.5s of silence", detail: "Without visible progress feedback within ~2.5s a meaningful fraction of mobile users assume the app has crashed and leave. Streaming provides feedback in under 300ms." },
            { title: "Perceived intelligence", detail: "Text arriving word-by-word mirrors how humans compose thoughts — it implies the model is reasoning in real time. Which it is. Full-dump delivery feels algorithmic by comparison." },
            { title: "Cancellation becomes possible", detail: "You cannot cancel a non-streaming response once sent. With streaming, a Stop button is a 10-line addition. Users often know within the first sentence if the response is going wrong." },
            { title: "Progressive disclosure", detail: "Users can start reading the beginning of a long response while the rest is still generating — and redirect the conversation earlier if needed." },
          ].map(obs => (
            <div key={obs.title} style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "9px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 2px" }}>{obs.title}</p>
              <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{obs.detail}</p>
            </div>
          ))}
          <Discussion>{"Open ChatGPT or Claude on your phone. Notice the first word appears almost immediately. How would you feel if it showed a 8-second spinner instead? Has this expectation changed how you perceive slow AI apps?"}</Discussion>
        </div>
      </div>
    </Shell>
  ),

  // 4: LLM APIs vs REST
  () => (
    <Shell tag="Concept" timer="8" title="LLM APIs vs REST APIs — three fundamental differences" subtitle="You already know how to call an API. This is different in three specific ways." notes="Anchor in what students already know — Week 4 networking. They know JSON, async, error handling. Highlight only the three deltas. The statelessness point often surprises students who assumed the API maintains a session. The open-connection point is the most important for understanding streaming — draw a literal diagram of the TCP connection staying alive if it helps.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {[
          {
            num: "01", title: "Tokens, not objects", icon: "🔤",
            rest: "You request a resource (a list of movies). The server returns a fixed-shape JSON object in one response body.",
            llm: "You send a prompt (free-form text). You receive a stream of tokens — sub-word fragments. 'extraordinary' might be 3 tokens. The response has no fixed shape.",
            analogy: "REST: ordering a packaged meal. LLM: watching a chef compose it one ingredient at a time.",
            key: "All LLM cost, speed, and limits are denominated in tokens — not bytes or records.",
            color: PURPLE_LIGHT, fg: PURPLE_DARK
          },
          {
            num: "02", title: "You supply the memory", icon: "🧠",
            rest: "Stateless by design. Each call is self-contained. The server maintains no context between calls.",
            llm: "Also stateless — but conversation requires state. Every request must include the entire conversation history. No session, no memory.",
            analogy: "REST: calling a hotline where each agent has full records. LLM: calling a different person every time and reading them the whole transcript.",
            key: "You maintain history in your ViewModel and send it with every request. Forget it and the model acts like it has never spoken to the user.",
            color: BLUE_LIGHT, fg: BLUE
          },
          {
            num: "03", title: "The connection stays open", icon: "📡",
            rest: "Open connection → server processes → sends complete response → closes connection. One round trip, fully buffered.",
            llm: "Open connection → server generates token by token → sends each token as produced → closes only when generation complete. Connection stays alive the whole time.",
            analogy: "REST: a sealed letter arrives all at once. LLM: a letter arriving one sentence at a time through a mail slot.",
            key: "This is not a slow API — it is the feature. SSE (Server-Sent Events) is the mechanism for receiving tokens as they arrive.",
            color: GREEN_LIGHT, fg: GREEN
          },
        ].map(d => (
          <div key={d.num} style={{ background: d.color, borderRadius: 10, padding: "14px" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 6 }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: d.fg, margin: 0, opacity: 0.2 }}>{d.num}</p>
              <span style={{ fontSize: 20 }}>{d.icon}</span>
            </div>
            <p style={{ fontSize: 12, fontWeight: 700, color: d.fg, margin: "0 0 10px" }}>{d.title}</p>
            <div style={{ background: "rgba(255,255,255,0.55)", borderRadius: 6, padding: "7px 10px", marginBottom: 6 }}>
              <p style={{ fontSize: 9, fontWeight: 700, color: d.fg, margin: "0 0 2px", textTransform: "uppercase", opacity: 0.6 }}>REST API</p>
              <p style={{ fontSize: 11, color: d.fg, margin: 0, lineHeight: 1.5 }}>{d.rest}</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.55)", borderRadius: 6, padding: "7px 10px", marginBottom: 6 }}>
              <p style={{ fontSize: 9, fontWeight: 700, color: d.fg, margin: "0 0 2px", textTransform: "uppercase", opacity: 0.6 }}>LLM API</p>
              <p style={{ fontSize: 11, color: d.fg, margin: 0, lineHeight: 1.5 }}>{d.llm}</p>
            </div>
            <div style={{ background: "rgba(0,0,0,0.05)", borderRadius: 6, padding: "6px 10px", marginBottom: 6 }}>
              <p style={{ fontSize: 11, color: d.fg, margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>{d.analogy}</p>
            </div>
            <p style={{ fontSize: 11, fontWeight: 600, color: d.fg, margin: 0, lineHeight: 1.4, borderTop: `1px solid ${d.fg}22`, paddingTop: 6 }}>{d.key}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 5: Tokens deep dive
  () => (
    <Shell tag="Concept" timer="7" title="Tokens — what they are and why they matter" subtitle="Every LLM interaction is denominated in tokens. You need to understand them." notes="Tokenisation is unintuitive until students see concrete examples. Do the OpenAI tokeniser demo live if possible — paste a sentence and show the coloured token boundaries. The practical points are cost and context window limits. A student who understands tokens will naturally write more efficient prompts and understand why very long conversations eventually fail.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What is a token?</p>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 11, color: MUTED, margin: "0 0 10px", lineHeight: 1.5 }}>A token is roughly 3–4 characters of text. Tokenisation splits text into sub-word fragments — not by words or characters but by a learned vocabulary. The same word may be 1 token or several depending on frequency.</p>
            <div style={{ marginBottom: 8 }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: MUTED, margin: "0 0 5px", textTransform: "uppercase" }}>Example: "Hello, world!" = 4 tokens</p>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {[
                  { text: "Hello", color: PURPLE_LIGHT, fg: PURPLE_DARK },
                  { text: ",", color: BLUE_LIGHT, fg: BLUE },
                  { text: " world", color: GREEN_LIGHT, fg: GREEN },
                  { text: "!", color: AMBER_LIGHT, fg: "#633806" },
                ].map(t => (
                  <span key={t.text} style={{ background: t.color, color: t.fg, fontSize: 13, fontWeight: 500, padding: "3px 8px", borderRadius: 5, fontFamily: "monospace", border: `1px solid ${t.fg}30` }}>{t.text}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, color: MUTED, margin: "0 0 5px", textTransform: "uppercase" }}>Example: "extraordinary" = 3 tokens</p>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {[
                  { text: "extra", color: PURPLE_LIGHT, fg: PURPLE_DARK },
                  { text: "ordin", color: BLUE_LIGHT, fg: BLUE },
                  { text: "ary", color: GREEN_LIGHT, fg: GREEN },
                ].map(t => (
                  <span key={t.text} style={{ background: t.color, color: t.fg, fontSize: 13, fontWeight: 500, padding: "3px 8px", borderRadius: 5, fontFamily: "monospace", border: `1px solid ${t.fg}30` }}>{t.text}</span>
                ))}
              </div>
            </div>
          </div>
          <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: "0 0 6px" }}>Token counts for common text</p>
          {[
            { label: '"What is the capital of France?"',  tokens: "~8 tokens" },
            { label: "A typical chat message (20 words)", tokens: "~25–30 tokens" },
            { label: "A 500-word essay",                  tokens: "~650 tokens" },
            { label: "10 rounds of conversation",         tokens: "~300–600 tokens" },
            { label: "A full ViewModel file",             tokens: "~400–800 tokens" },
            { label: "Claude claude-opus-4-5 context window",     tokens: "200,000 tokens max" },
          ].map(r => (
            <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: `0.5px solid ${GRAY}`, alignItems: "center" }}>
              <span style={{ fontSize: 11, color: TEXT, fontFamily: "monospace", opacity: 0.9 }}>{r.label}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: PURPLE, background: PURPLE_LIGHT, padding: "1px 8px", borderRadius: 10, flexShrink: 0, marginLeft: 8 }}>{r.tokens}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>Why tokens matter for your code</p>
          {[
            { title: "max_tokens caps the response", detail: "The max_tokens field is a hard ceiling. If the model hits it mid-sentence, it stops there — no error, just truncation. 1024 tokens ≈ ~750 words. Size this for your use case.", color: BLUE_LIGHT, fg: BLUE },
            { title: "Cost is per token — input and output", detail: "Anthropic charges per million tokens — both prompt tokens (input) and completion tokens (output). A long conversation history means higher per-request cost because you resend all previous turns.", color: AMBER_LIGHT, fg: "#633806" },
            { title: "Context window is a hard limit", detail: "The context window is the maximum tokens (input + output combined) in one request. Claude claude-opus-4-5: 200k. Very long conversations will eventually hit this. Handle the 400 'context overflow' error gracefully.", color: TEAL_LIGHT, fg: TEAL_DARK },
            { title: "Tokens arrive mid-word in the stream", detail: "The SSE stream sends sub-word tokens. 'omelette' might arrive as 'omel' + 'ette' across two separate deltas. Always append to accumulated — never replace — when building the response string.", color: GREEN_LIGHT, fg: GREEN },
          ].map(k => (
            <div key={k.title} style={{ background: k.color, borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: k.fg, margin: "0 0 3px" }}>{k.title}</p>
              <p style={{ fontSize: 11, color: k.fg, margin: 0, lineHeight: 1.5, opacity: 0.9 }}>{k.detail}</p>
            </div>
          ))}
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 6px" }}>💡 Prompt engineering implications</p>
            {[
              { tip: "System prompts are repeated every request", detail: "A 200-token system prompt adds 200 input tokens to every single API call. Keep them concise — every word has a real cost at scale." },
              { tip: "Fewer, longer turns beats many short ones", detail: "10 messages of 50 tokens costs the same as 1 message of 500 tokens in output, but the 10-turn conversation accumulates 500 tokens of history overhead you resend each time." },
              { tip: "Common words = fewer tokens", detail: "Simple language tokenises more efficiently than jargon. 'Use plain English' is both a UX guideline and a cost optimisation — technical terms fragment into more tokens." },
            ].map(t => (
              <div key={t.tip} style={{ marginBottom: 6 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 1px" }}>{t.tip}</p>
                <p style={{ fontSize: 10.5, color: PURPLE_DARK, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{t.detail}</p>
              </div>
            ))}
          </div>
          <Discussion>{"Paste a sentence you might use in your capstone's system prompt into platform.openai.com/tokenizer. How many tokens is it? What does that tell you about the cost of each API call?"}</Discussion>
        </div>
      </div>
    </Shell>
  ),

  // 6: The Messages API
  () => (
    <Shell tag="Concept" timer="10" title="The Claude Messages API — anatomy of a request" subtitle="One endpoint. Every interaction you will ever build goes through it." notes="Walk field by field — do not just show the slide. Students cargo-cult API calls without understanding each field. The system prompt distinction is most important: it is not in the messages array, it never alternates, and it persists for the whole conversation. The role alternation rule is the most common source of 400 errors in lab — warn students explicitly before the lab.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The full request</p>
          <pre style={{ background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "14px", borderRadius: 8, lineHeight: 1.8, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace", margin: 0 }}>{`POST https://api.anthropic.com/v1/messages

Headers:
  x-api-key:          YOUR_KEY
  anthropic-version:  2023-06-01
  content-type:       application/json

Body:
{
  "model":      "claude-opus-4-5",
  "max_tokens": 1024,
  "stream":     true,
  "system":     "You are a helpful cooking assistant...",
  "messages": [
    {
      "role":    "user",
      "content": "What can I make with eggs and spinach?"
    },
    {
      "role":    "assistant",
      "content": "You could make a Florentine omelette..."
    },
    {
      "role":    "user",
      "content": "How long does it take?"
    }
  ]
}`}</pre>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>Field by field</p>
          {[
            { field: "model", color: PURPLE_LIGHT, fg: PURPLE_DARK, detail: '"claude-opus-4-5" is the current high-intelligence model. Use this for your labs. Haiku is faster/cheaper for production use cases that don\'t need maximum quality.' },
            { field: "max_tokens", color: BLUE_LIGHT, fg: BLUE, detail: "Hard ceiling on response length. 1024 ≈ 750 words. If the model hits this mid-sentence it stops — no error, just truncation. Size it for your use case." },
            { field: "stream", color: AMBER_LIGHT, fg: "#633806", detail: "Set to true to receive Server-Sent Events. The HTTP connection stays open and tokens stream as generated. Omit to receive a single buffered response." },
            { field: "system", color: GREEN_LIGHT, fg: GREEN, detail: "A persistent instruction that shapes the model's persona for the whole conversation. Not part of messages. Never alternates. Think: the brief you give a contractor before the job starts." },
            { field: "messages", color: TEAL_LIGHT, fg: TEAL_DARK, detail: "Full conversation history. Roles must strictly alternate: user → assistant → user → assistant. Last message must always be 'user'. Send the entire history every request." },
          ].map(f => (
            <div key={f.field} style={{ background: f.color, borderRadius: 8, padding: "9px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: f.fg, margin: "0 0 2px", fontFamily: "monospace" }}>{f.field}</p>
              <p style={{ fontSize: 11, color: f.fg, margin: 0, lineHeight: 1.5, opacity: 0.9 }}>{f.detail}</p>
            </div>
          ))}
          <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "9px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", margin: "0 0 2px" }}>⚠️ Role alternation is strict</p>
            <p style={{ fontSize: 11, color: "#A32D2D", margin: 0, lineHeight: 1.5 }}>Two consecutive "user" messages → HTTP 400. Always append the assistant response before accepting the next user input. This is the most common bug in lab code every week.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 7: SSE parsing
  () => (
    <Shell tag="Concept" timer="8" title="Server-Sent Events — reading the wire format" subtitle="What actually arrives over the HTTP connection before any parsing library" notes="Show the raw SSE bytes first, before any code. Students who see the raw format understand what they are parsing; students who see only the abstraction will be helpless when debugging. The two rules (strip 'data: ', stop at [DONE]) are genuinely all they need. Walk through the pseudocode line by line, narrating what accumulated contains after each step.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Raw bytes on the wire</p>
          <pre style={{ background: "#1e1e2e", color: "#cdd6f4", fontSize: 10.5, padding: "14px", borderRadius: 8, lineHeight: 1.9, margin: 0, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`event: message_start
data: {"type":"message_start","message":{"id":"msg_01..."}}

event: content_block_start
data: {"type":"content_block_start","index":0}

event: content_block_delta
data: {"type":"content_block_delta","index":0,
       "delta":{"type":"text_delta","text":"The"}}

event: content_block_delta
data: {"type":"content_block_delta","index":0,
       "delta":{"type":"text_delta","text":" best"}}

event: content_block_delta
data: {"type":"content_block_delta","index":0,
       "delta":{"type":"text_delta","text":" omel"}}

event: content_block_delta
data: {"type":"content_block_delta","index":0,
       "delta":{"type":"text_delta","text":"ette"}}

event: message_stop
data: {"type":"message_stop"}

data: [DONE]`}</pre>
          <Callout color={GREEN_LIGHT} fg={GREEN} label="Note on token fragmentation">
            Notice "omelette" arrived as two separate deltas: "omel" + "ette". Always append to your accumulator — never replace. The complete word assembles across multiple events.
          </Callout>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>How to parse it</p>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: TEAL_DARK, margin: "0 0 5px" }}>The two rules</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: "0 0 4px", lineHeight: 1.5 }}><strong>1.</strong> Every content line starts with <code style={{ background: "rgba(0,0,0,0.1)", borderRadius: 3, padding: "1px 5px", fontFamily: "monospace" }}>data: </code> — strip those 6 characters to get the raw JSON. Lines starting with <code style={{ background: "rgba(0,0,0,0.1)", borderRadius: 3, padding: "1px 5px", fontFamily: "monospace" }}>event:</code> or blank lines: skip entirely.</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}><strong>2.</strong> Parse the JSON. If <code style={{ fontFamily: "monospace", fontSize: 10 }}>type == "content_block_delta"</code>, extract <code style={{ fontFamily: "monospace", fontSize: 10 }}>delta.text</code> and append to your accumulator. When payload is <code style={{ fontFamily: "monospace", fontSize: 10 }}>[DONE]</code>, stop.</p>
          </div>
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, margin: "0 0 6px" }}>Pseudocode</p>
            <pre style={{ fontSize: 10, color: BLUE, margin: 0, fontFamily: "monospace", lineHeight: 1.85, background: "rgba(0,0,0,0.06)", padding: "8px 10px", borderRadius: 4, whiteSpace: "pre-wrap" }}>{`accumulated = ""

for each line in stream:
  if line starts with "data: ":
    payload = line.drop("data: ")
    if payload == "[DONE]": break
    json = JSON.parse(payload)
    if json.type == "content_block_delta":
      accumulated += json.delta.text
      updateUI(accumulated)  // ← main thread!`}</pre>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#633806", margin: "0 0 3px" }}>⚠️ Thread safety — always</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>The stream arrives on a background thread. Every UI update must be dispatched to the main thread. On Android: <code style={{ fontFamily: "monospace", fontSize: 10 }}>Dispatchers.Main</code> via StateFlow. On iOS: <code style={{ fontFamily: "monospace", fontSize: 10 }}>@MainActor</code> on the ViewModel. Forget this → crashes or silent UI freezes.</p>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 3px" }}>What about the other event types?</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}><code style={{ fontFamily: "monospace", fontSize: 10 }}>message_start</code> gives you the message ID and metadata. <code style={{ fontFamily: "monospace", fontSize: 10 }}>message_delta</code> gives you the final token count and stop reason. Both are useful for advanced use cases but not required for basic chat. Ignore them safely.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 8: History + security
  () => (
    <Shell tag="Concept" timer="5" title="Conversation history and API key security" subtitle="Two rules — get them right from the start" notes="History management reinforces slide 6 with concrete code. The API key section must be non-negotiable — tell the story of GitHub bots scanning for leaked keys in real time. Students who commit their key to a public repo will have it used within minutes. This has happened to CodePath students in previous cohorts.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Managing conversation history</p>
          <p style={{ fontSize: 11, color: MUTED, margin: "0 0 8px", lineHeight: 1.5 }}>The model is stateless. You maintain history in the ViewModel and send it with every request. Three rules:</p>
          <pre style={{ background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: 8, lineHeight: 1.8, margin: "0 0 10px", fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`// 1. Append user message BEFORE calling API
history.add(Message("user", userText))

// 2. Call API with full history
repo.streamMessage(history)

// 3. Append assistant reply AFTER stream ends
history.add(Message("assistant", accumulated))`}</pre>
          {[
            { warn: "Don't call API before appending the user message", why: "The model responds without seeing the latest turn — contextually wrong." },
            { warn: "Don't append assistant message until stream is done", why: "Appending a partial response creates malformed conversation state." },
            { warn: "Lock the input while streaming is in progress", why: "Two concurrent streams into the same history cause race conditions." },
          ].map(w => (
            <div key={w.warn} style={{ background: "#FCEBEB", borderRadius: 6, padding: "7px 10px", marginBottom: 5 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", margin: "0 0 1px" }}>❌ {w.warn}</p>
              <p style={{ fontSize: 10, color: "#A32D2D", margin: 0, lineHeight: 1.4 }}>Why: {w.why}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>Secure API key storage</p>
          <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", margin: "0 0 4px" }}>❌ Never hardcode your key</p>
            <pre style={{ fontSize: 10.5, color: "#ff6b6b", margin: 0, fontFamily: "monospace", background: "#1e1e2e", padding: "8px 10px", borderRadius: 4 }}>{`val apiKey = "sk-ant-api03-REAL_KEY_HERE"
// GitHub bots scan public repos in real time.
// Your key will be used within minutes.`}</pre>
          </div>
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, margin: "0 0 4px" }}>✅ Android: local.properties</p>
            <pre style={{ fontSize: 10, color: BLUE, margin: 0, fontFamily: "monospace", lineHeight: 1.7, background: "rgba(0,0,0,0.06)", padding: "8px 10px", borderRadius: 4, whiteSpace: "pre-wrap" }}>{`# local.properties  ← in .gitignore
CLAUDE_API_KEY=sk-ant-api03-...

# build.gradle.kts
buildConfigField("String", "CLAUDE_API_KEY",
    "\"\${properties["CLAUDE_API_KEY"]}\"")

# Usage
BuildConfig.CLAUDE_API_KEY`}</pre>
          </div>
          <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: GREEN, margin: "0 0 4px" }}>✅ iOS: Secrets.plist</p>
            <pre style={{ fontSize: 10, color: GREEN, margin: 0, fontFamily: "monospace", lineHeight: 1.7, background: "rgba(0,0,0,0.06)", padding: "8px 10px", borderRadius: 4, whiteSpace: "pre-wrap" }}>{`<!-- Secrets.plist  ← in .gitignore -->
<key>CLAUDE_API_KEY</key>
<string>sk-ant-api03-...</string>

// Usage
let dict = NSDictionary(contentsOfFile:
    Bundle.main.path(forResource:"Secrets", ofType:"plist")!)!
let apiKey = dict["CLAUDE_API_KEY"] as! String`}</pre>
          </div>
          <Info>{"Each team member generates their own key at console.anthropic.com and stores it in their local file. The key is never in version control — on any branch, ever."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 9: Android implementation
  () => (
    <Shell tag="Android" tagColor="blue" timer="18" title="Android: OkHttp + coroutines for streaming" subtitle="Four files — data model, repository, ViewModel, Compose UI" notes="Walk each file in order. The key insight on the repository: OkHttp's synchronous execute() + source.readUtf8Line() inside flowOn(IO) is simpler and more predictable than EventSource callbacks. The Flow<String> is the bridge between the blocking stream read and the coroutine world. Emphasise the guard at the top of sendMessage() — without it, rapid sends cause concurrent stream chaos.">
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <CodePane title="Message.kt — data model" accent={BLUE}>{`data class Message(val role: String, val content: String)

sealed class ChatUiState {
    object Idle    : ChatUiState()
    object Sending : ChatUiState()
    data class Streaming(val partial: String) : ChatUiState()
    data class Done(val fullText: String)     : ChatUiState()
    data class Error(
        val message: String,
        val retryable: Boolean = true
    ) : ChatUiState()
}`}</CodePane>
          <CodePane title="ClaudeRepository.kt" accent={BLUE}>{`class ClaudeRepository {
    private val client = OkHttpClient.Builder()
        .readTimeout(60, TimeUnit.SECONDS).build()

    fun streamMessage(
        history: List<Message>,
        systemPrompt: String = "You are a helpful assistant."
    ): Flow<String> = flow {
        val request = Request.Builder()
            .url("https://api.anthropic.com/v1/messages")
            .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
            .addHeader("anthropic-version", "2023-06-01")
            .addHeader("content-type", "application/json")
            .post(buildJsonBody(history, systemPrompt)
                .toRequestBody("application/json".toMediaType()))
            .build()

        client.newCall(request).execute().use { response ->
            if (!response.isSuccessful)
                throw IOException("API error \${response.code}")
            val source = response.body!!.source()
            while (!source.exhausted()) {
                val line = source.readUtf8Line() ?: break
                if (!line.startsWith("data: ")) continue
                val payload = line.removePrefix("data: ")
                if (payload == "[DONE]") break
                extractToken(payload)?.let { emit(it) }
            }
        }
    }.flowOn(Dispatchers.IO)

    // ← The helper students often forget to write
    private fun buildJsonBody(
        history: List<Message>,
        systemPrompt: String
    ): String {
        val messages = JSONArray().apply {
            history.forEach { msg ->
                put(JSONObject().apply {
                    put("role", msg.role)
                    put("content", msg.content)
                })
            }
        }
        return JSONObject().apply {
            put("model", "claude-opus-4-5")
            put("max_tokens", 1024)
            put("stream", true)
            put("system", systemPrompt)
            put("messages", messages)
        }.toString()
    }

    private fun extractToken(payload: String): String? = try {
        val j = JSONObject(payload)
        if (j.getString("type") == "content_block_delta")
            j.getJSONObject("delta").getString("text")
        else null
    } catch (e: Exception) { null }
}`}</CodePane>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <CodePane title="ChatViewModel.kt" accent={BLUE}>{`class ChatViewModel(
    private val repo: ClaudeRepository = ClaudeRepository()
) : ViewModel() {
    private val _history = mutableStateListOf<Message>()
    val history: List<Message> get() = _history

    private val _uiState = MutableStateFlow<ChatUiState>(ChatUiState.Idle)
    val uiState = _uiState.asStateFlow()

    fun sendMessage(userText: String) {
        if (_uiState.value !is ChatUiState.Idle) return // guard against double-send
        _history.add(Message("user", userText))
        viewModelScope.launch {
            var accumulated = ""
            _uiState.value = ChatUiState.Sending
            repo.streamMessage(_history)
                .catch { e ->
                    _history.removeLastOrNull()
                    _uiState.value = ChatUiState.Error(e.message ?: "Unknown error")
                }
                .collect { token ->
                    accumulated += token
                    _uiState.value = ChatUiState.Streaming(accumulated)
                }
            if (_uiState.value is ChatUiState.Streaming) {
                _history.add(Message("assistant", accumulated))
                _uiState.value = ChatUiState.Idle
            }
        }
    }
}`}</CodePane>
          <CodePane title="ChatScreen.kt — Compose" accent={BLUE}>{`@Composable
fun ChatScreen(vm: ChatViewModel = viewModel()) {
    val uiState by vm.uiState.collectAsStateWithLifecycle()
    var input by remember { mutableStateOf("") }
    val listState = rememberLazyListState()
    val isIdle = uiState is ChatUiState.Idle

    LaunchedEffect(vm.history.size, uiState) {
        if (vm.history.isNotEmpty())
            listState.animateScrollToItem(
                listState.layoutInfo.totalItemsCount - 1)
    }
    Column(Modifier.fillMaxSize().imePadding()) {
        LazyColumn(Modifier.weight(1f), state = listState) {
            items(vm.history) { MessageBubble(it) }
            item {
                when (uiState) {
                    is ChatUiState.Sending   -> TypingIndicator()
                    is ChatUiState.Streaming ->
                        MessageBubble(Message("assistant",
                            (uiState as ChatUiState.Streaming).partial),
                            isStreaming = true)
                    is ChatUiState.Error     ->
                        ErrorBanner((uiState as ChatUiState.Error).message)
                    else -> {}
                }
            }
        }
        Row(Modifier.padding(8.dp)) {
            TextField(input, { input = it }, Modifier.weight(1f),
                enabled = isIdle,
                placeholder = { Text("Message...") })
            Button(
                onClick = { vm.sendMessage(input); input = "" },
                enabled = isIdle && input.isNotBlank()
            ) { Text("Send") }
        }
    }
}`}</CodePane>
        </div>
      </div>
    </Shell>
  ),

  // 10: iOS implementation
  () => (
    <Shell tag="iOS" tagColor="green" timer="17" title="iOS: URLSession AsyncBytes + AsyncSequence" subtitle="Native streaming — no third-party library needed" notes="iOS has a real advantage: URLSession.bytes returns AsyncBytes which plugs directly into Swift's for-await-in loop. Point out @MainActor on the ViewModel class — this is the iOS equivalent of Dispatchers.Main and prevents the 'Publishing changes from background threads' warning that trips up every student who forgets it. Also explain the AsyncThrowingStream wrapper — it's the bridge between a Task and a SwiftUI binding.">
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <CodePane title="Message.swift" accent={GREEN}>{`struct Message: Identifiable {
    let id = UUID()
    let role: String     // "user" or "assistant"
    var content: String
}

enum ChatState: Equatable {
    case idle
    case sending
    case streaming(partial: String)
    case done
    case error(message: String)

    var isIdle: Bool {
        switch self {
        case .idle, .done, .error: return true
        default: return false
        }
    }
}`}</CodePane>
          <CodePane title="ClaudeRepository.swift" accent={GREEN}>{`class ClaudeRepository {
    private let apiKey: String
    init() {
        let path = Bundle.main.path(forResource:"Secrets", ofType:"plist")!
        apiKey = NSDictionary(contentsOfFile: path)!["CLAUDE_API_KEY"] as! String
    }

    func streamMessage(
        history: [Message],
        systemPrompt: String = "You are a helpful assistant."
    ) -> AsyncThrowingStream<String, Error> {
        AsyncThrowingStream { continuation in
            Task {
                do {
                    var req = URLRequest(url: URL(string:
                        "https://api.anthropic.com/v1/messages")!)
                    req.httpMethod = "POST"
                    req.setValue(apiKey, forHTTPHeaderField: "x-api-key")
                    req.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
                    req.setValue("application/json", forHTTPHeaderField: "content-type")
                    req.httpBody = try buildBody(
                        history: history, systemPrompt: systemPrompt)

                    let (bytes, response) = try await URLSession.shared.bytes(for: req)
                    guard (response as? HTTPURLResponse)?.statusCode == 200
                    else { throw URLError(.badServerResponse) }

                    for try await line in bytes.lines {
                        guard line.hasPrefix("data: ") else { continue }
                        let payload = String(line.dropFirst(6))
                        if payload == "[DONE]" { break }
                        if let token = extractToken(from: payload) {
                            continuation.yield(token)
                        }
                    }
                    continuation.finish()
                } catch { continuation.finish(throwing: error) }
            }
        }
    }

    // ← The helper students often forget to write
    private func buildBody(history: [Message], systemPrompt: String) throws -> Data {
        let messages = history.map { ["role": $0.role, "content": $0.content] }
        let body: [String: Any] = [
            "model": "claude-opus-4-5",
            "max_tokens": 1024,
            "stream": true,
            "system": systemPrompt,
            "messages": messages
        ]
        return try JSONSerialization.data(withJSONObject: body)
    }

    private func extractToken(from payload: String) -> String? {
        guard let data = payload.data(using: .utf8),
              let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
              json["type"] as? String == "content_block_delta",
              let delta = json["delta"] as? [String: Any]
        else { return nil }
        return delta["text"] as? String
    }
}`}</CodePane>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <CodePane title="ChatViewModel.swift" accent={GREEN}>{`@MainActor  // ← ALL @Published mutations happen on main thread
class ChatViewModel: ObservableObject {
    @Published var history: [Message] = []
    @Published var chatState: ChatState = .idle

    private let repo = ClaudeRepository()

    func sendMessage(_ text: String) {
        guard chatState.isIdle else { return }
        history.append(Message(role: "user", content: text))
        Task {
            var accumulated = ""
            chatState = .sending
            do {
                for try await token in repo.streamMessage(history: history) {
                    accumulated += token
                    chatState = .streaming(partial: accumulated)
                }
                history.append(Message(role: "assistant", content: accumulated))
                chatState = .idle
            } catch {
                history.removeLast()
                chatState = .error(message: error.localizedDescription)
            }
        }
    }
}`}</CodePane>
          <CodePane title="ChatView.swift — SwiftUI" accent={GREEN}>{`struct ChatView: View {
    @StateObject private var vm = ChatViewModel()
    @State private var input = ""

    var body: some View {
        VStack(spacing: 0) {
            ScrollViewReader { proxy in
                ScrollView {
                    LazyVStack(alignment: .leading) {
                        ForEach(vm.history) { msg in
                            MessageBubble(message: msg).id(msg.id)
                        }
                        switch vm.chatState {
                        case .sending:
                            TypingIndicator()
                        case .streaming(let partial):
                            MessageBubble(
                                message: Message(role:"assistant", content: partial),
                                isStreaming: true)
                            .id("streaming")
                            .onChange(of: partial) { _ in
                                withAnimation {
                                    proxy.scrollTo("streaming", anchor: .bottom)
                                }
                            }
                        case .error(let msg):
                            ErrorBanner(message: msg) { vm.sendMessage(input) }
                        default: EmptyView()
                        }
                    }.padding()
                }
            }
            HStack {
                TextField("Message...", text: $input)
                    .textFieldStyle(.roundedBorder)
                    .disabled(!vm.chatState.isIdle)
                Button("Send") { vm.sendMessage(input); input = "" }
                    .disabled(!vm.chatState.isIdle || input.isEmpty)
            }.padding()
        }
    }
}`}</CodePane>
        </div>
      </div>
    </Shell>
  ),

  // 11: Platform comparison
  () => (
    <Shell tag="Comparison" timer="5" title="Android vs iOS — the same architecture, different tools" subtitle="Repository → ViewModel → View on both platforms. Only the syntax changes." notes="This slide exists so students on each track understand what their counterparts are doing. The conceptual structure is identical — only the concurrency primitives differ. The most important parallel to drive home: Flow on Android and AsyncThrowingStream on iOS are both 'typed sequences of values over time' — same concept, different type system. Spend 2 minutes here and move on.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
            {[
              { p: "🤖 Android", bg: BLUE_LIGHT, fg: BLUE, rows: [
                ["HTTP client",    "OkHttp — execute() + source.readUtf8Line()"],
                ["Concurrency",    "Kotlin coroutines — viewModelScope.launch {}"],
                ["Stream type",    "Flow<String> — cold, flowOn(IO)"],
                ["State holder",   "MutableStateFlow<ChatUiState>"],
                ["UI observes",    "collectAsStateWithLifecycle()"],
                ["Main thread",    "Dispatchers.Main (via StateFlow)"],
                ["Key file",       "local.properties + build.gradle.kts"],
              ]},
              { p: "🍎 iOS", bg: GREEN_LIGHT, fg: GREEN, rows: [
                ["HTTP client",    "URLSession.shared.bytes(for:)"],
                ["Concurrency",    "Swift async/await — Task { for try await ... }"],
                ["Stream type",    "AsyncThrowingStream<String, Error>"],
                ["State holder",   "@Published var chatState: ChatState"],
                ["UI observes",    "@StateObject / @ObservedObject"],
                ["Main thread",    "@MainActor on ViewModel class"],
                ["Key file",       "Secrets.plist (excluded from .gitignore)"],
              ]},
            ].map(col => (
              <div key={col.p} style={{ background: col.bg, borderRadius: 10, padding: "12px 14px" }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: col.fg, margin: "0 0 10px" }}>{col.p}</p>
                {col.rows.map(([label, val]) => (
                  <div key={label} style={{ padding: "4px 0", borderBottom: `0.5px solid ${col.fg}18` }}>
                    <span style={{ fontSize: 9, color: col.fg, opacity: 0.6, textTransform: "uppercase", letterSpacing: ".04em", display: "block" }}>{label}</span>
                    <span style={{ fontSize: 11, color: col.fg, fontFamily: "monospace", fontWeight: 500 }}>{val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>The MVVM layer contract — identical on both platforms</p>
          {[
            { layer: "Repository", color: PURPLE_LIGHT, fg: PURPLE_DARK,
              resp: "Owns the HTTP call. Builds the JSON request body. Parses SSE lines and extracts delta.text. Returns a typed stream. Has no knowledge of UI, ViewModel, or state.",
              android: "ClaudeRepository — fun streamMessage(): Flow<String>",
              ios: "ClaudeRepository — func streamMessage() -> AsyncThrowingStream<String, Error>" },
            { layer: "ViewModel", color: AMBER_LIGHT, fg: "#633806",
              resp: "Owns conversation history. Owns uiState. Calls repository on send. Accumulates tokens. Updates state. Handles errors. Provides cancelStream().",
              android: "ChatViewModel : ViewModel() — MutableStateFlow, viewModelScope.launch",
              ios: "@MainActor class ChatViewModel : ObservableObject — Task, @Published" },
            { layer: "View", color: TEAL_LIGHT, fg: TEAL_DARK,
              resp: "Observes uiState. Renders each state branch (Idle, Sending, Streaming, Error). Forwards user actions (send, cancel) to ViewModel. Never calls the repository directly.",
              android: "@Composable ChatScreen — collectAsStateWithLifecycle(), when (uiState)",
              ios: "struct ChatView — switch vm.chatState { }" },
          ].map(l => (
            <div key={l.layer} style={{ background: l.color, borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: l.fg, margin: "0 0 4px" }}>{l.layer}</p>
              <p style={{ fontSize: 11, color: l.fg, margin: "0 0 6px", lineHeight: 1.5 }}>{l.resp}</p>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: l.fg, opacity: 0.6, textTransform: "uppercase" }}>Android:</span>
                <span style={{ fontSize: 10, color: l.fg, fontFamily: "monospace" }}>{l.android}</span>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: l.fg, opacity: 0.6, textTransform: "uppercase" }}>iOS:</span>
                <span style={{ fontSize: 10, color: l.fg, fontFamily: "monospace" }}>{l.ios}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 12: Common bugs
  () => (
    <Shell tag="Debugging" tagColor="amber" timer="5" title="Top 6 bugs — and how to diagnose each one" subtitle="Know these now. Save 20 minutes of frustrated debugging in the lab." notes="Walk through each bug at 1 minute each — symptom first, then cause, then fix. Bug #1 (manifest permission) bites every Android student every cohort without fail. Bug #3 (role alternation 400) is the most confusing because the error message gives no indication of what went wrong — emphasise logging the messages array. Bug #5 (@MainActor) starts as a warning and becomes a crash — teach students never to suppress it.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[
          {
            num: "01", platform: "Android", color: BLUE_LIGHT, fg: BLUE,
            symptom: "App crashes immediately on send with NetworkOnMainThreadException",
            cause: "Network call is happening on the main thread. Either the OkHttp call is not inside flowOn(Dispatchers.IO), or the INTERNET permission is missing from AndroidManifest.xml which causes the OS to block the call.",
            fix: "Add <uses-permission android:name=\"android.permission.INTERNET\"/> to AndroidManifest.xml. Confirm your repository's flow builder ends with .flowOn(Dispatchers.IO).",
          },
          {
            num: "02", platform: "iOS", color: GREEN_LIGHT, fg: GREEN,
            symptom: "App builds and runs, but API key reads as nil — crash on launch or first send",
            cause: "Secrets.plist was added to the Xcode project navigator (visible in file tree) but not added to the app target's build phase. Xcode doesn't automatically include new files in targets.",
            fix: "Click Secrets.plist in the project navigator → open File Inspector (right panel) → under 'Target Membership', check the box next to your app target name.",
          },
          {
            num: "03", platform: "Both", color: PURPLE_LIGHT, fg: PURPLE_DARK,
            symptom: "HTTP 400 response with no useful body — first or second message only",
            cause: "Role alternation violation in the messages array. Sending two consecutive 'user' messages (the new one before appending the previous assistant reply), or starting with an empty history and skipping the initial user message.",
            fix: "Before every API call, log the full messages array. Count roles: must be user → assistant → user → ... Last entry must be role: 'user'. Check that history append order matches slide 8.",
          },
          {
            num: "04", platform: "Both", color: AMBER_LIGHT, fg: "#633806",
            symptom: "Response streams but displayed text jumps backward or resets mid-stream",
            cause: "The token accumulation uses assignment (accumulated = token) instead of appending (accumulated += token). Each token overwrites the previous partial text instead of extending it.",
            fix: "Find the line inside your collect {} or for-await loop where you update the accumulator. Change = token to += token. Every delta is a fragment — the full text assembles across dozens of events.",
          },
          {
            num: "05", platform: "iOS", color: "#FCEBEB", fg: "#A32D2D",
            symptom: "Xcode warning: 'Publishing changes from background threads is not allowed; make sure to publish values from the main thread'",
            cause: "The ViewModel's @Published properties are being mutated from inside a Task without @MainActor. The warning is easy to ignore, but it will eventually cause SwiftUI to drop UI updates or crash.",
            fix: "Add @MainActor to the ViewModel class declaration — not just to individual methods. This guarantees all property mutations happen on the main thread automatically.",
          },
          {
            num: "06", platform: "Android", color: TEAL_LIGHT, fg: TEAL_DARK,
            symptom: "Log confirms tokens are emitting, but the chat UI never updates",
            cause: "The StateFlow is emitting correctly, but the composable observing it with collectAsStateWithLifecycle() is not in the active composition — often because it is hidden behind a conditional or inside a LazyColumn item that hasn't rendered yet.",
            fix: "Add a log inside collect { } to confirm emission. If the log fires but the screen doesn't update: check that the composable reading uiState is unconditionally in the view tree. Verify the ViewModel is being shared — not instantiated twice.",
          },
        ].map(bug => (
          <div key={bug.num} style={{ background: bug.color, borderRadius: 9, padding: "11px 13px" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 5 }}>
              <span style={{ background: bug.fg, color: "#fff", fontSize: 9, fontWeight: 700, borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{bug.num}</span>
              <span style={{ fontSize: 9, fontWeight: 700, color: bug.fg, textTransform: "uppercase", letterSpacing: ".04em", opacity: 0.7 }}>{bug.platform}</span>
            </div>
            <p style={{ fontSize: 11, fontWeight: 700, color: bug.fg, margin: "0 0 4px", lineHeight: 1.4 }}>🔴 {bug.symptom}</p>
            <p style={{ fontSize: 10.5, color: bug.fg, margin: "0 0 4px", lineHeight: 1.45, opacity: 0.85 }}>Cause: {bug.cause}</p>
            <p style={{ fontSize: 10.5, color: bug.fg, margin: 0, lineHeight: 1.45, fontWeight: 600 }}>Fix: {bug.fix}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 12: Lab intro
  () => (
    <Shell tag="Lab intro" timer="5" title="Today's lab — build a streaming chat screen" subtitle="55 minutes in breakout rooms" notes="Walk through each step and checklist item before breakout rooms. Emphasise the order: API key setup first — students who start with the UI and work backwards get stuck. The stretch goal (system prompt persona) is achievable in 10 extra minutes and dramatically improves the demo quality.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Steps — in this order</p>
          {[
            { n: "1", s: "Get API key from console.anthropic.com (link in Resources tab)" },
            { n: "2", s: "Store securely — local.properties (Android) or Secrets.plist (iOS)" },
            { n: "3", s: "Android: add OkHttp to build.gradle.kts + INTERNET permission" },
            { n: "4", s: "Create ClaudeRepository with streamMessage() function" },
            { n: "5", s: "Create ChatViewModel — history list, ChatUiState, sendMessage()" },
            { n: "6", s: "Build chat screen — message list + input row" },
            { n: "7", s: "Wire streaming state to a bubble that updates in real time" },
            { n: "8", s: "Test: send a message and watch words appear one by one" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "flex-start" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: PURPLE, minWidth: 18, flexShrink: 0, marginTop: 1 }}>{s.n}.</span>
              <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{s.s}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: BLUE, margin: "0 0 6px" }}>🤖 Android checklist</p>
            {[
              "INTERNET permission in AndroidManifest.xml",
              "CLAUDE_API_KEY in local.properties",
              "buildConfigField in build.gradle.kts",
              "OkHttp 4.12.0 dependency added",
              "Flow<String> from repository",
              "Sealed ChatUiState in ViewModel",
              "collectAsStateWithLifecycle() in Composable",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "3px 0" }}>
                <span style={{ color: BLUE, fontSize: 11, flexShrink: 0 }}>□</span>
                <span style={{ fontSize: 11, color: BLUE }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: GREEN, margin: "0 0 6px" }}>🍎 iOS checklist</p>
            {[
              "Secrets.plist created AND added to app target",
              "AsyncThrowingStream from repository",
              "@MainActor on ViewModel class",
              "ChatState enum with streaming(partial:) case",
              "bytes.lines iteration in repository",
              "ScrollViewReader with auto-scroll",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "3px 0" }}>
                <span style={{ color: GREEN, fontSize: 11, flexShrink: 0 }}>□</span>
                <span style={{ fontSize: 11, color: GREEN }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#F9F0FF", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#6B21A8", margin: "0 0 4px" }}>✨ Stretch goal</p>
            <p style={{ fontSize: 11, color: "#6B21A8", margin: 0, lineHeight: 1.5 }}>Add a system prompt that gives Claude a persona — a cooking assistant, a Socratic tutor, or a sarcastic tech support agent. Let the user choose from a dropdown at runtime and observe how the entire tone changes with the same questions.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 13: Wrap-up
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 7 · Session 1 complete</p>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: "#fff", margin: "0 0 8px" }}>Your app just got a brain.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>You called a real LLM from a mobile app and streamed the response in real time. That is not a demo — that is a production technique.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned today</p>
            {[
              "LLM APIs differ from REST in 3 fundamental ways",
              "Tokens — cost, latency, context window, fragmentation",
              "The Messages API — model, max_tokens, stream, system, messages",
              "SSE wire format — two parsing rules, pseudocode",
              "Conversation history — you are the model's memory",
              "API key security — local.properties / Secrets.plist",
              "Android: OkHttp + Flow + ViewModel + Compose",
              "iOS: URLSession AsyncBytes + AsyncThrowingStream + SwiftUI",
              "The 6 most common bugs and how to fix each",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: AMBER, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Session 2 — the polish layer</p>
            {[
              "The complete AI UI state machine — all 6 states",
              "Typing indicators — the three-dot animation",
              "Partial render states — blinking cursor + deferred Markdown",
              "Error taxonomy — 6 error types, what to show for each",
              "Cancellation — stop button + coroutine/Task cancellation",
              "Input locking, auto-scroll, accessibility",
              "Lab: add the full polish layer to today's chat screen",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.15)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.9)", margin: "0 0 3px", fontWeight: 600 }}>📋 Capstone Milestone 1</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Repo, MVVM scaffold, one screen rendering data — due end of this week.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "8px 14px", flex: 1 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.9)", margin: 0 }}>✏️ Please fill out the <strong>session survey</strong> before you leave — 2 minutes.</p>
        </div>
      </div>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 7 · Session 1 · {slides.length} slides · 2 hrs</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>Integrating a cloud LLM API</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setCur(c => Math.max(0, c - 1))} disabled={cur === 0} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === 0 ? GRAY : PURPLE_LIGHT, color: cur === 0 ? MUTED : PURPLE, cursor: cur === 0 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>← Prev</button>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 64, textAlign: "center" }}>{cur + 1} / {slides.length}</span>
          <button onClick={() => setCur(c => Math.min(slides.length - 1, c + 1))} disabled={cur === slides.length - 1} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === slides.length - 1 ? GRAY : PURPLE, color: cur === slides.length - 1 ? MUTED : "#fff", cursor: cur === slides.length - 1 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>Next →</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: 26, height: 26, borderRadius: 5, border: `1.5px solid ${i === cur ? PURPLE : "#e5e7eb"}`, background: i === cur ? PURPLE : "#fff", color: i === cur ? "#fff" : MUTED, fontSize: 10, fontWeight: 500, cursor: "pointer" }}>{i + 1}</button>
        ))}
      </div>
      {slides[cur]()}
    </div>
  );
}
