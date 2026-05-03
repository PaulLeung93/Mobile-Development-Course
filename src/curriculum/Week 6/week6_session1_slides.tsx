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

const preStyle = { margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" as const };

const OSToggle = ({ android, ios }: { [k: string]: any }) => {
  const [platform, setPlatform] = useState<'android' | 'ios'>('android');
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: "1px solid #e5e7eb", width: "fit-content" }}>
        <button onClick={() => setPlatform('android')} style={{ padding: "5px 16px", fontSize: 11, fontWeight: 700, letterSpacing: ".04em", background: platform === 'android' ? PURPLE : "#fff", color: platform === 'android' ? "#fff" : MUTED, border: "none", borderRight: "1px solid #e5e7eb", cursor: "pointer" }}>
          Android · Kotlin
        </button>
        <button onClick={() => setPlatform('ios')} style={{ padding: "5px 16px", fontSize: 11, fontWeight: 700, letterSpacing: ".04em", background: platform === 'ios' ? TEAL : "#fff", color: platform === 'ios' ? "#fff" : MUTED, border: "none", cursor: "pointer" }}>
          iOS · Swift
        </button>
      </div>
      {platform === 'android' ? android : ios}
    </div>
  );
};

const Step = ({ n, title, children, accent = PURPLE }: { [k: string]: any }) => (
  <div style={{ marginBottom: 10, paddingLeft: 24, borderLeft: `2px solid #e5e7eb`, position: "relative" }}>
    <div style={{ position: "absolute", left: -14, top: 0, width: 26, height: 26, borderRadius: "50%", background: "#fff", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: accent }}>
      {n}
    </div>
    <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "2px 0 6px" }}>{title}</p>
    <div>{children}</div>
  </div>
);

const ViewToggle = ({ steps, full }: { [k: string]: any }) => {
  const [view, setView] = useState<'steps' | 'full'>('steps');
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 6 }}>
        <div style={{ display: "flex", borderRadius: 20, overflow: "hidden", border: "1px solid #e5e7eb", width: "fit-content" }}>
          <button onClick={() => setView('steps')} style={{ padding: "3px 12px", fontSize: 10, fontWeight: 700, letterSpacing: ".04em", background: view === 'steps' ? PURPLE : "#fff", color: view === 'steps' ? "#fff" : MUTED, border: "none", borderRight: "1px solid #e5e7eb", cursor: "pointer" }}>
            Step by step
          </button>
          <button onClick={() => setView('full')} style={{ padding: "3px 12px", fontSize: 10, fontWeight: 700, letterSpacing: ".04em", background: view === 'full' ? PURPLE : "#fff", color: view === 'full' ? "#fff" : MUTED, border: "none", cursor: "pointer" }}>
            Full code
          </button>
        </div>
      </div>
      {view === 'steps' ? steps : full}
    </div>
  );
};

const FlowBar = ({ active }: { [k: string]: any }) => {
  const steps = ["View", "ViewModel", "Model", "ViewModel", "View"];
  const bgs   = [PURPLE_LIGHT, TEAL_LIGHT, AMBER_LIGHT, TEAL_LIGHT, PURPLE_LIGHT];
  const fgs   = [PURPLE_DARK, TEAL_DARK, "#633806", TEAL_DARK, PURPLE_DARK];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 10, background: GRAY, borderRadius: 20, padding: "4px 10px", width: "fit-content" }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {i > 0 && <span style={{ fontSize: 10, color: MUTED, margin: "0 2px" }}>→</span>}
          <span style={{ fontSize: 10, fontWeight: i === active ? 700 : 400, color: i === active ? fgs[i] : MUTED, background: i === active ? bgs[i] : "transparent", padding: "2px 8px", borderRadius: 10 }}>{s}</span>
        </div>
      ))}
    </div>
  );
};

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
            "Deep dives — View, ViewModel, and Model in detail",
            "Visualising the data flow through the layers",
            "Tracing a user action — step by step through every layer",
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
    <Shell tag="Agenda" title="Today's session — 2 hours" notes="Today is heavier on concept than any previous session. Budget the full 35 minutes for the conceptual section — three layers overview, deep dives, and data flow — before touching any platform-specific code. Students who understand why MVVM exists will find the implementation obvious; students who skip to the code will cargo-cult it.">
      {[
        { time: "0:00–0:05",  label: "Phase 2 framing",            desc: "What changes now that tracks split", section: null },
        { time: "0:05–0:10",  label: "Hook",                       desc: "The spaghetti problem — what breaks without architecture", section: null },
        { time: "0:10–0:30",  label: "The three layers",           desc: "Overview + deep dive into View, ViewModel, and Model individually", section: null },
        { time: "0:30–0:45",  label: "Data flow",                  desc: "Layer diagram + tracing a user action step by step through every layer", section: null },
        { time: "0:45–0:55",  label: "The benefits",               desc: "Before/after comparison, testability, rotation safety, team parallelism", section: null },
        { time: "0:55–1:10",  label: "Implementation concepts",    desc: "UiState modelling + ViewModel ownership rules", section: null },
        { time: "1:10–1:25",  label: "Code-along",                 desc: "Full MVVM implementation on both platforms with step-by-step view", section: "android" },
        { time: "1:25–1:30",  label: "Lab intro",                  desc: "Refactoring a previous assignment to MVVM", section: null },
        { time: "1:30–2:25",  label: "Lab — breakout rooms",       desc: "Refactor your Week 4 app to proper MVVM", section: "lab" },
        { time: "2:25–2:30",  label: "Wrap-up",                    desc: "Capstone M1 expectations + Session 2 preview", section: "wrapup" },
      ].map(r => (
        <div key={r.time} style={{
          display: "flex", gap: 12, padding: "8px 0",
          borderBottom: `0.5px solid ${GRAY}`,
          background: r.section === "android" ? BLUE_LIGHT : r.section === "ios" ? GREEN_LIGHT : r.section === "lab" ? TEAL_LIGHT : r.section === "wrapup" ? AMBER_LIGHT : "transparent",
          borderRadius: r.section ? 6 : 0, paddingLeft: r.section ? 8 : 0, marginLeft: r.section ? -8 : 0
        }}>
          <span style={{ fontSize: 12, minWidth: 90, flexShrink: 0, fontWeight: r.section ? 600 : 400, color: r.section === "android" ? BLUE : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : MUTED }}>{r.time}</span>
          <span style={{ fontSize: 12, fontWeight: 600, minWidth: 180, flexShrink: 0, color: r.section === "android" ? BLUE : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : PURPLE }}>{r.label}</span>
          <span style={{ fontSize: 12, color: r.section === "android" ? BLUE : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : TEXT }}>{r.desc}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: 14, marginTop: 10, flexWrap: "wrap" }}>
        {[{ color: BLUE, label: "Code-along" }, { color: TEAL, label: "Lab" }, { color: AMBER, label: "Wrap-up" }].map(l => (
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

  // 5: The three layers — overview
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

  // 6: View layer — deep dive
  () => (
    <Shell tag="View layer" tagColor="purple" timer="4" title="The View layer — render state, forward actions" subtitle="A dumb display board that reacts to what it's given" notes="The key insight here is passivity. The View is purely reactive — it receives state, it displays state, it forwards events. It never initiates work. Students often want to put logic in the View because it feels natural. The question to ask: 'If I replaced this Composable / SwiftUI View with a completely different UI, would the app still work?' If yes, the View is doing its job. If no, logic has leaked in.">
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What a View looks like in practice</p>
          <OSToggle
            android={<pre style={preStyle}>{`@Composable
fun MovieScreen(viewModel: MovieViewModel = viewModel()) {

    // 1. Observe — subscribe to the ViewModel's state stream
    val state by viewModel.uiState.collectAsStateWithLifecycle()

    // 2. Render — display whatever state dictates
    when (state) {
        is Loading -> CircularProgressIndicator()
        is Success -> MovieList(
            movies = (state as Success).movies,
            // 3. Forward — pass ViewModel callbacks down
            onFavourite = viewModel::onFavouriteTapped
        )
        is Error -> ErrorMessage(message = (state as Error).message)
    }
}

// Child View — receives data and callbacks, nothing else
@Composable
fun MovieList(movies: List<Movie>, onFavourite: (Movie) -> Unit) {
    LazyColumn {
        items(movies) { movie ->
            Row {
                Text(movie.title)
                // Tap forwards to parent callback — no logic here
                IconButton(onClick = { onFavourite(movie) }) {
                    Icon(Icons.Default.Favorite, null)
                }
            }
        }
    }
}`}</pre>}
            ios={<pre style={preStyle}>{`struct MovieScreen: View {

    // 1. Observe — @StateObject keeps the ViewModel alive
    //    and re-renders body whenever @Published changes
    @StateObject private var viewModel = MovieViewModel()

    var body: some View {
        // 2. Render — display whatever state dictates
        switch viewModel.uiState {
        case .loading:
            ProgressView()
        case .success(let movies):
            // 3. Forward — pass ViewModel callbacks down
            MovieList(movies: movies,
                onFavourite: viewModel.onFavouriteTapped)
        case .error(let msg):
            ErrorMessage(message: msg)
        }
    }
}

// Child View — receives data and callbacks, nothing else
struct MovieList: View {
    let movies: [Movie]
    let onFavourite: (Movie) -> Void

    var body: some View {
        List(movies) { movie in
            HStack {
                Text(movie.title)
                Spacer()
                // Tap forwards to parent callback — no logic here
                Button(action: { onFavourite(movie) }) {
                    Image(systemName: "heart")
                }
            }
        }
    }
}`}</pre>}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>The three things a View does</p>
          {[
            { n: "1", label: "Observe", detail: "Subscribe to the ViewModel's state. One line of code — the framework handles the rest.", color: PURPLE_LIGHT, fg: PURPLE_DARK },
            { n: "2", label: "Render", detail: "Display whatever the state says. Use when/switch to handle every case. No calculations, no transformations.", color: TEAL_LIGHT, fg: TEAL_DARK },
            { n: "3", label: "Forward", detail: "When the user acts, call a ViewModel function. Never handle the result directly — that's the ViewModel's job.", color: AMBER_LIGHT, fg: "#633806" },
          ].map(item => (
            <div key={item.n} style={{ background: item.color, borderRadius: 8, padding: "8px 12px", display: "flex", gap: 10 }}>
              <span style={{ fontSize: 16, fontWeight: 800, color: item.fg, flexShrink: 0 }}>{item.n}</span>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: item.fg, margin: "0 0 2px" }}>{item.label}</p>
                <p style={{ fontSize: 11, color: item.fg, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{item.detail}</p>
              </div>
            </div>
          ))}
          <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "8px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", margin: "0 0 4px" }}>Anti-patterns to watch for</p>
            {["if (movies.size > 10) showPagination = true  ← logic in View", "val filtered = movies.filter { it.rating > 4 }  ← transform in View", "api.getMovies()  ← network call in View"].map(t => (
              <div key={t} style={{ fontSize: 10, fontFamily: "monospace", color: "#A32D2D", margin: "2px 0", opacity: 0.9 }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 7: ViewModel layer — deep dive
  () => (
    <Shell tag="ViewModel layer" tagColor="teal" timer="4" title="The ViewModel layer — coordinate, transform, and expose" subtitle="The brain of the screen — it thinks so the View doesn't have to" notes="The ViewModel is doing three things: holding state, handling actions, and talking to the repository. The 'private write, public read' pattern for StateFlow / @Published is the most important technical detail — emphasise that the View can observe but never mutate state directly. The viewModelScope / @MainActor pattern is also critical: it ensures async work is tied to the ViewModel's lifecycle, not the screen's.">
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What a ViewModel looks like in practice</p>
          <OSToggle
            android={<pre style={preStyle}>{`class MovieViewModel(
    private val repository: MovieRepository
) : ViewModel() {

    // Private write — only this class can change state
    private val _uiState = MutableStateFlow<MovieUiState>(Loading)
    // Public read — the View gets a read-only window
    val uiState: StateFlow<MovieUiState> = _uiState.asStateFlow()

    init { loadMovies() }

    // Handles a user action — coordinates the work
    fun onFavouriteTapped(movie: Movie) {
        viewModelScope.launch {          // ← lifecycle-aware coroutine
            _uiState.value = Loading     // ← show feedback immediately
            try {
                repository.toggleFavourite(movie)  // ← delegate to Model
                _uiState.value = Success(repository.getMovies())
            } catch (e: Exception) {
                // Transform raw error → user-readable message
                _uiState.value = Error("Could not update favourite")
            }
        }
    }
}`}</pre>}
            ios={<pre style={preStyle}>{`class MovieViewModel: ObservableObject {

    // @Published — any assignment notifies all SwiftUI observers
    // No separate "private mutable" needed: the class itself
    // owns the property; callers get read-only access via the VM.
    @Published private(set) var uiState: MovieUiState = .loading

    private let repository: MovieRepository

    init(repository: MovieRepository = MovieRepository()) {
        self.repository = repository
        Task { await loadMovies() }
    }

    // Handles a user action — coordinates the work
    func onFavouriteTapped(_ movie: Movie) {
        uiState = .loading             // ← show feedback immediately
        Task { @MainActor in           // ← ensures UI updates on main thread
            do {
                try await repository.toggleFavourite(movie) // ← delegate to Model
                let movies = try await repository.getMovies()
                uiState = .success(movies)
            } catch {
                // Transform raw error → user-readable message
                uiState = .error("Could not update favourite")
            }
        }
    }
}`}</pre>}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>Key ViewModel properties</p>
          {[
            { label: "Single source of truth", detail: "One uiState property describes everything about the screen. No separate isLoading, hasError, and data variables that can contradict each other.", color: TEAL_LIGHT, fg: TEAL_DARK },
            { label: "Private write, public read", detail: "MutableStateFlow / @Published(set:private) means only the ViewModel can change state. The View can observe but never mutate.", color: PURPLE_LIGHT, fg: PURPLE_DARK },
            { label: "Survives configuration changes", detail: "Android: the framework keeps the ViewModel alive across screen rotations. iOS: @StateObject ensures the same instance persists.", color: BLUE_LIGHT, fg: BLUE },
            { label: "No UI imports", detail: "A ViewModel that imports Compose, UIKit, or SwiftUI is broken. It must be testable without a screen.", color: AMBER_LIGHT, fg: "#633806" },
          ].map(item => (
            <div key={item.label} style={{ background: item.color, borderRadius: 8, padding: "8px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: item.fg, margin: "0 0 2px" }}>{item.label}</p>
              <p style={{ fontSize: 11, color: item.fg, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 8: Model layer — deep dive
  () => (
    <Shell tag="Model layer" tagColor="amber" timer="4" title="The Model layer — own the data, expose it cleanly" subtitle="The repository is the single door into your data" notes="Students already built repositories and DAOs in Week 5 — this is their entire Model layer. The new concept here is the Repository pattern as a facade: it hides whether data came from the network or the local cache. The ViewModel doesn't know and shouldn't care. The 'network-first, cache-fallback' pattern in the Android example is a good concrete illustration of why this abstraction is valuable.">
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What the Model layer looks like in practice</p>
          <OSToggle
            android={<pre style={preStyle}>{`// The Repository is the only door into your data.
// The ViewModel calls it — and doesn't know or care
// whether data came from the network or the local cache.
class MovieRepository(
    private val apiService: MovieApiService,
    private val dao: MovieDao
) {
    suspend fun getMovies(): List<Movie> {
        return try {
            // Try network first
            val movies = apiService.fetchMovies()
            dao.insertAll(movies)   // update local cache
            movies
        } catch (e: Exception) {
            // Fall back to cache — ViewModel sees the same type either way
            dao.getAllMovies()
        }
    }

    suspend fun toggleFavourite(movie: Movie) {
        dao.update(movie.copy(isFavourite = !movie.isFavourite))
    }
}

// The Model also includes:
// interface MovieApiService { suspend fun fetchMovies(): List<Movie> }
// interface MovieDao { suspend fun getAllMovies(): List<Movie> ... }`}</pre>}
            ios={<pre style={preStyle}>{`// The Repository is the only door into your data.
// The ViewModel calls it — and doesn't know or care
// whether data came from the network or the local store.
class MovieRepository {
    private let apiService: MovieApiService
    private let store: MovieStore  // SwiftData / UserDefaults wrapper

    func getMovies() async throws -> [Movie] {
        do {
            // Try network first
            let movies = try await apiService.fetchMovies()
            try await store.save(movies)   // update local cache
            return movies
        } catch {
            // Fall back to cache — ViewModel sees the same type either way
            return try await store.load()
        }
    }

    func toggleFavourite(_ movie: Movie) async throws {
        var updated = movie
        updated.isFavourite.toggle()
        try await store.update(updated)
    }
}

// The Model also includes:
// protocol MovieApiService { func fetchMovies() async throws -> [Movie] }
// class MovieStore { func load() async throws -> [Movie] ... }`}</pre>}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>What lives in the Model layer</p>
          {[
            { label: "Repository", detail: "The facade. One class per domain area (MovieRepository, UserRepository). The ViewModel talks to this — nothing else.", color: AMBER_LIGHT, fg: "#633806" },
            { label: "API Service", detail: "Retrofit interface (Android) or URLSession wrapper (iOS). Fetches raw data from the network.", color: BLUE_LIGHT, fg: BLUE },
            { label: "Local storage", detail: "Room + DAO (Android) or SwiftData / UserDefaults (iOS). Persists data across app launches.", color: GREEN_LIGHT, fg: GREEN },
          ].map(item => (
            <div key={item.label} style={{ background: item.color, borderRadius: 8, padding: "8px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: item.fg, margin: "0 0 2px" }}>{item.label}</p>
              <p style={{ fontSize: 11, color: item.fg, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{item.detail}</p>
            </div>
          ))}
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "8px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px" }}>You already built this</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.4 }}>Your Week 4 API service and Week 5 repository + DAO are the complete Model layer. The ViewModel is the only genuinely new thing today.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 9: The layer diagram — visualised
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

  // 10: Tracing a user action — overview
  () => (
    <Shell tag="Concept" timer="3" title="Tracing a user action end to end" subtitle="What actually happens when a user taps a heart — overview" notes="Use this slide to preview the five-step trace before diving into each step individually. Students should be able to predict each next step as you walk forward through the slides. The key revelation — that the View never calls the API directly — is the 'aha' moment. Let students guess before revealing.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>User taps the heart on a movie — 5 steps</p>
          {[
            { layer: "View", dir: "↓ down", color: PURPLE_LIGHT, fg: PURPLE_DARK, action: "Button tap detected", detail: "The View calls viewModel.onFavouriteTapped(movie). That's it. The View's job is done — it has no idea what happens next." },
            { layer: "ViewModel", dir: "↓ down", color: TEAL_LIGHT, fg: TEAL_DARK, action: "Action received, repository called", detail: "The ViewModel sets state to Loading, then calls repository.toggleFavourite(movie) in a coroutine / async Task." },
            { layer: "Model", dir: "↑ up", color: AMBER_LIGHT, fg: "#633806", action: "Data saved, result returned", detail: "The repository writes to the database, then returns the updated list. It has no idea the result will go to a movie screen." },
            { layer: "ViewModel", dir: "↑ up", color: TEAL_LIGHT, fg: TEAL_DARK, action: "State updated", detail: "The ViewModel emits a new Success state via StateFlow / @Published. Any observer will receive this automatically." },
            { layer: "View", dir: "✓ done", color: PURPLE_LIGHT, fg: PURPLE_DARK, action: "UI re-renders", detail: "The View, observing the state stream, automatically re-renders. The heart icon updates — no manual refresh triggered." },
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
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>The pattern is always the same</p>
          <Info>{"User action → View → ViewModel → Model → ViewModel → View. Every feature you build in your capstone follows this exact path. The next five slides walk through each step with real code."}</Info>
          {[
            { title: "The View never calls the API", detail: "Every network or database operation goes through ViewModel → repository. The View only ever calls ViewModel functions." },
            { title: "The UI update is automatic", detail: "The View didn't need to be told to refresh. It was observing the state stream — when the stream emitted, the UI updated." },
            { title: "Each layer did exactly one thing", detail: "View forwarded a tap. ViewModel coordinated. Repository saved data. None needed to know how the others worked internally." },
          ].map(obs => (
            <div key={obs.title} style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>{obs.title}</p>
              <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{obs.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 11: Trace step 1 — View forwards the action
  () => (
    <Shell tag="Trace · Step 1" tagColor="purple" timer="2" title="Step 1 — View detects the tap and forwards it" subtitle="The View's entire job fits in one line">
      <FlowBar active={0} />
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 12 }}>
        <OSToggle
          android={<pre style={preStyle}>{`@Composable
fun MovieRow(
    movie: Movie,
    onFavourite: (Movie) -> Unit   // callback from ViewModel
) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Text(movie.title, modifier = Modifier.weight(1f))

        IconButton(
            // ← THIS is the View's entire responsibility:
            //   forward the tap to whoever provided the callback.
            //   The View does not know what happens next.
            onClick = { onFavourite(movie) }
        ) {
            Icon(
                imageVector = if (movie.isFavourite)
                    Icons.Filled.Favorite else Icons.Outlined.FavoriteBorder,
                contentDescription = "Toggle favourite"
            )
        }
    }
}

// In MovieScreen, the callback comes from the ViewModel:
// onFavourite = viewModel::onFavouriteTapped`}</pre>}
          ios={<pre style={preStyle}>{`struct MovieRow: View {
    let movie: Movie
    let onFavourite: (Movie) -> Void   // callback from ViewModel

    var body: some View {
        HStack {
            Text(movie.title)
            Spacer()
            Button(
                // ← THIS is the View's entire responsibility:
                //   forward the tap to whoever provided the callback.
                //   The View does not know what happens next.
                action: { onFavourite(movie) }
            ) {
                Image(systemName: movie.isFavourite
                    ? "heart.fill" : "heart")
                    .foregroundColor(movie.isFavourite ? .red : .gray)
            }
        }
    }
}

// In MovieScreen, the callback comes from the ViewModel:
// onFavourite: viewModel.onFavouriteTapped`}</pre>}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>What just happened</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>The user tapped. The View detected it. The View called the callback. The View's job is complete — it has no knowledge of what the callback will do.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>Why pass a callback instead of the ViewModel?</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>MovieRow doesn't need to know about MovieViewModel. By accepting a plain callback, MovieRow is reusable in any context — a watchlist, a favourites tab, a search result. No ViewModel dependency needed.</p>
          </div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 3px" }}>Handed off to →</p>
            <p style={{ fontSize: 11, color: TEXT, margin: 0 }}>The ViewModel's <code style={{ fontFamily: "monospace", fontSize: 10 }}>onFavouriteTapped(movie)</code> function.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 12: Trace step 2 — ViewModel coordinates
  () => (
    <Shell tag="Trace · Step 2" tagColor="teal" timer="2" title="Step 2 — ViewModel receives the action and coordinates" subtitle="Sets loading state, then delegates to the repository">
      <FlowBar active={1} />
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 12 }}>
        <OSToggle
          android={<pre style={preStyle}>{`class MovieViewModel(
    private val repository: MovieRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow<MovieUiState>(Loading)
    val uiState: StateFlow<MovieUiState> = _uiState.asStateFlow()

    fun onFavouriteTapped(movie: Movie) {
        viewModelScope.launch {
            // 2a. Signal to the UI that work is in progress
            _uiState.value = Loading

            try {
                // 2b. Delegate to the Model — ViewModel never
                //     touches the database or network directly
                repository.toggleFavourite(movie)

                // 2c. Fetch the refreshed list
                val updated = repository.getMovies()
                _uiState.value = Success(updated)

            } catch (e: Exception) {
                // 2d. Transform the raw error into a user message
                _uiState.value = Error("Could not update favourite")
            }
        }
        // viewModelScope ties the coroutine to this ViewModel's
        // lifecycle — auto-cancelled if the ViewModel is cleared
    }
}`}</pre>}
          ios={<pre style={preStyle}>{`class MovieViewModel: ObservableObject {

    @Published private(set) var uiState: MovieUiState = .loading
    private let repository: MovieRepository

    func onFavouriteTapped(_ movie: Movie) {
        // 2a. Signal to the UI that work is in progress
        uiState = .loading

        Task { @MainActor in
            do {
                // 2b. Delegate to the Model — ViewModel never
                //     touches the database or network directly
                try await repository.toggleFavourite(movie)

                // 2c. Fetch the refreshed list
                let updated = try await repository.getMovies()
                uiState = .success(updated)

            } catch {
                // 2d. Transform the raw error into a user message
                uiState = .error("Could not update favourite")
            }
        }
        // @MainActor ensures all uiState assignments happen
        // on the main thread, which SwiftUI requires
    }
}`}</pre>}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>What just happened</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>The ViewModel received the action, immediately gave the UI feedback (Loading state), then handed off the actual data work to the repository — which lives in the Model layer.</p>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>Why set Loading first?</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>The async operation may take 200ms or 2 seconds. Setting Loading immediately shows a spinner without waiting. The user gets instant feedback that their tap was registered.</p>
          </div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 3px" }}>Handed off to →</p>
            <p style={{ fontSize: 11, color: TEXT, margin: 0 }}>The repository's <code style={{ fontFamily: "monospace", fontSize: 10 }}>toggleFavourite(movie)</code> and <code style={{ fontFamily: "monospace", fontSize: 10 }}>getMovies()</code> functions in the Model layer.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 13: Trace step 3 — Model executes
  () => (
    <Shell tag="Trace · Step 3" tagColor="amber" timer="2" title="Step 3 — Model executes the data operation" subtitle="The repository writes and returns — knowing nothing about the UI">
      <FlowBar active={2} />
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 12 }}>
        <OSToggle
          android={<pre style={preStyle}>{`class MovieRepository(
    private val apiService: MovieApiService,
    private val dao: MovieDao
) {
    // The repository has NO idea:
    // — which screen called this
    // — what the result will be shown in
    // — whether there's even a UI running at all

    suspend fun toggleFavourite(movie: Movie) {
        // Write the change to the local database
        val updated = movie.copy(isFavourite = !movie.isFavourite)
        dao.update(updated)

        // Optionally sync with the server in the background
        // apiService.syncFavourites(listOf(updated))
    }

    suspend fun getMovies(): List<Movie> {
        return try {
            val movies = apiService.fetchMovies()
            dao.insertAll(movies)
            movies
        } catch (e: Exception) {
            // Network failed — return cached data
            dao.getAllMovies()
        }
    }
}`}</pre>}
          ios={<pre style={preStyle}>{`class MovieRepository {
    private let apiService: MovieApiService
    private let store: MovieStore

    // The repository has NO idea:
    // — which ViewModel called this
    // — what the result will be shown in
    // — whether there's even a UI running at all

    func toggleFavourite(_ movie: Movie) async throws {
        // Write the change to local storage
        var updated = movie
        updated.isFavourite.toggle()
        try await store.update(updated)

        // Optionally sync with the server in the background
        // try? await apiService.syncFavourites([updated])
    }

    func getMovies() async throws -> [Movie] {
        do {
            let movies = try await apiService.fetchMovies()
            try await store.save(movies)
            return movies
        } catch {
            // Network failed — return cached data
            return try await store.load()
        }
    }
}`}</pre>}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#633806", margin: "0 0 4px" }}>What just happened</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>The repository updated the local database and fetched the refreshed list. It returned plain data — a List{`<Movie>`} / [Movie]. No UI types, no state wrappers.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>Why the network-first / cache-fallback pattern?</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>This logic is hidden inside the repository. The ViewModel calls getMovies() and always gets data — it doesn't need to know whether the network succeeded. Swapping the strategy later is a one-file change.</p>
          </div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 3px" }}>Returned to →</p>
            <p style={{ fontSize: 11, color: TEXT, margin: 0 }}>The ViewModel, which is awaiting the result inside its coroutine / Task.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 14: Trace step 4 — ViewModel emits new state
  () => (
    <Shell tag="Trace · Step 4" tagColor="teal" timer="2" title="Step 4 — ViewModel receives the result and emits new state" subtitle="One assignment triggers every observer automatically">
      <FlowBar active={3} />
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 12 }}>
        <OSToggle
          android={<pre style={preStyle}>{`fun onFavouriteTapped(movie: Movie) {
    viewModelScope.launch {
        _uiState.value = Loading

        try {
            repository.toggleFavourite(movie)
            val updated = repository.getMovies()

            // ← THIS is the state emission.
            // Assigning to _uiState.value pushes a new value
            // into the StateFlow. Every collector — regardless
            // of how many screens are observing — receives this
            // automatically. The ViewModel doesn't know who's
            // listening or how many observers there are.
            _uiState.value = Success(updated)

        } catch (e: Exception) {
            // Same mechanism for errors — one assignment,
            // all observers update.
            _uiState.value = Error("Could not update favourite")
        }
    }
}

// Note: _uiState is private — only the ViewModel can emit.
// Callers receive uiState: StateFlow<...> which is read-only.`}</pre>}
          ios={<pre style={preStyle}>{`func onFavouriteTapped(_ movie: Movie) {
    uiState = .loading

    Task { @MainActor in
        do {
            try await repository.toggleFavourite(movie)
            let updated = try await repository.getMovies()

            // ← THIS is the state emission.
            // Assigning to @Published var uiState triggers
            // Combine's objectWillChange publisher, which tells
            // every @StateObject and @ObservedObject observing
            // this ViewModel to re-render their body.
            // The ViewModel doesn't know which views those are.
            uiState = .success(updated)

        } catch {
            // Same mechanism for errors.
            uiState = .error("Could not update favourite")
        }
    }
}

// @MainActor ensures these assignments happen on the main
// thread — required for UI updates in SwiftUI.`}</pre>}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>What just happened</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>The ViewModel assigned a new Success state. This single assignment is the entire notification mechanism — StateFlow / @Published automatically fans out to all observers.</p>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>The ViewModel still doesn't know about the View</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>The ViewModel emitted. It doesn't know whether 1 or 10 screens are observing, or whether the device is in landscape mode or portrait. It just emitted — the observers handle the rest.</p>
          </div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 3px" }}>Flowing up to →</p>
            <p style={{ fontSize: 11, color: TEXT, margin: 0 }}>Every View that is collecting / observing the ViewModel's state property.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 15: Trace step 5 — View auto-renders
  () => (
    <Shell tag="Trace · Step 5" tagColor="purple" timer="2" title="Step 5 — View receives the new state and re-renders" subtitle="No manual refresh. No explicit notification. It just happens.">
      <FlowBar active={4} />
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 12 }}>
        <OSToggle
          android={<pre style={preStyle}>{`@Composable
fun MovieScreen(viewModel: MovieViewModel = viewModel()) {

    // collectAsStateWithLifecycle() subscribes to the StateFlow.
    // Whenever the ViewModel emits a new value, Compose
    // automatically schedules a recomposition of this function.
    // No callbacks. No manual invalidation. No notifyDataSetChanged().
    val state by viewModel.uiState.collectAsStateWithLifecycle()

    when (state) {
        is Loading -> CircularProgressIndicator()

        is Success -> {
            // This branch re-runs with the new movie list.
            // The movie whose isFavourite changed is now in the list
            // with the updated value — the heart icon flips.
            val movies = (state as Success).movies
            LazyColumn {
                items(movies) { movie ->
                    MovieRow(movie = movie,
                        onFavourite = viewModel::onFavouriteTapped)
                }
            }
        }
        is Error -> ErrorBanner((state as Error).message)
    }
}`}</pre>}
          ios={<pre style={preStyle}>{`struct MovieScreen: View {
    // @StateObject subscribes to all @Published changes.
    // When the ViewModel assigns uiState, SwiftUI automatically
    // calls body again on the main thread.
    // No callbacks. No explicit refresh. No reloadData().
    @StateObject private var viewModel = MovieViewModel()

    var body: some View {
        switch viewModel.uiState {
        case .loading:
            ProgressView()

        case .success(let movies):
            // body re-runs with the new movie array.
            // The movie whose isFavourite changed is now
            // in the array with the updated value — heart flips.
            List(movies) { movie in
                MovieRow(movie: movie,
                    onFavourite: viewModel.onFavouriteTapped)
            }

        case .error(let msg):
            ErrorBanner(message: msg)
        }
    }
}`}</pre>}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>What just happened</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>The state stream emitted. The framework re-ran the View. The heart icon now reflects the updated value — driven entirely by the new state, not by any imperative command from the ViewModel.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>The complete loop</p>
            <div style={{ fontSize: 11, color: TEAL_DARK, lineHeight: 1.7 }}>
              {["View forwards tap →", "ViewModel sets Loading →", "Repository saves + returns →", "ViewModel emits Success →", "View re-renders ✓"].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 6 }}>
                  <span style={{ fontWeight: 700, minWidth: 16 }}>{i + 1}.</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <Info>{"Every feature in your capstone follows this exact five-step loop. Once you can trace any action through all five steps, you understand MVVM."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 16: What it looks like before vs after — diagram
  () => (
    <Shell tag="Concept" timer="5" title="Before and after — the structural shift" subtitle="From tangled to layered" notes="This is a visual comparison, not code yet. Ask students: in the left diagram, if the API response format changes, how many things do you need to touch? In the right diagram? The answer (everything vs just the repository) makes the case for MVVM better than any explanation.">
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

  // 17: Why it matters — the real benefits
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

  // 18: Connecting to what students already built
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

  // 19: UiState — modelling every possible screen state
  () => (
    <Shell tag="Concept" timer="5" title="UiState — modelling every possible screen state" subtitle="Why three separate booleans always break down" notes="This slide is the conceptual key to the sealed class / enum pattern. The boolean trap is something students will immediately recognise from their own code. The compiler enforcement point — that the when/switch statement forces you to handle every case — is the most important thing to convey.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 10 }}>
        <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 8px" }}>The boolean trap</p>
          <pre style={{ ...preStyle, background: "rgba(162,45,45,0.08)", color: "#791F1F" }}>{`// Which combination is valid?
var isLoading = false
var hasError  = false
var movies    = emptyList()

// isLoading=true AND hasError=true? Possible.
// isLoading=false, hasError=false, movies=[]? Also possible.
// There are 8 combinations — only 3 are meaningful.
// You end up writing guards for states that should never exist.`}</pre>
          <p style={{ fontSize: 11, color: "#A32D2D", margin: "8px 0 0", lineHeight: 1.5 }}>Multiple booleans allow impossible states. You write extra guards for combinations that should never exist — and sometimes forget one.</p>
        </div>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 8px" }}>The sealed class / enum fix</p>
          <OSToggle
            android={<pre style={preStyle}>{`sealed class MovieUiState {
    object Loading : MovieUiState()
    data class Success(
        val movies: List<Movie>
    ) : MovieUiState()
    data class Error(
        val message: String
    ) : MovieUiState()
}

// The compiler forces you to handle every case:
when (state) {
    is Loading -> CircularProgressIndicator()
    is Success -> MovieList(state.movies)
    is Error   -> ErrorBanner(state.message)
    // Miss a branch? Compile error. Not a runtime crash.
}`}</pre>}
            ios={<pre style={preStyle}>{`enum MovieUiState {
    case loading
    case success([Movie])
    case error(String)
}

// The compiler forces you to handle every case:
switch viewModel.uiState {
case .loading:
    ProgressView()
case .success(let movies):
    MovieList(movies: movies)
case .error(let msg):
    ErrorBanner(message: msg)
// Miss a branch? Compiler warning. Not a runtime crash.
}`}</pre>}
          />
          <p style={{ fontSize: 11, color: TEAL_DARK, margin: "8px 0 0", lineHeight: 1.5 }}>Exactly three states. Only one can be active at a time. The compiler enforces exhaustive handling.</p>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[
          { label: "Loading", detail: "Show a spinner. No data available yet.", color: PURPLE_LIGHT, fg: PURPLE_DARK },
          { label: "Success", detail: "Carries the data payload. Render the list.", color: TEAL_LIGHT, fg: TEAL_DARK },
          { label: "Error", detail: "Carries the message string. Show a banner.", color: AMBER_LIGHT, fg: "#633806" },
        ].map(s => (
          <div key={s.label} style={{ background: s.color, borderRadius: 8, padding: "8px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: s.fg, margin: "0 0 2px" }}>{s.label}</p>
            <p style={{ fontSize: 11, color: s.fg, margin: 0, opacity: 0.85 }}>{s.detail}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 20: ViewModel ownership — who creates it?
  () => (
    <Shell tag="Concept" timer="5" title="ViewModel ownership — who creates it?" subtitle="The most common source of mysterious state resets" notes="This is a short but important slide. The mistake of calling MovieViewModel() directly (Android) or using @ObservedObject where @StateObject is needed (iOS) causes state to be wiped on every recomposition / re-render. Students who hit this bug spend hours confused. A five-minute explanation now saves them that pain.">
      <OSToggle
        android={
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: BLUE, margin: "0 0 6px" }}>viewModel() — let the framework own it</p>
              <pre style={preStyle}>{`@Composable
fun MovieScreen(
    // viewModel() finds or creates the ViewModel
    // scoped to this screen's lifecycle.
    // Survives recompositions AND rotation.
    viewModel: MovieViewModel = viewModel()
) {
    val state by viewModel.uiState
        .collectAsStateWithLifecycle()
    // ...
}

// ✗ NEVER do this — creates a new instance
//   on every recomposition, wiping all state:
// val vm = MovieViewModel(repository)`}</pre>
              <p style={{ fontSize: 11, color: BLUE, margin: "8px 0 0", lineHeight: 1.5 }}>Never write <code style={{ fontFamily: "monospace", fontSize: 10 }}>MovieViewModel()</code> inside a Composable directly — it resets on every recomposition.</p>
            </div>
            <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 6px" }}>Pass data down, not the ViewModel</p>
              <pre style={preStyle}>{`// Root screen — creates and owns the ViewModel
@Composable
fun MovieScreen() {
    val vm: MovieViewModel = viewModel()
    MovieList(
        movies = (vm.uiState.value as? Success)?.movies ?: emptyList(),
        onFavourite = vm::onFavouriteTapped
    )
}

// Child — never calls viewModel() itself
@Composable
fun MovieList(
    movies: List<Movie>,
    onFavourite: (Movie) -> Unit
) { /* renders only */ }`}</pre>
              <p style={{ fontSize: 11, color: PURPLE_DARK, margin: "8px 0 0", lineHeight: 1.5 }}>Pass state and callbacks to children — not the ViewModel itself. Keeps child Composables reusable and testable in isolation.</p>
            </div>
          </div>
        }
        ios={
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: GREEN, margin: "0 0 6px" }}>@StateObject — creates and owns</p>
              <pre style={preStyle}>{`struct MovieScreen: View {
    // @StateObject creates the ViewModel once
    // and keeps it alive for this view's lifetime.
    // SwiftUI will NOT recreate it on re-renders.
    @StateObject private var viewModel
        = MovieViewModel()

    var body: some View { ... }
}

// ✗ NEVER use @ObservedObject to create:
// @ObservedObject var viewModel = MovieViewModel()
// — recreated on every re-render, state wiped`}</pre>
              <p style={{ fontSize: 11, color: GREEN, margin: "8px 0 0", lineHeight: 1.5 }}>Use @StateObject at the root of a screen hierarchy. It creates the ViewModel once and owns it.</p>
            </div>
            <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 6px" }}>@ObservedObject — receives from parent</p>
              <pre style={preStyle}>{`struct MovieListView: View {
    // @ObservedObject observes a ViewModel
    // that was created and owned by a parent view.
    @ObservedObject var viewModel: MovieViewModel

    var body: some View { ... }
}

// In the parent:
MovieListView(viewModel: viewModel)

// Rule of thumb:
// @StateObject  → "I create this"
// @ObservedObject → "I receive this"`}</pre>
              <p style={{ fontSize: 11, color: TEAL_DARK, margin: "8px 0 0", lineHeight: 1.5 }}>Use @ObservedObject only when passing a ViewModel down from a parent. Never create a new instance with @ObservedObject.</p>
            </div>
          </div>
        }
      />
      <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "8px 12px", marginTop: 8 }}>
        <p style={{ fontSize: 11, color: "#791F1F", margin: 0 }}><strong>Rule:</strong> Android — use <code style={{ fontFamily: "monospace", fontSize: 10 }}>viewModel()</code>, never <code style={{ fontFamily: "monospace", fontSize: 10 }}>MovieViewModel()</code> directly. &nbsp; iOS — @StateObject at the screen root, @ObservedObject when passing down.</p>
      </div>
    </Shell>
  ),

  // 21: Code-along — implementing MVVM (merged Android + iOS)
  () => (
    <Shell tag="Code-along" timer="15" title="Implementing MVVM — the full pattern" subtitle="ViewModel + UiState on both platforms" notes="Walk through Step view platform by platform — Android first, then iOS, calling out the parallels at each step. Then flip to Full code so students can see the complete file before the lab. Key callouts: sealed class vs enum (same purpose, different syntax); private MutableStateFlow vs @Published private(set) (same private-write pattern); viewModelScope.launch vs Task @MainActor; collectAsStateWithLifecycle vs @StateObject.">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Sealed class — model every screen state explicitly">
                    <pre style={preStyle}>{`sealed class MovieUiState {
    object Loading : MovieUiState()
    data class Success(val movies: List<Movie>) : MovieUiState()
    data class Error(val message: String) : MovieUiState()
}`}</pre>
                  </Step>
                  <Step n={2} title="ViewModel class — private write, public read">
                    <pre style={preStyle}>{`class MovieViewModel(
    private val repository: MovieRepository
) : ViewModel() {
    private val _uiState = MutableStateFlow<MovieUiState>(Loading)
    val uiState: StateFlow<MovieUiState> = _uiState.asStateFlow()
    init { loadMovies() }
}`}</pre>
                  </Step>
                  <Step n={3} title="Load data — viewModelScope keeps work off the main thread">
                    <pre style={preStyle}>{`fun loadMovies() {
    viewModelScope.launch {
        _uiState.value = Loading
        try {
            val movies = repository.getMovies()
            _uiState.value = Success(movies)
        } catch (e: Exception) {
            _uiState.value = Error(e.message ?: "Something went wrong")
        }
    }
}`}</pre>
                  </Step>
                  <Step n={4} title="Observe in Compose — collectAsStateWithLifecycle()">
                    <pre style={preStyle}>{`@Composable
fun MovieScreen(viewModel: MovieViewModel = viewModel()) {
    val state by viewModel.uiState.collectAsStateWithLifecycle()
    when (state) {
        is Loading -> CircularProgressIndicator()
        is Success -> LazyColumn { items((state as Success).movies) { MovieRow(it, viewModel::onFavouriteTapped) } }
        is Error   -> ErrorBanner((state as Error).message)
    }
}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="UiState enum — mirrors the Kotlin sealed class" accent={TEAL}>
                    <pre style={preStyle}>{`enum MovieUiState {
    case loading
    case success([Movie])
    case error(String)
}`}</pre>
                  </Step>
                  <Step n={2} title="ObservableObject class — @Published drives SwiftUI updates" accent={TEAL}>
                    <pre style={preStyle}>{`class MovieViewModel: ObservableObject {
    @Published private(set) var uiState: MovieUiState = .loading
    private let repository: MovieRepository

    init(repository: MovieRepository = MovieRepository()) {
        self.repository = repository
        Task { await loadMovies() }
    }
}`}</pre>
                  </Step>
                  <Step n={3} title="Load data — @MainActor ensures UI updates on the main thread" accent={TEAL}>
                    <pre style={preStyle}>{`@MainActor
func loadMovies() async {
    uiState = .loading
    do {
        let movies = try await repository.getMovies()
        uiState = .success(movies)
    } catch {
        uiState = .error(error.localizedDescription)
    }
}`}</pre>
                  </Step>
                  <Step n={4} title="Observe in SwiftUI — @StateObject at the screen root" accent={TEAL}>
                    <pre style={preStyle}>{`struct MovieScreen: View {
    @StateObject private var viewModel = MovieViewModel()

    var body: some View {
        switch viewModel.uiState {
        case .loading:             ProgressView()
        case .success(let movies): List(movies) { MovieRow($0, viewModel.onFavouriteTapped) }
        case .error(let msg):      ErrorBanner(message: msg)
        }
    }
}`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={<CodePane title="Kotlin — MovieViewModel.kt + MovieScreen.kt" accent={BLUE}>{`sealed class MovieUiState {
    object Loading : MovieUiState()
    data class Success(val movies: List<Movie>) : MovieUiState()
    data class Error(val message: String) : MovieUiState()
}

class MovieViewModel(
    private val repository: MovieRepository
) : ViewModel() {
    private val _uiState = MutableStateFlow<MovieUiState>(Loading)
    val uiState: StateFlow<MovieUiState> = _uiState.asStateFlow()

    init { loadMovies() }

    fun loadMovies() {
        viewModelScope.launch {
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
}

@Composable
fun MovieScreen(viewModel: MovieViewModel = viewModel()) {
    val state by viewModel.uiState.collectAsStateWithLifecycle()
    when (state) {
        is Loading -> CircularProgressIndicator()
        is Success -> LazyColumn { items((state as Success).movies) { MovieRow(it, viewModel::onFavouriteTapped) } }
        is Error   -> ErrorBanner((state as Error).message)
    }
}`}</CodePane>}
              ios={<CodePane title="Swift — MovieViewModel.swift + MovieScreen.swift" accent={GREEN}>{`enum MovieUiState {
    case loading
    case success([Movie])
    case error(String)
}

class MovieViewModel: ObservableObject {
    @Published private(set) var uiState: MovieUiState = .loading
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

    func onFavouriteTapped(_ movie: Movie) {
        Task { @MainActor in
            try? await repository.toggleFavourite(movie)
            await loadMovies()
        }
    }
}

struct MovieScreen: View {
    @StateObject private var viewModel = MovieViewModel()

    var body: some View {
        switch viewModel.uiState {
        case .loading:             ProgressView()
        case .success(let movies): List(movies) { MovieRow($0, viewModel.onFavouriteTapped) }
        case .error(let msg):      ErrorBanner(message: msg)
        }
    }
}`}</CodePane>}
            />
          }
        />
      </div>
      <Info>{"The ViewModel never imports SwiftUI, UIKit, or Compose. The View never calls the repository directly. This boundary is the entire discipline of MVVM."}</Info>
    </Shell>
  ),

  // 22: Lab intro
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
            {["class XxxViewModel : ObservableObject", "@Published private(set) var uiState", "Task { await loadData() } in init", "@StateObject var viewModel = XxxViewModel()", "switch viewModel.uiState in body"].map(t => (
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

  // 23: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: "#fff", margin: "0 0 8px" }}>Session 1 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Your code now has a clear separation between what it shows and how it thinks.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned</p>
            {["Why spaghetti code breaks down at scale", "The three MVVM layers — overview + deep dives per layer", "What each layer is forbidden to know", "The one-way dependency rule", "Tracing a user action through all five steps", "The benefits: testability, rotation safety, team parallelism", "UiState: sealed class / enum over boolean flags", "ViewModel ownership: viewModel() vs @StateObject", "Android: ViewModel, StateFlow, sealed UiState", "iOS: ObservableObject, @Published, @StateObject"].map(t => (
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
