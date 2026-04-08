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

const Shell = ({ tag, tagColor = "teal", timer, title, subtitle, children, notes }) => (
  <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px 22px", minHeight: 340 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag color="purple">Week 9 · S2</Tag>
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

// Platform column header used on side-by-side slides
const PlatformHeader = ({ platform }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 6, marginBottom: 8,
    background: platform === "android" ? BLUE_LIGHT : GREEN_LIGHT,
    borderRadius: 6, padding: "4px 10px", width: "fit-content",
  }}>
    <span style={{ fontSize: 13 }}>{platform === "android" ? "🤖" : "🍎"}</span>
    <span style={{ fontSize: 11, fontWeight: 700, color: platform === "android" ? BLUE : GREEN, textTransform: "uppercase", letterSpacing: ".05em" }}>
      {platform === "android" ? "Android" : "iOS"}
    </span>
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
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 9 · Session 2 · Phase 3</p>
        <h1 style={{ fontSize: 30, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.2 }}>App performance</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Jank · Memory leaks · Battery drain · Profiling · AI scanning</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "The three mobile performance problems and what causes them",
            "Jank — dropped frames and main thread work",
            "Memory leaks — lingering references and how they grow",
            "Battery drain — unnecessary background work",
            "Android Studio Profiler vs Xcode Instruments — side by side",
            "LeakCanary (Android) · Memory Graph + Instruments Leaks (iOS)",
            "Common fixes — before and after code pairs",
            "Using AI to scan your codebase for performance issues",
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
    <Shell tag="Agenda" title="Today's session — 2 hours" notes="Today's lecture is self-contained learning. It doesn't connect to a lab deliverable — lab time is capstone work. Make that clear up front so students aren't waiting for a lab handout. The goal for the lecture: they leave knowing how to open the profiler and what to look for. The AI scanning section near the end is actionable for their capstone immediately.">
      {[
        { time: "0:00–0:05",  label: "Hook",                    desc: "Performance issues don't crash apps — they lose users", section: null },
        { time: "0:05–0:15",  label: "The three problems",       desc: "Jank, memory leaks, and battery drain — causes and symptoms", section: null },
        { time: "0:15–0:28",  label: "Profiling tools",          desc: "Android Studio Profiler · Xcode Instruments — key tabs side by side", section: null },
        { time: "0:28–0:38",  label: "Leak detection",           desc: "LeakCanary (Android) · Memory Graph + Instruments Leaks (iOS)", section: null },
        { time: "0:38–0:48",  label: "Common fixes",             desc: "Before/after code pairs for the most frequent issues", section: null },
        { time: "0:48–0:55",  label: "AI performance scanner",   desc: "Using Claude to scan your codebase — concept + example prompt", section: "ai" },
        { time: "0:55–1:00",  label: "Break",                    desc: "5 minutes", section: "break" },
        { time: "1:00–2:00",  label: "Lab — capstone work session", desc: "Full TA support · M4 due end of session", section: "lab" },
        { time: "2:00–2:10",  label: "Wrap-up + survey",         desc: "Week 10 preview: demo day", section: "wrapup" },
      ].map(r => (
        <div key={r.time} style={{
          display: "flex", gap: 12, padding: "7px 8px",
          borderBottom: `0.5px solid ${GRAY}`,
          background: r.section === "ai" ? PURPLE_LIGHT : r.section === "lab" ? TEAL_LIGHT : r.section === "wrapup" ? AMBER_LIGHT : r.section === "break" ? GRAY : "transparent",
          borderRadius: r.section ? 6 : 0,
        }}>
          <span style={{ fontSize: 11, minWidth: 90, flexShrink: 0, color: r.section === "ai" ? PURPLE_DARK : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? AMBER_DARK : MUTED }}>{r.time}</span>
          <span style={{ fontSize: 12, fontWeight: 600, minWidth: 170, flexShrink: 0, color: r.section === "ai" ? PURPLE_DARK : r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? AMBER_DARK : PURPLE }}>{r.label}</span>
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
    <Shell tag="Hook" timer="5" title="Performance issues don't crash apps" subtitle="They just make users leave"
      notes="Unlike crashes, performance problems are silent. The app technically works. No error log, no stack trace. The user just taps somewhere, waits a beat too long, and decides this app isn't worth their time. This is the hardest category of bug to notice during development — you know what's coming, you tap confidently, and you attribute the lag to your emulator. Real users on real devices in real network conditions experience it differently. The capstone context makes this land: they're about to demo to a live audience.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ background: RED_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: RED, margin: "0 0 10px" }}>What a crash looks like</p>
          <div style={{ fontSize: 12, color: RED, lineHeight: 1.9 }}>
            <div>App freezes mid-action.</div>
            <div>System dialog: "App has stopped."</div>
            <div>Stack trace in Logcat / Xcode console.</div>
            <div style={{ marginTop: 8, fontWeight: 600 }}>You know immediately. You fix it.</div>
          </div>
        </div>
        <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: AMBER_DARK, margin: "0 0 10px" }}>What a performance issue looks like</p>
          <div style={{ fontSize: 12, color: AMBER_DARK, lineHeight: 1.9 }}>
            <div>List scrolls but feels slightly sticky.</div>
            <div>Screen takes 600ms to load instead of 100ms.</div>
            <div>App memory climbs slowly over 20 minutes.</div>
            <div style={{ marginTop: 8, fontWeight: 600 }}>No crash. No error. Just a feeling.</div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 12 }}>
        {[
          { stat: "100ms", label: "Users perceive this as \"instant\"", color: TEAL_LIGHT, fg: TEAL_DARK },
          { stat: "300ms", label: "Users notice a slight delay", color: AMBER_LIGHT, fg: AMBER_DARK },
          { stat: "1000ms", label: "53% of users abandon a slow mobile page", color: RED_LIGHT, fg: RED },
        ].map(s => (
          <div key={s.stat} style={{ background: s.color, borderRadius: 8, padding: "10px 12px", textAlign: "center" }}>
            <p style={{ fontSize: 22, fontWeight: 700, color: s.fg, margin: "0 0 4px" }}>{s.stat}</p>
            <p style={{ fontSize: 11, color: s.fg, margin: 0, lineHeight: 1.4 }}>{s.label}</p>
          </div>
        ))}
      </div>
      <Notes>{"Source for the 53% stat: Google/Deloitte Mobile Speed study (2018). The 100ms / 300ms thresholds are from Jakob Nielsen's response time research, widely cited in mobile UX literature."}</Notes>
    </Shell>
  ),

  // 4 — The three problems
  () => (
    <Shell tag="Concept" timer="6" title="The three mobile performance problems" subtitle="Different causes, different tools, different fixes"
      notes="Spend equal time on all three at a conceptual level before going deep on any one of them. Students often conflate jank and lag — jank specifically means dropped frames (the UI rendering pipeline missing its 16ms deadline), not just slowness. Memory leaks are the sneakiest — the app works fine for the first 5 minutes, then gets slower and slower. Battery drain often goes unnoticed entirely until a user complains.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          {
            icon: "🎞️", title: "Jank", color: RED_LIGHT, fg: RED,
            cause: "Work on the main thread",
            symptom: "Scrolling stutters, animations skip frames, taps feel unresponsive",
            rule: "16ms budget per frame at 60fps. Miss it → dropped frame → visible stutter.",
            fix: "Move heavy work to a background thread / coroutine",
          },
          {
            icon: "🧠", title: "Memory leaks", color: AMBER_LIGHT, fg: AMBER_DARK,
            cause: "Lingering references to destroyed objects",
            symptom: "App gets slower over time, eventually crashes with OutOfMemoryError or is killed by the OS",
            rule: "A leaked object is one the GC can't free because something still holds a reference to it.",
            fix: "Cancel coroutines/Tasks, use weak refs, respect lifecycle",
          },
          {
            icon: "🔋", title: "Battery drain", color: GREEN_LIGHT, fg: GREEN,
            cause: "Unnecessary work when the app is backgrounded",
            symptom: "Users notice the app drains battery even when not actively using it",
            rule: "If you're doing CPU or network work and the user isn't looking at your app — stop.",
            fix: "Cancel on lifecycle events, use subscriptions not polling",
          },
        ].map(item => (
          <div key={item.title} style={{ background: item.color, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 20, margin: "0 0 6px" }}>{item.icon}</p>
            <p style={{ fontSize: 14, fontWeight: 700, color: item.fg, margin: "0 0 8px" }}>{item.title}</p>
            <p style={{ fontSize: 10, fontWeight: 600, color: item.fg, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em", opacity: .7 }}>Cause</p>
            <p style={{ fontSize: 11, color: item.fg, margin: "0 0 8px", lineHeight: 1.4 }}>{item.cause}</p>
            <p style={{ fontSize: 10, fontWeight: 600, color: item.fg, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em", opacity: .7 }}>Symptom</p>
            <p style={{ fontSize: 11, color: item.fg, margin: "0 0 8px", lineHeight: 1.4 }}>{item.symptom}</p>
            <p style={{ fontSize: 10, fontWeight: 600, color: item.fg, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em", opacity: .7 }}>The rule</p>
            <p style={{ fontSize: 11, color: item.fg, margin: "0 0 8px", lineHeight: 1.4, fontStyle: "italic" }}>{item.rule}</p>
            <p style={{ fontSize: 10, fontWeight: 700, color: item.fg, margin: "0 0 2px", textTransform: "uppercase", letterSpacing: ".05em" }}>Fix direction</p>
            <p style={{ fontSize: 11, color: item.fg, margin: 0, lineHeight: 1.4, fontWeight: 600 }}>{item.fix}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 5 — Jank deep dive
  () => (
    <Shell tag="Concept" timer="5" title="Jank — the 16ms budget" subtitle="Every frame has a deadline. Miss it and the user feels it."
      notes="Draw the timeline on a whiteboard as you explain it. At 60fps, the rendering pipeline has exactly 16.67ms to calculate layout, draw, and composite every frame. Any work done on the main thread eats into this budget. A network call that takes 300ms on the main thread means 18 dropped frames — visible to the human eye as a stutter. The fix is always the same: get the work off the main thread.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Why 16ms?</p>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              {["60fps", "90fps", "120fps"].map(fps => (
                <div key={fps} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 16, fontWeight: 700, color: PURPLE, margin: "0 0 2px" }}>{fps}</p>
                  <p style={{ fontSize: 10, color: MUTED, margin: 0 }}>= {fps === "60fps" ? "16.7" : fps === "90fps" ? "11.1" : "8.3"}ms/frame</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>Modern phones run at 90–120fps. The budget per frame shrinks as refresh rate increases.</p>
          </div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Common main-thread offenders</p>
          {[
            { bad: "Network call on main thread", eg: "repository.fetch() without a coroutine" },
            { bad: "Database read on main thread", eg: "Room/SwiftData query in the View" },
            { bad: "Image decode in the UI", eg: "BitmapFactory.decodeFile() in a Composable" },
            { bad: "Large JSON parse on main thread", eg: "JSONDecoder on a 5MB payload" },
          ].map(item => (
            <div key={item.bad} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "flex-start" }}>
              <span style={{ color: RED, fontWeight: 700, fontSize: 12, flexShrink: 0 }}>✗</span>
              <div>
                <p style={{ fontSize: 12, color: TEXT, margin: 0, fontWeight: 500 }}>{item.bad}</p>
                <p style={{ fontSize: 11, color: MUTED, margin: 0, fontFamily: "monospace" }}>{item.eg}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>What a janky frame timeline looks like</p>
          <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "12px 14px", marginBottom: 10, fontFamily: "monospace", fontSize: 11, lineHeight: 1.8 }}>
            <div style={{ color: "#6EE7B7" }}>Frame 1:  ▓░░░░░░░░░░  12ms ✓</div>
            <div style={{ color: "#6EE7B7" }}>Frame 2:  ▓░░░░░░░░░░  13ms ✓</div>
            <div style={{ color: "#FCA5A5" }}>Frame 3:  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  42ms ✗ DROPPED</div>
            <div style={{ color: "#6EE7B7" }}>Frame 4:  ▓░░░░░░░░░░  11ms ✓</div>
            <div style={{ color: "#FCA5A5" }}>Frame 5:  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  33ms ✗ DROPPED</div>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>The fix direction</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, color: BLUE, margin: "0 0 3px", textTransform: "uppercase" }}>Android</p>
                <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Use <span style={{ fontFamily: "monospace" }}>Dispatchers.IO</span> for disk/network. Use <span style={{ fontFamily: "monospace" }}>Dispatchers.Default</span> for CPU-heavy work. Never block the main dispatcher.</p>
              </div>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, color: GREEN, margin: "0 0 3px", textTransform: "uppercase" }}>iOS</p>
                <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Use <span style={{ fontFamily: "monospace" }}>Task.detached</span> for CPU work. Mark ViewModels <span style={{ fontFamily: "monospace" }}>@MainActor</span> but fetch data off it using <span style={{ fontFamily: "monospace" }}>await</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 6 — Memory leaks deep dive
  () => (
    <Shell tag="Concept" timer="5" title="Memory leaks — the slow killer" subtitle="The app works fine for 5 minutes. Then it doesn't."
      notes="Memory leaks are insidious because they're invisible during development — the session is usually too short to show symptoms. The symptom is gradual: memory climbs, GC pauses get longer, the app gets sluggish, eventually the OS kills it. The most important concept here is the reference chain: something keeps a reference to something that should be dead. Walk through the Android vs iOS root causes — they're different enough to be worth explaining separately.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <PlatformHeader platform="android" />
          <p style={{ fontSize: 12, color: TEXT, margin: "0 0 8px", lineHeight: 1.5 }}>Android GC reclaims memory automatically — but only if no living object holds a reference to the dead one.</p>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 6px" }}>Most common causes</p>
          {[
            { cause: "Static field holds a reference to an Activity or View", why: "Static fields live for the entire process lifetime. An Activity that gets destroyed is never collected." },
            { cause: "Anonymous listener not unregistered", why: "The listener holds an implicit reference to the outer class (often an Activity). If the Activity is destroyed before the listener fires, it leaks." },
            { cause: "Coroutine launched in GlobalScope", why: "GlobalScope lives forever. If it captures a ViewModel or Activity reference, that object is kept alive indefinitely." },
          ].map(item => (
            <div key={item.cause} style={{ background: RED_LIGHT, borderRadius: 6, padding: "8px 10px", margin: "6px 0" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: RED, margin: "0 0 2px" }}>✗ {item.cause}</p>
              <p style={{ fontSize: 11, color: RED, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{item.why}</p>
            </div>
          ))}
        </div>
        <div>
          <PlatformHeader platform="ios" />
          <p style={{ fontSize: 12, color: TEXT, margin: "0 0 8px", lineHeight: 1.5 }}>iOS uses ARC (Automatic Reference Counting) — objects are freed when their reference count hits zero. Leaks happen when two objects each hold a strong reference to the other.</p>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 6px" }}>Most common causes</p>
          {[
            { cause: "Strong self capture in a closure", why: "Closures capture self strongly by default. If the closure outlives the object (e.g. stored in a ViewModel), self is never released." },
            { cause: "Delegate not declared weak", why: "If a View holds a strong reference to a delegate (ViewController/ViewModel) and vice versa, neither can be freed." },
            { cause: "Timer not invalidated", why: "Timer holds a strong reference to its target. If not invalidated before the owning object disappears, the target leaks." },
          ].map(item => (
            <div key={item.cause} style={{ background: RED_LIGHT, borderRadius: 6, padding: "8px 10px", margin: "6px 0" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: RED, margin: "0 0 2px" }}>✗ {item.cause}</p>
              <p style={{ fontSize: 11, color: RED, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{item.why}</p>
            </div>
          ))}
        </div>
      </div>
      <Discussion>{"If a ViewModel is leaked, what else might it keep alive? Think about the chain: ViewModel → Repository → OkHttpClient → open network connections."}</Discussion>
    </Shell>
  ),

  // 7 — Profiling tools overview
  () => (
    <Shell tag="Tools" timer="5" title="Profiling tools — your two instruments" subtitle="You can't fix what you can't measure"
      notes="Students have probably never opened the profiler. That's the most common situation — developers write code, it runs fine on their machine, they ship. Emphasise: the profiler is not a 'debugging' tool for emergencies. It's a routine development tool, like git. The goal today is for students to know where it is and what each tab tells them, so when they need it they don't have to figure it out under pressure.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <PlatformHeader platform="android" />
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: BLUE, margin: "0 0 6px" }}>Android Studio Profiler</p>
            <p style={{ fontSize: 12, color: BLUE, margin: "0 0 10px", lineHeight: 1.5 }}>Built into Android Studio. Open while your app is running:</p>
            <p style={{ fontSize: 11, fontFamily: "monospace", color: BLUE, background: "rgba(0,0,0,0.08)", padding: "4px 8px", borderRadius: 4, margin: "0 0 10px" }}>View → Tool Windows → Profiler</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { tab: "CPU", icon: "⚡", desc: "Which methods run on the main thread and for how long" },
                { tab: "Memory", icon: "🧠", desc: "Heap size over time — leaks show as upward-only trends" },
                { tab: "Energy", icon: "🔋", desc: "CPU and network usage relative to battery impact" },
              ].map(t => (
                <div key={t.tab} style={{ display: "flex", gap: 8, background: "rgba(255,255,255,0.5)", borderRadius: 6, padding: "6px 8px" }}>
                  <span style={{ fontSize: 14, flexShrink: 0 }}>{t.icon}</span>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: BLUE }}>{t.tab} tab — </span>
                    <span style={{ fontSize: 11, color: BLUE }}>{t.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <PlatformHeader platform="ios" />
          <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: GREEN, margin: "0 0 6px" }}>Xcode Instruments</p>
            <p style={{ fontSize: 12, color: GREEN, margin: "0 0 10px", lineHeight: 1.5 }}>Separate app launched from Xcode:</p>
            <p style={{ fontSize: 11, fontFamily: "monospace", color: GREEN, background: "rgba(0,0,0,0.08)", padding: "4px 8px", borderRadius: 4, margin: "0 0 10px" }}>Product → Profile (⌘I) → choose a template</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { tab: "Time Profiler", icon: "⚡", desc: "CPU usage broken down by function — find main thread work" },
                { tab: "Leaks", icon: "🧠", desc: "Automatically detects objects that can never be freed" },
                { tab: "Allocations", icon: "📊", desc: "Every object allocation — find what's piling up" },
              ].map(t => (
                <div key={t.tab} style={{ display: "flex", gap: 8, background: "rgba(255,255,255,0.5)", borderRadius: 6, padding: "6px 8px" }}>
                  <span style={{ fontSize: 14, flexShrink: 0 }}>{t.icon}</span>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: GREEN }}>{t.tab} — </span>
                    <span style={{ fontSize: 11, color: GREEN }}>{t.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: GRAY, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
        <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>
          <strong>Rule of thumb:</strong> open the profiler after adding any feature that touches the network, camera, database, or a large list. Don{"'"}t wait until the app feels slow.
        </p>
      </div>
    </Shell>
  ),

  // 8 — CPU profiling side-by-side
  () => (
    <Shell tag="Tools" timer="6" title="Finding jank — CPU profiling" subtitle="Android Studio CPU tab · Xcode Time Profiler"
      notes="Walk through each side. The goal is not to make students experts — it's to remove the intimidation factor. The profiler looks complex but the workflow is always the same: start recording, do the thing that feels slow, stop recording, find the tall bar on the main thread. That bar is the problem. Click into it to see which function caused it.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <PlatformHeader platform="android" />
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: BLUE, margin: "0 0 8px" }}>CPU Profiler workflow</p>
            {[
              { step: "1", action: "Click the CPU row in the Profiler" },
              { step: "2", action: "Select 'Callstack Sample Recording' → Record" },
              { step: "3", action: "Scroll your list, navigate between screens, do the action that feels slow" },
              { step: "4", action: "Stop recording" },
              { step: "5", action: "Look for tall orange bars in the main thread lane" },
              { step: "6", action: "Click a bar → expand the call tree → find your code" },
            ].map(s => (
              <div key={s.step} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: BLUE, minWidth: 16 }}>{s.step}.</span>
                <span style={{ fontSize: 11, color: BLUE }}>{s.action}</span>
              </div>
            ))}
            <div style={{ background: "rgba(0,0,0,0.08)", borderRadius: 6, padding: "8px 10px", marginTop: 8 }}>
              <p style={{ fontSize: 11, color: BLUE, margin: 0, lineHeight: 1.5 }}><strong>What to look for:</strong> any frame that takes {">"} 16ms in the main thread. Your package name appearing in a long call stack on the main thread.</p>
            </div>
          </div>
        </div>
        <div>
          <PlatformHeader platform="ios" />
          <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: GREEN, margin: "0 0 8px" }}>Time Profiler workflow</p>
            {[
              { step: "1", action: "Product → Profile (⌘I) → select Time Profiler" },
              { step: "2", action: "Hit Record (⌘R)" },
              { step: "3", action: "Scroll your list, navigate, do the action that feels slow" },
              { step: "4", action: "Stop recording (⌘R again)" },
              { step: "5", action: "Look for tall spikes in the CPU track" },
              { step: "6", action: "Click a spike → expand the call tree → find your app's frames" },
            ].map(s => (
              <div key={s.step} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: GREEN, minWidth: 16 }}>{s.step}.</span>
                <span style={{ fontSize: 11, color: GREEN }}>{s.action}</span>
              </div>
            ))}
            <div style={{ background: "rgba(0,0,0,0.08)", borderRadius: 6, padding: "8px 10px", marginTop: 8 }}>
              <p style={{ fontSize: 11, color: GREEN, margin: 0, lineHeight: 1.5 }}><strong>What to look for:</strong> your module appearing in long call stacks on the main thread. Filter by your app name to hide system frames.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
        <p style={{ fontSize: 12, color: AMBER_DARK, margin: 0, lineHeight: 1.5 }}>
          <strong>Tip:</strong> profile on a real device, not the emulator or Simulator. The emulator shares your laptop{"'"}s CPU — it will mask performance problems that real low-end devices expose.
        </p>
      </div>
    </Shell>
  ),

  // 9 — Memory profiling side-by-side
  () => (
    <Shell tag="Tools" timer="6" title="Finding memory leaks — the heap over time" subtitle="Android Memory Profiler · Xcode Instruments Leaks"
      notes="The visual pattern for a memory leak is consistent across both platforms: heap memory that goes up when you open a screen, but doesn't come back down when you close it. A healthy app's memory looks like a sawtooth — up and down as screens open and close. A leaking app's memory is a staircase — each screen navigation adds memory that is never reclaimed. Have students think about their capstone: if they open and close the main screen 10 times, does memory go up by 10x?">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <PlatformHeader platform="android" />
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: BLUE, margin: "0 0 8px" }}>Memory Profiler workflow</p>
            {[
              { step: "1", action: "Click the Memory row in the Profiler" },
              { step: "2", action: "Navigate around your app — open and close screens" },
              { step: "3", action: "Watch the heap line. Healthy: up-and-down. Leaking: staircase." },
              { step: "4", action: "If it only climbs: click 'Capture heap dump'" },
              { step: "5", action: "In the heap dump, look for Activity or Fragment entries — they should not be there after navigation" },
            ].map(s => (
              <div key={s.step} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: BLUE, minWidth: 16 }}>{s.step}.</span>
                <span style={{ fontSize: 11, color: BLUE }}>{s.action}</span>
              </div>
            ))}
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              <div style={{ flex: 1, background: "rgba(0,0,0,0.06)", borderRadius: 5, padding: "6px 8px" }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: BLUE, margin: "0 0 2px" }}>Healthy</p>
                <div style={{ fontFamily: "monospace", fontSize: 10, color: BLUE }}>↑↓↑↓↑↓ (sawtooth)</div>
              </div>
              <div style={{ flex: 1, background: "rgba(0,0,0,0.06)", borderRadius: 5, padding: "6px 8px" }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: RED, margin: "0 0 2px" }}>Leaking</p>
                <div style={{ fontFamily: "monospace", fontSize: 10, color: RED }}>↑→↑→↑→ (staircase)</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <PlatformHeader platform="ios" />
          <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: GREEN, margin: "0 0 8px" }}>Instruments Leaks workflow</p>
            {[
              { step: "1", action: "Product → Profile → select Leaks template" },
              { step: "2", action: "Hit Record — Instruments starts two tracks: Allocations and Leaks" },
              { step: "3", action: "Navigate around the app — open and close screens" },
              { step: "4", action: "Watch the Leaks track for red markers" },
              { step: "5", action: "Click a red marker → see the object type and the reference chain keeping it alive" },
            ].map(s => (
              <div key={s.step} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: GREEN, minWidth: 16 }}>{s.step}.</span>
                <span style={{ fontSize: 11, color: GREEN }}>{s.action}</span>
              </div>
            ))}
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              <div style={{ flex: 1, background: "rgba(0,0,0,0.06)", borderRadius: 5, padding: "6px 8px" }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: GREEN, margin: "0 0 2px" }}>No leaks</p>
                <div style={{ fontFamily: "monospace", fontSize: 10, color: GREEN }}>Leaks track: empty</div>
              </div>
              <div style={{ flex: 1, background: "rgba(0,0,0,0.06)", borderRadius: 5, padding: "6px 8px" }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: RED, margin: "0 0 2px" }}>Leaks found</p>
                <div style={{ fontFamily: "monospace", fontSize: 10, color: RED }}>Leaks track: 🔴 markers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 10 — LeakCanary vs Memory Graph Debugger
  () => (
    <Shell tag="Tools" timer="6" title="Automated leak detection" subtitle="LeakCanary (Android) · Memory Graph Debugger (iOS)"
      notes="LeakCanary is a game-changer because it requires zero effort to interpret. It sends a notification to the device with a human-readable description of the leak and the exact reference chain causing it. Students should add it to every Android project from day one. The iOS Memory Graph Debugger is similarly approachable — it's built into Xcode and requires no configuration. The purple warning triangle is the key visual to know.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <PlatformHeader platform="android" />
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: BLUE, margin: "0 0 6px" }}>LeakCanary</p>
            <p style={{ fontSize: 11, color: BLUE, margin: "0 0 8px", lineHeight: 1.5 }}>Add one line. That{"'"}s it. LeakCanary installs itself via a ContentProvider — no initialisation code needed.</p>
            <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "8px 10px", marginBottom: 10 }}>
              <p style={{ fontSize: 10, color: "#6b7280", margin: "0 0 4px", fontFamily: "monospace" }}>build.gradle.kts (app)</p>
              <pre style={{ margin: 0, fontSize: 11, fontFamily: "monospace", color: "#cdd6f4", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{`debugImplementation(
  "com.squareup.leakcanary:leakcanary-android:2.12"
)`}</pre>
            </div>
            <p style={{ fontSize: 11, color: BLUE, margin: "0 0 6px", fontWeight: 600 }}>What a LeakCanary notification looks like</p>
            <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "8px 10px", fontFamily: "monospace", fontSize: 10, color: "#cdd6f4", lineHeight: 1.8 }}>
              <div>{"┬─── GC Root: Thread"}</div>
              <div>{"│"}</div>
              <div>{"├─ AlbumListScreen (Leaking: YES)"}</div>
              <div>{"│    ↓ AlbumListScreen.viewModel"}</div>
              <div>{"│"}</div>
              <div>{"├─ AlbumViewModel (Leaking: YES)"}</div>
              <div>{"│    ↓ AlbumViewModel.listener"}</div>
              <div>{"│"}</div>
              <div style={{ color: "#f87171" }}>{"╰→ NetworkCallback (leaked)"}</div>
            </div>
            <p style={{ fontSize: 11, color: BLUE, margin: "8px 0 0", lineHeight: 1.5 }}>Read bottom-up: the last line is the leaked object. The arrows show what{"'"}s keeping it alive.</p>
          </div>
        </div>
        <div>
          <PlatformHeader platform="ios" />
          <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: GREEN, margin: "0 0 6px" }}>Memory Graph Debugger</p>
            <p style={{ fontSize: 11, color: GREEN, margin: "0 0 8px", lineHeight: 1.5 }}>Built into Xcode. No setup required. Run during a debug session — shows every live object and the references between them.</p>
            <p style={{ fontSize: 11, color: GREEN, margin: "0 0 6px", fontWeight: 600 }}>How to open it</p>
            <p style={{ fontSize: 11, fontFamily: "monospace", color: GREEN, background: "rgba(0,0,0,0.08)", padding: "4px 8px", borderRadius: 4, margin: "0 0 10px" }}>Debug → View Memory Graph Hierarchy</p>
            <p style={{ fontSize: 11, color: GREEN, margin: "0 0 6px", fontWeight: 600 }}>What to look for</p>
            {[
              { icon: "🟣", label: "Purple triangle", desc: "Xcode detected a retain cycle. Click it to see the cycle." },
              { icon: "📦", desc: "Your class appearing multiple times when it should appear once (e.g. 10 instances of AlbumViewModel after navigating back 10 times)", label: "Multiple instances" },
              { icon: "→", label: "Reference chain", desc: "Follow the arrows to find which object is holding the leaked one alive." },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 8, margin: "6px 0", alignItems: "flex-start" }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, color: GREEN, margin: "0 0 1px" }}>{item.label}</p>
                  <p style={{ fontSize: 11, color: GREEN, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 11 — Common fixes side-by-side
  () => (
    <Shell tag="Fixes" timer="7" title="Common fixes — the patterns that come up repeatedly" subtitle="Before and after — Android and iOS side by side"
      notes="Pick two or three of these to explain in detail — don't rush through all of them. The most important one for students to internalise is the coroutine scope fix, because GlobalScope is a very common mistake that LeakCanary will catch. The lazy list fix is also immediately actionable since most capstone apps have lists.">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          {
            problem: "Coroutine / Task not cancelled when screen disappears",
            android: { bad: `// ❌ GlobalScope never cancels\nGlobalScope.launch {\n  val data = repo.fetch()\n  _state.value = Success(data)\n}`, good: `// ✅ viewModelScope cancels\n//    when ViewModel clears\nviewModelScope.launch {\n  val data = repo.fetch()\n  _state.value = Success(data)\n}` },
            ios: { bad: `// ❌ Task in onAppear is never\n//    cancelled\n.onAppear {\n  Task { await vm.load() }\n}`, good: `// ✅ .task cancels automatically\n//    when view disappears\n.task {\n  await vm.load()\n}` },
          },
          {
            problem: "Strong self capture causing a retain cycle (iOS) / static context reference (Android)",
            android: { bad: `// ❌ Inner class holds Activity ref\nclass MyActivity : AppCompatActivity() {\n  val handler = object : Handler() {\n    override fun handleMessage(msg: Message) {\n      // implicit ref to MyActivity\n      updateUI(msg)\n    }\n  }\n}`, good: `// ✅ Use a WeakReference or\n//    lifecycle-aware alternative\nclass MyCallback(\n  activity: WeakReference<MyActivity>\n) : Handler.Callback { ... }` },
            ios: { bad: `// ❌ Strong capture — ViewModel\n//    is never released\nviewModel.onComplete = {\n  self.updateUI()  // strong self\n}`, good: `// ✅ Weak capture — cycle broken\nviewModel.onComplete = {\n  [weak self] in\n  self?.updateUI()\n}` },
          },
          {
            problem: "Long list rendered all at once instead of lazily",
            android: { bad: `// ❌ Column renders ALL items\nColumn {\n  items.forEach { item ->\n    ItemRow(item)\n  }\n}`, good: `// ✅ LazyColumn renders only\n//    visible items\nLazyColumn {\n  items(items, key = { it.id }) {\n    item -> ItemRow(item)\n  }\n}` },
            ios: { bad: `// ❌ ForEach renders ALL items\nScrollView {\n  ForEach(items) { item in\n    ItemRow(item: item)\n  }\n}`, good: `// ✅ List renders only\n//    visible rows\nList(items) { item in\n  ItemRow(item: item)\n}` },
          },
        ].map(fix => (
          <div key={fix.problem} style={{ border: `0.5px solid ${GRAY}`, borderRadius: 8, overflow: "hidden" }}>
            <div style={{ background: GRAY, padding: "5px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: 0 }}>{fix.problem}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
              <div style={{ borderRight: `0.5px solid ${GRAY}`, padding: 8 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                  <pre style={{ margin: 0, background: "#2a0808", color: "#FCA5A5", fontSize: 10, padding: "6px 8px", borderRadius: 4, lineHeight: 1.5, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{fix.android.bad}</pre>
                  <pre style={{ margin: 0, background: "#0a2010", color: "#86EFAC", fontSize: 10, padding: "6px 8px", borderRadius: 4, lineHeight: 1.5, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{fix.android.good}</pre>
                </div>
                <div style={{ marginTop: 4, display: "flex", gap: 6 }}>
                  <span style={{ fontSize: 10, background: BLUE_LIGHT, color: BLUE, padding: "1px 6px", borderRadius: 10, fontWeight: 600 }}>Android</span>
                </div>
              </div>
              <div style={{ padding: 8 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                  <pre style={{ margin: 0, background: "#2a0808", color: "#FCA5A5", fontSize: 10, padding: "6px 8px", borderRadius: 4, lineHeight: 1.5, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{fix.ios.bad}</pre>
                  <pre style={{ margin: 0, background: "#0a2010", color: "#86EFAC", fontSize: 10, padding: "6px 8px", borderRadius: 4, lineHeight: 1.5, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{fix.ios.good}</pre>
                </div>
                <div style={{ marginTop: 4, display: "flex", gap: 6 }}>
                  <span style={{ fontSize: 10, background: GREEN_LIGHT, color: GREEN, padding: "1px 6px", borderRadius: 10, fontWeight: 600 }}>iOS</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 12 — AI performance scanner
  () => (
    <Shell tag="AI opportunity" tagColor="purple" timer="5" title="Using AI to scan your codebase" subtitle="Claude as a performance reviewer — not a magic fix"
      notes="This is the most immediately actionable slide for students' capstones. The framing is important: AI isn't replacing the profiler — it's a first pass that can surface issues before you even open a tool. The workflow is: paste a file, ask for a specific category of issue, read the suggestions critically, verify with the profiler. Emphasise the last step — Claude occasionally misreads context or suggests over-engineered fixes. The profiler is ground truth.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>The workflow</p>
          {[
            { n: "1", t: "Pick a file", d: "Start with your main ViewModel — it's the highest-value target" },
            { n: "2", t: "Paste + prompt", d: "Use a specific prompt (not 'review my code')" },
            { n: "3", t: "Read critically", d: "Understand each suggestion before acting on it" },
            { n: "4", t: "Verify with the profiler", d: "The profiler is ground truth — Claude is a starting point" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 10, margin: "8px 0", alignItems: "flex-start" }}>
              <div style={{ width: 20, height: 20, background: PURPLE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 700, color: "#fff" }}>{s.n}</div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 1px" }}>{s.t}</p>
                <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{s.d}</p>
              </div>
            </div>
          ))}
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px", marginTop: 10 }}>
            <p style={{ fontSize: 11, color: AMBER_DARK, margin: 0, lineHeight: 1.5 }}>
              <strong>Important:</strong> Claude can misread context or suggest over-engineered solutions. Never apply a performance suggestion without understanding it. The profiler confirms whether it was actually a problem.
            </p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Example prompt — ViewModel scan</p>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 6px" }}>Paste your ViewModel, then ask:</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>
              {"\"Here is my ViewModel. Please scan it for memory leaks and performance issues. Look specifically for: coroutines launched outside viewModelScope, strong references to Context or View objects, work that should be on a background dispatcher but isn't, and StateFlow patterns that might retain references longer than necessary. For each issue, explain why it's a problem and show the fix.\""}
            </p>
          </div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px", marginTop: 8 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 4px" }}>The unit page has 4 prompts covering:</p>
            {["ViewModel memory scan (above)", "Screen / Composable threading scan", "Network and async code scan", "Full architectural review"].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 6, margin: "3px 0" }}>
                <span style={{ color: PURPLE, fontSize: 11, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 11, color: MUTED }}>{t}</span>
              </div>
            ))}
            <p style={{ fontSize: 11, color: MUTED, margin: "6px 0 0", fontStyle: "italic" }}>See Unit 9, Session 2 Lab tab for the full set.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 13 — Capstone self-audit
  () => (
    <Shell tag="Capstone" tagColor="amber" timer="4" title="5-minute capstone self-audit" subtitle="Run this on your project before lab time starts"
      notes="Give students 3–4 minutes to silently go through this checklist right now, before they split into lab groups. The goal is for them to arrive at the lab already knowing which performance issue is most worth investigating in their own project. Students who find something should address it during lab. Students who pass everything should use lab time for feature work.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <PlatformHeader platform="android" />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { q: "Any network or database calls outside a coroutine or on Dispatchers.Main?", hint: "Search for repository calls not inside viewModelScope.launch" },
              { q: "Any coroutines launched with GlobalScope?", hint: "Search your project for 'GlobalScope' — should be zero results" },
              { q: "Any Column with forEach containing more than ~20 items?", hint: "Switch to LazyColumn if the list can grow" },
              { q: "LeakCanary installed and showing clean?", hint: "Add debugImplementation and navigate around the app" },
              { q: "Memory Profiler: does heap climb without coming back down?", hint: "Open screens, close them, watch the heap graph" },
            ].map((item, i) => (
              <div key={i} style={{ background: BLUE_LIGHT, borderRadius: 6, padding: "7px 10px", display: "flex", gap: 8 }}>
                <div style={{ width: 14, height: 14, border: `1.5px solid ${BLUE}`, borderRadius: 3, flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontSize: 11, color: BLUE, margin: "0 0 1px", lineHeight: 1.4 }}>{item.q}</p>
                  <p style={{ fontSize: 10, color: BLUE, margin: 0, opacity: 0.7, fontStyle: "italic" }}>💡 {item.hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <PlatformHeader platform="ios" />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { q: "Any synchronous operations on the main actor — Data(contentsOf:) or large JSON decodes?", hint: "These should happen off the main actor" },
              { q: "Any Tasks created in onAppear instead of .task?", hint: ".task cancels automatically; onAppear Tasks do not" },
              { q: "Any closures capturing self strongly in a ViewModel?", hint: "Check for closures without [weak self]" },
              { q: "Any ForEach inside ScrollView with a large list?", hint: "Switch to List or LazyVStack" },
              { q: "Memory Graph Debugger: any purple triangles after navigating?", hint: "Run app, open/close screens, open Memory Graph" },
            ].map((item, i) => (
              <div key={i} style={{ background: GREEN_LIGHT, borderRadius: 6, padding: "7px 10px", display: "flex", gap: 8 }}>
                <div style={{ width: 14, height: 14, border: `1.5px solid ${GREEN}`, borderRadius: 3, flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontSize: 11, color: GREEN, margin: "0 0 1px", lineHeight: 1.4 }}>{item.q}</p>
                  <p style={{ fontSize: 10, color: GREEN, margin: 0, opacity: 0.7, fontStyle: "italic" }}>💡 {item.hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 14 — Lab transition
  () => (
    <Shell tag="Lab" tagColor="teal" title="Break — then capstone work session" subtitle="5 min break · 55 min lab · Full TA support"
      notes="Be explicit that there is no lab deliverable tied to the lecture. Students who found something in the self-audit can address it now, but the primary goal of lab time is M4 progress. M4 is due at the end of this session — that's the deliverable that matters today.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEAL_DARK, margin: "0 0 12px" }}>Lab time — how to use it</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { icon: "🏗️", t: "Primary goal", d: "Capstone M4 progress. All core screens working, data persists, at least one stretch feature. Due end of session." },
              { icon: "⚡", t: "Secondary goal", d: "If the self-audit found something, address one performance issue from today's lecture." },
              { icon: "🙋", t: "TAs are available", d: "For both capstone blockers and performance questions. Raise your hand." },
            ].map(item => (
              <div key={item.t} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 2px" }}>{item.t}</p>
                  <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: AMBER_DARK, margin: "0 0 8px" }}>🏗️ Capstone M4 checklist</p>
            {[
              "All core screens navigable — no dead ends",
              "At least one real API or AI call working end-to-end",
              "Data persists across app restarts",
              "At least one stretch feature implemented",
              "Git branching — feature branches merged via PRs",
              "App icon set — not the default placeholder",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <div style={{ width: 12, height: 12, border: `1.5px solid ${AMBER_DARK}`, borderRadius: 2, flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 11, color: AMBER_DARK }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>
              No deliverable is tied to today{"'"}s lecture. The performance tools and AI scanning prompts are reference material — use them when they{"'"}re useful, not because today{"'"}s session covered them.
            </p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 15 — Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: "#fff", margin: "0 0 8px" }}>Session 2 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>You now know how to find what{"'"}s slowing your app down — and where to look first.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned</p>
            {[
              "The three problems — jank, memory leaks, battery drain",
              "Android Studio Profiler — CPU, Memory, and Energy tabs",
              "Xcode Instruments — Time Profiler and Leaks template",
              "LeakCanary: add one line, get a human-readable leak report",
              "Xcode Memory Graph Debugger: purple triangle = retain cycle",
              "Before/after fixes for the most common patterns",
              "Using AI to scan a codebase for performance issues",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: AMBER, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Week 10</p>
            {[
              "Session 1: what makes a demo memorable — structure, timing, the Connect moment",
              "Polish sprint — Critical / Important / Polish checklist",
              "Demo rehearsal — out loud, timed, with a teammate watching",
              "Session 2: demo day — live capstone presentations",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, background: "rgba(255,255,255,0.15)", borderRadius: 6, padding: "10px 12px" }}>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.95)", margin: "0 0 4px", fontWeight: 600 }}>Today{"'"}s lab — capstone work session</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.5 }}>M4 due end of this session. All core screens working, data persists, at least one stretch feature. Full TA support available.</p>
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
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 9 · Session 2 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>App performance</p>
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
