import { useState } from "react";

const TABS = ["Overview", "Lab", "Project", "Capstone", "Resources"];
const PLATFORMS = ["Android", "iOS"];

const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const G_C = "#085041", GL = "#E1F5EE";
const AM = "#633806", AML = "#FAEEDA";
const BL = "#7F52FF", BLL = "#F0EEFF";
const GR = "#F05138", GRL = "#FFF2F0";
const CAP_C = "#993C1D", CAP_BG = "#FAECE7";

function Section({ title, children, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div style={{ margin: "14px 0", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--color-background-secondary)", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>
        {title}<span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div style={{ padding: "12px 14px", fontSize: 13, lineHeight: 1.7, color: "var(--color-text-primary)" }}>{children}</div>}
    </div>
  );
}

function CodeB({ title, accent, children }) {
  return (
    <div style={{ margin: "10px 0" }}>
      {title && <div style={{ background: accent || P_C, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0" }}>{title}</div>}
      <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11.5, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
    </div>
  );
}

function Checkpoint({ num, children }) {
  return (
    <div className="callout-checkpoint" style={{ margin: "14px 0", padding: "10px 14px", background: "#E8FCE8", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
      <strong>{"🎯"} Checkpoint {num}:</strong> {children}
    </div>
  );
}

function AiOpp({ children }) {
  return (
    <div className="callout-ai" style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>{"✨"} AI Opportunity</div>
      {children}
    </div>
  );
}

function Warn({ children }) {
  return (
    <div className="callout-warn" style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E6", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #EF9F27" }}>
      {"⚠️"} {children}
    </div>
  );
}

function Tip({ children }) {
  return (
    <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>
      {"💡"} {children}
    </div>
  );
}

function Step({ num, title, children }) {
  return (
    <div style={{ margin: "18px 0" }}>
      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--platform-accent, var(--color-text-primary))", margin: "0 0 8px" }}>Step {num}: {title}</h4>
      <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

function Link({ children }) {
  return <span style={{ color: P_C, textDecoration: "underline", cursor: "pointer" }}>{children}</span>;
}

const VStep = ({ num, title, children, last = false }: { num: number | string; title: string; children: React.ReactNode; last?: boolean }) => (
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

function IC({ children }) {
  return <code style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 4, padding: "1px 5px", fontSize: 12 }}>{children}</code>;
}

function PlatformToggle({ platform, setPlatform }) {
  return (
    <div style={{ display: "flex", gap: 0, margin: "12px 0", borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
      {PLATFORMS.map(function(p) {
        var isA = p === "Android";
        var active = platform === p;
        return (
          <button key={p} onClick={function() { setPlatform(p); }} style={{
            padding: "6px 18px", fontSize: 12, fontWeight: 500, border: "none", cursor: "pointer",
            background: active ? (isA ? BLL : GRL) : "var(--color-background-primary)",
            color: active ? (isA ? BL : GR) : "var(--color-text-secondary)"
          }}>{isA ? "🤖 Android" : "🍎 iOS"}</button>
        );
      })}
    </div>
  );
}

/* ====== OVERVIEW ====== */
function Overview({ platform, setPlatform }) {
  var isAndroid = platform === "Android";
  return (
    <div>
      <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 12 }}>
        {"Don't forget to fill out the ✏️"} <Link>Session Survey</Link> at the end of each class session!
      </div>
      <div className="callout-warn" style={{ background: "#FFF8E6", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 16 }}>
        {"🎯"} <strong>REMINDER:</strong> <Link>Capstone Milestone 1</Link> (repo + architecture) is due by the end of this week. See the Capstone tab for details.
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>Unit 7: Calling an LLM from a Mobile App</h2>

      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
        {"This is the week where your apps start to feel like magic. You'll call a real LLM (Claude) from a mobile app, stream the response word by word, explore multimodal AI with rich mobile inputs, and learn the patterns that make AI features feel polished. Both sessions this week are AI-focused."}
      </p>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 10px" }}>This week we will cover:</p>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>How LLM APIs work: requests, responses, and streaming</li>
          <li>{isAndroid ? "Making API calls with OkHttp + coroutines, handling chunked/streaming responses" : "Making API calls with URLSession async/await, streaming with AsyncSequence"}</li>
          <li>Building a chat screen that streams Claude responses in real time</li>
          <li>{"Multimodal AI: using mobile as a rich input device (camera, microphone, sensors)"}</li>
          <li>{"Camera and photo gallery integration on " + platform}</li>
        </ul>
      </div>

      <div style={{ marginTop: 20, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>Session Info</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>{"📅"} {"See your cohort's schedule for session times"}</li>
          <li>{"↗"} <Link>Session Zoom Link</Link> | Passcode: <strong>codepath</strong></li>
          <li>{"📊"} <Link>Link to Slides</Link></li>
        </ul>
        <strong style={{ display: "block", marginTop: 10 }}>Upcoming Due Dates</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>{"📬"} <Link>Project 7</Link> {"(AI apps) due by next week's session"}</li>
          <li>{"🏗"} <Link>Capstone M1</Link> (repo + architecture) due by end of this week</li>
        </ul>
      </div>

      <div style={{ marginTop: 16, padding: "14px", background: isAndroid ? BLL : GRL, borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong style={{ color: isAndroid ? BL : GR }}>
          {isAndroid ? "🤖 Android Track" : "🍎 iOS Track"} {"—"} This Week
        </strong>
        <p style={{ margin: "6px 0 0", color: isAndroid ? BL : GR }}>
          {isAndroid
            ? "You will use OkHttp for streaming HTTP responses and Kotlin coroutines to process chunks as they arrive. The UI will update in real time using StateFlow collected in Compose."
            : "You will use URLSession with async/await and AsyncSequence (or AsyncBytes) to process streaming responses. The UI will update in real time using @Published properties observed by SwiftUI."
          }
        </p>
      </div>

      <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"📦 This unit at a glance"}</strong>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
          {[
            { label: "Session 1", val: "Build a streaming chat screen that calls the Claude API — text in, streamed response out word by word." },
            { label: "Session 2", val: "Multimodal AI — send photos from camera or gallery to Claude for image description." },
            { label: "Project 7", val: "Two complete AI-powered mini-apps: a chat app (Session 1) and a photo describer (Session 2)." },
            { label: "Capstone M1", val: "Repo + architecture scaffolded. Every team member has at least one commit. Due end of week." },
          ].map(function(item) { return (
            <div key={item.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
            </div>
          ); })}
        </div>
      </div>
    </div>
  );
}

/* ====== LAB SESSION 1 ====== */
function LabSession1({ platform }) {
  var isAndroid = platform === "Android";
  return (
    <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 7 Lab: Build a Chat Screen with Claude</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 4px" }}>
        {"In this lab you'll build a standalone chat app that calls the Claude API and streams the response word by word. This is a new mini-project."}
      </p>
      <div style={{ display: "inline-block", fontSize: 11, fontWeight: 500, padding: "2px 9px", borderRadius: 20, background: AML, color: AM, marginBottom: 12 }}>AI feature</div>

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"🎯"} Goals</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
          <li>Understand how LLM APIs work (request, streaming response)</li>
          <li>Securely store and use an API key in a mobile app</li>
          <li>Make a POST request to the Claude Messages API</li>
          <li>Stream the response and display it character by character</li>
          <li>Build a basic chat interface with a text input and message bubbles</li>
        </ul>
      </div>

      <Step num={0} title="Create a new project (~3 min)">
        <p>Create a fresh {isAndroid ? "Android" : "iOS"} project for this lab — it's a standalone mini-app, not an extension of a previous project.</p>
        {isAndroid ? (
          <div>
            <p>In Android Studio: <strong>File → New → New Project</strong>. Select the <strong>Empty Activity</strong> template. Set the name to <IC>ChatWithClaude</IC>, the package to something like <IC>com.yourname.chatwithclaude</IC>, and the minimum SDK to <strong>API 26</strong> (covers ~97% of active devices). Make sure <strong>Kotlin DSL</strong> is selected for the build script. Click Finish and wait for the initial Gradle sync.</p>
          </div>
        ) : (
          <div>
            <p>In Xcode: <strong>File → New → Project</strong>. Select the <strong>App</strong> template under iOS. Set the product name to <IC>ChatWithClaude</IC>, confirm the interface is <strong>SwiftUI</strong> and language is <strong>Swift</strong>. Choose a location and click Create.</p>
          </div>
        )}
        <Warn>{"You'll need a Claude API key for this lab. Go to console.anthropic.com, sign in or create a free account, and click API Keys → Create Key. Copy the key — you won't be able to see it again after leaving the page."}</Warn>
        <Checkpoint num={0}>Project created, builds clean, and the default screen appears in the {isAndroid ? "emulator" : "simulator"}.</Checkpoint>
      </Step>

      <Step num={1} title="Store your API key securely (~5 min)">
        <p>Never hardcode an API key directly in source code — not even temporarily. Once a key is pushed to a public GitHub repo, automated bots find it <strong>within minutes</strong>, start making API calls on your account, and Anthropic will suspend the key (and potentially your account). The fix below keeps the key out of version control entirely.</p>
        {isAndroid ? (
          <div>
            <p><strong>1. Add the OkHttp dependency.</strong> This lab uses OkHttp for HTTP requests and streaming. Open <IC>build.gradle.kts (app)</IC>, add the following inside the <IC>dependencies {"{}"}</IC> block, then click <strong>Sync Now</strong>:</p>
            <CodeB title="build.gradle.kts (app) — dependencies" accent={BL}>{`implementation("com.squareup.okhttp3:okhttp:4.12.0")`}</CodeB>
            <p><strong>2. Store the key in local.properties.</strong> This file is already in your <IC>.gitignore</IC> by default — Android Studio creates it automatically and never commits it. Add your key at the bottom:</p>
            <CodeB title="local.properties (NOT committed to Git)" accent={BL}>{"CLAUDE_API_KEY=sk-ant-your-key-here"}</CodeB>
            <p><strong>3. Expose the key via BuildConfig.</strong> Add the following to the <IC>android {"{"} defaultConfig {"}"}</IC> block in <IC>build.gradle.kts</IC>. This reads the key at build time and bakes it into a generated class — no raw string in your source.</p>
            <CodeB title="build.gradle.kts (app)" accent={BL}>{`android {
    defaultConfig {
        val props = project.rootProject.file("local.properties")
            .readLines().associate {
                val (k, v) = it.split("=", limit = 2)
                k.trim() to v.trim()
            }
        buildConfigField("String", "CLAUDE_API_KEY",
            "\\"" + (props["CLAUDE_API_KEY"] ?: "") + "\\"")
    }
    buildFeatures { buildConfig = true }
}
// Access in code: BuildConfig.CLAUDE_API_KEY`}</CodeB>
            <p>Sync Gradle. Android Studio will generate the <IC>BuildConfig</IC> class — you'll see it autocomplete when you type <IC>BuildConfig.</IC> in your code.</p>
          </div>
        ) : (
          <div>
            <p><strong>1. Create Secrets.xcconfig.</strong> In Xcode, go to <strong>File → New → File → Configuration Settings File</strong>. Name it <IC>Secrets</IC> and save it at the root of your project. Add your key:</p>
            <CodeB title="Secrets.xcconfig (NOT committed to Git)" accent={GR}>{"CLAUDE_API_KEY = sk-ant-your-key-here"}</CodeB>
            <p><strong>2. Connect the xcconfig to your project.</strong> In the Project Navigator, click the blue project icon at the top. Select your project (not the target) → <strong>Info</strong> tab. Under <strong>Configurations</strong>, expand <strong>Debug</strong> and <strong>Release</strong> — click each one and set it to <IC>Secrets</IC> from the dropdown. Without this step, <IC>$(CLAUDE_API_KEY)</IC> never resolves.</p>
            <p><strong>3. Expose the key via Info.plist.</strong> Open <IC>Info.plist</IC>, add a new row with key <IC>CLAUDE_API_KEY</IC> and value <IC>$(CLAUDE_API_KEY)</IC>. Xcode will substitute the real value at build time.</p>
            <CodeB title="Info.plist entry" accent={GR}>{`<key>CLAUDE_API_KEY</key>
<string>$(CLAUDE_API_KEY)</string>

// Access in code:
Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String`}</CodeB>
            <p><strong>4. Add Secrets.xcconfig to .gitignore.</strong> If a <IC>.gitignore</IC> doesn't exist yet, create one at the project root. Add the line: <IC>Secrets.xcconfig</IC></p>
          </div>
        )}
        <Warn>{"If you accidentally push your key, go to console.anthropic.com → API Keys and delete it immediately, then create a new one. Don't just remove it from the next commit — it's already in git history."}</Warn>
        <Checkpoint num={1}>Your API key is stored securely and accessible via {isAndroid ? "BuildConfig.CLAUDE_API_KEY" : "Bundle.main.infoDictionary"}. It is NOT in any committed file. Verify by searching the project for "sk-ant" — it should return zero results.</Checkpoint>
      </Step>

      <Step num={2} title="Build the chat UI (~10 min)">
        <p>Build a simple chat interface: a scrollable message list and a text input at the bottom. We'll build it in three pieces — the data model, the message bubble, and the full screen layout. This mirrors MVVM: the screen only renders state; all API logic stays in the ViewModel you'll build next.</p>

        <VStep num="a" title="Define the ChatMessage data model">
          <p>At the top of <IC>{isAndroid ? "ChatScreen.kt" : "ChatScreen.swift"}</IC>, define your message model. It needs two fields: <IC>role</IC> (either <IC>"user"</IC> or <IC>"assistant"</IC> — these are the exact strings the Claude API expects) and <IC>content</IC> (the message text).{isAndroid ? " Use a data class so Kotlin generates equals/hashCode for free." : " Conform to Identifiable so SwiftUI's ForEach can distinguish messages."}</p>
          <Section title="✅ Check your work — show me the complete file so far">
            {isAndroid ? (
              <CodeB title="Kotlin — ChatScreen.kt" accent={BL}>{`data class ChatMessage(
    val role: String,   // "user" or "assistant"
    val content: String
)`}</CodeB>
            ) : (
              <CodeB title="Swift — ChatScreen.swift" accent={GR}>{`import SwiftUI

struct ChatMessage: Identifiable {
    let id = UUID()
    let role: String   // "user" or "assistant"
    let content: String
}`}</CodeB>
            )}
          </Section>
        </VStep>

        <VStep num="b" title="Build the MessageBubble component">
          <p>Add a <IC>MessageBubble</IC> {isAndroid ? "composable" : "view"} below the data model. User messages should be right-aligned with a purple background and white text; assistant messages should be left-aligned with a light gray background. Cap the bubble width at 75% of the screen so long messages don't stretch edge-to-edge.{isAndroid ? " Use <IC>widthIn(max = ...)</IC> for the cap, <IC>RoundedCornerShape(12.dp)</IC> for the corners." : " Use <IC>Spacer(minLength: 60)</IC> on the opposite side to push bubbles left or right."}</p>
          <Section title="✅ Check your work — show me the complete file so far">
            {isAndroid ? (
              <CodeB title="Kotlin — ChatScreen.kt" accent={BL}>{`data class ChatMessage(
    val role: String,
    val content: String
)

@Composable
fun MessageBubble(msg: ChatMessage) {
    val isUser = msg.role == "user"
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = if (isUser) Arrangement.End else Arrangement.Start
    ) {
        Box(
            modifier = Modifier
                .widthIn(max = (LocalConfiguration.current.screenWidthDp * 0.75f).dp)
                .background(
                    if (isUser) Color(0xFF534AB7) else Color(0xFFE8E8E8),
                    RoundedCornerShape(12.dp)
                )
                .padding(12.dp)
        ) {
            Text(
                text = msg.content,
                color = if (isUser) Color.White else Color.Black,
                fontSize = 14.sp, lineHeight = 20.sp
            )
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — ChatScreen.swift" accent={GR}>{`import SwiftUI

struct ChatMessage: Identifiable {
    let id = UUID()
    let role: String
    let content: String
}

struct MessageBubble: View {
    let message: ChatMessage
    var body: some View {
        HStack {
            if message.role == "user" { Spacer(minLength: 60) }
            Text(message.content)
                .padding(12)
                .background(
                    message.role == "user"
                        ? Color(red: 0.33, green: 0.29, blue: 0.72)
                        : Color(.systemGray5)
                )
                .foregroundColor(message.role == "user" ? .white : .primary)
                .clipShape(RoundedRectangle(cornerRadius: 12))
            if message.role == "assistant" { Spacer(minLength: 60) }
        }
    }
}`}</CodeB>
            )}
          </Section>
        </VStep>

        <VStep num="c" title="Build the ChatScreen layout" last>
          <p>Add the <IC>ChatScreen</IC> {isAndroid ? "composable" : "view"} at the bottom of the file. It takes a <IC>ChatViewModel</IC> parameter (you'll create this next). The layout has two regions: a scrollable message list that fills all available space, and a fixed input row pinned to the bottom. {isAndroid ? "Use <IC>Modifier.weight(1f)</IC> on the LazyColumn — this tells Compose to give the list all remaining vertical space after the Row is measured, which naturally pins the input to the bottom. Set <IC>reverseLayout = true</IC> so the most recent message is always visible at the bottom without any manual scroll code." : "Inside the VStack, the ScrollView needs to be told to expand. Add <IC>.frame(maxHeight: .infinity)</IC> to the ScrollView, or place a <IC>Spacer()</IC> between the scroll area and the HStack. Without this, SwiftUI splits the space equally and the input floats in the middle."}</p>
          <Section title="✅ Check your work — show me the complete ChatScreen file">
            {isAndroid ? (
              <CodeB title="Kotlin — ChatScreen.kt (complete)" accent={BL}>{`data class ChatMessage(
    val role: String,
    val content: String
)

@Composable
fun MessageBubble(msg: ChatMessage) {
    val isUser = msg.role == "user"
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = if (isUser) Arrangement.End else Arrangement.Start
    ) {
        Box(
            modifier = Modifier
                .widthIn(max = (LocalConfiguration.current.screenWidthDp * 0.75f).dp)
                .background(
                    if (isUser) Color(0xFF534AB7) else Color(0xFFE8E8E8),
                    RoundedCornerShape(12.dp)
                )
                .padding(12.dp)
        ) {
            Text(
                text = msg.content,
                color = if (isUser) Color.White else Color.Black,
                fontSize = 14.sp, lineHeight = 20.sp
            )
        }
    }
}

@Composable
fun ChatScreen(viewModel: ChatViewModel = viewModel()) {
    val messages by viewModel.messages.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()
    var input by remember { mutableStateOf("") }

    Column(modifier = Modifier.fillMaxSize()) {
        LazyColumn(
            modifier = Modifier.weight(1f).padding(16.dp),
            reverseLayout = true
        ) {
            items(messages.reversed()) { msg ->
                MessageBubble(msg)
                Spacer(Modifier.height(8.dp))
            }
        }
        Row(modifier = Modifier.padding(12.dp)) {
            TextField(
                value = input,
                onValueChange = { input = it },
                modifier = Modifier.weight(1f),
                placeholder = { Text("Ask Claude...") }
            )
            Spacer(Modifier.width(8.dp))
            Button(
                onClick = {
                    viewModel.sendMessage(input)
                    input = ""
                },
                enabled = input.isNotBlank() && !isLoading
            ) { Text("Send") }
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — ChatScreen.swift (complete)" accent={GR}>{`import SwiftUI

struct ChatMessage: Identifiable {
    let id = UUID()
    let role: String
    let content: String
}

struct MessageBubble: View {
    let message: ChatMessage
    var body: some View {
        HStack {
            if message.role == "user" { Spacer(minLength: 60) }
            Text(message.content)
                .padding(12)
                .background(
                    message.role == "user"
                        ? Color(red: 0.33, green: 0.29, blue: 0.72)
                        : Color(.systemGray5)
                )
                .foregroundColor(message.role == "user" ? .white : .primary)
                .clipShape(RoundedRectangle(cornerRadius: 12))
            if message.role == "assistant" { Spacer(minLength: 60) }
        }
    }
}

struct ChatScreen: View {
    @StateObject private var viewModel = ChatViewModel()
    @State private var input = ""

    var body: some View {
        VStack {
            ScrollView {
                LazyVStack(spacing: 8) {
                    ForEach(viewModel.messages) { msg in
                        MessageBubble(message: msg)
                    }
                }.padding(16)
            }
            .frame(maxHeight: .infinity)
            HStack {
                TextField("Ask Claude...", text: $input)
                    .textFieldStyle(.roundedBorder)
                Button("Send") {
                    viewModel.sendMessage(input)
                    input = ""
                }
                .disabled(input.isEmpty || viewModel.isLoading)
            }.padding(12)
        }
    }
}`}</CodeB>
            )}
          </Section>
          <Checkpoint num={2}>You have a chat UI with a text input, a send button, and a scrollable message area. Nothing calls the API yet.</Checkpoint>
        </VStep>
      </Step>

      <Step num={3} title="Call the Claude API (~15 min)">
        <p>{"Wire up the ViewModel to call the Claude Messages API. We'll build it in three parts: state setup, request construction, and response parsing. We'll start non-streaming — one response all at once — then add streaming in the next step."}</p>

        <VStep num="a" title="Set up the ViewModel state and HTTP client">
          <p>Create <IC>{isAndroid ? "ChatViewModel.kt" : "ChatViewModel.swift"}</IC>. The ViewModel is the middleman between the UI and the API — the screen observes its state and calls its functions, but never touches the network directly. This is the MVVM separation from Week 6 applied to a real AI feature. {isAndroid ? "Extend ViewModel and declare two MutableStateFlow properties: one for the list of messages and one for a loading boolean. Expose read-only StateFlow versions for the UI to observe — the private one is for writing, the public one is for reading. Also create a private OkHttpClient — this is the HTTP library that handles your network calls." : "Mark the class @MainActor so all @Published updates happen on the main thread automatically (no manual DispatchQueue.main needed). Declare two @Published properties: messages array and a loading boolean. Add a computed property that reads your API key from Info.plist."}</p>
          <Section title="✅ Check your work — show me the complete file so far">
            {isAndroid ? (
              <CodeB title="Kotlin — ChatViewModel.kt" accent={BL}>{`class ChatViewModel : ViewModel() {
    private val _messages = MutableStateFlow<List<ChatMessage>>(emptyList())
    val messages: StateFlow<List<ChatMessage>> = _messages
    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading
    private val client = OkHttpClient()
}`}</CodeB>
            ) : (
              <CodeB title="Swift — ChatViewModel.swift" accent={GR}>{`import Foundation

@MainActor
class ChatViewModel: ObservableObject {
    @Published var messages: [ChatMessage] = []
    @Published var isLoading = false

    private var apiKey: String {
        Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String ?? ""
    }
}`}</CodeB>
            )}
          </Section>
        </VStep>

        <VStep num="b" title="Build and send the API request">
          <p><strong>One important concept first: Claude is stateless.</strong> Unlike a human conversation partner, Claude has no memory between requests. Every time you send a message, you must include the <em>full conversation history</em> — all previous user and assistant turns — so Claude knows the context. This is why the <IC>messages</IC> array grows with every turn rather than just containing the latest message.</p>
          <p>Add the <IC>sendMessage</IC> function. It should: (1) append the user's message to the messages list, (2) set loading to true, (3) build a POST request to <IC>https://api.anthropic.com/v1/messages</IC> with three required headers — <IC>x-api-key</IC> (your key), <IC>anthropic-version: 2023-06-01</IC>, and <IC>content-type: application/json</IC>. The JSON body needs <IC>model</IC>, <IC>max_tokens</IC>, and a <IC>messages</IC> array built from your entire conversation history so far. {isAndroid ? "Wrap the network call in <IC>viewModelScope.launch(Dispatchers.IO)</IC>. Android forbids network calls on the main thread — if you try, it throws a <IC>NetworkOnMainThreadException</IC> and crashes the app immediately. <IC>Dispatchers.IO</IC> moves the work to a background thread." : "Wrap everything in a <IC>Task {}</IC> block — Swift's async/await suspends the current task while waiting for the network, keeping the main thread free to update the UI."}</p>
          <Section title="💡 Show me the message array format">
            <CodeB title="Required JSON shape" accent={isAndroid ? BL : GR}>{`{
  "model": "claude-sonnet-4-5",
  "max_tokens": 1024,
  "messages": [
    { "role": "user", "content": "Hello!" },
    { "role": "assistant", "content": "Hi there!" },
    { "role": "user", "content": "What is 2+2?" }
  ]
}`}</CodeB>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>All three turns are sent every time. Claude reads the full history to understand the context of the latest question.</p>
          </Section>
          <Section title="✅ Check your work — show me the complete file so far">
            {isAndroid ? (
              <CodeB title="Kotlin — ChatViewModel.kt" accent={BL}>{`class ChatViewModel : ViewModel() {
    private val _messages = MutableStateFlow<List<ChatMessage>>(emptyList())
    val messages: StateFlow<List<ChatMessage>> = _messages
    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading
    private val client = OkHttpClient()

    fun sendMessage(userInput: String) {
        _messages.value = _messages.value + ChatMessage("user", userInput)
        _isLoading.value = true

        viewModelScope.launch(Dispatchers.IO) {
            try {
                val messagesJson = _messages.value.joinToString(",") { msg ->
                    """{"role":"${'$'}{msg.role}","content":"${'$'}{msg.content}"}"""
                }
                val body = """{"model":"claude-sonnet-4-5","max_tokens":1024,"messages":[${'$'}messagesJson]}"""
                    .toRequestBody("application/json".toMediaType())

                val request = Request.Builder()
                    .url("https://api.anthropic.com/v1/messages")
                    .post(body)
                    .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
                    .addHeader("anthropic-version", "2023-06-01")
                    .addHeader("content-type", "application/json")
                    .build()

                // response parsing goes here (next sub-step)
            } catch (e: Exception) {
                _messages.value = _messages.value +
                    ChatMessage("assistant", "Error: " + e.message)
            } finally {
                _isLoading.value = false
            }
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — ChatViewModel.swift" accent={GR}>{`import Foundation

@MainActor
class ChatViewModel: ObservableObject {
    @Published var messages: [ChatMessage] = []
    @Published var isLoading = false

    private var apiKey: String {
        Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String ?? ""
    }

    func sendMessage(_ userInput: String) {
        messages.append(ChatMessage(role: "user", content: userInput))
        isLoading = true

        Task {
            do {
                var request = URLRequest(
                    url: URL(string: "https://api.anthropic.com/v1/messages")!)
                request.httpMethod = "POST"
                request.setValue(apiKey, forHTTPHeaderField: "x-api-key")
                request.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
                request.setValue("application/json", forHTTPHeaderField: "content-type")

                let body: [String: Any] = [
                    "model": "claude-sonnet-4-5",
                    "max_tokens": 1024,
                    "messages": messages.map { ["role": $0.role, "content": $0.content] }
                ]
                request.httpBody = try JSONSerialization.data(withJSONObject: body)

                // response parsing goes here (next sub-step)
            } catch {
                messages.append(ChatMessage(role: "assistant",
                    content: "Error: " + error.localizedDescription))
            }
            isLoading = false
        }
    }
}`}</CodeB>
            )}
          </Section>
        </VStep>

        <VStep num="c" title="Parse the response and display Claude's reply" last>
          <p>Replace the <IC>// response parsing goes here</IC> comment with actual parsing. The Claude API returns JSON with a <IC>content</IC> array — each item has a <IC>type</IC> and <IC>text</IC> field. Grab <IC>content[0].text</IC> and append it as an assistant message. {isAndroid ? "Use <IC>JSONObject</IC> from <IC>org.json</IC> — it's built into Android. Call <IC>response.body?.string()</IC> to get the raw JSON string first." : "Use <IC>JSONSerialization.jsonObject(with:)</IC> and cast through the dictionary chain to reach the text."}</p>
          <Section title="💡 Show me the response JSON shape">
            <CodeB title="Claude API response" accent={isAndroid ? BL : GR}>{`{
  "content": [{ "type": "text", "text": "Claude's reply here" }],
  "model": "claude-sonnet-4-5",
  "usage": { "input_tokens": 12, "output_tokens": 34 }
}`}</CodeB>
          </Section>
          <Section title="✅ Check your work — show me the complete ChatViewModel file">
            {isAndroid ? (
              <CodeB title="Kotlin — ChatViewModel.kt (complete)" accent={BL}>{`class ChatViewModel : ViewModel() {
    private val _messages = MutableStateFlow<List<ChatMessage>>(emptyList())
    val messages: StateFlow<List<ChatMessage>> = _messages
    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading
    private val client = OkHttpClient()

    fun sendMessage(userInput: String) {
        _messages.value = _messages.value + ChatMessage("user", userInput)
        _isLoading.value = true

        viewModelScope.launch(Dispatchers.IO) {
            try {
                val messagesJson = _messages.value.joinToString(",") { msg ->
                    """{"role":"${'$'}{msg.role}","content":"${'$'}{msg.content}"}"""
                }
                val body = """{"model":"claude-sonnet-4-5","max_tokens":1024,"messages":[${'$'}messagesJson]}"""
                    .toRequestBody("application/json".toMediaType())

                val request = Request.Builder()
                    .url("https://api.anthropic.com/v1/messages")
                    .post(body)
                    .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
                    .addHeader("anthropic-version", "2023-06-01")
                    .addHeader("content-type", "application/json")
                    .build()

                val respStr = client.newCall(request).execute().body?.string() ?: ""
                val text = JSONObject(respStr)
                    .getJSONArray("content")
                    .getJSONObject(0)
                    .getString("text")
                _messages.value = _messages.value + ChatMessage("assistant", text)
            } catch (e: Exception) {
                _messages.value = _messages.value +
                    ChatMessage("assistant", "Error: " + e.message)
            } finally {
                _isLoading.value = false
            }
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — ChatViewModel.swift (complete)" accent={GR}>{`import Foundation

@MainActor
class ChatViewModel: ObservableObject {
    @Published var messages: [ChatMessage] = []
    @Published var isLoading = false

    private var apiKey: String {
        Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String ?? ""
    }

    func sendMessage(_ userInput: String) {
        messages.append(ChatMessage(role: "user", content: userInput))
        isLoading = true

        Task {
            do {
                var request = URLRequest(
                    url: URL(string: "https://api.anthropic.com/v1/messages")!)
                request.httpMethod = "POST"
                request.setValue(apiKey, forHTTPHeaderField: "x-api-key")
                request.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
                request.setValue("application/json", forHTTPHeaderField: "content-type")

                let body: [String: Any] = [
                    "model": "claude-sonnet-4-5",
                    "max_tokens": 1024,
                    "messages": messages.map { ["role": $0.role, "content": $0.content] }
                ]
                request.httpBody = try JSONSerialization.data(withJSONObject: body)

                let (data, _) = try await URLSession.shared.data(for: request)
                if let json = try JSONSerialization.jsonObject(with: data) as? [String: Any],
                   let content = json["content"] as? [[String: Any]],
                   let text = content.first?["text"] as? String {
                    messages.append(ChatMessage(role: "assistant", content: text))
                }
            } catch {
                messages.append(ChatMessage(role: "assistant",
                    content: "Error: " + error.localizedDescription))
            }
            isLoading = false
        }
    }
}`}</CodeB>
            )}
          </Section>
          <Checkpoint num={3}>{"Type a message and tap Send. After a moment, Claude's response appears as a new bubble. The full response appears at once — we'll add streaming next."}</Checkpoint>
        </VStep>
      </Step>

      <Step num={4} title="Add streaming (~12 min)">
        <p>{"Right now the response appears all at once. Real chat apps stream the response word by word. The key change: add \"stream\": true to the request body, then read the response as a series of Server-Sent Events (SSE). Each event contains a small delta — a word or partial word — which you append to the last message in real time."}</p>

        <VStep num="a" title="Enable streaming in the request and create a placeholder message">
          <p>In your <IC>sendMessage</IC> function, make two changes to the request body: add <IC>"stream": true</IC> to the JSON. Then, instead of waiting for a complete response, first append an empty assistant message to the list — this is the bubble that will fill in as chunks arrive. {isAndroid ? "Switch from <IC>execute().body?.string()</IC> to <IC>execute().body?.source()</IC> — this gives you a streaming <IC>BufferedSource</IC> you can read line by line." : "Switch from <IC>URLSession.shared.data(for:)</IC> to <IC>URLSession.shared.bytes(for:)</IC> — this returns an <IC>AsyncBytes</IC> you can iterate line by line."}</p>
          <Section title="✅ Check your work — show me the complete ChatViewModel so far">
            {isAndroid ? (
              <CodeB title="Kotlin — ChatViewModel.kt" accent={BL}>{`fun sendMessage(userInput: String) {
    _messages.value = _messages.value + ChatMessage("user", userInput)
    _isLoading.value = true

    viewModelScope.launch(Dispatchers.IO) {
        try {
            val messagesJson = _messages.value.joinToString(",") { msg ->
                """{"role":"${'$'}{msg.role}","content":"${'$'}{msg.content}"}"""
            }
            val body = """{"model":"claude-sonnet-4-5","max_tokens":1024,"stream":true,"messages":[${'$'}messagesJson]}"""
                .toRequestBody("application/json".toMediaType())

            val request = Request.Builder()
                .url("https://api.anthropic.com/v1/messages")
                .post(body)
                .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
                .addHeader("anthropic-version", "2023-06-01")
                .addHeader("content-type", "application/json")
                .build()

            val source = client.newCall(request).execute().body?.source()
                ?: return@launch

            // Add empty assistant message — we'll fill it in chunk by chunk
            _messages.value = _messages.value + ChatMessage("assistant", "")

            // SSE processing goes here (next sub-step)
        } catch (e: Exception) {
            _messages.value = _messages.value +
                ChatMessage("assistant", "Error: " + e.message)
        } finally {
            _isLoading.value = false
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — ChatViewModel.swift" accent={GR}>{`func sendMessage(_ userInput: String) {
    messages.append(ChatMessage(role: "user", content: userInput))
    isLoading = true

    Task {
        do {
            var request = URLRequest(
                url: URL(string: "https://api.anthropic.com/v1/messages")!)
            request.httpMethod = "POST"
            request.setValue(apiKey, forHTTPHeaderField: "x-api-key")
            request.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
            request.setValue("application/json", forHTTPHeaderField: "content-type")

            let body: [String: Any] = [
                "model": "claude-sonnet-4-5",
                "max_tokens": 1024,
                "stream": true,
                "messages": messages.map { ["role": $0.role, "content": $0.content] }
            ]
            request.httpBody = try JSONSerialization.data(withJSONObject: body)

            let (bytes, _) = try await URLSession.shared.bytes(for: request)

            // Add empty assistant message — we'll fill it in chunk by chunk
            messages.append(ChatMessage(role: "assistant", content: ""))

            // SSE processing goes here (next sub-step)
        } catch {
            messages.append(ChatMessage(role: "assistant",
                content: "Error: " + error.localizedDescription))
        }
        isLoading = false
    }
}`}</CodeB>
            )}
          </Section>
        </VStep>

        <VStep num="b" title="Process SSE events and append each delta" last>
          <p>Replace the <IC>// SSE processing goes here</IC> comment. The Claude API returns a stream of Server-Sent Events (SSE). You'll need to parse these events and append the text chunks to your UI in real time.</p>
          <ul style={{ paddingLeft: 20, margin: "6px 0 12px", lineHeight: 1.7, fontSize: 13 }}>
            <li><strong>Loop over the stream:</strong> {isAndroid ? "Use a while loop with <IC>source.readUtf8Line()</IC>." : "Iterate with <IC>for try await line in bytes.lines</IC>."}</li>
            <li><strong>Clean the data:</strong> Each line is a raw SSE line. Strip the <IC>"data: "</IC> prefix from the line before parsing it as JSON.</li>
            <li><strong>Filter the events:</strong> Skip empty lines, the <IC>[DONE]</IC> message, and any event where the JSON <IC>type</IC> is not <IC>"content_block_delta"</IC>.</li>
            <li><strong>Extract and append:</strong> For each delta event, pull <IC>delta.text</IC> out of the JSON and append it to the content of the <em>last</em> message in your array.</li>
            <li><strong>Update the UI:</strong> {isAndroid ? "Because <IC>_messages.value</IC> is an immutable list, use <IC>dropLast(1) + last.copy(content = last.content + delta)</IC> to produce an updated copy." : "Use a <IC>guard</IC> chain to safely unwrap the JSON. Replace <IC>messages[lastIndex]</IC> with a new <IC>ChatMessage</IC> carrying the extended content."}</li>
          </ul>
          <Section title="💡 Show me the SSE event format">
            <CodeB title="Example SSE lines from Claude streaming API" accent={isAndroid ? BL : GR}>{`data: {"type":"content_block_start","index":0,...}

data: {"type":"content_block_delta","index":0,"delta":{"type":"text_delta","text":"Hello"}}

data: {"type":"content_block_delta","index":0,"delta":{"type":"text_delta","text":" there"}}

data: {"type":"message_stop"}

data: [DONE]`}</CodeB>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>You want lines where <IC>type</IC> is <IC>"content_block_delta"</IC>. Extract <IC>delta.text</IC> from those and ignore the rest.</p>
          </Section>
          <Section title="✅ Check your work — show me the complete ChatViewModel">
            {isAndroid ? (
              <CodeB title="Kotlin — ChatViewModel.kt (complete with streaming)" accent={BL}>{`class ChatViewModel : ViewModel() {
    private val _messages = MutableStateFlow<List<ChatMessage>>(emptyList())
    val messages: StateFlow<List<ChatMessage>> = _messages
    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading
    private val client = OkHttpClient()

    fun sendMessage(userInput: String) {
        _messages.value = _messages.value + ChatMessage("user", userInput)
        _isLoading.value = true

        viewModelScope.launch(Dispatchers.IO) {
            try {
                val messagesJson = _messages.value.joinToString(",") { msg ->
                    """{"role":"${'$'}{msg.role}","content":"${'$'}{msg.content}"}"""
                }
                val body = """{"model":"claude-sonnet-4-5","max_tokens":1024,"stream":true,"messages":[${'$'}messagesJson]}"""
                    .toRequestBody("application/json".toMediaType())

                val request = Request.Builder()
                    .url("https://api.anthropic.com/v1/messages")
                    .post(body)
                    .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
                    .addHeader("anthropic-version", "2023-06-01")
                    .addHeader("content-type", "application/json")
                    .build()

                val source = client.newCall(request).execute().body?.source()
                    ?: return@launch
                _messages.value = _messages.value + ChatMessage("assistant", "")

                source.use { src ->
                    while (!src.exhausted()) {
                        val line = src.readUtf8Line() ?: break
                        if (!line.startsWith("data: ")) continue
                        val data = line.removePrefix("data: ")
                        if (data == "[DONE]") break
                        val json = JSONObject(data)
                        if (json.optString("type") != "content_block_delta") continue
                        val delta = json.optJSONObject("delta")?.optString("text") ?: continue
                        val current = _messages.value
                        val last = current.last()
                        _messages.value = current.dropLast(1) +
                            last.copy(content = last.content + delta)
                    }
                }
            } catch (e: Exception) {
                _messages.value = _messages.value +
                    ChatMessage("assistant", "Error: " + e.message)
            } finally {
                _isLoading.value = false
            }
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — ChatViewModel.swift (complete with streaming)" accent={GR}>{`import Foundation

@MainActor
class ChatViewModel: ObservableObject {
    @Published var messages: [ChatMessage] = []
    @Published var isLoading = false

    private var apiKey: String {
        Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String ?? ""
    }

    func sendMessage(_ userInput: String) {
        messages.append(ChatMessage(role: "user", content: userInput))
        isLoading = true

        Task {
            do {
                var request = URLRequest(
                    url: URL(string: "https://api.anthropic.com/v1/messages")!)
                request.httpMethod = "POST"
                request.setValue(apiKey, forHTTPHeaderField: "x-api-key")
                request.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
                request.setValue("application/json", forHTTPHeaderField: "content-type")

                let body: [String: Any] = [
                    "model": "claude-sonnet-4-5",
                    "max_tokens": 1024,
                    "stream": true,
                    "messages": messages.map { ["role": $0.role, "content": $0.content] }
                ]
                request.httpBody = try JSONSerialization.data(withJSONObject: body)

                let (bytes, _) = try await URLSession.shared.bytes(for: request)
                messages.append(ChatMessage(role: "assistant", content: ""))

                for try await line in bytes.lines {
                    guard line.hasPrefix("data: ") else { continue }
                    let dataStr = String(line.dropFirst(6))
                    if dataStr == "[DONE]" { break }
                    guard
                        let data = dataStr.data(using: .utf8),
                        let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                        json["type"] as? String == "content_block_delta",
                        let delta = (json["delta"] as? [String: Any])?["text"] as? String
                    else { continue }
                    let lastIndex = messages.count - 1
                    messages[lastIndex] = ChatMessage(
                        role: "assistant",
                        content: messages[lastIndex].content + delta
                    )
                }
            } catch {
                messages.append(ChatMessage(role: "assistant",
                    content: "Error: " + error.localizedDescription))
            }
            isLoading = false
        }
    }
}`}</CodeB>
            )}
          </Section>
          <Checkpoint num={4}>{"Send a message. Claude's response should now appear word by word as it streams in. This is the magic moment!"}</Checkpoint>
        </VStep>
      </Step>

      <Step num={5} title="Add a typing indicator (~5 min)">
        <p>Right now when a user taps Send, nothing happens visually until the first chunk arrives — the UI feels broken. Real chat apps show a "..." or "thinking" indicator immediately. This is also a <strong>required feature</strong> for Project 7.</p>
        <p>Your <IC>isLoading</IC> state is already set to <IC>true</IC> before the request fires. You just need the UI to react to it. In <IC>ChatScreen</IC>, add a conditional row that shows when <IC>isLoading</IC> is true — display it at the bottom of the message list, styled like an assistant bubble with the text <IC>"..."</IC> or <IC>"Claude is thinking…"</IC>.</p>
        <Tip>{isAndroid ? "In the LazyColumn, add an item {} block at the top (remember: reverseLayout = true, so 'top' renders last) that only shows when isLoading is true." : "In the LazyVStack, add an if viewModel.isLoading block after the ForEach that renders a left-aligned bubble with placeholder text."}</Tip>
        <Section title="✅ Check your work — show me what to add to ChatScreen">
          {isAndroid ? (
            <CodeB title="Kotlin — add inside LazyColumn, before items(...)" accent={BL}>{`LazyColumn(
    modifier = Modifier.weight(1f).padding(16.dp),
    reverseLayout = true
) {
    // Typing indicator — shown at top of reversed list = bottom visually
    if (isLoading) {
        item {
            Row(modifier = Modifier.fillMaxWidth()) {
                Box(
                    modifier = Modifier
                        .background(Color(0xFFE8E8E8), RoundedCornerShape(12.dp))
                        .padding(horizontal = 14.dp, vertical = 10.dp)
                ) {
                    Text("...", fontSize = 18.sp, color = Color.Gray)
                }
            }
            Spacer(Modifier.height(8.dp))
        }
    }
    items(messages.reversed()) { msg ->
        MessageBubble(msg)
        Spacer(Modifier.height(8.dp))
    }
}`}</CodeB>
          ) : (
            <CodeB title="Swift — add inside LazyVStack, after ForEach" accent={GR}>{`LazyVStack(spacing: 8) {
    ForEach(viewModel.messages) { msg in
        MessageBubble(message: msg)
    }
    // Typing indicator
    if viewModel.isLoading {
        HStack {
            Text("Claude is thinking…")
                .padding(12)
                .background(Color(.systemGray5))
                .foregroundColor(.secondary)
                .clipShape(RoundedRectangle(cornerRadius: 12))
            Spacer(minLength: 60)
        }
    }
}.padding(16)`}</CodeB>
          )}
        </Section>
        <Checkpoint num={5}>Tap Send. The typing indicator appears immediately while waiting for the first chunk. It disappears once Claude starts responding.</Checkpoint>
      </Step>

      <Section title={"💡 Hints"}>
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p><strong>{"I'm getting a 401 error"}</strong></p>
          <p style={{ marginLeft: 16 }}>{"Your API key isn't being sent correctly. Double-check that your key accessor returns the actual key (not empty string). Print it temporarily to verify."}</p>
          <p><strong>{"I'm getting a 400 error"}</strong></p>
          <p style={{ marginLeft: 16 }}>{"Your request body is malformed. Make sure messages has correct format: each needs role and content. The anthropic-version header is required."}</p>
          <p><strong>{"Streaming works but the UI doesn't update in real time"}</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Make sure you update _messages.value on each chunk. StateFlow triggers recomposition only when the reference changes." : "Make sure the property is @Published and updates happen on the main actor."}</p>
        </div>
      </Section>

      <Section title={"🚀 Stretch Features"}>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
          <li>Add a system prompt that gives Claude a personality or role</li>
          <li>Add a clear conversation button</li>
          <li>Show model name and token count in a footer</li>
          <li>Add copy-to-clipboard on assistant messages</li>
        </ul>
      </Section>
    </div>
  );
}

/* ====== LAB SESSION 2 ====== */
function LabSession2({ platform }) {
  var isAndroid = platform === "Android";
  return (
    <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 7 Lab: Multimodal AI & Image Description</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 4px" }}>
        {"In this lab, you'll explore Multimodal AI by treating the mobile device as a rich input sensor. You'll build a standalone mini-app that lets users take a photo or pick one from the gallery and send it to Claude as a multimodal message."}
      </p>
      <div style={{ display: "inline-block", fontSize: 11, fontWeight: 500, padding: "2px 9px", borderRadius: 20, background: AML, color: AM, marginBottom: 12 }}>AI feature</div>

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"🎯"} Goals</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
          <li>{"Learn how to send multimodal messages (text + image) to Claude"}</li>
          <li>Access the device camera or photo gallery</li>
          <li>Convert an image to base64 for API transmission</li>
          <li>Display AI-generated image descriptions with loading states</li>
          <li>Understand text-only vs multimodal API calls</li>
        </ul>
      </div>

      <Step num={0} title="Create a new project (~3 min)">
        <p>Create a new {platform} project called <strong>PhotoDescriber</strong>.</p>
        <Checkpoint num={0}>New project created and running.</Checkpoint>
      </Step>

      <Step num={1} title="Set up API key and camera permissions (~5 min)">
        <p>Reuse the same secure API key pattern from Session 1. Then add camera/photo permissions.</p>
        {isAndroid ? (
          <div>
            <CodeB title="AndroidManifest.xml" accent={BL}>{`<uses-permission android:name="android.permission.CAMERA" />
<uses-feature android:name="android.hardware.camera"
    android:required="false" />
<uses-permission
    android:name="android.permission.READ_MEDIA_IMAGES" />`}</CodeB>
            <Tip>{"Use rememberLauncherForActivityResult with ActivityResultContracts.TakePicturePreview() for camera or GetContent() for gallery."}</Tip>
          </div>
        ) : (
          <div>
            <CodeB title="Info.plist permissions" accent={GR}>{`<key>NSCameraUsageDescription</key>
<string>Takes photos for AI description.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Accesses photos for AI description.</string>`}</CodeB>
            <Tip>{"Use PhotosPicker (iOS 16+) for gallery. For camera, wrap UIImagePickerController in UIViewControllerRepresentable."}</Tip>
          </div>
        )}
        <Checkpoint num={1}>API key is set up and camera/photo permissions are declared.</Checkpoint>
      </Step>

      <Step num={2} title="Build the UI (~10 min)">
        <p>Build a screen with a large image preview, camera/gallery buttons, a Describe button, and a description area. We'll build it in three pieces: the ViewModel state, the image preview box, then the action buttons and description display.</p>

        <VStep num="a" title="Set up the PhotoViewModel state">
          <p>Create <IC>{isAndroid ? "PhotoViewModel.kt" : "PhotoViewModel.swift"}</IC>. It needs three observable state properties: the selected image ({isAndroid ? "<IC>Bitmap?</IC>" : "<IC>UIImage?</IC>"}), the description string, and a loading boolean. {isAndroid ? "Use MutableStateFlow for each so Compose can observe them." : "Use @Published so SwiftUI re-renders when any property changes. Mark the class @MainActor."}</p>
          <Section title="✅ Check your work — show me the complete ViewModel file so far">
            {isAndroid ? (
              <CodeB title="Kotlin — PhotoViewModel.kt" accent={BL}>{`class PhotoViewModel : ViewModel() {
    private val _selectedImage = MutableStateFlow<Bitmap?>(null)
    val selectedImage: StateFlow<Bitmap?> = _selectedImage
    private val _description = MutableStateFlow("")
    val description: StateFlow<String> = _description
    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading
    private val client = OkHttpClient()

    fun setImage(bitmap: Bitmap) { _selectedImage.value = bitmap }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — PhotoViewModel.swift" accent={GR}>{`import SwiftUI
import PhotosUI

@MainActor
class PhotoViewModel: ObservableObject {
    @Published var selectedImage: UIImage?
    @Published var description = ""
    @Published var isLoading = false
    @Published var photoItem: PhotosPickerItem? {
        didSet { Task { await loadPhoto() } }
    }

    private var apiKey: String {
        Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String ?? ""
    }

    private func loadPhoto() async {
        guard let item = photoItem,
              let data = try? await item.loadTransferable(type: Data.self),
              let image = UIImage(data: data) else { return }
        selectedImage = image
    }
}`}</CodeB>
            )}
          </Section>
        </VStep>

        <VStep num="b" title="Build the image preview box">
          <p>In <IC>{isAndroid ? "PhotoScreen.kt" : "PhotoScreen.swift"}</IC>, add the screen {isAndroid ? "composable" : "view"} with a 300dp/pt tall image preview at the top. The box should show a light gray placeholder with the text "No photo selected" when empty, and display the image when one is selected. {isAndroid ? "Use a <IC>Box</IC> with <IC>Modifier.fillMaxWidth().height(300.dp)</IC>. Inside, show either an <IC>Image</IC> composable with <IC>ContentScale.Crop</IC> or the placeholder <IC>Text</IC>." : "Use a <IC>ZStack</IC> with a <IC>RoundedRectangle</IC> at height 300 as the background layer, and either an <IC>Image(uiImage:)</IC> or placeholder <IC>Text</IC> on top."}</p>
          <Section title="✅ Check your work — show me the complete file so far">
            {isAndroid ? (
              <CodeB title="Kotlin — PhotoScreen.kt" accent={BL}>{`@Composable
fun PhotoScreen(viewModel: PhotoViewModel = viewModel()) {
    val selectedImage by viewModel.selectedImage.collectAsState()
    val description by viewModel.description.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()

    Column(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Box(
            modifier = Modifier.fillMaxWidth().height(300.dp)
                .background(Color.LightGray, RoundedCornerShape(12.dp)),
            contentAlignment = Alignment.Center
        ) {
            if (selectedImage != null) {
                Image(bitmap = selectedImage!!.asImageBitmap(),
                    contentDescription = "Photo",
                    modifier = Modifier.fillMaxSize()
                        .clip(RoundedCornerShape(12.dp)),
                    contentScale = ContentScale.Crop)
            } else {
                Text("No photo selected", color = Color.Gray)
            }
        }
        // buttons go here (next sub-step)
    }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — PhotoScreen.swift" accent={GR}>{`import SwiftUI
import PhotosUI

struct PhotoScreen: View {
    @StateObject private var viewModel = PhotoViewModel()
    @State private var showCamera = false

    var body: some View {
        ScrollView {
            VStack(spacing: 16) {
                ZStack {
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color.gray.opacity(0.2))
                        .frame(height: 300)
                    if let image = viewModel.selectedImage {
                        Image(uiImage: image).resizable()
                            .scaledToFill().frame(height: 300)
                            .clipShape(RoundedRectangle(cornerRadius: 12))
                    } else {
                        Text("No photo selected").foregroundColor(.gray)
                    }
                }
                // buttons go here (next sub-step)
            }.padding()
        }
    }
}`}</CodeB>
            )}
          </Section>
        </VStep>

        <VStep num="c" title="Add the action buttons and description display" last>
          <p>Below the image preview, add: a row with Take Photo and Gallery buttons, a Describe This Photo button (disabled while loading or when no image is selected), and a text area that shows the description when it's non-empty. {isAndroid ? "Wire up the camera launcher with <IC>rememberLauncherForActivityResult(ActivityResultContracts.TakePicturePreview())</IC> and the gallery with <IC>GetContent()</IC>." : "The Gallery button wraps a <IC>PhotosPicker</IC> — SwiftUI handles the picker sheet automatically. For camera, keep <IC>@State private var showCamera = false</IC> and wire it to a <IC>.sheet</IC> for now."}</p>
          <Section title="✅ Check your work — show me the complete PhotoScreen file">
            {isAndroid ? (
              <CodeB title="Kotlin — PhotoScreen.kt (complete)" accent={BL}>{`@Composable
fun PhotoScreen(viewModel: PhotoViewModel = viewModel()) {
    val selectedImage by viewModel.selectedImage.collectAsState()
    val description by viewModel.description.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()

    val cameraLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.TakePicturePreview()
    ) { bitmap -> bitmap?.let { viewModel.setImage(it) } }
    val galleryLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.GetContent()
    ) { uri ->
        uri?.let {
            // Convert URI to Bitmap and call viewModel.setImage()
        }
    }

    Column(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Box(
            modifier = Modifier.fillMaxWidth().height(300.dp)
                .background(Color.LightGray, RoundedCornerShape(12.dp)),
            contentAlignment = Alignment.Center
        ) {
            if (selectedImage != null) {
                Image(bitmap = selectedImage!!.asImageBitmap(),
                    contentDescription = "Photo",
                    modifier = Modifier.fillMaxSize()
                        .clip(RoundedCornerShape(12.dp)),
                    contentScale = ContentScale.Crop)
            } else {
                Text("No photo selected", color = Color.Gray)
            }
        }
        Spacer(Modifier.height(16.dp))
        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            Button(onClick = { cameraLauncher.launch(null) }) { Text("Take Photo") }
            Button(onClick = { galleryLauncher.launch("image/*") }) { Text("Gallery") }
        }
        Spacer(Modifier.height(12.dp))
        Button(
            onClick = { viewModel.describeImage() },
            enabled = selectedImage != null && !isLoading
        ) { Text(if (isLoading) "Analyzing..." else "Describe This Photo") }
        Spacer(Modifier.height(16.dp))
        if (description.isNotEmpty()) {
            Text(description, fontSize = 14.sp, lineHeight = 22.sp)
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — PhotoScreen.swift (complete)" accent={GR}>{`import SwiftUI
import PhotosUI

struct PhotoScreen: View {
    @StateObject private var viewModel = PhotoViewModel()
    @State private var showCamera = false

    var body: some View {
        ScrollView {
            VStack(spacing: 16) {
                ZStack {
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color.gray.opacity(0.2))
                        .frame(height: 300)
                    if let image = viewModel.selectedImage {
                        Image(uiImage: image).resizable()
                            .scaledToFill().frame(height: 300)
                            .clipShape(RoundedRectangle(cornerRadius: 12))
                    } else {
                        Text("No photo selected").foregroundColor(.gray)
                    }
                }
                HStack(spacing: 12) {
                    Button("Take Photo") { showCamera = true }
                        .buttonStyle(.bordered)
                    PhotosPicker(selection: $viewModel.photoItem, matching: .images) {
                        Text("Gallery")
                    }.buttonStyle(.bordered)
                }
                Button(action: { Task { await viewModel.describeImage() } }) {
                    Text(viewModel.isLoading ? "Analyzing..." : "Describe This Photo")
                }.buttonStyle(.borderedProminent)
                .disabled(viewModel.selectedImage == nil || viewModel.isLoading)

                if !viewModel.description.isEmpty {
                    Text(viewModel.description).font(.body).padding()
                        .background(Color.gray.opacity(0.1)).cornerRadius(8)
                }
            }.padding()
        }
    }
}`}</CodeB>
            )}
          </Section>
          <Checkpoint num={2}>You have a UI with image preview, camera/gallery buttons, and a describe button. Image picker works. Describe button does nothing yet.</Checkpoint>
        </VStep>
      </Step>

      <Step num={3} title="Convert image to base64 (~8 min)">
        <p>{"Claude's vision API accepts images as base64-encoded strings."}</p>
        {isAndroid ? (
          <CodeB title="Kotlin — image to base64" accent={BL}>{`fun bitmapToBase64(bitmap: Bitmap): String {
    val stream = ByteArrayOutputStream()
    bitmap.compress(Bitmap.CompressFormat.JPEG, 80, stream)
    val bytes = stream.toByteArray()
    return Base64.encodeToString(bytes, Base64.NO_WRAP)
}`}</CodeB>
        ) : (
          <CodeB title="Swift — image to base64" accent={GR}>{`func imageToBase64(_ image: UIImage) -> String? {
    guard let data = image.jpegData(compressionQuality: 0.8)
    else { return nil }
    return data.base64EncodedString()
}`}</CodeB>
        )}
        <Warn>{"Large images can be several MB as base64. Compress to JPEG at 80% and consider resizing to max 1024px before encoding."}</Warn>
        <Checkpoint num={3}>You can convert a selected image to base64. Print the first 50 characters to verify.</Checkpoint>
      </Step>

      <Step num={4} title="Send the image via the multimodal API (~12 min)">
        <p>{"The key difference from Session 1: instead of a text-only messages array, you send a multimodal message where content is an array containing both an image block and a text prompt. The API endpoint and headers are identical — only the body shape changes."}</p>

        <VStep num="a" title="Build the multimodal message body">
          <p>Add the <IC>describeImage</IC> function to your ViewModel. Start by encoding the image to base64 (using the helper from Step 3), then build the request body. The key difference is the <IC>messages</IC> array: instead of <IC>{`{ role, content: "text" }`}</IC>, you pass <IC>{`{ role: "user", content: [ imageBlock, textBlock ] }`}</IC>. The image block has <IC>type: "image"</IC> and a <IC>source</IC> object with <IC>type: "base64"</IC>, <IC>media_type: "image/jpeg"</IC>, and <IC>data: b64String</IC>. The text block has <IC>type: "text"</IC> and <IC>text: "Describe this image in detail."</IC></p>
          <Section title="💡 Show me the full multimodal body shape">
            <CodeB title="Multimodal request body (JSON)" accent={isAndroid ? BL : GR}>{`{
  "model": "claude-sonnet-4-5",
  "max_tokens": 1024,
  "messages": [{
    "role": "user",
    "content": [
      {
        "type": "image",
        "source": {
          "type": "base64",
          "media_type": "image/jpeg",
          "data": "<your base64 string>"
        }
      },
      {
        "type": "text",
        "text": "Describe this image in detail."
      }
    ]
  }]
}`}</CodeB>
          </Section>
          <Section title="✅ Check your work — show me the complete ViewModel so far">
            {isAndroid ? (
              <CodeB title="Kotlin — PhotoViewModel.kt" accent={BL}>{`class PhotoViewModel : ViewModel() {
    private val _selectedImage = MutableStateFlow<Bitmap?>(null)
    val selectedImage: StateFlow<Bitmap?> = _selectedImage
    private val _description = MutableStateFlow("")
    val description: StateFlow<String> = _description
    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading
    private val client = OkHttpClient()

    fun setImage(bitmap: Bitmap) { _selectedImage.value = bitmap }

    fun bitmapToBase64(bitmap: Bitmap): String {
        val stream = ByteArrayOutputStream()
        bitmap.compress(Bitmap.CompressFormat.JPEG, 80, stream)
        return Base64.encodeToString(stream.toByteArray(), Base64.NO_WRAP)
    }

    fun describeImage() {
        val bitmap = _selectedImage.value ?: return
        _isLoading.value = true
        _description.value = ""

        viewModelScope.launch(Dispatchers.IO) {
            try {
                val b64 = bitmapToBase64(bitmap)
                val bodyJson = """{"model":"claude-sonnet-4-5","max_tokens":1024,"messages":[{"role":"user","content":[{"type":"image","source":{"type":"base64","media_type":"image/jpeg","data":"${'$'}b64"}},{"type":"text","text":"Describe this image in detail."}]}]}"""
                val body = bodyJson.toRequestBody("application/json".toMediaType())

                val request = Request.Builder()
                    .url("https://api.anthropic.com/v1/messages")
                    .post(body)
                    .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
                    .addHeader("anthropic-version", "2023-06-01")
                    .addHeader("content-type", "application/json")
                    .build()

                // response parsing goes here (next sub-step)
            } catch (e: Exception) {
                _description.value = "Error: " + e.message
            } finally {
                _isLoading.value = false
            }
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — PhotoViewModel.swift" accent={GR}>{`import SwiftUI
import PhotosUI

@MainActor
class PhotoViewModel: ObservableObject {
    @Published var selectedImage: UIImage?
    @Published var description = ""
    @Published var isLoading = false
    @Published var photoItem: PhotosPickerItem? {
        didSet { Task { await loadPhoto() } }
    }

    private var apiKey: String {
        Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String ?? ""
    }

    private func loadPhoto() async {
        guard let item = photoItem,
              let data = try? await item.loadTransferable(type: Data.self),
              let image = UIImage(data: data) else { return }
        selectedImage = image
    }

    func imageToBase64(_ image: UIImage) -> String? {
        image.jpegData(compressionQuality: 0.8)?.base64EncodedString()
    }

    func describeImage() async {
        guard let image = selectedImage,
              let b64 = imageToBase64(image) else { return }
        isLoading = true
        description = ""

        do {
            var request = URLRequest(
                url: URL(string: "https://api.anthropic.com/v1/messages")!)
            request.httpMethod = "POST"
            request.setValue(apiKey, forHTTPHeaderField: "x-api-key")
            request.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
            request.setValue("application/json", forHTTPHeaderField: "content-type")

            let body: [String: Any] = [
                "model": "claude-sonnet-4-5",
                "max_tokens": 1024,
                "messages": [["role": "user", "content": [
                    ["type": "image", "source": [
                        "type": "base64",
                        "media_type": "image/jpeg",
                        "data": b64]],
                    ["type": "text", "text": "Describe this image in detail."]
                ]]]
            ]
            request.httpBody = try JSONSerialization.data(withJSONObject: body)

            // response parsing goes here (next sub-step)
        } catch {
            description = "Error: " + error.localizedDescription
        }
        isLoading = false
    }
}`}</CodeB>
            )}
          </Section>
        </VStep>

        <VStep num="b" title="Send the request and parse the response" last>
          <p>Replace the <IC>// response parsing goes here</IC> comment. Send the request and parse the response the same way as Session 1 — the response JSON shape is identical: <IC>content[0].text</IC> holds the reply. Set that value to <IC>{isAndroid ? "_description.value" : "description"}</IC>.</p>
          <Section title="✅ Check your work — show me the complete PhotoViewModel">
            {isAndroid ? (
              <CodeB title="Kotlin — PhotoViewModel.kt (complete)" accent={BL}>{`class PhotoViewModel : ViewModel() {
    private val _selectedImage = MutableStateFlow<Bitmap?>(null)
    val selectedImage: StateFlow<Bitmap?> = _selectedImage
    private val _description = MutableStateFlow("")
    val description: StateFlow<String> = _description
    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading
    private val client = OkHttpClient()

    fun setImage(bitmap: Bitmap) { _selectedImage.value = bitmap }

    fun bitmapToBase64(bitmap: Bitmap): String {
        val stream = ByteArrayOutputStream()
        bitmap.compress(Bitmap.CompressFormat.JPEG, 80, stream)
        return Base64.encodeToString(stream.toByteArray(), Base64.NO_WRAP)
    }

    fun describeImage() {
        val bitmap = _selectedImage.value ?: return
        _isLoading.value = true
        _description.value = ""

        viewModelScope.launch(Dispatchers.IO) {
            try {
                val b64 = bitmapToBase64(bitmap)
                val bodyJson = """{"model":"claude-sonnet-4-5","max_tokens":1024,"messages":[{"role":"user","content":[{"type":"image","source":{"type":"base64","media_type":"image/jpeg","data":"${'$'}b64"}},{"type":"text","text":"Describe this image in detail."}]}]}"""
                val body = bodyJson.toRequestBody("application/json".toMediaType())

                val request = Request.Builder()
                    .url("https://api.anthropic.com/v1/messages")
                    .post(body)
                    .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
                    .addHeader("anthropic-version", "2023-06-01")
                    .addHeader("content-type", "application/json")
                    .build()

                val respStr = client.newCall(request).execute().body?.string() ?: ""
                val text = JSONObject(respStr)
                    .getJSONArray("content")
                    .getJSONObject(0)
                    .getString("text")
                _description.value = text
            } catch (e: Exception) {
                _description.value = "Error: " + e.message
            } finally {
                _isLoading.value = false
            }
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — PhotoViewModel.swift (complete)" accent={GR}>{`import SwiftUI
import PhotosUI

@MainActor
class PhotoViewModel: ObservableObject {
    @Published var selectedImage: UIImage?
    @Published var description = ""
    @Published var isLoading = false
    @Published var photoItem: PhotosPickerItem? {
        didSet { Task { await loadPhoto() } }
    }

    private var apiKey: String {
        Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String ?? ""
    }

    private func loadPhoto() async {
        guard let item = photoItem,
              let data = try? await item.loadTransferable(type: Data.self),
              let image = UIImage(data: data) else { return }
        selectedImage = image
    }

    func imageToBase64(_ image: UIImage) -> String? {
        image.jpegData(compressionQuality: 0.8)?.base64EncodedString()
    }

    func describeImage() async {
        guard let image = selectedImage,
              let b64 = imageToBase64(image) else { return }
        isLoading = true
        description = ""

        do {
            var request = URLRequest(
                url: URL(string: "https://api.anthropic.com/v1/messages")!)
            request.httpMethod = "POST"
            request.setValue(apiKey, forHTTPHeaderField: "x-api-key")
            request.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
            request.setValue("application/json", forHTTPHeaderField: "content-type")

            let body: [String: Any] = [
                "model": "claude-sonnet-4-5",
                "max_tokens": 1024,
                "messages": [["role": "user", "content": [
                    ["type": "image", "source": [
                        "type": "base64",
                        "media_type": "image/jpeg",
                        "data": b64]],
                    ["type": "text", "text": "Describe this image in detail."]
                ]]]
            ]
            request.httpBody = try JSONSerialization.data(withJSONObject: body)

            let (data, _) = try await URLSession.shared.data(for: request)
            if let json = try JSONSerialization.jsonObject(with: data) as? [String: Any],
               let content = json["content"] as? [[String: Any]],
               let text = content.first?["text"] as? String {
                description = text
            }
        } catch {
            description = "Error: " + error.localizedDescription
        }
        isLoading = false
    }
}`}</CodeB>
            )}
          </Section>
          <p>Notice the message structure: <IC>content</IC> is now an <strong>array</strong> with both an image block and a text block — this is what makes it multimodal.</p>
          <Checkpoint num={4}>{"Take a photo or select one from the gallery, tap Describe, and wait. Claude should return a detailed description. This is the magic moment!"}</Checkpoint>
        </VStep>
      </Step>

      <Step num={5} title="Polish the experience (~8 min)">
        <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li>Loading indicator while Claude is analyzing</li>
          <li>Error handling with friendly messages</li>
          <li>{"A \"Try another photo\" button that clears the current state"}</li>
          <li>{"Optional: let users customize the prompt"}</li>
        </ul>
        <Checkpoint num={5}>Your app handles loading and errors. Full flow works: select photo, preview, describe, try another.</Checkpoint>
      </Step>

      <Step num={6} title="Experiment with different prompts (~5 min)">
        <p>The text prompt alongside the image dramatically changes the output. Try these:</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "12px 0" }}>
          {[
            { t: "Accessibility", p: "Describe this image as alt text for a visually impaired person." },
            { t: "Creative writing", p: "Write a short story inspired by this image." },
            { t: "Object detection", p: "List every distinct object you can identify." },
            { t: "Food analysis", p: "If this is food, estimate calories and main ingredients." },
          ].map(function(item) {
            return (
              <div key={item.t} style={{ background: "var(--color-background-secondary)", padding: "10px 12px", borderRadius: 8 }}>
                <strong style={{ fontSize: 12 }}>{item.t}</strong>
                <p style={{ margin: "4px 0 0", fontSize: 11, color: "var(--color-text-secondary)", lineHeight: 1.5, fontStyle: "italic" }}>{item.p}</p>
              </div>
            );
          })}
        </div>
        <AiOpp>
          <em>{"Use AI to brainstorm use cases →"}</em> Ask Claude: <strong>{"\"I built a mobile app that sends photos to your vision API. What are the most useful real-world features I could build with this? Give me 5 ideas with the specific prompt for each.\""}</strong>
        </AiOpp>
      </Step>

      <Step num={7} title="Reflect (~3 min)">
        <CodeB title="Lab 14 Reflection">{`// 1. What is the key difference between a text-only
//    API call and a multimodal (vision) API call?
// 2. Why does image compression matter when sending
//    photos to an API?
// 3. Which prompt variation gave the most interesting
//    result? Why?`}</CodeB>
        <Checkpoint num={7}>Show a TA your app analyzing a photo. Demonstrate loading, error handling, and at least two prompt variations.</Checkpoint>
      </Step>

      <Section title={"💡 Hints"}>
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p><strong>The API returns an error about image size</strong></p>
          <p style={{ marginLeft: 16 }}>{"Resize your image before encoding. Cap at 1024px on the longest side. "}{isAndroid ? "Use Bitmap.createScaledBitmap()." : "Use UIGraphicsImageRenderer."}</p>
          <p><strong>{"The camera doesn't open"}</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Make sure you requested CAMERA runtime permission, not just manifest." : "Camera doesn't work in Simulator. Test with gallery picker there, use a real device for camera."}</p>
          <p><strong>Base64 string is empty</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Make sure the bitmap is not null and compress() returns true." : "Make sure jpegData(compressionQuality:) returns non-nil."}</p>
        </div>
      </Section>

      <Section title={"🚀 Stretch Features"}>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
          <li>Add a prompt selector for description styles</li>
          <li>Add streaming to the vision response</li>
          <li>{"Save descriptions to " + (isAndroid ? "Room" : "SwiftData") + " for history"}</li>
          <li>Add a share button for the photo + description</li>
          <li>{"Combine with Session 1: add an \"attach photo\" button to the chat app"}</li>
        </ul>
      </Section>
    </div>
  );
}

/* ====== LAB SWITCHER ====== */
var SESSION_LABELS = ["Session 1: Chat with Claude", "Session 2: Multimodal Inputs"];

function LabTab({ platform, setPlatform }) {
  var s = useState(1);
  var session = s[0];
  var setSession = s[1];
  return (
    <div>
      <div style={{ display: "flex", gap: 0, marginBottom: 12, borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
        {[1, 2].map(function(n) {
          return (
            <button key={n} onClick={function() { setSession(n); }} style={{
              padding: "8px 20px", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer",
              background: session === n ? PL : "var(--color-background-primary)",
              color: session === n ? PD : "var(--color-text-secondary)"
            }}>{SESSION_LABELS[n - 1]}</button>
          );
        })}
      </div>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      {session === 1 ? <LabSession1 platform={platform} /> : <LabSession2 platform={platform} />}
    </div>
  );
}

/* ====== PROJECT ====== */
function ProjectTab({ platform, setPlatform }) {
  var isAndroid = platform === "Android";
  return (
    <div>
      <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 14 }}>
        {"📬"} Submit this project by the next session using the <strong>Submit</strong> button {"👉"} <span style={{ float: "right", background: P_C, color: "#fff", padding: "4px 14px", borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: "pointer" }}>Submit</span>
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 7: Project — AI-Powered Apps</h2>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p>{"Complete and polish both mini-apps from this week's labs: the chat app (Session 1) and the photo describer (Session 2). Submit as two repos or two modules in one repo."}</p>
        <strong>{"🎯"} Goals</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 14px" }}>
          <li>Build two complete AI-powered applications using the Claude API</li>
          <li>Practice text-only and multimodal (vision) API calls</li>
          <li>Implement streaming, camera integration, and error handling</li>
        </ul>
      </div>

      <Section title={"✅ Required Features — Chat App"} defaultOpen={true}>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
          <li>{"☐"} Chat screen with <strong>message bubbles</strong> visually distinct by role</li>
          <li>{"☐"} Text input and send button calling the <strong>Claude Messages API</strong></li>
          <li>{"☐"} <strong>Streaming</strong> — response appears word by word</li>
          <li>{"☐"} <strong>Typing indicator</strong> while waiting for first chunk</li>
          <li>{"☐"} <strong>Error handling</strong> — friendly messages, no crashes</li>
          <li>{"☐"} <strong>Conversation history</strong> — full context sent each request</li>
          <li>{"☐"} API key stored <strong>securely</strong></li>
        </ul>
      </Section>

      <Section title={"✅ Required Features — Photo Describer"} defaultOpen={true}>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
          <li>{"☐"} User can <strong>take a photo</strong> or <strong>choose from gallery</strong></li>
          <li>{"☐"} Selected photo displayed as <strong>preview</strong></li>
          <li>{"☐"} Tapping Describe sends image in a <strong>multimodal API</strong> call and shows description</li>
          <li>{"☐"} Image <strong>compressed and resized</strong> before base64 encoding</li>
          <li>{"☐"} <strong>Loading state</strong> while analyzing</li>
          <li>{"☐"} <strong>Error handling</strong> — friendly messages</li>
          <li>{"☐"} API key stored <strong>securely</strong></li>
        </ul>
      </Section>

      <Section title={"🚀 Stretch Features (either app)"}>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
          <li>{"☐"} System prompt selector for the chat app</li>
          <li>{"☐"} Streaming for the photo describer response</li>
          <li>{"☐"} {"Prompt selector for photo describer (accessibility, creative, food, etc.)"}</li>
          <li>{"☐"} Stop generating button for chat</li>
          <li>{"☐"} {"Save history to " + (isAndroid ? "Room" : "SwiftData") + " (combine Week 5 + 7!)"}</li>
          <li>{"☐"} {"Attach photo button in chat app — combine both sessions"}</li>
          <li>{"☐"} Rate limiting with friendly message</li>
        </ul>
      </Section>

      <Section title={"💡 Hints"}>
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p><strong>{"Streaming isn't working"}</strong></p>
          <p style={{ marginLeft: 16 }}>{"Make sure you added \"stream\": true to the request body and read the response as a stream, not a single string."}</p>
          <p><strong>The UI freezes while streaming</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Ensure the network call is on Dispatchers.IO and state is observed via collectAsState()." : "Ensure the ViewModel is @MainActor so @Published updates happen on the main thread."}</p>
          <p><strong>{"Conversation context isn't working"}</strong></p>
          <p style={{ marginLeft: 16 }}>{"Send the entire messages array each request. Claude is stateless — it needs full history every time."}</p>
          <AiOpp>
            <em>{"Use AI to debug API issues →"}</em> Paste your request code and error response into Claude.
          </AiOpp>
        </div>
      </Section>

      <div style={{ marginTop: 20, borderTop: "1px solid var(--color-border-tertiary)", paddingTop: 16 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 10px" }}>{"📬"} Submitting Your Project</h3>
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p>{"Once you've completed all required features:"}</p>
          <ol style={{ paddingLeft: 20 }}>
            <li>Create GitHub repos for both projects (or one repo with two modules)</li>
            <li>Push your project code</li>
            <li>Create a README for each using the <Link>Unit 7 README Template</Link></li>
            <li>{"Mark off features by changing - [ ] to - [x]"}</li>
            <li>Record a Video/GIF walkthrough for each app</li>
            <li>Add the Video/GIF to your repo and link in README</li>
            <li>Make repo(s) private and add <IC>codepathreview</IC> as collaborator</li>
          </ol>
          <Warn>{"Double-check your API key is NOT in the repo. Search for \"sk-ant\" to be sure."}</Warn>
        </div>
      </div>
    </div>
  );
}

/* ====== CAPSTONE ====== */
function CapstoneTab({ platform, setPlatform }) {
  var isAndroid = platform === "Android";
  return (
    <div>
      <div style={{ background: CAP_BG, padding: "14px", borderRadius: 10, marginBottom: 16 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px", color: CAP_C }}>{"🏗"} Capstone Milestone 1: Repo and Architecture</h3>
        <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: CAP_C }}>
          {"Due by the end of this week. This is your team's first code checkpoint."}
        </p>
      </div>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p>{"Your team has been formed (Week 5) and your proposal was approved (Week 6). Now set up the project for real. This milestone is about proving your team can collaborate on a shared codebase."}</p>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"✅"} M1 Requirements</h4>
        <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
          <li>{"☐"} <strong>GitHub repo</strong> shared with all team members and <IC>codepathreview</IC></li>
          <li>{"☐"} <strong>Project compiles and runs</strong> on {isAndroid ? "an Android emulator or device" : "the iOS Simulator or a device"}</li>
          <li>{"☐"} <strong>MVVM architecture</strong> scaffolded — at least one ViewModel and View</li>
          <li>{"☐"} <strong>Navigation</strong> set up between at least 2 screens (placeholder OK)</li>
          <li>{"☐"} <strong>.gitignore</strong> configured for {isAndroid ? "Android (build/, .gradle/, local.properties)" : "iOS (.xcuserdata/, DerivedData/, Pods/)"}</li>
          <li>{"☐"} <strong>README</strong> with app name, description, team members, platform, feature breakdown</li>
          <li>{"☐"} <strong>Every team member</strong> has at least one commit</li>
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🎯"} Stretch Goals for M1</h4>
        <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
          <li>{"☐"} At least one screen showing real or mock data</li>
          <li>{"☐"} {isAndroid ? "Material 3 theming applied" : "Custom color scheme and typography"}</li>
          <li>{"☐"} Architecture diagram in README</li>
          <li>{"☐"} Branch protection — no direct pushes to main</li>
        </ul>

        <div className="callout-ai" style={{ marginTop: 16, padding: "12px 14px", background: "#F9F0FF", borderRadius: 8 }}>
          <strong>{"📅"} Capstone Timeline</strong>
          <ul style={{ paddingLeft: 20, margin: "6px 0 0", lineHeight: 2 }}>
            <li style={{ opacity: 0.5 }}>{"Week 5: Team formation + platform selection ✅"}</li>
            <li style={{ opacity: 0.5 }}>{"Week 6: Proposal due ✅"}</li>
            <li><strong>Week 7 (this week):</strong> M1 — Repo setup, architecture scaffolded</li>
            <li><strong>Week 8:</strong> M2 — Core navigation, networking. Instructor check-in</li>
            <li><strong>Week 9:</strong> M3 — Feature-complete. Git branching workflow</li>
            <li><strong>Week 10:</strong> Final — APK/TestFlight, demo day, reflection</li>
          </ul>
        </div>

        <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 8 }}>
          <strong>{"📬"} Submission</strong>
          <p style={{ margin: "6px 0 0" }}>{"Submit M1 by sharing the GitHub repo link via the Slack form. Your instructor will review repos during the Week 8 check-in."}</p>
        </div>

        <Tip>{"Use the AI scaffolding lab from Week 6 Session 2 to jumpstart your capstone repo. Paste your proposal into Claude and ask it to generate the project structure."}</Tip>
      </div>
    </div>
  );
}

/* ====== RESOURCES ====== */
function ResourcesTab({ platform, setPlatform }) {
  var isAndroid = platform === "Android";
  return (
    <div>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        <p>Helpful links for this unit.</p>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>{"📹"} Session Recordings</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><Link>Weekly Video Playlist</Link></li>
          <li><Link>Office Hours Video Playlist</Link></li>
        </ul>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>May take 24-48 hours to appear.</p>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🤖"} Claude API</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><Link>Claude Messages API documentation</Link></li>
          <li><Link>Streaming with Messages API</Link> — SSE format</li>
          <li><Link>Vision (multimodal) messages</Link> — sending images</li>
          <li><Link>Anthropic Console</Link> — manage keys and usage</li>
          <li><Link>Claude API pricing</Link></li>
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{isAndroid ? "🤖 Android Networking" : "🍎 iOS Networking"}</h4>
        <ul style={{ paddingLeft: 20 }}>
          {isAndroid ? (
            <>
              <li><Link>OkHttp documentation</Link></li>
              <li><Link>Kotlin Coroutines guide</Link></li>
              <li><Link>kotlinx.serialization</Link></li>
              <li><Link>Securing API keys in Android</Link></li>
            </>
          ) : (
            <>
              <li><Link>URLSession async/await</Link></li>
              <li><Link>AsyncSequence and AsyncBytes</Link></li>
              <li><Link>JSONSerialization</Link></li>
              <li><Link>Securing API keys in iOS</Link></li>
            </>
          )}
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"📷"} Camera and Photos</h4>
        <ul style={{ paddingLeft: 20 }}>
          {isAndroid ? (
            <>
              <li><Link>CameraX overview</Link></li>
              <li><Link>ActivityResultContracts</Link> — camera and gallery</li>
              <li><Link>Bitmap compression and encoding</Link></li>
            </>
          ) : (
            <>
              <li><Link>PhotosPicker in SwiftUI</Link></li>
              <li><Link>UIImagePickerController</Link></li>
              <li><Link>UIImage compression and base64</Link></li>
            </>
          )}
        </ul>

        {isAndroid && (
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"📦"} Dependencies</h4>
            <CodeB title="build.gradle.kts (app)" accent={BL}>{`// OkHttp for streaming HTTP
implementation("com.squareup.okhttp3:okhttp:4.12.0")

// Kotlin serialization for JSON
implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.0")`}</CodeB>
          </div>
        )}
      </div>
    </div>
  );
}

/* ====== MAIN ====== */
export default function Week7Unit() {
  var tabState = useState("Overview");
  var tab = tabState[0];
  var setTab = tabState[1];
  var platState = useState("Android");
  var platform = platState[0];
  var setPlatform = platState[1];

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "16px 0", fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", fontWeight: 500, marginBottom: 2 }}>MOBILE DEVELOPMENT IN THE AGE OF AI</div>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{"CodePath · 10 weeks · 2 sessions/week"}</div>
      </div>
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--color-border-tertiary)", marginBottom: 16, overflowX: "auto" }}>
        {TABS.map(function(t) {
          return (
            <button key={t} onClick={function() { setTab(t); }} style={{
              padding: "8px 14px", fontSize: 13, background: "none", cursor: "pointer",
              borderWidth: "0 0 2px 0", borderStyle: "solid",
              borderColor: tab === t ? P_C : "transparent",
              color: tab === t ? P_C : "var(--color-text-secondary)",
              fontWeight: tab === t ? 500 : 400, whiteSpace: "nowrap"
            }}>{t}</button>
          );
        })}
      </div>
      {tab === "Overview"  && <Overview platform={platform} setPlatform={setPlatform} />}
      {tab === "Lab"       && <LabTab platform={platform} setPlatform={setPlatform} />}
      {tab === "Project"   && <ProjectTab platform={platform} setPlatform={setPlatform} />}
      {tab === "Capstone"  && <CapstoneTab platform={platform} setPlatform={setPlatform} />}
      {tab === "Resources" && <ResourcesTab platform={platform} setPlatform={setPlatform} />}
    </div>
  );
}
