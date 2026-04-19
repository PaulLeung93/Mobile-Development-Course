import { useState } from "react";

const SLATE = "#0F1117";
const SLATE_2 = "#1A1D27";
const SLATE_3 = "#252836";
const BORDER = "#2E3245";
const ACCENT = "#4F8EF7";
const ACCENT_2 = "#F7894F";
const GREEN = "#3ECF8E";
const MUTED = "#7A8099";
const TEXT = "#E8EAF2";
const TEXT_DIM = "#B0B5CC";
const KOTLIN_COLOR = "#7F52FF";
const SWIFT_COLOR = "#F05138";

const Tab = ({ active, color, onClick, children }) => (
  <button onClick={onClick} style={{ padding: "8px 20px", borderRadius: 6, border: `1.5px solid ${active ? color : BORDER}`, background: active ? `${color}18` : "transparent", color: active ? color : MUTED, fontSize: 13, fontFamily: "inherit", fontWeight: 600, cursor: "pointer", letterSpacing: ".02em", transition: "all .15s" }}>
    {children}
  </button>
);

const Badge = ({ children, color }) => (
  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 20, background: `${color}22`, color, border: `1px solid ${color}44` }}>
    {children}
  </span>
);

const Step = ({ n, title, time, children, accent = ACCENT }) => (
  <div style={{ marginBottom: 32, paddingLeft: 24, borderLeft: `2px solid ${BORDER}`, position: "relative" }}>
    <div style={{ position: "absolute", left: -14, top: 0, width: 26, height: 26, borderRadius: "50%", background: SLATE_3, border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: accent }}>
      {n}
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
      <p style={{ fontSize: 15, fontWeight: 700, color: TEXT, margin: 0 }}>{title}</p>
      {time && <span style={{ fontSize: 11, color: MUTED, background: SLATE_3, padding: "2px 8px", borderRadius: 20, border: `1px solid ${BORDER}` }}>~{time}</span>}
    </div>
    <div style={{ fontSize: 13, color: TEXT_DIM, lineHeight: 1.75 }}>{children}</div>
  </div>
);

const CodeBlock = ({ lang, children, color }) => (
  <div style={{ margin: "12px 0", borderRadius: 8, overflow: "hidden", border: `1px solid ${BORDER}` }}>
    <div style={{ background: SLATE_3, padding: "5px 14px", display: "flex", alignItems: "center", gap: 8, borderBottom: `1px solid ${BORDER}` }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: color || ACCENT, display: "inline-block" }} />
      <span style={{ fontSize: 11, color: MUTED, fontFamily: "monospace", letterSpacing: ".04em" }}>{lang}</span>
    </div>
    <pre style={{ margin: 0, background: SLATE_2, color: "#CDD6F4", fontSize: 12, padding: "14px 16px", lineHeight: 1.75, overflowX: "auto", whiteSpace: "pre", fontFamily: "monospace" }}>
      {children}
    </pre>
  </div>
);

const Callout = ({ type, children }) => {
  const map = { tip: { color: GREEN, icon: "💡", label: "Tip" }, warning: { color: ACCENT_2, icon: "⚠️", label: "Heads up" }, claude: { color: ACCENT, icon: "✦", label: "Claude is allowed" }, checkpoint: { color: GREEN, icon: "✓", label: "Checkpoint" } };
  const s = map[type] || map.tip;
  return (
    <div style={{ background: `${s.color}0F`, border: `1px solid ${s.color}33`, borderRadius: 8, padding: "10px 14px", margin: "12px 0", fontSize: 13, color: TEXT_DIM, lineHeight: 1.65 }}>
      <span style={{ color: s.color, fontWeight: 700, marginRight: 6 }}>{s.icon} {s.label}:</span>
      {children}
    </div>
  );
};

const CheckItem = ({ children }) => (
  <div style={{ display: "flex", gap: 10, margin: "7px 0", alignItems: "flex-start" }}>
    <div style={{ width: 16, height: 16, border: `1.5px solid ${BORDER}`, borderRadius: 4, flexShrink: 0, marginTop: 2, background: SLATE_3 }} />
    <span style={{ fontSize: 13, color: TEXT_DIM, lineHeight: 1.6 }}>{children}</span>
  </div>
);

const TopicPill = ({ children, color }) => (
  <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: `${color}15`, color, border: `1px solid ${color}30`, fontFamily: "monospace", whiteSpace: "nowrap" }}>
    {children}
  </span>
);

const kotlinExcerpt = `fun main() {
    var score = 0
    val missed = mutableListOf<String>()

    // ════════════════════════════════════════════════════════════
    //  TOPIC 1 of 12: val vs var
    // ════════════════════════════════════════════════════════════
    println("  Kotlin gives you two keywords to declare variables:")
    println()
    println("    val  ->  read-only. Cannot be changed once assigned.")
    println("    var  ->  mutable. Can be reassigned anytime.")
    println()
    println("    val appName = \"CodePath\"   // fixed — never changes")
    println("    var lives = 3              // changes as game progresses")
    println("    lives = 2                  // allowed")
    println("    appName = \"Other\"          // error — val is read-only")

    // ────────────────────────────────────────────────────────────
    //  QUESTION 1 of 12
    // ────────────────────────────────────────────────────────────
    println("  You're building a quiz app. You need to store a")
    println("  player's score that increases each correct answer.")
    println("  Which keyword should you use?")
    println("    A) val  B) var  C) const  D) final")
    val a1 = readLine()?.trim()?.lowercase() ?: ""
    if (a1 == "b") { println("  Correct! var is mutable."); score++ }
    else { println("  Answer: B — var."); missed.add("Topic 1: val vs var") }

    // ... 11 more topics following the same pattern ...
}`;

const swiftExcerpt = `import Foundation

var score = 0
var missed: [String] = []

// ════════════════════════════════════════════════════════════
//  TOPIC 1 of 12: let vs var
// ════════════════════════════════════════════════════════════
print("  Swift gives you two keywords to declare variables:")
print()
print("    let  ->  constant. Cannot be changed once assigned.")
print("    var  ->  variable. Can be reassigned anytime.")
print()
print("    let appName = \"CodePath\"   // fixed — never changes")
print("    var lives = 3              // changes as game progresses")
print("    lives = 2                  // allowed")
print("    appName = \"Other\"          // error — let is a constant")

// ────────────────────────────────────────────────────────────
//  QUESTION 1 of 12
// ────────────────────────────────────────────────────────────
print("  You're building a quiz app. You need to store a")
print("  player's score that increases each correct answer.")
print("  Which keyword should you use?")
print("    A) let  B) val  C) var  D) const")
let a1 = (readLine() ?? "").trimmingCharacters(in: .whitespaces).lowercased()
if a1 == "c" { print("  Correct! var is mutable."); score += 1 }
else { print("  Answer: C — var."); missed.append("Topic 1: let vs var") }

// ... 11 more topics following the same pattern ...`;

const readmeTemplate = `# Prework — CodePath Mobile Development

## Overview
A self-guided Kotlin/Swift language primer covering 12 fundamental syntax topics,
each followed by a quiz question. Submitted as part of the enrollment process for
CodePath's Mobile Development in the Age of AI course.

## Language
<!-- Delete the one that doesn't apply -->
- Kotlin (Android)
- Swift (iOS)

## Score
<!-- Fill in your score -->
- Result: __ / 12

## Reflections
<!-- Any thoughts on the prework — what clicked, what was challenging, what you're curious about heading into Week 1 -->


## How to Run
<!-- Fill in the steps to run your project -->
1. Clone this repo
2. Open in [IntelliJ IDEA / Xcode]
3. Run [TriviaApp.kt / TriviaApp.swift]
`;

const topics = [
  "val/var vs let/var", "Type inference", "String templates / interpolation",
  "Functions", "if / else", "when / switch",
  "Nullability / Optionals", "Lists / Arrays", "for loops & ranges",
  "while loops", "Data classes / Structs", "Lambdas / Closures"
];

export default function PreworkSpec() {
  const [lang, setLang] = useState("kotlin");
  const color = lang === "kotlin" ? KOTLIN_COLOR : SWIFT_COLOR;
  const langLabel = lang === "kotlin" ? "Kotlin" : "Swift";

  return (
    <div style={{ background: SLATE, minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", color: TEXT, padding: "0 0 60px" }}>

      {/* Header */}
      <div style={{ background: SLATE_2, borderBottom: `1px solid ${BORDER}`, padding: "28px 40px 24px", marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <Badge color={ACCENT}>Pre-work</Badge>
          <Badge color={GREEN}>Submit to enroll</Badge>
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 6px", letterSpacing: "-.02em", color: TEXT }}>
          Mobile Development in the Age of AI
        </h1>
        <p style={{ fontSize: 15, color: MUTED, margin: "0 0 20px" }}>CodePath · Pre-course assignment · Est. 2–3 hours</p>
        <p style={{ fontSize: 13, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 640, margin: 0 }}>
          Before Week 1, you'll work through a self-guided language primer in either Kotlin or Swift.
          Each topic teaches you a fundamental syntax concept, then immediately quizzes you on it.
          Score 10/12 or better to submit — it's open book, and you can retake as many times as you need.
        </p>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 40px" }}>

        {/* Language picker */}
        <div style={{ background: SLATE_2, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: ".07em" }}>Pick your language</p>
          <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
            <Tab active={lang === "kotlin"} color={KOTLIN_COLOR} onClick={() => setLang("kotlin")}>🤖 Kotlin</Tab>
            <Tab active={lang === "swift"} color={SWIFT_COLOR} onClick={() => setLang("swift")}>🍎 Swift</Tab>
          </div>
          <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>
            Pick whichever language you're more curious about — this isn't a permanent decision.{" "}
            {lang === "kotlin"
              ? "You'll install IntelliJ IDEA Community Edition (free) to run your Kotlin code — setup instructions are in Step 1 below."
              : "You'll install Xcode (free, macOS only) to run your Swift code — setup instructions are in Step 1 below."}
          </p>
        </div>

        {/* What's covered */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 14px", color: TEXT }}>What's covered — 12 topics</h2>
          <p style={{ fontSize: 13, color: TEXT_DIM, margin: "0 0 16px", lineHeight: 1.7 }}>
            Every topic follows the same rhythm: a short explanation with annotated code examples printed to the console, then one question to confirm you got it. The questions are baked right into the app — no separate doc to juggle.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
            {topics.map((t, i) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: color, width: 16, textAlign: "right" }}>{i + 1}.</span>
                <TopicPill color={color}>{t}</TopicPill>
              </div>
            ))}
          </div>
          <Callout type="tip">
            These 12 concepts are the foundation you'll use in Week 1 and throughout the course. You won't be seeing them cold on Day 1 — you'll be applying something you've already worked through.
          </Callout>
        </div>

        {/* Scoring */}
        <div style={{ background: SLATE_2, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: "0 0 14px", textTransform: "uppercase", letterSpacing: ".07em" }}>Scoring & retakes</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { label: "Pass threshold", value: "10 / 12", sub: "80%", c: GREEN },
              { label: "Retakes", value: "Unlimited", sub: "re-run anytime", c: ACCENT },
              { label: "Open book?", value: "Yes", sub: "use any resource", c: color },
            ].map(({ label, value, sub, c }) => (
              <div key={label} style={{ background: SLATE_3, borderRadius: 8, padding: "12px 14px", border: `1px solid ${BORDER}` }}>
                <p style={{ fontSize: 11, color: MUTED, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</p>
                <p style={{ fontSize: 20, fontWeight: 800, color: c, margin: "0 0 2px" }}>{value}</p>
                <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{sub}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: TEXT_DIM, margin: "14px 0 0", lineHeight: 1.65 }}>
            When you don't pass, the app tells you exactly which topics you missed so you know what to review before running it again.
          </p>
        </div>

        {/* Steps */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 28px", color: TEXT }}>Instructions</h2>

          <Step n="1" title="Download and install your IDE" time="20–30 min" accent={color}>
            {lang === "kotlin" ? (
              <>
                <p style={{ margin: "0 0 6px" }}>
                  You'll use <strong style={{ color: TEXT }}>IntelliJ IDEA Community Edition</strong> — the official Kotlin IDE, and completely free. Follow the instructions for your operating system below.
                </p>
                <Callout type="warning">IntelliJ can take 10–15 minutes to download and index on first launch. Start this step before doing anything else.</Callout>

                {/* Mac */}
                <p style={{ margin: "14px 0 8px", fontWeight: 700, color: TEXT, fontSize: 13 }}>🍎 Mac</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 6 }}>
                  {[
                    [1, <>Go to <strong style={{ color: TEXT }}>jetbrains.com/idea</strong> and click <strong style={{ color: TEXT }}>Download</strong></>],
                    [2, <>Under <strong style={{ color: TEXT }}>Community Edition</strong>, click the <strong style={{ color: TEXT }}>.dmg (macOS)</strong> button</>],
                    [3, <>Open the downloaded <code style={{ background: SLATE_3, padding: "1px 5px", borderRadius: 3, fontSize: 11 }}>.dmg</code> file — drag the IntelliJ icon into your <strong style={{ color: TEXT }}>Applications</strong> folder</>],
                    [4, <>Open IntelliJ from Applications. If macOS warns it was downloaded from the internet, click <strong style={{ color: TEXT }}>Open</strong></>],
                    [5, <>Work through the setup wizard — when asked about plugins or themes, the defaults are fine. Just click through</>],
                  ].map(([n, desc]) => (
                    <div key={n} style={{ background: SLATE_3, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ background: KOTLIN_COLOR, color: "#fff", fontWeight: 800, fontSize: 11, borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{n}</span>
                      <span style={{ fontSize: 12, color: TEXT_DIM, lineHeight: 1.65 }}>{desc}</span>
                    </div>
                  ))}
                </div>

                {/* Windows */}
                <p style={{ margin: "14px 0 8px", fontWeight: 700, color: TEXT, fontSize: 13 }}>🪟 Windows</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 6 }}>
                  {[
                    [1, <>Go to <strong style={{ color: TEXT }}>jetbrains.com/idea</strong> and click <strong style={{ color: TEXT }}>Download</strong></>],
                    [2, <>Under <strong style={{ color: TEXT }}>Community Edition</strong>, click the <strong style={{ color: TEXT }}>.exe (Windows)</strong> button</>],
                    [3, <>Run the downloaded <code style={{ background: SLATE_3, padding: "1px 5px", borderRadius: 3, fontSize: 11 }}>.exe</code>. If Windows shows an "Unknown publisher" warning, click <strong style={{ color: TEXT }}>More info → Run anyway</strong></>],
                    [4, <>In the installer, check <strong style={{ color: TEXT }}>"Add Open Folder as Project"</strong> if prompted — leave everything else as default</>],
                    [5, <>Finish the install and launch IntelliJ from the Start menu or desktop shortcut</>],
                    [6, <>Work through the setup wizard — defaults are fine, just click through</>],
                  ].map(([n, desc]) => (
                    <div key={n} style={{ background: SLATE_3, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ background: KOTLIN_COLOR, color: "#fff", fontWeight: 800, fontSize: 11, borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{n}</span>
                      <span style={{ fontSize: 12, color: TEXT_DIM, lineHeight: 1.65 }}>{desc}</span>
                    </div>
                  ))}
                </div>

                <Callout type="tip">When IntelliJ first opens it will spend a few minutes "indexing" in the background. You'll see a progress bar at the bottom — wait for it to finish before moving on.</Callout>
              </>
            ) : (
              <>
                <p style={{ margin: "0 0 6px" }}>
                  You'll use <strong style={{ color: TEXT }}>Xcode</strong> — Apple's official Swift IDE, and free. <strong style={{ color: ACCENT_2 }}>Xcode is only available on Mac.</strong> If you're on Windows, switch to the Kotlin track or post in the course Slack before proceeding.
                </p>
                <Callout type="warning">Xcode is a large download (~7GB) and can take 30–60 minutes depending on your connection. Start this before doing anything else and make sure you have enough disk space.</Callout>

                <p style={{ margin: "14px 0 8px", fontWeight: 700, color: TEXT, fontSize: 13 }}>🍎 Mac</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 6 }}>
                  {[
                    [1, <>Open the <strong style={{ color: TEXT }}>App Store</strong> on your Mac and search for <strong style={{ color: TEXT }}>Xcode</strong></>],
                    [2, <>Click <strong style={{ color: TEXT }}>Get</strong> then <strong style={{ color: TEXT }}>Install</strong> — it's free. You may be asked to sign in with your Apple ID</>],
                    [3, <>Wait for the download to complete — this can take 30–60 minutes depending on your connection. Feel free to do something else while it downloads</>],
                    [4, <><strong style={{ color: TEXT }}>Open Xcode</strong> once installed. The first launch will show <em>"Installing additional components"</em> with a progress bar — this is normal. Let it finish (another 5–10 min)</>],
                    [5, <>When Xcode finishes loading you'll see the Welcome screen — you're ready to go</>],
                  ].map(([n, desc]) => (
                    <div key={n} style={{ background: SLATE_3, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ background: SWIFT_COLOR, color: "#fff", fontWeight: 800, fontSize: 11, borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{n}</span>
                      <span style={{ fontSize: 12, color: TEXT_DIM, lineHeight: 1.65 }}>{desc}</span>
                    </div>
                  ))}
                </div>
                <Callout type="tip">If macOS says your version is too old to install Xcode, post in the course Slack — your instructor can help you find a compatible version or alternative setup.</Callout>
              </>
            )}
            <Callout type="checkpoint">Your IDE is installed and open. You're ready to clone the starter repo in the next step.</Callout>
          </Step>

          <Step n="2" title="Clone the starter repo" time="10 min" accent={color}>
            <p style={{ margin: "0 0 10px" }}>
              If you don't have a GitHub account, create one at github.com — it's free.{" "}
              {lang === "kotlin" ? (
                <>Then use the <a href="https://github.com/PaulLeung93/KotlinPrimerApp" target="_blank" rel="noreferrer" style={{ color: color, textDecoration: "none", fontWeight: 600 }}>template repo</a> to create your own private copy of the prework repo.</>
              ) : (
                <>Then use the template link your instructor shared to create your own private copy of the prework repo.</>
              )}
            </p>
            <ol style={{ margin: "0 0 14px", paddingLeft: 20, lineHeight: 2.1 }}>
              <li>Click the template link → <strong style={{ color: TEXT }}>Use this template</strong> → <strong style={{ color: TEXT }}>Create a new repository</strong></li>
              <li>Name it <code style={{ background: SLATE_3, padding: "1px 5px", borderRadius: 3, fontSize: 12 }}>codepath-prework</code> and set it to <strong style={{ color: TEXT }}>private</strong></li>
              <li>Clone your repo to your machine:</li>
            </ol>
            <CodeBlock lang="Terminal" color={MUTED}>{`git clone https://github.com/YOUR_USERNAME/codepath-prework\ncd codepath-prework`}</CodeBlock>
            <p style={{ margin: "14px 0 8px", fontWeight: 600, color: TEXT }}>
              Open <span style={{ color }}>{lang === "kotlin" ? "TriviaApp.kt" : "TriviaApp.swift"}</span> — here's a preview of what's inside:
            </p>
            <CodeBlock lang={lang === "kotlin" ? "Kotlin · TriviaApp.kt (excerpt)" : "Swift · TriviaApp.swift (excerpt)"} color={color}>
              {lang === "kotlin" ? kotlinExcerpt : swiftExcerpt}
            </CodeBlock>
            <Callout type="tip">
              The full file has all 12 topics and questions already written. Your job is to run it, read each lesson, and answer the questions — not to write code.
            </Callout>
          </Step>

          <Step n="3" title="Run the primer and reach 10/12" time="60–90 min" accent={color}>
            <p style={{ margin: "0 0 12px" }}>
              Run <span style={{ color, fontWeight: 600 }}>{lang === "kotlin" ? "TriviaApp.kt" : "TriviaApp.swift"}</span>. Work through all 12 topics — read the explanation, then type your answer. The app scores you at the end and tells you exactly which topics to review if you don't pass.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
              {[
                ["Read each lesson", "Every topic starts with a printed explanation and annotated code examples showing the concept in action."],
                ["Answer the question", "Type A, B, C, or D and press Enter. You get immediate feedback with a full explanation of the correct answer."],
                ["Check your result", "After Q12, you'll see your total score, a pass/fail, and a list of any topics you missed."],
                ["Retake if needed", "Just re-run the file. Review the flagged topics and try again — no limit on retakes."],
              ].map(([title, desc]) => (
                <div key={title} style={{ background: SLATE_3, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px", display: "flex", gap: 12 }}>
                  <span style={{ color, fontWeight: 800, fontSize: 18, flexShrink: 0, lineHeight: 1, marginTop: 2 }}>▸</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: "0 0 2px" }}>{title}</p>
                    <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Callout type="claude">
              Claude is an approved resource — use it to look up any concept you're unsure about. The goal is understanding, not guessing. That said, try each question yourself first before looking anything up.
            </Callout>
            <Callout type="checkpoint">You've scored 10/12 or better and the app printed "✅ Passed!"</Callout>
          </Step>

          <Step n="4" title="Add a README and push to GitHub" time="15 min" accent={color}>
            <p style={{ margin: "0 0 10px" }}>Create a <code style={{ background: SLATE_3, padding: "1px 5px", borderRadius: 3, fontSize: 12 }}>README.md</code> in your repo and fill in the template:</p>
            <CodeBlock lang="Markdown · README.md" color={ACCENT}>{readmeTemplate}</CodeBlock>
            <p style={{ margin: "12px 0 8px", fontWeight: 600, color: TEXT }}>Then push everything:</p>
            <CodeBlock lang="Terminal" color={MUTED}>{`git add .\ngit commit -m "Complete prework — scored X/12"\ngit push`}</CodeBlock>
            <p style={{ margin: "12px 0 6px", fontWeight: 600, color: TEXT }}>Finally, add your instructor as a collaborator:</p>
            <p style={{ margin: 0, fontSize: 13, color: TEXT_DIM }}>
              GitHub → your repo → Settings → Collaborators → Add <code style={{ background: SLATE_3, padding: "1px 5px", borderRadius: 3, fontSize: 12 }}>codepathreview</code>
            </p>
            <Callout type="checkpoint">Repo is private, README is filled in with your score and reflection, codepathreview is a collaborator.</Callout>
          </Step>
        </div>

        {/* What you'll know */}
        <div style={{ background: SLATE_2, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px", marginBottom: 40 }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, margin: "0 0 14px", textTransform: "uppercase", letterSpacing: ".07em" }}>
            After this prework, you'll already know
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[
              `Variables and constants in ${langLabel}`,
              "Type inference and explicit annotations",
              "String templates / interpolation",
              "Function declaration and return types",
              "if/else branching",
              "when/switch pattern matching",
              "Nullable types and safe access operators",
              "Lists/Arrays — mutable vs immutable",
              "for loops, ranges, and while loops",
              "Data classes / Structs for modeling data",
              "Lambdas/Closures and higher-order functions",
              "Pushing code to GitHub",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 12, color: TEXT_DIM }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, padding: "12px 14px", background: SLATE_3, borderRadius: 8, borderLeft: `3px solid ${color}` }}>
            <p style={{ fontSize: 12, color: TEXT_DIM, margin: 0, lineHeight: 1.65 }}>
              These are the exact concepts Week 1 builds on. You won't be seeing them cold on Day 1 — you'll be reinforcing something you've already worked through.
            </p>
          </div>
        </div>

        {/* Submission checklist */}
        <div style={{ background: SLATE_2, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: "24px" }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: GREEN, margin: "0 0 14px", textTransform: "uppercase", letterSpacing: ".07em" }}>✓ Submission checklist</p>
          <CheckItem>Ran the primer app and scored 10/12 or better (app printed "✅ Passed!")</CheckItem>
          <CheckItem>README.md filled in with your language, score, and reflections</CheckItem>
          <CheckItem>All changes pushed to your private GitHub repo</CheckItem>
          <CheckItem><code style={{ background: SLATE_3, padding: "1px 5px", borderRadius: 3, fontSize: 11 }}>codepathreview</code> added as a collaborator on your repo</CheckItem>
          <div style={{ marginTop: 16, padding: "10px 14px", background: `${ACCENT}0F`, border: `1px solid ${ACCENT}33`, borderRadius: 8 }}>
            <p style={{ fontSize: 12, color: TEXT_DIM, margin: 0, lineHeight: 1.65 }}>
              <strong style={{ color: ACCENT }}>Stuck?</strong> Post in the course Slack. Don't stay blocked for more than 30 minutes on anything — that's what the community is for.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
