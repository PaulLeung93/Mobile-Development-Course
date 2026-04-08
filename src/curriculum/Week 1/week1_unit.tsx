import { useState } from "react";

const TABS = ["Overview", "Lab", "Project", "Learning with AI", "Resources"];

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
const UL = ({ items }) => <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2, paddingLeft: 20 }}>{items.map((t,i) => <li key={i}>{t}</li>)}</ul>;

function Overview() {
  return (
    <div>
      <Callout type="warning">Before Session 1, complete two things: the IDE Setup (Android Studio or Xcode) and the Language Primer in the pre-work. Session 1 assumes you have done both.</Callout>
      <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 12px", color: "var(--color-text-primary)" }}>Unit 1: Your first mobile app</h1>
      <P>Welcome to Mobile Development in the Age of AI! This unit introduces the foundational concepts you will use every week — how mobile screens are built, how they respond to user interaction, and how AI tools can help you write and understand mobile code faster.</P>
      <Callout type="ai">The Language Primer (Kotlin and Swift basics — variables, functions, and basic types) is covered in the pre-work, not in Session 1. Lambdas and closures are introduced during the Session 1 code-along. If you have not completed the pre-work primer yet, do so before class.</Callout>
      <div style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 16px", margin: "12px 0" }}>
        <P style={{ color: "var(--color-text-primary)", margin: 0 }}>This course covers both Android (Jetpack Compose) and iOS (SwiftUI). You will notice they share the same mental model — that is intentional, and by the end of this unit you will see exactly why.</P>
      </div>
      <H2>What you will learn</H2>
      <UL items={[
        "What declarative UI means and why Compose and SwiftUI both use it",
        "How to build a basic screen with text, buttons, and layout containers",
        "How to hold a piece of state and make the UI react to it",
        "How to apply basic modifiers/view modifiers for styling",
        "How to use Claude as a learning aid — not a crutch",
      ]} />
      <Callout type="info">Kotlin and Swift language basics (variables, functions, lambdas/closures) are covered in the pre-work, not in this unit.</Callout>
      <H2>This unit at a glance</H2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "8px 0" }}>
        {[
          { label: "Pre-work", val: "Language primer: just enough Kotlin and Swift to follow along. IDE setup." },
          { label: "Session 1", val: "Declarative UI — what it is and why it matters. Live code-along: building a profile card." },
          { label: "Session 2", val: "State and modifiers. Live code-along: building a tap counter with milestones." },
          { label: "Lab (each session)", val: "Build in one platform, use Claude to translate to the other, then compare and extend." },
          { label: "Assignment 1", val: "Build a personal profile screen with interactive elements. Submit in either platform." },
        ].map(item => (
          <div key={item.label} style={{ background: item.label === "Pre-work" ? "var(--color-background-secondary)" : "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
          </div>
        ))}
      </div>
      <H2>Upcoming due dates</H2>
      <UL items={["Assignment 1 due one week after Session 2"]} />
      <Callout type="info">The session survey is filled out at the end of each lab — after you have finished building. Your feedback shapes the course!</Callout>
    </div>
  );
}

function Session1Lab() {
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 1 Lab: Hello, Mobile World</h1>
      <Callout type="warning">This lab assumes you completed the pre-work Language Primer. If you are not comfortable with val/var, functions, and lambdas/closures, review that material before continuing.</Callout>
      <P>In this lab you will build your very first mobile screen from scratch — a personal profile card. The instructor will live-code one platform. Your job is to follow along, then use Claude to translate your work to the other platform, and push both further with your own creativity. Budget about 50 minutes.</P>
      <H2>Goals</H2>
      <UL items={[
        "Successfully run an app on a simulator or physical device",
        "Understand the basic structure of a Composable / SwiftUI View",
        "Use Column/VStack, Row/HStack, and basic components together",
        "Apply modifiers to style text, add spacing, and add a background",
        "Use Claude to translate and explain code across platforms",
        "Practice reading and modifying AI-generated code — not just accepting it",
      ]} />
      <H2>Lab instructions</H2>
      <H3>Step 0: Set up your project (~5 min)</H3>
      <P>Create a new project in Android Studio or Xcode, depending on which platform your instructor is demonstrating today.</P>
      <Checkbox>Android: New Empty Activity project in Android Studio — name it ProfileCard, language Kotlin, min SDK API 24.</Checkbox>
      <Checkbox>iOS: New App project in Xcode — name it ProfileCard, interface SwiftUI, language Swift.</Checkbox>
      <Callout type="tip">The emulator/simulator can take a few minutes to boot the very first time. Start it now so it is ready by Step 1.</Callout>
      <Hint title="I can't find Empty Activity in Android Studio">Make sure you are on the Phone and Tablet tab in the New Project wizard. Select Empty Activity (not Empty Views Activity — that is the older XML-based approach).</Hint>
      <Hint title="Xcode is asking me about a Team for signing">For simulator-only development you can set Team to None or your personal Apple ID. You only need a paid account to deploy to a real device.</Hint>

      <H3>Step 1: Your name on a screen (~8 min)</H3>
      <P>Follow along with the instructor. Get your name displaying on screen — centered, large, and bold.</P>
      <P>For Android (Compose):</P>
      <CodeBlock>{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent { ProfileCard() }
    }
}

@Composable
fun ProfileCard() {
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Your Name",
            fontSize = 32.sp,
            fontWeight = FontWeight.Bold
        )
        Text(
            text = "Mobile Dev Cohort 2025",
            fontSize = 16.sp,
            color = Color.Gray
        )
    }
}`}</CodeBlock>
      <P>For iOS (SwiftUI):</P>
      <CodeBlock>{`struct ContentView: View {
    var body: some View {
        VStack(spacing: 8) {
            Text("Your Name")
                .font(.largeTitle)
                .fontWeight(.bold)
            Text("Mobile Dev Cohort 2025")
                .font(.subheadline)
                .foregroundColor(.gray)
        }
    }
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 1: Run your app. Your name should appear centered on screen.</Callout>
      <Hint title="Red squiggles under Color, FontWeight, etc.">Android Studio needs to import these. Click the red word and press Alt+Enter (Option+Enter on Mac) to auto-import.</Hint>

      <H3>Step 2: Add a profile avatar (~8 min)</H3>
      <P>Add a colored circle with your initials above your name. This is a common pattern in real apps when a user has no photo.</P>
      <P>For Android (Compose), add this above your name Text:</P>
      <CodeBlock>{`Box(
    modifier = Modifier
        .size(80.dp)
        .background(color = Color(0xFF534AB7), shape = CircleShape),
    contentAlignment = Alignment.Center
) {
    Text(
        text = "YN",
        color = Color.White,
        fontSize = 28.sp,
        fontWeight = FontWeight.Bold
    )
}
Spacer(modifier = Modifier.height(12.dp))`}</CodeBlock>
      <P>For iOS (SwiftUI), add this above your name Text:</P>
      <CodeBlock>{`Circle()
    .fill(Color(red: 0.33, green: 0.29, blue: 0.72))
    .frame(width: 80, height: 80)
    .overlay(
        Text("YN")
            .font(.title)
            .fontWeight(.bold)
            .foregroundColor(.white)
    )
    .padding(.bottom, 12)`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 2: You should see a purple circle with initials above your name. Change the color to something that feels like you.</Callout>
      <Hint title="How do I pick a custom color in Compose?">Use Color(0xFFRRGGBB) where RR, GG, BB are hex values. For example Color(0xFF1D9E75) gives a teal green. Find hex codes at coolors.co.</Hint>
      <Hint title="How do I pick a custom color in SwiftUI?">Use Color(red:green:blue:) with values between 0 and 1.</Hint>

      <H3>Step 3: Build out the card layout (~10 min)</H3>
      <P>Add a card-style background, a divider, and a row of stat items like you would see on a social profile.</P>
      <P>For Android (Compose), wrap your Column in an outer layout:</P>
      <CodeBlock>{`Column(
    modifier = Modifier
        .fillMaxSize()
        .background(Color(0xFFF5F5F5)),
    verticalArrangement = Arrangement.Center,
    horizontalAlignment = Alignment.CenterHorizontally
) {
    Column(
        modifier = Modifier
            .fillMaxWidth(0.85f)
            .background(Color.White, shape = RoundedCornerShape(16.dp))
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Avatar + name + tagline go here

        Spacer(modifier = Modifier.height(16.dp))
        HorizontalDivider(color = Color(0xFFEEEEEE))
        Spacer(modifier = Modifier.height(16.dp))

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceEvenly
        ) {
            StatItem(label = "Projects", value = "0")
            StatItem(label = "Commits", value = "0")
            StatItem(label = "PRs", value = "0")
        }
    }
}

@Composable
fun StatItem(label: String, value: String) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text(text = value, fontSize = 20.sp, fontWeight = FontWeight.Bold)
        Text(text = label, fontSize = 12.sp, color = Color.Gray)
    }
}`}</CodeBlock>
      <P>For iOS (SwiftUI):</P>
      <CodeBlock>{`struct ContentView: View {
    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 0) {
                // Avatar + name + tagline here
                Divider().padding(.vertical, 16)
                HStack {
                    StatItem(label: "Projects", value: "0")
                    Spacer()
                    StatItem(label: "Commits", value: "0")
                    Spacer()
                    StatItem(label: "PRs", value: "0")
                }
                .padding(.horizontal, 24)
            }
            .padding(24)
            .background(Color.white)
            .cornerRadius(16)
            .padding(.horizontal, 32)
        }
    }
}

struct StatItem: View {
    let label: String
    let value: String
    var body: some View {
        VStack(spacing: 4) {
            Text(value).font(.title2).fontWeight(.bold)
            Text(label).font(.caption).foregroundColor(.gray)
        }
    }
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 3: Your profile should now look like a real card with a background, divider, and stat items. Update the values to something real — or funny.</Callout>

      <H3>Step 4: Ask Claude to translate it (~8 min)</H3>
      <P>Now that you have something worth translating, ask Claude to do it.</P>
      <Callout type="ai">Open Claude at claude.ai. Paste your entire screen code and use this prompt: "I am learning mobile development. This is my [Compose / SwiftUI] profile card. Please translate it to [SwiftUI / Compose]. After the code, briefly explain the 3 biggest structural differences between the two versions." Read the explanation — do not just copy the code.</Callout>
      <Checkbox>Pasted your code into Claude and received a translation</Checkbox>
      <Checkbox>Read the explanation of differences — did not just skip to the code</Checkbox>
      <Checkbox>Ran the translated version on a simulator — it displays correctly</Checkbox>
      <Hint title="Claude gave me code with errors">That happens — this is a feature, not a bug. Try asking Claude: "This gave me a compile error: [paste error]. What is wrong and how do I fix it?" Do not just ask it to rewrite everything.</Hint>

      <H3>Step 5: Make one change Claude did not make (~8 min)</H3>
      <P>Take the translated code and make at least one meaningful change that Claude did not include. This proves you understand the code rather than just running it.</P>
      <UL items={[
        "Change the avatar color and initials to match your actual name",
        "Add a fourth stat item (e.g. Coffee with a funny number)",
        "Add a short bio line below the tagline in italic text",
        "Change the card corner radius or background color",
        "Add your graduation year or cohort city",
      ]} />
      <Checkbox>Made at least one original change to the translated code</Checkbox>
      <Callout type="checkpoint">Checkpoint 5: Both versions of your profile card run and have at least one change you made yourself — not Claude.</Callout>

      <H3>Step 6: Reflect (~5 min)</H3>
      <P>Add a comment block at the top of your file and answer these three questions in your own words.</P>
      <CodeBlock>{`// Lab 1 Reflection
// 1. What is one thing that is identical between Compose and SwiftUI in your code?
// 2. What is one thing that confused you in the translated version?
// 3. What did Claude get right? Did it get anything wrong?`}</CodeBlock>
      <Callout type="checkpoint">Final checkpoint: Both platform versions run, you have made at least one original change, and your reflection comment block is filled in. You will discuss these questions during the end-of-session reflection.</Callout>

      <H2>Stretch features</H2>
      <Checkbox>Add a Follow button below the stats row that changes its label to Following when tapped — a sneak peek at next session</Checkbox>
      <Checkbox>Add a second Skills card below the first, listing 3 technologies you want to learn</Checkbox>
      <Checkbox>Ask Claude to add a dark mode variant and try to understand every line it adds</Checkbox>
      <Checkbox>Try rebuilding the layout using Row/HStack-first — what breaks?</Checkbox>
    </div>
  );
}

function Session2Lab() {
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 2 Lab: Tap Counter App</h1>
      <P>You are going to build a tap counter — the kind of satisfying mechanic found in idle games like Cookie Clicker. By the end you will have a fully interactive app with state, conditional UI, and a milestone system. Budget about 50 minutes.</P>
      <H2>Goals</H2>
      <UL items={[
        "Understand what state is and why it matters in declarative UI",
        "Use remember + mutableStateOf (Compose) or @State (SwiftUI) to hold a value",
        "Make the UI conditionally show/hide elements based on state",
        "Use Claude to translate stateful code and explain state differences across platforms",
        "Extend AI-generated code with your own features",
      ]} />
      <H2>Lab instructions</H2>

      <H3>Step 0: Create a new project (~3 min)</H3>
      <Checkbox>Create a new project called TapCounter (same setup as Session 1)</Checkbox>
      <Callout type="tip">You can keep your ProfileCard project open in a second window — you will reference it later.</Callout>

      <H3>Step 1: Build the static layout (~8 min)</H3>
      <P>Follow along with the instructor. Get the layout right before adding any interactivity.</P>
      <P>For Android (Compose):</P>
      <CodeBlock>{`@Composable
fun CounterScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5)),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "0",
            fontSize = 80.sp,
            fontWeight = FontWeight.Bold,
            color = Color(0xFF534AB7)
        )
        Text(text = "taps", fontSize = 16.sp, color = Color.Gray)
        Spacer(modifier = Modifier.height(32.dp))
        Button(
            onClick = { },
            modifier = Modifier.size(120.dp).clip(CircleShape),
            colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF534AB7))
        ) {
            Text("TAP", fontSize = 20.sp, fontWeight = FontWeight.Bold)
        }
    }
}`}</CodeBlock>
      <P>For iOS (SwiftUI):</P>
      <CodeBlock>{`struct CounterScreen: View {
    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 8) {
                Text("0")
                    .font(.system(size: 80, weight: .bold))
                    .foregroundColor(Color(red: 0.33, green: 0.29, blue: 0.72))
                Text("taps").font(.subheadline).foregroundColor(.gray)
                Spacer().frame(height: 32)
                Button(action: { }) {
                    Text("TAP")
                        .font(.title2).fontWeight(.bold)
                        .foregroundColor(.white)
                        .frame(width: 120, height: 120)
                        .background(Color(red: 0.33, green: 0.29, blue: 0.72))
                        .clipShape(Circle())
                }
            }
        }
    }
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 1: Run your app. You should see a large purple 0, the word taps, and a big circular TAP button. Nothing works yet — we fix that next.</Callout>

      <H3>Step 2: Add state to make it work (~8 min)</H3>
      <P>Now wire up the counter. This is the most important concept of the week.</P>
      <P>In Compose, add this at the top of your Composable function:</P>
      <CodeBlock>{`var count by remember { mutableStateOf(0) }`}</CodeBlock>
      <P>Then update the Text and Button onClick:</P>
      <CodeBlock>{`Text(text = count.toString(), fontSize = 80.sp, ...)
Button(onClick = { count++ }, ...) { ... }`}</CodeBlock>
      <P>In SwiftUI, add this property inside your View struct:</P>
      <CodeBlock>{`@State private var count = 0`}</CodeBlock>
      <P>Then update the Text and Button action:</P>
      <CodeBlock>{`Text("\\(count)")
Button(action: { count += 1 }) { ... }`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 2: Tap the button — the number goes up! If it does not update, check that your variable is a state variable, not a regular var.</Callout>
      <Hint title="Why does the UI update automatically?">{"In declarative UI, the UI is a pure function of state. When state changes, the framework re-renders anything that reads it. You never call refresh manually — you just change the data and the UI follows."}</Hint>
      <Hint title="What does remember do in Compose?">{"Without remember, every time the Composable re-runs your counter would reset to 0. remember tells Compose to hold onto the value across re-renders."}</Hint>

      <H3>Step 3: Add a milestone system (~10 min)</H3>
      <P>Make it more interesting. Show a message that changes as the user taps more. This introduces conditional UI — showing different content based on state.</P>
      <P>For Android (Compose), add this helper function outside your Composable:</P>
      <CodeBlock>{`fun getMilestone(count: Int): String = when {
    count == 0   -> "Start tapping!"
    count < 10   -> "Getting warmed up..."
    count < 25   -> "On a roll!"
    count < 50   -> "Can't stop now!"
    count < 100  -> "You're unstoppable!"
    else         -> "Legendary tapper!"
}`}</CodeBlock>
      <P>Then add this inside your Column, below the taps label:</P>
      <CodeBlock>{`Spacer(modifier = Modifier.height(8.dp))
Text(
    text = getMilestone(count),
    fontSize = 14.sp,
    color = Color(0xFF534AB7),
    fontStyle = FontStyle.Italic
)`}</CodeBlock>
      <P>For iOS (SwiftUI), add this computed property inside your View struct:</P>
      <CodeBlock>{`var milestone: String {
    switch count {
    case 0:        return "Start tapping!"
    case 1..<10:   return "Getting warmed up..."
    case 10..<25:  return "On a roll!"
    case 25..<50:  return "Can't stop now!"
    case 50..<100: return "You're unstoppable!"
    default:       return "Legendary tapper!"
    }
}`}</CodeBlock>
      <P>Then add to your VStack:</P>
      <CodeBlock>{`Text(milestone)
    .font(.footnote)
    .italic()
    .foregroundColor(Color(red: 0.33, green: 0.29, blue: 0.72))`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 3: Tap away and watch the milestone message change. This is conditional UI — the same screen renders differently based on state.</Callout>

      <H3>Step 4: Ask Claude to translate — focus on state (~8 min)</H3>
      <Callout type="ai">Go to claude.ai and use this prompt: "I built this tap counter app in [Compose / SwiftUI]. Please translate the full thing to [SwiftUI / Compose]. Then explain in plain English: how does state work in Compose vs SwiftUI? What is the equivalent of @State in Compose, and why does Compose need remember but SwiftUI does not?" Read the full explanation before running the code.</Callout>
      <Checkbox>Received and read the translation and state explanation from Claude</Checkbox>
      <Checkbox>Ran the translated version — the counter and milestones work correctly</Checkbox>
      <Hint title="Claude's translation has an error">{"Paste the error back to Claude and ask: 'This line is giving me this error: [error]. Can you explain what is wrong without rewriting the whole file?' Learning to debug with Claude is more valuable than getting perfect code."}</Hint>

      <H3>Step 5: Add a Reset button with conditional visibility (~8 min)</H3>
      <P>Extend the translated version yourself. Add a Reset button that only appears once the count hits 10 — invisible below that threshold. This is intentionally open-ended. Use what you have learned. If you get stuck, ask Claude for a hint — but try for at least 3 minutes on your own first.</P>
      <Checkbox>Reset button appears only when count is 10 or above</Checkbox>
      <Checkbox>Tapping Reset sets the count back to 0 and the milestone back to Start tapping!</Checkbox>
      <Checkbox>Button disappears again after reset</Checkbox>
      <Hint title="How do I show/hide a view based on state?">{"In both Compose and SwiftUI, use an if statement inside your UI code. In Compose: if (count >= 10) { Button(...) }. In SwiftUI: if count >= 10 { Button(...) }. When state changes, the if condition is re-evaluated automatically."}</Hint>

      <H3>Step 6: Reflect (~5 min)</H3>
      <P>Add a comment block at the top of your primary file before you leave:</P>
      <CodeBlock>{`// Lab 2 Reflection
// 1. In your own words: what is state, and why does declarative UI need it?
// 2. What is the difference between remember in Compose and @State in SwiftUI?
// 3. What was the hardest part of Step 5? How did you get unstuck?`}</CodeBlock>
      <Callout type="checkpoint">Final checkpoint: Your counter app runs with milestone messages and a conditional Reset button. Your reflection comment block is filled in — you will discuss these questions during the end-of-session reflection.</Callout>

      <H2>Stretch features</H2>
      <Checkbox>Add a high score that persists between resets — hint: you need a second state variable</Checkbox>
      <Checkbox>Add a multiplier — after 50 taps each tap counts as 2, after 100 each tap counts as 5</Checkbox>
      <Checkbox>Animate the counter number when it changes — look up animateContentSize in Compose or withAnimation in SwiftUI</Checkbox>
      <Checkbox>Ask Claude to add haptic feedback on each tap and read through every line it adds</Checkbox>
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
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Unit 1 Project: Personal Profile App</h1>
      <Callout type="warning">Submit this assignment by the end of Week 2 Session 1 using the Submit button on this page.</Callout>
      <P>Build a personal profile screen — your first independently-built mobile app. It combines everything from this week: layout, text, state, and basic interactivity. You may build in either Android (Jetpack Compose) or iOS (SwiftUI). You do not need to submit both.</P>
      <H2>Goals</H2>
      <P>By the end of this assignment you will be able to...</P>
      <Checkbox>Build a screen layout using Column / VStack and basic components</Checkbox>
      <Checkbox>Display text with different sizes and weights</Checkbox>
      <Checkbox>Hold a piece of UI state using remember / @State</Checkbox>
      <Checkbox>Respond to button taps and update the UI reactively</Checkbox>
      <H2>Required features</H2>
      <Checkbox>Display your name in large, bold text</Checkbox>
      <Checkbox>Display a short bio or tagline beneath your name</Checkbox>
      <Checkbox>Include at least one interactive element — a button that visibly changes something on screen when tapped</Checkbox>
      <Checkbox>Include at least one additional UI element of your choice (image placeholder, second text field, divider, icon, etc.)</Checkbox>
      <Checkbox>The app runs without crashing on a simulator or physical device</Checkbox>
      <H2>Stretch features</H2>
      <Checkbox>Add a profile image placeholder (colored circle with initials)</Checkbox>
      <Checkbox>Add a second interactive element</Checkbox>
      <Checkbox>Style the screen with a custom color scheme</Checkbox>
      <Checkbox>Add a dark mode compatible layout</Checkbox>
      <H2>Submitting your project</H2>
      <ol style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li>Create a GitHub repository for your project</li>
        <li>Push your code to the repository</li>
        <li>Create a README using the Unit 1 README template (link below)</li>
        <li>In the README, check off all features you implemented by changing <Code>-[ ]</Code> to <Code>-[x]</Code></li>
        <li>Record a short GIF or screen recording of your app running and add it to the README</li>
        <li>Make the repo private and add <Code>codepathreview</Code> as a collaborator</li>
      </ol>
      <Callout type="info">Not sure how to record a GIF? On Mac use QuickTime plus a GIF converter. On Windows use ShareX. There are also browser extensions that can capture simulator screens.</Callout>
      <H2>Hints</H2>
      <Hint title="I don't know where to start">Start with just your name on screen. Once that works, add the bio. Then tackle the interactive element last. Build in small steps and run the app after every change.</Hint>
      <Hint title="My button tap doesn't change anything on screen">{"Make sure the value you are changing is stored in state — remember { mutableStateOf() } in Compose, or @State in SwiftUI. A regular variable will not trigger a re-render."}</Hint>
      <Hint title="How do I show or hide something based on state?">{"In Compose: use an if statement inside your Composable. In SwiftUI: use an if statement inside your body. When state changes, the element appears or disappears automatically."}</Hint>
    </div>
  );
}

function LearningWithAI() {
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Learning with AI</h1>
      <P>This course has an official partnership with Claude, and you are expected to use it as part of your learning. This guide will help you use it effectively — and avoid the traps that slow people down.</P>
      <Callout type="info">Regardless of which tool you use, what matters most is the role you assign it. Claude is a tool. You are the engineer.</Callout>
      <H2>AI roles</H2>
      {[
        { icon: "🎓", title: "Virtual TA", desc: "Ask Claude to explain a concept without writing code for you. Example: What does @State do in SwiftUI? Explain in 2-3 sentences using an analogy." },
        { icon: "🔍", title: "Debugging partner", desc: "Paste your error and ask Claude to help you understand what is wrong — not just fix it. Example: My counter is not updating when I tap the button. Here is my code. What might be causing this?" },
        { icon: "🌐", title: "Platform translator", desc: "This is unique to this course. Use Claude to translate code between Compose and SwiftUI so you can compare the two. Example: Translate this SwiftUI View to Jetpack Compose." },
        { icon: "📚", title: "Research assistant", desc: "Use Claude to summarize documentation or find the right modifier. Example: What Compose modifier would I use to add padding and a rounded background to a Text?" },
      ].map(r => (
        <div key={r.title} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
          <span style={{ fontSize: 20, flexShrink: 0 }}>{r.icon}</span>
          <div>
            <p style={{ fontSize: 13, fontWeight: 500, margin: "0 0 2px", color: "var(--color-text-primary)" }}>{r.title}</p>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{r.desc}</p>
          </div>
        </div>
      ))}
      <H2>Green flags — effective AI use</H2>
      {[
        { title: "Platform translation", why: "This course teaches two platforms at once. Claude is great at translating between Compose and SwiftUI — use it to build your mental model of how the two mirror each other.", ex: "Convert this Compose Column layout to SwiftUI. Do not add any extra features — just translate it directly." },
        { title: "Generating mock data", why: "When you need a list of fake items to test your UI, Claude can generate it instantly so you can focus on the layout.", ex: "Give me a Kotlin data class called Movie with title, description, and rating fields. Then give me a list of 5 hardcoded Movie objects." },
        { title: "Simplifying concepts", why: "Instructors move fast. When a term gets glossed over, ask Claude for a plain-language explanation.", ex: "What is recomposition in Jetpack Compose? Explain in 2-3 sentences as if I am new to mobile development." },
        { title: "Pair programming", why: "Ask Claude to be your navigator — it suggests the next step without writing the code for you.", ex: "I am building a counter app in SwiftUI. I have the layout done. What should I add next to make the button increment the count? Do not write the code — just tell me what I need." },
      ].map(item => (
        <div key={item.title} style={{ background: "#E1F5EE", border: "0.5px solid #9FE1CB", borderRadius: 8, padding: "10px 14px", margin: "8px 0" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#085041", margin: "0 0 4px" }}>✅ {item.title}</p>
          <p style={{ fontSize: 12, color: "#0F6E56", margin: "0 0 6px", lineHeight: 1.5 }}><strong>Why:</strong> {item.why}</p>
          <p style={{ fontSize: 12, color: "#0F6E56", margin: 0, lineHeight: 1.5 }}><strong>Example prompt:</strong> {item.ex}</p>
        </div>
      ))}
      <H2>Red flags — common pitfalls</H2>
      {[
        { title: "Asking Claude to write your entire project", why: "You will submit code you do not understand. When something breaks — and it will — you will not know how to fix it." },
        { title: "Trusting AI-generated code without reading it", why: "Claude makes mistakes, especially with platform-specific APIs. Always read and run what it gives you before moving on." },
        { title: "Using Claude to skip the lab comparisons", why: "The build once, compare twice labs are the core learning mechanism. If you just accept the output without reading both versions, you miss the whole point." },
        { title: "Asking Claude for stretch feature answers before trying", why: "Stretch features exist to challenge you. Use Claude to get unstuck — not to skip the thinking entirely." },
      ].map(item => (
        <div key={item.title} style={{ background: "#FCEBEB", border: "0.5px solid #F7C1C1", borderRadius: 8, padding: "10px 14px", margin: "8px 0" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#791F1F", margin: "0 0 4px" }}>🚩 {item.title}</p>
          <p style={{ fontSize: 12, color: "#A32D2D", margin: 0, lineHeight: 1.5 }}><strong>Why it hurts you:</strong> {item.why}</p>
        </div>
      ))}
      <Callout type="tip">Remember: Claude is one tool in your toolkit. Your instructor, TAs, classmates, official documentation (developer.android.com, developer.apple.com), and Stack Overflow are all still valuable — and often more reliable.</Callout>
    </div>
  );
}

function Resources() {
  return (
    <div>
      <H2>Official documentation</H2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/develop/ui/compose/why-adopt" style={{ color: "var(--color-text-info)" }}>Why adopt Jetpack Compose — developer.android.com</a></li>
        <li><a href="https://developer.android.com/develop/ui/compose/mental-model" style={{ color: "var(--color-text-info)" }}>Thinking in Compose (mental model) — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/swiftui/" style={{ color: "var(--color-text-info)" }}>Why SwiftUI — developer.apple.com</a></li>
        <li><a href="https://developer.apple.com/videos/play/wwdc2024/10150/" style={{ color: "var(--color-text-info)" }}>SwiftUI Essentials (declarative, compositional, state-driven) — WWDC 2024</a></li>
        <li><a href="https://developer.android.com/jetpack/compose/tutorial" style={{ color: "var(--color-text-info)" }}>Jetpack Compose tutorial — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/tutorials/swiftui" style={{ color: "var(--color-text-info)" }}>SwiftUI tutorials — developer.apple.com</a></li>
        <li><a href="https://developer.android.com/jetpack/compose/state" style={{ color: "var(--color-text-info)" }}>State in Compose — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/state" style={{ color: "var(--color-text-info)" }}>@State in SwiftUI — developer.apple.com</a></li>
      </ul>
      <H2>Kotlin basics (for Android students)</H2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://kotlinlang.org/docs/basic-syntax.html" style={{ color: "var(--color-text-info)" }}>Kotlin syntax</a></li>
        <li><a href="https://kotlinlang.org/docs/basic-types.html" style={{ color: "var(--color-text-info)" }}>Kotlin variables and types</a></li>
        <li><a href="https://play.kotlinlang.org/koans" style={{ color: "var(--color-text-info)" }}>Kotlin Koans — interactive exercises (5-10 min each)</a></li>
      </ul>
      <H2>Swift basics (for iOS students)</H2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/" style={{ color: "var(--color-text-info)" }}>The Swift programming language — basics</a></li>
        <li><a href="https://developer.apple.com/swift/resources/" style={{ color: "var(--color-text-info)" }}>Swift resources — developer.apple.com</a></li>
      </ul>
      <H2>Lab resources</H2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/jetpack/compose/layouts/basics" style={{ color: "var(--color-text-info)" }}>Compose layouts — Column, Row, Box</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/view-layout" style={{ color: "var(--color-text-info)" }}>SwiftUI layout — VStack, HStack, ZStack</a></li>
        <li><a href="https://developer.android.com/jetpack/compose/modifiers" style={{ color: "var(--color-text-info)" }}>Compose modifiers reference</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/view-modifiers" style={{ color: "var(--color-text-info)" }}>SwiftUI view modifiers reference</a></li>
      </ul>
      <H2>Extra practice</H2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/courses/android-basics-compose/unit-1" style={{ color: "var(--color-text-info)" }}>Android Basics with Compose — Unit 1 (free, Google)</a></li>
        <li><a href="https://developer.apple.com/tutorials/swiftui/creating-and-combining-views" style={{ color: "var(--color-text-info)" }}>SwiftUI: Creating and combining views (Apple)</a></li>
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
        <p style={{ fontSize: 18, fontWeight: 500, color: "var(--color-text-primary)", margin: 0 }}>Unit 1</p>
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
      {tab === "Overview"         && <Overview />}
      {tab === "Lab"              && <Lab />}
      {tab === "Project"          && <Project />}
      {tab === "Learning with AI" && <LearningWithAI />}
      {tab === "Resources"        && <Resources />}
    </div>
  );
}
