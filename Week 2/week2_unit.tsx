import { useState } from "react";

const TABS = ["Overview", "Lab", "Project", "Resources"];

const sampleQuestions = [
  { text: "What is the capital of France?", answers: ["London","Berlin","Paris","Madrid"], correctIndex: 2 },
  { text: "Which planet is closest to the Sun?", answers: ["Venus","Mercury","Earth","Mars"], correctIndex: 1 },
  { text: "How many sides does a hexagon have?", answers: ["5","6","7","8"], correctIndex: 1 },
];

const Callout = ({ type, children }) => {
  const s = {
    info:       { bg: "#E6F1FB", border: "#B5D4F4", text: "#0C447C", label: "Note" },
    tip:        { bg: "#E1F5EE", border: "#9FE1CB", text: "#085041", label: "Tip" },
    warning:    { bg: "#FAEEDA", border: "#FAC775", text: "#633806", label: "Reminder" },
    ai:         { bg: "#EEEDFE", border: "#CECBF6", text: "#3C3489", label: "AI Opportunity" },
    checkpoint: { bg: "#EAF3DE", border: "#C0DD97", text: "#27500A", label: "Checkpoint" },
  }[type] || { bg: "#E6F1FB", border: "#B5D4F4", text: "#0C447C", label: "Note" };
  return (
    <div style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 8, padding: "10px 14px", margin: "12px 0", fontSize: 13, color: s.text, lineHeight: 1.6 }}>
      <strong>{s.label}:</strong> {children}
    </div>
  );
};

const Hint = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, margin: "10px 0", overflow: "hidden" }}>
      <div onClick={() => setOpen(o => !o)} style={{ padding: "8px 12px", cursor: "pointer", background: "var(--color-background-secondary)", fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", display: "flex", justifyContent: "space-between" }}>
        <span>💡 Hint: {title}</span><span>{open ? "▲" : "▼"}</span>
      </div>
      {open && <div style={{ padding: "10px 14px", fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{children}</div>}
    </div>
  );
};

const Code = ({ children }) => (
  <code style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 4, padding: "1px 5px", fontSize: 12, fontFamily: "var(--font-mono)" }}>{children}</code>
);

const CodeBlock = ({ children }) => (
  <pre style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 14px", fontSize: 12, fontFamily: "var(--font-mono)", overflowX: "auto", lineHeight: 1.6, margin: "8px 0", color: "var(--color-text-primary)", whiteSpace: "pre-wrap" }}>{children}</pre>
);

const Checkbox = ({ children }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "6px 0", fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.5 }}>
    <div style={{ width: 14, height: 14, border: "1.5px solid var(--color-border-secondary)", borderRadius: 3, flexShrink: 0, marginTop: 2 }} />
    <span>{children}</span>
  </div>
);

const H2 = ({ children }) => <h2 style={{ fontSize: 18, fontWeight: 500, margin: "24px 0 8px", color: "var(--color-text-primary)" }}>{children}</h2>;
const H3 = ({ children }) => <h3 style={{ fontSize: 15, fontWeight: 500, margin: "16px 0 6px", color: "var(--color-text-primary)" }}>{children}</h3>;
const P = ({ children, style }) => <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, margin: "6px 0", ...style }}>{children}</p>;
const UL = ({ items }) => <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2, paddingLeft: 20 }}>{items.map((t, i) => <li key={i}>{t}</li>)}</ul>;

function Overview() {
  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 12px", color: "var(--color-text-primary)" }}>Unit 2: Navigation — building multi-screen apps</h1>
      <P>Every real app has more than one screen. This week you learn how to connect them. By the end of Week 2 you will be able to push a new screen onto the stack, pass data to it, and navigate back — the foundation of every app you will ever build.</P>
      <div style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 16px", margin: "12px 0" }}>
        <P style={{ color: "var(--color-text-primary)", margin: 0 }}>This week introduces the biggest syntax divergence between Android and iOS so far. The concepts are identical — the code looks quite different. Claude is your best tool for translating between the two. Focus on understanding the concept, and let Claude handle the syntax differences.</P>
      </div>
      <H2>What you will learn</H2>
      <UL items={[
        "Data classes and structs — how to group related data together",
        "How navigation works conceptually — the stack mental model",
        "Setting up a NavHost (Compose) or NavigationStack (SwiftUI)",
        "Navigating forward — pushing a new screen onto the stack",
        "Passing data from one screen to another",
        "The back stack — what happens when the user presses back",
      ]} />
      <H2>This unit at a glance</H2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "8px 0" }}>
        {[
          { label: "Session 1", val: "Data classes, navigation setup, and navigating forward. Lab: build the trivia app home and question screens." },
          { label: "Session 2", val: "Passing data between screens and back stack behavior. Lab: wire up real question data and result screen." },
          { label: "Lab (each session)", val: "Build the trivia app in one platform, use Claude to translate to the other, then compare navigation patterns." },
          { label: "Assignment 2", val: "A guided trivia app starter — choose your own theme and questions. Must show forward navigation and data passing." },
        ].map(item => (
          <div key={item.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
          </div>
        ))}
      </div>
      <H2>Upcoming due dates</H2>
      <UL items={[
        "Assignment 1 (profile app) — due before Session 1 of this week",
        "Assignment 2 (trivia app) — due one week after Session 2",
      ]} />
      <Callout type="warning">Assignment 1 is due before this week starts. If you have not submitted it yet, do so before coming to Session 1.</Callout>
      <Callout type="info">Do not forget to fill out the Session Survey at the end of each class session.</Callout>
    </div>
  );
}

function Session1Lab() {
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 1 Lab: Trivia App — Home and Question Screens</h1>
      <P>You are going to start building a trivia app from scratch. By the end of this lab you will have a home screen that navigates to a question screen when the user taps a button. No data passing yet — that is Session 2. Budget about 50-60 minutes.</P>
      <H2>Goals</H2>
      <UL items={[
        "Create a data class / struct to model a trivia question",
        "Set up a NavHost (Compose) or NavigationStack (SwiftUI)",
        "Build a home screen with a Start Quiz button",
        "Build a question screen that displays a hardcoded question",
        "Navigate from home to question on button tap",
        "Use Claude to translate your navigation setup to the other platform",
      ]} />
      <H2>Lab instructions</H2>
      <H3>Step 0: Set up a new project (~3 min)</H3>
      <Checkbox>Create a new project called TriviaApp (same setup as previous weeks)</Checkbox>
      <Callout type="tip">Keep your TapCounter project open in another window — you will reference the state patterns from last week.</Callout>

      <H3>Step 1: Create your data model (~8 min)</H3>
      <P>Before building any UI, define what a trivia question looks like as a data structure. This is a data class in Kotlin or a struct in Swift.</P>
      <P>For Android — create a new file called <Code>Question.kt</Code>:</P>
      <CodeBlock>{`data class Question(
    val text: String,
    val answers: List<String>,
    val correctIndex: Int
)`}</CodeBlock>
      <P>For iOS — create a new file called <Code>Question.swift</Code>:</P>
      <CodeBlock>{`struct Question {
    let text: String
    let answers: [String]
    let correctIndex: Int
}`}</CodeBlock>
      <P>Now create a hardcoded list of questions to use across the app. Add this to the same file:</P>
      <P>For Android:</P>
      <CodeBlock>{`val sampleQuestions = listOf(
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
)`}</CodeBlock>
      <P>For iOS:</P>
      <CodeBlock>{`let sampleQuestions: [Question] = [
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
]`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 1: The data model compiles with no errors. You do not need any UI yet — just make sure the file is valid.</Callout>
      <Hint title="What is a data class / struct?">A data class (Kotlin) or struct (Swift) is a blueprint for a piece of data. It defines what fields that data has. Think of it like a form template — the template defines the fields, and each Question is a filled-in copy of that form.</Hint>

      <H3>Step 2: Build the home screen (~10 min)</H3>
      <P>Build a simple home screen — the app name, a tagline, and a Start Quiz button. No navigation yet.</P>
      <P>For Android (Compose):</P>
      <CodeBlock>{`@Composable
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
}`}</CodeBlock>
      <P>For iOS (SwiftUI):</P>
      <CodeBlock>{`struct HomeScreen: View {
    var onStartClicked: () -> Void

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("Trivia Challenge")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .foregroundColor(
                        Color(red: 0.33, green: 0.29, blue: 0.72)
                    )
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
                        .background(
                            Color(red: 0.33, green: 0.29, blue: 0.72)
                        )
                        .cornerRadius(10)
                }
            }
            .padding(32)
        }
    }
}`}</CodeBlock>
      <Callout type="tip">Notice that onStartClicked is a parameter — it is a function passed into the screen. This is how screens communicate upward in both platforms. We will use this when wiring up navigation in Step 4.</Callout>
      <Callout type="checkpoint">Checkpoint 2: Run the app. You should see the home screen with a Start Quiz button. Tapping it does nothing yet.</Callout>

      <H3>Step 3: Build the question screen (~10 min)</H3>
      <P>Build a question screen that displays a hardcoded question and four answer buttons. No data passing yet — use the first question from sampleQuestions directly.</P>
      <P>For Android (Compose):</P>
      <CodeBlock>{`@Composable
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
            text = "Question 1 of ${sampleQuestions.size}",
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
        question.answers.forEachIndexed { index, answer ->
            Button(
                onClick = { /* handle answer — Session 2 */ },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 4.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color.White
                ),
                border = BorderStroke(1.dp, Color(0xFF534AB7))
            ) {
                Text(answer, color = Color(0xFF534AB7))
            }
        }
    }
}`}</CodeBlock>
      <P>For iOS (SwiftUI):</P>
      <CodeBlock>{`struct QuestionScreen: View {
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
                ForEach(Array(question.answers.enumerated()),
                    id: \\.offset) { index, answer in
                    Button(action: { /* handle — Session 2 */ }) {
                        Text(answer)
                            .foregroundColor(
                                Color(red:0.33,green:0.29,blue:0.72)
                            )
                            .frame(maxWidth: .infinity)
                            .padding()
                            .background(Color.white)
                            .cornerRadius(10)
                            .overlay(
                                RoundedRectangle(cornerRadius: 10)
                                    .stroke(Color(red:0.33,green:0.29,
                                        blue:0.72), lineWidth: 1)
                            )
                    }
                }
            }
            .padding(24)
        }
        .navigationBarBackButtonHidden(false)
    }
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 3: The question screen compiles. You cannot see it in the app yet — we wire up navigation in the next step.</Callout>
      <Hint title="What is forEachIndexed / ForEach?">Both loop over a list and create UI for each item. forEachIndexed in Kotlin gives you both the index and the item. ForEach in SwiftUI does the same with enumerated(). You will use this pattern constantly when building lists in Week 3.</Hint>

      <H3>Step 4: Set up navigation and connect the screens (~12 min)</H3>
      <P>Now wire the two screens together. This is the core of Session 1.</P>
      <P>For Android — update <Code>MainActivity.kt</Code>:</P>
      <CodeBlock>{`class MainActivity : ComponentActivity() {
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
}`}</CodeBlock>
      <P>For iOS — update <Code>ContentView.swift</Code>:</P>
      <CodeBlock>{`struct ContentView: View {
    var body: some View {
        NavigationStack {
            HomeScreen(onStartClicked: {
                // Navigation handled by NavigationLink below
            })
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
                    .foregroundColor(
                        Color(red:0.33,green:0.29,blue:0.72))
                Text("Test your knowledge!")
                    .font(.subheadline).foregroundColor(.gray)
                Spacer().frame(height: 48)
                NavigationLink(destination: QuestionScreen()) {
                    Text("Start Quiz")
                        .font(.headline).foregroundColor(.white)
                        .frame(maxWidth: .infinity).padding()
                        .background(
                            Color(red:0.33,green:0.29,blue:0.72))
                        .cornerRadius(10)
                }
            }
            .padding(32)
        }
        .navigationBarHidden(true)
    }
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 4: Tap Start Quiz — you should navigate to the question screen. Tap the back button — you return to the home screen. Navigation is working!</Callout>
      <Hint title="Why does Android use NavController but iOS uses NavigationLink?">This is the biggest syntax difference between the two platforms for navigation. Android uses a central NavController that you pass around. iOS uses NavigationLink directly in the UI. Both achieve the same thing — pushing a screen onto the stack. Ask Claude to explain why they made different design choices!</Hint>
      <Hint title="I am getting a NavController import error on Android">Make sure you have added the Navigation Compose dependency to your build.gradle: implementation("androidx.navigation:navigation-compose:2.7.0")</Hint>

      <H3>Step 5: Ask Claude to translate and compare (~8 min)</H3>
      <Callout type="ai">Paste your full navigation setup into Claude at claude.ai and use this prompt: "I just set up navigation in my trivia app using [Compose / SwiftUI]. Please translate the navigation setup to [SwiftUI / Compose]. Then explain: what is conceptually the same about navigation in both platforms, and what is genuinely different about how they implement it?" Read the explanation carefully before running the code.</Callout>
      <Checkbox>Received and read Claude's translation and explanation</Checkbox>
      <Checkbox>Both platform versions navigate from home to question correctly</Checkbox>

      <H3>Step 6: Reflect (~5 min)</H3>
      <CodeBlock>{`// Lab 3 Reflection (Week 2, Session 1)
// 1. In your own words: what is the navigation stack?
// 2. What does NavController / NavigationStack actually do?
// 3. What surprised you about how different the two platforms look
//    even though navigation works the same way conceptually?`}</CodeBlock>
      <Callout type="checkpoint">Final checkpoint: Show a TA both platforms navigating forward and back. Walk them through your reflection.</Callout>

      <H2>Stretch features</H2>
      <Checkbox>Add a question counter to the home screen showing how many questions are in the quiz</Checkbox>
      <Checkbox>Style the answer buttons so the correct answer highlights green when tapped (hint: you need a state variable)</Checkbox>
      <Checkbox>Add a difficulty badge to each question in your data model and display it on the question screen</Checkbox>
    </div>
  );
}

function Session2Lab() {
  const questionIndex = 0;
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 2 Lab: Trivia App — Passing Data and Results Screen</h1>
      <P>In this lab you will extend the trivia app from Session 1. You will pass question data between screens, track the user's score, and build a results screen. Budget about 50-60 minutes.</P>
      <H2>Goals</H2>
      <UL items={[
        "Pass a Question object from the home screen to the question screen",
        "Track a score using state across screens",
        "Build a results screen that shows the final score",
        "Understand how the back stack works and when to use popBackStack",
        "Use Claude to understand data passing differences between platforms",
      ]} />
      <H2>Lab instructions</H2>

      <H3>Step 0: Recap and setup (~3 min)</H3>
      <P>Open your TriviaApp project from Session 1. Make sure navigation between home and question is still working before adding anything new.</P>
      <Callout type="tip">If your Session 1 lab is not working, ask a TA to help you get it to the checkpoint 4 state before continuing. Everything in this lab builds on it.</Callout>

      <H3>Step 1: Pass the question index to the question screen (~10 min)</H3>
      <P>Right now the question screen always shows sampleQuestions[0]. Let us pass which question to show from the home screen.</P>
      <P>For Android — update the navigation route and QuestionScreen:</P>
      <CodeBlock>{`// In NavHost, update the question route to accept an argument:
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
}`}</CodeBlock>
      <P>For iOS — update NavigationLink to pass data:</P>
      <CodeBlock>{`// Update HomeScreen's NavigationLink:
NavigationLink(destination: QuestionScreen(questionIndex: 0)) {
    Text("Start Quiz")
        // ... styling stays the same
}

// Update QuestionScreen to accept the index:
struct QuestionScreen: View {
    let questionIndex: Int
    var question: Question { sampleQuestions[questionIndex] }
    // rest of the screen stays the same
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 1: The app still navigates to the question screen and shows the first question. The difference now is the question comes from a parameter, not a hardcoded index.</Callout>

      <H3>Step 2: Track score and navigate to the next question (~12 min)</H3>
      <P>Add answer handling — when a user taps an answer, check if it is correct, update the score, and navigate to the next question. Pass the score along as navigation data.</P>
      <P>For Android — update QuestionScreen:</P>
      <CodeBlock>{`@Composable
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
        Text("Question ${questionIndex + 1} of ${sampleQuestions.size}",
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
}`}</CodeBlock>
      <P>Update NavHost to wire up the score and next question logic:</P>
      <CodeBlock>{`var score by remember { mutableStateOf(0) }

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
                    navController.navigate("question/$nextIndex")
                } else {
                    navController.navigate("results/$score")
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
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 2: Tapping an answer highlights it green or red, then automatically navigates to the next question. After the last question, you land on the results screen.</Callout>

      <H3>Step 3: Build the results screen (~8 min)</H3>
      <P>For Android (Compose):</P>
      <CodeBlock>{`@Composable
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
        Text("$score / $total", fontSize = 64.sp,
            fontWeight = FontWeight.Bold)
        Text("$percentage% correct", fontSize = 16.sp,
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
}`}</CodeBlock>
      <P>For iOS (SwiftUI):</P>
      <CodeBlock>{`struct ResultsScreen: View {
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
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 3: Complete the quiz and land on the results screen showing your score. Tap Play Again and return to the home screen.</Callout>

      <H3>Step 4: Ask Claude about data passing (~7 min)</H3>
      <Callout type="ai">Paste your navigation setup into Claude and use this prompt: "I built a trivia app with navigation and data passing in [Compose / SwiftUI]. Please translate the navigation and data passing code to [SwiftUI / Compose]. Then explain: what is the difference between how Android and iOS pass data between screens? Is one approach cleaner than the other?"</Callout>
      <Checkbox>Received and read Claude's translation and data passing explanation</Checkbox>
      <Checkbox>Both platform versions complete the full quiz flow end-to-end</Checkbox>

      <H3>Step 5: Reflect (~5 min)</H3>
      <CodeBlock>{`// Lab 4 Reflection (Week 2, Session 2)
// 1. What is the back stack? Describe it like a stack of cards.
// 2. When would you use popBackStack vs navigate?
// 3. What was the hardest part of passing data between screens?`}</CodeBlock>
      <Callout type="checkpoint">Final checkpoint: Show a TA the full quiz flow — home, questions with correct/incorrect highlighting, results, and play again. Walk them through your reflection.</Callout>

      <H2>Stretch features</H2>
      <Checkbox>Add a progress bar at the top of the question screen showing how far through the quiz the user is</Checkbox>
      <Checkbox>Add a timer to each question — if time runs out, count it as wrong and move on</Checkbox>
      <Checkbox>Add a high score that persists as long as the app is open (hint: lift the state up to the NavHost level)</Checkbox>
    </div>
  );
}

function Lab() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {["Session 1 Lab", "Session 2 Lab"].map((s, i) => (
          <button key={s} onClick={() => setStep(i)} style={{
            padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: "pointer",
            background: step === i ? "#534AB7" : "var(--color-background-secondary)",
            color: step === i ? "#fff" : "var(--color-text-secondary)",
            border: step === i ? "none" : "0.5px solid var(--color-border-tertiary)"
          }}>{s}</button>
        ))}
      </div>
      {step === 0 ? <Session1Lab /> : <Session2Lab />}
    </div>
  );
}

function Project() {
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Unit 2 Project: Trivia App</h1>
      <Callout type="warning">Submit this assignment by the end of Week 3 Session 1 using the Submit button on this page.</Callout>
      <P>You are going to build your own trivia app. We provide the structure — you provide the theme and questions. This is your first multi-screen app, and it should feel like something you actually want to play.</P>
      <P>You may build in either Android (Jetpack Compose) or iOS (SwiftUI). You do not need to submit both.</P>

      <H2>Your theme</H2>
      <P>Pick a topic you are genuinely interested in. The questions must be your own — do not copy the sample questions from lab. Good themes from past cohorts: a specific TV show, a sport, a country, a music genre, video games, food, history. The more specific the better.</P>

      <H2>Required features</H2>
      <Checkbox>A home screen with your app name, a brief description, and a Start button</Checkbox>
      <Checkbox>At least 5 trivia questions — all original, all on your chosen theme</Checkbox>
      <Checkbox>Each question has exactly 4 answer options</Checkbox>
      <Checkbox>Tapping an answer visually indicates whether it was correct or incorrect</Checkbox>
      <Checkbox>After selecting an answer, the app navigates to the next question</Checkbox>
      <Checkbox>A results screen showing the final score and a Play Again button</Checkbox>
      <Checkbox>Play Again navigates back to the home screen and resets the score</Checkbox>
      <Checkbox>The app runs without crashing from start to finish</Checkbox>

      <H2>Stretch features</H2>
      <Checkbox>Add a difficulty level to each question and display it on the question screen</Checkbox>
      <Checkbox>Add a progress indicator showing which question the user is on</Checkbox>
      <Checkbox>Add a timer per question — runs out means wrong answer</Checkbox>
      <Checkbox>Show the correct answer after a wrong selection before moving on</Checkbox>
      <Checkbox>Add a high score that persists for the session</Checkbox>

      <H2>Submitting your project</H2>
      <ol style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li>Create a GitHub repository for your project</li>
        <li>Push your code to the repository</li>
        <li>Create a README using the Unit 2 README template (link below)</li>
        <li>Check off all features you implemented by changing <Code>-[ ]</Code> to <Code>-[x]</Code></li>
        <li>Record a GIF or screen recording of a full quiz run — home to results</li>
        <li>Add the GIF to the README</li>
        <li>Make the repo private and add <Code>codepathreview</Code> as a collaborator</li>
      </ol>

      <H2>Hints</H2>
      <Hint title="How do I add more than 3 questions?">Add more Question objects to your sampleQuestions list. The navigation code already handles any number of questions — it checks if the next index is less than sampleQuestions.size.</Hint>
      <Hint title="Play Again is going to the wrong screen">Make sure you are using popBackStack back to home rather than navigating to a new home screen. If you navigate instead of popping, you will keep stacking home screens on the back stack and the score will not reset.</Hint>
      <Hint title="My score is not resetting when I play again">Reset the score variable when you arrive back at the home screen. In Compose, set score = 0 at the top of the home composable block in the NavHost.</Hint>
      <Hint title="I want to show the correct answer after a wrong tap">Add a state variable isAnswered and set it to true when an answer is tapped. Use conditional styling: if isAnswered, highlight the correct answer green regardless of which button was tapped.</Hint>
    </div>
  );
}

function Resources() {
  return (
    <div>
      <H2>Official documentation</H2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/jetpack/compose/navigation" style={{ color: "var(--color-text-info)" }}>Navigation in Compose — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/navigationstack" style={{ color: "var(--color-text-info)" }}>NavigationStack — developer.apple.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/navigationlink" style={{ color: "var(--color-text-info)" }}>NavigationLink — developer.apple.com</a></li>
        <li><a href="https://kotlinlang.org/docs/data-classes.html" style={{ color: "var(--color-text-info)" }}>Data classes in Kotlin — kotlinlang.org</a></li>
        <li><a href="https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/" style={{ color: "var(--color-text-info)" }}>Structs in Swift — swift.org</a></li>
      </ul>
      <H2>Lab resources</H2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/jetpack/compose/navigation#nav-back-stack" style={{ color: "var(--color-text-info)" }}>Back stack in Compose navigation</a></li>
        <li><a href="https://developer.android.com/jetpack/compose/navigation#nav-with-args" style={{ color: "var(--color-text-info)" }}>Passing arguments with Compose navigation</a></li>
        <li><a href="https://developer.apple.com/tutorials/swiftui/handling-user-input" style={{ color: "var(--color-text-info)" }}>Handling user input in SwiftUI (Apple tutorial)</a></li>
      </ul>
      <H2>Extra practice</H2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/courses/android-basics-compose/unit-4" style={{ color: "var(--color-text-info)" }}>Android Basics with Compose — Unit 4: Navigation</a></li>
        <li><a href="https://developer.apple.com/tutorials/swiftui/building-lists-and-navigation" style={{ color: "var(--color-text-info)" }}>SwiftUI: Building lists and navigation (Apple tutorial)</a></li>
      </ul>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("Overview");
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ marginBottom: 4 }}>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 2px" }}>Mobile Development in the Age of AI</p>
        <p style={{ fontSize: 18, fontWeight: 500, color: "var(--color-text-primary)", margin: 0 }}>Unit 2</p>
      </div>
      <div style={{ display: "flex", gap: 4, borderBottom: "0.5px solid var(--color-border-tertiary)", margin: "12px 0 20px", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "8px 14px", fontSize: 13, cursor: "pointer", background: "none",
            border: "none", borderBottom: tab === t ? "2px solid #534AB7" : "2px solid transparent",
            color: tab === t ? "#534AB7" : "var(--color-text-secondary)",
            fontWeight: tab === t ? 500 : 400
          }}>{t}</button>
        ))}
      </div>
      {tab === "Overview"  && <Overview />}
      {tab === "Lab"       && <Lab />}
      {tab === "Project"   && <Project />}
      {tab === "Resources" && <Resources />}
    </div>
  );
}
