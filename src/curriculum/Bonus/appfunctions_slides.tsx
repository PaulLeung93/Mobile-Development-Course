import { useState } from "react";

const PURPLE = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT = "#EEEDFE";
const TEAL = "#1D9E75";
const TEAL_LIGHT = "#E1F5EE";
const AND_GREEN = "#3DDC84";
const AND_LIGHT = "#E8FBF0";
const AND_DARK = "#1E7A44";
const GRAY = "#F5F5F7";
const TEXT = "#1a1a2e";
const MUTED = "#6b7280";

const Tag = ({ children, color = PURPLE }: { children: React.ReactNode; color?: string }) => (
  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" as const, background: color === "#fff" ? "rgba(255,255,255,0.2)" : PURPLE_LIGHT, color, padding: "2px 8px", borderRadius: 20 }}>{children}</span>
);

const CodePane = ({ title, accent = PURPLE, children }: { title: string; accent?: string; children: React.ReactNode }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0", letterSpacing: ".04em" }}>{title}</div>
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: "0 0 8px 8px", lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Bullet = ({ children, sub = false }: { children: React.ReactNode; sub?: boolean }) => (
  <div style={{ display: "flex", gap: 8, margin: sub ? "3px 0 3px 20px" : "7px 0", alignItems: "flex-start" }}>
    <span style={{ color: sub ? TEAL : PURPLE, fontWeight: 700, fontSize: sub ? 12 : 14, marginTop: 1, flexShrink: 0 }}>{sub ? "◦" : "▸"}</span>
    <span style={{ fontSize: sub ? 13 : 14, color: sub ? MUTED : TEXT, lineHeight: 1.5 }}>{children}</span>
  </div>
);

const Notes = ({ children }: { children: string }) => (
  <div style={{ borderTop: `2px dashed ${PURPLE_LIGHT}`, marginTop: 14, paddingTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE, margin: "0 0 3px", textTransform: "uppercase" as const, letterSpacing: ".06em" }}>Speaker notes</p>
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
  <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "8px 14px", margin: "8px 0" }}>
    <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const IC = ({ children }: { children: React.ReactNode }) => (
  <code style={{ background: GRAY, border: "0.5px solid #e5e7eb", borderRadius: 4, padding: "1px 5px", fontSize: 11 }}>{children}</code>
);

const Shell = ({ tag, tagColor, title, subtitle, timer, children, notes, dark = false }: {
  tag?: string; tagColor?: string; title: string; subtitle?: string;
  timer?: string; children: React.ReactNode; notes?: string; dark?: boolean;
}) => (
  <div style={{ background: dark ? PURPLE_DARK : "#fff", border: `1px solid ${dark ? "transparent" : "#e5e7eb"}`, borderRadius: 12, padding: "24px 28px 18px", minHeight: 360, display: "flex", flexDirection: "column", boxSizing: "border-box" as const }}>
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        {tag && <Tag color={dark ? "#fff" : (tagColor || PURPLE)}>{tag}</Tag>}
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
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${AND_DARK} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" as const }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Bonus · Android 16</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>AppFunctions<br />Apps in the Age of AI Agents</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>How to expose your app's capabilities so AI can act on behalf of your users</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Android 16+", "Jetpack AppFunctions", "Kotlin"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${AND_GREEN}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Welcome to the AppFunctions bonus unit. This is a forward-looking topic — AppFunctions is still experimental as of 2026, but it represents the direction the Android ecosystem is heading. Today's goal: understand the concept deeply and get hands-on with a basic implementation. The exact API will change before stable, but the mental model will not."} </Notes>
    </div>
  ),

  // ─── SLIDE 2: Agenda ───
  () => (
    <Shell tag="Agenda" title="What we'll cover" notes="This is a bonus topic, so the format is more self-paced than a regular session. Walk through the agenda to set expectations. Emphasize that while the API is experimental, the concepts are production-relevant — students will encounter AppFunctions (or its successor) in real Android apps within 1-2 years.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "8 min",  title: "The shift to agent-centric apps",     desc: "How users are beginning to interact with Android differently" },
          { num: "02", time: "8 min",  title: "What are AppFunctions?",              desc: "The concept, the 4-step flow, and how agents discover your app" },
          { num: "03", time: "8 min",  title: "Real-world use cases",                desc: "Task management, media, cross-app workflows" },
          { num: "04", time: "12 min", title: "Implementation walkthrough",          desc: "Annotations, data classes, and the AppFunctionContext" },
          { num: "05", time: "5 min",  title: "Testing and best practices",          desc: "Verifying your functions are registered with ADB" },
          { num: "06", time: "—",      title: "Lab",                                 desc: "Build a simple AppFunction in a sample notes app" },
        ].map(item => (
          <div key={item.num} style={{ display: "flex", gap: 10, padding: "9px 11px", background: GRAY, borderRadius: 8, alignItems: "flex-start" }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: PURPLE_LIGHT, flexShrink: 0, lineHeight: 1, minWidth: 22 }}>{item.num}</span>
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

  // ─── SLIDE 3: The Shift ───
  () => (
    <Shell tag="Context" timer="5" title="The way people use phones is changing" notes="This is the most important framing slide — don't rush it. Ask the class: 'How many of you have asked a voice assistant to do something for you this week?' Use that to make the agent-centric shift feel real, not abstract. The key insight to land: AI agents are not replacing apps, they are adding a new way to invoke apps. Your app still does the work.">
      <div style={{ marginTop: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: MUTED, textTransform: "uppercase" as const, letterSpacing: ".06em", margin: "0 0 10px" }}>The old way</p>
            {["Unlock phone", "Find and open the right app", "Navigate to the right screen", "Fill in a form", "Tap submit"].map((step, i) => (
              <div key={step} style={{ display: "flex", gap: 8, margin: "6px 0", alignItems: "center" }}>
                <span style={{ background: "#e5e7eb", color: MUTED, borderRadius: "50%", width: 18, height: 18, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                <span style={{ fontSize: 12, color: TEXT }}>{step}</span>
              </div>
            ))}
          </div>
          <div style={{ background: AND_LIGHT, border: `1px solid ${AND_GREEN}`, borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: AND_DARK, textTransform: "uppercase" as const, letterSpacing: ".06em", margin: "0 0 10px" }}>The new way</p>
            <div style={{ background: "rgba(61,220,132,0.2)", borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: AND_DARK, margin: 0, lineHeight: 1.4, fontStyle: "italic" }}>"Remind me to pick up my package at work today at 5 PM"</p>
            </div>
            <p style={{ fontSize: 12, color: AND_DARK, margin: 0, lineHeight: 1.5 }}>Gemini understands the intent, finds the right app function, and executes it — no navigation required.</p>
          </div>
        </div>
        <Discussion>{"Think about the last time you used a voice assistant or AI to do something on your phone. Was it faster than doing it manually? What would make you use it more often?"}</Discussion>
      </div>
    </Shell>
  ),

  // ─── SLIDE 4: What is an AI agent? ───
  () => (
    <Shell tag="Concept" timer="5" title="What is an AI agent?" subtitle="A plain-English definition before we get into code" notes="Many students have used AI chatbots but may not have a clear mental model of what makes something an 'agent.' The key difference is the ability to take actions — not just generate text responses. Use the assistant analogy: a chatbot tells you how to do something; an agent does it for you. Keep it short — the implementation is the main event.">
      <div style={{ marginTop: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: MUTED, margin: "0 0 8px", textTransform: "uppercase" as const }}>A chatbot responds</p>
            <Bullet>Understands your question</Bullet>
            <Bullet>Generates a text response</Bullet>
            <Bullet>Cannot take actions on your behalf</Bullet>
            <div style={{ marginTop: 10, padding: "8px 10px", background: GRAY, borderRadius: 6 }}>
              <p style={{ fontSize: 12, color: MUTED, margin: 0, fontStyle: "italic" }}>"Here's how to create a reminder in your app..."</p>
            </div>
          </div>
          <div style={{ background: PURPLE_LIGHT, border: `1px solid ${PURPLE}`, borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 8px", textTransform: "uppercase" as const }}>An agent acts</p>
            <Bullet>Understands your intent</Bullet>
            <Bullet>Selects the right tool or capability</Bullet>
            <Bullet>Executes the action for you</Bullet>
            <div style={{ marginTop: 10, padding: "8px 10px", background: "rgba(83,74,183,0.1)", borderRadius: 6 }}>
              <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, fontStyle: "italic" }}>"Done — reminder set for 5 PM at your work location."</p>
            </div>
          </div>
        </div>
        <Info>{"On Android, Gemini is the AI agent. AppFunctions are the tools that Gemini can use — your app declares what it can do, and Gemini calls those capabilities on the user's behalf."}</Info>
      </div>
    </Shell>
  ),

  // ─── SLIDE 5: What are AppFunctions? ───
  () => (
    <Shell tag="Core Concept" timer="5" title="AppFunctions — your app as a set of capabilities" notes="The menu analogy works well here: an AppFunction is your app raising its hand and saying 'I can do this.' The OS and Gemini read those declarations and can invoke them when they match the user's intent. Key contrast with deep links: deep links open screens; AppFunctions carry typed parameters, return structured data, and have semantic descriptions that agents can reason about.">
      <div style={{ marginTop: 6 }}>
        <p style={{ fontSize: 13, color: MUTED, margin: "0 0 12px", lineHeight: 1.6 }}>
          An <strong style={{ color: TEXT }}>AppFunction</strong> is a capability your app publicly declares — a specific, named action it can perform that AI agents and assistants can discover and invoke on the user's behalf.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
          {[
            { emoji: "📝", app: "Notes app",    fn: "createNote(title, content)",       color: PURPLE_LIGHT },
            { emoji: "🗓️", app: "Calendar app", fn: "createEvent(title, time, place)",  color: TEAL_LIGHT },
            { emoji: "🛒", app: "Grocery app",  fn: "addToList(itemName, quantity)",    color: AND_LIGHT },
          ].map(item => (
            <div key={item.app} style={{ background: item.color, borderRadius: 8, padding: "12px 14px", textAlign: "center" as const }}>
              <p style={{ fontSize: 22, margin: "0 0 6px" }}>{item.emoji}</p>
              <p style={{ fontSize: 11, fontWeight: 700, color: TEXT, margin: "0 0 6px" }}>{item.app}</p>
              <IC>{item.fn}</IC>
            </div>
          ))}
        </div>
        <Bullet>Functions are <strong>self-describing</strong> — KDoc comments and parameter types are indexed by the system for agent discovery</Bullet>
        <Bullet>They are <strong>permission-gated</strong> — callers need <IC>EXECUTE_APP_FUNCTIONS</IC> to invoke them</Bullet>
        <Bullet>They require <strong>Android 16+</strong>, with a Jetpack library powering the annotation processing</Bullet>
      </div>
    </Shell>
  ),

  // ─── SLIDE 6: The 4-step flow ───
  () => (
    <Shell tag="How it works" timer="5" title="From declaration to execution — the 4-step flow" notes="Walk through each step deliberately. Step 3 is the one to emphasize: the agent is doing semantic matching — it reads your KDoc description and decides if it maps to the user's request. This is why good documentation is suddenly load-bearing code. A vague description means the agent cannot reliably choose your function. A clear, specific description means reliable invocation.">
      <div style={{ marginTop: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
          {[
            { num: "01", title: "Declare",          desc: "You annotate functions with @AppFunction and document them with KDoc so the system knows what they do.",               color: PURPLE_LIGHT, accent: PURPLE },
            { num: "02", title: "Schema generated", desc: "At build time, the Jetpack KSP compiler reads your annotations and generates an XML schema describing all your app's functions.", color: TEAL_LIGHT,   accent: TEAL },
            { num: "03", title: "Discover",         desc: "When a user makes a request, Gemini queries AppFunction metadata across installed apps and semantically matches a function to the intent.", color: AND_LIGHT,    accent: AND_DARK },
            { num: "04", title: "Execute",          desc: "Gemini invokes your function with typed parameters. Your app runs the logic, returns a result, and the agent relays the outcome to the user.", color: "#f0eeff",    accent: PURPLE_DARK },
          ].map(step => (
            <div key={step.num} style={{ background: step.color, borderRadius: 8, padding: "12px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: step.accent, lineHeight: 1 }}>{step.num}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: TEXT }}>{step.title}</span>
              </div>
              <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{step.desc}</p>
            </div>
          ))}
        </div>
        <Info>{"The Declare → Schema → Discover → Execute pattern is the mental model to hold onto. The exact API will evolve, but this flow will not."}</Info>
      </div>
    </Shell>
  ),

  // ─── SLIDE 7: Real-world use cases ───
  () => (
    <Shell tag="Use Cases" timer="5" title="What agents can do with AppFunctions" notes="After showing these three, invite students to brainstorm use cases for an app they are building or have built in this course. The cross-app workflow example is the most powerful — it shows that agents can chain functions across multiple apps to complete complex tasks that would take a user many manual steps. That is genuinely new capability.">
      <div style={{ marginTop: 6 }}>
        {[
          { category: "Task management", icon: "📋", example: '"Remind me to pick up my package at work today at 5 PM"',            action: "createReminder(title, time, location)", color: PURPLE_LIGHT, accent: PURPLE },
          { category: "Media",           icon: "🎵", example: '"Create a playlist with top jazz albums from this year"',             action: "createPlaylist(name, description)",      color: TEAL_LIGHT,   accent: TEAL },
          { category: "Cross-app chain", icon: "🔗", example: '"Find Lisa\'s noodle recipe email and add the ingredients to my list"', action: "searchEmail() → addShoppingItems()",     color: AND_LIGHT,    accent: AND_DARK },
        ].map(item => (
          <div key={item.category} style={{ display: "flex", gap: 12, padding: "10px 12px", background: item.color, borderRadius: 8, margin: "6px 0", alignItems: "flex-start" }}>
            <span style={{ fontSize: 22, flexShrink: 0, lineHeight: 1.2 }}>{item.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: item.accent, textTransform: "uppercase" as const, letterSpacing: ".06em", margin: "0 0 3px" }}>{item.category}</p>
              <p style={{ fontSize: 12, color: TEXT, margin: "0 0 4px", fontStyle: "italic", lineHeight: 1.4 }}>{item.example}</p>
              <IC>{item.action}</IC>
            </div>
          </div>
        ))}
        <Discussion>{"Think about an app you've built in this course. What one or two actions would be most valuable if an AI agent could trigger them? What would you name those functions?"}</Discussion>
      </div>
    </Shell>
  ),

  // ─── SLIDE 8: AppFunctions ≈ MCP for Mobile ───
  () => (
    <Shell tag="Concept" timer="3" title="AppFunctions ≈ MCP for mobile" subtitle="If you've heard of the Model Context Protocol — this is the same idea, on-device" notes="MCP may have been covered earlier in this course. If students have seen it, this is a great bridge. If not, keep it brief — the analogy is useful but the implementation is what matters. Core point: 'expose tools → agent discovers them → agent invokes them' is a universal AI pattern. AppFunctions brings that pattern to Android.">
      <div style={{ marginTop: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 10 }}>
          <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: MUTED, margin: "0 0 8px", textTransform: "uppercase" as const }}>MCP — web / cloud</p>
            <Bullet sub>AI agent connects to a remote server</Bullet>
            <Bullet sub>Server exposes "tools" the agent can call</Bullet>
            <Bullet sub>Execution happens in the cloud</Bullet>
            <Bullet sub>Agent uses results to respond to the user</Bullet>
          </div>
          <div style={{ background: AND_LIGHT, border: `1px solid ${AND_GREEN}`, borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: AND_DARK, margin: "0 0 8px", textTransform: "uppercase" as const }}>AppFunctions — Android</p>
            <Bullet sub>AI agent (Gemini) queries on-device apps</Bullet>
            <Bullet sub>Apps expose @AppFunctions the agent can call</Bullet>
            <Bullet sub>Execution happens locally, on-device</Bullet>
            <Bullet sub>Agent uses results to respond to the user</Bullet>
          </div>
        </div>
        <Info>{"Running on-device means better privacy (user data never leaves the phone) and no round-trip latency. AppFunctions and MCP share the same mental model — they just differ in where execution happens."}</Info>
      </div>
    </Shell>
  ),

  // ─── SLIDE 9: Project setup ───
  () => (
    <Shell tag="Implementation" timer="5" title="Project setup — adding the dependency" subtitle="Step 0 before writing any @AppFunction code" notes="Point out KSP (Kotlin Symbol Processing) — if students are unfamiliar, explain it as a build tool that reads your annotations at compile time and generates code from them. Hilt uses the same mechanism for dependency injection. It is a common modern Android pattern. The key config detail: the KSP version string must match the Kotlin version in your project.">
      <Warn title="Android 16 (API 36) required">AppFunctions require Android 16+. Before starting the lab, make sure your emulator is running API 36. You can create one in Android Studio → Device Manager → Create Virtual Device.</Warn>
      <p style={{ fontSize: 13, color: MUTED, margin: "10px 0 6px" }}>Add to your <IC>build.gradle.kts</IC> (app module):</p>
      <CodePane title="build.gradle.kts" accent={PURPLE}>{`plugins {
    id("com.google.devtools.ksp") version "2.1.0-1.0.29"
}

dependencies {
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha01")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha01")
}`}</CodePane>
      <Info>{"KSP reads your @AppFunction annotations at build time and generates the XML schema that agents use to discover your capabilities. Without it, no schema is generated and your functions will not be visible to Gemini."}</Info>
    </Shell>
  ),

  // ─── SLIDE 10: @AppFunctionSerializable ───
  () => (
    <Shell tag="Implementation" timer="5" title="Step 1 — Describe your data with @AppFunctionSerializable" notes="The @AppFunctionSerializable annotation tells the schema generator to include this type in the generated XML — along with the KDoc for each property. Encourage students to write clear, specific property docs even for fields that seem obvious. The agent uses these descriptions to correctly populate parameters when invoking the function.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 8px", lineHeight: 1.5 }}>
        Any custom type your functions return must be annotated with <IC>@AppFunctionSerializable</IC> so the schema generator can describe its shape to agents.
      </p>
      <CodePane title="Note.kt" accent={AND_DARK}>{`/**
 * A note in the app.
 */
@AppFunctionSerializable(isDescribedByKDoc = true)
data class Note(
    /** The note's unique identifier */
    val id: Int,
    /** The title of the note */
    val title: String,
    /** The body content of the note */
    val content: String
)`}</CodePane>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        <Bullet sub>Only <IC>data class</IC> is supported — no sealed classes or interfaces</Bullet>
        <Bullet sub>KDoc on the class describes the type to agents</Bullet>
        <Bullet sub>KDoc on each property helps agents fill parameters correctly</Bullet>
        <Bullet sub>Primitive types (<IC>String</IC>, <IC>Int</IC>, <IC>Boolean</IC>) need no annotation</Bullet>
      </div>
    </Shell>
  ),

  // ─── SLIDE 11: @AppFunction annotation ───
  () => (
    <Shell tag="Implementation" timer="8" title="Step 2 — Expose actions with @AppFunction" notes="Three things to emphasize: (1) The suspend keyword — all AppFunctions should be suspend because they may involve I/O like database reads or network calls. (2) AppFunctionContext is always the first parameter — it provides caller identity and invocation context. (3) isDescribedByKDoc = true connects your KDoc to the schema generator; without this flag, the function description is not included.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 8px", lineHeight: 1.5 }}>
        Annotate methods with <IC>@AppFunction</IC>. The KDoc you write on each function is what agents use to decide when to call it — treat it as part of the implementation, not decoration.
      </p>
      <CodePane title="NoteFunctions.kt" accent={PURPLE}>{`class NoteFunctions(private val repo: NoteRepository) {

    /**
     * Creates a new note in the app.
     *
     * @param appFunctionContext The AppFunction execution context.
     * @param title The note's title.
     * @param content The body text of the note.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun createNote(
        appFunctionContext: AppFunctionContext,
        title: String,
        content: String
    ): Note {
        return repo.createNote(title, content)
    }
}`}</CodePane>
      <Info>{"AppFunctionContext is always the first parameter. It identifies the caller so your app knows this invocation is coming from an authorized agent, not arbitrary code."}</Info>
    </Shell>
  ),

  // ─── SLIDE 12: Complete class example ───
  () => (
    <Shell tag="Implementation" timer="5" title="A complete AppFunctions class" notes="This is the natural extension of the previous slide — show what a real implementation looks like with multiple functions. Point out the nullable parameters in editNote: using String? lets agents make partial updates without requiring every field. This is an important design pattern — agents often only have partial information from the user's request.">
      <CodePane title="NoteFunctions.kt (complete)" accent={PURPLE}>{`class NoteFunctions(private val repo: NoteRepository) {

    /** Lists all notes in the app. Returns null if there are none. */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun listNotes(
        appFunctionContext: AppFunctionContext
    ): List<Note>? = repo.notes.ifEmpty { null }

    /** Creates a new note with the given title and content. */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun createNote(
        appFunctionContext: AppFunctionContext,
        title: String,
        content: String
    ): Note = repo.createNote(title, content)

    /** Edits an existing note. Pass null to leave a field unchanged. */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun editNote(
        appFunctionContext: AppFunctionContext,
        noteId: Int,
        title: String?,
        content: String?
    ): Note? = repo.updateNote(noteId, title, content)
}`}</CodePane>
    </Shell>
  ),

  // ─── SLIDE 13: Testing with ADB ───
  () => (
    <Shell tag="Testing" timer="3" title="Verify your functions are registered" notes="The ADB command is a quick sanity check after building and deploying. If the output shows nothing for your package, the schema was not generated — usually because KSP is not configured correctly or a clean build is needed. Have students run Build → Clean Project → Rebuild if they see no output. This is the most common gotcha.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px", lineHeight: 1.5 }}>After building and deploying to your Android 16 emulator, run this command in your terminal to confirm the system has indexed your AppFunctions:</p>
      <CodePane title="Terminal" accent="#1e1e2e">{`adb shell cmd app_function list-app-functions`}</CodePane>
      <p style={{ fontSize: 13, color: MUTED, margin: "12px 0 6px" }}>You should see your package and function IDs listed:</p>
      <CodePane title="Expected output" accent={AND_DARK}>{`com.example.noteapp/createNote
com.example.noteapp/listNotes
com.example.noteapp/editNote`}</CodePane>
      <Warn title="Nothing showing up?">Run a clean build first: Build → Clean Project, then Rebuild Project. KSP needs to re-process annotations after any configuration change.</Warn>
    </Shell>
  ),

  // ─── SLIDE 14: Best practices ───
  () => (
    <Shell tag="Best Practices" timer="5" title="Writing AppFunctions well" notes="The documentation point is the one students will most under-invest in. Make it concrete: a function with the description 'does something with notes' will rarely be chosen by Gemini. A function described as 'Creates a new note in the app with a given title and body text' will be matched reliably when a user says 'write me a note.' Documentation quality directly drives agent quality.">
      <div style={{ marginTop: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { title: "Write specific KDoc",          desc: "Agents use your documentation to decide which function to invoke. Vague descriptions lead to poor or missed matches.",       color: PURPLE_LIGHT, accent: PURPLE },
            { title: "Keep functions granular",       desc: "One function, one action. Prefer createNote + editNote over one upsertNote that does both — agents need clear, distinct capabilities.", color: TEAL_LIGHT,   accent: TEAL },
            { title: "Use nullable types for optionals", desc: "Mark parameters as String? when agents might not have that information from the user's request. It allows partial invocations.",  color: AND_LIGHT,    accent: AND_DARK },
            { title: "Always suspend",                desc: "AppFunctions can involve database reads or I/O. Declare every function as suspend fun — even if the current implementation is synchronous.", color: "#f0eeff",    accent: PURPLE_DARK },
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

  // ─── SLIDE 15: Current status ───
  () => (
    <Shell tag="Status" title="Where AppFunctions stands today" notes="Be honest about the experimental status — students will encounter API changes. What matters is that the conceptual model is settled. Declare → Schema → Discover → Execute will persist even as the annotation names and parameter signatures evolve. Frame this as an advantage: they are learning a pattern early, before it becomes table stakes.">
      <div style={{ marginTop: 6 }}>
        <Warn title="Experimental API — expect changes">AppFunctions is in alpha as of 2026. The pattern is stable; specific annotation parameters and class names may change before the stable release. Always check the official docs for the current version.</Warn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 6px" }}>Available now</p>
            <Bullet sub>Android 16 (API 36) devices and emulators</Bullet>
            <Bullet sub>Gemini on Galaxy S26 / Samsung OneUI 8.5+</Bullet>
            <Bullet sub>Jetpack AppFunctions alpha library</Bullet>
            <Bullet sub>EAP registration for early partner access</Bullet>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE, margin: "0 0 6px" }}>Coming soon</p>
            <Bullet sub>Android 17 broader ecosystem rollout</Bullet>
            <Bullet sub>More AI agent platforms beyond Gemini</Bullet>
            <Bullet sub>UI automation layer (zero-code integration for any app)</Bullet>
            <Bullet sub>Stable API with migration guide</Bullet>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 16: Wrap-up ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${AND_DARK} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" as const }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Wrap-up</Tag></div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Key takeaways</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>What to carry forward from this unit</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase" as const, letterSpacing: ".06em" }}>The concept</p>
            {[
              "AI agents are a new way to invoke apps — not a replacement for them",
              "AppFunctions = MCP for Android: expose capabilities, agents discover and call them",
              "Your KDoc is load-bearing — it drives how well agents match your functions",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "8px 0" }}>
                <span style={{ color: AND_GREEN, flexShrink: 0, marginTop: 2 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase" as const, letterSpacing: ".06em" }}>The implementation</p>
            {[
              "@AppFunctionSerializable on any custom return types",
              "@AppFunction + KDoc on every action you want to expose",
              "Verify with: adb shell cmd app_function list-app-functions",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "8px 0" }}>
                <span style={{ color: AND_GREEN, flexShrink: 0, marginTop: 2 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>{"Close with: 'AppFunctions is experimental today — but the Declare → Schema → Discover → Execute pattern is here to stay. Understanding this now puts you ahead of most Android developers. Head to the Lab tab to try it yourself.'"}</Notes>
    </div>
  ),
];

export default function AppFunctionsSlides() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase" as const, letterSpacing: ".06em" }}>Bonus · AppFunctions · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 600, color: TEXT, margin: 0 }}>Apps in the Age of AI Agents</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setCur(c => Math.max(0, c - 1))} disabled={cur === 0} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === 0 ? GRAY : PURPLE_LIGHT, color: cur === 0 ? MUTED : PURPLE, cursor: cur === 0 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>← Prev</button>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 64, textAlign: "center" as const }}>{cur + 1} / {slides.length}</span>
          <button onClick={() => setCur(c => Math.min(slides.length - 1, c + 1))} disabled={cur === slides.length - 1} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === slides.length - 1 ? GRAY : PURPLE, color: cur === slides.length - 1 ? MUTED : "#fff", cursor: cur === slides.length - 1 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>Next →</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: 26, height: 26, borderRadius: 5, border: `1.5px solid ${i === cur ? PURPLE : "#e5e7eb"}`, background: i === cur ? PURPLE : "#fff", color: i === cur ? "#fff" : MUTED, fontSize: 10, fontWeight: 600, cursor: "pointer" }}>{i + 1}</button>
        ))}
      </div>
      {slides[cur]()}
    </div>
  );
}
