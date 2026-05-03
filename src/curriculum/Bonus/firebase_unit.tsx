import { useState } from "react";

const TABS = ["Overview", "Lab", "Resources"];

const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const T_C = "#1D9E75", TL = "#E1F5EE", TD = "#0F6E56";
const AND = "#3DDC84", ANDL = "#E8FBF0", ANDD = "#1E7A44";
const IOS = "#F05138", IOSL = "#FFF2F0", IOSD = "#B83A1F";
const AM = "#633806", AML = "#FAEEDA", AM_C = "#EF9F27";
const G = "#3B6D11", GL = "#EAF3DE";
const MUTED = "#6b7280";

/* ── Shared Components ─────────────────────────────────────────────────────── */

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

const VStep = ({ num, title, children, last = false }: { num: number | string; title: string; children: React.ReactNode; last?: boolean }) => (
  <div style={{ display: "flex", gap: 12 }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: P_C, color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{num}</div>
      {!last && <div style={{ width: 2, flex: 1, minHeight: 20, background: "var(--color-border-tertiary)", margin: "3px 0" }} />}
    </div>
    <div style={{ paddingBottom: last ? 8 : 24, flex: 1, minWidth: 0 }}>
      <h4 style={{ fontSize: 13, fontWeight: 600, margin: "3px 0 8px", color: "var(--color-text-primary)" }}>{title}</h4>
      <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
    </div>
  </div>
);

const Checkpoint = ({ num, children }: { num: number; children: React.ReactNode }) => (
  <div style={{ margin: "14px 0", padding: "10px 14px", background: GL, borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <strong>🎯 Checkpoint {num}:</strong> {children}
  </div>
);

const Warn = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: AML, borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: `3px solid ${AM_C}` }}>
    ⚠️ {children}
  </div>
);

const Tip = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: `3px solid ${P_C}` }}>
    💡 {children}
  </div>
);

const AiOpp = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "14px 0", padding: "10px 14px", background: PL, borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" as const }}>✨ AI Opportunity</div>
    {children}
  </div>
);

const CodeB = ({ children }: { children: React.ReactNode }) => (
  <pre style={{ margin: "8px 0", background: "#1e1e2e", color: "#cdd6f4", fontSize: 11.5, padding: "10px 14px", borderRadius: 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
    {children}
  </pre>
);

const IC = ({ children }: { children: React.ReactNode }) => (
  <code style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 4, padding: "1px 5px", fontSize: 12 }}>{children}</code>
);

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: P_C, textDecoration: "underline", cursor: "pointer" }}>{children}</a>
);

const Tag = ({ children, color = "purple" }: { children: React.ReactNode; color?: string }) => {
  const map: Record<string, { bg: string; fg: string }> = {
    purple: { bg: PL, fg: PD },
    teal:   { bg: TL, fg: TD },
    amber:  { bg: AML, fg: AM },
    green:  { bg: ANDL, fg: ANDD },
    ios:    { bg: IOSL, fg: IOSD },
  };
  const c = map[color] || map.purple;
  return <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" as const, background: c.bg, color: c.fg, padding: "2px 8px", borderRadius: 20 }}>{children}</span>;
};

const ResourceCard = ({ title, description, url, tag, tagColor = "purple" }: {
  title: string; description: string; url: string; tag: string; tagColor?: string;
}) => (
  <a href={url} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none", padding: "12px 14px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, marginBottom: 8, background: "var(--color-background-primary)", transition: "border-color .15s" }}
    onMouseEnter={e => (e.currentTarget.style.borderColor = P_C)}
    onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--color-border-tertiary)")}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: 0 }}>{title}</p>
      <Tag color={tagColor}>{tag}</Tag>
    </div>
    <p style={{ fontSize: 12, color: MUTED, margin: "4px 0 0", lineHeight: 1.5 }}>{description}</p>
  </a>
);

/* ══════════════════════ OVERVIEW ══════════════════════════════════════════════ */
const Overview = () => {
  const [platform, setPlatform] = useState<"Android" | "iOS">("Android");
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" as const }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Bonus: Multiplayer with Firebase</h2>
        <Tag color="green">Android</Tag>
        <Tag color="ios">iOS</Tag>
      </div>
      <p style={{ fontSize: 12, color: MUTED, margin: "0 0 4px" }}>Firebase Auth · Cloud Firestore · Real-time listeners</p>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
        You built a Trivia app earlier in this course — it works great, but only one person can play at a time on one device. In this unit you'll add a real cloud backend using Firebase so that a host can run a live game and players on other devices join, answer questions, and see the leaderboard update in real time. The gameplay you wire up by the end of this lab is the same core architecture that powers apps like Kahoot, Jackbox, and any other live multiplayer experience.
      </p>

      <div style={{ background: TL, border: `1px solid ${T_C}`, borderRadius: 8, padding: "12px 16px", margin: "0 0 16px" }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: TD, margin: "0 0 4px" }}>🏆 From local app to live multiplayer</p>
        <p style={{ fontSize: 13, color: TD, margin: 0, lineHeight: 1.6 }}>
          The starter code has all the UI built — every screen, every button, every animation. Your job is to replace the local placeholder functions with Firebase calls. By the end of this lab you'll play Trivia live with your classmates.
        </p>
      </div>

      {/* Room vs Firestore */}
      <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 10px" }}>Room vs Firestore — the mental model</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
        {[
          { label: "Room (what you know)", items: ["Stores data on-device only", "One user, one device", "Changes only visible after re-reading the DB", "Great for: offline-first, personal data"], accent: MUTED, bg: "var(--color-background-secondary)" },
          { label: "Firestore (what's new)", items: ["Stores data in Google's cloud", "Many users, many devices", "Real-time listeners — changes push to all clients instantly", "Great for: shared data, live collaboration"], accent: T_C, bg: TL },
        ].map(col => (
          <div key={col.label} style={{ background: col.bg, borderRadius: 8, padding: "12px 14px", border: `0.5px solid var(--color-border-tertiary)` }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: col.accent, textTransform: "uppercase" as const, letterSpacing: ".05em", margin: "0 0 8px" }}>{col.label}</p>
            <ul style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 4 }}>
              {col.items.map(item => <li key={item} style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Data model preview */}
      <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 10px" }}>How the game data is structured in Firestore</h3>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, margin: "0 0 8px" }}>
        Firestore is a document database. Think of <strong>collections</strong> as tables and <strong>documents</strong> as rows — except documents can hold nested data and sub-collections. Here's the shape of a live trivia game:
      </p>
      <CodeB>{`games/                          ← collection
  {gameId}/                     ← document (one per game)
    hostId:    "uid-abc123"
    status:    "waiting" | "active" | "finished"
    currentQuestion: 0          ← index the host advances
    questions: [ { text, options, correctIndex }, ... ]

    players/                    ← sub-collection
      {playerId}/               ← document (one per player)
        name:  "Alex"
        score: 200
        lastAnswer: 2           ← index of their last pick`}</CodeB>
      <Tip>The room code players type is just the first 6 characters of the Firestore <IC>gameId</IC> — no extra logic needed.</Tip>

      {/* Unit at a glance */}
      <h3 style={{ fontSize: 15, fontWeight: 600, margin: "20px 0 10px" }}>Unit at a glance</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[
          { icon: "🎮", label: "Lab", desc: "5 parts: Firebase setup → Auth → create a game → join & real-time listeners → play (full CRUD)" },
          { icon: "📡", label: "Firestore", desc: "Write, read, update, delete documents. Real-time snapshot listeners — the core of live multiplayer." },
          { icon: "🔐", label: "Auth", desc: "Host signs in with email/password. Players join with just a display name. Auth state persists across sessions." },
          { icon: "📚", label: "Resources", desc: "Firebase console, official setup guides, Firestore data modeling, security rules, and free-tier limits." },
        ].map(item => (
          <div key={item.label} style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 20, margin: "0 0 6px" }}>{item.icon}</p>
            <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 4px" }}>{item.label}</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Learning objectives */}
      <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 10px" }}>What you will learn</h3>
      <div style={{ fontSize: 13, lineHeight: 1.7, color: "var(--color-text-primary)" }}>
        {[
          "Set up a Firebase project and connect it to an Android or iOS app",
          "Authenticate a user with Firebase Auth (email/password)",
          "Create, read, update, and delete documents in Cloud Firestore",
          "Attach a real-time snapshot listener so all players see changes instantly",
          "Model relational data using Firestore sub-collections",
          "Explain when Firestore is the right choice vs. local persistence with Room or CoreData",
        ].map(obj => (
          <div key={obj} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
            <span style={{ color: T_C, fontWeight: 700, flexShrink: 0 }}>✓</span>
            <span>{obj}</span>
          </div>
        ))}
      </div>

      {/* Prerequisites */}
      <h3 style={{ fontSize: 15, fontWeight: 600, margin: "20px 0 10px" }}>Prerequisites</h3>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {(["Android", "iOS"] as const).map(p => (
          <button key={p} onClick={() => setPlatform(p)} style={{ padding: "5px 14px", fontSize: 12, fontWeight: platform === p ? 600 : 400, borderRadius: 6, border: `1.5px solid ${platform === p ? (p === "Android" ? AND : IOS) : "var(--color-border-tertiary)"}`, background: platform === p ? (p === "Android" ? ANDL : IOSL) : "var(--color-background-primary)", color: platform === p ? (p === "Android" ? ANDD : IOSD) : MUTED, cursor: "pointer" }}>
            {p === "Android" ? "🤖 Android" : "🍎 iOS"}
          </button>
        ))}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.7, color: "var(--color-text-primary)" }}>
        {(platform === "Android" ? [
          "Completed the Trivia app lab from the main curriculum (or any app with a working UI)",
          "Comfortable writing Kotlin with Jetpack Compose and ViewModels",
          "Android Studio installed with an emulator or physical Android device",
          "A Google account to access the Firebase console",
        ] : [
          "Completed the Trivia app lab from the main curriculum (or any app with a working UI)",
          "Comfortable writing Swift with SwiftUI and the MVVM pattern",
          "Xcode installed with a simulator or physical iOS device",
          "A Google account to access the Firebase console",
        ]).map(req => (
          <div key={req} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
            <span style={{ color: platform === "Android" ? AND : IOS, fontWeight: 700, flexShrink: 0 }}>▸</span>
            <span>{req}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ══════════════════════ ANDROID LAB ═══════════════════════════════════════════ */
const AndroidLab = () => (
  <div>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>Lab: Trivia — Android</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
      The starter project has all the UI built — screens, navigation, and a local question bank. Every Firebase interaction is stubbed out as a <IC>// TODO: Firebase</IC> comment inside <IC>GameViewModel.kt</IC>. Your job is to fill those in, part by part.
    </p>
    <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", marginBottom: 20, fontSize: 13, lineHeight: 1.7 }}>
      <strong>By the end of this lab you will have:</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 0" }}>
        <li>A live Firebase project wired to the Trivia app</li>
        <li>Host sign-in with Firebase Auth</li>
        <li>Game creation that writes to Firestore and generates a room code</li>
        <li>Players joining in real time and appearing in the lobby</li>
        <li>A full game loop — questions advancing, scores updating, leaderboard rendering</li>
      </ul>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
      <span style={{ fontSize: 20 }}>📦</span>
      <span><strong>Starter repo:</strong> <Link href="https://github.com/PaulLeung93/TriviaLive-Android-Starter">github.com/PaulLeung93/TriviaLive-Android-Starter</Link> — clone this before starting Part 1.</span>
    </div>

    {/* Part 1 */}
    <Section title="Part 1 — Firebase Project Setup" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        Before writing any Kotlin, you need a Firebase project in the console and a config file in your app.
      </p>

      <VStep num={1} title="Create a Firebase project">
        <p>Go to <Link href="https://console.firebase.google.com">console.firebase.google.com</Link> and sign in with your Google account.</p>
        <ol style={{ paddingLeft: 18, marginTop: 8, lineHeight: 2 }}>
          <li>Click <strong>Add project</strong></li>
          <li>Enter a project name (e.g. <IC>trivia-live</IC>)</li>
          <li>You can disable Google Analytics for this lab — it's not needed</li>
          <li>Click <strong>Create project</strong> and wait for provisioning to finish</li>
        </ol>
        <Tip>One Firebase project works for both Android and iOS. If your partner is doing the iOS lab, you can share the same project — just register both apps under it.</Tip>
      </VStep>

      <VStep num={2} title="Register your Android app">
        <p>From the project overview, click the <strong>Android icon</strong> to add an Android app.</p>
        <ol style={{ paddingLeft: 18, marginTop: 8, lineHeight: 2 }}>
          <li>Enter your app's <strong>package name</strong> — find it at the top of any Kotlin file or in <IC>app/build.gradle.kts</IC> under <IC>applicationId</IC></li>
          <li>The nickname and SHA-1 are optional for this lab — skip them</li>
          <li>Click <strong>Register app</strong></li>
        </ol>
      </VStep>

      <VStep num={3} title="Download and place google-services.json">
        <p>Click <strong>Download google-services.json</strong>. This file contains your project credentials — treat it like a password.</p>
        <p style={{ marginTop: 8 }}>Move the file into your <strong>app module directory</strong> — the same folder that contains your <IC>AndroidManifest.xml</IC>:</p>
        <CodeB>{`MyTriviaApp/
  app/
    google-services.json   ← place it here
    src/
      main/
        AndroidManifest.xml
        ...`}</CodeB>
        <Warn>Do not place it in the root project folder. It must be in the <IC>app/</IC> directory. Also add <IC>google-services.json</IC> to your <IC>.gitignore</IC> before committing.</Warn>
      </VStep>

      <VStep num={4} title="Add the Google Services plugin">
        <p>Open your <strong>root-level</strong> <IC>build.gradle.kts</IC> and add the plugin to the <IC>plugins</IC> block:</p>
        <CodeB>{`plugins {
    id("com.google.gms.google-services") version "4.4.4" apply false
}`}</CodeB>
        <p style={{ marginTop: 8 }}>Then open your <strong>app-level</strong> <IC>build.gradle.kts</IC> and apply it:</p>
        <CodeB>{`plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("com.google.gms.google-services")  // add this
}`}</CodeB>
      </VStep>

      <VStep num={5} title="Add Firebase SDK dependencies" last>
        <p>Still in the app-level <IC>build.gradle.kts</IC>, add the Firebase BOM and the two libraries you need:</p>
        <CodeB>{`dependencies {
    // Firebase BOM — controls all Firebase library versions together
    implementation(platform("com.google.firebase:firebase-bom:34.0.0"))

    // Auth and Firestore — no version numbers needed when using the BOM
    implementation("com.google.firebase:firebase-auth-ktx")
    implementation("com.google.firebase:firebase-firestore-ktx")
}`}</CodeB>
        <p style={{ marginTop: 8 }}>Click <strong>Sync Now</strong> in the banner that appears. The sync should complete without errors.</p>
        <Tip>The BOM (Bill of Materials) keeps all Firebase library versions in sync automatically. Always use it rather than specifying individual versions.</Tip>
      </VStep>

      <Checkpoint num={1}>Gradle sync completes with no errors. In Android Studio's External Libraries panel you can see <IC>firebase-auth-ktx</IC> and <IC>firebase-firestore-ktx</IC> listed.</Checkpoint>
    </Section>

    {/* Part 2 */}
    <Section title="Part 2 — Auth: Host Sign-In" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        The host creates and controls games — they need an account so Firestore knows who owns each game. Players just enter a display name, so they don't need full auth.
      </p>

      <VStep num={1} title="Enable Email/Password sign-in in the console">
        <p>In the Firebase console, go to <strong>Authentication → Sign-in method</strong>. Click <strong>Email/Password</strong>, toggle it <strong>Enabled</strong>, and save.</p>
      </VStep>

      <VStep num={2} title="Get a reference to FirebaseAuth">
        <p>Open <IC>GameViewModel.kt</IC>. At the top of the class, add a property for the Auth instance:</p>
        <CodeB>{`import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase

class GameViewModel : ViewModel() {
    private val auth = Firebase.auth
    // ...
}`}</CodeB>
      </VStep>

      <VStep num={3} title="Implement createAccount">
        <p>Find the <IC>// TODO: Firebase — createAccount</IC> comment and replace it:</p>
        <CodeB>{`fun createAccount(email: String, password: String) {
    auth.createUserWithEmailAndPassword(email, password)
        .addOnSuccessListener {
            // auth.currentUser is now set — navigate to the lobby
            _uiState.update { it.copy(isSignedIn = true) }
        }
        .addOnFailureListener { e ->
            _uiState.update { it.copy(errorMessage = e.message) }
        }
}`}</CodeB>
      </VStep>

      <VStep num={4} title="Implement signIn" last>
        <p>Find the <IC>// TODO: Firebase — signIn</IC> comment and replace it:</p>
        <CodeB>{`fun signIn(email: String, password: String) {
    auth.signInWithEmailAndPassword(email, password)
        .addOnSuccessListener {
            _uiState.update { it.copy(isSignedIn = true) }
        }
        .addOnFailureListener { e ->
            _uiState.update { it.copy(errorMessage = e.message) }
        }
}

// Call this in init{} so returning users skip the login screen
init {
    if (auth.currentUser != null) {
        _uiState.update { it.copy(isSignedIn = true) }
    }
}`}</CodeB>
        <AiOpp>
          The starter code only handles success and failure. Ask Claude: <em>"How should I handle the loading state between when signIn() is called and when the result comes back? Show me how to add an isLoading flag to the UiState and update the button in the composable."</em>
        </AiOpp>
      </VStep>

      <Checkpoint num={2}>Run the app. Tap <strong>Host a Game</strong>, create an account, and sign in. The app should navigate past the login screen. In the Firebase console under Authentication → Users, you should see your new account appear.</Checkpoint>
    </Section>

    {/* Part 3 */}
    <Section title="Part 3 — Create a Game (Firestore Write)" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        When the host taps "New Game," you create a document in Firestore. The document ID becomes the room code players use to join.
      </p>

      <VStep num={1} title="Enable Firestore and set test rules">
        <p>In the Firebase console, go to <strong>Firestore Database → Create database</strong>. Choose <strong>Start in test mode</strong> — this allows open reads and writes for 30 days so you can develop without worrying about rules yet.</p>
        <Warn>Test mode rules expire after 30 days and leave your database open to anyone. Before sharing your app or adding real user data, set up proper Security Rules. See the Resources tab for a guide.</Warn>
      </VStep>

      <VStep num={2} title="Get a Firestore reference">
        <p>Back in <IC>GameViewModel.kt</IC>, add a Firestore property below your <IC>auth</IC> property:</p>
        <CodeB>{`import com.google.firebase.firestore.ktx.firestore

private val db = Firebase.firestore`}</CodeB>
      </VStep>

      <VStep num={3} title="Implement createGame" last>
        <p>Find the <IC>// TODO: Firebase — createGame</IC> comment. You'll write the game document using a <IC>HashMap</IC> and let Firestore auto-generate the ID:</p>
        <CodeB>{`fun createGame() {
    val uid = auth.currentUser?.uid ?: return

    val gameData = hashMapOf(
        "hostId"          to uid,
        "status"          to "waiting",
        "currentQuestion" to 0,
        "questions"       to questions.map { q ->
            hashMapOf(
                "text"         to q.text,
                "options"      to q.options,
                "correctIndex" to q.correctIndex
            )
        }
    )

    db.collection("games")
        .add(gameData)
        .addOnSuccessListener { docRef ->
            val roomCode = docRef.id.take(6).uppercase()
            _uiState.update { it.copy(gameId = docRef.id, roomCode = roomCode) }
        }
        .addOnFailureListener { e ->
            _uiState.update { it.copy(errorMessage = e.message) }
        }
}`}</CodeB>
        <Tip><IC>.take(6).uppercase()</IC> converts the full Firestore document ID (e.g. <IC>xK9mRqLpNv2w</IC>) into a short room code players can type (e.g. <IC>XK9MRQ</IC>).</Tip>
      </VStep>

      <Checkpoint num={3}>Tap <strong>New Game</strong> in the app. A 6-character room code should appear on screen. In the Firebase console, open Firestore Database and confirm a new document appeared under the <IC>games</IC> collection with <IC>status: "waiting"</IC>.</Checkpoint>
    </Section>

    {/* Part 4 */}
    <Section title="Part 4 — Join &amp; Real-Time Listeners" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        This is the part where Firebase stops feeling like a database and starts feeling like magic. A snapshot listener fires every time the document changes — no polling, no refresh button.
      </p>

      <VStep num={1} title="Implement joinGame — write the player document">
        <p>When a player enters a room code and their name, two things happen: their player document is created in the <IC>players</IC> sub-collection, and a listener is attached to the game document. Find the <IC>// TODO: Firebase — joinGame</IC> comment:</p>
        <CodeB>{`fun joinGame(roomCode: String, playerName: String) {
    // Room code is the first 6 chars of the gameId (uppercase)
    // Query for the matching game document
    db.collection("games")
        .whereGreaterThanOrEqualTo("__name__", roomCode.lowercase())
        .get()
        .addOnSuccessListener { result ->
            val gameDoc = result.documents.firstOrNull {
                it.id.take(6).uppercase() == roomCode.uppercase()
            } ?: run {
                _uiState.update { it.copy(errorMessage = "Game not found") }
                return@addOnSuccessListener
            }

            val gameId = gameDoc.id
            val playerData = hashMapOf("name" to playerName, "score" to 0)

            db.collection("games").document(gameId)
                .collection("players")
                .add(playerData)
                .addOnSuccessListener { playerRef ->
                    _uiState.update { it.copy(
                        gameId    = gameId,
                        playerId  = playerRef.id,
                        playerName = playerName
                    )}
                    listenToGame(gameId)
                }
        }
}`}</CodeB>
      </VStep>

      <VStep num={2} title="Implement listenToGame — the real-time listener">
        <p>This is the core of the multiplayer experience. Every device — host and all players — calls <IC>listenToGame</IC>. When the host advances a question or ends the game, the snapshot fires on everyone's device simultaneously:</p>
        <CodeB>{`private var gameListener: ListenerRegistration? = null

fun listenToGame(gameId: String) {
    gameListener = db.collection("games").document(gameId)
        .addSnapshotListener { snapshot, error ->
            if (error != null || snapshot == null) return@addSnapshotListener

            val status = snapshot.getString("status") ?: return@addSnapshotListener
            val currentQ = snapshot.getLong("currentQuestion")?.toInt() ?: 0

            _uiState.update { it.copy(
                status          = status,
                currentQuestion = currentQ
            )}
        }
}

// Call this in onCleared() to avoid memory leaks
override fun onCleared() {
    gameListener?.remove()
    super.onCleared()
}`}</CodeB>
      </VStep>

      <VStep num={3} title="Listen to the players sub-collection (host lobby)" last>
        <p>The host's lobby screen needs to show players joining in real time. Add a second listener on the <IC>players</IC> sub-collection:</p>
        <CodeB>{`fun listenToPlayers(gameId: String) {
    db.collection("games").document(gameId)
        .collection("players")
        .addSnapshotListener { snapshot, error ->
            if (error != null || snapshot == null) return@addSnapshotListener
            val players = snapshot.documents.map { doc ->
                Player(
                    id    = doc.id,
                    name  = doc.getString("name") ?: "Unknown",
                    score = doc.getLong("score")?.toInt() ?: 0
                )
            }
            _uiState.update { it.copy(players = players) }
        }
}`}</CodeB>
        <AiOpp>
          Try this prompt: <em>"Explain the difference between addSnapshotListener and .get() in Firestore. When would you use each one? Give me a concrete example from a multiplayer app."</em> Understanding this distinction is one of the most important concepts in this unit.
        </AiOpp>
      </VStep>

      <Checkpoint num={4}>Open the app on two devices (or one device + an emulator). Host creates a game on one; player joins with the room code on the other. The player's name should appear in the host's lobby <em>without either person tapping a refresh button</em>.</Checkpoint>
    </Section>

    {/* Part 5 */}
    <Section title="Part 5 — Play: Full CRUD in Action" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        The last part wires up the actual gameplay — submitting answers, advancing questions, and displaying the final leaderboard. This is where you touch all four CRUD operations.
      </p>

      <VStep num={1} title="Submit an answer (Update)">
        <p>When a player taps an answer, check if it's correct and increment their score. Find <IC>// TODO: Firebase — submitAnswer</IC>:</p>
        <CodeB>{`import com.google.firebase.firestore.FieldValue

fun submitAnswer(answerIndex: Int) {
    val state = _uiState.value
    val gameId   = state.gameId   ?: return
    val playerId = state.playerId ?: return
    val question = state.questions[state.currentQuestion]
    val isCorrect = answerIndex == question.correctIndex
    val points = if (isCorrect) 100 else 0

    db.collection("games").document(gameId)
        .collection("players").document(playerId)
        .update(
            "score",      FieldValue.increment(points.toLong()),
            "lastAnswer", answerIndex
        )

    _uiState.update { it.copy(hasAnswered = true, lastAnswerCorrect = isCorrect) }
}`}</CodeB>
        <Tip><IC>FieldValue.increment()</IC> is an atomic operation — it reads and increments the value on the server, so two simultaneous updates don't overwrite each other.</Tip>
      </VStep>

      <VStep num={2} title="Advance the question (Update — host only)">
        <p>The host taps "Next Question." This updates the game document, and the snapshot listener on every player's device fires immediately:</p>
        <CodeB>{`fun advanceQuestion() {
    val gameId = _uiState.value.gameId ?: return
    val nextIndex = _uiState.value.currentQuestion + 1
    val totalQuestions = _uiState.value.questions.size

    val update = if (nextIndex >= totalQuestions) {
        mapOf("currentQuestion" to nextIndex, "status" to "finished")
    } else {
        mapOf("currentQuestion" to nextIndex)
    }

    db.collection("games").document(gameId).update(update)
}`}</CodeB>
      </VStep>

      <VStep num={3} title="Load the leaderboard (Read)">
        <p>When the game status changes to <IC>"finished"</IC>, the leaderboard screen displays. Read the players sub-collection, sorted by score:</p>
        <CodeB>{`fun loadLeaderboard() {
    val gameId = _uiState.value.gameId ?: return

    db.collection("games").document(gameId)
        .collection("players")
        .orderBy("score", Query.Direction.DESCENDING)
        .get()
        .addOnSuccessListener { result ->
            val leaderboard = result.documents.mapIndexed { index, doc ->
                LeaderboardEntry(
                    rank  = index + 1,
                    name  = doc.getString("name") ?: "Unknown",
                    score = doc.getLong("score")?.toInt() ?: 0
                )
            }
            _uiState.update { it.copy(leaderboard = leaderboard) }
        }
}`}</CodeB>
      </VStep>

      <VStep num={4} title="Delete the game (Delete — optional cleanup)" last>
        <p>After the leaderboard screen, the host can archive the game. Deleting is straightforward — note that deleting a parent document does <strong>not</strong> automatically delete its sub-collections:</p>
        <CodeB>{`fun deleteGame() {
    val gameId = _uiState.value.gameId ?: return

    // First delete all player documents
    db.collection("games").document(gameId)
        .collection("players").get()
        .addOnSuccessListener { result ->
            val batch = db.batch()
            result.documents.forEach { batch.delete(it.reference) }
            batch.commit().addOnSuccessListener {
                // Then delete the game document itself
                db.collection("games").document(gameId).delete()
            }
        }
}`}</CodeB>
        <Tip>Firestore doesn't delete sub-collections automatically. Using a <IC>WriteBatch</IC> here ensures all player documents are deleted in a single atomic operation before the parent is removed.</Tip>
        <AiOpp>
          You just implemented multiplayer from scratch. Ask Claude: <em>"Review my GameViewModel — are there any race conditions in my Firestore calls? For example, what happens if two players submit an answer at the exact same millisecond? How would I use a Firestore Transaction instead of update() to make the scoring bulletproof?"</em>
        </AiOpp>
      </VStep>

      <Checkpoint num={5}>Play a full game end-to-end with at least two devices. Questions advance on all screens simultaneously, scores update correctly, and the leaderboard shows the final rankings. You've built a live multiplayer app.</Checkpoint>
    </Section>
  </div>
);

/* ══════════════════════ IOS LAB ═══════════════════════════════════════════════ */
const IosLab = () => (
  <div>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>Lab: Trivia — iOS</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
      The starter project has all the UI built in SwiftUI — screens, navigation, and a local question bank. Every Firebase interaction is stubbed out as a <IC>// TODO: Firebase</IC> comment inside <IC>GameViewModel.swift</IC>. Your job is to fill those in, part by part.
    </p>
    <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", marginBottom: 20, fontSize: 13, lineHeight: 1.7 }}>
      <strong>By the end of this lab you will have:</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 0" }}>
        <li>A live Firebase project wired to the Trivia app</li>
        <li>Host sign-in with Firebase Auth</li>
        <li>Game creation that writes to Firestore and generates a room code</li>
        <li>Players joining in real time and appearing in the lobby</li>
        <li>A full game loop — questions advancing, scores updating, leaderboard rendering</li>
      </ul>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
      <span style={{ fontSize: 20 }}>📦</span>
      <span><strong>Starter repo:</strong> <Link href="https://github.com/PaulLeung93/TriviaLive-iOS-Starter">github.com/PaulLeung93/TriviaLive-iOS-Starter</Link> — clone this before starting Part 1.</span>
    </div>

    {/* Part 1 */}
    <Section title="Part 1 — Firebase Project Setup" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        Before writing any Swift, you need a Firebase project in the console and a config file in Xcode.
      </p>

      <VStep num={1} title="Create a Firebase project">
        <p>Go to <Link href="https://console.firebase.google.com">console.firebase.google.com</Link> and sign in with your Google account.</p>
        <ol style={{ paddingLeft: 18, marginTop: 8, lineHeight: 2 }}>
          <li>Click <strong>Add project</strong></li>
          <li>Enter a project name (e.g. <IC>trivia-live</IC>)</li>
          <li>You can disable Google Analytics for this lab</li>
          <li>Click <strong>Create project</strong> and wait for provisioning</li>
        </ol>
        <Tip>One Firebase project works for both iOS and Android. If your partner is doing the Android lab, you can share the same project — just register both apps under it.</Tip>
      </VStep>

      <VStep num={2} title="Register your iOS app">
        <p>From the project overview, click the <strong>iOS+ icon</strong> to add an iOS app.</p>
        <ol style={{ paddingLeft: 18, marginTop: 8, lineHeight: 2 }}>
          <li>Enter your app's <strong>Bundle ID</strong> — find it in Xcode by selecting your project → select your app target → <strong>General</strong> tab → <strong>Bundle Identifier</strong></li>
          <li>The nickname and App Store ID are optional for this lab</li>
          <li>Click <strong>Register app</strong></li>
        </ol>
        <Warn>Bundle IDs are case-sensitive. Copy it exactly from Xcode — a mismatch means Firebase won't recognize your app.</Warn>
      </VStep>

      <VStep num={3} title="Download and add GoogleService-Info.plist">
        <p>Click <strong>Download GoogleService-Info.plist</strong>. This file contains your project credentials.</p>
        <ol style={{ paddingLeft: 18, marginTop: 8, lineHeight: 2 }}>
          <li>In Xcode, right-click your app's root group in the navigator and choose <strong>Add Files to "[YourApp]"</strong></li>
          <li>Select the downloaded <IC>GoogleService-Info.plist</IC></li>
          <li>Make sure <strong>"Add to targets"</strong> is checked for your app target</li>
          <li>Click <strong>Add</strong></li>
        </ol>
        <Warn>The filename must remain exactly <IC>GoogleService-Info.plist</IC>. macOS sometimes appends "(2)" when re-downloading — rename it back if needed. Also add it to your <IC>.gitignore</IC>.</Warn>
      </VStep>

      <VStep num={4} title="Add the Firebase SDK via Swift Package Manager">
        <ol style={{ paddingLeft: 18, marginTop: 8, lineHeight: 2 }}>
          <li>In Xcode, go to <strong>File → Add Package Dependencies</strong></li>
          <li>Enter the repository URL: <IC>https://github.com/firebase/firebase-ios-sdk</IC></li>
          <li>Select <strong>Up to Next Major Version</strong> and click <strong>Add Package</strong></li>
          <li>When prompted to choose libraries, select <strong>FirebaseAuth</strong> and <strong>FirebaseFirestore</strong></li>
          <li>Click <strong>Add Package</strong></li>
        </ol>
      </VStep>

      <VStep num={5} title="Initialize Firebase in your app entry point" last>
        <p>Open your <IC>@main</IC> App file (or <IC>AppDelegate.swift</IC> if you have one). Import FirebaseCore and call <IC>FirebaseApp.configure()</IC> before anything else runs:</p>
        <CodeB>{`import SwiftUI
import FirebaseCore

@main
struct TriviaApp: App {
    init() {
        FirebaseApp.configure()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}`}</CodeB>
        <Tip>If you have an <IC>AppDelegate</IC>, call <IC>FirebaseApp.configure()</IC> in <IC>application(_:didFinishLaunchingWithOptions:)</IC> instead.</Tip>
      </VStep>

      <Checkpoint num={1}>Build and run the app. It should launch without any Firebase-related errors in the console. In Xcode's build log you should see the Firebase packages linked successfully.</Checkpoint>
    </Section>

    {/* Part 2 */}
    <Section title="Part 2 — Auth: Host Sign-In" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        The host creates and controls games — they need an account so Firestore knows who owns each game. Players just enter a display name.
      </p>

      <VStep num={1} title="Enable Email/Password sign-in in the console">
        <p>In the Firebase console, go to <strong>Authentication → Sign-in method</strong>. Click <strong>Email/Password</strong>, toggle it <strong>Enabled</strong>, and save.</p>
      </VStep>

      <VStep num={2} title="Import and reference FirebaseAuth">
        <p>Open <IC>GameViewModel.swift</IC>. Add the import and an auth reference at the top of the class:</p>
        <CodeB>{`import FirebaseAuth

class GameViewModel: ObservableObject {
    private let auth = Auth.auth()
    // ...
}`}</CodeB>
      </VStep>

      <VStep num={3} title="Implement createAccount">
        <p>Find the <IC>// TODO: Firebase — createAccount</IC> comment and replace it:</p>
        <CodeB>{`func createAccount(email: String, password: String) {
    auth.createUser(withEmail: email, password: password) { [weak self] result, error in
        DispatchQueue.main.async {
            if let error {
                self?.errorMessage = error.localizedDescription
                return
            }
            self?.isSignedIn = true
        }
    }
}`}</CodeB>
      </VStep>

      <VStep num={4} title="Implement signIn" last>
        <p>Find the <IC>// TODO: Firebase — signIn</IC> comment and replace it:</p>
        <CodeB>{`func signIn(email: String, password: String) {
    auth.signIn(withEmail: email, password: password) { [weak self] result, error in
        DispatchQueue.main.async {
            if let error {
                self?.errorMessage = error.localizedDescription
                return
            }
            self?.isSignedIn = true
        }
    }
}

// Call this in init so returning users skip the login screen
init() {
    if auth.currentUser != nil {
        isSignedIn = true
    }
}`}</CodeB>
        <AiOpp>
          Ask Claude: <em>"How should I handle the loading state between when signIn() is called and when the Firebase callback fires? Show me how to add an isLoading @Published property and use it to disable the button and show a ProgressView in SwiftUI."</em>
        </AiOpp>
      </VStep>

      <Checkpoint num={2}>Run the app. Tap <strong>Host a Game</strong>, create an account, and sign in. The app navigates past the login screen. Check the Firebase console under Authentication → Users — your new account should appear.</Checkpoint>
    </Section>

    {/* Part 3 */}
    <Section title="Part 3 — Create a Game (Firestore Write)" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        When the host taps "New Game," you write a document to Firestore. The document ID becomes the room code.
      </p>

      <VStep num={1} title="Enable Firestore and set test rules">
        <p>In the Firebase console, go to <strong>Firestore Database → Create database</strong>. Choose <strong>Start in test mode</strong> so you can read and write freely during development.</p>
        <Warn>Test mode rules expire after 30 days and leave your database open to anyone. Set up proper Security Rules before sharing your app. See the Resources tab.</Warn>
      </VStep>

      <VStep num={2} title="Import and reference Firestore">
        <p>Back in <IC>GameViewModel.swift</IC>, add the import and a Firestore reference:</p>
        <CodeB>{`import FirebaseFirestore

private let db = Firestore.firestore()`}</CodeB>
      </VStep>

      <VStep num={3} title="Implement createGame" last>
        <p>Find the <IC>// TODO: Firebase — createGame</IC> comment. You'll write a dictionary to Firestore and use the returned document reference for the room code:</p>
        <CodeB>{`func createGame() {
    guard let uid = auth.currentUser?.uid else { return }

    let gameData: [String: Any] = [
        "hostId":          uid,
        "status":          "waiting",
        "currentQuestion": 0,
        "questions":       questions.map { q in
            ["text": q.text, "options": q.options, "correctIndex": q.correctIndex]
        }
    ]

    var ref: DocumentReference?
    ref = db.collection("games").addDocument(data: gameData) { [weak self] error in
        DispatchQueue.main.async {
            if let error {
                self?.errorMessage = error.localizedDescription
                return
            }
            guard let docId = ref?.documentID else { return }
            let roomCode = String(docId.prefix(6)).uppercased()
            self?.gameId   = docId
            self?.roomCode = roomCode
        }
    }
}`}</CodeB>
        <Tip><IC>String(docId.prefix(6)).uppercased()</IC> turns the full Firestore ID (e.g. <IC>xK9mRqLpNv2w</IC>) into a short room code (e.g. <IC>XK9MRQ</IC>) that players can type.</Tip>
      </VStep>

      <Checkpoint num={3}>Tap <strong>New Game</strong>. A 6-character room code appears on screen. In the Firebase console, open Firestore Database and confirm a new document appeared under the <IC>games</IC> collection with <IC>status: "waiting"</IC>.</Checkpoint>
    </Section>

    {/* Part 4 */}
    <Section title="Part 4 — Join &amp; Real-Time Listeners" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        Snapshot listeners are what make Firestore feel different from a regular REST API. Instead of asking "did anything change?", you subscribe once and Firebase pushes updates to you.
      </p>

      <VStep num={1} title="Implement joinGame — write the player document">
        <p>Find the <IC>// TODO: Firebase — joinGame</IC> comment. First look up the game document by room code, then write the player to the sub-collection:</p>
        <CodeB>{`func joinGame(roomCode: String, playerName: String) {
    db.collection("games").getDocuments { [weak self] snapshot, error in
        guard let self, let snapshot else { return }

        let matchingDoc = snapshot.documents.first {
            String($0.documentID.prefix(6)).uppercased() == roomCode.uppercased()
        }
        guard let gameDoc = matchingDoc else {
            DispatchQueue.main.async { self.errorMessage = "Game not found" }
            return
        }

        let gameId = gameDoc.documentID
        let playerData: [String: Any] = ["name": playerName, "score": 0]

        self.db.collection("games").document(gameId)
            .collection("players")
            .addDocument(data: playerData) { [weak self] error in
                guard let self, error == nil else { return }
                // listener added in next step
                DispatchQueue.main.async {
                    self.gameId     = gameId
                    self.playerName = playerName
                }
                self.listenToGame(gameId: gameId)
            }
    }
}`}</CodeB>
      </VStep>

      <VStep num={2} title="Implement listenToGame — the real-time listener">
        <p>The snapshot listener fires immediately with current data, then again every time the document changes. This single function keeps every device in sync:</p>
        <CodeB>{`private var gameListener: ListenerRegistration?

func listenToGame(gameId: String) {
    gameListener = db.collection("games").document(gameId)
        .addSnapshotListener { [weak self] snapshot, error in
            guard let self, let snapshot, error == nil else { return }
            let data = snapshot.data() ?? [:]

            DispatchQueue.main.async {
                self.gameStatus      = data["status"]          as? String ?? "waiting"
                self.currentQuestion = data["currentQuestion"] as? Int    ?? 0
            }
        }
}

deinit {
    gameListener?.remove()
}`}</CodeB>
      </VStep>

      <VStep num={3} title="Listen to the players sub-collection (host lobby)" last>
        <p>Add a listener so the host sees players appear in the lobby the moment they join:</p>
        <CodeB>{`func listenToPlayers(gameId: String) {
    db.collection("games").document(gameId)
        .collection("players")
        .addSnapshotListener { [weak self] snapshot, error in
            guard let self, let snapshot, error == nil else { return }
            let players = snapshot.documents.map { doc in
                Player(
                    id:    doc.documentID,
                    name:  doc["name"]  as? String ?? "Unknown",
                    score: doc["score"] as? Int    ?? 0
                )
            }
            DispatchQueue.main.async { self.players = players }
        }
}`}</CodeB>
        <AiOpp>
          Try this prompt: <em>"Explain the difference between addSnapshotListener and getDocuments in Firestore. When would you use each one? Give me a concrete example from a multiplayer app."</em>
        </AiOpp>
      </VStep>

      <Checkpoint num={4}>Open the app on two devices (or device + simulator). Host creates a game on one; player joins with the room code on the other. The player's name should appear in the host's lobby <em>without either person refreshing</em>.</Checkpoint>
    </Section>

    {/* Part 5 */}
    <Section title="Part 5 — Play: Full CRUD in Action" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        The final part wires up gameplay — submitting answers, advancing questions, and reading the final leaderboard. All four CRUD operations in one game loop.
      </p>

      <VStep num={1} title="Submit an answer (Update)">
        <p>When a player taps an answer, check correctness and increment their score atomically. Find <IC>// TODO: Firebase — submitAnswer</IC>:</p>
        <CodeB>{`func submitAnswer(answerIndex: Int) {
    guard let gameId, let playerId else { return }
    let question = questions[currentQuestion]
    let isCorrect = answerIndex == question.correctIndex
    let points = isCorrect ? 100 : 0

    db.collection("games").document(gameId)
        .collection("players").document(playerId)
        .updateData([
            "score":      FieldValue.increment(Int64(points)),
            "lastAnswer": answerIndex
        ])

    DispatchQueue.main.async {
        self.hasAnswered        = true
        self.lastAnswerCorrect  = isCorrect
    }
}`}</CodeB>
        <Tip><IC>FieldValue.increment()</IC> is atomic — the server handles the math, so two simultaneous updates never overwrite each other.</Tip>
      </VStep>

      <VStep num={2} title="Advance the question (Update — host only)">
        <p>When the host taps "Next Question," this update fires on the game document and the snapshot listener pushes the new question to every player's screen instantly:</p>
        <CodeB>{`func advanceQuestion() {
    guard let gameId else { return }
    let nextIndex = currentQuestion + 1
    let isLastQuestion = nextIndex >= questions.count

    let update: [String: Any] = isLastQuestion
        ? ["currentQuestion": nextIndex, "status": "finished"]
        : ["currentQuestion": nextIndex]

    db.collection("games").document(gameId).updateData(update)
}`}</CodeB>
      </VStep>

      <VStep num={3} title="Load the leaderboard (Read)">
        <p>When <IC>gameStatus</IC> becomes <IC>"finished"</IC>, navigate to the leaderboard. Read the players sub-collection ordered by score:</p>
        <CodeB>{`func loadLeaderboard() {
    guard let gameId else { return }

    db.collection("games").document(gameId)
        .collection("players")
        .order(by: "score", descending: true)
        .getDocuments { [weak self] snapshot, error in
            guard let self, let snapshot, error == nil else { return }
            let entries = snapshot.documents.enumerated().map { index, doc in
                LeaderboardEntry(
                    rank:  index + 1,
                    name:  doc["name"]  as? String ?? "Unknown",
                    score: doc["score"] as? Int    ?? 0
                )
            }
            DispatchQueue.main.async { self.leaderboard = entries }
        }
}`}</CodeB>
      </VStep>

      <VStep num={4} title="Delete the game (Delete — optional cleanup)" last>
        <p>After the leaderboard, the host can clean up. Deleting a parent document does <strong>not</strong> automatically delete its sub-collections in Firestore:</p>
        <CodeB>{`func deleteGame() {
    guard let gameId else { return }

    db.collection("games").document(gameId)
        .collection("players").getDocuments { [weak self] snapshot, error in
            guard let self, let snapshot, error == nil else { return }
            let batch = self.db.batch()
            snapshot.documents.forEach { batch.deleteDocument($0.reference) }
            batch.commit { _ in
                self.db.collection("games").document(gameId).delete()
            }
        }
}`}</CodeB>
        <Tip>A <IC>WriteBatch</IC> deletes all player documents atomically in a single round-trip before removing the parent game document.</Tip>
        <AiOpp>
          You just built a live multiplayer app. Ask Claude: <em>"Review my GameViewModel — are there any race conditions in my Firestore calls? What happens if two players submit an answer at the exact same time? How would I use a Firestore Transaction instead of updateData to make the scoring bulletproof?"</em>
        </AiOpp>
      </VStep>

      <Checkpoint num={5}>Play a full game end-to-end on two devices. Questions advance on all screens simultaneously, scores update correctly, and the final leaderboard shows the rankings. You've built a live multiplayer app.</Checkpoint>
    </Section>
  </div>
);

/* ══════════════════════ LAB WRAPPER ═══════════════════════════════════════════ */
const Lab = () => {
  const [platform, setPlatform] = useState<"Android" | "iOS">("Android");
  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
        {(["Android", "iOS"] as const).map(p => (
          <button key={p} onClick={() => setPlatform(p)} style={{ padding: "6px 16px", fontSize: 13, fontWeight: platform === p ? 600 : 400, borderRadius: 6, border: `1.5px solid ${platform === p ? (p === "Android" ? AND : IOS) : "var(--color-border-tertiary)"}`, background: platform === p ? (p === "Android" ? ANDL : IOSL) : "var(--color-background-primary)", color: platform === p ? (p === "Android" ? ANDD : IOSD) : MUTED, cursor: "pointer" }}>
            {p === "Android" ? "🤖 Android" : "🍎 iOS"}
          </button>
        ))}
      </div>
      {platform === "Android" ? <AndroidLab /> : <IosLab />}
    </div>
  );
};

/* ══════════════════════ RESOURCES ════════════════════════════════════════════ */
const Resources = () => {
  const groups: { heading: string; accent: string; items: { title: string; description: string; url: string; tag: string; tagColor: string }[] }[] = [
    {
      heading: "Setup & Official Docs",
      accent: P_C,
      items: [
        { title: "Add Firebase to your Android project", description: "Official step-by-step guide for adding Firebase to an Android app — google-services.json, Gradle plugin, and BOM dependencies.", url: "https://firebase.google.com/docs/android/setup", tag: "Android", tagColor: "green" },
        { title: "Add Firebase to your iOS project", description: "Official step-by-step guide for adding Firebase to an iOS/SwiftUI app — GoogleService-Info.plist, Swift Package Manager, and AppDelegate initialization.", url: "https://firebase.google.com/docs/ios/setup", tag: "iOS", tagColor: "ios" },
        { title: "Firebase console", description: "Manage your Firebase projects, view Firestore data in real time, monitor Auth users, and configure security rules.", url: "https://console.firebase.google.com", tag: "Console", tagColor: "purple" },
      ],
    },
    {
      heading: "Cloud Firestore",
      accent: T_C,
      items: [
        { title: "Firestore data model", description: "How collections, documents, and sub-collections work — the core mental model you need before designing any Firestore schema.", url: "https://firebase.google.com/docs/firestore/data-model", tag: "Concept", tagColor: "teal" },
        { title: "Get realtime updates", description: "The official guide to addSnapshotListener — how real-time listeners work, how to detach them, and handling errors.", url: "https://firebase.google.com/docs/firestore/query-data/listen", tag: "Firestore", tagColor: "teal" },
        { title: "Firestore transactions and batched writes", description: "When to use transactions vs. batched writes vs. plain update(). Essential reading if your app has concurrent updates (like a scoring system).", url: "https://firebase.google.com/docs/firestore/manage-data/transactions", tag: "Advanced", tagColor: "teal" },
      ],
    },
    {
      heading: "Auth",
      accent: P_C,
      items: [
        { title: "Firebase Auth — Android", description: "Password-based sign-in guide for Android: createUserWithEmailAndPassword, signInWithEmailAndPassword, and auth state listeners.", url: "https://firebase.google.com/docs/auth/android/password-auth", tag: "Android", tagColor: "green" },
        { title: "Firebase Auth — iOS", description: "Password-based sign-in guide for iOS/Swift: createUser, signIn, and observing auth state changes with addStateDidChangeListener.", url: "https://firebase.google.com/docs/auth/ios/password-auth", tag: "iOS", tagColor: "ios" },
      ],
    },
    {
      heading: "Security & Production",
      accent: AM_C,
      items: [
        { title: "Firestore Security Rules", description: "How to lock down your database so only authenticated users can write, and only their own data. Required reading before you ship anything real.", url: "https://firebase.google.com/docs/firestore/security/get-started", tag: "Security", tagColor: "amber" },
        { title: "Firebase pricing — Spark (free) plan", description: "Firestore's free tier limits: 1 GiB storage, 50K reads/day, 20K writes/day, 20K deletes/day. More than enough for a capstone project.", url: "https://firebase.google.com/pricing", tag: "Pricing", tagColor: "amber" },
      ],
    },
  ];

  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>Resources</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
        Official guides, data modeling references, and production considerations.
      </p>
      {groups.map(group => (
        <div key={group.heading} style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 8px" }}>
            <div style={{ width: 3, height: 16, background: group.accent, borderRadius: 2 }} />
            <h3 style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: 0 }}>{group.heading}</h3>
          </div>
          {group.items.map(item => (
            <ResourceCard key={item.title} {...item} />
          ))}
        </div>
      ))}
    </div>
  );
};

/* ══════════════════════ ROOT COMPONENT ════════════════════════════════════════ */
export default function FirebaseUnit() {
  const [tab, setTab] = useState("Overview");

  return (
    <div style={{ fontFamily: "var(--font-sans)", maxWidth: 720, margin: "0 auto", padding: "24px 24px 48px" }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", fontWeight: 500, marginBottom: 2 }}>MOBILE DEVELOPMENT IN THE AGE OF AI</div>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>CodePath · Bonus Content</div>
      </div>
      <div style={{ display: "flex", gap: 4, borderBottom: "1px solid var(--color-border-tertiary)", marginBottom: 24 }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "7px 14px", fontSize: 13, fontWeight: tab === t ? 600 : 400, color: tab === t ? P_C : "var(--color-text-secondary)", background: "none", border: "none", borderBottom: tab === t ? `2px solid ${P_C}` : "2px solid transparent", cursor: "pointer", marginBottom: -1 }}>
            {t}
          </button>
        ))}
      </div>

      {tab === "Overview"  && <Overview />}
      {tab === "Lab"       && <Lab />}
      {tab === "Resources" && <Resources />}
    </div>
  );
}
