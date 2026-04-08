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

const Warn = ({ title, children }) => (
  <div style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "8px 12px", margin: "8px 0" }}>
    <p style={{ fontSize: 12, fontWeight: 600, color: "#92400e", margin: "0 0 2px" }}>{title}</p>
    <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Info = ({ children }) => (
  <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "8px 14px", margin: "8px 0" }}>
    <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Shell = ({ tag, tagColor, title, subtitle, timer, children, notes, dark }) => (
  <div style={{ background: dark ? PURPLE_DARK : "#fff", border: `1px solid ${dark ? "transparent" : "#e5e7eb"}`, borderRadius: 12, padding: "24px 28px 18px", minHeight: 360, display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        {tag && <Tag color={dark ? "#fff" : (tagColor || PURPLE)}>{tag}</Tag>}
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
  // ─── SLIDE 1: Title ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 1 — Session 1</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>Mobile Development<br/>in the Age of AI</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Session 1: Declarative UI — building your first screen</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Android · Jetpack Compose", "iOS · SwiftUI", "Powered by Claude"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${TEAL}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Welcome everyone. Ask for a quick show of hands: who has built a website before? Who has used a mobile app in the last hour? Hold that thought — by the end of this course, you will understand exactly how that app was built. Let the energy settle, take attendance, and get into it."}</Notes>
    </div>
  ),

  // ─── SLIDE 2: About this course ───
  () => (
    <Shell tag="Welcome" title="What this course is — and is not" notes="Spend 4-5 minutes here. This reframes students' expectations. Most intro mobile courses pick a side — Android OR iOS. This one does not, and that is a feature, not a bug. The AI angle is also unusual — be clear that Claude is an official CodePath partner and its use is expected and encouraged.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px", textTransform: "uppercase" }}>This course IS</p>
          <Bullet>An intro to native mobile development</Bullet>
          <Bullet>Taught across Android AND iOS simultaneously</Bullet>
          <Bullet>Fundamentals-first — we earn the fancy stuff</Bullet>
          <Bullet>AI-assisted from day one using Claude</Bullet>
          <Bullet>Project-based — you build real apps every week</Bullet>
        </div>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px", textTransform: "uppercase" }}>This course is NOT</p>
          <Bullet>A deep dive into one platform only</Bullet>
          <Bullet>A shortcut — we still learn the fundamentals</Bullet>
          <Bullet>A course where Claude writes your code for you</Bullet>
          <Bullet>Focused on cross-platform tools like Flutter or React Native</Bullet>
          <Bullet>Requiring any prior mobile experience</Bullet>
        </div>
      </div>
      <Info>{"By the end of 10 weeks: you will have a capstone app in the App Store or Play Store, and you will understand how to build for both platforms. That is unusual — most developers take years to get there."}</Info>
    </Shell>
  ),

  // ─── SLIDE 3: Agenda ───
  () => (
    <Shell tag="Agenda" title="Today's session — 60 minutes" timer="1" notes="Keep this to 60 seconds. Point out that the concepts build on each other — every section is a foundation for the next. Remind students that the language primer was covered in pre-work, so today we jump straight into UI. The live code-along in the middle is the most important part.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "5 min",  title: "Why mobile in 2025?", desc: "The landscape and why native still matters" },
          { num: "02", time: "15 min", title: "Imperative vs declarative UI", desc: "The mental shift that makes Compose and SwiftUI click" },
          { num: "03", time: "8 min",  title: "Anatomy of a screen", desc: "Reading a Composable and SwiftUI View line by line" },
          { num: "04", time: "7 min",  title: "Layout + modifiers", desc: "Column/VStack, Row/HStack, and basic styling" },
          { num: "05", time: "18 min", title: "Live code-along", desc: "Build a profile card together from scratch" },
          { num: "06", time: "5 min",  title: "Claude as your pair", desc: "How to use AI to learn faster — not skip the learning" },
          { num: "07", time: "2 min",  title: "Lab intro + Q&A", desc: "What you build today and how to get unblocked" },
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

  // ─── SLIDE 4: Why mobile? ───
  () => (
    <Shell tag="Context" timer="5" title="Why mobile — in 2025?" notes="Do not spend too long on stats — they are a setup, not the main event. The key insight to land is the last bullet: on-device AI is the most exciting frontier in mobile right now, and it can ONLY run natively. That is a strong argument for this course existing at all.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8, marginBottom: 12 }}>
        {[
          { stat: "6.8B", label: "Smartphone users worldwide" },
          { stat: "90%", label: "Of mobile time spent in native apps" },
          { stat: "$935B", label: "Mobile app revenue in 2023" },
        ].map(s => (
          <div key={s.stat} style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "14px 12px", textAlign: "center" }}>
            <p style={{ fontSize: 26, fontWeight: 800, color: PURPLE, margin: "0 0 4px" }}>{s.stat}</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.4 }}>{s.label}</p>
          </div>
        ))}
      </div>
      <Bullet>Mobile is not dying — it is evolving. AI features are arriving on mobile first.</Bullet>
      <Bullet>On-device AI (running models with NO internet) can only be done natively</Bullet>
      <Bullet>Jetpack Compose and SwiftUI share the same declarative model — learn one, understand both</Bullet>
      <Bullet>AI tools have closed the boilerplate gap between platforms to nearly zero</Bullet>
      <Discussion>{"Think about the last 3 apps you opened today. Do you think they were built natively, or as web apps inside a shell? What clues would you look for?"}</Discussion>
    </Shell>
  ),

  // ─── SLIDE 5: Native vs web ───
  () => (
    <Shell tag="Context" title="Native vs cross-platform vs web" notes="Students often arrive with questions about Flutter or React Native. Address this directly: those are great tools, but they abstract away the platform. This course teaches you the foundation underneath those tools — which makes you a better engineer when you do use them.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          { title: "Native (this course)", items: ["Full access to device hardware", "Best performance and animations", "Platform-specific UI that feels right", "On-device AI — Core ML, ML Kit, Gemini Nano"], accent: PURPLE, bg: PURPLE_LIGHT },
          { title: "Cross-platform (Flutter, RN)", items: ["One codebase, two platforms", "Good — but abstracts the platform", "Harder to do platform-specific things", "Great to learn AFTER native fundamentals"], accent: TEAL, bg: TEAL_LIGHT },
          { title: "Web app (PWA, Capacitor)", items: ["Runs in a browser shell", "Easiest to build initially", "Limited hardware access", "Often feels different from native apps"], accent: "#888", bg: GRAY },
        ].map(col => (
          <div key={col.title} style={{ background: col.bg, border: `1px solid ${col.accent}22`, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: col.accent, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".04em" }}>{col.title}</p>
            {col.items.map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: col.accent, fontWeight: 700, flexShrink: 0, fontSize: 12 }}>▸</span>
                <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Info>{"We teach native because it is the foundation. Understanding how Compose and SwiftUI work makes you better at Flutter, React Native, and any cross-platform tool you use later."}</Info>
    </Shell>
  ),

  // ─── SLIDE 5b: Pre-work check-in ───
  () => (
    <Shell tag="Pre-work check-in" title="You already know the language basics" subtitle="Let's make sure we're all on the same page before writing UI" notes="This is a quick gut-check — not a full review. Ask for a show of hands on each concept. The pre-work covered variables, functions, and basic types — not lambdas/closures. Those will be introduced naturally during the code-along today when students encounter them in context.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>The language primer was part of your pre-work. Here is a quick check before we dive into UI.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 4 }}>
        <div style={{ background: PURPLE_LIGHT, border: `1px solid ${PURPLE}33`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE, margin: "0 0 10px", textTransform: "uppercase" }}>Raise your hand if you feel solid on…</p>
          {["val / let vs var — immutable vs mutable", "Functions — fun / func, named parameters", "Basic types — String, Int, Boolean/Bool", "Data classes / structs — grouping related data"].map((t, i) => (
            <div key={t} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 18, height: 18, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
              <span style={{ fontSize: 13, color: TEXT }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}33`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 10px", textTransform: "uppercase" }}>New today — we'll learn as we go</p>
          <div style={{ display: "flex", gap: 8, margin: "6px 0", alignItems: "flex-start" }}>
            <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 18, height: 18, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>★</span>
            <span style={{ fontSize: 13, color: TEXT, lineHeight: 1.5 }}>Lambdas / closures — <code style={{ background: "#d1fae5", padding: "1px 4px", borderRadius: 3 }}>{"{ }"}</code> as a value. We'll introduce these in context during the code-along.</span>
          </div>
          <div style={{ marginTop: 10, background: "#fff", borderRadius: 6, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, color: MUTED, margin: "0 0 6px", fontWeight: 600 }}>You'll see this pattern everywhere today:</p>
            <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "8px 10px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`Column( ... ) {
    Text("Hello")  // ← this { } is a lambda
}`}</pre>
          </div>
        </div>
      </div>
      <Info>{"Questions on the pre-work? Now is the moment. Once we start building UI it moves fast."}</Info>
    </Shell>
  ),

  // ─── SLIDE 6: Imperative vs declarative concept ───
  () => (
    <Shell tag="Core concept" timer="10" title="Imperative vs declarative UI" subtitle="The most important mental shift of this entire course" notes="Spend a full 8-10 minutes here — this is the conceptual heart of Session 1. Ground this in the real problem: in the old View system, the developer was responsible for keeping UI and data in sync manually. Every forgotten setText() or addChild() was a potential bug. Declarative flips this — you describe what the UI should look like for a given state, and the framework handles updates. The next two slides go deeper on the 'why' and the real-world consequences from Google and Apple's own docs.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px", textTransform: "uppercase" }}>Imperative — "how to build it"</p>
          <Bullet>You write the steps to construct the UI manually</Bullet>
          <Bullet>You are responsible for updating views when data changes</Bullet>
          <Bullet>UI and data can drift out of sync — common source of bugs</Bullet>
          <Bullet>Example: Android XML layouts with TextView.setText()</Bullet>
          <Bullet sub>Find the view by ID, get a reference, call a method on it</Bullet>
          <Bullet sub>If you forget to update one view, it shows stale data forever</Bullet>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px", textTransform: "uppercase" }}>Declarative — "what it should look like"</p>
          <Bullet>You describe what the UI should look like for a given state</Bullet>
          <Bullet>The framework re-renders automatically when data changes</Bullet>
          <Bullet>UI and data are always in sync — by design, not discipline</Bullet>
          <Bullet>Example: Compose and SwiftUI — both declarative</Bullet>
          <Bullet sub>Text(count.toString()) always shows the current count</Bullet>
          <Bullet sub>You change the data — the UI follows. That is the whole model.</Bullet>
        </div>
      </div>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10, textAlign: "center" }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: PURPLE_DARK, margin: 0 }}>UI = f(state) — the UI is a pure function of your data</p>
        <p style={{ fontSize: 12, color: PURPLE, margin: "4px 0 0" }}>Change the data, the UI updates automatically. You never touch the UI directly.</p>
      </div>
    </Shell>
  ),

  // ─── SLIDE 7: Why the old way breaks — from official docs ───
  () => (
    <Shell tag="Core concept" title="Why the imperative model breaks down" subtitle="From the Android and Apple developer documentation" notes="This is the 'real pain' slide — show students what actually went wrong in production apps before declarative frameworks. The key insight from the Android docs: if a piece of data is rendered in multiple places, you might forget to update one of the views that shows it. This leads to illegal states and bugs that are hard to reproduce. Apple's WWDC documentation makes the same point: SwiftUI views are descriptions of what the current state of the UI should be — they are not long-lived object instances that receive imperative commands over time.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#b91c1c", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: ".04em" }}>Android docs — the problem with manual UI updates</p>
          <Bullet>Walking the view tree with <code style={{ background: "#fee2e2", padding: "1px 4px", borderRadius: 3, fontSize: 11 }}>findViewById()</code> to update UI manually</Bullet>
          <Bullet>If data is shown in multiple places, you might forget to update one</Bullet>
          <Bullet>Two conflicting updates can cause illegal states</Bullet>
          <Bullet>An update might try to set a value on a node that was just removed</Bullet>
          <Bullet sub>Software maintenance complexity grows with the number of views that require updating</Bullet>
          <div style={{ marginTop: 10, background: "#fee2e2", borderRadius: 6, padding: "8px 10px" }}>
            <pre style={{ margin: 0, background: "#1e1e2e", color: "#fca5a5", fontSize: 10, padding: "8px 10px", borderRadius: 4, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`// Old Android — you are responsible for every update
val nameView = findViewById<TextView>(R.id.name)
val headerView = findViewById<TextView>(R.id.header)
val badgeView = findViewById<TextView>(R.id.badge)

user.name = "Alex"
nameView.setText(user.name)   // remember this...
headerView.setText(user.name) // ...and this...
// badgeView? forgot. now it shows the wrong name.`}</pre>
          </div>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: TEAL, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: ".04em" }}>Apple docs — SwiftUI's answer (WWDC 2024)</p>
          <Bullet>SwiftUI views are <em>descriptions</em> of what the UI should look like — not live objects you command</Bullet>
          <Bullet>Views are value types (structs), not class instances — they don't accumulate stale state</Bullet>
          <Bullet>Every pixel on screen is defined by a view that re-evaluates when its data changes</Bullet>
          <Bullet sub>Declarative and imperative are not mutually exclusive — SwiftUI embraces both where appropriate</Bullet>
          <div style={{ marginTop: 10, background: "#d1fae5", borderRadius: 6, padding: "8px 10px" }}>
            <pre style={{ margin: 0, background: "#1e1e2e", color: "#9FE1CB", fontSize: 10, padding: "8px 10px", borderRadius: 4, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`// SwiftUI — describe the relationship once
struct ProfileView: View {
    var user: User
    var body: some View {
        Text(user.name)  // always correct — no "update" call needed
        Header(user.name)
        Badge(user.name)
        // change user.name → all three update automatically
    }
}`}</pre>
          </div>
        </div>
      </div>
      <Info>{"Both Google and Apple documented the same root problem independently — and both solved it the same way. That is why Compose and SwiftUI look so similar despite coming from different companies."}</Info>
    </Shell>
  ),

  // ─── SLIDE 7b: Recomposition and intelligent re-rendering ───
  () => (
    <Shell tag="Core concept" title="How the framework keeps up — recomposition" subtitle="Compose and SwiftUI don't re-draw everything. They're smart about it." notes="Students sometimes worry: if the whole UI re-renders on every state change, isn't that slow? This slide addresses that directly. The Android mental model doc explains it clearly: Compose intelligently chooses which parts of the UI need to be redrawn at any given time. Apple's WWDC docs call it 'state-driven views' — SwiftUI creates an efficient data structure to represent them and only updates what changed. Keep this conceptual — implementation details come in Session 2 when they actually use state.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div style={{ background: GRAY, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>The concern students have</p>
          <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: "0 0 8px" }}>"If the UI re-generates from scratch every time data changes, won't that be incredibly slow?"</p>
          <p style={{ fontSize: 12, color: TEXT, lineHeight: 1.6, fontWeight: 500 }}>It is a valid question. Here is how both frameworks solve it:</p>
        </div>
        <div style={{ background: PURPLE_LIGHT, border: `1px solid ${PURPLE}33`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, margin: "0 0 8px", textTransform: "uppercase" }}>The answer — intelligent recomposition</p>
          <Bullet>Compose tracks which composables depend on which state</Bullet>
          <Bullet>When state changes, only the composables that read that state are re-run</Bullet>
          <Bullet>Everything else is skipped — Google calls this "intelligent recomposition"</Bullet>
          <Bullet>SwiftUI does the same: it builds an efficient internal data structure and only updates what changed</Bullet>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <CodePane title="Compose — only affected composables re-run" accent={PURPLE}>
{`@Composable
fun Screen(user: User, count: Int) {
    Header(user.name)    // ← only re-runs if user.name changes
    Counter(count)       // ← only re-runs if count changes
    Footer()             // ← never re-runs (no state dependency)
}
// Change count → only Counter() re-runs. Header and Footer skip.`}
        </CodePane>
        <CodePane title="SwiftUI — same principle" accent={TEAL}>
{`struct Screen: View {
    var user: User
    @State var count: Int
    var body: some View {
        Header(name: user.name)  // re-evaluates if user.name changes
        Counter(count: count)    // re-evaluates if count changes
        Footer()                 // never re-evaluates
    }
}`}
        </CodePane>
      </div>
      <Discussion>{"Now that you understand this model — what do you think the rule should be for composable functions and side effects? Should a Composable be allowed to write to a database directly?"}</Discussion>
    </Shell>
  ),

  // ─── SLIDE 8: Anatomy of a screen ───
  () => (
    <Shell tag="Anatomy" timer="8" title="Anatomy of a screen — Composable vs View" notes="Walk through each part of the anatomy carefully. The thing students find most surprising is how little boilerplate there is compared to what they may have seen in older Android tutorials. Emphasize that EVERYTHING is a function in Compose, and EVERYTHING is a struct in SwiftUI — no inheritance, no lifecycle callbacks to memorize yet.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Android — a Composable function" accent={PURPLE}>
{`// 1. @Composable annotation — marks this as UI
@Composable
fun MyScreen() {
    // 2. A layout container to arrange children
    Column(
        // 3. Modifier — how it fills/styles the space
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // 4. UI components inside
        Text(
            text = "Hello, world!",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold
        )
    }
}

// 5. Called inside setContent{} in MainActivity
class MainActivity : ComponentActivity() {
    override fun onCreate(...) {
        super.onCreate(...)
        setContent { MyScreen() }  // <-- here
    }
}`}
        </CodePane>
        <CodePane title="iOS — a SwiftUI View struct" accent={TEAL}>
{`// 1. Conforms to the View protocol
struct MyScreen: View {

    // 2. body is the required computed property
    //    that returns what to display
    var body: some View {

        // 3. A layout container
        VStack(
            alignment: .center,
            spacing: 8
        ) {
            // 4. UI components inside
            Text("Hello, world!")
                .font(.title)
                .fontWeight(.bold)
        }
        // 5. Modifiers chain on the container too
        .frame(maxWidth: .infinity,
               maxHeight: .infinity)
    }
}

// 6. Set as root in your App struct
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup { MyScreen() }
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // ─── SLIDE 9: Anatomy annotations ───
  () => (
    <Shell tag="Anatomy" title="Breaking down the anatomy" notes="Go number by number with students. Have them open their own IDE and find each part. This slide is a reference — students will come back to it when they are confused in lab.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          { num: "1", compose: "@Composable annotation", swiftui: "struct conforming to View", desc: "Marks this as a UI-producing function or type" },
          { num: "2", compose: "The function body", swiftui: "var body: some View", desc: "Everything inside here is your UI" },
          { num: "3", compose: "Modifier chain", swiftui: "View modifier chain", desc: "How you style, size, and position things" },
          { num: "4", compose: "Child components", swiftui: "Child views", desc: "Composables / Views nested inside a container" },
          { num: "5", compose: "setContent { } in Activity", swiftui: "WindowGroup { } in App", desc: "Where your root screen gets plugged in" },
          { num: "6", compose: "Column / Row / Box", swiftui: "VStack / HStack / ZStack", desc: "Layout containers — covered next slide" },
        ].map(row => (
          <div key={row.num} style={{ background: GRAY, borderRadius: 8, padding: "9px 11px", display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{row.num}</span>
            <div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 3 }}>
                <code style={{ fontSize: 11, background: PURPLE_LIGHT, color: PURPLE, padding: "1px 5px", borderRadius: 3 }}>{row.compose}</code>
                <span style={{ fontSize: 10, color: MUTED, alignSelf: "center" }}>↔</span>
                <code style={{ fontSize: 11, background: TEAL_LIGHT, color: TEAL, padding: "1px 5px", borderRadius: 3 }}>{row.swiftui}</code>
              </div>
              <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.4 }}>{row.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Discussion>{"Look at the two code examples. What would happen if you removed the Column/VStack wrapper and just had two Text components directly inside the function? Make a prediction before we try it."}</Discussion>
    </Shell>
  ),

  // ─── SLIDE 10: Layout containers ───
  () => (
    <Shell tag="Layout" timer="5" title="Layout containers — arranging your UI" notes="Use physical gestures here — move your hand downward for Column/VStack, sideways for Row/HStack, stacking for Box/ZStack. Students remember physical metaphors far better than code. Then draw them on the board: three boxes stacked vertically, three boxes side by side, three boxes overlapping.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          {
            compose: "Column", swift: "VStack", dir: "col", desc: "Stacks children vertically, top to bottom",
            use: "Profile layout, settings list, form fields",
            accent: PURPLE
          },
          {
            compose: "Row", swift: "HStack", dir: "row", desc: "Stacks children horizontally, left to right",
            use: "Stats row, tab bar items, icon + label pairs",
            accent: TEAL
          },
          {
            compose: "Box", swift: "ZStack", dir: "z", desc: "Layers children on top of each other",
            use: "Badge on an avatar, overlay text on an image",
            accent: "#E67E22"
          },
        ].map(c => (
          <div key={c.compose} style={{ background: GRAY, borderRadius: 8, padding: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <code style={{ fontSize: 13, fontWeight: 700, color: c.accent }}>{c.compose}</code>
              <code style={{ fontSize: 11, color: MUTED }}>{c.swift}</code>
            </div>
            <div style={{ background: "#fff", borderRadius: 6, padding: 8, marginBottom: 8, minHeight: 64, display: "flex", flexDirection: c.dir === "col" ? "column" : c.dir === "row" ? "row" : "relative", gap: 4, alignItems: "center", justifyContent: "center", position: "relative" }}>
              {["A", "B", "C"].map((v, i) => (
                <div key={v} style={{ background: c.accent, color: "#fff", borderRadius: 4, width: c.dir === "col" ? "70%" : c.dir === "row" ? 26 : 42, height: c.dir === "col" ? 16 : c.dir === "row" ? 26 : 42, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, position: c.dir === "z" ? "absolute" : "relative", opacity: c.dir === "z" ? 1 - i * 0.22 : 1, transform: c.dir === "z" ? `translate(${i * 7}px, ${i * 7}px)` : "none", flexShrink: 0 }}>{v}</div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: MUTED, margin: "0 0 4px", lineHeight: 1.4 }}>{c.desc}</p>
            <p style={{ fontSize: 10, color: c.accent, margin: 0, fontStyle: "italic" }}>Use for: {c.use}</p>
          </div>
        ))}
      </div>
      <Info>{"All three containers accept alignment and spacing parameters. You will use Column/VStack and Row/HStack in almost every screen you build. Box/ZStack is more specialized but essential for things like profile avatars."}</Info>
    </Shell>
  ),

  // ─── SLIDE 11: Nesting containers ───
  () => (
    <Shell tag="Layout" title="Nesting containers — real UIs are trees" notes="This is where students start to see how real screens are built. Draw a tree on the board first: outer Column → inner Row → two Text items side by side. Then show the code. Emphasize that there is no limit to nesting depth, but deeply nested UIs become hard to read — we will talk about component decomposition later in the course.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Real screens combine containers — a Column can contain a Row, which can contain a Box</p>
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Nested layout — Compose" accent={PURPLE}>
{`@Composable
fun ProfileHeader() {
    Column(                         // outer: vertical
        horizontalAlignment =
            Alignment.CenterHorizontally
    ) {
        Box(                        // avatar with badge
            contentAlignment =
                Alignment.BottomEnd
        ) {
            // Profile circle
            Box(
                modifier = Modifier
                    .size(72.dp)
                    .background(
                        Color(0xFF534AB7),
                        CircleShape
                    ),
                contentAlignment = Alignment.Center
            ) {
                Text("CP", color = Color.White,
                    fontWeight = FontWeight.Bold)
            }
            // Online badge layered on top
            Box(
                modifier = Modifier
                    .size(14.dp)
                    .background(
                        Color(0xFF1D9E75),
                        CircleShape
                    )
            )
        }
        Spacer(modifier = Modifier.height(8.dp))
        Row(                        // name + role side by side
            horizontalArrangement =
                Arrangement.spacedBy(6.dp)
        ) {
            Text("CodePath Student",
                fontWeight = FontWeight.Bold)
            Text("• iOS", color = Color.Gray)
        }
    }
}`}
        </CodePane>
        <div style={{ flex: 1, background: GRAY, borderRadius: 8, padding: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: ".05em" }}>Renders as</p>
          <div style={{ position: "relative", width: 72, height: 72 }}>
            <div style={{ width: 72, height: 72, background: PURPLE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 18 }}>CP</div>
            <div style={{ position: "absolute", bottom: 2, right: 2, width: 14, height: 14, background: TEAL, borderRadius: "50%", border: "2px solid #fff" }} />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: TEXT }}>CodePath Student</span>
            <span style={{ fontSize: 12, color: MUTED }}>• iOS</span>
          </div>
          <div style={{ marginTop: 12, background: "#fff", borderRadius: 6, padding: "8px 12px", fontSize: 11, color: MUTED, textAlign: "center", lineHeight: 1.5 }}>
            Column → Box (avatar + badge) → Row (name + role)
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 12: Modifiers ───
  () => (
    <Shell tag="Styling" timer="5" title="Modifiers — the styling system" subtitle="How to size, space, color, and shape your components" notes="Modifiers are one of the things students struggle with most early on. The key point: in Compose, modifiers are ORDER DEPENDENT. padding().background() vs background().padding() produce visually different results. Show this live — it is memorable.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 8px" }}>Common Compose modifiers</p>
          {[
            { mod: "Modifier.fillMaxSize()", desc: "Fill all available space" },
            { mod: "Modifier.fillMaxWidth(0.8f)", desc: "Fill 80% of available width" },
            { mod: "Modifier.padding(16.dp)", desc: "Add space around the component" },
            { mod: "Modifier.size(80.dp)", desc: "Set a fixed width and height" },
            { mod: "Modifier.background(color, shape)", desc: "Fill with a color and optional shape" },
            { mod: "Modifier.clip(CircleShape)", desc: "Clip content to a shape" },
            { mod: "Modifier.clickable { }", desc: "Make the component tappable" },
          ].map(r => (
            <div key={r.mod} style={{ display: "flex", gap: 6, margin: "4px 0", alignItems: "flex-start" }}>
              <code style={{ fontSize: 10, background: PURPLE_LIGHT, color: PURPLE, padding: "1px 5px", borderRadius: 3, flexShrink: 0, lineHeight: 1.8 }}>{r.mod}</code>
              <span style={{ fontSize: 11, color: MUTED, lineHeight: 1.6 }}>{r.desc}</span>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL, margin: "0 0 8px" }}>Common SwiftUI view modifiers</p>
          {[
            { mod: ".frame(maxWidth: .infinity)", desc: "Fill available width" },
            { mod: ".frame(width: 80, height: 80)", desc: "Set a fixed size" },
            { mod: ".padding(16)", desc: "Add space around the view" },
            { mod: ".background(Color.purple)", desc: "Fill with a color" },
            { mod: ".cornerRadius(12)", desc: "Round the corners" },
            { mod: ".foregroundColor(.gray)", desc: "Set text/icon color" },
            { mod: ".onTapGesture { }", desc: "Respond to a tap" },
          ].map(r => (
            <div key={r.mod} style={{ display: "flex", gap: 6, margin: "4px 0", alignItems: "flex-start" }}>
              <code style={{ fontSize: 10, background: TEAL_LIGHT, color: TEAL, padding: "1px 5px", borderRadius: 3, flexShrink: 0, lineHeight: 1.8 }}>{r.mod}</code>
              <span style={{ fontSize: 11, color: MUTED, lineHeight: 1.6 }}>{r.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 13: Modifier order ───
  () => (
    <Shell tag="Styling" title="Modifier order matters — this trips everyone up" notes="Show this live. Literally type both versions in Android Studio and run them side by side. The visual difference is obvious and memorable. Students who see this live will never forget it. The SwiftUI version behaves the same way — show that too.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="padding THEN background — padding is OUTSIDE" accent="#b91c1c">
{`Text(
    text = "Hello",
    modifier = Modifier
        .padding(16.dp)       // space added first
        .background(          // color applied after
            Color(0xFF534AB7)
        )
)
// Result: text has a colored background
// but no padding inside — color only wraps text`}
        </CodePane>
        <CodePane title="background THEN padding — padding is INSIDE" accent={TEAL}>
{`Text(
    text = "Hello",
    modifier = Modifier
        .background(          // color applied first
            Color(0xFF534AB7),
            RoundedCornerShape(8.dp)
        )
        .padding(16.dp)       // space added inside the color
)
// Result: text has a colored pill shape
// with breathing room inside it — usually what you want`}
        </CodePane>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <div style={{ flex: 1, background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "10px 14px", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#b91c1c", margin: "0 0 4px", fontWeight: 600 }}>padding → background</p>
          <div style={{ display: "inline-block", background: PURPLE, padding: 0 }}>
            <span style={{ fontSize: 13, color: "#fff", padding: "0 6px" }}>Hello</span>
          </div>
          <p style={{ fontSize: 11, color: MUTED, margin: "6px 0 0" }}>Tight — color hugs the text</p>
        </div>
        <div style={{ flex: 1, background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "10px 14px", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: TEAL, margin: "0 0 4px", fontWeight: 600 }}>background → padding</p>
          <div style={{ display: "inline-block", background: PURPLE, borderRadius: 6, padding: "6px 16px" }}>
            <span style={{ fontSize: 13, color: "#fff" }}>Hello</span>
          </div>
          <p style={{ fontSize: 11, color: MUTED, margin: "6px 0 0" }}>Spacious — color has breathing room</p>
        </div>
      </div>
      <Warn title="Same rule applies in SwiftUI">{"In SwiftUI, .padding().background() and .background().padding() produce the same order-dependent result. The mental model is identical across platforms."}</Warn>
    </Shell>
  ),

  // ─── SLIDE 14: Text component deep dive ───
  () => (
    <Shell tag="Components" title="The Text component — more than just words" notes="Students underestimate how much you can do with Text alone. Walk through each property. Mention that sp (scale-independent pixels) in Compose automatically respects the user's system font size setting — accessibility by default. SwiftUI's .font() does the same.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Compose — Text properties" accent={PURPLE}>
{`Text(
    text = "CodePath Mobile",
    fontSize = 24.sp,          // sp = respects system size
    fontWeight = FontWeight.Bold,
    fontStyle = FontStyle.Italic,
    color = Color(0xFF534AB7),
    textAlign = TextAlign.Center,
    maxLines = 2,
    overflow = TextOverflow.Ellipsis,
    letterSpacing = 1.5.sp,
    lineHeight = 32.sp,
    modifier = Modifier
        .fillMaxWidth()
        .padding(horizontal = 16.dp)
)`}
        </CodePane>
        <CodePane title="SwiftUI — Text modifiers" accent={TEAL}>
{`Text("CodePath Mobile")
    .font(.title)              // or .system(size: 24)
    .fontWeight(.bold)
    .italic()
    .foregroundColor(
        Color(red:0.33, green:0.29, blue:0.72)
    )
    .multilineTextAlignment(.center)
    .lineLimit(2)
    .truncationMode(.tail)
    .tracking(1.5)             // letter spacing
    .lineSpacing(8)
    .frame(maxWidth: .infinity)
    .padding(.horizontal, 16)`}
        </CodePane>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, marginTop: 10 }}>
        {[
          { label: "fontSize / .font()", desc: "Size — use sp in Compose, system sizes in SwiftUI" },
          { label: "fontWeight", desc: "Bold, Medium, Light — same concept both platforms" },
          { label: "color / .foregroundColor()", desc: "Text color — CSS-like but platform-specific API" },
          { label: "maxLines / .lineLimit()", desc: "Truncation — prevents text from overflowing layouts" },
        ].map(t => (
          <div key={t.label} style={{ background: GRAY, borderRadius: 6, padding: "8px 10px" }}>
            <code style={{ fontSize: 10, color: PURPLE, display: "block", marginBottom: 3 }}>{t.label}</code>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{t.desc}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── SLIDE 15: Button component ───
  () => (
    <Shell tag="Components" title="The Button component — handling taps" notes="Buttons will feel almost identical to students. The key difference to call out: in Compose the onClick is a lambda in the constructor. In SwiftUI the action is also a closure but it comes before the label. Students get confused by SwiftUI's trailing closure syntax initially — reassure them it becomes natural quickly.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Compose — Button" accent={PURPLE}>
{`// Basic button
Button(onClick = { /* handle tap */ }) {
    Text("Tap me")
}

// Styled button
Button(
    onClick = { counter++ },
    colors = ButtonDefaults.buttonColors(
        containerColor = Color(0xFF534AB7),
        contentColor = Color.White
    ),
    shape = RoundedCornerShape(8.dp),
    modifier = Modifier
        .fillMaxWidth()
        .padding(horizontal = 16.dp)
) {
    Text(
        text = "Submit",
        fontSize = 16.sp,
        fontWeight = FontWeight.Bold
    )
}`}
        </CodePane>
        <CodePane title="SwiftUI — Button" accent={TEAL}>
{`// Basic button
Button("Tap me") {
    // handle tap
}

// Styled button — two approaches:

// 1. Built-in style
Button("Submit") { counter += 1 }
    .buttonStyle(.borderedProminent)
    .tint(Color(red:0.33,green:0.29,blue:0.72))

// 2. Custom label (more control)
Button(action: { counter += 1 }) {
    Text("Submit")
        .font(.headline)
        .foregroundColor(.white)
        .frame(maxWidth: .infinity)
        .padding()
        .background(
            Color(red:0.33,green:0.29,blue:0.72)
        )
        .cornerRadius(8)
}`}
        </CodePane>
      </div>
      <Discussion>{"In both platforms, what is the Button actually doing when you tap it? What part of the code runs? Trace it with a finger."}</Discussion>
    </Shell>
  ),

  // ─── SLIDE 16: Spacer & Divider ───
  () => (
    <Shell tag="Components" title="Spacer and Divider — the unsung heroes" notes="Students overlook these two components and then spend 20 minutes trying to hack spacing with padding. Spacer is the right tool for flexible spacing. Divider/Divider is the right tool for visual separation. Show the difference between padding (fixed) and Spacer (flexible — pushes to fill remaining space).">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 8px" }}>Spacer — flexible gap between items</p>
          <CodePane title="Compose" accent={PURPLE}>
{`Column {
    Text("Top content")
    Spacer(modifier = Modifier.height(16.dp)) // fixed gap
    Text("Bottom content")

    // Or push to bottom:
    Spacer(modifier = Modifier.weight(1f)) // fills remaining space
    Text("Always at bottom")
}`}
          </CodePane>
          <CodePane title="SwiftUI" accent={TEAL}>
{`VStack {
    Text("Top content")
    Spacer().frame(height: 16)  // fixed gap
    Text("Bottom content")

    // Or push to bottom:
    Spacer()  // fills remaining space
    Text("Always at bottom")
}`}
          </CodePane>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 8px" }}>Divider — visual separator line</p>
          <CodePane title="Compose" accent={PURPLE}>
{`Column {
    Text("Section 1")
    HorizontalDivider(
        color = Color(0xFFEEEEEE),
        thickness = 1.dp,
        modifier = Modifier.padding(vertical = 8.dp)
    )
    Text("Section 2")
}`}
          </CodePane>
          <CodePane title="SwiftUI" accent={TEAL}>
{`VStack {
    Text("Section 1")
    Divider()
        .padding(.vertical, 8)
    Text("Section 2")
}`}
          </CodePane>
          <Info>{"Use Spacer() with no size for flexible space that fills whatever is left. Use Spacer with a fixed size for consistent gaps. This is how you push a button to the bottom of a screen."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 17: Live code-along intro ───
  () => (
    <Shell tag="Live code-along" timer="15" title="Let us build together — the profile card" subtitle="Open your IDE now. We build from scratch, mistakes and all." dark notes="This is the centrepiece of the session. Build a brand new project — do NOT use a starter. Make a typo on purpose at some point and show how to read the error message. This is more valuable than a perfect demo.">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>What we are building — step by step</p>
          {[
            { n: 1, t: "New project — ProfileCard" },
            { n: 2, t: "Outer page background (light gray Column)" },
            { n: 3, t: "White card surface with rounded corners" },
            { n: 4, t: "Avatar — Box with CircleShape + initials Text" },
            { n: 5, t: "Name — large bold Text" },
            { n: 6, t: "Tagline — smaller gray Text" },
            { n: 7, t: "HorizontalDivider / Divider" },
            { n: 8, t: "Stats row — Row with 3 StatItem components" },
            { n: 9, t: "Extract StatItem as a reusable component" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "center" }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 56, height: 56, background: TEAL, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 8 }}>CP</div>
          <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: "0 0 2px" }}>Your Name</p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: "0 0 12px" }}>Mobile Dev 2025</p>
          <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 12 }} />
          <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
            {[["0","Projects"],["0","Commits"],["0","PRs"]].map(([v,l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <p style={{ fontSize: 15, fontWeight: 800, color: "#fff", margin: "0 0 2px" }}>{v}</p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", margin: 0 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 18: Code-along part 1 ───
  () => (
    <Shell tag="Live code-along" title="Part 1 — outer layout and card surface" notes="Type this out slowly. Explain every line. When you add the background modifier, show what the screen looks like without it first. The visual before/after makes the purpose of each modifier obvious.">
      <CodePane title="Step 1-3: Page background + card surface" accent={PURPLE}>
{`@Composable
fun ProfileCard() {
    // Outer column = the page background
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5)),   // light gray page
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Inner column = the white card
        Column(
            modifier = Modifier
                .fillMaxWidth(0.85f)             // 85% wide
                .background(
                    color = Color.White,
                    shape = RoundedCornerShape(16.dp)  // rounded!
                )
                .padding(24.dp),                 // breathing room inside
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // Content goes in here — built in the next slides
        }
    }
}`}
      </CodePane>
      <Info>{"Run it now — you should see a white card floating on a gray background. Nothing inside yet. That is fine — we build the inside next."}</Info>
    </Shell>
  ),

  // ─── SLIDE 19: Code-along part 2 ───
  () => (
    <Shell tag="Live code-along" title="Part 2 — avatar and profile text" notes="Walk through Box carefully — students have not seen it before. The contentAlignment parameter on Box is what centers the initials inside the circle. Show what happens without it.">
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Step 4-6: Avatar circle + name + tagline" accent={PURPLE}>
{`// Inside the inner Column:

// Avatar circle
Box(
    modifier = Modifier
        .size(80.dp)
        .background(
            color = Color(0xFF534AB7),
            shape = CircleShape            // makes it a circle!
        ),
    contentAlignment = Alignment.Center    // centers the text
) {
    Text(
        text = "CP",                       // your initials
        color = Color.White,
        fontSize = 28.sp,
        fontWeight = FontWeight.Bold
    )
}

Spacer(modifier = Modifier.height(12.dp))

// Name
Text(
    text = "Your Name",
    fontSize = 22.sp,
    fontWeight = FontWeight.Bold
)

// Tagline
Text(
    text = "Mobile Dev Cohort 2025",
    fontSize = 14.sp,
    color = Color.Gray
)`}
        </CodePane>
        <div style={{ flex: 0.6, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: GRAY, borderRadius: 8, padding: 14, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <div style={{ width: 60, height: 60, background: PURPLE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16 }}>CP</div>
            <p style={{ fontSize: 14, fontWeight: 700, margin: "4px 0 0", color: TEXT }}>Your Name</p>
            <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>Mobile Dev Cohort 2025</p>
          </div>
          <Info>{"Run it again. The card now has an avatar and profile text. Encourage students to change the initials and name to their own."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 20: Code-along part 3 ───
  () => (
    <Shell tag="Live code-along" title="Part 3 — divider and stats row" notes="The StatItem component is the first time students see component extraction — pulling a reusable piece of UI into its own function. Emphasize that this is one of the superpowers of declarative UI: composability. The SwiftUI equivalent is identical in concept.">
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Step 7-9: Divider + stats row + StatItem" accent={PURPLE}>
{`// After tagline, still inside the inner Column:

Spacer(modifier = Modifier.height(16.dp))

HorizontalDivider(
    color = Color(0xFFEEEEEE),
    thickness = 1.dp
)

Spacer(modifier = Modifier.height(16.dp))

// Stats row
Row(
    modifier = Modifier.fillMaxWidth(),
    horizontalArrangement = Arrangement.SpaceEvenly
) {
    StatItem(label = "Projects", value = "3")
    StatItem(label = "Commits", value = "47")
    StatItem(label = "PRs", value = "12")
}

// ─── Extracted reusable component ───
@Composable
fun StatItem(label: String, value: String) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = value,
            fontSize = 20.sp,
            fontWeight = FontWeight.Bold
        )
        Text(
            text = label,
            fontSize = 12.sp,
            color = Color.Gray
        )
    }
}`}
        </CodePane>
        <div style={{ flex: 0.6, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: GRAY, borderRadius: 10, padding: 16, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 52, height: 52, background: PURPLE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 6 }}>CP</div>
            <p style={{ fontSize: 13, fontWeight: 700, margin: "0 0 2px", color: TEXT }}>Your Name</p>
            <p style={{ fontSize: 11, color: MUTED, margin: "0 0 10px" }}>Mobile Dev Cohort 2025</p>
            <div style={{ width: "100%", height: 1, background: "#eee", marginBottom: 10 }} />
            <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
              {[["3","Projects"],["47","Commits"],["12","PRs"]].map(([v,l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 15, fontWeight: 800, margin: "0 0 2px", color: TEXT }}>{v}</p>
                  <p style={{ fontSize: 10, color: MUTED, margin: 0 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
          <Discussion>{"StatItem is used 3 times with different data. What would happen if you wanted to change the font size of all stat values at once? How many places would you change?"}</Discussion>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 21: Side by side final ───
  () => (
    <Shell tag="Comparison" title="The same card — Android and iOS" notes="After showing the full side-by-side, ask students to spot 3 things that are the same and 3 things that are different. Give them 60 seconds to look quietly before calling on anyone. This is a good formative check.">
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Android — Jetpack Compose (full)" accent={PURPLE}>
{`@Composable
fun ProfileCard() {
    Column(
        modifier = Modifier.fillMaxSize()
            .background(Color(0xFFF5F5F5)),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(0.85f)
                .background(Color.White,
                    RoundedCornerShape(16.dp))
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                modifier = Modifier.size(80.dp)
                    .background(Color(0xFF534AB7), CircleShape),
                contentAlignment = Alignment.Center
            ) { Text("CP", color=Color.White,
                fontSize=28.sp, fontWeight=FontWeight.Bold) }
            Spacer(Modifier.height(12.dp))
            Text("Your Name", fontSize=22.sp,
                fontWeight=FontWeight.Bold)
            Text("Mobile Dev 2025", fontSize=14.sp,
                color=Color.Gray)
            Spacer(Modifier.height(16.dp))
            HorizontalDivider(color=Color(0xFFEEEEEE))
            Spacer(Modifier.height(16.dp))
            Row(Modifier.fillMaxWidth(),
                horizontalArrangement=Arrangement.SpaceEvenly) {
                StatItem("Projects","3")
                StatItem("Commits","47")
                StatItem("PRs","12")
            }
        }
    }
}`}
        </CodePane>
        <CodePane title="iOS — SwiftUI (full)" accent={TEAL}>
{`struct ProfileCard: View {
    var body: some View {
        ZStack {
            Color(UIColor.systemGray6)
                .ignoresSafeArea()
            VStack(spacing: 0) {
                Circle()
                    .fill(Color(red:0.33,green:0.29,
                        blue:0.72))
                    .frame(width:80,height:80)
                    .overlay(
                        Text("CP").font(.title)
                            .fontWeight(.bold)
                            .foregroundColor(.white)
                    )
                    .padding(.bottom, 12)
                Text("Your Name")
                    .font(.title2).fontWeight(.bold)
                Text("Mobile Dev 2025")
                    .font(.subheadline)
                    .foregroundColor(.gray)
                Divider().padding(.vertical, 16)
                HStack {
                    StatItem("Projects","3")
                    Spacer()
                    StatItem("Commits","47")
                    Spacer()
                    StatItem("PRs","12")
                }
                .padding(.horizontal, 16)
            }
            .padding(24)
            .background(Color.white)
            .cornerRadius(16)
            .padding(.horizontal, 32)
        }
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // ─── SLIDE 22: Claude partnership ───
  () => (
    <Shell tag="AI tools" timer="5" title="Claude — your official learning partner" subtitle="CodePath has an official partnership with Claude. This is expected and supported." notes="Be explicit about the green/red flag framing. Students are used to being told not to use AI — flip that. The question is not whether to use it, but how. The translation use case is the most powerful and unique to this course. Spend most of this slide on that.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px", textTransform: "uppercase" }}>Use Claude to accelerate learning</p>
          {[
            { icon: "🌐", t: "Translate between Compose and SwiftUI — the core lab pattern" },
            { icon: "🎓", t: "Ask it to explain a concept you missed, in plain English" },
            { icon: "🔍", t: "Debug errors — understand them, not just paste a fix" },
            { icon: "📝", t: "Generate mock data so you focus on layout, not dummy content" },
            { icon: "🤝", t: "Pair programming navigator — asks questions, does not write for you" },
          ].map(r => (
            <div key={r.t} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
              <span style={{ fontSize: 14, flexShrink: 0 }}>{r.icon}</span>
              <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{r.t}</span>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px", textTransform: "uppercase" }}>Do not let Claude replace the learning</p>
          {[
            "Writing your entire project or assignment",
            "Skipping the lab comparison steps",
            "Accepting code you have not read line by line",
            "Replacing trying on your own for 3 minutes first",
          ].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
              <span style={{ color: "#b91c1c", fontWeight: 700, flexShrink: 0 }}>✗</span>
              <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{t}</span>
            </div>
          ))}
          <div style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "8px 12px", marginTop: 8 }}>
            <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>When Claude gives you code with an error — that is a learning opportunity. Paste the error back and ask it to explain what went wrong.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 23: Translation prompt ───
  () => (
    <Shell tag="AI tools" title="The translation prompt — your lab superpower" notes="Show this prompt live in Claude at claude.ai. Paste the ProfileCard code you just built together and run the prompt in front of students. Read the explanation aloud. This demystifies using Claude and shows exactly what good usage looks like.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Use this exact prompt format in today's lab and every lab through Week 5</p>
      <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "16px 18px", margin: "8px 0" }}>
        <p style={{ fontSize: 12, color: "#cdd6f4", fontFamily: "monospace", lineHeight: 1.8, margin: 0 }}>
          {"I am learning mobile development. This is my [Compose / SwiftUI] profile card:"}<br/><br/>
          {"[paste your code here]"}<br/><br/>
          {"Please translate it to [SwiftUI / Compose]. After the code, briefly explain:"}<br/>
          {"1. The 3 biggest structural differences between the two versions"}<br/>
          {"2. One thing that is identical in concept despite different syntax"}<br/>
          {"3. Anything you had to change because the platforms handle it differently"}
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 10 }}>
        {[
          { label: "Do this", text: "Read the explanation before running the code", color: TEAL, bg: TEAL_LIGHT },
          { label: "Do this", text: "Ask a follow-up if part of the explanation is unclear", color: TEAL, bg: TEAL_LIGHT },
          { label: "Avoid this", text: "Copy-pasting the output without reading a single line", color: "#b91c1c", bg: "#fff3f3" },
        ].map(t => (
          <div key={t.text} style={{ background: t.bg, borderRadius: 8, padding: "10px 12px", border: `1px solid ${t.color}33` }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: t.color, margin: "0 0 4px", textTransform: "uppercase" }}>{t.label}</p>
            <p style={{ fontSize: 12, color: TEXT, margin: 0, lineHeight: 1.4 }}>{t.text}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── SLIDE 24: Lecture recap ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Recap · 5 min</Tag></div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Before we break — what did we cover?</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Take 60 seconds to think back before the answers appear</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What we covered today</p>
            {[
              "Declarative vs imperative UI — UI = f(state)",
              "Composable functions and SwiftUI Views",
              "Column/Row/Box and VStack/HStack/ZStack",
              "Modifiers, Text, Button, Spacer, Divider",
              "Lambdas and closures — { } in UI code",
              "How to use Claude as a learning tool — not a crutch",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Session 2</p>
            {[
              "What is state — and why does declarative UI need it?",
              "remember / @State — making UI interactive",
              "Conditional UI — show/hide based on state",
              "Building a tap counter with a milestone system",
              "Your first fully interactive mobile app",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>{"Ask students to call out what they remember before revealing the list — makes it active recall, not passive reading. Keep this to 3-4 minutes, then move to the break slide. Survey comes after lab."}</Notes>
    </div>
  ),

  // ─── SLIDE 25: Break ───
  () => (
    <div style={{ background: GRAY, border: "1px solid #e5e7eb", borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", textAlign: "center" }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>☕</div>
      <Tag>5 minute break</Tag>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: TEXT, margin: "16px 0 8px" }}>Take a break</h2>
      <p style={{ fontSize: 15, color: MUTED, margin: "0 0 28px", maxWidth: 400, lineHeight: 1.6 }}>Stretch, grab water, get comfortable. Lab starts in 5 minutes.</p>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 10, padding: "14px 24px", maxWidth: 380 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 6px" }}>While you wait — open your IDE</p>
        <p style={{ fontSize: 12, color: PURPLE, margin: 0, lineHeight: 1.5 }}>Start the emulator or simulator now so it is ready when lab begins. First boot can take a few minutes.</p>
      </div>
      <Notes>{"Leave this slide up for the full 5 minutes. Walk around, answer quick questions informally. Do not start the lab until the timer is up — students need the mental reset."}</Notes>
    </div>
  ),

  // ─── SLIDE 26: Lab intro ───
  () => (
    <Shell tag="Lab intro" timer="5" title="Lab time — what you are building" subtitle="You have ~50 minutes. Go to the Lab tab on the course site." notes="Keep this brief — students are eager to code. Walk through the steps in 2 minutes, emphasize the reflection requirement, and remind them a TA will check their work before they leave. Emulator should already be booting from the break slide.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Lab steps — Session 1</p>
          {[
            { n: 0, t: "Set up ProfileCard project", time: "5 min" },
            { n: 1, t: "Name centered on screen", time: "8 min" },
            { n: 2, t: "Avatar circle with initials", time: "8 min" },
            { n: 3, t: "Full card — background, divider, stats", time: "10 min" },
            { n: 4, t: "Ask Claude to translate it", time: "8 min" },
            { n: 5, t: "Make one change Claude did not make", time: "8 min" },
            { n: 6, t: "Written reflection — 3 questions", time: "5 min" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "4px 0", alignItems: "center" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: 4, fontSize: 10, fontWeight: 700, padding: "1px 5px", flexShrink: 0 }}>Step {s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, flex: 1 }}>{s.t}</span>
              <span style={{ fontSize: 11, color: MUTED, flexShrink: 0 }}>{s.time}</span>
            </div>
          ))}
        </div>
        <div style={{ background: GRAY, borderRadius: 10, padding: 14 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Getting unblocked</p>
          <div style={{ display: "flex", gap: 6, margin: "5px 0", alignItems: "flex-start" }}>
            <span style={{ color: PURPLE, fontWeight: 700, flexShrink: 0 }}>1.</span>
            <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.4 }}>Check the Lab tab on the course site</span>
          </div>
          <div style={{ display: "flex", gap: 6, margin: "5px 0", alignItems: "flex-start" }}>
            <span style={{ color: PURPLE, fontWeight: 700, flexShrink: 0 }}>2.</span>
            <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.4 }}>Ask a TA</span>
          </div>
          <div style={{ display: "flex", gap: 6, margin: "5px 0", alignItems: "flex-start" }}>
            <span style={{ color: PURPLE, fontWeight: 700, flexShrink: 0 }}>3.</span>
            <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.4 }}>Ask Claude — in that order</span>
          </div>
          <div style={{ marginTop: 12, background: PURPLE_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>Assignment 1 is due one week from now — a profile screen built independently.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 27: Post-lab recap + survey ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Wrap-up · 5 min</Tag></div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Great work today</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Take a moment to reflect, then fill out the session survey</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Reflection prompts</p>
            {[
              "What was the most surprising thing you learned today?",
              "Where did you get stuck — and how did you get unstuck?",
              "What's one thing you want to understand better next session?",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "8px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0, marginTop: 2 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Fill out the session survey</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: "0 0 10px" }}>Takes 2 minutes. Instructors read every response — your feedback shapes next week.</p>
            <div style={{ background: TEAL, borderRadius: 8, padding: "10px 14px", textAlign: "center" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: 0 }}>Session Survey</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", margin: "4px 0 0" }}>Link posted in Slack / course portal</p>
            </div>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: "10px 0 0", lineHeight: 1.5 }}>Assignment 1 is due one week from now — a profile screen built independently.</p>
          </div>
        </div>
      </div>
      <Notes>{"Give students 2-3 minutes to quietly reflect before filling out the survey. Read out the survey link and confirm it is posted in Slack. End with energy — remind them they just built a working mobile app on two platforms on day one."}</Notes>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 1 · Session 1 · {slides.length} slides</p>
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
