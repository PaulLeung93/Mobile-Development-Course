const PURPLE      = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT= "#EEEDFE";
const TEAL        = "#1D9E75";
const TEAL_DARK   = "#0F6E56";
const TEAL_LIGHT  = "#E1F5EE";
const AMBER       = "#EF9F27";
const AMBER_LIGHT = "#FAEEDA";
const GREEN       = "#3B6D11";
const GREEN_LIGHT = "#EAF3DE";
const MUTED       = "#6b7280";

const Tag = ({ children, color = "purple" }: { children: React.ReactNode; color?: string }) => {
  const map: Record<string, { bg: string; fg: string }> = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806" },
    green:  { bg: GREEN_LIGHT,  fg: GREEN },
  };
  const c = map[color] || map.purple;
  return (
    <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", background: c.bg, color: c.fg, padding: "2px 8px", borderRadius: 20 }}>
      {children}
    </span>
  );
};

const Tip = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: `3px solid ${PURPLE}` }}>
    💡 {children}
  </div>
);

// ── Level Sequence Card ────────────────────────────────────────────────────────

type Level = { name: string; desc: string };

const SequenceCard = ({
  track,
  title,
  time,
  why,
  levels,
  accent,
  accentLight,
  priority,
}: {
  track: string;
  title: string;
  time: string;
  why: string;
  levels: Level[];
  accent: string;
  accentLight: string;
  priority: "required" | "recommended" | "optional";
}) => {
  const priorityLabel = { required: "Required", recommended: "Recommended", optional: "Optional" };
  const priorityColor = { required: "teal", recommended: "purple", optional: "amber" };

  return (
    <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
      {/* Card Header */}
      <div style={{ background: accent, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 4 }}>{track}</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{title}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
          <Tag color={priorityColor[priority]}>{priorityLabel[priority]}</Tag>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>⏱ {time}</span>
        </div>
      </div>

      {/* Why it matters */}
      <div style={{ background: accentLight, padding: "10px 18px", fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6, borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
        <strong style={{ color: "var(--color-text-primary)" }}>Why this matters for capstone: </strong>{why}
      </div>

      {/* Level list */}
      <div style={{ padding: "12px 18px", background: "var(--color-background-primary)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: MUTED, marginBottom: 8 }}>Levels to complete</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {levels.map((lvl, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: accentLight, color: accent, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)" }}>{lvl.name}</div>
                <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.5 }}>{lvl.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────

export default function GitPractice() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 24px", fontFamily: "var(--font-sans, 'Inter', sans-serif)", color: "var(--color-text-primary)" }}>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <Tag color="purple">Bonus</Tag>
          <Tag color="teal">Interactive Practice</Tag>
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px", color: "var(--color-text-primary)" }}>
          Git Practice: Learn Git Branching
        </h1>
        <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, marginBottom: 16 }}>
          <strong style={{ color: "var(--color-text-primary)" }}>Learn Git Branching</strong> is a free, browser-based interactive tool that teaches Git through animated visual exercises. Instead of reading about branching and rebasing, you actually do them — and see exactly how the commit graph changes with each command.
        </p>

        {/* CTA Button */}
        <a
          href="https://learngitbranching.js.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: PURPLE, color: "#fff", padding: "12px 22px", borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "opacity 0.2s" }}
          onMouseOver={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseOut={e => (e.currentTarget.style.opacity = "1")}
        >
          Open Learn Git Branching →
        </a>

        <p style={{ fontSize: 12, color: MUTED, marginTop: 10 }}>
          Opens in a new tab. No account needed — progress is saved in your browser.
        </p>
      </div>

      {/* How to use this page */}
      <div style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "14px 18px", marginBottom: 24, border: "0.5px solid var(--color-border-tertiary)" }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>How to use this page</div>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>
          The sequences below are grouped by capstone relevance. <strong>Required</strong> sequences are foundational — every team member should complete these before your first sprint. <strong>Recommended</strong> sequences will save you from the most common team Git mistakes. <strong>Optional</strong> sequences are for the curious and for handling advanced scenarios.
        </p>
        <Tip>Each level takes 2–5 minutes. Knock out a sequence between classes or during a commute — you don't need to do them all at once.</Tip>
      </div>

      {/* ── MAIN TRACK ── */}
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: MUTED, marginBottom: 12 }}>Main Track</div>

      <SequenceCard
        track="Main → Sequence 1"
        title="Introduction Sequence"
        time="~20 min"
        priority="required"
        accent={TEAL}
        accentLight={TEAL_LIGHT}
        why="Establishes the mental model for commits and branches that every team member needs before touching a shared repo."
        levels={[
          { name: "Intro to Git Commits", desc: "How commits form a chain; the commit graph model." },
          { name: "Branching in Git", desc: "Creating and switching branches; branches as lightweight pointers." },
          { name: "Merging in Git", desc: "Merging branches together; what a merge commit looks like." },
          { name: "Rebase Introduction", desc: "Rebasing vs. merging; keeping a linear history." },
        ]}
      />

      <SequenceCard
        track="Main → Sequence 2"
        title="Ramping Up"
        time="~25 min"
        priority="recommended"
        accent={PURPLE}
        accentLight={PURPLE_LIGHT}
        why="Teaches how to navigate commit history precisely — critical when you need to undo a bad commit or cherry-pick a fix without pulling in unrelated changes."
        levels={[
          { name: "Detach yo' HEAD", desc: "What HEAD is and how to move it around the commit graph." },
          { name: "Relative Refs (#1)", desc: "Using ^ to move one commit at a time." },
          { name: "Relative Refs (#2)", desc: "Using ~N to jump multiple commits; resetting branch pointers." },
          { name: "Reversing Changes in Git", desc: "git reset vs. git revert — and when to use each on a shared branch." },
        ]}
      />

      <SequenceCard
        track="Main → Sequence 3"
        title="Moving Work Around"
        time="~15 min"
        priority="recommended"
        accent="#185FA5"
        accentLight="#E6F1FB"
        why="Cherry-pick and interactive rebase let you surgically move commits — essential when one teammate's feature branch has a hotfix the rest of the team needs immediately."
        levels={[
          { name: "Cherry-pick Intro", desc: "Copy specific commits from one branch onto another." },
          { name: "Interactive Rebase Intro", desc: "Reorder, squash, or drop commits before opening a PR." },
        ]}
      />

      {/* ── REMOTE TRACK ── */}
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: MUTED, margin: "24px 0 12px" }}>Remote Track</div>

      <SequenceCard
        track="Remote → Sequence 1"
        title="Push & Pull — Git Remotes!"
        time="~35 min"
        priority="required"
        accent={TEAL}
        accentLight={TEAL_LIGHT}
        why="This is the core of team Git. Every level here maps directly to something that will happen during your capstone sprint: cloning, fetching teammates' work, handling diverged history, and the dreaded 'rejected push.'"
        levels={[
          { name: "Clone Intro", desc: "What git clone actually creates; remote-tracking branches." },
          { name: "Remote Branches", desc: "How origin/main differs from your local main." },
          { name: "Git Fetchin'", desc: "Downloading remote changes without merging them." },
          { name: "Git Pullin'", desc: "fetch + merge in one step; what really happens." },
          { name: "Faking Teamwork", desc: "Simulating a teammate pushing while you work — the most realistic level." },
          { name: "Git Pushin'", desc: "Uploading your commits to the remote." },
          { name: "Diverged History", desc: "Why pushes get rejected and how to resolve it cleanly." },
          { name: "Locked Main", desc: "Why you can't push to main directly and the right PR-based workflow." },
        ]}
      />

      <SequenceCard
        track="Remote → Sequence 2"
        title="To Origin and Beyond"
        time="~30 min"
        priority="optional"
        accent="#EF9F27"
        accentLight="#FAEEDA"
        why="Advanced remote workflows — useful if your team wants to maintain a clean, linear history or if you're managing multiple long-lived branches across a release cycle."
        levels={[
          { name: "Push Main!", desc: "Keeping main in sync when branch protection is on." },
          { name: "Merging with Remotes", desc: "Merge-based vs. rebase-based remote workflows." },
          { name: "Remote Tracking", desc: "How to set up and change which remote branch a local branch tracks." },
          { name: "Git Push Arguments", desc: "Pushing a local branch to a differently-named remote branch." },
          { name: "Fetch Arguments", desc: "Fetching specific remote branches." },
          { name: "Pull Arguments", desc: "Combining fetch and rebase in a single flexible command." },
        ]}
      />

      {/* Suggested Schedule */}
      <div style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "16px 18px", border: "0.5px solid var(--color-border-tertiary)", marginTop: 8 }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Suggested Completion Schedule</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { when: "Before GitHub Org Lab", what: "Introduction Sequence (Main #1)", tag: "required", time: "20 min" },
            { when: "Before first sprint", what: "Push & Pull — Git Remotes! (Remote #1)", tag: "required", time: "35 min" },
            { when: "After first sprint review", what: "Ramping Up + Moving Work Around (Main #2 & #3)", tag: "recommended", time: "40 min" },
            { when: "Free time / stretch goal", what: "To Origin and Beyond (Remote #2)", tag: "optional", time: "30 min" },
          ].map(({ when, what, tag, time }) => (
            <div key={when} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
              <div style={{ width: 140, fontSize: 12, color: MUTED, flexShrink: 0 }}>{when}</div>
              <div style={{ flex: 1, fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)" }}>{what}</div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
                <Tag color={tag === "required" ? "teal" : tag === "recommended" ? "purple" : "amber"}>{tag}</Tag>
                <span style={{ fontSize: 11, color: MUTED }}>⏱ {time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
