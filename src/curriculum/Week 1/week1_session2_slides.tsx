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
    {title && <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0", letterSpacing: ".04em" }}>{title}</div>}
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Step = ({ n, title, children, accent = PURPLE }) => (
  <div style={{ marginBottom: 12, paddingLeft: 20, borderLeft: `2px solid #e5e7eb`, position: "relative" }}>
    <div style={{ position: "absolute", left: -14, top: -2, width: 26, height: 26, borderRadius: "50%", background: "#fff", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: accent }}>
      {n}
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: 0 }}>{title}</p>
    </div>
    <div>{children}</div>
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

const Info = ({ children }) => (
  <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "8px 14px", margin: "8px 0" }}>
    <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Warn = ({ title, children }) => (
  <div className="callout-warn" style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "8px 12px", margin: "8px 0" }}>
    {title && <p style={{ fontSize: 12, fontWeight: 600, color: "#92400e", margin: "0 0 2px" }}>{title}</p>}
    <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>{children}</p>
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
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 1 — Session 2</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>State — giving your<br/>UI a memory</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Making your screens actually do something</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Builds on Session 1", "Android · Jetpack Compose", "iOS · SwiftUI"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${TEAL}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Welcome back. Start with a quick confidence check — ask students to hold up their Session 1 lab on their screen. This does two things: it rewards students who completed it, and it gives you a read on how far behind anyone is. Do not shame anyone who did not finish — just note it and move on."}</Notes>
    </div>
  ),

  // ─── SLIDE 2: Recap ───
  () => (
    <Shell tag="Recap" timer="5" title="Quick recap — what did we learn last session?" notes="Do not just lecture the recap — make it interactive. Point at individual students and ask them to explain one concept. If they get it right, move on. If they struggle, use it as a teaching moment for the whole class. This is also a good chance to spot students who need extra support before you add new concepts on top.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Before we go further — can you explain these back to me?</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { q: "What is declarative UI?", a: "You describe what the screen should look like for a given state. The framework handles updating it." },
          { q: "What is a Composable / View?", a: "A function (Compose) or struct (SwiftUI) that describes a piece of UI. They can be nested and reused." },
          { q: "What is a lambda / closure?", a: "A block of code { } passed as a value — e.g. the content of a Column or the onClick of a Button." },
          { q: "What is recomposition?", a: "When state changes, Compose/SwiftUI re-runs only the composables/views that depend on that state." },
        ].map(item => (
          <div key={item.q} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{item.q}</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        <Discussion>{"In Session 1, we built a profile card. The name, avatar, and stats were all hardcoded. What would need to change to make the stats show real numbers — numbers that could update over time?"}</Discussion>
      </div>
    </Shell>
  ),

  // ─── SLIDE 3: Agenda ───
  () => (
    <Shell tag="Agenda" title="Today's session — ~55 minutes" notes="Today is more hands-on than Session 1 — the live code-along is longer and concepts build on each other quickly. Encourage students to ask questions the moment they are lost rather than waiting — state bugs compound fast. Last 5 min of lecture = recap before the break.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "5 min",  title: "Recap", desc: "Quick review — can you explain Session 1 back to me?" },
          { num: "02", time: "10 min", title: "What is state?", desc: "The concept, simply explained — no jargon yet" },
          { num: "03", time: "8 min",  title: "Why regular variables break", desc: "A live demo of what goes wrong without state" },
          { num: "04", time: "10 min", title: "remember / @State", desc: "The state primitives in Compose and SwiftUI" },
          { num: "05", time: "5 min",  title: "Conditional UI", desc: "Show and hide things based on state — if statements in UI" },
          { num: "06", time: "12 min", title: "Live code-along", desc: "Build a tap counter with milestones from scratch" },
          { num: "07", time: "3 min",  title: "Claude for state questions", desc: "How to ask Claude to explain state bugs" },
          { num: "08", time: "2 min",  title: "Recap + lab intro", desc: "Review what we covered, then break before lab" },
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

  // ─── SLIDE 4: What is state? ───
  () => (
    <Shell tag="State" timer="10" title="What is state?" subtitle="The simplest possible explanation first" notes="Resist the urge to go technical here. The goal of this slide is one sentence that sticks: state is the memory of your screen. Everything else — remember, @State, recomposition — is just how that memory works under the hood. Build the intuition first, then the mechanics.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Before we write any code — let us build the right mental model.</p>
      <div style={{ background: PURPLE_LIGHT, border: `1px solid ${PURPLE}33`, borderRadius: 10, padding: "18px 20px", textAlign: "center", margin: "0 0 14px" }}>
        <p style={{ fontSize: 20, fontWeight: 800, color: PURPLE_DARK, margin: "0 0 6px" }}>State is the memory of your screen</p>
        <p style={{ fontSize: 13, color: PURPLE, margin: 0 }}>It is the data that can change — and when it changes, the UI updates to reflect it automatically.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { emoji: "🔢", title: "A counter value", desc: "Starts at 0. Every tap adds 1. The number on screen always shows the current count." },
          { emoji: "🔀", title: "A toggle switch", desc: "On or off. The UI shows the switch in the right position based on the current value." },
          { emoji: "📝", title: "Text typed in a field", desc: "Every keystroke updates the state. The field always shows what the user has typed so far." },
        ].map(s => (
          <div key={s.title} style={{ background: GRAY, borderRadius: 8, padding: "12px 14px", textAlign: "center" }}>
            <p style={{ fontSize: 24, margin: "0 0 6px" }}>{s.emoji}</p>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 4px" }}>{s.title}</p>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{s.desc}</p>
          </div>
        ))}
      </div>
      <Discussion>{"Think about the Instagram like button. When you tap the heart, it turns red and the count goes up — instantly, without reloading the page. What data do you think is stored in state to make that work?"}</Discussion>
    </Shell>
  ),

  // ─── SLIDE 5: State vs no state ───
  () => (
    <Shell tag="State" title="State vs no state — what is the difference?" notes="Use a concrete real-world app analogy here. A calculator with no memory always starts at 0 — it has no state between taps. A calculator with memory can accumulate a running total. That accumulation IS state. Most interesting app features require some kind of memory.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px", textTransform: "uppercase" }}>No state — static screens</p>
          <Bullet>The profile card we built in Session 1</Bullet>
          <Bullet>Every value is hardcoded — it never changes</Bullet>
          <Bullet>The screen looks the same every single time</Bullet>
          <Bullet>Good for: splash screens, about pages, static layouts</Bullet>
          <Bullet sub>Name, avatar, stats — all fixed at build time</Bullet>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px", textTransform: "uppercase" }}>With state — interactive screens</p>
          <Bullet>A counter that increments on tap</Bullet>
          <Bullet>Data that changes based on user actions</Bullet>
          <Bullet>The UI automatically reflects the current data</Bullet>
          <Bullet>Good for: almost every real screen in a real app</Bullet>
          <Bullet sub>Tap count, login status, search results, form input...</Bullet>
        </div>
      </div>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>The rule of thumb</p>
        <p style={{ fontSize: 12, color: PURPLE, margin: 0 }}>If a value on your screen can change while the user is looking at it — it needs to be in state. If it never changes — a regular variable or a hardcoded value is fine.</p>
      </div>
    </Shell>
  ),

  // ─── SLIDE 6: Why regular vars break ───
  () => (
    <Shell tag="State" timer="8" title="Why a regular variable does not work" subtitle="A live demo — watch what happens" notes="THIS IS THE MOST IMPORTANT SLIDE IN SESSION 2. Do this live. Type the broken version first, run it, tap the button, watch it do nothing. Then ask students why. Let them theorize. Then explain recomposition. The moment of confusion followed by the explanation is what makes it stick. Do not skip the broken version.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 8px" }}>Let us try to build a counter the naive way first — and see exactly why it fails.</p>
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="The broken approach — regular var" accent="#b91c1c">
{`@Composable
fun CounterScreen() {
    // This looks reasonable... but it does NOT work
    var count = 0

    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = count.toString(),
            fontSize = 64.sp,
            fontWeight = FontWeight.Bold
        )
        Button(onClick = {
            count++   // This runs! But the UI never updates.
            println("Count is now: $count")  // Prints fine
        }) {
            Text("Add 1")
        }
    }
    // Why does this fail?
    // Every time Compose re-renders this function,
    // var count = 0 runs again and resets to zero.
    // Compose has no idea count changed — it was never told.
}`}
        </CodePane>
        <div style={{ flex: 0.7, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 6px" }}>What actually happens</p>
            {[
              "User taps the button",
              "count++ runs — count is now 1 in memory",
              "But Compose does not know to re-render",
              "Even if it did re-render, var count = 0 would reset it",
              "The screen shows 0 forever",
            ].map((t, i) => (
              <div key={t} style={{ display: "flex", gap: 8, margin: "4px 0" }}>
                <span style={{ background: "#b91c1c", color: "#fff", borderRadius: "50%", width: 16, height: 16, fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                <span style={{ fontSize: 11, color: TEXT, lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL, margin: "0 0 4px" }}>Two problems to solve</p>
            <p style={{ fontSize: 11, color: "#085041", margin: 0, lineHeight: 1.5 }}>1. Compose needs to KNOW when the value changes so it can re-render<br/>2. The value needs to SURVIVE re-renders without being reset</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 7: Recomposition explained simply ───
  () => (
    <Shell tag="State" title="Recomposition — how Compose updates the screen" notes="Keep this simple. The mental model students need: Compose re-runs Composable functions when state changes. It does NOT re-run the whole app — just the parts that read the changed state. You do not need to go deep on the internals. The one-sentence version is enough: when state changes, Compose calls your function again with the new value.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>How Compose works under the hood</p>
          {[
            { n: 1, t: "Compose calls your Composable function to build the UI" },
            { n: 2, t: "The UI renders on screen" },
            { n: 3, t: "User taps a button — state changes" },
            { n: 4, t: "Compose sees the state changed and calls your function again" },
            { n: 5, t: "The function runs with the new value — UI updates" },
            { n: 6, t: "This process is called recomposition" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "flex-start" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 18, height: 18, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>SwiftUI — the same idea, different name</p>
          <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "12px 14px" }}>
            {[
              { n: 1, t: "SwiftUI evaluates your body property to build the UI" },
              { n: 2, t: "The UI renders on screen" },
              { n: 3, t: "User taps — @State property changes" },
              { n: 4, t: "SwiftUI sees the @State change and re-evaluates body" },
              { n: 5, t: "body runs with the new value — UI updates" },
              { n: 6, t: "SwiftUI calls this a view update" },
            ].map(s => (
              <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "flex-start" }}>
                <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 18, height: 18, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{s.n}</span>
                <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{s.t}</span>
              </div>
            ))}
          </div>
          <Info>{"The concept is identical in both platforms. The terminology is different. Both boil down to: change the data, the UI follows."}</Info>
        </div>
      </div>
      <Warn>{"You do not need to understand the full internals of recomposition today. The one thing to remember: if your UI is not updating when you expect it to, the data it reads is probably not in state."}</Warn>
    </Shell>
  ),

  // ─── SLIDE 8a: remember + mutableStateOf (Compose) ───
  () => (
    <Shell tag="State" timer="10" title="The fix — remember and mutableStateOf" subtitle="Compose: solving the 2 problems from the broken example" notes="Walk through each concept separately before combining them. First: mutableStateOf creates an observable value — Compose watches it. Second: remember tells Compose to hold onto the value across re-renders. Then combine.">
      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Step n="1" title="Making it Observable" accent={PURPLE}>
            <CodePane accent={PURPLE}>
{`// Problem: Compose doesn't know count changed
// Solution: mutableStateOf()

val count = mutableStateOf(0)
count.value++   // triggers re-render!
// (count.value syntax is verbose though)`}
            </CodePane>
          </Step>
          <Step n="2" title="Making it Survive" accent={PURPLE}>
            <CodePane accent={PURPLE}>
{`// Problem: count resets to 0 on every render
// Solution: remember { }

val count = remember { mutableStateOf(0) }
// remember tells Compose to hold this value`}
            </CodePane>
          </Step>
          <Step n="3" title="The Full Solution" accent={PURPLE}>
            <CodePane accent={PURPLE}>
{`// Combining both with 'by' keyword
var count by remember { mutableStateOf(0) }
//  ↑ by = delegates gets/sets to let us use 'count' directly

count++   // works perfectly and re-renders!
Text(text = count.toString())`}
            </CodePane>
          </Step>
        </div>
        <div style={{ flex: 0.6, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 8px" }}>The golden rule for Compose State</p>
            <p style={{ fontSize: 13, color: PURPLE, margin: 0, lineHeight: 1.5 }}><code>{`var x by remember { mutableStateOf(...) }`}</code></p>
            <p style={{ fontSize: 12, color: PURPLE_DARK, margin: "10px 0 0", lineHeight: 1.5 }}>If you forget <code>remember</code>, the variable resets every render. If you forget <code>mutableStateOf</code>, the UI never updates.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 8b: @State (SwiftUI) ───
  () => (
    <Shell tag="State" timer="0" title="The fix — @State" subtitle="SwiftUI equivalent" notes="Show the fixed version running on iOS. Explain why @State encompasses both 'remember' and observability.">
      <div style={{ display: "flex", gap: 10 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Step n="1" title="The All-in-one Keyword" accent={TEAL}>
            <CodePane accent={TEAL}>
{`// SwiftUI solves both problems with one keyword: @State
// It handles BOTH observation AND memory.

@State private var count = 0

// 'private' is good practice — only this View
// should change this state directly`}
            </CodePane>
          </Step>
          <Step n="2" title="The Full View Structure" accent={TEAL}>
            <CodePane accent={TEAL}>
{`struct CounterScreen: View {
    @State private var count = 0

    var body: some View {
        VStack {
            Text("\\(count)")  // automatically updates
            Button("Add 1") {
                count += 1     // triggers a re-render!
            }
        }
    }
}`}
            </CodePane>
          </Step>
        </div>
        <div style={{ flex: 0.6, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: TEAL, margin: "0 0 8px" }}>Why does Compose need remember but SwiftUI does not?</p>
            <p style={{ fontSize: 12, color: "#085041", margin: 0, lineHeight: 1.5 }}>Composables are functions — they re-run completely on recomposition. Without remember, every local variable resets.<br/><br/>SwiftUI Views are structs — @State is stored outside the struct by the framework, so it naturally survives re-renders.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 9a: State types (Compose) ───
  () => (
    <Shell tag="State" title="What types of data can live in state?" subtitle="Compose state types" notes="Students often assume state only works with numbers. Show them it works with any type — Booleans are especially important because they unlock show/hide behavior which is coming in the next slide.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>State can hold any data type — numbers, text, booleans, and more.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <CodePane title="Numbers & Text" accent={PURPLE}>
{`// Int — a counter
var count by remember { mutableStateOf(0) }

// String — text input or a label
var username by remember { mutableStateOf("") }`}
        </CodePane>
        <CodePane title="Booleans" accent={PURPLE}>
{`// Boolean — show/hide, on/off, loading/done
var isVisible by remember { mutableStateOf(true) }
var isLoading by remember { mutableStateOf(false) }`}
        </CodePane>
        <div style={{ gridColumn: "1 / -1" }}>
            <CodePane title="Multiple independent variables" accent={PURPLE}>
{`// Changing one does not affect the other!
var likes by remember { mutableStateOf(0) }
var isLiked by remember { mutableStateOf(false) }

Button(onClick = { 
    likes++ 
    isLiked = true 
}) {
    Text(if (isLiked) "Liked!" else "Like")
}`}
            </CodePane>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 9b: State types (SwiftUI) ───
  () => (
    <Shell tag="State" title="What types of data can live in state?" subtitle="SwiftUI state types" notes="Show the SwiftUI equivalent for different state data types. Mention the ternary operator as a useful tool.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>In SwiftUI, the type is inferred from the initial value.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <CodePane title="Numbers & Text" accent={TEAL}>
{`// Int — a counter
@State private var count = 0

// String — text input or a label
@State private var username = ""`}
        </CodePane>
        <CodePane title="Booleans" accent={TEAL}>
{`// Boolean — show/hide, on/off, loading/done
@State private var isVisible = true
@State private var isLoading = false`}
        </CodePane>
        <div style={{ gridColumn: "1 / -1" }}>
            <CodePane title="Multiple independent variables" accent={TEAL}>
{`struct ExampleView: View {
    @State private var likes = 0
    @State private var isLiked = false

    var body: some View {
        Button(action: {
            likes += 1
            isLiked = true
        }) {
            Text(isLiked ? "Liked!" : "Like")
        }
    }
}`}
            </CodePane>
        </div>
      </div>
      <Info>{"The ternary operator — condition ? valueIfTrue : valueIfFalse — works the same in both Kotlin and Swift. It is one of the most useful patterns for conditional text in UI."}</Info>
    </Shell>
  ),

  // ─── SLIDE 10a: Conditional UI (Base) ───
  () => (
    <Shell tag="Conditional UI" timer="5" title="Conditional UI — before conditionals" subtitle="Start with your base layout" notes="This is where declarative UI starts to feel really powerful. The key insight: in declarative UI, you do not show or hide views by calling .show() or .hide() — you just use an if statement. The framework handles the rest. Let's start with a base Compose setup.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>In declarative UI you do not manually show or hide things — you just write an if statement and the framework handles it.</p>
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Compose — Setup without conditionals" accent={PURPLE}>
{`@Composable
fun CounterScreen() {
    var count by remember { mutableStateOf(0) }

    Column(
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxSize()
    ) {
        Text(text = count.toString(), fontSize = 64.sp)

        Button(onClick = { count++ }) {
            Text("Add 1")
        }
        
        // Next step: we will conditionally add more elements here...
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // ─── SLIDE 10b: Conditional UI (Compose) ───
  () => (
    <Shell tag="Conditional UI" title="Conditional UI — adding if statements" subtitle="The if statement inside your UI code" notes="Show how to add elements that only render under certain state conditions.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Just use a regular if statement. When the condition matches, Compose adds the UI. When it doesn't, Compose removes it completely.</p>
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Compose — conditional UI" accent={PURPLE}>
{`@Composable
fun CounterScreen() {
    var count by remember { mutableStateOf(0) }

    Column( /* ... */ ) {
        Text(text = count.toString(), fontSize = 64.sp)
        Button(onClick = { count++ }) { Text("Add 1") }

        // This Text ONLY appears when count >= 10
        // When count < 10, it does not exist in the UI at all
        if (count >= 10) {
            Text(
                text = "Double digits!",
                color = Color(0xFF1D9E75),
                fontSize = 14.sp,
                fontStyle = FontStyle.Italic
            )
        }

        // Button only appears when count >= 5
        if (count >= 5) {
            Button(onClick = { count = 0 }) { Text("Reset") }
        }
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // ─── SLIDE 10c: Conditional UI (SwiftUI) ───
  () => (
    <Shell tag="Conditional UI" title="Conditional UI — SwiftUI equivalent" subtitle="The exact same pattern in Swift" notes="Point out that the logic does not change between platforms. declarative concepts are universal.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>The syntax in SwiftUI perfectly mirrors Compose. The concepts are identical.</p>
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="SwiftUI — conditional UI" accent={TEAL}>
{`struct CounterScreen: View {
    @State private var count = 0

    var body: some View {
        VStack(spacing: 16) {
            Text("\\(count)").font(.system(size: 64, weight: .bold))
            Button("Add 1") { count += 1 }.buttonStyle(.borderedProminent)

            // This Text ONLY appears when count >= 10
            // When count < 10, it is not in the tree at all
            if count >= 10 {
                Text("Double digits!")
                    .foregroundColor(.green)
                    .italic()
            }

            // Button only appears when count >= 5
            if count >= 5 {
                Button("Reset") { count = 0 }
                    .foregroundColor(.red)
            }
        }
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // ─── SLIDE 11a: Handling conditions (Kotlin/Compose) ───
  () => (
    <Shell tag="Conditional UI" title="Handling multiple conditions — when" subtitle="The Kotlin way" notes="Students will need this for the milestone system in today's lab. when in Kotlin serves the same purpose as switch — pattern match against a value and return something different for each case. The Kotlin when block inside a Composable returning UI is a pattern students will use constantly.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 8px" }}>When you have more than two conditions, <code>if/else</code> chains get messy. Kotlin's <code>when</code> expression is the cleaner solution.</p>
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Kotlin — when expression" accent={PURPLE}>
{`// when = Kotlin's switch — cleaner than if/else chains
fun getMilestone(count: Int): String = when {
    count == 0   -> "Start tapping!"
    count < 10   -> "Getting warmed up..."
    count < 25   -> "On a roll!"
    count < 50   -> "Can't stop now!"
    count < 100  -> "You're unstoppable!"
    else         -> "Legendary tapper!"
}

// Using it in a Composable:
Text(
    text = getMilestone(count),
    color = Color(0xFF534AB7),
    fontStyle = FontStyle.Italic
)

// when can also return UI directly:
when {
    count == 0  -> Text("Tap to start!")
    count < 10  -> Text("Keep going...")
    else        -> Text("Amazing!")
}`}
        </CodePane>
      </div>
      <Info>{"In Kotlin, `when` is an expression — meaning it directly returns a value that can be assigned or used. This makes it very concise."}</Info>
    </Shell>
  ),

  // ─── SLIDE 11b: Handling conditions (SwiftUI) ───
  () => (
    <Shell tag="Conditional UI" title="Handling multiple conditions — switch" subtitle="The Swift way" notes="Switch serves the exact same purpose in Swift. Compare the syntax to Kotlin when. Note that Switch is a statement in Swift.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 8px" }}>Swift uses the <code>switch</code> statement for this exact same purpose.</p>
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Swift — switch statement" accent={TEAL}>
{`// Computed property — recalculates when count changes
var milestone: String {
    switch count {
    case 0:
        return "Start tapping!"
    case 1..<10:
        return "Getting warmed up..."
    case 10..<25:
        return "On a roll!"
    case 25..<50:
        return "Can't stop now!"
    case 50..<100:
        return "You're unstoppable!"
    default:
        return "Legendary tapper!"
    }
}

// Using it in a View — just reference the property:
Text(milestone)
    .foregroundColor(Color(red:0.33,green:0.29,blue:0.72))
    .italic()
// When count changes, @State triggers a re-render
// and milestone recalculates automatically`}
        </CodePane>
      </div>
      <Info>{"Unlike Kotlin's `when`, Swift's `switch` is a statement — it needs explicit `return` instructions. However, both perfectly handle multiple state conditions."}</Info>
    </Shell>
  ),

  // ─── SLIDE 12a: Multiple state vars (Concept) ───
  () => (
    <Shell tag="State" title="Multiple state variables — they are independent" notes="Students often assume you can only have one piece of state per screen. Make it explicit that you can have as many as you need, and they are completely independent. Changing one does not affect the others unless you write code to connect them.">
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Compose — declaring multiple independent state vars" accent={PURPLE}>
{`@Composable
fun CounterScreen() {
    // Two independent pieces of state
    var count by remember { mutableStateOf(0) }
    var highScore by remember { mutableStateOf(0) }

    // Changing count does NOT change highScore
    // unless we explicitly write code to do it!
    
    // ... UI goes here ...
}`}
        </CodePane>
        <div style={{ flex: 1.0, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: GRAY, borderRadius: 8, padding: "14px 16px", flex: 1 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Key rules for multiple state variables</p>
            {[
              "Each variable is completely independent",
              "You can have as many as your screen needs",
              "They can depend on each other — but only if you write code to connect them",
              "Changing one only re-renders the parts of the UI that read it",
              "Name them clearly — isLoading, hasError, count, username — not just state1, state2",
            ].map(t => (
              <Bullet key={t} style={{ fontSize: 13 }}>{t}</Bullet>
            ))}
          </div>
          <Warn style={{ fontSize: 13 }} title="Common mistake">{"Putting everything in one state variable when it should be separate. A counter and a high score are different things — give them different variables."}</Warn>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 12b: Multiple state vars (Implementation) ───
  () => (
    <Shell tag="State" title="Multiple state variables — updating together" notes="Show how we can perform multiple state updates in a single block of logic (e.g. updating the high score when the count clicks over).">
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Compose — updating them together" accent={PURPLE}>
{`@Composable
fun CounterScreen() {
    var count by remember { mutableStateOf(0) }
    var highScore by remember { mutableStateOf(0) }

    Column(
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxSize()
    ) {
        Text("High score: $highScore",
            fontSize = 14.sp, color = Color.Gray)

        Text(count.toString(), fontSize = 80.sp,
            fontWeight = FontWeight.Bold)

        Button(onClick = {
            count++
            // Update high score if count beats it!
            if (count > highScore) {
                highScore = count
            }
        }) {
            Text("Tap!")
        }

        if (count > 0) {
            Button(onClick = { count = 0 }) {
                Text("Reset")
            }
            // count resets, but highScore stays — that is intentional!
        }
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // ─── SLIDE 13: Live code-along intro ───
  () => (
    <Shell tag="Live code-along" timer="15" title="Let us build together — the tap counter" subtitle="Open your IDE. New project: TapCounter." dark notes="Build brand new — do NOT use a starter. Deliberately write the broken version first (regular var), run it, show it does nothing, then fix it with remember/mutableStateOf or @State. That live moment of confusion and fix is the most memorable thing you can do. Students will remember it in Week 3 when their own state is not updating.">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>What we are building — step by step</p>
          {[
            { n: 1, t: "New project — TapCounter" },
            { n: 2, t: "Static layout — big number + circular TAP button" },
            { n: 3, t: "Try regular var — show it breaks" },
            { n: 4, t: "Fix with remember/mutableStateOf or @State" },
            { n: 5, t: "Add a taps label below the number" },
            { n: 6, t: "Add milestone text with when/switch" },
            { n: 7, t: "Add conditional Reset button — appears at count 10" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "center" }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, justifyContent: "center" }}>
          <p style={{ fontSize: 36, fontWeight: 800, color: "#fff", margin: 0 }}>47</p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: 0 }}>taps</p>
          <p style={{ fontSize: 12, color: TEAL, fontStyle: "italic", margin: "4px 0 10px" }}>On a roll!</p>
          <div style={{ width: 80, height: 80, background: TEAL, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16 }}>TAP</div>
          <div style={{ marginTop: 8, background: "rgba(255,255,255,0.1)", borderRadius: 6, padding: "5px 14px" }}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Reset</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 14a: Code-along part 1.1 (Setup) ───
  () => (
    <Shell tag="Live code-along" title="Part 1.1 — Scaffold the Activity" notes="Start from the outer shell. They just need an empty Column centered on the screen.">
      <CodePane title="Step 1: Project setup & Column" accent={PURPLE}>
{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent { CounterScreen() }
    }
}

@Composable
fun CounterScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5)),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // We will add the UI elements here
    }
}`}
      </CodePane>
    </Shell>
  ),

  // ─── SLIDE 14b: Code-along part 1.2 (Number) ───
  () => (
    <Shell tag="Live code-along" title="Part 1.2 — Big Number" notes="Add the hardcoded 0 and the taps label.">
      <CodePane title="Step 2: Add the Text elements" accent={PURPLE}>
{`@Composable
fun CounterScreen() {
    Column( /* ... */ ) {
        // The big number
        Text(
            text = "0",
            fontSize = 80.sp,
            fontWeight = FontWeight.Bold,
            color = Color(0xFF534AB7)
        )
        // "taps" label
        Text(text = "taps", fontSize = 16.sp, color = Color.Gray)

        Spacer(modifier = Modifier.height(32.dp))
    }
}`}
      </CodePane>
    </Shell>
  ),

  // ─── SLIDE 14c: Code-along part 1.3 (Button) ───
  () => (
    <Shell tag="Live code-along" title="Part 1.3 — The TAP Button" notes="Type this out and run it. The button does nothing yet — that is intentional. Show the preview before wiring up any state.">
      <CodePane title="Step 3: Circular TAP button" accent={PURPLE}>
{`@Composable
fun CounterScreen() {
    Column( /* ... */ ) {
        /* Text elements here */
        Spacer(modifier = Modifier.height(32.dp))

        // Circular TAP button
        Button(
            onClick = { /* nothing yet */ },
            modifier = Modifier
                .size(100.dp)
                .clip(CircleShape),
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFF534AB7)
            )
        ) {
            Text("TAP", fontWeight = FontWeight.Bold)
        }
    }
}`}
      </CodePane>
      <Info>{"Run it now. The layout should look right — a big 0 and a circular TAP button. Tapping does nothing. We fix that next — the broken way first."}</Info>
    </Shell>
  ),

  // ─── SLIDE 15a: Code-along part 2.1 (Broken) ───
  () => (
    <Shell tag="Live code-along" title="Part 2.1 — The Broken Attempt" notes="This is the most important moment of the demo. Type var count = 0 first (no remember), run it, tap the button multiple times, show it stays at 0. Ask the class: why do you think this is not working? After a few answers, introduce remember + mutableStateOf.">
      <CodePane title="Step 3: The naive variable approach" accent="#b91c1c">
{`@Composable
fun CounterScreen() {
    // BROKEN — do this first to show why it fails
    var count = 0

    Column( /* ... */ ) {
        Text(
            text = count.toString(),  // shows 0 forever
            fontSize = 80.sp,
            fontWeight = FontWeight.Bold,
            color = Color(0xFF534AB7)
        )
        // ...
        Button(onClick = {
            count++  // this runs! but UI never updates
        }) {
            Text("TAP")
        }
    }
}
// Run this. Tap many times. Watch nothing happen.
// This is the EXACT mistake every new developer makes.`}
      </CodePane>
    </Shell>
  ),

  // ─── SLIDE 15b: Code-along part 2.2 (Fix) ───
  () => (
    <Shell tag="Live code-along" title="Part 2.2 — The Fix" notes="Show the fixed version running. Watch the room react when the counter actually works.">
      <CodePane title="Step 4: The Compose State fix" accent={TEAL}>
{`@Composable
fun CounterScreen() {
    // FIXED — two changes from the broken version:
    // 1. mutableStateOf() — Compose watches this value
    // 2. remember { } — survives recomposition
    var count by remember { mutableStateOf(0) }

    Column( /* ... */ ) {
        Text(
            text = count.toString(),  // NOW updates!
            fontSize = 80.sp,
            fontWeight = FontWeight.Bold,
            color = Color(0xFF534AB7)
        )
        Text(text = "taps", fontSize = 16.sp,
            color = Color.Gray)

        Spacer(modifier = Modifier.height(32.dp))

        Button(
            onClick = { count++ },  // NOW triggers re-render!
            modifier = Modifier.size(100.dp).clip(CircleShape),
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFF534AB7)
            )
        ) {
            Text("TAP", fontWeight = FontWeight.Bold)
        }
    }
}
// Run this. Tap many times. Watch it work.`}
      </CodePane>
    </Shell>
  ),

  // ─── SLIDE 16a: Code-along part 3.1 (Milestones) ───
  () => (
    <Shell tag="Live code-along" title="Part 3.1 — Milestones" notes="This milestone text uses the when pattern from earlier. Make sure students see the connection back to those earlier slides.">
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Step 5-6: Milestone Logic Builder" accent={PURPLE}>
{`// 1. Add this helper function OUTSIDE CounterScreen:
fun getMilestone(count: Int): String = when {
    count == 0   -> "Start tapping!"
    count < 10   -> "Getting warmed up..."
    count < 25   -> "On a roll!"
    count < 50   -> "Can't stop now!"
    else         -> "Legendary tapper!"
}

// 2. Inside CounterScreen Column, after the taps label:
Spacer(modifier = Modifier.height(8.dp))

Text(
    text = getMilestone(count),
    fontSize = 14.sp,
    color = Color(0xFF534AB7),
    fontStyle = FontStyle.Italic
)`}
        </CodePane>
      </div>
    </Shell>
  ),

  // ─── SLIDE 16b: Code-along part 3.2 (Reset) ───
  () => (
    <Shell tag="Live code-along" title="Part 3.2 — Conditional Reset" notes="The Reset button uses the conditional if from before.">
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Step 7: Conditional Reset Button" accent={PURPLE}>
{`// Inside CounterScreen Column, below the TAP button

// Conditional Reset — only appears at count >= 10
if (count >= 10) {
    Spacer(modifier = Modifier.height(12.dp))
    TextButton(onClick = { count = 0 }) {
        Text("Reset", color = Color.Gray)
    }
}`}
        </CodePane>
        <div style={{ flex: 0.6, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: GRAY, borderRadius: 10, padding: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <p style={{ fontSize: 40, fontWeight: 800, color: PURPLE, margin: 0 }}>12</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>taps</p>
            <p style={{ fontSize: 12, color: PURPLE, fontStyle: "italic", margin: 0 }}>On a roll!</p>
            <div style={{ width: 72, height: 72, background: PURPLE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, marginTop: 8 }}>TAP</div>
            <p style={{ fontSize: 11, color: MUTED, margin: "8px 0 0" }}>Reset</p>
          </div>
          <Discussion>{"The Reset button only appears when count is 10 or more. What line of code makes that happen? What would you change to make it appear at 5 instead?"}</Discussion>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 17: Side-by-side final ───
  () => (
    <Shell tag="Comparison" title="The same counter — Android and iOS" notes="After the live code-along, ask students to spend 60 seconds silently finding 3 similarities and 2 differences between the two versions. Then call on 2-3 students. The goal is to reinforce that the concepts are the same even when the syntax differs.">
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Android — Jetpack Compose (full)" accent={PURPLE}>
{`var count by remember { mutableStateOf(0) }

fun getMilestone(count: Int): String = when {
    count == 0  -> "Start tapping!"
    count < 10  -> "Getting warmed up..."
    count < 25  -> "On a roll!"
    count < 50  -> "Can't stop now!"
    else        -> "Legendary tapper!"
}

Column(
    modifier = Modifier.fillMaxSize()
        .background(Color(0xFFF5F5F5)),
    verticalArrangement = Arrangement.Center,
    horizontalAlignment = Alignment.CenterHorizontally
) {
    Text(count.toString(), fontSize = 80.sp,
        fontWeight = FontWeight.Bold,
        color = Color(0xFF534AB7))
    Text("taps", fontSize = 16.sp, color = Color.Gray)
    Spacer(Modifier.height(8.dp))
    Text(getMilestone(count), fontSize = 14.sp,
        color = Color(0xFF534AB7),
        fontStyle = FontStyle.Italic)
    Spacer(Modifier.height(32.dp))
    Button(onClick = { count++ },
        modifier = Modifier.size(100.dp).clip(CircleShape),
        colors = ButtonDefaults.buttonColors(
            containerColor = Color(0xFF534AB7))) {
        Text("TAP", fontWeight = FontWeight.Bold)
    }
    if (count >= 10) {
        Spacer(Modifier.height(12.dp))
        TextButton(onClick = { count = 0 }) {
            Text("Reset", color = Color.Gray)
        }
    }
}`}
        </CodePane>
        <CodePane title="iOS — SwiftUI (full)" accent={TEAL}>
{`struct CounterScreen: View {
    @State private var count = 0

    var milestone: String {
        switch count {
        case 0:        return "Start tapping!"
        case 1..<10:   return "Getting warmed up..."
        case 10..<25:  return "On a roll!"
        case 25..<50:  return "Can't stop now!"
        default:       return "Legendary tapper!"
        }
    }

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("\\(count)")
                    .font(.system(size: 80, weight: .bold))
                    .foregroundColor(
                        Color(red:0.33,green:0.29,blue:0.72))
                Text("taps").foregroundColor(.gray)
                Text(milestone).italic()
                    .foregroundColor(
                        Color(red:0.33,green:0.29,blue:0.72))
                Spacer().frame(height: 24)
                Button(action: { count += 1 }) {
                    Text("TAP").fontWeight(.bold)
                        .foregroundColor(.white)
                        .frame(width:100, height:100)
                        .background(
                            Color(red:0.33,green:0.29,blue:0.72))
                        .clipShape(Circle())
                }
                if count >= 10 {
                    Button("Reset") { count = 0 }
                        .foregroundColor(.gray)
                        .padding(.top, 8)
                }
            }
        }
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // ─── SLIDE 18: Claude for state ───
  () => (
    <Shell tag="AI tools" timer="4" title="Using Claude when state is confusing" notes="State bugs are the most common source of frustration for beginners. Claude is genuinely good at explaining why state is not updating. The key framing: do not just ask Claude to fix it — ask it to explain what is wrong. That explanation is the learning.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>State bugs are confusing. Here is how to use Claude to understand them — not just fix them.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Prompts that teach you something</p>
          {[
            { label: "Understanding the bug", prompt: "My counter is not updating when I tap the button. Here is my code: [paste]. Can you explain WHY it is not working — not just give me the fix?" },
            { label: "Comparing platforms", prompt: "In Compose I need remember and mutableStateOf. In SwiftUI I just use @State. Can you explain in plain English why Compose needs both and SwiftUI only needs one?" },
            { label: "Checking understanding", prompt: "I think I understand state now. Can you give me a short quiz — ask me 3 questions about state in Compose/SwiftUI and tell me if my answers are right?" },
          ].map(p => (
            <div key={p.label} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{p.label}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>{p.prompt}</p>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Prompts that skip the learning</p>
          {[
            "Fix my code so the counter works",
            "Rewrite this for me",
            "Write the entire lab for me",
          ].map(p => (
            <div key={p} style={{ display: "flex", gap: 6, margin: "6px 0" }}>
              <span style={{ color: "#b91c1c", fontWeight: 700 }}>✗</span>
              <span style={{ fontSize: 13, color: TEXT, fontStyle: "italic" }}>{p}</span>
            </div>
          ))}
          <Warn title="The most valuable thing Claude can do for you right now">{"Explain WHY something is wrong. Not just what the fix is — WHY the thing you wrote does not work. If you skip the explanation, you will make the same mistake again in Week 2."}</Warn>
          <Info>{"If Claude gives you fixed code, ask a follow-up: 'Can you explain what was wrong with my original version line by line?' That follow-up is where the learning happens."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 19: Lab intro ───
  () => (
    <Shell tag="Lab intro" timer="3" title="Lab time — what you are building" subtitle="Go to the Lab tab → Session 2 Lab on the course site." notes="Keep this very short — students are ready to build. Remind them the most important thing is Step 3 — writing the broken version first before fixing it. That moment of frustration and fix is the point. Also remind them of the reflection questions — a TA will ask them before they leave.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Lab steps — Session 2</p>
          {[
            { n: 0, t: "New project — TapCounter", time: "3 min" },
            { n: 1, t: "Static layout — big number + TAP button", time: "8 min" },
            { n: 2, t: "Add state — try broken first, then fix", time: "8 min" },
            { n: 3, t: "Add milestone messages with when/switch", time: "10 min" },
            { n: 4, t: "Ask Claude to translate + explain state", time: "8 min" },
            { n: 5, t: "Add conditional Reset button yourself", time: "8 min" },
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
          <div style={{ marginTop: 10, background: TEAL_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: "#085041", margin: 0, lineHeight: 1.5 }}>The most important step: write the broken version first. The confusion you feel is the learning.</p>
          </div>
          <div style={{ marginTop: 8, background: PURPLE_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>Assignment 1 is due this week — the profile card built independently.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 20: Lecture recap ───
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
              "State — the memory of a screen",
              "Why regular variables don't work in declarative UI",
              "remember + mutableStateOf in Compose",
              "@State in SwiftUI",
              "Conditional UI with if statements",
              "Multiple independent state variables",
              "when / switch for multiple conditions",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming up — Week 2</p>
            {[
              "Navigation — moving between screens",
              "Passing data from one screen to another",
              "The back stack — what happens when you press back",
              "Building a multi-screen app for the first time",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>{"Ask students to call out what they remember before revealing the list — active recall, not passive reading. Keep to 3-4 minutes, then move to break. Survey comes after lab."}</Notes>
    </div>
  ),

  // ─── SLIDE 21: Break ───
  () => (
    <div style={{ background: GRAY, border: "1px solid #e5e7eb", borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", textAlign: "center" }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>☕</div>
      <Tag>5 minute break</Tag>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: TEXT, margin: "16px 0 8px" }}>Take a break</h2>
      <p style={{ fontSize: 15, color: MUTED, margin: "0 0 28px", maxWidth: 400, lineHeight: 1.6 }}>Stretch, grab water, get comfortable. Lab starts in 5 minutes.</p>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 10, padding: "14px 24px", maxWidth: 380 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 6px" }}>While you wait</p>
        <p style={{ fontSize: 12, color: PURPLE, margin: 0, lineHeight: 1.5 }}>Open your IDE and create a new project called TapCounter — you will need it the moment lab starts.</p>
      </div>
      <Notes>{"Leave this slide up for the full 5 minutes. Walk around, answer quick questions informally. Do not start lab early."}</Notes>
    </div>
  ),

  // ─── SLIDE 22: Lab intro ───
  () => (
    <Shell tag="Lab intro" timer="5" title="Lab time — building the tap counter" subtitle="You have ~50 minutes. Go to the Lab tab on the course site." notes="Keep this brief. Walk through the steps in 2 minutes and emphasize Step 2 — the broken version. Students who skip it miss the entire learning. New project should already be open from the break slide.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Lab steps — Session 2</p>
          {[
            { n: 0, t: "New project — TapCounter", time: "3 min" },
            { n: 1, t: "Static layout — big number + TAP button", time: "8 min" },
            { n: 2, t: "Add state — try broken first, then fix", time: "8 min" },
            { n: 3, t: "Add milestone messages with when/switch", time: "10 min" },
            { n: 4, t: "Ask Claude to translate + explain state", time: "8 min" },
            { n: 5, t: "Add conditional Reset button yourself", time: "8 min" },
            { n: 6, t: "Written reflection — 3 questions", time: "5 min" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "4px 0", alignItems: "center" }}>
              <span style={{ background: s.n === 2 ? TEAL : PURPLE, color: "#fff", borderRadius: 4, fontSize: 10, fontWeight: 700, padding: "1px 5px", flexShrink: 0 }}>Step {s.n}</span>
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
          <div style={{ marginTop: 10, background: TEAL_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: "#085041", margin: 0, lineHeight: 1.5 }}>Step 2 is the most important — write the broken version first. The confusion is the learning.</p>
          </div>
          <div style={{ marginTop: 8, background: PURPLE_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>Assignment 1 is due this week — the profile card built independently.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 23: Post-lab recap + survey ───
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
              "Why doesn't a regular variable trigger a UI update?",
              "Where did you get stuck — and how did you get unstuck?",
              "What's one thing about state you want to understand better?",
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
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: "10px 0 0", lineHeight: 1.5 }}>Assignment 1 due this week. Week 2 starts with navigation — multi-screen apps.</p>
          </div>
        </div>
      </div>
      <Notes>{"Give students 2-3 minutes to reflect before filling out the survey. End with energy — they just built their first interactive app on two platforms."}</Notes>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 1 · Session 2 · {slides.length} slides</p>
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
