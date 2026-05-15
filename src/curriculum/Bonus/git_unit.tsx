import { useState } from "react";

const TABS = ["Overview", "Capstone", "Lab", "Cheatsheet", "Resources"];

const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const T_C = "#1D9E75", TL = "#E1F5EE", TD = "#0F6E56";
const AM = "#633806", AML = "#FAEEDA", AM_C = "#EF9F27";
const BL = "#185FA5", BLL = "#E6F1FB";
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
    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>✨ AI Opportunity</div>
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

const Link = ({ href, children }: { href?: string; children: React.ReactNode }) => (
  <a href={href || "#"} target={href ? "_blank" : undefined} rel="noopener noreferrer" style={{ color: P_C, textDecoration: "underline", cursor: "pointer" }}>{children}</a>
);

const Tag = ({ children, color = "purple" }: { children: React.ReactNode; color?: string }) => {
  const map: Record<string, { bg: string; fg: string }> = {
    purple: { bg: PL, fg: PD },
    teal: { bg: TL, fg: TD },
    amber: { bg: AML, fg: AM },
    blue: { bg: BLL, fg: BL },
    green: { bg: GL, fg: G },
  };
  const c = map[color] || map.purple;
  return <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", background: c.bg, color: c.fg, padding: "2px 8px", borderRadius: 20 }}>{children}</span>;
};

/* ══════════════════════ OVERVIEW ══════════════════════════════════════════════ */
const Overview = () => (
  <div>
    <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 8px" }}>Bonus: Git for Capstone Teams</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
      The individual assignments are behind you — starting now, every line of code you write is shared with teammates. This bonus unit covers everything you need to use Git like a team: setting up a shared GitHub Organization, running a PR-based workflow, handling merge conflicts, and practicing the branching skills that prevent disasters during your capstone sprints.
    </p>

    <div style={{ background: TL, border: `1px solid ${T_C}`, borderRadius: 8, padding: "12px 16px", margin: "0 0 16px" }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: TD, margin: "0 0 4px" }}>🤝 Why this matters for your capstone</p>
      <p style={{ fontSize: 13, color: TD, margin: 0, lineHeight: 1.6 }}>
        Most teams that struggle with their capstone don't struggle with the code — they struggle with Git. Merge conflicts, accidentally overwriting teammates' work, pushing broken code to main, and losing track of who's doing what are all preventable with the right setup and habits from day one.
      </p>
    </div>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <p style={{ margin: "0 0 10px" }}>This unit covers:</p>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>Creating a GitHub Organization and group repository for your capstone team</li>
        <li>Inviting teammates and setting branch protection rules</li>
        <li>The PR-based workflow your team will use every sprint</li>
        <li>Interactive practice with Learn Git Branching — the best visual tool for building Git intuition</li>
        <li>Reference materials and cheat sheets to keep on hand throughout the semester</li>
      </ul>
    </div>

    <div style={{ marginTop: 20, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
      <strong>📦 This unit at a glance</strong>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
        {[
          { label: "Slides", val: "The Git For Teams lecture — solo Git vs. team Git, GitHub Orgs, PR workflow, merge conflicts, and AI + Git." },
          { label: "Lab", val: "Step-by-step setup for your capstone GitHub Organization, group repo, teammate access, and branch protection." },
          { label: "Practice", val: "Guided path through Learn Git Branching — which levels to complete, when, and why each one matters for capstone." },
          { label: "Resources", val: "Cheat sheets, GitHub docs, gitignore generator, and mobile-specific references to bookmark." },
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

/* ══════════════════════ LAB ═══════════════════════════════════════════════════ */
const Lab = () => (
  <div>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Setting Up Your Capstone GitHub Organization</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 16px", lineHeight: 1.6 }}>
      Before writing a single line of capstone code, your team needs a shared home on GitHub. This lab walks through creating a GitHub Organization, setting up your project repository, inviting teammates, locking down the main branch, and verifying the full PR workflow with a test commit.
    </p>

    <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 13, lineHeight: 1.7 }}>
      <strong>By the end of this lab your team will have:</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 0" }}>
        <li>A <strong>GitHub Organization</strong> that all team members belong to</li>
        <li>A <strong>capstone repository</strong> created inside the org — not a personal repo</li>
        <li>All teammates added with appropriate roles</li>
        <li>A <strong>branch protection rule</strong> on <IC>main</IC> requiring PRs and at least one review</li>
        <li>Every team member having successfully opened and merged a PR</li>
      </ul>
      <Tip>One person should drive the setup while everyone else watches. Once the org and repo exist, the remaining steps can be done in parallel.</Tip>
    </div>

    {/* Part 1 */}
    <Section title="Part 1 — Create a GitHub Organization" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        A GitHub Organization gives your project a professional home and makes team access management simple.
      </p>
      <VStep num={1} title="Navigate to New Organization">
        <p>Log in to GitHub, click your profile picture → <strong>Your organizations</strong> → <strong>New organization</strong>.</p>
        <Tip>Or go directly to <IC>github.com/organizations/new</IC>.</Tip>
      </VStep>
      <VStep num={2} title="Choose Free Plan">
        <p>Select the <strong>Free</strong> tier — it includes unlimited public and private repos, GitHub Actions minutes, and everything needed for a student capstone.</p>
      </VStep>
      <VStep num={3} title="Name Your Organization">
        <p>Pick a name that reflects your team or project. Common patterns:</p>
        <ul style={{ paddingLeft: 18, marginTop: 6 }}>
          <li><IC>codepath-[team-name]</IC></li>
          <li><IC>[app-name]-team</IC></li>
          <li>Just the app name (e.g. <IC>pantrypal</IC>)</li>
        </ul>
        <Warn>Org names are globally unique and hard to change later. Your repo URLs will include this name, so choose carefully.</Warn>
      </VStep>
      <VStep num={4} title="Complete Setup" last>
        <p>Enter a contact email, set ownership to your personal account, and click <strong>Next</strong>. Skip the invite screen — you'll handle that in Part 3.</p>
      </VStep>
      <Checkpoint num={1}>Your new org is visible at <IC>github.com/[org-name]</IC> with 0 repositories.</Checkpoint>
    </Section>

    {/* Part 2 */}
    <Section title="Part 2 — Create the Capstone Repository" defaultOpen={true}>
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        Create the repo <em>inside</em> the organization — not under your personal account. This is important: it means the repo belongs to the whole team.
      </p>
      <VStep num={1} title="Open the New Repository Form">
        <p>From your org dashboard, click <strong>Create a new repository</strong>. Make sure the <strong>Owner</strong> dropdown shows your org name, not your username.</p>
        <Warn>If the owner shows your personal username, change it. A repo under your personal account can't easily be shared without disrupting everyone's clone URLs later.</Warn>
      </VStep>
      <VStep num={2} title="Name the Repository">
        <p>Use a clear, lowercase, hyphenated name:</p>
        <CodeB>capstone-project{"\n"}pantrypal-android{"\n"}travelbuddy-ios</CodeB>
        <p style={{ marginTop: 8 }}>Add a short description (e.g., "CodePath iOS capstone — restaurant discovery app").</p>
      </VStep>
      <VStep num={3} title="Set Visibility">
        <p>Choose <strong>Private</strong> while developing. You can switch to Public before your demo day if you want it as a portfolio piece.</p>
      </VStep>
      <VStep num={4} title="Initialize the Repository" last>
        <p>Check all three initialization options:</p>
        <ul style={{ paddingLeft: 18, marginTop: 6, display: "flex", flexDirection: "column", gap: 6 }}>
          <li><strong>README</strong> — gives you an initial commit to clone immediately</li>
          <li><strong>.gitignore</strong> — choose <IC>Android</IC> or <IC>Swift</IC> to prevent build artifacts and API keys from being committed</li>
          <li><strong>License</strong> — <IC>MIT</IC> is the standard choice for student projects</li>
        </ul>
      </VStep>
      <Checkpoint num={2}>Repo exists at <IC>github.com/[org-name]/[repo-name]</IC> with a README, .gitignore, and one commit ("Initial commit").</Checkpoint>
      <AiOpp>
        <p>Ask Claude to generate a professional README for your capstone:</p>
        <CodeB>{"Generate a README.md for a mobile capstone project.\nApp name: [name]. Platform: [Android/iOS].\nDescription: [one sentence].\nInclude: project overview, team members section (placeholder),\nfeatures list (placeholder), screenshots section (placeholder),\nand setup instructions."}</CodeB>
      </AiOpp>
    </Section>

    {/* Part 3 */}
    <Section title="Part 3 — Invite Your Team Members">
      <VStep num={1} title="Open Organization Settings">
        <p>From your org dashboard, click <strong>Settings</strong> in the top navigation.</p>
      </VStep>
      <VStep num={2} title="Navigate to Members">
        <p>In the left sidebar under <strong>Access</strong>, click <strong>Members</strong> → <strong>Invite member</strong>.</p>
      </VStep>
      <VStep num={3} title="Invite Each Teammate">
        <p>Search by GitHub username or email. Everyone must <strong>accept their invitation</strong> before they appear as members. You can see pending invitations in the "Pending invitations" tab.</p>
        <Tip>Have everyone accept their invitations before moving to Part 4.</Tip>
      </VStep>
      <VStep num={4} title="Set Roles" last>
        <p>For a small team, <strong>Member</strong> for everyone is fine. The org creator retains Owner privileges. Promote a co-lead to Owner only if they need admin access to org settings.</p>
        <div style={{ marginTop: 10, background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px" }}>
          <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--color-border-tertiary)" }}>
                <th style={{ textAlign: "left", padding: "4px 8px", color: MUTED }}>Role</th>
                <th style={{ textAlign: "left", padding: "4px 8px", color: MUTED }}>Can do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "6px 8px", fontWeight: 600 }}>Member</td>
                <td style={{ padding: "6px 8px" }}>Push to repos, open PRs, create branches</td>
              </tr>
              <tr style={{ borderTop: "1px solid var(--color-border-tertiary)" }}>
                <td style={{ padding: "6px 8px", fontWeight: 600 }}>Owner</td>
                <td style={{ padding: "6px 8px" }}>Everything above + manage org settings, billing, and members</td>
              </tr>
            </tbody>
          </table>
        </div>
      </VStep>
      <Checkpoint num={3}>All team members appear under the "Members" tab with no pending invitations remaining.</Checkpoint>
    </Section>

    {/* Part 4 */}
    <Section title="Part 4 — Protect the Main Branch">
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        Branch protection prevents anyone — including yourself — from pushing directly to <IC>main</IC>. All changes must go through a reviewed pull request. This one setting prevents an entire category of team disasters.
      </p>
      <VStep num={1} title="Open Repository Settings">
        <p>From the <em>repository</em> page (not the org), click <strong>Settings</strong>.</p>
      </VStep>
      <VStep num={2} title="Navigate to Branches">
        <p>In the left sidebar under <strong>Code and automation</strong>, click <strong>Branches</strong> → <strong>Add branch ruleset</strong>.</p>
      </VStep>
      <VStep num={3} title="Configure the Ruleset">
        <ul style={{ paddingLeft: 18, marginTop: 8, display: "flex", flexDirection: "column", gap: 8 }}>
          <li><strong>Ruleset name:</strong> <IC>Protect main</IC></li>
          <li><strong>Target:</strong> Add target → Include by pattern → <IC>main</IC></li>
          <li><strong>Restrict pushes</strong> — blocks direct pushes to <IC>main</IC></li>
          <li><strong>Require a pull request before merging</strong> → set <strong>Required approvals</strong> to <IC>1</IC></li>
        </ul>
        <Warn>Make sure you aren't locking yourself out. If needed, you can temporarily disable the rule in Settings.</Warn>
      </VStep>
      <VStep num={4} title="Save" last>
        <p>Click <strong>Create</strong>. The rule appears in the Branches list with a green active indicator.</p>
      </VStep>
      <Checkpoint num={4}>Try pushing directly to <IC>main</IC> — it should be rejected. The only path to <IC>main</IC> is now a reviewed PR.</Checkpoint>
    </Section>

    {/* Part 5 */}
    <Section title="Part 5 — Clone & Verify the Workflow">
      <p style={{ marginBottom: 14, color: "var(--color-text-secondary)" }}>
        Every team member should clone the repo and verify they have write access by completing one full PR cycle.
      </p>
      <VStep num={1} title="Clone the Repository">
        <CodeB>git clone https://github.com/[org-name]/[repo-name].git{"\n"}cd [repo-name]</CodeB>
      </VStep>
      <VStep num={2} title="Create a Feature Branch">
        <CodeB>git checkout -b setup/[your-name]-initial</CodeB>
      </VStep>
      <VStep num={3} title="Make a Small Change & Push">
        <p>Add your name to the README under a "Team" section:</p>
        <CodeB>git add README.md{"\n"}git commit -m "Add [your name] to team section"{"\n"}git push origin setup/[your-name]-initial</CodeB>
      </VStep>
      <VStep num={4} title="Open and Merge a Pull Request" last>
        <p>GitHub will show a prompt to open a PR for your new branch. Write a brief description, assign a teammate as reviewer, and merge once approved.</p>
        <Tip>This first PR is intentionally trivial. The goal is to verify the full push → PR → review → merge flow works for everyone before writing real code.</Tip>
      </VStep>
      <Checkpoint num={5}>Every team member has opened and merged a PR. The <IC>main</IC> branch shows multiple commits and the README lists the full team.</Checkpoint>
      <AiOpp>
        <p>Establish the habit of using Claude for PR descriptions from the start:</p>
        <CodeB>{"Write a concise GitHub pull request description for this diff.\nInclude: what changed, why, and any testing notes.\nKeep it under 150 words.\n\n[paste your diff here]"}</CodeB>
      </AiOpp>
    </Section>
  </div>
);

/* ══════════════════════ PRACTICE ══════════════════════════════════════════════ */
type Level = { name: string; desc: string };

const SequenceCard = ({ track, title, why, levels, accent, accentLight, priority }: {
  track: string; title: string; why: string;
  levels: Level[]; accent: string; accentLight: string;
  priority: "required" | "recommended" | "optional";
}) => {
  const priorityColor = { required: "teal", recommended: "purple", optional: "amber" };
  return (
    <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
      <div style={{ background: accent, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 4 }}>{track}</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{title}</div>
        </div>
        <Tag color={priorityColor[priority]}>{priority}</Tag>
      </div>
      <div style={{ background: accentLight, padding: "10px 18px", fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6, borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
        <strong style={{ color: "var(--color-text-primary)" }}>Why this matters for capstone: </strong>{why}
      </div>
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

const Practice = () => (
  <div>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 8px" }}>Practice: Learn Git Branching</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>
      <strong style={{ color: "var(--color-text-primary)" }}>Learn Git Branching</strong> teaches Git through animated, interactive exercises — you actually run commands and watch how the commit graph changes in real time. No account needed; progress saves in your browser.
    </p>

    <a
      href="https://learngitbranching.js.org/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "inline-flex", alignItems: "center", gap: 8, background: P_C, color: "#fff", padding: "12px 22px", borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: "none" }}
      onMouseOver={e => (e.currentTarget.style.opacity = "0.85")}
      onMouseOut={e => (e.currentTarget.style.opacity = "1")}
    >
      Open Learn Git Branching →
    </a>
    <p style={{ fontSize: 12, color: MUTED, marginTop: 10, marginBottom: 20 }}>Opens in a new tab. Each level takes 2–5 minutes.</p>

    <div style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "14px 18px", marginBottom: 20, border: "0.5px solid var(--color-border-tertiary)" }}>
      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>How to use this guide</div>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>
        <Tag color="teal">Required</Tag> sequences are foundational — complete these before your first sprint. <Tag color="purple">Recommended</Tag> sequences prevent the most common team Git mistakes. <Tag color="amber">Optional</Tag> sequences are for advanced scenarios and the curious.
      </p>
    </div>

    <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: MUTED, marginBottom: 12 }}>Main Track</div>

    <SequenceCard
      track="Main → Sequence 1"
      title="Introduction Sequence"
      priority="required"
      accent={T_C}
      accentLight={TL}
      why="Establishes the mental model for commits and branches every team member needs before touching a shared repo."
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
      priority="recommended"
      accent={P_C}
      accentLight={PL}
      why="Teaches how to navigate commit history precisely — critical when you need to undo a bad commit or cherry-pick a fix."
      levels={[
        { name: "Detach yo' HEAD", desc: "What HEAD is and how to move it around the commit graph." },
        { name: "Relative Refs (#1)", desc: "Using ^ to move one commit at a time." },
        { name: "Relative Refs (#2)", desc: "Using ~N to jump multiple commits; resetting branch pointers." },
        { name: "Reversing Changes in Git", desc: "git reset vs. git revert — when to use each on a shared branch." },
      ]}
    />

    <SequenceCard
      track="Main → Sequence 3"
      title="Moving Work Around"
      priority="recommended"
      accent={BL}
      accentLight={BLL}
      why="Cherry-pick and interactive rebase let you move commits surgically — essential when a teammate's feature branch has a hotfix everyone needs now."
      levels={[
        { name: "Cherry-pick Intro", desc: "Copy specific commits from one branch onto another." },
        { name: "Interactive Rebase Intro", desc: "Reorder, squash, or drop commits before opening a PR." },
      ]}
    />

    <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: MUTED, margin: "20px 0 12px" }}>Remote Track</div>

    <SequenceCard
      track="Remote → Sequence 1"
      title="Push & Pull — Git Remotes!"
      priority="required"
      accent={T_C}
      accentLight={TL}
      why="The core of team Git. Every level here maps directly to something that will happen during your capstone sprint: cloning, fetching, handling diverged history, and the 'rejected push.'"
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
      priority="optional"
      accent={AM_C}
      accentLight={AML}
      why="Advanced remote workflows — useful if your team wants a clean linear history or manages multiple long-lived branches."
      levels={[
        { name: "Push Main!", desc: "Keeping main in sync when branch protection is on." },
        { name: "Merging with Remotes", desc: "Merge-based vs. rebase-based remote workflows." },
        { name: "Remote Tracking", desc: "How to set up and change which remote branch a local branch tracks." },
        { name: "Git Push Arguments", desc: "Pushing a local branch to a differently-named remote branch." },
        { name: "Fetch Arguments", desc: "Fetching specific remote branches." },
        { name: "Pull Arguments", desc: "Combining fetch and rebase in a single flexible command." },
      ]}
    />

    <div style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "16px 18px", border: "0.5px solid var(--color-border-tertiary)" }}>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Suggested Completion Schedule</div>
      {[
        { when: "Before GitHub Org Lab", what: "Introduction Sequence (Main #1)", priority: "required" },
        { when: "Before first sprint", what: "Push & Pull — Git Remotes! (Remote #1)", priority: "required" },
        { when: "After first sprint review", what: "Ramping Up + Moving Work Around (Main #2 & #3)", priority: "recommended" },
        { when: "Free time / stretch", what: "To Origin and Beyond (Remote #2)", priority: "optional" },
      ].map(({ when, what, priority }) => (
        <div key={when} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
          <div style={{ width: 140, fontSize: 12, color: MUTED, flexShrink: 0 }}>{when}</div>
          <div style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{what}</div>
          <Tag color={priority === "required" ? "teal" : priority === "recommended" ? "purple" : "amber"}>{priority}</Tag>
        </div>
      ))}
    </div>
  </div>
);

/* ══════════════════════ RESOURCES ═════════════════════════════════════════════ */
type ResourceItem = { title: string; description: string; url: string; tag: string; tagColor?: string };

const ResourceCard = ({ title, description, url, tag, tagColor = "purple" }: ResourceItem) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "block", textDecoration: "none", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, padding: "14px 16px", background: "var(--color-background-primary)", transition: "box-shadow 0.15s, border-color 0.15s" }}
    onMouseOver={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(83,74,183,0.10)"; e.currentTarget.style.borderColor = P_C; }}
    onMouseOut={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "var(--color-border-tertiary)"; }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)" }}>{title}</span>
      <Tag color={tagColor}>{tag}</Tag>
    </div>
    <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.6, margin: "0 0 8px" }}>{description}</p>
    <div style={{ fontSize: 11, color: P_C }}>{url.replace(/^https?:\/\//, "")}</div>
  </a>
);

const resourceGroups: { heading: string; accent: string; items: ResourceItem[] }[] = [
  {
    heading: "Interactive Learning",
    accent: T_C,
    items: [
      { title: "Learn Git Branching", description: "The best visual, interactive tool for Git. Complete the Introduction Sequence and Push & Pull before your first sprint.", url: "https://learngitbranching.js.org/", tag: "Interactive", tagColor: "teal" },
      { title: "GitHub Skills", description: "Official GitHub project-based courses: Introduction to GitHub, Resolve merge conflicts, and more.", url: "https://skills.github.com/", tag: "Guided Course", tagColor: "teal" },
    ],
  },
  {
    heading: "Reference & Cheat Sheets",
    accent: P_C,
    items: [
      { title: "GitHub Git Cheat Sheet", description: "One-page PDF covering setup, staging, branching, merging, history, and remote commands. Keep this open during your first few sprints.", url: "https://education.github.com/git-cheat-sheet-education.pdf", tag: "Cheat Sheet", tagColor: "purple" },
      { title: "Atlassian Git Tutorials", description: "Deep-dive articles on every Git concept — branching workflows, rebasing, merging strategies, git reset vs revert, and more.", url: "https://www.atlassian.com/git/tutorials", tag: "Reference", tagColor: "purple" },
      { title: "Pro Git (free book)", description: "The definitive Git book, freely available online. Chapters 1–3 cover everything you'll need for your capstone.", url: "https://git-scm.com/book/en/v2", tag: "Book", tagColor: "purple" },
    ],
  },
  {
    heading: "GitHub & Team Workflow",
    accent: BL,
    items: [
      { title: "GitHub Flow", description: "GitHub's own guide to the branch → PR → merge workflow your capstone team will follow.", url: "https://docs.github.com/en/get-started/using-github/github-flow", tag: "Workflow", tagColor: "blue" },
      { title: "GitHub Organizations Docs", description: "Managing org members, roles, repository permissions, and team access.", url: "https://docs.github.com/en/organizations", tag: "Docs", tagColor: "blue" },
      { title: "Branch Protection Rules", description: "How to require PRs, status checks, and review approvals before merging to main.", url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches", tag: "Docs", tagColor: "blue" },
      { title: "Conventional Commits", description: "A lightweight convention for commit messages (feat:, fix:, chore:) that makes your git history readable.", url: "https://www.conventionalcommits.org/", tag: "Convention", tagColor: "blue" },
    ],
  },
  {
    heading: "Mobile-Specific",
    accent: AM_C,
    items: [
      { title: "gitignore.io", description: "Generate a .gitignore for Android, iOS, Xcode, Android Studio, or any combination. Use this when creating your capstone repo.", url: "https://www.toptal.com/developers/gitignore", tag: "Tool", tagColor: "amber" },
      { title: "Handling .pbxproj Conflicts", description: "The most common iOS-specific merge conflict. Bookmark this — you will hit it.", url: "https://stackoverflow.com/questions/6431577/best-practices-for-pbxproj-merge-conflicts", tag: "iOS", tagColor: "amber" },
    ],
  },
];

const Resources = () => (
  <div>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 8px" }}>Resources</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 20 }}>
      Curated references, tools, and guides for your capstone and beyond.
    </p>
    {resourceGroups.map(group => (
      <div key={group.heading} style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ width: 3, height: 18, borderRadius: 2, background: group.accent }} />
          <span style={{ fontSize: 13, fontWeight: 700 }}>{group.heading}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 10 }}>
          {group.items.map(item => <ResourceCard key={item.title} {...item} />)}
        </div>
      </div>
    ))}
  </div>
);

/* ══════════════════════ CHEATSHEET ════════════════════════════════════════════ */

const ScenarioCard = ({ title, when, children }: { title: string; when: string; children: React.ReactNode }) => (
  <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, padding: "14px 16px", background: "var(--color-background-primary)", marginBottom: 10 }}>
    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 4 }}>{title}</div>
    <p style={{ fontSize: 12, color: MUTED, margin: "0 0 10px", lineHeight: 1.5 }}><em>Use when:</em> {when}</p>
    {children}
  </div>
);

const CheatGroup = ({ heading, accent, children }: { heading: string; accent: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <div style={{ width: 3, height: 18, borderRadius: 2, background: accent }} />
      <span style={{ fontSize: 13, fontWeight: 700 }}>{heading}</span>
    </div>
    {children}
  </div>
);

const Cheatsheet = () => (
  <div>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Git Cheatsheet</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 20 }}>
      Scenario-based reference for the Git operations you'll use most. Find your situation, copy the commands, and adjust names to fit your project.
    </p>

    <CheatGroup heading="Getting Started" accent={T_C}>
      <ScenarioCard title="First-Time Setup" when="Setting up Git on a new machine or configuring your identity for the first time.">
        <CodeB>{`git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Start a brand-new local repo
git init

# Or clone an existing remote repo
git clone https://github.com/org/repo.git`}</CodeB>
        <Tip>These <IC>--global</IC> settings apply to every repo on your machine. Run <IC>git config --list</IC> to confirm they're set.</Tip>
      </ScenarioCard>

      <ScenarioCard title="The Daily Loop" when="Making and saving your everyday changes.">
        <CodeB>{`git status                          # see what's changed
git add .                           # stage everything
git add src/LoginScreen.js          # or stage a specific file
git commit -m "feat: add login screen"
git push                            # upload to remote`}</CodeB>
        <Tip>Use commit prefixes to keep history readable: <IC>feat:</IC>, <IC>fix:</IC>, <IC>chore:</IC>, <IC>docs:</IC>.</Tip>
      </ScenarioCard>

      <ScenarioCard title="Checking Your Work" when="Before committing, or when you're unsure what has changed.">
        <CodeB>{`git status                          # list changed and staged files
git diff                            # show unstaged changes (line by line)
git diff --staged                   # show staged changes
git log --oneline                   # compact commit history
git log --oneline --graph           # visual branch/merge graph`}</CodeB>
      </ScenarioCard>
    </CheatGroup>

    <CheatGroup heading="Undoing Things" accent={AM_C}>
      <ScenarioCard title="Unstage a File" when="You staged something you didn't mean to include in the next commit.">
        <CodeB>{`git restore --staged file.js        # unstage, but keep your changes`}</CodeB>
        <Tip>This doesn't delete your work — it just moves the file back to unstaged.</Tip>
      </ScenarioCard>

      <ScenarioCard title="Undo Your Last Commit (Not Yet Pushed)" when="You committed too soon, have a typo in the message, or need to rework the change.">
        <CodeB>{`git reset --soft HEAD~1             # undo commit, keep changes staged
git reset HEAD~1                    # undo commit, unstage changes (keep files)`}</CodeB>
        <Warn>Only use <IC>reset</IC> on commits you haven't pushed yet. If it's already on the remote, use <IC>git revert</IC> instead.</Warn>
      </ScenarioCard>

      <ScenarioCard title="Undo a Pushed Commit (Safely)" when="You need to reverse a commit that's already on the remote branch.">
        <CodeB>{`git revert HEAD                     # creates a new "undo" commit
git push`}</CodeB>
        <Tip><IC>revert</IC> is safe on shared branches — it adds a new commit rather than rewriting history, so teammates can pull without issues.</Tip>
      </ScenarioCard>

      <ScenarioCard title="Discard All Local Changes" when="You want to throw away all uncommitted changes and return to the last commit.">
        <CodeB>{`git restore .                       # discard all unstaged changes
git clean -fd                       # remove untracked files and folders`}</CodeB>
        <Warn>This is permanent. Discarded changes cannot be recovered.</Warn>
      </ScenarioCard>
    </CheatGroup>

    <CheatGroup heading="Branching" accent={P_C}>
      <ScenarioCard title="Create & Switch Branches" when="Starting a new task, feature, or bug fix.">
        <CodeB>{`git checkout -b feature/login-screen  # create + switch in one step
git branch                            # list all local branches
git checkout main                     # switch to main
git branch -d feature/login-screen   # delete a merged branch
git branch -D feature/login-screen   # force-delete (unmerged)`}</CodeB>
      </ScenarioCard>

      <ScenarioCard title="Start a New Feature (Full Flow)" when="Beginning any new task during a sprint — always follow this sequence.">
        <CodeB>{`git checkout main
git pull                              # start from the latest main

git checkout -b feature/my-feature
# ... make your changes ...

git add .
git commit -m "feat: describe the change"
git push -u origin feature/my-feature
# then open a pull request on GitHub`}</CodeB>
        <Tip>Always branch off a fresh <IC>main</IC>. Never branch off a teammate's in-progress branch unless you're intentionally building on top of their work.</Tip>
      </ScenarioCard>
    </CheatGroup>

    <CheatGroup heading="Working with Remotes" accent={BL}>
      <ScenarioCard title="Sync Your Branch with the Latest Main" when="Teammates have merged PRs and you want their changes before opening your own PR.">
        <CodeB>{`git checkout main
git pull                              # update local main
git checkout feature/my-feature
git rebase main                       # replay your commits on top of updated main
git push --force-with-lease           # required after rebase`}</CodeB>
        <Tip><IC>--force-with-lease</IC> is safer than <IC>--force</IC> — it refuses to push if someone else has pushed to the branch since your last fetch.</Tip>
      </ScenarioCard>

      <ScenarioCard title="Review a Teammate's PR Locally" when="You're assigned to review a PR and want to build and test the app yourself.">
        <CodeB>{`git fetch origin
git checkout teammate-feature-branch  # switch to their branch
# build + test the app

# when done, return to your branch:
git checkout feature/my-feature`}</CodeB>
      </ScenarioCard>
    </CheatGroup>

    <CheatGroup heading="Oops Scenarios" accent={G}>
      <ScenarioCard title="I Committed to main by Accident" when="You forgot to create a branch and committed directly to main — and haven't pushed yet.">
        <CodeB>{`# Move your commits onto a new branch
git checkout -b feature/my-feature

# Rewind main to match the remote
git checkout main
git reset --hard origin/main`}</CodeB>
        <Warn>Only safe <em>before</em> pushing. If you've already pushed to main, contact your team — you'll need to coordinate a revert.</Warn>
      </ScenarioCard>

      <ScenarioCard title="I Have a Merge Conflict" when="Git can't automatically merge two branches because the same lines were changed in both.">
        <CodeB>{`# Conflict markers look like this inside the affected file:
<<<<<<< HEAD
your version of the code
=======
teammate's version of the code
>>>>>>> feature/their-branch

# Edit the file to keep what you want, remove the markers, then:
git add conflicted-file.js
git commit                          # complete the merge
# or, if you're in a rebase:
git rebase --continue`}</CodeB>
        <Tip>VS Code's built-in <strong>Merge Editor</strong> (click "Resolve in Merge Editor" on the conflict banner) makes this much easier to visualize.</Tip>
      </ScenarioCard>

      <ScenarioCard title="I Need to Find Who Changed a Line" when="Debugging and you need to trace when a specific line was added or last modified.">
        <CodeB>{`git blame file.js                   # shows author + commit for every line
git log --follow file.js            # full history for a file, including renames
git log -S "searchText" --oneline   # find which commit introduced a string`}</CodeB>
      </ScenarioCard>
    </CheatGroup>
  </div>
);

/* ══════════════════════ MAIN ══════════════════════════════════════════════════ */
export default function GitUnit() {
  const [tab, setTab] = useState("Overview");

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "16px 0", fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", fontWeight: 500, marginBottom: 2 }}>MOBILE DEVELOPMENT IN THE AGE OF AI</div>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>CodePath · Bonus Content</div>
      </div>
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--color-border-tertiary)", marginBottom: 16, overflowX: "auto" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "8px 14px", fontSize: 13, background: "none", cursor: "pointer",
            borderWidth: "0 0 2px 0", borderStyle: "solid",
            borderColor: tab === t ? P_C : "transparent",
            color: tab === t ? P_C : "var(--color-text-secondary)",
            fontWeight: tab === t ? 500 : 400, whiteSpace: "nowrap"
          }}>{t}</button>
        ))}
      </div>
      {tab === "Overview" && <Overview />}
      {tab === "Capstone" && <Lab />}
      {tab === "Lab" && <Practice />}
      {tab === "Cheatsheet" && <Cheatsheet />}
      {tab === "Resources" && <Resources />}
    </div>
  );
}
