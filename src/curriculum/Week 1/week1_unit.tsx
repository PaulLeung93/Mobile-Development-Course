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

/* ══════════════════════ OVERVIEW ══════════════════════ */
const Overview = () => (
  <div>
    <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 12 }}>
      Don{"'"}t forget to fill out the {"✏️"} Session Survey at the end of each class session!
    </div>
    <Warn>Before Session 1, complete two things: the IDE Setup (Android Studio or Xcode) and the Language Primer in the pre-work. Session 1 assumes you have done both.</Warn>
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>Unit 1: Your first mobile app</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
      Welcome to Mobile Development in the Age of AI! This unit introduces the foundational concepts you will use every week — how mobile screens are built, how they respond to user interaction, and how AI tools can help you write and understand mobile code faster.
    </p>
    <Note>The Language Primer (Kotlin and Swift basics — variables, functions, and basic types) is covered in the pre-work, not in Session 1. Lambdas and closures are introduced during the Session 1 code-along. If you have not completed the pre-work primer yet, do so before class.</Note>
    <div style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 16px", margin: "12px 0" }}>
      <p style={{ fontSize: 13, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.6 }}>This course covers both Android (Jetpack Compose) and iOS (SwiftUI). You will notice they share the same mental model — that is intentional, and by the end of this unit you will see exactly why.</p>
    </div>

    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>What you will learn</h2>
    <UL items={[
      "What declarative UI means and why Compose and SwiftUI both use it",
      "How to build a basic screen with text, buttons, and layout containers",
      "How to hold a piece of state and make the UI react to it",
      "How to apply basic modifiers/view modifiers for styling",
      "How to use Claude as a learning aid — not a crutch",
    ]} />
    <Note>Kotlin and Swift language basics (variables, functions, lambdas/closures) are covered in the pre-work, not in this unit.</Note>

    <div style={{ marginTop: 20, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
      <strong>Session Info</strong>
      <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
        <li>{"📅"} See your cohort{"'"}s schedule for session times</li>
        <li>{"↗"} Session Zoom Link | Passcode: <strong>codepath</strong></li>
        <li>{"📊"} Link to Slides</li>
      </ul>
      <strong style={{ display: "block", marginTop: 10 }}>Upcoming Due Dates</strong>
      <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
        <li>{"📬"} Assignment 1 — due before Week 2 Session 1</li>
      </ul>
    </div>

    <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
      <strong>{"📦 This unit at a glance"}</strong>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
        {[
          { label: "Pre-work", val: "Language primer: just enough Kotlin and Swift to follow along. IDE setup." },
          { label: "Session 1", val: "Declarative UI — what it is and why it matters. Live code-along: building a profile card." },
          { label: "Session 2", val: "State and modifiers. Live code-along: building a tap counter with milestones." },
          { label: "Lab (each session)", val: "Build in one platform, use Claude to translate to the other, then compare and extend." },
          { label: "Assignment 1", val: "Build a personal profile screen with interactive elements. Submit in either platform." },
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
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Session 1 Lab: Hello, Mobile World</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
      In this lab you will build your very first mobile screen from scratch — a personal profile card. The instructor will live-code one platform. Your job is to follow along, then use Claude to translate your work to the other platform, and push both further with your own creativity. Budget about 50 minutes.
    </p>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <strong>{"🎯"} Goals</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
        <li>Successfully run an app on a simulator or physical device</li>
        <li>Understand the basic structure of a Composable / SwiftUI View</li>
        <li>Use Column/VStack, Row/HStack, and basic components together</li>
        <li>Apply modifiers to style text, add spacing, and add a background</li>
        <li>Use Claude to translate and explain code across platforms</li>
        <li>Practice reading and modifying AI-generated code — not just accepting it</li>
      </ul>
    </div>

    <Step num={0} title="Set up your project (~5 min)">
      <p>Create a new project in Android Studio or Xcode, depending on which platform your instructor is demonstrating today.</p>
      <Checkbox>Android: New Empty Activity project in Android Studio — name it ProfileCard, language Kotlin, min SDK API 24.</Checkbox>
      <Checkbox>iOS: New App project in Xcode — name it ProfileCard, interface SwiftUI, language Swift.</Checkbox>
      <Tip>The emulator/simulator can take a few minutes to boot the very first time. Start it now so it is ready by Step 1.</Tip>
      <Section title="💡 Hint: I can't find Empty Activity in Android Studio">
        Make sure you are on the Phone and Tablet tab in the New Project wizard. Select Empty Activity (not Empty Views Activity — that is the older XML-based approach).
      </Section>
      <Section title="💡 Hint: Xcode is asking me about a Team for signing">
        For simulator-only development you can set Team to None or your personal Apple ID. You only need a paid account to deploy to a real device.
      </Section>
    </Step>

    <Step num={1} title="Your name on a screen (~8 min)">
      <p>Follow along with the instructor. Get your name displaying on screen — centered, large, and bold.</p>
      {platform === "Android" ? (
        <CodeB title="Kotlin — MainActivity.kt" accent={BL}>{`class MainActivity : ComponentActivity() {
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
}`}</CodeB>
      ) : (
        <CodeB title="Swift — ContentView.swift" accent={GR}>{`struct ContentView: View {
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
}`}</CodeB>
      )}
      <Checkpoint num={1}>Run your app. Your name should appear centered on screen.</Checkpoint>
      {platform === "Android" && (
        <Section title="💡 Hint: Red squiggles under Color, FontWeight, etc.">
          Android Studio needs to import these. Click the red word and press Alt+Enter (Option+Enter on Mac) to auto-import.
        </Section>
      )}
    </Step>

    <Step num={2} title="Add a profile avatar (~8 min)">
      <p>Add a colored circle with your initials above your name. This is a common pattern in real apps when a user has no photo.</p>
      {platform === "Android" ? (
        <CodeB title="Kotlin — add above your name Text" accent={BL}>{`Box(
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
Spacer(modifier = Modifier.height(12.dp))`}</CodeB>
      ) : (
        <CodeB title="Swift — add above your name Text" accent={GR}>{`Circle()
    .fill(Color(red: 0.33, green: 0.29, blue: 0.72))
    .frame(width: 80, height: 80)
    .overlay(
        Text("YN")
            .font(.title)
            .fontWeight(.bold)
            .foregroundColor(.white)
    )
    .padding(.bottom, 12)`}</CodeB>
      )}
      <Checkpoint num={2}>You should see a purple circle with initials above your name. Change the color to something that feels like you.</Checkpoint>
      {platform === "Android" ? (
        <Section title="💡 Hint: How do I pick a custom color in Compose?">
          Use <IC>Color(0xFFRRGGBB)</IC> where RR, GG, BB are hex values. For example <IC>Color(0xFF1D9E75)</IC> gives a teal green. Find hex codes at coolors.co.
        </Section>
      ) : (
        <Section title="💡 Hint: How do I pick a custom color in SwiftUI?">
          Use <IC>Color(red:green:blue:)</IC> with values between 0 and 1.
        </Section>
      )}
    </Step>

    <Step num={3} title="Build out the card layout (~10 min)">
      <p>Add a card-style background, a divider, and a row of stat items like you would see on a social profile.</p>
      {platform === "Android" ? (
        <CodeB title="Kotlin — wrap your Column in an outer layout" accent={BL}>{`Column(
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
}`}</CodeB>
      ) : (
        <CodeB title="Swift — ContentView.swift" accent={GR}>{`struct ContentView: View {
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
}`}</CodeB>
      )}
      <Checkpoint num={3}>Your profile should now look like a real card with a background, divider, and stat items. Update the values to something real — or funny.</Checkpoint>
    </Step>

    <Step num={4} title="Ask Claude to translate it (~8 min)">
      <p>Now that you have something worth translating, ask Claude to do it.</p>
      <AiOpp>
        Open Claude at claude.ai. Paste your entire screen code and use this prompt: <em>"I am learning mobile development. This is my [{platform === "Android" ? "Compose" : "SwiftUI"}] profile card. Please translate it to [{platform === "Android" ? "SwiftUI" : "Compose"}]. After the code, briefly explain the 3 biggest structural differences between the two versions."</em> Read the explanation — do not just copy the code.
      </AiOpp>
      <Checkbox>Pasted your code into Claude and received a translation</Checkbox>
      <Checkbox>Read the explanation of differences — did not just skip to the code</Checkbox>
      <Checkbox>Ran the translated version on a simulator — it displays correctly</Checkbox>
      <Section title="💡 Hint: Claude gave me code with errors">
        That happens — this is a feature, not a bug. Try asking Claude: "This gave me a compile error: [paste error]. What is wrong and how do I fix it?" Do not just ask it to rewrite everything.
      </Section>
    </Step>

    <Step num={5} title="Make one change Claude did not make (~8 min)">
      <p>Take the translated code and make at least one meaningful change that Claude did not include. This proves you understand the code rather than just running it.</p>
      <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
        <li>Change the avatar color and initials to match your actual name</li>
        <li>Add a fourth stat item (e.g. Coffee with a funny number)</li>
        <li>Add a short bio line below the tagline in italic text</li>
        <li>Change the card corner radius or background color</li>
        <li>Add your graduation year or cohort city</li>
      </ul>
      <Checkbox>Made at least one original change to the translated code</Checkbox>
      <Checkpoint num={5}>Both versions of your profile card run and have at least one change you made yourself — not Claude.</Checkpoint>
    </Step>

    <Step num={6} title="Reflect (~5 min)">
      <p>Add a comment block at the top of your file and answer these three questions in your own words.</p>
      <CodeB title="Lab 1 Reflection">{`// Lab 1 Reflection
// 1. What is one thing that is identical between Compose and SwiftUI in your code?
// 2. What is one thing that confused you in the translated version?
// 3. What did Claude get right? Did it get anything wrong?`}</CodeB>
      <Checkpoint num="Final">Both platform versions run, you have made at least one original change, and your reflection comment block is filled in. You will discuss these questions during the end-of-session reflection.</Checkpoint>
    </Step>

    <Section title="🚀 Stretch Features">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
        <li>Add a Follow button below the stats row that changes its label to Following when tapped — a sneak peek at next session</li>
        <li>Add a second Skills card below the first, listing 3 technologies you want to learn</li>
        <li>Ask Claude to add a dark mode variant and try to understand every line it adds</li>
        <li>Try rebuilding the layout using Row/HStack-first — what breaks?</li>
      </ul>
    </Section>
  </div>
);

/* ══════════════════════ LAB SESSION 2 ══════════════════════ */
const LabSession2 = ({ platform }: { platform: string }) => (
  <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Session 2 Lab: Tap Counter App</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
      You are going to build a tap counter — the kind of satisfying mechanic found in idle games like Cookie Clicker. By the end you will have a fully interactive app with state, conditional UI, and a milestone system. Budget about 50 minutes.
    </p>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <strong>{"🎯"} Goals</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
        <li>Understand what state is and why it matters in declarative UI</li>
        <li>Use <IC>remember + mutableStateOf</IC> (Compose) or <IC>@State</IC> (SwiftUI) to hold a value</li>
        <li>Make the UI conditionally show/hide elements based on state</li>
        <li>Use Claude to translate stateful code and explain state differences across platforms</li>
        <li>Extend AI-generated code with your own features</li>
      </ul>
    </div>

    <Step num={0} title="Create a new project (~3 min)">
      <Checkbox>Create a new project called TapCounter (same setup as Session 1)</Checkbox>
      <Tip>You can keep your ProfileCard project open in a second window — you will reference it later.</Tip>
    </Step>

    <Step num={1} title="Build the static layout (~8 min)">
      <p>Follow along with the instructor. Get the layout right before adding any interactivity.</p>
      {platform === "Android" ? (
        <CodeB title="Kotlin — CounterScreen.kt" accent={BL}>{`@Composable
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
}`}</CodeB>
      ) : (
        <CodeB title="Swift — CounterScreen.swift" accent={GR}>{`struct CounterScreen: View {
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
}`}</CodeB>
      )}
      <Checkpoint num={1}>Run your app. You should see a large purple 0, the word "taps", and a big circular TAP button. Nothing works yet — we fix that next.</Checkpoint>
    </Step>

    <Step num={2} title="Add state to make it work (~8 min)">
      <p>Now wire up the counter. This is the most important concept of the week.</p>
      {platform === "Android" ? (
        <>
          <p>In Compose, add this at the top of your Composable function:</p>
          <CodeB title="Kotlin" accent={BL}>{`var count by remember { mutableStateOf(0) }`}</CodeB>
          <p>Then update the Text and Button onClick:</p>
          <CodeB title="Kotlin" accent={BL}>{`Text(text = count.toString(), fontSize = 80.sp, ...)
Button(onClick = { count++ }, ...) { ... }`}</CodeB>
        </>
      ) : (
        <>
          <p>In SwiftUI, add this property inside your View struct:</p>
          <CodeB title="Swift" accent={GR}>{`@State private var count = 0`}</CodeB>
          <p>Then update the Text and Button action:</p>
          <CodeB title="Swift" accent={GR}>{`Text("\\(count)")
Button(action: { count += 1 }) { ... }`}</CodeB>
        </>
      )}
      <Checkpoint num={2}>Tap the button — the number goes up! If it does not update, check that your variable is a state variable, not a regular var.</Checkpoint>
      <Section title="💡 Hint: Why does the UI update automatically?">
        In declarative UI, the UI is a pure function of state. When state changes, the framework re-renders anything that reads it. You never call refresh manually — you just change the data and the UI follows.
      </Section>
      {platform === "Android" && (
        <Section title="💡 Hint: What does remember do in Compose?">
          Without <IC>remember</IC>, every time the Composable re-runs your counter would reset to 0. <IC>remember</IC> tells Compose to hold onto the value across re-renders.
        </Section>
      )}
    </Step>

    <Step num={3} title="Add a milestone system (~10 min)">
      <p>Make it more interesting. Show a message that changes as the user taps more. This introduces conditional UI — showing different content based on state.</p>
      {platform === "Android" ? (
        <>
          <p>Add this helper function outside your Composable:</p>
          <CodeB title="Kotlin" accent={BL}>{`fun getMilestone(count: Int): String = when {
    count == 0   -> "Start tapping!"
    count < 10   -> "Getting warmed up..."
    count < 25   -> "On a roll!"
    count < 50   -> "Can't stop now!"
    count < 100  -> "You're unstoppable!"
    else         -> "Legendary tapper!"
}`}</CodeB>
          <p>Then add this inside your Column, below the taps label:</p>
          <CodeB title="Kotlin" accent={BL}>{`Spacer(modifier = Modifier.height(8.dp))
Text(
    text = getMilestone(count),
    fontSize = 14.sp,
    color = Color(0xFF534AB7),
    fontStyle = FontStyle.Italic
)`}</CodeB>
        </>
      ) : (
        <>
          <p>Add this computed property inside your View struct:</p>
          <CodeB title="Swift" accent={GR}>{`var milestone: String {
    switch count {
    case 0:        return "Start tapping!"
    case 1..<10:   return "Getting warmed up..."
    case 10..<25:  return "On a roll!"
    case 25..<50:  return "Can't stop now!"
    case 50..<100: return "You're unstoppable!"
    default:       return "Legendary tapper!"
    }
}`}</CodeB>
          <p>Then add to your VStack:</p>
          <CodeB title="Swift" accent={GR}>{`Text(milestone)
    .font(.footnote)
    .italic()
    .foregroundColor(Color(red: 0.33, green: 0.29, blue: 0.72))`}</CodeB>
        </>
      )}
      <Checkpoint num={3}>Tap away and watch the milestone message change. This is conditional UI — the same screen renders differently based on state.</Checkpoint>
    </Step>

    <Step num={4} title="Ask Claude to translate — focus on state (~8 min)">
      <AiOpp>
        Go to claude.ai and use this prompt: <em>"I built this tap counter app in [{platform === "Android" ? "Compose" : "SwiftUI"}]. Please translate the full thing to [{platform === "Android" ? "SwiftUI" : "Compose"}]. Then explain in plain English: how does state work in Compose vs SwiftUI? What is the equivalent of @State in Compose, and why does Compose need remember but SwiftUI does not?"</em> Read the full explanation before running the code.
      </AiOpp>
      <Checkbox>Received and read the translation and state explanation from Claude</Checkbox>
      <Checkbox>Ran the translated version — the counter and milestones work correctly</Checkbox>
      <Section title="💡 Hint: Claude's translation has an error">
        Paste the error back to Claude and ask: "This line is giving me this error: [error]. Can you explain what is wrong without rewriting the whole file?" Learning to debug with Claude is more valuable than getting perfect code.
      </Section>
    </Step>

    <Step num={5} title="Add a Reset button with conditional visibility (~8 min)">
      <p>Extend the translated version yourself. Add a Reset button that only appears once the count hits 10 — invisible below that threshold. This is intentionally open-ended. Use what you have learned. If you get stuck, ask Claude for a hint — but try for at least 3 minutes on your own first.</p>
      <Checkbox>Reset button appears only when count is 10 or above</Checkbox>
      <Checkbox>Tapping Reset sets the count back to 0 and the milestone back to "Start tapping!"</Checkbox>
      <Checkbox>Button disappears again after reset</Checkbox>
      <Section title="💡 Hint: How do I show/hide a view based on state?">
        In both Compose and SwiftUI, use an <IC>if</IC> statement inside your UI code. In Compose: <IC>{"if (count >= 10) { Button(...) }"}</IC>. In SwiftUI: <IC>{"if count >= 10 { Button(...) }"}</IC>. When state changes, the if condition is re-evaluated automatically.
      </Section>
    </Step>

    <Step num={6} title="Reflect (~5 min)">
      <p>Add a comment block at the top of your primary file before you leave:</p>
      <CodeB title="Lab 2 Reflection">{`// Lab 2 Reflection
// 1. In your own words: what is state, and why does declarative UI need it?
// 2. What is the difference between remember in Compose and @State in SwiftUI?
// 3. What was the hardest part of Step 5? How did you get unstuck?`}</CodeB>
      <Checkpoint num="Final">Your counter app runs with milestone messages and a conditional Reset button. Your reflection comment block is filled in — you will discuss these questions during the end-of-session reflection.</Checkpoint>
    </Step>

    <Section title="🚀 Stretch Features">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
        <li>Add a high score that persists between resets — hint: you need a second state variable</li>
        <li>Add a multiplier — after 50 taps each tap counts as 2, after 100 each tap counts as 5</li>
        <li>Animate the counter number when it changes — look up <IC>animateContentSize</IC> in Compose or <IC>withAnimation</IC> in SwiftUI</li>
        <li>Ask Claude to add haptic feedback on each tap and read through every line it adds</li>
      </ul>
    </Section>
  </div>
);

/* ══════════════════════ LAB SESSION 2: MONSTER SLAYER (WIP) ══════════════════════ */
const LabSession2MonsterSlayer = ({ platform }: { platform: string }) => (
  <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>

    <div style={{ background: "#FFF8E6", border: "1px solid #EF9F27", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 13, lineHeight: 1.6 }}>
      <strong>⚠️ Work in Progress</strong> — This lab is still being finalized. Steps, starter code, and assets may change before it goes live.
    </div>

    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Session 2 Lab: Monster Slayer</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px", lineHeight: 1.7 }}>
      A dragon boss is waiting. It has 20 HP and it is not happy to see you. Attack it — watch it react as its health drops, and claim victory when it hits zero. Under the hood, every visual change on screen is driven by state — exactly what this session is about. Budget about 50 minutes.
    </p>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <strong>{"🎯"} Goals</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
        <li>Use <IC>remember + mutableStateOf</IC> (Compose) or <IC>@State</IC> (SwiftUI) to track monster HP</li>
        <li>Use <IC>when</IC> / <IC>switch</IC> to change the monster's appearance and taunts based on HP thresholds</li>
        <li>Manage two independent state variables — HP and attack count</li>
        <li>Use Claude to translate stateful code and explain differences across platforms</li>
      </ul>
    </div>

    <Note>The starter code provides the 2D character assets and layout — your job is to wire up the state that drives what those assets display. You are writing the brain; the starter provides the body.</Note>

    <div style={{ marginTop: 20 }}>
      <VStep num={0} title="Open the starter project (~3 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Open the <IC>MonsterSlayer</IC> starter project provided by your instructor. Run it — you should see a dark screen with a dragon sprite, a hardcoded HP display, and an attack button. Nothing reacts yet.</p>
        <Checkbox>Starter project runs on your simulator without errors</Checkbox>
        <Checkpoint num={0}>Dragon is on screen. It is judging you. The button does nothing.</Checkpoint>
      </VStep>

      <VStep num={1} title="Wire up the attack button (~5 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>The starter gives you a button that does nothing. Connect it — add an <IC>onClick</IC> / <IC>action</IC> that tries to subtract from a regular variable and prints to the console. Run it and tap a few times.</p>
        {platform === "Android" ? (
          <CodeB title="Kotlin — inside your Composable" accent={BL}>{`// Add this at the top of your Composable — a plain variable, no state yet
var hp = 20

// Wire up the button:
Button(onClick = {
    hp -= 1
    println("HP is now: \$hp")  // check Logcat
}) { ... }`}</CodeB>
        ) : (
          <CodeB title="Swift — inside your View struct body" accent={GR}>{`// Add this at the top of your body — a plain variable, no state yet
var hp = 20

// Wire up the button:
Button(action: {
    hp -= 1
    print("HP is now: \\(hp)")  // check the console
}) { ... }`}</CodeB>
        )}
        <Checkpoint num={1}>Tap the button several times. Check the console — HP is changing. But the number on screen stays at 20. Sound familiar?</Checkpoint>
        <Tip>This is the same problem from the lecture. The button works — the tap is registered — but without state, the UI has no reason to redraw.</Tip>
      </VStep>

      <VStep num={2} title="Add state to make it react (~8 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Now fix it. Replace your plain variable with a state variable and watch the screen come alive.</p>
        {platform === "Android" ? (
          <>
            <p style={{ fontSize: 13, margin: "0 0 6px" }}>Replace your plain <IC>var hp = 20</IC> with:</p>
            <CodeB title="Kotlin" accent={BL}>{`var monsterHp by remember { mutableStateOf(20) }
var attackCount by remember { mutableStateOf(0) }`}</CodeB>
            <p style={{ fontSize: 13, margin: "6px 0" }}>Update the button and the HP display:</p>
            <CodeB title="Kotlin" accent={BL}>{`// Replace the hardcoded HP text:
Text(text = "HP: \$monsterHp / 20", ...)

// Update onClick — guard against going below zero:
onClick = {
    if (monsterHp > 0) {
        monsterHp -= 1
        attackCount += 1
    }
}`}</CodeB>
          </>
        ) : (
          <>
            <p style={{ fontSize: 13, margin: "0 0 6px" }}>Replace your plain <IC>var hp = 20</IC> with:</p>
            <CodeB title="Swift" accent={GR}>{`@State private var monsterHp = 20
@State private var attackCount = 0`}</CodeB>
            <p style={{ fontSize: 13, margin: "6px 0" }}>Update the button and the HP display:</p>
            <CodeB title="Swift" accent={GR}>{`// Replace the hardcoded HP text:
Text("HP: \\(monsterHp) / 20")

// Update action — guard against going below zero:
action: {
    if monsterHp > 0 {
        monsterHp -= 1
        attackCount += 1
    }
}`}</CodeB>
          </>
        )}
        <Checkpoint num={2}>Attack the dragon. HP counts down on screen. It still looks smug — we fix that next.</Checkpoint>
        <Section title="💡 Hint: Why check if monsterHp > 0 before subtracting?">
          Without that guard, HP can go negative — and a dead dragon should not keep taking damage. Only run logic when it makes sense to run it.
        </Section>
      </VStep>

      <VStep num={3} title="Add a phase system — the dragon reacts (~10 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>As HP drops, the dragon changes. Add a helper function that returns a different emoji and taunt based on the current HP. This is the same <IC>when</IC> / <IC>switch</IC> pattern from the lecture.</p>
        {platform === "Android" ? (
          <>
            <p style={{ fontSize: 13, margin: "0 0 6px" }}>Add this helper function <strong>outside</strong> your Composable:</p>
            <CodeB title="Kotlin" accent={BL}>{`data class MonsterPhase(val emoji: String, val taunt: String)

fun getMonsterPhase(hp: Int): MonsterPhase = when {
    hp > 14 -> MonsterPhase("🐉", "I will crush you, tiny human!")
    hp > 9  -> MonsterPhase("😠", "You dare wound me?!")
    hp > 4  -> MonsterPhase("😤", "N-not so fast...")
    hp > 0  -> MonsterPhase("😰", "Please... have mercy...")
    else    -> MonsterPhase("💀", "You... you beat me...")
}`}</CodeB>
            <p style={{ fontSize: 13, margin: "6px 0" }}>Then use it inside your Composable:</p>
            <CodeB title="Kotlin" accent={BL}>{`val phase = getMonsterPhase(monsterHp)

// Replace your hardcoded emoji and taunt text:
Text(text = phase.emoji, fontSize = 80.sp)
Text(text = "\"${"\${phase.taunt}"}\"", fontStyle = FontStyle.Italic, ...)`}</CodeB>
          </>
        ) : (
          <>
            <p style={{ fontSize: 13, margin: "0 0 6px" }}>Add this computed property <strong>inside</strong> your View struct:</p>
            <CodeB title="Swift" accent={GR}>{`var monsterPhase: (emoji: String, taunt: String) {
    switch monsterHp {
    case 15...20: return ("🐉", "I will crush you, tiny human!")
    case 10...14: return ("😠", "You dare wound me?!")
    case 5...9:   return ("😤", "N-not so fast...")
    case 1...4:   return ("😰", "Please... have mercy...")
    default:      return ("💀", "You... you beat me...")
    }
}`}</CodeB>
            <p style={{ fontSize: 13, margin: "6px 0" }}>Then use it in your View body:</p>
            <CodeB title="Swift" accent={GR}>{`// Replace your hardcoded emoji and taunt:
Text(monsterPhase.emoji).font(.system(size: 80))
Text("\"\\(monsterPhase.taunt)\"").italic()...`}</CodeB>
          </>
        )}
        <Checkpoint num={3}>Attack the dragon past each threshold. Watch its expression and taunts shift in real time — all driven by a single state variable.</Checkpoint>
        <Section title="💡 Hint: Nothing is changing when I tap">
          Make sure <IC>getMonsterPhase</IC> / <IC>monsterPhase</IC> reads from your state variable, not a hardcoded number. If it reads from state, the framework will automatically re-evaluate it whenever HP changes.
        </Section>
      </VStep>

      <VStep num={4} title="Display the attack count (~5 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Show how many attacks the player has landed. This is your second independent state variable — changing it has no effect on HP and vice versa.</p>
        {platform === "Android" ? (
          <CodeB title="Kotlin — add below your HP text" accent={BL}>{`Text(
    text = "Attacks landed: \$attackCount",
    fontSize = 13.sp,
    color = Color.Gray
)`}</CodeB>
        ) : (
          <CodeB title="Swift — add below your HP text" accent={GR}>{`Text("Attacks landed: \\(attackCount)")
    .font(.footnote)
    .foregroundColor(.gray)`}</CodeB>
        )}
        <Checkpoint num={4}>Both HP and attack count update independently on each tap. Two pieces of state, zero interference.</Checkpoint>
      </VStep>

      <VStep num={5} title="Ask Claude to translate — focus on state (~8 min)">
        <AiOpp>
          Go to claude.ai and use this prompt: <em>"I built a Monster Slayer battle screen in [{platform === "Android" ? "Jetpack Compose" : "SwiftUI"}]. Please translate the full thing to [{platform === "Android" ? "SwiftUI" : "Jetpack Compose"}]. Then explain in plain English: how does state work in Compose vs SwiftUI? What is the equivalent of @State in Compose, and why does Compose need remember but SwiftUI does not?"</em> Read the explanation before running the code.
        </AiOpp>
        <Checkbox>Received and read the translation and state explanation</Checkbox>
        <Checkbox>Ran the translated version — HP counts down and phases shift correctly</Checkbox>
        <Section title="💡 Hint: Claude's translation has errors">
          Paste the error back: <em>"This line gives me this error: [paste error]. What is wrong, without rewriting the whole file?"</em> Debugging with Claude is more valuable than getting perfect code.
        </Section>
      </VStep>

      <VStep num={6} title="Make one change Claude did not make (~5 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Take the translated version and add something Claude did not include. Some ideas:</p>
        <ul style={{ paddingLeft: 20, margin: "6px 0", fontSize: 13 }}>
          <li>Change the dragon's HP to 30 and add a new phase threshold</li>
          <li>Add a "Damage dealt" label that tracks total damage across the session</li>
          <li>Change the HP text color — red when HP is low, white when full</li>
          <li>Write a custom taunt for one of the phases</li>
        </ul>
        <Checkpoint num={6}>Both platform versions run. You have made at least one original change not written by Claude.</Checkpoint>
      </VStep>

      <VStep num={7} title="Reflect (~5 min)" last>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Add a comment block at the top of your primary file:</p>
        <CodeB title="Lab 2 Reflection">{`// Lab 2 Reflection
// 1. In your own words: what is state, and why does declarative UI need it?
// 2. What is one thing the monster phase system and a milestone counter have in common?
// 3. What surprised you most about how the UI reacted to state changes?`}</CodeB>
        <Checkpoint num="Final">Dragon battered. Both platforms running. Reflection filled in. You are ready for the end-of-session discussion.</Checkpoint>
      </VStep>
    </div>

    <Section title="⚡ Stretch: Ultimate Attack — Swipe Combo">
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, margin: "0 0 12px" }}>
        The starter code already detects swipe gestures and calls an <IC>onSwipe</IC> callback with a direction string — <IC>"up"</IC>, <IC>"down"</IC>, <IC>"left"</IC>, or <IC>"right"</IC>. Your job is to use state to remember the player's recent swipes and check whether they match the secret combo. If they do — instant kill.
      </p>
      <Note>The combo is: <strong>↑ Up, ↑ Up, ↓ Down</strong>. You can change this to anything you like once it works.</Note>

      <VStep num={1} title="Declare a state variable to track the combo sequence">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>You need a list that grows as the player swipes. This is a new kind of state — not a number, but a collection.</p>
        {platform === "Android" ? (
          <CodeB title="Kotlin — add alongside your other state variables" accent={BL}>{`val COMBO = listOf("up", "up", "down")
var comboProgress by remember { mutableStateOf(listOf<String>()) }`}</CodeB>
        ) : (
          <CodeB title="Swift — add alongside your other @State properties" accent={GR}>{`let combo = ["up", "up", "down"]
@State private var comboProgress: [String] = []`}</CodeB>
        )}
      </VStep>

      <VStep num={2} title="Wire up the onSwipe callback">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Find the <IC>onSwipe</IC> hook in the starter code and fill it in. Each swipe appends a direction to the sequence — but only keep the last N swipes so old inputs fall off.</p>
        {platform === "Android" ? (
          <CodeB title="Kotlin — inside the onSwipe callback" accent={BL}>{`onSwipe = { direction ->
    val next = comboProgress + direction
    comboProgress = if (next.size > COMBO.size) {
        next.takeLast(COMBO.size)  // drop oldest, keep freshest
    } else {
        next
    }
}`}</CodeB>
        ) : (
          <CodeB title="Swift — inside the onSwipe closure" accent={GR}>{`onSwipe: { direction in
    comboProgress.append(direction)
    if comboProgress.count > combo.count {
        comboProgress.removeFirst()  // drop oldest, keep freshest
    }
}`}</CodeB>
        )}
      </VStep>

      <VStep num={3} title="Check for the combo and trigger the ultimate" last>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>After updating the sequence, check if it matches. If it does, set HP to 0 and clear the combo so it can be used again.</p>
        {platform === "Android" ? (
          <CodeB title="Kotlin — add inside onSwipe, after updating comboProgress" accent={BL}>{`if (comboProgress == COMBO) {
    monsterHp = 0         // instant kill
    comboProgress = listOf()  // reset combo
}`}</CodeB>
        ) : (
          <CodeB title="Swift — add inside onSwipe, after updating comboProgress" accent={GR}>{`if comboProgress == combo {
    monsterHp = 0         // instant kill
    comboProgress = []    // reset combo
}`}</CodeB>
        )}
        <Checkpoint num="⚡">Swipe ↑ ↑ ↓ on the monster. It drops to zero instantly. Change the combo to something of your own invention.</Checkpoint>
      </VStep>
    </Section>

    <Section title="🚀 More Stretch">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
        <li><strong>Critical hit</strong> — 20% chance any tap deals 3 damage instead of 1. Look up <IC>Random.nextInt()</IC> in Kotlin or <IC>Int.random(in:)</IC> in Swift</li>
        <li><strong>Battles won</strong> — add a counter that increments each time you defeat the dragon and survives when a new one appears. Hint: a third state variable that the New Monster reset does not touch</li>
        <li><strong>Monster retaliates</strong> — add a player HP bar that decreases at certain monster HP thresholds. Requires a third state variable and more conditional UI</li>
      </ul>
    </Section>
  </div>
);

/* ══════════════════════ LAB (switcher) ══════════════════════ */
const LabTab = ({ platform, setPlatform }: { platform: string; setPlatform: (p: string) => void }) => {
  const [session, setSession] = useState(1);

  const tabs = [
    { id: 1, label: "Session 1 — Profile Card" },
    { id: 2, label: "Session 2 — Tap Counter" },
    { id: 3, label: "Session 2 — Monster Slayer ⚗️" },
  ];

  return (
    <div>
      <div style={{ display: "flex", gap: 0, marginBottom: 12, borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setSession(t.id)} style={{
            padding: "8px 20px", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer",
            background: session === t.id ? (t.id === 3 ? "#FFF8E6" : PL) : "var(--color-background-primary)",
            color: session === t.id ? (t.id === 3 ? "#92600A" : PD) : "var(--color-text-secondary)"
          }}>{t.label}</button>
        ))}
      </div>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      {session === 1 && <LabSession1 platform={platform} />}
      {session === 2 && <LabSession2 platform={platform} />}
      {session === 3 && <LabSession2MonsterSlayer platform={platform} />}
    </div>
  );
};

/* ══════════════════════ ADVANCED STRETCH ══════════════════════ */
const AdvancedStretch = () => {
  const [platform, setPlatform] = useState("Android");
  const isAndroid = platform === "Android";
  return (
    <Section title="⚡ Advanced Stretch">
      <div style={{ "--platform-accent": isAndroid ? BL : GR } as React.CSSProperties}>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, margin: "0 0 4px" }}>
          These features go well beyond the core requirements. Build them in order — the QR code lives on the back of the flipped card, so complete the flip animation first.
        </p>
        <PlatformToggle platform={platform} setPlatform={setPlatform} />

        <div style={{ borderTop: "0.5px solid var(--color-border-tertiary)", paddingTop: 14, marginTop: 4 }}>
          <Checkbox><strong>Card flip animation</strong> — on tap, your profile flips like a business card to reveal a back face</Checkbox>
          <Note>The trick: animate <IC>rotationY</IC> from 0° → 180°. At the 90° midpoint, swap which face is rendered. The back face must be counter-rotated 180° so its text isn't mirrored.</Note>
          <div style={{ marginTop: 14 }}>
            <VStep num={1} title="Add flip state and animate the rotation">
              {isAndroid ? (
                <CodeB title="Kotlin" accent={BL}>{`var flipped by remember { mutableStateOf(false) }
val rotation by animateFloatAsState(
    targetValue = if (flipped) 180f else 0f,
    animationSpec = tween(durationMillis = 400),
    label = "cardFlip"
)`}</CodeB>
              ) : (
                <CodeB title="Swift" accent={GR}>{`@State private var flipped = false`}</CodeB>
              )}
            </VStep>
            <VStep num={2} title="Wrap your card in a flippable container">
              {isAndroid ? (
                <CodeB title="Kotlin" accent={BL}>{`Box(
    modifier = Modifier
        .graphicsLayer {
            rotationY = rotation
            cameraDistance = 12f * density  // prevents perspective distortion
        }
        .clickable { flipped = !flipped }
) {
    // Front and back faces go here (Step 3)
}`}</CodeB>
              ) : (
                <CodeB title="Swift" accent={GR}>{`ZStack {
    // Front and back faces go here (Step 3)
}
.rotation3DEffect(
    .degrees(flipped ? 180 : 0),
    axis: (x: 0, y: 1, z: 0)
)
.onTapGesture {
    withAnimation(.easeInOut(duration: 0.4)) {
        flipped.toggle()
    }
}`}</CodeB>
              )}
            </VStep>
            <VStep num={3} title="Show the correct face — and un-mirror the back" last>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Without the counter-rotation, the back face renders as a mirror image.</p>
              {isAndroid ? (
                <CodeB title="Kotlin" accent={BL}>{`if (rotation <= 90f) {
    FrontFace()   // your existing profile content
} else {
    // Counter-rotate so back content is not mirrored
    Box(modifier = Modifier.graphicsLayer { rotationY = 180f }) {
        BackFace()
    }
}`}</CodeB>
              ) : (
                <CodeB title="Swift" accent={GR}>{`if !flipped {
    FrontView()   // your existing profile content
} else {
    BackView()
        .rotation3DEffect(.degrees(180), axis: (x: 0, y: 1, z: 0))
}`}</CodeB>
              )}
            </VStep>
          </div>
        </div>

        <div style={{ borderTop: "0.5px solid var(--color-border-tertiary)", paddingTop: 14, marginTop: 4 }}>
          <Checkbox><strong>LinkedIn QR code on the back</strong> — hardcode your LinkedIn URL and show a scannable QR code on the card's back face</Checkbox>
          <div style={{ marginTop: 14 }}>
            <VStep num={1} title={isAndroid ? "Add the QR code library" : "No library needed — CoreImage is built in"}>
              {isAndroid ? (
                <>
                  <CodeB title="build.gradle.kts" accent={BL}>{`implementation("io.github.alexzhirkevich:qrose:1.0.1")`}</CodeB>
                  <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "4px 0 0" }}>Check <a href="https://github.com/alexzhirkevich/compose-qr-code" target="_blank" rel="noreferrer" style={{ color: BL }}>the repo</a> for the latest version.</p>
                </>
              ) : (
                <Note>QR code generation is built into <IC>CoreImage</IC> — no installation required.</Note>
              )}
            </VStep>
            <VStep num={2} title="Display the QR code in your back face" last>
              {isAndroid ? (
                <CodeB title="Kotlin" accent={BL}>{`import io.github.alexzhirkevich.qrose.rememberQrCodePainter

Image(
    painter = rememberQrCodePainter("https://linkedin.com/in/YOUR-USERNAME"),
    contentDescription = "LinkedIn QR code",
    modifier = Modifier.size(200.dp)
)`}</CodeB>
              ) : (
                <CodeB title="Swift" accent={GR}>{`import CoreImage.CIFilterBuiltins

func qrCode(for url: String) -> UIImage {
    let context = CIContext()
    let filter = CIFilter.qrCodeGenerator()
    filter.message = Data(url.utf8)
    guard let output = filter.outputImage,
          let cgImage = context.createCGImage(output, from: output.extent)
    else { return UIImage() }
    return UIImage(cgImage: cgImage)
}

// Inside BackView:
Image(uiImage: qrCode(for: "https://linkedin.com/in/YOUR-USERNAME"))
    .interpolation(.none)
    .resizable()
    .scaledToFit()
    .frame(width: 200, height: 200)`}</CodeB>
              )}
              <Tip>Replace <IC>YOUR-USERNAME</IC> with your actual LinkedIn username — it's the last part of your LinkedIn profile URL.</Tip>
            </VStep>
          </div>
        </div>
      </div>
    </Section>
  );
};

/* ══════════════════════ PROJECT ══════════════════════ */
const ProjectTab = () => (
  <div>
    <Warn>Submit this assignment by the end of Week 2 Session 1 using the Submit button on this page.</Warn>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 1 Project: Personal Profile App</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>
      Build a personal profile screen — your first independently-built mobile app. It combines everything from this week: layout, text, state, and basic interactivity. You may build in either Android (Jetpack Compose) or iOS (SwiftUI). You do not need to submit both.
    </p>

    <Section title="✅ Required Features" defaultOpen={true}>
      <Checkbox>Display your name in large, bold text</Checkbox>
      <Checkbox>Display a short bio or tagline beneath your name</Checkbox>
      <Checkbox>Include a profile photo</Checkbox>
      <Checkbox>The app runs without crashing on a simulator or physical device</Checkbox>
    </Section>

    <Section title="🚀 Stretch Features">
      <Checkbox>Add an interactive element — a button that visibly changes something on screen when tapped</Checkbox>
      <Checkbox>Style the screen with a custom color scheme</Checkbox>
      <Checkbox>Add a dark mode compatible layout</Checkbox>
      <Checkbox>
        Add a shimmer loading effect to your profile card — animates a light sweep across the screen while content "loads".{" "}
        <a href="https://github.com/valentinilk/compose-shimmer" target="_blank" rel="noreferrer" style={{ color: "var(--platform-accent, var(--color-text-primary))" }}>Compose library</a>
        {" · "}
        <a href="https://github.com/markiv/SwiftUI-Shimmer" target="_blank" rel="noreferrer" style={{ color: "var(--platform-accent, var(--color-text-primary))" }}>SwiftUI library</a>
        {" · "}
        <a href="https://softwareanders.com/swiftui-skeleton-loading-view-build-a-shimmer-effect-from-scratch/" target="_blank" rel="noreferrer" style={{ color: "var(--platform-accent, var(--color-text-primary))" }}>SwiftUI from-scratch tutorial</a>
      </Checkbox>
    </Section>

    <AdvancedStretch />

    <Section title="📘 Submitting your project">
      <ol style={{ fontSize: 13, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
        <li>Create a GitHub repository for your project</li>
        <li>Push your code to the repository</li>
        <li>Create a README using the Unit 1 README template (link below)</li>
        <li>In the README, check off all features you implemented by changing <IC>-[ ]</IC> to <IC>-[x]</IC></li>
        <li>Record a short GIF or screen recording of your app running and add it to the README</li>
        <li>Make the repo private and add <IC>codepathreview</IC> as a collaborator</li>
      </ol>
      <Note>Not sure how to record a GIF? On Mac use QuickTime plus a GIF converter. On Windows use ShareX. There are also browser extensions that can capture simulator screens.</Note>
    </Section>

    <Section title="💡 Hints">
      <ul style={{ fontSize: 13, lineHeight: 1.6, paddingLeft: 20, margin: 0 }}>
        <li style={{ marginBottom: 10 }}>
          <strong>I don't know where to start</strong>
          <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>Open the starter code and find the card template. Add a <IC>Text</IC> component for your name first — just get something visible on screen. Once that works, add the bio below it, then tackle the photo last.</p>
        </li>
        <li style={{ marginBottom: 10 }}>
          <strong>My text isn't styled the way I want</strong>
          <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>In Compose, use <IC>fontSize</IC>, <IC>fontWeight</IC>, and <IC>color</IC> parameters directly on <IC>Text()</IC>. In SwiftUI, chain <IC>.font()</IC>, <IC>.fontWeight()</IC>, and <IC>.foregroundColor()</IC> modifiers onto your <IC>Text</IC> view.</p>
        </li>
        <li style={{ marginBottom: 10 }}>
          <strong>How do I display a photo?</strong>
          <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>Add your image file to the project resources, then use <IC>Image(painter = painterResource(...))</IC> in Compose or <IC>Image("your-image")</IC> in SwiftUI. Apply a <IC>.clipShape(Circle())</IC> modifier to give it a rounded profile look.</p>
        </li>
        <li style={{ marginBottom: 0 }}>
          <strong>My image is too large / not the right shape</strong>
          <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>In Compose: use <IC>.size()</IC> and <IC>.clip(CircleShape)</IC> modifiers and set <IC>contentScale = ContentScale.Crop</IC>. In SwiftUI: use <IC>.frame()</IC>, <IC>.clipShape(Circle())</IC>, and <IC>.scaledToFill()</IC>.</p>
        </li>
      </ul>
    </Section>
  </div>
);

/* ══════════════════════ LEARNING WITH AI ══════════════════════ */
const LearningWithAI = () => (
  <div>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Learning with AI</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>
      This course has an official partnership with Claude, and you are expected to use it as part of your learning. This guide will help you use it effectively — and avoid the traps that slow people down.
    </p>
    <Note>Regardless of which tool you use, what matters most is the role you assign it. Claude is a tool. You are the engineer.</Note>

    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>AI roles</h2>
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

    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Green flags — effective AI use</h2>
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

    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Red flags — common pitfalls</h2>
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
    <Tip>Remember: Claude is one tool in your toolkit. Your instructor, TAs, classmates, official documentation (developer.android.com, developer.apple.com), and Stack Overflow are all still valuable — and often more reliable.</Tip>
  </div>
);

/* ══════════════════════ RESOURCES ══════════════════════ */
const ResourcesTab = () => (
  <div>
    <div style={{ fontSize: 13, lineHeight: 1.8 }}>
      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>{"📖"} Official documentation</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/develop/ui/compose/why-adopt" style={{ color: "var(--color-text-info)" }}>Why adopt Jetpack Compose — developer.android.com</a></li>
        <li><a href="https://developer.android.com/develop/ui/compose/mental-model" style={{ color: "var(--color-text-info)" }}>Thinking in Compose (mental model) — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/swiftui/" style={{ color: "var(--color-text-info)" }}>Why SwiftUI — developer.apple.com</a></li>
        <li><a href="https://developer.apple.com/videos/play/wwdc2024/10150/" style={{ color: "var(--color-text-info)" }}>SwiftUI Essentials (declarative, compositional, state-driven) — WWDC 2024</a></li>
        <li><a href="https://developer.android.com/jetpack/compose/tutorial" style={{ color: "var(--color-text-info)" }}>Jetpack Compose tutorial — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/tutorials/swiftui" style={{ color: "var(--color-text-info)" }}>SwiftUI tutorials — developer.apple.com</a></li>
        <li><a href="https://developer.android.com/jetpack/compose/state" style={{ color: "var(--color-text-info)" }}>State in Compose — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/state" style={{ color: "var(--color-text-info)" }}>@State in SwiftUI — developer.apple.com</a></li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🤖"} Kotlin basics (for Android students)</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><a href="https://kotlinlang.org/docs/basic-syntax.html" style={{ color: "var(--color-text-info)" }}>Kotlin syntax</a></li>
        <li><a href="https://kotlinlang.org/docs/basic-types.html" style={{ color: "var(--color-text-info)" }}>Kotlin variables and types</a></li>
        <li><a href="https://play.kotlinlang.org/koans" style={{ color: "var(--color-text-info)" }}>Kotlin Koans — interactive exercises (5-10 min each)</a></li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🍎"} Swift basics (for iOS students)</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><a href="https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/" style={{ color: "var(--color-text-info)" }}>The Swift programming language — basics</a></li>
        <li><a href="https://developer.apple.com/swift/resources/" style={{ color: "var(--color-text-info)" }}>Swift resources — developer.apple.com</a></li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🧪"} Lab resources</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/jetpack/compose/layouts/basics" style={{ color: "var(--color-text-info)" }}>Compose layouts — Column, Row, Box</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/view-layout" style={{ color: "var(--color-text-info)" }}>SwiftUI layout — VStack, HStack, ZStack</a></li>
        <li><a href="https://developer.android.com/jetpack/compose/modifiers" style={{ color: "var(--color-text-info)" }}>Compose modifiers reference</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/view-modifiers" style={{ color: "var(--color-text-info)" }}>SwiftUI view modifiers reference</a></li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"✏️"} Extra practice</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/courses/android-basics-compose/unit-1" style={{ color: "var(--color-text-info)" }}>Android Basics with Compose — Unit 1 (free, Google)</a></li>
        <li><a href="https://developer.apple.com/tutorials/swiftui/creating-and-combining-views" style={{ color: "var(--color-text-info)" }}>SwiftUI: Creating and combining views (Apple)</a></li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"⚡"} Advanced stretch resources</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li style={{ marginBottom: 4 }}><strong>Shimmer effect</strong>
          <ul style={{ paddingLeft: 16, marginTop: 4 }}>
            <li><a href="https://github.com/valentinilk/compose-shimmer" style={{ color: "var(--color-text-info)" }}>compose-shimmer library — github.com/valentinilk</a></li>
            <li><a href="https://github.com/markiv/SwiftUI-Shimmer" style={{ color: "var(--color-text-info)" }}>SwiftUI-Shimmer library — github.com/markiv</a></li>
            <li><a href="https://softwareanders.com/swiftui-skeleton-loading-view-build-a-shimmer-effect-from-scratch/" style={{ color: "var(--color-text-info)" }}>Build a shimmer effect from scratch in SwiftUI — softwareanders.com</a></li>
          </ul>
        </li>
        <li style={{ marginBottom: 4 }}><strong>Card flip animation</strong>
          <ul style={{ paddingLeft: 16, marginTop: 4 }}>
            <li><a href="https://developer.android.com/develop/ui/compose/graphics/draw/modifiers" style={{ color: "var(--color-text-info)" }}>graphicsLayer modifier — developer.android.com</a></li>
            <li><a href="https://developer.apple.com/documentation/swiftui/view/rotation3deffect(_:axis:anchor:anchorz:perspective:)" style={{ color: "var(--color-text-info)" }}>rotation3DEffect — developer.apple.com</a></li>
          </ul>
        </li>
        <li><strong>QR code generation</strong>
          <ul style={{ paddingLeft: 16, marginTop: 4 }}>
            <li><a href="https://github.com/alexzhirkevich/compose-qr-code" style={{ color: "var(--color-text-info)" }}>compose-qr-code (qrose) library — github.com/alexzhirkevich</a></li>
            <li><a href="https://developer.apple.com/documentation/coreimage/cifilter/3228199-qrcodegenerator" style={{ color: "var(--color-text-info)" }}>CIFilter.qrCodeGenerator — developer.apple.com</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

/* ══════════════════════ MAIN ══════════════════════ */
export default function Week1Unit() {
  const [tab, setTab] = useState("Overview");
  const [platform, setPlatform] = useState("Android");

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
      {tab === "Lab"              && <LabTab platform={platform} setPlatform={setPlatform} />}
      {tab === "Project"          && <ProjectTab />}
      {tab === "Learning with AI" && <LearningWithAI />}
      {tab === "Resources"        && <ResourcesTab />}
    </div>
  );
}
