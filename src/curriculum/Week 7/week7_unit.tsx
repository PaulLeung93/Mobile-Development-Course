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
        {title}<span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{open ? "\u25B2" : "\u25BC"}</span>
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
      <strong>{"\uD83C\uDFAF"} Checkpoint {num}:</strong> {children}
    </div>
  );
}

function AiOpp({ children }) {
  return (
    <div className="callout-ai" style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>{"\u2728"} AI Opportunity</div>
      {children}
    </div>
  );
}

function Warn({ children }) {
  return (
    <div className="callout-warn" style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E6", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #EF9F27" }}>
      {"\u26A0\uFE0F"} {children}
    </div>
  );
}

function Tip({ children }) {
  return (
    <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>
      {"\uD83D\uDCA1"} {children}
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
          }}>{isA ? "\uD83E\uDD16 Android" : "\uD83C\uDF4E iOS"}</button>
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
        {"Don't forget to fill out the \u270F\uFE0F"} <Link>Session Survey</Link> at the end of each class session!
      </div>
      <div className="callout-warn" style={{ background: "#FFF8E6", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 16 }}>
        {"\uD83C\uDFAF"} <strong>REMINDER:</strong> <Link>Capstone Milestone 1</Link> (repo + architecture) is due by the end of this week. See the Capstone tab for details.
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
          <li>{"\uD83D\uDCC5"} {"See your cohort's schedule for session times"}</li>
          <li>{"\u2197"} <Link>Session Zoom Link</Link> | Passcode: <strong>codepath</strong></li>
          <li>{"\uD83D\uDCCA"} <Link>Link to Slides</Link></li>
        </ul>
        <strong style={{ display: "block", marginTop: 10 }}>Upcoming Due Dates</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>{"\uD83D\uDCEC"} <Link>Project 7</Link> {"(AI apps) due by next week's session"}</li>
          <li>{"\uD83C\uDFD7"} <Link>Capstone M1</Link> (repo + architecture) due by end of this week</li>
        </ul>
      </div>

      <div style={{ marginTop: 16, padding: "14px", background: isAndroid ? BLL : GRL, borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong style={{ color: isAndroid ? BL : GR }}>
          {isAndroid ? "\uD83E\uDD16 Android Track" : "\uD83C\uDF4E iOS Track"} {"\u2014"} This Week
        </strong>
        <p style={{ margin: "6px 0 0", color: isAndroid ? BL : GR }}>
          {isAndroid
            ? "You will use OkHttp for streaming HTTP responses and Kotlin coroutines to process chunks as they arrive. The UI will update in real time using StateFlow collected in Compose."
            : "You will use URLSession with async/await and AsyncSequence (or AsyncBytes) to process streaming responses. The UI will update in real time using @Published properties observed by SwiftUI."
          }
        </p>
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
        <strong>{"\uD83C\uDFAF"} Goals</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
          <li>Understand how LLM APIs work (request, streaming response)</li>
          <li>Securely store and use an API key in a mobile app</li>
          <li>Make a POST request to the Claude Messages API</li>
          <li>Stream the response and display it character by character</li>
          <li>Build a basic chat interface with a text input and message bubbles</li>
        </ul>
      </div>

      <Step num={0} title="Create a new project (~3 min)">
        <p>Create a new {platform} project called <strong>ChatWithClaude</strong>.</p>
        <Warn>{"You'll need a Claude API key. Sign up at console.anthropic.com and create one. Anthropic offers free credits for new accounts."}</Warn>
        <Checkpoint num={0}>New project created and running.</Checkpoint>
      </Step>

      <Step num={1} title="Store your API key securely (~5 min)">
        <p>Never hardcode API keys in source code. Use the same pattern from Week 4:</p>
        {isAndroid ? (
          <div>
            <CodeB title="local.properties (NOT committed to Git)" accent={BL}>{"CLAUDE_API_KEY=sk-ant-your-key-here"}</CodeB>
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
          </div>
        ) : (
          <div>
            <CodeB title="Secrets.xcconfig (NOT committed to Git)" accent={GR}>{"CLAUDE_API_KEY = sk-ant-your-key-here"}</CodeB>
            <CodeB title="Info.plist + code access" accent={GR}>{`<!-- In Info.plist: -->
<key>CLAUDE_API_KEY</key>
<string>$(CLAUDE_API_KEY)</string>

// Access in code:
Bundle.main.infoDictionary?["CLAUDE_API_KEY"] as? String`}</CodeB>
          </div>
        )}
        <Warn>{"Make sure your key file is in .gitignore. If you accidentally push your key, regenerate it immediately at console.anthropic.com."}</Warn>
        <Checkpoint num={1}>Your API key is stored securely and accessible in code. It is NOT in any committed file.</Checkpoint>
      </Step>

      <Step num={2} title="Build the chat UI (~10 min)">
        <p>Build a simple chat interface: a scrollable list of message bubbles and a text input at the bottom.</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 ChatScreen.kt" accent={BL}>{`data class ChatMessage(
    val role: String,  // "user" or "assistant"
    val content: String
)

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
          <CodeB title="Swift \u2014 ChatScreen.swift" accent={GR}>{`struct ChatMessage: Identifiable {
    let id = UUID()
    let role: String  // "user" or "assistant"
    let content: String
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
        <Tip>{"Don't worry about making the bubbles look perfect yet. Get the layout working first. Polish styling later."}</Tip>
        <Checkpoint num={2}>You have a chat UI with a text input, a send button, and a scrollable message area. Nothing calls the API yet.</Checkpoint>
      </Step>

      <Step num={3} title="Call the Claude API (~15 min)">
        <p>{"Wire up the ViewModel to call the Claude Messages API. We'll start with a non-streaming call, then add streaming next."}</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 ChatViewModel.kt" accent={BL}>{`class ChatViewModel : ViewModel() {
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
                val body = """{
                    "model": "claude-sonnet-4-20250514",
                    "max_tokens": 1024,
                    "messages": [${'$'}messagesJson]
                }""".toRequestBody("application/json".toMediaType())

                val request = Request.Builder()
                    .url("https://api.anthropic.com/v1/messages")
                    .post(body)
                    .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
                    .addHeader("anthropic-version", "2023-06-01")
                    .addHeader("content-type", "application/json")
                    .build()

                val response = client.newCall(request).execute()
                val respStr = response.body?.string() ?: ""
                // Parse and extract text from response
                // Add assistant message to _messages
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
          <CodeB title="Swift \u2014 ChatViewModel.swift" accent={GR}>{`@MainActor
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
                    "model": "claude-sonnet-4-20250514",
                    "max_tokens": 1024,
                    "messages": messages.map { ["role": $0.role, "content": $0.content] }
                ]
                request.httpBody = try JSONSerialization.data(withJSONObject: body)

                let (data, _) = try await URLSession.shared.data(for: request)
                // Parse response and append assistant message
            } catch {
                messages.append(ChatMessage(role: "assistant",
                    content: "Error: " + error.localizedDescription))
            }
            isLoading = false
        }
    }
}`}</CodeB>
        )}
        <Checkpoint num={3}>{"Type a message and tap Send. After a moment, Claude's response appears as a new bubble. The full response appears at once \u2014 we'll add streaming next."}</Checkpoint>
      </Step>

      <Step num={4} title="Add streaming (~12 min)">
        <p>{"Right now the response appears all at once. Real chat apps show the response word by word. The key change: add \"stream\": true to your request body, then read the response as Server-Sent Events."}</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 streaming changes" accent={BL}>{`// In your request body JSON, add: "stream": true

// Replace response parsing with:
val response = client.newCall(request).execute()
val source = response.body?.source() ?: return@launch

// Add empty assistant message to fill in
_messages.value = _messages.value + ChatMessage("assistant", "")

source.use { src ->
    while (!src.exhausted()) {
        val line = src.readUtf8Line() ?: break
        if (!line.startsWith("data: ")) continue
        val data = line.removePrefix("data: ")
        if (data == "[DONE]") break
        // Parse the SSE event, extract delta text
        // Append delta to the last message in _messages
    }
}`}</CodeB>
        ) : (
          <CodeB title="Swift \u2014 streaming changes" accent={GR}>{`// In your request body, add: "stream": true

// Replace response parsing with:
let (bytes, _) = try await URLSession.shared.bytes(for: request)

// Add empty assistant message to fill in
messages.append(ChatMessage(role: "assistant", content: ""))

for try await line in bytes.lines {
    guard line.hasPrefix("data: ") else { continue }
    let data = String(line.dropFirst(6))
    if data == "[DONE]" { break }
    // Parse the SSE event, extract delta text
    // Append delta to last message in messages array
}`}</CodeB>
        )}
        <Checkpoint num={4}>{"Send a message. Claude's response should now appear word by word as it's generated. This is the magic moment!"}</Checkpoint>
      </Step>

      <Step num={5} title="Style the message bubbles (~5 min)">
        <p>Make user and assistant messages visually distinct: different background colors, alignment, and rounded corners.</p>
        <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li>User messages: right-aligned, colored background (e.g. blue/purple)</li>
          <li>Assistant messages: left-aligned, neutral background</li>
          <li>Add rounded corners to make them look like chat bubbles</li>
        </ul>
        <Checkpoint num={5}>Your chat looks like a real messaging app with distinct user and assistant bubbles.</Checkpoint>
      </Step>

      <Section title={"\uD83D\uDCA1 Hints"}>
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p><strong>{"I'm getting a 401 error"}</strong></p>
          <p style={{ marginLeft: 16 }}>{"Your API key isn't being sent correctly. Double-check that your key accessor returns the actual key (not empty string). Print it temporarily to verify."}</p>
          <p><strong>{"I'm getting a 400 error"}</strong></p>
          <p style={{ marginLeft: 16 }}>{"Your request body is malformed. Make sure messages has correct format: each needs role and content. The anthropic-version header is required."}</p>
          <p><strong>{"Streaming works but the UI doesn't update in real time"}</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Make sure you update _messages.value on each chunk. StateFlow triggers recomposition only when the reference changes." : "Make sure the property is @Published and updates happen on the main actor."}</p>
        </div>
      </Section>

      <Section title={"\uD83D\uDE80 Stretch Features"}>
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
        <strong>{"\uD83C\uDFAF"} Goals</strong>
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
        <p>Build a screen with: a large image preview, two buttons (Take Photo / Gallery), and a text area for the description.</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 PhotoScreen.kt" accent={BL}>{`@Composable
fun PhotoScreen(viewModel: PhotoViewModel = viewModel()) {
    val selectedImage by viewModel.selectedImage.collectAsState()
    val description by viewModel.description.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()

    Column(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Image preview box (300dp tall)
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
            Button(onClick = { /* launch camera */ }) { Text("Take Photo") }
            Button(onClick = { /* launch gallery */ }) { Text("Gallery") }
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
          <CodeB title="Swift \u2014 PhotoScreen.swift" accent={GR}>{`struct PhotoScreen: View {
    @StateObject private var viewModel = PhotoViewModel()
    @State private var showCamera = false

    var body: some View {
        ScrollView {
            VStack(spacing: 16) {
                // Image preview
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
                    PhotosPicker(selection: $viewModel.photoItem,
                                 matching: .images) {
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
        <Checkpoint num={2}>You have a UI with image preview, camera/gallery buttons, and a describe button. Image picker works. Describe button does nothing yet.</Checkpoint>
      </Step>

      <Step num={3} title="Convert image to base64 (~8 min)">
        <p>{"Claude's vision API accepts images as base64-encoded strings."}</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 image to base64" accent={BL}>{`fun bitmapToBase64(bitmap: Bitmap): String {
    val stream = ByteArrayOutputStream()
    bitmap.compress(Bitmap.CompressFormat.JPEG, 80, stream)
    val bytes = stream.toByteArray()
    return Base64.encodeToString(bytes, Base64.NO_WRAP)
}`}</CodeB>
        ) : (
          <CodeB title="Swift \u2014 image to base64" accent={GR}>{`func imageToBase64(_ image: UIImage) -> String? {
    guard let data = image.jpegData(compressionQuality: 0.8)
    else { return nil }
    return data.base64EncodedString()
}`}</CodeB>
        )}
        <Warn>{"Large images can be several MB as base64. Compress to JPEG at 80% and consider resizing to max 1024px before encoding."}</Warn>
        <Checkpoint num={3}>You can convert a selected image to base64. Print the first 50 characters to verify.</Checkpoint>
      </Step>

      <Step num={4} title="Send the image via the multimodal API (~12 min)">
        <p>{"The key difference from Session 1: instead of text-only, you send a multimodal message with both an image and a text prompt."}</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 multimodal API call" accent={BL}>{`fun describeImage() {
    val bitmap = _selectedImage.value ?: return
    _isLoading.value = true
    _description.value = ""

    viewModelScope.launch(Dispatchers.IO) {
        try {
            val b64 = bitmapToBase64(bitmap)
            // Build JSON with multimodal content:
            // messages: [{ role: "user", content: [
            //   { type: "image", source: {
            //       type: "base64",
            //       media_type: "image/jpeg",
            //       data: b64 }},
            //   { type: "text",
            //     text: "Describe this image in detail." }
            // ]}]

            val request = Request.Builder()
                .url("https://api.anthropic.com/v1/messages")
                .post(body)
                .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
                .addHeader("anthropic-version", "2023-06-01")
                .addHeader("content-type", "application/json")
                .build()

            val response = client.newCall(request).execute()
            // Parse response and set _description.value
        } catch (e: Exception) {
            _description.value = "Error: " + e.message
        } finally {
            _isLoading.value = false
        }
    }
}`}</CodeB>
        ) : (
          <CodeB title="Swift \u2014 multimodal API call" accent={GR}>{`func describeImage() async {
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
            "model": "claude-sonnet-4-20250514",
            "max_tokens": 1024,
            "messages": [["role": "user", "content": [
                ["type": "image", "source": [
                    "type": "base64",
                    "media_type": "image/jpeg",
                    "data": b64]],
                ["type": "text",
                 "text": "Describe this image in detail."]
            ]]]
        ]
        request.httpBody = try JSONSerialization.data(withJSONObject: body)
        let (data, _) = try await URLSession.shared.data(for: request)
        // Parse response and set description
    } catch {
        description = "Error: " + error.localizedDescription
    }
    isLoading = false
}`}</CodeB>
        )}
        <p>Notice the message structure: <IC>content</IC> is now an <strong>array</strong> with both an image block and a text block.</p>
        <Checkpoint num={4}>{"Take a photo or select one, tap Describe, and wait. Claude should return a detailed description. This is the magic moment!"}</Checkpoint>
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
          <em>{"Use AI to brainstorm use cases \u2192"}</em> Ask Claude: <strong>{"\"I built a mobile app that sends photos to your vision API. What are the most useful real-world features I could build with this? Give me 5 ideas with the specific prompt for each.\""}</strong>
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

      <Section title={"\uD83D\uDCA1 Hints"}>
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p><strong>The API returns an error about image size</strong></p>
          <p style={{ marginLeft: 16 }}>{"Resize your image before encoding. Cap at 1024px on the longest side. "}{isAndroid ? "Use Bitmap.createScaledBitmap()." : "Use UIGraphicsImageRenderer."}</p>
          <p><strong>{"The camera doesn't open"}</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Make sure you requested CAMERA runtime permission, not just manifest." : "Camera doesn't work in Simulator. Test with gallery picker there, use a real device for camera."}</p>
          <p><strong>Base64 string is empty</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Make sure the bitmap is not null and compress() returns true." : "Make sure jpegData(compressionQuality:) returns non-nil."}</p>
        </div>
      </Section>

      <Section title={"\uD83D\uDE80 Stretch Features"}>
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
        {"\uD83D\uDCEC"} Submit this project by the next session using the <strong>Submit</strong> button {"\uD83D\uDC49"} <span style={{ float: "right", background: P_C, color: "#fff", padding: "4px 14px", borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: "pointer" }}>Submit</span>
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 7: Project \u2014 AI-Powered Apps</h2>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p>{"Complete and polish both mini-apps from this week's labs: the chat app (Session 1) and the photo describer (Session 2). Submit as two repos or two modules in one repo."}</p>
        <strong>{"\uD83C\uDFAF"} Goals</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 14px" }}>
          <li>Build two complete AI-powered applications using the Claude API</li>
          <li>Practice text-only and multimodal (vision) API calls</li>
          <li>Implement streaming, camera integration, and error handling</li>
        </ul>
      </div>

      <Section title={"\u2705 Required Features \u2014 Chat App"} defaultOpen={true}>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
          <li>{"\u2610"} Chat screen with <strong>message bubbles</strong> visually distinct by role</li>
          <li>{"\u2610"} Text input and send button calling the <strong>Claude Messages API</strong></li>
          <li>{"\u2610"} <strong>Streaming</strong> \u2014 response appears word by word</li>
          <li>{"\u2610"} <strong>Typing indicator</strong> while waiting for first chunk</li>
          <li>{"\u2610"} <strong>Error handling</strong> \u2014 friendly messages, no crashes</li>
          <li>{"\u2610"} <strong>Conversation history</strong> \u2014 full context sent each request</li>
          <li>{"\u2610"} API key stored <strong>securely</strong></li>
        </ul>
      </Section>

      <Section title={"\u2705 Required Features \u2014 Photo Describer"} defaultOpen={true}>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
          <li>{"\u2610"} User can <strong>take a photo</strong> or <strong>choose from gallery</strong></li>
          <li>{"\u2610"} Selected photo displayed as <strong>preview</strong></li>
          <li>{"\u2610"} Tapping Describe sends image in a <strong>multimodal API</strong> call and shows description</li>
          <li>{"\u2610"} Image <strong>compressed and resized</strong> before base64 encoding</li>
          <li>{"\u2610"} <strong>Loading state</strong> while analyzing</li>
          <li>{"\u2610"} <strong>Error handling</strong> \u2014 friendly messages</li>
          <li>{"\u2610"} API key stored <strong>securely</strong></li>
        </ul>
      </Section>

      <Section title={"\uD83D\uDE80 Stretch Features (either app)"}>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
          <li>{"\u2610"} System prompt selector for the chat app</li>
          <li>{"\u2610"} Streaming for the photo describer response</li>
          <li>{"\u2610"} {"Prompt selector for photo describer (accessibility, creative, food, etc.)"}</li>
          <li>{"\u2610"} Stop generating button for chat</li>
          <li>{"\u2610"} {"Save history to " + (isAndroid ? "Room" : "SwiftData") + " (combine Week 5 + 7!)"}</li>
          <li>{"\u2610"} {"Attach photo button in chat app \u2014 combine both sessions"}</li>
          <li>{"\u2610"} Rate limiting with friendly message</li>
        </ul>
      </Section>

      <Section title={"\uD83D\uDCA1 Hints"}>
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p><strong>{"Streaming isn't working"}</strong></p>
          <p style={{ marginLeft: 16 }}>{"Make sure you added \"stream\": true to the request body and read the response as a stream, not a single string."}</p>
          <p><strong>The UI freezes while streaming</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Ensure the network call is on Dispatchers.IO and state is observed via collectAsState()." : "Ensure the ViewModel is @MainActor so @Published updates happen on the main thread."}</p>
          <p><strong>{"Conversation context isn't working"}</strong></p>
          <p style={{ marginLeft: 16 }}>{"Send the entire messages array each request. Claude is stateless \u2014 it needs full history every time."}</p>
          <AiOpp>
            <em>{"Use AI to debug API issues \u2192"}</em> Paste your request code and error response into Claude.
          </AiOpp>
        </div>
      </Section>

      <div style={{ marginTop: 20, borderTop: "1px solid var(--color-border-tertiary)", paddingTop: 16 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 10px" }}>{"\uD83D\uDCEC"} Submitting Your Project</h3>
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
        <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px", color: CAP_C }}>{"\uD83C\uDFD7"} Capstone Milestone 1: Repo and Architecture</h3>
        <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: CAP_C }}>
          {"Due by the end of this week. This is your team's first code checkpoint."}
        </p>
      </div>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p>{"Your team has been formed (Week 5) and your proposal was approved (Week 6). Now set up the project for real. This milestone is about proving your team can collaborate on a shared codebase."}</p>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\u2705"} M1 Requirements</h4>
        <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
          <li>{"\u2610"} <strong>GitHub repo</strong> shared with all team members and <IC>codepathreview</IC></li>
          <li>{"\u2610"} <strong>Project compiles and runs</strong> on {isAndroid ? "an Android emulator or device" : "the iOS Simulator or a device"}</li>
          <li>{"\u2610"} <strong>MVVM architecture</strong> scaffolded \u2014 at least one ViewModel and View</li>
          <li>{"\u2610"} <strong>Navigation</strong> set up between at least 2 screens (placeholder OK)</li>
          <li>{"\u2610"} <strong>.gitignore</strong> configured for {isAndroid ? "Android (build/, .gradle/, local.properties)" : "iOS (.xcuserdata/, DerivedData/, Pods/)"}</li>
          <li>{"\u2610"} <strong>README</strong> with app name, description, team members, platform, feature breakdown</li>
          <li>{"\u2610"} <strong>Every team member</strong> has at least one commit</li>
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83C\uDFAF"} Stretch Goals for M1</h4>
        <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
          <li>{"\u2610"} At least one screen showing real or mock data</li>
          <li>{"\u2610"} {isAndroid ? "Material 3 theming applied" : "Custom color scheme and typography"}</li>
          <li>{"\u2610"} Architecture diagram in README</li>
          <li>{"\u2610"} Branch protection \u2014 no direct pushes to main</li>
        </ul>

        <div className="callout-ai" style={{ marginTop: 16, padding: "12px 14px", background: "#F9F0FF", borderRadius: 8 }}>
          <strong>{"\uD83D\uDCC5"} Capstone Timeline</strong>
          <ul style={{ paddingLeft: 20, margin: "6px 0 0", lineHeight: 2 }}>
            <li style={{ opacity: 0.5 }}>{"Week 5: Team formation + platform selection \u2705"}</li>
            <li style={{ opacity: 0.5 }}>{"Week 6: Proposal due \u2705"}</li>
            <li><strong>Week 7 (this week):</strong> M1 \u2014 Repo setup, architecture scaffolded</li>
            <li><strong>Week 8:</strong> M2 \u2014 Core navigation, networking. Instructor check-in</li>
            <li><strong>Week 9:</strong> M3 \u2014 Feature-complete. Git branching workflow</li>
            <li><strong>Week 10:</strong> Final \u2014 APK/TestFlight, demo day, reflection</li>
          </ul>
        </div>

        <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 8 }}>
          <strong>{"\uD83D\uDCEC"} Submission</strong>
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

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>{"\uD83D\uDCF9"} Session Recordings</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><Link>Weekly Video Playlist</Link></li>
          <li><Link>Office Hours Video Playlist</Link></li>
        </ul>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>May take 24-48 hours to appear.</p>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83E\uDD16"} Claude API</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><Link>Claude Messages API documentation</Link></li>
          <li><Link>Streaming with Messages API</Link> \u2014 SSE format</li>
          <li><Link>Vision (multimodal) messages</Link> \u2014 sending images</li>
          <li><Link>Anthropic Console</Link> \u2014 manage keys and usage</li>
          <li><Link>Claude API pricing</Link></li>
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{isAndroid ? "\uD83E\uDD16 Android Networking" : "\uD83C\uDF4E iOS Networking"}</h4>
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

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83D\uDCF7"} Camera and Photos</h4>
        <ul style={{ paddingLeft: 20 }}>
          {isAndroid ? (
            <>
              <li><Link>CameraX overview</Link></li>
              <li><Link>ActivityResultContracts</Link> \u2014 camera and gallery</li>
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
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83D\uDCE6"} Dependencies</h4>
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
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{"CodePath \u00B7 10 weeks \u00B7 2 sessions/week"}</div>
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
