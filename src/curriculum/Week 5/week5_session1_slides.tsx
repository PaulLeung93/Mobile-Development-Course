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
  const map = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806" },
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

const Bullet = ({ children, sub, done }) => (
  <div style={{ display: "flex", gap: 8, margin: sub ? "3px 0 3px 20px" : "7px 0", alignItems: "flex-start" }}>
    <span style={{ color: done ? TEAL : sub ? TEAL : PURPLE, fontWeight: 700, fontSize: sub ? 12 : 14, marginTop: 1, flexShrink: 0 }}>{done ? "✓" : sub ? "◦" : "▸"}</span>
    <span style={{ fontSize: sub ? 13 : 14, color: sub ? MUTED : TEXT, lineHeight: 1.5 }}>{children}</span>
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

const Lab = ({ children }) => (
  <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10, borderLeft: `3px solid ${AMBER}` }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Lab activity</p>
    <p style={{ fontSize: 12, color: "#633806", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Notes = ({ children }) => (
  <div style={{ background: GRAY, borderRadius: 8, padding: "8px 12px", marginTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em" }}>Speaker notes</p>
    <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>{children}</p>
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

const Shell = ({ tag, timer, title, subtitle, children, notes, dark }: { [k: string]: any }) => (
  <div style={{ background: dark ? PURPLE_DARK : "var(--color-background-primary)", border: dark ? "none" : "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px 22px", minHeight: 340 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag color="purple">Week 5 · S1</Tag>
        {tag && <Tag color={dark ? "amber" : "teal"}>{tag}</Tag>}
      </div>
      {timer && <span style={{ fontSize: 11, color: dark ? "rgba(255,255,255,0.5)" : MUTED, background: dark ? "rgba(255,255,255,0.1)" : GRAY, padding: "2px 8px", borderRadius: 20 }}>{timer} min</span>}
    </div>
    <h2 style={{ fontSize: 18, fontWeight: 500, color: dark ? "#fff" : TEXT, margin: "0 0 4px", lineHeight: 1.3 }}>{title}</h2>
    {subtitle && <p style={{ fontSize: 13, color: dark ? "rgba(255,255,255,0.6)" : MUTED, margin: "0 0 12px" }}>{subtitle}</p>}
    <div style={{ marginTop: 10 }}>{children}</div>
    {notes && <Notes>{notes}</Notes>}
  </div>
);


const slides = [
  // 1: Title
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 5 · Session 1</p>
        <h1 style={{ fontSize: 30, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.2 }}>Local databases</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Room (Android) · SwiftData (iOS)</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {["Why data disappears — and how to stop it", "Entities, DAOs, and the database layer", "Room in Kotlin: annotations and queries", "SwiftData in Swift: @Model and ModelContext", "Saving favourites from your Week 4 API app"].map((t, i) => (
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

  // 2: Hook — the problem
  () => (
    <Shell tag="Hook" timer="5" title="Your app forgets everything" subtitle="The problem we are solving today" notes="Open with this scenario before touching any code. Students have all experienced this as users — downloading an app, carefully setting it up, and then losing everything after an update or reinstall. Make it concrete: their own Week 4 app loses every favourited item the moment it restarts. Today they will fix that.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: ".05em" }}>Without persistence</p>
          {["User opens your app and favourites 10 items", "User closes the app", "User reopens the app", "All favourites are gone"].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
              <span style={{ color: "#A32D2D", fontWeight: 700, flexShrink: 0, fontSize: 12 }}>{i + 1}.</span>
              <span style={{ fontSize: 13, color: "#791F1F" }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: ".05em" }}>With persistence</p>
          {["User opens your app and favourites 10 items", "User closes the app", "User reopens the app", "All favourites are exactly where they left them"].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0, fontSize: 12 }}>✓</span>
              <span style={{ fontSize: 13, color: TEAL_DARK }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <Discussion>{"Think of an app you use every day — notes, bookmarks, history. What would happen if it had no local storage? Would you still use it?"}</Discussion>
    </Shell>
  ),

  // 3: Two tools for two jobs
  () => (
    <Shell tag="Concept" timer="4" title="Two tools for two jobs" subtitle="Choosing the right persistence strategy" notes="This is a framing slide — not code yet. Students often try to use a full database for everything or a simple key-value store for complex relational data. The goal here is to build the intuition for which tool to reach for before we zoom into Room/SwiftData.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Local database</p>
          <p style={{ fontSize: 11, color: PURPLE, margin: "0 0 10px" }}>Room · SwiftData</p>
          <Bullet>Structured, table-shaped data</Bullet>
          <Bullet>Lists of things (favourites, tasks, messages)</Bullet>
          <Bullet>Need to filter, sort, or search</Bullet>
          <Bullet>Data that grows and changes over time</Bullet>
        </div>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Key-value store</p>
          <p style={{ fontSize: 11, color: TEAL, margin: "0 0 10px" }}>DataStore · UserDefaults</p>
          <Bullet>Simple settings and preferences</Bullet>
          <Bullet>On/off toggles, theme choice, last login</Bullet>
          <Bullet>Small, standalone values</Bullet>
          <Bullet>Doesn't need querying</Bullet>
        </div>
      </div>
      <Info>{"Today = local databases (Room / SwiftData). Session 2 = key-value stores (DataStore / UserDefaults)."}</Info>
    </Shell>
  ),

  // 4: Recap
  () => (
    <Shell tag="Recap" timer="4" title="Weeks 1–4 — what you have so far" notes="This is a 3-minute recap, not a re-teach. The key message: the list + detail screen students built in Week 4 is the perfect target for today. They are extending an existing app — not building from scratch. This should reduce anxiety and increase motivation.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
        {[
          { week: "Week 1", items: ["Declarative UI", "State and recomposition"] },
          { week: "Week 2", items: ["Navigation", "Passing data between screens"] },
          { week: "Week 3", items: ["Lists and scrolling", "Search and filter"] },
          { week: "Week 4", items: ["REST APIs + JSON", "Loading / error states", "← Today's target app"] },
        ].map(w => (
          <div key={w.week} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, margin: "0 0 6px", textTransform: "uppercase" }}>{w.week}</p>
            {w.items.map(t => (
              <div key={t} style={{ display: "flex", gap: 5, margin: "4px 0" }}>
                <span style={{ color: t.includes("target") ? AMBER : TEAL, fontWeight: 700, flexShrink: 0, fontSize: 11 }}>{t.includes("target") ? "★" : "✓"}</span>
                <span style={{ fontSize: 11, color: t.includes("target") ? "#633806" : TEXT, fontWeight: t.includes("target") ? 600 : 400 }}>{t}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Info>{"Your Week 4 app fetches data live from an API. Today you will add a heart button that saves items locally — so they are still there after the app restarts."}</Info>
    </Shell>
  ),

  // 5: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 60 minutes" notes="Set the expectation: today introduces a new conceptual layer (database vs UI) but very little new syntax — the annotations do the heavy lifting. Reassure students that they don't need to memorise SQL; Room and SwiftData handle the queries for them.">
      {[
        { time: "0–5 min",   label: "Hook",           desc: "Why apps forget everything" },
        { time: "5–10 min",  label: "Two tools",       desc: "Databases vs key-value stores" },
        { time: "10–20 min", label: "Concept",         desc: "Entities, DAOs, and the database layer" },
        { time: "20–35 min", label: "Kotlin / Room",   desc: "Annotations, DAO queries, collecting flows" },
        { time: "35–50 min", label: "Swift / SwiftData", desc: "@Model, ModelContext, @Query" },
        { time: "50–60 min", label: "Lab",             desc: "Add favourites to your Week 4 app" },
      ].map(r => (
        <div key={r.time} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: `0.5px solid ${GRAY}` }}>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 80, flexShrink: 0 }}>{r.time}</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: PURPLE, minWidth: 120, flexShrink: 0 }}>{r.label}</span>
          <span style={{ fontSize: 12, color: TEXT }}>{r.desc}</span>
        </div>
      ))}
    </Shell>
  ),

  // 6a: Concept overview — the three layers
  () => (
    <Shell tag="Concept · 1 of 3" timer="3" title="Three layers between your UI and the disk" subtitle="Every local database framework — Room, SwiftData, Core Data — follows this pattern" notes="This is a framing slide. Draw the three boxes on a whiteboard. The key insight: students only write code for the top two layers (Entity + DAO). The framework handles the bottom layer (SQLite) completely. Understanding this separation is what makes the next three code-along slides feel logical rather than magic.">
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
        {[
          { label: "1 · Entity", sub: "@Entity / @Model", color: PURPLE_LIGHT, fg: PURPLE_DARK, body: "Describes the shape of one row. You write a plain Kotlin data class or Swift class — the annotations tell the framework how to store it.", icon: "📦" },
          { label: "2 · DAO / ModelContext", sub: "Data Access Object", color: TEAL_LIGHT, fg: TEAL_DARK, body: "Declares what operations you want (get all, insert, delete). You write an interface or use a context — the framework generates the SQL.", icon: "🔌" },
          { label: "3 · Database (SQLite)", sub: "Managed by Room / SwiftData", color: AMBER_LIGHT, fg: "#633806", body: "The actual file stored on the device. You never write SQL directly. The framework reads and writes this file based on your DAO calls.", icon: "💾" },
        ].map(({ label, sub, color, fg, body, icon }) => (
          <div key={label} style={{ display: "flex", gap: 12, background: color, borderRadius: 8, padding: "10px 14px", alignItems: "flex-start" }}>
            <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{icon}</span>
            <div>
              <div style={{ display: "flex", gap: 8, alignItems: "baseline", marginBottom: 3 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: fg, margin: 0 }}>{label}</p>
                <p style={{ fontSize: 11, color: fg, margin: 0, opacity: 0.7 }}>{sub}</p>
              </div>
              <p style={{ fontSize: 12, color: fg, margin: 0, lineHeight: 1.6 }}>{body}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 10 }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".05em" }}>Data flow</p>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          {["UI / ViewModel", "→", "DAO", "→", "SQLite file", "→", "Flow / @Query", "→", "UI re-renders"].map((t, i) => (
            <span key={i} style={{ fontSize: 11, color: t === "→" ? MUTED : TEXT, fontWeight: t === "→" ? 400 : 600, background: t === "→" ? "transparent" : GRAY, borderRadius: 4, padding: t === "→" ? 0 : "2px 8px" }}>{t}</span>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 6b: Concept — Entity deep dive
  () => (
    <Shell tag="Concept · 2 of 3" timer="4" title="The Entity — your data's blueprint" subtitle="One class = one database table. Each property = one column." notes="The key mental model: an Entity is just a normal class with extra instructions (annotations/macros) telling the framework how to store it. The framework reads these instructions at compile time and generates the database schema automatically. Students often think of a database table as something complex — reframe it as just 'a spreadsheet with named columns'.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 8px" }}>Think of it like a spreadsheet</p>
            <div style={{ background: "#fff", borderRadius: 6, overflow: "hidden", fontSize: 11, border: `1px solid ${PURPLE_LIGHT}` }}>
              {[["id", "name", "artist", "savedAt"], ["1", "Rumours", "Fleetwood Mac", "2024-01-10"], ["2", "OK Computer", "Radiohead", "2024-01-11"]].map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr 2fr", borderBottom: i < 2 ? `1px solid ${GRAY}` : "none" }}>
                  {row.map((cell, j) => (
                    <span key={j} style={{ padding: "4px 8px", color: i === 0 ? PURPLE_DARK : TEXT, fontWeight: i === 0 ? 700 : 400, background: i === 0 ? PURPLE_LIGHT : "transparent", fontSize: 10 }}>{cell}</span>
                  ))}
                </div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: PURPLE, margin: "6px 0 0", lineHeight: 1.5 }}>Each <strong>row</strong> is one instance of your Entity class. Each <strong>column</strong> is one property.</p>
          </div>

          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 4px" }}>The primary key rule</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Every table needs one column that is <em>guaranteed unique</em> — an ID. Room's <code>@PrimaryKey(autoGenerate=true)</code> and SwiftData's automatic UUID both handle this for you.</p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: MUTED, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Android · Kotlin</p>
            <pre style={preStyle}>{`@Entity(tableName = "favourites")
data class FavouriteAlbum(
    @PrimaryKey(autoGenerate = true)
    val id: Int = 0,
    val name: String,       // column: name
    val artist: String,     // column: artist
    val imageUrl: String,   // column: image_url
    val savedAt: Long =
        System.currentTimeMillis()
)`}</pre>
          </div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: MUTED, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>iOS · Swift</p>
            <pre style={preStyle}>{`@Model
final class FavouriteAlbum {
    // SwiftData auto-generates a UUID
    var name: String
    var artist: String
    var imageUrl: String
    var savedAt: Date = .now

    init(name: String, artist: String,
         imageUrl: String) { ... }
}`}</pre>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: "#633806", margin: 0 }}><strong>@Entity ≈ @Model.</strong> Both mark a class as "store this on disk". The framework reads the annotations at compile time and creates the table automatically — you never write <code>CREATE TABLE</code>.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 6c: Concept — DAO deep dive
  () => (
    <Shell tag="Concept · 3 of 3" timer="4" title="The DAO — your wish list for the database" subtitle="You describe WHAT you want. The framework figures out HOW." notes="The DAO mental model is the most valuable thing in this session. Students should walk away understanding that a DAO is just an interface — they describe what operations they need, and Room generates all the SQL at compile time. SwiftData takes this even further by replacing the DAO with direct ModelContext calls + @Query. Make the 'waiter analogy' concrete: you tell the waiter what you want, the kitchen (SQLite) makes it — you don't go into the kitchen yourself.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 6px" }}>The waiter analogy</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { who: "You (the UI)", says: "\"Get me all favourites\"", bg: PURPLE_LIGHT, fg: PURPLE_DARK },
                { who: "Waiter (DAO)", says: "Translates to SQL query", bg: TEAL_LIGHT, fg: TEAL_DARK },
                { who: "Kitchen (SQLite)", says: "Runs the query, returns rows", bg: AMBER_LIGHT, fg: "#633806" },
                { who: "Waiter (DAO)", says: "Returns typed Kotlin/Swift objects", bg: TEAL_LIGHT, fg: TEAL_DARK },
                { who: "You (the UI)", says: "Renders the list", bg: PURPLE_LIGHT, fg: PURPLE_DARK },
              ].map(({ who, says, bg, fg }) => (
                <div key={who + says} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: fg, background: bg, borderRadius: 4, padding: "2px 6px", minWidth: 90, flexShrink: 0 }}>{who}</span>
                  <span style={{ fontSize: 11, color: TEXT }}>{says}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 4px" }}>Why return Flow / use @Query?</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>A normal function returns data <em>once</em>. A <strong>Flow</strong> (Android) or <strong>@Query</strong> (iOS) is a <em>live subscription</em> — when the database changes, the UI is notified automatically. No polling, no manual refresh.</p>
          </div>

          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#633806", margin: "0 0 4px" }}>Why suspend fun?</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>Writing to disk is slow. <code>suspend fun</code> ensures insert/delete operations run off the main thread — keeping your UI smooth and responsive.</p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: MUTED, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Android — Room DAO</p>
            <pre style={preStyle}>{`@Dao
interface FavouriteDao {

  // READ — live, auto-updating list
  @Query("SELECT * FROM favourites")
  fun getAll(): Flow<List<FavouriteAlbum>>

  // WRITE — runs off main thread
  @Insert(onConflict = OnConflictStrategy.REPLACE)
  suspend fun insert(item: FavouriteAlbum)

  @Delete
  suspend fun delete(item: FavouriteAlbum)
}`}</pre>
          </div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: MUTED, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>iOS — SwiftData (no DAO class needed)</p>
            <pre style={preStyle}>{`// READ — live, auto-updating
@Query var favourites: [FavouriteAlbum]

// WRITE — ModelContext handles it
context.insert(album)   // add
context.delete(album)   // remove
// SwiftData auto-saves on next run loop`}</pre>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0 }}><strong>Key insight:</strong> Room DAO = an interface with annotations. SwiftData skips the interface entirely — you call <code>context.insert/delete</code> directly. Same result, different syntax.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 7: Code-along intro
  () => (
    <Shell tag="Live code-along" timer="18" title="Building persistence — 3 steps" subtitle="Open your Week 4 app. We wire in a local database." notes="Pause here before opening any code. Ask students to open their Week 4 API project. Walk through what each step will feel like: Step 1 is data definition (no UI change), Step 2 is database plumbing (still no UI change), Step 3 is the payoff — tapping a heart saves the item and it persists across app restarts. Frame the goal: by the end, favourites survive closing the app." dark>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>Three focused steps — each on its own slide</p>
          {[
            { n: 1, t: "Define the data model", desc: "FavouriteItem entity / @Model class — the shape of one saved row" },
            { n: 2, t: "Wire the database layer", desc: "DAO + AppDatabase (Android) · ModelContext + @Query (iOS)" },
            { n: 3, t: "Connect it to the UI", desc: "Heart button reads / writes the database — favourites survive restart" },
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
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: 0, textTransform: "uppercase", fontWeight: 600 }}>The goal</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ background: "rgba(255,0,0,0.15)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 10, color: "#fca5a5", fontWeight: 600, margin: "0 0 3px" }}>Before</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0 }}>Tapping ♡ does nothing. Closing the app forgets everything.</p>
            </div>
            <div style={{ fontSize: 16, textAlign: "center", color: TEAL }}>↓</div>
            <div style={{ background: "rgba(29,158,117,0.2)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 10, color: TEAL, fontWeight: 600, margin: "0 0 3px" }}>After</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0 }}>Tapping ♡ saves to SQLite. Reopening the app — hearts are still filled.</p>
            </div>
          </div>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: "4px 0 0", lineHeight: 1.5 }}>Your list screen, search, and detail screens do not change. Only the heart button wires to the database.</p>
        </div>
      </div>
    </Shell>
  ),

  // 8: Define the entity / model
  () => (
    <Shell tag="Code-Along · 1 of 3" timer="6" title="Step 1 — Define your data model" subtitle="The class that describes one saved item" notes="OSToggle lets students follow along on their own platform. @Entity (Kotlin) and @Model (Swift) serve identical purposes — mark this parallel explicitly. Stress that this is just an annotated data class/final class — nothing exotic yet.">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Add the Room dependency to build.gradle.kts">
                    <pre style={preStyle}>{`// build.gradle.kts (module)
implementation("androidx.room:room-runtime:2.6.1")
implementation("androidx.room:room-ktx:2.6.1")
kapt("androidx.room:room-compiler:2.6.1")`}</pre>
                  </Step>
                  <Step n={2} title="Create FavouriteItem.kt — annotate each field">
                    <pre style={preStyle}>{`@Entity(tableName = "favourites")
data class FavouriteItem(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    @ColumnInfo(name = "item_id") val itemId: String,
    val title: String,
    val imageUrl: String,
    val savedAt: Long = System.currentTimeMillis()
)`}</pre>
                  </Step>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                    {[["@Entity", PURPLE_LIGHT, PURPLE_DARK, PURPLE, "Tells Room to create a table for this class. tableName defaults to the class name."], ["@PrimaryKey", TEAL_LIGHT, TEAL_DARK, TEAL_DARK, "Every row needs a unique ID. autoGenerate=true means Room assigns it."], ["@ColumnInfo", AMBER_LIGHT, "#633806", "#633806", "Optional — rename the column without renaming the Kotlin property."]].map(([label, bg, fg, body_fg, body]) => (
                      <div key={label as string} style={{ background: bg as string, borderRadius: 6, padding: "6px 10px" }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: fg as string, margin: "0 0 2px" }}>{label as string}</p>
                        <p style={{ fontSize: 11, color: body_fg as string, margin: 0 }}>{body as string}</p>
                      </div>
                    ))}
                  </div>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Import SwiftData — no dependency manager needed" accent={TEAL}>
                    <pre style={preStyle}>{`// SwiftData is built into iOS 17+.
// Add "import SwiftData" wherever you need it.`}</pre>
                  </Step>
                  <Step n={2} title="Create FavouriteItem.swift — add the @Model macro" accent={TEAL}>
                    <pre style={preStyle}>{`import SwiftData

@Model
final class FavouriteItem {
    var itemId: String
    var title: String
    var imageUrl: String
    var savedAt: Date

    init(itemId: String, title: String,
         imageUrl: String, savedAt: Date = .now) {
        self.itemId   = itemId
        self.title    = title
        self.imageUrl = imageUrl
        self.savedAt  = savedAt
    }
}`}</pre>
                  </Step>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                    {[["@Model", TEAL_LIGHT, TEAL_DARK, TEAL_DARK, "One macro replaces @Entity + @PrimaryKey + @ColumnInfo. Swift auto-generates a unique ID."], ["class, not struct", PURPLE_LIGHT, PURPLE_DARK, PURPLE, "SwiftData models must be classes — reference semantics let the framework track changes."], ["No schema setup", AMBER_LIGHT, "#633806", "#633806", "Unlike Room, there is no database builder class. The ModelContainer is one line at the App entry point."]].map(([label, bg, fg, body_fg, body]) => (
                      <div key={label as string} style={{ background: bg as string, borderRadius: 6, padding: "6px 10px" }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: fg as string, margin: "0 0 2px" }}>{label as string}</p>
                        <p style={{ fontSize: 11, color: body_fg as string, margin: 0 }}>{body as string}</p>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={<CodePane title="Kotlin — FavouriteItem.kt" accent={PURPLE}>{`@Entity(tableName = "favourites")
data class FavouriteItem(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    @ColumnInfo(name = "item_id") val itemId: String,
    val title: String,
    val imageUrl: String,
    val savedAt: Long = System.currentTimeMillis()
)`}</CodePane>}
              ios={<CodePane title="Swift — FavouriteItem.swift" accent={TEAL}>{`import SwiftData

@Model
final class FavouriteItem {
    var itemId: String
    var title: String
    var imageUrl: String
    var savedAt: Date

    init(itemId: String, title: String,
         imageUrl: String, savedAt: Date = .now) {
        self.itemId   = itemId
        self.title    = title
        self.imageUrl = imageUrl
        self.savedAt  = savedAt
    }
}`}</CodePane>}
            />
          }
        />
      </div>
      <Info>{"@Model (iOS) ≈ @Entity + @PrimaryKey + @ColumnInfo (Android). Different syntax, identical purpose."}</Info>
    </Shell>
  ),

  // 8: Define the DAO / ModelContext operations
  () => (
    <Shell tag="Code-Along · 2 of 3" timer="6" title="Step 2 — Define your query interface" subtitle="Room: a DAO interface · SwiftData: ModelContext + @Query" notes="Emphasise that the DAO is just an interface — no implementation. Room generates all the boilerplate at compile time. The Flow return type is the key moment: the UI observes this live stream. For iOS, @Query is equivalent — a live property that re-renders the view on every database change. ModelContext is equivalent to DAO write operations.">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Create FavouriteDao.kt — declare the interface">
                    <pre style={preStyle}>{`@Dao
interface FavouriteDao {
    // READ — returns a live Flow (no suspend needed)
    @Query("SELECT * FROM favourites ORDER BY savedAt DESC")
    fun getAllFavourites(): Flow<List<FavouriteItem>>

    // CHECK — is a specific item saved?
    @Query("SELECT EXISTS(SELECT 1 FROM favourites WHERE item_id = :id)")
    fun isFavourite(id: String): Flow<Boolean>
}`}</pre>
                  </Step>
                  <Step n={2} title="Add write operations — insert and delete">
                    <pre style={preStyle}>{`    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertFavourite(item: FavouriteItem)

    @Delete
    suspend fun deleteFavourite(item: FavouriteItem)`}</pre>
                  </Step>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                    {[["Flow return type", PURPLE_LIGHT, PURPLE_DARK, PURPLE, "Read queries return Flow — the UI observes it like a live stream. No manual refresh needed."], ["suspend fun", TEAL_LIGHT, TEAL_DARK, TEAL_DARK, "Write/delete are suspend functions — they run off the main thread so the UI never freezes."], ["@Query compile-time check", AMBER_LIGHT, "#633806", "#633806", "Room validates your SQL at build time — typos become build errors, not runtime crashes."]].map(([label, bg, fg, body_fg, body]) => (
                      <div key={label as string} style={{ background: bg as string, borderRadius: 6, padding: "6px 10px" }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: fg as string, margin: "0 0 2px" }}>{label as string}</p>
                        <p style={{ fontSize: 11, color: body_fg as string, margin: 0 }}>{body as string}</p>
                      </div>
                    ))}
                  </div>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Add @Query to your view — a live property" accent={TEAL}>
                    <pre style={preStyle}>{`import SwiftUI
import SwiftData

struct FavouritesView: View {
    // Injected by SwiftUI — no manual passing needed
    @Environment(\.modelContext) private var context

    // Live query — re-renders view on every DB change
    @Query(sort: \.savedAt, order: .reverse)
    private var favourites: [FavouriteItem]
    ...
}`}</pre>
                  </Step>
                  <Step n={2} title="Use ModelContext for insert and delete" accent={TEAL}>
                    <pre style={preStyle}>{`// Insert a new favourite:
context.insert(FavouriteItem(
    itemId: result.id,
    title:  result.title,
    imageUrl: result.imageUrl
))

// Delete an existing one:
context.delete(item)  // must be the actual model instance`}</pre>
                  </Step>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                    {[["@Query", TEAL_LIGHT, TEAL_DARK, TEAL_DARK, "A live property — when you insert or delete via ModelContext, this array updates and the view re-renders automatically."], ["@Environment(.modelContext)", PURPLE_LIGHT, PURPLE_DARK, PURPLE, "SwiftData injects the context through SwiftUI's environment — no need to pass it manually through the view hierarchy."]].map(([label, bg, fg, body_fg, body]) => (
                      <div key={label as string} style={{ background: bg as string, borderRadius: 6, padding: "6px 10px" }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: fg as string, margin: "0 0 2px" }}>{label as string}</p>
                        <p style={{ fontSize: 11, color: body_fg as string, margin: 0 }}>{body as string}</p>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={<CodePane title="Kotlin — FavouriteDao.kt" accent={PURPLE}>{`@Dao
interface FavouriteDao {
    @Query("SELECT * FROM favourites ORDER BY savedAt DESC")
    fun getAllFavourites(): Flow<List<FavouriteItem>>

    @Query("SELECT EXISTS(SELECT 1 FROM favourites WHERE item_id = :id)")
    fun isFavourite(id: String): Flow<Boolean>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertFavourite(item: FavouriteItem)

    @Delete
    suspend fun deleteFavourite(item: FavouriteItem)
}`}</CodePane>}
              ios={<CodePane title="Swift — FavouritesView.swift (read + write)" accent={TEAL}>{`struct FavouritesView: View {
    @Environment(\.modelContext) private var context
    @Query(sort: \.savedAt, order: .reverse)
    private var favourites: [FavouriteItem]

    var body: some View {
        List(favourites) { item in Text(item.title) }
    }
}

// Insert:  context.insert(FavouriteItem(...))
// Delete:  context.delete(item)`}</CodePane>}
            />
          }
        />
      </div>
      <Info>{"Room DAO ≈ SwiftData ModelContext. Both expose insert/delete operations. Both drive automatic UI updates through Flow (Kotlin) / @Query (Swift)."}</Info>
    </Shell>
  ),

  // 9: Wire up the database / App entry point
  () => (
    <Shell tag="Code-Along · 3 of 3" timer="6" title="Step 3 — Wire up the database" subtitle="Room: AppDatabase + ViewModel · SwiftData: .modelContainer at the App entry point" notes="Singleton pattern is critical on Android — only one AppDatabase instance should exist. On iOS, .modelContainer(for:) does all the wiring in one line at the App entry point. Compare these side-by-side to show students how much SwiftData handles automatically.">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Create AppDatabase.kt — the singleton database class">
                    <pre style={preStyle}>{`@Database(entities = [FavouriteItem::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun favouriteDao(): FavouriteDao

    companion object {
        @Volatile private var INSTANCE: AppDatabase? = null

        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java, "app_database"
                ).build().also { INSTANCE = it }
            }
        }
    }
}`}</pre>
                  </Step>
                  <Step n={2} title="Wire the DAO into your ViewModel">
                    <pre style={preStyle}>{`class FavouritesViewModel(private val dao: FavouriteDao) : ViewModel() {
    val favourites = dao.getAllFavourites()
        .stateIn(viewModelScope, SharingStarted.Lazily, emptyList())

    fun toggleFavourite(item: FavouriteItem) = viewModelScope.launch {
        if (dao.isFavourite(item.itemId).first()) dao.deleteFavourite(item)
        else dao.insertFavourite(item)
    }
}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Add .modelContainer to your App entry point — one line" accent={TEAL}>
                    <pre style={preStyle}>{`import SwiftUI
import SwiftData

@main
struct AlbumBrowserApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        // This one modifier creates the database,
        // schema, and injects the ModelContext automatically
        .modelContainer(for: FavouriteItem.self)
    }
}`}</pre>
                  </Step>
                  <Step n={2} title="That's it — SwiftData injects the context into every view" accent={TEAL}>
                    <pre style={preStyle}>{`// In any child view, just declare:
@Environment(\.modelContext) private var context
@Query private var favourites: [FavouriteItem]

// No AppDatabase class. No singleton. No ViewModel boilerplate.
// The framework handles it all.`}</pre>
                  </Step>
                  <div style={{ background: TEAL_LIGHT, borderRadius: 6, padding: "6px 10px", marginTop: 4 }}>
                    <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 2px" }}>Why so much less code?</p>
                    <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0 }}>SwiftData is built on Observation — the @Model macro generates all the change-tracking infrastructure automatically. Room's annotation processor does similar work, but requires you to wire more pieces together manually.</p>
                  </div>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={<CodePane title="Kotlin — AppDatabase.kt + ViewModel" accent={PURPLE}>{`@Database(entities = [FavouriteItem::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun favouriteDao(): FavouriteDao
    companion object {
        @Volatile private var INSTANCE: AppDatabase? = null
        fun getDatabase(context: Context): AppDatabase =
            INSTANCE ?: synchronized(this) {
                Room.databaseBuilder(context.applicationContext,
                    AppDatabase::class.java, "app_database")
                    .build().also { INSTANCE = it }
            }
    }
}

class FavouritesViewModel(private val dao: FavouriteDao) : ViewModel() {
    val favourites = dao.getAllFavourites()
        .stateIn(viewModelScope, SharingStarted.Lazily, emptyList())
    fun toggleFavourite(item: FavouriteItem) = viewModelScope.launch {
        if (dao.isFavourite(item.itemId).first()) dao.deleteFavourite(item)
        else dao.insertFavourite(item)
    }
}`}</CodePane>}
              ios={<CodePane title="Swift — AlbumBrowserApp.swift" accent={TEAL}>{`import SwiftUI
import SwiftData

@main
struct AlbumBrowserApp: App {
    var body: some Scene {
        WindowGroup { ContentView() }
        .modelContainer(for: FavouriteItem.self)
    }
}`}</CodePane>}
            />
          }
        />
      </div>
      <Info>{"Android needs: @Database class + singleton + ViewModel wiring. iOS needs: one .modelContainer modifier. Same result — a persistent, observable database."}</Info>
    </Shell>
  ),

  // 10: Side-by-side comparison
  () => (
    <Shell tag="Comparison" timer="4" title="Room vs SwiftData — the parallels" notes="This comparison slide is one of the most valuable in the course — it makes students fluent in both platforms simultaneously. Point out that despite different naming conventions, the mental models are identical. A student who understands Room already understands SwiftData conceptually.">
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr>
              {["Concept", "Room (Android)", "SwiftData (iOS)"].map(h => (
                <th key={h} style={{ textAlign: "left", padding: "8px 12px", background: GRAY, color: MUTED, fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: ".05em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Define a table/model", "@Entity data class", "@Model final class"],
              ["Primary key", "@PrimaryKey(autoGenerate)", "Auto-generated by framework"],
              ["Query interface", "@Dao interface + @Query", "@Query + ModelContext"],
              ["Live updates", "Flow<List<T>>", "@Query var items: [T]"],
              ["Insert a record", "dao.insert() (suspend)", "context.insert()"],
              ["Delete a record", "dao.delete() (suspend)", "context.delete()"],
              ["Database setup", "Room.databaseBuilder()", ".modelContainer(for:)"],
              ["Thread safety", "suspend fun (coroutines)", "Main actor / async context"],
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

  // 13: Lab
  () => (
    <Shell tag="Lab" timer="10" title="Lab — add favourites to your Week 4 app" subtitle="Session 1 lab activity" notes="Students should already have a working API app from Week 4. The goal is to wire up a local database so that tapping a heart icon saves the item locally. Encourage them to start with the entity definition, then the DAO, then hook it into the ViewModel they already have. For students who finish early, the stretch goal is to show a Favourites tab that lists saved items.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Steps</p>
          {[
            "Open your Week 4 API app",
            "Android: add Room dependency to build.gradle",
            "iOS: enable SwiftData in your project",
            "Define a FavouriteItem entity / @Model class",
            "Android: create the DAO and AppDatabase",
            "iOS: add .modelContainer to your App entry point",
            "Add a heart button to each list row",
            "Wire the button to insert or delete from the database",
            "Restart the app and confirm favourites persist",
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: PURPLE, minWidth: 18 }}>{i + 1}.</span>
              <span style={{ fontSize: 12, color: TEXT }}>{s}</span>
            </div>
          ))}
        </div>
        <div>
          <Lab>{"Add a heart icon to each row in your Week 4 list. Tapping it should save that item to a local database. Close and reopen the app — the hearts should still be filled. Use the comparison table to look up the equivalent API for your platform."}</Lab>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px", marginTop: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>Stretch goal</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0 }}>Add a Favourites tab to your app that shows only saved items, loaded directly from the database (not from the API).</p>
          </div>
          <Info>{"AI tip: Ask your AI tool to generate the entity class from a description of your data shape. Then review what it produces — does each field map to a column you actually need?"}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 14: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: "#fff", margin: "0 0 8px" }}>Session 1 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Your app now remembers what users care about — even after it restarts.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned</p>
            {["When to use a local database vs key-value store", "Entities define the data shape (@Entity / @Model)", "DAOs describe what you want to do with the data", "Room uses Flow for live-updating lists", "SwiftData uses @Query for the same effect", "Both integrate with your existing ViewModel pattern"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Session 2</p>
            {["DataStore (Android) + UserDefaults (iOS)", "Storing simple preferences — theme, last view, toggles", "The offline-first pattern — show cached data while fetching", "Assignment 5 overview — favourites tab + capstone proposal"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: AMBER, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.1)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Tonight: try the lab stretch goal — build the Favourites tab.</p>
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
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 5 · Session 1 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>Local databases — Room & SwiftData</p>
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
