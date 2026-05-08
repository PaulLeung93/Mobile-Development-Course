import { useState } from "react";

const PURPLE = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT = "#EEEDFE";
const TEAL = "#1D9E75";
const TEAL_DARK = "#0F6E56";
const TEAL_LIGHT = "#E1F5EE";
const AMBER = "#EF9F27";
const AMBER_LIGHT = "#FAEEDA";
const AMBER_DARK = "#633806";
const BLUE = "#185FA5";
const BLUE_LIGHT = "#E6F1FB";
const GREEN = "#3B6D11";
const GREEN_LIGHT = "#EAF3DE";
const RED = "#A32D2D";
const RED_LIGHT = "#FCEBEB";
const GRAY = "#F5F5F7";
const TEXT = "#1a1a2e";
const MUTED = "#6b7280";

const Tag = ({ children, color = "purple" }) => {
  const map = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: AMBER_DARK },
    blue:   { bg: BLUE_LIGHT,   fg: BLUE },
    green:  { bg: GREEN_LIGHT,  fg: GREEN },
    red:    { bg: RED_LIGHT,    fg: RED },
  };
  const c = map[color] || map.purple;
  return <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", background: c.bg, color: c.fg, padding: "2px 8px", borderRadius: 20 }}>{children}</span>;
};

const CodePane = ({ title, accent = PURPLE, children }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    {title && <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0", letterSpacing: ".04em" }}>{title}</div>}
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Notes = ({ children }) => (
  <div style={{ background: GRAY, borderRadius: 8, padding: "8px 12px", marginTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em" }}>Speaker notes</p>
    <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Discussion = ({ children }) => (
  <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Discussion prompt</p>
    <p style={{ fontSize: 12, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

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

const preStyle = { margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" as const };

const IC = ({ children }: { [k: string]: any }) => (
  <code style={{ background: "rgba(83,74,183,0.12)", color: PURPLE_DARK, borderRadius: 4, padding: "1px 5px", fontSize: 11, fontFamily: "monospace" }}>{children}</code>
);

const Shell = ({ tag, tagColor = "teal", timer, title, subtitle, children, notes }: { [k: string]: any }) => (
  <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px 22px", minHeight: 340 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag color="purple">Week 9 · S1</Tag>
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
  // 1 — Title
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 600, background: BLUE_LIGHT, color: BLUE, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>Android track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: GREEN_LIGHT, color: GREEN, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>iOS track</span>
        </div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 9 · Session 1 · Phase 3</p>
        <h1 style={{ fontSize: 30, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.2 }}>Introduction to unit testing</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Why test · What makes code testable · Writing your first ViewModel test</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "Why unit tests exist — and why they're worth the time",
            "The test pyramid — and why we focus on unit tests",
            "What makes code testable (and what doesn't)",
            "Why MVVM already set you up for this",
            "Test doubles — fakes vs mocks vs stubs",
            "Writing tests for Loading, Success, and Error states",
            "Finding edge cases with Claude",
            "Lab: tests for a shared starter ViewModel",
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

  // 2 — Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 2 hours" notes="Unit testing is genuinely hard to motivate because the benefit is invisible when apps are small. Spend real time on the 'why' before touching any code. Students who understand the problem tests solve will find the syntax obvious; students who jump straight to JUnit/XCTest will cargo-cult it and not retain it.">
      {[
        { time: "0:00–0:05",  label: "Hook",                  desc: "The moment a test saves you — what that feels like", section: null },
        { time: "0:05–0:12",  label: "Why tests exist",        desc: "The real reason — confidence to change code", section: null },
        { time: "0:12–0:18",  label: "The test pyramid",       desc: "Unit, integration, E2E — and why we start at the bottom", section: null },
        { time: "0:18–0:28",  label: "Testable code + DI",     desc: "Why MVVM sets you up — dependency injection as the test seam", section: null },
        { time: "0:28–0:33",  label: "Test doubles",           desc: "Fakes, stubs, and mocks — and which one you'll use today", section: null },
        { time: "0:33–0:43",  label: "Code-along: VM + fake",  desc: "The starter ViewModel and the FakeRepository", section: null },
        { time: "0:43–0:48",  label: "Anatomy of a test",      desc: "@Test, runTest, XCTestCase — and the AAA pattern", section: null },
        { time: "0:48–0:52",  label: "Assertion toolkit",      desc: "assertEquals, assertTrue, XCTAssertEqual — and the gotchas", section: null },
        { time: "0:52–0:56",  label: "Async tests gotcha",     desc: "Why you must drain coroutines / await before asserting", section: null },
        { time: "0:56–1:04",  label: "Writing the tests",      desc: "Loading, Success, Error — one test per state", section: null },
        { time: "1:04–1:12",  label: "Failures + pitfalls",    desc: "Reading a failing assertion · the four lab pitfalls", section: null },
        { time: "1:12–1:18",  label: "Edge cases with Claude", desc: "AI as a test-case generator", section: "ai" },
        { time: "1:18–1:22",  label: "Lab intro",              desc: "What you're building in the lab", section: null },
        { time: "1:22–2:00",  label: "Lab — breakout rooms",   desc: "Write tests for the shared starter ViewModel", section: "lab" },
        { time: "2:00–2:10",  label: "Wrap-up + survey",       desc: "Session 2 preview: app performance", section: "wrapup" },
      ].map(r => (
        <div key={r.time} style={{
          display: "flex", gap: 12, padding: "7px 8px",
          borderBottom: `0.5px solid ${GRAY}`,
          background: r.section === "ai" ? PURPLE_LIGHT : r.section === "lab" ? TEAL_LIGHT : r.section === "wrapup" ? AMBER_LIGHT : "transparent",
          borderRadius: r.section ? 6 : 0,
        }}>
          <span style={{ fontSize: 11, minWidth: 90, flexShrink: 0, color: r.section ? (r.section === "ai" ? PURPLE_DARK : r.section === "lab" ? TEAL_DARK : AMBER_DARK) : MUTED }}>{r.time}</span>
          <span style={{ fontSize: 12, fontWeight: 600, minWidth: 160, flexShrink: 0, color: r.section === "ai" ? PURPLE_DARK : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? AMBER_DARK : PURPLE }}>{r.label}</span>
          <span style={{ fontSize: 12, color: r.section === "ai" ? PURPLE_DARK : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? AMBER_DARK : TEXT }}>{r.desc}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
        {[{ color: PURPLE, label: "AI" }, { color: TEAL, label: "Lab" }, { color: AMBER, label: "Wrap-up" }].map(l => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
            <span style={{ fontSize: 11, color: MUTED }}>{l.label}</span>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 3 — Hook
  () => (
    <Shell tag="Hook" timer="5" title="The moment a test saves you" subtitle="You've already experienced this — you just didn't have a test to catch it"
      notes="Don't start abstract. Start with a situation students recognise: they change one small thing in a ViewModel and suddenly a completely unrelated screen breaks. That feeling of dread — 'what did I break?' — is exactly what tests solve. The capstone context makes this land: they are about to demo. The last thing they want is a regression they didn't notice.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ background: RED_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: RED, margin: "0 0 10px" }}>Without tests</p>
          <div style={{ fontSize: 12, color: RED, lineHeight: 1.8 }}>
            <div>Week 8: you fix a bug in your networking layer.</div>
            <div style={{ marginTop: 6, fontStyle: "italic", opacity: 0.85 }}>Looks fine. You ship it.</div>
            <div style={{ marginTop: 6 }}>Week 9: a teammate notices the favourites screen is now empty on every launch.</div>
            <div style={{ marginTop: 6, fontStyle: "italic", opacity: 0.85 }}>You spend 2 hours tracing it back to the networking change.</div>
            <div style={{ marginTop: 10, fontWeight: 600 }}>This is called a regression. You introduced it without knowing.</div>
          </div>
        </div>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 10px" }}>With tests</p>
          <div style={{ fontSize: 12, color: TEAL_DARK, lineHeight: 1.8 }}>
            <div>Week 8: you fix a bug in your networking layer.</div>
            <div style={{ marginTop: 6, fontStyle: "italic", opacity: 0.85 }}>You run the test suite.</div>
            <div style={{ marginTop: 6 }}>
              <span style={{ fontFamily: "monospace", background: "rgba(0,0,0,0.08)", padding: "1px 6px", borderRadius: 4 }}>FavouritesViewModelTest — FAILED</span>
            </div>
            <div style={{ marginTop: 6, fontStyle: "italic", opacity: 0.85 }}>You fix it before it ships. 5 minutes, not 2 hours.</div>
            <div style={{ marginTop: 10, fontWeight: 600 }}>Tests don{"'"}t prevent bugs. They catch them before users do.</div>
          </div>
        </div>
      </div>
      <Discussion>{"Think about your capstone. If you changed one line in your ViewModel right now, how confident are you that nothing else would break? What would it take to feel confident?"}</Discussion>
    </Shell>
  ),

  // 4 — Why tests exist
  () => (
    <Shell tag="Concept" timer="7" title="Why unit tests exist" subtitle="The honest answer"
      notes="The textbook answer — 'tests prevent bugs' — is too passive. The real answer is about confidence and speed. Emphasise: tests are a tool for enabling change. Students have been adding features to their capstone for weeks. Tests are what let a professional team do that for years without the codebase becoming unmaintainable.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: ".05em", margin: "0 0 10px" }}>Common misconceptions</p>
          {[
            { myth: "Tests prevent bugs", truth: "Tests catch regressions — they don't stop you writing bugs in the first place" },
            { myth: "Tests slow you down", truth: "Tests slow you down for the first hour and speed you up for every hour after" },
            { myth: "Testing is for big apps", truth: "Testing is for any app you plan to change — which is every app" },
          ].map(item => (
            <div key={item.myth} style={{ margin: "0 0 10px" }}>
              <div style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
                <span style={{ color: RED, fontWeight: 700, fontSize: 12, flexShrink: 0, marginTop: 1 }}>✗</span>
                <span style={{ fontSize: 12, color: RED, fontStyle: "italic" }}>{`"${item.myth}"`}</span>
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "flex-start", marginTop: 3, marginLeft: 18 }}>
                <span style={{ color: TEAL, fontWeight: 700, fontSize: 12, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 12, color: TEXT }}>{item.truth}</span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: MUTED, textTransform: "uppercase", letterSpacing: ".05em", margin: "0 0 10px" }}>What tests actually give you</p>
          {[
            { icon: "🔒", label: "Safety net", desc: "Change code confidently — the test suite tells you what broke" },
            { icon: "📖", label: "Documentation", desc: "Tests describe what the code is supposed to do, in runnable form" },
            { icon: "🏗️", label: "Design pressure", desc: "Hard-to-test code is usually badly designed — tests surface this early" },
            { icon: "👥", label: "Collaboration", desc: "A new teammate can read your tests to understand behaviour without running the app" },
          ].map(item => (
            <div key={item.label} style={{ display: "flex", gap: 10, margin: "0 0 10px", alignItems: "flex-start" }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 2px" }}>{item.label}</p>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px" }}>
        <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>
          <strong>The core value:</strong> tests give you confidence to change code. You{"'"}re one week from demo day. Tests are how professional teams ship without fear.
        </p>
      </div>
    </Shell>
  ),

  // 5 — The test pyramid
  () => (
    <Shell tag="Concept" timer="6" title="The test pyramid" subtitle="Three kinds of tests — we're starting at the bottom"
      notes="Students often confuse unit tests with UI tests or think testing means pressing buttons manually. Clarify quickly. The pyramid shape represents the right ratio: many fast unit tests at the base, fewer slower integration tests in the middle, very few expensive UI tests at the top. We focus on unit tests today because they are fast, reliable, require no device, and align perfectly with the ViewModel pattern they already know.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            {[
              { label: "E2E / UI tests", sub: "Simulate a real user through the full app", width: "40%", bg: RED_LIGHT, fg: RED, note: "Slow · Brittle · Expensive" },
              { label: "Integration tests", sub: "Multiple components working together", width: "65%", bg: AMBER_LIGHT, fg: AMBER_DARK, note: "Moderate speed and scope" },
              { label: "Unit tests", sub: "One class in isolation — no device needed", width: "100%", bg: TEAL_LIGHT, fg: TEAL_DARK, note: "Fast · Reliable · Our focus today" },
            ].map(tier => (
              <div key={tier.label} style={{ width: tier.width, background: tier.bg, borderRadius: 8, padding: "8px 12px", textAlign: "center" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: tier.fg, margin: "0 0 2px" }}>{tier.label}</p>
                <p style={{ fontSize: 10, color: tier.fg, margin: "0 0 3px", opacity: 0.8 }}>{tier.sub}</p>
                <p style={{ fontSize: 10, color: tier.fg, margin: 0, fontWeight: 600, opacity: 0.7 }}>{tier.note}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: MUTED, textAlign: "center", margin: "10px 0 0" }}>Many unit tests · fewer integration · very few E2E</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>Why unit tests first?</p>
          {[
            { label: "No device required", desc: "Unit tests run on the JVM (Android) or Swift runtime (iOS) — no emulator, no Simulator, no waiting" },
            { label: "Milliseconds per test", desc: "A full unit test suite with 50 tests runs in under 2 seconds. UI tests for the same coverage take minutes." },
            { label: "Perfect fit for MVVM", desc: "Your ViewModel has no UI code and no platform dependencies — it's exactly what unit tests were built for" },
            { label: "Find bugs earlier", desc: "Unit tests run on every save. UI tests run at best once a day. The earlier you catch a bug, the cheaper it is to fix." },
          ].map(item => (
            <div key={item.label} style={{ background: GRAY, borderRadius: 8, padding: "8px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: "0 0 2px" }}>{item.label}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 6 — What makes code testable
  () => (
    <Shell tag="Concept" timer="8" title="What makes code testable" subtitle="MVVM wasn't just about architecture — it was about this"
      notes="This is the payoff for everything in Week 6. Students built MVVM because they were told it was a good pattern. Now they find out why: a ViewModel with no UI imports and an injected repository is exactly the shape of code that is easy to test. Walk through the two ViewModel examples and ask students which one they could write a test for without a running app. The answer should be obvious.">
      <OSToggle
        android={
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: RED, margin: "0 0 8px" }}>Hard to test ❌</p>
              <CodePane title="Kotlin — AlbumScreen.kt (mixed)" accent={RED}>{`@Composable
fun AlbumScreen() {
  var albums by remember {
    mutableStateOf(emptyList<Album>())
  }
  // Network call directly in the UI
  LaunchedEffect(Unit) {
    albums = RetrofitClient
      .service.getAlbums()
  }
  // ...
}`}</CodePane>
              <div style={{ background: RED_LIGHT, borderRadius: 6, padding: "8px 10px", marginTop: 6 }}>
                <p style={{ fontSize: 11, color: RED, margin: 0, lineHeight: 1.5 }}>
                  To test this you need a Composable, a running coroutine, and a real (or mocked) Retrofit client. That{"'"}s not a unit test — it{"'"}s almost an integration test.
                </p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 8px" }}>Easy to test ✅</p>
              <CodePane title="Kotlin — AlbumViewModel.kt (MVVM)" accent={TEAL_DARK}>{`class AlbumViewModel(
  private val repo: AlbumRepository
) : ViewModel() {
  private val _uiState =
    MutableStateFlow<AlbumUiState>(
      AlbumUiState.Loading)
  val uiState = _uiState.asStateFlow()

  fun loadAlbums() {
    viewModelScope.launch {
      _uiState.value = try {
        AlbumUiState.Success(repo.getAlbums())
      } catch (e: Exception) {
        AlbumUiState.Error(e.message ?: "")
      }
    }
  }
}`}</CodePane>
              <div style={{ background: TEAL_LIGHT, borderRadius: 6, padding: "8px 10px", marginTop: 6 }}>
                <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>
                  To test this: create a fake repo, create the ViewModel, call <span style={{ fontFamily: "monospace" }}>loadAlbums()</span>, assert the state. No UI, no network, no device.
                </p>
              </div>
            </div>
          </div>
        }
        ios={
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: RED, margin: "0 0 8px" }}>Hard to test ❌</p>
              <CodePane title="Swift — AlbumScreen.swift (mixed)" accent={RED}>{`struct AlbumScreen: View {
  @State private var albums: [Album] = []

  var body: some View {
    List(albums, id: \\.id) { /* ... */ }
      .task {
        // Network call directly in the View
        albums = try await
          URLSession.shared.albums()
      }
  }
}`}</CodePane>
              <div style={{ background: RED_LIGHT, borderRadius: 6, padding: "8px 10px", marginTop: 6 }}>
                <p style={{ fontSize: 11, color: RED, margin: 0, lineHeight: 1.5 }}>
                  To test this you need a SwiftUI View hierarchy, a running task, and a real (or stubbed) URLSession. That{"'"}s not a unit test — it{"'"}s almost an integration test.
                </p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 8px" }}>Easy to test ✅</p>
              <CodePane title="Swift — AlbumViewModel.swift (MVVM)" accent={TEAL_DARK}>{`@MainActor
class AlbumViewModel: ObservableObject {
  @Published var uiState: AlbumUiState
    = .loading
  private let repo: AlbumRepository

  init(repo: AlbumRepository) {
    self.repo = repo
  }

  func loadAlbums() async {
    do {
      let albums = try await repo.getAlbums()
      uiState = .success(albums)
    } catch {
      uiState = .error(
        error.localizedDescription)
    }
  }
}`}</CodePane>
              <div style={{ background: TEAL_LIGHT, borderRadius: 6, padding: "8px 10px", marginTop: 6 }}>
                <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>
                  To test this: create a fake repo, create the ViewModel, await <span style={{ fontFamily: "monospace" }}>loadAlbums()</span>, assert the state. No UI, no network, no device.
                </p>
              </div>
            </div>
          </div>
        }
      />
      <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 12 }}>
        <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>
          <strong>The testability rule:</strong> if you can create the class you want to test by just calling its constructor — passing in its dependencies — it{"'"}s testable. If you need a running app, a screen, or a network connection just to instantiate it, it{"'"}s not.
        </p>
      </div>
    </Shell>
  ),

  // 7 — Dependency injection recap
  () => (
    <Shell tag="Concept" timer="5" title="The secret ingredient — dependency injection" subtitle="You already know this pattern from Week 6"
      notes="Students used viewModel() and dependency injection in Week 6 without fully understanding why. Now reveal the reason: injecting the repository through the constructor is what allows you to swap the real repository for a fake in tests. This is the 'aha' connection — the architectural pattern they learned is the exact thing that makes testing possible.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>In production</p>
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <pre style={{ margin: 0, fontSize: 11, fontFamily: "monospace", color: BLUE, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{`// The real repository — makes
// actual network calls
val realRepo = LastFmRepository()

// ViewModel receives it
val vm = AlbumViewModel(realRepo)`}</pre>
          </div>
          <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "12px 14px", marginTop: 8 }}>
            <pre style={{ margin: 0, fontSize: 11, fontFamily: "monospace", color: GREEN, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{`// iOS equivalent
let realRepo = LastFmRepository()
let vm = AlbumViewModel(repo: realRepo)`}</pre>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>In tests</p>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <pre style={{ margin: 0, fontSize: 11, fontFamily: "monospace", color: TEAL_DARK, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{`// A fake — returns whatever
// the test needs, no network
val fakeRepo = FakeAlbumRepository()
fakeRepo.albumsToReturn =
    listOf(Album("Kind of Blue"))

// Same ViewModel, fake repository
val vm = AlbumViewModel(fakeRepo)`}</pre>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px", marginTop: 8 }}>
            <pre style={{ margin: 0, fontSize: 11, fontFamily: "monospace", color: TEAL_DARK, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{`// iOS equivalent
let fakeRepo = FakeAlbumRepository()
fakeRepo.albumsToReturn = [Album(...)]
let vm = AlbumViewModel(repo: fakeRepo)`}</pre>
          </div>
        </div>
      </div>
      <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 12 }}>
        <p style={{ fontSize: 12, color: AMBER_DARK, margin: 0, lineHeight: 1.5 }}>
          <strong>The ViewModel doesn{"'"}t know if it{"'"}s talking to a real network or a fake.</strong> It just calls <span style={{ fontFamily: "monospace" }}>repo.getAlbums()</span> and reacts to the result. That{"'"}s why dependency injection is the enabling pattern for testing.
        </p>
      </div>
    </Shell>
  ),

  // 8 — Test doubles
  () => (
    <Shell tag="Concept" timer="5" title="Test doubles — fake, stub, mock" subtitle="The vocabulary — and which one you'll actually use"
      notes="Don't dwell on this too long. The vocabulary matters because students will see all three terms in documentation and StackOverflow answers. But in practice, a simple fake that can be configured to return values or throw errors covers 90% of what they'll need. The distinction between stub and mock (behaviour verification) is real but not important for today.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
        {[
          {
            term: "Fake",
            def: "A working implementation that takes shortcuts. It does the same job as the real thing but simpler — in-memory instead of database, hardcoded instead of network.",
            example: `class FakeRepo : AlbumRepo {\n  var items = listOf<Album>()\n  override suspend fun getAlbums()\n    = items\n}`,
            use: "✅ Use this. Simple, readable, configurable.",
            color: TEAL_LIGHT, fg: TEAL_DARK,
          },
          {
            term: "Stub",
            def: "Returns a fixed value for a specific call. Doesn't verify how it was called — only controls what comes back.",
            example: `// Just always returns the same thing\nwhenever(repo.getAlbums())\n  .thenReturn(listOf(album1))`,
            use: "Use when you only need to control return values.",
            color: BLUE_LIGHT, fg: BLUE,
          },
          {
            term: "Mock",
            def: "A fake that also verifies behaviour — checks that certain methods were called, with certain arguments, a certain number of times.",
            example: `// Verifies the call happened\nverify(repo).getAlbums()\nverify(repo, times(1))\n  .saveAlbum(any())`,
            use: "Use when the behaviour itself matters, not just the result.",
            color: PURPLE_LIGHT, fg: PURPLE_DARK,
          },
        ].map(item => (
          <div key={item.term} style={{ background: item.color, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: item.fg, margin: "0 0 4px" }}>{item.term}</p>
            <p style={{ fontSize: 11, color: item.fg, margin: "0 0 8px", lineHeight: 1.5, opacity: 0.9 }}>{item.def}</p>
            <pre style={{ margin: "0 0 8px", background: "rgba(0,0,0,0.08)", color: item.fg, fontSize: 10, padding: "6px 8px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{item.example}</pre>
            <p style={{ fontSize: 11, color: item.fg, margin: 0, fontWeight: 600 }}>{item.use}</p>
          </div>
        ))}
      </div>
      <div style={{ background: GRAY, borderRadius: 8, padding: "10px 14px" }}>
        <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>
          For today{"'"}s lab you{"'"}ll write a <strong>Fake</strong> — a class that implements the repository interface but returns whatever the test configures. It{"'"}s the simplest and most readable approach for ViewModel testing.
        </p>
      </div>
    </Shell>
  ),

  // 9 — The starter ViewModel
  () => (
    <Shell tag="Code-along" timer="5" title="The starter ViewModel" subtitle="What you're testing — read this before writing a single test"
      notes="Spend time here. Students need to understand what this ViewModel does before they can write meaningful assertions about it. Walk through it line by line: what state does it start in? What does loadItems() do? What are the possible outcomes? The answer to those three questions IS the test plan.">
      <div style={{ marginTop: 4 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="The state contract — three possible outcomes">
                    <pre style={preStyle}>{`sealed interface ItemUiState {
    object Loading : ItemUiState
    data class Success(val items: List<String>) : ItemUiState
    data class Error(val message: String) : ItemUiState
}`}</pre>
                  </Step>
                  <Step n={2} title="The repository interface — the injection point">
                    <pre style={preStyle}>{`interface ItemRepository {
    suspend fun getItems(): List<String>
}`}</pre>
                  </Step>
                  <Step n={3} title="The ViewModel — moves between states">
                    <pre style={preStyle}>{`class ItemViewModel(
    private val repo: ItemRepository
) : ViewModel() {
    private val _uiState =
        MutableStateFlow<ItemUiState>(ItemUiState.Loading)
    val uiState: StateFlow<ItemUiState> = _uiState.asStateFlow()

    fun loadItems() {
        _uiState.value = ItemUiState.Loading
        viewModelScope.launch {
            _uiState.value = try {
                ItemUiState.Success(repo.getItems())
            } catch (e: Exception) {
                ItemUiState.Error(e.message ?: "")
            }
        }
    }
}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="The state contract — three possible outcomes" accent={TEAL}>
                    <pre style={preStyle}>{`enum ItemUiState {
    case loading
    case success([String])
    case error(String)
}`}</pre>
                  </Step>
                  <Step n={2} title="The repository protocol — the injection point" accent={TEAL}>
                    <pre style={preStyle}>{`protocol ItemRepository {
    func getItems() async throws -> [String]
}`}</pre>
                  </Step>
                  <Step n={3} title="The ViewModel — moves between states" accent={TEAL}>
                    <pre style={preStyle}>{`@MainActor
class ItemViewModel: ObservableObject {
    @Published var uiState: ItemUiState = .loading
    private let repo: ItemRepository

    init(repo: ItemRepository) {
        self.repo = repo
    }

    func loadItems() async {
        uiState = .loading
        do {
            let items = try await repo.getItems()
            uiState = .success(items)
        } catch {
            uiState = .error(error.localizedDescription)
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
              android={<CodePane title="Kotlin — ItemViewModel.kt" accent={PURPLE}>{`sealed interface ItemUiState {
    object Loading : ItemUiState
    data class Success(val items: List<String>) : ItemUiState
    data class Error(val message: String) : ItemUiState
}

interface ItemRepository {
    suspend fun getItems(): List<String>
}

class ItemViewModel(
    private val repo: ItemRepository
) : ViewModel() {
    private val _uiState =
        MutableStateFlow<ItemUiState>(ItemUiState.Loading)
    val uiState: StateFlow<ItemUiState> = _uiState.asStateFlow()

    fun loadItems() {
        _uiState.value = ItemUiState.Loading
        viewModelScope.launch {
            _uiState.value = try {
                ItemUiState.Success(repo.getItems())
            } catch (e: Exception) {
                ItemUiState.Error(e.message ?: "")
            }
        }
    }
}`}</CodePane>}
              ios={<CodePane title="Swift — ItemViewModel.swift" accent={TEAL}>{`enum ItemUiState {
    case loading
    case success([String])
    case error(String)
}

protocol ItemRepository {
    func getItems() async throws -> [String]
}

@MainActor
class ItemViewModel: ObservableObject {
    @Published var uiState: ItemUiState = .loading
    private let repo: ItemRepository

    init(repo: ItemRepository) {
        self.repo = repo
    }

    func loadItems() async {
        uiState = .loading
        do {
            let items = try await repo.getItems()
            uiState = .success(items)
        } catch {
            uiState = .error(error.localizedDescription)
        }
    }
}`}</CodePane>}
            />
          }
        />
      </div>
      <Discussion>{"Before writing any tests — what are all the possible states this ViewModel can be in? What inputs would cause each one?"}</Discussion>
    </Shell>
  ),

  // 10 — Writing the fake
  () => (
    <Shell tag="Code-along" timer="6" title="Step 1 — write the fake repository" subtitle="The test double that replaces the real network"
      notes="The fake is the most important thing students write today — more than the test itself. Once they have a fake they can configure, every test is just: set up the fake, run the method, assert the state. Walk through the two properties: itemsToReturn controls what comes back on success; shouldThrow controls whether it simulates a network failure. Ask students: why an interface? Because the ViewModel depends on the interface, not the implementation — that's the injection point.">
      <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
        <CodePane title="Kotlin — FakeItemRepository.kt" accent={BLUE}>{`class FakeItemRepository : ItemRepository {
    // Configure before each test
    var shouldThrow = false
    var itemsToReturn =
        listOf("Item A", "Item B", "Item C")

    override suspend fun getItems()
        : List<String> {
        if (shouldThrow) {
            throw IOException("Network error")
        }
        return itemsToReturn
    }
}`}</CodePane>
        <CodePane title="Swift — FakeItemRepository.swift" accent={GREEN}>{`class FakeItemRepository: ItemRepository {
    // Configure before each test
    var shouldThrow = false
    var itemsToReturn =
        ["Item A", "Item B", "Item C"]

    func getItems() async throws
        -> [String] {
        if shouldThrow {
            throw URLError(
                .notConnectedToInternet)
        }
        return itemsToReturn
    }
}`}</CodePane>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[
          { q: "Why an interface?", a: "The ViewModel accepts any type that conforms to ItemRepository — real or fake. The interface is the injection point." },
          { q: "Why shouldThrow?", a: "Lets each test independently control whether the 'network' succeeds or fails, without changing the ViewModel." },
          { q: "Why itemsToReturn?", a: "Tests that assert on list size or content can configure exactly what comes back — 0 items, 1 item, 100 items." },
        ].map(item => (
          <div key={item.q} style={{ background: GRAY, borderRadius: 8, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: "0 0 3px" }}>{item.q}</p>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{item.a}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 11 — Anatomy of a test
  () => (
    <Shell tag="Concept" timer="5" title="Anatomy of a test" subtitle="Every test has the same shape — Arrange · Act · Assert"
      notes="Surface the framework primitives now so the next slide isn't a wall of unfamiliar tokens. Walk through AAA: arrange dependencies, act on the system, assert on the outcome. Point out test names are documentation — a good name reads as a sentence describing the behaviour. JUnit lets you backtick a name with spaces; XCTest discovers any function whose name starts with 'test'.">
      <OSToggle
        android={
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 12 }}>
            <CodePane title="Kotlin — JUnit + kotlinx-coroutines-test" accent={PURPLE}>{`@Test                              // ① mark as a test
fun \`loadItems emits Success\`()    // ② name = behaviour
    = runTest {                    // ③ test coroutine scope

    // Arrange
    val fake = FakeItemRepository()
    val vm = ItemViewModel(fake)

    // Act
    vm.loadItems()
    advanceUntilIdle()             // ④ flush coroutines

    // Assert
    assertTrue(vm.uiState.value
        is ItemUiState.Success)
}`}</CodePane>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { n: "①", label: "@Test annotation", desc: "Tells JUnit this method is a runnable test." },
                { n: "②", label: "Backticked names", desc: "Kotlin lets you write the behaviour as a sentence — these names show up directly in test output." },
                { n: "③", label: "runTest { }", desc: "A virtual-time coroutine scope. Without it, async work would either skip or hang." },
                { n: "④", label: "advanceUntilIdle()", desc: "Run all pending coroutines to completion before asserting." },
                { n: "AAA", label: "Arrange · Act · Assert", desc: "Set up, exercise, verify. Every test you write follows this shape." },
              ].map(it => (
                <div key={it.n} style={{ background: GRAY, borderRadius: 6, padding: "6px 8px" }}>
                  <p style={{ fontSize: 11, margin: "0 0 1px" }}><strong style={{ color: PURPLE_DARK }}>{it.n} {it.label}</strong></p>
                  <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        }
        ios={
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 12 }}>
            <CodePane title="Swift — XCTest" accent={TEAL}>{`@MainActor                            // ① UI/Published on main
final class ItemViewModelTests:       // ② subclass XCTestCase
    XCTestCase {

  func testLoadItemsSuccess()         // ③ name starts with "test"
      async {                          // ④ async test method
    // Arrange
    let fake = FakeItemRepository()
    let vm = ItemViewModel(repo: fake)

    // Act
    await vm.loadItems()               // ⑤ await flushes async work

    // Assert
    if case .success(let items)
        = vm.uiState {
      XCTAssertEqual(items.count, 3)
    }
  }
}`}</CodePane>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { n: "①", label: "@MainActor", desc: "ViewModel uses @Published — assertions must run on main." },
                { n: "②", label: "XCTestCase", desc: "Test classes inherit from XCTestCase. One class per type under test is the convention." },
                { n: "③", label: "test prefix", desc: "XCTest discovers tests by name — every test method must start with 'test'." },
                { n: "④", label: "async function", desc: "Marks the test as awaiting suspension points — the runner handles the rest." },
                { n: "⑤", label: "await", desc: "Suspends until the async work finishes, so the assertion runs after the state has updated." },
              ].map(it => (
                <div key={it.n} style={{ background: GRAY, borderRadius: 6, padding: "6px 8px" }}>
                  <p style={{ fontSize: 11, margin: "0 0 1px" }}><strong style={{ color: TEAL_DARK }}>{it.n} {it.label}</strong></p>
                  <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
        <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>
          <strong>Every test follows the AAA shape.</strong> If a test of yours doesn{"'"}t look like Arrange → Act → Assert, you{"'"}ve probably mixed two tests into one.
        </p>
      </div>
    </Shell>
  ),

  // 12 — The assertion toolkit
  () => (
    <Shell tag="Concept" timer="4" title="The assertion toolkit" subtitle="The functions you'll actually call in every test"
      notes="Don't lecture through every row — students can read. Highlight the two callouts: the JUnit argument-order convention (Expected first, Actual second) and the 'use the most specific assertion' rule. The point is students leave knowing the menu exists, not memorising every API.">
      <div style={{ marginTop: 4 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.2fr 1.2fr", gap: 6, padding: "5px 8px", background: GRAY, borderRadius: "6px 6px 0 0" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: ".05em" }}>What you{"'"}re checking</div>
          <div style={{ fontSize: 10, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: ".05em" }}>JUnit · Kotlin</div>
          <div style={{ fontSize: 10, fontWeight: 700, color: TEAL, textTransform: "uppercase", letterSpacing: ".05em" }}>XCTest · Swift</div>
        </div>
        {[
          { purpose: "Boolean true / false", kotlin: "assertTrue(cond)\nassertFalse(cond)", swift: "XCTAssertTrue(cond)\nXCTAssertFalse(cond)" },
          { purpose: "Value equality", kotlin: "assertEquals(expected, actual)", swift: "XCTAssertEqual(a, b)" },
          { purpose: "Nullability", kotlin: "assertNull(x)\nassertNotNull(x)", swift: "XCTAssertNil(x)\nXCTAssertNotNil(x)" },
          { purpose: "Expected to throw", kotlin: "assertThrows<IOException> { ... }", swift: "XCTAssertThrowsError(try ...)" },
          { purpose: "Force a failure", kotlin: `fail("message")`, swift: `XCTFail("message")` },
        ].map((r) => (
          <div key={r.purpose} style={{ display: "grid", gridTemplateColumns: "1.1fr 1.2fr 1.2fr", gap: 6, padding: "5px 8px", borderTop: `0.5px solid ${GRAY}` }}>
            <div style={{ fontSize: 11, color: TEXT, fontWeight: 500 }}>{r.purpose}</div>
            <div style={{ fontSize: 10, color: PURPLE_DARK, fontFamily: "monospace", whiteSpace: "pre-wrap", lineHeight: 1.5 }}>{r.kotlin}</div>
            <div style={{ fontSize: 10, color: TEAL_DARK, fontFamily: "monospace", whiteSpace: "pre-wrap", lineHeight: 1.5 }}>{r.swift}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
        <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: AMBER_DARK, margin: "0 0 4px" }}>⚠️ JUnit argument order</p>
          <p style={{ fontSize: 11, color: AMBER_DARK, margin: 0, lineHeight: 1.5 }}>
            Convention is <IC>assertEquals(expected, actual)</IC>. Flip them and the failure message reads backwards — &ldquo;Expected: 0, Actual: 3&rdquo; when you meant the opposite. XCTest doesn{"'"}t enforce order; just stay consistent.
          </p>
        </div>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 4px" }}>✅ Prefer the most specific assertion</p>
          <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>
            <IC>assertEquals(3, list.size)</IC> fails with &ldquo;Expected: 3, Actual: 0.&rdquo; <IC>assertTrue(list.size == 3)</IC> fails with &ldquo;Expected: true, Actual: false&rdquo; — far less useful.
          </p>
        </div>
      </div>
    </Shell>
  ),

  // 13 — Async tests — the gotcha
  () => (
    <Shell tag="Pitfall" tagColor="amber" timer="4" title="Async tests — the gotcha" subtitle="The bug that makes a test pass when it shouldn't"
      notes="This is the single most common reason a unit test passes when it shouldn't. The setup looks fine, the assertion looks fine — but the assertion runs BEFORE the async work finishes, so it's checking the initial state, not the post-load state. Walk through the failure example carefully. The fix on each platform is small but specific.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: RED_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: RED, margin: "0 0 8px" }}>❌ Passes for the wrong reason</p>
          <pre style={{ ...preStyle, fontSize: 10 }}>{`@Test
fun \`loadItems emits Success\`() = runTest {
    val fake = FakeItemRepository()
    val vm = ItemViewModel(fake)
    vm.loadItems()
    // ↓ no advanceUntilIdle()
    assertTrue(vm.uiState.value
        is ItemUiState.Loading)
    // ✓ Loading IS the current state...
    // ...because the coroutine hasn't run yet.
}`}</pre>
          <p style={{ fontSize: 11, color: RED, margin: "8px 0 0", lineHeight: 1.5 }}>
            The assertion runs <em>before</em> the launched coroutine. The state is still <IC>Loading</IC> when you check — the test goes green, but it{"'"}s not testing what you think.
          </p>
        </div>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 8px" }}>✅ Drain the work, then assert</p>
          <p style={{ fontSize: 10, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em" }}>Android · Kotlin</p>
          <pre style={{ ...preStyle, fontSize: 10, marginBottom: 8 }}>{`vm.loadItems()
advanceUntilIdle()  // ← drain
assertTrue(vm.uiState.value
    is ItemUiState.Success)`}</pre>
          <p style={{ fontSize: 10, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em" }}>iOS · Swift</p>
          <pre style={{ ...preStyle, fontSize: 10 }}>{`await vm.loadItems()  // ← await
if case .success(let items) = vm.uiState {
    XCTAssertEqual(items.count, 3)
}`}</pre>
          <p style={{ fontSize: 11, color: TEAL_DARK, margin: "8px 0 0", lineHeight: 1.5 }}>
            Android: <IC>runTest</IC> + <IC>advanceUntilIdle()</IC> drain queued coroutines.<br/>iOS: <IC>async</IC> test methods naturally suspend at every <IC>await</IC>.
          </p>
        </div>
      </div>
      <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
        <p style={{ fontSize: 12, color: AMBER_DARK, margin: 0, lineHeight: 1.5 }}>
          <strong>Rule of thumb:</strong> if your VM kicks off a coroutine or async task, you must drain it before asserting. Forgetting this is the #1 cause of flaky tests in MVVM codebases.
        </p>
      </div>
    </Shell>
  ),

  // 14 — Writing the tests
  () => (
    <Shell tag="Code-along" timer="10" title="Step 2 — write the three baseline tests" subtitle="Loading · Success · Error — one test per state"
      notes="Walk through each test slowly. The pattern is always: 1) configure the fake, 2) create the ViewModel with the fake, 3) call the method, 4) wait for coroutines to finish, 5) assert the state. The advanceUntilIdle() / async call is the step students most often forget — without it, the assertion runs before the coroutine completes. For iOS, async test functions handle this automatically. Point out the MainDispatcherRule for Android — it replaces the main dispatcher with a test one.">
      <div style={{ marginTop: 4 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Initial state — no method called yet, ViewModel should be Loading">
                    <pre style={preStyle}>{`@Test
fun \`initial state is Loading\`() {
    val vm = ItemViewModel(FakeItemRepository())
    assertTrue(vm.uiState.value is ItemUiState.Loading)
}`}</pre>
                  </Step>
                  <Step n={2} title="Success path — fake returns 3 items, expect Success(3)">
                    <pre style={preStyle}>{`@Test
fun \`loadItems emits Success\`() = runTest {
    val fake = FakeItemRepository()
    val vm = ItemViewModel(fake)
    vm.loadItems()
    advanceUntilIdle()  // let coroutine finish
    val state = vm.uiState.value
    assertTrue(state is ItemUiState.Success)
    assertEquals(3, (state as ItemUiState.Success).items.size)
}`}</pre>
                  </Step>
                  <Step n={3} title="Error path — configure fake to throw, expect Error">
                    <pre style={preStyle}>{`@Test
fun \`loadItems emits Error when repo throws\`() = runTest {
    val fake = FakeItemRepository().also { it.shouldThrow = true }
    val vm = ItemViewModel(fake)
    vm.loadItems()
    advanceUntilIdle()
    assertTrue(vm.uiState.value is ItemUiState.Error)
}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Initial state — no method called yet, ViewModel should be .loading" accent={TEAL}>
                    <pre style={preStyle}>{`func testInitialStateIsLoading() {
    let vm = ItemViewModel(repo: FakeItemRepository())
    if case .loading = vm.uiState { /* pass */ }
    else { XCTFail("Expected .loading") }
}`}</pre>
                  </Step>
                  <Step n={2} title="Success path — fake returns 3 items, expect .success(3)" accent={TEAL}>
                    <pre style={preStyle}>{`func testLoadItemsSuccess() async {
    let fake = FakeItemRepository()
    let vm = ItemViewModel(repo: fake)
    await vm.loadItems()
    if case .success(let items) = vm.uiState {
        XCTAssertEqual(items.count, 3)
    } else {
        XCTFail("Expected .success, got \\(vm.uiState)")
    }
}`}</pre>
                  </Step>
                  <Step n={3} title="Error path — configure fake to throw, expect .error" accent={TEAL}>
                    <pre style={preStyle}>{`func testLoadItemsError() async {
    let fake = FakeItemRepository()
    fake.shouldThrow = true
    let vm = ItemViewModel(repo: fake)
    await vm.loadItems()
    guard case .error = vm.uiState else {
        XCTFail("Expected .error")
        return
    }
}`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={<CodePane title="Kotlin — ItemViewModelTest.kt" accent={PURPLE}>{`@Test
fun \`initial state is Loading\`() {
    val vm = ItemViewModel(FakeItemRepository())
    assertTrue(vm.uiState.value is ItemUiState.Loading)
}

@Test
fun \`loadItems emits Success\`() = runTest {
    val fake = FakeItemRepository()
    val vm = ItemViewModel(fake)
    vm.loadItems()
    advanceUntilIdle()
    val state = vm.uiState.value
    assertTrue(state is ItemUiState.Success)
    assertEquals(3, (state as ItemUiState.Success).items.size)
}

@Test
fun \`loadItems emits Error when repo throws\`() = runTest {
    val fake = FakeItemRepository().also { it.shouldThrow = true }
    val vm = ItemViewModel(fake)
    vm.loadItems()
    advanceUntilIdle()
    assertTrue(vm.uiState.value is ItemUiState.Error)
}`}</CodePane>}
              ios={<CodePane title="Swift — ItemViewModelTests.swift" accent={TEAL}>{`@MainActor
final class ItemViewModelTests: XCTestCase {

    func testInitialStateIsLoading() {
        let vm = ItemViewModel(repo: FakeItemRepository())
        if case .loading = vm.uiState { /* pass */ }
        else { XCTFail("Expected .loading") }
    }

    func testLoadItemsSuccess() async {
        let fake = FakeItemRepository()
        let vm = ItemViewModel(repo: fake)
        await vm.loadItems()
        if case .success(let items) = vm.uiState {
            XCTAssertEqual(items.count, 3)
        } else {
            XCTFail("Expected .success, got \\(vm.uiState)")
        }
    }

    func testLoadItemsError() async {
        let fake = FakeItemRepository()
        fake.shouldThrow = true
        let vm = ItemViewModel(repo: fake)
        await vm.loadItems()
        guard case .error = vm.uiState else {
            XCTFail("Expected .error")
            return
        }
    }
}`}</CodePane>}
            />
          }
        />
      </div>
    </Shell>
  ),

  // 15 — Reading a failing test
  () => (
    <Shell tag="Concept" timer="4" title="Reading a failing test" subtitle="A failing test is information — not a problem"
      notes="Students instinctively treat a red test as bad news. Reframe it: a failing test is the test doing its job. The assertion output tells you exactly what went wrong — more precisely than any print statement or manual check. Walk through the two failure examples. The first one is a value assertion failure (easy to read). The second is a type mismatch (slightly harder). Ask: which would you prefer — finding this now, or finding it when a user reports a bug?">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: RED, margin: "0 0 8px" }}>Failure: wrong count</p>
          <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "12px 14px", fontFamily: "monospace", fontSize: 11, color: "#f87171", lineHeight: 1.7 }}>
            <div style={{ color: "#cdd6f4" }}>Expected: 3</div>
            <div style={{ color: "#cdd6f4" }}>Actual:   0</div>
            <div style={{ color: "#6b7280", marginTop: 6 }}>at ItemViewModelTest</div>
            <div style={{ color: "#6b7280" }}>.loadItems emits Success</div>
            <div style={{ color: "#6b7280" }}>line 14: assertEquals(3, ...)</div>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 6, padding: "8px 10px", marginTop: 6 }}>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>
              Reading: <IC>itemsToReturn</IC> defaulted to empty. The fake{"'"}s default wasn{"'"}t set before the test ran. Fix: set <IC>fake.itemsToReturn</IC> explicitly, or check the default.
            </p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: RED, margin: "0 0 8px" }}>Failure: wrong state</p>
          <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "12px 14px", fontFamily: "monospace", fontSize: 11, color: "#f87171", lineHeight: 1.7 }}>
            <div style={{ color: "#cdd6f4" }}>Expected: ItemUiState.Success</div>
            <div style={{ color: "#cdd6f4" }}>Actual:   ItemUiState.Loading</div>
            <div style={{ color: "#6b7280", marginTop: 6 }}>at ItemViewModelTest</div>
            <div style={{ color: "#6b7280" }}>.loadItems emits Success</div>
            <div style={{ color: "#6b7280" }}>line 12: assertTrue(state is Success)</div>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 6, padding: "8px 10px", marginTop: 6 }}>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>
              Reading: the state is still Loading — the coroutine hasn{"'"}t finished. Fix: make sure <IC>advanceUntilIdle()</IC> is called before the assertion.
            </p>
          </div>
        </div>
      </div>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
        <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>
          <strong>A failing test that gives you a clear message is a good test.</strong> A passing test that doesn{"'"}t actually check anything is far more dangerous.
        </p>
      </div>
    </Shell>
  ),

  // 16 — Common pitfalls
  () => (
    <Shell tag="Pitfall" tagColor="amber" timer="4" title="Common pitfalls" subtitle="The mistakes that bite during lab — call them out before they happen"
      notes="These are the four pitfalls students hit most often during this exact lab. Walk through each in 30 seconds. Don't dwell — they'll re-encounter them in their own code, and now they'll recognise the symptom.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          {
            n: "1",
            title: "Forgetting to drain async work",
            symptom: "Test passes but is actually checking the Loading state, not the post-load state.",
            fix: "Android: call advanceUntilIdle() before asserting. iOS: await the call.",
          },
          {
            n: "2",
            title: "Asserting full equality on data classes",
            symptom: "Tests break every time you add a field to your model — even unrelated ones.",
            fix: "Assert on the type or one specific property. Save full-equality checks for true value objects.",
          },
          {
            n: "3",
            title: "Sharing one fake across tests",
            symptom: "Test order changes the outcome. Flaky failures that disappear when run in isolation.",
            fix: "Create a fresh fake inside each test, or in @Before / setUp().",
          },
          {
            n: "4",
            title: "Testing the fake instead of the VM",
            symptom: "Test passes regardless of what the ViewModel does — you're just asserting on the fake.",
            fix: "Always assert on vm.uiState.value, never on fake.itemsToReturn.",
          },
        ].map(p => (
          <div key={p.n} style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px", display: "flex", gap: 10 }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: AMBER, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, fontWeight: 700 }}>{p.n}</div>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: AMBER_DARK, margin: "0 0 4px" }}>{p.title}</p>
              <p style={{ fontSize: 11, color: AMBER_DARK, margin: "0 0 3px", lineHeight: 1.45 }}><strong>Symptom:</strong> {p.symptom}</p>
              <p style={{ fontSize: 11, color: AMBER_DARK, margin: 0, lineHeight: 1.45 }}><strong>Fix:</strong> {p.fix}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
        <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>
          <strong>If a test passes the first time you write it, be suspicious.</strong> Break it on purpose for a moment to confirm the assertion is actually checking what you think it{"'"}s checking.
        </p>
      </div>
    </Shell>
  ),

  // 17 — Edge cases with Claude
  () => (
    <Shell tag="AI opportunity" tagColor="purple" timer="6" title="Finding edge cases with Claude" subtitle="AI as a test-case generator"
      notes="This is a genuine use case where AI adds value — it can enumerate edge cases faster than most humans, especially for state machines and error paths. The key discipline students need to learn: read every suggested test before writing it. Claude sometimes suggests tests for behaviour the current implementation doesn't support yet (which is fine — those are called 'wishlist' tests or 'test-driven' specs), but students shouldn't add them without understanding what they mean.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The prompt</p>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: "0 0 8px", fontWeight: 600 }}>Paste in: your ViewModel + your existing tests</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>
              {"\"I've written unit tests for a ViewModel that loads a list of items. Here's the ViewModel and my current tests. What edge cases am I not testing? List specific test scenarios with the assertion I should write for each. Focus on state transitions, concurrency, and boundary conditions.\""}
            </p>
          </div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px", marginTop: 8 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 4px" }}>What Claude typically suggests</p>
            {[
              "Empty list returned — what state does Success emit with []?",
              "loadItems() called twice — does the second call cancel the first?",
              "Error message is blank — does the Error state handle an empty string?",
              "Repository returns a single item — is the count assertion correct?",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: PURPLE, flexShrink: 0, fontSize: 11 }}>▸</span>
                <span style={{ fontSize: 11, color: MUTED }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Evaluating suggestions</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "✅ Write it", desc: "You understand what it tests and why the behaviour matters. It exercises a scenario your current tests miss.", color: TEAL_LIGHT, fg: TEAL_DARK },
              { label: "⚠️ Understand first", desc: "Claude suggested it but you don't fully understand the assertion. Ask: \"Can you explain why this test would fail if I skip it?\"", color: AMBER_LIGHT, fg: AMBER_DARK },
              { label: "❌ Skip it", desc: "It tests behaviour the ViewModel doesn't have yet, or tests something so obvious it adds no value (e.g. 'calling loadItems() doesn't crash').", color: RED_LIGHT, fg: RED },
            ].map(item => (
              <div key={item.label} style={{ background: item.color, borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: item.fg, margin: "0 0 3px" }}>{item.label}</p>
                <p style={{ fontSize: 11, color: item.fg, margin: 0, lineHeight: 1.4, opacity: 0.9 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 18 — Lab intro
  () => (
    <Shell tag="Lab intro" tagColor="teal" timer="5" title="Today's lab — writing tests for a shared ViewModel" subtitle="55 minutes in breakout rooms"
      notes="Students all work from the same starter ViewModel (ItemViewModel). The goal is to have at least 5 tests by the end: Loading initial state, Success with items, Error on throw, and 2 edge cases from Claude. Students who finish early should write one test for their own capstone ViewModel — that's the real-world application.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What you{"'"}re building</p>
          {[
            { n: "1", t: "Write the fake repository", d: "FakeItemRepository (Kotlin and Swift)" },
            { n: "2", t: "Write 3 baseline tests", d: "Initial loading state · Success · Error on throw" },
            { n: "3", t: "Break one test intentionally", d: "Read the assertion output — understand what it tells you" },
            { n: "4", t: "Find edge cases with Claude", d: "Paste ViewModel + tests, ask for edge cases, write 2 more" },
            { n: "5", t: "Stretch: test your capstone ViewModel", d: "Apply the same pattern to one of your own ViewModels" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 10, margin: "6px 0", alignItems: "flex-start" }}>
              <div style={{ width: 20, height: 20, background: PURPLE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 700, color: "#fff" }}>{s.n}</div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 1px" }}>{s.t}</p>
                <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: BLUE, margin: "0 0 6px" }}>Android — before you start</p>
            {[
              "Add kotlinx-coroutines-test to your test build.gradle",
              "Add the MainDispatcherRule (provided in the lab instructions)",
              "Create a new test file: ItemViewModelTest.kt in the test/ source set",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "3px 0" }}>
                <span style={{ color: BLUE, fontSize: 11, flexShrink: 0 }}>□</span>
                <span style={{ fontSize: 11, color: BLUE }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: GREEN, margin: "0 0 6px" }}>iOS — before you start</p>
            {[
              "Add a new Unit Test target if your project doesn't have one",
              "Create ItemViewModelTests.swift in the test target",
              "Import XCTest and @testable import YourAppName",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "3px 0" }}>
                <span style={{ color: GREEN, fontSize: 11, flexShrink: 0 }}>□</span>
                <span style={{ fontSize: 11, color: GREEN }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, color: AMBER_DARK, margin: 0, lineHeight: 1.5 }}>
              <strong>Target:</strong> at least 5 passing tests before wrap-up. The reflection prompt is in the lab portal.
            </p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 19 — Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: "#fff", margin: "0 0 8px" }}>Session 1 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Your code can now talk about what it{"'"}s supposed to do — and prove it.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned</p>
            {[
              "Why tests exist — confidence to change code, not magic bug prevention",
              "The test pyramid — unit tests are fast, reliable, and device-free",
              "What makes code testable — injected dependencies, no UI in the ViewModel",
              "Test doubles — fake, stub, mock — and when to use each",
              "The three baseline tests — Loading, Success, Error",
              "How to read a failing test assertion",
              "Using Claude to surface edge cases you hadn't considered",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: AMBER, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Session 2</p>
            {[
              "The three mobile performance problems: jank, memory leaks, battery drain",
              "Android Studio Profiler and Xcode Instruments — how to use them",
              "LeakCanary and built-in memory leak detection",
              "Common performance fixes — before/after code pairs",
              "Using AI to scan your codebase for performance issues",
              "Lab: capstone work time",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.15)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.9)", margin: "0 0 3px", fontWeight: 600 }}>Capstone M4</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Feature-complete build due end of Session 2. All core screens working, data persists, at least one stretch feature.</p>
            </div>
          </div>
        </div>
      </div>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: "24px 0 0" }}>Mobile development in the age of AI · CodePath</p>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 9 · Session 1 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>Introduction to unit testing</p>
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
