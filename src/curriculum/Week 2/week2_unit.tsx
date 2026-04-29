import { useState } from "react";

const TABS = ["Overview", "Lab", "Project", "Learning with AI", "Resources"];
const PLATFORMS = ["Android", "iOS"];

/* ── colors ── */
const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const BL = "#7F52FF", BLL = "#F0EEFF";
const GR = "#F05138", GRL = "#FFF2F0";

/* ── shared components ── */
const Section = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ margin: "14px 0", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--color-background-secondary)", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>
        {title}<span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div style={{ padding: "12px 14px", fontSize: 13, lineHeight: 1.7, color: "var(--color-text-primary)" }}>{children}</div>}
    </div>
  );
};

const CodeB = ({ title, accent, children }: { title?: string; accent?: string; children: React.ReactNode }) => (
  <div style={{ margin: "10px 0" }}>
    {title && <div style={{ background: accent || P_C, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0" }}>{title}</div>}
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11.5, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Checkpoint = ({ num, children }: { num: number | string; children: React.ReactNode }) => (
  <div className="callout-checkpoint" style={{ margin: "14px 0", padding: "10px 14px", background: "#E8FCE8", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <strong>{"🎯"} Checkpoint {num}:</strong> {children}
  </div>
);

const AiOpp = ({ children }: { children: React.ReactNode }) => (
  <div className="callout-ai" style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>{"✨"} AI Opportunity</div>
    {children}
  </div>
);

const Warn = ({ children }: { children: React.ReactNode }) => (
  <div className="callout-warn" style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E6", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #EF9F27" }}>
    {"⚠️"} {children}
  </div>
);

const Tip = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>
    {"💡"} {children}
  </div>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="callout-note" style={{ margin: "12px 0", padding: "10px 14px", background: "#E6F1FB", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #B5D4F4" }}>
    {"ℹ️"} {children}
  </div>
);

const Step = ({ num, title, children }: { num: number | string; title: string; children: React.ReactNode }) => (
  <div style={{ margin: "18px 0" }}>
    <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--platform-accent, var(--color-text-primary))", margin: "0 0 8px" }}>Step {num}: {title}</h4>
    <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
  </div>
);

const SubStep = ({ num, title, children }: { num: string; title: string; children: React.ReactNode }) => (
  <div style={{ margin: "14px 0 14px 8px", paddingLeft: 14, borderLeft: "2px solid var(--platform-accent, var(--color-border-tertiary))" }}>
    <h5 style={{ fontSize: 13, fontWeight: 600, color: "var(--platform-accent, var(--color-text-primary))", margin: "0 0 6px" }}>Step {num}: {title}</h5>
    <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
  </div>
);

const VStep = ({ num, title, children, last = false }: { num: number; title: string; children: React.ReactNode; last?: boolean }) => (
  <div style={{ display: "flex", gap: 12 }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--platform-accent, #534AB7)", color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{num}</div>
      {!last && <div style={{ width: 2, flex: 1, minHeight: 20, background: "var(--color-border-tertiary)", margin: "3px 0" }} />}
    </div>
    <div style={{ paddingBottom: last ? 8 : 24, flex: 1, minWidth: 0 }}>
      <h4 style={{ fontSize: 13, fontWeight: 600, margin: "3px 0 8px", color: "var(--color-text-primary)" }}>{title}</h4>
      <div>{children}</div>
    </div>
  </div>
);

const IC = ({ children }: { children: React.ReactNode }) => (
  <code style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 4, padding: "1px 5px", fontSize: 12 }}>{children}</code>
);

const Checkbox = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "6px 0", fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.5 }}>
    <div style={{ width: 14, height: 14, border: "2px solid var(--color-text-tertiary)", borderRadius: 3, flexShrink: 0, marginTop: 2 }} />
    <span>{children}</span>
  </div>
);

const UL = ({ items }: { items: React.ReactNode[] }) => (
  <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2, paddingLeft: 20 }}>
    {items.map((t, i) => <li key={i}>{t}</li>)}
  </ul>
);

const PlatformToggle = ({ platform, setPlatform }: { platform: string; setPlatform: (p: string) => void }) => (
  <div style={{ display: "flex", gap: 0, margin: "12px 0", borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
    {PLATFORMS.map(p => (
      <button key={p} onClick={() => setPlatform(p)} style={{
        padding: "6px 18px", fontSize: 12, fontWeight: 500, border: "none", cursor: "pointer",
        background: platform === p ? (p === "Android" ? BLL : GRL) : "var(--color-background-primary)",
        color: platform === p ? (p === "Android" ? BL : GR) : "var(--color-text-secondary)"
      }}>{p === "Android" ? "🤖 Android" : "🍎 iOS"}</button>
    ))}
  </div>
);

/* ══════════════════════ DATA ══════════════════════ */
const sampleQuestions = [
  { text: "What is the capital of France?", answers: ["London","Berlin","Paris","Madrid"], correctIndex: 2 },
  { text: "Which planet is closest to the Sun?", answers: ["Venus","Mercury","Earth","Mars"], correctIndex: 1 },
  { text: "How many sides does a hexagon have?", answers: ["5","6","7","8"], correctIndex: 1 },
];

/* ══════════════════════ OVERVIEW ══════════════════════ */
const Overview = () => (
  <div>
    <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 12 }}>
      Don{"'"}t forget to fill out the {"✏️"} Session Survey at the end of each class session!
    </div>
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>Unit 2: Navigation — building multi-screen apps</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>
      Every real app has more than one screen. This week you learn how to connect them. By the end of Week 2 you will be able to push a new screen onto the stack, pass data to it, and navigate back — the foundation of every app you will ever build.
    </p>
    <div style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 16px", margin: "12px 0" }}>
      <p style={{ fontSize: 13, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.6 }}>This week introduces the biggest syntax divergence between Android and iOS so far. The concepts are identical — the code looks quite different. Claude is your best tool for translating between the two. Focus on understanding the concept, and let Claude handle the syntax differences.</p>
    </div>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>What you will learn</h2>
    <UL items={[
      "Data classes and structs — how to group related data together",
      "How navigation works conceptually — the stack mental model",
      "Setting up a NavHost (Compose) or NavigationStack (SwiftUI)",
      "Navigating forward — pushing a new screen onto the stack",
      "Passing data from one screen to another",
      "The back stack — what happens when the user presses back",
    ]} />

    <div style={{ marginTop: 20, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
      <strong>Session Info</strong>
      <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
        <li>{"📅"} See your cohort{"'"}s schedule for session times</li>
        <li>{"↗"} Session Zoom Link | Passcode: <strong>codepath</strong></li>
        <li>{"📊"} Link to Slides</li>
      </ul>
      <strong style={{ display: "block", marginTop: 10 }}>Upcoming Due Dates</strong>
      <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
        <li>{"📬"} Assignment 2 (character creator) — due before Week 3 Session 1</li>
      </ul>
    </div>

    <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
      <strong>{"📦 This unit at a glance"}</strong>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
        {[
          { label: "Session 1", val: "Data classes, navigation setup, and navigating forward. Lab: build the trivia app home and question screens." },
          { label: "Session 2", val: "Passing data between screens and back stack behavior. Lab: wire up real question data and result screen." },
          { label: "Lab (each session)", val: "Build the trivia app in one platform, use Claude to translate to the other, then compare navigation patterns." },
          { label: "Assignment 2", val: "RPG character creator — starter code provided with TODOs and planted bugs. Fix the weapon screen, wire up data passing, and complete the character card." },
        ].map(item => (
          <div key={item.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ══════════════════════ LAB SESSION 1 ══════════════════════ */
const LabSession1 = ({ platform }: { platform: string }) => (
  <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Session 1 Lab: Trivia App — Home and Question Screens</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
      You are going to start building a trivia app from scratch. By the end of this lab you will have a home screen that navigates to a question screen when the user taps a button. No data passing yet — that is Session 2. Budget about 50-60 minutes.
    </p>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <strong>{"🎯"} Goals</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
        <li>Create a data class / struct to model a trivia question</li>
        <li>Set up a NavHost (Compose) or NavigationStack (SwiftUI)</li>
        <li>Build a home screen with a Start Quiz button</li>
        <li>Build a question screen that displays a hardcoded question</li>
        <li>Navigate from home to question on button tap</li>
        <li>Use Claude to translate your navigation setup to the other platform</li>
      </ul>
    </div>

    <VStep num={0} title="Set up a new project (~3 min)">
      <Checkbox>Create a new project called TriviaApp (same setup as Week 1)</Checkbox>
      <Tip>Keep your TapCounter project open in another window — you will reference the state patterns from last week.</Tip>
    </VStep>

    <VStep num={1} title="Create your data model (~8 min)">
      <p>Before building any UI, define what a trivia question looks like as a data structure. This is a data class in Kotlin or a struct in Swift.</p>

      <SubStep num="1a" title="Identify the fields">
        <p>Before writing any code, think: what data does a single trivia question need to store? There are three pieces of information. Write them down before peeking.</p>
        <Section title="💡 Show me the three fields">
          <ul style={{ paddingLeft: 20, margin: "4px 0" }}>
            <li><strong>text</strong> — the question string</li>
            <li><strong>answers</strong> — a list of answer strings (four choices)</li>
            <li><strong>correctIndex</strong> — an integer pointing to the right answer in the list</li>
          </ul>
        </Section>
      </SubStep>

      <SubStep num="1b" title="Declare the data class / struct">
        {platform === "Android" ? (
          <>
            <p>Create a new file called <IC>Question.kt</IC>. In Kotlin, a data class looks like:</p>
            <CodeB accent={BL}>{`data class Name(val field1: Type1, val field2: Type2)`}</CodeB>
            <p>Declare a <IC>Question</IC> data class with the three fields from 1a. Use these exact names and types: <IC>text: String</IC>, <IC>answers: List&lt;String&gt;</IC>, <IC>correctIndex: Int</IC>.</p>
            <Section title="✅ Check your work — show me the complete file so far">
              <CodeB title="Kotlin — Question.kt" accent={BL}>{`data class Question(
    val text: String,
    val answers: List<String>,
    val correctIndex: Int
)`}</CodeB>
            </Section>
          </>
        ) : (
          <>
            <p>Create a new file called <IC>Question.swift</IC>. In Swift, a struct looks like:</p>
            <CodeB accent={GR}>{`struct Name {
    let field1: Type1
    let field2: Type2
}`}</CodeB>
            <p>Declare a <IC>Question</IC> struct with the three fields from 1a. Use these exact names and types: <IC>text: String</IC>, <IC>answers: [String]</IC>, <IC>correctIndex: Int</IC>.</p>
            <Section title="✅ Check your work — show me the complete file so far">
              <CodeB title="Swift — Question.swift" accent={GR}>{`struct Question {
    let text: String
    let answers: [String]
    let correctIndex: Int
}`}</CodeB>
            </Section>
          </>
        )}
        <Checkpoint num="1b">The data class or struct compiles with no errors. No UI yet — just make sure the file is valid.</Checkpoint>
      </SubStep>

      <SubStep num="1c" title="Add sample data">
        <p>Below your type declaration, create a list called <IC>sampleQuestions</IC>. Here is the first question to get you started — add the other two yourself:</p>
        {platform === "Android" ? (
          <>
            <CodeB title="Kotlin — starter" accent={BL}>{`val sampleQuestions = listOf(
    Question(
        text = "What is the capital of France?",
        answers = listOf("London", "Berlin", "Paris", "Madrid"),
        correctIndex = 2
    ),
    // your turn: add two more questions
)`}</CodeB>
            <p>Add a question about which planet is closest to the Sun (answer: Mercury, correctIndex 1) and one about how many sides a hexagon has (answer: 6, correctIndex 1).</p>
            <Section title="✅ Check your work — show me the complete Question.kt">
              <CodeB title="Kotlin — Question.kt (complete)" accent={BL}>{`data class Question(
    val text: String,
    val answers: List<String>,
    val correctIndex: Int
)

val sampleQuestions = listOf(
    Question(
        text = "What is the capital of France?",
        answers = listOf("London", "Berlin", "Paris", "Madrid"),
        correctIndex = 2
    ),
    Question(
        text = "Which planet is closest to the Sun?",
        answers = listOf("Venus", "Mercury", "Earth", "Mars"),
        correctIndex = 1
    ),
    Question(
        text = "How many sides does a hexagon have?",
        answers = listOf("5", "6", "7", "8"),
        correctIndex = 1
    )
)`}</CodeB>
            </Section>
          </>
        ) : (
          <>
            <CodeB title="Swift — starter" accent={GR}>{`let sampleQuestions: [Question] = [
    Question(
        text: "What is the capital of France?",
        answers: ["London", "Berlin", "Paris", "Madrid"],
        correctIndex: 2
    ),
    // your turn: add two more questions
]`}</CodeB>
            <p>Add a question about which planet is closest to the Sun (answer: Mercury, correctIndex 1) and one about how many sides a hexagon has (answer: 6, correctIndex 1).</p>
            <Section title="✅ Check your work — show me the complete Question.swift">
              <CodeB title="Swift — Question.swift (complete)" accent={GR}>{`struct Question {
    let text: String
    let answers: [String]
    let correctIndex: Int
}

let sampleQuestions: [Question] = [
    Question(
        text: "What is the capital of France?",
        answers: ["London", "Berlin", "Paris", "Madrid"],
        correctIndex: 2
    ),
    Question(
        text: "Which planet is closest to the Sun?",
        answers: ["Venus", "Mercury", "Earth", "Mars"],
        correctIndex: 1
    ),
    Question(
        text: "How many sides does a hexagon have?",
        answers: ["5", "6", "7", "8"],
        correctIndex: 1
    )
]`}</CodeB>
            </Section>
          </>
        )}
      </SubStep>

      <Checkpoint num={1}>The file compiles and your three questions are defined. No UI needed yet.</Checkpoint>
      <Section title="💡 Hint: What is a data class / struct?">
        A data class (Kotlin) or struct (Swift) is a blueprint for a piece of data. Think of it like a form template — the template defines the fields, and each Question is one filled-in copy.
      </Section>
    </VStep>

    <VStep num={2} title="Build the home screen (~10 min)">
      <p>Build a simple home screen — the app name, a tagline, and a Start Quiz button. Notice that <IC>onStartClicked</IC> is a <em>parameter</em> — a function passed into the screen. This keeps HomeScreen ignorant of navigation: it fires the callback, and whoever calls it decides what to do. You will wire that up in Step 4.</p>

      <SubStep num="2a" title="Set up the screen layout">
        {platform === "Android" ? (
          <>
            <p>Create a new file <IC>HomeScreen.kt</IC>. Add a <IC>@Composable</IC> function <IC>HomeScreen</IC> that takes one parameter: <IC>onStartClicked: () -&gt; Unit</IC>.</p>
            <p>Inside, add a <IC>Column</IC> that fills the screen, has a light-gray background (<IC>Color(0xFFF5F5F5)</IC>), 32dp padding, and centers its children both vertically (<IC>Arrangement.Center</IC>) and horizontally (<IC>Alignment.CenterHorizontally</IC>).</p>
            <Section title="✅ Check your work — show me the complete file so far">
              <CodeB title="Kotlin — HomeScreen.kt (layout only)" accent={BL}>{`@Composable
fun HomeScreen(onStartClicked: () -> Unit) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // content goes here
    }
}`}</CodeB>
            </Section>
          </>
        ) : (
          <>
            <p>Create a new file <IC>HomeScreen.swift</IC>. Add a <IC>HomeScreen</IC> struct with a <IC>var onStartClicked: () -&gt; Void</IC> property.</p>
            <p>Inside <IC>body</IC>, use a <IC>ZStack</IC> with a <IC>Color(UIColor.systemGray6).ignoresSafeArea()</IC> background and a <IC>VStack(spacing: 8)</IC> on top with 32pt padding.</p>
            <Section title="✅ Check your work — show me the complete file so far">
              <CodeB title="Swift — HomeScreen.swift (layout only)" accent={GR}>{`struct HomeScreen: View {
    var onStartClicked: () -> Void

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                // content goes here
            }
            .padding(32)
        }
    }
}`}</CodeB>
            </Section>
          </>
        )}
      </SubStep>

      <SubStep num="2b" title="Add the title and tagline">
        {platform === "Android" ? (
          <>
            <p>Inside the Column, add:</p>
            <ul style={{ paddingLeft: 20, margin: "4px 0 8px" }}>
              <li>A <IC>Text</IC> — <IC>"Trivia Challenge"</IC>, 32sp, bold, color <IC>Color(0xFF534AB7)</IC></li>
              <li>A <IC>Spacer</IC> of 8dp</li>
              <li>A <IC>Text</IC> — <IC>"Test your knowledge!"</IC>, 16sp, <IC>Color.Gray</IC></li>
              <li>A <IC>Spacer</IC> of 48dp (gap before the button)</li>
            </ul>
            <Section title="✅ Check your work — show me the complete file so far">
              <CodeB title="Kotlin — HomeScreen.kt (with title + tagline)" accent={BL}>{`@Composable
fun HomeScreen(onStartClicked: () -> Unit) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Trivia Challenge",
            fontSize = 32.sp,
            fontWeight = FontWeight.Bold,
            color = Color(0xFF534AB7)
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "Test your knowledge!",
            fontSize = 16.sp,
            color = Color.Gray
        )
        Spacer(modifier = Modifier.height(48.dp))
        // button goes here
    }
}`}</CodeB>
            </Section>
          </>
        ) : (
          <>
            <p>Inside the VStack, add:</p>
            <ul style={{ paddingLeft: 20, margin: "4px 0 8px" }}>
              <li>A <IC>Text("Trivia Challenge")</IC> — <IC>.largeTitle</IC>, bold, foreground <IC>Color(red: 0.33, green: 0.29, blue: 0.72)</IC></li>
              <li>A <IC>Text("Test your knowledge!")</IC> — <IC>.subheadline</IC>, <IC>.gray</IC></li>
              <li>A <IC>Spacer().frame(height: 48)</IC> before the button</li>
            </ul>
            <Section title="✅ Check your work — show me the complete file so far">
              <CodeB title="Swift — HomeScreen.swift (with title + tagline)" accent={GR}>{`struct HomeScreen: View {
    var onStartClicked: () -> Void

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("Trivia Challenge")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .foregroundColor(Color(red: 0.33, green: 0.29, blue: 0.72))
                Text("Test your knowledge!")
                    .font(.subheadline)
                    .foregroundColor(.gray)
                Spacer().frame(height: 48)
                // button goes here
            }
            .padding(32)
        }
    }
}`}</CodeB>
            </Section>
          </>
        )}
      </SubStep>

      <SubStep num="2c" title="Add the Start Quiz button">
        {platform === "Android" ? (
          <>
            <p>Add a <IC>Button</IC> that calls <IC>onStartClicked</IC> when tapped (<IC>onClick = onStartClicked</IC>), fills the full width, uses the purple background color, and has a <IC>Text("Start Quiz")</IC> label at 16sp.</p>
            <Section title="✅ Check your work — show me the complete HomeScreen.kt">
              <CodeB title="Kotlin — HomeScreen.kt (complete)" accent={BL}>{`@Composable
fun HomeScreen(onStartClicked: () -> Unit) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Trivia Challenge",
            fontSize = 32.sp,
            fontWeight = FontWeight.Bold,
            color = Color(0xFF534AB7)
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "Test your knowledge!",
            fontSize = 16.sp,
            color = Color.Gray
        )
        Spacer(modifier = Modifier.height(48.dp))
        Button(
            onClick = onStartClicked,
            modifier = Modifier.fillMaxWidth(),
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFF534AB7)
            )
        ) {
            Text("Start Quiz", fontSize = 16.sp)
        }
    }
}`}</CodeB>
            </Section>
          </>
        ) : (
          <>
            <p>Add a <IC>Button(action: onStartClicked)</IC> with a label that has white text, purple background, full width, and rounded corners.</p>
            <Section title="✅ Check your work — show me the complete HomeScreen.swift">
              <CodeB title="Swift — HomeScreen.swift (complete)" accent={GR}>{`struct HomeScreen: View {
    var onStartClicked: () -> Void

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("Trivia Challenge")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .foregroundColor(Color(red: 0.33, green: 0.29, blue: 0.72))
                Text("Test your knowledge!")
                    .font(.subheadline)
                    .foregroundColor(.gray)
                Spacer().frame(height: 48)
                Button(action: onStartClicked) {
                    Text("Start Quiz")
                        .font(.headline)
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(Color(red: 0.33, green: 0.29, blue: 0.72))
                        .cornerRadius(10)
                }
            }
            .padding(32)
        }
    }
}`}</CodeB>
            </Section>
          </>
        )}
      </SubStep>

      <Checkpoint num={2}>Run the app. You should see the home screen with the Start Quiz button. Tapping it does nothing yet — that is Step 4.</Checkpoint>
    </VStep>

    <VStep num={3} title="Build the question screen (~10 min)">
      <p>Build a question screen that displays a hardcoded question and four answer buttons. Use <IC>sampleQuestions[0]</IC> directly — no data passing yet, that is Session 2.</p>

      <SubStep num="3a" title="Set up the layout and question counter">
        {platform === "Android" ? (
          <>
            <p>Create a new file <IC>QuestionScreen.kt</IC>. Add a <IC>@Composable</IC> function <IC>QuestionScreen</IC> with no parameters for now. At the top of the function, grab the first question: <IC>val question = sampleQuestions[0]</IC>.</p>
            <p>Add a <IC>Column</IC> using the same pattern as HomeScreen — full screen, gray background, 24dp padding, vertically centered. Inside, add a <IC>Text</IC> that reads <IC>"Question 1 of [total]"</IC> in gray, using <IC>sampleQuestions.size</IC> for the total.</p>
            <Section title="✅ Check your work — show me the complete file so far">
              <CodeB title="Kotlin — QuestionScreen.kt (layout + counter)" accent={BL}>{`@Composable
fun QuestionScreen() {
    val question = sampleQuestions[0]

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(24.dp),
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Question 1 of \${sampleQuestions.size}",
            fontSize = 14.sp,
            color = Color.Gray
        )
        // rest goes here
    }
}`}</CodeB>
            </Section>
          </>
        ) : (
          <>
            <p>Create a new file <IC>QuestionScreen.swift</IC>. Add a <IC>QuestionScreen</IC> struct and store the first question: <IC>let question = sampleQuestions[0]</IC>.</p>
            <p>Use the same <IC>ZStack</IC>/<IC>VStack</IC> layout pattern as HomeScreen, but with <IC>alignment: .leading</IC> and <IC>spacing: 12</IC> on the VStack. At the top, show <IC>"Question 1 of [total]"</IC> in gray using <IC>sampleQuestions.count</IC>.</p>
            <Section title="✅ Check your work — show me the complete file so far">
              <CodeB title="Swift — QuestionScreen.swift (layout + counter)" accent={GR}>{`struct QuestionScreen: View {
    let question = sampleQuestions[0]

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(alignment: .leading, spacing: 12) {
                Text("Question 1 of \\(sampleQuestions.count)")
                    .font(.subheadline)
                    .foregroundColor(.gray)
                // rest goes here
            }
            .padding(24)
        }
        .navigationBarBackButtonHidden(false)
    }
}`}</CodeB>
            </Section>
          </>
        )}
      </SubStep>

      <SubStep num="3b" title="Add the question text">
        {platform === "Android" ? (
          <>
            <p>Below the counter, add:</p>
            <ul style={{ paddingLeft: 20, margin: "4px 0 8px" }}>
              <li>A <IC>Spacer</IC> of 12dp</li>
              <li>A <IC>Text</IC> showing <IC>question.text</IC> — 22sp, bold, lineHeight 30sp</li>
              <li>A <IC>Spacer</IC> of 32dp (gap before the answer buttons)</li>
            </ul>
            <Section title="✅ Check your work — show me the complete file so far">
              <CodeB title="Kotlin — QuestionScreen.kt (with question text)" accent={BL}>{`@Composable
fun QuestionScreen() {
    val question = sampleQuestions[0]

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(24.dp),
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Question 1 of \${sampleQuestions.size}",
            fontSize = 14.sp,
            color = Color.Gray
        )
        Spacer(modifier = Modifier.height(12.dp))
        Text(
            text = question.text,
            fontSize = 22.sp,
            fontWeight = FontWeight.Bold,
            lineHeight = 30.sp
        )
        Spacer(modifier = Modifier.height(32.dp))
        // answer buttons go here
    }
}`}</CodeB>
            </Section>
          </>
        ) : (
          <>
            <p>Below the counter, add:</p>
            <ul style={{ paddingLeft: 20, margin: "4px 0 8px" }}>
              <li>A <IC>Text(question.text)</IC> — <IC>.title2</IC> font, bold, with <IC>.lineSpacing(6)</IC></li>
              <li>A <IC>Spacer().frame(height: 20)</IC> before the answer buttons</li>
            </ul>
            <Section title="✅ Check your work — show me the complete file so far">
              <CodeB title="Swift — QuestionScreen.swift (with question text)" accent={GR}>{`struct QuestionScreen: View {
    let question = sampleQuestions[0]

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(alignment: .leading, spacing: 12) {
                Text("Question 1 of \\(sampleQuestions.count)")
                    .font(.subheadline)
                    .foregroundColor(.gray)
                Text(question.text)
                    .font(.title2)
                    .fontWeight(.bold)
                    .lineSpacing(6)
                Spacer().frame(height: 20)
                // answer buttons go here
            }
            .padding(24)
        }
        .navigationBarBackButtonHidden(false)
    }
}`}</CodeB>
            </Section>
          </>
        )}
      </SubStep>

      <SubStep num="3c" title="Loop over the answer choices">
        <p>This is the key new concept: instead of writing four separate <IC>Button</IC> calls, you iterate over the answers list and create one Button per item.</p>
        {platform === "Android" ? (
          <>
            <p>Use <IC>question.answers.forEachIndexed {`{ index, answer -> ... }`}</IC>. For each answer, create a <IC>Button</IC> with:</p>
            <ul style={{ paddingLeft: 20, margin: "4px 0 8px" }}>
              <li>White background, 1dp purple border via <IC>BorderStroke(1.dp, Color(0xFF534AB7))</IC></li>
              <li>Full width, 4dp vertical padding</li>
              <li>Answer text in purple</li>
              <li><IC>onClick = {`{ /* handle answer — Session 2 */ }`}</IC> for now</li>
            </ul>
            <Section title="✅ Check your work — show me the complete QuestionScreen.kt">
              <CodeB title="Kotlin — QuestionScreen.kt (complete)" accent={BL}>{`@Composable
fun QuestionScreen() {
    val question = sampleQuestions[0]

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(24.dp),
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Question 1 of \${sampleQuestions.size}",
            fontSize = 14.sp, color = Color.Gray
        )
        Spacer(modifier = Modifier.height(12.dp))
        Text(
            text = question.text,
            fontSize = 22.sp, fontWeight = FontWeight.Bold,
            lineHeight = 30.sp
        )
        Spacer(modifier = Modifier.height(32.dp))
        question.answers.forEachIndexed { index, answer ->
            Button(
                onClick = { /* handle answer — Session 2 */ },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 4.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Color.White),
                border = BorderStroke(1.dp, Color(0xFF534AB7))
            ) {
                Text(answer, color = Color(0xFF534AB7))
            }
        }
    }
}`}</CodeB>
            </Section>
          </>
        ) : (
          <>
            <p>Use <IC>ForEach(Array(question.answers.enumerated()), id: \.offset)</IC>. For each answer, create a <IC>Button</IC> with:</p>
            <ul style={{ paddingLeft: 20, margin: "4px 0 8px" }}>
              <li>White background, full width, rounded corners</li>
              <li>A purple border overlay using <IC>RoundedRectangle(...).stroke</IC></li>
              <li>Purple answer text</li>
              <li><IC>action: {`{ /* handle — Session 2 */ }`}</IC> for now</li>
            </ul>
            <Section title="✅ Check your work — show me the complete QuestionScreen.swift">
              <CodeB title="Swift — QuestionScreen.swift (complete)" accent={GR}>{`struct QuestionScreen: View {
    let question = sampleQuestions[0]

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(alignment: .leading, spacing: 12) {
                Text("Question 1 of \\(sampleQuestions.count)")
                    .font(.subheadline)
                    .foregroundColor(.gray)
                Text(question.text)
                    .font(.title2)
                    .fontWeight(.bold)
                    .lineSpacing(6)
                Spacer().frame(height: 20)
                ForEach(Array(question.answers.enumerated()), id: \\.offset) { index, answer in
                    Button(action: { /* handle — Session 2 */ }) {
                        Text(answer)
                            .foregroundColor(Color(red: 0.33, green: 0.29, blue: 0.72))
                            .frame(maxWidth: .infinity)
                            .padding()
                            .background(Color.white)
                            .cornerRadius(10)
                            .overlay(
                                RoundedRectangle(cornerRadius: 10)
                                    .stroke(Color(red: 0.33, green: 0.29, blue: 0.72), lineWidth: 1)
                            )
                    }
                }
            }
            .padding(24)
        }
        .navigationBarBackButtonHidden(false)
    }
}`}</CodeB>
            </Section>
          </>
        )}
        <Section title="💡 Hint: What is forEachIndexed / ForEach?">
          Both loop over a list and create UI for each item. <IC>forEachIndexed</IC> in Kotlin gives you both the index and the item. <IC>ForEach</IC> in SwiftUI does the same with <IC>enumerated()</IC>. You will use this pattern constantly when building lists in Week 3.
        </Section>
      </SubStep>

      <Checkpoint num={3}>The question screen compiles. You cannot navigate to it yet — that is Step 4.</Checkpoint>
    </VStep>

    <VStep num={4} title="Set up navigation and connect the screens (~12 min)">
      <p>Navigation has three moving parts: a controller (or stack) that owns the history, a set of named destinations, and a call that triggers the transition. You will wire them up one piece at a time.</p>

      {platform === "Android" ? (
        <>
          <SubStep num="4a" title="Add the navigation dependency">
            <p>Navigation Compose is not part of the standard Compose library — you need to add it explicitly. Open your <strong>module-level</strong> <IC>build.gradle</IC> file (inside the <IC>app/</IC> folder, not the top-level one) and add one line inside the <IC>dependencies {`{ }`}</IC> block.</p>
            <Tip>After adding it, click <strong>Sync Now</strong> in the yellow banner at the top of Android Studio. The build will fail with unresolved imports if you skip this.</Tip>
            <Section title="✅ Check your work — show me the line to add">
              <CodeB title="build.gradle (module-level)" accent={BL}>{`dependencies {
    // ... your existing dependencies ...
    implementation("androidx.navigation:navigation-compose:2.7.0")
}`}</CodeB>
            </Section>
            <Checkbox>Project syncs without errors</Checkbox>
          </SubStep>

          <SubStep num="4b" title="Declare a NavController">
            <p>A <IC>NavController</IC> is the object that owns the back stack — it knows which screen you are on and how to get back. It lives at the top level of your composable tree so every screen can reach it.</p>
            <p>Inside the <IC>setContent</IC> block in <IC>MainActivity.kt</IC>, declare a NavController. The function you need starts with <IC>remember</IC> and ends with <IC>NavController()</IC>. Try writing it yourself before peeking.</p>
            <Section title="✅ Check your work — show me the complete MainActivity so far">
              <CodeB title="Kotlin — MainActivity.kt" accent={BL}>{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()
            // NavHost goes here
        }
    }
}`}</CodeB>
              <p><IC>rememberNavController()</IC> creates the controller and keeps it alive across recompositions. It must be called inside a composable context — <IC>setContent</IC> counts.</p>
            </Section>
          </SubStep>

          <SubStep num="4c" title="Set up a NavHost and declare your routes">
            <p>A <IC>NavHost</IC> is the composable that acts as the navigation container. You give it: (1) the NavController you just created, (2) a starting destination, and (3) a list of routes. Each route is declared with <IC>composable("route-name") {`{ }`}</IC> — inside the block you return the screen composable for that route.</p>
            <p>Add a <IC>NavHost</IC> below your navController declaration. Give it two routes: <IC>"home"</IC> and <IC>"question"</IC>. Wire each to its screen composable. For the <IC>onStartClicked</IC> lambda on HomeScreen, pass an empty lambda <IC>{`{ }`}</IC> for now — you will fill it in next.</p>
            <Section title="✅ Check your work — show me the complete MainActivity so far">
              <CodeB title="Kotlin — MainActivity.kt" accent={BL}>{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()
            NavHost(
                navController = navController,
                startDestination = "home"
            ) {
                composable("home") {
                    HomeScreen(
                        onStartClicked = { /* fill in next step */ }
                    )
                }
                composable("question") {
                    QuestionScreen()
                }
            }
        }
    }
}`}</CodeB>
            </Section>
            <Checkpoint num="4c">Run the app — you should see the home screen. Tapping Start Quiz does nothing yet, but the app should not crash.</Checkpoint>
          </SubStep>

          <SubStep num="4d" title="Trigger navigation from the Start Quiz button">
            <p>Now connect the button to the question screen. Fill in the <IC>onStartClicked</IC> lambda you left empty in step 4c. The call you need is on <IC>navController</IC> and takes the route name string you defined above as its argument.</p>
            <Section title="✅ Check your work — show me the complete MainActivity.kt">
              <CodeB title="Kotlin — MainActivity.kt (complete)" accent={BL}>{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()
            NavHost(
                navController = navController,
                startDestination = "home"
            ) {
                composable("home") {
                    HomeScreen(
                        onStartClicked = {
                            navController.navigate("question")
                        }
                    )
                }
                composable("question") {
                    QuestionScreen()
                }
            }
        }
    }
}`}</CodeB>
              <p><IC>navigate("question")</IC> pushes the <IC>"question"</IC> destination onto the back stack. The user can tap the system back button to pop it and return to home.</p>
            </Section>
          </SubStep>
        </>
      ) : (
        <>
          <SubStep num="4a" title="Wrap your root view in a NavigationStack">
            <p>In SwiftUI, <IC>NavigationStack</IC> is the container that makes navigation possible. Any view inside it can push new screens onto the stack. Without it, <IC>NavigationLink</IC> silently does nothing.</p>
            <p>Open <IC>ContentView.swift</IC>. Wrap the <IC>HomeScreen()</IC> call in a <IC>NavigationStack</IC>. Try writing it from memory — the structure is just <IC>NavigationStack {`{ }`}</IC> with <IC>HomeScreen()</IC> inside.</p>
            <Section title="✅ Check your work — show me the complete ContentView.swift">
              <CodeB title="Swift — ContentView.swift" accent={GR}>{`struct ContentView: View {
    var body: some View {
        NavigationStack {
            HomeScreen()
        }
    }
}`}</CodeB>
            </Section>
            <Checkpoint num="4a">Run the app — the home screen should appear. You may see a navigation bar at the top; that confirms the NavigationStack is active.</Checkpoint>
          </SubStep>

          <SubStep num="4b" title="Replace the Button with a NavigationLink">
            <p>Right now your <IC>HomeScreen</IC> has a <IC>Button</IC> that calls <IC>onStartClicked</IC>. In SwiftUI, <IC>NavigationLink</IC> handles the push declaratively — you give it a destination and a label, and SwiftUI handles the transition when the user taps.</p>
            <p>In <IC>HomeScreen.swift</IC>, replace the <IC>Button(...)</IC> with a <IC>NavigationLink(destination: QuestionScreen()) {`{ }`}</IC>. The label inside the braces is the tappable content — keep the same text and styling as your current button label.</p>
            <Tip>A NavigationLink's label block works just like a Button's label block — anything you can put in a Button you can put here.</Tip>
            <Section title="✅ Check your work — show me the complete HomeScreen.swift so far">
              <CodeB title="Swift — HomeScreen.swift (with NavigationLink)" accent={GR}>{`struct HomeScreen: View {
    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("Trivia Challenge")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .foregroundColor(Color(red: 0.33, green: 0.29, blue: 0.72))
                Text("Test your knowledge!")
                    .font(.subheadline)
                    .foregroundColor(.gray)
                Spacer().frame(height: 48)
                NavigationLink(destination: QuestionScreen()) {
                    Text("Start Quiz")
                        .font(.headline)
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(Color(red: 0.33, green: 0.29, blue: 0.72))
                        .cornerRadius(10)
                }
            }
            .padding(32)
        }
    }
}`}</CodeB>
              <p>Note: the <IC>onStartClicked</IC> parameter is gone — <IC>NavigationLink</IC> handles the tap directly so we no longer need a callback.</p>
            </Section>
          </SubStep>

          <SubStep num="4c" title="Hide the auto-generated navigation bar title">
            <p>By default, <IC>NavigationStack</IC> adds a navigation bar with an empty title above your home screen. Add a <IC>.navigationBarHidden(true)</IC> modifier to the VStack (or ZStack) inside HomeScreen to clean up the design.</p>
            <Section title="✅ Check your work — show me the complete HomeScreen.swift">
              <CodeB title="Swift — HomeScreen.swift (complete)" accent={GR}>{`struct HomeScreen: View {
    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("Trivia Challenge")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .foregroundColor(Color(red: 0.33, green: 0.29, blue: 0.72))
                Text("Test your knowledge!")
                    .font(.subheadline)
                    .foregroundColor(.gray)
                Spacer().frame(height: 48)
                NavigationLink(destination: QuestionScreen()) {
                    Text("Start Quiz")
                        .font(.headline)
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(Color(red: 0.33, green: 0.29, blue: 0.72))
                        .cornerRadius(10)
                }
            }
            .padding(32)
        }
        .navigationBarHidden(true)
    }
}`}</CodeB>
            </Section>
          </SubStep>
        </>
      )}

      <Checkpoint num={4}>Tap Start Quiz — you should navigate to the question screen. Tap the back button (or swipe back on iOS) — you return to the home screen. Navigation is working!</Checkpoint>
      <Section title="💡 Why does Android use NavController but iOS uses NavigationLink?">
        Android uses a central NavController you pass around; iOS embeds the navigation intent directly in the UI with NavigationLink. Both push a screen onto the stack — they just differ in where the navigation logic lives. Ask Claude to explain why the platforms made different design choices here!
      </Section>
      {platform === "Android" && (
        <Section title="💡 I am getting a NavController import error">
          Make sure you synced after adding the dependency to <IC>build.gradle</IC>. If sync ran but imports still fail, try <strong>File → Sync Project with Gradle Files</strong> manually.
        </Section>
      )}
    </VStep>

    <VStep num={5} title="Ask Claude to translate and compare (~8 min)">
      <AiOpp>
        Paste your full navigation setup into Claude at claude.ai and use this prompt: <em>"I just set up navigation in my trivia app using [{platform === "Android" ? "Compose" : "SwiftUI"}]. Please translate the navigation setup to [{platform === "Android" ? "SwiftUI" : "Compose"}]. Then explain: what is conceptually the same about navigation in both platforms, and what is genuinely different about how they implement it?"</em> Read the explanation carefully before running the code.
      </AiOpp>
      <Checkbox>Received and read Claude's translation and explanation</Checkbox>
      <Checkbox>Both platform versions navigate from home to question correctly</Checkbox>
    </VStep>

    <VStep num={6} title="Reflect (~5 min)" last={true}>
      <CodeB title="Lab 3 Reflection">{`// Lab 3 Reflection (Week 2, Session 1)
// 1. In your own words: what is the navigation stack?
// 2. What does NavController / NavigationStack actually do?
// 3. What surprised you about how different the two platforms look
//    even though navigation works the same way conceptually?`}</CodeB>
      <Checkpoint num="Final">Show a TA both platforms navigating forward and back. Walk them through your reflection.</Checkpoint>
    </VStep>

    <Section title="🚀 Stretch Features">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
        <li>Add a question counter to the home screen showing how many questions are in the quiz</li>
        <li>Style the answer buttons so the correct answer highlights green when tapped (hint: you need a state variable)</li>
        <li>Add a difficulty badge to each question in your data model and display it on the question screen</li>
      </ul>
    </Section>
  </div>
);

function Session2Lab({ platform }: { platform: string }) {
  return (
    <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Session 2 Lab: Trivia App — Passing Data and Results Screen</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
        In this lab you will extend the trivia app from Session 1. You will pass question data between screens, track the user's score, and build a results screen. Budget about 50-60 minutes.
      </p>

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"🎯"} Goals</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
          <li>Pass a question index between screens so each screen shows the right question</li>
          <li>Add answer selection state with green/red visual feedback</li>
          <li>Track a score and navigate through all questions automatically</li>
          <li>Build a results screen that shows the final score and a Play Again button</li>
          <li>Use Claude to understand data passing differences between platforms</li>
        </ul>
      </div>

      <VStep num={0} title="Recap and setup (~3 min)">
        <p>Open your TriviaApp project from Session 1. Make sure navigation between home and question is still working before adding anything new.</p>
        <Tip>If your Session 1 lab is not working, ask a TA to help you get it to the Checkpoint 4 state before continuing. Everything in this lab builds on it.</Tip>
      </VStep>

      <VStep num={1} title="Pass the question index to the question screen (~10 min)">
        <p>Right now <IC>QuestionScreen</IC> always shows <IC>sampleQuestions[0]</IC> and the question number is hardcoded as "1 of 3". You will fix both by passing the index in from the navigation layer.</p>

        <SubStep num="1a" title="Update the route to carry the index">
          {platform === "Android" ? (
            <>
              <p>In <IC>MainActivity.kt</IC>, find your <IC>composable("question")</IC> route. Navigation Compose passes data as route arguments using the <IC>{`{paramName}`}</IC> syntax. Update the route to <IC>"question/{`{questionIndex}`}"</IC> and extract the integer from the back stack entry.</p>
              <p>Also update the <IC>onStartClicked</IC> navigate call to pass <IC>0</IC> as the starting index: <IC>navController.navigate("question/0")</IC>.</p>
              <Section title="✅ Check your work — show me the complete MainActivity.kt so far">
                <CodeB title="Kotlin — MainActivity.kt (updated route)" accent={BL}>{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()
            NavHost(navController = navController, startDestination = "home") {
                composable("home") {
                    HomeScreen(onStartClicked = {
                        navController.navigate("question/0")
                    })
                }
                composable("question/{questionIndex}") { backStackEntry ->
                    val index = backStackEntry.arguments
                        ?.getString("questionIndex")
                        ?.toInt() ?: 0
                    QuestionScreen(questionIndex = index)
                }
            }
        }
    }
}`}</CodeB>
              </Section>
            </>
          ) : (
            <>
              <p>In <IC>HomeScreen.swift</IC>, find the <IC>NavigationLink</IC> you set up in Session 1. Update its destination to pass the starting index: <IC>NavigationLink(destination: QuestionScreen(questionIndex: 0))</IC>.</p>
              <Tip>The <IC>QuestionScreen</IC> struct does not accept <IC>questionIndex</IC> yet — you will add that in step 1b. For now the compiler will show an error; that is expected.</Tip>
              <Section title="✅ Check your work — show me the updated NavigationLink">
                <CodeB title="Swift — HomeScreen.swift (updated NavigationLink)" accent={GR}>{`NavigationLink(destination: QuestionScreen(questionIndex: 0)) {
    Text("Start Quiz")
        .font(.headline)
        .foregroundColor(.white)
        .frame(maxWidth: .infinity)
        .padding()
        .background(Color(red: 0.33, green: 0.29, blue: 0.72))
        .cornerRadius(10)
}`}</CodeB>
              </Section>
            </>
          )}
        </SubStep>

        <SubStep num="1b" title="Update QuestionScreen to accept and use the index">
          {platform === "Android" ? (
            <>
              <p>In <IC>QuestionScreen.kt</IC>, add a <IC>questionIndex: Int</IC> parameter to the function signature. Replace the hardcoded <IC>sampleQuestions[0]</IC> with <IC>sampleQuestions[questionIndex]</IC>. Also update the question counter text to use <IC>questionIndex + 1</IC> instead of <IC>1</IC>.</p>
              <Section title="✅ Check your work — show me the complete QuestionScreen.kt">
                <CodeB title="Kotlin — QuestionScreen.kt (with index parameter)" accent={BL}>{`@Composable
fun QuestionScreen(questionIndex: Int) {
    val question = sampleQuestions[questionIndex]

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(24.dp),
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Question \${questionIndex + 1} of \${sampleQuestions.size}",
            fontSize = 14.sp, color = Color.Gray
        )
        Spacer(modifier = Modifier.height(12.dp))
        Text(
            text = question.text,
            fontSize = 22.sp, fontWeight = FontWeight.Bold,
            lineHeight = 30.sp
        )
        Spacer(modifier = Modifier.height(32.dp))
        question.answers.forEachIndexed { index, answer ->
            Button(
                onClick = { /* handle answer — Step 2 */ },
                modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Color.White),
                border = BorderStroke(1.dp, Color(0xFF534AB7))
            ) {
                Text(answer, color = Color(0xFF534AB7))
            }
        }
    }
}`}</CodeB>
              </Section>
            </>
          ) : (
            <>
              <p>In <IC>QuestionScreen.swift</IC>, replace the stored property <IC>let question = sampleQuestions[0]</IC> with a <IC>let questionIndex: Int</IC> parameter and a computed property <IC>var question: Question {`{ sampleQuestions[questionIndex] }`}</IC>. Update the counter text to use <IC>questionIndex + 1</IC>.</p>
              <Section title="✅ Check your work — show me the complete QuestionScreen.swift">
                <CodeB title="Swift — QuestionScreen.swift (with index parameter)" accent={GR}>{`struct QuestionScreen: View {
    let questionIndex: Int
    var question: Question { sampleQuestions[questionIndex] }

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(alignment: .leading, spacing: 12) {
                Text("Question \\(questionIndex + 1) of \\(sampleQuestions.count)")
                    .font(.subheadline)
                    .foregroundColor(.gray)
                Text(question.text)
                    .font(.title2).fontWeight(.bold).lineSpacing(6)
                Spacer().frame(height: 20)
                ForEach(Array(question.answers.enumerated()), id: \\.offset) { index, answer in
                    Button(action: { /* handle — Step 2 */ }) {
                        Text(answer)
                            .foregroundColor(Color(red: 0.33, green: 0.29, blue: 0.72))
                            .frame(maxWidth: .infinity).padding()
                            .background(Color.white).cornerRadius(10)
                            .overlay(RoundedRectangle(cornerRadius: 10)
                                .stroke(Color(red: 0.33, green: 0.29, blue: 0.72), lineWidth: 1))
                    }
                }
            }
            .padding(24)
        }
        .navigationBarBackButtonHidden(false)
    }
}`}</CodeB>
              </Section>
            </>
          )}
        </SubStep>

        <Checkpoint num={1}>The app navigates to the question screen and the counter now reads "Question 1 of 3". The question shown is still the first one — that is correct for now.</Checkpoint>
      </VStep>

      <VStep num={2} title="Add answer handling and score tracking (~12 min)">
        <p>Two things need to happen when a user taps an answer: (1) the button should turn green or red immediately as feedback, and (2) the app should move to the next question (or results) automatically. You will build these one at a time.</p>

        <SubStep num="2a" title="Add answer selection state and visual feedback">
          <p>Add a <IC>selectedIndex</IC> state variable to <IC>QuestionScreen</IC> — it starts at <IC>-1</IC> (nothing selected) and gets set when the user taps. Use it to color each button: white when unselected, green for the correct answer, red for a wrong one.</p>
          <p>Also add an <IC>onAnswerSelected</IC> callback parameter — a function the screen calls with <IC>true</IC> or <IC>false</IC> depending on whether the answer was correct. The parent (NavHost / ContentView) will decide what to do next.</p>
          {platform === "Android" ? (
            <>
              <p>In <IC>QuestionScreen.kt</IC>:</p>
              <ul style={{ paddingLeft: 20, margin: "4px 0 8px" }}>
                <li>Add <IC>onAnswerSelected: (Boolean) -&gt; Unit</IC> as a second parameter</li>
                <li>Add <IC>var selectedIndex by remember {`{ mutableStateOf(-1) }`}</IC> inside the function</li>
                <li>Inside the loop, compute <IC>val isSelected = selectedIndex == index</IC> and a <IC>bgColor</IC> using a <IC>when</IC> expression</li>
                <li>Update <IC>onClick</IC> to guard against double-taps and call the callback</li>
              </ul>
              <Section title="✅ Check your work — show me the complete QuestionScreen.kt">
                <CodeB title="Kotlin — QuestionScreen.kt (with answer feedback)" accent={BL}>{`@Composable
fun QuestionScreen(
    questionIndex: Int,
    onAnswerSelected: (Boolean) -> Unit
) {
    val question = sampleQuestions[questionIndex]
    var selectedIndex by remember { mutableStateOf(-1) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(24.dp),
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Question \${questionIndex + 1} of \${sampleQuestions.size}",
            fontSize = 14.sp, color = Color.Gray
        )
        Spacer(Modifier.height(12.dp))
        Text(
            text = question.text,
            fontSize = 22.sp, fontWeight = FontWeight.Bold,
            lineHeight = 30.sp
        )
        Spacer(Modifier.height(32.dp))
        question.answers.forEachIndexed { index, answer ->
            val isSelected = selectedIndex == index
            val bgColor = when {
                !isSelected -> Color.White
                index == question.correctIndex -> Color(0xFF1D9E75)
                else -> Color(0xFFE24B4A)
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
            ) {
                Text(answer,
                    color = if (isSelected) Color.White else Color(0xFF534AB7))
            }
        }
    }
}`}</CodeB>
              </Section>
            </>
          ) : (
            <>
              <p>In <IC>QuestionScreen.swift</IC>:</p>
              <ul style={{ paddingLeft: 20, margin: "4px 0 8px" }}>
                <li>Add <IC>let onAnswerSelected: (Bool) -&gt; Void</IC> as a stored property</li>
                <li>Add <IC>@State private var selectedIndex = -1</IC></li>
                <li>Inside the <IC>ForEach</IC>, compute a <IC>bg: Color</IC> closure based on <IC>selectedIndex</IC></li>
                <li>Update the button action to guard against double-taps and call the callback</li>
              </ul>
              <Section title="✅ Check your work — show me the complete QuestionScreen.swift">
                <CodeB title="Swift — QuestionScreen.swift (with answer feedback)" accent={GR}>{`struct QuestionScreen: View {
    let questionIndex: Int
    let onAnswerSelected: (Bool) -> Void
    var question: Question { sampleQuestions[questionIndex] }
    @State private var selectedIndex = -1

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(alignment: .leading, spacing: 12) {
                Text("Question \\(questionIndex + 1) of \\(sampleQuestions.count)")
                    .font(.subheadline).foregroundColor(.gray)
                Text(question.text)
                    .font(.title2).fontWeight(.bold).lineSpacing(6)
                Spacer().frame(height: 20)
                ForEach(Array(question.answers.enumerated()), id: \\.offset) { index, answer in
                    let bg: Color = {
                        if selectedIndex == -1 { return .white }
                        if index == question.correctIndex { return Color(red:0.11,green:0.62,blue:0.46) }
                        if index == selectedIndex { return Color(red:0.89,green:0.29,blue:0.29) }
                        return .white
                    }()
                    Button(action: {
                        if selectedIndex == -1 {
                            selectedIndex = index
                            onAnswerSelected(index == question.correctIndex)
                        }
                    }) {
                        Text(answer)
                            .foregroundColor(selectedIndex == -1
                                ? Color(red:0.33,green:0.29,blue:0.72) : .white)
                            .frame(maxWidth: .infinity).padding()
                            .background(bg).cornerRadius(10)
                    }
                }
            }
            .padding(24)
        }
    }
}`}</CodeB>
              </Section>
            </>
          )}
        </SubStep>

        <SubStep num="2b" title="Add score state and wire up the full navigation flow">
          {platform === "Android" ? (
            <>
              <p>Now wire up the <IC>onAnswerSelected</IC> callback in <IC>MainActivity.kt</IC>. The NavHost needs to: (1) hold a <IC>score</IC> state variable, (2) increment it on correct answers, (3) navigate to the next question or the results screen when done, and (4) reset the score when the user returns home.</p>
              <p>Add a <IC>results/{`{finalScore}`}</IC> route to the NavHost. For now, use a placeholder <IC>Text</IC> for <IC>ResultsScreen</IC> — you will build the real screen in Step 3.</p>
              <Section title="✅ Check your work — show me the complete MainActivity.kt">
                <CodeB title="Kotlin — MainActivity.kt (with score + full NavHost)" accent={BL}>{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()
            var score by remember { mutableStateOf(0) }
            NavHost(navController = navController, startDestination = "home") {
                composable("home") {
                    score = 0
                    HomeScreen(onStartClicked = {
                        navController.navigate("question/0")
                    })
                }
                composable("question/{questionIndex}") { backStackEntry ->
                    val index = backStackEntry.arguments
                        ?.getString("questionIndex")?.toInt() ?: 0
                    QuestionScreen(
                        questionIndex = index,
                        onAnswerSelected = { correct ->
                            if (correct) score++
                            val nextIndex = index + 1
                            if (nextIndex < sampleQuestions.size) {
                                navController.navigate("question/\$nextIndex")
                            } else {
                                navController.navigate("results/\$score")
                            }
                        }
                    )
                }
                composable("results/{finalScore}") { backStackEntry ->
                    val finalScore = backStackEntry.arguments
                        ?.getString("finalScore")?.toInt() ?: 0
                    // placeholder — replace with ResultsScreen in Step 3
                    Text("\$finalScore / \${sampleQuestions.size} correct")
                }
            }
        }
    }
}`}</CodeB>
              </Section>
            </>
          ) : (
            <>
              <p>With <IC>NavigationLink</IC>, SwiftUI decides when to navigate — but you need to update the score <em>before</em> navigating. The solution is to switch to <strong>programmatic navigation</strong> using a <IC>path</IC> array that you control.</p>
              <p>The pattern:</p>
              <ul style={{ paddingLeft: 20, margin: "4px 0 8px" }}>
                <li>Define an <IC>AppRoute</IC> enum with a case for each destination (including any data it carries)</li>
                <li>Add <IC>@State private var path: [AppRoute] = []</IC> to ContentView — this array <em>is</em> the back stack</li>
                <li>Use <IC>NavigationStack(path: $path)</IC> and <IC>.navigationDestination(for: AppRoute.self)</IC> to map routes to screens</li>
                <li>Navigate by calling <IC>path.append(.question(index))</IC> instead of relying on NavigationLink</li>
              </ul>
              <p>Also restore the <IC>onStartClicked</IC> parameter to <IC>HomeScreen</IC> — we removed it in Session 1, but programmatic navigation needs it back so ContentView can drive the navigation.</p>
              <Tip>For now, use a placeholder <IC>Text</IC> for the results case — you will build <IC>ResultsScreen</IC> in Step 3.</Tip>
              <Section title="✅ Check your work — show me the complete ContentView.swift">
                <CodeB title="Swift — ContentView.swift (programmatic navigation)" accent={GR}>{`enum AppRoute: Hashable {
    case question(Int)
    case results(Int)
}

struct ContentView: View {
    @State private var path: [AppRoute] = []
    @State private var score = 0

    var body: some View {
        NavigationStack(path: $path) {
            HomeScreen(onStartClicked: {
                score = 0
                path.append(.question(0))
            })
            .navigationDestination(for: AppRoute.self) { route in
                switch route {
                case .question(let index):
                    QuestionScreen(
                        questionIndex: index,
                        onAnswerSelected: { correct in
                            if correct { score += 1 }
                            let next = index + 1
                            if next < sampleQuestions.count {
                                path.append(.question(next))
                            } else {
                                path.append(.results(score))
                            }
                        }
                    )
                case .results(let finalScore):
                    // placeholder — replace with ResultsScreen in Step 3
                    Text("\\(finalScore) / \\(sampleQuestions.count) correct")
                }
            }
        }
    }
}`}</CodeB>
              </Section>
              <Note>You will also need to restore <IC>var onStartClicked: () -&gt; Void</IC> to <IC>HomeScreen</IC> and change the <IC>NavigationLink</IC> back to a plain <IC>Button(action: onStartClicked)</IC>, since ContentView now drives the navigation.</Note>
            </>
          )}
        </SubStep>

        <Checkpoint num={2}>Tap an answer — it highlights green or red immediately. The app then navigates to the next question automatically. After the last question you should see the placeholder text. Score tracking is live.</Checkpoint>
      </VStep>

      <VStep num={3} title="Build the results screen (~8 min)">
        <p>Create a new file <IC>{platform === "Android" ? "ResultsScreen.kt" : "ResultsScreen.swift"}</IC> and build the results screen. It receives the final score and total, computes a percentage, shows a feedback message, and offers a Play Again button.</p>

        <SubStep num="3a" title="Set up the layout and title">
          {platform === "Android" ? (
            <>
              <p>Add a <IC>@Composable</IC> function <IC>ResultsScreen</IC> with three parameters: <IC>score: Int</IC>, <IC>total: Int</IC>, <IC>onPlayAgain: () -&gt; Unit</IC>. Compute <IC>val percentage = (score.toFloat() / total * 100).toInt()</IC> at the top.</p>
              <p>Set up a centered Column (same pattern as HomeScreen) with 32dp padding. Add the "Quiz Complete!" title in purple at 28sp bold.</p>
              <Section title="✅ Check your work — show me the complete file so far">
                <CodeB title="Kotlin — ResultsScreen.kt (layout + title)" accent={BL}>{`@Composable
fun ResultsScreen(score: Int, total: Int, onPlayAgain: () -> Unit) {
    val percentage = (score.toFloat() / total * 100).toInt()
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            "Quiz Complete!",
            fontSize = 28.sp,
            fontWeight = FontWeight.Bold,
            color = Color(0xFF534AB7)
        )
        Spacer(Modifier.height(24.dp))
        // score display goes here
    }
}`}</CodeB>
              </Section>
            </>
          ) : (
            <>
              <p>Add a <IC>ResultsScreen</IC> struct with three stored properties: <IC>score: Int</IC>, <IC>total: Int</IC>, <IC>onPlayAgain: () -&gt; Void</IC>. Add a computed <IC>var percentage: Int</IC> that calculates the score as a whole-number percentage.</p>
              <p>Set up the same ZStack/VStack layout pattern. Add a bold "Quiz Complete!" title in purple.</p>
              <Section title="✅ Check your work — show me the complete file so far">
                <CodeB title="Swift — ResultsScreen.swift (layout + title)" accent={GR}>{`struct ResultsScreen: View {
    let score: Int
    let total: Int
    let onPlayAgain: () -> Void

    var percentage: Int { Int(Double(score) / Double(total) * 100) }

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("Quiz Complete!")
                    .font(.largeTitle).fontWeight(.bold)
                    .foregroundColor(Color(red:0.33,green:0.29,blue:0.72))
                Spacer().frame(height: 24)
                // score display goes here
            }
            .padding(32)
        }
        .navigationBarBackButtonHidden(true)
    }
}`}</CodeB>
              </Section>
            </>
          )}
        </SubStep>

        <SubStep num="3b" title="Add the score display and feedback message">
          {platform === "Android" ? (
            <>
              <p>Below the Spacer, add:</p>
              <ul style={{ paddingLeft: 20, margin: "4px 0 8px" }}>
                <li>A large <IC>Text</IC> showing <IC>"$score / $total"</IC> at 64sp bold</li>
                <li>A gray <IC>Text</IC> showing <IC>"$percentage% correct"</IC> at 16sp</li>
                <li>A small Spacer, then a green <IC>Text</IC> with a feedback message based on the percentage — use a <IC>when</IC> expression: 100% → "Perfect score!", ≥70% → "Great job!", ≥40% → "Good effort!", else → "Keep practicing!"</li>
                <li>A larger Spacer (40dp) before the button</li>
              </ul>
              <Section title="✅ Check your work — show me the complete file so far">
                <CodeB title="Kotlin — ResultsScreen.kt (with score + message)" accent={BL}>{`@Composable
fun ResultsScreen(score: Int, total: Int, onPlayAgain: () -> Unit) {
    val percentage = (score.toFloat() / total * 100).toInt()
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Quiz Complete!", fontSize = 28.sp,
            fontWeight = FontWeight.Bold, color = Color(0xFF534AB7))
        Spacer(Modifier.height(24.dp))
        Text("\$score / \$total", fontSize = 64.sp,
            fontWeight = FontWeight.Bold)
        Text("\$percentage% correct", fontSize = 16.sp, color = Color.Gray)
        Spacer(Modifier.height(12.dp))
        Text(
            text = when {
                percentage == 100 -> "Perfect score!"
                percentage >= 70  -> "Great job!"
                percentage >= 40  -> "Good effort!"
                else              -> "Keep practicing!"
            },
            fontSize = 18.sp,
            color = Color(0xFF1D9E75)
        )
        Spacer(Modifier.height(40.dp))
        // Play Again button goes here
    }
}`}</CodeB>
              </Section>
            </>
          ) : (
            <>
              <p>Add a computed <IC>var message: String</IC> property using a <IC>switch</IC> on <IC>percentage</IC>: 100 → "Perfect score!", 70... → "Great job!", 40... → "Good effort!", default → "Keep practicing!"</p>
              <p>Inside the VStack, add the score display: a large <IC>Text("\(score) / \(total)")</IC> at system size 64 bold, a gray percentage text, a green message text, and a 40pt Spacer before the button.</p>
              <Section title="✅ Check your work — show me the complete file so far">
                <CodeB title="Swift — ResultsScreen.swift (with score + message)" accent={GR}>{`struct ResultsScreen: View {
    let score: Int
    let total: Int
    let onPlayAgain: () -> Void

    var percentage: Int { Int(Double(score) / Double(total) * 100) }

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
                    .foregroundColor(Color(red:0.33,green:0.29,blue:0.72))
                Spacer().frame(height: 24)
                Text("\\(score) / \\(total)")
                    .font(.system(size: 64, weight: .bold))
                Text("\\(percentage)% correct")
                    .foregroundColor(.gray)
                Text(message).font(.title3)
                    .foregroundColor(Color(red:0.11,green:0.62,blue:0.46))
                Spacer().frame(height: 40)
                // Play Again button goes here
            }
            .padding(32)
        }
        .navigationBarBackButtonHidden(true)
    }
}`}</CodeB>
              </Section>
            </>
          )}
        </SubStep>

        <SubStep num="3c" title="Add the Play Again button and connect ResultsScreen">
          {platform === "Android" ? (
            <>
              <p>Add a full-width purple <IC>Button</IC> with label "Play Again" that calls <IC>onPlayAgain</IC>. Then go back to <IC>MainActivity.kt</IC> and replace the placeholder <IC>Text</IC> in the <IC>results/{`{finalScore}`}</IC> route with the real <IC>ResultsScreen</IC> call, passing <IC>onPlayAgain = {`{ navController.popBackStack("home", inclusive = false) }`}</IC>.</p>
              <Tip><IC>popBackStack("home", inclusive = false)</IC> clears everything back to the home destination without pushing a new one. If you used <IC>navigate("home")</IC> instead, you would stack a second home on top of the existing one.</Tip>
              <Section title="✅ Check your work — show me the complete ResultsScreen.kt">
                <CodeB title="Kotlin — ResultsScreen.kt (complete)" accent={BL}>{`@Composable
fun ResultsScreen(score: Int, total: Int, onPlayAgain: () -> Unit) {
    val percentage = (score.toFloat() / total * 100).toInt()
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Quiz Complete!", fontSize = 28.sp,
            fontWeight = FontWeight.Bold, color = Color(0xFF534AB7))
        Spacer(Modifier.height(24.dp))
        Text("\$score / \$total", fontSize = 64.sp,
            fontWeight = FontWeight.Bold)
        Text("\$percentage% correct", fontSize = 16.sp, color = Color.Gray)
        Spacer(Modifier.height(12.dp))
        Text(
            text = when {
                percentage == 100 -> "Perfect score!"
                percentage >= 70  -> "Great job!"
                percentage >= 40  -> "Good effort!"
                else              -> "Keep practicing!"
            },
            fontSize = 18.sp,
            color = Color(0xFF1D9E75)
        )
        Spacer(Modifier.height(40.dp))
        Button(
            onClick = onPlayAgain,
            modifier = Modifier.fillMaxWidth(),
            colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF534AB7))
        ) {
            Text("Play Again", fontSize = 16.sp)
        }
    }
}`}</CodeB>
              </Section>
              <Section title="✅ Check your work — show me the complete MainActivity.kt">
                <CodeB title="Kotlin — MainActivity.kt (complete)" accent={BL}>{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()
            var score by remember { mutableStateOf(0) }
            NavHost(navController = navController, startDestination = "home") {
                composable("home") {
                    score = 0
                    HomeScreen(onStartClicked = {
                        navController.navigate("question/0")
                    })
                }
                composable("question/{questionIndex}") { backStackEntry ->
                    val index = backStackEntry.arguments
                        ?.getString("questionIndex")?.toInt() ?: 0
                    QuestionScreen(
                        questionIndex = index,
                        onAnswerSelected = { correct ->
                            if (correct) score++
                            val nextIndex = index + 1
                            if (nextIndex < sampleQuestions.size) {
                                navController.navigate("question/\$nextIndex")
                            } else {
                                navController.navigate("results/\$score")
                            }
                        }
                    )
                }
                composable("results/{finalScore}") { backStackEntry ->
                    val finalScore = backStackEntry.arguments
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
}`}</CodeB>
              </Section>
            </>
          ) : (
            <>
              <p>Add a full-width purple <IC>Button(action: onPlayAgain)</IC> with label "Play Again". Then go back to <IC>ContentView.swift</IC> and replace the placeholder <IC>Text</IC> in the <IC>results</IC> case with a real <IC>ResultsScreen</IC> call, passing <IC>onPlayAgain: {`{ path.removeAll() }`}</IC>.</p>
              <Tip><IC>path.removeAll()</IC> clears the entire navigation stack, which takes the user back to the root <IC>HomeScreen</IC>. This is the SwiftUI equivalent of Android's <IC>popBackStack("home", inclusive = false)</IC>.</Tip>
              <Section title="✅ Check your work — show me the complete ResultsScreen.swift">
                <CodeB title="Swift — ResultsScreen.swift (complete)" accent={GR}>{`struct ResultsScreen: View {
    let score: Int
    let total: Int
    let onPlayAgain: () -> Void

    var percentage: Int { Int(Double(score) / Double(total) * 100) }

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
                    .foregroundColor(Color(red:0.33,green:0.29,blue:0.72))
                Spacer().frame(height: 24)
                Text("\\(score) / \\(total)")
                    .font(.system(size: 64, weight: .bold))
                Text("\\(percentage)% correct")
                    .foregroundColor(.gray)
                Text(message).font(.title3)
                    .foregroundColor(Color(red:0.11,green:0.62,blue:0.46))
                Spacer().frame(height: 40)
                Button(action: onPlayAgain) {
                    Text("Play Again")
                        .font(.headline).foregroundColor(.white)
                        .frame(maxWidth: .infinity).padding()
                        .background(Color(red:0.33,green:0.29,blue:0.72))
                        .cornerRadius(10)
                }
            }
            .padding(32)
        }
        .navigationBarBackButtonHidden(true)
    }
}`}</CodeB>
              </Section>
              <Section title="✅ Check your work — show me the complete ContentView.swift">
                <CodeB title="Swift — ContentView.swift (complete)" accent={GR}>{`enum AppRoute: Hashable {
    case question(Int)
    case results(Int)
}

struct ContentView: View {
    @State private var path: [AppRoute] = []
    @State private var score = 0

    var body: some View {
        NavigationStack(path: $path) {
            HomeScreen(onStartClicked: {
                score = 0
                path.append(.question(0))
            })
            .navigationDestination(for: AppRoute.self) { route in
                switch route {
                case .question(let index):
                    QuestionScreen(
                        questionIndex: index,
                        onAnswerSelected: { correct in
                            if correct { score += 1 }
                            let next = index + 1
                            if next < sampleQuestions.count {
                                path.append(.question(next))
                            } else {
                                path.append(.results(score))
                            }
                        }
                    )
                case .results(let finalScore):
                    ResultsScreen(
                        score: finalScore,
                        total: sampleQuestions.count,
                        onPlayAgain: { path.removeAll() }
                    )
                }
            }
        }
    }
}`}</CodeB>
              </Section>
            </>
          )}
        </SubStep>

        <Checkpoint num={3}>Complete the full quiz. You land on the results screen with your score and a feedback message. Tap Play Again — you return to the home screen and the score resets.</Checkpoint>
      </VStep>

      <VStep num={4} title="Ask Claude about data passing (~7 min)">
        <AiOpp>
          Paste your navigation setup into Claude and use this prompt: <em>"I built a trivia app with navigation and data passing in [{platform === "Android" ? "Compose" : "SwiftUI"}]. Please translate the navigation and data passing code to [{platform === "Android" ? "SwiftUI" : "Compose"}]. Then explain: what is the difference between how Android and iOS pass data between screens? Is one approach cleaner than the other?"</em>
        </AiOpp>
        <Checkbox>Received and read Claude's translation and data passing explanation</Checkbox>
        <Checkbox>Both platform versions complete the full quiz flow end-to-end</Checkbox>
      </VStep>

      <VStep num={5} title="Reflect (~5 min)" last={true}>
        <CodeB title="Lab 4 Reflection">{`// Lab 4 Reflection (Week 2, Session 2)
// 1. What is the back stack? Describe it like a stack of cards.
// 2. When would you use popBackStack vs navigate?
// 3. What was the hardest part of passing data between screens?`}</CodeB>
        <Checkpoint num="Final">Show a TA the full quiz flow — home, questions with correct/incorrect highlighting, results, and play again. Walk them through your reflection.</Checkpoint>
      </VStep>

      <Section title="🚀 Stretch Features">
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
          <li>Add a progress bar at the top of the question screen showing how far through the quiz the user is</li>
          <li>Add a timer to each question — if time runs out, count it as wrong and move on</li>
          <li>Add a high score that persists as long as the app is open (hint: lift the state up to the NavHost level)</li>
        </ul>
      </Section>
    </div>
  );
}

function Lab() {
  const [step, setStep] = useState(0);
  const [platform, setPlatform] = useState("Android");
  return (
    <div>
      <div style={{ display: "flex", gap: 0, marginBottom: 12, borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
        {["Session 1", "Session 2"].map((s, i) => (
          <button key={s} onClick={() => setStep(i)} style={{
            padding: "8px 20px", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer",
            background: step === i ? PL : "var(--color-background-primary)",
            color: step === i ? PD : "var(--color-text-secondary)"
          }}>{s}{i === 0 ? " — Home & Question" : " — Data & Results"}</button>
        ))}
      </div>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      {step === 0 ? <LabSession1 platform={platform} /> : <Session2Lab platform={platform} />}
    </div>
  );
}

function Project() {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 2 Project: Character Creator</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>
        You are going to build an RPG character creator — a multi-screen app that walks the user through a series of choices and assembles a character card from their selections. We provide starter code with some screens fully complete, one with a TODO to fill in, one with deliberate bugs to find and fix, and a final screen where you wire up the display. Android only for this assignment.
      </p>

      <div style={{ display: "flex", justifyContent: "center", margin: "0 0 20px" }}>
        <img src="https://raw.githubusercontent.com/PaulLeung93/Mobile-Course-Solutions/main/Android/Week%202/Week2-Project2_Solutions/CharacterCreator/walkthroughs/walkthrough.gif" alt="Character Creator walkthrough" style={{ width: 280, borderRadius: 16, border: "1px solid var(--color-border-tertiary)" }} />
      </div>

      <Section title="🗺️ The App" defaultOpen={true}>
        <p style={{ margin: "0 0 6px" }}>The finished app has seven screens connected by navigation:</p>
        <UL items={[
          <><strong>Home</strong> — app title, tagline, and a Begin button. <em>(complete)</em></>,
          <><strong>Step 1 — Face Customization</strong> — pick skin tone, eye color, hair style, hair color, and ear type. The face preview updates live. All choices are bundled into a <IC>FaceSelection</IC> object and passed forward. <em>(complete)</em></>,
          <><strong>Step 2 — Choose Class</strong> — four options: Warrior, Mage, Rogue, Ranger. Tapping one navigates forward and passes the chosen class. Read this file carefully — it is your reference for the navigation pattern. <em>(complete)</em></>,
          <><strong>Step 3 — Choose Weapon</strong> — four weapon options that change based on the class chosen. Warrior gets bladed weapons; Mage gets arcane implements; Rogue gets stealth tools; Ranger gets ranged gear. <em>(bugs to fix)</em></>,
          <><strong>Step 4 — Choose Stat Boost</strong> — four stats: Strength, Intelligence, Agility, Luck. Receives class and weapon from previous screens. <em>(TODO to fill in)</em></>,
          <><strong>Step 5 — Choose Ability</strong> — four class-specific abilities that change based on the chosen class. <em>(complete)</em></>,
          <><strong>Character Card</strong> — displays the completed character with animated sprite, class, stat boost, weapon, ability, and a generated description. <em>(TODOs to fill in)</em></>,
        ]} />
      </Section>

      <Section title="🔧 Starter Code" defaultOpen={true}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ background: "#E8FCE8", color: "#1D7A1D", fontWeight: 600, fontSize: 11, padding: "2px 8px", borderRadius: 20, flexShrink: 0, marginTop: 2 }}>COMPLETE</span>
            <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}><strong>HomeScreen, FaceScreen, ClassScreen, AbilityScreen</strong> — fully working. Read ClassScreen carefully — it shows the selection card pattern, shared UI helpers (<IC>StepHeader</IC>, <IC>SelectionCard</IC>, <IC>ContextChip</IC>), and the confirm-button flow that every other screen follows.</span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ background: "#FFF8E6", color: "#92400E", fontWeight: 600, fontSize: 11, padding: "2px 8px", borderRadius: 20, flexShrink: 0, marginTop: 2 }}>BUG</span>
            <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}><strong>WeaponScreen</strong> — one bug is planted. The weapon list is hardcoded and always shows Warrior weapons no matter which class was chosen. Fix it so WeaponScreen uses the <IC>characterClass</IC> argument it received via navigation to look up the correct weapons.</span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ background: "#E6F1FB", color: "#1A5C8A", fontWeight: 600, fontSize: 11, padding: "2px 8px", borderRadius: 20, flexShrink: 0, marginTop: 2 }}>TODO</span>
            <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}><strong>StatScreen</strong> — the UI and selection cards are fully built. The confirm button{"'"}s <IC>onClick</IC> is stubbed out. Fill it in so tapping Confirm calls <IC>onStatSelected(selectedStat)</IC> and navigates forward.</span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ background: "#E6F1FB", color: "#1A5C8A", fontWeight: 600, fontSize: 11, padding: "2px 8px", borderRadius: 20, flexShrink: 0, marginTop: 2 }}>TODO</span>
            <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}><strong>CharacterCardScreen</strong> — the layout, sprite, and buttons are fully built. The five display variables (<IC>classDisplay</IC>, <IC>statDisplay</IC>, <IC>weaponDisplay</IC>, <IC>abilityDisplay</IC>, <IC>description</IC>) are set to placeholder strings. Wire each one to the matching navigation argument passed into the function.</span>
          </div>
        </div>
      </Section>

      <Section title="✅ Required Features" defaultOpen={true}>
        <Checkbox>WeaponScreen shows weapon options that match the chosen class (bug fix)</Checkbox>
        <Checkbox>StatScreen{"'"}s Confirm button calls <IC>onStatSelected</IC> to navigate forward (TODO)</Checkbox>
        <Checkbox>CharacterCard displays the correct class, stat boost, weapon, and ability from navigation arguments — not placeholder strings (TODO)</Checkbox>
        <Checkbox>CharacterCard displays a generated description built from the selections (TODO)</Checkbox>
        <Checkbox>Start Over button on CharacterCard navigates back to HomeScreen</Checkbox>
        <Checkbox>The app runs without crashing from start to finish</Checkbox>
      </Section>

      <Section title="🚀 Stretch Features">
        <Checkbox>Make the confirm button on ClassScreen change color to match the selected class — look at <IC>classColors</IC> in <IC>CharacterData.kt</IC> and how <IC>WeaponScreen</IC> uses <IC>accentColor</IC> for its button</Checkbox>
      </Section>

      <Section title="📘 Submitting your project">
        <ol style={{ fontSize: 13, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
          <li>Fork the starter code repository (link below)</li>
          <li>Complete the TODOs and fix the bugs</li>
          <li>Create a README using the Unit 2 README template</li>
          <li>In the README, check off all features you implemented by changing <IC>-[ ]</IC> to <IC>-[x]</IC></li>
          <li>Record a GIF or screen recording — home screen through the completed character card</li>
          <li>Add the GIF to the README</li>
          <li>Make the repo private and add <IC>codepathreview</IC> as a collaborator</li>
        </ol>
        <Note>Not sure how to record a GIF? On Mac use QuickTime plus a GIF converter. On Windows use ShareX. There are also browser extensions that can capture simulator screens.</Note>
      </Section>

      <Section title="💡 Hints">
        <p><strong>WeaponScreen shows the same weapons for every class</strong></p>
        <p style={{ marginLeft: 16 }}>The starter has a hardcoded weapon list. Look at <IC>CharacterData.kt</IC> — there is a <IC>weaponsByClass</IC> map that holds the correct weapons for each class. Replace the hardcoded list with a lookup using the <IC>characterClass</IC> argument that was already passed to the screen via navigation.</p>
        <p><strong>The Confirm button on StatScreen does nothing</strong></p>
        <p style={{ marginLeft: 16 }}>Find the <IC>onClick</IC> stub in <IC>StatScreen.kt</IC> and call <IC>onStatSelected(selectedStat)</IC>. That callback is wired up in <IC>MainActivity</IC> and handles the navigate call — you just need to invoke it with the chosen stat.</p>
        <p><strong>The CharacterCard still shows "???" for everything</strong></p>
        <p style={{ marginLeft: 16 }}>Find the five display variables near the top of <IC>CharacterCardScreen.kt</IC>. Each is set to a placeholder string. Replace them with the matching parameter: <IC>characterClass</IC>, <IC>stat</IC>, <IC>weapon</IC>, <IC>ability</IC>. For <IC>description</IC>, call <IC>buildDescription(characterClass, stat, weapon, ability)</IC>.</p>
        <p><strong>Start Over navigates to a new home instead of going back</strong></p>
        <p style={{ marginLeft: 16 }}>Use <IC>navController.popBackStack("home", inclusive = false)</IC> rather than <IC>navController.navigate("home")</IC>. Navigating pushes a new home onto the stack; popping clears everything back to the existing one.</p>
      </Section>
    </div>
  );
}

/* ══════════════════════ LEARNING WITH AI ══════════════════════ */
function LearningWithAI() {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Learning with AI</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>
        This week you tackle navigation — the biggest conceptual leap so far. The syntax between Android and iOS diverges significantly here, which makes Claude especially useful. This guide shows you how to use it well.
      </p>
      <Note>Navigation has a lot of boilerplate. Claude is great at generating it — but only use it after you understand the concept. If you cannot explain what a NavController does, reading the code first beats generating it.</Note>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>AI roles</h2>
      {[
        { icon: "🎓", title: "Virtual TA", desc: "Ask Claude to explain navigation concepts without writing code for you. Example: What is the navigation back stack? Explain it using an analogy, not code." },
        { icon: "🌐", title: "Platform translator", desc: "This week has the biggest syntax gap between platforms so far. Use Claude to see how the same navigation pattern looks in both. Example: I set up a NavHost in Compose. Translate this to SwiftUI NavigationStack — then explain the three biggest structural differences." },
        { icon: "🔍", title: "Debugging partner", desc: "Navigation errors can be cryptic. Paste your error and ask Claude to help you understand it. Example: My app crashes when navigating to the question screen. Here is my NavHost and the error. What is wrong?" },
        { icon: "📐", title: "Data model reviewer", desc: "Use Claude to review your data class or struct design before building UI on top of it. Example: Here is my Question data class. What would you change to make it easier to extend later?" },
      ].map(r => (
        <div key={r.title} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
          <span style={{ fontSize: 20, flexShrink: 0 }}>{r.icon}</span>
          <div>
            <p style={{ fontSize: 13, fontWeight: 500, margin: "0 0 2px", color: "var(--color-text-primary)" }}>{r.title}</p>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{r.desc}</p>
          </div>
        </div>
      ))}

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Green flags — effective AI use</h2>
      {[
        { title: "Translating navigation setup", why: "NavHost vs NavigationStack look nothing alike even though they do the same thing. Translating between them with Claude is one of the best ways to understand both.", ex: "Translate this Compose NavHost setup to SwiftUI. Then explain: what is NavController's equivalent in SwiftUI, and why does iOS not need one?" },
        { title: "Generating sample data", why: "You need realistic trivia questions, RPG classes, or weapon lists to test your UI. Claude can generate these instantly so you can focus on navigation logic.", ex: "Give me a Kotlin data class called Question with text, answers (a list of strings), and correctIndex fields. Then give me 5 sample questions as hardcoded values." },
        { title: "Understanding back stack behavior", why: "Back stack bugs are subtle — pressing back can go to the wrong screen if your navigation is set up incorrectly. Asking Claude to explain popBackStack vs navigate helps you reason about it before you hit the bug.", ex: "In Compose Navigation, when should I use popBackStack vs navigate? Give me a concrete example of where using navigate instead of popBackStack would cause a bug." },
        { title: "Explaining error messages", why: "Navigation errors in both platforms tend to be verbose and confusing. Claude is good at cutting through the noise and pointing you to the real issue.", ex: "I am getting this crash when navigating: [paste error]. What is causing it and what do I need to change?" },
      ].map(item => (
        <div key={item.title} style={{ background: "#E1F5EE", border: "0.5px solid #9FE1CB", borderRadius: 8, padding: "10px 14px", margin: "8px 0" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#085041", margin: "0 0 4px" }}>✅ {item.title}</p>
          <p style={{ fontSize: 12, color: "#0F6E56", margin: "0 0 6px", lineHeight: 1.5 }}><strong>Why:</strong> {item.why}</p>
          <p style={{ fontSize: 12, color: "#0F6E56", margin: 0, lineHeight: 1.5 }}><strong>Example prompt:</strong> {item.ex}</p>
        </div>
      ))}

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Red flags — common pitfalls</h2>
      {[
        { title: "Asking Claude to scaffold your entire navigation before you understand it", why: "Navigation has real structure — destinations, routes, back stack. If you paste in Claude's NavHost without understanding it, the first bug you hit will be impossible to debug." },
        { title: "Using Claude to skip the platform comparison", why: "The whole point of the translation exercise is to see that NavController and NavigationStack are solving the same problem differently. If you just accept the output without comparing, you miss the concept." },
        { title: "Asking Claude to fix the planted bug in the assignment", why: "The WeaponScreen bug is there to help you practice reading navigation code and tracing how data flows between screens. Asking Claude to find it gives you nothing — finding it yourself is the skill." },
        { title: "Copying data class definitions without reading them", why: "Data classes and structs define the shape of your entire app's data. If you do not read every field, you will be confused when the UI does not show what you expect." },
      ].map(item => (
        <div key={item.title} style={{ background: "#FCEBEB", border: "0.5px solid #F7C1C1", borderRadius: 8, padding: "10px 14px", margin: "8px 0" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#791F1F", margin: "0 0 4px" }}>🚩 {item.title}</p>
          <p style={{ fontSize: 12, color: "#A32D2D", margin: 0, lineHeight: 1.5 }}><strong>Why it hurts you:</strong> {item.why}</p>
        </div>
      ))}
      <Tip>Remember: Claude is one tool in your toolkit. Your instructor, TAs, classmates, official documentation (developer.android.com, developer.apple.com), and Stack Overflow are all still valuable — and often more reliable.</Tip>
    </div>
  );
}

function Resources() {
  return (
    <div style={{ fontSize: 13, lineHeight: 1.8 }}>
      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>📖 Official documentation</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/jetpack/compose/navigation" style={{ color: "var(--color-text-info)" }}>Navigation in Compose — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/navigationstack" style={{ color: "var(--color-text-info)" }}>NavigationStack — developer.apple.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/navigationlink" style={{ color: "var(--color-text-info)" }}>NavigationLink — developer.apple.com</a></li>
        <li><a href="https://kotlinlang.org/docs/data-classes.html" style={{ color: "var(--color-text-info)" }}>Data classes in Kotlin — kotlinlang.org</a></li>
        <li><a href="https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/" style={{ color: "var(--color-text-info)" }}>Structs in Swift — swift.org</a></li>
      </ul>
      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>🔬 Lab resources</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/jetpack/compose/navigation#nav-back-stack" style={{ color: "var(--color-text-info)" }}>Back stack in Compose navigation</a></li>
        <li><a href="https://developer.android.com/jetpack/compose/navigation#nav-with-args" style={{ color: "var(--color-text-info)" }}>Passing arguments with Compose navigation</a></li>
        <li><a href="https://developer.apple.com/tutorials/swiftui/handling-user-input" style={{ color: "var(--color-text-info)" }}>Handling user input in SwiftUI (Apple tutorial)</a></li>
      </ul>
      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>✏️ Extra practice</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/courses/android-basics-compose/unit-4" style={{ color: "var(--color-text-info)" }}>Android Basics with Compose — Unit 4: Navigation</a></li>
        <li><a href="https://developer.apple.com/tutorials/swiftui/building-lists-and-navigation" style={{ color: "var(--color-text-info)" }}>SwiftUI: Building lists and navigation (Apple tutorial)</a></li>
      </ul>
    </div>
  );
}

export default function Week2Unit() {
  const [tab, setTab] = useState("Overview");
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "16px 0", fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", fontWeight: 500, marginBottom: 2 }}>MOBILE DEVELOPMENT IN THE AGE OF AI</div>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>CodePath · 10 weeks · 2 sessions/week</div>
      </div>
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--color-border-tertiary)", marginBottom: 16, overflowX: "auto" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "8px 14px", fontSize: 13, background: "none", cursor: "pointer",
            borderWidth: "0 0 2px 0", borderStyle: "solid",
            borderColor: tab === t ? P_C : "transparent",
            color: tab === t ? P_C : "var(--color-text-secondary)",
            fontWeight: tab === t ? 500 : 400, whiteSpace: "nowrap"
          }}>{t}</button>
        ))}
      </div>
      {tab === "Overview"         && <Overview />}
      {tab === "Lab"              && <Lab />}
      {tab === "Project"          && <Project />}
      {tab === "Learning with AI" && <LearningWithAI />}
      {tab === "Resources"        && <Resources />}
    </div>
  );
}
