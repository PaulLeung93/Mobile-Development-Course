import { useState } from "react";
import { Overview as Session1Overview, Lab as Session1Lab } from "./week9_session1_llm_tool_use";
import { Overview as Session2Overview, Lab as Session2Lab } from "./week9_session2_appfunctions";

const TABS = ["Overview", "Lab", "Capstone", "Resources"];
const PLATFORMS = ["Android", "iOS"];
const SESSION_LABELS = ["Session 1 — Tool Use", "Session 2 — AppFunctions / App Intents"];
const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const AM = "#633806", AML = "#FAEEDA";
const BL = "#7F52FF", BLL = "#F0EEFF";
const GR = "#F05138", GRL = "#FFF2F0";
const CAP_C = "#993C1D", CAP_BG = "#FAECE7";
const TEAL_L = "#E1F5EE", TEAL_D = "#0F6E56";

function AiOpp({ children }) {
  return (
    <div className="callout-ai" style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>{"✨ AI Opportunity"}</div>
      {children}
    </div>
  );
}

function Warn({ children }) {
  return (
    <div className="callout-warn" style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E6", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #EF9F27" }}>
      {"⚠️ "}{children}
    </div>
  );
}

function Tip({ children }) {
  return (
    <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>
      {"💡 "}{children}
    </div>
  );
}

function Link({ href = "", children }) {
  var s = { color: P_C, textDecoration: "underline", cursor: "pointer" };
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={s}>{children}</a>;
  }
  return <span style={s}>{children}</span>;
}

function SessionToggle({ session, setSession }) {
  return (
    <div style={{ display: "flex", gap: 0, marginBottom: 16, borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
      {[1, 2].map(function(n) {
        var active = session === n;
        return (
          <button key={n} onClick={function() { setSession(n); }} style={{
            padding: "8px 20px", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer",
            background: active ? PL : "var(--color-background-primary)",
            color: active ? PD : "var(--color-text-secondary)",
            whiteSpace: "nowrap"
          }}>{SESSION_LABELS[n - 1]}</button>
        );
      })}
    </div>
  );
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
function Overview({ session, setSession }) {
  return (
    <div>
      <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 12 }}>
        {"Don't forget to fill out the ✏️ "}<Link>Session Survey</Link>{" at the end of each class session!"}
      </div>
      <div style={{ background: CAP_BG, padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 16, color: CAP_C }}>
        {"🏗️ "}<strong>REMINDER:</strong>{" "}<Link>Capstone M4</Link>{" — feature-complete build is due end of Session 2. This is the last milestone before demo day. See the Capstone tab."}
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>Unit 9: Agentic AI on Mobile — When AI Takes Action</h2>

      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
        {"Through Week 8 your apps received AI output — chat replies, image labels, on-device classifications. This week the loop closes: AI starts doing things. Your app's LLM gains the ability to invoke tools (Session 1), and your app exposes capabilities so platform-level AI assistants like Gemini and Siri can drive it on the user's behalf (Session 2). Both sessions are AI-focused."}
      </p>

      <div style={{ marginTop: 16, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>Session Info</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>{"📅 See your cohort’s schedule for session times"}</li>
          <li>{"↗️ "}<Link>Session Zoom Link</Link>{" | Passcode: "}<strong>codepath</strong></li>
          <li>{"📊 "}<Link>Link to Slides</Link>{" — separate decks for Session 2 Android and Session 2 iOS"}</li>
        </ul>
        <strong style={{ display: "block", marginTop: 10 }}>Upcoming Due Dates</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>{"🏗️ "}<Link>Capstone M4</Link>{" — feature-complete build, due end of Session 2"}</li>
          <li>{"📬 "}<Link>Week 10 pre-work</Link>{" — demo prep checklist + app store account setup"}</li>
        </ul>
      </div>

      <div className="callout-ai" style={{ marginTop: 16, padding: "14px", background: "#F9F0FF", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"🔄 LLM Tool Use vs AppFunctions / App Intents — the key tradeoffs"}</strong>
        <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "4px 0 10px" }}>
          {"Both involve \"an AI calling your functions.\" But which AI, and where the user is, are completely different."}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
          {[
            { label: "LLM Tool Use (Session 1)", items: ["The user is in your app's chat UI", "Your app's LLM (Claude) decides to call a tool", "Tools defined in JSON inside your API request", "Your app orchestrates the loop", "Works on any platform with any LLM"], color: PL, fg: PD },
            { label: "AppFunctions / App Intents (Session 2)", items: ["The user is talking to Siri / Gemini", "The OS-level AI invokes your app's capability", "Capability declared in code, indexed at install", "Your app sits passively, waits for invocation", "Tightly coupled to the platform's assistant"], color: TEAL_L, fg: TEAL_D },
          ].map(function(col) {
            return (
              <div key={col.label} style={{ background: col.color, borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: col.fg, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>{col.label}</p>
                {col.items.map(function(item) {
                  return (
                    <div key={item} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                      <span style={{ color: col.fg, flexShrink: 0, fontSize: 11 }}>{"▸"}</span>
                      <span style={{ fontSize: 11, color: col.fg, lineHeight: 1.4 }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Per-session overview, switchable ── */}
      <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--color-border-tertiary)" }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 4px" }}>{"📚 Per-session overview"}</h3>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 12px" }}>
          {"Toggle below to read the full overview for each session."}
        </p>
        <SessionToggle session={session} setSession={setSession} />
        <div style={{ marginTop: 8 }}>
          {session === 1 ? <Session1Overview /> : <Session2Overview />}
        </div>
      </div>
    </div>
  );
}

/* ====== LAB ====== */
function LabTab({ session, setSession }) {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 9 Labs</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
        {"Toggle between the two session labs. Each lab has its own platform (Android / iOS) toggle inside."}
      </p>
      <div style={{ display: "inline-block", fontSize: 11, fontWeight: 500, padding: "2px 9px", borderRadius: 20, background: AML, color: AM, marginBottom: 12 }}>AI feature</div>

      <SessionToggle session={session} setSession={setSession} />

      <Warn>
        {"Both labs are framed as "}<strong>exposure</strong>{", not capstone integration. The capstone rubric does not list these features as requirements. Spend lab time on whichever of polishing-the-capstone or learning-new-content best fits your team's state."}
      </Warn>

      <div style={{ marginTop: 20 }}>
        {session === 1 ? <Session1Lab /> : <Session2Lab />}
      </div>
    </div>
  );
}

/* ====== CAPSTONE ====== */
function CapstoneTab({ platform, setPlatform }) {
  return (
    <div>
      <div style={{ background: CAP_BG, padding: "14px", borderRadius: 10, marginBottom: 16 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px", color: CAP_C }}>
          {"🏗️ Capstone M4: Feature-Complete Build"}
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: CAP_C }}>
          {"Due end of Session 2. Submit by sharing the GitHub repo link in Slack. This is the last milestone before demo day."}
        </p>
      </div>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"✅ M4 Deliverables"}</h4>
        <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
          {[
            "All core screens navigable end-to-end — no dead ends or placeholder screens",
            "At least one real network call or AI feature working end-to-end",
            "Local persistence working — data survives an app restart",
            "At least one stretch feature from your original proposal is implemented",
            "Git branching workflow in place — feature branches merged via PRs, not pushed directly to main",
            "Every team member has meaningful commits on the main branch",
            "App icon is set — not the default placeholder",
            "No build-breaking crashes during a normal use flow",
          ].map(function(item, i) {
            return <li key={i}>{item}</li>;
          })}
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 20 }}>{"📋 What the week looks like"}</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "10px 0" }}>
          {[
            { label: "Session 1 lab", val: "Build the LLM Tool Use lab (Smart Notes Assistant). Once you've completed the core checkpoints, switch to capstone work — TAs available throughout." },
            { label: "Session 2 lab", val: "AppFunctions / App Intents lab is exposure-only. Spend most of session on capstone — the lab is there if your team is already feature-complete." },
            { label: "Between sessions", val: "Finish any remaining M4 features. Review teammate PRs. Smoke-test on a real device, not just the emulator." },
            { label: "End of Session 2", val: "Submit M4 via the Slack form. Repo link + confirmation that required features are done." },
          ].map(function(item) {
            return (
              <div key={item.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
              </div>
            );
          })}
        </div>

        <Warn>
          {"Have your app running on a device or emulator when you submit M4. The instructor will do a quick check during demo prep — \"works on my machine\" needs to be demonstrable, not theoretical."}
        </Warn>

        <Tip>
          {"If your team finishes early and wants to bolt on something flashy for demo day, "}<strong>Session 1's</strong>{" tool-use pattern is the lower-lift add — usually a single screen, no platform-level wiring. AppFunctions / App Intents demo well but require manifest-level changes that can destabilise a polished build."}
        </Tip>

        <AiOpp>
          <em>Scope what{"'"}s left → </em>{"Ask Claude: "}
          <strong>{"\"Our capstone has these features still to build: [list]. We have one week left until demo day. Which features are highest priority for a great demo? What's safe to cut?\""}</strong>
        </AiOpp>

        <div className="callout-ai" style={{ marginTop: 16, padding: "12px 14px", background: "#F9F0FF", borderRadius: 8 }}>
          <strong>{"📅 Capstone Timeline"}</strong>
          <ul style={{ paddingLeft: 20, margin: "6px 0 0", lineHeight: 2 }}>
            <li style={{ opacity: 0.5 }}>{"Week 5: Team formation + platform selection ✅"}</li>
            <li style={{ opacity: 0.5 }}>{"Week 6: M1 — Repo setup, architecture scaffolded ✅"}</li>
            <li style={{ opacity: 0.5 }}>{"Week 7: M2 — Core navigation + first networking call ✅"}</li>
            <li style={{ opacity: 0.5 }}>{"Week 8: M3 — Instructor check-in ✅"}</li>
            <li><strong>{"Week 9 (this week):"}</strong>{" M4 — Feature-complete, Git branching workflow"}</li>
            <li><strong>{"Week 10:"}</strong>{" Final — APK / TestFlight, demo day, written reflection"}</li>
          </ul>
        </div>
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
        <p>{"Helpful links for this unit. Session 1 covers LLM tool use (cross-platform). Session 2 covers "}{isAndroid ? "AppFunctions on Android" : "App Intents on iOS"}{"."}</p>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>{"📹 Session Recordings"}</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><Link>Weekly Video Playlist</Link></li>
          <li><Link>Office Hours Video Playlist</Link></li>
        </ul>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{"May take 24–48 hours to appear."}</p>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🧠 Session 1 — LLM Tool Use & Function Calling"}</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><Link href="https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview">Tool use (function calling) — Anthropic Docs</Link>{" — the canonical reference for the tool-use loop and JSON schema format"}</li>
          <li><Link href="https://docs.anthropic.com/en/api/messages">Messages API reference — tools field</Link>{" — full schema for tool definitions and tool_choice"}</li>
          <li><Link href="https://docs.anthropic.com/en/docs/build-with-claude/tool-use/best-practices-for-tool-definitions">Tool use best practices</Link>{" — writing tool descriptions Claude can select reliably"}</li>
          <li><Link href="https://docs.anthropic.com/en/docs/build-with-claude/tool-use/implement-tool-use">Implement tool use — step-by-step guide</Link>{" — full loop walkthrough (defining tools, handling tool_use, returning tool_result)"}</li>
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🔬 Going Further with Tool Use"}</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><Link href="https://docs.anthropic.com/en/docs/build-with-claude/computer-use">Computer use — Anthropic Docs</Link>{" — tool use scaled to a full desktop-control agent"}</li>
          <li><Link href="https://docs.anthropic.com/en/docs/claude-code/overview">Claude Code — built on tool use</Link>{" — Read / Write / Bash / Grep are all tools Claude calls in a loop"}</li>
          <li><Link href="https://www.anthropic.com/research/building-effective-agents">Building Effective Agents — Anthropic Research</Link>{" — when to add tools vs when to keep it simple"}</li>
        </ul>

        {isAndroid ? (
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🤖 Session 2 — Android — AppFunctions"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link href="https://developer.android.com/ai/appfunctions">AppFunctions — Android Developers</Link>{" — official guide: declaration, the Jetpack library, schema generation, AppFunctionManager"}</li>
              <li><Link href="https://developer.android.com/jetpack/androidx/releases/appfunctions">androidx.appfunctions release notes</Link>{" — current alpha version, changelog, known issues"}</li>
            </ul>

            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"💡 Background & Vision"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link href="https://android-developers.googleblog.com/2025/05/announcing-app-functions-for-android.html">Announcing App Functions for Android</Link>{" — Android Developers blog post on the agent-centric OS vision"}</li>
              <li><Link href="https://modelcontextprotocol.io/docs/getting-started/intro">Model Context Protocol — Introduction</Link>{" — the spec AppFunctions mirrors conceptually (Declare → Schema → Discover → Execute)"}</li>
            </ul>

            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🚀 Early Access & Community"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link href="https://forms.gle/GN5ybjQFhzHRCguM7">AppFunctions Early Access Program</Link>{" — register for early access to the full Gemini-invocation pipeline"}</li>
              <li><Link href="https://issuetracker.google.com/issues/new?component=1709065&template=2081773">File an issue — AppFunctions tracker</Link>{" — official issue tracker; feedback influences the stable API"}</li>
            </ul>
          </div>
        ) : (
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🍎 Session 2 — iOS — App Intents"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link href="https://developer.apple.com/documentation/appintents">App Intents framework reference</Link>{" — the canonical API documentation"}</li>
              <li><Link href="https://developer.apple.com/documentation/appintents/app-intents">Adopting App Intents</Link>{" — the official adoption guide (parameters, results, AppShortcutsProvider)"}</li>
              <li><Link href="https://developer.apple.com/documentation/appintents/appshortcutsprovider">AppShortcutsProvider</Link>{" — exposing intents to Shortcuts and Spotlight"}</li>
            </ul>

            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🎥 WWDC Sessions"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link href="https://developer.apple.com/videos/play/wwdc2022/10032/">WWDC22 — Dive into App Intents</Link>{" — the introduction to the framework"}</li>
              <li><Link href="https://developer.apple.com/videos/play/wwdc2023/10103/">WWDC23 — Spotlight your app with App Shortcuts</Link></li>
              <li><Link href="https://developer.apple.com/videos/play/wwdc2024/10133/">WWDC24 — Bring your app to Siri</Link>{" — App Intents + Apple Intelligence integration"}</li>
            </ul>

            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"💡 Background & Vision"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link href="https://www.apple.com/apple-intelligence/">Apple Intelligence overview</Link>{" — on-device + Private Cloud Compute architecture"}</li>
              <li><Link href="https://modelcontextprotocol.io/docs/getting-started/intro">Model Context Protocol — Introduction</Link>{" — the broader spec App Intents conceptually mirrors"}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

/* ====== MAIN ====== */
export default function Week9Unit() {
  var tabState = useState("Overview");
  var tab = tabState[0];
  var setTab = tabState[1];
  var platState = useState("Android");
  var platform = platState[0];
  var setPlatform = platState[1];
  var sessionState = useState(1);
  var session = sessionState[0];
  var setSession = sessionState[1];
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
      {tab === "Overview"  && <Overview session={session} setSession={setSession} />}
      {tab === "Lab"       && <LabTab session={session} setSession={setSession} />}
      {tab === "Capstone"  && <CapstoneTab platform={platform} setPlatform={setPlatform} />}
      {tab === "Resources" && <ResourcesTab platform={platform} setPlatform={setPlatform} />}
    </div>
  );
}
