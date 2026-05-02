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

const Note = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: ANDL, borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: `3px solid ${AND}` }}>
    {children}
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
      <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Bonus: App Capabilities for AI Agents</h2>
      <Tag color="green">Android 16+</Tag>
      <Tag color="ios">iOS 16+</Tag>
      <Tag color="amber">Android: Experimental</Tag>
    </div>
    <p style={{ fontSize: 12, color: MUTED, margin: "0 0 4px" }}>AppFunctions (Android) · App Intents (iOS)</p>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
      AI agents are changing how users interact with mobile apps — instead of manually navigating screens, users ask an assistant to act on their behalf. Both Android and iOS now provide first-class APIs for this: <strong>AppFunctions</strong> on Android lets Gemini discover and invoke your app's capabilities, while <strong>App Intents</strong> on iOS does the same for Siri and Apple Intelligence. The underlying pattern is the same on both platforms — declare what your app can do, and the system makes it available to agents.
    </p>

    <div style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 16px", margin: "0 0 16px" }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 4px" }}>🤖 Why this matters for AI-focused mobile development</p>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.6 }}>
        Building apps that AI agents can use is the next frontier in mobile engineering. AppFunctions and App Intents are how you participate in that ecosystem — exposing your app's capabilities not just to users tapping screens, but to agents acting on their behalf. The mental model is the same as MCP: declare tools, let agents discover and invoke them.
      </p>
    </div>

    {/* Platform status */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
      <div style={{ background: ANDL, border: `1px solid ${AND}`, borderRadius: 8, padding: "10px 14px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: ANDD, textTransform: "uppercase" as const, letterSpacing: ".06em", margin: "0 0 4px" }}>Android — AppFunctions</p>
        <p style={{ fontSize: 12, color: ANDD, margin: 0, lineHeight: 1.5 }}>Experimental alpha · Android 16+ (API 36) · Gemini agent · KSP annotation processing</p>
      </div>
      <div style={{ background: IOSL, border: `1px solid ${IOS}`, borderRadius: 8, padding: "10px 14px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: IOSD, textTransform: "uppercase" as const, letterSpacing: ".06em", margin: "0 0 4px" }}>iOS — App Intents</p>
        <p style={{ fontSize: 12, color: IOSD, margin: 0, lineHeight: 1.5 }}>Stable API · iOS 16+ · Siri + Shortcuts · Apple Intelligence on iOS 18.1+</p>
      </div>
    </div>

    {/* Unit at a glance */}
    <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 10px" }}>Unit at a glance</h3>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
      {[
        { icon: "🤖", label: "Android slides", desc: "16 slides — AppFunctions concept, the 4-step flow, @AppFunction implementation, ADB verification, and agent invocation" },
        { icon: "🍎", label: "iOS slides",     desc: "14 slides — App Intents concept, AppIntent struct, @Parameter, AppShortcutsProvider, @AssistantIntent, and Shortcuts testing" },
        { icon: "🔬", label: "Lab",            desc: "Step-by-step Android lab: add KSP dependency, create @AppFunctionSerializable type, annotate functions, verify with ADB and Gemini" },
        { icon: "📚", label: "Resources",      desc: "Official docs, the Android Developers blog post, Apple developer docs, and EAP registration links" },
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
        "Explain the shift from app-centric to agent-centric mobile interaction, and why it matters now",
        "Describe how AI agents discover and invoke app capabilities on both Android and iOS",
        "Implement AppFunctions (Android) using @AppFunction and @AppFunctionSerializable",
        "Implement App Intents (iOS) using the AppIntent protocol, @Parameter, and AppShortcutsProvider",
        "Test your implementation — ADB + Gemini on Android, Shortcuts app + Siri on iOS",
        "Apply documentation and design best practices that improve agent matching quality",
      ].map(obj => (
        <div key={obj} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
          <span style={{ color: T_C, fontWeight: 700, flexShrink: 0 }}>✓</span>
          <span>{obj}</span>
        </div>
      ))}
    </div>

    {/* Prerequisites with platform toggle */}
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
        "Completed Weeks 1–4 (comfortable writing Kotlin and building Android apps in Jetpack Compose)",
        "Android Studio with an Android 16 (API 36) emulator — required for AppFunctions",
        "Familiarity with data classes and coroutines (suspend functions)",
      ] : [
        "Completed Weeks 1–4 (comfortable writing Swift and building iOS apps in SwiftUI)",
        "Xcode 15+ and an iOS 16+ simulator or physical device",
        "Familiarity with Swift structs, protocols, and async/await",
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

/* ══════════════════════ LAB ═══════════════════════════════════════════════════ */
const AndroidLab = () => (
  <div>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>Lab: Your First AppFunction</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
      In this lab you will add AppFunctions to a simple notes app. By the end, your app will expose three callable actions — <IC>listNotes</IC>, <IC>createNote</IC>, and <IC>editNote</IC> — that AI agents on Android 16 can discover and invoke.
    </p>

    <Note>
      <strong>Android 16 required.</strong> AppFunctions are only available on Android API 36 (Android 16) and above. Make sure your emulator is set to API 36 before you begin. If you don't have one set up, go to <strong>Android Studio → Device Manager → Create Virtual Device</strong> and select an API 36 system image.
    </Note>

    <div style={{ margin: "20px 0" }}>

      <VStep num={1} title="Set up your Android 16 emulator">
        <p>Before writing any code, confirm you have an Android 16 emulator available.</p>
        <ol style={{ margin: "8px 0", paddingLeft: 20, lineHeight: 2 }}>
          <li>Open <strong>Android Studio → Device Manager</strong> (toolbar icon or View menu)</li>
          <li>Click <strong>Create Virtual Device</strong></li>
          <li>Choose a phone (e.g., Pixel 8) and click Next</li>
          <li>Select a system image with <strong>API 36</strong> — download it if needed</li>
          <li>Finish and launch the emulator</li>
        </ol>
        <Tip>You can also check your existing emulators — if one already shows API 36 in the list, you're all set.</Tip>
        <Checkpoint num={1}>Your Device Manager shows a running Android 16 (API 36) emulator.</Checkpoint>
      </VStep>

      <VStep num={2} title="Create or open a project">
        <p>You can use an existing notes-style app from a previous week, or create a new Empty Activity project in Android Studio. The key requirement is that you have a simple data model and some form of in-memory or Room-backed repository for notes.</p>
        <p>If starting fresh, a minimal setup looks like this:</p>
        <CodeB>{`// Minimal NoteRepository for the lab
class NoteRepository {
    private val _notes = mutableListOf<Note>()
    val notes: List<Note> get() = _notes.toList()

    fun createNote(title: String, content: String): Note {
        val note = Note(id = _notes.size + 1, title = title, content = content)
        _notes.add(note)
        return note
    }

    fun updateNote(id: Int, title: String?, content: String?): Note? {
        val index = _notes.indexOfFirst { it.id == id }
        if (index == -1) return null
        val updated = _notes[index].copy(
            title   = title   ?: _notes[index].title,
            content = content ?: _notes[index].content
        )
        _notes[index] = updated
        return updated
    }
}`}</CodeB>
      </VStep>

      <VStep num={3} title="Add the AppFunctions dependency">
        <p>Open your app module's <IC>build.gradle.kts</IC> and make the following changes. AppFunctions uses KSP (Kotlin Symbol Processing) to generate the schema at build time — you need both the runtime library and the compiler plugin.</p>

        <p style={{ fontSize: 13, fontWeight: 600, margin: "10px 0 4px" }}>1. Add the KSP plugin to the <IC>plugins</IC> block:</p>
        <CodeB>{`plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("com.google.devtools.ksp") version "2.1.0-1.0.29"  // add this
}`}</CodeB>

        <p style={{ fontSize: 13, fontWeight: 600, margin: "10px 0 4px" }}>2. Add the libraries to <IC>dependencies</IC>:</p>
        <CodeB>{`dependencies {
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha01")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha01")
}`}</CodeB>

        <Tip>After editing <IC>build.gradle.kts</IC>, click <strong>Sync Now</strong> in the yellow banner at the top of the editor (or File → Sync Project with Gradle Files).</Tip>
        <Warn>Check the <Link href="https://developer.android.com/jetpack/androidx/releases/appfunctions">official release page</Link> for the current alpha version — the version numbers above may have been updated since this lab was written.</Warn>
        <Checkpoint num={2}>Gradle sync completes without errors and the AppFunctions library appears in your External Libraries.</Checkpoint>
      </VStep>

      <VStep num={4} title="Create your @AppFunctionSerializable data class">
        <p>
          Create a new file called <IC>Note.kt</IC> in your app package. This will be the return type for your AppFunctions. Because agents need to understand the shape of the data your functions return, you have to annotate it so the schema generator includes its structure in the XML it produces.
        </p>

        <VStep num="a" title="Define the plain data class">
          <p>
            Add <IC>import androidx.appfunctions.AppFunctionSerializable</IC> at the top of the file. Then define a <IC>data class Note</IC> with three properties: <IC>id: Int</IC>, <IC>title: String</IC>, and <IC>content: String</IC>. Don't add any annotation yet — just write the plain data class so it compiles cleanly first.
          </p>
          <Section title="✅ Check your work — show me Note.kt so far">
            <CodeB>{`import androidx.appfunctions.AppFunctionSerializable

data class Note(
    val id: Int,
    val title: String,
    val content: String
)`}</CodeB>
          </Section>
        </VStep>

        <VStep num="b" title="Add @AppFunctionSerializable and KDoc" last>
          <p>
            Now register this type with the schema generator. Add <IC>@AppFunctionSerializable(isDescribedByKDoc = true)</IC> directly above the <IC>data class</IC> line. Then add documentation:
          </p>
          <ul style={{ margin: "8px 0 10px", paddingLeft: 20, lineHeight: 1.9, fontSize: 13 }}>
            <li>Above the annotation, write a multi-line class KDoc: <IC>/** A note stored in the app. */</IC></li>
            <li>Inside the constructor parentheses, add a single-line KDoc above each property — for example <IC>/** The note's unique identifier */</IC> on the line before <IC>val id: Int</IC></li>
          </ul>
          <p>Remember: these KDoc comments are read by the agent to understand what your data looks like. Write them clearly.</p>
          <Tip>Only <IC>data class</IC> is supported for <IC>@AppFunctionSerializable</IC>. Sealed classes, interfaces, and regular classes will not work.</Tip>
          <Section title="✅ Check your work — show me the complete Note.kt">
            <CodeB>{`import androidx.appfunctions.AppFunctionSerializable

/**
 * A note stored in the app.
 */
@AppFunctionSerializable(isDescribedByKDoc = true)
data class Note(
    /** The note's unique identifier */
    val id: Int,
    /** The note's title */
    val title: String,
    /** The body content of the note */
    val content: String
)`}</CodeB>
          </Section>
        </VStep>

        <Checkpoint num={3}>Your <IC>Note.kt</IC> file compiles with no errors and the IDE recognizes <IC>@AppFunctionSerializable</IC> (no red underlines on the annotation).</Checkpoint>
      </VStep>

      <VStep num={5} title="Create your AppFunctions class">
        <p>
          Create a new file called <IC>NoteFunctions.kt</IC>. This class is where you declare the actions your app exposes to AI agents. Each method gets the <IC>@AppFunction</IC> annotation and KDoc that the agent uses to decide when to invoke it. A few rules to keep in mind throughout this step:
        </p>
        <ul style={{ margin: "8px 0 12px", paddingLeft: 20, lineHeight: 1.9, fontSize: 13 }}>
          <li><IC>AppFunctionContext</IC> must always be the <strong>first</strong> parameter of every function</li>
          <li>Every function should be <IC>suspend fun</IC> — functions can involve I/O like database reads</li>
          <li>Write clear, specific KDoc — this is literally what the agent reads to decide which function to call</li>
        </ul>

        <VStep num="a" title="Set up the class and add listNotes">
          <p>
            Add two imports at the top: <IC>AppFunction</IC> and <IC>AppFunctionContext</IC>, both from <IC>androidx.appfunctions</IC>. Then create the class: <IC>class NoteFunctions</IC> that takes <IC>private val repo: NoteRepository</IC> as a constructor parameter.
          </p>
          <p>
            Inside the class, write your first function: <IC>suspend fun listNotes</IC>. It should take <IC>appFunctionContext: AppFunctionContext</IC> as its only parameter and return <IC>List&lt;Note&gt;?</IC> (nullable — it returns null when there are no notes, so the agent knows the list is empty rather than getting an empty list). The implementation is a one-liner: <IC>= repo.notes.ifEmpty {"{"} null {"}"}</IC>.
          </p>
          <p>
            Add <IC>@AppFunction(isDescribedByKDoc = true)</IC> above the function, then write a multi-line KDoc comment above the annotation. Document what the function does and add a <IC>@param appFunctionContext</IC> tag.
          </p>
          <Section title="✅ Check your work — show me NoteFunctions.kt so far">
            <CodeB>{`import androidx.appfunctions.AppFunction
import androidx.appfunctions.AppFunctionContext

class NoteFunctions(private val repo: NoteRepository) {

    /**
     * Lists all notes in the app.
     * Returns null if there are no notes yet.
     *
     * @param appFunctionContext The AppFunction execution context.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun listNotes(
        appFunctionContext: AppFunctionContext
    ): List<Note>? = repo.notes.ifEmpty { null }

}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="b" title="Add createNote">
          <p>
            Below <IC>listNotes</IC>, add a second function: <IC>suspend fun createNote</IC>. This one takes three parameters — <IC>appFunctionContext: AppFunctionContext</IC>, <IC>title: String</IC>, and <IC>content: String</IC> — and returns a <IC>Note</IC>. The implementation delegates directly to the repository: <IC>= repo.createNote(title, content)</IC>.
          </p>
          <p>
            Add the <IC>@AppFunction</IC> annotation and KDoc. This time, document all three parameters with <IC>@param</IC> tags — the agent uses these to map the user's words ("write a note that says...") to the right argument values.
          </p>
          <Section title="✅ Check your work — show me NoteFunctions.kt so far">
            <CodeB>{`import androidx.appfunctions.AppFunction
import androidx.appfunctions.AppFunctionContext

class NoteFunctions(private val repo: NoteRepository) {

    /**
     * Lists all notes in the app.
     * Returns null if there are no notes yet.
     *
     * @param appFunctionContext The AppFunction execution context.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun listNotes(
        appFunctionContext: AppFunctionContext
    ): List<Note>? = repo.notes.ifEmpty { null }

    /**
     * Creates a new note with the given title and content.
     *
     * @param appFunctionContext The AppFunction execution context.
     * @param title The title of the note.
     * @param content The body text of the note.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun createNote(
        appFunctionContext: AppFunctionContext,
        title: String,
        content: String
    ): Note = repo.createNote(title, content)

}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="c" title="Add editNote" last>
          <p>
            Add a third function: <IC>suspend fun editNote</IC>. This one needs four parameters: <IC>appFunctionContext: AppFunctionContext</IC>, <IC>noteId: Int</IC>, <IC>title: String?</IC>, and <IC>content: String?</IC>. Notice that <IC>title</IC> and <IC>content</IC> are <strong>nullable</strong> (<IC>String?</IC>) — passing <IC>null</IC> means "leave this field unchanged." This lets an agent edit just the title without needing to know the current content.
          </p>
          <p>
            The return type is <IC>Note?</IC> (nullable) because the note ID might not exist. The implementation: <IC>= repo.updateNote(noteId, title, content)</IC>.
          </p>
          <p>
            Write KDoc for all four parameters. In the <IC>@param</IC> for <IC>title</IC> and <IC>content</IC>, explicitly mention the null behavior — agents use that information when deciding what to pass.
          </p>
          <Section title="✅ Check your work — show me the complete NoteFunctions.kt">
            <CodeB>{`import androidx.appfunctions.AppFunction
import androidx.appfunctions.AppFunctionContext

class NoteFunctions(private val repo: NoteRepository) {

    /**
     * Lists all notes in the app.
     * Returns null if there are no notes yet.
     *
     * @param appFunctionContext The AppFunction execution context.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun listNotes(
        appFunctionContext: AppFunctionContext
    ): List<Note>? = repo.notes.ifEmpty { null }

    /**
     * Creates a new note with the given title and content.
     *
     * @param appFunctionContext The AppFunction execution context.
     * @param title The title of the note.
     * @param content The body text of the note.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun createNote(
        appFunctionContext: AppFunctionContext,
        title: String,
        content: String
    ): Note = repo.createNote(title, content)

    /**
     * Edits an existing note. Pass null for any field to leave it unchanged.
     *
     * @param appFunctionContext The AppFunction execution context.
     * @param noteId The ID of the note to edit.
     * @param title The new title, or null to keep the existing one.
     * @param content The new body text, or null to keep the existing one.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun editNote(
        appFunctionContext: AppFunctionContext,
        noteId: Int,
        title: String?,
        content: String?
    ): Note? = repo.updateNote(noteId, title, content)
}`}</CodeB>
          </Section>
        </VStep>

        <AiOpp>
          Ask your AI assistant: <em>"What would be a good fourth AppFunction to add to this notes app? Write it with proper KDoc and explain why you chose it."</em> Think critically about whether the function it suggests is appropriately granular and whether its description would help an agent know when to use it.
        </AiOpp>

        <Checkpoint num={4}>Your <IC>NoteFunctions.kt</IC> compiles with no errors. All three functions are annotated and documented.</Checkpoint>
      </VStep>

      <VStep num={6} title="Build and verify with ADB">
        <p>Build and run your app on the Android 16 emulator. Once it's running, open a terminal and use the following ADB command to confirm that the AppFunctions schema was generated and your functions are indexed by the system:</p>
        <CodeB>{`adb shell cmd app_function list-app-functions`}</CodeB>
        <p>You should see output listing your package name and function identifiers:</p>
        <CodeB>{`com.example.noteapp/createNote
com.example.noteapp/editNote
com.example.noteapp/listNotes`}</CodeB>

        <Section title="Nothing showing up? — Troubleshooting">
          <p>If the command returns no output for your package, try these steps in order:</p>
          <ol style={{ paddingLeft: 20, lineHeight: 2 }}>
            <li><strong>Clean and rebuild</strong>: Build → Clean Project, then Build → Rebuild Project. KSP needs a clean pass to re-generate the schema.</li>
            <li><strong>Check KSP is applied</strong>: Open <IC>build.gradle.kts</IC> and confirm <IC>id("com.google.devtools.ksp")</IC> is in your plugins block.</li>
            <li><strong>Verify API level</strong>: Confirm your emulator is running API 36, not API 35 or lower.</li>
            <li><strong>Check for import errors</strong>: Make sure the <IC>@AppFunction</IC> and <IC>@AppFunctionSerializable</IC> imports are from <IC>androidx.appfunctions</IC>, not another package.</li>
          </ol>
        </Section>

        <Checkpoint num={5}>The ADB command lists your three functions. Your AppFunctions are registered with the Android system.</Checkpoint>
      </VStep>

      <VStep num={7} title="Invoke your function via Gemini">
        <p>
          The ADB check confirms your functions are indexed — but the real test is having an AI agent actually invoke one. This step walks you through doing exactly that.
        </p>
        <Warn>
          <strong>Compatible hardware required.</strong> Gemini AppFunction invocation currently works on <strong>Samsung Galaxy S26 / S25 series running OneUI 8.5+</strong> with the Gemini app installed, and is rolling out to select Pixel 10 devices. If you're on an emulator, your Step 6 ADB output is your verification — bookmark this step and return when you have access to compatible hardware.
        </Warn>
        <p style={{ marginTop: 12 }}>If you have a compatible device, follow these steps:</p>
        <ol style={{ paddingLeft: 20, lineHeight: 2, fontSize: 13, margin: "8px 0 14px" }}>
          <li>Install and open your app on the device so it is running in the background</li>
          <li>Open the <strong>Gemini</strong> app (or invoke Gemini via the power button / assistant shortcut)</li>
          <li>Try one of the prompts below and watch what happens</li>
        </ol>

        <div style={{ margin: "10px 0" }}>
          {[
            {
              fn: "createNote",
              prompt: '"Create a note called \'Shopping list\' with content \'milk, eggs, bread\'"',
              expect: "Gemini invokes your createNote function and confirms the note was created. You can verify by checking the app's note list.",
              color: ANDL, accent: ANDD,
            },
            {
              fn: "listNotes",
              prompt: '"Show me all my notes in [your app name]"',
              expect: "Gemini calls listNotes and reads back the list of notes in its response.",
              color: PL, accent: PD,
            },
            {
              fn: "editNote",
              prompt: '"Edit note 1 — change the title to \'Grocery run\'"',
              expect: "Gemini calls editNote with noteId=1, title='Grocery run', and content=null (unchanged).",
              color: TL, accent: TD,
            },
          ].map(item => (
            <div key={item.fn} style={{ background: item.color, borderRadius: 8, padding: "12px 14px", margin: "8px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <IC>{item.fn}</IC>
              </div>
              <p style={{ fontSize: 13, fontStyle: "italic", color: item.accent, margin: "0 0 6px", lineHeight: 1.4 }}>{item.prompt}</p>
              <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>Expected: {item.expect}</p>
            </div>
          ))}
        </div>

        <Tip>If Gemini doesn't invoke your function and instead gives a generic text response, it may not have matched the intent to your function's description. Try making your KDoc more specific and rebuild — then try again.</Tip>

        <Section title="Don't have compatible hardware yet?">
          <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 8 }}>You can still verify your implementation is correct:</p>
          <ul style={{ paddingLeft: 20, lineHeight: 2, fontSize: 13, margin: 0 }}>
            <li>Your ADB output from Step 6 confirms the schema was generated and the system indexed your functions correctly</li>
            <li>You can call your <IC>NoteFunctions</IC> methods directly (e.g. from a ViewModel or test) to verify the logic works — the AppFunctions framework is just the delivery mechanism</li>
            <li>Register for the <Link href="https://forms.gle/GN5ybjQFhzHRCguM7">Early Access Program</Link> for priority access to the full invocation pipeline</li>
          </ul>
        </Section>

        <Checkpoint num={6}>Gemini successfully invokes at least one of your AppFunctions and returns a confirmation response. <em>(If on emulator: your Step 6 ADB output confirms registration — complete this checkpoint when you have access to compatible hardware.)</em></Checkpoint>
      </VStep>

      <VStep num={8} title="Reflection" last>
        <p>Take a few minutes to reflect on what you built and the broader implications.</p>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "12px 14px", margin: "8px 0" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Respond to these in a comment block at the top of <IC>NoteFunctions.kt</IC>:</p>
          <ol style={{ paddingLeft: 20, lineHeight: 2, fontSize: 13, color: "var(--color-text-primary)", margin: 0 }}>
            <li>Why does <IC>AppFunctionContext</IC> always have to be the first parameter?</li>
            <li>What would happen if you wrote vague KDoc like <em>"does stuff with a note"</em> — how would that affect the agent's behavior?</li>
            <li>Think of one more action in this notes app that would be valuable to expose as an AppFunction. What would you name it and what KDoc would you write?</li>
          </ol>
        </div>
        <AiOpp>
          Ask your AI assistant to review your <IC>NoteFunctions.kt</IC> KDoc. Prompt: <em>"Review the KDoc on each of my AppFunctions. For each one, tell me if the description is clear enough for an AI agent to reliably know when to use it, and suggest a more specific version if not."</em>
        </AiOpp>
      </VStep>

    </div>
  </div>
);

/* ══════════════════════ IOS LAB ═══════════════════════════════════════════════ */
const IosLab = () => (
  <div>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>Lab: Your First App Intent</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
      In this lab you will add App Intents to a simple notes app. By the end, your app will expose a <IC>CreateNoteIntent</IC> that Siri and the Shortcuts app can discover and invoke — testable right now on any iOS 16+ simulator.
    </p>

    <Note>
      <strong>iOS 16+ required.</strong> App Intents require a deployment target of iOS 16.0 or later. Unlike Android AppFunctions, no special hardware is needed — the Shortcuts app on any iOS 16+ simulator or device is enough to test your intent end-to-end.
    </Note>

    <div style={{ margin: "20px 0" }}>

      <VStep num={1} title="Create or open a project">
        <p>You can use an existing SwiftUI notes app from a previous week, or create a new App project in Xcode. Either way, confirm that your deployment target is set to <strong>iOS 16 or later</strong>: in Xcode, select the project in the navigator → select your app target → General tab → check <strong>Minimum Deployments</strong>.</p>
        <p>You also need a simple <IC>NoteRepository</IC> to hold notes in memory. Add these two files to your project if you don't already have them:</p>
        <CodeB>{`// Note.swift
struct Note: Identifiable {
    let id: UUID
    var title: String
    var content: String
}`}</CodeB>
        <CodeB>{`// NoteRepository.swift
class NoteRepository {
    static let shared = NoteRepository()
    private init() {}

    private(set) var notes: [Note] = []

    @discardableResult
    func createNote(title: String, content: String) -> Note {
        let note = Note(id: UUID(), title: title, content: content)
        notes.append(note)
        return note
    }

    func updateNote(id: UUID, title: String?, content: String?) -> Note? {
        guard let index = notes.firstIndex(where: { $0.id == id }) else { return nil }
        if let title { notes[index].title = title }
        if let content { notes[index].content = content }
        return notes[index]
    }
}`}</CodeB>
        <Checkpoint num={1}>Your project builds cleanly, targets iOS 16+, and <IC>NoteRepository.shared</IC> is accessible from any file in the target.</Checkpoint>
      </VStep>

      <VStep num={2} title="Create CreateNoteIntent">
        <p>
          Create a new Swift file called <IC>CreateNoteIntent.swift</IC>. This struct is the iOS equivalent of an <IC>@AppFunction</IC> — it declares a single, named capability that Siri and Apple Intelligence can invoke. The framework discovers it at build time by scanning for types conforming to <IC>AppIntent</IC>.
        </p>
        <p>A few rules to keep in mind throughout this step:</p>
        <ul style={{ margin: "8px 0 12px", paddingLeft: 20, lineHeight: 1.9, fontSize: 13 }}>
          <li><IC>title</IC> and <IC>description</IC> are what the agent reads — treat them as load-bearing documentation, not UI labels</li>
          <li><IC>@Parameter</IC> marks each input the agent can fill from the user's request</li>
          <li><IC>perform()</IC> is <IC>async throws</IC> — it runs your app logic when the intent is invoked</li>
        </ul>

        <VStep num="a" title="Conform to AppIntent and set the title and description">
          <p>
            Add <IC>import AppIntents</IC> at the top of the file. Then define <IC>struct CreateNoteIntent: AppIntent</IC>. Inside the struct, add two static properties:
          </p>
          <ul style={{ margin: "8px 0 10px", paddingLeft: 20, lineHeight: 1.9, fontSize: 13 }}>
            <li><IC>static var title: LocalizedStringResource = "Create Note"</IC> — this is the action name shown in the Shortcuts app and Siri confirmation UI</li>
            <li><IC>static var description = IntentDescription("...")</IC> — write a clear, specific sentence describing what this intent does. Apple Intelligence uses this for semantic matching.</li>
          </ul>
          <p>Don't add parameters or <IC>perform()</IC> yet — the struct won't compile until all required protocol members are present, and that's fine for now.</p>
          <Section title="✅ Check your work — show me CreateNoteIntent.swift so far">
            <CodeB>{`import AppIntents

struct CreateNoteIntent: AppIntent {

    static var title: LocalizedStringResource = "Create Note"

    static var description = IntentDescription(
        "Creates a new note in the app with a given title and body text."
    )
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="b" title="Add @Parameter properties">
          <p>
            Below the static properties, add two instance properties using the <IC>@Parameter</IC> property wrapper. Each <IC>@Parameter</IC> takes a <IC>title:</IC> (shown in the Shortcuts UI) and a <IC>description:</IC> (used by Apple Intelligence to understand what this parameter represents).
          </p>
          <ul style={{ margin: "8px 0 10px", paddingLeft: 20, lineHeight: 1.9, fontSize: 13 }}>
            <li>For the first parameter: title <IC>"Title"</IC>, description <IC>"The note's title."</IC>, declared as <IC>var title: String</IC></li>
            <li>For the second: title <IC>"Content"</IC>, description <IC>"The note's body text."</IC>, declared as <IC>var content: String</IC></li>
          </ul>
          <Tip>The property name (<IC>var title</IC>) and the <IC>@Parameter(title:)</IC> label are separate things. The label is for the UI; the property name is what you use in code.</Tip>
          <Section title="✅ Check your work — show me CreateNoteIntent.swift so far">
            <CodeB>{`import AppIntents

struct CreateNoteIntent: AppIntent {

    static var title: LocalizedStringResource = "Create Note"

    static var description = IntentDescription(
        "Creates a new note in the app with a given title and body text."
    )

    @Parameter(title: "Title", description: "The note's title.")
    var title: String

    @Parameter(title: "Content", description: "The note's body text.")
    var content: String
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="c" title="Implement perform()" last>
          <p>
            Add <IC>func perform() async throws -&gt; some IntentResult</IC>. This is where your app logic runs when Siri or Shortcuts invokes the intent. Inside:
          </p>
          <ul style={{ margin: "8px 0 10px", paddingLeft: 20, lineHeight: 1.9, fontSize: 13 }}>
            <li>Call <IC>NoteRepository.shared.createNote(title: title, content: content)</IC> — notice you access the parameters by their property names (<IC>title</IC>, <IC>content</IC>)</li>
            <li>Return <IC>.result()</IC> — a void result confirming the action completed successfully</li>
          </ul>
          <Section title="💡 Show me the IntentResult syntax">
            <p style={{ fontSize: 13, color: MUTED, marginBottom: 6 }}>The return type <IC>some IntentResult</IC> uses Swift's opaque return types. <IC>.result()</IC> is a static factory that constructs the concrete result:</p>
            <CodeB>{`func perform() async throws -> some IntentResult {
    // do work ...
    return .result()          // void — action succeeded
    // return .result(value:) // if you want to return a value
}`}</CodeB>
          </Section>
          <Section title="✅ Check your work — show me the complete CreateNoteIntent.swift">
            <CodeB>{`import AppIntents

struct CreateNoteIntent: AppIntent {

    static var title: LocalizedStringResource = "Create Note"

    static var description = IntentDescription(
        "Creates a new note in the app with a given title and body text."
    )

    @Parameter(title: "Title", description: "The note's title.")
    var title: String

    @Parameter(title: "Content", description: "The note's body text.")
    var content: String

    func perform() async throws -> some IntentResult {
        await NoteRepository.shared.createNote(title: title, content: content)
        return .result()
    }
}`}</CodeB>
          </Section>
        </VStep>

        <AiOpp>
          Ask your AI assistant: <em>"What would be a good second App Intent to add to this notes app — maybe for listing or editing notes? Write it with a clear title, description, and @Parameter properties, and explain what the perform() body should do."</em> Compare how it approaches description writing to what you wrote for <IC>CreateNoteIntent</IC>.
        </AiOpp>

        <Checkpoint num={2}>Your <IC>CreateNoteIntent.swift</IC> compiles with no errors. Xcode recognizes <IC>AppIntent</IC>, <IC>@Parameter</IC>, and <IC>IntentDescription</IC> without red underlines.</Checkpoint>
      </VStep>

      <VStep num={3} title="Create AppShortcutsProvider">
        <p>
          An <IC>AppShortcutsProvider</IC> registers the natural language phrases that trigger your intent. Without it, your intent only appears in the Shortcuts app when a user manually searches for it. With it, Siri can match spoken phrases to your intent automatically.
        </p>

        <VStep num="a" title="Create the NoteShortcuts struct">
          <p>
            Create a new Swift file called <IC>NoteShortcuts.swift</IC>. Add <IC>import AppIntents</IC> and define <IC>struct NoteShortcuts: AppShortcutsProvider</IC>. Add the required static computed property <IC>static var appShortcuts: [AppShortcut]</IC> and return an empty array for now — you'll fill it in the next sub-step.
          </p>
          <Section title="✅ Check your work — show me NoteShortcuts.swift so far">
            <CodeB>{`import AppIntents

struct NoteShortcuts: AppShortcutsProvider {
    static var appShortcuts: [AppShortcut] {
        []
    }
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="b" title="Add phrases for CreateNoteIntent" last>
          <p>
            Replace the empty array with an <IC>AppShortcut</IC> for your <IC>CreateNoteIntent</IC>. You need four things:
          </p>
          <ul style={{ margin: "8px 0 10px", paddingLeft: 20, lineHeight: 1.9, fontSize: 13 }}>
            <li><IC>intent: CreateNoteIntent()</IC> — an instance of the intent this shortcut triggers</li>
            <li><IC>phrases:</IC> — an array of natural language strings. At least one phrase <strong>must</strong> contain <IC>\(.applicationName)</IC>, which the system replaces with your app's name at runtime</li>
            <li><IC>shortTitle:</IC> — a short display name for the Shortcuts app</li>
            <li><IC>systemImageName:</IC> — an SF Symbol name for the icon (try <IC>"note.text.badge.plus"</IC>)</li>
          </ul>
          <Tip>The <IC>\(.$title)</IC> syntax lets users speak the parameter value inline — e.g. "Add a note called Shopping list in MyApp." The <IC>.$</IC> prefix refers to the <IC>@Parameter</IC> property on your intent.</Tip>
          <Section title="✅ Check your work — show me the complete NoteShortcuts.swift">
            <CodeB>{`import AppIntents

struct NoteShortcuts: AppShortcutsProvider {
    static var appShortcuts: [AppShortcut] {
        AppShortcut(
            intent: CreateNoteIntent(),
            phrases: [
                "Create a note in \\(.applicationName)",
                "Add a note in \\(.applicationName)",
                "New note in \\(.applicationName)",
                "Add a note called \\(\\.$title) in \\(.applicationName)"
            ],
            shortTitle: "Create Note",
            systemImageName: "note.text.badge.plus"
        )
    }
}`}</CodeB>
          </Section>
        </VStep>

        <Checkpoint num={3}>Your project compiles with no errors. Both <IC>CreateNoteIntent.swift</IC> and <IC>NoteShortcuts.swift</IC> are in your target.</Checkpoint>
      </VStep>

      <VStep num={4} title="Build and test with the Shortcuts app">
        <p>Build and run your app on the iOS simulator or a physical device. You don't need to do anything inside the app itself — App Intents are registered by the framework at launch. Then:</p>
        <ol style={{ margin: "8px 0 12px", paddingLeft: 20, lineHeight: 2, fontSize: 13 }}>
          <li>Open the <strong>Shortcuts</strong> app on the simulator</li>
          <li>Tap <strong>+</strong> to create a new shortcut</li>
          <li>Tap <strong>Add Action</strong> and search for your app name</li>
          <li>You should see <strong>"Create Note"</strong> listed — tap it to add it</li>
          <li>Fill in the Title and Content parameters, then tap <strong>Run</strong></li>
        </ol>
        <Section title="Intent not showing up in Shortcuts?">
          <ol style={{ paddingLeft: 20, lineHeight: 2, fontSize: 13 }}>
            <li><strong>Clean build</strong>: Product → Clean Build Folder, then build again. App Intent metadata is generated at build time.</li>
            <li><strong>Check your target membership</strong>: Select <IC>CreateNoteIntent.swift</IC> and <IC>NoteShortcuts.swift</IC> in the file inspector — make sure both are checked for your app target.</li>
            <li><strong>Confirm deployment target</strong>: Project → target → General → Minimum Deployments must be iOS 16.0 or later.</li>
            <li><strong>Re-install the app</strong>: Delete the app from the simulator and run again to force a fresh registration.</li>
          </ol>
        </Section>
        <Checkpoint num={4}>Your <IC>CreateNoteIntent</IC> appears in the Shortcuts app under your app name. Running it with parameters invokes <IC>NoteRepository.shared.createNote</IC>.</Checkpoint>
      </VStep>

      <VStep num={5} title="Test with Siri">
        <p>
          With <IC>AppShortcutsProvider</IC> in place, Siri already knows the phrases you registered. To test on the simulator, use the <strong>Siri</strong> button in the simulator's hardware menu, or type a query using <strong>Siri Text Input</strong>. On a physical device, say <em>"Hey Siri"</em> followed by one of your registered phrases.
        </p>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "12px 14px", margin: "8px 0" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Try saying:</p>
          {[
            '"Create a note in [YourAppName]"',
            '"Add a note called Shopping list in [YourAppName]"',
          ].map(phrase => (
            <div key={phrase} style={{ display: "flex", gap: 8, margin: "6px 0", alignItems: "center" }}>
              <span style={{ color: IOS, fontWeight: 700, flexShrink: 0 }}>▸</span>
              <span style={{ fontSize: 13, fontStyle: "italic", color: "var(--color-text-primary)" }}>{phrase}</span>
            </div>
          ))}
        </div>
        <Tip>If Siri responds generically instead of invoking your intent, it may not have matched your phrase. Try rephrasing or check that your <IC>AppShortcutsProvider</IC> includes the spoken phrase. Also make sure the app has been launched at least once since the last build so App Intents are registered.</Tip>
        <Checkpoint num={5}>Siri (or Siri Text Input on the simulator) recognizes one of your phrases and invokes <IC>CreateNoteIntent</IC>, confirming the note was created.</Checkpoint>
      </VStep>

      <VStep num={6} title="Reflection" last>
        <p>Take a few minutes to reflect on what you built and the differences between the two platform approaches.</p>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "12px 14px", margin: "8px 0" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Write your answers as a comment block at the top of <IC>CreateNoteIntent.swift</IC>:</p>
          <ol style={{ paddingLeft: 20, lineHeight: 2, fontSize: 13, color: "var(--color-text-primary)", margin: 0 }}>
            <li>Why does <IC>AppShortcutsProvider</IC> require <IC>\(.applicationName)</IC> in at least one phrase? What problem does that solve?</li>
            <li>How does the iOS <IC>description</IC> property compare to KDoc on Android AppFunctions — what role does each play in agent discovery?</li>
            <li>You implemented <IC>CreateNoteIntent</IC>. What would <IC>ListNotesIntent</IC> look like? What return type would <IC>perform()</IC> use, and what would the description say?</li>
          </ol>
        </div>
        <AiOpp>
          Ask your AI assistant to review your <IC>CreateNoteIntent</IC>. Prompt: <em>"Review the title, description, and @Parameter descriptions on my App Intent. For each one, tell me if it's specific enough for Apple Intelligence to reliably know when and how to use it — and suggest improvements if not."</em>
        </AiOpp>
      </VStep>

    </div>
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

/* ══════════════════════ RESOURCES ═════════════════════════════════════════════ */
const Resources = () => {
  const groups: { heading: string; accent: string; accentLight: string; items: { title: string; description: string; url: string; tag: string; tagColor: string }[] }[] = [
    {
      heading: "Official Documentation",
      accent: P_C,
      accentLight: PL,
      items: [
        {
          title: "AppFunctions — Android Developers",
          description: "The official developer guide covering AppFunction declaration, the Jetpack library setup, schema generation, and the AppFunctionManager API.",
          url: "https://developer.android.com/ai/appfunctions",
          tag: "Official docs",
          tagColor: "purple",
        },
        {
          title: "androidx.appfunctions release notes",
          description: "Track the current alpha version of the AppFunctions Jetpack library, changelog, and known issues before adding it to your build.gradle.",
          url: "https://developer.android.com/jetpack/androidx/releases/appfunctions",
          tag: "Release notes",
          tagColor: "purple",
        },
      ],
    },
    {
      heading: "Background & Vision",
      accent: T_C,
      accentLight: TL,
      items: [
        {
          title: "The Intelligent OS: Making AI Agents Work for You",
          description: "The Android Developers blog post introducing the agent-centric OS vision, AppFunctions, the UI automation layer, and the Galaxy S26 rollout.",
          url: "https://android-developers.googleblog.com/2026/02/the-intelligent-os-making-ai-agents.html",
          tag: "Blog post",
          tagColor: "teal",
        },
        {
          title: "Model Context Protocol — Introduction",
          description: "The MCP specification that AppFunctions mirrors conceptually. Understanding MCP helps reinforce the Declare → Schema → Discover → Execute mental model.",
          url: "https://modelcontextprotocol.io/docs/getting-started/intro",
          tag: "MCP",
          tagColor: "teal",
        },
      ],
    },
    {
      heading: "Early Access & Community",
      accent: AM,
      accentLight: AML,
      items: [
        {
          title: "AppFunctions Early Access Program",
          description: "Register to get early access to the full AppFunctions pipeline including Gemini invocation. Google will follow up if selected.",
          url: "https://forms.gle/GN5ybjQFhzHRCguM7",
          tag: "EAP",
          tagColor: "amber",
        },
        {
          title: "File an issue — AppFunctions tracker",
          description: "Found a bug or want to request a feature? The official issue tracker for the AppFunctions component. Feedback directly influences the stable API.",
          url: "https://issuetracker.google.com/issues/new?component=1709065&template=2081773",
          tag: "Issue tracker",
          tagColor: "amber",
        },
      ],
    },
  ];

  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>Resources</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
        AppFunctions is a fast-moving API — bookmark the official docs and release notes so you can track changes as it moves toward stable.
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
export default function AppFunctionsUnit() {
  const [tab, setTab] = useState("Overview");

  return (
    <div style={{ fontFamily: "var(--font-sans)", maxWidth: 720, margin: "0 auto", padding: "24px 24px 48px" }}>
      {/* Tab bar */}
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
