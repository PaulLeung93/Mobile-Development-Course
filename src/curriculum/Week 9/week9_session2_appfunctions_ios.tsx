import { useState } from "react";

const PURPLE = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT = "#EEEDFE";
const TEAL = "#1D9E75";
const TEAL_LIGHT = "#E1F5EE";
const IOS = "#F05138";
const IOS_LIGHT = "#FFF2F0";
const IOS_DARK = "#B83A1F";
const GRAY = "#F5F5F7";
const TEXT = "#1a1a2e";
const MUTED = "#6b7280";

const Tag = ({ children, color = PURPLE }: { children: React.ReactNode; color?: string }) => (
  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" as const, background: color === "#fff" ? "rgba(255,255,255,0.2)" : IOS_LIGHT, color, padding: "2px 8px", borderRadius: 20 }}>{children}</span>
);

const CodePane = ({ title, accent = IOS, children }: { title: string; accent?: string; children: React.ReactNode }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0", letterSpacing: ".04em" }}>{title}</div>
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: "0 0 8px 8px", lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Bullet = ({ children, sub = false }: { children: React.ReactNode; sub?: boolean }) => (
  <div style={{ display: "flex", gap: 8, margin: sub ? "3px 0 3px 20px" : "7px 0", alignItems: "flex-start" }}>
    <span style={{ color: sub ? TEAL : IOS, fontWeight: 700, fontSize: sub ? 12 : 14, marginTop: 1, flexShrink: 0 }}>{sub ? "◦" : "▸"}</span>
    <span style={{ fontSize: sub ? 13 : 14, color: sub ? MUTED : TEXT, lineHeight: 1.5 }}>{children}</span>
  </div>
);

const Notes = ({ children }: { children: string }) => (
  <div style={{ borderTop: `2px dashed ${IOS_LIGHT}`, marginTop: 14, paddingTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: IOS, margin: "0 0 3px", textTransform: "uppercase" as const, letterSpacing: ".06em" }}>Speaker notes</p>
    <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>{children}</p>
  </div>
);

const Discussion = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "10px 14px", margin: "10px 0" }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: TEAL, margin: "0 0 3px", textTransform: "uppercase" as const, letterSpacing: ".06em" }}>Discussion prompt</p>
    <p style={{ fontSize: 13, color: "#085041", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Warn = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "8px 12px", margin: "8px 0" }}>
    <p style={{ fontSize: 12, fontWeight: 600, color: "#92400e", margin: "0 0 2px" }}>{title}</p>
    <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Info = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: IOS_LIGHT, borderRadius: 8, padding: "8px 14px", margin: "8px 0" }}>
    <p style={{ fontSize: 12, color: IOS_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const IC = ({ children }: { children: React.ReactNode }) => (
  <code style={{ background: GRAY, border: "0.5px solid #e5e7eb", borderRadius: 4, padding: "1px 5px", fontSize: 11 }}>{children}</code>
);

const Shell = ({ tag, tagColor, title, subtitle, timer, children, notes, dark = false }: {
  tag?: string; tagColor?: string; title: string; subtitle?: string;
  timer?: string; children: React.ReactNode; notes?: string; dark?: boolean;
}) => (
  <div style={{ background: dark ? IOS_DARK : "#fff", border: `1px solid ${dark ? "transparent" : "#e5e7eb"}`, borderRadius: 12, padding: "24px 28px 18px", minHeight: 360, display: "flex", flexDirection: "column", boxSizing: "border-box" as const }}>
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        {tag && <Tag color={dark ? "#fff" : (tagColor || IOS)}>{tag}</Tag>}
        {timer && <span style={{ fontSize: 11, color: MUTED, background: GRAY, padding: "2px 8px", borderRadius: 20 }}>~{timer} min</span>}
      </div>
      <h2 style={{ fontSize: dark ? 24 : 20, fontWeight: 700, color: dark ? "#fff" : TEXT, margin: 0, lineHeight: 1.2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 13, color: dark ? "rgba(255,255,255,0.65)" : MUTED, margin: "5px 0 0", lineHeight: 1.4 }}>{subtitle}</p>}
    </div>
    <div style={{ flex: 1 }}>{children}</div>
    {notes && <Notes>{notes}</Notes>}
  </div>
);

const slides = [
  // ─── SLIDE 1: Title ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${IOS_DARK} 0%, ${IOS} 60%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" as const }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 9 · iOS 16+</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>App Intents<br />iOS Apps in the Age of AI Agents</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>How to expose your app's capabilities so Siri and Apple Intelligence can act on behalf of your users</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["iOS 16+", "Swift", "AppIntents framework"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid rgba(255,255,255,0.4)`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Welcome to the iOS side of the App Capabilities unit. Unlike Android AppFunctions which is still experimental, App Intents is a stable, shipping API that has been available since iOS 16 (2022). The conceptual model is identical — expose capabilities, agents discover and invoke them — but the Swift implementation is different. Students who completed the Android slides should find this familiar in structure."}</Notes>
    </div>
  ),

  // ─── SLIDE 2: Agenda ───
  () => (
    <Shell tag="Agenda" title="What we'll cover" notes="This deck mirrors the Android AppFunctions slides in structure but focuses on the iOS-native implementation. If students have already seen the Android deck, the concept slides will be review — you can move quickly through slides 3 and 4 and spend more time on the implementation slides. The big win to emphasize early: App Intents is stable and testable right now on any iOS 16+ device.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "5 min",  title: "The agent-centric shift on iOS",       desc: "Apple Intelligence and the evolution of Siri" },
          { num: "02", time: "5 min",  title: "What is an App Intent?",               desc: "The concept and how it maps to Android AppFunctions" },
          { num: "03", time: "5 min",  title: "The two tiers",                        desc: "iOS 16+ (Siri/Shortcuts) vs iOS 18.1+ (Apple Intelligence)" },
          { num: "04", time: "15 min", title: "Implementation walkthrough",           desc: "AppIntent struct, @Parameter, perform(), AppShortcutsProvider" },
          { num: "05", time: "5 min",  title: "Apple Intelligence upgrade",           desc: "@AssistantIntent and semantic domain schemas" },
          { num: "06", time: "5 min",  title: "Testing with the Shortcuts app",       desc: "No special hardware needed — test on any iOS 16+ device" },
        ].map(item => (
          <div key={item.num} style={{ display: "flex", gap: 10, padding: "9px 11px", background: GRAY, borderRadius: 8, alignItems: "flex-start" }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: IOS_LIGHT, flexShrink: 0, lineHeight: 1, minWidth: 22 }}>{item.num}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>{item.title}</p>
                <span style={{ fontSize: 10, color: MUTED, flexShrink: 0, marginLeft: 6 }}>{item.time}</span>
              </div>
              <p style={{ fontSize: 11, color: MUTED, margin: "2px 0 0", lineHeight: 1.3 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── SLIDE 3: The shift on iOS ───
  () => (
    <Shell tag="Context" timer="5" title="The agent-centric shift — the Apple story" notes="Students may know Siri as 'the assistant that never works.' That reputation comes from Siri's pre-2022 architecture: domain-limited, brittle, no developer control. App Intents and Apple Intelligence are a clean break from that. The key message: Apple has rebuilt the entire pipeline from the ground up, and the developer story is finally good.">
      <div style={{ marginTop: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
          {[
            { year: "Pre-2022", label: "Old Siri / SiriKit", desc: "Domain-locked (messaging, payments). Rigid schemas. Almost impossible to integrate.", bg: GRAY, accent: MUTED },
            { year: "iOS 16 — 2022", label: "App Intents", desc: "Developer-defined intents. Works with Siri, Shortcuts, and Spotlight. Fully flexible.", bg: IOS_LIGHT, accent: IOS_DARK },
            { year: "iOS 18.1 — 2024", label: "Apple Intelligence", desc: "On-device AI model that understands natural language and invokes your App Intents automatically.", bg: PURPLE_LIGHT, accent: PURPLE_DARK },
          ].map(era => (
            <div key={era.year} style={{ background: era.bg, borderRadius: 8, padding: "12px 14px" }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: era.accent, textTransform: "uppercase" as const, letterSpacing: ".06em", margin: "0 0 4px" }}>{era.year}</p>
              <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "0 0 6px" }}>{era.label}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>{era.desc}</p>
            </div>
          ))}
        </div>
        <Info>{"App Intents is the foundation for all of this. An intent you write today works with Siri, Shortcuts, Spotlight, and Apple Intelligence — the same declaration powers all four invocation paths."}</Info>
        <Discussion>{"Siri has been on iPhones since 2011 — over a decade. Why do you think it took until 2022 for Apple to give developers a flexible way to integrate with it? What might have changed?"}</Discussion>
      </div>
    </Shell>
  ),

  // ─── SLIDE 4: What is an App Intent? ───
  () => (
    <Shell tag="Core Concept" timer="5" title="What is an App Intent?" subtitle="The same idea as AppFunctions — different API, same mental model" notes="If students have seen the Android slides, this is quick review. The core concept is identical: your app declares capabilities, the system indexes them, an agent invokes them. The key difference is implementation: Swift protocols and property wrappers instead of Kotlin annotations. Make the connection explicit for students who have seen both.">
      <div style={{ marginTop: 6 }}>
        <p style={{ fontSize: 13, color: MUTED, margin: "0 0 12px", lineHeight: 1.6 }}>
          An <strong style={{ color: TEXT }}>App Intent</strong> is a capability your app declares as a Swift struct — a specific, named action that Siri, Shortcuts, and Apple Intelligence can discover and invoke on the user's behalf.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <div style={{ background: GRAY, border: "1px solid #e5e7eb", borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: MUTED, margin: "0 0 8px", textTransform: "uppercase" as const }}>Android AppFunctions</p>
            <Bullet sub>Annotate a method with <IC>@AppFunction</IC></Bullet>
            <Bullet sub>Document with KDoc — agent reads the description</Bullet>
            <Bullet sub>First param is always <IC>AppFunctionContext</IC></Bullet>
            <Bullet sub>Returns a <IC>@AppFunctionSerializable</IC> type</Bullet>
          </div>
          <div style={{ background: IOS_LIGHT, border: `1px solid ${IOS}`, borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: IOS_DARK, margin: "0 0 8px", textTransform: "uppercase" as const }}>iOS App Intents</p>
            <Bullet sub>Conform a struct to <IC>AppIntent</IC> protocol</Bullet>
            <Bullet sub>Set <IC>title</IC> and <IC>description</IC> — agent reads these</Bullet>
            <Bullet sub>Parameters use <IC>@Parameter</IC> property wrapper</Bullet>
            <Bullet sub>Return type is <IC>some IntentResult</IC></Bullet>
          </div>
        </div>
        <Info>{"The mental model is the same: Declare → Index → Discover → Execute. The syntax is Swift-idiomatic — protocols and property wrappers instead of Java-style annotations."}</Info>
      </div>
    </Shell>
  ),

  // ─── SLIDE 5: Two tiers ───
  () => (
    <Shell tag="Context" timer="5" title="Two tiers: Siri/Shortcuts and Apple Intelligence" subtitle="You write the intent once — it works with both" notes="This is an important distinction that students often miss. A basic App Intent (iOS 16+) works with Siri and the Shortcuts app today, on any device. Apple Intelligence (iOS 18.1+) adds a second invocation path — the on-device AI model — but only requires adding the @AssistantIntent annotation on top of the existing intent. Emphasize that you are not choosing between tiers; you build for iOS 16+ and opt into Apple Intelligence as an upgrade.">
      <div style={{ marginTop: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={{ background: IOS_LIGHT, border: `1.5px solid ${IOS}`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: IOS_DARK, margin: 0 }}>Tier 1 — Base App Intent</p>
              <span style={{ fontSize: 10, fontWeight: 600, background: IOS, color: "#fff", padding: "2px 7px", borderRadius: 10, flexShrink: 0 }}>iOS 16+</span>
            </div>
            <Bullet sub>Works with Siri voice commands</Bullet>
            <Bullet sub>Appears in the Shortcuts app</Bullet>
            <Bullet sub>Accessible via Spotlight search</Bullet>
            <Bullet sub>Can be automated by users</Bullet>
            <div style={{ marginTop: 10, padding: "8px 10px", background: "rgba(240,81,56,0.1)", borderRadius: 6 }}>
              <p style={{ fontSize: 11, color: IOS_DARK, margin: 0 }}>Available on <strong>any device</strong> running iOS 16+. No special hardware needed.</p>
            </div>
          </div>
          <div style={{ background: PURPLE_LIGHT, border: `1.5px solid ${PURPLE}`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: PURPLE_DARK, margin: 0 }}>Tier 2 — Apple Intelligence</p>
              <span style={{ fontSize: 10, fontWeight: 600, background: PURPLE, color: "#fff", padding: "2px 7px", borderRadius: 10, flexShrink: 0 }}>iOS 18.1+</span>
            </div>
            <Bullet sub>On-device AI model understands natural language</Bullet>
            <Bullet sub>Can chain your intent with other app intents</Bullet>
            <Bullet sub>Requires <IC>@AssistantIntent</IC> annotation</Bullet>
            <Bullet sub>Semantic domain schemas (notes, tasks, calendar)</Bullet>
            <div style={{ marginTop: 10, padding: "8px 10px", background: "rgba(83,74,183,0.1)", borderRadius: 6 }}>
              <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0 }}>Requires iPhone 15 Pro or newer, iOS 18.1+.</p>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 6: Anatomy of an AppIntent struct ───
  () => (
    <Shell tag="Implementation" timer="5" title="Anatomy of an AppIntent struct" notes="Walk through each part of the struct carefully — students coming from the Android side will notice that the 'documentation' is not comments but actual Swift properties. title and description are real values in the struct that the framework reads at runtime. This is different from KDoc, which the compiler reads at build time. The implication: you could make these dynamic at runtime if you wanted to.">
      <CodePane title="CreateNoteIntent.swift" accent={IOS}>{`import AppIntents

struct CreateNoteIntent: AppIntent {

    // What Siri and Shortcuts show as the action name
    static var title: LocalizedStringResource = "Create Note"

    // What the agent reads to understand when to use this intent
    static var description = IntentDescription(
        "Creates a new note with the given title and content."
    )

    // Parameters — filled in by the agent or the user
    @Parameter(title: "Title",   description: "The note's title")
    var title: String

    @Parameter(title: "Content", description: "The note's body text")
    var content: String

    // The work — always async throws
    func perform() async throws -> some IntentResult {
        await NoteRepository.shared.createNote(
            title: title, content: content
        )
        return .result()
    }
}`}</CodePane>
      <Notes>{"Point out the LocalizedStringResource type for title — this means the title is automatically localizable for different languages, which is a nice detail. Also note that perform() is async throws — it can do network or database I/O and can throw errors that Siri will surface to the user."}</Notes>
    </Shell>
  ),

  // ─── SLIDE 7: @Parameter in depth ───
  () => (
    <Shell tag="Implementation" timer="5" title="@Parameter — describing your inputs" notes="@Parameter is richer than just a title and description. The requestValueDialog is what Siri says when it needs to ask the user for this parameter — 'What should the note be called?' Students should write these as natural conversational prompts, not technical field names. This is where the human-AI interaction design lives.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px", lineHeight: 1.5 }}>
        <IC>@Parameter</IC> is a property wrapper that marks a property as an input the agent can fill. You can configure how Siri prompts the user if it needs to ask for the value.
      </p>
      <CodePane title="Parameters with prompts" accent={IOS}>{`@Parameter(
    title: "Title",
    description: "The note's title.",
    requestValueDialog: IntentDialog("What should the note be called?")
)
var title: String

// Optional parameter — agent can omit it
@Parameter(
    title: "Content",
    description: "The body text. Leave empty for a blank note.",
    default: ""
)
var content: String = ""`}</CodePane>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
        {[
          { label: "title",               desc: "Shown in the Shortcuts UI and Siri confirmation" },
          { label: "description",         desc: "Read by Apple Intelligence for semantic matching" },
          { label: "requestValueDialog",  desc: "What Siri says when it needs to ask the user" },
          { label: "default",             desc: "Used when the user or agent omits the parameter" },
        ].map(row => (
          <div key={row.label} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "6px 0" }}>
            <IC>{row.label}</IC>
            <span style={{ fontSize: 11, color: MUTED, lineHeight: 1.5 }}>{row.desc}</span>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── SLIDE 8: perform() and return types ───
  () => (
    <Shell tag="Implementation" timer="5" title="perform() — the implementation" notes="The IntentResult composition syntax using & is a Swift feature called protocol composition. Students who are still learning Swift may find it surprising. The analogy: think of it as adding optional capabilities to the result type — you can add ReturnsValue, OpensIntent, ShowsSnippetView, etc. Each one adds a new thing the result can do. For most simple intents, just returning .result() or .result(value:) is all you need.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px", lineHeight: 1.5 }}>
        <IC>perform()</IC> does the work and returns an <IC>IntentResult</IC>. You can compose the return type with <IC>&</IC> to add capabilities like returning a value or showing a confirmation.
      </p>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
        <CodePane title="Void result (action with no return value)" accent={MUTED}>{`func perform() async throws -> some IntentResult {
    await NoteRepository.shared.deleteNote(id: noteId)
    return .result()
}`}</CodePane>
        <CodePane title="Returning a value" accent={IOS}>{`func perform() async throws -> some IntentResult & ReturnsValue<String> {
    let note = await NoteRepository.shared.createNote(
        title: title, content: content
    )
    return .result(value: "Created: \(note.title)")
}`}</CodePane>
        <CodePane title="With a confirmation dialog" accent={PURPLE}>{`func perform() async throws -> some IntentResult & ReturnsValue<String> {
    return .result(
        value: "Note created",
        dialog: "Done! I created '\(title)' for you."
    )
}`}</CodePane>
      </div>
    </Shell>
  ),

  // ─── SLIDE 9: AppShortcutsProvider ───
  () => (
    <Shell tag="Implementation" timer="5" title="AppShortcutsProvider — making your intent discoverable" subtitle="This is how Siri learns the phrases that trigger your intent" notes="AppShortcutsProvider is the discoverability layer — without it, your intent only appears in the Shortcuts app when the user manually adds it. With it, Siri can suggest it proactively and users can say the phrases to invoke it. The .applicationName placeholder in phrases is required — it is how Siri disambiguates between apps that offer similar actions. The system automatically substitutes your app's name.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 8px", lineHeight: 1.5 }}>
        Create a struct conforming to <IC>AppShortcutsProvider</IC> and list the natural language phrases that should trigger your intent. These phrases are indexed by Siri and suggested to users.
      </p>
      <CodePane title="NoteShortcuts.swift" accent={IOS}>{`import AppIntents

struct NoteShortcuts: AppShortcutsProvider {
    static var appShortcuts: [AppShortcut] {
        AppShortcut(
            intent: CreateNoteIntent(),
            phrases: [
                "Create a note in \(.applicationName)",
                "Add a note called \(\.$title) in \(.applicationName)",
                "New note in \(.applicationName)"
            ],
            shortTitle: "Create Note",
            systemImageName: "note.text.badge.plus"
        )
    }
}`}</CodePane>
      <Info>{"The \\(.applicationName) placeholder is required in at least one phrase — it tells Siri which app to use. The \\(.$title) placeholder lets users speak the parameter value directly: 'Add a note called Shopping list in MyApp.'"}</Info>
    </Shell>
  ),

  // ─── SLIDE 10: AppEntity (brief) ───
  () => (
    <Shell tag="Implementation" timer="4" title="AppEntity — describing rich return types" subtitle="The iOS equivalent of @AppFunctionSerializable" notes="AppEntity is more involved than @AppFunctionSerializable on Android — it also powers Spotlight search and dynamic parameter lookup. For a beginner lab, returning strings or simple values is fine. This slide is here so students understand the concept exists and know where to go when they need it. Don't spend too long here.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 8px", lineHeight: 1.6 }}>
        If you want to return a structured object (not just a string), the type must conform to <IC>AppEntity</IC>. This lets Siri and Apple Intelligence understand the data's structure and display it meaningfully.
      </p>
      <CodePane title="NoteEntity.swift" accent={IOS}>{`import AppIntents

struct NoteEntity: AppEntity {
    // How this type is named in the Shortcuts UI
    static var typeDisplayRepresentation = TypeDisplayRepresentation(name: "Note")
    static var defaultQuery = NoteQuery()

    var id: UUID
    var title: String
    var content: String

    // How a single instance is displayed
    var displayRepresentation: DisplayRepresentation {
        .init(title: "\(title)", subtitle: "\(content.prefix(50))")
    }
}`}</CodePane>
      <Warn title="NoteQuery required">{"AppEntity requires a matching AppEntityQuery to support lookup by ID. See the official docs for the full setup — it's a few more structs but follows a predictable pattern."}</Warn>
    </Shell>
  ),

  // ─── SLIDE 11: @AssistantIntent ───
  () => (
    <Shell tag="Apple Intelligence" timer="4" title="@AssistantIntent — upgrading to Apple Intelligence" subtitle="iOS 18+ · One annotation, semantic AI integration" notes="@AssistantIntent maps your custom intent to one of Apple's predefined semantic schemas — things like 'create note', 'add task', 'schedule event'. Once mapped, Apple Intelligence's on-device model knows to invoke your intent when it detects that intent in natural language. The schema mapping also helps Apple Intelligence chain intents intelligently across apps. Keep this slide brief — it's a stretch goal for the lab, not a requirement.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 8px", lineHeight: 1.6 }}>
        Adding <IC>@AssistantIntent</IC> maps your intent to Apple's semantic domain schemas. This makes it available to the Apple Intelligence on-device model — not just Siri and Shortcuts.
      </p>
      <CodePane title="CreateNoteIntent.swift (iOS 18+)" accent={PURPLE}>{`import AppIntents

// Add @AssistantIntent on top of your existing intent struct
@AssistantIntent(schema: .notes.createNote)
struct CreateNoteIntent: AppIntent {
    static var title: LocalizedStringResource = "Create Note"

    @Parameter(title: "Title")
    var title: String

    @Parameter(title: "Content")
    var content: String

    func perform() async throws -> some IntentResult {
        await NoteRepository.shared.createNote(title: title, content: content)
        return .result()
    }
}`}</CodePane>
      <Info>{"The schema parameter (.notes.createNote) tells Apple Intelligence that your intent maps to the universal concept of 'creating a note.' This enables cross-app reasoning — Apple Intelligence can use your intent as part of a multi-step workflow even if the user didn't name your app."}</Info>
    </Shell>
  ),

  // ─── SLIDE 12: Testing with Shortcuts ───
  () => (
    <Shell tag="Testing" timer="5" title="Testing with the Shortcuts app" subtitle="No special hardware needed — works on any iOS 16+ device" notes="This is the key advantage iOS has over Android AppFunctions right now. Every student with an iPhone can test their App Intent immediately using the Shortcuts app. Siri testing is also available. Walk through the steps live if possible — it's satisfying to see your intent appear in the Shortcuts app within seconds of building and running.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px", lineHeight: 1.5 }}>
        Unlike Android AppFunctions (which requires Gemini on specific hardware), you can test your App Intent right now using the built-in <strong>Shortcuts app</strong> — available on every iPhone running iOS 16+.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
        <div style={{ background: IOS_LIGHT, border: `1px solid ${IOS}`, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: IOS_DARK, margin: "0 0 8px" }}>Via Shortcuts app</p>
          {["Build and run your app on the simulator or device", "Open the Shortcuts app", "Tap + to create a new shortcut", "Search for your app name — your intents should appear", "Add the intent, fill in parameters, and tap Run"].map((s, i) => (
            <div key={s} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "flex-start" }}>
              <span style={{ background: IOS, color: "#fff", borderRadius: "50%", width: 16, height: 16, fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
              <span style={{ fontSize: 11, color: TEXT, lineHeight: 1.4 }}>{s}</span>
            </div>
          ))}
        </div>
        <div style={{ background: PURPLE_LIGHT, border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 8px" }}>Via Siri (voice)</p>
          {['Say: "Hey Siri, create a note in [YourApp]"', "Siri uses your AppShortcutsProvider phrases to match", "If the parameter is missing, Siri prompts the user with your requestValueDialog", "The intent executes and Siri confirms the result"].map((s, i) => (
            <div key={s} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "flex-start" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 16, height: 16, fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
              <span style={{ fontSize: 11, color: TEXT, lineHeight: 1.4 }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
      <Info>{"If your intent doesn't appear in Shortcuts, rebuild the app — App Intents metadata is generated at build time by the framework. A clean build usually resolves it."}</Info>
    </Shell>
  ),

  // ─── SLIDE 13: Best Practices ───
  () => (
    <Shell tag="Best Practices" timer="4" title="Writing App Intents well" notes="The most common beginner mistake is writing intents that are too broad — one intent that does three different things depending on which parameters are filled. Keep them narrow. Also note that the requestValueDialog is often forgotten but is one of the most important user-experience details — it determines how natural the Siri interaction feels.">
      <div style={{ marginTop: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { title: "One intent, one action",         desc: "Keep intents narrow. createNote and editNote should be separate structs, not one 'upsertNote' with conditional logic.",           color: IOS_LIGHT,    accent: IOS_DARK },
            { title: "Write human requestValueDialogs", desc: "If Siri has to ask for a parameter, it uses your requestValueDialog. Write it as a natural question, not a field label.",          color: TEAL_LIGHT,   accent: TEAL },
            { title: "Use meaningful descriptions",     desc: "description on your intent is what Apple Intelligence uses for semantic matching. Be specific about what the intent does and when.", color: PURPLE_LIGHT,  accent: PURPLE_DARK },
            { title: "Provide AppShortcutsProvider",    desc: "Without it, your intent only appears when users manually search for it. With it, Siri can suggest it proactively.",                 color: GRAY,         accent: MUTED },
          ].map(item => (
            <div key={item.title} style={{ background: item.color, borderRadius: 8, padding: "12px 14px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: item.accent, margin: "0 0 5px" }}>{item.title}</p>
              <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 14: Wrap-up ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${IOS_DARK} 0%, ${IOS} 60%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" as const }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Wrap-up</Tag></div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Key takeaways</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>What to carry forward from the iOS side</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase" as const, letterSpacing: ".06em" }}>The concept (same as Android)</p>
            {[
              "Declare capabilities → system indexes them → agent invokes them",
              "title + description drive agent discovery, just like KDoc on Android",
              "App Intents is stable and ships on iOS 16+ — test right now in Shortcuts",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "8px 0" }}>
                <span style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0, marginTop: 2 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase" as const, letterSpacing: ".06em" }}>The iOS specifics</p>
            {[
              "Conform a struct to AppIntent — title, description, @Parameter, perform()",
              "Add AppShortcutsProvider with phrases to make it discoverable by Siri",
              "Add @AssistantIntent(schema:) to upgrade to Apple Intelligence (iOS 18.1+)",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "8px 0" }}>
                <span style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0, marginTop: 2 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>{"Close with the comparison: 'Android AppFunctions and iOS App Intents solve the same problem with different APIs. The pattern — declare, index, discover, execute — is universal. If you understand it on one platform, you understand it on both. That cross-platform mental model is exactly the kind of thing that makes you a better engineer regardless of which platform you end up working on.'"}</Notes>
    </div>
  ),
];

export default function AppFunctionsIosSlides() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase" as const, letterSpacing: ".06em" }}>Week 9 · S2 iOS · App Intents · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 600, color: TEXT, margin: 0 }}>iOS Apps in the Age of AI Agents</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setCur(c => Math.max(0, c - 1))} disabled={cur === 0} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${IOS_LIGHT}`, background: cur === 0 ? GRAY : IOS_LIGHT, color: cur === 0 ? MUTED : IOS_DARK, cursor: cur === 0 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>← Prev</button>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 64, textAlign: "center" as const }}>{cur + 1} / {slides.length}</span>
          <button onClick={() => setCur(c => Math.min(slides.length - 1, c + 1))} disabled={cur === slides.length - 1} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${IOS_LIGHT}`, background: cur === slides.length - 1 ? GRAY : IOS, color: cur === slides.length - 1 ? MUTED : "#fff", cursor: cur === slides.length - 1 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>Next →</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: 26, height: 26, borderRadius: 5, border: `1.5px solid ${i === cur ? IOS : "#e5e7eb"}`, background: i === cur ? IOS : "#fff", color: i === cur ? "#fff" : MUTED, fontSize: 10, fontWeight: 600, cursor: "pointer" }}>{i + 1}</button>
        ))}
      </div>
      {slides[cur]()}
    </div>
  );
}
