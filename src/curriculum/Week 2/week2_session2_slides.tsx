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
  <div style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "8px 12px", margin: "8px 0" }}>
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
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 2 — Session 2</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>Passing data between screens<br/>and the back stack</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Completing the full trivia app flow</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Builds on Session 1", "Data passing", "Score tracking", "Results screen"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${TEAL}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Quick lab check: ask students to show their trivia app from Session 1. Can they navigate from home to the question screen and back? Anyone who could not get navigation working needs to pair with someone who did — they need working navigation before today's content makes sense."}</Notes>
    </div>
  ),

  // 2: Recap
  () => (
    <Shell tag="Recap" timer="5" title="Session 1 recap — navigation fundamentals" notes="Keep this to 5 minutes. If students cannot answer these, do a very quick re-explanation before moving on. Today's content stacks directly on top of Session 1 — gaps will compound fast.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          { q: "What is the navigation stack?", a: "A stack of screens — like a stack of cards. Navigate pushes a card on top. Back pops the top card off." },
          { q: "What is a data class / struct?", a: "A blueprint for a group of related data — like a Question with text, answers, and correctIndex." },
          { q: "What is NavHost in Compose?", a: "A container that defines all the routes/destinations in your app and which one is the start." },
          { q: "What is NavigationLink in SwiftUI?", a: "A tappable component that pushes a destination view onto the NavigationStack when tapped." },
        ].map(item => (
          <div key={item.q} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{item.q}</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <Discussion>{"Right now, QuestionScreen always shows sampleQuestions[0]. If you wanted to show question 2 instead, what would you change? How would the home screen tell the question screen which question to show?"}</Discussion>
    </Shell>
  ),

  // 3: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 60 minutes" notes="By the end of today students will have a fully playable trivia game. Set that expectation explicitly — it is motivating. The full flow: home → questions 1, 2, 3 → results → play again. Every concept today serves that goal.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "5 min",  title: "Recap", desc: "Session 1 navigation concepts" },
          { num: "02", time: "8 min",  title: "Passing data — the concept", desc: "How do you send information from one screen to another?" },
          { num: "03", time: "8 min",  title: "Passing data — in code", desc: "Arguments in Compose routes, init parameters in SwiftUI" },
          { num: "04", time: "8 min",  title: "The back stack — navigate vs popBackStack", desc: "The most important distinction for real apps" },
          { num: "05", time: "5 min",  title: "Tracking state across screens", desc: "Where to keep score when it spans multiple screens" },
          { num: "06", time: "18 min", title: "Live code-along", desc: "Complete the trivia app — data passing, score, results screen" },
          { num: "07", time: "4 min",  title: "Lab intro + Q&A", desc: "What you build today" },
          { num: "08", time: "4 min",  title: "Week 2 wrap-up", desc: "Assignment 2 overview and what comes in Week 3" },
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

  // 4: Passing data — concept
  () => (
    <Shell tag="Data passing" timer="8" title="Passing data between screens" subtitle="Navigation is not just about moving — it is about carrying information" notes="Use a concrete real-world example first. You are at an airport (home screen). You get your boarding pass (data). You walk to the gate (navigate). The gate agent scans your boarding pass (the destination screen reads the data). Without the boarding pass, the gate agent does not know who you are or where you are going.">
      <Discussion>{"Think about opening a product page on Amazon. The home page shows a list of products. You tap one and go to its detail page. How does the detail page know WHICH product to show? What data must have been passed?"}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 10 }}>
        {[
          { icon: "🛍️", from: "Product list", to: "Product detail", data: "productId or the full Product object" },
          { icon: "📩", from: "Inbox", to: "Email detail", data: "emailId or the full Email object" },
          { icon: "❓", from: "Quiz home", to: "Question screen", data: "questionIndex or the full Question object" },
        ].map(ex => (
          <div key={ex.from} style={{ background: GRAY, borderRadius: 8, padding: "12px 14px", textAlign: "center" }}>
            <p style={{ fontSize: 22, margin: "0 0 6px" }}>{ex.icon}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 8 }}>
              <span style={{ fontSize: 11, color: PURPLE, fontWeight: 600 }}>{ex.from}</span>
              <span style={{ color: MUTED }}>→</span>
              <span style={{ fontSize: 11, color: TEAL, fontWeight: 600 }}>{ex.to}</span>
            </div>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>Passes: {ex.data}</p>
          </div>
        ))}
      </div>
      <Info>{"In our trivia app: when the user taps Start Quiz, the home screen needs to tell the question screen which question to show. We will pass the question index. The question screen then looks up the question from our sampleQuestions list."}</Info>
    </Shell>
  ),

  // 5: Passing data — in code
  () => (
    <Shell tag="Data passing" title="Passing data — how it looks in code" notes="Walk through each approach carefully. Compose embeds data in the route string like a URL path — /question/0, /question/1. SwiftUI passes data directly as an initializer parameter. Both are valid approaches. SwiftUI's approach is more type-safe. Compose's approach is more flexible for deep linking. Students do not need to understand the tradeoffs — just understand what each is doing.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Compose — data in the route string" accent={PURPLE}>
{`// Route with an argument: "question/{questionIndex}"
// {questionIndex} is a placeholder — like a URL parameter

NavHost(navController, startDestination = "home") {
    composable("home") {
        HomeScreen(onStartClicked = {
            navController.navigate("question/0")
            //                               ↑ pass index 0
        })
    }
    composable("question/{questionIndex}") { backStackEntry ->
        // Extract the argument from the back stack entry
        val index = backStackEntry
            .arguments
            ?.getString("questionIndex")
            ?.toInt() ?: 0

        QuestionScreen(questionIndex = index)
    }
}

// Think of it like a URL:
// navigate("question/0")  →  /question/0
// navigate("question/1")  →  /question/1
// navigate("question/2")  →  /question/2`}
        </CodePane>
        <CodePane title="SwiftUI — data as initialiser parameter" accent={TEAL}>
{`// SwiftUI passes data directly — no string encoding needed
// NavigationLink takes the destination view as a parameter
// and you can pass data into its initialiser

// In HomeScreen:
NavigationLink(
    destination: QuestionScreen(questionIndex: 0)
    //                                        ↑ pass index 0
) {
    Text("Start Quiz")
}

// QuestionScreen accepts it as a let property:
struct QuestionScreen: View {
    let questionIndex: Int  // received from the caller

    // Computed property — looks up the question from the index
    var question: Question {
        sampleQuestions[questionIndex]
    }

    var body: some View {
        // use question.text, question.answers, etc.
    }
}

// Navigate to question 1:
NavigationLink(destination: QuestionScreen(questionIndex: 1)) {
    Text("Next")
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 6: navigate vs popBackStack
  () => (
    <Shell tag="Back stack" timer="8" title="navigate() vs popBackStack() — the most important distinction" subtitle="Getting this wrong is the most common navigation bug" notes="This is the slide that saves students the most debugging time. Draw the stack on the board and physically show what happens when you navigate vs pop. Many beginners navigate back to home instead of popping, resulting in a stack of home screens they cannot escape from.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 10px", textTransform: "uppercase" }}>navigate() — ADDS a screen</p>
          <Bullet>Creates a new screen and pushes it onto the stack</Bullet>
          <Bullet>The previous screen stays alive underneath</Bullet>
          <Bullet>Stack gets deeper with each call</Bullet>
          <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "8px 12px", margin: "8px 0" }}>
            <pre style={{ margin: 0, color: "#cdd6f4", fontSize: 11, fontFamily: "monospace" }}>{`navController.navigate("home")
// Stack: Home → Question → Results → Home (new!)
// Now pressing back goes to Results, not exit`}</pre>
          </div>
          <p style={{ fontSize: 12, color: "#b91c1c", fontWeight: 600, margin: "6px 0 2px" }}>When to use:</p>
          <p style={{ fontSize: 12, color: TEXT, margin: 0 }}>Moving FORWARD to a new destination — question to results, home to question</p>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 10px", textTransform: "uppercase" }}>popBackStack() — REMOVES a screen</p>
          <Bullet>Removes the current screen from the stack</Bullet>
          <Bullet>Reveals the screen underneath</Bullet>
          <Bullet>Stack gets shallower with each call</Bullet>
          <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "8px 12px", margin: "8px 0" }}>
            <pre style={{ margin: 0, color: "#cdd6f4", fontSize: 11, fontFamily: "monospace" }}>{`navController.popBackStack("home", inclusive=false)
// Stack: Home → Question → Results
// Results popped → Home (existing!)
// Back to the original home with correct state`}</pre>
          </div>
          <p style={{ fontSize: 12, color: TEAL, fontWeight: 600, margin: "6px 0 2px" }}>When to use:</p>
          <p style={{ fontSize: 12, color: TEXT, margin: 0 }}>Going BACK — Play Again, Cancel, Done — any time you want to return to a previous screen</p>
        </div>
      </div>
      <Warn title="The Play Again bug — extremely common">{"If Play Again calls navigate('home'), it pushes a new home screen. The back button then takes the user to Results. Use popBackStack() to go back to the EXISTING home screen instead."}</Warn>
    </Shell>
  ),

  // 7: Back stack visualised
  () => (
    <Shell tag="Back stack" title="The back stack in action — visualised" notes="Walk through this step by step. Point at each row and narrate: 'User taps Start Quiz — navigate question/0 — stack grows. User taps an answer — navigate question/1 — stack grows. User finishes — navigate results — stack grows. User taps Play Again — popBackStack to home — stack collapses back to just home.' Students should be able to predict what is on the stack at each step.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 12px" }}>Trace the stack through a full quiz session:</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { action: "App launches", stack: ["Home"], code: "startDestination = home", color: PURPLE },
          { action: "Tap Start Quiz", stack: ["Home", "Question 0"], code: 'navigate("question/0")', color: PURPLE },
          { action: "Tap an answer", stack: ["Home", "Question 0", "Question 1"], code: 'navigate("question/1")', color: PURPLE },
          { action: "Last answer tapped", stack: ["Home", "Q0", "Q1", "Q2", "Results"], code: 'navigate("results/2")', color: PURPLE },
          { action: "Tap Play Again", stack: ["Home"], code: 'popBackStack("home", inclusive=false)', color: TEAL },
        ].map((row, i) => (
          <div key={row.action} style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 140, flexShrink: 0 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: 0 }}>{row.action}</p>
              <code style={{ fontSize: 10, color: row.color, display: "block" }}>{row.code}</code>
            </div>
            <div style={{ flex: 1, display: "flex", gap: 4, alignItems: "center" }}>
              {row.stack.map((s, j) => (
                <div key={s} style={{
                  background: j === row.stack.length - 1 ? row.color : `${row.color}44`,
                  color: j === row.stack.length - 1 ? "#fff" : row.color,
                  borderRadius: 5, padding: "3px 8px", fontSize: 10, fontWeight: 600, whiteSpace: "nowrap"
                }}>{s}</div>
              ))}
              {i < 3 && <span style={{ fontSize: 10, color: MUTED }}>← top</span>}
              {i === 4 && <span style={{ fontSize: 10, color: TEAL, fontWeight: 600 }}>← popped back to here</span>}
            </div>
          </div>
        ))}
      </div>
      <Info>{"The Play Again row shows the power of popBackStack. Instead of adding a new Home screen, it collapses the entire stack back to the existing Home — cleanly, without any residual screens underneath."}</Info>
    </Shell>
  ),

  // 8: State across screens
  () => (
    <Shell tag="State" timer="5" title="Tracking state across screens — where does score live?" notes="This is a subtle but important concept. State belongs at the lowest common ancestor of all the screens that need it. Score is needed on every question screen and on the results screen — so it lives at the NavHost level, not inside any individual screen. This is called 'lifting state up' and is a universal pattern in both platforms and in React.">
      <Discussion>{"The score needs to increase on each question screen and then be displayed on the results screen. Which screen should own the score variable — the question screen, the results screen, or somewhere else?"}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 6px" }}>Wrong — score inside QuestionScreen</p>
          <Bullet>Score resets every time you navigate to a new question</Bullet>
          <Bullet>Results screen cannot read it — it is in a different Composable</Bullet>
          <Bullet sub>State inside a screen is local to that screen only</Bullet>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 6px" }}>Right — score at the NavHost level</p>
          <Bullet>Score persists across all question screens</Bullet>
          <Bullet>Results screen can receive it as a navigation argument</Bullet>
          <Bullet sub>State at the top level is shared by everyone below it</Bullet>
        </div>
      </div>
      <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "12px 14px", marginTop: 10 }}>
        <pre style={{ margin: 0, color: "#cdd6f4", fontSize: 11, fontFamily: "monospace", lineHeight: 1.6 }}>{`// Score lives OUTSIDE the NavHost composable blocks:
var score by remember { mutableStateOf(0) }

NavHost(navController, startDestination = "home") {
    composable("home") {
        score = 0  // reset on return to home
        HomeScreen(...)
    }
    composable("question/{index}") { ... }  // updates score
    composable("results/{finalScore}") { ... }  // reads score
}`}</pre>
      </div>
    </Shell>
  ),

  // 9: Answer feedback pattern
  () => (
    <Shell tag="Patterns" title="Answer feedback — showing correct and incorrect" notes="This pattern — selectedIndex state + conditional color — is a very common UI pattern students will use in many contexts beyond trivia. The key: once an answer is selected, disable further taps (selectedIndex != -1 check). Otherwise users can tap multiple answers.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 8px" }}>When a user taps an answer, we want to highlight it green or red and then move on.</p>
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Compose — answer highlight state" accent={PURPLE}>
{`@Composable
fun QuestionScreen(
    questionIndex: Int,
    onAnswerSelected: (correct: Boolean) -> Unit
) {
    val question = sampleQuestions[questionIndex]
    // -1 = no answer selected yet
    var selectedIndex by remember { mutableStateOf(-1) }

    question.answers.forEachIndexed { index, answer ->
        // Color logic:
        val bgColor = when {
            selectedIndex == -1 -> Color.White    // not answered
            index == question.correctIndex -> Color(0xFF1D9E75)  // correct = green
            index == selectedIndex -> Color(0xFFE24B4A)  // wrong = red
            else -> Color.White  // other options stay white
        }
        Button(
            onClick = {
                // Only respond if no answer selected yet
                if (selectedIndex == -1) {
                    selectedIndex = index
                    // Brief delay, then navigate
                    onAnswerSelected(index == question.correctIndex)
                }
            },
            colors = ButtonDefaults.buttonColors(containerColor = bgColor)
        ) {
            Text(answer)
        }
    }
}`}
        </CodePane>
        <div style={{ flex: 0.7, display: "flex", flexDirection: "column", gap: 6, justifyContent: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Visual result</p>
          {[
            { label: "London", state: "white" },
            { label: "Berlin", state: "white" },
            { label: "Paris", state: "correct" },
            { label: "Madrid", state: "selected-wrong" },
          ].map(a => (
            <div key={a.label} style={{
              background: a.state === "correct" ? "#E1F5EE" : a.state === "selected-wrong" ? "#FCEBEB" : "#fff",
              border: `1px solid ${a.state === "correct" ? TEAL : a.state === "selected-wrong" ? "#E24B4A" : "#534AB744"}`,
              borderRadius: 8, padding: "7px 12px"
            }}>
              <p style={{ fontSize: 12, color: a.state === "correct" ? TEAL : a.state === "selected-wrong" ? "#E24B4A" : PURPLE, margin: 0, fontWeight: a.state !== "white" ? 600 : 400 }}>{a.label}</p>
            </div>
          ))}
          <p style={{ fontSize: 11, color: MUTED, margin: "4px 0 0", fontStyle: "italic" }}>User tapped Madrid (wrong). Paris highlighted green, Madrid highlighted red.</p>
        </div>
      </div>
    </Shell>
  ),

  // 10: Results screen pattern
  () => (
    <Shell tag="Patterns" title="The results screen — a natural use of when/switch" notes="Connect this back to the when/switch pattern from Week 1 Session 2. Students have seen this before — it should feel familiar. The new thing here is using a computed percentage to drive both the display and the message. Walk through the percentage calculation explicitly — integer division is a common gotcha.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="ResultsScreen — Compose" accent={PURPLE}>
{`@Composable
fun ResultsScreen(
    score: Int,
    total: Int,
    onPlayAgain: () -> Unit
) {
    // Calculate percentage — note: toFloat() prevents integer division
    val percentage = (score.toFloat() / total * 100).toInt()

    // Message depends on how well they did
    val message = when {
        percentage == 100 -> "Perfect score!"
        percentage >= 70  -> "Great job!"
        percentage >= 40  -> "Good effort!"
        else              -> "Keep practicing!"
    }

    Column(
        modifier = Modifier.fillMaxSize().padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Quiz Complete!", fontSize = 28.sp,
            fontWeight = FontWeight.Bold,
            color = Color(0xFF534AB7))
        Spacer(Modifier.height(24.dp))
        Text("${"$"}score / ${"$"}total", fontSize = 64.sp,
            fontWeight = FontWeight.Bold)
        Text("${"$"}percentage% correct", color = Color.Gray)
        Text(message, fontSize = 18.sp,
            color = Color(0xFF1D9E75))
        Spacer(Modifier.height(40.dp))
        Button(onClick = onPlayAgain,
            modifier = Modifier.fillMaxWidth()) {
            Text("Play Again")
        }
    }
}`}
        </CodePane>
        <div style={{ flex: 0.6, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: GRAY, borderRadius: 10, padding: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: PURPLE, margin: 0 }}>Quiz Complete!</p>
            <p style={{ fontSize: 40, fontWeight: 800, color: TEXT, margin: "8px 0 0" }}>2 / 3</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>67% correct</p>
            <p style={{ fontSize: 14, color: TEAL, fontWeight: 600, margin: "4px 0 12px" }}>Good effort!</p>
            <div style={{ background: PURPLE, borderRadius: 8, padding: "8px 24px", width: "80%" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: 0, textAlign: "center" }}>Play Again</p>
            </div>
          </div>
          <Warn>{"Integer division gotcha: score / total * 100 where score and total are both Int will give 0 if score is less than total. Cast to Float first: (score.toFloat() / total * 100).toInt()"}</Warn>
        </div>
      </div>
    </Shell>
  ),

  // 11: Live code-along intro
  () => (
    <Shell tag="Live code-along" timer="18" title="Completing the trivia app — the full flow" subtitle="Open your TriviaApp from Session 1." dark notes="Build on top of the Session 1 code — do not start fresh. The goal is to get from the partially working app (home → question hardcoded) to a fully playable quiz. Narrate the stack as you navigate during testing: push, push, push, pop back to home. Students should be able to predict where the back button goes at any point.">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>What we are completing today</p>
          {[
            { n: 1, t: "Add questionIndex parameter to the route" },
            { n: 2, t: "Update QuestionScreen to accept and use the index" },
            { n: 3, t: "Add score state at the NavHost level" },
            { n: 4, t: "Add onAnswerSelected callback to QuestionScreen" },
            { n: 5, t: "Wire: correct answer increments score, navigate to next question" },
            { n: 6, t: "After last question, navigate to results with final score" },
            { n: 7, t: "Build ResultsScreen with score display and message" },
            { n: 8, t: "Wire Play Again to popBackStack back to home" },
            { n: 9, t: "Test the full flow: home → q1 → q2 → q3 → results → home" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "center" }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 12, display: "flex", flexDirection: "column", gap: 4 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase" }}>Full flow</p>
          {["Home screen", "→ Question 1", "→ Question 2", "→ Question 3", "→ Results (2/3)", "→ Play Again", "→ Home (reset)"].map((s, i) => (
            <div key={s} style={{ background: i === 5 ? `${TEAL}44` : "rgba(255,255,255,0.06)", borderRadius: 6, padding: "5px 10px" }}>
              <p style={{ fontSize: 11, color: i === 5 ? TEAL : "rgba(255,255,255,0.7)", margin: 0, fontWeight: i === 5 ? 700 : 400 }}>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 12: Code-along part 1 — updated NavHost
  () => (
    <Shell tag="Live code-along" title="Part 1 — updated NavHost with score and data passing" notes="Type this out carefully. The score variable lives above the NavHost — make sure students see WHERE it is declared. This is the key architectural decision: score is hoisted to the level that needs to share it across all screens.">
      <CodePane title="MainActivity.kt — full NavHost with score and routing" accent={PURPLE}>
{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()
            // Score lives here — shared across all screens
            var score by remember { mutableStateOf(0) }

            NavHost(navController, startDestination = "home") {
                composable("home") {
                    score = 0  // reset score every time home appears
                    HomeScreen(
                        onStartClicked = {
                            navController.navigate("question/0")
                        }
                    )
                }
                composable("question/{questionIndex}") { entry ->
                    val index = entry.arguments
                        ?.getString("questionIndex")?.toInt() ?: 0
                    QuestionScreen(
                        questionIndex = index,
                        onAnswerSelected = { correct ->
                            if (correct) score++
                            val next = index + 1
                            if (next < sampleQuestions.size) {
                                navController.navigate("question/${"$"}{next}")
                            } else {
                                navController.navigate("results/${"$"}{score}")
                            }
                        }
                    )
                }
                composable("results/{finalScore}") { entry ->
                    val finalScore = entry.arguments
                        ?.getString("finalScore")?.toInt() ?: 0
                    ResultsScreen(
                        score = finalScore,
                        total = sampleQuestions.size,
                        onPlayAgain = {
                            navController.popBackStack("home", inclusive = false)
                        }
                    )
                }
            }
        }
    }
}`}
      </CodePane>
    </Shell>
  ),

  // 13: Code-along part 2 — updated QuestionScreen
  () => (
    <Shell tag="Live code-along" title="Part 2 — QuestionScreen with answer feedback" notes="The selectedIndex state is the key new concept here. Walk through the color logic slowly. Ask students: when selectedIndex is -1, what color do all buttons show? When the user taps button 2, what happens to button 2's color? What happens to button 3 (the correct answer)?">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="QuestionScreen — with answer handling" accent={PURPLE}>
{`@Composable
fun QuestionScreen(
    questionIndex: Int,
    onAnswerSelected: (correct: Boolean) -> Unit
) {
    val question = sampleQuestions[questionIndex]
    var selectedIndex by remember { mutableStateOf(-1) }

    Column(
        modifier = Modifier.fillMaxSize()
            .background(Color(0xFFF5F5F5)).padding(24.dp),
        verticalArrangement = Arrangement.Center
    ) {
        Text("Question ${"$"}{questionIndex + 1} of ${"$"}{sampleQuestions.size}",
            fontSize = 14.sp, color = Color.Gray)
        Spacer(Modifier.height(12.dp))
        Text(question.text, fontSize = 22.sp,
            fontWeight = FontWeight.Bold, lineHeight = 30.sp)
        Spacer(Modifier.height(32.dp))

        question.answers.forEachIndexed { index, answer ->
            val bgColor = when {
                selectedIndex == -1 -> Color.White
                index == question.correctIndex -> Color(0xFF1D9E75)
                index == selectedIndex -> Color(0xFFE24B4A)
                else -> Color.White
            }
            Button(
                onClick = {
                    if (selectedIndex == -1) {
                        selectedIndex = index
                        onAnswerSelected(index == question.correctIndex)
                    }
                },
                modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
                colors = ButtonDefaults.buttonColors(containerColor = bgColor)
            ) { Text(answer) }
        }
    }
}`}
        </CodePane>
        <CodePane title="SwiftUI equivalent" accent={TEAL}>
{`struct QuestionScreen: View {
    let questionIndex: Int
    let onAnswerSelected: (Bool) -> Void
    var question: Question { sampleQuestions[questionIndex] }

    @State private var selectedIndex = -1

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(alignment: .leading, spacing: 12) {
                Text("Question \\(questionIndex+1) of \\(sampleQuestions.count)")
                    .foregroundColor(.gray)
                Text(question.text)
                    .font(.title2).fontWeight(.bold)
                Spacer().frame(height: 20)
                ForEach(Array(question.answers.enumerated()),
                    id: \\.offset) { index, answer in
                    Button(action: {
                        if selectedIndex == -1 {
                            selectedIndex = index
                            onAnswerSelected(
                                index == question.correctIndex
                            )
                        }
                    }) {
                        Text(answer)
                            .foregroundColor(buttonTextColor(index))
                            .frame(maxWidth:.infinity).padding()
                            .background(buttonBgColor(index))
                            .cornerRadius(10)
                    }
                }
            }.padding(24)
        }
    }

    func buttonBgColor(_ index: Int) -> Color {
        if selectedIndex == -1 { return .white }
        if index == question.correctIndex { return Color(red:0.11,green:0.62,blue:0.46) }
        if index == selectedIndex { return Color(red:0.89,green:0.29,blue:0.29) }
        return .white
    }
    func buttonTextColor(_ index: Int) -> Color {
        if selectedIndex == -1 { return Color(red:0.33,green:0.29,blue:0.72) }
        if index == question.correctIndex || index == selectedIndex { return .white }
        return Color(red:0.33,green:0.29,blue:0.72)
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 14: Code-along part 3 — results screen
  () => (
    <Shell tag="Live code-along" title="Part 3 — ResultsScreen" notes="Build this last. It is the payoff — run the full quiz and land here. Then tap Play Again and watch the app pop all the way back to home. Students should feel the satisfaction of a complete, working app at this moment. Let them tap through it themselves before explaining anything.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="ResultsScreen — Compose" accent={PURPLE}>
{`@Composable
fun ResultsScreen(
    score: Int,
    total: Int,
    onPlayAgain: () -> Unit
) {
    val percentage = (score.toFloat() / total * 100).toInt()
    val message = when {
        percentage == 100 -> "Perfect score!"
        percentage >= 70  -> "Great job!"
        percentage >= 40  -> "Good effort!"
        else              -> "Keep practicing!"
    }

    Column(
        modifier = Modifier.fillMaxSize()
            .background(Color(0xFFF5F5F5)).padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Quiz Complete!", fontSize = 28.sp,
            fontWeight = FontWeight.Bold,
            color = Color(0xFF534AB7))
        Spacer(Modifier.height(24.dp))
        Text("${"$"}score / ${"$"}total", fontSize = 64.sp,
            fontWeight = FontWeight.Bold)
        Text("${"$"}percentage% correct", color = Color.Gray)
        Spacer(Modifier.height(8.dp))
        Text(message, fontSize = 18.sp,
            color = Color(0xFF1D9E75))
        Spacer(Modifier.height(40.dp))
        Button(
            onClick = onPlayAgain,
            modifier = Modifier.fillMaxWidth(),
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFF534AB7))
        ) {
            Text("Play Again", fontSize = 16.sp)
        }
    }
}`}
        </CodePane>
        <CodePane title="ResultsScreen — SwiftUI" accent={TEAL}>
{`struct ResultsScreen: View {
    let score: Int
    let total: Int
    let onPlayAgain: () -> Void
    @Environment(\\.dismiss) var dismiss

    var percentage: Int {
        Int(Double(score) / Double(total) * 100)
    }
    var message: String {
        switch percentage {
        case 100:   return "Perfect score!"
        case 70...: return "Great job!"
        case 40...: return "Good effort!"
        default:    return "Keep practicing!"
        }
    }
    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("Quiz Complete!")
                    .font(.largeTitle).fontWeight(.bold)
                    .foregroundColor(
                        Color(red:0.33,green:0.29,blue:0.72))
                Spacer().frame(height: 24)
                Text("\\(score) / \\(total)")
                    .font(.system(size:64, weight:.bold))
                Text("\\(percentage)% correct").foregroundColor(.gray)
                Text(message).font(.title3)
                    .foregroundColor(
                        Color(red:0.11,green:0.62,blue:0.46))
                Spacer().frame(height: 40)
                Button(action: onPlayAgain) {
                    Text("Play Again").font(.headline)
                        .foregroundColor(.white)
                        .frame(maxWidth:.infinity).padding()
                        .background(
                            Color(red:0.33,green:0.29,blue:0.72))
                        .cornerRadius(10)
                }
            }.padding(32)
        }
        .navigationBarBackButtonHidden(true)
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 15: Lab intro
  () => (
    <Shell tag="Lab intro" timer="4" title="Lab time — completing the trivia app" subtitle="Go to the Lab tab on the course site — Session 2 Lab." notes="Remind students this lab builds directly on Session 1 — they need their Session 1 code working before starting. Anyone who does not have it working should pair with someone who does. The lab ends with a full quiz flow, which they should record as a GIF for Assignment 2.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Lab steps — Session 2</p>
          {[
            { n: 0, t: "Open TriviaApp from Session 1", time: "3 min" },
            { n: 1, t: "Pass questionIndex through the route", time: "10 min" },
            { n: 2, t: "Add score state + onAnswerSelected callback", time: "12 min" },
            { n: 3, t: "Build ResultsScreen with score and Play Again", time: "8 min" },
            { n: 4, t: "Ask Claude about data passing differences", time: "7 min" },
            { n: 5, t: "Reflection — 3 questions", time: "5 min" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "4px 0", alignItems: "center" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: 4, fontSize: 10, fontWeight: 700, padding: "1px 5px", flexShrink: 0 }}>Step {s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, flex: 1 }}>{s.t}</span>
              <span style={{ fontSize: 11, color: MUTED, flexShrink: 0 }}>{s.time}</span>
            </div>
          ))}
        </div>
        <div style={{ background: GRAY, borderRadius: 10, padding: 14 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Before you leave, show a TA</p>
          {[
            "Full quiz flow — home → questions → results",
            "Correct/wrong answer highlighting works",
            "Play Again resets and returns to home",
            "Both platform versions working",
            "Reflection comment block complete",
          ].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 10, background: TEAL_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: "#085041", margin: 0, lineHeight: 1.5 }}>Record a GIF of your full quiz run before leaving — you will need it for Assignment 2.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 16: Assignment 2 overview
  () => (
    <Shell tag="Assignment 2" title="Assignment 2 — your own trivia app" subtitle="Same structure, your own theme and questions." notes="Spend 3 minutes on this. The key message: the structure is provided, the creativity is theirs. Encourage unusual themes — the more specific the better. A trivia app about a specific TV show episode, or about their hometown, or about a niche hobby is far more interesting to review than generic geography questions.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What is provided</p>
          <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "12px 14px" }}>
            {["The Question data model structure", "The NavHost / NavigationStack setup pattern", "The screen architecture — home, question, results", "The answer highlighting pattern", "The popBackStack pattern for Play Again"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What is yours to create</p>
          <div style={{ background: PURPLE_LIGHT, border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "12px 14px" }}>
            {["Your own theme — the more specific the better", "At least 5 original questions on your theme", "Your own color scheme and styling", "A results message that fits your theme", "Anything extra from the stretch features"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: PURPLE, fontWeight: 700, flexShrink: 0 }}>✦</span>
                <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Discussion>{"What is a topic you know so well you could write 10 trivia questions right now without looking anything up? That is your theme."}</Discussion>
    </Shell>
  ),

  // 17: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Week 2 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>You built a real, playable multi-screen app. That is not a small thing.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned this week</p>
            {["Data classes and structs", "Navigation stack — push and pop", "NavHost and NavigationStack setup", "Passing data through navigation routes", "Tracking state across multiple screens", "navigate() vs popBackStack()", "Answer feedback with conditional state"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Week 3</p>
            {["Lists and scrolling — LazyColumn and List", "Building a searchable list of items", "Custom row layouts", "Filtering and empty states", "The patterns that power every social feed, inbox, and product catalogue you have ever used"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.1)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Due before Week 3: Assignment 2 — your themed trivia app.</p>
            </div>
          </div>
        </div>
      </div>
      <Notes>{"End with genuine energy. A working trivia app with real navigation is something students can show people. It looks and feels like a real app — because it is. Remind them to record their GIF walkthrough for Assignment 2 before they leave the lab."}</Notes>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 2 · Session 2 · {slides.length} slides</p>
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
