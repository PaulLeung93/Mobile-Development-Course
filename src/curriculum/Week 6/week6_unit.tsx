import { useState } from "react";

const TABS = ["Overview", "Lab", "Capstone", "Resources"];
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

const VStep = ({ num, title, children, last = false }) => (
  <div style={{ display: "flex", gap: 12 }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--platform-accent, #534AB7)", color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{num}</div>
      {!last && <div style={{ width: 2, flex: 1, minHeight: 20, background: "var(--color-border-tertiary)", margin: "3px 0" }} />}
    </div>
    <div style={{ paddingBottom: last ? 8 : 24, flex: 1, minWidth: 0 }}>
      <h4 style={{ fontSize: 13, fontWeight: 600, margin: "3px 0 8px", color: "var(--color-text-primary)" }}>{title}</h4>
      <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
    </div>
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

    <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
      <strong>{"📦 This unit at a glance"}</strong>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
        {[
          { label: "Session 1", val: "MVVM architecture refactor — separate Model, ViewModel, and View layers in your Week 4 API app." },
          { label: "Session 2", val: "AI-assisted development — use Claude, Copilot, or Cursor to scaffold your capstone project." },
          { label: "Capstone Proposal", val: "1-page proposal due by end of Session 2. Defines your app idea, team roles, and feature scope." },
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

    {/* ─── Step 0: Understand the problem ─── */}
    <VStep num={0} title="Understand the problem">
      <p>Before writing a single line of new code, take 5 minutes to audit your Week 4 app. Open your main screen file{platform === "Android" ? " — the Composable function that shows your list" : " — the SwiftUI View that shows your list"}. Count how many jobs it does:</p>
      <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
        <li>Does it define the UI layout? (That's the View's job — fine.)</li>
        <li>Does it make the API call? (Belongs in the ViewModel.)</li>
        <li>Does it store data in <code>{platform === "Android" ? "remember { mutableStateOf(...) }" : "@State var items"}</code>? (ViewModel.)</li>
        <li>Does it track loading and error state? (ViewModel.)</li>
      </ul>
      <p>This is the spaghetti problem from the lecture — one file doing everything. MVVM splits those responsibilities into three layers:</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, margin: "12px 0" }}>
        <div style={{ background: PL, padding: "10px 12px", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontWeight: 600, color: PD, fontSize: 12 }}>Model</div>
          <div style={{ fontSize: 11, color: PD, marginTop: 4 }}>Data classes/structs only. No UI, no networking.</div>
        </div>
        <div style={{ background: AML, padding: "10px 12px", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontWeight: 600, color: AM, fontSize: 12 }}>ViewModel</div>
          <div style={{ fontSize: 11, color: AM, marginTop: 4 }}>Holds state, fetches data. No UI imports.</div>
        </div>
        <div style={{ background: GL, padding: "10px 12px", borderRadius: 8, textAlign: "center" }}>
          <div style={{ fontWeight: 600, color: G, fontSize: 12 }}>View</div>
          <div style={{ fontSize: 11, color: G, marginTop: 4 }}>Displays state. Never fetches data directly.</div>
        </div>
      </div>
      <Checkpoint num={0}>Before writing any code, identify in your Week 4 app: where is data fetched? Where is it stored? Where is it displayed? Write down which lines of code belong to which layer.</Checkpoint>
    </VStep>

    {/* ─── Step 1: Data model ─── */}
    <VStep num={1} title="Create your data model">
      <p>The Model layer is the simplest — it's just data. Before building the ViewModel, make sure your data class lives in its own file and add a <strong>UiState type</strong> that describes every possible state the screen can be in. You'll build this in two sub-steps.</p>

      <VStep num="a" title="Find and isolate your existing data class">
        <p>Open your Week 4 project and find the {platform === "Android" ? "data class" : "struct"} that represents one item in your list (e.g., <code>{platform === "Android" ? "data class Movie(...)" : "struct Movie: Decodable"}</code>). Check these three things:</p>
        <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li><strong>Is it in its own file?</strong> If it's nested inside your screen file, create a new file now (e.g., <code>{platform === "Android" ? "Movie.kt" : "Movie.swift"}</code>) and move the class/struct there.</li>
          <li><strong>Does it have UI imports?</strong> {platform === "Android" ? "There should be no Compose imports in this file." : "There should be no SwiftUI import in this file."} A model file has no business knowing about the UI.</li>
          <li><strong>Is JSON decoding configured?</strong> {platform === "Android" ? "Make sure field names match your API response (use @SerializedName if they differ)." : "Make sure the struct conforms to Decodable and uses CodingKeys if your API uses snake_case."}</li>
        </ul>
        <Section title="✅ Check your work — what the model file should look like at this point">
          <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 8px" }}>Your data type and field names will differ — use this as a reference for the expected structure:</p>
          {platform === "Android" ? (
            <Code title="Kotlin — Movie.kt (data class only, no UI state yet)" accent={BL}>{`// No UI imports — just the data
data class Movie(
    val id: Int,
    val title: String,
    val overview: String,
    val posterPath: String
)

// UiState goes here in Step 1b`}</Code>
          ) : (
            <Code title="Swift — Movie.swift (struct only, no UI state yet)" accent={GR}>{`// No SwiftUI import — just Foundation (or nothing)
struct Movie: Identifiable, Decodable {
    let id: Int
    let title: String
    let overview: String
    let posterPath: String

    enum CodingKeys: String, CodingKey {
        case id, title, overview
        case posterPath = "poster_path"
    }
}

// UiState goes here in Step 1b`}</Code>
          )}
        </Section>
      </VStep>

      <VStep num="b" title="Add the UiState type" last>
        <p>Add a type right below your data class that describes every state the screen can be in. There are exactly three cases: the data is loading, it loaded successfully, or something went wrong.</p>
        <p><strong>Why a sealed class/enum instead of separate <code>isLoading</code> and <code>errorMessage</code> flags?</strong> Boolean flags can contradict each other — <code>isLoading = true</code> and <code>errorMessage = "oops"</code> can coexist, which makes no sense. A sealed class/enum forces you to be in <em>exactly one</em> state at a time, and the compiler will warn you if you forget to handle a case in your <code>when</code>/<code>switch</code>.</p>
        {platform === "Android" ? (
          <Section title="💡 Show me the sealed interface skeleton">
            <Code title="Kotlin — fill in your type name and data type">{`sealed interface _____UiState {
    object Loading : _____UiState
    data class Success(val items: List<_____>) : _____UiState
    data class Error(val message: String) : _____UiState
}`}</Code>
          </Section>
        ) : (
          <Section title="💡 Show me the enum skeleton">
            <Code title="Swift — fill in your type name and data type">{`enum _____UiState {
    case loading
    case success([_____])
    case error(String)
}`}</Code>
          </Section>
        )}
        <Section title="✅ Check your work — show me the complete model file">
          <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 8px" }}>Your type names should match your app's domain — this shows the expected shape:</p>
          {platform === "Android" ? (
            <Code title="Kotlin — Movie.kt (complete)" accent={BL}>{`data class Movie(
    val id: Int,
    val title: String,
    val overview: String,
    val posterPath: String
)

sealed interface MovieUiState {
    object Loading : MovieUiState
    data class Success(val movies: List<Movie>) : MovieUiState
    data class Error(val message: String) : MovieUiState
}`}</Code>
          ) : (
            <Code title="Swift — Movie.swift (complete)" accent={GR}>{`struct Movie: Identifiable, Decodable {
    let id: Int
    let title: String
    let overview: String
    let posterPath: String

    enum CodingKeys: String, CodingKey {
        case id, title, overview
        case posterPath = "poster_path"
    }
}

enum MovieUiState {
    case loading
    case success([Movie])
    case error(String)
}`}</Code>
          )}
        </Section>
      </VStep>

      <Checkpoint num={1}>You now have a model file with your data class and UiState type. The file has <strong>no UI imports</strong> and <strong>no networking code</strong> in it.</Checkpoint>
    </VStep>

    {/* ─── Step 2: ViewModel ─── */}
    <VStep num={2} title="Create your ViewModel">
      <p>The ViewModel is the heart of the refactor — it replaces all the state variables and networking code that were previously inside your View. Create a new file (e.g., <code>{platform === "Android" ? "MovieViewModel.kt" : "MovieViewModel.swift"}</code>) and build it up in three sub-steps.</p>

      <VStep num="a" title="Scaffold the ViewModel class">
        <p>Write the class declaration and add the required imports. The key thing here is what your class <em>extends</em> or <em>conforms to</em>:</p>
        <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
          {platform === "Android" ? (
            <>
              <li><strong>Extend <code>ViewModel()</code>.</strong> This is a Jetpack lifecycle class. The framework keeps your ViewModel instance alive across screen rotations — when the user rotates their phone, the Composable is recreated but the ViewModel is not. Your data survives.</li>
              <li>Add these imports: <code>androidx.lifecycle.ViewModel</code>, <code>androidx.lifecycle.viewModelScope</code>, <code>kotlinx.coroutines.flow.MutableStateFlow</code>, <code>kotlinx.coroutines.flow.StateFlow</code>, <code>kotlinx.coroutines.launch</code></li>
              <li><strong>Do not import Compose.</strong> No <code>androidx.compose</code> imports in this file.</li>
            </>
          ) : (
            <>
              <li><strong>Conform to <code>ObservableObject</code>.</strong> This protocol lets SwiftUI Views subscribe to changes in this class — whenever a <code>@Published</code> property changes, every observing View re-renders.</li>
              <li><strong>Add <code>@MainActor</code> to the class.</strong> UI state updates must happen on the main thread. Marking the whole class <code>@MainActor</code> ensures this automatically, so you don't need to think about it per-function.</li>
              <li>Import <code>Foundation</code>. <strong>Do not import SwiftUI.</strong></li>
            </>
          )}
        </ul>
        <Section title="✅ Check your work — ViewModel with class declaration only">
          {platform === "Android" ? (
            <Code title="Kotlin — MovieViewModel.kt (class shell)" accent={BL}>{`import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class MovieViewModel : ViewModel() {
    // state and fetch function go here
}`}</Code>
          ) : (
            <Code title="Swift — MovieViewModel.swift (class shell)" accent={GR}>{`import Foundation

@MainActor
class MovieViewModel: ObservableObject {
    // state and fetch function go here
}`}</Code>
          )}
        </Section>
      </VStep>

      <VStep num="b" title="Add the UI state properties">
        <p>Inside your class, add the properties that hold the current UI state. The rule is <strong>private write, public read</strong>: only the ViewModel can change state, but any View can observe it.</p>
        {platform === "Android" ? (
          <>
            <p>You need two properties:</p>
            <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
              <li>A <code>private val _uiState</code> using <code>MutableStateFlow</code> — the internal one you'll update. Start it at <code>Loading</code>.</li>
              <li>A <code>val uiState: StateFlow</code> that exposes the internal one as read-only using <code>= _uiState</code>. The View will collect this one.</li>
            </ul>
            <p>The underscore prefix on <code>_uiState</code> is a Kotlin convention for "the private backing property." The public <code>uiState</code> is what consumers use.</p>
          </>
        ) : (
          <>
            <p>Add one <code>@Published</code> property that holds the current state, initialized to <code>.loading</code>:</p>
            <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
              <li><code>@Published</code> is the magic: whenever this property changes, SwiftUI automatically re-renders any View that's watching this ViewModel.</li>
              <li>Add <code>private(set)</code> between the property wrapper and <code>var</code> so the View can only read, never write.</li>
            </ul>
          </>
        )}
        <Section title="✅ Check your work — ViewModel with state properties">
          {platform === "Android" ? (
            <Code title="Kotlin — MovieViewModel.kt (with state)" accent={BL}>{`import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class MovieViewModel : ViewModel() {

    private val _uiState = MutableStateFlow<MovieUiState>(MovieUiState.Loading)
    val uiState: StateFlow<MovieUiState> = _uiState

    // fetch function goes here (Step 2c)
}`}</Code>
          ) : (
            <Code title="Swift — MovieViewModel.swift (with state)" accent={GR}>{`import Foundation

@MainActor
class MovieViewModel: ObservableObject {

    @Published private(set) var uiState: MovieUiState = .loading

    // fetch function goes here (Step 2c)
}`}</Code>
          )}
        </Section>
      </VStep>

      <VStep num="c" title="Move your API call into the ViewModel" last>
        <p>Now the big move: <strong>cut</strong> your networking code out of the View and <strong>paste</strong> it into a fetch function here. In your Week 4 app, the API call was probably inside <code>{platform === "Android" ? "LaunchedEffect(Unit) { ... }" : ".onAppear { ... } or .task { ... }"}</code>. Structure the new function like this:</p>
        <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li>Set state to <code>{platform === "Android" ? "MovieUiState.Loading" : ".loading"}</code> at the start</li>
          <li>Try the API call{platform === "Android" ? " inside viewModelScope.launch { } with a try/catch" : " inside a do/catch in an async function"}</li>
          <li>On success → set state to <code>{platform === "Android" ? "MovieUiState.Success(result)" : ".success(result)"}</code></li>
          <li>On failure → set state to <code>{platform === "Android" ? "MovieUiState.Error(e.message ?: \"Something went wrong\")" : ".error(error.localizedDescription)"}</code></li>
          <li>Call the function from <code>init {'{}'}</code> so loading starts automatically when the ViewModel is created</li>
        </ol>

        <AiOpp>
          <em>Use AI as a refactoring partner →</em> Paste your existing Week 4 networking code into Claude and ask: <strong>"I'm refactoring this into a ViewModel. Can you move the networking logic into a fetch function, wrap it in a try/catch, and set a sealed UiState based on the result? Don't change the actual API call — just move it and add the state transitions."</strong> Read what it gives you carefully before pasting it in.
        </AiOpp>

        <Warn>The ViewModel should <strong>never</strong> import any UI framework. No {platform === "Android" ? <><code>import androidx.compose.*</code></> : <><code>import SwiftUI</code></>} in this file. If you find yourself needing Compose or SwiftUI here, that code belongs in the View layer instead.</Warn>

        <Section title="✅ Check your work — show me the complete ViewModel">
          <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 8px" }}>Replace the placeholder comment with your actual Week 4 networking code — your class name and data types will differ:</p>
          {platform === "Android" ? (
            <Code title="Kotlin — MovieViewModel.kt (complete)" accent={BL}>{`import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class MovieViewModel : ViewModel() {

    private val _uiState = MutableStateFlow<MovieUiState>(MovieUiState.Loading)
    val uiState: StateFlow<MovieUiState> = _uiState

    init {
        fetchMovies()
    }

    fun fetchMovies() {
        _uiState.value = MovieUiState.Loading
        viewModelScope.launch {
            try {
                // Your Week 4 API call goes here — e.g.:
                val response = MovieApi.service.getMovies()
                _uiState.value = MovieUiState.Success(response.results)
            } catch (e: Exception) {
                _uiState.value = MovieUiState.Error(
                    e.message ?: "Something went wrong"
                )
            }
        }
    }
}`}</Code>
          ) : (
            <Code title="Swift — MovieViewModel.swift (complete)" accent={GR}>{`import Foundation

@MainActor
class MovieViewModel: ObservableObject {

    @Published private(set) var uiState: MovieUiState = .loading

    init() {
        Task { await fetchMovies() }
    }

    func fetchMovies() async {
        uiState = .loading
        do {
            // Your Week 4 API call goes here — e.g.:
            let response = try await MovieService.shared.fetchMovies()
            uiState = .success(response.results)
        } catch {
            uiState = .error(error.localizedDescription)
        }
    }
}`}</Code>
          )}
        </Section>
      </VStep>

      <Checkpoint num={2}>Your ViewModel file compiles with no errors. It exposes a <code>uiState</code> property, contains your networking logic, and has <strong>zero UI imports</strong>.</Checkpoint>
    </VStep>

    {/* ─── Step 3: Connect View to ViewModel ─── */}
    <VStep num={3} title="Connect your View to the ViewModel">
      <p>Now that the ViewModel holds all state and logic, your View's job becomes simple: observe the state and render it. This step has three parts — strip out the old state, wire in the ViewModel, and replace the rendering logic with a state-driven switch.</p>

      <VStep num="a" title="Clean up your View's state">
        <p>Open your main screen file. Near the top, you'll see state variables that were holding your data, loading flag, and error message — something like:</p>
        {platform === "Android" ? (
          <Code title="Kotlin — what to look for and DELETE">{`// These are going away — the ViewModel owns all of this now
var movies by remember { mutableStateOf<List<Movie>>(emptyList()) }
var isLoading by remember { mutableStateOf(true) }
var errorMessage by remember { mutableStateOf<String?>(null) }`}</Code>
        ) : (
          <Code title="Swift — what to look for and DELETE">{`// These are going away — the ViewModel owns all of this now
@State private var movies: [Movie] = []
@State private var isLoading = true
@State private var errorMessage: String? = nil`}</Code>
        )}
        <p>Delete all of these. Also remove the networking trigger that fired on load{platform === "Android" ? " (the LaunchedEffect block)" : " (the .onAppear or .task block)"}.</p>
        <Warn>Only remove state that tracks <em>data, loading, and errors</em>. Leave any <code>{platform === "Android" ? "remember" : "@State"}</code> variables that control purely visual things — like whether a search bar is expanded, which tab is selected, or whether a sheet is showing.</Warn>
        <Section title="✅ Check your work — View file after cleanup">
          <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 8px" }}>Your View should be <em>shorter</em> than before. If it got longer, you haven't removed enough.</p>
          {platform === "Android" ? (
            <Code title="Kotlin — MovieScreen.kt (state removed, not yet wired)" accent={BL}>{`@Composable
fun MovieScreen() {
    // state variables — gone
    // LaunchedEffect — gone
    // Only the layout skeleton remains; you'll wire the ViewModel next

    Column(modifier = Modifier.fillMaxSize()) {
        // your existing UI structure (now temporarily broken — that's fine)
    }
}`}</Code>
          ) : (
            <Code title="Swift — MovieView.swift (state removed, not yet wired)" accent={GR}>{`struct MovieView: View {
    // @State vars — gone
    // .onAppear / .task — gone
    // Only the layout structure remains; you'll wire the ViewModel next

    var body: some View {
        // your existing UI structure (now temporarily broken — that's fine)
    }
}`}</Code>
          )}
        </Section>
      </VStep>

      <VStep num="b" title="Add the ViewModel to your View">
        <p>Add the ViewModel as a property at the top of your View. {platform === "Android" ? "Pass it as a Composable parameter with a default value:" : "Declare it as a @StateObject property:"}</p>
        {platform === "Android" ? (
          <>
            <p>Write <code>viewModel: MovieViewModel = viewModel()</code> as a parameter. The <code>viewModel()</code> call (from <code>lifecycle-viewmodel-compose</code>) gives you the framework-managed instance — the same one survives rotation. The default value means you can also pass a different ViewModel in previews or tests.</p>
            <p>Then collect the StateFlow as Compose state with one line inside the function body:</p>
            <Code title="Kotlin — collecting StateFlow">{`val uiState by viewModel.uiState.collectAsState()`}</Code>
          </>
        ) : (
          <p><code>@StateObject</code> means this View <em>owns</em> the ViewModel — SwiftUI creates it once when the View appears and keeps the same instance for the View's entire lifetime. If you ever receive a ViewModel <em>passed in</em> from a parent, you'd use <code>@ObservedObject</code> instead — but for now, <code>@StateObject</code> is what you want.</p>
        )}
        <Section title="✅ Check your work — View file with ViewModel wired in">
          {platform === "Android" ? (
            <Code title="Kotlin — MovieScreen.kt (ViewModel connected)" accent={BL}>{`@Composable
fun MovieScreen(
    viewModel: MovieViewModel = viewModel()
) {
    val uiState by viewModel.uiState.collectAsState()

    // uiState is now available — replace rendering logic in Step 3c
    Column(modifier = Modifier.fillMaxSize()) {
        // content goes here
    }
}`}</Code>
          ) : (
            <Code title="Swift — MovieView.swift (ViewModel connected)" accent={GR}>{`struct MovieView: View {
    @StateObject private var viewModel = MovieViewModel()

    var body: some View {
        // viewModel.uiState is now available — replace rendering logic in Step 3c
        Group {
            // content goes here
        }
    }
}`}</Code>
          )}
        </Section>
      </VStep>

      <VStep num="c" title="Render based on UiState" last>
        <p>Replace your old conditional rendering (the <code>if isLoading ... else if errorMessage != nil ...</code> pattern) with a single <code>{platform === "Android" ? "when (uiState)" : "switch viewModel.uiState"}</code> that handles all three cases. This is the payoff: the View makes no decisions anymore — it just reacts to whatever state the ViewModel publishes.</p>
        <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li><strong>Loading</strong> → show a spinner or shimmer. No data to display yet.</li>
          <li><strong>Success</strong> → render your list using the items from the success case.</li>
          <li><strong>Error</strong> → show the error message and a Retry button that calls <code>{platform === "Android" ? "viewModel.fetchMovies()" : "Task { await viewModel.fetchMovies() }"}</code>.</li>
        </ul>
        <Tip>Notice how clean the View is now. It only decides <em>what to show</em> based on the current state. The logic for <em>what the state should be</em> lives entirely in the ViewModel.</Tip>
        <Section title="✅ Check your work — show me the complete View file">
          {platform === "Android" ? (
            <Code title="Kotlin — MovieScreen.kt (complete)" accent={BL}>{`@Composable
fun MovieScreen(
    viewModel: MovieViewModel = viewModel()
) {
    val uiState by viewModel.uiState.collectAsState()

    when (uiState) {
        is MovieUiState.Loading -> {
            Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                CircularProgressIndicator()
            }
        }
        is MovieUiState.Success -> {
            val movies = (uiState as MovieUiState.Success).movies
            LazyColumn(modifier = Modifier.fillMaxSize()) {
                items(movies) { movie ->
                    // Your existing movie row composable
                }
            }
        }
        is MovieUiState.Error -> {
            val message = (uiState as MovieUiState.Error).message
            Column(
                modifier = Modifier.fillMaxSize(),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(text = message, color = MaterialTheme.colorScheme.error)
                Spacer(modifier = Modifier.height(8.dp))
                Button(onClick = { viewModel.fetchMovies() }) {
                    Text("Retry")
                }
            }
        }
    }
}`}</Code>
          ) : (
            <Code title="Swift — MovieView.swift (complete)" accent={GR}>{`struct MovieView: View {
    @StateObject private var viewModel = MovieViewModel()

    var body: some View {
        Group {
            switch viewModel.uiState {
            case .loading:
                ProgressView()
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
            case .success(let movies):
                List(movies) { movie in
                    // Your existing movie row view
                }
            case .error(let message):
                VStack(spacing: 12) {
                    Text(message)
                        .foregroundColor(.red)
                    Button("Retry") {
                        Task { await viewModel.fetchMovies() }
                    }
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            }
        }
    }
}`}</Code>
          )}
        </Section>
      </VStep>

      <Checkpoint num={3}>Run your app. It should behave <strong>exactly the same as before</strong> — loading state, data displayed, error handling all work. The difference is entirely in how the code is organized.</Checkpoint>
    </VStep>

    {/* ─── Step 4: Verify separation ─── */}
    <VStep num={4} title="Verify the separation" last>
      <p>Let's confirm the refactor is truly clean. Go through each file and check these three rules:</p>
      <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
        <li><strong>Model file</strong> — contains only data classes/structs and the UiState type. No imports from UI or networking libraries.</li>
        <li><strong>ViewModel file</strong> — contains networking logic and state management. Imports {platform === "Android" ? "lifecycle and coroutines" : "Foundation"} but <strong>not</strong> {platform === "Android" ? "Compose" : "SwiftUI"}.</li>
        <li><strong>View file</strong> — contains only UI code. Reads from the ViewModel but never calls an API directly.</li>
      </ol>

      <AiOpp>
        <em>Use AI for a code review →</em> Paste all three files into Claude and ask: <strong>"Review my MVVM refactor. Does anything in the View layer belong in the ViewModel, or vice versa? Are there any architecture violations?"</strong>
      </AiOpp>

      <Checkpoint num={4}>Your refactored app has at least 3 files — Model, ViewModel, and View — with clean separation between them. The app works identically to before.</Checkpoint>
    </VStep>

    <Section title="💡 Hints">
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        {platform === "Android" ? (
          <>
            <p><strong>My app crashes when I add the ViewModel</strong></p>
            <p style={{ marginLeft: 16 }}>Make sure you have the <code>lifecycle-viewmodel-compose</code> dependency in your <code>build.gradle</code>. Also ensure you're using <code>viewModel()</code> from <code>androidx.lifecycle.viewmodel.compose</code>, not instantiating the ViewModel with its constructor directly.</p>
            <p><strong>What's the difference between StateFlow and MutableStateFlow?</strong></p>
            <p style={{ marginLeft: 16 }}><code>MutableStateFlow</code> lets you change the value. <code>StateFlow</code> is read-only. The pattern: the ViewModel uses <code>MutableStateFlow</code> internally, but exposes it as <code>StateFlow</code> so the View can only read, never write.</p>
            <p><strong>Do I need Hilt or dependency injection?</strong></p>
            <p style={{ marginLeft: 16 }}>Not yet. Using the default <code>viewModel()</code> function is enough for now. We'll look at dependency injection later if your capstone needs it.</p>
          </>
        ) : (
          <>
            <p><strong>What's the difference between @StateObject and @ObservedObject?</strong></p>
            <p style={{ marginLeft: 16 }}><code>@StateObject</code> creates and <em>owns</em> the ViewModel — use this in the parent View that creates it. <code>@ObservedObject</code> observes a ViewModel passed in from a parent. For now, use <code>@StateObject</code>.</p>
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
        <li>Add a <strong>Repository layer</strong> between the ViewModel and the network call. The ViewModel calls <code>repository.getMovies()</code> and doesn't know whether the data comes from the network or a local cache.</li>
        <li>Extract your networking code into a separate <strong>API Service</strong> file so the ViewModel doesn't contain raw HTTP logic.</li>
        <li>Add a <strong>pull-to-refresh</strong> gesture that calls <code>{platform === "Android" ? "viewModel.fetchMovies()" : "Task { await viewModel.fetchMovies() }"}</code> to reload data.</li>
      </ul>
    </Section>
  </div>
);

const LabSession2 = ({ platform }) => (
  <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 6 Lab: Capstone Planning & Google Stitch</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
      In this lab, you'll meet with your capstone group to solidify your project idea and set up your planning documents. Then, you'll use the <strong>Google Stitch MCP</strong> you learned about today to generate initial wireframes and UI code for your core screens.
    </p>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <strong>🎯 Goals</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
        <li>Brainstorm and decide on a capstone idea with your team</li>
        <li>Draft your capstone proposal</li>
        <li>Set up your shared GitHub repository</li>
        <li>Connect the Google Stitch MCP to Claude</li>
        <li>Generate design systems and wireframes for your core screens</li>
      </ul>
    </div>

    {/* ─── Step 0: Brainstorm ─── */}
    <VStep num={0} title="Brainstorm and decide on your app idea">
      <p>Sit with your group and begin by brainstorming app ideas together. Before jumping to solutions, discuss these questions as a team:</p>
      <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
        <li><strong>What problem do you want to solve?</strong> Think about your daily life — what's annoying, inefficient, or missing an app?</li>
        <li><strong>Who is the user?</strong> Students? Pet owners? Gym-goers? Having a clear audience helps you scope features.</li>
        <li><strong>What data will you need?</strong> Will you use a public API, or store data locally? Check that a free API actually exists for your idea.</li>
      </ol>

      <AiOpp>
        <em>Use AI for brainstorming →</em> Ask Claude: <strong>"My team has 4 weeks to build a {platform === "Android" ? "native Android (Kotlin + Jetpack Compose)" : "native iOS (Swift + SwiftUI)"} app. We are interested in [topic]. Can you give us 5 app ideas that are technically feasible for beginners but still impressive? For each idea, include: a one-sentence pitch, 3 core features, and a suggested free public API."</strong>
      </AiOpp>

      <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", margin: "12px 0" }}>
        <p style={{ fontWeight: 600, margin: "0 0 6px" }}>🤔 How to pick from your shortlist</p>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li><strong>Scope it down ruthlessly.</strong> A polished app with 3 great screens beats a half-finished app with 10. You can always add screens later.</li>
          <li><strong>Make sure the API works.</strong> Before committing, have one person open the API docs and verify you can actually get data back (try it in a browser or Postman).</li>
          <li><strong>Play to your team's strengths.</strong> If someone has experience with maps, lean into a location-based idea. If someone loves design, pick something visual.</li>
          <li><strong>Avoid ideas that require a custom backend.</strong> Stick to public APIs + local storage (Room/Core Data) for now. Firebase is fine if your team is comfortable with it.</li>
        </ul>
      </div>

      <p style={{ marginTop: 12 }}>Once your team has agreed on an idea, fill out the <strong>capstone proposal template</strong> (found in the Capstone tab). Work through it together — don't let one person do it alone.</p>
      <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
        <li>Define your <strong>core features</strong> (must-haves for the demo) vs. stretch goals</li>
        <li>Identify your <strong>primary data models</strong> (e.g., "a Recipe has a title, image URL, ingredients list, and cook time")</li>
        <li>Sketch out the <strong>3 most important screens</strong> — even a rough drawing on paper works</li>
      </ul>
      <Checkpoint num={0}>Your team has agreed on an app idea, verified your API exists, and completed the capstone proposal template.</Checkpoint>
    </VStep>

    {/* ─── Step 1: Shared repo ─── */}
    <VStep num={1} title="Set up your shared GitHub repository">
      <p>Now that you know what you're building, you need a shared home for your code. <strong>One person drives</strong> — everyone else watches and follows along.</p>
      
      <Tip>If you've already completed the <strong>GitHub Organization Bonus Lab</strong>, you can skip the org/repo creation steps below and jump straight to cloning. If not, follow along — this is the abbreviated version.</Tip>

      <VStep num="a" title="Create a GitHub Organization">
        <p>A GitHub Organization keeps your project under a shared team account instead of one person's personal account.</p>
        <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li>Go to <code>github.com/organizations/new</code></li>
          <li>Select the <strong>Free</strong> plan</li>
          <li>Name your organization — use your app name or team name (e.g., <code>pantrypal-team</code>)</li>
          <li>Set the contact email to your own email, select "personal account," and click <strong>Next</strong></li>
          <li>Skip the "invite members" screen for now — you'll do that next</li>
        </ol>
        <Warn>Organization names are <strong>globally unique</strong> on GitHub and hard to change later. Choose carefully — your repo URLs will include this name.</Warn>
      </VStep>

      <VStep num="b" title="Create the repository inside the org">
        <p>From your new org's dashboard, create the capstone repository:</p>
        <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li>Click the green <strong>Create a new repository</strong> button</li>
          <li>Make sure the <strong>Owner</strong> dropdown shows your <em>org name</em>, not your personal username</li>
          <li>Name the repo (e.g., <code>pantrypal-android</code> or <code>travelbuddy-ios</code>)</li>
          <li>Set visibility to <strong>Private</strong> (you can make it public before the demo)</li>
          <li>Check <strong>Add a README file</strong></li>
          <li>Under <strong>Add .gitignore</strong>, select <code>{platform === "Android" ? "Android" : "Swift"}</code> from the template dropdown</li>
          <li>Choose <strong>MIT License</strong></li>
          <li>Click <strong>Create repository</strong></li>
        </ol>
      </VStep>

      <VStep num="c" title="Invite your teammates">
        <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li>From your org page, go to <strong>Settings → Members</strong> (under "Access" in the sidebar)</li>
          <li>Click <strong>Invite member</strong></li>
          <li>Search for each teammate's GitHub username or email and send invitations</li>
          <li>Each teammate must <strong>accept the invitation</strong> (check email or GitHub notifications)</li>
        </ol>
        <Tip>Have everyone accept their invitations right now before moving on. You can see pending invitations under the "Pending invitations" tab on the same Members page.</Tip>
      </VStep>

      <VStep num="d" title="Everyone clones the repo" last>
        <p>Once all invitations are accepted, <strong>every team member</strong> should clone the repo to their machine:</p>
        <Code title="Terminal">{`git clone https://github.com/[org-name]/[repo-name].git
cd [repo-name]`}</Code>
        {platform === "Android" ? (
          <p>Open <strong>Android Studio → New Project</strong> and create a new Empty Compose Activity project <em>inside</em> the cloned folder. Make sure the project files land in the repo directory, not a subdirectory inside it.</p>
        ) : (
          <p>Open <strong>Xcode → Create New Project</strong> and create a new SwiftUI App <em>inside</em> the cloned folder. When Xcode asks where to save, navigate to your cloned repo directory.</p>
        )}
        <p>Then commit and push the initial project scaffold:</p>
        <Code title="Terminal">{`git add .
git commit -m "Initial ${platform === "Android" ? "Compose" : "SwiftUI"} project scaffold"
git push origin main`}</Code>
      </VStep>

      <Checkpoint num={1}>Every team member has the project cloned, the app compiles and runs (even if it's just the default template screen), and the initial commit is visible on GitHub.</Checkpoint>
    </VStep>

    {/* ─── Step 2: Google Stitch ─── */}
    <VStep num={2} title="Set up and use Google Stitch MCP">
      <p>With your core screens identified and your repo ready, it's time to use the <strong>Google Stitch MCP</strong> to generate initial UI designs and code. This is the tool your instructor demoed in the lecture.</p>

      <VStep num="a" title="Connect the Stitch MCP to Claude">
        <p>Before you can use Google Stitch, you need to add it as an MCP server in Claude Desktop. Follow these steps:</p>
        <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li>Open <strong>Claude Desktop</strong> (not the web version — MCP only works in the desktop app)</li>
          <li>Go to <strong>Settings</strong> (click the gear icon or <code>Cmd/Ctrl + ,</code>)</li>
          <li>Click <strong>Developer</strong> in the left sidebar, then click <strong>Edit Config</strong></li>
          <li>This opens a JSON file. Add the Stitch MCP server configuration:</li>
        </ol>
        <Code title="claude_desktop_config.json">{`{
  "mcpServers": {
    "stitch": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/stitch-mcp"]
    }
  }
}`}</Code>
        <Warn>If you already have other MCP servers configured, add the <code>"stitch"</code> entry inside the existing <code>"mcpServers"</code> object — don't replace the whole file. Make sure your JSON is valid (watch for missing commas).</Warn>
        <ol start={5} style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li><strong>Restart Claude Desktop</strong> completely (quit and reopen, don't just close the window)</li>
          <li>Look for the <strong>🔌 MCP icon</strong> (or a hammer icon) at the bottom of the chat input — it should show "stitch" as a connected server</li>
          <li>If you don't see it, check the JSON for typos and restart again</li>
        </ol>
        <Section title="✅ Check your work">
          Click the MCP icon in Claude Desktop. You should see "stitch" listed as a connected server with available tools like <code>create_design_system</code> and <code>generate_screen_from_text</code>.
        </Section>
      </VStep>

      <VStep num="b" title="Create a design system for your app">
        <p>A design system defines the visual identity of your app — colors, fonts, and shape. Ask Claude to create one via Stitch:</p>
        <Code title="Example prompt">{`I am building a ${platform === "Android" ? "native Android (Jetpack Compose)" : "native iOS (SwiftUI)"} capstone app called [YOUR APP NAME].

It is a [one-sentence description — e.g., "a recipe discovery app that helps college students find quick meals based on ingredients they have"].

The vibe is [describe the feel — e.g., "warm and friendly, with earthy tones" or "sleek and modern, dark mode preferred"].

Please create a Google Stitch design system for this app with appropriate colors, typography, and corner roundness.`}</Code>
        <p>Claude will call the Stitch MCP and create a design system. You'll see a confirmation with the design system details (colors, fonts, etc.).</p>
        <Tip>Be specific about the "vibe." Saying "modern and clean" gives very different results than "playful and colorful." The more descriptive you are, the better the output.</Tip>
      </VStep>

      <VStep num="c" title="Generate wireframes for your 3 core screens">
        <p>Now use Stitch to generate <strong>visual designs</strong> for your core screens. This is the same two-step process your instructor demoed in the lecture: first, Stitch creates the design — then Claude writes the code. Right now, you're just doing the <em>design</em> part.</p>
        <Tip>You don't need to leave Claude to do this. When you ask Claude to generate screens "using Google Stitch," Claude communicates with Stitch through the MCP you just set up — all behind the scenes. After the designs are generated, Claude will provide a link where you can view the wireframes visually.</Tip>
        <p><strong>Be detailed</strong> in your descriptions — the more specific you are about what elements should be on each screen, the better the wireframe will be. Think about layout, components, and content.</p>
        <Code title="Example prompt">{`Using the design system we just created, please generate the following screen designs for my app using Google Stitch:

Screen 1 — Home/List Screen:
- A top app bar with the app name and a search icon
- A vertical scrolling list of cards
- Each card shows: an image on the left, a title and subtitle on the right, and a small heart/favorite icon
- A floating action button in the bottom-right corner

Screen 2 — Detail Screen:
- A large hero image at the top (full width)
- Below the image: title, rating (stars), and a description paragraph
- A row of action buttons: "Save", "Share", "Directions"
- A scrollable section below with additional details

Screen 3 — Profile/Settings Screen:
- A circular avatar at the top with the user's name below it
- A list of settings options with icons (Notifications, Theme, About, Log Out)
- Each option is a tappable row with a chevron on the right`}</Code>
        <p>Stitch will generate <strong>visual wireframes</strong> — mockups of what each screen looks like, using the colors, fonts, and shapes from your design system. These are designs, not code yet.</p>
        <AiOpp>
          <em>Iterate on the wireframes →</em> The first result won't be perfect — and that's expected! This is where prompting specificity (from the lecture) matters. Try follow-up prompts like:
          <ul style={{ paddingLeft: 18, margin: "6px 0 0" }}>
            <li><strong>"Make the cards taller with the image on top instead of the left"</strong></li>
            <li><strong>"Generate a variant of Screen 2 with a dark background"</strong></li>
            <li><strong>"Can you edit Screen 3 to add a header section with usage stats?"</strong></li>
          </ul>
        </AiOpp>
        <Tip>Spend time here! These wireframes become the blueprint for your entire app. It's much easier to rearrange a layout in Stitch than to rewrite {platform === "Android" ? "Compose" : "SwiftUI"} code later. Don't move on until your team is happy with all 3 screens.</Tip>
        <Section title="✅ Check your work">
          You should have 3 generated screen designs in Stitch that your team is happy with. Each one should visually match your app's concept and use your design system's colors and typography. <strong>Don't close this chat</strong> — you'll use these designs in the next step.
        </Section>
      </VStep>

      <VStep num="d" title="Generate code from your wireframes">
        <p>Now comes the second phase of the workflow you saw in the demo: <strong>Claude translates the Stitch wireframes into actual {platform === "Android" ? "Jetpack Compose" : "SwiftUI"} code</strong>. Stitch created the visual design — Claude writes the code that implements it.</p>
        <p>This is an important distinction: <strong>Stitch is a design tool</strong> (it decides how things look), and <strong>Claude is a code tool</strong> (it writes the implementation). They work together through MCP.</p>
        <Code title="Example prompt">{`Now please generate the ${platform === "Android" ? "Jetpack Compose (Kotlin)" : "SwiftUI (Swift)"} code for each of the 3 screens we just designed in Stitch. 

For each screen, create a separate ${platform === "Android" ? "@Composable function" : "View struct"} with placeholder/mock data. Use the design system's colors and typography. Name them:
${platform === "Android" ? "- HomeScreen\n- DetailScreen\n- ProfileScreen" : "- HomeView\n- DetailView\n- ProfileView"}`}</Code>
        <p>Claude will look at the Stitch-generated wireframes and produce {platform === "Android" ? "Kotlin" : "Swift"} code that matches the visual design.</p>
        <Section title="✅ Check your work">
          You should have {platform === "Android" ? "Compose" : "SwiftUI"} code for each of your 3 screens. The code should visually match the wireframes you approved in the previous step.
        </Section>
      </VStep>

      <VStep num="e" title="Review and save the generated code" last>
        <p>Before integrating anything, <strong>read through the generated code as a team</strong>. This is a learning opportunity — understanding AI-generated code is a skill you'll use constantly as a developer. Look for:</p>
        <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li>Does the code's layout match the wireframes you approved? If not, ask Claude to adjust.</li>
          <li>Are there hardcoded strings or data? (That's expected — you'll replace them with ViewModel data later.)</li>
          {platform === "Android" ? (
            <li>Does it use <code>@Composable</code> functions and Material 3 components? That's what we want.</li>
          ) : (
            <li>Does it use SwiftUI <code>View</code> structs? That's what we want.</li>
          )}
          <li>Can you identify where each visual element from the wireframe maps to a line of code?</li>
        </ul>
        <p>Copy each screen's code and save it into your project's View files. A good naming convention:</p>
        {platform === "Android" ? (
          <Code title="Suggested file structure">{`app/src/main/.../ui/screens/
├── HomeScreen.kt
├── DetailScreen.kt
└── ProfileScreen.kt`}</Code>
        ) : (
          <Code title="Suggested file structure">{`YourApp/Views/
├── HomeView.swift
├── DetailView.swift
└── ProfileView.swift`}</Code>
        )}
      </VStep>

      <Checkpoint num={2}>Your team has a design system, 3 approved wireframes, and the generated {platform === "Android" ? "Compose" : "SwiftUI"} code saved into your project's View files.</Checkpoint>
    </VStep>

    {/* ─── Step 3: Integrate ─── */}
    <VStep num={3} title="Integrate and run the generated screens" last>
      <p>Now wire up the generated screens so your app actually displays them. This is a quick integration — the goal is to see your wireframes running on a device or emulator, not to add business logic yet.</p>
      <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
        <li><strong>Paste each screen</strong> into its own file in your project's View layer (see the file structure above).</li>
        <li><strong>Fix any import errors.</strong> The generated code may reference libraries you haven't added yet. {platform === "Android" ? "Check your `build.gradle` for missing dependencies (Material 3, Coil for images, etc.)." : "Check that you have any required packages added to your project."}</li>
        <li><strong>Update your main entry point</strong> to display one of the screens. {platform === "Android" ? "In your `MainActivity.kt`, replace the default content with your `HomeScreen()` composable." : "In your `ContentView.swift` or `App.swift`, replace the default view with your `HomeView()`."}</li>
        <li><strong>Build and run.</strong> You should see your generated screen on the emulator/simulator.</li>
      </ol>

      <Warn>The generated code uses <strong>hardcoded mock data</strong> (placeholder text, dummy image URLs). This is intentional — your job in the coming weeks is to replace this with real data flowing from your ViewModel and API. Don't try to wire up the ViewModel today.</Warn>

      <p>Once the app runs, <strong>commit and push</strong> your work:</p>
      <Code title="Terminal">{`git add .
git commit -m "Add initial Stitch-generated UI screens"
git push origin main`}</Code>

      <Checkpoint num={3}>Your capstone app runs on a device/emulator displaying the initial wireframes generated by Stitch. The code is pushed to your shared GitHub repo.</Checkpoint>
    </VStep>

    <Section title="💡 Team collaboration tips">
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        <p><strong>Divide and conquer during Stitch:</strong> Have one person drive the Claude + Stitch session while others draft the detailed screen descriptions on paper or in a shared doc. Switch the driver for each screen.</p>
        <p><strong>Review code together:</strong> Before pushing the generated UI code, sit together and read through each file. Make sure everyone understands how the layout is built — you'll all need to modify these screens later.</p>
        <p><strong>Don't skip the README:</strong> Update your repo's README with your app name, a one-sentence description, and your team members' names. This is the first thing anyone (including your instructor) sees.</p>
      </div>
    </Section>
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
        <li>☐ <strong>1-page capstone proposal</strong> (Saved as a file in your repository)</li>
        <li>☐ <strong>GitHub Organization & Repository</strong> created for your team</li>
        <li>☐ <strong>Project README</strong> initialized in your repo using the template below</li>
        <li>☐ <strong>Generated Wireframes</strong> (from the Stitch lab) embedded as images in your README</li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>📄 Proposal Template</h4>
      <p>Use the following template to create a <code>PROPOSAL.md</code> (or PDF) file in your repository. One submission per team — keep it to roughly one page.</p>

      <div style={{ background: "var(--color-background-secondary)", padding: "14px", borderRadius: 10, margin: "12px 0" }}>
        <div style={{ fontSize: 13, lineHeight: 1.9 }}>
          <p style={{ margin: "0 0 6px" }}><strong>App Name:</strong> [Your app's name]</p>
          <p style={{ margin: "0 0 6px" }}><strong>Platform:</strong> [Android / iOS]</p>
          <p style={{ margin: "0 0 6px" }}><strong>Team Members:</strong> [Name 1, Name 2, Name 3]</p>
          
          <p style={{ margin: "0 0 6px" }}><strong>The Problem:</strong> [1-2 sentences. What specific problem does this app solve?]</p>
          <p style={{ margin: "0 0 6px" }}><strong>Target Audience:</strong> [Who is the primary user of this app? Be specific (e.g., 'college students on a budget', not 'everyone').]</p>
          <p style={{ margin: "0 0 6px" }}><strong>The Solution:</strong> [2-3 sentences. How does your app solve the problem for your target audience?]</p>

          <p style={{ margin: "0 0 6px", marginTop: 12 }}><strong>Core Features</strong> (must-haves for demo day):</p>
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
          <p style={{ margin: "0 0 6px", marginTop: 12 }}><strong>Team Roles:</strong> [Who is responsible for which features/screens?]</p>
          <p style={{ margin: 0 }}><strong>APIs / Data Sources:</strong> [Any APIs you plan to use? Will the app need an LLM? On-device AI? Local storage?]</p>
        </div>
      </div>

      <Section title="📄 README.md Template">
        <p>Copy this markdown into your repository's <code>README.md</code> file. Be sure to replace the placeholder text and embed your wireframe screenshots!</p>
        <Code title="README.md">{`# [Your App Name]

*A brief, 1-2 sentence description of what your app does and who it is for.*

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Wireframes](#wireframes)
4. [Tech Stack](#tech-stack)
5. [Installation & Setup](#installation--setup)

---

## Overview
**The Problem:** [What specific problem does this app solve?]

**The Solution:** [How does your app solve the problem for your target audience?]

## Features
**Core Features**
- [ ] Feature 1 (e.g., User Authentication)
- [ ] Feature 2 (e.g., View List of Items)
- [ ] Feature 3 (e.g., Add/Edit Item)

**Stretch Features**
- [ ] Stretch 1 (e.g., Offline Caching)
- [ ] Stretch 2 (e.g., Push Notifications)

## Wireframes
[Replace the links below with the actual paths/URLs to your wireframe screenshots]

<div style="display: flex; gap: 10px;">
  <img src="link-to-image-1" width="200" alt="Home Screen"/>
  <img src="link-to-image-2" width="200" alt="Detail Screen"/>
  <img src="link-to-image-3" width="200" alt="Profile Screen"/>
</div>

## Tech Stack
- **Platform:** [Android / iOS]
- **Language:** [Kotlin / Swift]
- **Architecture:** MVVM
- **APIs & Data Sources:** [List APIs, Firebase, or local databases you plan to use]

## Installation & Setup
1. Clone the repository: \`git clone [your-repo-url]\`
2. Open the project in [Android Studio / Xcode]
3. [Add any specific setup steps here, e.g., "Add API key to local.properties"]
4. Build and run the app on a simulator or device.
`}</Code>
      </Section>

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
        <p style={{ margin: "6px 0 0" }}>One team member submits the <strong>link to your team's GitHub repository</strong> via the course portal. Your repository should contain both your <code>PROPOSAL.md</code> document and your <code>README.md</code> (which must include your Stitch wireframes). Your instructor will review these and may suggest scope adjustments before Week 7. <strong>Deadline: end of this week's Session 2.</strong></p>
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

      {tab === "Capstone" && <Capstone platform={platform} setPlatform={setPlatform} />}
      {tab === "Resources" && <Resources platform={platform} setPlatform={setPlatform} />}
    </div>
  );
}
