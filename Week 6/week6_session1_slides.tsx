import { useState } from "react";

const PURPLE = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT = "#EEEDFE";
const TEAL = "#1D9E75";
const TEAL_DARK = "#0F6E56";
const TEAL_LIGHT = "#E1F5EE";
const AMBER = "#EF9F27";
const AMBER_LIGHT = "#FAEEDA";
const BLUE = "#185FA5";
const BLUE_LIGHT = "#E6F1FB";
const GREEN = "#3B6D11";
const GREEN_LIGHT = "#EAF3DE";
const GRAY = "#F5F5F7";
const TEXT = "#1a1a2e";
const MUTED = "#6b7280";

const Tag = ({ children, color = "purple" }) => {
  const map = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806" },
    blue:   { bg: BLUE_LIGHT,   fg: BLUE },
    green:  { bg: GREEN_LIGHT,  fg: GREEN },
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
        <Tag color="purple">Week 6 · S1</Tag>
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

// Reusable layer box for diagrams
const LayerBox = ({ label, sublabel, color, fg, width = "100%", height = 52, center = true }) => (
  <div style={{ background: color, borderRadius: 8, width, height, display: "flex", flexDirection: "column", alignItems: center ? "center" : "flex-start", justifyContent: "center", padding: center ? "0" : "0 12px", boxSizing: "border-box" }}>
    <p style={{ fontSize: 12, fontWeight: 600, color: fg, margin: 0 }}>{label}</p>
    {sublabel && <p style={{ fontSize: 10, color: fg, margin: 0, opacity: 0.7 }}>{sublabel}</p>}
  </div>
);

const Arrow = ({ label, color = MUTED }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "4px 0" }}>
    <div style={{ width: 2, height: 10, background: color, opacity: 0.5 }} />
    <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `6px solid ${color}`, opacity: 0.5 }} />
    {label && <p style={{ fontSize: 10, color, margin: "2px 0 0", opacity: 0.7 }}>{label}</p>}
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
        </div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 6 · Session 1 · Phase 2 begins</p>
        <h1 style={{ fontSize: 30, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.2 }}>MVVM architecture</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>The mental model · Data flow · Platform implementation</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "Why architecture matters — and why now",
            "The spaghetti problem — what goes wrong without it",
            "The three layers and what each one is allowed to do",
            "Visualising the data flow through the layers",
            "Tracing a user action end to end",
            "The benefits — testability, resilience, teamwork",
            "Android: ViewModel + StateFlow",
            "iOS: ObservableObject + @StateObject",
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

  // 2: Phase 2 framing
  () => (
    <Shell tag="Phase 2 begins" tagColor="amber" timer="4" title="Welcome to Phase 2" subtitle="The course just changed shape" notes="Spend 3 minutes on this transition. Students have been working together as one group for five weeks. From today, Android and iOS teams diverge. Make this feel exciting — they are now building production-calibre apps on the platform they chose.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
        <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".05em" }}>Phase 1 — Weeks 1–5</p>
          {["Unified track — Android + iOS together", "Fundamentals: UI, nav, lists, networking, persistence", "Individual assignments", "Side-by-side platform comparisons"].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0, fontSize: 12 }}>✓</span>
              <span style={{ fontSize: 11, color: PURPLE_DARK }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: BLUE, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".05em" }}>Phase 2 — Android</p>
          {["ViewModel + StateFlow", "Hilt dependency injection", "LLM API integration", "On-device AI with ML Kit + Gemini Nano", "Capstone team project"].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
              <span style={{ color: BLUE, fontWeight: 700, flexShrink: 0, fontSize: 12 }}>▸</span>
              <span style={{ fontSize: 11, color: BLUE }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: GREEN, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".05em" }}>Phase 2 — iOS</p>
          {["ObservableObject + @StateObject", "Swift concurrency deep dive", "LLM API integration", "On-device AI with Core ML + Apple Intelligence", "Capstone team project"].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
              <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0, fontSize: 12 }}>▸</span>
              <span style={{ fontSize: 11, color: GREEN }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <Info>{"Your capstone team and platform are now locked in. Everything from Week 6 forward is building towards demo day in Week 10."}</Info>
    </Shell>
  ),

  // 3: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 2 hours" notes="Today is heavier on concept than any previous session. Budget the full 30 minutes for the conceptual section before touching any platform-specific code. Students who understand why MVVM exists will find the implementation obvious; students who skip to the code will cargo-cult it.">
      {[
        { time: "0:00–0:05",  label: "Phase 2 framing",         desc: "What changes now that tracks split", section: null },
        { time: "0:05–0:10",  label: "Hook",                    desc: "The spaghetti problem — what goes wrong without architecture", section: null },
        { time: "0:10–0:20",  label: "The three layers",        desc: "What each layer is, what it is allowed to do, what it is forbidden to know", section: null },
        { time: "0:20–0:28",  label: "Data flow visualised",    desc: "The layer diagram and tracing a user action end to end", section: null },
        { time: "0:28–0:35",  label: "Why it matters",          desc: "Testability, resilience, team parallelism — the real benefits", section: null },
        { time: "0:35–0:50",  label: "Android implementation",  desc: "ViewModel, StateFlow, sealed UiState, connecting to Compose", section: "android" },
        { time: "0:50–1:05",  label: "iOS implementation",      desc: "ObservableObject, @Published, @StateObject vs @ObservedObject", section: "ios" },
        { time: "1:05–1:10",  label: "Lab intro",               desc: "Refactoring a previous assignment to MVVM", section: null },
        { time: "1:10–2:05",  label: "Lab — breakout rooms",    desc: "Refactor your Week 4 app to proper MVVM", section: "lab" },
        { time: "2:05–2:10",  label: "Wrap-up",                 desc: "Capstone M1 expectations + Session 2 preview", section: "wrapup" },
      ].map(r => (
        <div key={r.time} style={{
          display: "flex", gap: 12, padding: "8px 0",
          borderBottom: `0.5px solid ${GRAY}`,
          background: r.section === "android" ? BLUE_LIGHT : r.section === "ios" ? GREEN_LIGHT : r.section === "lab" ? TEAL_LIGHT : r.section === "wrapup" ? AMBER_LIGHT : "transparent",
          borderRadius: r.section ? 6 : 0, paddingLeft: r.section ? 8 : 0, marginLeft: r.section ? -8 : 0
        }}>
          <span style={{ fontSize: 12, minWidth: 90, flexShrink: 0, fontWeight: r.section ? 600 : 400, color: r.section === "android" ? BLUE : r.section === "ios" ? GREEN : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : MUTED }}>{r.time}</span>
          <span style={{ fontSize: 12, fontWeight: 600, minWidth: 160, flexShrink: 0, color: r.section === "android" ? BLUE : r.section === "ios" ? GREEN : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : PURPLE }}>{r.label}</span>
          <span style={{ fontSize: 12, color: r.section === "android" ? BLUE : r.section === "ios" ? GREEN : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : TEXT }}>{r.desc}</span>
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

  // 4: Hook — the spaghetti problem
  () => (
    <Shell tag="Hook" timer="5" title="The spaghetti problem" subtitle="What happens when one file does everything" notes="Make this visceral. Students have written code like this — it felt fine at the time because the app was small. Now ask them to imagine: their capstone has 10 screens, 3 team members, and they need to find a bug that only happens sometimes. Which version of this codebase would they rather debug? The answer should be obvious — and that answer is the entire motivation for MVVM.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 8px" }}>One file. Six jobs.</p>
          <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, color: "#791F1F", margin: 0, lineHeight: 1.7 }}>
              Your Week 4 movie screen probably...<br/>
              <span style={{ display: "block", marginTop: 6 }}>
                {["Holds the list of movies in state", "Makes the network call directly", "Handles loading and error conditions", "Filters the list when the user searches", "Formats dates and ratings for display", "Renders the entire UI"].map(j => (
                  <span key={j} style={{ display: "flex", gap: 8, margin: "3px 0" }}>
                    <span style={{ color: "#A32D2D", fontWeight: 700 }}>✗</span> {j}
                  </span>
                ))}
              </span>
            </p>
          </div>
          <p style={{ fontSize: 11, color: MUTED, fontStyle: "italic" }}>This works fine for a one-screen demo. It breaks down fast when your app grows.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>What goes wrong at scale</p>
          {[
            { title: "Bug hunting is a nightmare", detail: "A crash could be in the network code, the state logic, or the rendering — it's all in the same place." },
            { title: "Team collisions", detail: "Two teammates editing the same 200-line file means merge conflicts every day." },
            { title: "Rotation wipes your state", detail: "On Android, rotating the phone recreates the screen — and loses everything your View was holding." },
            { title: "Nothing is reusable", detail: "The same list logic written three times across three screens — all slightly different." },
            { title: "Untestable by design", detail: "The network call is inside a Composable. You can't run it without a screen, an emulator, and a live API." },
          ].map(s => (
            <div key={s.title} style={{ background: GRAY, borderRadius: 8, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: "0 0 2px" }}>{s.title}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 5: The three layers — what they are
  () => (
    <Shell tag="Concept" timer="6" title="The solution — three layers with one job each" subtitle="Model · View · ViewModel" notes="Introduce each layer as a single sentence before expanding. The View renders. The ViewModel thinks. The Model stores and fetches. Students who can say this clearly already understand 80% of MVVM. The key constraint is what each layer is FORBIDDEN to know — this is more memorable than describing what it is allowed to do.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          {
            layer: "View",
            one_job: "Render the UI and forward user actions",
            color: PURPLE_LIGHT, fg: PURPLE_DARK,
            allowed: ["Display whatever state the ViewModel exposes", "Call ViewModel functions when user interacts", "Animate and style the UI"],
            forbidden: ["Make network calls", "Hold business logic", "Know where data comes from", "Know how state is calculated"],
            examples: ["LazyColumn showing a list", "Button that calls viewModel.onTap()", "Text(state.title)"],
          },
          {
            layer: "ViewModel",
            one_job: "Hold UI state and respond to user actions",
            color: TEAL_LIGHT, fg: TEAL_DARK,
            allowed: ["Expose state as StateFlow / @Published", "Call the repository when data is needed", "Transform raw data into display-ready state", "Handle errors and map them to user messages"],
            forbidden: ["Import UIKit, Compose, or any UI framework", "Know which screen is observing it", "Directly call a network API"],
            examples: ["uiState: StateFlow<UiState>", "fun onFavouriteTapped()", "Maps ApiError → 'Something went wrong'"],
          },
          {
            layer: "Model",
            one_job: "Own and provide the data",
            color: AMBER_LIGHT, fg: "#633806",
            allowed: ["Fetch data from a network API", "Read and write to a local database", "Cache and transform raw data"],
            forbidden: ["Know anything about the UI", "Hold display-specific logic", "Know what screen will consume the data"],
            examples: ["MovieRepository.getMovies()", "MovieDao.getAllMovies()", "MovieApiService.fetchMovies()"],
          },
        ].map(l => (
          <div key={l.layer} style={{ background: l.color, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: l.fg, margin: "0 0 2px" }}>{l.layer}</p>
            <p style={{ fontSize: 11, color: l.fg, margin: "0 0 10px", fontStyle: "italic", opacity: 0.8 }}>{l.one_job}</p>
            <p style={{ fontSize: 10, fontWeight: 600, color: l.fg, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Allowed to</p>
            {l.allowed.map(t => <div key={t} style={{ display: "flex", gap: 5, margin: "3px 0" }}><span style={{ color: TEAL, fontWeight: 700, fontSize: 11, flexShrink: 0 }}>✓</span><span style={{ fontSize: 11, color: l.fg, opacity: 0.85 }}>{t}</span></div>)}
            <p style={{ fontSize: 10, fontWeight: 600, color: l.fg, margin: "10px 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Forbidden to</p>
            {l.forbidden.map(t => <div key={t} style={{ display: "flex", gap: 5, margin: "3px 0" }}><span style={{ color: "#E24B4A", fontWeight: 700, fontSize: 11, flexShrink: 0 }}>✗</span><span style={{ fontSize: 11, color: l.fg, opacity: 0.85 }}>{t}</span></div>)}
            <p style={{ fontSize: 10, fontWeight: 600, color: l.fg, margin: "10px 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Examples</p>
            {l.examples.map(t => <div key={t} style={{ fontSize: 10, color: l.fg, fontFamily: "monospace", margin: "2px 0", opacity: 0.8 }}>{t}</div>)}
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 6: The layer diagram — visualised
  () => (
    <Shell tag="Concept" timer="6" title="The layer diagram" subtitle="One-way dependency — the rule that makes it work" notes="Draw this on a whiteboard as you talk through it. The key insight is the arrow direction: View knows about ViewModel, ViewModel knows about Model, but nothing flows back the other way. The ViewModel has no idea which View is observing it. The Model has no idea what kind of UI will display its data. This one-way dependency is what allows each layer to be developed, tested, and changed independently.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 12px" }}>The dependency direction — always one way</p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
            <LayerBox label="View" sublabel="Composable / SwiftUI View" color={PURPLE_LIGHT} fg={PURPLE_DARK} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2px 0" }}>
              <div style={{ fontSize: 10, color: TEAL_DARK, background: TEAL_LIGHT, padding: "2px 8px", borderRadius: 10, marginBottom: 2 }}>observes state ↓ &nbsp;&nbsp; forwards actions ↓</div>
              <div style={{ width: 2, height: 10, background: TEAL, opacity: 0.5 }} />
              <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `6px solid ${TEAL}`, opacity: 0.5 }} />
            </div>
            <LayerBox label="ViewModel" sublabel="Holds UI state · Handles actions" color={TEAL_LIGHT} fg={TEAL_DARK} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2px 0" }}>
              <div style={{ fontSize: 10, color: "#633806", background: AMBER_LIGHT, padding: "2px 8px", borderRadius: 10, marginBottom: 2 }}>calls repository ↓ &nbsp;&nbsp; receives data ↓</div>
              <div style={{ width: 2, height: 10, background: AMBER, opacity: 0.5 }} />
              <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `6px solid ${AMBER}`, opacity: 0.5 }} />
            </div>
            <LayerBox label="Model" sublabel="Repository · DAO · API Service" color={AMBER_LIGHT} fg="#633806" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>What the arrows mean</p>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px" }}>View → ViewModel</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>The View observes the ViewModel's state and calls its functions. The ViewModel has no reference to the View — it doesn't know which screen is watching it, or if anyone is at all.</p>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 3px" }}>ViewModel → Model</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>The ViewModel calls the repository to get or save data. The repository has no reference back to the ViewModel — it just returns data and doesn't care what happens to it.</p>
          </div>
          <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", margin: "0 0 3px" }}>No upward references — ever</p>
            <p style={{ fontSize: 11, color: "#791F1F", margin: 0, lineHeight: 1.5 }}>If the Model imports a ViewModel, or the ViewModel imports a View — the architecture is broken. These dependencies are the root cause of the spaghetti problem.</p>
          </div>
          <Discussion>{"If the ViewModel doesn't know which View is observing it, what does that mean for testing? Can you test a ViewModel without a screen?"}</Discussion>
        </div>
      </div>
    </Shell>
  ),

  // 7: Tracing a user action end to end
  () => (
    <Shell tag="Concept" timer="8" title="Tracing a user action end to end" subtitle="What actually happens when a user taps a heart" notes="Walk through this step by step, slowly. This is the most important slide for building genuine understanding. Students who can trace this flow in both directions — down when the user acts, up when data returns — truly understand MVVM. Ask students to predict the next step at each stage before revealing it. The revelation that the View never calls the API directly is the key 'aha' moment.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>User taps the heart on a movie</p>
          {[
            { layer: "View", dir: "↓ down", color: PURPLE_LIGHT, fg: PURPLE_DARK, action: "Button tap detected", detail: "The View calls viewModel.onFavouriteTapped(movie). That's it. The View's job is done — it has no idea what happens next." },
            { layer: "ViewModel", dir: "↓ down", color: TEAL_LIGHT, fg: TEAL_DARK, action: "Action received, repository called", detail: "The ViewModel calls repository.toggleFavourite(movie) in a coroutine / async Task. It also sets uiState = Loading to show a spinner." },
            { layer: "Model", dir: "↑ up", color: AMBER_LIGHT, fg: "#633806", action: "Data saved, result returned", detail: "The repository inserts or deletes the favourite in Room / SwiftData, then returns the updated list. It has no idea the result will go to a movie screen." },
            { layer: "ViewModel", dir: "↑ up", color: TEAL_LIGHT, fg: TEAL_DARK, action: "State updated", detail: "The ViewModel receives the updated list and emits a new Success state via StateFlow / @Published. Any observer will receive this automatically." },
            { layer: "View", dir: "✓ done", color: PURPLE_LIGHT, fg: PURPLE_DARK, action: "UI re-renders", detail: "The View, which is observing the StateFlow / @Published property, automatically re-renders. The heart icon updates. No manual refresh triggered — it just happens." },
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ background: step.color, color: step.fg, borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 }}>{i + 1}</div>
                {i < 4 && <div style={{ width: 2, height: "100%", background: GRAY, minHeight: 12, marginTop: 2 }} />}
              </div>
              <div style={{ background: step.color, borderRadius: 8, padding: "8px 10px", flex: 1 }}>
                <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 3 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: step.fg, textTransform: "uppercase" }}>{step.layer}</span>
                  <span style={{ fontSize: 10, color: step.fg, opacity: 0.6 }}>{step.dir}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: step.fg }}>— {step.action}</span>
                </div>
                <p style={{ fontSize: 11, color: step.fg, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>The key observations</p>
          {[
            { title: "The View never calls the API", detail: "Every network or database operation goes through the ViewModel → repository chain. The View only ever calls ViewModel functions." },
            { title: "The UI update is automatic", detail: "The View didn't need to be told to refresh. It was observing the state stream — when the stream emitted, the UI updated. No manual invalidation." },
            { title: "Each layer did exactly one thing", detail: "The View forwarded a tap. The ViewModel coordinated the work. The repository saved the data. None of them needed to know how the others worked internally." },
            { title: "The flow is always the same", detail: "User action → View → ViewModel → Model → ViewModel → View. Every feature in your capstone will follow this exact path." },
          ].map(obs => (
            <div key={obs.title} style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>{obs.title}</p>
              <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{obs.detail}</p>
            </div>
          ))}
          <Info>{"User action → View → ViewModel → Model → ViewModel → View. Every feature you build in your capstone follows this exact path."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 8: What it looks like before vs after — diagram
  () => (
    <Shell tag="Concept" timer="5" title="Before and after — the structural shift" subtitle="From tangled to layered" notes="This is a visual comparison, not code yet. The left diagram shows the chaotic state — state, network, UI, and business logic all pointing at each other with no clear ownership. The right shows the clean layered version. Ask students: in the left diagram, if the API response format changes, how many things do you need to touch? In the right diagram? The answer (everything vs just the repository) makes the case for MVVM better than any explanation.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ background: "#FCEBEB", color: "#A32D2D", fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 20 }}>Before — no architecture</span>
          </div>
          <div style={{ background: "#FCEBEB", borderRadius: 10, padding: "14px", position: "relative" }}>
            <div style={{ background: "#F7C1C1", borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", margin: "0 0 6px" }}>MovieScreen.kt / MovieView.swift</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                {["var movies = []", "var isLoading = true", "var error = null", "api.getMovies()", "dao.insert()", "formatRating()", "LazyColumn {...}", "if (loading) {...}"].map(item => (
                  <div key={item} style={{ background: "rgba(162,45,45,0.15)", borderRadius: 4, padding: "3px 6px", fontSize: 10, color: "#A32D2D", fontFamily: "monospace" }}>{item}</div>
                ))}
              </div>
              <div style={{ marginTop: 8, display: "flex", gap: 4, flexWrap: "wrap" }}>
                {["State ↔ Network", "Network ↔ UI", "UI ↔ Business logic", "State ↔ DB"].map(arrow => (
                  <span key={arrow} style={{ fontSize: 9, background: "rgba(162,45,45,0.2)", color: "#A32D2D", padding: "1px 5px", borderRadius: 8 }}>{arrow}</span>
                ))}
              </div>
            </div>
            <p style={{ fontSize: 11, color: "#A32D2D", margin: 0, fontStyle: "italic" }}>Everything knows about everything. Change one thing, break five others.</p>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ background: TEAL_LIGHT, color: TEAL_DARK, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 20 }}>After — MVVM</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>View — MovieScreen</p>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {["when(uiState)", "LazyColumn", "Button → viewModel.onTap()"].map(t => (
                  <span key={t} style={{ fontSize: 10, background: "rgba(83,74,183,0.15)", color: PURPLE_DARK, padding: "1px 6px", borderRadius: 8, fontFamily: "monospace" }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "center", fontSize: 11, color: TEAL_DARK }}>↓ observes / calls ↓</div>
            <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>ViewModel — MovieViewModel</p>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {["uiState: StateFlow", "fun loadMovies()", "fun onFavouriteTapped()"].map(t => (
                  <span key={t} style={{ fontSize: 10, background: "rgba(29,158,117,0.15)", color: TEAL_DARK, padding: "1px 6px", borderRadius: 8, fontFamily: "monospace" }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "center", fontSize: 11, color: "#633806" }}>↓ calls ↓</div>
            <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 4px" }}>Model — MovieRepository</p>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {["getMovies(): Flow", "toggleFavourite()", "MovieDao", "MovieApiService"].map(t => (
                  <span key={t} style={{ fontSize: 10, background: "rgba(239,159,39,0.2)", color: "#633806", padding: "1px 6px", borderRadius: 8, fontFamily: "monospace" }}>{t}</span>
                ))}
              </div>
            </div>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, fontStyle: "italic" }}>Each layer has one job. A change in one layer stays in that layer.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 9: Why it matters — the real benefits
  () => (
    <Shell tag="Concept" timer="5" title="Why the separation is worth the extra files" subtitle="The payoff becomes obvious at capstone scale" notes="Students sometimes resist MVVM because it feels like more files for a small app. Acknowledge that — then make the case that a capstone built by 3 people over 4 weeks is not a small app. The team parallelism point is particularly compelling: two people can work on the ViewModel and repository while the third builds the UI, with no merge conflicts.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { title: "Survives config changes", detail: "Android recreates the screen on rotation. The ViewModel survives — its state doesn't get wiped. Students who skip this hit confusing bugs when their app 'resets' on tilt.", color: BLUE_LIGHT, fg: BLUE },
          { title: "Testable without a screen", detail: "Pass in a mock repository, call a ViewModel function, assert the state changed. No emulator, no UI, no live API. Fast, reliable tests that run in milliseconds.", color: PURPLE_LIGHT, fg: PURPLE_DARK },
          { title: "Team parallelism", detail: "Two teammates work on the ViewModel and repository. The third builds the View. They agree on the state shape up front and never touch the same file — no merge conflicts.", color: TEAL_LIGHT, fg: TEAL_DARK },
          { title: "Easier to debug", detail: "A data bug lives in the ViewModel or repository. A display bug lives in the View. The layer tells you where to look before you read a single line of code.", color: AMBER_LIGHT, fg: "#633806" },
          { title: "Reusable across screens", detail: "The same ViewModel can be observed by the list screen and the detail screen. The same repository powers the Favourites tab and the search results. Write once, use everywhere.", color: BLUE_LIGHT, fg: BLUE },
          { title: "Industry standard", detail: "Every Android codebase at Google, Meta, Spotify uses ViewModel. Every iOS codebase uses ObservableObject or @Observable. This is the pattern in every mobile engineering interview.", color: GREEN_LIGHT, fg: GREEN },
        ].map(card => (
          <div key={card.title} style={{ background: card.color, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: card.fg, margin: "0 0 4px" }}>{card.title}</p>
            <p style={{ fontSize: 11, color: card.fg, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{card.detail}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 10: Connecting to what students already built
  () => (
    <Shell tag="Connection" timer="3" title="You already built the Model layer" subtitle="Week 5 gave you everything below the ViewModel" notes="This slide reduces anxiety before the implementation slides. Students have already built repositories, DAOs, and DataStore wrappers — that is the entire Model layer. The ViewModel is the only genuinely new thing today. Keep this slide to 3 minutes — it is a reassurance beat, not a teaching beat.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { layer: "View layer", status: "Already built — Weeks 1–5", color: PURPLE_LIGHT, fg: PURPLE_DARK, items: ["LazyColumn / List — Week 3", "Navigation between screens — Week 2", "Detail screen — Week 3", "Favourites tab — Week 5", "Dark mode toggle — Week 5"] },
          { layer: "ViewModel layer", status: "Today's focus", color: TEAL_LIGHT, fg: TEAL_DARK, highlight: true, items: ["Holds UI state as StateFlow / @Published", "Calls the repository on init", "Handles user actions", "Maps errors to readable messages", "← This is all that's new today"] },
          { layer: "Model layer", status: "Already built — Weeks 4–5", color: AMBER_LIGHT, fg: "#633806", items: ["ItemRepository — Week 5", "ItemDao / ModelContext — Week 5", "ItemApiService — Week 4", "DataStore / UserDefaults — Week 5", "All of this is already yours"] },
        ].map(col => (
          <div key={col.layer} style={{ background: col.color, borderRadius: 8, padding: "12px 14px", border: col.highlight ? `2px solid ${TEAL}` : "2px solid transparent" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: col.fg, margin: "0 0 2px" }}>{col.layer}</p>
            <p style={{ fontSize: 10, fontWeight: 600, color: col.fg, margin: "0 0 8px", opacity: 0.7, textTransform: "uppercase", letterSpacing: ".04em" }}>{col.status}</p>
            {col.items.map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: t.startsWith("←") ? col.fg : TEAL, fontWeight: 700, flexShrink: 0, fontSize: 11 }}>{t.startsWith("←") ? "★" : "✓"}</span>
                <span style={{ fontSize: 11, color: col.fg, fontWeight: t.startsWith("←") ? 600 : 400, opacity: 0.9 }}>{t.startsWith("←") ? t.slice(2) : t}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Info>{"The lab today is not building new features — it is reorganising code you already wrote into the right layers. The app will behave identically. The architecture will be dramatically cleaner."}</Info>
    </Shell>
  ),

  // 11: Android — ViewModel + StateFlow
  () => (
    <Shell tag="Android · ViewModel" tagColor="blue" timer="8" title="Android — ViewModel + StateFlow" subtitle="The canonical implementation" notes="Walk through in three beats: the UiState sealed class, the ViewModel itself, then how it connects to Compose. The sealed class is the key pattern — it makes all possible screen states explicit and compiler-enforced. Students who understand the sealed class pattern will find the ViewModel code almost self-explanatory.">
      <div style={{ display: "flex", gap: 12 }}>
        <CodePane title="Kotlin — MovieViewModel.kt" accent={BLUE}>{`// Sealed class — all possible screen states, explicitly modelled
sealed class MovieUiState {
    object Loading : MovieUiState()
    data class Success(val movies: List<Movie>) : MovieUiState()
    data class Error(val message: String) : MovieUiState()
}

class MovieViewModel(
    private val repository: MovieRepository
) : ViewModel() {

    // Private mutable — only ViewModel can change state
    private val _uiState = MutableStateFlow<MovieUiState>(Loading)
    // Public read-only — View observes this
    val uiState: StateFlow<MovieUiState> = _uiState.asStateFlow()

    init { loadMovies() }

    fun loadMovies() {
        viewModelScope.launch {           // off the main thread
            _uiState.value = Loading
            try {
                val movies = repository.getMovies()
                _uiState.value = Success(movies)
            } catch (e: Exception) {
                _uiState.value = Error(e.message ?: "Something went wrong")
            }
        }
    }

    fun onFavouriteTapped(movie: Movie) {
        viewModelScope.launch { repository.toggleFavourite(movie) }
    }
}`}</CodePane>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: BLUE, margin: "0 0 3px" }}>extends ViewModel</p>
            <p style={{ fontSize: 11, color: BLUE, margin: 0, lineHeight: 1.5 }}>The Android framework keeps this alive across rotations. The screen can be destroyed and recreated — the ViewModel and its state survive.</p>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>Private write, public read</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>MutableStateFlow is private — only the ViewModel can emit. The View gets a read-only StateFlow — it can observe but never mutate directly.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px" }}>Connecting to Compose</p>
            <pre style={{ margin: 0, fontSize: 10, color: TEAL_DARK, fontFamily: "monospace", lineHeight: 1.6 }}>{`val state by viewModel.uiState
    .collectAsStateWithLifecycle()

when (state) {
    is Loading -> CircularProgressIndicator()
    is Success -> LazyColumn { ... }
    is Error   -> ErrorBanner(state.message)
}`}</pre>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 12: iOS — ObservableObject
  () => (
    <Shell tag="iOS · ObservableObject" tagColor="green" timer="8" title="iOS — ObservableObject + @StateObject" subtitle="The SwiftUI equivalent — same pattern, different syntax" notes="Draw the parallel explicitly: ObservableObject = ViewModel, @Published = MutableStateFlow, @StateObject = viewModel(). The enum UiState mirrors the Kotlin sealed class. Walk through @StateObject vs @ObservedObject — this is the most common source of iOS MVVM bugs. The rule is simple: create with @StateObject, pass down with @ObservedObject.">
      <div style={{ display: "flex", gap: 12 }}>
        <CodePane title="Swift — MovieViewModel.swift + MovieScreen.swift" accent={GREEN}>{`// Enum — mirrors Kotlin's sealed class exactly
enum MovieUiState {
    case loading
    case success([Movie])
    case error(String)
}

// ObservableObject — the iOS equivalent of Android's ViewModel
class MovieViewModel: ObservableObject {

    // @Published — equivalent of MutableStateFlow
    // Any change automatically updates observing Views
    @Published var uiState: MovieUiState = .loading

    private let repository: MovieRepository

    init(repository: MovieRepository = MovieRepository()) {
        self.repository = repository
        Task { await loadMovies() }
    }

    @MainActor
    func loadMovies() async {
        uiState = .loading
        do {
            let movies = try await repository.getMovies()
            uiState = .success(movies)
        } catch {
            uiState = .error(error.localizedDescription)
        }
    }
}

// In the View:
struct MovieScreen: View {
    // @StateObject — creates AND owns the ViewModel
    // Use this at the root of the screen hierarchy
    @StateObject private var viewModel = MovieViewModel()

    var body: some View {
        switch viewModel.uiState {
        case .loading:   ProgressView()
        case .success(let movies): List(movies) { MovieRow($0) }
        case .error(let msg):      ErrorBanner(message: msg)
        }
    }
}`}</CodePane>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: GREEN, margin: "0 0 3px" }}>@StateObject vs @ObservedObject</p>
            <p style={{ fontSize: 11, color: GREEN, margin: 0, lineHeight: 1.5 }}>@StateObject creates and owns the ViewModel — use at the root screen. @ObservedObject observes a ViewModel passed from a parent — use in child views. Getting this wrong causes mysterious state resets.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px" }}>@MainActor</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Ensures UI updates happen on the main thread. Equivalent to the implicit main-thread dispatch StateFlow provides in Compose.</p>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>The parallel is exact</p>
            <div style={{ fontSize: 10, fontFamily: "monospace", color: PURPLE_DARK, lineHeight: 1.8 }}>
              <div>ObservableObject ↔ ViewModel</div>
              <div>@Published var ↔ MutableStateFlow</div>
              <div>@StateObject ↔ viewModel()</div>
              <div>switch uiState ↔ when (state)</div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 13: Lab intro
  () => (
    <Shell tag="Lab intro" timer="5" title="Today's lab — refactor to MVVM" subtitle="60 minutes in breakout rooms" notes="Students should already have a working Week 4 API app. The goal is not to add features — it's to reorganise existing code into the right layers. Walk through the checklist before sending them to breakout rooms. Students who finish early should start scaffolding their capstone using MVVM from the beginning.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Steps</p>
          {[
            "Open your Week 4 app (the API list app)",
            "Create a new ViewModel class for your main screen",
            "Move all state (loading, error, items) into the ViewModel",
            "Move the API call into the ViewModel — call it from init",
            "Expose state via StateFlow (Android) or @Published (iOS)",
            "Update the View to observe the ViewModel instead of holding state",
            "Confirm the app behaves identically — same screens, same data",
            "Stretch: apply the same pattern to the Favourites tab",
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: PURPLE, minWidth: 18 }}>{i + 1}.</span>
              <span style={{ fontSize: 12, color: TEXT }}>{s}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: BLUE, margin: "0 0 6px" }}>Android checklist</p>
            {["class XxxViewModel : ViewModel()", "MutableStateFlow + asStateFlow()", "viewModelScope.launch { } for API call", "collectAsStateWithLifecycle() in Composable", "viewModel() call in the Composable"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "3px 0" }}>
                <span style={{ color: BLUE, fontSize: 11, flexShrink: 0 }}>□</span>
                <span style={{ fontSize: 11, color: BLUE, fontFamily: "monospace" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: GREEN, margin: "0 0 6px" }}>iOS checklist</p>
            {["class XxxViewModel : ObservableObject", "@Published var uiState", "Task { await loadData() } in init", "@StateObject var viewModel = XxxViewModel()", "switch viewModel.uiState in body"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "3px 0" }}>
                <span style={{ color: GREEN, fontSize: 11, flexShrink: 0 }}>□</span>
                <span style={{ fontSize: 11, color: GREEN, fontFamily: "monospace" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 14: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: "#fff", margin: "0 0 8px" }}>Session 1 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Your code now has a clear separation between what it shows and how it thinks.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned</p>
            {["Why spaghetti code breaks down at scale", "The three MVVM layers and what each is forbidden to know", "How data flows through the layers — in both directions", "The one-way dependency rule that makes it all work", "The benefits: testability, rotation safety, team parallelism", "Android: ViewModel, StateFlow, sealed UiState", "iOS: ObservableObject, @Published, @StateObject"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: AMBER, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Session 2</p>
            {["AI coding tools — beyond autocomplete", "How to prompt Claude for mobile-specific code", "What MCP is and why it matters", "Google Stitch MCP — generating UI from a description", "Lab: scaffold your capstone with AI assistance"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.15)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.9)", margin: "0 0 3px", fontWeight: 600 }}>Capstone Milestone 1</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Repo set up, MVVM architecture scaffolded, at least one screen rendering real or mock data. Due before Week 7.</p>
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
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 6 · Session 1 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>MVVM architecture deep dive</p>
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
