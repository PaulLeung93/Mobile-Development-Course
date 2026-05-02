import { useState } from "react";

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
const RED         = "#B91C1C";
const RED_LIGHT   = "#FEECEC";
const TEXT        = "#1a1a2e";
const MUTED       = "#6b7280";

// ── Shared Components ──────────────────────────────────────────────────────────

const Section = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ margin: "14px 0", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--color-background-secondary)", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}
      >
        {title}
        <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div style={{ padding: "12px 14px", fontSize: 13, lineHeight: 1.7, color: "var(--color-text-primary)" }}>{children}</div>}
    </div>
  );
};

const VStep = ({ num, title, children, last = false }: { num: number; title: string; children: React.ReactNode; last?: boolean }) => (
  <div style={{ display: "flex", gap: 12 }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: PURPLE, color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{num}</div>
      {!last && <div style={{ width: 2, flex: 1, minHeight: 20, background: "var(--color-border-tertiary)", margin: "3px 0" }} />}
    </div>
    <div style={{ paddingBottom: last ? 8 : 24, flex: 1, minWidth: 0 }}>
      <h4 style={{ fontSize: 13, fontWeight: 600, margin: "3px 0 8px", color: "var(--color-text-primary)" }}>{title}</h4>
      <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
    </div>
  </div>
);

const Checkpoint = ({ num, children }: { num: number; children: React.ReactNode }) => (
  <div style={{ margin: "14px 0", padding: "10px 14px", background: GREEN_LIGHT, borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <strong>🎯 Checkpoint {num}:</strong> {children}
  </div>
);

const Warn = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: AMBER_LIGHT, borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: `3px solid ${AMBER}` }}>
    ⚠️ {children}
  </div>
);

const Tip = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: `3px solid ${PURPLE}` }}>
    💡 {children}
  </div>
);

const AiOpp = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "14px 0", padding: "10px 14px", background: PURPLE_LIGHT, borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
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

const Tag = ({ children, color = "purple" }: { children: React.ReactNode; color?: string }) => {
  const map: Record<string, { bg: string; fg: string }> = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806" },
    green:  { bg: GREEN_LIGHT,  fg: GREEN },
    red:    { bg: RED_LIGHT,    fg: RED },
  };
  const c = map[color] || map.purple;
  return (
    <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", background: c.bg, color: c.fg, padding: "2px 8px", borderRadius: 20 }}>
      {children}
    </span>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────

export default function GithubOrgLab() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 24px", fontFamily: "var(--font-sans, 'Inter', sans-serif)", color: "var(--color-text-primary)" }}>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <Tag color="purple">Bonus Lab</Tag>
          <Tag color="teal">Capstone</Tag>
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px", color: "var(--color-text-primary)" }}>
          Setting Up Your Capstone GitHub Organization
        </h1>
        <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6 }}>
          Before writing a single line of code, your team needs a shared home on GitHub. This lab walks you through creating a GitHub Organization, setting up your capstone repository inside it, inviting your teammates, and locking down the main branch so nobody accidentally pushes directly to production.
        </p>
      </div>

      {/* Overview */}
      <Section title="Overview & Goals" defaultOpen={true}>
        <p style={{ marginBottom: 10 }}>By the end of this lab your team will have:</p>
        <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
          <li>A <strong>GitHub Organization</strong> that all team members belong to</li>
          <li>A <strong>capstone repository</strong> created inside the org (not a personal repo)</li>
          <li>All teammates added with appropriate roles</li>
          <li>A <strong>branch protection rule</strong> on <IC>main</IC> that requires pull requests and at least one review before merging</li>
          <li>A local clone on every team member's machine, verified with a test commit</li>
        </ul>
        <Tip>
          One person on your team should drive this setup while everyone else watches. Once the org and repo exist, the remaining steps (cloning, branch protection, etc.) can be done in parallel.
        </Tip>
      </Section>

      {/* Part 1: Create the Org */}
      <Section title="Part 1 — Create a GitHub Organization" defaultOpen={true}>
        <p style={{ marginBottom: 14, fontSize: 13, color: "var(--color-text-secondary)" }}>
          A GitHub Organization gives your project a professional home and makes it easy to manage access for the whole team. One person creates it — you can always transfer ownership later.
        </p>
        <VStep num={1} title="Navigate to New Organization">
          <p>Log in to GitHub, click your profile picture in the top-right corner, and select <strong>Your organizations</strong>. Then click <strong>New organization</strong>.</p>
          <Tip>Alternatively, go directly to <IC>github.com/organizations/new</IC>.</Tip>
        </VStep>
        <VStep num={2} title="Choose a Plan">
          <p>Select the <strong>Free</strong> tier. It includes unlimited public and private repositories, up to 2,000 Actions minutes/month, and everything you need for a student capstone project.</p>
        </VStep>
        <VStep num={3} title="Name Your Organization">
          <p>Pick a name that reflects your project or team. A few naming conventions that work well:</p>
          <ul style={{ paddingLeft: 18, marginTop: 6, display: "flex", flexDirection: "column", gap: 4 }}>
            <li><IC>codepath-[your-team-name]</IC></li>
            <li><IC>[app-name]-team</IC></li>
            <li>Just the app name (e.g., <IC>pantrypal</IC>)</li>
          </ul>
          <Warn>Organization names on GitHub are globally unique and cannot be changed easily later. Choose carefully — your repo URLs will include this name.</Warn>
        </VStep>
        <VStep num={4} title="Set Contact Email & Finish" last={true}>
          <p>Enter a contact email (your own is fine), set the org as belonging to <strong>a personal account</strong>, and click <strong>Next</strong>. Skip the "invite members" screen for now — you'll do that properly in Part 3.</p>
        </VStep>
        <Checkpoint num={1}>You can see your new organization at <IC>github.com/[org-name]</IC> and the dashboard shows "0 repositories."</Checkpoint>
      </Section>

      {/* Part 2: Create the Repo */}
      <Section title="Part 2 — Create the Capstone Repository" defaultOpen={true}>
        <p style={{ marginBottom: 14, fontSize: 13, color: "var(--color-text-secondary)" }}>
          Create the repository <em>inside</em> the organization — not under your personal account. This is important: it means the repo belongs to the whole team, not just you.
        </p>
        <VStep num={1} title="Open the New Repository Form">
          <p>From your org's dashboard, click the green <strong>Create a new repository</strong> button (or the <strong>+</strong> menu → <strong>New repository</strong>). Make sure the <strong>Owner</strong> dropdown shows your org name, not your personal username.</p>
          <Warn>If the owner shows your personal username, change it! A repo under your personal account cannot easily be shared or transferred without disrupting the team's clone URLs.</Warn>
        </VStep>
        <VStep num={2} title="Name & Describe the Repository">
          <p>Use a clear, lowercase, hyphenated name. Common capstone patterns:</p>
          <CodeB>capstone-project{"\n"}pantrypal-android{"\n"}travelbuddy-ios</CodeB>
          <p style={{ marginTop: 8 }}>Add a short description (e.g., "CodePath iOS capstone — restaurant discovery app").</p>
        </VStep>
        <VStep num={3} title="Set Visibility">
          <p>Choose <strong>Private</strong> if you don't want your work publicly visible during development. You can always make it public later. For portfolio purposes, many teams switch to Public before the demo.</p>
        </VStep>
        <VStep num={4} title="Initialize the Repository">
          <p>Check the following initialization options:</p>
          <ul style={{ paddingLeft: 18, marginTop: 6, display: "flex", flexDirection: "column", gap: 6 }}>
            <li>
              <strong>Add a README file</strong> — gives you an initial commit and something to clone immediately.
            </li>
            <li>
              <strong>Add .gitignore</strong> — choose <IC>Android</IC> or <IC>Swift</IC> from the template dropdown depending on your platform. This prevents build artifacts, <IC>.DS_Store</IC> files, and API keys from being committed.
            </li>
            <li>
              <strong>Choose a license</strong> — <IC>MIT</IC> is the standard open-source choice for student projects.
            </li>
          </ul>
        </VStep>
        <VStep num={5} title="Create Repository" last={true}>
          <p>Click <strong>Create repository</strong>. You should land on the repo's main page with your initial commit visible.</p>
        </VStep>
        <Checkpoint num={2}>The repo exists at <IC>github.com/[org-name]/[repo-name]</IC>, has a README, a .gitignore, and shows one commit ("Initial commit").</Checkpoint>
        <AiOpp>
          <p>Ask Claude to generate a professional README for your capstone:</p>
          <CodeB>{"Generate a README.md for a mobile capstone project. App name: [name]. Platform: [Android/iOS]. Description: [one sentence]. Include: project overview, team members section (placeholder), features list (placeholder), screenshots section (placeholder), and setup instructions."}</CodeB>
        </AiOpp>
      </Section>

      {/* Part 3: Invite Team Members */}
      <Section title="Part 3 — Invite Your Team Members" defaultOpen={true}>
        <p style={{ marginBottom: 14, fontSize: 13, color: "var(--color-text-secondary)" }}>
          Add each teammate to the organization so they have access to the repository and any future repos you create under the org.
        </p>
        <VStep num={1} title="Open Organization Settings">
          <p>From your org dashboard, click <strong>Settings</strong> in the top navigation bar.</p>
        </VStep>
        <VStep num={2} title="Navigate to Members">
          <p>In the left sidebar under <strong>Access</strong>, click <strong>Members</strong>. Then click <strong>Invite member</strong>.</p>
        </VStep>
        <VStep num={3} title="Add Each Teammate">
          <p>Search by GitHub username or email address. Send invitations to all team members. They'll receive an email and a GitHub notification — they must <strong>accept the invitation</strong> before they appear as members.</p>
          <Tip>Have everyone accept their invitations before moving to Part 4. You can see pending invitations in the same Members page under the "Pending invitations" tab.</Tip>
        </VStep>
        <VStep num={4} title="Set Roles" last={true}>
          <p>For a small team, setting everyone as <strong>Member</strong> (not Owner) is fine. The person who created the org retains Owner privileges. If you want a co-lead to have full admin access, you can set them as Owner as well.</p>
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
                  <td style={{ padding: "6px 8px" }}>Push to repos they have access to, open PRs, create branches</td>
                </tr>
                <tr style={{ borderTop: "1px solid var(--color-border-tertiary)" }}>
                  <td style={{ padding: "6px 8px", fontWeight: 600 }}>Owner</td>
                  <td style={{ padding: "6px 8px" }}>Everything above + manage org settings, billing, and members</td>
                </tr>
              </tbody>
            </table>
          </div>
        </VStep>
        <Checkpoint num={3}>All team members appear under the "Members" tab of your organization with no pending invitations remaining.</Checkpoint>
      </Section>

      {/* Part 4: Branch Protection */}
      <Section title="Part 4 — Protect the Main Branch">
        <p style={{ marginBottom: 14, fontSize: 13, color: "var(--color-text-secondary)" }}>
          Branch protection prevents anyone — including yourself — from pushing directly to <IC>main</IC>. All changes must go through a pull request and get reviewed. This one setting eliminates an entire category of team merge disasters.
        </p>
        <VStep num={1} title="Open Repository Settings">
          <p>From the repository page (not the org), click <strong>Settings</strong> in the top tab bar.</p>
        </VStep>
        <VStep num={2} title="Navigate to Branches">
          <p>In the left sidebar under <strong>Code and automation</strong>, click <strong>Branches</strong>. Then click <strong>Add branch ruleset</strong> (or <strong>Add rule</strong> on older GitHub layouts).</p>
        </VStep>
        <VStep num={3} title="Configure the Ruleset">
          <p>Fill in the following settings:</p>
          <ul style={{ paddingLeft: 18, marginTop: 8, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>
              <strong>Ruleset name:</strong> <IC>Protect main</IC>
            </li>
            <li>
              <strong>Target branches:</strong> Click <strong>Add target → Include by pattern</strong> and enter <IC>main</IC>
            </li>
            <li>
              <strong>Restrict pushes</strong> — enable this to block direct pushes to <IC>main</IC>
            </li>
            <li>
              <strong>Require a pull request before merging</strong> — enable this
              <ul style={{ paddingLeft: 16, marginTop: 4 }}>
                <li>Set <strong>Required approvals</strong> to <IC>1</IC></li>
              </ul>
            </li>
            <li>
              <strong>Require status checks to pass</strong> — optional but recommended if you add CI later
            </li>
          </ul>
          <Warn>Make sure you yourself are not accidentally blocked. If you're the only Owner and you lock yourself out, you can disable the rule temporarily in Settings.</Warn>
        </VStep>
        <VStep num={4} title="Save the Ruleset" last={true}>
          <p>Click <strong>Create</strong>. You'll see the rule appear in the Branches list with a green active indicator.</p>
        </VStep>
        <Checkpoint num={4}>
          Try pushing directly to <IC>main</IC> from a local clone — it should be rejected with a message about branch protection rules. The only path to <IC>main</IC> is now through a reviewed PR.
        </Checkpoint>
      </Section>

      {/* Part 5: Clone & Verify */}
      <Section title="Part 5 — Clone the Repo & Make Your First Team Commit">
        <p style={{ marginBottom: 14, fontSize: 13, color: "var(--color-text-secondary)" }}>
          Every team member should clone the repo and verify they have write access by making a commit on a branch.
        </p>
        <VStep num={1} title="Clone the Repository">
          <p>Copy the HTTPS or SSH URL from the repository's green <strong>Code</strong> button, then clone it:</p>
          <CodeB>git clone https://github.com/[org-name]/[repo-name].git{"\n"}cd [repo-name]</CodeB>
        </VStep>
        <VStep num={2} title="Create a Feature Branch">
          <p>Never work directly on <IC>main</IC>. Always create a branch:</p>
          <CodeB>git checkout -b setup/[your-name]-initial</CodeB>
        </VStep>
        <VStep num={3} title="Make a Small Change">
          <p>Add your name to the <IC>README.md</IC> under a "Team" section, then commit:</p>
          <CodeB>git add README.md{"\n"}git commit -m "Add [your name] to team section"{"\n"}git push origin setup/[your-name]-initial</CodeB>
        </VStep>
        <VStep num={4} title="Open a Pull Request" last={true}>
          <p>Go to the repository on GitHub — you'll see a prompt to open a PR for your newly pushed branch. Click it, write a brief description, and assign a teammate as reviewer. Once approved, merge it.</p>
          <Tip>This first PR is intentionally trivial. The goal is to verify the full workflow — push, PR, review, merge — works for everyone before you write any real code.</Tip>
        </VStep>
        <Checkpoint num={5}>Every team member has successfully opened and merged (or had merged) a PR. The <IC>main</IC> branch now shows multiple commits and the README lists the full team.</Checkpoint>
        <AiOpp>
          <p>Set up Claude as a PR description helper from the start. When opening a PR, paste your diff into Claude and ask:</p>
          <CodeB>{"Write a concise GitHub pull request description for this diff. Include: what changed, why, and any testing notes. Keep it under 150 words."}</CodeB>
        </AiOpp>
      </Section>

      {/* Wrap Up */}
      <Section title="Wrap-Up — What You've Set Up">
        <p style={{ marginBottom: 12 }}>Your team now has a professional, collaborative Git setup:</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {[
            { icon: "🏢", label: "GitHub Organization", desc: "Shared project home" },
            { icon: "📦", label: "Capstone Repository", desc: "Initialized with README, .gitignore, and license" },
            { icon: "👥", label: "Full Team Access", desc: "Everyone can push branches and open PRs" },
            { icon: "🔒", label: "Protected Main Branch", desc: "No direct pushes — all changes go through reviewed PRs" },
            { icon: "✅", label: "Verified Workflow", desc: "Everyone has cloned, branched, and merged at least once" },
          ].map(({ icon, label, desc }) => (
            <div key={label} style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "14px 16px", border: "0.5px solid var(--color-border-tertiary)" }}>
              <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 12, color: MUTED }}>{desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 16px" }}>
          <p style={{ fontSize: 13, color: PURPLE_DARK, margin: 0, lineHeight: 1.6 }}>
            <strong>Next steps:</strong> Review the <em>Git For Teams</em> lecture content for branching conventions, PR etiquette, and how to handle merge conflicts — all of which you'll encounter during your capstone sprint.
          </p>
        </div>
      </Section>

    </div>
  );
}
