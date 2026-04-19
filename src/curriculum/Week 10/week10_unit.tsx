import { useState } from "react";

const TABS = ["Overview", "Session 1 Lab", "Demo Day", "Final Submission", "Resources"];
const PLATFORMS = ["Android", "iOS"];

const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const AM = "#633806", AML = "#FAEEDA";
const BL = "#7F52FF", BLL = "#F0EEFF";
const GR = "#F05138", GRL = "#FFF2F0";
const CAP_C = "#993C1D", CAP_BG = "#FAECE7";

function Section({ title, children, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div style={{ margin: "14px 0", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--color-background-secondary)", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>
        {title}<span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{open ? "▲" : "▼"}</span>
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

function AiOpp({ children }) {
  return (
    <div className="callout-ai" style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>✨ AI Opportunity</div>
      {children}
    </div>
  );
}

function Warn({ children }) {
  return (
    <div className="callout-warn" style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E6", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #EF9F27" }}>
      ⚠️ {children}
    </div>
  );
}

function Tip({ children }) {
  return (
    <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>
      💡 {children}
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
          }}>{isA ? "🤖 Android" : "🍎 iOS"}</button>
        );
      })}
    </div>
  );
}

function Checkbox({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "6px 0", fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.5 }}>
      <div style={{ width: 14, height: 14, border: "1.5px solid var(--color-border-secondary)", borderRadius: 3, flexShrink: 0, marginTop: 2 }} />
      <span>{children}</span>
    </div>
  );
}

/* ====== OVERVIEW ====== */
function Overview({ platform, setPlatform }) {
  return (
    <div>
      <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 12 }}>
        🎉 Welcome to the last week of the course. You made it!
      </div>
      <div style={{ background: CAP_BG, padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 16, color: CAP_C }}>
        📬 <strong>REMINDER:</strong> Final submission (GitHub repo + demo video + slide deck) is due <strong>before demo day</strong>. Do not wait until after.
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>Unit 10: Ship it &amp; Demo Day</h2>

      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
        The final week has two very different sessions. Session 1 is a lecture on what makes a demo memorable, followed by a structured polish sprint and demo rehearsal. Session 2 is demo day: live capstone presentations to the class. App store publishing is covered in the Resources tab as self-study reference.
      </p>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"📦 This unit at a glance"}</strong>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
          {[
            { label: "Session 1 — Lecture + Lab", val: "What makes a great 5-minute demo. Polish sprint — fix crashes, empty states, and app icon. Rehearse with your team at least once." },
            { label: "Session 2 — Demo Day", val: "Live capstone presentations. Each team: ~4 min demo + 2 min Q&A. 6 minutes total." },
            { label: "Final submission", val: "GitHub repo + demo video + slide deck. Due before demo day." },
            { label: "Individual reflection", val: "~300 words, submitted individually alongside the team submission." },
          ].map(item => (
            <div key={item.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 16, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>Session Info</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>📅 See your cohort{"'"}s schedule for session times</li>
          <li>↗ <Link>Session Zoom Link</Link> | Passcode: <strong>codepath</strong></li>
          <li>📊 <Link>Link to Slides</Link></li>
        </ul>
        <strong style={{ display: "block", marginTop: 10 }}>Final Deadlines</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>📬 <strong>Final submission</strong> — due before Session 2 (demo day)</li>
          <li>✍️ <strong>Individual reflection</strong> — due alongside team submission</li>
        </ul>
      </div>
    </div>
  );
}

/* ====== SESSION 1 LAB ====== */
function Session1Lab({ platform }) {
  var isAndroid = platform === "Android";
  return (
    <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Session 1: Demo Prep &amp; Polish Sprint</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 16px" }}>
        The lecture covers what makes a 5-minute demo memorable and how to structure yours. The lab is a structured polish sprint — fix the rough edges in your capstone and rehearse the demo out loud before Session 2. App store publishing steps are in the Resources tab for self-study.
      </p>

      {/* What makes a great demo */}
      <div style={{ margin: "4px 0 8px" }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 12px", borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 8 }}>
          Lecture — What makes a 5-minute demo memorable
        </h3>

        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
          Most capstone demos are technically fine but forgettable. The ones that stand out follow a clear narrative arc and lead with something the audience actually cares about. Here{"'"}s the structure that works.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, margin: "0 0 16px" }}>
          {[
            {
              label: "Connect (30s)",
              desc: "Open with the problem, not the solution. Don't start with \"our app is called X and it does Y.\" Start with the situation your user is in: \"You know how [relatable problem]? That's what we solved.\" The audience needs to care before they care about your app.",
              eg: "\"You know how picking a restaurant with a group always turns into a 20-minute argument in the group chat? We built an app that ends that argument in 10 seconds.\"",
            },
            {
              label: "Introduce the app (15s)",
              desc: "One sentence: what it is, who it's for, and the platform. This is the pitch — brief, confident, specific.",
              eg: "\"RestaurantRacer is an Android app that lets friend groups vote on restaurants in real time, using AI to suggest options based on everyone's past preferences.\"",
            },
            {
              label: "Live demo (2.5 min)",
              desc: "Walk through the core user flow end-to-end. Use real data — dummy content reads as unpolished even to non-technical audiences. Narrate what you're doing and why it matters. Show the AI feature prominently.",
              eg: null,
            },
            {
              label: "Technical highlight (30s)",
              desc: "One thing that was technically interesting or hard to build. Not a list of every library you used — one specific challenge and how you solved it. This is where your engineering shines.",
              eg: "\"The trickiest part was streaming Claude's restaurant suggestions in real time while simultaneously updating the vote tally for all users. We used a StateFlow that fanned out to both the streaming parser and the vote counter.\"",
            },
            {
              label: "Next steps (15s)",
              desc: "What would you build with another month? One or two concrete features. This shows you've thought beyond the deadline and have genuine product instincts.",
              eg: "\"Next we'd add Apple Watch support so users get a haptic notification when their group reaches consensus.\"",
            },
          ].map(item => (
            <div key={item.label} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 14px" }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 6px" }}>{item.label}</p>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 6px", lineHeight: 1.6 }}>{item.desc}</p>
              {item.eg && (
                <div style={{ background: "var(--color-background-primary)", borderRadius: 6, padding: "8px 10px", fontSize: 12, color: "var(--color-text-tertiary)", fontStyle: "italic", lineHeight: 1.5 }}>
                  {item.eg}
                </div>
              )}
            </div>
          ))}
        </div>

        <Tip>
          Timing: run your demo at home with a timer. Most teams are surprised that 4 minutes is actually quite short once they account for the live app being slower than expected. If you{"'"}re consistently over time, cut a feature from the demo — don{"'"}t just talk faster.
        </Tip>
      </div>

      {/* LAB: Polish sprint */}
      <div style={{ margin: "24px 0 8px" }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 12px", borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 8 }}>
          Lab — Polish sprint &amp; demo rehearsal
        </h3>

        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
          Two goals for lab time: work through the polish checklist below, then rehearse your demo out loud with your full team at least once before Session 2. Both are required — the rehearsal is as important as the polish.
        </p>

        <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", margin: "0 0 10px" }}>Polish checklist</p>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 10px" }}>Work through these in order — fix the crashes and blank screens first, then move to the cosmetic items.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
          {[
            {
              priority: "Critical",
              color: "#FCEBEB", fg: "#791F1F",
              items: [
                "App does not crash during the demo flow — the specific screens and actions you plan to show",
                isAndroid
                  ? "No NetworkOnMainThreadException, OutOfMemoryError, or NullPointerException during normal use"
                  : "No EXC_BAD_ACCESS crashes, force-unwrap crashes, or uncaught async errors during normal use",
                "The AI feature works end-to-end — not just a mock response",
                "Data persists correctly — favourites, settings, or cached content survive a force-quit and relaunch",
              ],
            },
            {
              priority: "Important",
              color: "#FAEEDA", fg: "#633806",
              items: [
                "Every screen that can have no data shows a meaningful empty state — not a blank screen",
                "Every network call that can fail shows a user-friendly error message — not a blank screen",
                "Loading states are shown while data is being fetched",
                "App icon is set — not the default robot/Apple placeholder",
                `App name in the system launcher is your app's actual name — not "My Application" or the Xcode template default`,
              ],
            },
            {
              priority: "Polish",
              color: "#EAF3DE", fg: "#27500A",
              items: [
                isAndroid
                  ? "No debug Toasts or Log.d statements visible during the demo"
                  : "No print() statements or debug overlays visible during the demo",
                "Tap targets feel responsive — no laggy buttons or delayed navigation transitions",
                "Text is readable — sufficient contrast, no truncation of important content",
                "The demo flow you plan to show works consistently — not just sometimes",
                "You have a fallback plan if WiFi fails (a screen recording of the app working)",
              ],
            },
          ].map(group => (
            <div key={group.priority} style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ background: group.color, padding: "6px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: group.fg, margin: 0, textTransform: "uppercase", letterSpacing: ".05em" }}>{group.priority}</p>
              </div>
              <div style={{ padding: "8px 12px" }}>
                {group.items.map((item, i) => (
                  <Checkbox key={i}>{item}</Checkbox>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AiOpp>
          <em>Polish reviewer → </em>Paste the code for your main screen and your ViewModel into Claude and use this prompt:
          <br /><br />
          <strong>{"\"Review this screen and ViewModel for demo-readiness. Check for: missing empty states, missing error handling, loading states that are skipped, anything that would look unfinished in a live demo. For each issue, tell me the specific fix and approximately how long it will take.\""}</strong>
          <br /><br />
          Do this for your top 2–3 most important screens.
        </AiOpp>

        <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", margin: "20px 0 10px" }}>Demo rehearsal</p>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 10px" }}>
          After working through the polish checklist, every team must do at least one full rehearsal out loud before Session 2. Not just "going through it mentally" — actually presenting it, live, with someone watching the timer.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
          {[
            "Assign roles — who presents each section? Who runs the device? Who fields technical questions?",
            "Run the demo on the device you plan to use in Session 2 — not just in the simulator",
            "Time yourself — the target is 4 minutes for the demo, leaving 2 minutes for Q&A",
            "Practice the opening line until it feels natural — the Connect moment is the hardest to get right",
            "Have a teammate ask you the three most likely questions after the rehearsal",
          ].map((item, i) => (
            <Checkbox key={i}>{item}</Checkbox>
          ))}
        </div>

        <Warn>
          {"Do not skip the rehearsal. Teams that rehearse consistently perform better — not because their app is better, but because they know what they're going to say and aren't surprised by the timing."}
        </Warn>
      </div>
    </div>
  );
}

/* ====== DEMO DAY ====== */
function DemoDay() {
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg, #1a1640, #0a2040)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "24px", marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, margin: "0 0 8px", color: "#E8EAF2" }}>🎉 Demo Day</h2>
        <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: "#9BA3BF" }}>
          Each team presents their capstone project to the class. 6 minutes per team — approximately 4 minutes demo, 2 minutes Q&A. You built something real. Show it off.
        </p>
      </div>

      <h3 style={{ fontSize: 15, fontWeight: 500, margin: "0 0 12px", color: "var(--color-text-primary)" }}>Format options</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "0 0 20px" }}>
        {[
          { t: "Live device", d: "Run the app on a physical phone, screen-mirrored to the projector or shared via Zoom screen share.", rec: true },
          { t: "Screen share", d: "Run on a simulator/emulator and share your screen directly. Good fallback if no physical device.", rec: false },
          { t: "Pre-recorded video", d: "2–3 min screen recording of the full app flow with narration. Play during the presentation.", rec: false },
          { t: "Slide deck only", d: "Screenshots and a walkthrough in slides. Use only if the app is not stable enough to demo live.", rec: false },
        ].map(f => (
          <div key={f.t} style={{ background: "var(--color-background-secondary)", border: f.rec ? "1px solid #534AB7" : "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-primary)", margin: 0 }}>{f.t}</p>
              {f.rec && <span style={{ fontSize: 10, fontWeight: 600, color: P_C, background: PL, padding: "2px 8px", borderRadius: 20 }}>Recommended</span>}
            </div>
            <p style={{ fontSize: 11, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{f.d}</p>
          </div>
        ))}
      </div>

      <Section title="Tips for a great demo" defaultOpen={true}>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
          <li><strong>Use real data.</strong> Dummy content ("Test Item 1", "John Doe") reads as unpolished even to non-technical audiences. Load real data before the demo starts.</li>
          <li><strong>Practice the opening line.</strong> The first 30 seconds sets the tone for everything that follows. Know it cold.</li>
          <li><strong>Narrate what you{"'"}re doing.</strong> Don{"'"}t just tap through the app silently. Tell the audience what they{"'"}re seeing and why it matters.</li>
          <li><strong>Have your emulator or device running before your team is called.</strong> Launch the app, navigate to the starting screen, and leave it there. Cold-starting the emulator mid-demo wastes precious seconds.</li>
          <li><strong>Don{"'"}t overrun.</strong> Watch for the 4-minute signal. Cutting a feature from the demo is better than being cut off mid-sentence.</li>
        </ul>
      </Section>

      <Section title="Q&A tips">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 10px", lineHeight: 1.6 }}>
          Two minutes goes fast. Prepare for the most likely questions ahead of time so you{"'"}re not caught off guard.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
          {[
            {
              q: "\"Why did you choose this API / AI model?\"",
              a: "Be specific. \"We used Claude because it handles multi-turn conversation well and its vision API let us add image analysis without a separate model\" is better than \"it seemed good.\"",
            },
            {
              q: "\"What was the hardest part to build?\"",
              a: "Pick one specific technical challenge — streaming the AI response while updating the UI in real time, handling camera permissions across OS versions, the offline-first caching logic. Concrete answers are more credible than vague ones.",
            },
            {
              q: "\"What would you build next?\"",
              a: "You should already know this from your presentation. Keep it concrete: \"Push notifications when a friend responds,\" not \"We would add more features.\"",
            },
            {
              q: "\"How did you split the work?\"",
              a: "Have a real answer. \"Alex owned the ViewModel and networking, Jamie built all the UI screens, and we both worked on the AI integration\" is far better than \"we all worked on everything.\"",
            },
          ].map(item => (
            <div key={item.q} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: P_C, margin: "0 0 4px" }}>{item.q}</p>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.a}</p>
            </div>
          ))}
        </div>
        <Tip>
          Designate one person to field technical questions and another to handle product and design questions. Talking over each other undermines the team presentation.
        </Tip>
      </Section>

      <Section title="Day-of logistics">
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
          <li>Arrive a few minutes early to test screen sharing / device mirroring before the session starts</li>
          <li>Have your backup recording accessible — in iCloud, Google Drive, or a local file, not buried in a folder</li>
          <li>Close all other apps on the demo device to avoid notification interruptions mid-demo</li>
          <li>Turn off Do Not Disturb... or actually, turn it ON — you want to avoid calls during the demo</li>
          <li>Have the app already loaded and on the starting screen before your team is called</li>
          <li>Know the order: which team goes when. Don{"'"}t be scrambling for the device when your name is called</li>
        </ul>
      </Section>
    </div>
  );
}

/* ====== FINAL SUBMISSION ====== */
function FinalSubmission({ platform, setPlatform }) {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Final Submission</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
        One team submission plus one individual reflection per person. Everything is due before demo day (Session 2).
      </p>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <Warn>
        Final submission is due <strong>before Session 2 (demo day)</strong>. Submitting after the demo is not accepted. If you{"'"}re worried about timing, submit a working draft the night before and update it before the deadline.
      </Warn>

      <Section title="📦 GitHub Repository" defaultOpen={true}>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px", lineHeight: 1.6 }}>
          The repo is how your work gets graded. Make sure everything is pushed, the README is complete, and the repo is accessible to reviewers before you submit.
        </p>
        {[
          "All code committed and pushed to main — no work-in-progress branches with unmerged features",
          "README includes: app name, team members, platform, description, feature list, setup instructions",
          "Demo video linked in README (not just uploaded separately)",
          "Every team member has meaningful commits — not all code from one person",
          ".gitignore configured correctly — no API keys, build artifacts, or .DS_Store files committed",
        ].map((item, i) => <Checkbox key={i}>{item}</Checkbox>)}
        <Checkbox>Repo is private with <IC>codepathreview</IC> added as a collaborator</Checkbox>

        <Tip>
          Double-check that <IC>codepathreview</IC> has been added as a collaborator with at least Read access — this is the most common reason submissions can{"'"}t be graded. Go to Settings → Collaborators → Add people.
        </Tip>
      </Section>

      <Section title="🎬 Demo Video" defaultOpen={true}>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 10px", lineHeight: 1.6 }}>
          A 2–3 minute screen recording showing the complete app flow. This is required — reviewers cannot grade an app they can{"'"}t see running.
        </p>
        {[
          "Starts from launch — don't begin mid-flow or after the app is already loaded",
          "Shows all core features end-to-end in a single continuous recording",
          "The AI feature is shown prominently, not tucked away at the end",
          "Audio narration is optional but strongly recommended — tell us what we're seeing",
          "Clean and watchable — no long pauses, visible debug output, or crashes",
          "Uploaded to YouTube (unlisted), Loom, or Google Drive and linked in the README",
        ].map((item, i) => <Checkbox key={i}>{item}</Checkbox>)}
      </Section>

      <Section title="📊 Slide Deck" defaultOpen={true}>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 10px", lineHeight: 1.6 }}>
          6–8 slides. Keep it visual — this is a companion to the demo, not a replacement. Slides that are mostly text are hard to read during a live presentation.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6, margin: "0 0 12px" }}>
          {[
            { n: "1", title: "Cover", desc: "App name, team members, platform, date" },
            { n: "2", title: "The problem", desc: "What situation is your user in? Who are they? Why does this problem matter?" },
            { n: "3", title: "The solution", desc: "One-sentence description + app icon + the key insight" },
            { n: "4", title: "Tech stack", desc: "Platform, language, key libraries, and AI/API features used" },
            { n: "5–6", title: "Demo screenshots", desc: "2–3 key screens with short captions. If you have a demo video, link or embed it." },
            { n: "7", title: "What we built / what we learned", desc: "The most technically interesting challenge you solved" },
            { n: "8", title: "Next steps", desc: "Top 2–3 features you'd build with another month" },
          ].map(slide => (
            <div key={slide.n} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 10px", background: "var(--color-background-secondary)", borderRadius: 6 }}>
              <div style={{ width: 22, height: 22, background: P_C, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 700, color: "#fff" }}>{slide.n}</div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 2px" }}>{slide.title}</p>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.4 }}>{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="✍️ Individual Written Reflection">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 10px", lineHeight: 1.6 }}>
          Submitted individually — not as a team. Approximately 300 words total. Answer all three questions. There are no right or wrong answers — this is about your own genuine experience of the course.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
          {[
            {
              n: "1",
              q: "What was the most important technical thing you learned in this course?",
              hint: "Not the most impressive or the hardest — the most useful going forward. Could be an architecture pattern, an API, a debugging skill, or a mental model.",
            },
            {
              n: "2",
              q: "How did AI tools change how you wrote code? Give one specific example.",
              hint: "Think about a specific moment: a time Claude helped you translate code between platforms, find a bug, understand a concept, or generate something you wouldn't have built yourself.",
            },
            {
              n: "3",
              q: "What would you build next if you had another 4 weeks and your capstone team?",
              hint: "Be concrete — not \"more features\" but an actual thing with a name and a reason.",
            },
          ].map(item => (
            <div key={item.n} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 14px" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 6 }}>
                <div style={{ width: 22, height: 22, background: P_C, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 700, color: "#fff" }}>{item.n}</div>
                <p style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", margin: 0, lineHeight: 1.5 }}>{item.q}</p>
              </div>
              <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 0 32px", lineHeight: 1.5, fontStyle: "italic" }}>💡 {item.hint}</p>
            </div>
          ))}
        </div>
      </Section>
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

        <div style={{ background: AML, border: "1px solid #FAC775", borderRadius: 8, padding: "10px 14px", margin: "0 0 16px" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: AM, margin: "0 0 4px" }}>App store publishing — self-study reference</p>
          <p style={{ fontSize: 13, color: AM, margin: 0, lineHeight: 1.6 }}>
            The steps below walk through the full publishing pipeline for each platform. This is reference material to read on your own time — it{"'"}s not covered in class. Review times: Google Play first submission 3–7 days; App Store first submission up to 7 days; TestFlight near-instant. Plan ahead.
          </p>
        </div>

        {isAndroid ? (
          <>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>🤖 Google Play — publishing end to end</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, margin: "10px 0 16px" }}>
              {[
                {
                  step: "1. Sign your app",
                  detail: "Every APK/AAB that ships to users must be signed with a private key. In Android Studio: Build → Generate Signed Bundle/APK → Create new keystore.",
                  warn: "Never lose your keystore file or its password. Without it you cannot update your app — you would have to unpublish and republish as a new app, losing all your reviews and install history.",
                },
                {
                  step: "2. Build a release AAB",
                  detail: "Google Play requires App Bundle format (AAB), not APK. In Android Studio: Build → Generate Signed Bundle/APK → Android App Bundle → choose your keystore → Release.",
                  code: `# Build release AAB via Gradle:\n./gradlew bundleRelease\n\n# Build release APK (for direct install, not Play Store):\n./gradlew assembleRelease`,
                },
                {
                  step: "3. Create a Play Console listing",
                  detail: "Go to play.google.com/console. One-time $25 developer fee. Fill in: short description (80 chars), full description (4000 chars), content rating questionnaire, and privacy policy URL.",
                },
                {
                  step: "4. Upload store assets",
                  detail: "Required: app icon (512×512 PNG), feature graphic (1024×500 PNG), and at least 2 phone screenshots. Screenshots must show the actual app — no marketing overlays.",
                },
                {
                  step: "5. Upload your AAB and release",
                  detail: "Production → Create new release → Upload your AAB → add release notes → Roll out to 100%.",
                },
              ].map(item => (
                <div key={item.step} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: BL, margin: "0 0 4px" }}>{item.step}</p>
                  <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.detail}</p>
                  {item.warn && (
                    <div className="callout-warn" style={{ margin: "6px 0 0", padding: "8px 10px", background: "#FFF8E6", borderRadius: 6, fontSize: 12, color: "#633806", lineHeight: 1.5, borderLeft: "3px solid #EF9F27" }}>⚠️ {item.warn}</div>
                  )}
                  {item.code && (
                    <pre style={{ margin: "6px 0 0", background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "8px 10px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{item.code}</pre>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>🍎 App Store / TestFlight — publishing end to end</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, margin: "10px 0 16px" }}>
              {[
                {
                  step: "1. Apple Developer account",
                  detail: "$99/year at developer.apple.com. Required for both App Store and TestFlight. Check if your university has a free student developer account.",
                },
                {
                  step: "2. Certificates and provisioning profiles",
                  detail: "In Xcode → Signing & Capabilities, enable 'Automatically manage signing' and select your team. Xcode handles certificates for you.",
                  warn: "If building on a new Mac or sharing with teammates, make sure everyone has the same team selected. Certificate mismatches are the most common reason iOS builds fail.",
                },
                {
                  step: "3. Archive your app",
                  detail: "Select a real device (or 'Any iOS Device') as the build target — you cannot archive against a Simulator. Then: Product → Archive. Xcode opens the Organizer window.",
                },
                {
                  step: "4. Distribute via TestFlight",
                  detail: "In the Organizer: Distribute App → TestFlight & App Store → Upload. After 5–15 min processing, the build appears in App Store Connect. Add testers by email — they install via the TestFlight app. This is the recommended path for your capstone demo.",
                },
                {
                  step: "5. App Store submission",
                  detail: "In App Store Connect, create an app record. Upload assets: app icon (1024×1024, no transparency), screenshots for each device size. Submit the build for review.",
                },
              ].map(item => (
                <div key={item.step} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: GR, margin: "0 0 4px" }}>{item.step}</p>
                  <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.detail}</p>
                  {item.warn && (
                    <div className="callout-warn" style={{ margin: "6px 0 0", padding: "8px 10px", background: "#FFF8E6", borderRadius: 6, fontSize: 12, color: "#633806", lineHeight: 1.5, borderLeft: "3px solid #EF9F27" }}>⚠️ {item.warn}</div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>{isAndroid ? "🤖 Android — publishing docs" : "🍎 iOS — publishing docs"}</h4>
        <ul style={{ paddingLeft: 20, margin: "8px 0 16px" }}>
          {isAndroid ? (
            <>
              <li><a href="https://developer.android.com/studio/publish/app-signing" style={{ color: "var(--color-text-info)" }}>Sign your app — Android developer guide</a></li>
              <li><a href="https://developer.android.com/distribute/best-practices/launch/launch-checklist" style={{ color: "var(--color-text-info)" }}>Launch checklist — Google Play</a></li>
              <li><a href="https://developer.android.com/guide/app-bundle" style={{ color: "var(--color-text-info)" }}>Android App Bundle (AAB)</a></li>
              <li><a href="https://play.google.com/console" style={{ color: "var(--color-text-info)" }}>Google Play Console</a></li>
            </>
          ) : (
            <>
              <li><a href="https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases" style={{ color: "var(--color-text-info)" }}>Distributing your app — Apple developer guide</a></li>
              <li><a href="https://developer.apple.com/testflight/" style={{ color: "var(--color-text-info)" }}>TestFlight overview</a></li>
              <li><a href="https://developer.apple.com/app-store/review/guidelines/" style={{ color: "var(--color-text-info)" }}>App Store Review Guidelines</a></li>
              <li><a href="https://appstoreconnect.apple.com" style={{ color: "var(--color-text-info)" }}>App Store Connect</a></li>
            </>
          )}
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600 }}>🎓 Course wrap-up — what to do next</h4>
        <ul style={{ paddingLeft: 20, margin: "8px 0" }}>
          <li><a href="https://developer.android.com" style={{ color: "var(--color-text-info)" }}>Android developer documentation</a></li>
          <li><a href="https://developer.apple.com" style={{ color: "var(--color-text-info)" }}>Apple developer documentation</a></li>
          <li><a href="https://docs.anthropic.com" style={{ color: "var(--color-text-info)" }}>Anthropic / Claude API documentation</a></li>
          <li><a href="https://codepath.org/courses" style={{ color: "var(--color-text-info)" }}>CodePath — more courses and career resources</a></li>
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>📹 Session Recordings</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><Link>Weekly Video Playlist</Link></li>
          <li><Link>Office Hours Video Playlist</Link></li>
        </ul>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>May take 24–48 hours to appear after the session.</p>
      </div>
    </div>
  );
}

/* ====== MAIN ====== */
export default function Week10Unit() {
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
      {tab === "Overview"          && <Overview platform={platform} setPlatform={setPlatform} />}
      {tab === "Session 1 Lab"     && <Session1Lab platform={platform} />}
      {tab === "Demo Day"          && <DemoDay />}
      {tab === "Final Submission"  && <FinalSubmission platform={platform} setPlatform={setPlatform} />}
      {tab === "Resources"         && <ResourcesTab platform={platform} setPlatform={setPlatform} />}
    </div>
  );
}
