import { useState } from "react";

const TABS = ["Overview", "Lab", "Project", "Capstone", "Resources"];
const PLATFORMS = ["Android", "iOS"];

/* ── colors ── */
const P = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const G = "#085041", GL = "#E1F5EE";
const AM = "#633806", AML = "#FAEEDA";
const BL = "#7F52FF", BLL = "#F0EEFF";
const GR = "#F05138", GRL = "#FFF2F0";
const CAP_C = "#993C1D", CAP_BG = "#FAECE7";

/* ── tiny components ── */
const Pill = ({ text, color }) => {
  const map = { purple: [PL, PD], green: [GL, G], amber: [AML, AM], blue: [BLL, BL], cap: [CAP_BG, CAP_C] };
  const [bg, fg] = map[color] || [PL, PD];
  return <span style={{ fontSize: 11, fontWeight: 500, padding: "2px 9px", borderRadius: 20, background: bg, color: fg, whiteSpace: "nowrap" }}>{text}</span>;
};

const Section = ({ title, children, defaultOpen = false }) => {
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

const Code = ({ title, accent, children }) => (
  <div style={{ margin: "10px 0" }}>
    {title && <div style={{ background: accent || P, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0" }}>{title}</div>}
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11.5, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Checkpoint = ({ num, children }) => (
  <div className="callout-checkpoint" style={{ margin: "14px 0", padding: "10px 14px", background: "#E8FCE8", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <strong>🎯 Checkpoint {num}:</strong> {children}
  </div>
);

const AiOpp = ({ children }) => (
  <div className="callout-ai" style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>✨ AI Opportunity</div>
    {children}
  </div>
);

const Warn = ({ children }) => (
  <div className="callout-warn" style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E6", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #EF9F27" }}>
    ⚠️ {children}
  </div>
);

const Tip = ({ children }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>
    💡 {children}
  </div>
);

const Link = ({ children }) => <span style={{ color: P, textDecoration: "underline", cursor: "pointer" }}>{children}</span>;

const Step = ({ num, title, children }) => (
  <div style={{ margin: "18px 0" }}>
    <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--platform-accent, var(--color-text-primary))", margin: "0 0 8px" }}>Step {num}: {title}</h4>
    <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
  </div>
);

const PlatformToggle = ({ platform, setPlatform }) => (
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

/* ══════════════════════════════════════ OVERVIEW ══════════════════════════════════════ */
const Overview = ({ platform, setPlatform }) => (
  <div>
    <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 12 }}>
      Don't forget to fill out the ✏️ <Link>Session Survey</Link> at the end of each class session!
    </div>
    <div className="callout-warn" style={{ background: "#FFF8E6", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 16 }}>
      🎯 <strong>REMINDER:</strong> Submit your <Link>capstone proposal</Link> by the end of Session 2 this week. Check the Capstone tab for the template and details.
    </div>

    <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>Unit 6: Architecture, MVVM & AI Coding Tools</h2>

    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
      Welcome to Phase 2! 🎉 This week marks a big shift — you've chosen your platform, formed your team, and are ready to build something real. This unit introduces the architecture pattern that professional apps are built on (<strong>MVVM</strong>) and shows you how to use <strong>AI coding tools</strong> to accelerate your capstone development. Your capstone proposal is also due this week.
    </p>

    <PlatformToggle platform={platform} setPlatform={setPlatform} />

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <p style={{ margin: "0 0 10px" }}>This week we'll cover:</p>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>Why separating UI from logic matters — and how MVVM achieves this</li>
        {platform === "Android"
          ? <li><code>ViewModel</code> + <code>StateFlow</code> — the standard Android architecture components</li>
          : <li><code>ObservableObject</code> + <code>@StateObject</code> — SwiftUI's state management pattern</li>
        }
        <li>Refactoring messy code into clean, testable layers</li>
        <li>Using AI coding assistants (Claude, Copilot, Cursor) effectively for mobile development</li>
        <li>Scaffolding your capstone project with AI assistance</li>
      </ul>
    </div>

    <div style={{ marginTop: 20, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
      <strong>Session Info</strong>
      <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
        <li>📅 See your cohort's schedule for session times</li>
        <li>↗ <Link>Session Zoom Link</Link> | Passcode: <strong>codepath</strong></li>
        <li>📊 <Link>Link to Slides</Link></li>
      </ul>
      <strong style={{ display: "block", marginTop: 10 }}>Upcoming Due Dates</strong>
      <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
        <li>📝 Capstone proposal due by end of Session 2</li>
        <li>📬 <Link>Project 6</Link> (MVVM refactor) due by the next session</li>
      </ul>
    </div>

    <div style={{ marginTop: 16, padding: "14px", background: platform === "Android" ? BLL : GRL, borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
      <strong style={{ color: platform === "Android" ? BL : GR }}>
        {platform === "Android" ? "🤖 Android Track" : "🍎 iOS Track"} — What's New This Week
      </strong>
      <p style={{ margin: "6px 0 0", color: platform === "Android" ? BL : GR }}>
        {platform === "Android"
          ? "You'll be working in Android Studio with Kotlin. This week introduces ViewModel and StateFlow from the Jetpack libraries — the industry-standard way to manage state in Compose apps. Your capstone repo will use this architecture from day one."
          : "You'll be working in Xcode with Swift. This week introduces ObservableObject, @StateObject, and @Published — SwiftUI's built-in tools for separating state from views. Your capstone repo will use this architecture from day one."
        }
      </p>
    </div>
  </div>
);

/* ══════════════════════════════════════ LAB ══════════════════════════════════════ */
const Lab = ({ platform, setPlatform }) => {
  const [session, setSession] = useState(1);
  return (
    <div>
      <div style={{ display: "flex", gap: 0, marginBottom: 16, borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
        {[1, 2].map(s => (
          <button key={s} onClick={() => setSession(s)} style={{
            padding: "8px 20px", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer",
            background: session === s ? PL : "var(--color-background-primary)",
            color: session === s ? PD : "var(--color-text-secondary)"
          }}>Session {s}{s === 2 ? " — AI Tools" : " — MVVM"}</button>
        ))}
      </div>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      {session === 1 ? <LabSession1 platform={platform} /> : <LabSession2 platform={platform} />}
    </div>
  );
};

const LabSession1 = ({ platform }) => (
  <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 6 Lab: Refactoring to MVVM</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
      In this lab, you'll take your Week 4 API app and refactor it into a clean MVVM architecture. By the end, your app will look the same to users — but the code underneath will be dramatically better organized.
    </p>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <strong>🎯 Goals</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
        <li>Understand why architecture matters as apps grow</li>
        <li>Learn the Model-View-ViewModel pattern</li>
        {platform === "Android"
          ? <li>Use <code>ViewModel</code> and <code>StateFlow</code> to hold and expose UI state</li>
          : <li>Use <code>ObservableObject</code> and <code>@Published</code> to hold and expose UI state</li>
        }
        <li>Move networking logic out of your UI code</li>
        <li>See how clean architecture makes code easier to understand and modify</li>
      </ul>
    </div>

    <Step num={0} title="Understand the problem">
      <p>Open your Week 4 API app. Take a look at your main screen file{platform === "Android" ? " (likely your main Composable function or Activity)" : " (likely your main SwiftUI View)"}. You'll probably notice that it does <em>everything</em>:</p>
      <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
        <li>It defines the UI layout</li>
        <li>It makes the API call</li>
        <li>It stores the data</li>
        <li>It handles loading and error states</li>
      </ul>
      <p>This is fine for a small app, but imagine this screen had 10 more features. The file would become unmanageable. MVVM solves this by splitting responsibilities into three layers:</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, margin: "12px 0" }}>
        <div style={{ background: PL, padding: "10px 12px", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontWeight: 600, color: PD, fontSize: 12 }}>Model</div>
          <div style={{ fontSize: 11, color: PD, marginTop: 4 }}>Your data classes{platform === "Android" ? " (Kotlin data classes)" : " (Swift structs)"}</div>
        </div>
        <div style={{ background: GL, padding: "10px 12px", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontWeight: 600, color: G, fontSize: 12 }}>View</div>
          <div style={{ fontSize: 11, color: G, marginTop: 4 }}>Your {platform === "Android" ? "Composable functions" : "SwiftUI Views"} — UI only</div>
        </div>
        <div style={{ background: AML, padding: "10px 12px", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontWeight: 600, color: AM, fontSize: 12 }}>ViewModel</div>
          <div style={{ fontSize: 11, color: AM, marginTop: 4 }}>Holds state, calls APIs, exposes data to the View</div>
        </div>
      </div>

      <Checkpoint num={0}>Before writing any code, identify in your Week 4 app: where is the data fetched? Where is it stored? Where is it displayed? Write down which lines of code belong to which layer (Model, View, ViewModel).</Checkpoint>
    </Step>

    <Step num={1} title="Create your data model">
      <p>If you don't already have a separate file for your data model, create one now. This is your <strong>Model</strong> layer.</p>
      {platform === "Android" ? (
        <Code title="Kotlin — e.g. Album.kt" accent={BL}>{`data class Album(
    val name: String,
    val artist: String,
    val imageUrl: String
)

// A sealed interface to represent all possible UI states
sealed interface AlbumUiState {
    object Loading : AlbumUiState
    data class Success(val albums: List<Album>) : AlbumUiState
    data class Error(val message: String) : AlbumUiState
}`}</Code>
      ) : (
        <Code title="Swift — e.g. Album.swift" accent={GR}>{`struct Album: Identifiable {
    let id = UUID()
    let name: String
    let artist: String
    let imageUrl: String
}

// An enum to represent all possible UI states
enum AlbumUiState {
    case loading
    case success([Album])
    case error(String)
}`}</Code>
      )}
      <Tip>The <code>{platform === "Android" ? "sealed interface" : "enum"}</code> for UI state is a powerful pattern. It forces you to handle every possible state — no more forgetting to show an error screen!</Tip>
      <Checkpoint num={1}>You should now have a separate file containing your data model and UI state types. The file should have <strong>no UI code</strong> and <strong>no networking code</strong> in it.</Checkpoint>
    </Step>

    <Step num={2} title="Create your ViewModel">
      <p>This is the heart of the refactor. Create a new file for your ViewModel. It will hold the current UI state and contain the logic to fetch data.</p>
      {platform === "Android" ? (
        <Code title="Kotlin — e.g. AlbumViewModel.kt" accent={BL}>{`import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class AlbumViewModel : ViewModel() {

    // Private mutable state — only the ViewModel can change this
    private val _uiState = MutableStateFlow<AlbumUiState>(AlbumUiState.Loading)

    // Public read-only state — the View observes this
    val uiState: StateFlow<AlbumUiState> = _uiState

    init {
        fetchAlbums()
    }

    fun fetchAlbums() {
        _uiState.value = AlbumUiState.Loading
        viewModelScope.launch {
            try {
                // Move your existing API call logic here
                val albums = // ... your networking code ...
                _uiState.value = AlbumUiState.Success(albums)
            } catch (e: Exception) {
                _uiState.value = AlbumUiState.Error(
                    e.message ?: "Something went wrong"
                )
            }
        }
    }
}`}</Code>
      ) : (
        <Code title="Swift — e.g. AlbumViewModel.swift" accent={GR}>{`import Foundation

@MainActor
class AlbumViewModel: ObservableObject {

    // @Published automatically notifies the View when this changes
    @Published var uiState: AlbumUiState = .loading

    init() {
        Task { await fetchAlbums() }
    }

    func fetchAlbums() async {
        uiState = .loading
        do {
            // Move your existing API call logic here
            let albums: [Album] = // ... your networking code ...
            uiState = .success(albums)
        } catch {
            uiState = .error(error.localizedDescription)
        }
    }
}`}</Code>
      )}

      <AiOpp>
        <em>Use AI as a refactoring partner →</em> Paste your existing Week 4 networking code into Claude and ask: <strong>"I'm refactoring this into a ViewModel. Can you help me move the networking logic out of my View and into this ViewModel class? Don't change the API call itself — just move it."</strong> Review what it gives you carefully before pasting.
      </AiOpp>

      <Warn>The ViewModel should <strong>never</strong> import any UI framework. No {platform === "Android" ? <><code>import androidx.compose.*</code></> : <><code>import SwiftUI</code></>} in this file! If you need SwiftUI or Compose, the code belongs in the View layer instead.</Warn>

      <Checkpoint num={2}>Your ViewModel file should compile with no errors. It should contain your networking logic and expose a <code>uiState</code> property. It should have <strong>zero UI imports</strong>.</Checkpoint>
    </Step>

    <Step num={3} title="Connect your View to the ViewModel">
      <p>Now update your main screen to <em>observe</em> the ViewModel's state instead of managing its own.</p>
      {platform === "Android" ? (
        <Code title="Kotlin — in your Composable" accent={BL}>{`@Composable
fun AlbumScreen(
    viewModel: AlbumViewModel = viewModel()
) {
    // Collect the StateFlow as Compose state
    val uiState by viewModel.uiState.collectAsState()

    when (uiState) {
        is AlbumUiState.Loading -> {
            // Your loading UI (shimmer, spinner, etc.)
        }
        is AlbumUiState.Success -> {
            val albums = (uiState as AlbumUiState.Success).albums
            // Your list UI — LazyColumn, etc.
        }
        is AlbumUiState.Error -> {
            val message = (uiState as AlbumUiState.Error).message
            // Your error UI with a retry button
            Button(onClick = { viewModel.fetchAlbums() }) {
                Text("Retry")
            }
        }
    }
}`}</Code>
      ) : (
        <Code title="Swift — in your SwiftUI View" accent={GR}>{`struct AlbumScreen: View {
    // @StateObject creates and owns the ViewModel
    @StateObject private var viewModel = AlbumViewModel()

    var body: some View {
        Group {
            switch viewModel.uiState {
            case .loading:
                // Your loading UI (ProgressView, etc.)
                ProgressView()
            case .success(let albums):
                // Your list UI — List, ForEach, etc.
                List(albums) { album in
                    // album row
                }
            case .error(let message):
                // Your error UI with a retry button
                VStack {
                    Text(message)
                    Button("Retry") {
                        Task { await viewModel.fetchAlbums() }
                    }
                }
            }
        }
    }
}`}</Code>
      )}

      <Tip>Notice how clean the View is now — it only decides <em>what to show</em> based on the current state. All the logic for <em>what the state should be</em> lives in the ViewModel.</Tip>

      <Checkpoint num={3}>Run your app. It should behave <strong>exactly the same as before</strong> — loading state, data displayed, error handling all work. The difference is entirely in how the code is organized.</Checkpoint>
    </Step>

    <Step num={4} title="Verify the separation">
      <p>Let's make sure the refactor is truly clean. Check these three things:</p>
      <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
        <li><strong>Model file</strong> — contains only data classes/structs and the UI state type. No imports from UI or networking libraries.</li>
        <li><strong>ViewModel file</strong> — contains networking logic, state management. Imports {platform === "Android" ? "lifecycle and coroutines" : "Foundation"} but <strong>not</strong> {platform === "Android" ? "Compose" : "SwiftUI"}.</li>
        <li><strong>View file</strong> — contains only UI code. It reads from the ViewModel but never calls an API directly.</li>
      </ol>

      <AiOpp>
        <em>Use AI for a code review →</em> Paste all three files into Claude and ask: <strong>"Review my MVVM refactor. Does anything in the View layer belong in the ViewModel, or vice versa? Are there any architecture violations?"</strong>
      </AiOpp>

      <Checkpoint num={4}>Your refactored app has at least 3 files — Model, ViewModel, and View — with clean separation between them. The app works identically to before.</Checkpoint>
    </Step>

    <Section title="💡 Hints">
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        {platform === "Android" ? (
          <>
            <p><strong>My app crashes when I add the ViewModel</strong></p>
            <p style={{ marginLeft: 16 }}>Make sure you have the <code>lifecycle-viewmodel-compose</code> dependency in your <code>build.gradle</code>. Also ensure you're using <code>viewModel()</code> from <code>androidx.lifecycle.viewmodel.compose</code>, not creating the ViewModel with the constructor directly.</p>
            <p><strong>What's the difference between StateFlow and MutableStateFlow?</strong></p>
            <p style={{ marginLeft: 16 }}><code>MutableStateFlow</code> lets you change the value. <code>StateFlow</code> is read-only. The pattern is: the ViewModel uses <code>MutableStateFlow</code> internally, but exposes it as <code>StateFlow</code> so the View can only read, never write.</p>
            <p><strong>Do I need Hilt or dependency injection?</strong></p>
            <p style={{ marginLeft: 16 }}>Not yet. For now, using the default <code>viewModel()</code> function is enough. We'll explore dependency injection later if needed for your capstone.</p>
          </>
        ) : (
          <>
            <p><strong>What's the difference between @StateObject and @ObservedObject?</strong></p>
            <p style={{ marginLeft: 16 }}><code>@StateObject</code> creates and <em>owns</em> the ViewModel — use this in the parent view that creates it. <code>@ObservedObject</code> observes a ViewModel passed in from a parent. For now, use <code>@StateObject</code>.</p>
            <p><strong>Why @MainActor on the ViewModel?</strong></p>
            <p style={{ marginLeft: 16 }}>UI updates must happen on the main thread. <code>@MainActor</code> ensures all the ViewModel's <code>@Published</code> property changes happen on the main thread automatically.</p>
            <p><strong>My list doesn't update when data loads</strong></p>
            <p style={{ marginLeft: 16 }}>Make sure your ViewModel is a <code>class</code> (not a struct) and conforms to <code>ObservableObject</code>. The <code>uiState</code> property must be marked <code>@Published</code>.</p>
          </>
        )}
      </div>
    </Section>

    <Section title="🚀 Stretch Features">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
        <li>Add a <strong>Repository layer</strong> between the ViewModel and the network call. The ViewModel calls <code>repository.getAlbums()</code> and doesn't know whether the data comes from the network or a local cache.</li>
        <li>Extract your networking code into a separate <strong>API Service</strong> file so the ViewModel doesn't contain raw HTTP logic.</li>
        <li>Add a <strong>pull-to-refresh</strong> gesture that calls <code>{platform === "Android" ? "viewModel.fetchAlbums()" : "viewModel.fetchAlbums()"}</code> to reload data.</li>
      </ul>
    </Section>
  </div>
);

const LabSession2 = ({ platform }) => (
  <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 6 Lab: AI-Assisted Development</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
      In this lab, you'll learn how to use AI coding tools effectively as a mobile developer. The principles apply to any AI assistant — Claude, Copilot, Cursor, ChatGPT — but we'll use <strong>Claude</strong> as our primary example.
    </p>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <strong>🎯 Goals</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
        <li>Learn how to write effective prompts for mobile development tasks</li>
        <li>Practice scaffolding a project with AI assistance</li>
        <li>Understand when AI helps vs. when it gets in the way</li>
        <li>Scaffold your capstone project's architecture using AI</li>
      </ul>
    </div>

    <Step num={0} title="The prompting mindset">
      <p>AI coding assistants are powerful, but they need <strong>context</strong> to be useful. A vague prompt gives vague results. Here are the three principles of effective AI prompting for mobile development:</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, margin: "12px 0" }}>
        <div style={{ background: PL, padding: "10px 14px", borderRadius: 8 }}>
          <strong style={{ color: PD }}>1. Specify your platform and stack</strong>
          <p style={{ margin: "4px 0 0", fontSize: 12, color: PD }}>❌ "Build me a login screen" → ✅ "Build me a login screen in {platform === "Android" ? "Jetpack Compose using Material 3" : "SwiftUI targeting iOS 17"} with email and password fields and form validation"</p>
        </div>
        <div style={{ background: GL, padding: "10px 14px", borderRadius: 8 }}>
          <strong style={{ color: G }}>2. Give it your existing code as context</strong>
          <p style={{ margin: "4px 0 0", fontSize: 12, color: G }}>❌ "Add a settings screen" → ✅ "Here's my current ViewModel and navigation setup. Add a settings screen that follows the same MVVM pattern and integrates with my existing nav graph."</p>
        </div>
        <div style={{ background: AML, padding: "10px 14px", borderRadius: 8 }}>
          <strong style={{ color: AM }}>3. Ask it to explain, not just generate</strong>
          <p style={{ margin: "4px 0 0", fontSize: 12, color: AM }}>❌ Copy-paste the output blindly → ✅ "Explain each section of this code and why you chose this approach over alternatives."</p>
        </div>
      </div>
      <Checkpoint num={0}>No code yet — just make sure you have access to Claude (claude.ai) or another AI assistant open in a browser tab alongside your IDE.</Checkpoint>
    </Step>

    <Step num={1} title="Scaffold your capstone project">
      <p>Now let's put these principles to work. You'll use AI to create the initial project structure for your team's capstone app.</p>
      <p>Open Claude and try this prompt template (customize it for your capstone idea):</p>

      <Code title="Example prompt">{`I'm building a ${platform === "Android" ? "Jetpack Compose (Kotlin)" : "SwiftUI (Swift)"} app called [YOUR APP NAME].

The app does: [2-3 sentence description of your capstone idea]

The main screens are:
1. [Screen 1 name] — [what it shows]
2. [Screen 2 name] — [what it shows]  
3. [Screen 3 name] — [what it shows]

I want to use the MVVM architecture pattern (like we learned in Session 1 today).

Can you help me create:
1. The project folder structure
2. A data model file for the main entities
3. A ViewModel for the first screen with placeholder/mock data
4. The navigation setup to move between screens

Please explain your decisions as you go. Use ${platform === "Android" ? "Navigation Compose for navigation and StateFlow for state management" : "NavigationStack for navigation and @StateObject for state management"}.`}</Code>

      <Warn>Do <strong>not</strong> blindly copy-paste the output into your project. Read every line. You'll be graded on understanding your code — not on how fast you generated it.</Warn>

      <Checkpoint num={1}>You should have a response from Claude with a project structure, data models, and at least one ViewModel. Read through the entire response before moving to the next step.</Checkpoint>
    </Step>

    <Step num={2} title="Review, adapt, and implement">
      <p>Now comes the important part — <strong>critically reviewing</strong> the AI output and adapting it to your actual project.</p>
      <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
        <li><strong>Read every line.</strong> If there's a line you don't understand, ask Claude: "Can you explain what this line does and why it's needed?"</li>
        <li><strong>Compare with Session 1.</strong> Does the ViewModel follow the same pattern we used in the MVVM lab? If not, adapt it.</li>
        <li><strong>Create the files in your IDE.</strong> Don't paste giant files — create each file one at a time, typing some parts yourself.</li>
        <li><strong>Run after each file.</strong> Don't wait until everything is pasted. Run after each addition to catch errors early.</li>
      </ol>

      <AiOpp>
        <em>Use AI for iterative refinement →</em> After pasting the first ViewModel, ask Claude: <strong>"I just created this ViewModel but I'm getting [specific error]. Here's the error message: [paste error]. What's wrong?"</strong> This is exactly how professional developers use AI tools day-to-day.
      </AiOpp>

      <Checkpoint num={2}>Your capstone project should now compile and run in your IDE with at least one screen showing mock/placeholder data, using the MVVM architecture from Session 1.</Checkpoint>
    </Step>

    <Step num={3} title="The 'vibe check' — catch AI mistakes">
      <p>AI tools are confidently wrong sometimes. Let's practice catching common mistakes. Here are things to look out for in AI-generated {platform === "Android" ? "Android" : "iOS"} code:</p>
      <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
        {platform === "Android" ? (
          <>
            <li>Using deprecated APIs like <code>LiveData</code> when we asked for <code>StateFlow</code></li>
            <li>Missing <code>@Composable</code> annotations on composable functions</li>
            <li>Importing libraries you don't have in <code>build.gradle</code></li>
            <li>Creating the ViewModel with a constructor instead of <code>viewModel()</code></li>
            <li>Not handling the error state in the UI</li>
          </>
        ) : (
          <>
            <li>Using <code>@ObservedObject</code> where <code>@StateObject</code> is correct</li>
            <li>Missing <code>@MainActor</code> on ViewModels that update <code>@Published</code> properties</li>
            <li>Using UIKit patterns instead of SwiftUI</li>
            <li>Forgetting <code>Identifiable</code> conformance on data models used in <code>List</code></li>
            <li>Not handling all cases of an enum in a <code>switch</code> statement</li>
          </>
        )}
      </ul>
      <p>Look through your AI-generated capstone code and see if any of these issues exist. Fix them.</p>

      <Checkpoint num={3}>You've reviewed all AI-generated code, fixed any issues, and your capstone project runs cleanly with no warnings related to the items above.</Checkpoint>
    </Step>

    <Section title="💡 Tips for effective AI prompting">
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        <p><strong>Start a conversation, not a one-shot prompt.</strong> The first response is a starting point. Follow up with "Now change X" or "What if I also need Y?"</p>
        <p><strong>Give it your error messages.</strong> AI assistants are excellent debuggers when you paste the exact error and the relevant code.</p>
        <p><strong>Ask "why" before "how."</strong> Before asking it to generate code, ask it to explain the approach. You'll learn more and catch mistakes earlier.</p>
        <p><strong>Don't fight the tool.</strong> If AI-generated code is hard to understand after explanation, write it yourself. The goal is to learn, not to ship fast.</p>
      </div>
    </Section>

    <Section title="🚀 Stretch Features">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
        <li>Use AI to generate <strong>mock data</strong> for all your capstone screens — realistic names, descriptions, image URLs, etc.</li>
        <li>Ask Claude to help you set up a <strong>navigation graph</strong> connecting all your planned screens with proper back-stack behavior.</li>
        <li>Try using Claude to write <strong>unit tests</strong> for your ViewModel — paste the ViewModel and ask it to generate tests for each state transition.</li>
      </ul>
    </Section>
  </div>
);

/* ══════════════════════════════════════ PROJECT ══════════════════════════════════════ */
const Project = ({ platform, setPlatform }) => (
  <div>
    <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 14 }}>
      📬 Submit this project by the next session using the <strong>Submit</strong> button 👉 <span style={{ float: "right", background: P, color: "#fff", padding: "4px 14px", borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: "pointer" }}>Submit</span>
    </div>

    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 6: Project — MVVM Refactor</h2>
    <PlatformToggle platform={platform} setPlatform={setPlatform} />

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <p>In this project, you'll complete the MVVM refactor of your Week 4 API app that we started in the lab session. By the end, your app should have clean separation between the Model, View, and ViewModel layers.</p>

      <div style={{ background: "#F8F5FF", padding: "12px", borderRadius: 8, margin: "12px 0", fontSize: 13 }}>
        This is your first independent project on your chosen platform ({platform}). Take your time understanding every piece of code — the architecture patterns you practice here will be the foundation of your capstone project.
      </div>

      <strong>🎯 Goals</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 14px" }}>
        <li>Solidify your understanding of the MVVM architecture pattern</li>
        <li>Practice refactoring existing code without changing functionality</li>
        {platform === "Android"
          ? <li>Gain familiarity with <code>ViewModel</code>, <code>StateFlow</code>, and <code>collectAsState()</code></li>
          : <li>Gain familiarity with <code>ObservableObject</code>, <code>@Published</code>, and <code>@StateObject</code></li>
        }
        <li>Experience the real-world workflow of improving code quality</li>
      </ul>
    </div>

    <Section title="✅ Required Features" defaultOpen={true}>
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
        <li>☐ App has a <strong>separate data model file</strong> containing your data class/struct and a UI state type ({platform === "Android" ? "sealed interface" : "enum"})</li>
        <li>☐ App has a <strong>ViewModel</strong> that holds the UI state and contains the networking logic</li>
        <li>☐ The ViewModel exposes state via {platform === "Android" ? <code>StateFlow</code> : <code>@Published</code>} — the View never calls the API directly</li>
        <li>☐ The <strong>View</strong> observes the ViewModel and renders different UI for Loading, Success, and Error states</li>
        <li>☐ The ViewModel file has <strong>no UI framework imports</strong> ({platform === "Android" ? "no Compose imports" : "no SwiftUI import"})</li>
        <li>☐ The app <strong>functions identically</strong> to the Week 4 version — same features, same screens, same user experience</li>
        <li>☐ Error state includes a working <strong>Retry button</strong> that re-fetches data</li>
      </ul>
    </Section>

    <Section title="🚀 Stretch Features">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
        <li>☐ Add a <strong>Repository layer</strong> between the ViewModel and the network — the ViewModel calls <code>repository.getAlbums()</code></li>
        <li>☐ Extract networking into a separate <strong>API Service</strong> file</li>
        <li>☐ Add <strong>pull-to-refresh</strong> functionality</li>
        <li>☐ Add a <strong>search/filter</strong> feature managed through the ViewModel (not in the View)</li>
        <li>☐ Write at least one <strong>unit test</strong> for your ViewModel</li>
      </ul>
    </Section>

    <Section title="📘 Resources">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
        {platform === "Android" ? (
          <>
            <li><Link>Android ViewModel Overview</Link> — official guide</li>
            <li><Link>StateFlow and SharedFlow</Link> — Kotlin coroutines docs</li>
            <li><Link>Guide to App Architecture</Link> — Google's recommended architecture</li>
            <li>This unit's <strong>Resources tab</strong></li>
          </>
        ) : (
          <>
            <li><Link>Managing Model Data in Your App</Link> — Apple developer docs</li>
            <li><Link>ObservableObject protocol</Link> — Swift documentation</li>
            <li><Link>MVVM in SwiftUI</Link> — community guide</li>
            <li>This unit's <strong>Resources tab</strong></li>
          </>
        )}
      </ul>
    </Section>

    <Section title="💡 Hints">
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        <p><strong>Getting Started</strong></p>
        <ul style={{ paddingLeft: 20 }}>
          <li>Start by copying your entire Week 4 project into a new folder/repo. Don't modify the original — you want to be able to compare.</li>
          <li>Follow the lab steps in order: Model first, then ViewModel, then update the View.</li>
          <li>Run the app after <em>every change</em>. Small incremental refactors are much easier to debug than one big change.</li>
        </ul>
        {platform === "Android" ? (
          <>
            <p><strong>Dependencies</strong></p>
            <ul style={{ paddingLeft: 20 }}>
              <li>You need <code>lifecycle-viewmodel-compose</code> in your <code>build.gradle</code>. Check the Resources tab for the exact dependency line.</li>
              <li>You also need <code>lifecycle-runtime-compose</code> for <code>collectAsState()</code>.</li>
            </ul>
          </>
        ) : (
          <>
            <p><strong>Common Swift issues</strong></p>
            <ul style={{ paddingLeft: 20 }}>
              <li>If your view doesn't update when data loads, make sure the property is <code>@Published</code> and the ViewModel is referenced with <code>@StateObject</code>.</li>
              <li>Remember that <code>@MainActor</code> on the ViewModel class ensures thread safety for UI updates.</li>
            </ul>
          </>
        )}

        <AiOpp>
          <em>Use AI as a debugging partner →</em> If you're stuck, paste your ViewModel and View code into Claude and ask: <strong>"My app compiles but the list doesn't show any data. Here's my ViewModel and my View. What might be wrong?"</strong>
        </AiOpp>
      </div>
    </Section>

    <div style={{ marginTop: 20, borderTop: "1px solid var(--color-border-tertiary)", paddingTop: 16 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 10px" }}>📬 Submitting Your Project</h3>
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        <p>Once you've completed all required features:</p>
        <ol style={{ paddingLeft: 20 }}>
          <li>Create a GitHub repo (or use your existing Week 4 repo on a new branch)</li>
          <li>Push your refactored project code</li>
          <li>Create a README using the <Link>Unit 6 Project — README Template</Link></li>
          <li>In the README, mark off all features you implemented by changing <code>{"- [ ]"}</code> to <code>{"- [x]"}</code></li>
          <li>Record a Video/GIF walkthrough showing the app working with the same functionality as Week 4</li>
          <li>Add the Video/GIF to your repo and link it in the README</li>
          <li>Make the repo private and add <code>codepathreview</code> as a collaborator</li>
        </ol>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════ CAPSTONE ══════════════════════════════════════ */
const Capstone = ({ platform, setPlatform }) => (
  <div>
    <div style={{ background: CAP_BG, padding: "14px", borderRadius: 10, marginBottom: 16 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px", color: CAP_C }}>📝 Capstone: Proposal Due</h3>
      <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: CAP_C }}>
        Your team was formed and platform was selected last week (Week 5). This week, submit your capstone proposal.
      </p>
    </div>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <p>Now that you have your team and platform locked in, it's time to define <em>what</em> you're building. The proposal is a short document — think of it as a pitch to your instructor, not a full spec. Keep it focused.</p>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>📋 What's Due This Week</h4>
      <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
        <li>☐ <strong>1-page capstone proposal</strong> (see template below)</li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>📄 Proposal Template</h4>
      <p>Your proposal should include the following. One submission per team — keep it to roughly one page.</p>

      <div style={{ background: "var(--color-background-secondary)", padding: "14px", borderRadius: 10, margin: "12px 0" }}>
        <div style={{ fontSize: 13, lineHeight: 1.9 }}>
          <p style={{ margin: "0 0 6px" }}><strong>App Name:</strong> [Your app's name]</p>
          <p style={{ margin: "0 0 6px" }}><strong>Platform:</strong> [Android / iOS]</p>
          <p style={{ margin: "0 0 6px" }}><strong>Team Members:</strong> [Name 1, Name 2, Name 3]</p>
          <p style={{ margin: "0 0 6px" }}><strong>App Description:</strong> [2–3 sentences. What does it do? Who is it for?]</p>
          <p style={{ margin: "0 0 6px" }}><strong>Core Features</strong> (must-haves for demo day):</p>
          <ul style={{ paddingLeft: 20, margin: "0 0 6px" }}>
            <li>Feature 1 — [brief description]</li>
            <li>Feature 2 — [brief description]</li>
            <li>Feature 3 — [brief description]</li>
          </ul>
          <p style={{ margin: "0 0 6px" }}><strong>Stretch Features</strong> (nice-to-haves if time allows):</p>
          <ul style={{ paddingLeft: 20, margin: "0 0 6px" }}>
            <li>Stretch 1 — [brief description]</li>
            <li>Stretch 2 — [brief description]</li>
          </ul>
          <p style={{ margin: "0 0 6px" }}><strong>Team Roles:</strong> [Who is responsible for which features/screens?]</p>
          <p style={{ margin: 0 }}><strong>APIs / Data Sources:</strong> [Any APIs you plan to use? Will the app need an LLM? On-device AI? Local storage?]</p>
        </div>
      </div>

      <AiOpp>
        <em>Use AI to refine your proposal →</em> Paste your draft proposal into Claude and ask: <strong>"We're a team of 3 with 4 weeks to build this. Is our scope realistic? What should we cut if we run out of time? What are we missing?"</strong> This is a great way to stress-test your idea before committing.
      </AiOpp>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>💭 Tips for a Strong Proposal</h4>
      <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
        <li><strong>Keep your core features to 3–4.</strong> You have 4 weeks of build time. Less is more — a polished app with 3 great features beats a buggy app with 10.</li>
        <li><strong>Think about what you already know.</strong> Your capstone should use skills from Weeks 1–6: UI, navigation, networking, persistence, MVVM. Don't plan features that require entirely new skills unless you're confident.</li>
        <li><strong>Plan for the demo.</strong> On Week 10, you'll present for 5 minutes. What will make your demo impressive? Focus your core features on what looks great live.</li>
        <li><strong>Be specific about roles.</strong> "We'll all work on everything" is a red flag. Assign screens or features to individuals — you can always help each other, but clear ownership prevents bottlenecks.</li>
      </ul>

      <div className="callout-ai" style={{ marginTop: 16, padding: "12px 14px", background: "#F9F0FF", borderRadius: 8 }}>
        <strong>🗓 Capstone Timeline</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 0", lineHeight: 2 }}>
          <li><span style={{ opacity: 0.5 }}>Week 5: Team formation + platform selection ✅</span></li>
          <li><strong>Week 6 (this week):</strong> Proposal due</li>
          <li><strong>Week 7:</strong> M1 — Repo setup, architecture scaffolded, at least one screen with data</li>
          <li><strong>Week 8:</strong> M2 — Core navigation, networking end-to-end. Instructor check-in (10 min/team)</li>
          <li><strong>Week 9:</strong> M3 — Feature-complete. Git branching workflow in place</li>
          <li><strong>Week 10:</strong> Final — APK/TestFlight build, demo day, written reflection</li>
        </ul>
      </div>

      <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 8 }}>
        <strong>📬 Submission</strong>
        <p style={{ margin: "6px 0 0" }}>One team member submits the proposal via the form linked in Slack. Your instructor will review proposals and may suggest scope adjustments before Week 7. <strong>Deadline: end of this week's Session 2.</strong></p>
      </div>

      <Tip>The Session 2 lab this week (AI-assisted scaffolding) is the perfect time to start prototyping your capstone idea. Use the prompt template from the lab, plug in your proposal details, and see what Claude generates. You don't need to keep the code — it's about validating that your idea is buildable.</Tip>
    </div>
  </div>
);

/* ══════════════════════════════════════ RESOURCES ══════════════════════════════════════ */
const Resources = ({ platform, setPlatform }) => (
  <div>
    <PlatformToggle platform={platform} setPlatform={setPlatform} />
    <div style={{ fontSize: 13, lineHeight: 1.8 }}>
      <p>A list of helpful links relevant to this unit.</p>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>📹 Session Recordings</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><Link>Weekly Video Playlist</Link></li>
        <li><Link>Office Hours Video Playlist</Link></li>
      </ul>
      <p style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>Note: It may take up to 24-48 hours after the session to appear on the playlist.</p>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>📐 MVVM Architecture</h4>
      <ul style={{ paddingLeft: 20 }}>
        {platform === "Android" ? (
          <>
            <li><Link>Guide to App Architecture</Link> — Google's official Android architecture guide</li>
            <li><Link>ViewModel Overview</Link> — Jetpack ViewModel docs</li>
            <li><Link>StateFlow and SharedFlow</Link> — Kotlin coroutines state management</li>
            <li><Link>Migrate from LiveData to StateFlow</Link> — if you see older tutorials using LiveData</li>
            <li><Link>lifecycle-viewmodel-compose dependency</Link> — Maven artifact you need in build.gradle</li>
          </>
        ) : (
          <>
            <li><Link>Managing Model Data in Your App</Link> — Apple's official guide</li>
            <li><Link>ObservableObject</Link> — Swift protocol reference</li>
            <li><Link>StateObject vs ObservedObject</Link> — when to use which</li>
            <li><Link>@MainActor and Concurrency</Link> — keeping your UI updates thread-safe</li>
            <li><Link>MVVM Pattern in SwiftUI</Link> — community walkthrough</li>
          </>
        )}
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>🤖 AI Coding Tools</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><Link>Claude</Link> — claude.ai (free tier available)</li>
        <li><Link>GitHub Copilot</Link> — free for students via GitHub Education</li>
        <li><Link>Cursor</Link> — AI-first code editor</li>
        <li><Link>Anthropic Prompting Guide</Link> — tips for getting better results from Claude</li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>🔧 Project Setup</h4>
      <ul style={{ paddingLeft: 20 }}>
        {platform === "Android" ? (
          <>
            <li><Link>Create a New Android Project</Link> — Android Studio guide</li>
            <li><Link>Android .gitignore template</Link> — what to exclude from Git</li>
            <li><Link>Gradle dependency management</Link> — adding libraries to your project</li>
          </>
        ) : (
          <>
            <li><Link>Creating an Xcode Project</Link> — Apple developer guide</li>
            <li><Link>iOS .gitignore template</Link> — what to exclude from Git</li>
            <li><Link>Swift Package Manager</Link> — adding dependencies in Xcode</li>
          </>
        )}
      </ul>

      {platform === "Android" && (
        <>
          <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>📦 Dependencies You'll Need</h4>
          <Code title="build.gradle (app-level) — add to dependencies block" accent={BL}>{`// ViewModel for Compose
implementation "androidx.lifecycle:lifecycle-viewmodel-compose:2.7.0"

// StateFlow collection in Compose
implementation "androidx.lifecycle:lifecycle-runtime-compose:2.7.0"`}</Code>
        </>
      )}
    </div>
  </div>
);

/* ══════════════════════════════════════ MAIN ══════════════════════════════════════ */
export default function Week6Unit() {
  const [tab, setTab] = useState("Overview");
  const [platform, setPlatform] = useState("Android");

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "16px 0", fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>
      {/* Course header */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", fontWeight: 500, marginBottom: 2 }}>MOBILE DEVELOPMENT IN THE AGE OF AI</div>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>CodePath · 10 weeks · 2 sessions/week</div>
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--color-border-tertiary)", marginBottom: 16, overflowX: "auto" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "8px 14px", fontSize: 13, background: "none", cursor: "pointer",
            borderWidth: "0 0 2px 0", borderStyle: "solid",
            borderColor: tab === t ? P : "transparent",
            color: tab === t ? P : "var(--color-text-secondary)",
            fontWeight: tab === t ? 500 : 400, whiteSpace: "nowrap"
          }}>{t}</button>
        ))}
      </div>

      {/* Tab content */}
      {tab === "Overview" && <Overview platform={platform} setPlatform={setPlatform} />}
      {tab === "Lab" && <Lab platform={platform} setPlatform={setPlatform} />}
      {tab === "Project" && <Project platform={platform} setPlatform={setPlatform} />}
      {tab === "Capstone" && <Capstone platform={platform} setPlatform={setPlatform} />}
      {tab === "Resources" && <Resources platform={platform} setPlatform={setPlatform} />}
    </div>
  );
}
