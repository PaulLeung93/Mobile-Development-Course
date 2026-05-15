import { useState } from "react";

const PURPLE = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT = "#EEEDFE";
const TEAL = "#1D9E75";
const TEAL_DARK = "#0F6E56";
const TEAL_LIGHT = "#E1F5EE";
const AMBER = "#EF9F27";
const AMBER_LIGHT = "#FAEEDA";
const GRAY = "#F5F5F7";
const TEXT = "#1a1a2e";
const MUTED = "#6b7280";

const Tag = ({ children, color = "purple" }) => {
  const map = { purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK }, teal: { bg: TEAL_LIGHT, fg: TEAL_DARK }, amber: { bg: AMBER_LIGHT, fg: "#633806" } };
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

const Shell = ({ tag, timer, title, subtitle, children, notes }) => (
  <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px 22px", minHeight: 340 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag color="purple">Week 5 · S2</Tag>
        {tag && <Tag color="teal">{tag}</Tag>}
      </div>
      {timer && <span style={{ fontSize: 11, color: MUTED, background: GRAY, padding: "2px 8px", borderRadius: 20 }}>{timer} min</span>}
    </div>
    <h2 style={{ fontSize: 18, fontWeight: 500, color: TEXT, margin: "0 0 4px", lineHeight: 1.3 }}>{title}</h2>
    {subtitle && <p style={{ fontSize: 13, color: MUTED, margin: "0 0 12px" }}>{subtitle}</p>}
    <div style={{ marginTop: 10 }}>{children}</div>
    {notes && <Notes>{notes}</Notes>}
  </div>
);

const preStyle = { margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" as const };

const Step = ({ n, title, children, accent = PURPLE }) => (
  <div style={{ marginBottom: 10, paddingLeft: 24, borderLeft: "2px solid #e5e7eb", position: "relative" }}>
    <div style={{ position: "absolute", left: -14, top: 0, width: 26, height: 26, borderRadius: "50%", background: "#fff", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: accent }}>{n}</div>
    <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "2px 0 6px" }}>{title}</p>
    <div>{children}</div>
  </div>
);

const OSToggle = ({ android, ios }) => {
  const [platform, setPlatform] = useState<"android" | "ios">("android");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: "1px solid #e5e7eb", width: "fit-content" }}>
        <button onClick={() => setPlatform("android")} style={{ padding: "5px 16px", fontSize: 11, fontWeight: 700, letterSpacing: ".04em", background: platform === "android" ? PURPLE : "#fff", color: platform === "android" ? "#fff" : MUTED, border: "none", borderRight: "1px solid #e5e7eb", cursor: "pointer" }}>Android · Kotlin</button>
        <button onClick={() => setPlatform("ios")} style={{ padding: "5px 16px", fontSize: 11, fontWeight: 700, letterSpacing: ".04em", background: platform === "ios" ? TEAL : "#fff", color: platform === "ios" ? "#fff" : MUTED, border: "none", cursor: "pointer" }}>iOS · Swift</button>
      </div>
      {platform === "android" ? android : ios}
    </div>
  );
};

const ViewToggle = ({ steps, full }) => {
  const [view, setView] = useState<"steps" | "full">("steps");
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 6 }}>
        <div style={{ display: "flex", borderRadius: 20, overflow: "hidden", border: "1px solid #e5e7eb", width: "fit-content" }}>
          <button onClick={() => setView("steps")} style={{ padding: "3px 12px", fontSize: 10, fontWeight: 700, letterSpacing: ".04em", background: view === "steps" ? PURPLE : "#fff", color: view === "steps" ? "#fff" : MUTED, border: "none", borderRight: "1px solid #e5e7eb", cursor: "pointer" }}>Step by step</button>
          <button onClick={() => setView("full")} style={{ padding: "3px 12px", fontSize: 10, fontWeight: 700, letterSpacing: ".04em", background: view === "full" ? PURPLE : "#fff", color: view === "full" ? "#fff" : MUTED, border: "none", cursor: "pointer" }}>Full code</button>
        </div>
      </div>
      {view === "steps" ? steps : full}
    </div>
  );
};

const slides = [
  // 1: Title
  () => (
    <div style={{ background: `linear-gradient(135deg, ${TEAL_DARK} 0%, ${TEAL} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 5 · Session 2</p>
        <h1 style={{ fontSize: 30, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.2 }}>User preferences & offline-first</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>DataStore · UserDefaults · System design for real networks</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {["DataStore Preferences — concept and setup", "DataStore — wiring into a ViewModel", "UserDefaults + @AppStorage", "Applying a persisted theme globally", "Why networks fail in the real world", "The offline-first pattern and why it matters", "Why offline-first is good system design", "The repository pattern — Android and iOS", "Assignment 5 + capstone proposal"].map((t, i) => (
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

  // 2: Hook
  () => (
    <Shell tag="Hook" timer="5" title="Your app has a short memory — and bad manners" subtitle="Two problems, one session" notes="Open with these two concrete scenarios before touching any code. The theme scenario is something every user has experienced — you carefully set dark mode and then some update wipes it. The offline scenario is even more universal. The goal is to make students feel the problem as users before thinking about it as engineers.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 4px" }}>Problem 1 — preferences reset</p>
          <p style={{ fontSize: 12, color: "#791F1F", margin: "0 0 10px", lineHeight: 1.5 }}>You open an app, switch it to dark mode, choose your language, set your notification preferences. Then you update the app. Everything resets. You do it all again.</p>
          <p style={{ fontSize: 11, color: "#A32D2D", margin: 0, fontStyle: "italic" }}>This is what your app does today. Session 1 fixed data — this session fixes settings.</p>
        </div>
        <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 4px" }}>Problem 2 — offline is broken</p>
          <p style={{ fontSize: 12, color: "#791F1F", margin: "0 0 10px", lineHeight: 1.5 }}>You open an app on the subway to check something you looked at yesterday. Spinner. No connection. The app shows you nothing — even though it fetched that data 10 minutes ago.</p>
          <p style={{ fontSize: 11, color: "#A32D2D", margin: 0, fontStyle: "italic" }}>Your Week 4 app has this problem. Today you'll understand why — and how to fix it.</p>
        </div>
      </div>
      <Discussion>{"Think of one app on your phone that handles both of these well — settings that stick, and content that works offline. What makes it feel different from apps that don't?"}</Discussion>
    </Shell>
  ),

  // 3: Recap
  () => (
    <Shell tag="Recap" timer="4" title="Session 1 recap" notes="Quick 3-minute recap before introducing new content. The key framing: Session 1 gave students the tool for structured data. Today adds the lighter key-value tool and then zooms out to the bigger architectural picture — why local storage matters beyond just favourites.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 8px" }}>Session 1 — local databases</p>
          {["Entity / @Model — defines the table shape", "DAO / ModelContext — insert, delete, query", "Flow / @Query — live-updating list in the UI", "Favourites persist across app restarts"].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: PURPLE_DARK }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 8px" }}>Session 2 — today</p>
          {["DataStore / UserDefaults — simple preferences", "Why networks fail in the real world", "Offline-first — the system design pattern that fixes it", "How your local database is the foundation of offline-first"].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
              <span style={{ color: AMBER, fontWeight: 700, flexShrink: 0 }}>▸</span>
              <span style={{ fontSize: 12, color: TEAL_DARK }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 4: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 2 hours" notes="Walk through the structure clearly at the start. Students should know exactly when lab time begins and that there is a brief whole-class wrap-up at the end before the session closes. The 5-minute wrap-up at the end is not optional — it is when you preview Assignment 5 and set expectations for Week 6, so students leave knowing what is due and what is coming.">
      {[
        { time: "0:00–0:05",  label: "Hook",                      desc: "Two problems every app user has felt", section: null },
        { time: "0:05–0:10",  label: "Recap + right tool",         desc: "Session 1 review and database vs key-value decision", section: null },
        { time: "0:10–0:20",  label: "DataStore",                  desc: "Concept, typed keys, reading and writing", section: null },
        { time: "0:20–0:28",  label: "DataStore in a ViewModel",   desc: "End-to-end wiring, applying a theme", section: null },
        { time: "0:28–0:38",  label: "UserDefaults + @AppStorage", desc: "Raw API, @AppStorage, global theme application", section: null },
        { time: "0:38–0:45",  label: "Why networks fail",          desc: "The real-world failure modes motivating offline-first", section: null },
        { time: "0:45–0:55",  label: "Offline-first",              desc: "The pattern, why it matters, the repository layer", section: null },
        { time: "0:55–1:00",  label: "Lab intro",                  desc: "Brief walkthrough of the lab before breakout rooms", section: null },
        { time: "1:00–1:55",  label: "Lab — breakout rooms",       desc: "Favourites tab + persist dark mode preference", section: "lab" },
        { time: "1:55–2:00",  label: "Wrap-up",                    desc: "Assignment 5 overview + Week 6 preview", section: "wrapup" },
      ].map(r => (
        <div key={r.time} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: `0.5px solid ${GRAY}`, background: r.section === "lab" ? TEAL_LIGHT : r.section === "wrapup" ? AMBER_LIGHT : "transparent", borderRadius: r.section ? 6 : 0, paddingLeft: r.section ? 8 : 0, marginLeft: r.section ? -8 : 0 }}>
          <span style={{ fontSize: 12, color: r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : MUTED, minWidth: 90, flexShrink: 0, fontWeight: r.section ? 600 : 400 }}>{r.time}</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : PURPLE, minWidth: 160, flexShrink: 0 }}>{r.label}</span>
          <span style={{ fontSize: 12, color: r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : TEXT }}>{r.desc}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: TEAL, flexShrink: 0 }}></div><span style={{ fontSize: 11, color: MUTED }}>Breakout room lab</span></div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: AMBER, flexShrink: 0 }}></div><span style={{ fontSize: 11, color: MUTED }}>Whole-class wrap-up</span></div>
      </div>
    </Shell>
  ),

  // 5: Right tool for the job
  () => (
    <Shell tag="Concept" timer="4" title="Choosing the right storage tool" subtitle="Not everything needs a database" notes="The decision rule is simple — state it out loud before showing the examples. List of things that grows = database. Single setting or preference = key-value store. Run through the examples quickly.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Use a database when...</p>
          {["Storing a list of things that grows over time", "You need to filter, sort, or search the data", "Items have structure and relationships to each other"].map(t => (
            <div key={t} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
              <span style={{ color: PURPLE, flexShrink: 0, fontWeight: 700 }}>▸</span>
              <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Use a key-value store when...</p>
          {["Storing a single value or a small set of values", "The value represents a user setting or preference", "No need to query or filter — just read and write"].map(t => (
            <div key={t} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
              <span style={{ color: TEAL, flexShrink: 0, fontWeight: 700 }}>▸</span>
              <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        {[
          { label: "Saved articles", type: "db", reason: "List, grows, needs search" },
          { label: "Dark mode toggle", type: "kv", reason: "Single boolean preference" },
          { label: "Chat messages", type: "db", reason: "List, ordered, grows" },
          { label: "Onboarding done?", type: "kv", reason: "Single boolean, checked once" },
          { label: "Favourite items", type: "db", reason: "List with relationships" },
          { label: "Last selected tab", type: "kv", reason: "Single integer index" },
        ].map(ex => (
          <div key={ex.label} style={{ background: ex.type === "db" ? PURPLE_LIGHT : TEAL_LIGHT, borderRadius: 8, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: ex.type === "db" ? PURPLE_DARK : TEAL_DARK, margin: "0 0 2px" }}>{ex.label}</p>
            <p style={{ fontSize: 10, color: ex.type === "db" ? PURPLE : TEAL_DARK, margin: "0 0 4px" }}>{ex.reason}</p>
            <span style={{ fontSize: 10, fontWeight: 600, background: ex.type === "db" ? PURPLE : TEAL, color: "#fff", padding: "1px 6px", borderRadius: 10 }}>{ex.type === "db" ? "Room / SwiftData" : "DataStore / UserDefaults"}</span>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 6: DataStore — concept and setup
  () => (
    <Shell tag="Android · DataStore" timer="5" title="DataStore Preferences — concept and setup" subtitle="The modern replacement for SharedPreferences" notes="Two things to cover here: why DataStore replaces SharedPreferences, and how to define typed keys. SharedPreferences did synchronous disk I/O on the main thread — DataStore is fully async and built on coroutines. Students will see SharedPreferences in older tutorials and Stack Overflow answers; they should know it exists but always reach for DataStore in new code.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 6px" }}>SharedPreferences — avoid in new code</p>
            {["Synchronous disk I/O — can block the main thread", "No type safety — easy to use the wrong key", "No coroutines support", "Deprecated for new Android projects"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: "#A32D2D", fontWeight: 700, flexShrink: 0, fontSize: 12 }}>✗</span>
                <span style={{ fontSize: 12, color: "#791F1F" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 6px" }}>DataStore Preferences — use this</p>
            {["Fully async — reads and writes off the main thread", "Backed by Kotlin Flow — observe changes reactively", "Typed keys — wrong type is a compile error", "Designed for coroutines and ViewModel"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0, fontSize: 12 }}>✓</span>
                <span style={{ fontSize: 12, color: TEAL_DARK }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <CodePane title="Kotlin — typed keys and DataStore setup" accent={PURPLE}>{`// Add to build.gradle:
// implementation "androidx.datastore:datastore-preferences:1.1.1"

// Create the DataStore once at the app level
val Context.dataStore by preferencesDataStore("user_prefs")

// Define typed keys — each key has a fixed type
// Using the wrong type here is a compile error
object PreferenceKeys {
    val DARK_MODE   = booleanPreferencesKey("dark_mode")
    val LAST_TAB    = intPreferencesKey("last_tab")
    val USERNAME    = stringPreferencesKey("username")
    val FONT_SIZE   = floatPreferencesKey("font_size")
}`}</CodePane>
      </div>
    </Shell>
  ),

  // 7: DataStore — reading, writing, ViewModel
  () => (
    <Shell tag="Android · DataStore" timer="8" title="DataStore — reading, writing, and the ViewModel" subtitle="End-to-end wiring with a dark mode example" notes="Walk through the steps in order: read first (returns a Flow — same as Room), write (suspend fun — same as Room DAO), ViewModel wiring, then Compose theme application. Key insight: students already know all these patterns from Week 4. DataStore just slots into the same architecture.">
      <ViewToggle
        steps={
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Step n={1} title="Read — returns a Flow, same pattern as a Room DAO query">
              <pre style={preStyle}>{`class PreferenceRepository(private val context: Context) {
    val isDarkMode: Flow<Boolean> = context.dataStore.data
        .map { prefs ->
            prefs[PreferenceKeys.DARK_MODE] ?: false
            //  ↑ default value if key doesn't exist yet
        }
}`}</pre>
            </Step>
            <Step n={2} title="Write — suspend function, same pattern as a Room DAO insert">
              <pre style={preStyle}>{`    suspend fun setDarkMode(enabled: Boolean) {
        context.dataStore.edit { prefs ->
            prefs[PreferenceKeys.DARK_MODE] = enabled
        }
    }`}</pre>
            </Step>
            <Step n={3} title="ViewModel — wire the Flow into state and expose a toggle action">
              <pre style={preStyle}>{`class SettingsViewModel(private val repo: PreferenceRepository) : ViewModel() {
    val isDarkMode = repo.isDarkMode
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), false)
        //  WhileSubscribed(5000) stops the flow 5s after the last collector
        //  disappears — more memory-efficient than Eagerly

    fun toggleDarkMode(enabled: Boolean) {
        viewModelScope.launch { repo.setDarkMode(enabled) }
    }
}`}</pre>
            </Step>
            <Step n={4} title="Apply the theme in your root Composable">
              <pre style={preStyle}>{`val isDarkMode by viewModel.isDarkMode.collectAsState()

MaterialTheme(
    colorScheme = if (isDarkMode) darkColorScheme() else lightColorScheme()
) { /* your app */ }`}</pre>
            </Step>
          </div>
        }
        full={
          <CodePane title="Kotlin — PreferenceRepository.kt + SettingsViewModel.kt" accent={PURPLE}>{`class PreferenceRepository(private val context: Context) {

    val isDarkMode: Flow<Boolean> = context.dataStore.data
        .map { prefs -> prefs[PreferenceKeys.DARK_MODE] ?: false }

    val lastTab: Flow<Int> = context.dataStore.data
        .map { prefs -> prefs[PreferenceKeys.LAST_TAB] ?: 0 }

    suspend fun setDarkMode(enabled: Boolean) {
        context.dataStore.edit { prefs -> prefs[PreferenceKeys.DARK_MODE] = enabled }
    }

    suspend fun setLastTab(index: Int) {
        context.dataStore.edit { prefs -> prefs[PreferenceKeys.LAST_TAB] = index }
    }
}

class SettingsViewModel(private val repo: PreferenceRepository) : ViewModel() {
    val isDarkMode = repo.isDarkMode
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), false)

    fun toggleDarkMode(enabled: Boolean) {
        viewModelScope.launch { repo.setDarkMode(enabled) }
    }
}

// In your root Composable:
val isDarkMode by viewModel.isDarkMode.collectAsState()
MaterialTheme(
    colorScheme = if (isDarkMode) darkColorScheme() else lightColorScheme()
) { /* your app */ }`}</CodePane>
        }
      />
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <Info>{"Flow, stateIn, viewModelScope.launch — you used all of these in Week 4. DataStore slots straight into the architecture you already know."}</Info>
        <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10, flex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#633806", margin: "0 0 3px" }}>?: false — always provide a default</p>
          <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>The first time the app runs, the key doesn't exist yet. The elvis operator gives a safe default so the app never crashes on first launch.</p>
        </div>
      </div>
    </Shell>
  ),

  // 8: UserDefaults — raw API vs @AppStorage
  () => (
    <Shell tag="iOS · UserDefaults" timer="6" title="UserDefaults — raw API vs @AppStorage" subtitle="iOS's built-in key-value store, and two ways to use it" notes="Teach @AppStorage as the primary API — it is clean, SwiftUI-native, and the one students will use in new code. Show the raw UserDefaults API so they recognise it when reading tutorials and existing codebases. The key analogy: @AppStorage is to UserDefaults what @Query is to SwiftData — a SwiftUI-first wrapper that handles observation automatically.">
      <div style={{ background: GRAY, borderRadius: 8, padding: "10px 14px", marginBottom: 12 }}>
        <p style={{ fontSize: 12, color: TEXT, margin: 0, lineHeight: 1.6 }}>
          <strong>UserDefaults</strong> is iOS's built-in key-value store — a small file on disk that persists simple values (booleans, strings, numbers) automatically between app launches. It's the iOS equivalent of Android's DataStore Preferences.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: TEAL, color: "#fff", borderRadius: "8px 8px 0 0", padding: "6px 12px", fontSize: 11, fontWeight: 700, letterSpacing: ".04em", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span>@AppStorage</span>
            <span style={{ background: "rgba(255,255,255,0.2)", borderRadius: 10, padding: "1px 8px", fontSize: 10 }}>Use this in new code</span>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: "0 0 8px 8px", padding: "12px 14px", marginTop: -8 }}>
            <pre style={{ margin: "0 0 10px", fontSize: 11, color: TEAL_DARK, fontFamily: "monospace", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{`// Declare directly in your SwiftUI view
@AppStorage("dark_mode") var isDarkMode = false
@AppStorage("last_tab")  var lastTab    = 0
@AppStorage("username")  var username   = ""

// Use exactly like @State — binding included
Toggle("Dark mode", isOn: $isDarkMode)`}</pre>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ background: "rgba(29,158,117,0.12)", borderRadius: 6, padding: "7px 10px" }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 1px" }}>Behaves like @State</p>
                <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.4 }}>The view re-renders automatically when the value changes — same reactive pattern as @Query in SwiftData.</p>
              </div>
              <div style={{ background: "rgba(29,158,117,0.12)", borderRadius: 6, padding: "7px 10px" }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 1px" }}>Default value is built in</p>
                <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.4 }}>The <code style={{ fontFamily: "monospace" }}>= false</code> is the fallback for the first launch before anything is stored — equivalent to DataStore's <code style={{ fontFamily: "monospace" }}>?: false</code>.</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: MUTED, color: "#fff", borderRadius: "8px 8px 0 0", padding: "6px 12px", fontSize: 11, fontWeight: 700, letterSpacing: ".04em", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span>Raw UserDefaults</span>
            <span style={{ background: "rgba(255,255,255,0.2)", borderRadius: 10, padding: "1px 8px", fontSize: 10 }}>Recognize this in older code</span>
          </div>
          <div style={{ background: GRAY, borderRadius: "0 0 8px 8px", padding: "12px 14px", marginTop: -8 }}>
            <pre style={{ margin: "0 0 10px", fontSize: 11, color: TEXT, fontFamily: "monospace", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{`// Write a value
UserDefaults.standard.set(true, forKey: "dark_mode")

// Read a value (no automatic observation)
let isDark = UserDefaults.standard.bool(
    forKey: "dark_mode"
)`}</pre>
            <div style={{ background: "#ececec", borderRadius: 6, padding: "7px 10px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: "0 0 1px" }}>No reactivity</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>The raw API doesn't update your UI when the value changes — you'd have to observe it manually. @AppStorage handles this for you.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px", borderLeft: `3px solid ${AMBER}` }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#633806", margin: "0 0 3px" }}>UserDefaults stores scalar values only — Bool, Int, String, Double, Date</p>
        <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>Never store arrays, images, or complex objects here. For anything structured or list-based, use SwiftData. UserDefaults is for preferences and settings — nothing more.</p>
      </div>
    </Shell>
  ),

  // 9: UserDefaults — applying a theme globally
  () => (
    <Shell tag="iOS · UserDefaults" timer="4" title="Applying a persisted theme globally" subtitle="How @AppStorage connects a setting to the whole app" notes="This slide closes the loop on the hook from slide 2. Show exactly where .preferredColorScheme lives — at the WindowGroup level, so it wraps every screen. Both @AppStorage declarations use the same key; UserDefaults is a shared store so they always read the same value.">
      <ViewToggle
        steps={
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Step n={1} title="Declare @AppStorage at the App entry point — reads the persisted value on every launch" accent={TEAL}>
              <pre style={preStyle}>{`@main
struct MyApp: App {
    @AppStorage("dark_mode") var isDarkMode = false
    // same key as SettingsView — reads the same UserDefaults value
}`}</pre>
            </Step>
            <Step n={2} title="Apply .preferredColorScheme in WindowGroup — wraps every screen in the app" accent={TEAL}>
              <pre style={preStyle}>{`    var body: some Scene {
        WindowGroup {
            ContentView()
                .preferredColorScheme(isDarkMode ? .dark : .light)
        }
    }`}</pre>
            </Step>
            <Step n={3} title="In SettingsView — same key, same store; flipping the Toggle updates the whole app instantly" accent={TEAL}>
              <pre style={preStyle}>{`struct SettingsView: View {
    @AppStorage("dark_mode") var isDarkMode = false

    var body: some View {
        Form {
            Toggle("Dark mode", isOn: $isDarkMode)
            // write → UserDefaults → @AppStorage in MyApp reacts
            // → .preferredColorScheme updates — no extra wiring needed
        }
    }
}`}</pre>
            </Step>
          </div>
        }
        full={
          <CodePane title="Swift — MyApp.swift + SettingsView.swift" accent={TEAL}>{`@main
struct MyApp: App {
    @AppStorage("dark_mode") var isDarkMode = false

    var body: some Scene {
        WindowGroup {
            ContentView()
                .preferredColorScheme(isDarkMode ? .dark : .light)
        }
    }
}

struct SettingsView: View {
    @AppStorage("dark_mode") var isDarkMode = false

    var body: some View {
        Form {
            Toggle("Dark mode", isOn: $isDarkMode)
        }
    }
}`}</CodePane>
        }
      />
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px", flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px" }}>One key, two views</p>
          <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>UserDefaults is a shared store — any view reading "dark_mode" always sees the same value, with no extra wiring between them.</p>
        </div>
        <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px", flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 3px" }}>Survives app restart</p>
          <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>UserDefaults persists to disk automatically. On next launch, .preferredColorScheme reads the stored value immediately — no loading flash.</p>
        </div>
      </div>
    </Shell>
  ),

  // 10: Comparison table
  () => (
    <Shell tag="Comparison" timer="3" title="DataStore vs UserDefaults — the parallels" notes="Quick reference before moving to the system design section. Point out that despite different naming, both tools solve the same problem with the same shape: a key, a typed value, a default, and a reactive read.">
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr>
              {["Concept", "DataStore (Android)", "UserDefaults (iOS)"].map(h => (
                <th key={h} style={{ textAlign: "left", padding: "8px 12px", background: GRAY, color: MUTED, fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: ".05em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Define a key", "booleanPreferencesKey(\"dark_mode\")", "@AppStorage(\"dark_mode\")"],
              ["Default value", "prefs[KEY] ?: false", "var isDarkMode = false"],
              ["Read preference", "dataStore.data.map { ... }", "@AppStorage var or UserDefaults.standard"],
              ["Write preference", "dataStore.edit { prefs[KEY] = value }", "@AppStorage binding or UserDefaults.standard.set"],
              ["Observe changes", "Flow — reactive, coroutine-based", "@AppStorage auto-updates SwiftUI view"],
              ["Apply globally", "MaterialTheme in root Composable", ".preferredColorScheme in WindowGroup"],
              ["Thread safety", "Fully async — suspend fun", "Main thread; @AppStorage handles observation"],
              ["When not to use", "Large structured data → use Room", "Lists or complex objects → use SwiftData"],
            ].map(([concept, android, ios], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : GRAY }}>
                <td style={{ padding: "8px 12px", color: TEXT, fontWeight: 500 }}>{concept}</td>
                <td style={{ padding: "8px 12px", color: PURPLE_DARK, fontFamily: "monospace", fontSize: 11 }}>{android}</td>
                <td style={{ padding: "8px 12px", color: TEAL_DARK, fontFamily: "monospace", fontSize: 11 }}>{ios}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  ),

  // 11: Transition — Part 1 → Part 2
  () => (
    <Shell tag="Transition" title="Part 1 complete — now the harder problem" notes="30-second breather between the two halves of the session. The pivot from key-value preferences to network architecture is a significant conceptual shift — give it a moment.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 12 }}>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 8px" }}>What you can now do</p>
          {[
            "Store and read user preferences with DataStore (Android) or @AppStorage (iOS)",
            "Apply a persisted theme across the whole app",
            "Choose the right tool — database vs key-value — for any storage need",
          ].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "6px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: TEAL_DARK, lineHeight: 1.5 }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 8px" }}>What's next</p>
          {[
            "Why real-world networks fail — and why your app can't assume a connection",
            "The offline-first pattern — the industry standard for handling unreliable networks",
            "The repository pattern — the architectural layer that makes it work",
          ].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "6px 0" }}>
              <span style={{ color: PURPLE, fontWeight: 700, flexShrink: 0 }}>▸</span>
              <span style={{ fontSize: 12, color: PURPLE_DARK, lineHeight: 1.5 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
        <p style={{ fontSize: 12, color: TEXT, margin: 0, lineHeight: 1.6 }}>Now that your app <strong>remembers preferences</strong>, let's tackle the harder problem: what happens when the network isn't there? This is where most apps — including the one you built in Week 4 — break silently.</p>
      </div>
    </Shell>
  ),

  // 12: Why networks fail
  () => (
    <Shell tag="System design" timer="5" title="Networks are not reliable by default" subtitle="Why mobile apps can't assume a connection" notes="This is the conceptual foundation for offline-first — don't rush it. Students build apps assuming the network always works because it usually does on their laptop over Wi-Fi. Real users are on trains, in elevators, switching carriers. Spend 4–5 minutes making the failure modes feel concrete before introducing the solution.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Why connectivity fails in the real world</p>
          {[
            { cause: "Moving between cell towers", detail: "A request starts on one tower and the handoff drops it mid-flight" },
            { cause: "Underground / elevator / tunnel", detail: "No signal at all — your app stalls completely" },
            { cause: "Congested networks", detail: "50,000 people at a stadium — requests time out regardless of server health" },
            { cause: "Server-side latency", detail: "Your API is slow today — unrelated to the user's connection quality" },
            { cause: "DNS failures", detail: "The domain resolves correctly 99.9% of the time — until it doesn't" },
          ].map(r => (
            <div key={r.cause} style={{ marginBottom: 8 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 1px" }}>{r.cause}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{r.detail}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 6px" }}>What a naive app does</p>
            <p style={{ fontSize: 12, color: "#791F1F", margin: 0, lineHeight: 1.5 }}>Makes a network request on launch. If it fails — spinner forever, or an error screen with nothing to show. The user sees a broken app and closes it.</p>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#633806", margin: "0 0 6px" }}>The real-world cost</p>
            <p style={{ fontSize: 12, color: "#633806", margin: 0, lineHeight: 1.5 }}>Google Play and the App Store track crash rates and user-reported issues. Apps with poor offline behaviour receive lower ratings and get deprioritised in search results.</p>
          </div>
          <Discussion>{"Have you ever opened an app on a train or in a waiting room and seen it show nothing — even though you had looked at the same content minutes earlier?"}</Discussion>
        </div>
      </div>
    </Shell>
  ),

  // 12: Offline-first — what it is
  () => (
    <Shell tag="System design" timer="6" title="The offline-first pattern" subtitle="Design around local storage — treat the network as an enhancement" notes="Introduce the mental model shift explicitly: most students think of an app as a network client that also stores some data. Offline-first inverts this — the app is a local database that syncs with a server when it can. The local database is the single source of truth the UI always reads from. The network writes to the database in the background.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 8px" }}>Network-first (what you have built so far)</p>
          {["App launches → fetch from API", "Waiting... → show spinner", "Success → display data", "Failure → show error, user sees nothing", "Network recovers → user must manually refresh"].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 6 }}>
              <span style={{ fontSize: 11, color: "#A32D2D", fontWeight: 700, minWidth: 16, flexShrink: 0 }}>{i + 1}.</span>
              <span style={{ fontSize: 12, color: "#791F1F", marginBottom: 5, display: "block" }}>{s}</span>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 8px" }}>Offline-first (industry standard)</p>
          {["App launches → instantly show data from local database", "Simultaneously → fetch fresh data from API in background", "API success → save to database, UI updates silently", "API failure → user still sees cached data, no error screen", "Network recovers → next fetch automatically refreshes cache"].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 6 }}>
              <span style={{ fontSize: 11, color: TEAL, fontWeight: 700, minWidth: 16, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: TEAL_DARK, marginBottom: 5, display: "block" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>The mental model shift</p>
        <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>Network-first: the UI reads from the network, stores data as a side effect. Offline-first: the UI always reads from the local database. The network's only job is syncing data into the database in the background. The database is the source of truth — the network is a sync mechanism.</p>
      </div>
    </Shell>
  ),

  // 13: Why offline-first is good practice
  () => (
    <Shell tag="System design" timer="5" title="Why offline-first is good engineering" subtitle="Not just a UX nicety — a system design principle" notes="Elevate the conversation from 'this looks nicer' to 'this is how professional apps are built'. Mention apps students use every day that implement this. The perceived performance point is particularly important — Google's own research shows users perceive cached-then-updated content as faster than a fresh load even when load times are identical.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { title: "Perceived performance", detail: "Content appears instantly on launch — even stale data feels faster than a blank screen. Users rate apps with instant content as significantly faster even when actual load times are identical.", color: PURPLE_LIGHT, fg: PURPLE_DARK },
          { title: "Resilience", detail: "The app degrades gracefully under poor connectivity instead of breaking completely. Critical in emerging markets where networks are unreliable and mobile data is expensive.", color: TEAL_LIGHT, fg: TEAL_DARK },
          { title: "Reduced server load", detail: "Clients only fetch what has changed, not everything on every launch. A well-implemented offline-first app dramatically reduces redundant API calls — a meaningful win for infrastructure cost at scale.", color: AMBER_LIGHT, fg: "#633806" },
          { title: "Simpler state management", detail: "The UI has one source of truth — the local database. You don't need to reconcile in-memory state with network state, and loading states simplify because there is always something to show.", color: PURPLE_LIGHT, fg: PURPLE_DARK },
          { title: "Industry standard", detail: "Twitter, Instagram, Spotify, Gmail, Google Maps — all implement offline-first. Android's architecture documentation and Apple's Human Interface Guidelines both recommend it explicitly.", color: TEAL_LIGHT, fg: TEAL_DARK },
          { title: "Separation of concerns", detail: "The network layer's only job is syncing. The database owns the data. This separation makes the codebase easier to test, debug, and extend — and maps directly to the MVVM pattern you'll study in Week 6.", color: AMBER_LIGHT, fg: "#633806" },
        ].map(card => (
          <div key={card.title} style={{ background: card.color, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: card.fg, margin: "0 0 4px" }}>{card.title}</p>
            <p style={{ fontSize: 11, color: card.fg, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{card.detail}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 14: NEW — What is the repository pattern?
  () => (
    <Shell tag="System design" title="The repository pattern — what and why" subtitle="The layer that makes offline-first possible in code" notes="Do not skip this slide. Students need the mental model — what is this layer, and why does it exist — before they see the implementation. The key idea: the ViewModel talks to one thing (the repository), not two (the API and the database separately).">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 8px" }}>Without a repository</p>
          <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "12px 14px" }}>
            {["ViewModel calls the API directly", "ViewModel also manages the database", "Two sources of truth — hard to keep in sync", "Network logic and storage logic tangled together"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: "#A32D2D", fontWeight: 700, flexShrink: 0 }}>✗</span>
                <span style={{ fontSize: 12, color: "#791F1F" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 8px" }}>With a repository</p>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            {["ViewModel only ever talks to the repository", "Repository owns all decisions about the data source", "One source of truth — the local database", "Network and storage logic are isolated and testable"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 12, color: TEAL_DARK }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 8px" }}>The repository's three responsibilities</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {[
            { title: "Expose data", body: "Returns a live stream (Flow or @Query) from the local database — this is what the ViewModel and UI always read from" },
            { title: "Sync on demand", body: "When asked, fetches from the network and writes the result into the database — silently, in the background" },
            { title: "Handle failure", body: "If the network fails, the UI still has data. No crash, no empty screen — just the last cached state" },
          ].map(c => (
            <div key={c.title} style={{ background: "rgba(83,74,183,0.06)", borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>{c.title}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 15+16 merged: Repository pattern — Android + iOS
  () => (
    <Shell tag="System design" timer="8" title="The repository pattern — in code" subtitle="Same pattern, same responsibilities on both platforms" notes="Android: the UI observes a Flow from the DB, never the API. The repository's refresh() is the only thing that touches the network. iOS: same — the View reads @Query from SwiftData; refresh() fetches and inserts in the background. Emphasise the parallel: toEntity() = Item(from:); viewModelScope.launch = .task; Flow = @Query.">
      <ViewToggle
        steps={
          <OSToggle
            android={
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Step n={1} title="Expose a live stream from the database — ViewModel and UI always read from here">
                  <pre style={preStyle}>{`class ItemRepository(
    private val dao: ItemDao,
    private val api: ItemApiService
) {
    val items: Flow<List<Item>> = dao.getAllItems()
}`}</pre>
                </Step>
                <Step n={2} title="refresh() — fetch from API, write to DB; the Flow emits automatically">
                  <pre style={preStyle}>{`    suspend fun refresh() {
        try {
            val fresh = api.fetchItems()
            dao.insertAll(fresh.map { it.toEntity() })
            // Flow above emits — UI updates without knowing the network ran
        } catch (e: Exception) {
            // Silent failure — UI already showing cached data
        }
    }`}</pre>
                </Step>
                <Step n={3} title="ViewModel — observe the database, trigger refresh on launch">
                  <pre style={preStyle}>{`class ItemViewModel(private val repo: ItemRepository) : ViewModel() {
    val items = repo.items  // Flow from the DB
    init { viewModelScope.launch { repo.refresh() } }
}`}</pre>
                </Step>
              </div>
            }
            ios={
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Step n={1} title="@MainActor class — keeps ModelContext on the main thread safely" accent={TEAL}>
                  <pre style={preStyle}>{`@MainActor
class ItemRepository {
    private let context: ModelContext
    private let api: ItemAPIService

    init(context: ModelContext, api: ItemAPIService) {
        self.context = context
        self.api = api
    }
}`}</pre>
                </Step>
                <Step n={2} title="refresh() — fetch from API, insert into SwiftData; @Query picks it up automatically" accent={TEAL}>
                  <pre style={preStyle}>{`    func refresh() async {
        do {
            let fresh = try await api.fetchItems()
            for item in fresh { context.insert(Item(from: item)) }
            // @Query in the View updates automatically — no extra wiring
        } catch {
            // Silent failure — View still shows cached data via @Query
        }
    }`}</pre>
                </Step>
                <Step n={3} title="View — @Query reads from SwiftData; .task triggers refresh on appear" accent={TEAL}>
                  <pre style={preStyle}>{`struct ItemListView: View {
    @Query var items: [Item]   // live — always up to date
    let repo: ItemRepository

    var body: some View {
        List(items) { item in ItemRow(item: item) }
            .task { await repo.refresh() }
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
              <CodePane title="Kotlin — ItemRepository.kt + ItemViewModel.kt" accent={PURPLE}>{`class ItemRepository(
    private val dao: ItemDao,
    private val api: ItemApiService
) {
    val items: Flow<List<Item>> = dao.getAllItems()

    suspend fun refresh() {
        try {
            val fresh = api.fetchItems()
            dao.insertAll(fresh.map { it.toEntity() })
        } catch (e: Exception) { /* silent — UI has cached data */ }
    }
}

class ItemViewModel(private val repo: ItemRepository) : ViewModel() {
    val items = repo.items
    init { viewModelScope.launch { repo.refresh() } }
}`}</CodePane>
            }
            ios={
              <CodePane title="Swift — ItemRepository.swift + ItemListView.swift" accent={TEAL}>{`@MainActor
class ItemRepository {
    private let context: ModelContext
    private let api: ItemAPIService

    init(context: ModelContext, api: ItemAPIService) {
        self.context = context; self.api = api
    }

    func refresh() async {
        do {
            let fresh = try await api.fetchItems()
            for item in fresh { context.insert(Item(from: item)) }
        } catch { /* silent — View has cached data */ }
    }
}

struct ItemListView: View {
    @Query var items: [Item]
    let repo: ItemRepository

    var body: some View {
        List(items) { item in ItemRow(item: item) }
            .task { await repo.refresh() }
    }
}`}</CodePane>
            }
          />
        }
      />
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px", flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>UI never sees the network</p>
          <p style={{ fontSize: 11, color: PURPLE, margin: 0, lineHeight: 1.5 }}>The ViewModel / View reads from local storage only. Whether data is 5 seconds or 5 days old makes no difference to the UI layer.</p>
        </div>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px", flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px" }}>Silent failure is intentional</p>
          <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>The catch block shows no error because the user already sees data. Only show an error when there is genuinely nothing to display.</p>
        </div>
        <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px", flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 3px" }}>Mapping layers</p>
          <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>toEntity() (Android) and Item(from:) (iOS) keep the API shape and DB schema decoupled — a change to one doesn't break the other.</p>
        </div>
      </div>
    </Shell>
  ),

  // 16: Lab intro
  () => (
    <Shell tag="Lab · 55 min" title="Lab — what you're building right now" subtitle="Pick up from your Week 4 app and add these two features" notes="Walk through this slide before opening breakout rooms. Make sure everyone has their Week 4 project open. The stretch goal is optional — do not let students feel behind if they don't reach it.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Tasks</p>
          {[
            { task: "Favourites tab loads from local storage", detail: "Saved items should come from Room / SwiftData — not from the API. Items must persist across app restarts.", files: "FavouritesScreen / FavouritesView" },
            { task: "Dark/light mode preference persists", detail: "Use DataStore (Android) or @AppStorage (iOS). The theme must survive closing and re-opening the app.", files: "SettingsViewModel / MyApp.swift" },
          ].map((r, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "flex-start" }}>
              <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${PURPLE}`, flexShrink: 0, marginTop: 1 }} />
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 2px" }}>{r.task}</p>
                <p style={{ fontSize: 11, color: MUTED, margin: "0 0 2px", lineHeight: 1.5 }}>{r.detail}</p>
                <span style={{ fontSize: 10, fontFamily: "monospace", color: MUTED }}>{r.files}</span>
              </div>
            </div>
          ))}
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 2px" }}>Stretch goal — offline-first</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>Cache API results in the database and show cached data immediately on launch while a background refresh runs.</p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Files to touch</p>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
            {[
              { platform: "Android", items: ["PreferenceRepository.kt — DataStore read/write", "SettingsViewModel.kt — wire isDarkMode state", "MainActivity.kt — MaterialTheme at root with isDarkMode", "FavouritesScreen.kt — observe favourites from DAO"] },
              { platform: "iOS", items: ["MyApp.swift — @AppStorage + .preferredColorScheme", "SettingsView.swift — Toggle bound to @AppStorage", "FavouritesView.swift — @Query for saved items"] },
            ].map(p => (
              <div key={p.platform} style={{ marginBottom: 10 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{p.platform}</p>
                {p.items.map(item => (
                  <div key={item} style={{ display: "flex", gap: 6, margin: "3px 0" }}>
                    <span style={{ color: PURPLE, fontWeight: 700, fontSize: 11, flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: 11, color: TEXT, fontFamily: "monospace" }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Info>{"Paste any error message into your AI assistant along with the file it points to — it will explain the fix in context."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 17: Assignment 5
  () => (
    <Shell tag="Assignment 5" title="Assignment 5 — what you are building" subtitle="Due before Week 6 · Includes your capstone proposal" notes="Walk through both parts clearly. Part 1 is a direct extension of the week. Part 2 is important: teams of 3 form this week, pick Android or iOS, write a one-page concept. The proposal doesn't need to be polished — it needs to answer four questions.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 10px" }}>Part 1 — extend your Week 4 app</p>
          {[
            { req: "Offline favourites tab", desc: "Saved items load from local database, not the API" },
            { req: "Persist dark/light mode", desc: "Theme choice survives app restart — DataStore or @AppStorage" },
            { req: "Loading + error states", desc: "Already done in Week 4 — confirm still working" },
          ].map(r => (
            <div key={r.req} style={{ marginBottom: 10 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 2px" }}>{r.req}</p>
              <p style={{ fontSize: 11, color: PURPLE, margin: 0 }}>{r.desc}</p>
            </div>
          ))}
          <div style={{ background: "rgba(83,74,183,0.1)", borderRadius: 6, padding: "8px 10px", marginTop: 4 }}>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: "0 0 2px", fontWeight: 600 }}>Stretch goal</p>
            <p style={{ fontSize: 11, color: PURPLE, margin: 0 }}>Implement the offline-first pattern — cache API results in the database and show cached data immediately on launch.</p>
          </div>
        </div>
        <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "14px 16px", borderLeft: `3px solid ${AMBER}` }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#633806", margin: "0 0 10px" }}>Part 2 — 1-page capstone proposal</p>
          <p style={{ fontSize: 11, color: "#633806", margin: "0 0 8px" }}>Teams of 3 form this week. Answer these four questions:</p>
          {["Team members — who is on your team?", "Platform — Android or iOS?", "App concept — what problem does it solve?", "Core features — what are the 3 main things it does?"].map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#633806", minWidth: 16 }}>{i + 1}.</span>
              <span style={{ fontSize: 12, color: "#633806" }}>{q}</span>
            </div>
          ))}
          <div style={{ background: "rgba(239,159,39,0.2)", borderRadius: 6, padding: "8px 10px", marginTop: 10 }}>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, fontWeight: 600 }}>Starting Week 6 — your team works on the capstone. Pick your team this week.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 17: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${TEAL_DARK} 0%, ${TEAL} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: "#fff", margin: "0 0 8px" }}>Week 5 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Your app now stores data, remembers preferences, and is ready to handle the real world.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned this week</p>
            {["Room / SwiftData — structured local storage", "Flow / @Query — live-updating UI from a database", "DataStore — typed keys, Flows, ViewModel wiring", "@AppStorage — reactive preferences in SwiftUI", "Applying a persisted theme across the whole app", "Why networks fail — the real-world failure modes", "Offline-first — the mental model shift", "Why offline-first is good system design", "The repository pattern — Android and iOS"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: AMBER, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Week 6</p>
            {["Tracks split — Android and iOS teams form", "MVVM architecture deep dive", "ViewModel + StateFlow (Android)", "ObservableObject + @StateObject (iOS)", "AI coding tools — Copilot / Cursor", "Capstone Milestone 1"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.15)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.9)", margin: "0 0 3px", fontWeight: 600 }}>Due before Week 6</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Assignment 5 — favourites tab + dark mode preference + 1-page capstone proposal</p>
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
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 5 · Session 2 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>User preferences + offline-first</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setCur(c => Math.max(0, c - 1))} disabled={cur === 0} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === 0 ? GRAY : PURPLE_LIGHT, color: cur === 0 ? MUTED : PURPLE, cursor: cur === 0 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>← Prev</button>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 64, textAlign: "center" }}>{cur + 1} / {slides.length}</span>
          <button onClick={() => setCur(c => Math.min(slides.length - 1, c + 1))} disabled={cur === slides.length - 1} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${TEAL_LIGHT}`, background: cur === slides.length - 1 ? GRAY : TEAL, color: cur === slides.length - 1 ? MUTED : "#fff", cursor: cur === slides.length - 1 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>Next →</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: 26, height: 26, borderRadius: 5, border: `1.5px solid ${i === cur ? TEAL : "#e5e7eb"}`, background: i === cur ? TEAL : "#fff", color: i === cur ? "#fff" : MUTED, fontSize: 10, fontWeight: 500, cursor: "pointer" }}>{i + 1}</button>
        ))}
      </div>
      {slides[cur]()}
    </div>
  );
}
