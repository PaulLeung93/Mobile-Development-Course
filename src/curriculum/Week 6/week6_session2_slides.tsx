import { useState } from "react";

const PURPLE = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT = "#EEEDFE";
const TEAL = "#1D9E75";
const TEAL_DARK = "#0F6E56";
const TEAL_LIGHT = "#E1F5EE";
const AMBER = "#EF9F27";
const AMBER_LIGHT = "#FAEEDA";
const CORAL = "#993C1D";
const CORAL_LIGHT = "#FAECE7";
const BLUE = "#185FA5";
const BLUE_LIGHT = "#E6F1FB";
const GRAY = "#F5F5F7";
const TEXT = "#1a1a2e";
const MUTED = "#6b7280";

const Tag = ({ children, color = "purple" }) => {
  const map = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806" },
    coral:  { bg: CORAL_LIGHT,  fg: CORAL },
    blue:   { bg: BLUE_LIGHT,   fg: BLUE },
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
        <Tag color="purple">Week 6 · S2</Tag>
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
    <div style={{ background: `linear-gradient(135deg, ${CORAL} 0%, ${AMBER} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 600, background: "rgba(255,255,255,0.2)", color: "#fff", padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>AI tools</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: "rgba(255,255,255,0.2)", color: "#fff", padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>MCP</span>
        </div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 6 · Session 2</p>
        <h1 style={{ fontSize: 30, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.2 }}>AI-assisted development</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", margin: "0 0 28px" }}>Claude · Prompting for mobile code · MCP · Google Stitch</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "Why AI tools change how developers work",
            "The prompting mindset — context is everything",
            "Scaffolding and refactoring patterns",
            "Debugging and architecture review patterns",
            "What good prompting looks like — before and after",
            "Live demo — prompting for a ViewModel",
            "Claude as a thinking partner, not an oracle",
            "Red flags — staying in the driver's seat",
            "What MCP is and why it's a leap forward",
            "Google Stitch MCP — generating UI from a description",
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 14, flexShrink: 0, marginTop: 1 }}>▸</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", lineHeight: 1.4 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: "24px 0 0" }}>Mobile development in the age of AI · CodePath</p>
    </div>
  ),

  // 2: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 2 hours" notes="Session 2 has a different energy to Session 1 — more exploratory, more demo-heavy. The MCP section should feel exciting rather than instructional. Students don't need to implement MCP today — they need to see what is possible. The lab is where the practical work happens.">
      {[
        { time: "0:00–0:05",  label: "Hook",                         desc: "How AI tools actually change your day", section: null },
        { time: "0:05–0:15",  label: "The prompting mindset",         desc: "Why context is everything — the three-part prompt structure", section: null },
        { time: "0:15–0:25",  label: "Scaffolding + refactoring",     desc: "Prompting patterns for generating and restructuring code", section: null },
        { time: "0:25–0:35",  label: "Debugging + architecture",      desc: "Prompting patterns for diagnosing bugs and reviewing design", section: null },
        { time: "0:35–0:43",  label: "What good looks like",          desc: "Before and after — a full prompting exchange side by side", section: null },
        { time: "0:43–0:53",  label: "Live demo",                     desc: "Instructor prompts Claude to scaffold a ViewModel from scratch", section: "demo" },
        { time: "0:53–1:00",  label: "Claude as a thinking partner",  desc: "The right mental model for working with AI", section: null },
        { time: "1:00–1:07",  label: "Red flags",                     desc: "Staying in the driver's seat — when AI output is dangerous", section: null },
        { time: "1:07–1:17",  label: "What is MCP",                   desc: "The concept and why it changes what AI tools can do", section: "mcp" },
        { time: "1:17–1:27",  label: "Google Stitch MCP — demo",      desc: "Generating a full UI from a natural language description", section: "mcp" },
        { time: "1:27–1:32",  label: "Lab intro",                     desc: "Scaffold your capstone with Claude", section: null },
        { time: "1:32–2:25",  label: "Lab — breakout rooms",          desc: "Use Claude to scaffold capstone boilerplate", section: "lab" },
        { time: "2:25–2:30",  label: "Wrap-up",                       desc: "Capstone M1 check-in + Week 7 preview", section: "wrapup" },
      ].map(r => (
        <div key={r.time} style={{
          display: "flex", gap: 12, padding: "7px 0",
          borderBottom: `0.5px solid ${GRAY}`,
          background: r.section === "demo" ? AMBER_LIGHT : r.section === "mcp" ? CORAL_LIGHT : r.section === "lab" ? TEAL_LIGHT : r.section === "wrapup" ? BLUE_LIGHT : "transparent",
          borderRadius: r.section ? 6 : 0, paddingLeft: r.section ? 8 : 0, marginLeft: r.section ? -8 : 0
        }}>
          <span style={{ fontSize: 11, minWidth: 90, flexShrink: 0, fontWeight: r.section ? 600 : 400, color: r.section === "demo" ? "#633806" : r.section === "mcp" ? CORAL : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? BLUE : MUTED }}>{r.time}</span>
          <span style={{ fontSize: 11, fontWeight: 600, minWidth: 170, flexShrink: 0, color: r.section === "demo" ? "#633806" : r.section === "mcp" ? CORAL : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? BLUE : PURPLE }}>{r.label}</span>
          <span style={{ fontSize: 11, color: r.section === "demo" ? "#633806" : r.section === "mcp" ? CORAL : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? BLUE : TEXT }}>{r.desc}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: 14, marginTop: 10, flexWrap: "wrap" }}>
        {[{ color: AMBER, label: "Live demo" }, { color: CORAL, label: "MCP" }, { color: TEAL, label: "Lab" }, { color: BLUE, label: "Wrap-up" }].map(l => (
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
    <Shell tag="Hook" timer="5" title="How AI tools actually change your day" subtitle="Not autocomplete — a different way of working" notes="Resist opening with a demo. Open with the workflow shift first — students who understand the mindset change will get dramatically more value from AI tools than students who treat them as smarter autocomplete. The three real scenarios should feel familiar — every developer hits these weekly.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Two ways to think about AI tools</p>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: MUTED, margin: "0 0 4px" }}>Autocomplete on steroids</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>Tab to accept suggestions. Speeds up typing. Still requires you to know exactly what to write. Limited leverage over how fast you can move.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>A thinking partner with full context</p>
            <p style={{ fontSize: 12, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>You describe the problem, your constraints, and your architecture. It drafts a solution, explains tradeoffs, flags issues. You evaluate and integrate. Fundamentally different leverage.</p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>How it changes three real scenarios</p>
          {[
            { scenario: "Unfamiliar API", before: "Read docs for 30 min, try 3 things, search Stack Overflow, give up and use a library", after: "Describe what you want, paste the relevant API, get a working example tailored to your pattern in 30 seconds" },
            { scenario: "Architecture decision", before: "Google 'should I use X or Y', read five contradictory blog posts, pick arbitrarily", after: "Describe your specific constraints and tradeoffs — get a recommendation with reasoning you can evaluate" },
            { scenario: "Mysterious bug", before: "Add print statements for 20 minutes, ask a friend, open a Stack Overflow question", after: "Paste the error + surrounding code + expected behaviour — usually diagnosed in one exchange" },
          ].map(s => (
            <div key={s.scenario} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>{s.scenario}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: "0 0 3px", lineHeight: 1.4 }}>Before: {s.before}</p>
              <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.4 }}>After: {s.after}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 4: The prompting mindset
  () => (
    <Shell tag="Prompting" timer="6" title="The prompting mindset" subtitle="Context is everything — vague in, vague out" notes="This is the highest-leverage slide in the session for students' day-to-day. Most students who feel like AI tools 'don't work' are giving them no context. Walk through the three dimensions slowly — role, problem, constraint — and then read the two example prompts out loud. The difference in quality of output between them is dramatic and immediate.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>A good prompt has three things</p>
          {[
            { label: "1. Role and context", desc: "Who you are, what platform you are on, and what pattern you are already using.", example: "I'm building a Kotlin Android app using Jetpack Compose, MVVM, and Room." },
            { label: "2. The specific problem", desc: "What you are trying to do — including what you have already tried and what didn't work.", example: "I want to show a loading spinner while data fetches, then a list when it succeeds, then an error banner if it fails." },
            { label: "3. Constraints", desc: "What you cannot use, what must stay the same, or what style you want the answer in.", example: "Use the sealed UiState pattern I showed you. Don't use a third-party library for the loading state." },
          ].map(p => (
            <div key={p.label} style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>{p.label}</p>
              <p style={{ fontSize: 11, color: PURPLE_DARK, margin: "0 0 5px", lineHeight: 1.4, opacity: 0.85 }}>{p.desc}</p>
              <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, fontStyle: "italic", opacity: 0.7 }}>e.g. "{p.example}"</p>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>The same request — two prompts</p>
          <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: "#A32D2D", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Vague prompt</p>
            <p style={{ fontSize: 12, color: "#791F1F", margin: "0 0 8px", fontStyle: "italic" }}>"Write me a ViewModel"</p>
            <p style={{ fontSize: 11, color: "#A32D2D", margin: 0, lineHeight: 1.5 }}>Output: a generic ViewModel with no connection to your architecture, your data shape, or your patterns. You'll spend 10 minutes adapting it — if it's usable at all.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: TEAL_DARK, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Specific prompt</p>
            <p style={{ fontSize: 12, color: TEAL_DARK, margin: "0 0 8px", fontStyle: "italic" }}>"I'm building a Kotlin Android app with Jetpack Compose and MVVM. Write a MovieViewModel that fetches a list of Movie objects from a MovieRepository, exposes a sealed UiState with Loading, Success(movies), and Error(message) states via StateFlow, and has an onFavouriteTapped(movie) function that calls repository.toggleFavourite()."</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Output: code you can drop straight into your project with minimal changes. The architecture, naming, and patterns match what you already have.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 5: Scaffolding and refactoring patterns
  () => (
    <Shell tag="Prompting patterns" timer="8" title="Patterns — scaffolding and refactoring" subtitle="Getting useful code out of Claude from the start" notes="Walk through each pattern by reading the prompt out loud. Students should be able to copy these directly into a Claude conversation. For each one, point out the specific context clues that make it work — the platform, the architecture, the data shape, the constraint. Emphasise that these are starting points — the student still reads, understands, and integrates the output.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[
          {
            label: "Scaffold from architecture",
            color: PURPLE_LIGHT, fg: PURPLE_DARK,
            prompt: `I'm building a [Kotlin/Swift] [Android/iOS] app with MVVM, [Room/SwiftData], and [Retrofit/URLSession]. Generate: (1) a [Entity] data class with fields [list them], (2) a [Entity]ViewModel with Loading/Success/Error UiState exposed via StateFlow/@Published, a load function that calls the repository, and a toggle function. (3) a [Entity]Repository with a refresh() function and a Flow/@Query for live updates.`,
            why: "Gets a complete, architecture-consistent starting point in one prompt rather than three disconnected snippets.",
          },
          {
            label: "Scaffold a new screen",
            color: TEAL_LIGHT, fg: TEAL_DARK,
            prompt: `I'm adding a [FeatureName] screen to my [Android/iOS] app. It shows [describe the content]. The data comes from [repository/API]. Using [Compose/SwiftUI] and MVVM. Generate the View and ViewModel. The View should observe the ViewModel's uiState and render Loading, Success, and Error branches. Match the naming conventions in this existing ViewModel: [paste one you already have].`,
            why: "The 'match naming conventions in this existing ViewModel' instruction is powerful — it forces Claude to produce output that fits your codebase, not a generic template.",
          },
          {
            label: "Refactor to MVVM",
            color: AMBER_LIGHT, fg: "#633806",
            prompt: `Refactor this screen to proper MVVM. Move all state and business logic into a ViewModel. Keep the [Composable/View] as pure rendering — it should only observe state and forward user actions. Do not change what the screen does or looks like — only reorganise where the code lives. Here is the current code: [paste].`,
            why: "'Do not change what the screen does' is a critical constraint — without it Claude will often rewrite features you didn't ask it to touch.",
          },
          {
            label: "Generate mock data",
            color: CORAL_LIGHT, fg: CORAL,
            prompt: `Generate 10 realistic sample [Entity] objects matching this [Kotlin data class / Swift struct]: [paste]. Return them as a hardcoded Kotlin list / Swift array I can use for UI previews and ViewModel testing. Use plausible values — not 'string1', 'string2'.`,
            why: "Saves 10 minutes of tedious mock data creation. 'Use plausible values' prevents the generic placeholder output that is useless for visual testing.",
          },
        ].map(p => (
          <div key={p.label} style={{ background: p.color, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: p.fg, margin: "0 0 6px" }}>{p.label}</p>
            <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "8px 10px", marginBottom: 8 }}>
              <p style={{ fontSize: 10, color: "#cdd6f4", margin: 0, fontFamily: "monospace", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{p.prompt}</p>
            </div>
            <p style={{ fontSize: 11, color: p.fg, margin: 0, lineHeight: 1.4, opacity: 0.8 }}>Why it works: {p.why}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 6: Debugging and architecture review patterns
  () => (
    <Shell tag="Prompting patterns" timer="8" title="Patterns — debugging and architecture review" subtitle="Getting useful analysis out of Claude" notes="The debugging pattern is the most immediately valuable for students in the lab today. Walk through the structured format — error message, code, expected behaviour, actual behaviour — and explain that this structure forces the student to articulate the problem clearly, which often leads to them spotting the bug themselves before Claude responds. That is not a failure mode — it is the best possible outcome.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[
          {
            label: "Debug with full context",
            color: PURPLE_LIGHT, fg: PURPLE_DARK,
            prompt: `I'm getting this error in my [Android/iOS] app: [paste exact error message and stack trace]. Here is the relevant code: [paste ViewModel and/or View]. What I expected to happen: [describe]. What actually happens: [describe]. I am using [Compose/SwiftUI], MVVM, and [Room/SwiftData]. What is wrong and how do I fix it?`,
            why: "The structured format — error, code, expected, actual — gives Claude everything it needs to diagnose accurately. Vague 'it doesn't work' questions get vague answers.",
          },
          {
            label: "Explain unfamiliar code",
            color: TEAL_LIGHT, fg: TEAL_DARK,
            prompt: `Explain this [Kotlin/Swift] code to me line by line. I understand basic [language] but I'm new to [specific concept — e.g. StateFlow, sealed classes, actors]. For each annotation or operator I might not recognise, explain what it does and why it's needed. [paste code].`,
            why: "Builds genuine understanding rather than cargo-culting code you don't understand. The 'line by line' instruction prevents a high-level summary that teaches nothing.",
          },
          {
            label: "Architecture review",
            color: AMBER_LIGHT, fg: "#633806",
            prompt: `Review this ViewModel for problems: [paste]. I'm using MVVM with [Room/SwiftData] and [Retrofit/URLSession]. Specifically check for: (1) threading issues — is anything happening on the main thread that shouldn't be? (2) state management — is the state shape clean and complete? (3) separation of concerns — is anything in the ViewModel that should be in the repository? (4) anything that would make this hard to test.`,
            why: "Asking for a specific checklist gets targeted, actionable feedback instead of a generic 'looks good'. Treat the output like a pull request comment — evaluate it critically.",
          },
          {
            label: "Compare two approaches",
            color: CORAL_LIGHT, fg: CORAL,
            prompt: `I'm deciding between two approaches for [feature]: Option A is [describe] and Option B is [describe]. I'm building a [Android/iOS] capstone app with MVVM, a team of 3, and [describe any constraints]. What are the tradeoffs? Which would you recommend for my situation and why?`,
            why: "Giving Claude two concrete options and specific constraints produces a genuinely useful recommendation. Open-ended 'how should I do X' questions often produce exhaustive lists of options rather than guidance.",
          },
        ].map(p => (
          <div key={p.label} style={{ background: p.color, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: p.fg, margin: "0 0 6px" }}>{p.label}</p>
            <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "8px 10px", marginBottom: 8 }}>
              <p style={{ fontSize: 10, color: "#cdd6f4", margin: 0, fontFamily: "monospace", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{p.prompt}</p>
            </div>
            <p style={{ fontSize: 11, color: p.fg, margin: 0, lineHeight: 1.4, opacity: 0.8 }}>Why it works: {p.why}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 7: What good looks like — full exchange
  () => (
    <Shell tag="Prompting" timer="6" title="What good prompting looks like" subtitle="A full exchange — prompt to usable output" notes="Walk through this exchange slowly. Read the prompt out loud — students should notice the context clues: platform, architecture, existing code, specific requirements. Then show the output and ask students: how long would it take to write this from scratch? How much of it can go directly into your project? The answer to both questions makes the value of good prompting concrete.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>The prompt</p>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, fontStyle: "italic", lineHeight: 1.7 }}>
              "I'm building a Kotlin Android app using Jetpack Compose, MVVM, Room, and Retrofit. I have a Movie data class with id: Int, title: String, posterUrl: String, and rating: Double. I have a MovieRepository with getMovies(): Flow&lt;List&lt;Movie&gt;&gt; and toggleFavourite(movie: Movie): suspend fun.<br/><br/>
              Write a MovieViewModel that: (1) exposes a sealed MovieUiState with Loading, Success(movies), and Error(message), (2) loads movies from the repository on init, (3) has an onFavouriteTapped(movie) function, (4) exposes isFavourite(movieId): StateFlow&lt;Boolean&gt; by delegating to the repository. Use viewModelScope and stateIn."
            </p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>What made this prompt work</p>
            {["Named the platform, language, and architecture upfront", "Pasted the exact data class and repository signatures", "Listed each requirement as a numbered item", "Specified the exact APIs to use (stateIn, viewModelScope)"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0, fontSize: 11 }}>✓</span>
                <span style={{ fontSize: 11, color: TEAL_DARK }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <CodePane title="Claude's output — ready to use" accent={PURPLE}>{`sealed class MovieUiState {
    object Loading : MovieUiState()
    data class Success(val movies: List<Movie>) : MovieUiState()
    data class Error(val message: String) : MovieUiState()
}

class MovieViewModel(
    private val repository: MovieRepository
) : ViewModel() {

    private val _uiState =
        MutableStateFlow<MovieUiState>(Loading)
    val uiState = _uiState.asStateFlow()

    init {
        viewModelScope.launch { loadMovies() }
    }

    private suspend fun loadMovies() {
        repository.getMovies()
            .catch { e ->
                _uiState.value = Error(
                    e.message ?: "Something went wrong"
                )
            }
            .collect { movies ->
                _uiState.value = Success(movies)
            }
    }

    fun onFavouriteTapped(movie: Movie) {
        viewModelScope.launch {
            repository.toggleFavourite(movie)
        }
    }

    fun isFavourite(movieId: Int): StateFlow<Boolean> =
        repository.isFavourite(movieId)
            .stateIn(viewModelScope,
                     SharingStarted.Lazily, false)
}`}</CodePane>
      </div>
    </Shell>
  ),

  // 8: Live demo slide
  () => (
    <Shell tag="Live demo" tagColor="amber" timer="10" title="Live demo — prompting Claude for a capstone ViewModel" subtitle="Instructor-led — students observe" notes="This is a live demo — don't show it as static content. Open Claude before class. The goal is to show prompting as a skill, not magic. Talk through the prompt construction as you type: 'I'm specifying the platform first because... I'm pasting the data class because... I'm asking for a checklist because...' Then evaluate the output together — what would you change? What is already exactly right? This models the critical evaluation mindset students should bring to their own AI sessions.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>What we are doing</p>
          {[
            { step: "1", label: "Start with a blank Claude conversation", desc: "No previous context — exactly the situation students will be in during the lab." },
            { step: "2", label: "Build the prompt live, narrating each choice", desc: "Platform first, then architecture, then data shape, then specific requirements. Students see the reasoning behind each addition." },
            { step: "3", label: "Evaluate the output together", desc: "Ask the class: is this correct? What would you change? Is there anything you don't understand? Don't just accept it — interrogate it." },
            { step: "4", label: "Iterate with a follow-up prompt", desc: "Show that one exchange is rarely the end. 'Can you add error handling for a network timeout specifically?' demonstrates the iterative workflow." },
          ].map(s => (
            <div key={s.step} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <div style={{ background: AMBER, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{s.step}</div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#633806", margin: "0 0 2px" }}>{s.label}</p>
                <p style={{ fontSize: 11, color: TEXT, margin: 0, lineHeight: 1.4 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "14px", minHeight: 120, display: "flex", flexDirection: "column", justifyContent: "center", border: `2px dashed ${AMBER}` }}>
            <p style={{ fontSize: 13, color: "#633806", textAlign: "center", margin: "0 0 8px", fontWeight: 600 }}>Live demo</p>
            <p style={{ fontSize: 12, color: "#633806", textAlign: "center", margin: 0, lineHeight: 1.5, opacity: 0.8 }}>Instructor opens Claude and builds a capstone ViewModel prompt from scratch, narrating each decision out loud.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 6px" }}>What to watch for</p>
            {[
              "How much context goes into the prompt before asking for anything",
              "How the output changes when constraints are added or removed",
              "Which parts of the output are correct immediately vs need adjusting",
              "How a follow-up prompt builds on the first without repeating everything",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 11, color: TEAL_DARK }}>{t}</span>
              </div>
            ))}
          </div>
          <Discussion>{"After the demo: what would you change about this prompt for your own capstone? What context would you need to add that the instructor's version didn't include?"}</Discussion>
        </div>
      </div>
    </Shell>
  ),

  // 9: Claude as thinking partner
  () => (
    <Shell tag="Claude" tagColor="amber" timer="5" title="Claude as a thinking partner, not an oracle" subtitle="The right mental model for working with AI" notes="This slide reframes the relationship. The column on the right — what Claude is not — is as important as the left. Students who use Claude as an oracle, blindly accepting output, will build apps they can't maintain or debug. The goal is a collaborative relationship where the student remains the engineer making decisions.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>What Claude is genuinely good at</p>
          {[
            { role: "Architecture sounding board", desc: "Describe your capstone feature and constraints. Ask whether your proposed structure is sound or whether there's a simpler approach." },
            { role: "On-demand senior reviewer", desc: "Paste a ViewModel or repository and ask for specific issues: threading, state shape, separation of concerns, testability. Free code review at 2am." },
            { role: "Concept explainer", desc: "Hit an unfamiliar annotation or pattern? Paste it, ask for a plain-language explanation with an analogy. No judgement, no time pressure." },
            { role: "Rubber duck", desc: "Describe a bug out loud before asking for a fix. The act of articulating the problem clearly often reveals the answer before Claude says anything." },
            { role: "Boilerplate generator", desc: "Entity classes, DAOs, test fixtures, mock data — tedious but necessary. Let Claude write it; spend your time on the interesting parts." },
          ].map(r => (
            <div key={r.role} style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "8px 10px", marginBottom: 8 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 2px" }}>{r.role}</p>
              <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{r.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>What Claude is not</p>
          {[
            { role: "A replacement for understanding", desc: "If you can't explain what a generated function does line by line, you are not ready to use it. Ask Claude to explain it first — then decide." },
            { role: "Always up to date", desc: "Claude's knowledge has a training cutoff. Jetpack Compose and SwiftUI APIs change fast. Always verify generated code against current official documentation." },
            { role: "Always right", desc: "Claude can be confidently wrong. If something doesn't compile, behaves unexpectedly, or seems off — question it. Ask 'are you sure this is the current API?'" },
            { role: "Your teammate", desc: "Claude doesn't know your codebase, your team's conventions, or your capstone's specific requirements unless you tell it. Every new conversation starts blank." },
          ].map(r => (
            <div key={r.role} style={{ background: GRAY, borderRadius: 8, padding: "8px 10px", marginBottom: 8 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: "0 0 2px" }}>{r.role}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 10: Red flags — staying in the driver's seat
  () => (
    <Shell tag="Red flags" tagColor="coral" timer="5" title="Red flags — staying in the driver's seat" subtitle="When AI output becomes a liability" notes="This slide is important given the course's emphasis on responsible AI use. The goal is not to make students afraid of AI tools — it is to make them confident, critical consumers of AI output. The metaphor that works well: you wouldn't merge a PR from a colleague without reading it. Treat AI-generated code the same way.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { flag: "Code you can't explain", detail: "If you paste generated code into your project without being able to explain what each line does, you've introduced a black box. When it breaks, you'll have no idea why. Always ask Claude to explain first.", fix: "Ask: 'Explain this code line by line before I use it.'" },
          { flag: "Overengineered output", detail: "AI sometimes generates enterprise-scale solutions for a 3-screen capstone app — abstract factories, generic repositories, six layers of indirection. More code is not better code.", fix: "Ask: 'Can you show a simpler version that still follows the MVVM pattern?'" },
          { flag: "Outdated APIs", detail: "SwiftData, Jetpack Compose, and Swift Concurrency have all changed significantly in recent versions. AI output may reference APIs that are deprecated or no longer recommended.", fix: "Always cross-reference generated code against the official docs before committing." },
          { flag: "Confident wrong answers", detail: "Claude can state incorrect information with complete confidence. If generated code doesn't compile, produces unexpected behaviour, or contradicts the docs — it's wrong, not you.", fix: "Ask: 'Are you certain this is the current API? Can you check your reasoning?'" },
          { flag: "Blindly copying without reading", detail: "Copying and pasting code you haven't read is not using AI as a tool — it's outsourcing your understanding. You lose the ability to debug, extend, or explain your own codebase.", fix: "Rule: read every line before you paste. No exceptions." },
          { flag: "Ignoring what didn't change", detail: "Claude sometimes rewrites things you didn't ask it to touch — renaming variables, restructuring functions, changing behaviour subtly. Always diff AI output against what you had.", fix: "Ask: 'Only change [specific thing]. Leave everything else exactly as it was.'" },
        ].map(r => (
          <div key={r.flag} style={{ background: CORAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: CORAL, margin: "0 0 3px" }}>⚠ {r.flag}</p>
            <p style={{ fontSize: 11, color: CORAL, margin: "0 0 5px", lineHeight: 1.4, opacity: 0.85 }}>{r.detail}</p>
            <p style={{ fontSize: 10, color: CORAL, margin: 0, fontWeight: 600 }}>Fix: {r.fix}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 11: What is MCP
  () => (
    <Shell tag="MCP" tagColor="coral" timer="6" title="What is MCP?" subtitle="Model Context Protocol — AI tools that can take action" notes="MCP is genuinely new and exciting — treat it that way. The key conceptual leap: traditional AI tools respond to text you paste. MCP-enabled AI tools connect to external systems, read live data, and take actions directly. The analogy that works: a calculator is useful, but a calculator that can read your spreadsheet, update your database, and write files is a different category of tool entirely.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Traditional AI — isolated</p>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, color: TEXT, margin: "0 0 8px", lineHeight: 1.5 }}>You paste code or describe a problem in text. The AI responds with text. You copy the output into your project manually.</p>
            <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>The AI is isolated — it can only see what you paste into the chat window. It has no awareness of your actual project, your files, or your design tools.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {["You → paste code → AI → text response → you manually implement"].map(step => (
              <div key={step} style={{ background: PURPLE_LIGHT, borderRadius: 6, padding: "6px 10px" }}>
                <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, fontFamily: "monospace" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>MCP — connected</p>
          <div style={{ background: CORAL_LIGHT, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, color: CORAL, margin: "0 0 8px", lineHeight: 1.5 }}>The AI connects to external systems — your codebase, design tools, APIs, databases — and takes actions directly. It reads context you didn't have to paste manually.</p>
            <p style={{ fontSize: 11, color: CORAL, margin: 0, opacity: 0.8 }}>MCP (Model Context Protocol) is the open standard that makes this possible — developed and open-sourced by Anthropic.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {[
              "You → describe what you want",
              "AI → reads your codebase via MCP server",
              "AI → queries your design tool via MCP server",
              "AI → generates and writes files directly",
            ].map((step, i) => (
              <div key={i} style={{ background: CORAL_LIGHT, borderRadius: 6, padding: "6px 10px", borderLeft: `2px solid ${CORAL}` }}>
                <p style={{ fontSize: 11, color: CORAL, margin: 0, fontFamily: "monospace" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Info>{"MCP is still early-stage but moving fast. Understanding the concept now puts you ahead of most working developers — including many who have been in the industry for years."}</Info>
    </Shell>
  ),

  // 12: MCP ecosystem
  () => (
    <Shell tag="MCP" tagColor="coral" timer="4" title="What MCP enables in practice" subtitle="Examples of MCP servers available today" notes="Keep this grounded — students can actually try some of these today. The goal is not to overwhelm with integrations but to make the concept tangible before the Stitch demo. Use this slide to build anticipation for the next one.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
        {[
          { title: "Filesystem MCP", desc: "AI reads your project files directly — no pasting. It can see your whole codebase and make suggestions with full context.", example: "Refactor a ViewModel it can actually read" },
          { title: "Figma MCP", desc: "AI reads your Figma designs and generates matching UI code — components, colors, and spacing derived from the design file.", example: "Generate a Composable that matches a Figma frame" },
          { title: "Google Stitch MCP", desc: "Describe a UI in natural language. Stitch generates the screen design and the Compose/SwiftUI code in one step.", example: "The live demo — coming next" },
          { title: "GitHub MCP", desc: "AI reads your pull requests, issues, and code review history to give context-aware suggestions about your actual repo.", example: "Review a PR with full repository context" },
          { title: "Database MCP", desc: "AI queries your database schema directly to help write correct queries — no pasting DDL manually every time.", example: "Write a Room migration it can see is needed" },
          { title: "Custom MCP servers", desc: "Any API can become an MCP server. Teams are building internal tools that give AI agents access to their own systems.", example: "Internal API exposing company coding standards" },
        ].map(card => (
          <div key={card.title} style={{ background: CORAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: CORAL, margin: "0 0 3px" }}>{card.title}</p>
            <p style={{ fontSize: 11, color: CORAL, margin: "0 0 6px", lineHeight: 1.4, opacity: 0.85 }}>{card.desc}</p>
            <p style={{ fontSize: 10, color: CORAL, margin: 0, fontStyle: "italic", opacity: 0.7 }}>e.g. {card.example}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 13: Google Stitch MCP demo
  () => (
    <Shell tag="Demo · Google Stitch MCP" tagColor="coral" timer="10" title="Google Stitch MCP — UI generation from a description" subtitle="Live demo — instructor-led" notes="Live demo — open Claude with the Stitch MCP connected before class. Walk through the four steps while narrating what you're doing and why. Pick a screen that is relevant to a common capstone concept — a list screen with a FAB, a detail screen with a hero image, or a settings screen. The goal is the 'wow' moment. After the demo, immediately ground it: show a part of the output that needs editing, so students understand this is a starting point, not a finished product.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>What happens in this demo</p>
          {[
            { step: "1", label: "Open Claude with Stitch MCP connected", desc: "The MCP server gives Claude access to Google's Stitch design generation system directly from the chat interface." },
            { step: "2", label: "Describe a screen in plain English", desc: "e.g. 'A movie list screen with a card per movie showing a poster, title, and star rating. Floating action button to add a new movie. Dark background, rounded cards.'" },
            { step: "3", label: "Stitch generates the UI design", desc: "Claude calls the Stitch MCP, which returns a visual design specification — layout, colors, components, spacing — without you writing a line of code." },
            { step: "4", label: "Claude generates the View code", desc: "Claude translates the Stitch output into a Composable or SwiftUI View. The instructor shows what needs editing — it is a starting point, not finished code." },
          ].map(s => (
            <div key={s.step} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <div style={{ background: CORAL, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{s.step}</div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: CORAL, margin: "0 0 2px" }}>{s.label}</p>
                <p style={{ fontSize: 11, color: TEXT, margin: 0, lineHeight: 1.4 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: CORAL_LIGHT, borderRadius: 8, padding: "14px", minHeight: 100, display: "flex", flexDirection: "column", justifyContent: "center", border: `2px dashed ${CORAL}` }}>
            <p style={{ fontSize: 13, color: CORAL, textAlign: "center", margin: "0 0 6px", fontWeight: 600 }}>Live demo</p>
            <p style={{ fontSize: 12, color: CORAL, textAlign: "center", margin: 0, lineHeight: 1.5, opacity: 0.8 }}>Instructor opens Claude with Stitch MCP and generates a UI from a natural language description live. Students observe.</p>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 6px" }}>What to watch for</p>
            {["How much context is in the description — specificity matters here too", "The gap between what Stitch generates and what would need manual adjustment", "How the generated code integrates with the MVVM pattern from Session 1", "What this saves vs writing the same View from scratch"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: AMBER, fontWeight: 700, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 11, color: "#633806" }}>{t}</span>
              </div>
            ))}
          </div>
          <Info>{"Stitch MCP is in preview. The output is a strong starting point — your job is to understand, adapt, and wire it into your ViewModel."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 14: Lab intro
  () => (
    <Shell tag="Lab intro" timer="5" title="Today's lab — scaffold your capstone with Claude" subtitle="60 minutes in breakout rooms" notes="The lab goal is concrete: students leave with a repo that has MVVM folder structure, a ViewModel, placeholder View, and at least one screen rendering mock data — all generated with Claude's help. Stress that this is Capstone M1 work. The starter prompt on the right should go directly into their Claude conversation.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What to build</p>
          {[
            "Create your capstone project repo (if not already done)",
            "Set up the MVVM folder structure for your platform",
            "Use the scaffold prompt to generate your first ViewModel",
            "Create a placeholder View that observes the ViewModel",
            "Wire in mock data so at least one screen renders",
            "Review every generated line — don't commit code you can't explain",
            "Push to GitHub — this is Capstone M1",
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: CORAL, minWidth: 18 }}>{i + 1}.</span>
              <span style={{ fontSize: 12, color: TEXT }}>{s}</span>
            </div>
          ))}
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px", marginTop: 10, borderLeft: `3px solid ${AMBER}` }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 3px" }}>Capstone M1 — due before Week 7</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0 }}>Repo set up, MVVM scaffolded, at least one screen rendering real or mock data. Team roles defined.</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: CORAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: CORAL, margin: "0 0 8px" }}>Starter prompt — paste this into Claude</p>
            <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "10px 12px" }}>
              <p style={{ fontSize: 10, color: "#cdd6f4", margin: 0, fontStyle: "italic", lineHeight: 1.7, fontFamily: "monospace" }}>
                {`"I'm building a [Android/iOS] capstone app called [name]. It [one sentence description]. I'm using [Kotlin + Compose / Swift + SwiftUI], MVVM, and [Room/SwiftData].\n\nMy first screen is [ScreenName]. It shows [describe content]. The main data entity is [EntityName] with fields: [list fields].\n\nGenerate:\n1. The [EntityName] data class / struct\n2. A [EntityName]Repository with a load function returning mock data\n3. A [EntityName]ViewModel with Loading/Success/Error UiState via StateFlow/@Published\n4. A basic [ScreenName] View that observes the ViewModel\n\nUse realistic mock data — not 'string1', 'string2'."`}
              </p>
            </div>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 6px" }}>How to work as a team</p>
            {["Agree on the entity data shape before splitting up", "One person generates the ViewModel and repository", "Another starts the View using the same entity", "Everyone reads the generated code before committing"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 11, color: TEAL_DARK }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 15: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${CORAL} 0%, ${AMBER} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: "#fff", margin: "0 0 8px" }}>Week 6 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", margin: "0 0 24px" }}>You have the architecture and the tools. The capstone starts in earnest.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.7)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned this week</p>
            {["MVVM — three layers, one-way dependencies, data flow", "Android: ViewModel, StateFlow, sealed UiState", "iOS: ObservableObject, @Published, @StateObject", "The prompting mindset — context is everything", "Scaffolding, refactoring, debugging, and review patterns", "What good prompting looks like vs vague prompting", "Claude as a thinking partner — and its limits", "Red flags — staying in the driver's seat", "What MCP is and why it's a different category of tool", "Google Stitch MCP — UI generation from natural language"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: "#fff", opacity: 0.7, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.9)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.7)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Week 7</p>
            {["Calling an LLM API from a mobile app", "Streaming responses word by word", "UI patterns for AI-generated content", "Typing indicators and partial render states", "Capstone Milestone 2 check-in"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.9)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.15)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "#fff", margin: "0 0 3px", fontWeight: 600 }}>Capstone Milestone 1 — due before Week 7</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", margin: 0 }}>Repo set up, MVVM scaffolded, at least one screen rendering real or mock data.</p>
            </div>
          </div>
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
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 6 · Session 2 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>AI-assisted development + MCP</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setCur(c => Math.max(0, c - 1))} disabled={cur === 0} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${CORAL_LIGHT}`, background: cur === 0 ? GRAY : CORAL_LIGHT, color: cur === 0 ? MUTED : CORAL, cursor: cur === 0 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>← Prev</button>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 64, textAlign: "center" }}>{cur + 1} / {slides.length}</span>
          <button onClick={() => setCur(c => Math.min(slides.length - 1, c + 1))} disabled={cur === slides.length - 1} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${CORAL_LIGHT}`, background: cur === slides.length - 1 ? GRAY : CORAL, color: cur === slides.length - 1 ? MUTED : "#fff", cursor: cur === slides.length - 1 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>Next →</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: 26, height: 26, borderRadius: 5, border: `1.5px solid ${i === cur ? CORAL : "#e5e7eb"}`, background: i === cur ? CORAL : "#fff", color: i === cur ? "#fff" : MUTED, fontSize: 10, fontWeight: 500, cursor: "pointer" }}>{i + 1}</button>
        ))}
      </div>
      {slides[cur]()}
    </div>
  );
}
