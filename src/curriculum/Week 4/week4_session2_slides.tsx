import { useState } from "react";

const PURPLE = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT = "#EEEDFE";
const TEAL = "#1D9E75";
const TEAL_LIGHT = "#E1F5EE";
const GRAY = "#F5F5F7";
const TEXT = "#1a1a2e";
const MUTED = "#6b7280";

const Tag = ({ children, color = PURPLE }) => (
  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", background: color === PURPLE ? PURPLE_LIGHT : TEAL_LIGHT, color, padding: "2px 8px", borderRadius: 20 }}>{children}</span>
);

const CodePane = ({ title, accent = PURPLE, children }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0" }}>{title}</div>
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: "0 0 8px 8px", lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Step = ({ n, title, children, accent = PURPLE }) => (
  <div style={{ marginBottom: 10, paddingLeft: 24, borderLeft: `2px solid #e5e7eb`, position: "relative" }}>
    <div style={{ position: "absolute", left: -14, top: 0, width: 26, height: 26, borderRadius: "50%", background: "#fff", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: accent }}>
      {n}
    </div>
    <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "2px 0 6px" }}>{title}</p>
    <div>{children}</div>
  </div>
);

const OSToggle = ({ android, ios }) => {
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

const ViewToggle = ({ steps, full }) => {
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

const Bullet = ({ children, sub }: { [k: string]: any }) => (
  <div style={{ display: "flex", gap: 8, margin: sub ? "3px 0 3px 20px" : "7px 0", alignItems: "flex-start" }}>
    <span style={{ color: sub ? TEAL : PURPLE, fontWeight: 700, fontSize: sub ? 12 : 14, marginTop: 1, flexShrink: 0 }}>{sub ? "◦" : "▸"}</span>
    <span style={{ fontSize: sub ? 13 : 14, color: sub ? MUTED : TEXT, lineHeight: 1.5 }}>{children}</span>
  </div>
);

const Notes = ({ children }) => (
  <div style={{ borderTop: `2px dashed ${PURPLE_LIGHT}`, marginTop: 14, paddingTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".06em" }}>Speaker notes</p>
    <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>{children}</p>
  </div>
);

const Discussion = ({ children }) => (
  <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "10px 14px", margin: "10px 0" }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: TEAL, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".06em" }}>Discussion prompt</p>
    <p style={{ fontSize: 13, color: "#085041", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Info = ({ children }) => (
  <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "8px 14px", margin: "8px 0" }}>
    <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Warn = ({ title, children }: { [k: string]: any }) => (
  <div className="callout-warn" style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "8px 12px", margin: "8px 0" }}>
    {title && <p style={{ fontSize: 12, fontWeight: 600, color: "#92400e", margin: "0 0 2px" }}>{title}</p>}
    <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Shell = ({ tag, title, subtitle, timer, children, notes, dark }: { [k: string]: any }) => (
  <div style={{ background: dark ? PURPLE_DARK : "#fff", border: `1px solid ${dark ? "transparent" : "#e5e7eb"}`, borderRadius: 12, padding: "24px 28px 18px", minHeight: 360, display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        {tag && <Tag color={dark ? "#fff" : PURPLE}>{tag}</Tag>}
        {timer && <span style={{ fontSize: 11, color: MUTED, background: GRAY, padding: "2px 8px", borderRadius: 20 }}>~{timer} min</span>}
      </div>
      <h2 style={{ fontSize: dark ? 24 : 20, fontWeight: 700, color: dark ? "#fff" : TEXT, margin: 0, lineHeight: 1.2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 13, color: dark ? "rgba(255,255,255,0.65)" : MUTED, margin: "5px 0 0", lineHeight: 1.4 }}>{subtitle}</p>}
    </div>
    <div style={{ flex: 1 }}>{children}</div>
    {notes && <Notes>{notes}</Notes>}
  </div>
);

const slides = [
  // 1: Title
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 4 — Session 2</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>Loading states, error handling<br/>and image loading</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Turning a working API call into a production-quality screen</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Loading / Success / Error", "Retry pattern", "Coil + AsyncImage"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${TEAL}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Quick lab check — ask students to show their app displaying real Last.fm data. Anyone who did not get it working needs to pair up. Today's content builds directly on Session 1's API call — a working call is a prerequisite."}</Notes>
    </div>
  ),

  // 2: Recap
  () => (
    <Shell tag="Recap" timer="5" title="Session 1 recap — your first API call" notes="Keep this to 3 minutes. The key check: does everyone have real Last.fm data showing in their list? Anyone who does not should pair with someone who does before today's lab.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          { q: "What is an HTTP GET request?", a: "Your app sends a URL to a server and receives data back — usually JSON. The app always initiates; the server only responds." },
          { q: "What does suspend mean in Kotlin?", a: "The function can pause without blocking the thread. It must be called from a coroutine. The thread is free while the network call waits." },
          { q: "What does async throws mean in Swift?", a: "async = can pause without blocking. throws = can fail with an error that must be caught with do/try/catch." },
          { q: "Why must field names match JSON keys exactly?", a: "Gson and JSONDecoder use the field names to find matching keys in the JSON. A mismatch means null or a decoding error." },
        ].map(item => (
          <div key={item.q} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{item.q}</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <Discussion>{"Your app currently shows a blank screen for a second before the list appears. Open a popular app on your phone and notice: does it show a blank screen while loading? What does it show instead? Why does that feel better?"}</Discussion>
    </Shell>
  ),

  // 3: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 60 minutes" notes="By the end of today the app handles all three network states correctly and displays real album art. This is the session that makes the app feel production-quality rather than a student project.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "5 min",  title: "Recap", desc: "Session 1 — API call, models, coroutines" },
          { num: "02", time: "5 min",  title: "Polish matters", desc: "What one hour of work does to UX" },
          { num: "03", time: "8 min",  title: "The three UI states", desc: "Loading, Success, Error — every networked screen needs all three" },
          { num: "04", time: "8 min",  title: "Sealed classes and enums", desc: "Why they exist, what problem they solve, then the code" },
          { num: "05", time: "10 min", title: "The retry pattern", desc: "State machine approach + step-by-step code" },
          { num: "06", time: "8 min",  title: "Image loading from URLs", desc: "Why a library, then Coil and AsyncImage" },
          { num: "07", time: "12 min", title: "Live code-along (3 steps)", desc: "UiState → render states → AsyncImage in row" },
          { num: "08", time: "4 min",  title: "Lab intro + Assignment 4", desc: "What you build today and this week" },
        ].map(item => (
          <div key={item.num} style={{ display: "flex", gap: 10, padding: "9px 11px", background: GRAY, borderRadius: 8, alignItems: "flex-start" }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: PURPLE_LIGHT, flexShrink: 0, lineHeight: 1, minWidth: 22 }}>{item.num}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>{item.title}</p>
                <span style={{ fontSize: 10, color: MUTED, flexShrink: 0, marginLeft: 6 }}>{item.time}</span>
              </div>
              <p style={{ fontSize: 11, color: MUTED, margin: "2px 0 0", lineHeight: 1.3 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 4: Polish matters
  () => (
    <Shell tag="Polish matters" title="The difference one hour of work makes" subtitle="Both apps fetch the same data — one feels finished, one feels broken" notes="Let students look at this slide for 30 seconds silently before you say anything. Then ask: which app would you keep on your phone? The answer is obvious. The point: the data is identical. The code that fetches it is identical. The only difference is how the three states are handled. That is what today's session is about.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 10 }}>
        <div style={{ border: "2px solid #fca5a5", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ background: "#fff3f3", padding: "8px 14px", borderBottom: "1px solid #fca5a5" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: 0, textTransform: "uppercase", letterSpacing: ".04em" }}>Without loading + error states</p>
          </div>
          <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ background: GRAY, borderRadius: 8, padding: 16, minHeight: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontSize: 12, color: "#9ca3af", margin: 0, fontStyle: "italic" }}>( blank white screen )</p>
            </div>
            <div style={{ background: GRAY, borderRadius: 8, padding: 14 }}>
              <p style={{ fontSize: 11, color: "#6b7280", margin: "0 0 6px", fontWeight: 600 }}>What the user thinks</p>
              <p style={{ fontSize: 12, color: TEXT, margin: 0, lineHeight: 1.5 }}>"Did it crash? Is it loading? Did I do something wrong? Should I close the app?"</p>
            </div>
            <div style={{ background: "#fff3f3", borderRadius: 8, padding: 14 }}>
              <p style={{ fontSize: 11, color: "#b91c1c", margin: "0 0 6px", fontWeight: 600 }}>When WiFi is off</p>
              <p style={{ fontSize: 12, color: TEXT, margin: 0, lineHeight: 1.5 }}>Blank screen. No message. No retry. User force-quits and leaves a 1-star review.</p>
            </div>
          </div>
        </div>
        <div style={{ border: `2px solid ${TEAL}`, borderRadius: 12, overflow: "hidden" }}>
          <div style={{ background: TEAL_LIGHT, padding: "8px 14px", borderBottom: `1px solid ${TEAL}` }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#085041", margin: 0, textTransform: "uppercase", letterSpacing: ".04em" }}>With loading + error states</p>
          </div>
          <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ background: GRAY, borderRadius: 8, padding: 16, minHeight: 80, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", border: `3px solid ${PURPLE}`, borderTopColor: "transparent", animation: "spin 1s linear infinite" }} />
              <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>Loading artists...</p>
            </div>
            <div style={{ background: GRAY, borderRadius: 8, padding: 14 }}>
              <p style={{ fontSize: 11, color: "#6b7280", margin: "0 0 6px", fontWeight: 600 }}>What the user thinks</p>
              <p style={{ fontSize: 12, color: TEXT, margin: 0, lineHeight: 1.5 }}>"It is loading. I will wait." Then the list appears. Everything feels intentional.</p>
            </div>
            <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: 14 }}>
              <p style={{ fontSize: 11, color: TEAL, margin: "0 0 6px", fontWeight: 600 }}>When WiFi is off</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <p style={{ fontSize: 12, color: TEXT, margin: 0 }}>Something went wrong.</p>
                <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>Check your connection and try again.</p>
                <div style={{ background: PURPLE, borderRadius: 6, padding: "4px 12px", display: "inline-block", marginTop: 4 }}>
                  <p style={{ fontSize: 11, color: "#fff", margin: 0, fontWeight: 600 }}>Retry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </Shell>
  ),

  // 5: The three UI states
  () => (
    <Shell tag="UI states" timer="8" title="The three states of every networked screen" subtitle="Right now your app only handles one of them" notes="Draw this as a state diagram on the board. Start circle → Loading → (success arrow) → Success. Start circle → Loading → (error arrow) → Error → (retry arrow) → Loading. The retry arrow is what most beginner apps miss — they show an error but give the user no way out.">
      <Discussion>{"Your album browser currently shows a blank white screen for a second before the list appears. What is actually happening during that blank second? What should the user see instead?"}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 10 }}>
        {[
          { state: "Loading", when: "Request is in flight — waiting for the server", show: "A spinner or skeleton UI", missing: "Your app shows a blank screen", bg: "#E6F1FB", border: "#B5D4F4", text: "#0C447C", accent: "#378ADD" },
          { state: "Success", when: "Data arrived — parse complete", show: "The list of artists", missing: "This is what your app does — but only after the blank flash", bg: TEAL_LIGHT, border: TEAL, text: "#085041", accent: TEAL },
          { state: "Error", when: "Network failed, server error, bad key", show: "A message + retry button", missing: "Your app shows nothing — user thinks it crashed", bg: "#FCEBEB", border: "#F7C1C1", text: "#791F1F", accent: "#E24B4A" },
        ].map(s => (
          <div key={s.state} style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 8, padding: "12px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.accent }} />
              <p style={{ fontSize: 13, fontWeight: 700, color: s.text, margin: 0 }}>{s.state}</p>
            </div>
            <p style={{ fontSize: 11, color: s.text, margin: "0 0 6px", lineHeight: 1.4, opacity: 0.85 }}><strong>When:</strong> {s.when}</p>
            <p style={{ fontSize: 11, color: s.text, margin: "0 0 6px", lineHeight: 1.4, opacity: 0.85 }}><strong>Show:</strong> {s.show}</p>
            <p style={{ fontSize: 11, color: s.text, margin: 0, lineHeight: 1.4, fontStyle: "italic", opacity: 0.7 }}>{s.missing}</p>
          </div>
        ))}
      </div>
      <Info>{"A screen that only handles Success is a screen that breaks silently. Always design for all three states — even if your Loading state is just a spinner and your Error state is just a message."}</Info>
    </Shell>
  ),

  // 6: NEW — Sealed classes and enums — the concept
  () => (
    <Shell tag="UI states" title="Sealed classes and enums — why they exist" subtitle="The problem with three boolean flags, and a better way" notes="This is the most important conceptual slide before the code. Do not skip it. Students who understand WHY sealed class / enum exists will find the code trivial. Students who just see the code without this motivation will find it confusing. The compiler guarantee is the key insight.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px" }}>The naive approach — three boolean flags</p>
          <pre style={{ margin: "0 0 10px", background: "#1e1e2e", color: "#fca5a5", fontSize: 11, padding: "10px 12px", borderRadius: 8, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`var isLoading by remember { mutableStateOf(true) }
var hasError  by remember { mutableStateOf(false) }
var artists   by remember { mutableStateOf<List<Artist>>(emptyList()) }

// 3 booleans = 8 possible combinations.
// Most are IMPOSSIBLE (loading + error at the same time?).
// The compiler cannot tell you which ones you forgot to handle.`}</pre>
          <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#b91c1c", margin: "0 0 6px" }}>Problems with this approach</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {[
                "8 possible flag combinations — most are invalid states",
                "Compiler cannot warn you if you forget the error case",
                "No single place to hold the associated data (error message, artist list)",
                "Easy to get into impossible states (isLoading = true AND hasError = true)",
              ].map(t => (
                <div key={t} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
                  <span style={{ color: "#b91c1c", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✗</span>
                  <span style={{ fontSize: 11, color: "#b91c1c", lineHeight: 1.4 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>The better approach — sealed class / enum</p>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What sealed class / enum gives you</p>
            {[
              { title: "Exactly 3 states", desc: "Loading, Success, or Error — no impossible combinations" },
              { title: "Associated data", desc: "Success carries the artist list. Error carries the message. Each state owns its data." },
              { title: "Exhaustive checking", desc: "The compiler warns you if your when/switch forgets a case. You cannot accidentally miss Error." },
              { title: "One source of truth", desc: "One variable replaces three. The state machine is self-documenting." },
            ].map(p => (
              <div key={p.title} style={{ display: "flex", gap: 6, marginBottom: 7, alignItems: "flex-start" }}>
                <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: TEXT }}>{p.title}: </span>
                  <span style={{ fontSize: 12, color: MUTED, lineHeight: 1.4 }}>{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <Info>{"A sealed class in Kotlin and an enum in Swift are both ways of saying: this variable can be EXACTLY ONE of a known set of cases. The compiler enforces this at compile time — not at runtime."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 7: Sealed class / enum — the code (OSToggle)
  () => (
    <Shell tag="UI states" title="Modelling state cleanly — sealed classes and enums" notes="The key benefit of sealed class / enum over three separate Boolean flags: when you write a when/switch expression, the compiler forces you to handle every case. You cannot accidentally forget the error state. This is exhaustive pattern matching — a powerful feature of both Kotlin and Swift.">
      <div style={{ marginTop: 6 }}>
        <OSToggle
          android={
            <CodePane title="Kotlin — sealed class" accent={PURPLE}>
{`// A sealed class restricts which subclasses can exist.
// The compiler knows ALL possible states at compile time.
sealed class UiState<out T> {
    object Loading : UiState<Nothing>()           // no data yet
    data class Success<T>(val data: T) : UiState<T>()  // carries data
    data class Error(val message: String) : UiState<Nothing>() // carries message
}

// Declare the screen state:
var uiState by remember {
    mutableStateOf<UiState<List<Artist>>>(UiState.Loading)
}

// when is EXHAUSTIVE — the compiler warns if you miss a case:
when (val state = uiState) {
    is UiState.Loading  -> { /* show spinner  */ }
    is UiState.Success  -> { /* show list with state.data */ }
    is UiState.Error    -> { /* show state.message + Retry */ }
    // No 'else' needed — sealed class covers all cases
}`}
            </CodePane>
          }
          ios={
            <CodePane title="Swift — enum with associated values" accent={TEAL}>
{`// Swift enum with associated values — same concept as sealed class.
// Each case can carry different associated data.
enum UiState<T> {
    case loading                // no data yet
    case success(T)             // carries the data
    case error(String)          // carries the error message
}

// Declare the screen state:
@State private var uiState: UiState<[Artist]> = .loading

// switch is EXHAUSTIVE — the compiler warns if you miss a case:
switch uiState {
case .loading:
    ProgressView("Loading...")
case .success(let artists):
    // artists is the [Artist] list — directly usable here
    Text("Loaded \\(artists.count) artists")
case .error(let message):
    Text(message)
// No 'default' needed — enum covers all cases
}

// Extension to check loading state (used with .task):
extension UiState {
    var isLoading: Bool {
        if case .loading = self { return true }
        return false
    }
}`}
            </CodePane>
          }
        />
      </div>
      <Info>{"Using sealed class / enum means the compiler catches a forgotten state at build time — not at 2am when a user reports a blank screen. Three booleans can silently produce 8 combinations; a sealed class allows exactly 3."}</Info>
    </Shell>
  ),

  // 8: The retry pattern — how it works (conceptual)
  () => (
    <Shell tag="Error handling" timer="10" title="The retry pattern — how it works" subtitle="The key insight: the Retry button does not call the API directly" notes="The retry pattern is simple but students often miss it. Show the before (error state with no button) and after (error state with Retry). Walk through the flow step by step. The key insight: the Retry button just resets the state machine back to Loading. The LaunchedEffect/task already knows how to fetch when the state is Loading — so it does it again automatically.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>The flow when Retry is tapped</p>
          {[
            { n: 1, t: "User taps the Retry button" },
            { n: 2, t: "onClick sets uiState = UiState.Loading / .loading" },
            { n: 3, t: "State change triggers recomposition / view update" },
            { n: 4, t: "LaunchedEffect / .task sees Loading state → runs the fetch again" },
            { n: 5, t: "On success: uiState → Success → list appears" },
            { n: 6, t: "On failure: uiState → Error → message + Retry shown again" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "6px 0", alignItems: "flex-start" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Why this design is elegant</p>
            <Bullet>One place to fetch data — not duplicated in multiple spots</Bullet>
            <Bullet>Retry is free — just reset state to Loading</Bullet>
            <Bullet>Pull-to-refresh later uses the exact same pattern</Bullet>
            <Bullet>Loading state is shown immediately on retry</Bullet>
          </div>
          <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL, margin: "0 0 6px" }}>The state diagram</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, fontFamily: "monospace", fontSize: 11 }}>
              {[
                { label: "Loading", bg: "#E6F1FB", color: "#0C447C" },
                { label: "↓ success    ↓ error", bg: "transparent", color: MUTED },
                { label: "Success   Error", bg: "transparent", color: TEXT },
                { label: "               ↑ Retry", bg: "transparent", color: PURPLE },
                { label: "       → Loading", bg: "transparent", color: MUTED },
              ].map((r, i) => (
                <div key={i} style={{ background: r.bg, padding: r.bg !== "transparent" ? "3px 8px" : 0, borderRadius: 4, color: r.color }}>{r.label}</div>
              ))}
            </div>
          </div>
          <Warn title="Common mistake">{"Calling the API function directly from the Retry button. This works but bypasses the Loading state — the user sees the old error screen until the new data arrives. Always go through the state machine."}</Warn>
        </div>
      </div>
    </Shell>
  ),

  // 9: Retry code — step 1: state + try/catch (OSToggle)
  () => (
    <Shell tag="Error handling" title="Retry pattern — step 1: state variable and try/catch" subtitle="Setting up the state machine and wrapping the API call">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Replace boolean flags with UiState variable">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`@Composable
fun ArtistListScreen(onArtistClicked: (Artist) -> Unit = {}) {
    var uiState by remember {
        mutableStateOf<UiState<List<Artist>>>(UiState.Loading)
    }
    var query by remember { mutableStateOf("") }`}</pre>
                  </Step>
                  <Step n={2} title="Use LaunchedEffect to re-run automatically">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`    LaunchedEffect(uiState) {
        if (uiState !is UiState.Loading) return@LaunchedEffect
        // ...
    }`}</pre>
                  </Step>
                  <Step n={3} title="Wrap the API call in a try/catch block">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`        uiState = try {
            UiState.Success(
                LastFmApi.service.getTopArtists().artists.artist
            )
        } catch (e: Exception) {
            UiState.Error(e.message ?: "Something went wrong")
        }
    }
    // ... continue to rendering on the next slide
}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Replace booleans with UiState variable" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`struct ArtistListScreen: View {
    @State private var uiState: UiState<[Artist]> = .loading
    @State private var query = ""`}</pre>
                  </Step>
                  <Step n={2} title="Use .task to re-run automatically" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`    var body: some View {
        ZStack { /* rendering on next slide */ }
        .navigationTitle("Top Artists")
        .task(id: uiState.isLoading) {
            guard case .loading = uiState else { return }
            // ...
        }
    }
}`}</pre>
                  </Step>
                  <Step n={3} title="Wrap the API call in a do/catch block" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`            do {
                let artists = try await LastFmApiService.getTopArtists()
                uiState = .success(artists)
            } catch {
                uiState = .error(error.localizedDescription)
            }`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={
                <CodePane title="Kotlin — UiState variable + try/catch in LaunchedEffect" accent={PURPLE}>
{`@Composable
fun ArtistListScreen(onArtistClicked: (Artist) -> Unit = {}) {
    // One variable replaces isLoading + hasError + artists
    var uiState by remember {
        mutableStateOf<UiState<List<Artist>>>(UiState.Loading)
    }
    var query by remember { mutableStateOf("") }

    // LaunchedEffect re-runs whenever uiState changes.
    // The guard clause means it only fetches when in Loading state.
    LaunchedEffect(uiState) {
        if (uiState !is UiState.Loading) return@LaunchedEffect
        uiState = try {
            // Success path — API call succeeded
            UiState.Success(
                LastFmApi.service.getTopArtists().artists.artist
            )
        } catch (e: Exception) {
            // Error path — network failed, server error, etc.
            UiState.Error(e.message ?: "Something went wrong")
        }
    }
    // ... continue to rendering on the next slide
}`}
                </CodePane>
              }
              ios={
                <CodePane title="Swift — UiState variable + try/catch in .task" accent={TEAL}>
{`struct ArtistListScreen: View {
    // One variable replaces multiple @State booleans
    @State private var uiState: UiState<[Artist]> = .loading
    @State private var query = ""

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            // ... rendering on next slide
        }
        .navigationTitle("Top Artists")
        // id: uiState.isLoading — .task re-runs when this changes.
        // The guard means it only fetches when in .loading state.
        .task(id: uiState.isLoading) {
            guard case .loading = uiState else { return }
            do {
                // Success path — API call succeeded
                let artists = try await LastFmApiService.getTopArtists()
                uiState = .success(artists)
            } catch {
                // Error path — network failed, decoding error, etc.
                uiState = .error(error.localizedDescription)
            }
        }
    }
}`}
                </CodePane>
              }
            />
          }
        />
      </div>
    </Shell>
  ),

  // 10: Retry code — step 2: rendering the states (OSToggle)
  () => (
    <Shell tag="Error handling" title="Retry pattern — step 2: render each state" subtitle="The when / switch that shows spinner, error, or list">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Loading state: Show a spinner">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`when (val state = uiState) {
    is UiState.Loading -> {
        Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            CircularProgressIndicator(color = Color(0xFF534AB7))
        }
    }`}</pre>
                  </Step>
                  <Step n={2} title="Error state: Show message and Retry button">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`    is UiState.Error -> {
        Column(
            Modifier.fillMaxSize().padding(32.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text("Something went wrong", fontSize = 18.sp, fontWeight = FontWeight.Bold)
            Text(state.message, color = Color.Gray, textAlign = TextAlign.Center)
            Spacer(Modifier.height(16.dp))
            // Retry sets state to Loading → LaunchedEffect re-fetches
            Button(onClick = { uiState = UiState.Loading }) {
                Text("Retry")
            }
        }
    }`}</pre>
                  </Step>
                  <Step n={3} title="Success state: Render the main content">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`    is UiState.Success -> {
        ArtistListContent(artists = state.data, query = query,
            onQueryChange = { query = it },
            onArtistClicked = onArtistClicked)
    }
}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Loading state: Show a spinner" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`switch uiState {
case .loading:
    ProgressView("Loading artists...")
        .tint(Color(red: 0.33, green: 0.29, blue: 0.72))`}</pre>
                  </Step>
                  <Step n={2} title="Error state: Show message and Retry button" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`case .error(let message):
    VStack(spacing: 12) {
        Text("Something went wrong").font(.headline)
        Text(message).font(.subheadline).foregroundColor(.gray)
            .multilineTextAlignment(.center)
        // Retry sets state to .loading → .task re-fetches
        Button("Retry") { uiState = .loading }
            .buttonStyle(.borderedProminent)
            .tint(Color(red: 0.33, green: 0.29, blue: 0.72))
    }
    .padding(32)`}</pre>
                  </Step>
                  <Step n={3} title="Success state: Render the main content" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`case .success(let artists):
    ArtistListContent(artists: artists, query: $query,
                      onArtistTapped: onArtistTapped)
}`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={
                <CodePane title="Kotlin — when block rendering all three states" accent={PURPLE}>
{`// Inside the Column(modifier = Modifier.fillMaxSize()):
when (val state = uiState) {
    is UiState.Loading -> {
        Box(Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center) {
            CircularProgressIndicator(color = Color(0xFF534AB7))
        }
    }
    is UiState.Error -> {
        Column(
            Modifier.fillMaxSize().padding(32.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text("Something went wrong",
                fontSize = 18.sp, fontWeight = FontWeight.Bold)
            Text(state.message,
                color = Color.Gray, textAlign = TextAlign.Center)
            Spacer(Modifier.height(16.dp))
            // Retry sets state to Loading → LaunchedEffect re-fetches
            Button(onClick = { uiState = UiState.Loading }) {
                Text("Retry")
            }
        }
    }
    is UiState.Success -> {
        // state.data is the List<Artist> — your existing list + search
        ArtistListContent(artists = state.data, query = query,
            onQueryChange = { query = it },
            onArtistClicked = onArtistClicked)
    }
}`}
                </CodePane>
              }
              ios={
                <CodePane title="Swift — switch rendering all three states" accent={TEAL}>
{`// Inside the ZStack:
switch uiState {
case .loading:
    ProgressView("Loading artists...")
        .tint(Color(red: 0.33, green: 0.29, blue: 0.72))

case .error(let message):
    VStack(spacing: 12) {
        Text("Something went wrong")
            .font(.headline)
        Text(message)
            .font(.subheadline)
            .foregroundColor(.gray)
            .multilineTextAlignment(.center)
        // Retry sets state to .loading → .task re-fetches
        Button("Retry") { uiState = .loading }
            .buttonStyle(.borderedProminent)
            .tint(Color(red: 0.33, green: 0.29, blue: 0.72))
    }
    .padding(32)

case .success(let artists):
    // artists is the [Artist] array — your existing list + search
    ArtistListContent(artists: artists, query: $query,
                      onArtistTapped: onArtistTapped)
}`}
                </CodePane>
              }
            />
          }
        />
      </div>
      <Info>{"Notice that the Retry button does not call any API directly. It just sets uiState back to Loading. The LaunchedEffect / .task already knows what to do when the state is Loading — so it does it again automatically."}</Info>
    </Shell>
  ),

  // 11: Image loading — why a library
  () => (
    <Shell tag="Image loading" timer="8" title="Loading images from URLs — why you need a library" subtitle="It is more than just a network call" notes="Image loading is something students are surprised to learn needs a library. Explain why: downloading an image from a URL is a network call (needs to be async), the image needs to be cached so it does not re-download on every scroll, and it needs a placeholder so the layout does not jump. Coil and AsyncImage handle all of this.">
      <Discussion>{"If loading an image from a URL is just a network call, why not just use Retrofit or URLSession to fetch the bytes and display them? What would go wrong if you did that on every scroll?"}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10, marginBottom: 10 }}>
        {[
          { title: "Async loading", desc: "Downloads on a background thread — the UI never blocks while the image arrives" },
          { title: "Memory + disk cache", desc: "Stores downloaded images so scrolling back does not re-download the same image. Without this, fast scrolling causes visible lag." },
          { title: "Placeholders", desc: "Shows a fallback shape while loading so the layout does not jump when the image appears" },
          { title: "Error handling", desc: "Gracefully handles 404s, empty URLs, and network failures — shows a fallback instead of crashing or leaving a blank space" },
        ].map(f => (
          <div key={f.title} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px", display: "flex", gap: 8 }}>
            <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 2px" }}>{f.title}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 4px" }}>Android: Coil</p>
          <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>A third-party library built for Compose. One dependency, then use the <code>AsyncImage</code> composable. Handles all four concerns above automatically.</p>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "10px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 4px" }}>iOS: SwiftUI AsyncImage</p>
          <p style={{ fontSize: 12, color: "#085041", margin: 0, lineHeight: 1.5 }}>Built into SwiftUI — no library needed. Provides a phase-based API so you can show different content while loading, on success, and on error.</p>
        </div>
      </div>
    </Shell>
  ),

  // 12: Image loading code (OSToggle)
  () => (
    <Shell tag="Image loading" title="AsyncImage in practice — loading and fallback" subtitle="Toggle to see how each platform handles the same four cases" notes="Walk through each phase/case. The empty URL check is critical — Last.fm returns empty string for many lesser-known artists. Passing an empty string to AsyncImage causes platform-specific issues. Always check first.">
      <div style={{ marginTop: 6 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Check if the URL is empty">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`val imageUrl = artist.getLargeImageUrl()

if (imageUrl.isNotEmpty()) {
    // ...
} else {
    // ...
}`}</pre>
                  </Step>
                  <Step n={2} title="Valid URL: Use AsyncImage with fallbacks">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`    // URL exists — Coil handles async, cache, and decode
    AsyncImage(
        model = imageUrl,
        contentDescription = artist.name,
        modifier = Modifier
            .size(52.dp)
            .clip(CircleShape),
        contentScale = ContentScale.Crop,
        placeholder = ColorPainter(Color(0xFFEEEDFE)),  // grey circle while loading
        error = ColorPainter(Color(0xFF534AB7))          // purple if load fails
    )`}</pre>
                  </Step>
                  <Step n={3} title="Empty URL: Fall back to initials">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`} else {
    // URL is empty — show initial letter fallback
    Box(
        modifier = Modifier
            .size(52.dp)
            .background(Color(0xFF534AB7), CircleShape),
        contentAlignment = Alignment.Center
    ) {
        Text(
            artist.name.first().toString(),
            color = Color.White,
            fontSize = 22.sp,
            fontWeight = FontWeight.Bold
        )
    }
}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Check if the URL is valid" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`let imageUrl = artist.largeImageUrl

if !imageUrl.isEmpty, let url = URL(string: imageUrl) {
    // ...
} else {
    // ...
}`}</pre>
                  </Step>
                  <Step n={2} title="Valid URL: Handle AsyncImage phases" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`    AsyncImage(url: url) { phase in
        switch phase {
        case .success(let image):
            image.resizable().aspectRatio(contentMode: .fill)
                .frame(width: 52, height: 52).clipShape(Circle())
        case .failure:
            initialsCircle(for: artist.name)
        case .empty:
            Circle().fill(Color(red: 0.93, green: 0.93, blue: 1.0))
                .frame(width: 52, height: 52)
        @unknown default:
            EmptyView()
        }
    }`}</pre>
                  </Step>
                  <Step n={3} title="Empty URL: Fall back to initials" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`} else {
    // URL empty or invalid — show initial letter fallback
    initialsCircle(for: artist.name)
}`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={
                <CodePane title="Android — Coil AsyncImage with placeholder and error" accent={PURPLE}>
{`// Step 1: add to build.gradle.kts
// implementation("io.coil-kt:coil-compose:2.4.0")

// Step 2: use in your ArtistRow composable
val imageUrl = artist.getLargeImageUrl()

if (imageUrl.isNotEmpty()) {
    // URL exists — Coil handles async, cache, and decode
    AsyncImage(
        model = imageUrl,
        contentDescription = artist.name,
        modifier = Modifier
            .size(52.dp)
            .clip(CircleShape),
        contentScale = ContentScale.Crop,
        placeholder = ColorPainter(Color(0xFFEEEDFE)),  // grey circle while loading
        error = ColorPainter(Color(0xFF534AB7))          // purple if load fails
    )
} else {
    // URL is empty — show initial letter fallback
    Box(
        modifier = Modifier
            .size(52.dp)
            .background(Color(0xFF534AB7), CircleShape),
        contentAlignment = Alignment.Center
    ) {
        Text(
            artist.name.first().toString(),
            color = Color.White,
            fontSize = 22.sp,
            fontWeight = FontWeight.Bold
        )
    }
}`}
                </CodePane>
              }
              ios={
                <CodePane title="iOS — SwiftUI AsyncImage with phase handling" accent={TEAL}>
{`// Built into SwiftUI — no library needed

let imageUrl = artist.largeImageUrl

if !imageUrl.isEmpty, let url = URL(string: imageUrl) {
    // URL exists and is valid — use AsyncImage with phase handling
    AsyncImage(url: url) { phase in
        switch phase {
        case .success(let image):
            // Image loaded successfully — display it
            image
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: 52, height: 52)
                .clipShape(Circle())

        case .failure:
            // Load failed (404, network error) — show initial
            initialsCircle(for: artist.name)

        case .empty:
            // Still loading — show placeholder circle
            Circle()
                .fill(Color(red: 0.93, green: 0.93, blue: 1.0))
                .frame(width: 52, height: 52)

        @unknown default:
            EmptyView()
        }
    }
} else {
    // URL empty or invalid — show initial letter fallback
    initialsCircle(for: artist.name)
}`}
                </CodePane>
              }
            />
          }
        />
      </div>
      <Warn title="Always check for empty URL first">{"Last.fm returns empty string for image URLs on many artists. Passing an empty string to Coil or SwiftUI AsyncImage produces inconsistent behaviour across versions. Check before passing."}</Warn>
    </Shell>
  ),

  // 13: Code-along intro
  () => (
    <Shell tag="Live code-along" timer="12" title="Completing the album browser — 3 steps" subtitle="Open your AlbumBrowser with the Session 1 API call." dark notes="Build on Session 1's code. The goal: add the three states, then image loading. Run the app and demonstrate turning WiFi off to trigger the error state, then tapping Retry to recover. Students should see the full state machine in action.">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>Three focused steps — each on its own slide</p>
          {[
            { n: 1, t: "Define UiState + try/catch", desc: "Replace raw state vars with sealed class / enum + wrap fetch in try/catch" },
            { n: 2, t: "Render the three states", desc: "Add when/switch for Loading spinner, Error message + Retry, Success list" },
            { n: 3, t: "AsyncImage in ArtistRow", desc: "Replace the initial-letter Box with real image loading and a fallback" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 10, margin: "8px 0", alignItems: "flex-start" }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 22, height: 22, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{s.n}</span>
              <div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", fontWeight: 600, margin: 0 }}>{s.t}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", margin: "2px 0 0", lineHeight: 1.4 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: 0, textTransform: "uppercase" }}>State machine</p>
          {[
            { label: "Loading", bg: "#378ADD22", color: "#93C5FD" },
            { label: "↓ success  /  ↓ error", bg: "transparent", color: "rgba(255,255,255,0.35)" },
            { label: "Success", bg: `${TEAL}22`, color: TEAL },
            { label: "Error + Retry →", bg: "#E24B4A22", color: "#FCA5A5" },
            { label: "→ Loading again", bg: "transparent", color: "rgba(255,255,255,0.35)" },
          ].map((s, i) => (
            <div key={i} style={{ background: s.bg, borderRadius: 6, padding: s.bg !== "transparent" ? "5px 10px" : "0 10px" }}>
              <p style={{ fontSize: 11, color: s.color, margin: 0, fontWeight: s.bg !== "transparent" ? 600 : 400 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 14: Code-along step 1 — UiState + try/catch
  () => (
    <Shell tag="Live code-along — Step 1 of 3" title="Define UiState and wrap the fetch" subtitle="Replace raw state variables with a sealed class / enum">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Define the sealed class — three possible states">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`sealed class UiState<out T> {
    object Loading : UiState<Nothing>()
    data class Success<T>(val data: T) : UiState<T>()
    data class Error(val message: String) : UiState<Nothing>()
}`}</pre>
                  </Step>
                  <Step n={2} title="Replace the raw list state with a single UiState variable">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`var uiState by remember {
    mutableStateOf<UiState<List<Artist>>>(UiState.Loading)
}
var query by remember { mutableStateOf("") }`}</pre>
                  </Step>
                  <Step n={3} title="LaunchedEffect — fetch on Loading, catch on error">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`LaunchedEffect(uiState) {
    if (uiState !is UiState.Loading) return@LaunchedEffect
    uiState = try {
        UiState.Success(LastFmApi.service.getTopArtists().artists.artist)
    } catch (e: Exception) {
        UiState.Error(e.message ?: "Something went wrong")
    }
}`}</pre>
                    <p style={{ fontSize: 11, color: MUTED, margin: "4px 0 0" }}>The guard prevents re-fetching when transitioning to Success or Error.</p>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Define the enum — three cases with associated values" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`enum UiState<T> {
    case loading
    case success(T)
    case error(String)
}
extension UiState {
    var isLoading: Bool {
        if case .loading = self { return true }
        return false
    }
}`}</pre>
                  </Step>
                  <Step n={2} title="Replace raw state with a single UiState variable" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`@State private var uiState: UiState<[Artist]> = .loading
@State private var query = ""`}</pre>
                  </Step>
                  <Step n={3} title=".task — fetch when isLoading, catch errors" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`.task(id: uiState.isLoading) {
    guard case .loading = uiState else { return }
    do {
        let artists = try await LastFmApiService.getTopArtists()
        uiState = .success(artists)
    } catch {
        uiState = .error(error.localizedDescription)
    }
}`}</pre>
                    <p style={{ fontSize: 11, color: MUTED, margin: "4px 0 0" }}>.task re-runs whenever isLoading changes — this is what powers the Retry button in step 2.</p>
                  </Step>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={
                <CodePane title="Kotlin — sealed class + state + LaunchedEffect" accent={PURPLE}>
{`sealed class UiState<out T> {
    object Loading : UiState<Nothing>()
    data class Success<T>(val data: T) : UiState<T>()
    data class Error(val message: String) : UiState<Nothing>()
}

var uiState by remember { mutableStateOf<UiState<List<Artist>>>(UiState.Loading) }
var query by remember { mutableStateOf("") }

LaunchedEffect(uiState) {
    if (uiState !is UiState.Loading) return@LaunchedEffect
    uiState = try {
        UiState.Success(LastFmApi.service.getTopArtists().artists.artist)
    } catch (e: Exception) {
        UiState.Error(e.message ?: "Something went wrong")
    }
}`}
                </CodePane>
              }
              ios={
                <CodePane title="Swift — enum + state + .task" accent={TEAL}>
{`enum UiState<T> {
    case loading
    case success(T)
    case error(String)
}
extension UiState {
    var isLoading: Bool {
        if case .loading = self { return true }
        return false
    }
}

@State private var uiState: UiState<[Artist]> = .loading
@State private var query = ""

// In body:
.task(id: uiState.isLoading) {
    guard case .loading = uiState else { return }
    do {
        let artists = try await LastFmApiService.getTopArtists()
        uiState = .success(artists)
    } catch {
        uiState = .error(error.localizedDescription)
    }
}`}
                </CodePane>
              }
            />
          }
        />
      </div>
    </Shell>
  ),

  // 15: Code-along step 2 — render states
  () => (
    <Shell tag="Live code-along — Step 2 of 3" title="Render the three states" subtitle="Add the when / switch that drives Loading, Error, and Success">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Loading — centered spinner while waiting">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`when (val state = uiState) {
    is UiState.Loading -> {
        Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            CircularProgressIndicator(color = Color(0xFF534AB7))
        }
    }`}</pre>
                  </Step>
                  <Step n={2} title="Error — message + Retry button that resets state to Loading">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`    is UiState.Error -> {
        Column(Modifier.fillMaxSize().padding(32.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally) {
            Text("Something went wrong", fontSize = 18.sp, fontWeight = FontWeight.Bold)
            Text(state.message, color = Color.Gray, textAlign = TextAlign.Center)
            Spacer(Modifier.height(16.dp))
            Button(onClick = { uiState = UiState.Loading }) { Text("Retry") }
        }
    }`}</pre>
                  </Step>
                  <Step n={3} title="Success — search field + filtered LazyColumn">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`    is UiState.Success -> {
        OutlinedTextField(value = query, onValueChange = { query = it },
            placeholder = { Text("Search artists...") },
            modifier = Modifier.fillMaxWidth().padding(16.dp), singleLine = true)
        val filtered = state.data.filter { it.name.contains(query, ignoreCase = true) }
        LazyColumn(contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)) {
            items(filtered, key = { it.name }) { artist ->
                ArtistRow(artist, onClick = { onArtistClicked(artist) })
            }
        }
    }
}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Loading — centered ProgressView" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`switch uiState {
case .loading:
    ProgressView("Loading artists...")
        .tint(Color(red: 0.33, green: 0.29, blue: 0.72))`}</pre>
                  </Step>
                  <Step n={2} title="Error — message + Retry button that resets to .loading" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`case .error(let message):
    VStack(spacing: 12) {
        Text("Something went wrong").font(.headline)
        Text(message).font(.subheadline).foregroundColor(.gray)
            .multilineTextAlignment(.center)
        Button("Retry") { uiState = .loading }
            .buttonStyle(.borderedProminent)
    }.padding(32)`}</pre>
                  </Step>
                  <Step n={3} title="Success — search field + filtered List" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`case .success(let artists):
    VStack(spacing: 0) {
        HStack {
            Image(systemName: "magnifyingglass").foregroundColor(.gray)
            TextField("Search artists...", text: $query).font(.subheadline)
        }
        .padding(10).background(Color.white).cornerRadius(12).padding(16)
        let filtered = artists.filter {
            query.isEmpty || $0.name.localizedCaseInsensitiveContains(query)
        }
        List(filtered) { artist in
            NavigationLink(destination: ArtistDetailScreen(artist: artist)) {
                ArtistRow(artist: artist)
            }.listRowBackground(Color.clear).listRowSeparator(.hidden)
        }.listStyle(.plain)
    }
}`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={
                <CodePane title="Kotlin — full when block" accent={PURPLE}>
{`Column(modifier = Modifier.fillMaxSize().background(Color(0xFFF5F5F5))) {
    when (val state = uiState) {
        is UiState.Loading -> {
            Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                CircularProgressIndicator(color = Color(0xFF534AB7))
            }
        }
        is UiState.Error -> {
            Column(Modifier.fillMaxSize().padding(32.dp),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally) {
                Text("Something went wrong", fontSize = 18.sp, fontWeight = FontWeight.Bold)
                Text(state.message, color = Color.Gray, textAlign = TextAlign.Center)
                Spacer(Modifier.height(16.dp))
                Button(onClick = { uiState = UiState.Loading }) { Text("Retry") }
            }
        }
        is UiState.Success -> {
            OutlinedTextField(value = query, onValueChange = { query = it },
                placeholder = { Text("Search artists...") },
                modifier = Modifier.fillMaxWidth().padding(16.dp), singleLine = true)
            val filtered = state.data.filter { it.name.contains(query, ignoreCase = true) }
            LazyColumn(contentPadding = PaddingValues(16.dp),
                verticalArrangement = Arrangement.spacedBy(4.dp)) {
                items(filtered, key = { it.name }) { artist ->
                    ArtistRow(artist, onClick = { onArtistClicked(artist) })
                }
            }
        }
    }
}`}
                </CodePane>
              }
              ios={
                <CodePane title="Swift — full switch block" accent={TEAL}>
{`switch uiState {
case .loading:
    ProgressView("Loading artists...").tint(Color(red: 0.33, green: 0.29, blue: 0.72))

case .error(let message):
    VStack(spacing: 12) {
        Text("Something went wrong").font(.headline)
        Text(message).font(.subheadline).foregroundColor(.gray)
            .multilineTextAlignment(.center)
        Button("Retry") { uiState = .loading }.buttonStyle(.borderedProminent)
    }.padding(32)

case .success(let artists):
    VStack(spacing: 0) {
        HStack {
            Image(systemName: "magnifyingglass").foregroundColor(.gray)
            TextField("Search artists...", text: $query).font(.subheadline)
        }
        .padding(10).background(Color.white).cornerRadius(12).padding(16)
        let filtered = artists.filter {
            query.isEmpty || $0.name.localizedCaseInsensitiveContains(query)
        }
        List(filtered) { artist in
            NavigationLink(destination: ArtistDetailScreen(artist: artist)) {
                ArtistRow(artist: artist)
            }.listRowBackground(Color.clear).listRowSeparator(.hidden)
        }.listStyle(.plain)
    }
}`}
                </CodePane>
              }
            />
          }
        />
      </div>
    </Shell>
  ),

  // 16: Code-along step 3 — ArtistRow with AsyncImage (OSToggle, merged)
  () => (
    <Shell tag="Live code-along — Step 3 of 3" title="ArtistRow with AsyncImage and fallback" subtitle="Replace the initial-letter Box with real image loading">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Outer Row — layout you already know from Week 3">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`Row(
    modifier = Modifier.fillMaxWidth().clickable { onClick() }
        .background(Color.White, RoundedCornerShape(12.dp)).padding(12.dp),
    verticalAlignment = Alignment.CenterVertically,
    horizontalArrangement = Arrangement.spacedBy(12.dp)
) { /* image slot + text column go here */ }`}</pre>
                  </Step>
                  <Step n={2} title="AsyncImage — show image if URL exists, initials circle as fallback">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`val imageUrl = artist.getLargeImageUrl()
if (imageUrl.isNotEmpty()) {
    AsyncImage(
        model = imageUrl,
        contentDescription = artist.name,
        modifier = Modifier.size(52.dp).clip(CircleShape),
        contentScale = ContentScale.Crop,
        placeholder = ColorPainter(Color(0xFFEEEDFE)), // purple tint while loading
        error = ColorPainter(Color(0xFF534AB7))         // purple on failure
    )
} else {
    Box(Modifier.size(52.dp).background(Color(0xFF534AB7), CircleShape),
        contentAlignment = Alignment.Center) {
        Text(artist.name.first().toString(), color = Color.White,
            fontSize = 22.sp, fontWeight = FontWeight.Bold)
    }
}`}</pre>
                  </Step>
                  <Step n={3} title="Text column + formatListeners helper">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`Column(modifier = Modifier.weight(1f)) {
    Text(artist.name, fontSize = 15.sp, fontWeight = FontWeight.Bold)
    Text(formatListeners(artist.listeners.toLongOrNull() ?: 0L),
        fontSize = 13.sp, color = Color.Gray)
}

fun formatListeners(n: Long) = when {
    n >= 1_000_000 -> String.format("%.1fM listeners", n / 1_000_000.0)
    n >= 1_000     -> String.format("%.0fK listeners", n / 1_000.0)
    else           -> "$n listeners"
}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Outer HStack — layout you already know from Week 3" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`HStack(spacing: 12) {
    /* image slot */
    /* text column */
    Spacer()
}
.padding(12)
.background(Color.white)
.cornerRadius(12)`}</pre>
                  </Step>
                  <Step n={2} title="AsyncImage — phase switch, initials circle as fallback" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`if !artist.largeImageUrl.isEmpty,
   let url = URL(string: artist.largeImageUrl) {
    AsyncImage(url: url) { phase in
        switch phase {
        case .success(let image):
            image.resizable().aspectRatio(contentMode: .fill)
                .frame(width: 52, height: 52).clipShape(Circle())
        default: initialsCircle  // loading + error both show initials
        }
    }
} else { initialsCircle }

var initialsCircle: some View {
    Circle().fill(Color(red: 0.33, green: 0.29, blue: 0.72))
        .frame(width: 52, height: 52)
        .overlay(Text(String(artist.name.prefix(1)))
            .font(.title2).fontWeight(.bold).foregroundColor(.white))
}`}</pre>
                  </Step>
                  <Step n={3} title="Text column + formatListeners helper" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`VStack(alignment: .leading, spacing: 2) {
    Text(artist.name).font(.subheadline).fontWeight(.bold)
    Text(formatListeners(artist.listeners)).font(.caption).foregroundColor(.gray)
}

func formatListeners(_ raw: String) -> String {
    guard let n = Int(raw) else { return raw }
    if n >= 1_000_000 { return String(format: "%.1fM listeners", Double(n) / 1_000_000) }
    if n >= 1_000     { return String(format: "%.0fK listeners", Double(n) / 1_000) }
    return "\\(n) listeners"
}`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={
                <CodePane title="Kotlin — full ArtistRow composable" accent={PURPLE}>
{`@Composable
fun ArtistRow(artist: Artist, onClick: () -> Unit = {}) {
    Row(
        modifier = Modifier.fillMaxWidth().clickable { onClick() }
            .background(Color.White, RoundedCornerShape(12.dp)).padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        val imageUrl = artist.getLargeImageUrl()
        if (imageUrl.isNotEmpty()) {
            AsyncImage(model = imageUrl, contentDescription = artist.name,
                modifier = Modifier.size(52.dp).clip(CircleShape),
                contentScale = ContentScale.Crop,
                placeholder = ColorPainter(Color(0xFFEEEDFE)),
                error = ColorPainter(Color(0xFF534AB7)))
        } else {
            Box(Modifier.size(52.dp).background(Color(0xFF534AB7), CircleShape),
                contentAlignment = Alignment.Center) {
                Text(artist.name.first().toString(), color = Color.White,
                    fontSize = 22.sp, fontWeight = FontWeight.Bold)
            }
        }
        Column(modifier = Modifier.weight(1f)) {
            Text(artist.name, fontSize = 15.sp, fontWeight = FontWeight.Bold)
            Text(formatListeners(artist.listeners.toLongOrNull() ?: 0L),
                fontSize = 13.sp, color = Color.Gray)
        }
    }
}

fun formatListeners(n: Long) = when {
    n >= 1_000_000 -> String.format("%.1fM listeners", n / 1_000_000.0)
    n >= 1_000     -> String.format("%.0fK listeners", n / 1_000.0)
    else           -> "$n listeners"
}`}
                </CodePane>
              }
              ios={
                <CodePane title="Swift — full ArtistRow view" accent={TEAL}>
{`struct ArtistRow: View {
    let artist: Artist
    var body: some View {
        HStack(spacing: 12) {
            if !artist.largeImageUrl.isEmpty,
               let url = URL(string: artist.largeImageUrl) {
                AsyncImage(url: url) { phase in
                    switch phase {
                    case .success(let image):
                        image.resizable().aspectRatio(contentMode: .fill)
                            .frame(width: 52, height: 52).clipShape(Circle())
                    default: initialsCircle
                    }
                }
            } else { initialsCircle }
            VStack(alignment: .leading, spacing: 2) {
                Text(artist.name).font(.subheadline).fontWeight(.bold)
                Text(formatListeners(artist.listeners)).font(.caption).foregroundColor(.gray)
            }
            Spacer()
        }
        .padding(12).background(Color.white).cornerRadius(12)
    }
    var initialsCircle: some View {
        Circle().fill(Color(red: 0.33, green: 0.29, blue: 0.72))
            .frame(width: 52, height: 52)
            .overlay(Text(String(artist.name.prefix(1)))
                .font(.title2).fontWeight(.bold).foregroundColor(.white))
    }
    func formatListeners(_ raw: String) -> String {
        guard let n = Int(raw) else { return raw }
        if n >= 1_000_000 { return String(format: "%.1fM listeners", Double(n) / 1_000_000) }
        if n >= 1_000     { return String(format: "%.0fK listeners", Double(n) / 1_000) }
        return "\\(n) listeners"
    }
}`}
                </CodePane>
              }
            />
          }
        />
      </div>
    </Shell>
  ),

  // 17: Lab intro + assignment
  () => (
    <Shell tag="Lab intro" timer="6" title="Lab time + Assignment 4 overview" subtitle="Go to the Lab tab on the course site — Session 2 Lab." notes="Keep this brief. The lab follows the slides closely. For Assignment 4, emphasise that students should read their chosen API's documentation thoroughly before writing any models — the JSON structure tells them exactly what data classes they need.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Lab steps — Session 2</p>
          {[
            { n: 0, t: "Open AlbumBrowser with Session 1 API call", time: "2 min" },
            { n: 1, t: "Define UiState sealed class / enum", time: "5 min" },
            { n: 2, t: "Update screen to use UiState with try/catch", time: "12 min" },
            { n: 3, t: "Add loading spinner and error state with Retry", time: "8 min" },
            { n: 4, t: "Replace avatar circle with AsyncImage", time: "12 min" },
            { n: 5, t: "Ask Claude about error handling patterns", time: "5 min" },
            { n: 6, t: "Reflection — 3 questions", time: "5 min" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "4px 0", alignItems: "center" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: 4, fontSize: 10, fontWeight: 700, padding: "1px 5px", flexShrink: 0 }}>Step {s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, flex: 1 }}>{s.t}</span>
              <span style={{ fontSize: 11, color: MUTED, flexShrink: 0 }}>{s.time}</span>
            </div>
          ))}
        </div>
        <div style={{ background: GRAY, borderRadius: 10, padding: 14 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 6px" }}>Assignment 4 — networked browse app</p>
          <p style={{ fontSize: 12, color: MUTED, margin: "0 0 8px", lineHeight: 1.5 }}>Same structure as your album browser, but swap Last.fm for a different public API. Choose any free API with a list endpoint and image URLs.</p>
          {[
            "Real API — no hardcoded data",
            "All three UI states handled",
            "Images loaded from URLs with fallback",
            "Search on live fetched data",
            "Detail screen for each item",
          ].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 10, background: "#FCEBEB", borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: "#791F1F", margin: 0, lineHeight: 1.5 }}>Never commit your API key to GitHub. Add local.properties or Config.xcconfig to .gitignore before your first commit.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 18: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Week 4 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Your app now fetches real data, handles failure gracefully, and loads images from the internet. That is a production-quality screen.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned this week</p>
            {["HTTP request/response cycle", "REST APIs and JSON parsing", "Data classes / structs matching JSON structure", "Threads — blocking vs suspending", "Coroutines (Kotlin) + async/await (Swift)", "What Retrofit and Gson do, and why they exist", "The three UI states: Loading, Success, Error", "Sealed classes and enums — exhaustive state modelling", "Image loading with Coil and AsyncImage"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Week 5</p>
            {["Local storage — saving data that persists across sessions", "Room database (Android) and SwiftData (iOS)", "Favourites — saving items locally", "DataStore / UserDefaults — storing user preferences", "The offline-first pattern — show cached data while fetching"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.1)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Due before Week 5: Assignment 4 — networked browse app.</p>
            </div>
          </div>
        </div>
      </div>
      <Notes>{"End with genuine energy. Students now have an app that works like a real production app — live data, loading states, error recovery, real images. That is a huge milestone. Remind them to store their API key safely and never commit it. Due date for Assignment 4 is one week from now."}</Notes>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 4 · Session 2 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 600, color: TEXT, margin: 0 }}>Mobile Development in the Age of AI</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setCur(c => Math.max(0, c - 1))} disabled={cur === 0} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === 0 ? GRAY : PURPLE_LIGHT, color: cur === 0 ? MUTED : PURPLE, cursor: cur === 0 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>← Prev</button>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 64, textAlign: "center" }}>{cur + 1} / {slides.length}</span>
          <button onClick={() => setCur(c => Math.min(slides.length - 1, c + 1))} disabled={cur === slides.length - 1} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === slides.length - 1 ? GRAY : PURPLE, color: cur === slides.length - 1 ? MUTED : "#fff", cursor: cur === slides.length - 1 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>Next →</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: 26, height: 26, borderRadius: 5, border: `1.5px solid ${i === cur ? PURPLE : "#e5e7eb"}`, background: i === cur ? PURPLE : "#fff", color: i === cur ? "#fff" : MUTED, fontSize: 10, fontWeight: 600, cursor: "pointer" }}>{i + 1}</button>
        ))}
      </div>
      {slides[cur]()}
    </div>
  );
}
