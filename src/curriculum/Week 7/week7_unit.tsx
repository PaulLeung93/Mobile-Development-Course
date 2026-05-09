import { useState } from "react";

const TABS = ["Overview", "Lab", "Practice", "Capstone", "Resources"];
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
            { label: "Optional Practice", val: "Polish both mini-apps from this week's labs into complete projects on your own — not graded, just for sharpening these skills." },
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
        <p>Right now when a user taps Send, nothing happens visually until the first chunk arrives — the UI feels broken. Real chat apps show a "..." or "thinking" indicator immediately, so it's worth adding while the lab is fresh.</p>
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

/* ====== PRACTICE (Optional) ====== */
function PracticeTab({ platform, setPlatform }) {
  var isAndroid = platform === "Android";
  return (
    <div>
      <div style={{ background: "var(--color-background-secondary)", border: "1px dashed var(--color-border-tertiary)", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 14 }}>
        {"💪"} <strong>Optional — no submission required.</strong> From Week 6 onward your only graded submission is the Capstone. This page exists because Unit 7 is one of the highlights of the course: a phone is an always-on, context-rich sensor platform, and the most compelling AI features on mobile are the ones that would be impossible anywhere else.
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 7: Optional Practice — Mobile as a Multimodal AI Platform</h2>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p>{"The lab covered text + still photos. That's two of eight modalities a phone exposes. This page walks through the rest — each one is a complete from-scratch mini-app, with project setup, file creation, code with explanations, checkpoints, and references at the end."}</p>
        <p style={{ margin: "0 0 14px" }}>{"Pick one or two that excite you. The litmus test from Session 2: could a user accomplish this by uploading a file to a website? If yes, it's not a mobile-native AI feature. If no — you've found something worth building."}</p>
      </div>

      <AiOpp>
        <p style={{ margin: "0 0 6px" }}><strong>Use AI when you get stuck — that's the whole course.</strong></p>
        <p style={{ margin: 0, fontSize: 12 }}>{"This is an AI-powered mobile course, so debugging with AI is part of the curriculum, not a fallback. Every modality below has callouts with copy-pasteable Claude prompts at known stuck-points. If something's broken and the prompt template doesn't fit your situation, paste the smallest snippet that reproduces the issue along with what you've already tried — Claude does its best work when you give it specifics, not vibes."}</p>
      </AiOpp>

      <Section title={"📷  Camera — Beyond still photos"}>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 8px" }}>~35 min · standalone mini-app · advanced extension of Session 2's photo describer</p>

        <p><strong>What you're building:</strong> A live scene narrator. Point your phone's camera at the world, and every few seconds Claude tells you what it sees. By the end you'll have a working app that streams camera frames to Claude vision with the right throttling so you don't burn through your token budget in 30 seconds.</p>

        <p><strong>The mental model — why this is different from the photo describer:</strong> The Session 2 lab took ONE photo on demand. This is CONTINUOUS — frames flow from the camera constantly (30+ per second). You can't send all of them; vision tokens cost real money and Claude has rate limits. Your job is to (1) pull a stream of frames, (2) throttle to one frame every N seconds, (3) send each kept frame as a vision API call. The hard parts aren't camera-related — they're decisions about WHEN to send.</p>

        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", margin: "10px 0", fontSize: 12, lineHeight: 1.6 }}>
          <strong>Data flow:</strong><br/>
          📷 camera → frame stream (30 fps)&nbsp;&nbsp;→&nbsp;&nbsp;throttle to 1 frame / 5s&nbsp;&nbsp;→&nbsp;&nbsp;compress to JPEG + base64&nbsp;&nbsp;→&nbsp;&nbsp;Claude vision API&nbsp;&nbsp;→&nbsp;&nbsp;narration overlay
        </div>

        <p>{isAndroid
          ? "Android's piece is CameraX, specifically its ImageAnalysis use case. Unlike taking a still photo (which is one-shot), ImageAnalysis gives you a continuous Analyzer callback — every frame from the camera flows through your code as an ImageProxy. You decide which to keep."
          : "iOS uses AVCaptureSession with an AVCaptureVideoDataOutput. The output's sample buffer delegate fires for every frame from the camera (30+ fps on most devices). You decide which to keep and forward."
        }</p>

        <div style={{ '--platform-accent': isAndroid ? BL : GR } as React.CSSProperties}>

        <Step num={0} title="Create a new project (~3 min)">
          <p>Same project setup as the Microphone modality, just a different name and dependencies. The lab pattern still holds: Empty Activity / SwiftUI App, secure API key storage, build to confirm it runs.</p>

          {isAndroid ? (
            <div>
              <p>In Android Studio: <strong>File → New → New Project</strong> → <strong>Empty Activity</strong>. Name it <IC>SceneNarrator</IC>, package <IC>com.yourname.scenenarrator</IC>, min SDK <strong>API 26</strong>, Kotlin DSL. Click <strong>Finish</strong>.</p>
              <p>Open <IC>app/build.gradle.kts</IC> and add the dependencies you'll need — OkHttp (for the Claude call) and CameraX (for frame analysis):</p>
              <CodeB title="build.gradle.kts (app) — dependencies" accent={BL}>{`implementation("com.squareup.okhttp3:okhttp:4.12.0")
implementation("androidx.camera:camera-core:1.3.4")
implementation("androidx.camera:camera-camera2:1.3.4")
implementation("androidx.camera:camera-lifecycle:1.3.4")
implementation("androidx.camera:camera-view:1.3.4")`}</CodeB>
              <p>Click <strong>Sync Now</strong>. Wire up your Claude API key the same way you did in <Link>Lab Session 1 → Step 1</Link> — store it in <IC>local.properties</IC>, expose it via <IC>BuildConfig.CLAUDE_API_KEY</IC>.</p>
            </div>
          ) : (
            <div>
              <p>In Xcode: <strong>File → New → Project</strong> → <strong>App</strong>. Name it <IC>SceneNarrator</IC>, SwiftUI + Swift. Click <strong>Create</strong>.</p>
              <p>AVFoundation ships with iOS — no extra dependency. Wire up your Claude API key the same way you did in <Link>Lab Session 1 → Step 1</Link> — store it in <IC>Secrets.xcconfig</IC>, expose via Info.plist as <IC>CLAUDE_API_KEY</IC>, and add the file to <IC>.gitignore</IC>.</p>
            </div>
          )}

          <Checkpoint num={0}>Project created, builds clean, default screen runs. API key wired and verified absent from any committed file.</Checkpoint>
        </Step>

        <Step num={1} title="Add the camera permission (~3 min)">
          <p>Camera access is a runtime permission. Same pattern as the mic — manifest/Info.plist declaration AND a runtime ask the first time the camera is used.</p>

          {isAndroid ? (
            <div>
              <p>Open <IC>AndroidManifest.xml</IC>. Add the permission INSIDE <IC>{"<manifest>"}</IC> but OUTSIDE <IC>{"<application>"}</IC>:</p>
              <CodeB title="AndroidManifest.xml" accent={BL}>{`<uses-permission android:name="android.permission.CAMERA" />
<uses-feature android:name="android.hardware.camera.any" />`}</CodeB>
              <p>The <IC>uses-feature</IC> line tells Google Play your app needs a camera (filters out devices that don't have one). The runtime ask comes in the next step.</p>
            </div>
          ) : (
            <div>
              <p>Open <IC>Info.plist</IC>. Right-click → <strong>Add Row</strong>. Add the camera usage description — required, or the app crashes the moment it tries to access the camera:</p>
              <CodeB title="Info.plist" accent={GR}>{`<key>NSCameraUsageDescription</key>
<string>Used to capture frames for AI scene narration.</string>`}</CodeB>
              <p>The string shows up verbatim in the system permission prompt. Write it as something the user understands.</p>
            </div>
          )}

          <Checkpoint num={1}>Build still succeeds. The runtime permission ask is wired in step 2.</Checkpoint>
        </Step>

        <Step num={2} title="Build a FrameAnalyzer class (~15 min)">
          <p>This class wraps all the camera lifecycle: starting the capture session, pulling frames out of the stream, throttling to one every N seconds, and emitting bitmaps. The ChatViewModel only sees an <IC>onFrame: (Bitmap) -&gt; Unit</IC> callback — clean separation.</p>

          <VStep num="a" title="Create the file">
            {isAndroid ? (
              <div>
                <p>Right-click your package → <strong>New → Kotlin Class/File</strong> → name it <IC>FrameAnalyzer</IC>, choose <strong>Class</strong>. Replace the empty class with this skeleton:</p>
                <CodeB title="FrameAnalyzer.kt" accent={BL}>{`package com.yourname.scenenarrator   // match your actual package!

import android.graphics.Bitmap
import android.util.Size
import androidx.activity.ComponentActivity
import androidx.camera.core.CameraSelector
import androidx.camera.core.ImageAnalysis
import androidx.camera.core.ImageProxy
import androidx.camera.core.Preview
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.view.PreviewView
import androidx.core.content.ContextCompat
import java.util.concurrent.Executors

class FrameAnalyzer(
    private val activity: ComponentActivity,
    private val previewView: PreviewView,
    private val intervalMs: Long = 5000,
    private val onFrame: (Bitmap) -> Unit
) {
    private val executor = Executors.newSingleThreadExecutor()
    private var lastSentMs = 0L

    fun start() { /* fill in next */ }
    fun stop()  { /* fill in next */ }
}`}</CodeB>
                <p>The constructor takes the activity (CameraX needs a LifecycleOwner), a PreviewView (where the camera feed renders), the throttle interval (default 5 seconds), and the callback. The executor will run the analyzer on a background thread — never analyze frames on the main thread or you'll drop UI frames.</p>
              </div>
            ) : (
              <div>
                <p>Right-click your project folder → <strong>New File → Swift File</strong> → name it <IC>FrameAnalyzer</IC>. Replace the contents:</p>
                <CodeB title="FrameAnalyzer.swift" accent={GR}>{`import Foundation
import AVFoundation
import UIKit

@MainActor
class FrameAnalyzer: NSObject, ObservableObject {
    let session = AVCaptureSession()
    private let output = AVCaptureVideoDataOutput()
    private let queue = DispatchQueue(label: "frame.analyzer.queue")
    private let intervalSec: TimeInterval
    private var lastSent = Date.distantPast

    let onFrame: (UIImage) -> Void

    init(intervalSec: TimeInterval = 5,
         onFrame: @escaping (UIImage) -> Void) {
        self.intervalSec = intervalSec
        self.onFrame = onFrame
        super.init()
    }

    func start() { /* fill in next */ }
    func stop()  { /* fill in next */ }
}`}</CodeB>
                <p>The class owns an <IC>AVCaptureSession</IC> (the camera pipeline), an <IC>AVCaptureVideoDataOutput</IC> (where frames come out), and a serial dispatch queue (frames are processed off the main thread). We expose the session publicly so the SwiftUI preview view can attach to it.</p>
              </div>
            )}
          </VStep>

          <VStep num="b" title="Implement start() — wire up the camera capture pipeline">
            <p>{isAndroid
              ? "CameraX uses a 'use case' model — you tell it what you want to do (Preview, ImageAnalysis, ImageCapture) and it manages the camera for you. We need two: Preview (so the user sees the viewfinder) and ImageAnalysis (so we can grab frames). Both bind to the activity's lifecycle, which means CameraX automatically pauses when the user backgrounds the app."
              : "AVFoundation is more manual. You build the session by adding inputs (the camera device) and outputs (where frames go). The video data output requires a delegate — we'll make FrameAnalyzer itself the delegate by extending it in step c. Run all session configuration on a background queue, never on main."
            }</p>
            {isAndroid ? (
              <CodeB title="Replace the start() stub" accent={BL}>{`fun start() {
    val providerFuture = ProcessCameraProvider.getInstance(activity)
    providerFuture.addListener({
        val provider = providerFuture.get()

        // 1. Preview — so the user sees what the camera sees
        val preview = Preview.Builder().build().also {
            it.setSurfaceProvider(previewView.surfaceProvider)
        }

        // 2. ImageAnalysis — so we can grab frames
        val analysis = ImageAnalysis.Builder()
            .setTargetResolution(Size(640, 480))   // small = cheap tokens
            .setBackpressureStrategy(
                ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST
            )
            .build()
        analysis.setAnalyzer(executor) { proxy -> handleFrame(proxy) }

        // Bind both use cases to the activity lifecycle
        provider.unbindAll()
        provider.bindToLifecycle(
            activity, CameraSelector.DEFAULT_BACK_CAMERA, preview, analysis
        )
    }, ContextCompat.getMainExecutor(activity))
}`}</CodeB>
            ) : (
              <CodeB title="Replace the start() stub" accent={GR}>{`func start() {
    queue.async { [weak self] in
        guard let self else { return }
        self.session.beginConfiguration()
        self.session.sessionPreset = .vga640x480   // small = cheap tokens

        // 1. Add the back camera as input
        guard let device = AVCaptureDevice.default(
            .builtInWideAngleCamera, for: .video, position: .back
        ),
        let input = try? AVCaptureDeviceInput(device: device),
        self.session.canAddInput(input) else {
            self.session.commitConfiguration(); return
        }
        self.session.addInput(input)

        // 2. Add the video output (frames flow through us)
        self.output.setSampleBufferDelegate(self, queue: self.queue)
        if self.session.canAddOutput(self.output) {
            self.session.addOutput(self.output)
        }
        self.session.commitConfiguration()
        self.session.startRunning()
    }
}`}</CodeB>
            )}
            <Tip>{isAndroid
              ? "STRATEGY_KEEP_ONLY_LATEST is critical. Without it, if your analyzer takes longer than 33ms (one frame at 30fps), CameraX will queue up backlog frames and your app will lag. KEEP_ONLY_LATEST drops anything that arrives while you're busy — exactly what you want for throttled analysis."
              : "VGA (640×480) is plenty for vision API calls. Higher resolution would multiply tokens without giving Claude more useful detail for general scene description. Set sessionPreset BEFORE adding inputs/outputs — it can't be changed mid-session."
            }</Tip>
          </VStep>

          <VStep num="c" title={isAndroid ? "Implement handleFrame — the throttling decision" : "Implement the sample buffer delegate — the throttling decision"}>
            <p>{isAndroid
              ? "This is where the throttling actually happens. Every frame arrives as an ImageProxy on the analyzer thread. Compare the current time to the last-sent time; if enough time has passed, convert to a Bitmap and forward to onFrame. Either way, you MUST call proxy.close() — failing to close ImageProxy is a common mistake that causes the camera to freeze after a few frames."
              : "Extend FrameAnalyzer with the AVCaptureVideoDataOutputSampleBufferDelegate protocol. The delegate method fires on the queue you passed in setSampleBufferDelegate — never on main. Inside, check if the throttle interval has elapsed; if so, convert the CMSampleBuffer to a UIImage and forward to onFrame."
            }</p>
            {isAndroid ? (
              <CodeB title="Add inside the FrameAnalyzer class" accent={BL}>{`private fun handleFrame(proxy: ImageProxy) {
    try {
        val now = System.currentTimeMillis()
        if (now - lastSentMs >= intervalMs) {
            val bitmap = proxy.toBitmap()
            lastSentMs = now
            // Forward on main thread so the ViewModel's StateFlow updates safely
            activity.runOnUiThread { onFrame(bitmap) }
        }
    } finally {
        proxy.close()   // CRITICAL — never skip this
    }
}`}</CodeB>
            ) : (
              <CodeB title="Add at the bottom of FrameAnalyzer.swift (outside the class)" accent={GR}>{`extension FrameAnalyzer: AVCaptureVideoDataOutputSampleBufferDelegate {
    nonisolated func captureOutput(
        _ output: AVCaptureOutput,
        didOutput sampleBuffer: CMSampleBuffer,
        from connection: AVCaptureConnection
    ) {
        let now = Date()
        Task { @MainActor in
            guard now.timeIntervalSince(self.lastSent) >= self.intervalSec else { return }
            self.lastSent = now

            guard let pixelBuffer = CMSampleBufferGetImageBuffer(sampleBuffer)
            else { return }
            let ciImage = CIImage(cvPixelBuffer: pixelBuffer)
            let context = CIContext()
            guard let cgImage = context.createCGImage(ciImage, from: ciImage.extent)
            else { return }
            self.onFrame(UIImage(cgImage: cgImage))
        }
    }
}`}</CodeB>
            )}
          </VStep>

          <VStep num="d" title="Implement stop() — tear down the session" last={true}>
            <p>When the user navigates away or stops narration, you need to release the camera. Cameras are exclusive resources — leaving the session running drains battery, prevents other apps from using the camera, and on iOS keeps the green camera-in-use indicator visible.</p>
            {isAndroid ? (
              <CodeB title="Replace the stop() stub" accent={BL}>{`fun stop() {
    val provider = ProcessCameraProvider.getInstance(activity).get()
    provider.unbindAll()
    executor.shutdown()
}`}</CodeB>
            ) : (
              <CodeB title="Replace the stop() stub" accent={GR}>{`func stop() {
    queue.async { [weak self] in
        self?.session.stopRunning()
    }
}`}</CodeB>
            )}
          </VStep>

          <Section title={"✅ Check your work — show me the complete FrameAnalyzer." + (isAndroid ? "kt" : "swift")}>
            {isAndroid ? (
              <CodeB title="FrameAnalyzer.kt" accent={BL}>{`package com.yourname.scenenarrator

import android.graphics.Bitmap
import android.util.Size
import androidx.activity.ComponentActivity
import androidx.camera.core.CameraSelector
import androidx.camera.core.ImageAnalysis
import androidx.camera.core.ImageProxy
import androidx.camera.core.Preview
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.view.PreviewView
import androidx.core.content.ContextCompat
import java.util.concurrent.Executors

class FrameAnalyzer(
    private val activity: ComponentActivity,
    private val previewView: PreviewView,
    private val intervalMs: Long = 5000,
    private val onFrame: (Bitmap) -> Unit
) {
    private val executor = Executors.newSingleThreadExecutor()
    private var lastSentMs = 0L

    fun start() {
        val providerFuture = ProcessCameraProvider.getInstance(activity)
        providerFuture.addListener({
            val provider = providerFuture.get()
            val preview = Preview.Builder().build().also {
                it.setSurfaceProvider(previewView.surfaceProvider)
            }
            val analysis = ImageAnalysis.Builder()
                .setTargetResolution(Size(640, 480))
                .setBackpressureStrategy(
                    ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST
                )
                .build()
            analysis.setAnalyzer(executor) { proxy -> handleFrame(proxy) }

            provider.unbindAll()
            provider.bindToLifecycle(
                activity, CameraSelector.DEFAULT_BACK_CAMERA, preview, analysis
            )
        }, ContextCompat.getMainExecutor(activity))
    }

    fun stop() {
        val provider = ProcessCameraProvider.getInstance(activity).get()
        provider.unbindAll()
        executor.shutdown()
    }

    private fun handleFrame(proxy: ImageProxy) {
        try {
            val now = System.currentTimeMillis()
            if (now - lastSentMs >= intervalMs) {
                val bitmap = proxy.toBitmap()
                lastSentMs = now
                activity.runOnUiThread { onFrame(bitmap) }
            }
        } finally {
            proxy.close()
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="FrameAnalyzer.swift" accent={GR}>{`import Foundation
import AVFoundation
import UIKit

@MainActor
class FrameAnalyzer: NSObject, ObservableObject {
    let session = AVCaptureSession()
    private let output = AVCaptureVideoDataOutput()
    private let queue = DispatchQueue(label: "frame.analyzer.queue")
    private let intervalSec: TimeInterval
    private var lastSent = Date.distantPast

    let onFrame: (UIImage) -> Void

    init(intervalSec: TimeInterval = 5,
         onFrame: @escaping (UIImage) -> Void) {
        self.intervalSec = intervalSec
        self.onFrame = onFrame
        super.init()
    }

    func start() {
        queue.async { [weak self] in
            guard let self else { return }
            self.session.beginConfiguration()
            self.session.sessionPreset = .vga640x480

            guard let device = AVCaptureDevice.default(
                .builtInWideAngleCamera, for: .video, position: .back
            ),
            let input = try? AVCaptureDeviceInput(device: device),
            self.session.canAddInput(input) else {
                self.session.commitConfiguration(); return
            }
            self.session.addInput(input)

            self.output.setSampleBufferDelegate(self, queue: self.queue)
            if self.session.canAddOutput(self.output) {
                self.session.addOutput(self.output)
            }
            self.session.commitConfiguration()
            self.session.startRunning()
        }
    }

    func stop() {
        queue.async { [weak self] in
            self?.session.stopRunning()
        }
    }
}

extension FrameAnalyzer: AVCaptureVideoDataOutputSampleBufferDelegate {
    nonisolated func captureOutput(
        _ output: AVCaptureOutput,
        didOutput sampleBuffer: CMSampleBuffer,
        from connection: AVCaptureConnection
    ) {
        let now = Date()
        Task { @MainActor in
            guard now.timeIntervalSince(self.lastSent) >= self.intervalSec else { return }
            self.lastSent = now

            guard let pixelBuffer = CMSampleBufferGetImageBuffer(sampleBuffer)
            else { return }
            let ciImage = CIImage(cvPixelBuffer: pixelBuffer)
            let context = CIContext()
            guard let cgImage = context.createCGImage(ciImage, from: ciImage.extent)
            else { return }
            self.onFrame(UIImage(cgImage: cgImage))
        }
    }
}`}</CodeB>
            )}
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck on the camera setup?</strong> Camera APIs are notoriously finicky. Paste this into Claude with your code:</p>
            <CodeB title="Prompt" accent={P_C}>{isAndroid
              ? `Here's my FrameAnalyzer.kt — I'm trying to wrap CameraX so I can pull throttled frames from the camera and feed them to a callback:

[paste your code]

Specific issues I'm seeing: [describe — e.g. "the analyzer fires once and then never again", or "the preview doesn't show", or "the app crashes with a permission error even though I added it"]

What's wrong, and what's the smallest change to fix it?`
              : `Here's my FrameAnalyzer.swift — I'm using AVCaptureSession with a video data output to pull throttled frames from the camera:

[paste your code]

Specific issues I'm seeing: [describe — e.g. "captureOutput never fires", or "the session won't start", or "the preview is upside down"]

What's wrong, and what's the smallest change to fix it?`}</CodeB>
          </AiOpp>

          <Checkpoint num={2}>FrameAnalyzer.{isAndroid ? "kt" : "swift"} compiles with no errors. No runtime test yet — we need a UI to host it.</Checkpoint>
        </Step>

        <Step num={3} title="Build the ChatViewModel that calls Claude vision (~12 min)">
          <p>The ChatViewModel here is structurally similar to the Microphone version, but the input modality changes: instead of a transcript string, you receive a Bitmap/UIImage from <IC>FrameAnalyzer</IC>, base64-encode it, and send it as a vision message to Claude. This is identical to the Session 2 photo describer's API call — just triggered by the throttled frame stream instead of a button tap.</p>

          {isAndroid ? (
            <CodeB title="ChatViewModel.kt — imports" accent={BL}>{`package com.yourname.scenenarrator

import android.app.Application
import android.graphics.Bitmap
import android.util.Base64
import androidx.activity.ComponentActivity
import androidx.camera.view.PreviewView
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject
import java.io.ByteArrayOutputStream`}</CodeB>
          ) : (
            <CodeB title="ChatViewModel.swift — imports" accent={GR}>{`import Foundation
import UIKit`}</CodeB>
          )}

          <VStep num="a" title="Define the data model and UI state">
            <p>Each narration is a snippet of text plus a timestamp. Bundle the list of narrations and a "thinking" flag in a UI state struct.</p>
            {isAndroid ? (
              <CodeB title="Add below the imports" accent={BL}>{`data class Narration(val text: String, val ts: Long = System.currentTimeMillis())

data class UiState(
    val narrations: List<Narration> = emptyList(),
    val isThinking: Boolean = false,
    val isRunning: Boolean = false
)`}</CodeB>
            ) : (
              <CodeB title="Add below the imports" accent={GR}>{`struct Narration: Identifiable {
    let id = UUID()
    let text: String
    let ts = Date()
}`}</CodeB>
            )}
          </VStep>

          <VStep num="b" title="Define the class shell with state and FrameAnalyzer">
            <p>{isAndroid
              ? "Standard StateFlow setup, plus a nullable FrameAnalyzer that we'll create when the user taps Start. Like the Microphone ViewModel, we use attach() so MainActivity can pass in its own context once it's available."
              : "Standard ObservableObject pattern. The FrameAnalyzer is a lazy var so its closure can capture self. We expose its session publicly so the SwiftUI preview can render the camera feed."
            }</p>
            {isAndroid ? (
              <CodeB title="Add below your data classes" accent={BL}>{`class ChatViewModel(app: Application) : AndroidViewModel(app) {
    private val _uiState = MutableStateFlow(UiState())
    val uiState = _uiState.asStateFlow()

    private val client = OkHttpClient()
    private var analyzer: FrameAnalyzer? = null

    // methods come next
}`}</CodeB>
            ) : (
              <CodeB title="Add below your Narration struct" accent={GR}>{`@MainActor
class ChatViewModel: ObservableObject {
    @Published var narrations: [Narration] = []
    @Published var isThinking = false
    @Published var isRunning = false

    lazy var analyzer: FrameAnalyzer = {
        FrameAnalyzer(intervalSec: 5) { [weak self] image in
            Task { @MainActor in await self?.onFrame(image) }
        }
    }()

    // methods come next
}`}</CodeB>
            )}
          </VStep>

          <VStep num="c" title={isAndroid ? "Wire the FrameAnalyzer via attach() and a start/stop API" : "Add start/stop control methods"}>
            <p>{isAndroid
              ? "attach() takes the activity AND a PreviewView (which the UI will provide). That's because FrameAnalyzer needs both to bind the camera lifecycle. start() / stop() control the analyzer and toggle isRunning so the UI can show the right button."
              : "Two methods that just toggle the analyzer's running state and update isRunning. The lazy var initializes the analyzer the first time it's accessed."
            }</p>
            {isAndroid ? (
              <CodeB title="Add inside the class" accent={BL}>{`fun attach(activity: ComponentActivity, previewView: PreviewView) {
    analyzer = FrameAnalyzer(
        activity = activity,
        previewView = previewView,
        intervalMs = 5000,
        onFrame = { bitmap -> handleFrame(bitmap) }
    )
}

fun start() {
    _uiState.update { it.copy(isRunning = true) }
    analyzer?.start()
}

fun stop() {
    _uiState.update { it.copy(isRunning = false) }
    analyzer?.stop()
}`}</CodeB>
            ) : (
              <CodeB title="Add inside the class" accent={GR}>{`func start() {
    isRunning = true
    analyzer.start()
}

func stop() {
    isRunning = false
    analyzer.stop()
}`}</CodeB>
            )}
          </VStep>

          <VStep num="d" title={isAndroid ? "Handle each captured frame" : "Handle each captured frame (onFrame)"}>
            <p>When a frame arrives from the analyzer (already throttled to one every 5 seconds), set isThinking = true, launch a coroutine, and call Claude. When Claude responds, append the narration to the list. {isAndroid ? "Use viewModelScope.launch with Dispatchers.IO so the network call doesn't block the main thread." : "Just await callClaude — async/await keeps it readable."}</p>
            {isAndroid ? (
              <CodeB title="Add inside the class" accent={BL}>{`private fun handleFrame(bitmap: Bitmap) {
    _uiState.update { it.copy(isThinking = true) }
    viewModelScope.launch {
        val narration = withContext(Dispatchers.IO) { callClaude(bitmap) }
        _uiState.update {
            it.copy(
                narrations = listOf(Narration(narration)) + it.narrations,
                isThinking = false
            )
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Add inside the class" accent={GR}>{`func onFrame(_ image: UIImage) async {
    isThinking = true
    let narration = (try? await callClaude(image: image)) ?? "(error)"
    narrations.insert(Narration(text: narration), at: 0)
    isThinking = false
}`}</CodeB>
            )}
          </VStep>

          <VStep num="e" title="Implement callClaude with the vision API" last={true}>
            <p>This is the core of the modality. {isAndroid ? "Compress the bitmap to JPEG (smaller than PNG, quality 80 is plenty for vision), base64-encode it, and build a multimodal content array — one image block + one text prompt block. POST to the same endpoint as the Microphone modality." : "Compress the UIImage to JPEG, base64-encode, and build a multimodal content array — one image block + one text prompt block. Same endpoint as the Microphone modality."} The model gets the image AND a brief instructing it to give a one-sentence narration.</p>
            {isAndroid ? (
              <CodeB title="Add inside the class" accent={BL}>{`private fun callClaude(bitmap: Bitmap): String {
    // Compress + base64 encode
    val baos = ByteArrayOutputStream()
    bitmap.compress(Bitmap.CompressFormat.JPEG, 80, baos)
    val b64 = Base64.encodeToString(baos.toByteArray(), Base64.NO_WRAP)

    // Multimodal content: image block + text block
    val content = JSONArray()
        .put(JSONObject().apply {
            put("type", "image")
            put("source", JSONObject().apply {
                put("type", "base64")
                put("media_type", "image/jpeg")
                put("data", b64)
            })
        })
        .put(JSONObject().put("type", "text").put(
            "text",
            "In one short sentence, describe what's happening in this view. " +
            "Focus on what's new or interesting since the last frame."
        ))

    val body = JSONObject()
        .put("model", "claude-sonnet-4-5")
        .put("max_tokens", 256)
        .put("messages", JSONArray().put(
            JSONObject().put("role", "user").put("content", content)
        ))
        .toString()
        .toRequestBody("application/json".toMediaType())

    val req = Request.Builder()
        .url("https://api.anthropic.com/v1/messages")
        .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
        .addHeader("anthropic-version", "2023-06-01")
        .post(body)
        .build()

    client.newCall(req).execute().use { response ->
        val json = JSONObject(response.body!!.string())
        return json.getJSONArray("content")
            .getJSONObject(0).getString("text")
    }
}`}</CodeB>
            ) : (
              <CodeB title="Add inside the class" accent={GR}>{`private func callClaude(image: UIImage) async throws -> String {
    guard let key = Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String,
          let jpeg = image.jpegData(compressionQuality: 0.8) else {
        throw URLError(.badURL)
    }
    let b64 = jpeg.base64EncodedString()

    let content: [[String: Any]] = [
        ["type": "image",
         "source": ["type": "base64",
                    "media_type": "image/jpeg",
                    "data": b64]],
        ["type": "text",
         "text": "In one short sentence, describe what's happening in this view. Focus on what's new or interesting since the last frame."]
    ]
    let payload: [String: Any] = [
        "model": "claude-sonnet-4-5",
        "max_tokens": 256,
        "messages": [["role": "user", "content": content]]
    ]

    var req = URLRequest(url: URL(string: "https://api.anthropic.com/v1/messages")!)
    req.httpMethod = "POST"
    req.setValue(key, forHTTPHeaderField: "x-api-key")
    req.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
    req.setValue("application/json", forHTTPHeaderField: "Content-Type")
    req.httpBody = try JSONSerialization.data(withJSONObject: payload)

    let (data, _) = try await URLSession.shared.data(for: req)
    let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
    let blocks = json?["content"] as? [[String: Any]]
    return blocks?.first?["text"] as? String ?? "(no content)"
}`}</CodeB>
            )}
          </VStep>

          <Section title={"✅ Check your work — show me the complete ChatViewModel." + (isAndroid ? "kt" : "swift")}>
            {isAndroid ? (
              <CodeB title="ChatViewModel.kt" accent={BL}>{`// Full file: imports + Narration + UiState + ChatViewModel with attach, start, stop, handleFrame, callClaude.
// Combine the snippets from VSteps a-e into one file in the order shown.
// If you want a single-paste reference, ask Claude:
//   "Here are the pieces of my ChatViewModel.kt — combine them into a complete file in the right order: [paste each VStep's snippet]"`}</CodeB>
            ) : (
              <CodeB title="ChatViewModel.swift" accent={GR}>{`// Full file: imports + Narration + ChatViewModel with start, stop, onFrame, callClaude.
// Combine the snippets from VSteps a-e into one file in the order shown.
// If you want a single-paste reference, ask Claude:
//   "Here are the pieces of my ChatViewModel.swift — combine them into a complete file in the right order: [paste each VStep's snippet]"`}</CodeB>
            )}
          </Section>

          <Warn>{"Vision tokens are not free. A 640×480 JPEG at quality 80 is ~250 tokens per frame. At 1 frame / 5s that's 3,000 tokens / minute. Claude Sonnet 4.5 input pricing is $3 / 1M tokens — so a continuous narration session costs ~$0.01 / minute. Pause when the user backgrounds the app."}</Warn>

          <Checkpoint num={3}>ChatViewModel.{isAndroid ? "kt" : "swift"} compiles. The references to <IC>FrameAnalyzer</IC> link cleanly to the file you wrote in step 2.</Checkpoint>
        </Step>

        <Step num={4} title="Build the camera viewfinder UI (~10 min)">
          <p>The UI has three pieces: a camera preview that fills the screen, a list of recent narrations overlayed on top, and a Start/Stop button at the bottom. When the camera is running, you'll see Claude's narrations appear in real time as new frames are analyzed.</p>

          <VStep num="a" title={isAndroid ? "Wire MainActivity with the PreviewView" : "Build the camera preview wrapper"}>
            <p>{isAndroid
              ? "MainActivity creates the ViewModel, hosts the PreviewView (CameraX needs an Android View, not a Composable, so we wrap it with AndroidView), and calls attach() to wire the analyzer. Permission is requested at startup using rememberLauncherForActivityResult."
              : "SwiftUI doesn't have a native camera preview, so we wrap an AVCaptureVideoPreviewLayer with UIViewRepresentable. The session is supplied by the FrameAnalyzer instance via the ChatViewModel."
            }</p>
            {isAndroid ? (
              <CodeB title="MainActivity.kt — full file" accent={BL}>{`package com.yourname.scenenarrator

import android.Manifest
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.activity.viewModels
import androidx.camera.view.PreviewView
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val viewModel: ChatViewModel by viewModels()

        val launcher = registerForActivityResult(
            ActivityResultContracts.RequestPermission()
        ) { granted ->
            if (!granted) finish()
        }
        launcher.launch(Manifest.permission.CAMERA)

        setContent {
            MaterialTheme { SceneScreen(viewModel, this) }
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="CameraPreview.swift — new file" accent={GR}>{`import SwiftUI
import AVFoundation

struct CameraPreview: UIViewRepresentable {
    let session: AVCaptureSession

    func makeUIView(context: Context) -> PreviewView {
        let v = PreviewView()
        v.videoPreviewLayer.session = session
        v.videoPreviewLayer.videoGravity = .resizeAspectFill
        return v
    }
    func updateUIView(_ uiView: PreviewView, context: Context) {}

    class PreviewView: UIView {
        override class var layerClass: AnyClass { AVCaptureVideoPreviewLayer.self }
        var videoPreviewLayer: AVCaptureVideoPreviewLayer {
            layer as! AVCaptureVideoPreviewLayer
        }
    }
}`}</CodeB>
            )}
          </VStep>

          <VStep num="b" title={isAndroid ? "Build the SceneScreen Composable" : "Build the ContentView with preview overlay"}>
            <p>{isAndroid
              ? "Use a Box with the camera PreviewView at the bottom of the stack, then a Column over it for the narration list and start/stop button. AndroidView is how you embed a non-Compose View like PreviewView. We pass the PreviewView reference back to the ViewModel via attach() so the analyzer can wire its surface provider."
              : "ZStack the CameraPreview behind the narration list. The preview fills the screen; the list is at the top with a translucent background; the button is at the bottom."
            }</p>
            {isAndroid ? (
              <CodeB title="Add below MainActivity" accent={BL}>{`@Composable
fun SceneScreen(vm: ChatViewModel, activity: ComponentActivity) {
    val state by vm.uiState.collectAsState()
    val previewView = remember { PreviewView(activity) }

    LaunchedEffect(Unit) {
        vm.attach(activity, previewView)
    }

    Box(modifier = Modifier.fillMaxSize()) {
        AndroidView(
            factory = { previewView },
            modifier = Modifier.fillMaxSize()
        )
        Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
            LazyColumn(modifier = Modifier.weight(1f)) {
                if (state.isThinking) item {
                    NarrationCard("Claude is looking…")
                }
                items(state.narrations) { n -> NarrationCard(n.text) }
            }
            Button(
                onClick = { if (state.isRunning) vm.stop() else vm.start() },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(if (state.isRunning) "Stop narrating" else "Start narrating")
            }
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="ContentView.swift — replace existing" accent={GR}>{`import SwiftUI

struct ContentView: View {
    @StateObject private var vm = ChatViewModel()

    var body: some View {
        ZStack {
            CameraPreview(session: vm.analyzer.session)
                .ignoresSafeArea()

            VStack {
                ScrollView {
                    LazyVStack(spacing: 8) {
                        if vm.isThinking {
                            NarrationCard(text: "Claude is looking…")
                        }
                        ForEach(vm.narrations) { n in
                            NarrationCard(text: n.text)
                        }
                    }
                    .padding()
                }
                Spacer()
                Button(action: { vm.isRunning ? vm.stop() : vm.start() }) {
                    Text(vm.isRunning ? "Stop narrating" : "Start narrating")
                        .frame(maxWidth: .infinity).padding()
                        .background(Color.accentColor)
                        .foregroundColor(.white)
                        .cornerRadius(12)
                }.padding()
            }
        }
    }
}

#Preview { ContentView() }`}</CodeB>
            )}
          </VStep>

          <VStep num="c" title="Build the NarrationCard component" last={true}>
            <p>A small translucent card showing one narration. Stack of these is the live transcript of what Claude has seen. Use a semi-transparent background so the camera shows through.</p>
            {isAndroid ? (
              <CodeB title="Add below SceneScreen" accent={BL}>{`@Composable
fun NarrationCard(text: String) {
    Surface(
        modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
        color = Color.Black.copy(alpha = 0.6f),
        shape = MaterialTheme.shapes.medium
    ) {
        Text(
            text,
            color = Color.White,
            modifier = Modifier.padding(12.dp)
        )
    }
}`}</CodeB>
            ) : (
              <CodeB title="Add below ContentView" accent={GR}>{`struct NarrationCard: View {
    let text: String
    var body: some View {
        Text(text)
            .foregroundColor(.white)
            .padding(12)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(Color.black.opacity(0.6))
            .cornerRadius(10)
    }
}`}</CodeB>
            )}
          </VStep>

          <Checkpoint num={4}>App builds and runs. The camera preview fills the screen; the Start narrating button is visible at the bottom. Tapping it doesn't crash, but you'll see narrations appear in step 5.</Checkpoint>
        </Step>

        <Step num={5} title="Test the full loop (~3 min)">
          <p>Walk through the flow:</p>
          <ol style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 13 }}>
            <li>Run the app. Permission prompt appears (first time only). Tap <strong>Allow</strong></li>
            <li>The camera preview fills the screen</li>
            <li>Tap <strong>Start narrating</strong></li>
            <li>After ~5 seconds, "Claude is looking…" appears, then a narration replaces it</li>
            <li>Every 5 seconds, a new narration appears at the top of the list</li>
            <li>Move the camera to point at something different — within 5 seconds, the narration updates</li>
            <li>Tap <strong>Stop narrating</strong>. The frame stream pauses</li>
          </ol>

          <Section title="🛠 Common issues">
            <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>Black preview, no camera feed.</strong> {isAndroid ? "Permission was denied or PreviewView is not bound. Check that vm.attach(activity, previewView) is being called inside LaunchedEffect — and that the CAMERA permission was granted (look at Settings → Apps → SceneNarrator → Permissions)." : "AVCaptureSession can't start. Check the simulator — most simulators don't have a camera. Run on a real device. Also confirm NSCameraUsageDescription is in Info.plist (the iOS console will print 'must have a description' otherwise)."}</li>
              <li><strong>Preview works, no narrations appear.</strong> {isAndroid ? "The analyzer isn't firing. Check Logcat for any STRATEGY_KEEP_ONLY_LATEST warnings — and confirm proxy.close() is in a finally block so frames aren't backing up." : "captureOutput isn't firing. Confirm the delegate is set, and the queue is running. Add a print(\"frame!\") at the top of captureOutput to check."}</li>
              <li><strong>"401 Unauthorized" from Claude.</strong> Same as Microphone — your API key didn't load. {isAndroid ? "Confirm BuildConfig.CLAUDE_API_KEY is non-empty by logging it (then remove the log)." : "Confirm Bundle.main.infoDictionary?[\"CLAUDE_API_KEY\"] returns a non-nil string."}</li>
              <li><strong>Frames are way more than 1 every 5 seconds.</strong> {isAndroid ? "lastSentMs isn't updating, or the comparison is wrong. Add a Log.d to handleFrame and verify the timestamps." : "lastSent isn't updating, or the captureOutput isn't on the main actor. Add a print to verify the throttle check passes when expected."}</li>
            </ul>
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck after that?</strong> Paste this into Claude with whatever evidence you have:</p>
            <CodeB title="Prompt template" accent={P_C}>{`I'm building a Live Scene Narrator app on ${isAndroid ? "Android with CameraX + Compose + Kotlin" : "iOS with AVFoundation + SwiftUI + Swift"}. The flow is: camera streams frames → throttle to 1 / 5s → base64 → Claude vision API → narration in UI.

Specifically failing at: [describe what you observe]

What I've already verified:
- [list checks you've done]

Here's the relevant code:
[paste the smallest snippet that shows the failure]

What's likely wrong, and what's the next thing I should test?`}</CodeB>
          </AiOpp>

          <Checkpoint num={5}>The full loop works end-to-end: camera → throttled frame → Claude vision → narration. You've shipped a continuous-AI mobile app.</Checkpoint>
        </Step>

        </div>

        <div style={{ marginTop: 16 }}>
          <strong style={{ fontSize: 13 }}>{"📚"} Resources for this modality</strong>
          <ul style={{ paddingLeft: 20, fontSize: 12, lineHeight: 1.8, margin: "6px 0 0" }}>
            {isAndroid ? (
              <>
                <li><Link>Android docs — CameraX overview</Link> (developer.android.com/training/camerax)</li>
                <li><Link>ImageAnalysis use case</Link> — backpressure strategies and analyzer threading</li>
                <li><Link>PreviewView</Link> — embedding camera in Compose via AndroidView</li>
              </>
            ) : (
              <>
                <li><Link>Apple docs — AVCaptureSession</Link> (developer.apple.com/documentation/avfoundation/avcapturesession)</li>
                <li><Link>AVCaptureVideoDataOutput</Link> — pulling frames from the camera</li>
                <li><Link>UIViewRepresentable</Link> — wrapping AVKit views for SwiftUI</li>
              </>
            )}
            <li><Link>Claude vision (multimodal) messages</Link> — sending images via the Messages API</li>
            <li><Link>Claude API pricing</Link> — vision token cost calculator</li>
          </ul>
        </div>

        <Tip><strong>Stretch — perceptual hash to skip unchanged frames:</strong> Most of your frames will be near-identical to the last one (the user is holding the phone still). You can save a lot of tokens by computing a perceptual hash of each frame and only sending if it differs from the last sent frame's hash by some threshold. {isAndroid ? "AverageHash is the simplest — downscale to 8×8 grayscale, compare to mean, build a 64-bit hash. The pHash library on GitHub has Android-friendly implementations." : "Use Vision framework's VNGenerateImageFeaturePrintRequest for a more sophisticated similarity score, or write a quick averageHash helper using CIContext."} Bonus: this naturally gives you "what changed?" semantics — Claude only narrates when something actually changes.</Tip>

        <Tip><strong>Stretch — TTS the narrations as they arrive:</strong> Combine with the Microphone modality's stretch — pipe each narration into {isAndroid ? "Android's TextToSpeech" : "AVSpeechSynthesizer"} so the user can keep their eyes on the world while Claude narrates aloud. This is the foundation of an AI accessibility aid for visually impaired users — the kind of mobile-only AI feature the litmus test points at.</Tip>
      </Section>

      <Section title={"🎙️  Microphone — Voice as input"}>
        <p><strong>What you're building:</strong> A hands-free version of the chat lab. Tap a mic button, speak a question, and the transcript becomes a user message in your existing chat ViewModel — Claude responds the same as if you'd typed.</p>

        <p><strong>The mental model — why no audio ever reaches Claude:</strong> Claude's API accepts text, images, and PDFs, but not raw audio. So you don't send a recording anywhere; instead, the OS does the transcription locally and you only ship the resulting string to Claude. That means there's nothing new on the network side — the entire exercise is about getting a clean transcript out of the OS and into your existing <IC>sendUserMessage()</IC> path.</p>

        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", margin: "10px 0", fontSize: 12, lineHeight: 1.6 }}>
          <strong>Data flow:</strong><br/>
          🎙️ mic input&nbsp;&nbsp;→&nbsp;&nbsp;OS speech recognizer (streaming)&nbsp;&nbsp;→&nbsp;&nbsp;final transcript string&nbsp;&nbsp;→&nbsp;&nbsp;your existing chat ViewModel&nbsp;&nbsp;→&nbsp;&nbsp;Claude
        </div>

        <p>{isAndroid
          ? "Android's piece is android.speech.SpeechRecognizer — a callback-driven object you start, listen to, and stop. It runs the Google speech model that already ships on the device, so there's no extra account, key, or library to add."
          : "iOS gives you two pieces that work together: SFSpeechRecognizer (the brain that turns audio into text) and AVAudioEngine (the pipe that delivers mic audio). You connect them once and let the recognizer stream transcripts back as the user speaks."
        }</p>

        <div style={{ '--platform-accent': isAndroid ? BL : GR } as React.CSSProperties}>

        <Step num={0} title="Create a new project (~3 min)">
          <p>You're starting fresh. The Claude API setup, the chat UI, and the ViewModel will all be new — the goal is to feel the full shape of building a voice-AI app from blank slate. The same patterns from your Session 1 lab apply, just with a microphone in front.</p>

          {isAndroid ? (
            <div>
              <p>In Android Studio: <strong>File → New → New Project</strong>. Select the <strong>Empty Activity</strong> template. Set the name to <IC>VoiceJournal</IC>, the package to <IC>com.yourname.voicejournal</IC>, and the minimum SDK to <strong>API 26</strong>. Make sure <strong>Kotlin DSL</strong> is selected. Click <strong>Finish</strong> and wait for Gradle to sync.</p>
              <p>While you wait, open <IC>app/build.gradle.kts</IC> and add the OkHttp dependency you'll need for the Claude call (same as Session 1):</p>
              <CodeB title="build.gradle.kts (app) — dependencies" accent={BL}>{`implementation("com.squareup.okhttp3:okhttp:4.12.0")`}</CodeB>
            </div>
          ) : (
            <div>
              <p>In Xcode: <strong>File → New → Project</strong>. Select the <strong>App</strong> template under iOS. Set the product name to <IC>VoiceJournal</IC>, confirm the interface is <strong>SwiftUI</strong> and language is <strong>Swift</strong>. Choose a location and click <strong>Create</strong>.</p>
            </div>
          )}

          <p>Now wire up your Claude API key the same way you did in Session 1 Step 1 — store it in <IC>{isAndroid ? "local.properties" : "Secrets.xcconfig"}</IC>, expose it via <IC>{isAndroid ? "BuildConfig" : "Info.plist"}</IC>, and confirm it's not in any committed file. (See the <Link>Lab tab → Session 1 → Step 1</Link> if you need a refresher.)</p>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck setting up the project?</strong> Paste this into Claude:</p>
            <CodeB title="Prompt" accent={P_C}>{isAndroid
              ? `I'm starting a new Android Studio project for a voice-driven AI chat app called VoiceJournal. I just created an Empty Activity project with package com.example.voicejournal, min SDK 26, Kotlin DSL.

I need to:
1. Add OkHttp 4.12.0 as a dependency
2. Store a Claude API key in local.properties (not committed)
3. Expose it via BuildConfig.CLAUDE_API_KEY

Walk me through the build.gradle.kts edits. Show me only what to change, not the whole file.`
              : `I'm starting a new Xcode project for a voice-driven AI chat app called VoiceJournal. I just created a SwiftUI App.

I need to:
1. Create Secrets.xcconfig at the project root with my Claude API key
2. Connect it to Debug and Release configurations
3. Expose CLAUDE_API_KEY via Info.plist
4. Make sure Secrets.xcconfig is gitignored

Walk me through this step by step.`}</CodeB>
          </AiOpp>

          <Checkpoint num={0}>Project created, builds clean, default screen runs in the {isAndroid ? "emulator" : "simulator"}, API key wired and verified absent from any committed file.</Checkpoint>
        </Step>

        <Step num={1} title="Add the microphone permission (~3 min)">
          <p>Before you can record audio, you have to declare you intend to. If you skip this, the recognizer doesn't crash — it just silently fails to ever produce a transcript, which is the most confusing failure mode possible.</p>

          {isAndroid ? (
            <div>
              <p>Open <IC>app/src/main/AndroidManifest.xml</IC> in the Project pane. Add the permission line at the top — INSIDE <IC>{"<manifest>"}</IC> but OUTSIDE <IC>{"<application>"}</IC>:</p>
              <CodeB title="AndroidManifest.xml" accent={BL}>{`<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.RECORD_AUDIO" />

    <application
        ...`}</CodeB>
              <p>That's the manifest declaration. The runtime ask comes later in step 2 — declaring without asking, or asking without declaring, both fail.</p>
            </div>
          ) : (
            <div>
              <p>Open <IC>Info.plist</IC> in the Project Navigator. Right-click in the editor → <strong>Add Row</strong> twice. You need TWO keys: one for the mic itself, one for the speech framework that processes the audio. Skip either and the app crashes the moment you try to start recognition.</p>
              <CodeB title="Info.plist — both keys are required" accent={GR}>{`<key>NSMicrophoneUsageDescription</key>
<string>Used to dictate journal entries to your AI assistant.</string>
<key>NSSpeechRecognitionUsageDescription</key>
<string>Used to convert your voice into text Claude can read.</string>`}</CodeB>
              <p>The description string is shown verbatim in the system permission prompt. Write it as if speaking to the user — describe the benefit, not the technicality.</p>
            </div>
          )}

          <Checkpoint num={1}>Build still succeeds. No visible runtime change yet — the permission ask is wired in step 2.</Checkpoint>
        </Step>

        <Step num={2} title="Create a SpeechManager class (~12 min)">
          <p>You're going to wrap all the speech-recognition lifecycle inside one class so your ChatViewModel doesn't need to know about audio engines, listener callbacks, or buffer taps. From the ViewModel's perspective, this manager will expose just two functions — <IC>start()</IC> and <IC>stop()</IC> — plus a callback for when a transcript is ready.</p>

          <VStep num="a" title="Create the file">
            {isAndroid ? (
              <div>
                <p>In Android Studio's Project pane, expand <IC>app → java → com.yourname.voicejournal</IC>. Right-click the package folder (the one containing <IC>MainActivity.kt</IC>). Select <strong>New → Kotlin Class/File</strong>. Name it <IC>SpeechManager</IC>, choose <strong>Class</strong>, and press Enter.</p>
                <p>Replace the empty class body with this skeleton. We'll fill in the methods over the next sub-steps:</p>
                <CodeB title="SpeechManager.kt" accent={BL}>{`package com.yourname.voicejournal   // match your actual package!

import android.Manifest
import android.content.Intent
import android.os.Bundle
import android.speech.RecognitionListener
import android.speech.RecognizerIntent
import android.speech.SpeechRecognizer
import androidx.activity.ComponentActivity
import androidx.activity.result.contract.ActivityResultContracts

class SpeechManager(
    private val activity: ComponentActivity,
    private val onTranscript: (String) -> Unit,
    private val onError: (String) -> Unit
) {
    private var recognizer: SpeechRecognizer? = null

    private val permissionLauncher = activity.registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        if (granted) beginListening()
        else onError("Microphone permission denied.")
    }

    fun start() { /* fill in next */ }
    fun stop()  { /* fill in next */ }
    private fun beginListening() { /* fill in next */ }
}`}</CodeB>
                <p>The constructor takes the activity (needed to register the permission launcher) and two callbacks — one for successful transcripts, one for errors. The class doesn't know anything about Claude or chat. That's the point: it's a self-contained "voice → string" utility.</p>
              </div>
            ) : (
              <div>
                <p>In Xcode's Project Navigator, right-click your project folder (the one containing <IC>ContentView.swift</IC>). Select <strong>New File → Swift File</strong>. Name it <IC>SpeechManager</IC> and click <strong>Create</strong>.</p>
                <p>Replace the contents with this skeleton. We'll fill in the methods over the next sub-steps:</p>
                <CodeB title="SpeechManager.swift" accent={GR}>{`import Foundation
import Speech
import AVFoundation

@MainActor
class SpeechManager: ObservableObject {
    private let recognizer = SFSpeechRecognizer()!
    private let audioEngine = AVAudioEngine()
    private var request: SFSpeechAudioBufferRecognitionRequest?
    private var task: SFSpeechRecognitionTask?

    private let onTranscript: (String) -> Void
    private let onError: (String) -> Void

    init(onTranscript: @escaping (String) -> Void,
         onError: @escaping (String) -> Void) {
        self.onTranscript = onTranscript
        self.onError = onError
    }

    func start() { /* fill in next */ }
    func stop()  { /* fill in next */ }
    private func beginListening() { /* fill in next */ }
}`}</CodeB>
                <p>The init takes two callbacks — one for successful transcripts, one for errors. The class doesn't know anything about Claude or chat. That's the point: it's a self-contained "voice → string" utility you could lift into any other project.</p>
              </div>
            )}
          </VStep>

          <VStep num="b" title="Implement start() — request permission, then begin listening">
            <p>{isAndroid
              ? "On Android, runtime permission goes through an ActivityResultContract. start() launches the system prompt; the launcher's callback (already wired in step a's skeleton) calls beginListening() if granted. Splitting these keeps the permission flow obvious — one method asks, the other does the work."
              : "On iOS, you ask once for speech-recognition authorization. The callback fires on a background thread, so hop back to the main actor before doing anything UI-related. The permission prompt itself only appears the first time — subsequent calls reuse the saved choice."
            }</p>

            {isAndroid ? (
              <CodeB title="SpeechManager.kt — replace the start() and beginListening() stubs" accent={BL}>{`fun start() {
    permissionLauncher.launch(Manifest.permission.RECORD_AUDIO)
}

private fun beginListening() {
    recognizer = SpeechRecognizer.createSpeechRecognizer(activity).apply {
        setRecognitionListener(listener)   // listener defined in step c
    }
    val intent = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
        putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL,
                 RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
    }
    recognizer?.startListening(intent)
}`}</CodeB>
            ) : (
              <CodeB title="SpeechManager.swift — replace the start() and beginListening() stubs" accent={GR}>{`func start() {
    SFSpeechRecognizer.requestAuthorization { [weak self] status in
        Task { @MainActor in
            guard status == .authorized else {
                self?.onError("Speech recognition not authorized.")
                return
            }
            self?.beginListening()
        }
    }
}

private func beginListening() {
    let req = SFSpeechAudioBufferRecognitionRequest()
    request = req

    // Tap the mic input node — copies each audio buffer to our callback.
    let node = audioEngine.inputNode
    node.installTap(onBus: 0, bufferSize: 1024,
                    format: node.outputFormat(forBus: 0)) { buffer, _ in
        req.append(buffer)
    }

    // Start the audio engine. This is when the mic actually turns on.
    audioEngine.prepare()
    do { try audioEngine.start() }
    catch { onError("Audio engine failed: \\(error)"); return }

    // Now ask the recognizer to consume buffers from req.
    task = recognizer.recognitionTask(with: req) { [weak self] result, _ in
        guard let result, result.isFinal else { return }
        let text = result.bestTranscription.formattedString
        Task { @MainActor in
            self?.onTranscript(text)
            self?.stop()
        }
    }
}`}</CodeB>
            )}

            <Tip>{isAndroid
              ? "Why is permission asked in start(), not in init? Because the user's choice is tied to a clear action — they tapped the mic button. Asking at app launch is jarring and usually denied. Tie permission asks to the moment the feature is actually used."
              : "Why [weak self]? The recognition task can outlive the manager (e.g., if the user navigates away mid-utterance). Without weak, you'd leak the manager — and worse, fire onTranscript on a dead view model. Always [weak self] inside long-lived closures that capture self."
            }</Tip>
          </VStep>

          {isAndroid && (
            <VStep num="c" title="Add the listener that captures transcripts">
              <p>The <IC>RecognitionListener</IC> interface has nine methods, but you only really need two — <IC>onResults</IC> (you got a final transcript) and <IC>onError</IC> (something went wrong, reset state). The other seven exist for advanced cases (visualizing audio levels, partial transcripts) and can stay as empty stubs.</p>
              <p>Add this as a private property of <IC>SpeechManager</IC>, just below the <IC>permissionLauncher</IC>:</p>
              <CodeB title="SpeechManager.kt — add inside the class" accent={BL}>{`private val listener = object : RecognitionListener {
    // The two you actually care about:
    override fun onResults(b: Bundle) {
        val text = b.getStringArrayList(
            SpeechRecognizer.RESULTS_RECOGNITION
        )?.firstOrNull() ?: return
        onTranscript(text)
        stop()
    }
    override fun onError(code: Int) {
        onError("Recognizer error code \$code")
        stop()
    }

    // Required stubs — the SDK won't compile without them:
    override fun onReadyForSpeech(p: Bundle?) {}
    override fun onBeginningOfSpeech() {}
    override fun onRmsChanged(v: Float) {}
    override fun onBufferReceived(b: ByteArray?) {}
    override fun onEndOfSpeech() {}
    override fun onPartialResults(b: Bundle?) {}
    override fun onEvent(e: Int, b: Bundle?) {}
}`}</CodeB>
              <p>The recognizer auto-stops when the user goes quiet for ~1 second, so you'll see <IC>onResults</IC> fire shortly after they finish speaking. We also call <IC>stop()</IC> ourselves to free resources immediately rather than waiting for garbage collection.</p>
            </VStep>
          )}

          <VStep num={isAndroid ? "d" : "c"} title="Implement stop() — clean up resources" last={true}>
            <p>The recognizer auto-stops on silence, but you also need a way to cancel manually — when the user navigates away, taps the mic again to abort, or an error occurs. Always tear down audio resources promptly. {isAndroid ? "Leaving the recognizer instance alive holds references to system services and can leak across configuration changes." : "Leaving the audio engine running drains battery and keeps the iOS \"this app is using your microphone\" indicator visible, which is unsettling for users."}</p>
            {isAndroid ? (
              <CodeB title="SpeechManager.kt — replace the stop() stub" accent={BL}>{`fun stop() {
    recognizer?.stopListening()
    recognizer?.destroy()
    recognizer = null
}`}</CodeB>
            ) : (
              <CodeB title="SpeechManager.swift — replace the stop() stub" accent={GR}>{`func stop() {
    audioEngine.stop()
    audioEngine.inputNode.removeTap(onBus: 0)
    request?.endAudio()
    task?.cancel()
    request = nil
    task = nil
}`}</CodeB>
            )}
          </VStep>

          <Section title={"✅ Check your work — show me the complete SpeechManager." + (isAndroid ? "kt" : "swift")}>
            {isAndroid ? (
              <CodeB title="SpeechManager.kt" accent={BL}>{`package com.yourname.voicejournal

import android.Manifest
import android.content.Intent
import android.os.Bundle
import android.speech.RecognitionListener
import android.speech.RecognizerIntent
import android.speech.SpeechRecognizer
import androidx.activity.ComponentActivity
import androidx.activity.result.contract.ActivityResultContracts

class SpeechManager(
    private val activity: ComponentActivity,
    private val onTranscript: (String) -> Unit,
    private val onError: (String) -> Unit
) {
    private var recognizer: SpeechRecognizer? = null

    private val permissionLauncher = activity.registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        if (granted) beginListening()
        else onError("Microphone permission denied.")
    }

    private val listener = object : RecognitionListener {
        override fun onResults(b: Bundle) {
            val text = b.getStringArrayList(
                SpeechRecognizer.RESULTS_RECOGNITION
            )?.firstOrNull() ?: return
            onTranscript(text)
            stop()
        }
        override fun onError(code: Int) {
            onError("Recognizer error code \$code")
            stop()
        }
        override fun onReadyForSpeech(p: Bundle?) {}
        override fun onBeginningOfSpeech() {}
        override fun onRmsChanged(v: Float) {}
        override fun onBufferReceived(b: ByteArray?) {}
        override fun onEndOfSpeech() {}
        override fun onPartialResults(b: Bundle?) {}
        override fun onEvent(e: Int, b: Bundle?) {}
    }

    fun start() {
        permissionLauncher.launch(Manifest.permission.RECORD_AUDIO)
    }

    private fun beginListening() {
        recognizer = SpeechRecognizer.createSpeechRecognizer(activity).apply {
            setRecognitionListener(listener)
        }
        val intent = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
            putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL,
                     RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
        }
        recognizer?.startListening(intent)
    }

    fun stop() {
        recognizer?.stopListening()
        recognizer?.destroy()
        recognizer = null
    }
}`}</CodeB>
            ) : (
              <CodeB title="SpeechManager.swift" accent={GR}>{`import Foundation
import Speech
import AVFoundation

@MainActor
class SpeechManager: ObservableObject {
    private let recognizer = SFSpeechRecognizer()!
    private let audioEngine = AVAudioEngine()
    private var request: SFSpeechAudioBufferRecognitionRequest?
    private var task: SFSpeechRecognitionTask?

    private let onTranscript: (String) -> Void
    private let onError: (String) -> Void

    init(onTranscript: @escaping (String) -> Void,
         onError: @escaping (String) -> Void) {
        self.onTranscript = onTranscript
        self.onError = onError
    }

    func start() {
        SFSpeechRecognizer.requestAuthorization { [weak self] status in
            Task { @MainActor in
                guard status == .authorized else {
                    self?.onError("Speech recognition not authorized.")
                    return
                }
                self?.beginListening()
            }
        }
    }

    private func beginListening() {
        let req = SFSpeechAudioBufferRecognitionRequest()
        request = req

        let node = audioEngine.inputNode
        node.installTap(onBus: 0, bufferSize: 1024,
                        format: node.outputFormat(forBus: 0)) { buffer, _ in
            req.append(buffer)
        }

        audioEngine.prepare()
        do { try audioEngine.start() }
        catch { onError("Audio engine failed: \\(error)"); return }

        task = recognizer.recognitionTask(with: req) { [weak self] result, _ in
            guard let result, result.isFinal else { return }
            let text = result.bestTranscription.formattedString
            Task { @MainActor in
                self?.onTranscript(text)
                self?.stop()
            }
        }
    }

    func stop() {
        audioEngine.stop()
        audioEngine.inputNode.removeTap(onBus: 0)
        request?.endAudio()
        task?.cancel()
        request = nil
        task = nil
    }
}`}</CodeB>
            )}
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck on this class?</strong> The SpeechManager has a lot of moving parts. Paste this into Claude with whatever you have so far:</p>
            <CodeB title="Prompt" accent={P_C}>{isAndroid
              ? `Here's my SpeechManager.kt so far:

[paste your code]

I'm trying to build a voice-input wrapper around android.speech.SpeechRecognizer. I want it to:
1. Request RECORD_AUDIO permission at runtime
2. Start listening when start() is called
3. Fire an onTranscript callback when the user finishes speaking
4. Clean up properly in stop()

What's wrong / missing? Don't rewrite the whole file — just point out specific lines.`
              : `Here's my SpeechManager.swift so far:

[paste your code]

I'm trying to build a voice-input wrapper around SFSpeechRecognizer. I want it to:
1. Request speech recognition authorization
2. Start the AVAudioEngine and feed buffers to a recognition request
3. Fire an onTranscript callback when result.isFinal is true
4. Clean up the audio engine and recognition task in stop()

What's wrong / missing? Don't rewrite the whole file — just point out specific lines.`}</CodeB>
          </AiOpp>

          <Checkpoint num={2}>SpeechManager.{isAndroid ? "kt" : "swift"} compiles with no errors. No runtime test yet — we need to call it from the UI, which is step 3 and 4.</Checkpoint>
        </Step>

        <Step num={3} title="Build a minimal chat ViewModel and Claude call (~12 min)">
          <p>You need a place for the transcript to land. Build a <IC>ChatViewModel</IC> that holds the chat state, manages the <IC>SpeechManager</IC>, and calls Claude. We'll build it in pieces — each VStep below tells you what to add and why. At the end of the step, expand the "Check your work" reveal to compare against the complete file.</p>

          <p>{isAndroid
            ? "Right-click your package → New → Kotlin Class/File → name it ChatViewModel, choose Class. Start with the package declaration and these imports at the top of the new file:"
            : "Right-click your project folder → New File → Swift File → name it ChatViewModel. Start with this single import at the top:"
          }</p>

          {isAndroid ? (
            <CodeB title="ChatViewModel.kt — imports" accent={BL}>{`package com.yourname.voicejournal   // match your actual package!

import android.app.Application
import androidx.activity.ComponentActivity
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject`}</CodeB>
          ) : (
            <CodeB title="ChatViewModel.swift — imports" accent={GR}>{`import Foundation`}</CodeB>
          )}

          <VStep num="a" title="Define the data models">
            <p>{isAndroid
              ? "Below the imports, define two data classes. ChatMessage represents one message — it has a role (the string \"user\" or \"assistant\", which is what the Claude API expects) and content (the message text). UiState bundles everything the UI needs in one immutable snapshot: the message list plus two booleans for isListening (the mic is recording) and isThinking (Claude hasn't responded yet). Default both flags to false and the list to empty."
              : "Below the import, define ChatMessage as a struct conforming to Identifiable (so SwiftUI's ForEach can distinguish messages) and Codable (so we can encode it for API requests). Give it role and content fields plus an auto-generated UUID. We'll use @Published properties on the ViewModel directly for state instead of a separate UiState struct — Swift's pattern is different from Kotlin's StateFlow."
            }</p>
            {isAndroid ? (
              <CodeB title="Add to ChatViewModel.kt — below the imports" accent={BL}>{`data class ChatMessage(val role: String, val content: String)

data class UiState(
    val messages: List<ChatMessage> = emptyList(),
    val isListening: Boolean = false,
    val isThinking: Boolean = false
)`}</CodeB>
            ) : (
              <CodeB title="Add to ChatViewModel.swift — below the import" accent={GR}>{`struct ChatMessage: Identifiable, Codable {
    let id = UUID()
    let role: String
    let content: String
}`}</CodeB>
            )}
          </VStep>

          <VStep num="b" title="Define the class shell with state holders">
            <p>{isAndroid
              ? "Declare ChatViewModel extending AndroidViewModel — that base class gives you the Application context for free, which we'll need for BuildConfig access later. Inside, expose a MutableStateFlow<UiState> using the standard private-write/public-read pattern from Week 6. Also declare two private members you'll wire up later: an OkHttpClient (one instance, reused for every call), and a nullable SpeechManager that MainActivity will set via attach()."
              : "Declare ChatViewModel as a @MainActor class conforming to ObservableObject. The @MainActor annotation guarantees all your state mutations happen on the main thread, which is what SwiftUI requires. Add three @Published properties — messages, isListening, isThinking — that SwiftUI will observe. The SpeechManager will go as a lazy var in the next step so it can capture self in its callbacks."
            }</p>
            {isAndroid ? (
              <CodeB title="Add below your data classes" accent={BL}>{`class ChatViewModel(app: Application) : AndroidViewModel(app) {
    private val _uiState = MutableStateFlow(UiState())
    val uiState = _uiState.asStateFlow()

    private val client = OkHttpClient()
    private var speech: SpeechManager? = null

    // methods come next
}`}</CodeB>
            ) : (
              <CodeB title="Add below your ChatMessage struct" accent={GR}>{`@MainActor
class ChatViewModel: ObservableObject {
    @Published var messages: [ChatMessage] = []
    @Published var isListening = false
    @Published var isThinking = false

    // speech property + methods come next
}`}</CodeB>
            )}
          </VStep>

          <VStep num="c" title={isAndroid ? "Wire up the SpeechManager via attach()" : "Wire up the SpeechManager as a lazy var"}>
            <p>{isAndroid
              ? "Add an attach(activity: ComponentActivity) method. Why a method instead of taking the activity in the constructor? Because ViewModels survive configuration changes (rotation, theme toggle, etc.) but Activities don't — passing one in the constructor would leak the old Activity reference. Inside attach, create the SpeechManager. The onTranscript callback should reset isListening to false and call sendUserMessage with the transcript. The onError callback just resets isListening for now."
              : "Add a private lazy var named speech that initializes a SpeechManager. Why lazy? Because the closures inside need to capture self — and self isn't available during init. Lazy delays the initialization until the first access, by which point self is ready. The onTranscript callback resets isListening and calls sendUserMessage; onError just resets isListening. Use [weak self] inside both closures to avoid retain cycles — the recognition task can outlive the ViewModel if the user navigates away mid-utterance."
            }</p>
            {isAndroid ? (
              <CodeB title="Add inside the ChatViewModel class" accent={BL}>{`fun attach(activity: ComponentActivity) {
    speech = SpeechManager(
        activity = activity,
        onTranscript = { transcript ->
            _uiState.update { it.copy(isListening = false) }
            sendUserMessage(transcript)
        },
        onError = { _uiState.update { it.copy(isListening = false) } }
    )
}`}</CodeB>
            ) : (
              <CodeB title="Add inside the ChatViewModel class (replaces the placeholder comment)" accent={GR}>{`private lazy var speech: SpeechManager = {
    SpeechManager(
        onTranscript: { [weak self] transcript in
            Task { @MainActor in
                guard let self else { return }
                self.isListening = false
                await self.sendUserMessage(transcript)
            }
        },
        onError: { [weak self] _ in
            Task { @MainActor in self?.isListening = false }
        }
    )
}()`}</CodeB>
            )}
          </VStep>

          <VStep num="d" title="Implement onMicTapped()">
            <p>The mic button calls this. Two things happen: flip <IC>isListening</IC> to true (so the UI can show a recording state), then start the SpeechManager. {isAndroid ? "speech is nullable, so use the safe-call operator." : "Since speech is a lazy var, just access it — the first access initializes it."}</p>
            {isAndroid ? (
              <CodeB title="Add inside the class" accent={BL}>{`fun onMicTapped() {
    _uiState.update { it.copy(isListening = true) }
    speech?.start()
}`}</CodeB>
            ) : (
              <CodeB title="Add inside the class" accent={GR}>{`func onMicTapped() {
    isListening = true
    speech.start()
}`}</CodeB>
            )}
          </VStep>

          <VStep num="e" title="Implement sendUserMessage with optimistic UI update">
            <p>{isAndroid
              ? "When a transcript arrives (or the user types and hits send), three things happen optimistically — before Claude responds: (1) build a new messages list with the user's message appended, (2) set isThinking to true, (3) emit the updated UiState. Then launch a coroutine on viewModelScope. Inside, switch to Dispatchers.IO for the network call (don't block the main thread!). When Claude returns, append the assistant message and clear isThinking."
              : "When a transcript arrives, append the user message and set isThinking to true. Then await callClaude() — Swift's async/await keeps this readable without callback nesting. When the response arrives, append it and clear isThinking. We use try? to keep error handling minimal here; in production you'd want to surface errors to the user."
            }</p>
            {isAndroid ? (
              <CodeB title="Add inside the class" accent={BL}>{`fun sendUserMessage(text: String) {
    val withUser = _uiState.value.messages + ChatMessage("user", text)
    _uiState.update { it.copy(messages = withUser, isThinking = true) }

    viewModelScope.launch {
        val reply = withContext(Dispatchers.IO) { callClaude(withUser) }
        _uiState.update {
            it.copy(
                messages = withUser + ChatMessage("assistant", reply),
                isThinking = false
            )
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Add inside the class" accent={GR}>{`func sendUserMessage(_ text: String) async {
    messages.append(ChatMessage(role: "user", content: text))
    isThinking = true
    let reply = (try? await callClaude()) ?? "(error)"
    messages.append(ChatMessage(role: "assistant", content: reply))
    isThinking = false
}`}</CodeB>
            )}
          </VStep>

          <VStep num="f" title="Implement callClaude" last={true}>
            <p>{isAndroid
              ? "Build a JSON request body with model, max_tokens, and the messages array (each message becomes an object with role + content). POST to https://api.anthropic.com/v1/messages with the x-api-key and anthropic-version: 2023-06-01 headers. Parse the response — Claude returns content[0].text. Mark the method private — only sendUserMessage should call it. This is the same pattern as Session 1's lab, just without streaming for simplicity."
              : "Build a URLRequest pointing at https://api.anthropic.com/v1/messages. Set three headers: x-api-key (from Bundle.main.infoDictionary), anthropic-version: 2023-06-01, and Content-Type: application/json. Build a JSON payload (model, max_tokens, messages — converting each ChatMessage to a [String: String] dictionary) and serialise it. Use URLSession.shared.data(for:) to send and await. Parse content[0].text out of the response — that's Claude's reply."
            }</p>
            {isAndroid ? (
              <CodeB title="Add inside the class" accent={BL}>{`private fun callClaude(history: List<ChatMessage>): String {
    val messages = JSONArray().apply {
        history.forEach {
            put(JSONObject().put("role", it.role).put("content", it.content))
        }
    }
    val body = JSONObject()
        .put("model", "claude-sonnet-4-5")
        .put("max_tokens", 1024)
        .put("messages", messages)
        .toString()
        .toRequestBody("application/json".toMediaType())

    val req = Request.Builder()
        .url("https://api.anthropic.com/v1/messages")
        .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
        .addHeader("anthropic-version", "2023-06-01")
        .post(body)
        .build()

    client.newCall(req).execute().use { response ->
        val json = JSONObject(response.body!!.string())
        return json.getJSONArray("content")
            .getJSONObject(0).getString("text")
    }
}`}</CodeB>
            ) : (
              <CodeB title="Add inside the class" accent={GR}>{`private func callClaude() async throws -> String {
    guard let key = Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String else {
        throw URLError(.userAuthenticationRequired)
    }
    var req = URLRequest(url: URL(string: "https://api.anthropic.com/v1/messages")!)
    req.httpMethod = "POST"
    req.setValue(key, forHTTPHeaderField: "x-api-key")
    req.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
    req.setValue("application/json", forHTTPHeaderField: "Content-Type")

    let payload: [String: Any] = [
        "model": "claude-sonnet-4-5",
        "max_tokens": 1024,
        "messages": messages.map { ["role": $0.role, "content": $0.content] }
    ]
    req.httpBody = try JSONSerialization.data(withJSONObject: payload)

    let (data, _) = try await URLSession.shared.data(for: req)
    let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
    let content = json?["content"] as? [[String: Any]]
    return content?.first?["text"] as? String ?? "(no content)"
}`}</CodeB>
            )}
          </VStep>

          <Section title={"✅ Check your work — show me the complete ChatViewModel." + (isAndroid ? "kt" : "swift")}>
            {isAndroid ? (
              <CodeB title="ChatViewModel.kt" accent={BL}>{`package com.yourname.voicejournal

import android.app.Application
import androidx.activity.ComponentActivity
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject

data class ChatMessage(val role: String, val content: String)

data class UiState(
    val messages: List<ChatMessage> = emptyList(),
    val isListening: Boolean = false,
    val isThinking: Boolean = false
)

class ChatViewModel(app: Application) : AndroidViewModel(app) {
    private val _uiState = MutableStateFlow(UiState())
    val uiState = _uiState.asStateFlow()

    private val client = OkHttpClient()
    private var speech: SpeechManager? = null

    fun attach(activity: ComponentActivity) {
        speech = SpeechManager(
            activity = activity,
            onTranscript = { transcript ->
                _uiState.update { it.copy(isListening = false) }
                sendUserMessage(transcript)
            },
            onError = { _uiState.update { it.copy(isListening = false) } }
        )
    }

    fun onMicTapped() {
        _uiState.update { it.copy(isListening = true) }
        speech?.start()
    }

    fun sendUserMessage(text: String) {
        val withUser = _uiState.value.messages + ChatMessage("user", text)
        _uiState.update { it.copy(messages = withUser, isThinking = true) }

        viewModelScope.launch {
            val reply = withContext(Dispatchers.IO) { callClaude(withUser) }
            _uiState.update {
                it.copy(
                    messages = withUser + ChatMessage("assistant", reply),
                    isThinking = false
                )
            }
        }
    }

    private fun callClaude(history: List<ChatMessage>): String {
        val messages = JSONArray().apply {
            history.forEach {
                put(JSONObject().put("role", it.role).put("content", it.content))
            }
        }
        val body = JSONObject()
            .put("model", "claude-sonnet-4-5")
            .put("max_tokens", 1024)
            .put("messages", messages)
            .toString()
            .toRequestBody("application/json".toMediaType())

        val req = Request.Builder()
            .url("https://api.anthropic.com/v1/messages")
            .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
            .addHeader("anthropic-version", "2023-06-01")
            .post(body)
            .build()

        client.newCall(req).execute().use { response ->
            val json = JSONObject(response.body!!.string())
            return json.getJSONArray("content")
                .getJSONObject(0).getString("text")
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="ChatViewModel.swift" accent={GR}>{`import Foundation

struct ChatMessage: Identifiable, Codable {
    let id = UUID()
    let role: String
    let content: String
}

@MainActor
class ChatViewModel: ObservableObject {
    @Published var messages: [ChatMessage] = []
    @Published var isListening = false
    @Published var isThinking = false

    private lazy var speech: SpeechManager = {
        SpeechManager(
            onTranscript: { [weak self] transcript in
                Task { @MainActor in
                    guard let self else { return }
                    self.isListening = false
                    await self.sendUserMessage(transcript)
                }
            },
            onError: { [weak self] _ in
                Task { @MainActor in self?.isListening = false }
            }
        )
    }()

    func onMicTapped() {
        isListening = true
        speech.start()
    }

    func sendUserMessage(_ text: String) async {
        messages.append(ChatMessage(role: "user", content: text))
        isThinking = true
        let reply = (try? await callClaude()) ?? "(error)"
        messages.append(ChatMessage(role: "assistant", content: reply))
        isThinking = false
    }

    private func callClaude() async throws -> String {
        guard let key = Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String else {
            throw URLError(.userAuthenticationRequired)
        }
        var req = URLRequest(url: URL(string: "https://api.anthropic.com/v1/messages")!)
        req.httpMethod = "POST"
        req.setValue(key, forHTTPHeaderField: "x-api-key")
        req.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")

        let payload: [String: Any] = [
            "model": "claude-sonnet-4-5",
            "max_tokens": 1024,
            "messages": messages.map { ["role": $0.role, "content": $0.content] }
        ]
        req.httpBody = try JSONSerialization.data(withJSONObject: payload)

        let (data, _) = try await URLSession.shared.data(for: req)
        let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
        let content = json?["content"] as? [[String: Any]]
        return content?.first?["text"] as? String ?? "(no content)"
    }
}`}</CodeB>
            )}
          </Section>

          <p style={{ marginTop: 12 }}>This is intentionally simpler than the lab's streaming chat — no SSE parsing, just one HTTP request and one response. Streaming makes voice journaling slightly more responsive but adds complexity that distracts from the modality lesson. Add it as a stretch.</p>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Want to add streaming?</strong> Use this prompt — it's how you'd extend this ViewModel to match the Session 1 lab's behaviour:</p>
            <CodeB title="Prompt" accent={P_C}>{isAndroid
              ? `Convert this Kotlin ChatViewModel from a single-request response to streaming with SSE (Server-Sent Events):

[paste your callClaude function]

The Claude streaming format is documented here: https://docs.anthropic.com/en/api/messages-streaming

I want each chunk of the assistant's response to update the latest message in _uiState as it arrives, like the chat lab from Session 1.`
              : `Convert this Swift ChatViewModel from a single-request response to streaming using URLSession's bytes(for:) and AsyncSequence:

[paste your callClaude function]

The Claude streaming format is documented here: https://docs.anthropic.com/en/api/messages-streaming

I want each chunk of the assistant's response to update the latest message in @Published messages as it arrives.`}</CodeB>
          </AiOpp>

          <Checkpoint num={3}>ChatViewModel.{isAndroid ? "kt" : "swift"} compiles. The references to <IC>SpeechManager</IC> link cleanly to the file you wrote in step 2.</Checkpoint>
        </Step>

        <Step num={4} title="Build the ChatScreen UI (~10 min)">
          <p>Now the visible part: a scrollable list of messages and an input row with a mic button and a thinking indicator. {isAndroid ? "You'll edit MainActivity.kt — Android Studio gave you a default \"Hello World\" Composable when you created the project. We'll replace it." : "You'll edit ContentView.swift — Xcode gave you a default \"Hello, world\" view when you created the project. We'll replace it."}</p>

          <p>{isAndroid
            ? "Open MainActivity.kt. Start by replacing the imports at the top of the file (everything between package and the class declaration) with this set:"
            : "Open ContentView.swift. The default file has just one import — keep that, but you don't need anything else added at the top."
          }</p>

          {isAndroid ? (
            <CodeB title="MainActivity.kt — imports" accent={BL}>{`package com.yourname.voicejournal   // match your actual package!

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Mic
import androidx.compose.material.icons.filled.MicOff
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp`}</CodeB>
          ) : (
            <CodeB title="ContentView.swift — only import you need" accent={GR}>{`import SwiftUI`}</CodeB>
          )}

          <VStep num="a" title={isAndroid ? "Wire MainActivity to call attach()" : "Set up the ContentView with @StateObject"}>
            <p>{isAndroid
              ? "Replace the existing MainActivity class with one that does three things in onCreate: (1) get a ChatViewModel instance via the by viewModels() delegate, (2) call attach(this) to wire up the SpeechManager — remember from Step 3, attach is what gives the ViewModel an Activity reference for the permission launcher, (3) set the content to the ChatScreen Composable wrapped in MaterialTheme."
              : "Replace the existing ContentView struct with one that owns a ChatViewModel via @StateObject (so it survives view re-renders). The body will be a VStack we'll fill in over the next two sub-steps. For now, just stub it with a Text so the file compiles."
            }</p>
            {isAndroid ? (
              <CodeB title="Add below the imports" accent={BL}>{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val viewModel: ChatViewModel by viewModels()
        viewModel.attach(this)              // wire up the speech manager
        setContent {
            MaterialTheme { ChatScreen(viewModel) }
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Replace the existing ContentView" accent={GR}>{`struct ContentView: View {
    @StateObject private var vm = ChatViewModel()

    var body: some View {
        VStack(spacing: 0) {
            // message list (next step) + input row (step c) go here
            Text("placeholder")
        }
    }
}

#Preview { ContentView() }`}</CodeB>
            )}
            <Tip>{isAndroid
              ? "by viewModels() is a Kotlin property delegate that gives you a ViewModel scoped to this Activity. The ViewModel survives configuration changes (rotation), but the Activity itself doesn't — that's why we call attach() AFTER getting the ViewModel, so the new Activity's reference is what's stored."
              : "@StateObject is the right wrapper here (not @ObservedObject) because ContentView OWNS the ViewModel. Use @ObservedObject only when a view receives a ViewModel from a parent."
            }</Tip>
          </VStep>

          <VStep num="b" title={isAndroid ? "Build the ChatScreen Composable — message list + input row" : "Build the message list and input row"}>
            <p>{isAndroid
              ? "Define a Composable named ChatScreen that takes the ViewModel as a parameter. Use collectAsState() to subscribe to the StateFlow — every emission triggers a recomposition. The layout is a Column with two children: a LazyColumn (which takes weight(1f) so it fills available space) for the messages, and a Row at the bottom for the input."
              : "Inside the body's VStack, you need two pieces. First, a ScrollView wrapping a LazyVStack that iterates over vm.messages and renders MessageBubble for each. Wrap that in a ScrollViewReader so we can auto-scroll to the latest message when a new one arrives. Second, an HStack with the listening status text on the left and the mic button on the right."
            }</p>
            <p>{isAndroid
              ? "Two key details: (1) reverseLayout = true on the LazyColumn means item index 0 is at the bottom, which is the natural chat behaviour — we'll iterate state.messages.reversed() so the newest is at index 0; (2) the thinking indicator is conditionally added with if (state.isThinking) item { ... } at the top of the list."
              : "Two key details: (1) the .onChange modifier on .messages.count triggers proxy.scrollTo whenever a new message arrives, animating the scroll; (2) the mic button is .disabled when listening or thinking, and its icon swaps based on isListening."
            }</p>
            {isAndroid ? (
              <CodeB title="Add below MainActivity" accent={BL}>{`@Composable
fun ChatScreen(vm: ChatViewModel) {
    val state by vm.uiState.collectAsState()

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        LazyColumn(
            modifier = Modifier.weight(1f),
            reverseLayout = true
        ) {
            if (state.isThinking) item {
                Text("Claude is thinking…", modifier = Modifier.padding(8.dp))
            }
            items(state.messages.reversed()) { msg ->
                MessageBubble(msg)        // we'll define this in VStep c
            }
        }
        Row(
            modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                if (state.isListening) "Listening…" else "Tap the mic to speak",
                modifier = Modifier.weight(1f)
            )
            IconButton(
                onClick = { vm.onMicTapped() },
                enabled = !state.isListening && !state.isThinking
            ) {
                Icon(
                    if (state.isListening) Icons.Default.MicOff
                    else Icons.Default.Mic,
                    contentDescription = "Speak",
                    tint = if (state.isListening) Color.Red else Color.Unspecified
                )
            }
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Replace the body of ContentView" accent={GR}>{`var body: some View {
    VStack(spacing: 0) {
        ScrollViewReader { proxy in
            ScrollView {
                LazyVStack(alignment: .leading, spacing: 8) {
                    ForEach(vm.messages) { msg in
                        MessageBubble(msg: msg).id(msg.id)   // we'll define this in VStep c
                    }
                    if vm.isThinking {
                        Text("Claude is thinking…")
                            .foregroundColor(.secondary)
                            .padding(.horizontal)
                    }
                }
                .padding()
            }
            .onChange(of: vm.messages.count) { _ in
                if let last = vm.messages.last {
                    withAnimation { proxy.scrollTo(last.id, anchor: .bottom) }
                }
            }
        }

        HStack {
            Text(vm.isListening ? "Listening…" : "Tap the mic to speak")
                .foregroundColor(.secondary)
            Spacer()
            Button(action: { vm.onMicTapped() }) {
                Image(systemName: vm.isListening ? "mic.fill" : "mic")
                    .font(.title2)
                    .foregroundColor(vm.isListening ? .red : .accentColor)
            }
            .disabled(vm.isListening || vm.isThinking)
        }
        .padding()
    }
}`}</CodeB>
            )}
          </VStep>

          <VStep num="c" title="Build the MessageBubble component" last={true}>
            <p>{isAndroid
              ? "MessageBubble takes a ChatMessage and renders it as a chat bubble — purple with white text if the role is \"user\" (right-aligned), light gray with black text otherwise (left-aligned). Use horizontalArrangement on the wrapping Row to flip alignment, and a Box with a coloured background and rounded corners for the bubble itself."
              : "MessageBubble takes a ChatMessage and renders it as a chat bubble — purple with white text if the role is \"user\" (right-aligned via a leading Spacer), light gray with primary text otherwise (left-aligned via a trailing Spacer). Use .background and .cornerRadius modifiers on the Text to get the bubble shape."
            }</p>
            {isAndroid ? (
              <CodeB title="Add below ChatScreen" accent={BL}>{`@Composable
fun MessageBubble(msg: ChatMessage) {
    val isUser = msg.role == "user"
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
        horizontalArrangement = if (isUser) Arrangement.End else Arrangement.Start
    ) {
        Box(
            modifier = Modifier
                .background(
                    if (isUser) Color(0xFF7F52FF) else Color(0xFFE8E8E8),
                    RoundedCornerShape(12.dp)
                )
                .padding(horizontal = 14.dp, vertical = 10.dp)
        ) {
            Text(msg.content, color = if (isUser) Color.White else Color.Black)
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Add below ContentView" accent={GR}>{`struct MessageBubble: View {
    let msg: ChatMessage
    var body: some View {
        HStack {
            if msg.role == "user" { Spacer(minLength: 60) }
            Text(msg.content)
                .padding(.horizontal, 14).padding(.vertical, 10)
                .background(msg.role == "user" ? Color.purple : Color(.systemGray5))
                .foregroundColor(msg.role == "user" ? .white : .primary)
                .cornerRadius(12)
            if msg.role != "user" { Spacer(minLength: 60) }
        }
    }
}`}</CodeB>
            )}
          </VStep>

          <Section title={"✅ Check your work — show me the complete " + (isAndroid ? "MainActivity.kt" : "ContentView.swift")}>
            {isAndroid ? (
              <CodeB title="MainActivity.kt" accent={BL}>{`package com.yourname.voicejournal

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Mic
import androidx.compose.material.icons.filled.MicOff
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val viewModel: ChatViewModel by viewModels()
        viewModel.attach(this)
        setContent { MaterialTheme { ChatScreen(viewModel) } }
    }
}

@Composable
fun ChatScreen(vm: ChatViewModel) {
    val state by vm.uiState.collectAsState()

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        LazyColumn(
            modifier = Modifier.weight(1f),
            reverseLayout = true
        ) {
            if (state.isThinking) item {
                Text("Claude is thinking…", modifier = Modifier.padding(8.dp))
            }
            items(state.messages.reversed()) { msg ->
                MessageBubble(msg)
            }
        }
        Row(
            modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                if (state.isListening) "Listening…" else "Tap the mic to speak",
                modifier = Modifier.weight(1f)
            )
            IconButton(
                onClick = { vm.onMicTapped() },
                enabled = !state.isListening && !state.isThinking
            ) {
                Icon(
                    if (state.isListening) Icons.Default.MicOff else Icons.Default.Mic,
                    contentDescription = "Speak",
                    tint = if (state.isListening) Color.Red else Color.Unspecified
                )
            }
        }
    }
}

@Composable
fun MessageBubble(msg: ChatMessage) {
    val isUser = msg.role == "user"
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
        horizontalArrangement = if (isUser) Arrangement.End else Arrangement.Start
    ) {
        Box(
            modifier = Modifier
                .background(
                    if (isUser) Color(0xFF7F52FF) else Color(0xFFE8E8E8),
                    RoundedCornerShape(12.dp)
                )
                .padding(horizontal = 14.dp, vertical = 10.dp)
        ) {
            Text(msg.content, color = if (isUser) Color.White else Color.Black)
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="ContentView.swift" accent={GR}>{`import SwiftUI

struct ContentView: View {
    @StateObject private var vm = ChatViewModel()

    var body: some View {
        VStack(spacing: 0) {
            ScrollViewReader { proxy in
                ScrollView {
                    LazyVStack(alignment: .leading, spacing: 8) {
                        ForEach(vm.messages) { msg in
                            MessageBubble(msg: msg).id(msg.id)
                        }
                        if vm.isThinking {
                            Text("Claude is thinking…")
                                .foregroundColor(.secondary)
                                .padding(.horizontal)
                        }
                    }
                    .padding()
                }
                .onChange(of: vm.messages.count) { _ in
                    if let last = vm.messages.last {
                        withAnimation { proxy.scrollTo(last.id, anchor: .bottom) }
                    }
                }
            }

            HStack {
                Text(vm.isListening ? "Listening…" : "Tap the mic to speak")
                    .foregroundColor(.secondary)
                Spacer()
                Button(action: { vm.onMicTapped() }) {
                    Image(systemName: vm.isListening ? "mic.fill" : "mic")
                        .font(.title2)
                        .foregroundColor(vm.isListening ? .red : .accentColor)
                }
                .disabled(vm.isListening || vm.isThinking)
            }
            .padding()
        }
    }
}

struct MessageBubble: View {
    let msg: ChatMessage
    var body: some View {
        HStack {
            if msg.role == "user" { Spacer(minLength: 60) }
            Text(msg.content)
                .padding(.horizontal, 14).padding(.vertical, 10)
                .background(msg.role == "user" ? Color.purple : Color(.systemGray5))
                .foregroundColor(msg.role == "user" ? .white : .primary)
                .cornerRadius(12)
            if msg.role != "user" { Spacer(minLength: 60) }
        }
    }
}

#Preview { ContentView() }`}</CodeB>
            )}
          </Section>

          <p style={{ marginTop: 12 }}><strong>The lesson worth noticing:</strong> the mic button just calls <IC>onMicTapped()</IC>. It doesn't know about audio engines, listeners, or transcripts. The UI is clean of modality complexity — all of that lives in <IC>SpeechManager</IC>. This is the same separation-of-concerns pattern from the lab's MVVM, applied to a new modality.</p>

          <Checkpoint num={4}>The app builds. Run it. The chat screen appears with a mic button and "Tap the mic to speak" placeholder text. The mic button is enabled, ready to tap.</Checkpoint>
        </Step>

        <Step num={5} title="Test the full loop (~3 min)">
          <p>Walk through the flow end-to-end:</p>
          <ol style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 13 }}>
            <li>Tap mic → permission prompt appears (first time only) → tap <strong>Allow</strong></li>
            <li>Speak: "What's a fun fact about octopuses?"</li>
            <li>Stop talking. After ~1 second of silence, the recognizer fires{isAndroid ? " onResults" : " its completion with isFinal=true"}</li>
            <li>The transcript appears in the message list as a user bubble</li>
            <li>"Claude is thinking…" appears briefly</li>
            <li>Claude's response appears in a gray bubble</li>
            <li>The mic button re-enables, ready for the next turn</li>
          </ol>

          <Section title="🛠 Common issues">
            <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>No permission prompt → silent failure.</strong> {isAndroid ? "Re-check the manifest edit from step 1, and that permissionLauncher.launch(...) actually fires when the mic is tapped (set a breakpoint)." : "Re-check both Info.plist keys from step 1. Missing the speech key in particular causes a silent crash on first start()."}</li>
              <li><strong>Permission granted, recognizer never returns.</strong> {isAndroid ? "Some emulators don't ship with the speech model. Try a real device, or in the emulator: Settings → System → Languages → install an offline language pack." : "The simulator needs internet for speech recognition by default. Confirm WiFi works in Safari, or enable on-device recognition: recognizer.supportsOnDeviceRecognition && (request.requiresOnDeviceRecognition = true)."}</li>
              <li><strong>Transcripts come through but Claude doesn't respond.</strong> Set a breakpoint inside the <IC>onTranscript</IC> closure. If <IC>sendUserMessage</IC> is called, the issue is downstream (your Claude call). If not, your SpeechManager isn't wired to the ViewModel correctly.</li>
              <li><strong>"401 Unauthorized" from Claude.</strong> Your API key didn't load. {isAndroid ? "Confirm BuildConfig.CLAUDE_API_KEY isn't an empty string by logging it (then remove the log!)." : "Confirm Bundle.main.infoDictionary?[\"CLAUDE_API_KEY\"] returns a non-nil string."}</li>
            </ul>
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Still stuck after that?</strong> Paste this into Claude with whatever evidence you have (logs, screenshots, code):</p>
            <CodeB title="Prompt template" accent={P_C}>{`I'm building a Voice Journal app on ${isAndroid ? "Android with Compose + Kotlin" : "iOS with SwiftUI + Swift"}. The flow is: tap mic → ${isAndroid ? "android.speech.SpeechRecognizer" : "SFSpeechRecognizer"} transcribes → transcript goes to my ChatViewModel → Claude API call → response in chat.

Specifically failing at: [describe what you observe]

What I've already verified:
- [list checks you've done]

Here's the relevant code:
[paste the smallest snippet that shows the failure]

What's likely wrong, and what's the next thing I should test?`}</CodeB>
          </AiOpp>

          <Checkpoint num={5}>The full loop works end-to-end: voice → transcript → Claude → response. You've shipped your first multi-modality AI app from scratch.</Checkpoint>
        </Step>

        </div>

        <div style={{ marginTop: 16 }}>
          <strong style={{ fontSize: 13 }}>{"📚"} Resources for this modality</strong>
          <ul style={{ paddingLeft: 20, fontSize: 12, lineHeight: 1.8, margin: "6px 0 0" }}>
            {isAndroid ? (
              <>
                <li><Link>Android docs — SpeechRecognizer</Link> (developer.android.com/reference/android/speech/SpeechRecognizer)</li>
                <li><Link>RecognitionListener interface</Link> — the nine callbacks explained</li>
                <li><Link>Runtime permissions guide</Link> — best practices for the ask</li>
                <li><Link>TextToSpeech API</Link> — for the closing-the-loop stretch</li>
              </>
            ) : (
              <>
                <li><Link>Apple docs — SFSpeechRecognizer</Link> (developer.apple.com/documentation/speech/sfspeechrecognizer)</li>
                <li><Link>SFSpeechAudioBufferRecognitionRequest</Link> — buffer-driven recognition</li>
                <li><Link>AVAudioEngine and tap installation</Link></li>
                <li><Link>AVSpeechSynthesizer</Link> — for the closing-the-loop stretch</li>
              </>
            )}
            <li><Link>Claude Messages API</Link> — for converting your transcript into a Claude call</li>
          </ul>
        </div>

        <Tip><strong>Stretch — close the loop with TTS:</strong> Pipe Claude's response into {isAndroid ? "Android's TextToSpeech" : "AVSpeechSynthesizer"}. The naive approach waits for the full response then speaks it, which adds 5+ seconds of latency on top of generation. If you've also added streaming (see the Step 3 AI prompt), split the streaming text on sentence boundaries (".", "?", "!") and queue each completed sentence to TTS as it arrives. The user hears the answer start in under a second while the rest is still being generated. This is exactly how Siri and Alexa feel snappy despite using LLMs under the hood.</Tip>

        <Tip><strong>Stretch — show partial transcripts as the user speaks:</strong> The recognizer streams partial results every few hundred ms before the final transcript fires. {isAndroid ? "Set EXTRA_PARTIAL_RESULTS = true on the intent and override onPartialResults to forward the running text." : "Drop the result.isFinal guard and update a livePartial @Published string on every callback."} Render this in a different color in the input field so the user sees their voice being transcribed in real time. It's also great for debugging — if partials come through but final never fires, you know the recognizer is alive and just isn't detecting end-of-speech.</Tip>
      </Section>

      <Section title={"📍  GPS & Location — Context the cloud doesn't have"}>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 8px" }}>~25 min · standalone mini-app · the simplest sensor-fusion win</p>

        <p><strong>What you're building:</strong> A "what's good near me?" recommender. The app shows the user's current location, lets them type any question ("food spots?", "things to do tonight?"), and sends both to Claude — which uses its world knowledge to give location-grounded answers.</p>

        <p><strong>The mental model — why this is the easiest modality:</strong> Unlike vision, audio, or sensors, location-aware AI is just <em>text plus another text string</em>. Get the lat/lng, format it nicely, prepend it to the user's prompt, send to Claude. The whole modality boils down to "extra context in the prompt." That's why it's the simplest sensor-fusion to add to ANY of your other apps (capstone hint!).</p>

        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", margin: "10px 0", fontSize: 12, lineHeight: 1.6 }}>
          <strong>Data flow:</strong><br/>
          📍 OS location service&nbsp;&nbsp;→&nbsp;&nbsp;lat/lng + (optional) reverse geocode&nbsp;&nbsp;→&nbsp;&nbsp;formatted location string&nbsp;&nbsp;→&nbsp;&nbsp;injected into prompt&nbsp;&nbsp;→&nbsp;&nbsp;Claude (text API)
        </div>

        <p>{isAndroid
          ? "Android's piece is FusedLocationProviderClient from Google Play services. It picks the best location signal (GPS, WiFi, cell triangulation) for you — way easier than the older LocationManager API. You'll need to add the play-services-location dependency."
          : "iOS uses CLLocationManager from CoreLocation. It's built into the OS — no extra dependency. The pattern is delegate-based: you call requestLocation() once and the OS calls back with the result via didUpdateLocations."
        }</p>

        <div style={{ '--platform-accent': isAndroid ? BL : GR } as React.CSSProperties}>

        <Step num={0} title="Create a new project (~3 min)">
          {isAndroid ? (
            <div>
              <p>In Android Studio: <strong>File → New → New Project</strong> → <strong>Empty Activity</strong>. Name it <IC>NearMe</IC>, package <IC>com.yourname.nearme</IC>, min SDK <strong>API 26</strong>, Kotlin DSL. <strong>Finish</strong>.</p>
              <p>Open <IC>app/build.gradle.kts</IC> and add the dependencies:</p>
              <CodeB title="build.gradle.kts (app) — dependencies" accent={BL}>{`implementation("com.squareup.okhttp3:okhttp:4.12.0")
implementation("com.google.android.gms:play-services-location:21.3.0")`}</CodeB>
              <p>Click <strong>Sync Now</strong>. Then wire the Claude API key the same way you did in <Link>Lab Session 1 → Step 1</Link>.</p>
            </div>
          ) : (
            <div>
              <p>In Xcode: <strong>File → New → Project</strong> → <strong>App</strong>. Name it <IC>NearMe</IC>, SwiftUI + Swift. <strong>Create</strong>.</p>
              <p>CoreLocation is built in — no extra dependency. Wire the Claude API key the same way you did in <Link>Lab Session 1 → Step 1</Link>.</p>
            </div>
          )}

          <Checkpoint num={0}>Project builds and runs. API key wired and verified absent from any committed file.</Checkpoint>
        </Step>

        <Step num={1} title="Add the location permission (~3 min)">
          <p>Location is one of the more sensitive permissions — be deliberate about asking. Both platforms also offer "approximate" vs "precise" location; for a "what's near me?" app, precise is appropriate.</p>

          {isAndroid ? (
            <div>
              <p>Open <IC>AndroidManifest.xml</IC>. Add the permission INSIDE <IC>{"<manifest>"}</IC> but OUTSIDE <IC>{"<application>"}</IC>:</p>
              <CodeB title="AndroidManifest.xml" accent={BL}>{`<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />`}</CodeB>
              <p>Declaring both gives the user the choice between fine and coarse on Android 12+. We'll request <IC>ACCESS_FINE_LOCATION</IC> at runtime — if the user grants only coarse, the API still returns a location, just less accurate.</p>
            </div>
          ) : (
            <div>
              <p>Open <IC>Info.plist</IC>. Right-click → <strong>Add Row</strong>. Add the location-when-in-use description:</p>
              <CodeB title="Info.plist" accent={GR}>{`<key>NSLocationWhenInUseUsageDescription</key>
<string>Used to find restaurants and activities near you.</string>`}</CodeB>
              <p>"When in use" is appropriate for foreground-only features. If you wanted background location (like the Always-on Presence modality), you'd need <IC>NSLocationAlwaysAndWhenInUseUsageDescription</IC> instead.</p>
            </div>
          )}

          <Checkpoint num={1}>Build still succeeds. Runtime ask comes in step 2.</Checkpoint>
        </Step>

        <Step num={2} title="Build a LocationManager class (~10 min)">
          <p>Wrap the location lookup so the ChatViewModel just sees a clean <IC>fetch(onLocation: ...)</IC> API. The class handles permission, the system call, and (optionally) reverse geocoding.</p>

          <VStep num="a" title="Create the file">
            {isAndroid ? (
              <div>
                <p>Right-click your package → <strong>New → Kotlin Class/File</strong> → name it <IC>LocationManager</IC>, choose <strong>Class</strong>. Paste:</p>
                <CodeB title="LocationManager.kt" accent={BL}>{`package com.yourname.nearme

import android.Manifest
import android.location.Geocoder
import android.location.Location
import androidx.activity.ComponentActivity
import androidx.activity.result.contract.ActivityResultContracts
import com.google.android.gms.location.LocationServices
import java.util.Locale

class LocationManager(
    private val activity: ComponentActivity,
    private val onLocation: (String) -> Unit,
    private val onError: (String) -> Unit
) {
    private val client =
        LocationServices.getFusedLocationProviderClient(activity)

    private val permissionLauncher = activity.registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        if (granted) fetch()
        else onError("Location permission denied.")
    }

    fun request() { /* fill in next */ }
    private fun fetch() { /* fill in next */ }
}`}</CodeB>
                <p>Constructor takes the activity, an onLocation callback (we'll pass it a human-friendly string like "37.78°N, 122.42°W (San Francisco)"), and an onError. The permission launcher is wired identically to the SpeechManager pattern.</p>
              </div>
            ) : (
              <div>
                <p>Right-click your project folder → <strong>New File → Swift File</strong> → name it <IC>LocationManager</IC>. Paste:</p>
                <CodeB title="LocationManager.swift" accent={GR}>{`import Foundation
import CoreLocation

@MainActor
class LocationManager: NSObject, ObservableObject {
    private let manager = CLLocationManager()
    private let geocoder = CLGeocoder()

    private var onLocation: ((String) -> Void)?
    private var onError: ((String) -> Void)?

    override init() {
        super.init()
        manager.delegate = self
        manager.desiredAccuracy = kCLLocationAccuracyHundredMeters
    }

    func request(onLocation: @escaping (String) -> Void,
                 onError: @escaping (String) -> Void) {
        self.onLocation = onLocation
        self.onError = onError
        // fill in next
    }
}`}</CodeB>
                <p>The class extends NSObject (required to be a CLLocationManagerDelegate). We store the callbacks as properties so the delegate methods (which fire later, asynchronously) can use them. The geocoder is for the reverse-geocoding stretch — we'll use it in step c.</p>
              </div>
            )}
          </VStep>

          <VStep num="b" title="Implement the request flow">
            <p>{isAndroid
              ? "request() launches the permission ask, which (if granted) calls fetch() via the launcher's callback. fetch() asks for the last known location — that's almost always good enough for a 'what's near me?' use case and avoids a multi-second GPS warm-up."
              : "request() asks for when-in-use authorization, then immediately calls requestLocation(). The delegate methods (next step) handle the result. Note: if the user has previously authorized, requestWhenInUseAuthorization() is a no-op and the location request fires immediately."
            }</p>
            {isAndroid ? (
              <CodeB title="Replace the request() and fetch() stubs" accent={BL}>{`fun request() {
    permissionLauncher.launch(Manifest.permission.ACCESS_FINE_LOCATION)
}

private fun fetch() {
    client.lastLocation
        .addOnSuccessListener { loc: Location? ->
            if (loc == null) {
                onError("No location available.")
                return@addOnSuccessListener
            }
            // Reverse geocode for a friendlier prompt — see step c
            describe(loc) { description -> onLocation(description) }
        }
        .addOnFailureListener { onError("Location lookup failed.") }
}`}</CodeB>
            ) : (
              <CodeB title="Replace the request() body (still in LocationManager)" accent={GR}>{`func request(onLocation: @escaping (String) -> Void,
             onError: @escaping (String) -> Void) {
    self.onLocation = onLocation
    self.onError = onError

    let status = manager.authorizationStatus
    if status == .notDetermined {
        manager.requestWhenInUseAuthorization()
    } else if status == .denied || status == .restricted {
        onError("Location permission denied.")
        return
    }
    manager.requestLocation()
}`}</CodeB>
            )}
            <Tip>{isAndroid
              ? "lastLocation is a cached value from the last app to use location services — it can be stale by minutes or null if no app has requested location recently. For more accurate results, use requestLocationUpdates with a single-shot LocationRequest. For 'what's near me?', staleness of a few minutes is fine."
              : "kCLLocationAccuracyHundredMeters is the right tradeoff for this use case — it's fast (uses cached cell/wifi data), low battery impact, and gives Claude enough precision to identify the neighbourhood. Use kCLLocationAccuracyBest only when you need precise positioning."
            }</Tip>
          </VStep>

          <VStep num="c" title={isAndroid ? "Add reverse geocoding for friendlier prompts" : "Implement the delegate callbacks"} last={true}>
            {isAndroid ? (
              <div>
                <p>Claude reasons way better about "Mission District, San Francisco" than "37.7599, -122.4148". Reverse-geocode the lat/lng to a place name; if it fails, fall back to coordinates.</p>
                <CodeB title="Add inside the class" accent={BL}>{`private fun describe(loc: Location, callback: (String) -> Unit) {
    val coords = "%.4f,%.4f".format(loc.latitude, loc.longitude)
    try {
        val geocoder = Geocoder(activity, Locale.getDefault())
        val results = geocoder.getFromLocation(loc.latitude, loc.longitude, 1)
        val place = results?.firstOrNull()
        val name = listOfNotNull(
            place?.subLocality, place?.locality, place?.adminArea
        ).joinToString(", ")
        callback(if (name.isNotEmpty()) "$name (\$coords)" else coords)
    } catch (e: Exception) {
        callback(coords)   // network unavailable — fall back to raw coords
    }
}`}</CodeB>
                <p>Geocoder.getFromLocation requires network on most devices. Wrap it in try/catch — if you're offline, return raw coordinates instead of crashing.</p>
              </div>
            ) : (
              <div>
                <p>Add a CLLocationManagerDelegate extension at the bottom of the file. The delegate has two callbacks we care about: didUpdateLocations (got it!) and didFailWithError (couldn't get it). On success, reverse-geocode the location for a friendlier prompt — Claude reasons way better about "Mission District, San Francisco" than "37.7599, -122.4148".</p>
                <CodeB title="Add at the bottom of LocationManager.swift" accent={GR}>{`extension LocationManager: CLLocationManagerDelegate {
    nonisolated func locationManager(_ m: CLLocationManager,
                                     didUpdateLocations locs: [CLLocation]) {
        guard let loc = locs.first else { return }
        Task { @MainActor in await self.describe(loc) }
    }

    nonisolated func locationManager(_ m: CLLocationManager,
                                     didFailWithError error: Error) {
        Task { @MainActor in
            self.onError?("Location failed: \\(error.localizedDescription)")
        }
    }
}

extension LocationManager {
    private func describe(_ loc: CLLocation) async {
        let coords = String(format: "%.4f,%.4f",
                            loc.coordinate.latitude,
                            loc.coordinate.longitude)
        do {
            let placemarks = try await geocoder.reverseGeocodeLocation(loc)
            if let p = placemarks.first {
                let name = [p.subLocality, p.locality, p.administrativeArea]
                    .compactMap { $0 }.joined(separator: ", ")
                onLocation?(name.isEmpty ? coords : "\\(name) (\\(coords))")
            } else {
                onLocation?(coords)
            }
        } catch {
            onLocation?(coords)   // network unavailable — fall back
        }
    }
}`}</CodeB>
                <p>The nonisolated keyword is required because CLLocationManagerDelegate methods can fire on any thread; the Task @MainActor hops back to main before touching @Published state.</p>
              </div>
            )}
          </VStep>

          <Section title={"✅ Check your work — show me the complete LocationManager." + (isAndroid ? "kt" : "swift")}>
            {isAndroid ? (
              <CodeB title="LocationManager.kt" accent={BL}>{`package com.yourname.nearme

import android.Manifest
import android.location.Geocoder
import android.location.Location
import androidx.activity.ComponentActivity
import androidx.activity.result.contract.ActivityResultContracts
import com.google.android.gms.location.LocationServices
import java.util.Locale

class LocationManager(
    private val activity: ComponentActivity,
    private val onLocation: (String) -> Unit,
    private val onError: (String) -> Unit
) {
    private val client =
        LocationServices.getFusedLocationProviderClient(activity)

    private val permissionLauncher = activity.registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        if (granted) fetch()
        else onError("Location permission denied.")
    }

    fun request() {
        permissionLauncher.launch(Manifest.permission.ACCESS_FINE_LOCATION)
    }

    private fun fetch() {
        client.lastLocation
            .addOnSuccessListener { loc ->
                if (loc == null) { onError("No location available."); return@addOnSuccessListener }
                describe(loc) { onLocation(it) }
            }
            .addOnFailureListener { onError("Location lookup failed.") }
    }

    private fun describe(loc: Location, callback: (String) -> Unit) {
        val coords = "%.4f,%.4f".format(loc.latitude, loc.longitude)
        try {
            val results = Geocoder(activity, Locale.getDefault())
                .getFromLocation(loc.latitude, loc.longitude, 1)
            val p = results?.firstOrNull()
            val name = listOfNotNull(p?.subLocality, p?.locality, p?.adminArea)
                .joinToString(", ")
            callback(if (name.isNotEmpty()) "$name (\$coords)" else coords)
        } catch (e: Exception) {
            callback(coords)
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="LocationManager.swift" accent={GR}>{`import Foundation
import CoreLocation

@MainActor
class LocationManager: NSObject, ObservableObject {
    private let manager = CLLocationManager()
    private let geocoder = CLGeocoder()

    private var onLocation: ((String) -> Void)?
    private var onError: ((String) -> Void)?

    override init() {
        super.init()
        manager.delegate = self
        manager.desiredAccuracy = kCLLocationAccuracyHundredMeters
    }

    func request(onLocation: @escaping (String) -> Void,
                 onError: @escaping (String) -> Void) {
        self.onLocation = onLocation
        self.onError = onError

        let status = manager.authorizationStatus
        if status == .notDetermined {
            manager.requestWhenInUseAuthorization()
        } else if status == .denied || status == .restricted {
            onError("Location permission denied.")
            return
        }
        manager.requestLocation()
    }
}

extension LocationManager: CLLocationManagerDelegate {
    nonisolated func locationManager(_ m: CLLocationManager,
                                     didUpdateLocations locs: [CLLocation]) {
        guard let loc = locs.first else { return }
        Task { @MainActor in await self.describe(loc) }
    }

    nonisolated func locationManager(_ m: CLLocationManager,
                                     didFailWithError error: Error) {
        Task { @MainActor in
            self.onError?("Location failed: \\(error.localizedDescription)")
        }
    }
}

extension LocationManager {
    private func describe(_ loc: CLLocation) async {
        let coords = String(format: "%.4f,%.4f",
                            loc.coordinate.latitude,
                            loc.coordinate.longitude)
        do {
            let placemarks = try await geocoder.reverseGeocodeLocation(loc)
            if let p = placemarks.first {
                let name = [p.subLocality, p.locality, p.administrativeArea]
                    .compactMap { $0 }.joined(separator: ", ")
                onLocation?(name.isEmpty ? coords : "\\(name) (\\(coords))")
            } else {
                onLocation?(coords)
            }
        } catch {
            onLocation?(coords)
        }
    }
}`}</CodeB>
            )}
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck?</strong> Paste this into Claude:</p>
            <CodeB title="Prompt" accent={P_C}>{`Here's my LocationManager.${isAndroid ? "kt" : "swift"}:

[paste your code]

I'm trying to wrap ${isAndroid ? "FusedLocationProviderClient" : "CLLocationManager"} so the rest of the app gets a clean callback with a human-friendly location string (city/neighbourhood, not raw coords).

Specific issue: [describe what you're seeing]

What's wrong?`}</CodeB>
          </AiOpp>

          <Checkpoint num={2}>LocationManager.{isAndroid ? "kt" : "swift"} compiles cleanly.</Checkpoint>
        </Step>

        <Step num={3} title="Build the ChatViewModel that injects location into prompts (~10 min)">
          <p>This ViewModel is structurally similar to Microphone Step 3, with one key change: when the user sends a message, we prepend the most recent location to the prompt before sending to Claude. The user types "food spots?", but Claude sees "I'm at Mission District, San Francisco. food spots?" — the location context is invisible to the user but transformative for the response.</p>

          <VStep num="a" title="Define the data model and UI state">
            <p>Same chat structure as Microphone, plus a <IC>location</IC> field on the UI state holding the most recent resolved location string.</p>
            {isAndroid ? (
              <CodeB title="ChatViewModel.kt — top of file" accent={BL}>{`package com.yourname.nearme

import android.app.Application
import androidx.activity.ComponentActivity
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject

data class ChatMessage(val role: String, val content: String)

data class UiState(
    val messages: List<ChatMessage> = emptyList(),
    val draft: String = "",
    val location: String? = null,
    val isThinking: Boolean = false
)`}</CodeB>
            ) : (
              <CodeB title="ChatViewModel.swift — top of file" accent={GR}>{`import Foundation

struct ChatMessage: Identifiable, Codable {
    let id = UUID()
    let role: String
    let content: String
}`}</CodeB>
            )}
          </VStep>

          <VStep num="b" title="Define the class shell with location state">
            <p>{isAndroid
              ? "Standard StateFlow + OkHttp + nullable LocationManager. We expose a draft string so the UI can two-way-bind to a TextField."
              : "Standard ObservableObject + @Published draft + location + a LocationManager instance held as a @StateObject-equivalent (just a let property — its lifecycle is tied to ours)."
            }</p>
            {isAndroid ? (
              <CodeB title="Add below the data classes" accent={BL}>{`class ChatViewModel(app: Application) : AndroidViewModel(app) {
    private val _uiState = MutableStateFlow(UiState())
    val uiState = _uiState.asStateFlow()

    private val client = OkHttpClient()
    private var location: LocationManager? = null

    // methods come next
}`}</CodeB>
            ) : (
              <CodeB title="Add below the ChatMessage struct" accent={GR}>{`@MainActor
class ChatViewModel: ObservableObject {
    @Published var messages: [ChatMessage] = []
    @Published var draft = ""
    @Published var location: String?
    @Published var isThinking = false

    private let locationManager = LocationManager()

    // methods come next
}`}</CodeB>
            )}
          </VStep>

          <VStep num="c" title={isAndroid ? "Wire LocationManager via attach()" : "Add a refreshLocation method"}>
            <p>{isAndroid
              ? "attach() takes the activity and creates the LocationManager. The onLocation callback writes to UI state so the UI can show the resolved location. The onError callback puts the error message in the location slot too — visible to the user, not silently dropped."
              : "Call locationManager.request() with closures that push the result into our @Published state. We can call this from a Refresh button, or automatically on first launch."
            }</p>
            {isAndroid ? (
              <CodeB title="Add inside the class" accent={BL}>{`fun attach(activity: ComponentActivity) {
    location = LocationManager(
        activity = activity,
        onLocation = { place -> _uiState.update { it.copy(location = place) } },
        onError = { msg -> _uiState.update { it.copy(location = "(\$msg)") } }
    )
    location?.request()   // ask once at startup
}

fun onDraftChange(s: String) { _uiState.update { it.copy(draft = s) } }
fun refreshLocation() { location?.request() }`}</CodeB>
            ) : (
              <CodeB title="Add inside the class" accent={GR}>{`func refreshLocation() {
    locationManager.request(
        onLocation: { [weak self] place in
            Task { @MainActor in self?.location = place }
        },
        onError: { [weak self] msg in
            Task { @MainActor in self?.location = "(\\(msg))" }
        }
    )
}

init() {
    refreshLocation()   // ask once at startup
}`}</CodeB>
            )}
          </VStep>

          <VStep num="d" title="Implement send() with location injection">
            <p>This is the core of the modality. Take the user's typed prompt, prepend the resolved location, and send to Claude. If location isn't available yet, send without it (the user shouldn't be blocked from chatting just because GPS is slow).</p>
            {isAndroid ? (
              <CodeB title="Add inside the class" accent={BL}>{`fun send() {
    val state = _uiState.value
    val userText = state.draft.trim()
    if (userText.isEmpty()) return

    // Inject location into the prompt that Claude sees
    val prompted = if (state.location != null)
        "I'm at \${state.location}. \$userText"
    else userText

    val withUser = state.messages + ChatMessage("user", userText)
    _uiState.update { it.copy(
        messages = withUser, draft = "", isThinking = true
    ) }

    // Build the request using the location-augmented prompt, but display the
    // user's original (clean) message in the UI.
    val toClaude = state.messages + ChatMessage("user", prompted)

    viewModelScope.launch {
        val reply = withContext(Dispatchers.IO) { callClaude(toClaude) }
        _uiState.update { it.copy(
            messages = withUser + ChatMessage("assistant", reply),
            isThinking = false
        ) }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Add inside the class" accent={GR}>{`func send() async {
    let userText = draft.trimmingCharacters(in: .whitespaces)
    guard !userText.isEmpty else { return }

    let prompted = location.map { "I'm at \\($0). \\(userText)" } ?? userText

    messages.append(ChatMessage(role: "user", content: userText))
    draft = ""
    isThinking = true

    // Display the user's clean message in the UI, but send the location-augmented one to Claude
    var toClaude = messages
    toClaude[toClaude.count - 1] = ChatMessage(role: "user", content: prompted)

    let reply = (try? await callClaude(toClaude)) ?? "(error)"
    messages.append(ChatMessage(role: "assistant", content: reply))
    isThinking = false
}`}</CodeB>
            )}
            <Tip>The user sees "food spots?" in their chat bubble. Claude sees "I'm at Mission District, San Francisco. food spots?". This split — clean UI vs augmented prompt — is a core pattern in mobile AI apps. Keep modality context out of the user-visible message, even though it shapes the response.</Tip>
          </VStep>

          <VStep num="e" title="Implement callClaude" last={true}>
            <p>Identical to the Microphone Step 3 implementation — pure text Messages API call. The location injection happens before this method is called; from callClaude's perspective it's just a list of messages.</p>
            {isAndroid ? (
              <CodeB title="Add inside the class" accent={BL}>{`private fun callClaude(history: List<ChatMessage>): String {
    val msgs = JSONArray().apply {
        history.forEach {
            put(JSONObject().put("role", it.role).put("content", it.content))
        }
    }
    val body = JSONObject()
        .put("model", "claude-sonnet-4-5")
        .put("max_tokens", 1024)
        .put("messages", msgs)
        .toString()
        .toRequestBody("application/json".toMediaType())

    val req = Request.Builder()
        .url("https://api.anthropic.com/v1/messages")
        .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
        .addHeader("anthropic-version", "2023-06-01")
        .post(body)
        .build()

    client.newCall(req).execute().use { response ->
        val json = JSONObject(response.body!!.string())
        return json.getJSONArray("content")
            .getJSONObject(0).getString("text")
    }
}`}</CodeB>
            ) : (
              <CodeB title="Add inside the class" accent={GR}>{`private func callClaude(_ history: [ChatMessage]) async throws -> String {
    guard let key = Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String else {
        throw URLError(.userAuthenticationRequired)
    }
    var req = URLRequest(url: URL(string: "https://api.anthropic.com/v1/messages")!)
    req.httpMethod = "POST"
    req.setValue(key, forHTTPHeaderField: "x-api-key")
    req.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
    req.setValue("application/json", forHTTPHeaderField: "Content-Type")

    let payload: [String: Any] = [
        "model": "claude-sonnet-4-5",
        "max_tokens": 1024,
        "messages": history.map { ["role": $0.role, "content": $0.content] }
    ]
    req.httpBody = try JSONSerialization.data(withJSONObject: payload)

    let (data, _) = try await URLSession.shared.data(for: req)
    let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
    let blocks = json?["content"] as? [[String: Any]]
    return blocks?.first?["text"] as? String ?? "(no content)"
}`}</CodeB>
            )}
          </VStep>

          <Section title={"✅ Check your work — show me the complete ChatViewModel." + (isAndroid ? "kt" : "swift")}>
            {isAndroid ? (
              <CodeB title="ChatViewModel.kt" accent={BL}>{`// Combine all VStep snippets in order:
// imports → ChatMessage + UiState → ChatViewModel class shell → attach + onDraftChange + refreshLocation → send → callClaude
// If you want a single-paste reference, ask Claude:
//   "Combine these into a complete ChatViewModel.kt: [paste each VStep]"`}</CodeB>
            ) : (
              <CodeB title="ChatViewModel.swift" accent={GR}>{`// Combine all VStep snippets in order:
// imports → ChatMessage → ChatViewModel class with @Published + locationManager + init → refreshLocation → send → callClaude
// If you want a single-paste reference, ask Claude:
//   "Combine these into a complete ChatViewModel.swift: [paste each VStep]"`}</CodeB>
            )}
          </Section>

          <Checkpoint num={3}>ChatViewModel.{isAndroid ? "kt" : "swift"} compiles. Location is requested at startup; send() injects it into prompts.</Checkpoint>
        </Step>

        <Step num={4} title="Build the chat UI with location indicator (~8 min)">
          <p>The UI is mostly the same as the Microphone modality's chat screen, with one addition: a location indicator at the top showing the resolved location (or "(getting location…)" while it's fetching). Tapping the indicator triggers a refresh.</p>

          <VStep num="a" title={isAndroid ? "MainActivity with attach" : "ContentView with @StateObject"}>
            {isAndroid ? (
              <CodeB title="MainActivity.kt — full file" accent={BL}>{`package com.yourname.nearme

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val viewModel: ChatViewModel by viewModels()
        viewModel.attach(this)
        setContent { MaterialTheme { ChatScreen(viewModel) } }
    }
}`}</CodeB>
            ) : (
              <CodeB title="ContentView.swift — top of file" accent={GR}>{`import SwiftUI

struct ContentView: View {
    @StateObject private var vm = ChatViewModel()

    var body: some View {
        VStack(spacing: 0) {
            // location bar + chat list + input row come next
        }
    }
}

#Preview { ContentView() }`}</CodeB>
            )}
          </VStep>

          <VStep num="b" title="Add the location indicator bar">
            <p>A clickable strip at the top showing the resolved location. Tap to refresh — useful for testing and for users who've moved since opening the app.</p>
            {isAndroid ? (
              <CodeB title="Add to ChatScreen Composable (top of Column)" accent={BL}>{`Surface(
    modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp),
    onClick = { vm.refreshLocation() },
    color = MaterialTheme.colorScheme.secondaryContainer,
    shape = RoundedCornerShape(8.dp)
) {
    Text(
        text = "📍 " + (state.location ?: "Getting location…"),
        modifier = Modifier.padding(12.dp)
    )
}`}</CodeB>
            ) : (
              <CodeB title="Add to ContentView body (top of VStack)" accent={GR}>{`Button(action: { vm.refreshLocation() }) {
    HStack {
        Text("📍 \\(vm.location ?? "Getting location…")")
            .frame(maxWidth: .infinity, alignment: .leading)
    }
    .padding()
    .background(Color(.systemGray6))
}`}</CodeB>
            )}
          </VStep>

          <VStep num="c" title="Add the chat list and input row" last={true}>
            <p>Same as the Microphone UI minus the mic button. A LazyColumn/ScrollView for messages and an input row with TextField + Send button.</p>
            {isAndroid ? (
              <CodeB title="Full ChatScreen + MessageBubble (add below MainActivity)" accent={BL}>{`@Composable
fun ChatScreen(vm: ChatViewModel) {
    val state by vm.uiState.collectAsState()
    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Surface(
            modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp),
            onClick = { vm.refreshLocation() },
            color = MaterialTheme.colorScheme.secondaryContainer,
            shape = RoundedCornerShape(8.dp)
        ) {
            Text("📍 " + (state.location ?: "Getting location…"),
                 modifier = Modifier.padding(12.dp))
        }
        LazyColumn(modifier = Modifier.weight(1f), reverseLayout = true) {
            if (state.isThinking) item { Text("Claude is thinking…", modifier = Modifier.padding(8.dp)) }
            items(state.messages.reversed()) { msg -> MessageBubble(msg) }
        }
        Row(verticalAlignment = Alignment.CenterVertically) {
            TextField(
                value = state.draft,
                onValueChange = vm::onDraftChange,
                placeholder = { Text("Ask about nearby…") },
                modifier = Modifier.weight(1f)
            )
            Button(onClick = vm::send, enabled = state.draft.isNotBlank()) {
                Text("Send")
            }
        }
    }
}

@Composable
fun MessageBubble(msg: ChatMessage) {
    val isUser = msg.role == "user"
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
        horizontalArrangement = if (isUser) Arrangement.End else Arrangement.Start
    ) {
        Box(
            modifier = Modifier
                .background(
                    if (isUser) Color(0xFF7F52FF) else Color(0xFFE8E8E8),
                    RoundedCornerShape(12.dp)
                )
                .padding(horizontal = 14.dp, vertical = 10.dp)
        ) {
            Text(msg.content, color = if (isUser) Color.White else Color.Black)
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Full ContentView + MessageBubble" accent={GR}>{`struct ContentView: View {
    @StateObject private var vm = ChatViewModel()

    var body: some View {
        VStack(spacing: 0) {
            Button(action: { vm.refreshLocation() }) {
                Text("📍 \\(vm.location ?? "Getting location…")")
                    .frame(maxWidth: .infinity, alignment: .leading)
            }.padding().background(Color(.systemGray6))

            ScrollView {
                LazyVStack(spacing: 8) {
                    ForEach(vm.messages) { msg in MessageBubble(msg: msg) }
                    if vm.isThinking {
                        Text("Claude is thinking…").foregroundColor(.secondary)
                    }
                }.padding()
            }

            HStack {
                TextField("Ask about nearby…", text: $vm.draft)
                    .textFieldStyle(.roundedBorder)
                Button("Send") { Task { await vm.send() } }
                    .disabled(vm.draft.isEmpty)
            }.padding()
        }
    }
}

struct MessageBubble: View {
    let msg: ChatMessage
    var body: some View {
        HStack {
            if msg.role == "user" { Spacer(minLength: 60) }
            Text(msg.content)
                .padding(.horizontal, 14).padding(.vertical, 10)
                .background(msg.role == "user" ? Color.purple : Color(.systemGray5))
                .foregroundColor(msg.role == "user" ? .white : .primary)
                .cornerRadius(12)
            if msg.role != "user" { Spacer(minLength: 60) }
        }
    }
}

#Preview { ContentView() }`}</CodeB>
            )}
          </VStep>

          <Checkpoint num={4}>App builds, the location indicator appears at the top showing your resolved place name (or "Getting location…" while waiting). The chat input is ready below.</Checkpoint>
        </Step>

        <Step num={5} title="Test the full loop (~3 min)">
          <ol style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 13 }}>
            <li>Run the app. Permission prompt appears (first time only). Tap <strong>Allow</strong></li>
            <li>The location indicator updates from "Getting location…" to a place name within a few seconds</li>
            <li>Type "food spots?" and tap <strong>Send</strong></li>
            <li>Your clean message appears in the chat. Claude responds with locally-grounded suggestions</li>
            <li>Tap the location indicator to refresh (useful if you've moved or want a different result)</li>
          </ol>

          <Section title="🛠 Common issues">
            <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>Location stuck on "Getting location…".</strong> {isAndroid ? "lastLocation can return null if no app has used location recently. Open Google Maps once to warm the cache. Or replace lastLocation with requestLocationUpdates for a fresh read." : "Simulator: Features → Location → Custom Location to set lat/lng manually. requestLocation() can hang if accuracy can't be met within the timeout — try kCLLocationAccuracyHundredMeters or larger."}</li>
              <li><strong>Place name is null even with coords.</strong> Reverse geocoding requires network. {isAndroid ? "Geocoder.getFromLocation throws IOException offline." : "CLGeocoder.reverseGeocodeLocation returns CLError.network."} The fallback in step 2c handles this — confirm it's there.</li>
              <li><strong>Claude doesn't seem to use the location.</strong> Open the network tab or log <IC>prompted</IC> before it goes out. The location string should be at the start of the user message. If Claude is still vague, the place name might be too generic — try forcing it to "San Francisco, CA" temporarily to confirm the prompt path is working, then iterate on the description.</li>
            </ul>
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck after that?</strong> Paste this into Claude:</p>
            <CodeB title="Prompt template" accent={P_C}>{`I'm building a location-aware AI app on ${isAndroid ? "Android with Compose + Kotlin + FusedLocationProviderClient" : "iOS with SwiftUI + Swift + CoreLocation"}. Flow: get location → reverse-geocode → inject into prompt → Claude.

Failing at: [describe]
Verified: [list checks]
Code: [paste smallest snippet]

Likely cause and next test?`}</CodeB>
          </AiOpp>

          <Checkpoint num={5}>End-to-end works: location resolves, prompts get augmented, Claude gives grounded answers. Try it from different places and watch how the suggestions shift.</Checkpoint>
        </Step>

        </div>

        <div style={{ marginTop: 16 }}>
          <strong style={{ fontSize: 13 }}>{"📚"} Resources for this modality</strong>
          <ul style={{ paddingLeft: 20, fontSize: 12, lineHeight: 1.8, margin: "6px 0 0" }}>
            {isAndroid ? (
              <>
                <li><Link>Android docs — FusedLocationProviderClient</Link> (developers.google.com/android/reference/com/google/android/gms/location/FusedLocationProviderClient)</li>
                <li><Link>Geocoder</Link> — reverse-geocoding lat/lng to place names</li>
                <li><Link>Location runtime permissions</Link> — fine vs coarse, foreground vs background</li>
              </>
            ) : (
              <>
                <li><Link>Apple docs — CLLocationManager</Link> (developer.apple.com/documentation/corelocation/cllocationmanager)</li>
                <li><Link>CLGeocoder</Link> — reverse-geocoding</li>
                <li><Link>Location authorization</Link> — when-in-use vs always</li>
              </>
            )}
            <li><Link>Claude Messages API</Link> — for the prompt augmentation pattern</li>
          </ul>
        </div>

        <Tip><strong>Stretch — pair with the camera modality:</strong> Photo + location = plant identification, landmark identification, "what restaurant is this menu from?" Send the camera image AND the location string in the same multimodal API call. This is the most common "magic" pattern in mobile AI apps because the combination outperforms either input alone.</Tip>

        <Tip><strong>Stretch — implicit location refresh:</strong> Use a CLLocationManager.desiredAccuracy = ...startUpdatingLocation() pattern (or {isAndroid ? "FusedLocationProviderClient.requestLocationUpdates" : "iOS background refresh"}) to keep the location fresh as the user walks around. Throttle updates to every 100m of movement to save battery.</Tip>
      </Section>

      <Section title={"🏃  Accelerometer & Gyroscope — Activity-aware AI"}>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 8px" }}>~25 min · standalone mini-app · gesture as input</p>

        <p><strong>What you're building:</strong> ShakeBrief — a single-screen app where the user enters a topic, then shakes the phone to get a fresh 2-sentence brief from Claude. Each shake produces a new brief. The shake gesture itself is the magic: it's how you turn a 3-axis stream of raw accelerometer data into a discrete user intent.</p>

        <p><strong>The mental model — sensors are streams, gestures are inferences:</strong> The accelerometer reports x/y/z acceleration values 50+ times per second, all the time. You're not really "listening for shakes" — you're filtering a continuous stream and inferring shake events from spikes in magnitude. The same is true for any motion gesture: tilt detection, step counting, drop detection, etc. What separates motion-as-input from camera-as-input is that motion is always-on and lower-level — you have to do gesture detection yourself.</p>

        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", margin: "10px 0", fontSize: 12, lineHeight: 1.6 }}>
          <strong>Data flow:</strong><br/>
          🏃 raw accelerometer stream (x,y,z @ 50Hz)&nbsp;&nbsp;→&nbsp;&nbsp;magnitude calculation&nbsp;&nbsp;→&nbsp;&nbsp;threshold + debounce&nbsp;&nbsp;→&nbsp;&nbsp;onShake event&nbsp;&nbsp;→&nbsp;&nbsp;Claude API call with topic&nbsp;&nbsp;→&nbsp;&nbsp;new brief
        </div>

        <p>{isAndroid
          ? "Android's piece is the SensorManager API. You register a listener for TYPE_ACCELEROMETER and get a callback every ~20ms with [x, y, z] in m/s². No permission needed for raw sensors. The trick is the math: magnitude = sqrt(x² + y² + z²), then threshold check, then debounce so a single shake doesn't trigger 5 events."
          : "iOS uses CoreMotion's CMMotionManager. You set the update interval (e.g., 0.05 = 20Hz) and start updates with a callback. No Info.plist key needed for raw accelerometer (only CMMotionActivityManager — the activity classifier — requires NSMotionUsageDescription). Same magnitude math + threshold + debounce."
        }</p>

        <div style={{ '--platform-accent': isAndroid ? BL : GR } as React.CSSProperties}>

        <Step num={0} title="Create a new project (~3 min)">
          {isAndroid ? (
            <div>
              <p>In Android Studio: <strong>File → New → New Project</strong> → <strong>Empty Activity</strong>. Name it <IC>ShakeBrief</IC>, package <IC>com.yourname.shakebrief</IC>, min SDK <strong>API 26</strong>. <strong>Finish</strong>.</p>
              <p>Open <IC>app/build.gradle.kts</IC> and add OkHttp:</p>
              <CodeB title="build.gradle.kts (app) — dependencies" accent={BL}>{`implementation("com.squareup.okhttp3:okhttp:4.12.0")`}</CodeB>
              <p>Sync, then wire the Claude API key per <Link>Lab Session 1 → Step 1</Link>.</p>
            </div>
          ) : (
            <div>
              <p>In Xcode: <strong>File → New → Project</strong> → <strong>App</strong>. Name it <IC>ShakeBrief</IC>, SwiftUI + Swift. <strong>Create</strong>.</p>
              <p>CoreMotion ships with iOS — no extra dependency. Wire the API key per <Link>Lab Session 1 → Step 1</Link>.</p>
            </div>
          )}
          <Checkpoint num={0}>Project builds and runs.</Checkpoint>
        </Step>

        <Step num={1} title="Permissions (~1 min)">
          <p>{isAndroid
            ? "Raw accelerometer needs no permission. The simulator/emulator can simulate motion via Extended Controls → Virtual Sensors. On a real device you'll just shake it. Nothing to add right now — skip to step 2 unless you want activity classification later (which would need ACTIVITY_RECOGNITION permission)."
            : "Raw accelerometer needs no permission either. Worth knowing for the stretch: if you later add CMMotionActivityManager (walking/driving classification), you'll need NSMotionUsageDescription in Info.plist."
          }</p>
          <Checkpoint num={1}>No changes needed — moving on.</Checkpoint>
        </Step>

        <Step num={2} title="Build a MotionManager class (~10 min)">
          <p>Wrap the sensor lifecycle inside one class. Key responsibilities: register the listener at start, calculate magnitude on each update, debounce shake detection (so one physical shake = one event), and clean up on stop.</p>

          <VStep num="a" title="Create the file">
            {isAndroid ? (
              <div>
                <p>Right-click your package → <strong>New → Kotlin Class/File</strong> → name it <IC>MotionManager</IC>, choose <strong>Class</strong>:</p>
                <CodeB title="MotionManager.kt" accent={BL}>{`package com.yourname.shakebrief

import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import kotlin.math.sqrt

class MotionManager(
    context: Context,
    private val onShake: () -> Unit,
    private val threshold: Float = 2.5f,    // multiples of g
    private val cooldownMs: Long = 1000     // debounce window
) : SensorEventListener {

    private val sm = context.getSystemService(Context.SENSOR_SERVICE) as SensorManager
    private val accel = sm.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)
    private var lastShakeMs = 0L

    fun start() { /* fill in next */ }
    fun stop()  { /* fill in next */ }

    override fun onAccuracyChanged(s: Sensor?, a: Int) {}
    override fun onSensorChanged(e: SensorEvent) { /* fill in next */ }
}`}</CodeB>
                <p>The class implements SensorEventListener directly — fewer files than wrapping it. The threshold and cooldown are constructor params with sensible defaults (2.5g is a deliberate shake; 1000ms cooldown prevents double-counting).</p>
              </div>
            ) : (
              <div>
                <p>Right-click your project folder → <strong>New File → Swift File</strong> → name it <IC>MotionManager</IC>:</p>
                <CodeB title="MotionManager.swift" accent={GR}>{`import Foundation
import CoreMotion

@MainActor
class MotionManager: ObservableObject {
    private let manager = CMMotionManager()
    private var lastShake: Date = .distantPast

    private let onShake: () -> Void
    private let threshold: Double
    private let cooldownSec: TimeInterval

    init(threshold: Double = 2.5,
         cooldownSec: TimeInterval = 1.0,
         onShake: @escaping () -> Void) {
        self.threshold = threshold
        self.cooldownSec = cooldownSec
        self.onShake = onShake
    }

    func start() { /* fill in next */ }
    func stop()  { /* fill in next */ }
}`}</CodeB>
                <p>Constructor takes threshold (in g — multiples of Earth's gravity), cooldown (in seconds), and the onShake callback. Defaults to 2.5g threshold + 1 second cooldown — a deliberate shake registers cleanly without false positives from walking.</p>
              </div>
            )}
          </VStep>

          <VStep num="b" title="Implement start() and stop()">
            <p>{isAndroid
              ? "start() registers self as a listener for the accelerometer at SENSOR_DELAY_GAME (about 50Hz — plenty for shake detection). stop() unregisters. SENSOR_DELAY_NORMAL is too slow for crisp gesture detection; SENSOR_DELAY_FASTEST burns battery for no benefit."
              : "start() configures the update interval (0.05 = 20Hz, good enough for shake detection without burning battery) and starts pushing accelerometer updates to a closure on the main queue. stop() cancels updates."
            }</p>
            {isAndroid ? (
              <CodeB title="Replace the start() and stop() stubs" accent={BL}>{`fun start() {
    sm.registerListener(this, accel, SensorManager.SENSOR_DELAY_GAME)
}

fun stop() {
    sm.unregisterListener(this)
}`}</CodeB>
            ) : (
              <CodeB title="Replace the start() and stop() stubs" accent={GR}>{`func start() {
    guard manager.isAccelerometerAvailable else { return }
    manager.accelerometerUpdateInterval = 0.05    // 20 Hz
    manager.startAccelerometerUpdates(to: .main) { [weak self] data, _ in
        guard let self, let d = data?.acceleration else { return }
        self.handleSample(x: d.x, y: d.y, z: d.z)
    }
}

func stop() {
    manager.stopAccelerometerUpdates()
}`}</CodeB>
            )}
          </VStep>

          <VStep num="c" title="Implement the shake detection logic" last={true}>
            <p>{isAndroid
              ? "Every sensor update gives you x, y, z in m/s². Compute magnitude, divide by gravity (9.81 m/s²) to get a g-force value. If g exceeds the threshold AND we're past the cooldown window, fire onShake. The cooldown is critical — without it, one physical shake (which lasts ~200ms) fires onShake 10+ times."
              : "The handleSample helper does the math. Magnitude in g-force, threshold check, cooldown check. Fire the closure if both pass."
            }</p>
            {isAndroid ? (
              <CodeB title="Replace the onSensorChanged stub" accent={BL}>{`override fun onSensorChanged(e: SensorEvent) {
    val (x, y, z) = e.values
    val g = sqrt(x * x + y * y + z * z) / SensorManager.GRAVITY_EARTH

    if (g > threshold) {
        val now = System.currentTimeMillis()
        if (now - lastShakeMs > cooldownMs) {
            lastShakeMs = now
            onShake()
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="Add inside the class" accent={GR}>{`private func handleSample(x: Double, y: Double, z: Double) {
    // CoreMotion already returns acceleration in g-force (1g = gravity).
    let g = sqrt(x * x + y * y + z * z)

    if g > threshold {
        let now = Date()
        if now.timeIntervalSince(lastShake) > cooldownSec {
            lastShake = now
            onShake()
        }
    }
}`}</CodeB>
            )}
            <Tip>{isAndroid
              ? "GRAVITY_EARTH is a SensorManager constant (9.80665). Without dividing by it, your threshold would need to be ~25 (m/s²) instead of 2.5 (g). Working in g-force makes thresholds intuitive — 1g = sitting still, 2g = a shake, 5g = drop on hard surface."
              : "Why divide by g on Android but not iOS? Android's accelerometer reports raw m/s² (including gravity). iOS's CMMotion already gives you g-force units. The threshold value is the same number (2.5g) but the math differs by platform."
            }</Tip>
          </VStep>

          <Section title={"✅ Check your work — show me the complete MotionManager." + (isAndroid ? "kt" : "swift")}>
            {isAndroid ? (
              <CodeB title="MotionManager.kt" accent={BL}>{`package com.yourname.shakebrief

import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import kotlin.math.sqrt

class MotionManager(
    context: Context,
    private val onShake: () -> Unit,
    private val threshold: Float = 2.5f,
    private val cooldownMs: Long = 1000
) : SensorEventListener {

    private val sm = context.getSystemService(Context.SENSOR_SERVICE) as SensorManager
    private val accel = sm.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)
    private var lastShakeMs = 0L

    fun start() {
        sm.registerListener(this, accel, SensorManager.SENSOR_DELAY_GAME)
    }

    fun stop() {
        sm.unregisterListener(this)
    }

    override fun onAccuracyChanged(s: Sensor?, a: Int) {}

    override fun onSensorChanged(e: SensorEvent) {
        val (x, y, z) = e.values
        val g = sqrt(x * x + y * y + z * z) / SensorManager.GRAVITY_EARTH
        if (g > threshold) {
            val now = System.currentTimeMillis()
            if (now - lastShakeMs > cooldownMs) {
                lastShakeMs = now
                onShake()
            }
        }
    }
}`}</CodeB>
            ) : (
              <CodeB title="MotionManager.swift" accent={GR}>{`import Foundation
import CoreMotion

@MainActor
class MotionManager: ObservableObject {
    private let manager = CMMotionManager()
    private var lastShake: Date = .distantPast

    private let onShake: () -> Void
    private let threshold: Double
    private let cooldownSec: TimeInterval

    init(threshold: Double = 2.5,
         cooldownSec: TimeInterval = 1.0,
         onShake: @escaping () -> Void) {
        self.threshold = threshold
        self.cooldownSec = cooldownSec
        self.onShake = onShake
    }

    func start() {
        guard manager.isAccelerometerAvailable else { return }
        manager.accelerometerUpdateInterval = 0.05
        manager.startAccelerometerUpdates(to: .main) { [weak self] data, _ in
            guard let self, let d = data?.acceleration else { return }
            self.handleSample(x: d.x, y: d.y, z: d.z)
        }
    }

    func stop() {
        manager.stopAccelerometerUpdates()
    }

    private func handleSample(x: Double, y: Double, z: Double) {
        let g = sqrt(x * x + y * y + z * z)
        if g > threshold {
            let now = Date()
            if now.timeIntervalSince(lastShake) > cooldownSec {
                lastShake = now
                onShake()
            }
        }
    }
}`}</CodeB>
            )}
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Tuning the shake threshold?</strong> Different devices and grip styles produce different magnitudes. Ask Claude:</p>
            <CodeB title="Prompt" accent={P_C}>{`Here's my MotionManager.${isAndroid ? "kt" : "swift"}:

[paste your code]

I'm getting too many false positives — every time I lift the phone or place it down, onShake fires. How would I tighten the detection? Add ideas about pattern matching (e.g. requiring a sign change in x or y) instead of just magnitude.`}</CodeB>
          </AiOpp>

          <Checkpoint num={2}>MotionManager.{isAndroid ? "kt" : "swift"} compiles cleanly.</Checkpoint>
        </Step>

        <Step num={3} title="Build the ChatViewModel that calls Claude on shake (~8 min)">
          <p>Simpler than the previous modalities — only one Claude path (the shake-triggered brief), no chat history needed. Just topic + brief + thinking flag.</p>

          <VStep num="a" title="Define the data model">
            {isAndroid ? (
              <CodeB title="ChatViewModel.kt — top of file" accent={BL}>{`package com.yourname.shakebrief

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject

data class UiState(
    val topic: String = "tech news",
    val brief: String = "Shake the phone for a brief on this topic.",
    val isThinking: Boolean = false,
    val shakeCount: Int = 0
)`}</CodeB>
            ) : (
              <CodeB title="ChatViewModel.swift — top of file" accent={GR}>{`import Foundation
// No additional structs needed — we'll use @Published properties directly`}</CodeB>
            )}
          </VStep>

          <VStep num="b" title="Define the class shell with MotionManager wired">
            <p>{isAndroid
              ? "The MotionManager is created in attach() (we need the activity for context). When it fires onShake, we kick off generateBrief() — defined in step c."
              : "The MotionManager is a lazy var so its closure can capture self. On shake, we trigger an async call to generateBrief()."
            }</p>
            {isAndroid ? (
              <CodeB title="Add below the data classes" accent={BL}>{`class ChatViewModel(app: Application) : AndroidViewModel(app) {
    private val _uiState = MutableStateFlow(UiState())
    val uiState = _uiState.asStateFlow()

    private val client = OkHttpClient()
    private var motion: MotionManager? = null

    fun attach(context: android.content.Context) {
        motion = MotionManager(context, onShake = { generateBrief() })
        motion?.start()
    }

    fun onTopicChange(s: String) {
        _uiState.update { it.copy(topic = s) }
    }

    override fun onCleared() {
        motion?.stop()
        super.onCleared()
    }
}`}</CodeB>
            ) : (
              <CodeB title="Replace ContentView (or new file ChatViewModel.swift)" accent={GR}>{`@MainActor
class ChatViewModel: ObservableObject {
    @Published var topic: String = "tech news"
    @Published var brief: String = "Shake the phone for a brief on this topic."
    @Published var isThinking: Bool = false
    @Published var shakeCount: Int = 0

    private lazy var motion: MotionManager = {
        MotionManager { [weak self] in
            Task { @MainActor in await self?.generateBrief() }
        }
    }()

    init() {
        motion.start()
    }

    deinit {
        motion.stop()
    }
}`}</CodeB>
            )}
          </VStep>

          <VStep num="c" title="Implement generateBrief — the shake-triggered Claude call" last={true}>
            <p>Pull the topic from state, build a focused prompt, hit Claude. Each shake increments shakeCount so the UI can show a satisfying "shake #3" feedback.</p>
            {isAndroid ? (
              <CodeB title="Add inside the class" accent={BL}>{`private fun generateBrief() {
    val topic = _uiState.value.topic
    _uiState.update { it.copy(
        isThinking = true,
        shakeCount = it.shakeCount + 1
    ) }

    viewModelScope.launch {
        val brief = withContext(Dispatchers.IO) { callClaude(topic) }
        _uiState.update { it.copy(brief = brief, isThinking = false) }
    }
}

private fun callClaude(topic: String): String {
    val prompt = "Write a fresh, surprising 2-sentence brief about: \$topic. " +
                 "Pick an angle a casual reader wouldn't have thought of. " +
                 "No preamble — start with the insight."

    val body = JSONObject()
        .put("model", "claude-sonnet-4-5")
        .put("max_tokens", 200)
        .put("messages", JSONArray().put(
            JSONObject().put("role", "user").put("content", prompt)
        ))
        .toString()
        .toRequestBody("application/json".toMediaType())

    val req = Request.Builder()
        .url("https://api.anthropic.com/v1/messages")
        .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
        .addHeader("anthropic-version", "2023-06-01")
        .post(body)
        .build()

    client.newCall(req).execute().use { response ->
        val json = JSONObject(response.body!!.string())
        return json.getJSONArray("content")
            .getJSONObject(0).getString("text")
    }
}`}</CodeB>
            ) : (
              <CodeB title="Add inside the class" accent={GR}>{`private func generateBrief() async {
    isThinking = true
    shakeCount += 1
    let topicCopy = topic
    let result = (try? await callClaude(topic: topicCopy)) ?? "(error)"
    brief = result
    isThinking = false
}

private func callClaude(topic: String) async throws -> String {
    guard let key = Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String else {
        throw URLError(.userAuthenticationRequired)
    }
    let prompt = "Write a fresh, surprising 2-sentence brief about: \\(topic). " +
                 "Pick an angle a casual reader wouldn't have thought of. " +
                 "No preamble — start with the insight."

    var req = URLRequest(url: URL(string: "https://api.anthropic.com/v1/messages")!)
    req.httpMethod = "POST"
    req.setValue(key, forHTTPHeaderField: "x-api-key")
    req.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
    req.setValue("application/json", forHTTPHeaderField: "Content-Type")

    let payload: [String: Any] = [
        "model": "claude-sonnet-4-5",
        "max_tokens": 200,
        "messages": [["role": "user", "content": prompt]]
    ]
    req.httpBody = try JSONSerialization.data(withJSONObject: payload)

    let (data, _) = try await URLSession.shared.data(for: req)
    let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
    let blocks = json?["content"] as? [[String: Any]]
    return blocks?.first?["text"] as? String ?? "(no content)"
}`}</CodeB>
            )}
            <Tip>The "fresh, surprising" + "an angle a casual reader wouldn't have thought of" framing in the system prompt is what makes shaking again valuable — without it, Claude tends to give similar answers each shake. Prompt design matters as much as the modality.</Tip>
          </VStep>

          <Section title={"✅ Check your work — show me the complete ChatViewModel." + (isAndroid ? "kt" : "swift")}>
            <CodeB title={isAndroid ? "ChatViewModel.kt" : "ChatViewModel.swift"} accent={isAndroid ? BL : GR}>{`// Combine the snippets from VSteps a-c in order.
// If you want a single-paste reference, ask Claude:
//   "Combine these into a complete ChatViewModel.${isAndroid ? "kt" : "swift"}: [paste each VStep]"`}</CodeB>
          </Section>

          <Checkpoint num={3}>ChatViewModel.{isAndroid ? "kt" : "swift"} compiles. The MotionManager from step 2 is wired to fire generateBrief on shake.</Checkpoint>
        </Step>

        <Step num={4} title="Build the UI — topic input, brief display, shake hint (~6 min)">
          <p>The simplest UI in the practice tab: one text field for the topic, one big card showing the current brief, a counter for shakes. The shake gesture replaces any "submit" button — let users discover it via the hint text.</p>

          <VStep num="a" title="MainActivity / ContentView wiring">
            {isAndroid ? (
              <CodeB title="MainActivity.kt — full file" accent={BL}>{`package com.yourname.shakebrief

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val viewModel: ChatViewModel by viewModels()
        viewModel.attach(this)
        setContent { MaterialTheme { ShakeBriefScreen(viewModel) } }
    }
}`}</CodeB>
            ) : (
              <CodeB title="ContentView.swift — top of file" accent={GR}>{`import SwiftUI

struct ContentView: View {
    @StateObject private var vm = ChatViewModel()

    var body: some View {
        // build the screen in step b
        VStack {
            Text("placeholder")
        }
    }
}

#Preview { ContentView() }`}</CodeB>
            )}
          </VStep>

          <VStep num="b" title="Build the screen layout" last={true}>
            <p>Three stacked sections: topic field at top, big brief card in the middle, shake hint at bottom. The card's content is either the brief, "thinking…", or the initial placeholder.</p>
            {isAndroid ? (
              <CodeB title="Add below MainActivity" accent={BL}>{`@Composable
fun ShakeBriefScreen(vm: ChatViewModel) {
    val state by vm.uiState.collectAsState()

    Column(
        modifier = Modifier.fillMaxSize().padding(20.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(20.dp)
    ) {
        TextField(
            value = state.topic,
            onValueChange = vm::onTopicChange,
            label = { Text("Topic") },
            modifier = Modifier.fillMaxWidth()
        )

        Card(modifier = Modifier.fillMaxWidth().weight(1f)) {
            Box(
                modifier = Modifier.fillMaxSize().padding(16.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    if (state.isThinking) "Claude is thinking…" else state.brief,
                    fontSize = 17.sp,
                    fontWeight = if (state.isThinking) FontWeight.Light else FontWeight.Normal
                )
            }
        }

        Text(
            "📱 Shake the phone for a new brief" +
            if (state.shakeCount > 0) " · #\${state.shakeCount}" else "",
            fontSize = 13.sp
        )
    }
}`}</CodeB>
            ) : (
              <CodeB title="ContentView.swift — full file" accent={GR}>{`import SwiftUI

struct ContentView: View {
    @StateObject private var vm = ChatViewModel()

    var body: some View {
        VStack(spacing: 20) {
            TextField("Topic", text: $vm.topic)
                .textFieldStyle(.roundedBorder)

            ZStack {
                RoundedRectangle(cornerRadius: 16)
                    .fill(Color(.systemGray6))
                Text(vm.isThinking ? "Claude is thinking…" : vm.brief)
                    .font(.title3)
                    .fontWeight(vm.isThinking ? .light : .regular)
                    .multilineTextAlignment(.center)
                    .padding()
            }

            Text("📱 Shake the phone for a new brief" + (vm.shakeCount > 0 ? " · #\\(vm.shakeCount)" : ""))
                .font(.caption)
                .foregroundColor(.secondary)
        }
        .padding(20)
    }
}

#Preview { ContentView() }`}</CodeB>
            )}
          </VStep>

          <Checkpoint num={4}>App builds and shows the topic field, the placeholder card, and the shake hint at the bottom.</Checkpoint>
        </Step>

        <Step num={5} title="Test the full loop (~3 min)">
          <ol style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 13 }}>
            <li>Run the app. The placeholder card says "Shake the phone for a brief on this topic."</li>
            <li>Shake the device firmly — a deliberate up-down motion with both hands works best</li>
            <li>"Claude is thinking…" appears, then a fresh 2-sentence brief replaces it</li>
            <li>Shake again — get a new brief, slightly different angle. Counter increments</li>
            <li>Change the topic to something specific ("octopus cognition", "Renaissance economics", "your grandmother's cooking") and shake again</li>
          </ol>

          <Section title="🛠 Common issues">
            <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>Shake never fires.</strong> {isAndroid ? "Emulators don't have a real accelerometer — use Extended Controls → Virtual Sensors → Accelerometer to simulate one. Or run on a physical device." : "iOS simulator can simulate shake via Device → Shake (or Ctrl+Cmd+Z), but raw accelerometer values may not exceed 2.5g. Lower the threshold for testing or run on a real device."}</li>
              <li><strong>Shake fires repeatedly for one motion.</strong> Cooldown is too short. Increase <IC>{isAndroid ? "cooldownMs" : "cooldownSec"}</IC> to 1500ms / 1.5s.</li>
              <li><strong>Shake never fires even on real device.</strong> Threshold too high. Lower it to 1.8g and shake again. Some devices report softer accelerometer values.</li>
              <li><strong>"401 Unauthorized" from Claude.</strong> API key didn't load — same fix as the other modalities.</li>
            </ul>
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck?</strong> Paste this:</p>
            <CodeB title="Prompt template" accent={P_C}>{`Building ShakeBrief on ${isAndroid ? "Android (Compose, Kotlin, SensorManager TYPE_ACCELEROMETER)" : "iOS (SwiftUI, Swift, CoreMotion)"}. Shake → Claude brief.

Failing at: [describe]
Verified: [list checks]
Code: [paste]

Likely cause and next test?`}</CodeB>
          </AiOpp>

          <Checkpoint num={5}>End-to-end works: shake → brief. You've shipped your first gesture-driven AI app.</Checkpoint>
        </Step>

        </div>

        <div style={{ marginTop: 16 }}>
          <strong style={{ fontSize: 13 }}>{"📚"} Resources for this modality</strong>
          <ul style={{ paddingLeft: 20, fontSize: 12, lineHeight: 1.8, margin: "6px 0 0" }}>
            {isAndroid ? (
              <>
                <li><Link>Android docs — SensorManager</Link> (developer.android.com/reference/android/hardware/SensorManager)</li>
                <li><Link>Sensor types overview</Link> — accelerometer, gyroscope, linear acceleration, gravity</li>
                <li><Link>ActivityRecognitionClient</Link> — for the walking/driving/still stretch</li>
              </>
            ) : (
              <>
                <li><Link>Apple docs — CMMotionManager</Link> (developer.apple.com/documentation/coremotion/cmmotionmanager)</li>
                <li><Link>CMDeviceMotion vs accelerometer</Link> — fused gravity-removed motion</li>
                <li><Link>CMMotionActivityManager</Link> — for the walking/driving/still stretch</li>
              </>
            )}
            <li><Link>Claude Messages API</Link></li>
          </ul>
        </div>

        <Tip><strong>Stretch — adapt the brief to user activity:</strong> Use {isAndroid ? "ActivityRecognitionClient" : "CMMotionActivityManager"} to detect whether the user is walking, driving, or stationary. Adjust the prompt accordingly: walking → 1-sentence brief, stationary → 3-sentence brief, driving → switch to TTS instead of text. This is the "context-aware AI" pattern from the slides — same core feature, modulated by motion state.</Tip>

        <Tip><strong>Stretch — sensor fusion (📍 + 🏃):</strong> When the phone notices you've stopped walking AND you're at a known place (use the GPS modality's geocoder), Claude can offer a context-specific summary. "You're at the office — here's what happened in Slack while you were on the train." This is the kind of mobile-only AI feature the litmus test points at.</Tip>
      </Section>

      <Section title={"👆  Touch & Stylus — Drawn input as image"}>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 8px" }}>~30 min · standalone mini-app · vision API on touch input</p>

        <p><strong>What you're building:</strong> SketchAI — an app where the user draws something with their finger (or Apple Pencil on iOS), taps Interpret, and Claude vision tells them what they drew. Great for napkin diagrams, math problems, hand-written notes, "explain this drawing" use cases.</p>

        <p><strong>The mental model — touch is just another image source:</strong> Once you have a bitmap, sending it to Claude is identical to the photo describer lab. The interesting part of this modality is everything BEFORE the bitmap: capturing strokes, rendering them onto a canvas, and rasterising the canvas to an image. The OS gives you the touch events; you turn them into pixels.</p>

        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", margin: "10px 0", fontSize: 12, lineHeight: 1.6 }}>
          <strong>Data flow:</strong><br/>
          👆 touch events&nbsp;&nbsp;→&nbsp;&nbsp;stroke paths on canvas&nbsp;&nbsp;→&nbsp;&nbsp;rasterise to bitmap&nbsp;&nbsp;→&nbsp;&nbsp;JPEG + base64&nbsp;&nbsp;→&nbsp;&nbsp;Claude vision&nbsp;&nbsp;→&nbsp;&nbsp;interpretation text
        </div>

        <p>{isAndroid
          ? "Android uses Compose's Canvas + pointerInput. detectDragGestures gives you onDragStart/onDrag/onDragEnd callbacks; you build up a Path object as the user draws. To rasterise, wrap the Canvas in a Compose GraphicsLayer (Compose 1.6+) and call .toImageBitmap()."
          : "iOS gives you PencilKit — a complete drawing framework that supports both finger and Apple Pencil with pressure, tilt, palm rejection, and a full undo system. PKCanvasView is the drawing view; its drawing.image(from:scale:) renders the strokes to a UIImage."
        }</p>

        <div style={{ '--platform-accent': isAndroid ? BL : GR } as React.CSSProperties}>

        <Step num={0} title="Create a new project (~3 min)">
          {isAndroid ? (
            <div>
              <p>In Android Studio: <strong>File → New → New Project</strong> → <strong>Empty Activity</strong>. Name it <IC>SketchAI</IC>, package <IC>com.yourname.sketchai</IC>, min SDK <strong>API 26</strong>. <strong>Finish</strong>.</p>
              <p>Open <IC>app/build.gradle.kts</IC> and add OkHttp (we'll use Compose's built-in Canvas, no extra dep needed for drawing):</p>
              <CodeB title="build.gradle.kts (app) — dependencies" accent={BL}>{`implementation("com.squareup.okhttp3:okhttp:4.12.0")`}</CodeB>
              <p>Sync, then wire your Claude API key per <Link>Lab Session 1 → Step 1</Link>.</p>
            </div>
          ) : (
            <div>
              <p>In Xcode: <strong>File → New → Project</strong> → <strong>App</strong>. Name it <IC>SketchAI</IC>, SwiftUI + Swift. <strong>Create</strong>.</p>
              <p>PencilKit ships with iOS — no extra dependency. Wire the API key per <Link>Lab Session 1 → Step 1</Link>.</p>
            </div>
          )}
          <Checkpoint num={0}>Project builds and runs.</Checkpoint>
        </Step>

        <Step num={1} title="Permissions (~1 min)">
          <p>Touch input requires no permission on either platform — touch events flow to your views by default. Skip to step 2.</p>
          <Checkpoint num={1}>Nothing to add — moving on.</Checkpoint>
        </Step>

        <Step num={2} title="Build the SketchPad (~12 min)">
          <p>{isAndroid
            ? "Android's drawing surface will be a Compose Composable that owns a list of Path objects (one per stroke), captures touch events to add to the current stroke, and exposes a way to rasterise to a Bitmap. We'll build it in three sub-steps."
            : "iOS's drawing surface is a UIViewRepresentable wrapping PKCanvasView. PencilKit handles all the heavy lifting — pressure, palm rejection, undo. Our wrapper is mostly plumbing to bridge to SwiftUI."
          }</p>

          <VStep num="a" title={isAndroid ? "Define the Stroke data model and SketchState" : "Create the PencilKit wrapper"}>
            {isAndroid ? (
              <div>
                <p>A drawing is a list of strokes; each stroke is a list of points. We'll add a tiny state class that the Composable reads and the ViewModel can call to clear or rasterise.</p>
                <p>Right-click your package → <strong>New → Kotlin Class/File</strong> → name it <IC>SketchPad</IC>, choose <strong>File</strong>:</p>
                <CodeB title="SketchPad.kt — data + state" accent={BL}>{`package com.yourname.sketchai

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.layer.GraphicsLayer
import androidx.compose.ui.graphics.layer.drawLayer
import androidx.compose.ui.graphics.rememberGraphicsLayer
import androidx.compose.ui.graphics.toAwtImage
import androidx.compose.ui.input.pointer.pointerInput

data class StrokePoint(val x: Float, val y: Float)
data class Stroke(val points: MutableList<StrokePoint> = mutableStateListOf())

class SketchState {
    val strokes = mutableStateListOf<Stroke>()
    fun clear() { strokes.clear() }
}`}</CodeB>
              </div>
            ) : (
              <div>
                <p>Right-click your project folder → <strong>New File → Swift File</strong> → name it <IC>SketchPad</IC>:</p>
                <CodeB title="SketchPad.swift" accent={GR}>{`import SwiftUI
import PencilKit

struct SketchPad: UIViewRepresentable {
    @Binding var canvas: PKCanvasView

    func makeUIView(context: Context) -> PKCanvasView {
        canvas.tool = PKInkingTool(.pen, color: .black, width: 6)
        canvas.drawingPolicy = .anyInput      // finger OR Apple Pencil
        canvas.backgroundColor = .systemBackground
        return canvas
    }

    func updateUIView(_ uiView: PKCanvasView, context: Context) {}
}`}</CodeB>
                <p>UIViewRepresentable lets us embed UIKit views in SwiftUI. The PKCanvasView is bound from outside (so the parent View can call .drawing.image() on it for rasterisation). drawingPolicy = .anyInput accepts both finger and Apple Pencil — for production apps, use .pencilOnly to avoid accidental palm strokes.</p>
              </div>
            )}
          </VStep>

          <VStep num="b" title={isAndroid ? "Build the SketchPad Composable with stroke capture" : "Add a clear method to the canvas"}>
            {isAndroid ? (
              <div>
                <p>The Composable does three things: holds a GraphicsLayer (used for rasterisation), captures drag gestures to build strokes, and renders all strokes via Canvas's drawPath. Add this to <IC>SketchPad.kt</IC> below the data classes:</p>
                <CodeB title="SketchPad.kt — Composable" accent={BL}>{`@Composable
fun SketchPad(state: SketchState, layer: GraphicsLayer, modifier: Modifier = Modifier) {
    Canvas(
        modifier = modifier
            .fillMaxSize()
            .background(Color.White)
            .drawWithContent {
                // Render to graphics layer so we can rasterise later
                layer.record { this@drawWithContent.drawContent() }
                drawLayer(layer)
            }
            .pointerInput(Unit) {
                detectDragGestures(
                    onDragStart = { offset ->
                        val s = Stroke()
                        s.points.add(StrokePoint(offset.x, offset.y))
                        state.strokes.add(s)
                    },
                    onDrag = { change, _ ->
                        state.strokes.lastOrNull()?.points?.add(
                            StrokePoint(change.position.x, change.position.y)
                        )
                        change.consume()
                    }
                )
            }
    ) {
        for (stroke in state.strokes) {
            if (stroke.points.size < 2) continue
            val path = Path().apply {
                moveTo(stroke.points.first().x, stroke.points.first().y)
                for (p in stroke.points.drop(1)) lineTo(p.x, p.y)
            }
            drawPath(path, color = Color.Black, style = Stroke(width = 6f))
        }
    }
}`}</CodeB>
                <p>The pattern: each onDragStart appends a new Stroke, each onDrag appends a point to the latest stroke. Compose recomposes the Canvas on every state change, redrawing all strokes. The GraphicsLayer is what we'll rasterise from in step c.</p>
              </div>
            ) : (
              <div>
                <p>Add a small extension on PKCanvasView for clearing the drawing — handy for the "Clear" button in the UI:</p>
                <CodeB title="Add to SketchPad.swift" accent={GR}>{`extension PKCanvasView {
    func clearDrawing() {
        drawing = PKDrawing()
    }
}`}</CodeB>
                <p>Note: PKCanvasView already has built-in undo (two-finger tap), so a Clear button is mostly a convenience — but it's expected behaviour and easy to add.</p>
              </div>
            )}
          </VStep>

          <VStep num="c" title="Build the rasterise function (canvas → bitmap)" last={true}>
            {isAndroid ? (
              <div>
                <p>To send the drawing to Claude, we need a Bitmap. The GraphicsLayer holds the rendered drawing — call .toImageBitmap().asAndroidBitmap() to convert. This is async-suspend in Compose 1.6+, so wrap it appropriately.</p>
                <CodeB title="Add as a top-level function in SketchPad.kt" accent={BL}>{`import android.graphics.Bitmap

suspend fun rasterise(layer: GraphicsLayer): Bitmap {
    val imageBitmap = layer.toImageBitmap()
    return imageBitmap.asAndroidBitmap()
}`}</CodeB>
              </div>
            ) : (
              <div>
                <p>The rasterise step on iOS is a one-liner — PencilKit's drawing object has an .image method that takes a CGRect and a scale. We'll call this from the ViewModel when the user taps Interpret.</p>
                <CodeB title="Reference — already provided by PencilKit, no new file needed" accent={GR}>{`// In ChatViewModel (Step 3), you'll call:
// let img = canvas.drawing.image(from: canvas.bounds, scale: UIScreen.main.scale)
//
// canvas.bounds gives the full canvas; for tighter crops use canvas.drawing.bounds
// (which is the bounding box of all strokes — fewer tokens, sharper detail).`}</CodeB>
              </div>
            )}
            <Tip>{isAndroid
              ? "Compose's rasterisation is fairly new (1.6+). If your project's Compose version is older, the alternative is wrapping a custom Android View (subclass of View, override onDraw) and calling Bitmap.createBitmap(...) + view.draw(canvas). It's more code but works on any Compose version."
              : "Use canvas.drawing.bounds instead of canvas.bounds when sending to Claude — it crops to just the strokes (way fewer pixels, much sharper detail at the same JPEG size). For visual UI rendering you want the full canvas; for the Claude payload you want the tight crop."
            }</Tip>
          </VStep>

          <Section title={"✅ Check your work — show me the complete SketchPad." + (isAndroid ? "kt" : "swift")}>
            {isAndroid ? (
              <CodeB title="SketchPad.kt" accent={BL}>{`// Combine all VStep snippets in order:
// data classes → SketchPad Composable → rasterise function
// If you want a single-paste reference, ask Claude to combine them.`}</CodeB>
            ) : (
              <CodeB title="SketchPad.swift" accent={GR}>{`import SwiftUI
import PencilKit

struct SketchPad: UIViewRepresentable {
    @Binding var canvas: PKCanvasView

    func makeUIView(context: Context) -> PKCanvasView {
        canvas.tool = PKInkingTool(.pen, color: .black, width: 6)
        canvas.drawingPolicy = .anyInput
        canvas.backgroundColor = .systemBackground
        return canvas
    }

    func updateUIView(_ uiView: PKCanvasView, context: Context) {}
}

extension PKCanvasView {
    func clearDrawing() {
        drawing = PKDrawing()
    }
}`}</CodeB>
            )}
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck?</strong> {isAndroid ? "Compose's drawing APIs evolved a lot — your version may differ. Ask Claude:" : "Most issues here are about wiring PKCanvasView's binding correctly. Ask Claude:"}</p>
            <CodeB title="Prompt" accent={P_C}>{isAndroid
              ? `I'm building a Compose drawing canvas for a SketchAI app. My SketchPad.kt uses Canvas + pointerInput + detectDragGestures, plus a GraphicsLayer for rasterisation:

[paste your code]

Issue: [describe — e.g. strokes don't render, or rasterise returns a blank bitmap, or the canvas is laggy]

What's likely wrong, and what's the smallest change to fix?`
              : `I'm building a SwiftUI sketch app using PencilKit's PKCanvasView wrapped in UIViewRepresentable:

[paste your code]

Issue: [describe — e.g. the canvas is unresponsive, or drawing doesn't show, or capturing the image returns blank]

What's the fix?`}</CodeB>
          </AiOpp>

          <Checkpoint num={2}>SketchPad.{isAndroid ? "kt" : "swift"} compiles cleanly.</Checkpoint>
        </Step>

        <Step num={3} title="Build the ChatViewModel that calls Claude vision (~10 min)">
          <p>The ViewModel takes a Bitmap/UIImage and sends it as a vision message — same pattern as the Camera modality and the Session 2 photo describer. The prompt is targeted: ask Claude to interpret the sketch.</p>

          {isAndroid ? (
            <div>
              <p>Right-click your package → <strong>New → Kotlin Class/File</strong> → name it <IC>ChatViewModel</IC>:</p>
              <CodeB title="ChatViewModel.kt — top of file" accent={BL}>{`package com.yourname.sketchai

import android.app.Application
import android.graphics.Bitmap
import android.util.Base64
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject
import java.io.ByteArrayOutputStream

data class UiState(
    val interpretation: String = "Draw something below, then tap Interpret.",
    val isThinking: Boolean = false
)`}</CodeB>
            </div>
          ) : (
            <div>
              <p>Right-click your project folder → <strong>New File → Swift File</strong> → name it <IC>ChatViewModel</IC>:</p>
              <CodeB title="ChatViewModel.swift — top of file" accent={GR}>{`import Foundation
import UIKit`}</CodeB>
            </div>
          )}

          <VStep num="a" title="Define the class shell">
            {isAndroid ? (
              <CodeB title="Add below UiState" accent={BL}>{`class ChatViewModel(app: Application) : AndroidViewModel(app) {
    private val _uiState = MutableStateFlow(UiState())
    val uiState = _uiState.asStateFlow()
    private val client = OkHttpClient()

    fun interpret(bitmap: Bitmap) { /* fill in next */ }
}`}</CodeB>
            ) : (
              <CodeB title="Add below the imports" accent={GR}>{`@MainActor
class ChatViewModel: ObservableObject {
    @Published var interpretation: String = "Draw something below, then tap Interpret."
    @Published var isThinking: Bool = false

    func interpret(_ image: UIImage) async { /* fill in next */ }
}`}</CodeB>
            )}
          </VStep>

          <VStep num="b" title="Implement interpret() and callClaude" last={true}>
            <p>Identical to the Camera modality's vision call, just with a different prompt. The user-facing function takes a bitmap, marks isThinking, calls Claude on a background dispatcher, then updates state with the response.</p>
            {isAndroid ? (
              <CodeB title="Replace the interpret() stub + add callClaude" accent={BL}>{`fun interpret(bitmap: Bitmap) {
    _uiState.update { it.copy(isThinking = true) }
    viewModelScope.launch {
        val text = withContext(Dispatchers.IO) { callClaude(bitmap) }
        _uiState.update { it.copy(interpretation = text, isThinking = false) }
    }
}

private fun callClaude(bitmap: Bitmap): String {
    // Compress + base64
    val baos = ByteArrayOutputStream()
    bitmap.compress(Bitmap.CompressFormat.JPEG, 85, baos)
    val b64 = Base64.encodeToString(baos.toByteArray(), Base64.NO_WRAP)

    // Multimodal content: image + targeted prompt
    val content = JSONArray()
        .put(JSONObject().apply {
            put("type", "image")
            put("source", JSONObject().apply {
                put("type", "base64")
                put("media_type", "image/jpeg")
                put("data", b64)
            })
        })
        .put(JSONObject().put("type", "text").put(
            "text",
            "The user drew this sketch. Describe what you see in 1-2 sentences " +
            "and, if it's a familiar shape (math problem, diagram, letter, " +
            "logo, etc.), explain what it represents."
        ))

    val body = JSONObject()
        .put("model", "claude-sonnet-4-5")
        .put("max_tokens", 300)
        .put("messages", JSONArray().put(
            JSONObject().put("role", "user").put("content", content)
        ))
        .toString()
        .toRequestBody("application/json".toMediaType())

    val req = Request.Builder()
        .url("https://api.anthropic.com/v1/messages")
        .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
        .addHeader("anthropic-version", "2023-06-01")
        .post(body)
        .build()

    client.newCall(req).execute().use { response ->
        val json = JSONObject(response.body!!.string())
        return json.getJSONArray("content")
            .getJSONObject(0).getString("text")
    }
}`}</CodeB>
            ) : (
              <CodeB title="Replace the interpret() stub + add callClaude" accent={GR}>{`func interpret(_ image: UIImage) async {
    isThinking = true
    let text = (try? await callClaude(image: image)) ?? "(error)"
    interpretation = text
    isThinking = false
}

private func callClaude(image: UIImage) async throws -> String {
    guard let key = Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String,
          let jpeg = image.jpegData(compressionQuality: 0.85) else {
        throw URLError(.badURL)
    }
    let b64 = jpeg.base64EncodedString()

    let content: [[String: Any]] = [
        ["type": "image",
         "source": ["type": "base64",
                    "media_type": "image/jpeg",
                    "data": b64]],
        ["type": "text",
         "text": "The user drew this sketch. Describe what you see in 1-2 sentences and, if it's a familiar shape (math problem, diagram, letter, logo, etc.), explain what it represents."]
    ]
    let payload: [String: Any] = [
        "model": "claude-sonnet-4-5",
        "max_tokens": 300,
        "messages": [["role": "user", "content": content]]
    ]

    var req = URLRequest(url: URL(string: "https://api.anthropic.com/v1/messages")!)
    req.httpMethod = "POST"
    req.setValue(key, forHTTPHeaderField: "x-api-key")
    req.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
    req.setValue("application/json", forHTTPHeaderField: "Content-Type")
    req.httpBody = try JSONSerialization.data(withJSONObject: payload)

    let (data, _) = try await URLSession.shared.data(for: req)
    let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
    let blocks = json?["content"] as? [[String: Any]]
    return blocks?.first?["text"] as? String ?? "(no content)"
}`}</CodeB>
            )}
          </VStep>

          <Section title={"✅ Check your work — show me the complete ChatViewModel." + (isAndroid ? "kt" : "swift")}>
            <CodeB title={isAndroid ? "ChatViewModel.kt" : "ChatViewModel.swift"} accent={isAndroid ? BL : GR}>{`// Combine all VStep snippets in order. If you want a single-paste reference,
// ask Claude to combine them.`}</CodeB>
          </Section>

          <Checkpoint num={3}>ChatViewModel.{isAndroid ? "kt" : "swift"} compiles. The vision API call mirrors the Session 2 lab and the Camera modality.</Checkpoint>
        </Step>

        <Step num={4} title="Build the UI — sketch area + interpret button + result (~8 min)">
          <p>Three pieces vertically: the sketch pad (large), an "Interpret" + "Clear" button row, and a card showing Claude's interpretation.</p>

          {isAndroid ? (
            <CodeB title="MainActivity.kt — full file" accent={BL}>{`package com.yourname.sketchai

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.layer.rememberGraphicsLayer
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val viewModel: ChatViewModel by viewModels()
        setContent { MaterialTheme { SketchScreen(viewModel) } }
    }
}

@Composable
fun SketchScreen(vm: ChatViewModel) {
    val state by vm.uiState.collectAsState()
    val sketchState = remember { SketchState() }
    val layer = rememberGraphicsLayer()
    val scope = rememberCoroutineScope()

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Card(
            modifier = Modifier.fillMaxWidth().weight(1f),
            shape = RoundedCornerShape(12.dp)
        ) {
            SketchPad(sketchState, layer, modifier = Modifier.fillMaxSize())
        }

        Row(
            modifier = Modifier.fillMaxWidth().padding(vertical = 12.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            OutlinedButton(
                onClick = { sketchState.clear() },
                modifier = Modifier.weight(1f)
            ) { Text("Clear") }

            Button(
                onClick = {
                    scope.launch {
                        val bitmap = rasterise(layer)
                        vm.interpret(bitmap)
                    }
                },
                enabled = !state.isThinking && sketchState.strokes.isNotEmpty(),
                modifier = Modifier.weight(2f)
            ) {
                Text(if (state.isThinking) "Thinking…" else "Interpret")
            }
        }

        Card(modifier = Modifier.fillMaxWidth()) {
            Text(state.interpretation, modifier = Modifier.padding(16.dp))
        }
    }
}`}</CodeB>
          ) : (
            <CodeB title="ContentView.swift — full file" accent={GR}>{`import SwiftUI
import PencilKit

struct ContentView: View {
    @StateObject private var vm = ChatViewModel()
    @State private var canvas = PKCanvasView()

    var body: some View {
        VStack(spacing: 12) {
            SketchPad(canvas: $canvas)
                .background(Color(.systemBackground))
                .cornerRadius(12)
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color(.systemGray4), lineWidth: 1)
                )

            HStack {
                Button("Clear") { canvas.clearDrawing() }
                    .buttonStyle(.bordered)
                    .frame(maxWidth: .infinity)

                Button(vm.isThinking ? "Thinking…" : "Interpret") {
                    let bounds = canvas.drawing.bounds.isEmpty
                        ? canvas.bounds
                        : canvas.drawing.bounds
                    let img = canvas.drawing.image(from: bounds,
                                                   scale: UIScreen.main.scale)
                    Task { await vm.interpret(img) }
                }
                .buttonStyle(.borderedProminent)
                .disabled(vm.isThinking || canvas.drawing.strokes.isEmpty)
                .frame(maxWidth: .infinity)
            }

            ScrollView {
                Text(vm.interpretation)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding()
                    .background(Color(.systemGray6))
                    .cornerRadius(12)
            }
            .frame(maxHeight: 200)
        }
        .padding()
    }
}

#Preview { ContentView() }`}</CodeB>
          )}

          <Checkpoint num={4}>App builds. The sketch area is at the top, you can draw with your finger, and Clear/Interpret buttons are below. Interpret is disabled until you draw something.</Checkpoint>
        </Step>

        <Step num={5} title="Test the full loop (~3 min)">
          <ol style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 13 }}>
            <li>Run the app. Draw a simple shape (a circle, a smiley, a triangle, the letter "A")</li>
            <li>Tap <strong>Interpret</strong></li>
            <li>"Thinking…" appears, then Claude's interpretation replaces it</li>
            <li>Tap <strong>Clear</strong> and try something more complex — a stick figure, a math equation, an arrow diagram</li>
          </ol>

          <Section title="🛠 Common issues">
            <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>Strokes appear but Interpret returns nothing useful.</strong> {isAndroid ? "The bitmap might be blank — verify by saving it and viewing it. If empty, the GraphicsLayer didn't capture; rasterise BEFORE clearing or recomposing the canvas." : "drawing.image returns blank if drawing.bounds is .zero. Check canvas.drawing.strokes.isEmpty before calling, or fall back to canvas.bounds if drawing.bounds is empty."}</li>
              <li><strong>Drawing is laggy.</strong> {isAndroid ? "Compose recomposes on every state change — for very long strokes (1000+ points), batch updates or downsample. Or switch to a Custom Android View for hot drawing paths." : "PencilKit is hardware-accelerated and shouldn't lag. If it does, ensure drawingPolicy isn't unnecessarily restrictive (e.g., .pencilOnly when finger is intended)."}</li>
              <li><strong>"401 Unauthorized" from Claude.</strong> Same as the other modalities — API key didn't load.</li>
            </ul>
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck?</strong> Paste this:</p>
            <CodeB title="Prompt template" accent={P_C}>{`Building SketchAI on ${isAndroid ? "Android (Compose Canvas + GraphicsLayer rasterisation)" : "iOS (SwiftUI + PencilKit)"}. Flow: draw → rasterise → Claude vision → interpretation.

Failing at: [describe]
Verified: [list checks]
Code: [paste]

Likely cause and next test?`}</CodeB>
          </AiOpp>

          <Checkpoint num={5}>End-to-end works: drawing → vision API → interpretation. You've turned the user's finger into a Claude-readable input.</Checkpoint>
        </Step>

        </div>

        <div style={{ marginTop: 16 }}>
          <strong style={{ fontSize: 13 }}>{"📚"} Resources for this modality</strong>
          <ul style={{ paddingLeft: 20, fontSize: 12, lineHeight: 1.8, margin: "6px 0 0" }}>
            {isAndroid ? (
              <>
                <li><Link>Compose Canvas docs</Link> (developer.android.com/jetpack/compose/graphics/draw/overview)</li>
                <li><Link>pointerInput and gesture detection</Link></li>
                <li><Link>GraphicsLayer for rasterisation</Link> (Compose 1.6+)</li>
              </>
            ) : (
              <>
                <li><Link>PencilKit overview</Link> (developer.apple.com/documentation/pencilkit)</li>
                <li><Link>PKCanvasView</Link> — the drawing surface</li>
                <li><Link>UIViewRepresentable</Link> — embedding UIKit views in SwiftUI</li>
              </>
            )}
            <li><Link>Claude vision API</Link></li>
          </ul>
        </div>

        <Tip><strong>Stretch — bounding-box crop:</strong> {isAndroid ? "Track minX/minY/maxX/maxY as the user draws, then rasterise only that rectangle (not the full canvas). Fewer pixels = sharper detail per token." : "PencilKit's drawing.bounds gives this for free — the example UI already uses it as a fallback. Switch to it as the default for tighter crops."}</Tip>

        <Tip><strong>Stretch — handwriting recognition:</strong> {isAndroid ? "Combine with ML Kit's Digital Ink Recognition for on-device handwriting → text. Send the recognised text to Claude (instead of/in addition to the image) for a Q&A on what was written." : "PencilKit pairs naturally with iOS 14+'s Scribble and the new in-built handwriting recognition. Convert strokes to text on-device, then send the text to Claude."} A "ChatGPT but you write your prompts by hand" experience.</Tip>
      </Section>

      <Section title={"📡  Bluetooth, NFC & UWB — Proximity as context"}>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 8px" }}>~25 min · standalone mini-app · NFC tag reading</p>

        <p><strong>What you're building:</strong> TagNarrator — an app that reads NFC tags and asks Claude to narrate what they represent. Stick a $0.30 NFC sticker on a book, a plant, an exhibit, or any object; tap your phone to it; Claude gives a tour-guide-style description. Useful for retail demos, museum exhibits, smart-home labels, accessibility aids.</p>

        <p><strong>The mental model — NFC is just a 1KB string delivered by physical proximity:</strong> NFC tags are tiny memory chips (typically 144 bytes to 1KB) that you pre-write with a small payload — could be plain text ("apollo-lunar-module"), a URL, or a JSON blob. When the user's phone touches the tag, your app receives the payload as a string. From there it's just text-in, text-out — Claude gets the tag string and a system prompt telling it how to interpret it.</p>

        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", margin: "10px 0", fontSize: 12, lineHeight: 1.6 }}>
          <strong>Data flow:</strong><br/>
          📡 NFC tag (physical)&nbsp;&nbsp;→&nbsp;&nbsp;OS NFC subsystem&nbsp;&nbsp;→&nbsp;&nbsp;NDEF payload (bytes)&nbsp;&nbsp;→&nbsp;&nbsp;UTF-8 string&nbsp;&nbsp;→&nbsp;&nbsp;Claude prompt&nbsp;&nbsp;→&nbsp;&nbsp;narration
        </div>

        <p>{isAndroid
          ? "Android's piece is NfcAdapter + intent filtering. When the user taps a tag, the OS launches your activity with an Intent containing the tag data — you handle it in onNewIntent. Foreground dispatch (NFC active only when your screen is showing) is the simplest UX."
          : "iOS gives you Core NFC's NFCNDEFReaderSession. Unlike Android (which can read tags whenever the screen is on), iOS NFC reading is explicit — the user taps a Scan button, you start a session, the OS shows a system sheet, the user holds their phone to the tag, and the session ends after the first read."
        }</p>

        <Warn>{"This modality requires a real device with NFC hardware. Most modern Android phones have it (since ~2012). iPhone 7 and later. You also need at least one writable NFC tag — they're cheap on Amazon (search 'NTAG215 stickers') and you can write them with the free 'NFC Tools' app on either platform."}</Warn>

        <div style={{ '--platform-accent': isAndroid ? BL : GR } as React.CSSProperties}>

        <Step num={0} title="Create a new project + write a test tag (~5 min)">
          <p>You need both a project AND at least one NFC tag pre-written with a known payload.</p>

          {isAndroid ? (
            <div>
              <p>In Android Studio: <strong>File → New → New Project</strong> → <strong>Empty Activity</strong>. Name it <IC>TagNarrator</IC>, package <IC>com.yourname.tagnarrator</IC>, min SDK <strong>API 26</strong>. <strong>Finish</strong>.</p>
              <p>Add OkHttp:</p>
              <CodeB title="build.gradle.kts (app) — dependencies" accent={BL}>{`implementation("com.squareup.okhttp3:okhttp:4.12.0")`}</CodeB>
              <p>Sync, then wire the Claude API key per <Link>Lab Session 1 → Step 1</Link>.</p>
            </div>
          ) : (
            <div>
              <p>In Xcode: <strong>File → New → Project</strong> → <strong>App</strong>. Name it <IC>TagNarrator</IC>, SwiftUI + Swift. <strong>Create</strong>.</p>
              <p>Add the <strong>Near Field Communication Tag Reading</strong> capability: select your target → <strong>Signing & Capabilities</strong> → <strong>+ Capability</strong> → search "NFC" → add it. This adds the Core NFC entitlement Apple requires.</p>
              <p>Wire your Claude API key per <Link>Lab Session 1 → Step 1</Link>.</p>
            </div>
          )}

          <p style={{ marginTop: 12 }}><strong>Now write a test tag:</strong> install <IC>NFC Tools</IC> from {isAndroid ? "the Play Store" : "the App Store"}. Open it → <strong>Write</strong> → <strong>Add a record</strong> → <strong>Text</strong>. Type something like <IC>exhibit:apollo-lunar-module</IC> or <IC>plant:fiddle-leaf-fig</IC>. Hit <strong>Write</strong> and tap your phone to a blank NFC tag. The app confirms when it's done.</p>

          <Checkpoint num={0}>Project builds. You have at least one writable NFC tag with a known text payload.</Checkpoint>
        </Step>

        <Step num={1} title="Add NFC permissions (~3 min)">
          {isAndroid ? (
            <div>
              <p>Open <IC>AndroidManifest.xml</IC>. Add the permission and feature requirement INSIDE <IC>{"<manifest>"}</IC> but OUTSIDE <IC>{"<application>"}</IC>:</p>
              <CodeB title="AndroidManifest.xml" accent={BL}>{`<uses-permission android:name="android.permission.NFC" />
<uses-feature android:name="android.hardware.nfc" android:required="true" />`}</CodeB>
              <p>The <IC>uses-feature</IC> with required=true tells Google Play to filter out devices without NFC. The permission itself is install-time (no runtime ask) — NFC is treated as a low-risk capability.</p>
            </div>
          ) : (
            <div>
              <p>Open <IC>Info.plist</IC>. Right-click → <strong>Add Row</strong>. Add the NFC reader description:</p>
              <CodeB title="Info.plist" accent={GR}>{`<key>NFCReaderUsageDescription</key>
<string>Used to read NFC tags and ask AI to describe what they represent.</string>`}</CodeB>
              <p>This shows up in the system permission prompt the first time the app starts an NFC scan. The capability you added in step 0 grants the entitlement; this Info.plist key explains the use to the user.</p>
            </div>
          )}
          <Checkpoint num={1}>Build still succeeds.</Checkpoint>
        </Step>

        <Step num={2} title="Build the TagReader class (~10 min)">
          <p>The reader's job is to start an NFC session, parse the resulting NDEF payload to a string, and fire an onTag callback. {isAndroid ? "On Android, this is more about wiring foreground dispatch than 'starting a session'." : "On iOS, the session is explicit and short-lived — one scan per session."}</p>

          <VStep num="a" title="Create the file">
            {isAndroid ? (
              <div>
                <p>Right-click your package → <strong>New → Kotlin Class/File</strong> → name it <IC>TagReader</IC>:</p>
                <CodeB title="TagReader.kt" accent={BL}>{`package com.yourname.tagnarrator

import android.app.Activity
import android.app.PendingIntent
import android.content.Intent
import android.content.IntentFilter
import android.nfc.NdefMessage
import android.nfc.NfcAdapter
import android.os.Build

class TagReader(
    private val activity: Activity,
    private val onTag: (String) -> Unit,
    private val onError: (String) -> Unit
) {
    private val adapter: NfcAdapter? = NfcAdapter.getDefaultAdapter(activity)

    fun enableForeground() { /* fill in next */ }
    fun disableForeground() { /* fill in next */ }
    fun handleIntent(intent: Intent) { /* fill in next */ }
}`}</CodeB>
                <p>Constructor takes the activity (NFC needs it for foreground dispatch), an onTag callback for successful reads, and onError for issues like NFC turned off. The adapter is nullable because not all devices have NFC.</p>
              </div>
            ) : (
              <div>
                <p>Right-click your project folder → <strong>New File → Swift File</strong> → name it <IC>TagReader</IC>:</p>
                <CodeB title="TagReader.swift" accent={GR}>{`import Foundation
import CoreNFC

class TagReader: NSObject, ObservableObject {
    private var session: NFCNDEFReaderSession?
    private let onTag: (String) -> Void
    private let onError: (String) -> Void

    init(onTag: @escaping (String) -> Void,
         onError: @escaping (String) -> Void) {
        self.onTag = onTag
        self.onError = onError
        super.init()
    }

    func scan() { /* fill in next */ }
}`}</CodeB>
                <p>NFCNDEFReaderSession is the core type — start one, read one tag, the session ends. We hold a reference so it isn't released mid-scan. Conforming to NSObject lets us be the session's delegate (added as an extension in step c).</p>
              </div>
            )}
          </VStep>

          <VStep num="b" title={isAndroid ? "Implement enableForeground / disableForeground" : "Implement scan() to start a session"}>
            <p>{isAndroid
              ? "Foreground dispatch routes any NFC intent to your activity while it's in the foreground (instead of letting the OS pick a different app). Call enableForeground in onResume, disableForeground in onPause. This is the cleanest UX — the user opens your app, taps a tag, and your code handles it."
              : "scan() builds a new NFCNDEFReaderSession with this object as the delegate. invalidateAfterFirstRead = true means the session ends as soon as one tag is read (perfect for a 'tap to learn' flow). The alertMessage is shown in the system NFC sheet — write it for users."
            }</p>
            {isAndroid ? (
              <CodeB title="Replace the foreground stubs" accent={BL}>{`fun enableForeground() {
    val a = adapter ?: return onError("This device has no NFC hardware.")
    if (!a.isEnabled) return onError("NFC is turned off in system settings.")

    val pendingIntent = PendingIntent.getActivity(
        activity, 0,
        Intent(activity, activity.javaClass).addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP),
        if (Build.VERSION.SDK_INT >= 31) PendingIntent.FLAG_MUTABLE else 0
    )
    val filters = arrayOf(IntentFilter(NfcAdapter.ACTION_NDEF_DISCOVERED))
    a.enableForegroundDispatch(activity, pendingIntent, filters, null)
}

fun disableForeground() {
    adapter?.disableForegroundDispatch(activity)
}`}</CodeB>
            ) : (
              <CodeB title="Replace the scan() stub" accent={GR}>{`func scan() {
    guard NFCNDEFReaderSession.readingAvailable else {
        onError("This device doesn't support NFC reading.")
        return
    }
    session = NFCNDEFReaderSession(delegate: self, queue: nil,
                                   invalidateAfterFirstRead: true)
    session?.alertMessage = "Hold your iPhone near an NFC tag."
    session?.begin()
}`}</CodeB>
            )}
          </VStep>

          <VStep num="c" title={isAndroid ? "Parse the tag payload in handleIntent" : "Implement the delegate callbacks"} last={true}>
            {isAndroid ? (
              <div>
                <p>When the user taps a tag and your activity is in the foreground, onNewIntent fires. Forward the intent to handleIntent, which extracts the NDEF message → first record → payload bytes → UTF-8 string. NDEF text records have a small header byte; strip it.</p>
                <CodeB title="Replace the handleIntent stub" accent={BL}>{`fun handleIntent(intent: Intent) {
    if (intent.action != NfcAdapter.ACTION_NDEF_DISCOVERED) return

    val msgs = intent.getParcelableArrayExtra(NfcAdapter.EXTRA_NDEF_MESSAGES)
    val message = msgs?.firstOrNull() as? NdefMessage ?: return
    val record = message.records.firstOrNull() ?: return

    // NDEF text records: byte 0 is status, bytes 1..N are the language code,
    // and the rest is the actual text. The status byte's low 6 bits = lang length.
    val payload = record.payload
    if (payload.isEmpty()) return
    val langLength = payload[0].toInt() and 0x3F
    val text = String(
        payload, 1 + langLength, payload.size - 1 - langLength,
        Charsets.UTF_8
    )
    onTag(text)
}`}</CodeB>
                <Tip>The NDEF text record format is mildly annoying — the first byte is a status byte, then a 2-3 character language code, then the text. If you skip the language stripping, you'll see "en" prefixed on every tag. The 0x3F mask extracts just the length bits.</Tip>
              </div>
            ) : (
              <div>
                <p>Add an NFCNDEFReaderSessionDelegate extension at the bottom of TagReader.swift. It needs three methods: didDetectNDEFs (got a tag!), didInvalidateWithError (something went wrong, including user cancellation), and readerSessionDidBecomeActive (optional, fires when the system sheet appears).</p>
                <CodeB title="Add at the bottom of TagReader.swift" accent={GR}>{`extension TagReader: NFCNDEFReaderSessionDelegate {
    func readerSession(_ session: NFCNDEFReaderSession,
                       didDetectNDEFs messages: [NFCNDEFMessage]) {
        guard let record = messages.first?.records.first else {
            onError("Tag was empty.")
            return
        }
        // NDEF text records have a status byte + language code prefix
        let payload = record.payload
        guard payload.count > 0 else { return }
        let langLength = Int(payload[0]) & 0x3F
        let textData = payload.suffix(from: 1 + langLength)
        let text = String(data: textData, encoding: .utf8) ?? ""
        DispatchQueue.main.async { [weak self] in
            self?.onTag(text)
        }
    }

    func readerSession(_ session: NFCNDEFReaderSession,
                       didInvalidateWithError error: Error) {
        // Fires on user cancellation OR errors. Filter out user cancel.
        let nsError = error as NSError
        if nsError.code != NFCReaderError.readerSessionInvalidationErrorUserCanceled.rawValue {
            DispatchQueue.main.async { [weak self] in
                self?.onError(error.localizedDescription)
            }
        }
    }
}`}</CodeB>
                <Tip>The user cancellation filter is important — without it, every "Cancel" tap from the system sheet shows an error in your UI. The NFCReaderError code constant is the standard way to tell user-canceled apart from genuine errors.</Tip>
              </div>
            )}
          </VStep>

          <Section title={"✅ Check your work — show me the complete TagReader." + (isAndroid ? "kt" : "swift")}>
            <CodeB title={isAndroid ? "TagReader.kt" : "TagReader.swift"} accent={isAndroid ? BL : GR}>{`// Combine all VStep snippets in order.
// If you want a single-paste reference, ask Claude to combine them.`}</CodeB>
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>NDEF parsing tripped you up?</strong> The byte-level format is one of those things you only need to know once. Ask Claude:</p>
            <CodeB title="Prompt" accent={P_C}>{`Explain the NDEF text record byte format. I'm parsing payload bytes from a ${isAndroid ? "android.nfc.NdefRecord" : "NFCNDEFPayload"} on ${isAndroid ? "Android" : "iOS"} and need to extract just the text — not the language code prefix or the status byte. Give me a step-by-step breakdown of the byte layout.`}</CodeB>
          </AiOpp>

          <Checkpoint num={2}>TagReader.{isAndroid ? "kt" : "swift"} compiles cleanly.</Checkpoint>
        </Step>

        <Step num={3} title="Build the ChatViewModel that narrates tags (~8 min)">
          <p>The ViewModel takes a tag string, builds a tour-guide-style prompt, and sends it to Claude. The prompt design matters — without it, Claude treats the tag string as plain text. With it, Claude knows the string is a label and gives a 30-second narration.</p>

          {isAndroid ? (
            <CodeB title="ChatViewModel.kt — full file" accent={BL}>{`package com.yourname.tagnarrator

import android.app.Application
import androidx.activity.ComponentActivity
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject

data class UiState(
    val lastTag: String? = null,
    val narration: String = "Tap your phone to an NFC tag.",
    val isThinking: Boolean = false,
    val error: String? = null
)

class ChatViewModel(app: Application) : AndroidViewModel(app) {
    private val _uiState = MutableStateFlow(UiState())
    val uiState = _uiState.asStateFlow()

    private val client = OkHttpClient()
    private var reader: TagReader? = null

    fun attach(activity: ComponentActivity) {
        reader = TagReader(
            activity = activity,
            onTag = { tag -> onTag(tag) },
            onError = { msg -> _uiState.update { it.copy(error = msg) } }
        )
    }

    fun onResume() { reader?.enableForeground() }
    fun onPause()  { reader?.disableForeground() }
    fun handleIntent(intent: android.content.Intent) { reader?.handleIntent(intent) }

    private fun onTag(tag: String) {
        _uiState.update { it.copy(lastTag = tag, isThinking = true, error = null) }
        viewModelScope.launch {
            val text = withContext(Dispatchers.IO) { callClaude(tag) }
            _uiState.update { it.copy(narration = text, isThinking = false) }
        }
    }

    private fun callClaude(tag: String): String {
        val prompt = """
            You are a friendly tour guide. The visitor just scanned an NFC tag
            with the label '\$tag'. In 2-3 sentences, narrate what this tag
            represents — interpret the slug if needed (e.g. "apollo-lunar-module"
            = the Apollo lunar module). Add one surprising or memorable detail.
            No preamble.
        """.trimIndent()

        val body = JSONObject()
            .put("model", "claude-sonnet-4-5")
            .put("max_tokens", 250)
            .put("messages", JSONArray().put(
                JSONObject().put("role", "user").put("content", prompt)
            ))
            .toString()
            .toRequestBody("application/json".toMediaType())

        val req = Request.Builder()
            .url("https://api.anthropic.com/v1/messages")
            .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
            .addHeader("anthropic-version", "2023-06-01")
            .post(body)
            .build()

        client.newCall(req).execute().use { response ->
            val json = JSONObject(response.body!!.string())
            return json.getJSONArray("content")
                .getJSONObject(0).getString("text")
        }
    }
}`}</CodeB>
          ) : (
            <CodeB title="ChatViewModel.swift — full file" accent={GR}>{`import Foundation

@MainActor
class ChatViewModel: ObservableObject {
    @Published var lastTag: String?
    @Published var narration: String = "Tap Scan and hold your phone near an NFC tag."
    @Published var isThinking: Bool = false
    @Published var error: String?

    private lazy var reader: TagReader = {
        TagReader(
            onTag: { [weak self] tag in
                Task { @MainActor in await self?.onTag(tag) }
            },
            onError: { [weak self] msg in
                Task { @MainActor in self?.error = msg }
            }
        )
    }()

    func scan() {
        error = nil
        reader.scan()
    }

    private func onTag(_ tag: String) async {
        lastTag = tag
        isThinking = true
        let text = (try? await callClaude(tag: tag)) ?? "(error)"
        narration = text
        isThinking = false
    }

    private func callClaude(tag: String) async throws -> String {
        guard let key = Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String else {
            throw URLError(.userAuthenticationRequired)
        }
        let prompt = """
        You are a friendly tour guide. The visitor just scanned an NFC tag with the label '\\(tag)'. In 2-3 sentences, narrate what this tag represents — interpret the slug if needed (e.g. "apollo-lunar-module" = the Apollo lunar module). Add one surprising or memorable detail. No preamble.
        """

        var req = URLRequest(url: URL(string: "https://api.anthropic.com/v1/messages")!)
        req.httpMethod = "POST"
        req.setValue(key, forHTTPHeaderField: "x-api-key")
        req.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")

        let payload: [String: Any] = [
            "model": "claude-sonnet-4-5",
            "max_tokens": 250,
            "messages": [["role": "user", "content": prompt]]
        ]
        req.httpBody = try JSONSerialization.data(withJSONObject: payload)

        let (data, _) = try await URLSession.shared.data(for: req)
        let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
        let blocks = json?["content"] as? [[String: Any]]
        return blocks?.first?["text"] as? String ?? "(no content)"
    }
}`}</CodeB>
          )}

          <Tip>The prompt's "interpret the slug" instruction is what makes this magical. Without it, "apollo-lunar-module" gets a generic "this label refers to the Apollo lunar module" response. With it, Claude expands "apollo-lunar-module" into a tour-guide narration about the Eagle, the 1969 mission, the descent stage. Tag IDs are seeds for prompts.</Tip>

          <Checkpoint num={3}>ChatViewModel.{isAndroid ? "kt" : "swift"} compiles. The integration with TagReader from step 2 is wired.</Checkpoint>
        </Step>

        <Step num={4} title="Build the UI (~6 min)">
          <p>Three pieces: an instructions/state header, a big card showing the narration, and {isAndroid ? "(optional) a status indicator showing whether NFC is active. The actual NFC interaction is just touching the tag — no button needed." : "a 'Scan' button (iOS requires explicit user action)."}</p>

          {isAndroid ? (
            <CodeB title="MainActivity.kt — full file" accent={BL}>{`package com.yourname.tagnarrator

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class MainActivity : ComponentActivity() {
    private val viewModel: ChatViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        viewModel.attach(this)
        setContent { MaterialTheme { TagScreen(viewModel) } }
    }

    override fun onResume() {
        super.onResume()
        viewModel.onResume()
        viewModel.handleIntent(intent)   // handle the launch intent if any
    }

    override fun onPause() {
        super.onPause()
        viewModel.onPause()
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        setIntent(intent)
        viewModel.handleIntent(intent)
    }
}

@Composable
fun TagScreen(vm: ChatViewModel) {
    val state by vm.uiState.collectAsState()
    Column(
        modifier = Modifier.fillMaxSize().padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("📡 TagNarrator", fontSize = 24.sp, fontWeight = FontWeight.Bold)
        Text(
            state.lastTag?.let { "Last tag: \$it" } ?: "Tap your phone to an NFC tag.",
            fontSize = 13.sp
        )

        Card(modifier = Modifier.fillMaxWidth().weight(1f)) {
            Box(
                modifier = Modifier.fillMaxSize().padding(20.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    if (state.isThinking) "Claude is thinking…" else state.narration,
                    fontSize = 17.sp
                )
            }
        }

        state.error?.let {
            Text("⚠️ \$it", color = MaterialTheme.colorScheme.error, fontSize = 12.sp)
        }
    }
}`}</CodeB>
          ) : (
            <CodeB title="ContentView.swift — full file" accent={GR}>{`import SwiftUI

struct ContentView: View {
    @StateObject private var vm = ChatViewModel()

    var body: some View {
        VStack(spacing: 16) {
            Text("📡 TagNarrator")
                .font(.title)
                .fontWeight(.bold)

            if let tag = vm.lastTag {
                Text("Last tag: \\(tag)")
                    .font(.caption)
                    .foregroundColor(.secondary)
            }

            ZStack {
                RoundedRectangle(cornerRadius: 16)
                    .fill(Color(.systemGray6))
                Text(vm.isThinking ? "Claude is thinking…" : vm.narration)
                    .font(.title3)
                    .multilineTextAlignment(.center)
                    .padding()
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)

            if let err = vm.error {
                Text("⚠️ \\(err)")
                    .font(.caption)
                    .foregroundColor(.red)
            }

            Button(action: { vm.scan() }) {
                Label("Scan a tag", systemImage: "wave.3.right")
                    .frame(maxWidth: .infinity).padding()
                    .background(Color.accentColor)
                    .foregroundColor(.white)
                    .cornerRadius(12)
            }
            .disabled(vm.isThinking)
        }
        .padding(20)
    }
}

#Preview { ContentView() }`}</CodeB>
          )}

          <Checkpoint num={4}>App builds and shows the title, placeholder narration, and {isAndroid ? "the 'Tap your phone to an NFC tag' instruction" : "the Scan button"}.</Checkpoint>
        </Step>

        <Step num={5} title="Test the full loop (~3 min)">
          <ol style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 13 }}>
            <li>Run on a real device with NFC ({isAndroid ? "any modern Android phone — ensure NFC is on in Settings → Connected devices" : "iPhone 7+"})</li>
            <li>{isAndroid ? "Tap your phone to your pre-written test tag — your activity should come to the front and 'Last tag' updates" : "Tap Scan. The system NFC sheet appears. Hold your phone to the tag"}</li>
            <li>"Claude is thinking…" appears, then a tour-guide-style narration replaces it</li>
            <li>Try other tags with different payloads — Claude's narration adapts</li>
          </ol>

          <Section title="🛠 Common issues">
            <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>{isAndroid ? "Tag tap launches Chrome / a different app." : "System sheet doesn't appear."}</strong> {isAndroid ? "Foreground dispatch needs your app to be in the foreground when the tap happens. If your screen is off or you're in another app, Android picks the default tag handler." : "NFCReaderUsageDescription is missing or the capability isn't added. Re-check both from step 0/1."}</li>
              <li><strong>Tag is read but the payload is garbled (e.g., "en" prefix).</strong> The NDEF parsing in step 2c is wrong. Re-check the langLength stripping.</li>
              <li><strong>{isAndroid ? "NfcAdapter.getDefaultAdapter returns null." : "NFCNDEFReaderSession.readingAvailable returns false."}</strong> Device doesn't have NFC hardware (iPad, some older phones) or NFC is disabled in settings.</li>
              <li><strong>"401 Unauthorized" from Claude.</strong> API key didn't load — same fix as the other modalities.</li>
            </ul>
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck?</strong></p>
            <CodeB title="Prompt template" accent={P_C}>{`Building TagNarrator on ${isAndroid ? "Android (NfcAdapter foreground dispatch + Compose)" : "iOS (Core NFC + SwiftUI)"}. Flow: tap NFC tag → parse NDEF text → Claude narration.

Failing at: [describe]
Verified: [list]
Code: [paste]

Likely cause and next test?`}</CodeB>
          </AiOpp>

          <Checkpoint num={5}>End-to-end works: physical tag → text payload → Claude → narration. The first time you see this work, it feels like magic.</Checkpoint>
        </Step>

        </div>

        <div style={{ marginTop: 16 }}>
          <strong style={{ fontSize: 13 }}>{"📚"} Resources for this modality</strong>
          <ul style={{ paddingLeft: 20, fontSize: 12, lineHeight: 1.8, margin: "6px 0 0" }}>
            {isAndroid ? (
              <>
                <li><Link>Android docs — NFC basics</Link> (developer.android.com/develop/connectivity/nfc/nfc)</li>
                <li><Link>Foreground dispatch system</Link></li>
                <li><Link>Bluetooth Low Energy guide</Link> — for the BLE proximity stretch</li>
              </>
            ) : (
              <>
                <li><Link>Apple docs — Core NFC</Link> (developer.apple.com/documentation/corenfc)</li>
                <li><Link>NFCNDEFReaderSession</Link></li>
                <li><Link>Core Bluetooth</Link> — for the BLE proximity stretch</li>
                <li><Link>Nearby Interaction (UWB)</Link> — iPhone Pro / U1 chip</li>
              </>
            )}
            <li><Link>NDEF text record format</Link> — official spec</li>
            <li><Link>Claude Messages API</Link></li>
          </ul>
        </div>

        <Tip><strong>Stretch — BLE proximity for "near vs at":</strong> Use {isAndroid ? "BluetoothLeScanner" : "CBCentralManager"} to scan for nearby beacons (cheap iBeacons or Eddystone tags ~$10 each). Estimate distance from RSSI; switch Claude's narration style based on proximity ("you're approaching the Apollo exhibit" vs "you're standing at the Apollo exhibit"). Adds a soft "spatial" awareness without UWB hardware.</Tip>

        <Tip><strong>Stretch — sensor fusion (📡 + 📷):</strong> When the user scans a tag, also take a photo. Send BOTH to Claude vision — the tag identifies the object, the photo shows what the user is actually looking at. Useful for "is this product authentic?" verification, or "what's the difference between these two specimens?" comparisons.</Tip>
      </Section>

      <Section title={"🔐  Biometrics — Gating sensitive AI"}>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 8px" }}>~25 min · standalone mini-app · trust as a feature</p>

        <p><strong>What you're building:</strong> A private AI journal. Face ID / Touch ID gates the chat history; without auth, the chat is locked and previous conversations are hidden. Useful for therapy-adjacent, medical, financial, or any "personal stuff I wouldn't want a friend to read" assistant.</p>

        <p><strong>The mental model — biometrics doesn't add features, it makes other features <em>safe</em> to ship:</strong> Face ID alone isn't an "AI feature." But the AI features it unlocks (true private journaling, sensitive Q&A) are categorically different from what you can ship without it. If your capstone touches anything personal, biometrics is a one-screen addition that materially upgrades the trust story. The technical work is small; the product impact is large.</p>

        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", margin: "10px 0", fontSize: 12, lineHeight: 1.6 }}>
          <strong>Data flow:</strong><br/>
          🔐 user opens app&nbsp;&nbsp;→&nbsp;&nbsp;lock screen&nbsp;&nbsp;→&nbsp;&nbsp;biometric prompt&nbsp;&nbsp;→&nbsp;&nbsp;OS verifies fingerprint/face&nbsp;&nbsp;→&nbsp;&nbsp;unlock state in ViewModel&nbsp;&nbsp;→&nbsp;&nbsp;chat history visible&nbsp;&nbsp;→&nbsp;&nbsp;normal chat with Claude
        </div>

        <p>{isAndroid
          ? "Android's piece is the AndroidX BiometricPrompt API. It abstracts over fingerprint sensors, face unlock, and PIN/pattern fallback — you get one consistent prompt regardless of what hardware the device has. The OS never tells you whose biometric matched; you just get success/failure."
          : "iOS uses LocalAuthentication's LAContext. Same idea — the OS abstracts whether it's Face ID, Touch ID, or passcode. You request a policy (deviceOwnerAuthenticationWithBiometrics) and the system handles the UI."
        }</p>

        <div style={{ '--platform-accent': isAndroid ? BL : GR } as React.CSSProperties}>

        <Step num={0} title="Create a new project (~3 min)">
          {isAndroid ? (
            <div>
              <p>In Android Studio: <strong>File → New → New Project</strong> → <strong>Empty Activity</strong>. Name it <IC>PrivateJournal</IC>, package <IC>com.yourname.privatejournal</IC>, min SDK <strong>API 26</strong>. <strong>Finish</strong>.</p>
              <p>Add OkHttp and the AndroidX biometric library:</p>
              <CodeB title="build.gradle.kts (app) — dependencies" accent={BL}>{`implementation("com.squareup.okhttp3:okhttp:4.12.0")
implementation("androidx.biometric:biometric:1.1.0")`}</CodeB>
              <p>Sync, then wire your Claude API key per <Link>Lab Session 1 → Step 1</Link>.</p>
            </div>
          ) : (
            <div>
              <p>In Xcode: <strong>File → New → Project</strong> → <strong>App</strong>. Name it <IC>PrivateJournal</IC>, SwiftUI + Swift. <strong>Create</strong>.</p>
              <p>LocalAuthentication ships with iOS — no extra dependency. Wire the API key per <Link>Lab Session 1 → Step 1</Link>.</p>
            </div>
          )}
          <Checkpoint num={0}>Project builds and runs.</Checkpoint>
        </Step>

        <Step num={1} title="Add biometric permissions (~2 min)">
          {isAndroid ? (
            <div>
              <p>Open <IC>AndroidManifest.xml</IC>. Add the biometric permission INSIDE <IC>{"<manifest>"}</IC>:</p>
              <CodeB title="AndroidManifest.xml" accent={BL}>{`<uses-permission android:name="android.permission.USE_BIOMETRIC" />`}</CodeB>
              <p>This is install-time, no runtime ask required. The user sees a system prompt the first time you call BiometricPrompt — that's the OS's prompt, not your app's.</p>
            </div>
          ) : (
            <div>
              <p>Open <IC>Info.plist</IC>. Right-click → <strong>Add Row</strong>. Add the Face ID usage description:</p>
              <CodeB title="Info.plist" accent={GR}>{`<key>NSFaceIDUsageDescription</key>
<string>Used to unlock your private AI journal.</string>`}</CodeB>
              <p>Touch ID doesn't require an Info.plist key (it's been around since iOS 7), but Face ID is newer and Apple requires the explanation. Including this key is the safe default — it works for both.</p>
            </div>
          )}
          <Checkpoint num={1}>Build still succeeds.</Checkpoint>
        </Step>

        <Step num={2} title="Build the BiometricGate class (~8 min)">
          <p>The gate is a small wrapper that exposes one function: <IC>authenticate(onSuccess, onFailure)</IC>. The complexity is in the OS APIs underneath; your ViewModel shouldn't have to know about <IC>{isAndroid ? "BiometricPrompt.PromptInfo" : "LAContext"}</IC>.</p>

          <VStep num="a" title="Create the file">
            {isAndroid ? (
              <div>
                <p>Right-click your package → <strong>New → Kotlin Class/File</strong> → name it <IC>BiometricGate</IC>:</p>
                <CodeB title="BiometricGate.kt" accent={BL}>{`package com.yourname.privatejournal

import androidx.biometric.BiometricManager
import androidx.biometric.BiometricPrompt
import androidx.fragment.app.FragmentActivity
import androidx.core.content.ContextCompat

class BiometricGate(private val activity: FragmentActivity) {

    fun isAvailable(): Boolean {
        val manager = BiometricManager.from(activity)
        return manager.canAuthenticate(
            BiometricManager.Authenticators.BIOMETRIC_STRONG or
            BiometricManager.Authenticators.DEVICE_CREDENTIAL
        ) == BiometricManager.BIOMETRIC_SUCCESS
    }

    fun authenticate(
        onSuccess: () -> Unit,
        onFailure: (String) -> Unit
    ) { /* fill in next */ }
}`}</CodeB>
                <p>Note FragmentActivity (not ComponentActivity) — BiometricPrompt requires it. If you started with a ComponentActivity (the Compose default), change MainActivity to extend FragmentActivity instead. They're API-compatible from Compose's perspective. isAvailable() lets the UI tell users when biometrics aren't set up at all.</p>
              </div>
            ) : (
              <div>
                <p>Right-click your project folder → <strong>New File → Swift File</strong> → name it <IC>BiometricGate</IC>:</p>
                <CodeB title="BiometricGate.swift" accent={GR}>{`import Foundation
import LocalAuthentication

@MainActor
class BiometricGate {
    private let context = LAContext()

    func isAvailable() -> Bool {
        var error: NSError?
        return context.canEvaluatePolicy(
            .deviceOwnerAuthenticationWithBiometrics,
            error: &error
        )
    }

    func authenticate(
        onSuccess: @escaping () -> Void,
        onFailure: @escaping (String) -> Void
    ) { /* fill in next */ }
}`}</CodeB>
                <p>The LAContext is created once and reused. It caches the user's authentication briefly so a second authenticate call within ~30 seconds doesn't re-prompt — useful for "stay unlocked while I'm using the app."</p>
              </div>
            )}
          </VStep>

          <VStep num="b" title="Implement authenticate()" last={true}>
            <p>{isAndroid
              ? "Build a PromptInfo (the system dialog) and call authenticate() on a fresh BiometricPrompt. The callback methods give you success, failure, or error — translate them to the simpler onSuccess/onFailure interface."
              : "Call evaluatePolicy with the deviceOwnerAuthenticationWithBiometrics policy and a localized reason. The completion fires on a background thread; hop back to main before invoking the callbacks. The reason string is shown in the Face ID prompt — write it for the user."
            }</p>
            {isAndroid ? (
              <CodeB title="Replace the authenticate() stub" accent={BL}>{`fun authenticate(
    onSuccess: () -> Unit,
    onFailure: (String) -> Unit
) {
    val executor = ContextCompat.getMainExecutor(activity)
    val prompt = BiometricPrompt(activity, executor,
        object : BiometricPrompt.AuthenticationCallback() {
            override fun onAuthenticationSucceeded(
                result: BiometricPrompt.AuthenticationResult
            ) {
                onSuccess()
            }
            override fun onAuthenticationError(code: Int, msg: CharSequence) {
                // User cancelled or other error
                onFailure(msg.toString())
            }
            override fun onAuthenticationFailed() {
                // Biometric didn't match — but the prompt stays open for retry.
                // Don't trigger onFailure here; the user can try again.
            }
        })

    val info = BiometricPrompt.PromptInfo.Builder()
        .setTitle("Unlock your journal")
        .setSubtitle("Authenticate to access your private AI conversations")
        .setNegativeButtonText("Cancel")
        .setAllowedAuthenticators(
            BiometricManager.Authenticators.BIOMETRIC_STRONG or
            BiometricManager.Authenticators.DEVICE_CREDENTIAL
        )
        .build()

    // Note: with DEVICE_CREDENTIAL, you can't set a negative button — use either
    // the device-credential fallback OR a cancel button, not both.
    val infoSimpler = BiometricPrompt.PromptInfo.Builder()
        .setTitle("Unlock your journal")
        .setSubtitle("Authenticate to access your private AI conversations")
        .setAllowedAuthenticators(
            BiometricManager.Authenticators.BIOMETRIC_STRONG or
            BiometricManager.Authenticators.DEVICE_CREDENTIAL
        )
        .build()

    prompt.authenticate(infoSimpler)
}`}</CodeB>
            ) : (
              <CodeB title="Replace the authenticate() stub" accent={GR}>{`func authenticate(
    onSuccess: @escaping () -> Void,
    onFailure: @escaping (String) -> Void
) {
    var error: NSError?
    guard context.canEvaluatePolicy(
        .deviceOwnerAuthenticationWithBiometrics, error: &error
    ) else {
        onFailure(error?.localizedDescription ?? "Biometrics unavailable")
        return
    }

    context.evaluatePolicy(
        .deviceOwnerAuthenticationWithBiometrics,
        localizedReason: "Unlock your private AI journal"
    ) { success, error in
        Task { @MainActor in
            if success {
                onSuccess()
            } else {
                onFailure(error?.localizedDescription ?? "Authentication failed")
            }
        }
    }
}`}</CodeB>
            )}
            <Tip>{isAndroid
              ? "Don't trigger onFailure inside onAuthenticationFailed — that fires for every wrong fingerprint scan, but the prompt stays open and the user can keep trying. Only onAuthenticationError signals a final failure (cancellation, lockout, hardware issue)."
              : "The LAContext caches the auth state briefly. If you call authenticate() twice in quick succession, the second call may succeed without prompting. For most apps that's the right UX — once unlocked, stay unlocked while in the app."
            }</Tip>
          </VStep>

          <Section title={"✅ Check your work — show me the complete BiometricGate." + (isAndroid ? "kt" : "swift")}>
            {isAndroid ? (
              <CodeB title="BiometricGate.kt" accent={BL}>{`package com.yourname.privatejournal

import androidx.biometric.BiometricManager
import androidx.biometric.BiometricPrompt
import androidx.fragment.app.FragmentActivity
import androidx.core.content.ContextCompat

class BiometricGate(private val activity: FragmentActivity) {

    fun isAvailable(): Boolean {
        val manager = BiometricManager.from(activity)
        return manager.canAuthenticate(
            BiometricManager.Authenticators.BIOMETRIC_STRONG or
            BiometricManager.Authenticators.DEVICE_CREDENTIAL
        ) == BiometricManager.BIOMETRIC_SUCCESS
    }

    fun authenticate(
        onSuccess: () -> Unit,
        onFailure: (String) -> Unit
    ) {
        val executor = ContextCompat.getMainExecutor(activity)
        val prompt = BiometricPrompt(activity, executor,
            object : BiometricPrompt.AuthenticationCallback() {
                override fun onAuthenticationSucceeded(
                    result: BiometricPrompt.AuthenticationResult
                ) { onSuccess() }
                override fun onAuthenticationError(code: Int, msg: CharSequence) {
                    onFailure(msg.toString())
                }
            })

        val info = BiometricPrompt.PromptInfo.Builder()
            .setTitle("Unlock your journal")
            .setSubtitle("Authenticate to access your private AI conversations")
            .setAllowedAuthenticators(
                BiometricManager.Authenticators.BIOMETRIC_STRONG or
                BiometricManager.Authenticators.DEVICE_CREDENTIAL
            )
            .build()

        prompt.authenticate(info)
    }
}`}</CodeB>
            ) : (
              <CodeB title="BiometricGate.swift" accent={GR}>{`import Foundation
import LocalAuthentication

@MainActor
class BiometricGate {
    private let context = LAContext()

    func isAvailable() -> Bool {
        var error: NSError?
        return context.canEvaluatePolicy(
            .deviceOwnerAuthenticationWithBiometrics,
            error: &error
        )
    }

    func authenticate(
        onSuccess: @escaping () -> Void,
        onFailure: @escaping (String) -> Void
    ) {
        var error: NSError?
        guard context.canEvaluatePolicy(
            .deviceOwnerAuthenticationWithBiometrics, error: &error
        ) else {
            onFailure(error?.localizedDescription ?? "Biometrics unavailable")
            return
        }

        context.evaluatePolicy(
            .deviceOwnerAuthenticationWithBiometrics,
            localizedReason: "Unlock your private AI journal"
        ) { success, error in
            Task { @MainActor in
                if success { onSuccess() }
                else { onFailure(error?.localizedDescription ?? "Authentication failed") }
            }
        }
    }
}`}</CodeB>
            )}
          </Section>

          <Checkpoint num={2}>BiometricGate.{isAndroid ? "kt" : "swift"} compiles. {isAndroid ? "MainActivity now extends FragmentActivity (you may need to change this if you used the default ComponentActivity)." : ""}</Checkpoint>
        </Step>

        <Step num={3} title="Build the ChatViewModel with locked / unlocked state (~10 min)">
          <p>This ViewModel adds an <IC>isLocked</IC> flag to the standard chat state. When locked, the UI shows a lock screen instead of the chat. Tapping unlock triggers BiometricGate.authenticate; on success, isLocked flips to false and the chat appears.</p>

          {isAndroid ? (
            <CodeB title="ChatViewModel.kt — full file" accent={BL}>{`package com.yourname.privatejournal

import android.app.Application
import androidx.fragment.app.FragmentActivity
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject

data class ChatMessage(val role: String, val content: String)

data class UiState(
    val isLocked: Boolean = true,
    val unlockError: String? = null,
    val messages: List<ChatMessage> = emptyList(),
    val draft: String = "",
    val isThinking: Boolean = false
)

class ChatViewModel(app: Application) : AndroidViewModel(app) {
    private val _uiState = MutableStateFlow(UiState())
    val uiState = _uiState.asStateFlow()

    private val client = OkHttpClient()
    private var gate: BiometricGate? = null

    fun attach(activity: FragmentActivity) {
        gate = BiometricGate(activity)
    }

    fun unlock() {
        gate?.authenticate(
            onSuccess = {
                _uiState.update { it.copy(isLocked = false, unlockError = null) }
            },
            onFailure = { msg ->
                _uiState.update { it.copy(unlockError = msg) }
            }
        )
    }

    fun lock() {
        // Called when the user backgrounds the app, or manually
        _uiState.update { it.copy(isLocked = true) }
    }

    fun onDraftChange(s: String) { _uiState.update { it.copy(draft = s) } }

    fun send() {
        val state = _uiState.value
        if (state.isLocked) return
        val text = state.draft.trim()
        if (text.isEmpty()) return

        val withUser = state.messages + ChatMessage("user", text)
        _uiState.update { it.copy(
            messages = withUser, draft = "", isThinking = true
        ) }
        viewModelScope.launch {
            val reply = withContext(Dispatchers.IO) { callClaude(withUser) }
            _uiState.update { it.copy(
                messages = withUser + ChatMessage("assistant", reply),
                isThinking = false
            ) }
        }
    }

    private fun callClaude(history: List<ChatMessage>): String {
        val msgs = JSONArray().apply {
            history.forEach {
                put(JSONObject().put("role", it.role).put("content", it.content))
            }
        }
        // System prompt establishes the journal persona — invisible to the user
        val body = JSONObject()
            .put("model", "claude-sonnet-4-5")
            .put("max_tokens", 1024)
            .put("system",
                "You are a thoughtful, private journaling companion. The user " +
                "has authenticated with biometrics — you are speaking only to " +
                "them. Be warm, curious, non-judgmental. Ask one follow-up " +
                "question per response."
            )
            .put("messages", msgs)
            .toString()
            .toRequestBody("application/json".toMediaType())

        val req = Request.Builder()
            .url("https://api.anthropic.com/v1/messages")
            .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
            .addHeader("anthropic-version", "2023-06-01")
            .post(body)
            .build()

        client.newCall(req).execute().use { response ->
            val json = JSONObject(response.body!!.string())
            return json.getJSONArray("content")
                .getJSONObject(0).getString("text")
        }
    }
}`}</CodeB>
          ) : (
            <CodeB title="ChatViewModel.swift — full file" accent={GR}>{`import Foundation

struct ChatMessage: Identifiable, Codable {
    let id = UUID()
    let role: String
    let content: String
}

@MainActor
class ChatViewModel: ObservableObject {
    @Published var isLocked: Bool = true
    @Published var unlockError: String?
    @Published var messages: [ChatMessage] = []
    @Published var draft: String = ""
    @Published var isThinking: Bool = false

    private let gate = BiometricGate()

    func unlock() {
        gate.authenticate(
            onSuccess: { [weak self] in
                self?.isLocked = false
                self?.unlockError = nil
            },
            onFailure: { [weak self] msg in
                self?.unlockError = msg
            }
        )
    }

    func lock() {
        isLocked = true
    }

    func send() async {
        guard !isLocked else { return }
        let text = draft.trimmingCharacters(in: .whitespaces)
        guard !text.isEmpty else { return }

        messages.append(ChatMessage(role: "user", content: text))
        draft = ""
        isThinking = true

        let reply = (try? await callClaude()) ?? "(error)"
        messages.append(ChatMessage(role: "assistant", content: reply))
        isThinking = false
    }

    private func callClaude() async throws -> String {
        guard let key = Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String else {
            throw URLError(.userAuthenticationRequired)
        }
        var req = URLRequest(url: URL(string: "https://api.anthropic.com/v1/messages")!)
        req.httpMethod = "POST"
        req.setValue(key, forHTTPHeaderField: "x-api-key")
        req.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")

        let payload: [String: Any] = [
            "model": "claude-sonnet-4-5",
            "max_tokens": 1024,
            "system": "You are a thoughtful, private journaling companion. The user has authenticated with biometrics — you are speaking only to them. Be warm, curious, non-judgmental. Ask one follow-up question per response.",
            "messages": messages.map { ["role": $0.role, "content": $0.content] }
        ]
        req.httpBody = try JSONSerialization.data(withJSONObject: payload)

        let (data, _) = try await URLSession.shared.data(for: req)
        let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
        let blocks = json?["content"] as? [[String: Any]]
        return blocks?.first?["text"] as? String ?? "(no content)"
    }
}`}</CodeB>
          )}

          <Tip>The system prompt ("You are a thoughtful, private journaling companion…") is what makes this feel different from a regular chat. Without it, you have a generic assistant gated behind Face ID. With it, biometrics + persona combine to feel genuinely private. The system prompt is the modality's payoff.</Tip>

          <Checkpoint num={3}>ChatViewModel.{isAndroid ? "kt" : "swift"} compiles.</Checkpoint>
        </Step>

        <Step num={4} title="Build the UI — lock screen + chat (~8 min)">
          <p>The UI conditionally renders one of two screens based on <IC>isLocked</IC>. When locked, show a centred lock icon, an "Unlock" button, and (if there was an unlock attempt) the error. When unlocked, show the chat list + input row.</p>

          {isAndroid ? (
            <CodeB title="MainActivity.kt — full file" accent={BL}>{`package com.yourname.privatejournal

import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.fragment.app.FragmentActivity

// IMPORTANT: extend FragmentActivity (BiometricPrompt requires it)
class MainActivity : FragmentActivity() {
    private val viewModel: ChatViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        viewModel.attach(this)
        setContent { MaterialTheme { Root(viewModel) } }
    }

    override fun onPause() {
        super.onPause()
        viewModel.lock()   // re-lock when the app backgrounds
    }
}

@Composable
fun Root(vm: ChatViewModel) {
    val state by vm.uiState.collectAsState()
    if (state.isLocked) LockScreen(vm, state.unlockError)
    else ChatScreen(vm)
}

@Composable
fun LockScreen(vm: ChatViewModel, error: String?) {
    Column(
        modifier = Modifier.fillMaxSize().padding(20.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("🔒", fontSize = 64.sp)
        Spacer(Modifier.height(12.dp))
        Text("Private AI Journal", fontSize = 22.sp, fontWeight = FontWeight.Bold)
        Spacer(Modifier.height(8.dp))
        Text(
            "Authenticate to view your conversations.",
            fontSize = 13.sp
        )
        Spacer(Modifier.height(24.dp))
        Button(onClick = { vm.unlock() }) { Text("Unlock") }
        error?.let {
            Spacer(Modifier.height(12.dp))
            Text(it, color = MaterialTheme.colorScheme.error, fontSize = 12.sp)
        }
    }
}

@Composable
fun ChatScreen(vm: ChatViewModel) {
    val state by vm.uiState.collectAsState()
    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Row(modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
            Text("Private journal", fontSize = 16.sp, fontWeight = FontWeight.Bold,
                 modifier = Modifier.weight(1f))
            TextButton(onClick = { vm.lock() }) { Text("Lock 🔒") }
        }
        LazyColumn(modifier = Modifier.weight(1f), reverseLayout = true) {
            if (state.isThinking) item {
                Text("Claude is thinking…", modifier = Modifier.padding(8.dp))
            }
            items(state.messages.reversed()) { msg -> MessageBubble(msg) }
        }
        Row {
            TextField(
                value = state.draft,
                onValueChange = vm::onDraftChange,
                placeholder = { Text("What's on your mind?") },
                modifier = Modifier.weight(1f)
            )
            Button(onClick = vm::send, enabled = state.draft.isNotBlank()) {
                Text("Send")
            }
        }
    }
}

@Composable
fun MessageBubble(msg: ChatMessage) {
    val isUser = msg.role == "user"
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
        horizontalArrangement = if (isUser) Arrangement.End else Arrangement.Start
    ) {
        Box(
            modifier = Modifier
                .background(
                    if (isUser) Color(0xFF7F52FF) else Color(0xFFE8E8E8),
                    RoundedCornerShape(12.dp)
                )
                .padding(horizontal = 14.dp, vertical = 10.dp)
        ) {
            Text(msg.content, color = if (isUser) Color.White else Color.Black)
        }
    }
}`}</CodeB>
          ) : (
            <CodeB title="ContentView.swift — full file" accent={GR}>{`import SwiftUI

struct ContentView: View {
    @StateObject private var vm = ChatViewModel()
    @Environment(\\.scenePhase) private var scenePhase

    var body: some View {
        Group {
            if vm.isLocked {
                LockView(vm: vm)
            } else {
                ChatView(vm: vm)
            }
        }
        .onChange(of: scenePhase) { phase in
            if phase != .active { vm.lock() }   // re-lock on background
        }
    }
}

struct LockView: View {
    @ObservedObject var vm: ChatViewModel

    var body: some View {
        VStack(spacing: 16) {
            Text("🔒").font(.system(size: 64))
            Text("Private AI Journal").font(.title).fontWeight(.bold)
            Text("Authenticate to view your conversations.")
                .foregroundColor(.secondary)
            Button("Unlock") { vm.unlock() }
                .buttonStyle(.borderedProminent)
                .padding(.top, 8)
            if let err = vm.unlockError {
                Text(err).font(.caption).foregroundColor(.red)
            }
        }
        .padding(40)
    }
}

struct ChatView: View {
    @ObservedObject var vm: ChatViewModel

    var body: some View {
        VStack(spacing: 0) {
            HStack {
                Text("Private journal").font(.headline)
                Spacer()
                Button("Lock 🔒") { vm.lock() }
            }.padding()

            ScrollView {
                LazyVStack(spacing: 8) {
                    ForEach(vm.messages) { msg in MessageBubble(msg: msg) }
                    if vm.isThinking {
                        Text("Claude is thinking…").foregroundColor(.secondary)
                    }
                }.padding()
            }

            HStack {
                TextField("What's on your mind?", text: $vm.draft)
                    .textFieldStyle(.roundedBorder)
                Button("Send") { Task { await vm.send() } }
                    .disabled(vm.draft.isEmpty)
            }.padding()
        }
    }
}

struct MessageBubble: View {
    let msg: ChatMessage
    var body: some View {
        HStack {
            if msg.role == "user" { Spacer(minLength: 60) }
            Text(msg.content)
                .padding(.horizontal, 14).padding(.vertical, 10)
                .background(msg.role == "user" ? Color.purple : Color(.systemGray5))
                .foregroundColor(msg.role == "user" ? .white : .primary)
                .cornerRadius(12)
            if msg.role != "user" { Spacer(minLength: 60) }
        }
    }
}

#Preview { ContentView() }`}</CodeB>
          )}

          <Tip>Notice the {isAndroid ? "onPause()" : ".onChange(of: scenePhase)"} handler — it re-locks the app when the user backgrounds it. This is the security pattern: "unlocked" should be a session, not a permanent state. If a user hands their unlocked phone to a friend, the journal should re-lock the moment they navigate away.</Tip>

          <Checkpoint num={4}>App builds. The lock screen appears at launch, with a 🔒 icon and an Unlock button.</Checkpoint>
        </Step>

        <Step num={5} title="Test the full loop (~3 min)">
          <ol style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 13 }}>
            <li>Run on a device with biometrics set up. (Simulator: enable Face ID via {isAndroid ? "Extended Controls → Fingerprint" : "Features → Face ID → Enrolled"})</li>
            <li>Lock screen appears. Tap <strong>Unlock</strong></li>
            <li>System biometric prompt appears. Authenticate (or use the "matching face" trigger in the simulator)</li>
            <li>Chat screen appears. Type a journal entry — Claude responds in the warm "journaling companion" tone</li>
            <li>Background the app (home screen). Reopen — the lock screen is back</li>
          </ol>

          <Section title="🛠 Common issues">
            <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>{isAndroid ? "BiometricPrompt crashes with ClassCastException." : "Face ID prompt never appears."}</strong> {isAndroid ? "MainActivity must extend FragmentActivity, not ComponentActivity. Change the class declaration in step 4's MainActivity.kt." : "NSFaceIDUsageDescription is missing from Info.plist (step 1). Without it, iOS silently rejects the policy evaluation on Face ID devices."}</li>
              <li><strong>"Biometrics unavailable" error.</strong> The device doesn't have biometrics enrolled (no fingerprints registered, no Face ID set up). Use Settings to add one. The app should still work via device passcode if you allowed DEVICE_CREDENTIAL.</li>
              <li><strong>{isAndroid ? "Negative button error in PromptInfo.Builder." : "evaluatePolicy returns false even with correct face."}</strong> {isAndroid ? "DEVICE_CREDENTIAL and a negative button are mutually exclusive. Use one or the other, not both." : "Often Face ID needs your full face in good lighting — the simulator's 'Matching Face' option is the explicit trigger."}</li>
              <li><strong>"401 Unauthorized" from Claude.</strong> API key didn't load — same fix as the other modalities.</li>
            </ul>
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck?</strong></p>
            <CodeB title="Prompt template" accent={P_C}>{`Building PrivateJournal on ${isAndroid ? "Android (BiometricPrompt + Compose, MainActivity extends FragmentActivity)" : "iOS (LAContext + SwiftUI, NSFaceIDUsageDescription set)"}. Flow: app launches locked → user taps Unlock → biometric → chat with Claude.

Failing at: [describe]
Verified: [list]
Code: [paste]

Likely cause and next test?`}</CodeB>
          </AiOpp>

          <Checkpoint num={5}>End-to-end works: lock → biometric → chat → background → relock. The trust upgrade is real.</Checkpoint>
        </Step>

        </div>

        <div style={{ marginTop: 16 }}>
          <strong style={{ fontSize: 13 }}>{"📚"} Resources for this modality</strong>
          <ul style={{ paddingLeft: 20, fontSize: 12, lineHeight: 1.8, margin: "6px 0 0" }}>
            {isAndroid ? (
              <>
                <li><Link>AndroidX Biometric library</Link> (developer.android.com/jetpack/androidx/releases/biometric)</li>
                <li><Link>BiometricPrompt</Link></li>
                <li><Link>Authenticators flags</Link> — BIOMETRIC_STRONG vs BIOMETRIC_WEAK vs DEVICE_CREDENTIAL</li>
              </>
            ) : (
              <>
                <li><Link>Apple docs — LocalAuthentication</Link> (developer.apple.com/documentation/localauthentication)</li>
                <li><Link>LAContext.evaluatePolicy</Link></li>
                <li><Link>LAPolicy values</Link> — biometrics-only vs biometrics-or-passcode</li>
              </>
            )}
            <li><Link>Claude system prompts</Link> — establishing persona</li>
          </ul>
        </div>

        <Tip><strong>Stretch — different unlocks for different personas:</strong> Use {isAndroid ? "the result.cryptoObject from onAuthenticationSucceeded" : "evaluatePolicy with different localizedReason strings"} to differentiate "work me" from "personal me." Load a different system prompt for each. The same Claude account, two distinct AI assistants — one professional, one casual — gated by which face/finger you use. This is novel UX worth experimenting with.</Tip>

        <Tip><strong>Stretch — encrypt journal storage at rest:</strong> Right now the chat history lives in memory and disappears on app restart. For a real journal, persist messages to {isAndroid ? "Room with EncryptedSharedPreferences for the database key" : "SwiftData with the file protection class .complete"}. Combined with biometrics, this means the journal is meaningfully secure — even with phone access, the data on disk is unreadable without auth.</Tip>
      </Section>

      <Section title={"🔋  Always-on Presence — Background AI triggers"}>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 8px" }}>~40 min · standalone mini-app · the most complex modality</p>

        <p><strong>What you're building:</strong> WelcomeHome — an app that monitors a geofence around the user's home address. When they arrive (e.g., walking back from work), the app calls Claude in the background and posts a notification with a friendly briefing — what's on their calendar tonight, a suggestion for dinner, anything you want to put in the prompt. The user never opens the app.</p>

        <p><strong>The mental model — passive trigger, background work, surfaced via notification:</strong> This is the modality that fundamentally cannot exist on desktop. Your laptop isn't with you when you walk through your front door. The data flow has THREE asynchronous handoffs: geofence event from the OS → background worker that calls Claude → notification posted to the system tray. Each link has its own quirks and failure modes — this is the only modality that requires real attention to lifecycle.</p>

        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", margin: "10px 0", fontSize: 12, lineHeight: 1.6 }}>
          <strong>Data flow:</strong><br/>
          🔋 user crosses geofence&nbsp;&nbsp;→&nbsp;&nbsp;OS fires {isAndroid ? "BroadcastReceiver" : "didEnterRegion"}&nbsp;&nbsp;→&nbsp;&nbsp;{isAndroid ? "WorkManager job" : "background Task"}&nbsp;&nbsp;→&nbsp;&nbsp;Claude API call&nbsp;&nbsp;→&nbsp;&nbsp;{isAndroid ? "NotificationCompat" : "UNUserNotificationCenter"}&nbsp;&nbsp;→&nbsp;&nbsp;notification on lock screen
        </div>

        <Warn><strong>This modality is testing-painful.</strong> Geofences require real movement (or simulator location-faking), background restrictions vary by OS version, and you can't easily breakpoint code that runs while your app is suspended. Allocate 40 minutes minimum and be prepared to test on a real device.</Warn>

        <p>{isAndroid
          ? "Android's piece is the GeofencingClient (from Google Play services) + a BroadcastReceiver to receive geofence transitions + WorkManager to call Claude reliably even after Doze. Each piece is a separate class — this is a multi-file modality."
          : "iOS uses CLLocationManager region monitoring (continues running when suspended) + UserNotifications. The simpler architecture, but iOS will delay region entry events by minutes to save battery — your UX needs to expect 'eventually fires', not 'instant'."
        }</p>

        <div style={{ '--platform-accent': isAndroid ? BL : GR } as React.CSSProperties}>

        <Step num={0} title="Create a new project (~3 min)">
          {isAndroid ? (
            <div>
              <p>In Android Studio: <strong>File → New → New Project</strong> → <strong>Empty Activity</strong>. Name it <IC>WelcomeHome</IC>, package <IC>com.yourname.welcomehome</IC>, min SDK <strong>API 26</strong>. <strong>Finish</strong>.</p>
              <p>Add OkHttp, Play services Location, and WorkManager:</p>
              <CodeB title="build.gradle.kts (app) — dependencies" accent={BL}>{`implementation("com.squareup.okhttp3:okhttp:4.12.0")
implementation("com.google.android.gms:play-services-location:21.3.0")
implementation("androidx.work:work-runtime-ktx:2.9.1")`}</CodeB>
              <p>Sync, then wire your Claude API key per <Link>Lab Session 1 → Step 1</Link>.</p>
            </div>
          ) : (
            <div>
              <p>In Xcode: <strong>File → New → Project</strong> → <strong>App</strong>. Name it <IC>WelcomeHome</IC>, SwiftUI + Swift. <strong>Create</strong>.</p>
              <p>CoreLocation and UserNotifications ship with iOS. Wire your API key per <Link>Lab Session 1 → Step 1</Link>.</p>
              <p>Add <strong>Background Modes</strong> capability: target → <strong>Signing & Capabilities</strong> → <strong>+ Capability</strong> → <strong>Background Modes</strong> → check <strong>Location updates</strong>. (Region monitoring works without this in most cases, but it's the safe default for "phone in pocket" scenarios.)</p>
            </div>
          )}
          <Checkpoint num={0}>Project builds and runs.</Checkpoint>
        </Step>

        <Step num={1} title="Add background-location and notification permissions (~5 min)">
          {isAndroid ? (
            <div>
              <p>Background location on Android requires a SECOND permission, granted separately from foreground location. Notifications also need a runtime permission on Android 13+.</p>
              <p>Open <IC>AndroidManifest.xml</IC>:</p>
              <CodeB title="AndroidManifest.xml" accent={BL}>{`<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />`}</CodeB>
              <p>Then declare the geofence broadcast receiver inside <IC>{"<application>"}</IC>:</p>
              <CodeB title="AndroidManifest.xml — inside <application>" accent={BL}>{`<receiver
    android:name=".GeofenceReceiver"
    android:exported="false" />`}</CodeB>
              <p>The runtime ask flow on Android 10+: first ask for ACCESS_FINE_LOCATION, then SEPARATELY ask for ACCESS_BACKGROUND_LOCATION. They appear as different prompts because Google wants users to consciously grant background access. The user can also change the granted level to "Only this time" / "While using the app" — neither of which works for geofencing.</p>
            </div>
          ) : (
            <div>
              <p>Open <IC>Info.plist</IC>. Right-click → <strong>Add Row</strong>. Add the location-always description:</p>
              <CodeB title="Info.plist" accent={GR}>{`<key>NSLocationWhenInUseUsageDescription</key>
<string>Used to detect when you arrive home.</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Used to brief you when you arrive home, even if the app is closed.</string>`}</CodeB>
              <p>iOS uses an escalation pattern: you first request "when in use" authorization, then later request "always" authorization. The "always" prompt only appears AFTER the user has used the app for a while — Apple won't let you ask immediately. Region monitoring works once "always" is granted.</p>
            </div>
          )}
          <Checkpoint num={1}>Build still succeeds.</Checkpoint>
        </Step>

        <Step num={2} title="Build the GeofenceManager class (~12 min)">
          <p>This class registers a geofence around a hardcoded "home" location and (on Android) wires up the BroadcastReceiver. We'll keep "home" hardcoded for this lab — production apps would let users set it via a map picker.</p>

          <VStep num="a" title={isAndroid ? "Create GeofenceManager.kt and the BroadcastReceiver" : "Create LocationManager and request always-authorization"}>
            {isAndroid ? (
              <div>
                <p>Right-click your package → <strong>New → Kotlin Class/File</strong> → name it <IC>GeofenceManager</IC>. Then create a SECOND file: <IC>GeofenceReceiver</IC> (the BroadcastReceiver that handles transition events).</p>
                <CodeB title="GeofenceManager.kt" accent={BL}>{`package com.yourname.welcomehome

import android.Manifest
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import androidx.core.content.ContextCompat
import com.google.android.gms.location.Geofence
import com.google.android.gms.location.GeofencingRequest
import com.google.android.gms.location.LocationServices

class GeofenceManager(private val context: Context) {

    companion object {
        // For testing, hardcode a location near where you'll be.
        // Use Google Maps to find the lat/lng of "home."
        const val HOME_LAT = 37.7749
        const val HOME_LNG = -122.4194
        const val HOME_ID = "home"
    }

    fun hasBackgroundPermission(): Boolean {
        val fine = ContextCompat.checkSelfPermission(
            context, Manifest.permission.ACCESS_FINE_LOCATION
        ) == PackageManager.PERMISSION_GRANTED
        val bg = if (Build.VERSION.SDK_INT >= 29) {
            ContextCompat.checkSelfPermission(
                context, Manifest.permission.ACCESS_BACKGROUND_LOCATION
            ) == PackageManager.PERMISSION_GRANTED
        } else true
        return fine && bg
    }

    fun registerHomeGeofence() {
        if (!hasBackgroundPermission()) return

        val geofence = Geofence.Builder()
            .setRequestId(HOME_ID)
            .setCircularRegion(HOME_LAT, HOME_LNG, 100f)
            .setExpirationDuration(Geofence.NEVER_EXPIRE)
            .setTransitionTypes(Geofence.GEOFENCE_TRANSITION_ENTER)
            .build()

        val request = GeofencingRequest.Builder()
            .setInitialTrigger(0)   // Don't fire if already inside
            .addGeofence(geofence)
            .build()

        val pending = PendingIntent.getBroadcast(
            context, 0,
            Intent(context, GeofenceReceiver::class.java),
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_MUTABLE
        )

        try {
            LocationServices.getGeofencingClient(context)
                .addGeofences(request, pending)
        } catch (e: SecurityException) {
            // Permission was revoked between checking and using
        }
    }
}`}</CodeB>
                <p>The 100m radius is reasonable for "home" — too small and you'll miss entries when GPS is fuzzy, too large and you'll fire when the user is two doors down. Real apps tune this per location based on usage feedback.</p>
              </div>
            ) : (
              <div>
                <p>Right-click your project folder → <strong>New File → Swift File</strong> → name it <IC>LocationManager</IC>:</p>
                <CodeB title="LocationManager.swift" accent={GR}>{`import Foundation
import CoreLocation

@MainActor
class LocationManager: NSObject, ObservableObject {
    private let manager = CLLocationManager()
    @Published var hasAlwaysAuth: Bool = false

    // Hardcode a "home" coordinate. Use Apple Maps to find the lat/lng.
    static let HOME_LAT = 37.7749
    static let HOME_LNG = -122.4194
    static let HOME_ID = "home"

    override init() {
        super.init()
        manager.delegate = self
        hasAlwaysAuth = manager.authorizationStatus == .authorizedAlways
    }

    func requestAlwaysAuthorization() {
        switch manager.authorizationStatus {
        case .notDetermined:
            manager.requestWhenInUseAuthorization()
        case .authorizedWhenInUse:
            // Promotion to always — iOS shows a separate prompt
            manager.requestAlwaysAuthorization()
        default:
            break
        }
    }

    func registerHomeGeofence() {
        guard manager.authorizationStatus == .authorizedAlways else { return }
        let region = CLCircularRegion(
            center: CLLocationCoordinate2D(
                latitude: Self.HOME_LAT, longitude: Self.HOME_LNG
            ),
            radius: 100,
            identifier: Self.HOME_ID
        )
        region.notifyOnEntry = true
        region.notifyOnExit = false
        manager.startMonitoring(for: region)
    }
}`}</CodeB>
                <p>Note: iOS escalates from .authorizedWhenInUse to .authorizedAlways via TWO separate prompts. The first time you call requestAlwaysAuthorization, the user sees an iOS alert with three options — Always, While Using, Never. They have to actively choose Always. If they pick While Using, region monitoring won't work in the background.</p>
              </div>
            )}
          </VStep>

          <VStep num="b" title={isAndroid ? "Create the GeofenceReceiver" : "Implement the CLLocationManagerDelegate"}>
            {isAndroid ? (
              <div>
                <p>The receiver fires on the main thread when the geofence is crossed. It can do up to ~10 seconds of work before Android force-kills it. That's not enough for a Claude call (which can take 5-10 seconds itself), so the receiver enqueues a WorkManager job and returns immediately.</p>
                <p>Right-click your package → <strong>New → Kotlin Class/File</strong> → name it <IC>GeofenceReceiver</IC>:</p>
                <CodeB title="GeofenceReceiver.kt" accent={BL}>{`package com.yourname.welcomehome

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import androidx.work.OneTimeWorkRequestBuilder
import androidx.work.WorkManager
import com.google.android.gms.location.Geofence
import com.google.android.gms.location.GeofencingEvent

class GeofenceReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val event = GeofencingEvent.fromIntent(intent) ?: return
        if (event.hasError()) return
        if (event.geofenceTransition != Geofence.GEOFENCE_TRANSITION_ENTER) return

        val ids = event.triggeringGeofences?.joinToString(",") { it.requestId }
            ?: return

        // Enqueue a Worker — guaranteed to run even if we're killed
        val work = OneTimeWorkRequestBuilder<BriefingWorker>()
            .setInputData(androidx.work.workDataOf("ids" to ids))
            .build()
        WorkManager.getInstance(context).enqueue(work)
    }
}`}</CodeB>
              </div>
            ) : (
              <div>
                <p>Add a CLLocationManagerDelegate extension at the bottom of LocationManager.swift. didEnterRegion fires when the user enters; that's where we trigger the briefing.</p>
                <CodeB title="Add at the bottom of LocationManager.swift" accent={GR}>{`extension LocationManager: CLLocationManagerDelegate {
    nonisolated func locationManager(_ m: CLLocationManager,
                                     didChangeAuthorization status: CLAuthorizationStatus) {
        Task { @MainActor in
            self.hasAlwaysAuth = status == .authorizedAlways
            if status == .authorizedAlways {
                self.registerHomeGeofence()
            }
        }
    }

    nonisolated func locationManager(_ m: CLLocationManager,
                                     didEnterRegion region: CLRegion) {
        // This fires on a background thread when the app is suspended.
        // Trigger a briefing — see BriefingService in Step 3.
        Task {
            await BriefingService.shared.briefAndNotify(
                regionId: region.identifier
            )
        }
    }
}`}</CodeB>
                <p>The didEnterRegion callback fires even when the app is suspended (or killed and re-launched by the OS specifically for this event). That's the "always-on" magic — the OS ensures your code gets a chance to run.</p>
              </div>
            )}
          </VStep>

          <VStep num="c" title={isAndroid ? "Create the BriefingWorker (calls Claude)" : "Create a BriefingService"} last={true}>
            {isAndroid ? (
              <div>
                <p>WorkManager workers can run for several minutes — plenty of time for the Claude call. They survive the receiver returning, retry on network failure, and run during Doze.</p>
                <p>Right-click your package → <strong>New → Kotlin Class/File</strong> → name it <IC>BriefingWorker</IC>:</p>
                <CodeB title="BriefingWorker.kt" accent={BL}>{`package com.yourname.welcomehome

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject

class BriefingWorker(
    context: Context,
    params: WorkerParameters
) : CoroutineWorker(context, params) {

    override suspend fun doWork(): Result {
        val regionId = inputData.getString("ids") ?: "unknown"
        val brief = try { callClaude(regionId) } catch (e: Exception) {
            return Result.retry()
        }
        postNotification(brief)
        return Result.success()
    }

    private fun callClaude(regionId: String): String {
        val prompt = "The user just arrived at '\$regionId'. " +
                     "Write a warm, 2-sentence welcome that's specific to " +
                     "arriving home — mention the time of day or a small " +
                     "domestic detail. No preamble."

        val body = JSONObject()
            .put("model", "claude-sonnet-4-5")
            .put("max_tokens", 200)
            .put("messages", JSONArray().put(
                JSONObject().put("role", "user").put("content", prompt)
            ))
            .toString()
            .toRequestBody("application/json".toMediaType())

        val req = Request.Builder()
            .url("https://api.anthropic.com/v1/messages")
            .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
            .addHeader("anthropic-version", "2023-06-01")
            .post(body)
            .build()

        OkHttpClient().newCall(req).execute().use { response ->
            val json = JSONObject(response.body!!.string())
            return json.getJSONArray("content")
                .getJSONObject(0).getString("text")
        }
    }

    private fun postNotification(text: String) {
        val ctx = applicationContext

        // Create channel (required on API 26+)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                "briefings", "Briefings",
                NotificationManager.IMPORTANCE_DEFAULT
            )
            (ctx.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager)
                .createNotificationChannel(channel)
        }

        val notif = NotificationCompat.Builder(ctx, "briefings")
            .setContentTitle("Welcome home")
            .setContentText(text)
            .setStyle(NotificationCompat.BigTextStyle().bigText(text))
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setAutoCancel(true)
            .build()

        try {
            NotificationManagerCompat.from(ctx).notify(1, notif)
        } catch (e: SecurityException) {
            // POST_NOTIFICATIONS not granted on Android 13+
        }
    }
}`}</CodeB>
                <p>Three things to notice. (1) The Worker is a coroutine — async network calls feel natural. (2) Result.retry() makes WorkManager re-run the job later (with backoff) if the network was unavailable. (3) The notification channel must exist before you post; we create it right before notifying for safety.</p>
              </div>
            ) : (
              <div>
                <p>Create a singleton service that handles the Claude call and notification. Right-click your project folder → <strong>New File → Swift File</strong> → name it <IC>BriefingService</IC>:</p>
                <CodeB title="BriefingService.swift" accent={GR}>{`import Foundation
import UserNotifications

class BriefingService {
    static let shared = BriefingService()
    private init() {}

    func briefAndNotify(regionId: String) async {
        let brief = (try? await callClaude(regionId: regionId))
                    ?? "Welcome home."
        await postNotification(text: brief)
    }

    private func callClaude(regionId: String) async throws -> String {
        guard let key = Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String else {
            throw URLError(.userAuthenticationRequired)
        }
        let prompt = "The user just arrived at '\\(regionId)'. " +
            "Write a warm, 2-sentence welcome that's specific to arriving home — " +
            "mention the time of day or a small domestic detail. No preamble."

        var req = URLRequest(url: URL(string: "https://api.anthropic.com/v1/messages")!)
        req.httpMethod = "POST"
        req.setValue(key, forHTTPHeaderField: "x-api-key")
        req.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")

        let payload: [String: Any] = [
            "model": "claude-sonnet-4-5",
            "max_tokens": 200,
            "messages": [["role": "user", "content": prompt]]
        ]
        req.httpBody = try JSONSerialization.data(withJSONObject: payload)

        let (data, _) = try await URLSession.shared.data(for: req)
        let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
        let blocks = json?["content"] as? [[String: Any]]
        return blocks?.first?["text"] as? String ?? "Welcome home."
    }

    private func postNotification(text: String) async {
        let center = UNUserNotificationCenter.current()
        // Request permission if not already granted
        let granted = (try? await center.requestAuthorization(
            options: [.alert, .sound]
        )) ?? false
        guard granted else { return }

        let content = UNMutableNotificationContent()
        content.title = "Welcome home"
        content.body = text
        content.sound = .default

        // trigger: nil = deliver immediately
        let req = UNNotificationRequest(
            identifier: UUID().uuidString,
            content: content,
            trigger: nil
        )
        try? await center.add(req)
    }
}`}</CodeB>
              </div>
            )}
          </VStep>

          <Section title={"✅ Check your work — show me the complete files"}>
            <CodeB title={isAndroid ? "Files: GeofenceManager.kt + GeofenceReceiver.kt + BriefingWorker.kt" : "Files: LocationManager.swift + BriefingService.swift"} accent={isAndroid ? BL : GR}>{`// Combine the snippets from VSteps a-c. If you want a single-paste reference,
// ask Claude to combine them into the right files.`}</CodeB>
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Background work is the trickiest part of the modality.</strong> If something doesn't fire, paste this:</p>
            <CodeB title="Prompt" accent={P_C}>{isAndroid
              ? `I'm building a geofence-triggered briefing app on Android with GeofencingClient + BroadcastReceiver + WorkManager.

[paste the file/method that's failing]

The geofence registers OK but doesn't seem to fire. I've granted ACCESS_FINE_LOCATION + ACCESS_BACKGROUND_LOCATION (Allow all the time). Test on a real device — moved away from the geofenced location and back.

Walk me through the most common reasons geofences don't fire on modern Android, in order of likelihood.`
              : `I'm building a region-monitoring briefing app on iOS with CLLocationManager + UserNotifications.

[paste the file/method that's failing]

I've granted "Allow Always" for location. Region is registered but didEnterRegion isn't firing.

Walk me through the most common reasons CLCircularRegion monitoring fails on iOS, in order of likelihood.`}</CodeB>
          </AiOpp>

          <Checkpoint num={2}>All files compile. The geofence is registered but won't fire until the app has the right permissions (next steps).</Checkpoint>
        </Step>

        <Step num={3} title="Wire it together in MainActivity / ContentView (~6 min)">
          <p>The UI is minimal — just a status indicator and a button to set up the geofence. The work happens in the background; the UI is mostly for debugging during development.</p>

          {isAndroid ? (
            <CodeB title="MainActivity.kt — full file" accent={BL}>{`package com.yourname.welcomehome

import android.Manifest
import android.os.Build
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val gm = GeofenceManager(this)
        setContent { MaterialTheme { HomeScreen(gm, this) } }
    }
}

@Composable
fun HomeScreen(gm: GeofenceManager, activity: ComponentActivity) {
    var status by remember { mutableStateOf("Ready") }

    val bgLauncher = activity.registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        if (granted) {
            gm.registerHomeGeofence()
            status = "Geofence registered. Walk away & come back to test."
        } else {
            status = "Background location denied — can't monitor home."
        }
    }

    val foregroundLauncher = activity.registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        if (granted) {
            // Now ask for background permission separately (Android 10+)
            if (Build.VERSION.SDK_INT >= 29) {
                bgLauncher.launch(Manifest.permission.ACCESS_BACKGROUND_LOCATION)
            } else {
                gm.registerHomeGeofence()
                status = "Geofence registered."
            }
        }
    }

    val notifLauncher = activity.registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { _ -> /* notification permission — best-effort */ }

    Column(
        modifier = Modifier.fillMaxSize().padding(24.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("🔋 WelcomeHome", fontSize = 22.sp)
        Spacer(Modifier.height(16.dp))
        Text(status, fontSize = 13.sp)
        Spacer(Modifier.height(24.dp))
        Button(onClick = {
            if (Build.VERSION.SDK_INT >= 33) {
                notifLauncher.launch(Manifest.permission.POST_NOTIFICATIONS)
            }
            foregroundLauncher.launch(Manifest.permission.ACCESS_FINE_LOCATION)
        }) {
            Text("Set up home geofence")
        }
    }
}`}</CodeB>
          ) : (
            <CodeB title="ContentView.swift — full file" accent={GR}>{`import SwiftUI

struct ContentView: View {
    @StateObject private var lm = LocationManager()
    @State private var status = "Ready"

    var body: some View {
        VStack(spacing: 20) {
            Text("🔋 WelcomeHome").font(.title)
            Text(status).font(.caption).foregroundColor(.secondary)
                .multilineTextAlignment(.center)
            Button("Set up home geofence") {
                Task {
                    let granted = (try? await UNUserNotificationCenter
                        .current().requestAuthorization(options: [.alert, .sound])) ?? false
                    if granted {
                        lm.requestAlwaysAuthorization()
                        status = "Authorization requested. " +
                                 "Grant 'Always' in iOS Settings if it didn't appear."
                    } else {
                        status = "Notifications denied — can't deliver briefings."
                    }
                }
            }
            .buttonStyle(.borderedProminent)
        }
        .padding(24)
        .onChange(of: lm.hasAlwaysAuth) { hasIt in
            if hasIt {
                lm.registerHomeGeofence()
                status = "Geofence registered. Walk away & come back to test."
            }
        }
    }
}

#Preview { ContentView() }

import UserNotifications`}</CodeB>
          )}

          <Checkpoint num={3}>App builds. Tap the button — permission prompts should appear. {isAndroid ? "On Android 10+, expect TWO prompts: foreground first, background second." : "On iOS, expect 'When in Use' first; you may need to manually escalate to 'Always' via Settings → Privacy → Location Services."}</Checkpoint>
        </Step>

        <Step num={4} title="Skipped — there is no separate UI ViewModel for this modality">
          <p>Unlike the chat-based modalities, this one's "UI" is mostly a notification. The interesting state changes happen on the lock screen, not in your app. Step 3 already covers everything needed in the foreground.</p>
          <Checkpoint num={4}>No work for this step.</Checkpoint>
        </Step>

        <Step num={5} title="Test the geofence on a real device (~10 min)">
          <p>This is the hardest modality to test. Don't try this in an emulator — geofences depend on real GPS movement and most emulators don't simulate it reliably enough.</p>

          <ol style={{ paddingLeft: 20, lineHeight: 1.8, fontSize: 13 }}>
            <li>{isAndroid ? "Hardcode HOME_LAT / HOME_LNG in GeofenceManager.kt to a real location near where you can walk to/from." : "Hardcode HOME_LAT / HOME_LNG in LocationManager.swift to a real location near you."}</li>
            <li>Install the app on a real device. Tap "Set up home geofence". Grant ALL permissions (foreground location, background location, notifications).</li>
            <li>Walk at least 200m AWAY from the home location (twice the radius — geofences need a buffer)</li>
            <li>Wait ~1-2 minutes</li>
            <li>Walk back to the home location</li>
            <li>Within a minute or two of arriving, a notification should appear: "Welcome home" + Claude's brief</li>
          </ol>

          <Section title="🛠 Common issues">
            <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>{isAndroid ? "Geofence registers but never fires." : "didEnterRegion never fires."}</strong> {isAndroid ? "Check that you granted 'Allow all the time' (not 'While using the app'). Settings → Apps → WelcomeHome → Permissions → Location → 'Allow all the time'." : "Check that authorization is .authorizedAlways, not .authorizedWhenInUse. iOS won't enable region monitoring on When-in-Use. Settings → Privacy → Location Services → WelcomeHome → 'Always'."}</li>
              <li><strong>{isAndroid ? "Doze mode delays the WorkManager job." : "iOS delays the entry event by 5+ minutes."}</strong> Both platforms aggressively defer background work to save battery. This is by design — your UX needs to accept "eventually fires", not "instant". For testing, you can bypass some throttling: {isAndroid ? "adb shell dumpsys deviceidle force-idle then force-active" : "in Xcode → Debug → Simulate Location → custom GPX file moving across the geofence."}</li>
              <li><strong>Notification doesn't appear even though logs show the worker ran.</strong> {isAndroid ? "On Android 13+, POST_NOTIFICATIONS permission must be granted — see step 1." : "Check Settings → Notifications → WelcomeHome → Allow Notifications is on."}</li>
              <li><strong>"401 Unauthorized" from Claude.</strong> Same as the other modalities — API key didn't load.</li>
            </ul>
          </Section>

          <AiOpp>
            <p style={{ margin: 0 }}><strong>Stuck in geofence purgatory?</strong> This is genuinely hard to debug. Use this prompt:</p>
            <CodeB title="Prompt template" accent={P_C}>{`I'm building WelcomeHome on ${isAndroid ? "Android" : "iOS"}. Geofence is registered, permissions granted, but the trigger isn't firing reliably.

Setup:
- Geofence center: [paste your HOME_LAT, HOME_LNG]
- Radius: 100m
- Permissions: [list what you've granted]
- ${isAndroid ? "Battery optimization for the app: disabled / enabled?" : "Background app refresh: enabled / disabled?"}
- Tested by: [walking? simulated location? Xcode GPX?]

What's the most likely root cause? Give me three concrete checks I can run in order.`}</CodeB>
          </AiOpp>

          <Checkpoint num={5}>End-to-end works: walk away, walk back, notification appears with Claude's welcome message. The first time you see this work, it's deeply satisfying — your laptop CANNOT do this.</Checkpoint>
        </Step>

        </div>

        <div style={{ marginTop: 16 }}>
          <strong style={{ fontSize: 13 }}>{"📚"} Resources for this modality</strong>
          <ul style={{ paddingLeft: 20, fontSize: 12, lineHeight: 1.8, margin: "6px 0 0" }}>
            {isAndroid ? (
              <>
                <li><Link>Android docs — Geofencing API</Link> (developer.android.com/develop/sensors-and-location/location/geofencing)</li>
                <li><Link>Background location guide</Link> — the permission gauntlet</li>
                <li><Link>WorkManager guide</Link> — guaranteed background execution</li>
                <li><Link>Notifications overview</Link> — channels and POST_NOTIFICATIONS</li>
                <li><Link>Doze and battery optimization</Link> — why your jobs are delayed</li>
              </>
            ) : (
              <>
                <li><Link>Apple docs — Region monitoring</Link> (developer.apple.com/documentation/corelocation/monitoring_the_user_s_proximity_to_geographic_regions)</li>
                <li><Link>Always vs When-in-Use authorization</Link></li>
                <li><Link>UserNotifications</Link> — local notification posting</li>
                <li><Link>Background execution</Link> — what runs while suspended</li>
              </>
            )}
            <li><Link>Claude Messages API</Link></li>
          </ul>
        </div>

        <Tip><strong>Stretch — sensor fusion (🔋 + 🏃):</strong> Combine with the Accelerometer modality. Only fire the brief when the phone notices it has been stationary for 30 seconds AFTER entering the region. This eliminates false positives like driving past your house — the phone knows the difference between "arrived home" and "passing through the neighbourhood." This is the kind of detail that separates a polished mobile AI app from a janky one.</Tip>

        <Tip><strong>Stretch — multi-region setup:</strong> Build a small UI that lets the user save multiple geofenced locations (home, work, gym, partner's place). Each one gets a different system prompt. "Welcome home" → cosy briefing. "At work" → focus suggestion for the morning. "At the gym" → workout idea based on day-of-week. The same underlying machinery, but the user feels seen.</Tip>
      </Section>

      <Section title={"🔀  Sensor Fusion — Where it gets interesting"}>
        <p>{"Each modality on its own is useful. Combining two is where mobile AI starts to feel like magic — context that no other platform has access to. Here are the starter combinations from Session 2:"}</p>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
          <li><strong>{"📷 + 📍"}</strong> — Point at a plant → identify species by region. Same vision call, but Claude knows whether you're in California or Costa Rica.</li>
          <li><strong>{"🎙️ + 📷"}</strong> — Live frame + spoken question. "What am I looking at?" with the camera as the answer.</li>
          <li><strong>{"📷 + 👆"}</strong> — Circle an object in a photo, ask AI about <em>just that area</em>. Crop on-device before sending.</li>
          <li><strong>{"🏃 + 🔋"}</strong> — Detect driving → auto-summarise missed messages on arrival. The user never opens the app.</li>
          <li><strong>{"📡 + 📍"}</strong> — Walk near a museum exhibit (NFC) → AI narrates. Location filters which exhibit set is active.</li>
          <li><strong>{"🔐 + 🎙️"}</strong> — Face-verified voice journal → private AI life coach. Voice in, voice out, no one else can read it.</li>
        </ul>
        <AiOpp>
          <em>{"The litmus test for capstone ideas →"}</em> Could a user accomplish this by uploading a file to a website? If yes, it's not a mobile-native AI feature. If no — you've found something worth building.
        </AiOpp>
      </Section>

      <div style={{ marginTop: 20, borderTop: "1px solid var(--color-border-tertiary)", paddingTop: 16 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 10px" }}>{"🔐"} If you push to GitHub</h3>
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p>{"There's no submission for this practice work, but if you choose to push your code to a public repo to share or build a portfolio:"}</p>
          <Warn>{"Double-check your API key is NOT in the repo. Search for \"sk-ant\" to be sure. Leaked keys get scraped within minutes and Anthropic will suspend them."}</Warn>
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
      {tab === "Practice"  && <PracticeTab platform={platform} setPlatform={setPlatform} />}
      {tab === "Capstone"  && <CapstoneTab platform={platform} setPlatform={setPlatform} />}
      {tab === "Resources" && <ResourcesTab platform={platform} setPlatform={setPlatform} />}
    </div>
  );
}
