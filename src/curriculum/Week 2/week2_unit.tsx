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

    <Step num={0} title="Set up a new project (~3 min)">
      <Checkbox>Create a new project called TriviaApp (same setup as Week 1)</Checkbox>
      <Tip>Keep your TapCounter project open in another window — you will reference the state patterns from last week.</Tip>
    </Step>

    <Step num={1} title="Create your data model (~8 min)">
      <p>Before building any UI, define what a trivia question looks like as a data structure. This is a data class in Kotlin or a struct in Swift.</p>
      {platform === "Android" ? (
        <>
          <p>Create a new file called <IC>Question.kt</IC>:</p>
          <CodeB title="Kotlin — Question.kt" accent={BL}>{`data class Question(
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
        </>
      ) : (
        <>
          <p>Create a new file called <IC>Question.swift</IC>:</p>
          <CodeB title="Swift — Question.swift" accent={GR}>{`struct Question {
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
        </>
      )}
      <Checkpoint num={1}>The data model compiles with no errors. You do not need any UI yet — just make sure the file is valid.</Checkpoint>
      <Section title="💡 Hint: What is a data class / struct?">
        A data class (Kotlin) or struct (Swift) is a blueprint for a piece of data. It defines what fields that data has. Think of it like a form template — the template defines the fields, and each Question is a filled-in copy of that form.
      </Section>
    </Step>

    <Step num={2} title="Build the home screen (~10 min)">
      <p>Build a simple home screen — the app name, a tagline, and a Start Quiz button. No navigation yet.</p>
      {platform === "Android" ? (
        <CodeB title="Kotlin — HomeScreen.kt" accent={BL}>{`@Composable
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
      ) : (
        <CodeB title="Swift — HomeScreen.swift" accent={GR}>{`struct HomeScreen: View {
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
      )}
      <Tip>Notice that <IC>onStartClicked</IC> is a parameter — it is a function passed into the screen. This is how screens communicate upward in both platforms. We will use this when wiring up navigation in Step 4.</Tip>
      <Checkpoint num={2}>Run the app. You should see the home screen with a Start Quiz button. Tapping it does nothing yet.</Checkpoint>
    </Step>

    <Step num={3} title="Build the question screen (~10 min)">
      <p>Build a question screen that displays a hardcoded question and four answer buttons. No data passing yet — use the first question from <IC>sampleQuestions</IC> directly.</p>
      {platform === "Android" ? (
        <CodeB title="Kotlin — QuestionScreen.kt" accent={BL}>{`@Composable
fun QuestionScreen() {
    val question = sampleQuestions[0]   // hardcoded for now

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
      ) : (
        <CodeB title="Swift — QuestionScreen.swift" accent={GR}>{`struct QuestionScreen: View {
    let question = sampleQuestions[0]   // hardcoded for now

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
      )}
      <Checkpoint num={3}>The question screen compiles. You cannot see it in the app yet — we wire up navigation in the next step.</Checkpoint>
      <Section title="💡 Hint: What is forEachIndexed / ForEach?">
        Both loop over a list and create UI for each item. <IC>forEachIndexed</IC> in Kotlin gives you both the index and the item. <IC>ForEach</IC> in SwiftUI does the same with <IC>enumerated()</IC>. You will use this pattern constantly when building lists in Week 3.
      </Section>
    </Step>

    <Step num={4} title="Set up navigation and connect the screens (~12 min)">
      <p>Now wire the two screens together. This is the core of Session 1.</p>
      {platform === "Android" ? (
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
      ) : (
        <CodeB title="Swift — ContentView.swift (with NavigationLink)" accent={GR}>{`struct ContentView: View {
    var body: some View {
        NavigationStack {
            HomeScreen()
        }
    }
}

// Update HomeScreen to use NavigationLink:
struct HomeScreen: View {
    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("Trivia Challenge")
                    .font(.largeTitle).fontWeight(.bold)
                    .foregroundColor(Color(red: 0.33, green: 0.29, blue: 0.72))
                Text("Test your knowledge!")
                    .font(.subheadline).foregroundColor(.gray)
                Spacer().frame(height: 48)
                NavigationLink(destination: QuestionScreen()) {
                    Text("Start Quiz")
                        .font(.headline).foregroundColor(.white)
                        .frame(maxWidth: .infinity).padding()
                        .background(Color(red: 0.33, green: 0.29, blue: 0.72))
                        .cornerRadius(10)
                }
            }
            .padding(32)
        }
        .navigationBarHidden(true)
    }
}`}</CodeB>
      )}
      <Checkpoint num={4}>Tap Start Quiz — you should navigate to the question screen. Tap the back button — you return to the home screen. Navigation is working!</Checkpoint>
      <Section title="💡 Hint: Why does Android use NavController but iOS uses NavigationLink?">
        This is the biggest syntax difference between the two platforms for navigation. Android uses a central NavController that you pass around. iOS uses NavigationLink directly in the UI. Both achieve the same thing — pushing a screen onto the stack. Ask Claude to explain why they made different design choices!
      </Section>
      {platform === "Android" && (
        <Section title="💡 Hint: I am getting a NavController import error">
          Make sure you have added the Navigation Compose dependency to your <IC>build.gradle</IC>: <IC>implementation("androidx.navigation:navigation-compose:2.7.0")</IC>
        </Section>
      )}
    </Step>

    <Step num={5} title="Ask Claude to translate and compare (~8 min)">
      <AiOpp>
        Paste your full navigation setup into Claude at claude.ai and use this prompt: <em>"I just set up navigation in my trivia app using [{platform === "Android" ? "Compose" : "SwiftUI"}]. Please translate the navigation setup to [{platform === "Android" ? "SwiftUI" : "Compose"}]. Then explain: what is conceptually the same about navigation in both platforms, and what is genuinely different about how they implement it?"</em> Read the explanation carefully before running the code.
      </AiOpp>
      <Checkbox>Received and read Claude's translation and explanation</Checkbox>
      <Checkbox>Both platform versions navigate from home to question correctly</Checkbox>
    </Step>

    <Step num={6} title="Reflect (~5 min)">
      <CodeB title="Lab 3 Reflection">{`// Lab 3 Reflection (Week 2, Session 1)
// 1. In your own words: what is the navigation stack?
// 2. What does NavController / NavigationStack actually do?
// 3. What surprised you about how different the two platforms look
//    even though navigation works the same way conceptually?`}</CodeB>
      <Checkpoint num="Final">Show a TA both platforms navigating forward and back. Walk them through your reflection.</Checkpoint>
    </Step>

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
          <li>Pass a Question object from the home screen to the question screen</li>
          <li>Track a score using state across screens</li>
          <li>Build a results screen that shows the final score</li>
          <li>Understand how the back stack works and when to use popBackStack</li>
          <li>Use Claude to understand data passing differences between platforms</li>
        </ul>
      </div>

      <Step num={0} title="Recap and setup (~3 min)">
        <p>Open your TriviaApp project from Session 1. Make sure navigation between home and question is still working before adding anything new.</p>
        <Tip>If your Session 1 lab is not working, ask a TA to help you get it to the checkpoint 4 state before continuing. Everything in this lab builds on it.</Tip>

      </Step>

      <Step num={1} title="Pass the question index to the question screen (~10 min)">
        <p>Right now the question screen always shows sampleQuestions[0]. Let us pass which question to show from the home screen.</p>
        {platform === "Android" ? (
          <CodeB title="Kotlin — NavHost update" accent={BL}>{`// In NavHost, update the question route to accept an argument:
composable("question/{questionIndex}") { backStackEntry ->
    val index = backStackEntry.arguments
        ?.getString("questionIndex")
        ?.toInt() ?: 0
    QuestionScreen(questionIndex = index)
}

// Update HomeScreen's onStartClicked:
onStartClicked = {
    navController.navigate("question/0")  // start at index 0
}

// Update QuestionScreen to accept the index:
@Composable
fun QuestionScreen(questionIndex: Int) {
    val question = sampleQuestions[questionIndex]
    // rest of the screen stays the same
}`}</CodeB>
        ) : (
          <CodeB title="Swift — ContentView update" accent={GR}>{`// Update ContentView.swift to pass the question index:
struct ContentView: View {
    var body: some View {
        NavigationStack {
            HomeScreen()
        }
    }
}

// Update HomeScreen to pass index via NavigationLink:
NavigationLink(destination: QuestionScreen(questionIndex: 0)) {
    Text("Start Quiz")
        // ... styling stays the same
}

// Update QuestionScreen to accept the index:
struct QuestionScreen: View {
    let questionIndex: Int
    var question: Question { sampleQuestions[questionIndex] }
    // rest of the screen stays the same
}`}</CodeB>
        )}
        <Checkpoint num={1}>The app still navigates to the question screen and shows the first question. The difference now is the question comes from a parameter, not a hardcoded index.</Checkpoint>

      </Step>

      <Step num={2} title="Track score and navigate to the next question (~12 min)">
        <p>Add answer handling — when a user taps an answer, check if it is correct, update the score, and navigate to the next question. Pass the score along as navigation data.</p>
        {platform === "Android" ? (
          <>
            <CodeB title="Kotlin — QuestionScreen" accent={BL}>{`@Composable
fun QuestionScreen(
    questionIndex: Int,
    score: Int = 0,
    onAnswerSelected: (correct: Boolean) -> Unit
) {
    val question = sampleQuestions[questionIndex]
    var selectedIndex by remember { mutableStateOf(-1) }

    Column(
        modifier = Modifier.fillMaxSize()
            .background(Color(0xFFF5F5F5)).padding(24.dp),
        verticalArrangement = Arrangement.Center
    ) {
        Text("Question \${questionIndex + 1} of \${sampleQuestions.size}",
            fontSize = 14.sp, color = Color.Gray)
        Spacer(Modifier.height(12.dp))
        Text(question.text, fontSize = 22.sp,
            fontWeight = FontWeight.Bold, lineHeight = 30.sp)
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
                    color = if (isSelected) Color.White
                            else Color(0xFF534AB7))
            }
        }
    }
}`}</CodeB>
            <p>Update NavHost to wire up the score and next question logic:</p>
            <CodeB title="Kotlin — NavHost wiring" accent={BL}>{`var score by remember { mutableStateOf(0) }

NavHost(navController = navController, startDestination = "home") {
    composable("home") {
        score = 0  // reset on return to home
        HomeScreen(onStartClicked = {
            navController.navigate("question/0")
        })
    }
    composable("question/{questionIndex}") { backStackEntry ->
        val index = backStackEntry.arguments
            ?.getString("questionIndex")?.toInt() ?: 0
        QuestionScreen(
            questionIndex = index,
            score = score,
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
}`}</CodeB>
          </>
        ) : (
          <>
            <CodeB title="Swift — QuestionScreen" accent={GR}>{`struct QuestionScreen: View {
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
            <p>Update ContentView to manage score and programmatic navigation:</p>
            <CodeB title="Swift — ContentView wiring" accent={GR}>{`enum AppRoute: Hashable {
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
          </>
        )}
        <Checkpoint num={2}>Tapping an answer highlights it green or red, then automatically navigates to the next question. After the last question, you land on the results screen.</Checkpoint>
      </Step>


      <Step num={3} title="Build the results screen (~8 min)">
        {platform === "Android" ? (
          <CodeB title="Kotlin — ResultsScreen" accent={BL}>{`@Composable
fun ResultsScreen(score: Int, total: Int, onPlayAgain: () -> Unit) {
    val percentage = (score.toFloat() / total * 100).toInt()
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
        Text("\$score / \$total", fontSize = 64.sp,
            fontWeight = FontWeight.Bold)
        Text("\$percentage% correct", fontSize = 16.sp,
            color = Color.Gray)
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
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFF534AB7))
        ) {
            Text("Play Again", fontSize = 16.sp)
        }
    }
}`}</CodeB>
        ) : (
          <CodeB title="Swift — ResultsScreen" accent={GR}>{`struct ResultsScreen: View {
    let score: Int
    let total: Int
    let onPlayAgain: () -> Void

    var percentage: Int { Int(Double(score) / Double(total) * 100) }

    var message: String {
        switch percentage {
        case 100:      return "Perfect score!"
        case 70...:    return "Great job!"
        case 40...:    return "Good effort!"
        default:       return "Keep practicing!"
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
                    .font(.system(size: 64, weight: .bold))
                Text("\\(percentage)% correct")
                    .foregroundColor(.gray)
                Text(message).font(.title3)
                    .foregroundColor(
                        Color(red:0.11,green:0.62,blue:0.46))
                Spacer().frame(height: 40)
                Button(action: onPlayAgain) {
                    Text("Play Again")
                        .font(.headline).foregroundColor(.white)
                        .frame(maxWidth: .infinity).padding()
                        .background(
                            Color(red:0.33,green:0.29,blue:0.72))
                        .cornerRadius(10)
                }
            }
            .padding(32)
        }
        .navigationBarBackButtonHidden(true)
    }
}`}</CodeB>
        )}
        <Checkpoint num={3}>Complete the quiz and land on the results screen showing your score. Tap Play Again and return to the home screen.</Checkpoint>
      </Step>


      <Step num={4} title="Ask Claude about data passing (~7 min)">
        <AiOpp>Paste your navigation setup into Claude and use this prompt: <em>"I built a trivia app with navigation and data passing in [{platform === "Android" ? "Compose" : "SwiftUI"}]. Please translate the navigation and data passing code to [{platform === "Android" ? "SwiftUI" : "Compose"}]. Then explain: what is the difference between how Android and iOS pass data between screens? Is one approach cleaner than the other?"</em></AiOpp>
      <Checkbox>Received and read Claude's translation and data passing explanation</Checkbox>
      <Checkbox>Both platform versions complete the full quiz flow end-to-end</Checkbox>

      </Step>

      <Step num={5} title="Reflect (~5 min)">
        <CodeB title="Lab 4 Reflection">{`// Lab 4 Reflection (Week 2, Session 2)
// 1. What is the back stack? Describe it like a stack of cards.
// 2. When would you use popBackStack vs navigate?
// 3. What was the hardest part of passing data between screens?`}</CodeB>
        <Checkpoint num="Final">Show a TA the full quiz flow — home, questions with correct/incorrect highlighting, results, and play again. Walk them through your reflection.</Checkpoint>
      </Step>

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
      <Warn>Submit this assignment by the end of Week 3 Session 1 using the Submit button on this page.</Warn>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 2 Project: Character Creator</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>
        You are going to build an RPG character creator — a multi-screen app that walks the user through a series of choices and assembles a character card from their selections. We provide starter code with some screens fully complete, one with a TODO to fill in, one with deliberate bugs to find and fix, and a final screen where you wire up the display. Android only for this assignment.
      </p>

      <div style={{ display: "flex", justifyContent: "center", margin: "0 0 20px" }}>
        <img src={`${import.meta.env.BASE_URL}week2_project_walkthrough.gif`} alt="Character Creator walkthrough" style={{ width: 280, borderRadius: 16, border: "1px solid var(--color-border-tertiary)" }} />
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
