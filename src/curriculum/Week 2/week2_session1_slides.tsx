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

const CodePane = ({ title = undefined, accent = PURPLE, children }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    {title && <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0", letterSpacing: ".04em" }}>{title}</div>}
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Step = ({ n, title, accent = PURPLE, children }) => (
  <div style={{ marginBottom: 12, paddingLeft: 20, borderLeft: `2px solid #e5e7eb`, position: "relative" }}>
    <div style={{ position: "absolute", left: -14, top: -2, width: 26, height: 26, borderRadius: "50%", background: "#fff", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: accent }}>
      {n}
    </div>
    <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: "0 0 8px" }}>{title}</p>
    <div>{children}</div>
  </div>
);

const Bullet = ({ children, sub }) => (
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

const Warn = ({ title, children }) => (
  <div className="callout-warn" style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "8px 12px", margin: "8px 0" }}>
    {title && <p style={{ fontSize: 12, fontWeight: 600, color: "#92400e", margin: "0 0 2px" }}>{title}</p>}
    <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Shell = ({ tag, title, subtitle, timer, children, notes, dark }) => (
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
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 2 — Session 1</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>Navigation —<br/>building multi-screen apps</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Session 1: Data models, navigation setup, and moving between screens</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Builds on Week 1", "Trivia app", "Data classes + NavHost"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${TEAL}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Welcome back. Before starting, do a quick Assignment 1 check — ask students to show their profile app on their phone or simulator. This takes 2 minutes and creates accountability. Note anyone who has not submitted so you can check in with them after class."}</Notes>
    </div>
  ),

  // 2: Recap
  () => (
    <Shell tag="Recap" timer="5" title="Week 1 recap — can you explain these?" notes="Make this interactive. Do not just read the answers — point at students and ask. The goal is to surface any gaps before adding navigation on top. If more than a few students cannot explain state, spend an extra 3 minutes on it before moving on.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          { q: "What is state?", a: "The memory of a screen — data that can change and that the UI automatically reflects when it does." },
          { q: "What does remember do in Compose?", a: "Preserves a value across recompositions so it does not reset every time the Composable re-runs." },
          { q: "What is @State in SwiftUI?", a: "A property wrapper that makes SwiftUI watch the value and re-render the View when it changes." },
          { q: "What is a lambda / closure?", a: "A block of code passed as a value — like { counter++ } inside a Button's onClick parameter." },
        ].map(item => (
          <div key={item.q} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{item.q}</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <Discussion>{"Every app on your phone has more than one screen. Think of your most-used app. How many screens does it have? What happens when you tap the back button — where does it take you?"}</Discussion>
    </Shell>
  ),

  // 3: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 60 minutes" notes="Point out that today introduces the biggest syntax gap between Android and iOS so far. Reassure students: the concept is the same on both platforms. Claude will bridge the syntax. Focus on understanding what is happening, not memorising API names.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "5 min",  title: "Recap", desc: "Week 1 concepts — state, lambdas, Composables" },
          { num: "02", time: "10 min", title: "Language: data classes and structs", desc: "Grouping related data — directly needed for navigation" },
          { num: "03", time: "5 min",  title: "Functions with parameters", desc: "Passing data into a screen — the onStartClicked pattern" },
          { num: "04", time: "8 min",  title: "The navigation stack", desc: "The mental model — push, pop, and the back button" },
          { num: "05", time: "8 min",  title: "NavHost and NavigationStack setup", desc: "Wiring up navigation in Compose and SwiftUI" },
          { num: "06", time: "15 min", title: "Live code-along", desc: "Build the trivia app home and question screens with navigation" },
          { num: "07", time: "4 min",  title: "Claude for navigation translation", desc: "How to use Claude when the syntax looks totally different" },
          { num: "08", time: "5 min",  title: "Lab intro + Q&A", desc: "What you build today" },
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

  // 4: Why data classes
  () => (
    <Shell tag="Language basics" timer="10" title="Data classes and structs — grouping related data" subtitle="You need this before you can build the trivia app" notes="Connect this directly to the trivia app. Ask students: a trivia question has a question text, four answers, and a correct answer index. How would you store that with only variables? They will quickly see that three separate variables are messy — that is exactly why data classes and structs exist.">
      <Discussion>{"Imagine you need to store information about a trivia question: the question text, four possible answers, and which answer is correct. How would you do that using only the var keyword?"}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px" }}>Without a data class — messy</p>
          <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "10px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`var questionText = "Capital of France?"
var answer1 = "London"
var answer2 = "Berlin"
var answer3 = "Paris"
var answer4 = "Madrid"
var correctIndex = 2

// What about question 2?
var question2Text = "..."
var question2Answer1 = "..."
// This gets out of hand immediately`}</pre>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>With a data class — clean</p>
          <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "10px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`data class Question(
    val text: String,
    val answers: List<String>,
    val correctIndex: Int
)

// Now create as many as you need:
val q1 = Question(
    text = "Capital of France?",
    answers = listOf("London","Berlin","Paris","Madrid"),
    correctIndex = 2
)
val q2 = Question(...)`}</pre>
        </div>
      </div>
    </Shell>
  ),

  // 5: Data class vs struct
  () => (
    <Shell tag="Language basics" title="Data class vs struct — two names, same concept" notes="Students are often surprised at how similar these are. Lean into that. The concept is identical: a named template for a group of related values. The only meaningful difference is that Kotlin data classes get equals(), toString(), and copy() for free — Swift structs do not get them automatically but they are easy to add. Do not go deep on this — just note it and move on.">
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 6 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: ".06em", margin: "0 0 2px" }}>Android · Kotlin</p>
        <Step n={1} title="Define the data class" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`data class Question(
    val text: String,
    val answers: List<String>,
    val correctIndex: Int
)`}
          </CodePane>
        </Step>
        <Step n={2} title="Create an instance" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`val question = Question(
    text = "What is 2 + 2?",
    answers = listOf("3", "4", "5", "6"),
    correctIndex = 1
)`}
          </CodePane>
        </Step>
        <Step n={3} title="Access the fields" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`println(question.text)          // "What is 2 + 2?"
println(question.answers[1])    // "4"
println(question.correctIndex)  // 1`}
          </CodePane>
        </Step>

        <p style={{ fontSize: 11, fontWeight: 700, color: TEAL, textTransform: "uppercase", letterSpacing: ".06em", margin: "8px 0 2px" }}>iOS · Swift</p>
        <Step n={1} title="Define the struct" accent={TEAL}>
          <CodePane accent={TEAL}>
{`struct Question {
    let text: String
    let answers: [String]
    let correctIndex: Int
}`}
          </CodePane>
        </Step>
        <Step n={2} title="Create an instance" accent={TEAL}>
          <CodePane accent={TEAL}>
{`let question = Question(
    text: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correctIndex: 1
)`}
          </CodePane>
        </Step>
        <Step n={3} title="Access the fields" accent={TEAL}>
          <CodePane accent={TEAL}>
{`print(question.text)          // "What is 2 + 2?"
print(question.answers[1])    // "4"
print(question.correctIndex)  // 1`}
          </CodePane>
        </Step>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 10 }}>
        {[
          { a: "data class", b: "struct", label: "The keyword" },
          { a: "List<String>", b: "[String]", label: "List of Strings" },
          { a: "listOf(...)", b: "[...]", label: "Creating a list" },
        ].map(row => (
          <div key={row.label} style={{ background: GRAY, borderRadius: 6, padding: "8px 10px", textAlign: "center" }}>
            <p style={{ fontSize: 11, color: MUTED, margin: "0 0 4px" }}>{row.label}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 6, alignItems: "center" }}>
              <code style={{ fontSize: 11, background: PURPLE_LIGHT, color: PURPLE, padding: "1px 5px", borderRadius: 4 }}>{row.a}</code>
              <span style={{ fontSize: 10, color: MUTED }}>↔</span>
              <code style={{ fontSize: 11, background: TEAL_LIGHT, color: TEAL, padding: "1px 5px", borderRadius: 4 }}>{row.b}</code>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 6: Functions with parameters
  () => (
    <Shell tag="Language basics" timer="5" title="Passing functions as parameters — the callback pattern" subtitle="This is how screens talk to each other without knowing about navigation" notes="This pattern — passing a lambda as a parameter — is fundamental to how navigation works in both platforms. The key insight: HomeScreen does not need to know anything about NavController. It just calls onStartClicked() and whoever set up the navigation handles what happens. This separation of concerns is good design.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>We saw this in Week 1 — now let us understand WHY it is useful for navigation.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: ".06em", margin: "0 0 2px" }}>Android · Kotlin</p>
        <Step n={1} title="Declare the parameter" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`@Composable
fun HomeScreen(
    onStartClicked: () -> Unit  // () -> Unit = no params, no return
)`}
          </CodePane>
        </Step>
        <Step n={2} title="Call it on button tap" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`Button(onClick = onStartClicked) {
    Text("Start Quiz")
}`}
          </CodePane>
        </Step>
        <Step n={3} title="Pass it from the caller" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`HomeScreen(
    onStartClicked = {
        navController.navigate("question")
        // HomeScreen has no idea this is here
    }
)`}
          </CodePane>
        </Step>

        <p style={{ fontSize: 11, fontWeight: 700, color: TEAL, textTransform: "uppercase", letterSpacing: ".06em", margin: "8px 0 2px" }}>iOS · Swift</p>
        <Step n={1} title="Declare the property" accent={TEAL}>
          <CodePane accent={TEAL}>
{`struct HomeScreen: View {
    var onStartClicked: () -> Void
    // () -> Void = a closure that takes nothing, returns nothing`}
          </CodePane>
        </Step>
        <Step n={2} title="Call it on button tap" accent={TEAL}>
          <CodePane accent={TEAL}>
{`Button(action: onStartClicked) {
    Text("Start Quiz")
}`}
          </CodePane>
        </Step>
        <Step n={3} title="Pass it from the caller" accent={TEAL}>
          <CodePane accent={TEAL}>
{`HomeScreen(onStartClicked: {
    // navigate to question screen
    // HomeScreen has no idea this is here
})`}
          </CodePane>
        </Step>
      </div>
      <Info>{"Callback pattern: whenever a child component needs to tell its parent something happened, it calls a function the parent passed in. Used everywhere in mobile development — not just navigation."}</Info>
    </Shell>
  ),

  // 7: The navigation stack mental model
  () => (
    <Shell tag="Navigation" timer="8" title="The navigation stack — the mental model" subtitle="Understand this and everything else makes sense" notes="Spend real time on this. Draw it on the board. Stack of cards is the right metaphor — each screen is a card. Navigate pushes a card. Back pops a card. The card underneath is still there — you just cannot see it. This is why pressing back always returns to the exact state you left.">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 6 }}>
        <div>
          <Bullet>The navigation stack is like a stack of cards — each screen is a card</Bullet>
          <Bullet>Navigating to a new screen PUSHES a card on top of the stack</Bullet>
          <Bullet>Pressing the back button POPS the top card — revealing the one underneath</Bullet>
          <Bullet>The bottom card is always the start destination — you can never go back past it</Bullet>
          <Bullet>Screens underneath are still alive — just not visible</Bullet>
          <Bullet sub>This is why your profile app state was preserved when you pressed back</Bullet>
          <Bullet sub>The screen was still in memory — just hidden under the new one</Bullet>
          <Discussion>{"If you navigate: Home → Question 1 → Question 2 → Question 3, how many screens are on the stack? If you press back three times, where do you end up?"}</Discussion>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
          {[
            { label: "Question 3", note: "← top (visible)", bg: PURPLE, text: "#fff" },
            { label: "Question 2", note: "hidden", bg: "#AFA9EC", text: PURPLE_DARK },
            { label: "Question 1", note: "hidden", bg: "#CECBF6", text: PURPLE_DARK },
            { label: "Home", note: "start destination", bg: PURPLE_LIGHT, text: PURPLE_DARK },
          ].map((s, i) => (
            <div key={s.label} style={{ background: s.bg, borderRadius: 8, padding: "8px 16px", width: "100%", textAlign: "center", transform: `translateX(${i * -4}px)`, boxShadow: i === 0 ? "0 2px 8px rgba(83,74,183,0.3)" : "none" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: s.text, margin: 0 }}>{s.label}</p>
              <p style={{ fontSize: 10, color: s.text, opacity: 0.7, margin: 0 }}>{s.note}</p>
            </div>
          ))}
          <div style={{ marginTop: 6, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ fontSize: 18, color: PURPLE }}>↑</div>
            <p style={{ fontSize: 10, color: MUTED, margin: 0 }}>navigate() pushes</p>
            <div style={{ fontSize: 18, color: TEAL }}>↓</div>
            <p style={{ fontSize: 10, color: MUTED, margin: 0 }}>back pops</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 8: Navigation concepts
  () => (
    <Shell tag="Navigation" title="Navigation vocabulary — three things to know" notes="Keep this crisp. Three concepts, one slide. Students do not need the full API yet — they need the vocabulary so they can read documentation and ask Claude the right questions.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          { icon: "📍", term: "Start destination", compose: "startDestination =", swift: "Root View in NavigationStack", desc: "The bottom of the stack — the first screen the app opens on. You cannot go back past this." },
          { icon: "➡️", term: "Navigate / push", compose: "navController.navigate()", swift: "NavigationLink destination:", desc: "Pushes a new screen onto the top of the stack. The previous screen is still alive underneath." },
          { icon: "⬅️", term: "Back / pop", compose: "navController.popBackStack()", swift: "Automatic back button, or dismiss()", desc: "Removes the top screen from the stack. The screen underneath becomes visible again." },
        ].map(item => (
          <div key={item.term} style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 22, margin: "0 0 6px" }}>{item.icon}</p>
            <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: "0 0 6px" }}>{item.term}</p>
            <div style={{ marginBottom: 8 }}>
              <code style={{ fontSize: 10, background: PURPLE_LIGHT, color: PURPLE, padding: "1px 5px", borderRadius: 3, display: "block", marginBottom: 3 }}>{item.compose}</code>
              <code style={{ fontSize: 10, background: TEAL_LIGHT, color: TEAL, padding: "1px 5px", borderRadius: 3, display: "block" }}>{item.swift}</code>
            </div>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
          </div>
        ))}
      </div>
      <Warn title="The biggest source of navigation bugs for beginners">{"Calling navigate() when you should call popBackStack(). If you navigate back to home instead of popping, you are creating a NEW home screen on top of the old one. The back button will take the user to the previous home — confusing and broken. Use popBackStack() to go back, navigate() to go forward."}</Warn>
    </Shell>
  ),

  // 9: NavHost setup
  () => (
    <Shell tag="Navigation setup" timer="8" title="Setting up navigation — NavHost and NavigationStack" notes="This is where the syntax diverges most visibly. Acknowledge it directly: these look very different. But look at what they both do: define a set of screens and which one is first. The concept is identical. After showing this slide, ask students to describe what the NavHost is doing in plain English before you explain it.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Both platforms need a container that knows about all the screens in your app. The syntax looks different — the concept is the same.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: ".06em", margin: "0 0 2px" }}>Android · Kotlin</p>
        <Step n={1} title="Create the controller" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`val navController = rememberNavController()
// NavController manages the back stack`}
          </CodePane>
        </Step>
        <Step n={2} title="Declare the NavHost" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`NavHost(
    navController = navController,
    startDestination = "home"   // first screen shown
) {
    composable("home") {
        HomeScreen(
            onStartClicked = { navController.navigate("question") }
        )
    }
    composable("question") {
        QuestionScreen()
    }
}`}
          </CodePane>
        </Step>

        <p style={{ fontSize: 11, fontWeight: 700, color: TEAL, textTransform: "uppercase", letterSpacing: ".06em", margin: "8px 0 2px" }}>iOS · Swift</p>
        <Step n={1} title="Wrap in NavigationStack" accent={TEAL}>
          <CodePane accent={TEAL}>
{`struct ContentView: View {
    var body: some View {
        NavigationStack {
            HomeScreen()   // start destination
        }
    }
}`}
          </CodePane>
        </Step>
        <Step n={2} title="Add a NavigationLink" accent={TEAL}>
          <CodePane accent={TEAL}>
{`struct HomeScreen: View {
    var body: some View {
        VStack {
            NavigationLink(destination: QuestionScreen()) {
                Text("Start Quiz")
            }
        }
    }
}`}
          </CodePane>
        </Step>
      </div>
    </Shell>
  ),

  // 10: Why they differ
  () => (
    <Shell tag="Navigation setup" title="Why do they look so different?" subtitle="The concept is identical — the architecture is not" notes="This slide builds intuition for WHY the platforms diverged, which helps students understand and remember both approaches. The key message: neither is wrong. They reflect different design philosophies. Claude can translate between them instantly — you just need to understand what each is doing conceptually.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div style={{ background: PURPLE_LIGHT, border: `1px solid ${PURPLE}33`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE, margin: "0 0 8px" }}>Compose — centralised routing</p>
          <Bullet>All routes defined in one place — the NavHost</Bullet>
          <Bullet>NavController is passed to screens that need to navigate</Bullet>
          <Bullet>Screens navigate by name — like URLs in a web app</Bullet>
          <Bullet sub>navigate("question") is like visiting /question in a browser</Bullet>
          <Bullet>Easier to see all routes at once</Bullet>
          <Bullet>More setup, more explicit control</Bullet>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}33`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>SwiftUI — declarative links</p>
          <Bullet>Navigation links live inside the UI alongside the content</Bullet>
          <Bullet>No central controller — NavigationStack manages the stack automatically</Bullet>
          <Bullet>Links are part of the view tree — very declarative</Bullet>
          <Bullet sub>NavigationLink is just another component like Button or Text</Bullet>
          <Bullet>Less setup, slightly less control</Bullet>
          <Bullet>Easier to read for simple navigation flows</Bullet>
        </div>
      </div>
      <Info>{"Focus on the shared concept: both define a set of screens, both manage a stack, both support forward and back navigation. The vocabulary and syntax are different. Claude translates between them in seconds."}</Info>
      <Discussion>{"Looking at both approaches, which one makes more sense to you intuitively? Which would be harder to maintain in a big app with 20 screens?"}</Discussion>
    </Shell>
  ),

  // 11: Live code-along intro
  () => (
    <Shell tag="Live code-along" timer="15" title="Let us build together — the trivia app" subtitle="New project: TriviaApp. Open your IDE." dark notes="Build from scratch. Create the data class first, then the home screen, then the question screen, then wire them together with navigation. Students should see the full flow before lab. Deliberately navigate forward and back multiple times during the demo to reinforce the stack mental model.">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>What we are building today</p>
          {[
            { n: 1, t: "New project — TriviaApp" },
            { n: 2, t: "Question data class / struct" },
            { n: 3, t: "Hardcoded list of 3 sample questions" },
            { n: 4, t: "HomeScreen — title, tagline, Start button" },
            { n: 5, t: "QuestionScreen — question text, 4 answer buttons" },
            { n: 6, t: "NavHost / NavigationStack setup" },
            { n: 7, t: "Wire Start button to navigate to question" },
            { n: 8, t: "Test: navigate forward and back" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "center" }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 14, textAlign: "center" }}>
            <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>Trivia Challenge</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: "0 0 16px" }}>Test your knowledge!</p>
            <div style={{ background: TEAL, borderRadius: 8, padding: "8px 16px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: 0 }}>Start Quiz</p>
            </div>
          </div>
          <div style={{ fontSize: 20, textAlign: "center", color: "rgba(255,255,255,0.4)" }}>↓ tap</div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 14 }}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: "0 0 6px" }}>Question 1 of 3</p>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>Capital of France?</p>
            {["London", "Berlin", "Paris", "Madrid"].map(a => (
              <div key={a} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 6, padding: "5px 10px", marginBottom: 4 }}>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 12: Code-along part 1 — data model
  () => (
    <Shell tag="Live code-along" title="Part 1 — the data model" notes="Type the data class first before any UI. Ask students: why do we define the data model before the screens? The answer: the screens depend on the data structure. If you change the data model later, you have to update every screen. Define it once, cleanly, at the start.">
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 6 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: ".06em", margin: "0 0 2px" }}>Android · Kotlin — Question.kt</p>
        <Step n={1} title="Define the data class" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`data class Question(
    val text: String,
    val answers: List<String>,
    val correctIndex: Int
)`}
          </CodePane>
        </Step>
        <Step n={2} title="Create sample data" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`val sampleQuestions = listOf(
    Question(
        text = "What is the capital of France?",
        answers = listOf("London","Berlin","Paris","Madrid"),
        correctIndex = 2
    ),
    Question(
        text = "Which planet is closest to the Sun?",
        answers = listOf("Venus","Mercury","Earth","Mars"),
        correctIndex = 1
    ),
    Question(
        text = "How many sides does a hexagon have?",
        answers = listOf("5","6","7","8"),
        correctIndex = 1
    )
)`}
          </CodePane>
        </Step>

        <p style={{ fontSize: 11, fontWeight: 700, color: TEAL, textTransform: "uppercase", letterSpacing: ".06em", margin: "8px 0 2px" }}>iOS · Swift — Question.swift</p>
        <Step n={1} title="Define the struct" accent={TEAL}>
          <CodePane accent={TEAL}>
{`struct Question {
    let text: String
    let answers: [String]
    let correctIndex: Int
}`}
          </CodePane>
        </Step>
        <Step n={2} title="Create sample data" accent={TEAL}>
          <CodePane accent={TEAL}>
{`let sampleQuestions: [Question] = [
    Question(
        text: "What is the capital of France?",
        answers: ["London","Berlin","Paris","Madrid"],
        correctIndex: 2
    ),
    Question(
        text: "Which planet is closest to the Sun?",
        answers: ["Venus","Mercury","Earth","Mars"],
        correctIndex: 1
    ),
    Question(
        text: "How many sides does a hexagon have?",
        answers: ["5","6","7","8"],
        correctIndex: 1
    )
]`}
          </CodePane>
        </Step>
      </div>
      <Info>{"The data class and struct look nearly identical — field names and types are the same. Good data models are platform-agnostic."}</Info>
    </Shell>
  ),

  // 13: Code-along part 2 — home screen
  () => (
    <Shell tag="Live code-along" title="Part 2 — the home screen" notes="Point out the onStartClicked parameter explicitly. Ask students: why is it a parameter instead of NavController? Answer: so the screen does not need to know about navigation at all. It just says 'something happened' and the caller decides what to do. This is called separation of concerns and it is a key design principle.">
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 6 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: ".06em", margin: "0 0 2px" }}>Android · Kotlin</p>
        <Step n={1} title="Accept a callback" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`@Composable
fun HomeScreen(onStartClicked: () -> Unit) {`}
          </CodePane>
        </Step>
        <Step n={2} title="Build the column" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Trivia Challenge", fontSize = 32.sp,
            fontWeight = FontWeight.Bold, color = Color(0xFF534AB7))
        Spacer(modifier = Modifier.height(8.dp))
        Text("Test your knowledge!", fontSize = 16.sp, color = Color.Gray)
        Spacer(modifier = Modifier.height(48.dp))`}
          </CodePane>
        </Step>
        <Step n={3} title="Wire the button" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`        Button(
            onClick = onStartClicked,   // call the callback
            modifier = Modifier.fillMaxWidth(),
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFF534AB7)
            )
        ) { Text("Start Quiz", fontSize = 16.sp) }
    }
}`}
          </CodePane>
        </Step>

        <p style={{ fontSize: 11, fontWeight: 700, color: TEAL, textTransform: "uppercase", letterSpacing: ".06em", margin: "8px 0 2px" }}>iOS · Swift</p>
        <Step n={1} title="Declare the closure" accent={TEAL}>
          <CodePane accent={TEAL}>
{`struct HomeScreen: View {
    var onStartClicked: () -> Void`}
          </CodePane>
        </Step>
        <Step n={2} title="Build the VStack" accent={TEAL}>
          <CodePane accent={TEAL}>
{`    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("Trivia Challenge")
                    .font(.largeTitle).fontWeight(.bold)
                    .foregroundColor(Color(red:0.33,green:0.29,blue:0.72))
                Text("Test your knowledge!")
                    .font(.subheadline).foregroundColor(.gray)
                Spacer().frame(height: 48)`}
          </CodePane>
        </Step>
        <Step n={3} title="Wire the button" accent={TEAL}>
          <CodePane accent={TEAL}>
{`                Button(action: onStartClicked) {  // call the closure
                    Text("Start Quiz")
                        .font(.headline).foregroundColor(.white)
                        .frame(maxWidth: .infinity).padding()
                        .background(Color(red:0.33,green:0.29,blue:0.72))
                        .cornerRadius(10)
                }
            }
            .padding(32)
        }
    }
}`}
          </CodePane>
        </Step>
      </div>
    </Shell>
  ),

  // 14: Code-along part 3 — question screen
  () => (
    <Shell tag="Live code-along" title="Part 3 — the question screen" notes="Introduce forEachIndexed / ForEach here. Students may not have seen loops before. Explain it simply: it goes through the answers list and creates a Button for each one. This is the precursor to the full list concepts in Week 3. Keep it simple — do not go deep on loop mechanics now.">
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 6 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: ".06em", margin: "0 0 2px" }}>Android · Kotlin</p>
        <Step n={1} title="Load the first question" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`@Composable
fun QuestionScreen() {
    val question = sampleQuestions[0]`}
          </CodePane>
        </Step>
        <Step n={2} title="Render question text" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`    Column(
        modifier = Modifier.fillMaxSize()
            .background(Color(0xFFF5F5F5)).padding(24.dp),
        verticalArrangement = Arrangement.Center
    ) {
        Text("Question 1 of ${"\${sampleQuestions.size}"}",
            fontSize = 14.sp, color = Color.Gray)
        Spacer(Modifier.height(12.dp))
        Text(question.text, fontSize = 22.sp,
            fontWeight = FontWeight.Bold, lineHeight = 30.sp)
        Spacer(Modifier.height(32.dp))`}
          </CodePane>
        </Step>
        <Step n={3} title="Loop answer buttons" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`        question.answers.forEachIndexed { index, answer ->
            Button(
                onClick = { /* handle in Session 2 */ },
                modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Color.White),
                border = BorderStroke(1.dp, Color(0xFF534AB7))
            ) { Text(answer, color = Color(0xFF534AB7)) }
        }
    }
}`}
          </CodePane>
        </Step>

        <p style={{ fontSize: 11, fontWeight: 700, color: TEAL, textTransform: "uppercase", letterSpacing: ".06em", margin: "8px 0 2px" }}>iOS · Swift</p>
        <Step n={1} title="Load the first question" accent={TEAL}>
          <CodePane accent={TEAL}>
{`struct QuestionScreen: View {
    let question = sampleQuestions[0]`}
          </CodePane>
        </Step>
        <Step n={2} title="Render question text" accent={TEAL}>
          <CodePane accent={TEAL}>
{`    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(alignment: .leading, spacing: 12) {
                Text("Question 1 of \\(sampleQuestions.count)")
                    .font(.subheadline).foregroundColor(.gray)
                Text(question.text)
                    .font(.title2).fontWeight(.bold).lineSpacing(6)
                Spacer().frame(height: 20)`}
          </CodePane>
        </Step>
        <Step n={3} title="Loop answer buttons" accent={TEAL}>
          <CodePane accent={TEAL}>
{`                ForEach(
                    Array(question.answers.enumerated()),
                    id: \\.offset
                ) { index, answer in
                    Button(action: { /* Session 2 */ }) {
                        Text(answer)
                            .foregroundColor(Color(red:0.33,green:0.29,blue:0.72))
                            .frame(maxWidth: .infinity).padding()
                            .background(Color.white).cornerRadius(10)
                            .overlay(RoundedRectangle(cornerRadius:10)
                                .stroke(Color(red:0.33,green:0.29,blue:0.72), lineWidth:1))
                    }
                }
            }.padding(24)
        }
    }
}`}
          </CodePane>
        </Step>
      </div>
    </Shell>
  ),

  // 15: Code-along part 4 — wiring navigation
  () => (
    <Shell tag="Live code-along" title="Part 4 — wiring it all together" notes="This is the payoff of the whole session. Type the NavHost / NavigationStack setup and run it. Navigate forward, then back. Do this several times while narrating: 'I am pushing a screen onto the stack... I am popping it off.' The physical metaphor with the visual action reinforces the mental model.">
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 6 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, textTransform: "uppercase", letterSpacing: ".06em", margin: "0 0 2px" }}>Android · Kotlin — MainActivity.kt</p>
        <Step n={1} title="Create the NavController" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()`}
          </CodePane>
        </Step>
        <Step n={2} title="Define the route map" accent={PURPLE}>
          <CodePane accent={PURPLE}>
{`            NavHost(
                navController = navController,
                startDestination = "home"
            ) {
                composable("home") {
                    HomeScreen(
                        onStartClicked = {
                            navController.navigate("question")  // push
                        }
                    )
                }
                composable("question") {
                    QuestionScreen()  // back button pops automatically
                }
            }
        }
    }
}`}
          </CodePane>
        </Step>

        <p style={{ fontSize: 11, fontWeight: 700, color: TEAL, textTransform: "uppercase", letterSpacing: ".06em", margin: "8px 0 2px" }}>iOS · Swift — ContentView.swift</p>
        <Step n={1} title="Wrap in NavigationStack" accent={TEAL}>
          <CodePane accent={TEAL}>
{`struct ContentView: View {
    var body: some View {
        NavigationStack {
            HomeScreenWithNav()   // back stack managed automatically
        }
    }
}`}
          </CodePane>
        </Step>
        <Step n={2} title="Push via NavigationLink" accent={TEAL}>
          <CodePane accent={TEAL}>
{`struct HomeScreenWithNav: View {
    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("Trivia Challenge").font(.largeTitle).fontWeight(.bold)
                Text("Test your knowledge!").foregroundColor(.gray)
                Spacer().frame(height: 48)
                NavigationLink(destination: QuestionScreen()) {
                    Text("Start Quiz")
                        .font(.headline).foregroundColor(.white)
                        .frame(maxWidth:.infinity).padding()
                        .background(Color(red:0.33,green:0.29,blue:0.72))
                        .cornerRadius(10)
                }
            }
            .padding(32).navigationBarHidden(true)
        }
    }
}`}
          </CodePane>
        </Step>
      </div>
    </Shell>
  ),

  // 16: Claude for navigation
  () => (
    <Shell tag="AI tools" timer="4" title="Using Claude when navigation syntax confuses you" notes="Navigation is where students most often turn to Claude out of pure confusion rather than as a learning tool. Redirect that: use Claude to understand, not just to get working code. The translation prompt is especially valuable here because the two platforms look so different.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Navigation has the biggest syntax gap between Android and iOS so far. Here is how to use Claude well.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Prompts that build understanding</p>
          {[
            { label: "Translation with explanation", prompt: "I set up navigation in [Compose / SwiftUI]. Translate it to [SwiftUI / Compose]. Then explain: what is conceptually the same, and what is genuinely architecturally different?" },
            { label: "Understanding an error", prompt: "I am getting this error when I try to navigate: [paste error]. What does it mean and what is the most likely cause for a beginner?" },
            { label: "Mental model check", prompt: "I want to make sure I understand the navigation stack. If I navigate from Home to Screen A to Screen B, and then call popBackStack(), which screen do I end up on? Explain why." },
          ].map(p => (
            <div key={p.label} style={{ background: GRAY, borderRadius: 8, padding: "9px 12px", marginBottom: 7 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE, margin: "0 0 3px" }}>{p.label}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>{p.prompt}</p>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What Claude is especially good at here</p>
          {[
            "Translating NavHost setup to NavigationStack syntax",
            "Explaining WHY navigate() vs popBackStack()",
            "Debugging back stack issues — stuck on wrong screen",
            "Showing the same navigation pattern in both platforms side by side",
          ].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "6px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.4 }}>{t}</span>
            </div>
          ))}
          <Info>{"The navigation APIs on both platforms change more frequently than most other APIs. If the code from the slides does not compile, ask Claude to check whether the API has changed and suggest the current syntax."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 17: Lab — part 1
  () => (
    <Shell tag="Lab intro" title="Lab — part 1: build the foundation" subtitle="~31 min · Start the emulator now while I am talking." notes="Tell students to start their emulator immediately — it takes 2 minutes to boot and is the most common time waster. Walk through each step name but do not read the descriptions. Students have the lab spec open.">
      <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
        {[
          { n: 0, t: "New project", desc: "Create a new TriviaApp project in Android Studio or Xcode", time: "3 min" },
          { n: 1, t: "Data model", desc: "Write the Question data class / struct and 3 sample questions", time: "8 min" },
          { n: 2, t: "HomeScreen", desc: "Title, tagline, and a Start Quiz button that calls onStartClicked", time: "10 min" },
          { n: 3, t: "QuestionScreen", desc: "Question text and 4 answer buttons looped from the answers list", time: "10 min" },
        ].map(s => (
          <div key={s.n} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: `1px solid ${GRAY}`, alignItems: "flex-start" }}>
            <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 24, height: 24, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{s.n}</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 2px" }}>{s.t}</p>
              <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.4 }}>{s.desc}</p>
            </div>
            <span style={{ fontSize: 11, color: MUTED, flexShrink: 0, marginTop: 2 }}>{s.time}</span>
          </div>
        ))}
      </div>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 6, padding: "8px 12px", marginTop: 10 }}>
        <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>Start the emulator or simulator <strong>now</strong> — it takes 2 minutes to boot.</p>
      </div>
    </Shell>
  ),

  // 18: Lab — part 2
  () => (
    <Shell tag="Lab intro" title="Lab — part 2: wire it up and reflect" subtitle="~25 min · Then show a TA before you leave." notes="Circulate while students work on navigation — this is where most bugs appear. Common mistake: calling navigate() to go back instead of popBackStack(). Watch for it and correct it early.">
      <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
        {[
          { n: 4, t: "Wire navigation", desc: "Set up NavHost or NavigationStack and connect the Start button", time: "12 min" },
          { n: 5, t: "Ask Claude", desc: "Translate your navigation setup to the other platform. Ask Claude to explain what is the same and what is different", time: "8 min" },
          { n: 6, t: "Reflection", desc: "Answer the 3 reflection questions in a comment block at the top of your main file", time: "5 min" },
        ].map(s => (
          <div key={s.n} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: `1px solid ${GRAY}`, alignItems: "flex-start" }}>
            <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 24, height: 24, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{s.n}</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 2px" }}>{s.t}</p>
              <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.4 }}>{s.desc}</p>
            </div>
            <span style={{ fontSize: 11, color: MUTED, flexShrink: 0, marginTop: 2 }}>{s.time}</span>
          </div>
        ))}
      </div>
      <div style={{ background: GRAY, borderRadius: 10, padding: "12px 14px", marginTop: 12 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Before you leave — show a TA</p>
        {[
          "Home screen renders correctly",
          "Tapping Start Quiz navigates to the question screen",
          "Back button returns to the home screen",
          "Reflection comment block complete",
        ].map(t => (
          <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
            <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 18: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Questions before lab?</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Then open your IDE — your trivia app is waiting to be built</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned today</p>
            {["Data classes and structs — grouping related data", "Functions with callback parameters", "The navigation stack — push, pop, back", "NavHost setup in Compose", "NavigationStack and NavigationLink in SwiftUI", "Why the two platforms look different but work the same"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Session 2</p>
            {["Passing data between screens — not just navigating", "How to pass a Question object to the question screen", "Tracking score across multiple screens", "The back stack — navigate vs popBackStack", "Completing the full quiz flow end to end"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>{"End with energy. By the end of Session 2 students will have a complete, playable trivia game. That is a real app — something they can show their friends. Remind them to start Assignment 1 if they have not already — it is due before this session started, so anyone who has not submitted should do so tonight."}</Notes>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 2 · Session 1 · {slides.length} slides</p>
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
