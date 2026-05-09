import { useState } from "react";

const TABS = ["Overview", "Lab", "Resources"];

const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const T_C = "#1D9E75", TL = "#E1F5EE", TD = "#0F6E56";
const AND = "#3DDC84", ANDL = "#E8FBF0", ANDD = "#1E7A44";
const IOS = "#F05138", IOSL = "#FFF2F0", IOSD = "#B83A1F";
const AM = "#633806", AML = "#FAEEDA", AM_C = "#EF9F27";
const GL = "#EAF3DE";
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
export const Overview = () => {
  const [platform, setPlatform] = useState<"Android" | "iOS">("Android");
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" as const }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Session 1: LLM Tool Use & Function Calling</h2>
        <Tag color="purple">Builds on Week 7</Tag>
      </div>
      <p style={{ fontSize: 12, color: MUTED, margin: "0 0 16px" }}>Claude API · Tool Use · Agentic Loops</p>

      {/* AppFunctions distinction — prominent callout */}
      <div style={{ background: AML, border: `1.5px solid ${AM_C}`, borderRadius: 10, padding: "14px 16px", margin: "0 0 20px" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: AM, margin: "0 0 10px" }}>⚠️ Tool Use vs. AppFunctions (Session 2) — they are NOT the same thing</p>
        <p style={{ fontSize: 13, color: AM, margin: "0 0 12px", lineHeight: 1.6 }}>
          Session 2 also involves "an AI calling your functions," but <strong>which AI</strong> and <strong>where the user is</strong> are completely different. Internalise the contrast below — it is the most important conceptual move of the week.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: ANDD, textTransform: "uppercase" as const, letterSpacing: ".06em", margin: "0 0 6px" }}>AppFunctions / App Intents</p>
            <p style={{ fontSize: 12, color: AM, margin: "0 0 4px", lineHeight: 1.6 }}>The user is talking to <strong>Gemini or Siri</strong> — an external OS-level agent. That agent reaches into your app and calls your functions. Your app sits passively and waits to be invoked.</p>
            <p style={{ fontSize: 12, fontStyle: "italic", color: MUTED, margin: 0 }}>Your app is the tool being called.</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: PD, textTransform: "uppercase" as const, letterSpacing: ".06em", margin: "0 0 6px" }}>LLM Tool Use (this session)</p>
            <p style={{ fontSize: 12, color: AM, margin: "0 0 4px", lineHeight: 1.6 }}>The user is typing in <strong>your app's own chat screen</strong>. Claude — the LLM your app is calling — decides to invoke functions you defined. Your app runs the function and sends the result back to Claude.</p>
            <p style={{ fontSize: 12, fontStyle: "italic", color: MUTED, margin: 0 }}>Your app is the orchestrator.</p>
          </div>
        </div>
      </div>

      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
        In Week 7 you built a chat screen where Claude responds to messages. That's reactive AI — the model receives input and produces output. <strong>Tool use</strong> makes your AI proactive: instead of just generating text, Claude can pause mid-response and call functions you define — checking the time, querying a database, creating records — then use those results to produce a grounded, accurate answer.
      </p>

      {/* The loop */}
      <div style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 16px", margin: "0 0 16px" }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>🔄 The tool use loop (what your app manages)</p>
        <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2, fontFamily: "monospace" }}>
          <div>1. Your app sends a user message <strong>+ tool definitions</strong> to Claude</div>
          <div>2. Claude decides it needs a tool → returns a <IC>tool_use</IC> block instead of text</div>
          <div>3. Your app reads the block, <strong>executes the function locally</strong></div>
          <div>4. Your app sends the result back as a <IC>tool_result</IC> message</div>
          <div>5. Claude reads the result and produces its final answer</div>
        </div>
      </div>

      {/* Unit at a glance */}
      <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 10px" }}>Unit at a glance</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[
          { icon: "📖", label: "Overview", desc: "The tool use loop, JSON tool schema anatomy, and how this differs from a plain chat request and from AppFunctions" },
          { icon: "🔬", label: "Lab", desc: "Build a Smart Notes Assistant — a chat app where Claude can check the time, create notes, and list notes using tools you define" },
          { icon: "📚", label: "Resources", desc: "Anthropic tool use docs, the implement-tool-use guide, and real-world examples of the pattern at scale" },
          { icon: "🔗", label: "Connection to Week 7", desc: "Extends your Week 7 chat app directly — same OkHttp / URLSession stack, same messages array, one new stop_reason to handle" },
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
          "Explain how tool use differs from a plain LLM request — and from AppFunctions",
          "Write a tool definition using JSON Schema: name, description, and input_schema",
          "Detect a tool_use stop reason in the API response and extract the tool name and inputs",
          "Execute a local function and return the result as a tool_result message",
          "Implement the full multi-turn tool loop: request → tool call → result → final response",
          "Apply tool description best practices that improve Claude's tool selection accuracy",
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
          "Completed Week 7 Session 1 — comfortable calling the Claude Messages API with OkHttp and coroutines",
          "Your Week 7 chat app (or any project with OkHttp + a ViewModel) — the lab extends that foundation directly",
          "Understanding of Kotlin data classes and suspend functions",
        ] : [
          "Completed Week 7 Session 1 — comfortable calling the Claude Messages API with URLSession and async/await",
          "Your Week 7 chat app (or any SwiftUI project) — the lab extends that foundation directly",
          "Understanding of Swift structs, Codable, and async/await",
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
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>Lab: Smart Notes Assistant (Android)</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
      You will extend your Week 7 chat app so that Claude can use three tools: <IC>get_current_time</IC>, <IC>create_note</IC>, and <IC>list_notes</IC>. By the end, users can ask things like <em>"What time is it?"</em> or <em>"Save a note about my meeting"</em> and Claude will call your Kotlin functions to answer accurately.
    </p>

    <Note>
      <strong>No new dependencies required.</strong> This lab uses the same OkHttp client and <IC>org.json</IC> from Week 7. The changes are entirely in how you build the request body and handle the response.
    </Note>

    <div style={{ margin: "20px 0" }}>

      <VStep num={1} title="Add an in-memory note store to your ViewModel">
        <p>Open your chat ViewModel. Add a simple data class and a list to hold notes in memory. This is what Claude's tools will read from and write to.</p>
        <CodeB>{`data class Note(val title: String, val content: String)

// Inside your ViewModel class:
private val notes = mutableListOf<Note>()`}</CodeB>
        <Tip>Keep it in-memory for now. In a real app you'd wire this to Room — but for this lab, in-memory is enough to see the full tool use loop working end-to-end.</Tip>
        <Checkpoint num={1}>Your ViewModel has a <IC>notes</IC> list and a <IC>Note</IC> data class. The project compiles cleanly.</Checkpoint>
      </VStep>

      <VStep num={2} title="Define your tools as a JSON string">
        <p>
          The Claude API expects a <IC>tools</IC> array on your request. Each tool is a JSON object with exactly three fields:
        </p>
        <ul style={{ paddingLeft: 20, margin: "8px 0 12px", lineHeight: 2 }}>
          <li><IC>name</IC> — a snake_case identifier Claude uses to tell you which tool it wants to call</li>
          <li><IC>description</IC> — a plain-English sentence Claude reads to decide <em>when</em> to call this tool. This is load-bearing — vague descriptions cause Claude to miss or misuse tools.</li>
          <li><IC>input_schema</IC> — a JSON Schema object describing the inputs. Tools with no inputs still need <IC>"properties": {"{}"}</IC> and <IC>"required": []</IC>.</li>
        </ul>
        <p>Add a <IC>private val TOOLS</IC> constant to your ViewModel (outside the class, or as a companion object property). You'll build it up in three sub-steps.</p>

        <VStep num="a" title="Add get_current_time — a tool with no inputs">
          <p>
            Start with the simplest tool: one that takes no arguments. Declare <IC>private val TOOLS</IC> as a trimmed multiline string containing a JSON array. Add one object for <IC>get_current_time</IC>. Its <IC>input_schema</IC> has <IC>"type": "object"</IC>, an empty <IC>properties</IC> object, and an empty <IC>required</IC> array.
          </p>
          <p>Write a description that explains <em>when</em> Claude should use it — not just what it returns.</p>
          <Section title="✅ Check your work — show me TOOLS so far">
            <CodeB>{`private val TOOLS = """
[
  {
    "name": "get_current_time",
    "description": "Returns the current date and time on the user's device. Use this whenever the user asks what time it is, what today's date is, or needs any time-sensitive information — Claude does not have real-time awareness, so this tool is the only way to give an accurate answer. Takes no inputs and always returns a formatted local date and time string.",
    "input_schema": {
      "type": "object",
      "properties": {},
      "required": []
    }
  }
]
""".trimIndent()`}</CodeB>
          </Section>
        </VStep>

        <VStep num="b" title="Add create_note — a tool with inputs">
          <p>
            Add a second object to the JSON array for <IC>create_note</IC>. This one needs an <IC>input_schema</IC> with two properties: <IC>title</IC> and <IC>content</IC>, both of type <IC>"string"</IC>. Each property should have its own <IC>"description"</IC> field explaining what Claude should put there. Add both to <IC>"required"</IC>.
          </p>
          <Section title="💡 Show me the input_schema structure with properties">
            <CodeB>{`"input_schema": {
  "type": "object",
  "properties": {
    "my_param": {
      "type": "string",
      "description": "Explain what this parameter represents"
    }
  },
  "required": ["my_param"]
}`}</CodeB>
          </Section>
          <Section title="✅ Check your work — show me TOOLS so far">
            <CodeB>{`private val TOOLS = """
[
  {
    "name": "get_current_time",
    "description": "Returns the current date and time on the user's device. Use this whenever the user asks what time it is, what today's date is, or needs any time-sensitive information — Claude does not have real-time awareness, so this tool is the only way to give an accurate answer. Takes no inputs and always returns a formatted local date and time string.",
    "input_schema": {
      "type": "object",
      "properties": {},
      "required": []
    }
  },
  {
    "name": "create_note",
    "description": "Saves a new note to the user's note list. Use this when the user asks to save, write down, remember, or create a note about something. The title parameter should be a short phrase capturing the topic; the content parameter should contain the full text to save. This tool only creates new notes — it does not update or overwrite existing ones.",
    "input_schema": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "description": "A short, descriptive title for the note"
        },
        "content": {
          "type": "string",
          "description": "The full body text of the note"
        }
      },
      "required": ["title", "content"]
    }
  }
]
""".trimIndent()`}</CodeB>
          </Section>
        </VStep>

        <VStep num="c" title="Add list_notes — no inputs, like get_current_time" last>
          <p>Add a third tool, <IC>list_notes</IC>. Like <IC>get_current_time</IC>, it takes no inputs — empty <IC>properties</IC> and <IC>required</IC>. Write a description that tells Claude to use it when the user wants to see or read their saved notes.</p>
          <Section title="✅ Check your work — show me the complete TOOLS constant">
            <CodeB>{`private val TOOLS = """
[
  {
    "name": "get_current_time",
    "description": "Returns the current date and time on the user's device. Use this whenever the user asks what time it is, what today's date is, or needs any time-sensitive information — Claude does not have real-time awareness, so this tool is the only way to give an accurate answer. Takes no inputs and always returns a formatted local date and time string.",
    "input_schema": {
      "type": "object",
      "properties": {},
      "required": []
    }
  },
  {
    "name": "create_note",
    "description": "Saves a new note to the user's note list. Use this when the user asks to save, write down, remember, or create a note about something. The title parameter should be a short phrase capturing the topic; the content parameter should contain the full text to save. This tool only creates new notes — it does not update or overwrite existing ones.",
    "input_schema": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string",
          "description": "A short, descriptive title for the note"
        },
        "content": {
          "type": "string",
          "description": "The full body text of the note"
        }
      },
      "required": ["title", "content"]
    }
  },
  {
    "name": "list_notes",
    "description": "Returns all notes the user has saved as a formatted list. Use this when the user asks to see, read, show, or retrieve their notes, or when they reference 'my notes' in any way. Also call this before creating a note if the user says 'add another note', so you have context on what already exists. Returns a message if no notes have been saved yet.",
    "input_schema": {
      "type": "object",
      "properties": {},
      "required": []
    }
  }
]
""".trimIndent()`}</CodeB>
          </Section>
        </VStep>

        <Tip>Tool descriptions are the single biggest factor in tool use reliability. Claude doesn't read the name — it reads the description to decide when to call a tool. <em>"Returns the current date and time. Use this when the user asks what time it is"</em> is far more useful than just <IC>get_current_time</IC>.</Tip>
        <Checkpoint num={2}>Your <IC>TOOLS</IC> constant is defined with three tools. The project compiles cleanly.</Checkpoint>
      </VStep>

      <VStep num={3} title="Write the executeTool function">
        <p>
          This function is the bridge between Claude's tool call and your actual app logic. When Claude says "call <IC>create_note</IC> with title X and content Y", your app calls this function. It receives the tool name and the input JSON, runs the right code, and returns a plain string result that gets sent back to Claude.
        </p>

        <VStep num="a" title="Set up the function and handle get_current_time">
          <p>
            Add a <IC>private fun executeTool</IC> to your ViewModel. It takes two parameters — <IC>name: String</IC> and <IC>input: JSONObject</IC> — and returns a <IC>String</IC>. Inside, use a <IC>when(name)</IC> expression. Add a branch for <IC>"get_current_time"</IC> that uses <IC>LocalDateTime.now()</IC> and a <IC>DateTimeFormatter</IC> to return a human-readable date/time string. Also add an <IC>else</IC> branch as a catch-all.
          </p>
          <Section title="💡 Show me the DateTimeFormatter syntax">
            <CodeB>{`val now = LocalDateTime.now()
val fmt = DateTimeFormatter.ofPattern("EEEE, MMMM d, yyyy 'at' h:mm a")
now.format(fmt)  // e.g. "Saturday, May 3, 2026 at 2:30 PM"`}</CodeB>
          </Section>
          <Section title="✅ Check your work — show me executeTool so far">
            <CodeB>{`import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

private fun executeTool(name: String, input: JSONObject): String {
    return when (name) {
        "get_current_time" -> {
            val now = LocalDateTime.now()
            val fmt = DateTimeFormatter.ofPattern("EEEE, MMMM d, yyyy 'at' h:mm a")
            now.format(fmt)
        }
        else -> "Error: unknown tool ${"\""}$name${"\""}"
    }
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="b" title="Add create_note and list_notes cases" last>
          <p>Add two more branches to the <IC>when</IC> expression:</p>
          <ul style={{ paddingLeft: 20, lineHeight: 2, margin: "8px 0" }}>
            <li>
              <strong>create_note:</strong> Extract <IC>title</IC> and <IC>content</IC> from the input JSONObject using <IC>input.getString("title")</IC> and <IC>input.getString("content")</IC>. Add a new <IC>Note</IC> to your list. Return a confirmation string like <IC>"Note created: [title]"</IC>.
            </li>
            <li>
              <strong>list_notes:</strong> If <IC>notes.isEmpty()</IC>, return <IC>"The user has no notes saved yet."</IC>. Otherwise, use <IC>joinToString("\n")</IC> to format the list. Each entry should show the title and content.
            </li>
          </ul>
          <Section title="✅ Check your work — show me the complete executeTool">
            <CodeB>{`import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

private fun executeTool(name: String, input: JSONObject): String {
    return when (name) {
        "get_current_time" -> {
            val now = LocalDateTime.now()
            val fmt = DateTimeFormatter.ofPattern("EEEE, MMMM d, yyyy 'at' h:mm a")
            now.format(fmt)
        }
        "create_note" -> {
            val title = input.getString("title")
            val content = input.getString("content")
            notes.add(Note(title, content))
            "Note created: $title"
        }
        "list_notes" -> {
            if (notes.isEmpty()) "The user has no notes saved yet."
            else notes.joinToString("\n") { "• \${it.title}: \${it.content}" }
        }
        else -> "Error: unknown tool $name"
    }
}`}</CodeB>
          </Section>
        </VStep>

        <Checkpoint num={3}>Your <IC>executeTool</IC> function compiles with no errors. Mentally trace: if called with <IC>name = "get_current_time"</IC> and an empty JSONObject, what does it return?</Checkpoint>
      </VStep>

      <VStep num={4} title="Add the tools field to your API request">
        <p>
          In your existing <IC>sendMessage</IC> function, find where you build the <IC>JSONObject</IC> request body. Add one line — the <IC>tools</IC> field — using <IC>JSONArray(TOOLS)</IC>. This tells Claude which tools are available on this request.
        </p>
        <CodeB>{`val body = JSONObject().apply {
    put("model", "claude-sonnet-4-6")
    put("max_tokens", 1024)
    put("tools", JSONArray(TOOLS))   // ← add this line
    put("messages", JSONArray(messageHistory))
}`}</CodeB>
        <Warn>This lab keeps requests non-streaming for simplicity — it lets you see the full response JSON in one piece before parsing it. Streaming with tool use <em>is</em> fully supported by the API; once this loop is working, see the <Link href="https://docs.anthropic.com/en/docs/build-with-claude/tool-use/implement-tool-use">Implement Tool Use guide</Link> for how to add it.</Warn>
        <Checkpoint num={4}>Run the app and send a plain message like "hello". It should still respond normally — Claude will just ignore the tools if it doesn't need them.</Checkpoint>
      </VStep>

      <VStep num={5} title="Handle tool_use responses and run the loop">
        <p>
          This is the core of the lab. When Claude wants to call a tool, it returns <IC>stop_reason: "tool_use"</IC> instead of <IC>"end_turn"</IC>. You need to detect this, run the function, send the result back, and loop until Claude is done.
        </p>
        <p>Replace your existing response-handling code with a <IC>while</IC> loop. Build it in four sub-steps.</p>

        <VStep num="a" title="Set up the loop and send the first request">
          <p>
            Wrap your existing API call in a <IC>while (continueLoop)</IC> loop. Before the loop, add the user's message to <IC>messageHistory</IC> as a JSONObject with <IC>"role": "user"</IC> and <IC>"content": userText</IC>. Inside the loop, build the request body and call your existing API helper. Store the raw response JSON — you'll parse it in the next sub-steps.
          </p>
          <Section title="💡 Show me how to structure a message for the history">
            <CodeB>{`val userMsg = JSONObject()
    .put("role", "user")
    .put("content", userText)
messageHistory.add(userMsg)`}</CodeB>
          </Section>
          <Section title="✅ Check your work — show me sendMessage so far">
            <CodeB>{`suspend fun sendMessage(userText: String) {
    val userMsg = JSONObject().put("role", "user").put("content", userText)
    messageHistory.add(userMsg)

    var continueLoop = true
    while (continueLoop) {
        val body = JSONObject().apply {
            put("model", "claude-sonnet-4-6")
            put("max_tokens", 1024)
            put("tools", JSONArray(TOOLS))
            put("messages", JSONArray(messageHistory))
        }
        val responseJson = callApi(body)  // your existing HTTP helper

        val stopReason = responseJson.getString("stop_reason")
        val content = responseJson.getJSONArray("content")

        if (stopReason == "tool_use") {
            // sub-steps b and c go here
        } else {
            // sub-step d goes here
        }
    }
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="b" title="Detect tool_use and add Claude's turn to history">
          <p>
            Inside the <IC>if (stopReason == "tool_use")</IC> branch, the first thing you must do is add Claude's response to <IC>messageHistory</IC> as an <IC>assistant</IC> turn. This is essential: the API requires that before you can send a <IC>tool_result</IC>, Claude's <IC>tool_use</IC> response must already be in the history.
          </p>
          <p>Create a JSONObject with <IC>"role": "assistant"</IC> and <IC>"content": content</IC> (the full content array from the response), then add it to <IC>messageHistory</IC>.</p>
          <Section title="✅ Check your work — show me sendMessage so far">
            <CodeB>{`suspend fun sendMessage(userText: String) {
    val userMsg = JSONObject().put("role", "user").put("content", userText)
    messageHistory.add(userMsg)

    var continueLoop = true
    while (continueLoop) {
        val body = JSONObject().apply {
            put("model", "claude-sonnet-4-6")
            put("max_tokens", 1024)
            put("tools", JSONArray(TOOLS))
            put("messages", JSONArray(messageHistory))
        }
        val responseJson = callApi(body)
        val stopReason = responseJson.getString("stop_reason")
        val content = responseJson.getJSONArray("content")

        if (stopReason == "tool_use") {
            // Step 1: add Claude's tool_use response to history as the assistant turn
            messageHistory.add(
                JSONObject().put("role", "assistant").put("content", content)
            )
            // sub-step c goes here

        } else {
            // sub-step d goes here
        }
    }
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="c" title="Execute the tool and send the result back">
          <p>
            Now loop through the <IC>content</IC> array and find blocks where <IC>type == "tool_use"</IC>. Each one has three fields you need: <IC>id</IC>, <IC>name</IC>, and <IC>input</IC>. Call <IC>executeTool(toolName, toolInput)</IC>, then wrap the result in a <IC>tool_result</IC> JSONObject.
          </p>
          <p>
            Collect all results into a <IC>JSONArray</IC>, then add them to history as a <strong>user</strong> turn. The role must be <IC>"user"</IC> — not <IC>"assistant"</IC> — because the API requires strictly alternating roles. Claude's tool_use was the assistant turn; your result is the reply to it, so it becomes the next user turn.
          </p>
          <Section title="💡 Show me the tool_result structure">
            <CodeB>{`// A tool_result block tells Claude what happened when it called the tool
JSONObject()
    .put("type", "tool_result")
    .put("tool_use_id", toolId)   // must match the id from the tool_use block
    .put("content", result)       // the string your executeTool function returned`}</CodeB>
          </Section>
          <Section title="✅ Check your work — show me the complete tool_use branch">
            <CodeB>{`if (stopReason == "tool_use") {
    messageHistory.add(
        JSONObject().put("role", "assistant").put("content", content)
    )

    val toolResults = JSONArray()
    for (i in 0 until content.length()) {
        val block = content.getJSONObject(i)
        if (block.getString("type") == "tool_use") {
            val toolId    = block.getString("id")
            val toolName  = block.getString("name")
            val toolInput = block.optJSONObject("input") ?: JSONObject()
            val result    = executeTool(toolName, toolInput)
            toolResults.put(
                JSONObject()
                    .put("type", "tool_result")
                    .put("tool_use_id", toolId)
                    .put("content", result)
            )
        }
    }

    // Tool results go in a user turn — required by the API's alternating-role rule
    messageHistory.add(
        JSONObject().put("role", "user").put("content", toolResults)
    )
    // The while loop will now send another request with the updated history
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="d" title="Handle end_turn and display the final answer" last>
          <p>
            In the <IC>else</IC> branch (<IC>stop_reason == "end_turn"</IC>), Claude has finished reasoning and produced a text response. Set <IC>continueLoop = false</IC> to exit the loop. Then loop through <IC>content</IC>, find the block with <IC>"type": "text"</IC>, and extract the text. Add it to <IC>messageHistory</IC> as an <IC>assistant</IC> turn, then update your UI state.
          </p>
          <Section title="✅ Check your work — show me the complete sendMessage function">
            <CodeB>{`suspend fun sendMessage(userText: String) {
    val userMsg = JSONObject().put("role", "user").put("content", userText)
    messageHistory.add(userMsg)

    var continueLoop = true
    while (continueLoop) {
        val body = JSONObject().apply {
            put("model", "claude-sonnet-4-6")
            put("max_tokens", 1024)
            put("tools", JSONArray(TOOLS))
            put("messages", JSONArray(messageHistory))
        }
        val responseJson = callApi(body)
        val stopReason = responseJson.getString("stop_reason")
        val content = responseJson.getJSONArray("content")

        if (stopReason == "tool_use") {
            messageHistory.add(
                JSONObject().put("role", "assistant").put("content", content)
            )
            val toolResults = JSONArray()
            for (i in 0 until content.length()) {
                val block = content.getJSONObject(i)
                if (block.getString("type") == "tool_use") {
                    val toolId    = block.getString("id")
                    val toolName  = block.getString("name")
                    val toolInput = block.optJSONObject("input") ?: JSONObject()
                    val result    = executeTool(toolName, toolInput)
                    toolResults.put(
                        JSONObject()
                            .put("type", "tool_result")
                            .put("tool_use_id", toolId)
                            .put("content", result)
                    )
                }
            }
            messageHistory.add(
                JSONObject().put("role", "user").put("content", toolResults)
            )
        } else {
            continueLoop = false
            for (i in 0 until content.length()) {
                val block = content.getJSONObject(i)
                if (block.getString("type") == "text") {
                    val assistantText = block.getString("text")
                    messageHistory.add(
                        JSONObject().put("role", "assistant").put("content", assistantText)
                    )
                    _uiState.update { it.copy(messages = it.messages + Message("assistant", assistantText)) }
                    break
                }
            }
        }
    }
}`}</CodeB>
          </Section>
        </VStep>

        <AiOpp>
          Ask your AI assistant: <em>"In the tool use loop above, what would happen if Claude called two tools in the same response? Does the current loop handle that correctly? Walk me through what the messageHistory would look like after both tool results are returned."</em>
        </AiOpp>

        <Checkpoint num={5}>Run the app and ask <em>"What time is it?"</em> — Claude should call <IC>get_current_time</IC> and respond with the real current time.</Checkpoint>
      </VStep>

      <VStep num={6} title="Test all three tools">
        <p>Try each prompt and verify the correct tool fires and Claude uses the result in its reply:</p>
        <div style={{ margin: "10px 0" }}>
          {[
            { prompt: '"What\'s today\'s date?"', tool: "get_current_time", expect: "Claude calls get_current_time and answers with the real date." },
            { prompt: '"Save a note: buy groceries — milk, eggs, bread"', tool: "create_note", expect: "Claude calls create_note with a sensible title and content. Check your notes list." },
            { prompt: '"What notes do I have?"', tool: "list_notes", expect: "Claude calls list_notes and reads back your saved note." },
            { prompt: '"Save a note about finishing the lab, then show me all my notes"', tool: "create_note + list_notes", expect: "Claude chains two tool calls before giving its final answer." },
          ].map(item => (
            <div key={item.tool} style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", margin: "8px 0" }}>
              <IC>{item.tool}</IC>
              <p style={{ fontSize: 13, fontStyle: "italic", color: P_C, margin: "6px 0 4px" }}>{item.prompt}</p>
              <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>Expected: {item.expect}</p>
            </div>
          ))}
        </div>
        <Checkpoint num={6}>All three tools fire correctly. The fourth prompt results in two consecutive tool calls before the final answer.</Checkpoint>
      </VStep>

      <VStep num={7} title="Reflection" last>
        <p>Write your answers as a comment block at the top of your ViewModel.</p>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "12px 14px" }}>
          <ol style={{ paddingLeft: 20, lineHeight: 2, fontSize: 13, margin: 0 }}>
            <li>The loop sends the entire <IC>messageHistory</IC> on every request. Why is that necessary — what would break if you only sent the latest message?</li>
            <li>Why does a <IC>tool_result</IC> get added to history as a <IC>user</IC> role message, not <IC>assistant</IC>?</li>
            <li>What is one feature in your capstone that would benefit from tool use? Name the tool, write its description as you would for the JSON schema, and list its input fields.</li>
          </ol>
        </div>
        <AiOpp>
          Paste your <IC>TOOLS</IC> constant into your AI assistant and ask: <em>"Review these tool descriptions. For each one, is the description specific enough that Claude would reliably know when to call it — versus just answering from its training data? Suggest improvements where needed."</em>
        </AiOpp>
      </VStep>

    </div>
  </div>
);

/* ══════════════════════ IOS LAB ════════════════════════════════════════════════ */
const IosLab = () => (
  <div>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>Lab: Smart Notes Assistant (iOS)</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
      You will extend your Week 7 chat app so that Claude can use three tools: <IC>get_current_time</IC>, <IC>create_note</IC>, and <IC>list_notes</IC>. By the end, users can ask things like <em>"What time is it?"</em> or <em>"Save a note about my meeting"</em> and Claude will call your Swift functions to answer accurately.
    </p>

    <Note>
      <strong>No new dependencies required.</strong> This lab uses the same URLSession async/await and Codable patterns from Week 7. The key additions are a new response model for tool calls and a loop in your send function.
    </Note>

    <div style={{ margin: "20px 0" }}>

      <VStep num={1} title="Add an in-memory note store to your ViewModel">
        <p>Open your chat ViewModel. Add a <IC>Note</IC> struct and a private array:</p>
        <CodeB>{`struct Note {
    let title: String
    let content: String
}

// Inside your @MainActor class / ObservableObject ViewModel:
private var notes: [Note] = []`}</CodeB>
        <Checkpoint num={1}>Your ViewModel has a <IC>notes</IC> array. The project compiles cleanly.</Checkpoint>
      </VStep>

      <VStep num={2} title="Define your tools as a Swift array of dictionaries">
        <p>
          Add a computed property to your ViewModel that returns the tool definitions as <IC>[[String: Any]]</IC>. Each tool has three keys: <IC>name</IC>, <IC>description</IC>, and <IC>input_schema</IC>. Build it in three sub-steps.
        </p>

        <VStep num="a" title="Add get_current_time — a tool with no inputs">
          <p>
            Declare <IC>private var tools: [[String: Any]]</IC> as a computed property. Return an array containing one dictionary for <IC>get_current_time</IC>. Its <IC>input_schema</IC> should have <IC>"type": "object"</IC>, an empty <IC>properties</IC> dictionary, and an empty <IC>required</IC> array. Write a description explaining <em>when</em> Claude should use it.
          </p>
          <Section title="💡 Show me how to write an empty input_schema in Swift">
            <CodeB>{`"input_schema": [
    "type": "object",
    "properties": [:] as [String: Any],
    "required": [] as [String]
] as [String: Any]`}</CodeB>
          </Section>
          <Section title="✅ Check your work — show me tools so far">
            <CodeB>{`private var tools: [[String: Any]] {
    [
        [
            "name": "get_current_time",
            "description": "Returns the current date and time on the user's device. Use this whenever the user asks what time it is, what today's date is, or needs any time-sensitive information — Claude does not have real-time awareness, so this tool is the only way to give an accurate answer. Takes no inputs and always returns a formatted local date and time string.",
            "input_schema": [
                "type": "object",
                "properties": [:] as [String: Any],
                "required": [] as [String]
            ] as [String: Any]
        ]
    ]
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="b" title="Add create_note — with an input_schema">
          <p>
            Add a second dictionary to the returned array for <IC>create_note</IC>. This one needs a <IC>properties</IC> dictionary with two entries: <IC>"title"</IC> and <IC>"content"</IC>, each a dictionary with <IC>"type": "string"</IC> and a <IC>"description"</IC>. Add both to <IC>"required"</IC>.
          </p>
          <Section title="✅ Check your work — show me tools so far">
            <CodeB>{`private var tools: [[String: Any]] {
    [
        [
            "name": "get_current_time",
            "description": "Returns the current date and time on the user's device. Use this whenever the user asks what time it is, what today's date is, or needs any time-sensitive information — Claude does not have real-time awareness, so this tool is the only way to give an accurate answer. Takes no inputs and always returns a formatted local date and time string.",
            "input_schema": [
                "type": "object",
                "properties": [:] as [String: Any],
                "required": [] as [String]
            ] as [String: Any]
        ],
        [
            "name": "create_note",
            "description": "Saves a new note to the user's note list. Use this when the user asks to save, write down, remember, or create a note about something. The title parameter should be a short phrase capturing the topic; the content parameter should contain the full text to save. This tool only creates new notes — it does not update or overwrite existing ones.",
            "input_schema": [
                "type": "object",
                "properties": [
                    "title": ["type": "string", "description": "A short, descriptive title for the note"] as [String: Any],
                    "content": ["type": "string", "description": "The full body text of the note"] as [String: Any]
                ] as [String: Any],
                "required": ["title", "content"]
            ] as [String: Any]
        ]
    ]
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="c" title="Add list_notes — no inputs" last>
          <p>Add a third entry for <IC>list_notes</IC>. Like <IC>get_current_time</IC>, empty <IC>properties</IC> and <IC>required</IC>. Write a description covering when the user wants to see or retrieve their notes.</p>
          <Section title="✅ Check your work — show me the complete tools property">
            <CodeB>{`private var tools: [[String: Any]] {
    [
        [
            "name": "get_current_time",
            "description": "Returns the current date and time on the user's device. Use this whenever the user asks what time it is, what today's date is, or needs any time-sensitive information — Claude does not have real-time awareness, so this tool is the only way to give an accurate answer. Takes no inputs and always returns a formatted local date and time string.",
            "input_schema": [
                "type": "object",
                "properties": [:] as [String: Any],
                "required": [] as [String]
            ] as [String: Any]
        ],
        [
            "name": "create_note",
            "description": "Saves a new note to the user's note list. Use this when the user asks to save, write down, remember, or create a note about something. The title parameter should be a short phrase capturing the topic; the content parameter should contain the full text to save. This tool only creates new notes — it does not update or overwrite existing ones.",
            "input_schema": [
                "type": "object",
                "properties": [
                    "title": ["type": "string", "description": "A short, descriptive title for the note"] as [String: Any],
                    "content": ["type": "string", "description": "The full body text of the note"] as [String: Any]
                ] as [String: Any],
                "required": ["title", "content"]
            ] as [String: Any]
        ],
        [
            "name": "list_notes",
            "description": "Returns all notes the user has saved as a formatted list. Use this when the user asks to see, read, show, or retrieve their notes, or when they reference 'my notes' in any way. Also call this before creating a note if the user says 'add another note', so you have context on what already exists. Returns a message if no notes have been saved yet.",
            "input_schema": [
                "type": "object",
                "properties": [:] as [String: Any],
                "required": [] as [String]
            ] as [String: Any]
        ]
    ]
}`}</CodeB>
          </Section>
        </VStep>

        <Checkpoint num={2}>Your <IC>tools</IC> property compiles with no errors.</Checkpoint>
      </VStep>

      <VStep num={3} title="Add response models for tool use">
        <p>
          When Claude returns a <IC>tool_use</IC> block, the content array contains a different shape than the text responses you decoded in Week 7. You need Codable models that handle both. Build them in three sub-steps.
        </p>

        <VStep num="a" title="Add ContentBlock to decode individual content items">
          <p>
            Create a <IC>struct ContentBlock: Codable</IC>. It needs five optional properties: <IC>type: String</IC> (always present), <IC>text: String?</IC> (present when type is "text"), and <IC>id: String?</IC>, <IC>name: String?</IC>, <IC>input: AnyCodable?</IC> (all present when type is "tool_use"). The <IC>AnyCodable</IC> type handles the tool's JSON input, whose shape varies per tool — you'll add that next.
          </p>
          <Section title="✅ Check your work — show me ContentBlock">
            <CodeB>{`struct ContentBlock: Codable {
    let type: String
    let text: String?
    let id: String?
    let name: String?
    let input: AnyCodable?
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="b" title="Add AnyCodable to handle arbitrary tool inputs">
          <p>
            Tool inputs are arbitrary JSON objects — <IC>create_note</IC> has title and content, while <IC>get_current_time</IC> has nothing. Swift's <IC>Codable</IC> can't decode open-ended JSON directly, so you need a type-erased wrapper. Add <IC>AnyCodable</IC> and its helper enum <IC>AnyCodableValue</IC> below <IC>ContentBlock</IC>. These decode string, int, and bool values generically.
          </p>
          <Warn>
            <IC>AnyCodableValue</IC> only handles primitive types — <IC>String</IC>, <IC>Int</IC>, and <IC>Bool</IC>. That covers everything in this lab, but a real tool with nested object inputs would silently decode to an empty dictionary. For production apps, use a more complete JSON decoding approach such as <IC>JSONSerialization</IC> or a library like AnyCodable from Flight-School.
          </Warn>
          <Section title="✅ Check your work — show me AnyCodable and AnyCodableValue">
            <CodeB>{`struct AnyCodable: Codable {
    let value: Any

    init(_ value: Any) { self.value = value }

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let dict = try? container.decode([String: AnyCodableValue].self) {
            value = dict.mapValues { $0.value }
        } else {
            value = [:]
        }
    }

    func encode(to encoder: Encoder) throws {}
}

enum AnyCodableValue: Codable {
    case string(String), int(Int), bool(Bool)

    var value: Any {
        switch self {
        case .string(let s): return s
        case .int(let i): return i
        case .bool(let b): return b
        }
    }

    init(from decoder: Decoder) throws {
        let c = try decoder.singleValueContainer()
        if let s = try? c.decode(String.self) { self = .string(s); return }
        if let i = try? c.decode(Int.self) { self = .int(i); return }
        if let b = try? c.decode(Bool.self) { self = .bool(b); return }
        throw DecodingError.typeMismatch(AnyCodableValue.self,
            .init(codingPath: decoder.codingPath, debugDescription: "Unsupported type"))
    }

    func encode(to encoder: Encoder) throws {}
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="c" title="Add ClaudeResponse as the top-level response model" last>
          <p>
            Add a <IC>struct ClaudeResponse: Codable</IC> with two properties: <IC>stop_reason: String</IC> and <IC>content: [ContentBlock]</IC>. This replaces (or supplements) whatever top-level response struct you used in Week 7.
          </p>
          <Section title="✅ Check your work — show me ClaudeResponse">
            <CodeB>{`struct ClaudeResponse: Codable {
    let stop_reason: String
    let content: [ContentBlock]
}`}</CodeB>
          </Section>
        </VStep>

        <Checkpoint num={3}>All three types compile. The project builds cleanly.</Checkpoint>
      </VStep>

      <VStep num={4} title="Write the executeTool function">
        <p>Add <IC>private func executeTool(name: String, input: [String: Any]) -&gt; String</IC> to your ViewModel. It runs the matching app logic and returns a plain string for Claude to read.</p>

        <VStep num="a" title="Handle get_current_time">
          <p>
            Use a <IC>switch</IC> on <IC>name</IC>. For <IC>"get_current_time"</IC>, create a <IC>DateFormatter</IC>, set its <IC>dateFormat</IC> to <IC>"EEEE, MMMM d, yyyy 'at' h:mm a"</IC>, and return <IC>formatter.string(from: Date())</IC>. Add a <IC>default</IC> branch that returns an error string.
          </p>
          <Section title="✅ Check your work — show me executeTool so far">
            <CodeB>{`private func executeTool(name: String, input: [String: Any]) -> String {
    switch name {
    case "get_current_time":
        let formatter = DateFormatter()
        formatter.dateFormat = "EEEE, MMMM d, yyyy 'at' h:mm a"
        return formatter.string(from: Date())

    default:
        return "Error: unknown tool \\"\\(name)\\""
    }
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="b" title="Add create_note and list_notes" last>
          <p>Add two more <IC>case</IC> branches:</p>
          <ul style={{ paddingLeft: 20, lineHeight: 2, margin: "8px 0" }}>
            <li><strong>create_note:</strong> Extract title and content from <IC>input</IC> with <IC>input["title"] as? String</IC>. Append a <IC>Note</IC> to your array. Return a confirmation string.</li>
            <li><strong>list_notes:</strong> If <IC>notes.isEmpty</IC>, return a message saying no notes exist. Otherwise, use <IC>map</IC> and <IC>joined(separator:)</IC> to format the list.</li>
          </ul>
          <Section title="✅ Check your work — show me the complete executeTool">
            <CodeB>{`private func executeTool(name: String, input: [String: Any]) -> String {
    switch name {
    case "get_current_time":
        let formatter = DateFormatter()
        formatter.dateFormat = "EEEE, MMMM d, yyyy 'at' h:mm a"
        return formatter.string(from: Date())

    case "create_note":
        let title = input["title"] as? String ?? "Untitled"
        let content = input["content"] as? String ?? ""
        notes.append(Note(title: title, content: content))
        return "Note created: \\(title)"

    case "list_notes":
        if notes.isEmpty { return "The user has no notes saved yet." }
        return notes.map { "• \\($0.title): \\($0.content)" }.joined(separator: "\\n")

    default:
        return "Error: unknown tool \\(name)"
    }
}`}</CodeB>
          </Section>
        </VStep>

        <Checkpoint num={4}>Your <IC>executeTool</IC> function compiles. Trace it mentally: called with <IC>name: "get_current_time"</IC>, what does it return?</Checkpoint>
      </VStep>

      <VStep num={5} title="Update sendMessage to run the tool loop">
        <p>
          Replace your existing <IC>sendMessage</IC> with a version that loops. The logic mirrors the Android version — detect <IC>tool_use</IC>, execute, send results back as a <IC>user</IC> turn, repeat until <IC>end_turn</IC>.
        </p>

        <VStep num="a" title="Set up the loop and send the first request">
          <p>
            Add the user's message to <IC>messageHistory</IC> as a dictionary with <IC>"role": "user"</IC> and <IC>"content": userText</IC>. Declare <IC>var continueLoop = true</IC>. Inside the <IC>while continueLoop</IC> loop, build the request body dictionary including <IC>"tools": tools</IC>, call your API helper, and decode the result as <IC>ClaudeResponse</IC>.
          </p>
          <Section title="✅ Check your work — show me sendMessage so far">
            <CodeB>{`func sendMessage(_ userText: String) async {
    messageHistory.append(["role": "user", "content": userText])

    var continueLoop = true
    while continueLoop {
        let body: [String: Any] = [
            "model": "claude-sonnet-4-6",
            "max_tokens": 1024,
            "tools": tools,
            "messages": messageHistory
        ]
        guard let response = try? await callAPI(body: body, as: ClaudeResponse.self) else {
            continueLoop = false
            break
        }

        if response.stop_reason == "tool_use" {
            // sub-steps b and c go here
        } else {
            // sub-step d goes here
        }
    }
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="b" title="Detect tool_use and add Claude's turn to history">
          <p>
            Inside the <IC>tool_use</IC> branch, add Claude's response to <IC>messageHistory</IC> as an <IC>assistant</IC> turn before doing anything else. You need to reconstruct it as a raw <IC>[[String: Any]]</IC> because that's what the API expects back. Loop through <IC>response.content</IC>, filter for <IC>type == "tool_use"</IC> blocks, and build the dictionary for each one.
          </p>
          <Section title="✅ Check your work — show me the tool_use branch so far">
            <CodeB>{`if response.stop_reason == "tool_use" {
    // Rebuild Claude's response as raw dicts for the history
    let assistantContent: [[String: Any]] = response.content.compactMap { block in
        guard block.type == "tool_use",
              let id = block.id, let name = block.name else { return nil }
        return [
            "type": "tool_use",
            "id": id,
            "name": name,
            "input": (block.input?.value as? [String: Any]) ?? [:]
        ]
    }
    messageHistory.append(["role": "assistant", "content": assistantContent])
    // sub-step c goes here
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="c" title="Execute each tool and send results back as a user turn">
          <p>
            Loop through <IC>response.content</IC> again, this time to execute each tool. For each <IC>tool_use</IC> block, extract the tool ID, name, and input, call <IC>executeTool</IC>, and build a <IC>tool_result</IC> dictionary. Collect them into an array and add the whole thing to <IC>messageHistory</IC> as a <strong>user</strong> turn — the API's alternating-role rule requires it.
          </p>
          <Section title="✅ Check your work — show me the complete tool_use branch">
            <CodeB>{`if response.stop_reason == "tool_use" {
    let assistantContent: [[String: Any]] = response.content.compactMap { block in
        guard block.type == "tool_use",
              let id = block.id, let name = block.name else { return nil }
        return ["type": "tool_use", "id": id, "name": name,
                "input": (block.input?.value as? [String: Any]) ?? [:]]
    }
    messageHistory.append(["role": "assistant", "content": assistantContent])

    var toolResults: [[String: Any]] = []
    for block in response.content where block.type == "tool_use" {
        guard let toolId = block.id, let toolName = block.name else { continue }
        let inputDict = (block.input?.value as? [String: Any]) ?? [:]
        let result = executeTool(name: toolName, input: inputDict)
        toolResults.append([
            "type": "tool_result",
            "tool_use_id": toolId,
            "content": result
        ])
    }
    // Tool results go in a user turn — required by the alternating-role rule
    messageHistory.append(["role": "user", "content": toolResults])
}`}</CodeB>
          </Section>
        </VStep>

        <VStep num="d" title="Handle end_turn and display the final answer" last>
          <p>
            In the <IC>else</IC> branch, set <IC>continueLoop = false</IC>. Find the first content block where <IC>type == "text"</IC> and extract its <IC>text</IC>. Add it to history as an <IC>assistant</IC> turn, then update your <IC>@Published</IC> messages array on the main actor.
          </p>
          <Section title="✅ Check your work — show me the complete sendMessage function">
            <CodeB>{`func sendMessage(_ userText: String) async {
    messageHistory.append(["role": "user", "content": userText])

    var continueLoop = true
    while continueLoop {
        let body: [String: Any] = [
            "model": "claude-sonnet-4-6",
            "max_tokens": 1024,
            "tools": tools,
            "messages": messageHistory
        ]
        guard let response = try? await callAPI(body: body, as: ClaudeResponse.self) else {
            continueLoop = false; break
        }

        if response.stop_reason == "tool_use" {
            let assistantContent: [[String: Any]] = response.content.compactMap { block in
                guard block.type == "tool_use",
                      let id = block.id, let name = block.name else { return nil }
                return ["type": "tool_use", "id": id, "name": name,
                        "input": (block.input?.value as? [String: Any]) ?? [:]]
            }
            messageHistory.append(["role": "assistant", "content": assistantContent])

            var toolResults: [[String: Any]] = []
            for block in response.content where block.type == "tool_use" {
                guard let toolId = block.id, let toolName = block.name else { continue }
                let inputDict = (block.input?.value as? [String: Any]) ?? [:]
                let result = executeTool(name: toolName, input: inputDict)
                toolResults.append([
                    "type": "tool_result",
                    "tool_use_id": toolId,
                    "content": result
                ])
            }
            messageHistory.append(["role": "user", "content": toolResults])

        } else {
            continueLoop = false
            if let textBlock = response.content.first(where: { $0.type == "text" }),
               let text = textBlock.text {
                messageHistory.append(["role": "assistant", "content": text])
                await MainActor.run { messages.append(Message(role: "assistant", content: text)) }
            }
        }
    }
}`}</CodeB>
          </Section>
        </VStep>

        <AiOpp>
          Ask your AI assistant: <em>"In the tool use loop above, what would happen if Claude called two tools in a single response? Does the current Swift code handle that? Walk me through what messageHistory looks like after both results are sent."</em>
        </AiOpp>

        <Checkpoint num={5}>Run the app and ask <em>"What time is it?"</em> — Claude should call <IC>get_current_time</IC> and respond with the real current time.</Checkpoint>
      </VStep>

      <VStep num={6} title="Test all three tools">
        <div style={{ margin: "10px 0" }}>
          {[
            { prompt: '"What\'s today\'s date?"', tool: "get_current_time", expect: "Claude calls get_current_time and answers with the real date." },
            { prompt: '"Save a note: buy groceries — milk, eggs, bread"', tool: "create_note", expect: "Claude calls create_note with a sensible title and content." },
            { prompt: '"What notes do I have?"', tool: "list_notes", expect: "Claude calls list_notes and reads back your saved note." },
            { prompt: '"Save a note about finishing the lab, then show me all my notes"', tool: "create_note + list_notes", expect: "Claude chains two tool calls before giving its final answer." },
          ].map(item => (
            <div key={item.tool} style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", margin: "8px 0" }}>
              <IC>{item.tool}</IC>
              <p style={{ fontSize: 13, fontStyle: "italic", color: IOS, margin: "6px 0 4px" }}>{item.prompt}</p>
              <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>Expected: {item.expect}</p>
            </div>
          ))}
        </div>
        <Checkpoint num={6}>All three tools fire correctly. The fourth prompt chains two tool calls before the final answer.</Checkpoint>
      </VStep>

      <VStep num={7} title="Reflection" last>
        <p>Write your answers as a comment block at the top of your ViewModel file.</p>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "12px 14px" }}>
          <ol style={{ paddingLeft: 20, lineHeight: 2, fontSize: 13, margin: 0 }}>
            <li>The loop sends the entire <IC>messageHistory</IC> on every API call. Why is that necessary?</li>
            <li>Why does a <IC>tool_result</IC> go into history as a <IC>user</IC> role, not <IC>assistant</IC>?</li>
            <li>What is one feature in your capstone that would benefit from tool use? Name the tool, write its description, and list its input fields.</li>
          </ol>
        </div>
        <AiOpp>
          Paste your <IC>tools</IC> computed property into your AI assistant and ask: <em>"Review these tool descriptions. For each one, is it specific enough that Claude would reliably know when to call it versus just answering from training data? Suggest improvements."</em>
        </AiOpp>
      </VStep>

    </div>
  </div>
);

/* ══════════════════════ LAB WRAPPER ═══════════════════════════════════════════ */
export const Lab = () => {
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
export const Resources = () => {
  const groups: { heading: string; accent: string; items: { title: string; description: string; url: string; tag: string; tagColor: string }[] }[] = [
    {
      heading: "Official Documentation",
      accent: P_C,
      items: [
        {
          title: "Tool use (function calling) — Anthropic Docs",
          description: "The complete reference for tool use in the Claude API: tool definition schema, how to handle tool_use blocks, multi-tool use, and best practices for tool descriptions.",
          url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview",
          tag: "Official docs",
          tagColor: "purple",
        },
        {
          title: "Messages API reference — tools field",
          description: "API reference for the tools and tool_choice parameters on the /v1/messages endpoint, including the full JSON schema for tool definitions.",
          url: "https://docs.anthropic.com/en/api/messages",
          tag: "API reference",
          tagColor: "purple",
        },
      ],
    },
    {
      heading: "Guides & Patterns",
      accent: T_C,
      items: [
        {
          title: "Tool use best practices — Anthropic Docs",
          description: "Guidelines for writing effective tool descriptions, choosing the right granularity, and structuring input schemas so Claude selects tools reliably.",
          url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/best-practices-for-tool-definitions",
          tag: "Best practices",
          tagColor: "teal",
        },
        {
          title: "Implement tool use — Anthropic Docs",
          description: "Step-by-step walkthrough of the full tool use loop: defining tools, detecting tool_use in responses, returning tool_result messages, and handling multi-turn chains.",
          url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/implement-tool-use",
          tag: "Guide",
          tagColor: "teal",
        },
      ],
    },
    {
      heading: "Going Further",
      accent: AM,
      items: [
        {
          title: "Computer use — Anthropic Docs",
          description: "See how tool use scales to a full computer-control agent. Claude uses screenshot and input tools to operate a desktop UI — the same loop pattern, taken to the extreme.",
          url: "https://docs.anthropic.com/en/docs/build-with-claude/computer-use",
          tag: "Advanced",
          tagColor: "amber",
        },
        {
          title: "Claude Code — built with tool use",
          description: "Claude Code (the CLI you may be using right now) is itself an agentic system built on tool use — Read, Write, Bash, and Grep are all tools Claude calls in a loop. A real-world example of this pattern at scale.",
          url: "https://docs.anthropic.com/en/docs/claude-code/overview",
          tag: "Real-world example",
          tagColor: "amber",
        },
      ],
    },
  ];

  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>Resources</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
        Tool use is one of the most important patterns in applied AI engineering. The Anthropic docs are the primary reference — bookmark the best practices guide especially, as tool description quality directly affects how reliably Claude selects the right tool.
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
export default function LlmToolUseUnit() {
  const [tab, setTab] = useState("Overview");

  return (
    <div style={{ fontFamily: "var(--font-sans)", maxWidth: 720, margin: "0 auto", padding: "24px 24px 48px" }}>
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
