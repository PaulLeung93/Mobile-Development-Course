import { useState } from "react";

const PURPLE      = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT= "#EEEDFE";
const TEAL        = "#1D9E75";
const TEAL_DARK   = "#0F6E56";
const TEAL_LIGHT  = "#E1F5EE";
const AMBER       = "#EF9F27";
const AMBER_LIGHT = "#FAEEDA";
const BLUE        = "#185FA5";
const BLUE_LIGHT  = "#E6F1FB";
const GREEN       = "#3B6D11";
const GREEN_LIGHT = "#EAF3DE";
const RED_LIGHT   = "#FEECEC";
const RED         = "#B91C1C";
const GRAY        = "#F5F5F7";
const TEXT        = "#1a1a2e";
const MUTED       = "#6b7280";

const Tag = ({ children, color = "purple" }) => {
  const map = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806" },
    blue:   { bg: BLUE_LIGHT,   fg: BLUE },
    green:  { bg: GREEN_LIGHT,  fg: GREEN },
    red:    { bg: RED_LIGHT,    fg: RED },
  };
  const c = map[color] || map.purple;
  return <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", background: c.bg, color: c.fg, padding: "2px 8px", borderRadius: 20 }}>{children}</span>;
};

const CodePane = ({ title, accent = PURPLE, children }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0", letterSpacing: ".04em" }}>{title}</div>
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: "0 0 8px 8px", lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Info = ({ children }) => (
  <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
    <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Discussion = ({ children }) => (
  <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Discussion prompt</p>
    <p style={{ fontSize: 12, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Notes = ({ children }) => (
  <div style={{ background: GRAY, borderRadius: 8, padding: "8px 12px", marginTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em" }}>Speaker notes</p>
    <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Warn = ({ children }) => (
  <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10, borderLeft: `3px solid ${AMBER}` }}>
    <p style={{ fontSize: 12, color: "#633806", margin: 0, lineHeight: 1.5 }}>⚠️ {children}</p>
  </div>
);

const Shell = ({ tag, tagColor = "teal", timer, title, subtitle, children, notes, dark = false }) => (
  <div style={{ background: dark ? `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)` : "var(--color-background-primary)", border: dark ? "none" : "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px 22px", minHeight: 340 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag color="purple">Git for Teams</Tag>
        {tag && <Tag color={tagColor}>{tag}</Tag>}
      </div>
      {timer && <span style={{ fontSize: 11, color: dark ? "rgba(255,255,255,0.5)" : MUTED, background: dark ? "rgba(255,255,255,0.1)" : GRAY, padding: "2px 8px", borderRadius: 20 }}>{timer} min</span>}
    </div>
    <h2 style={{ fontSize: 18, fontWeight: 500, color: dark ? "#fff" : TEXT, margin: "0 0 4px", lineHeight: 1.3 }}>{title}</h2>
    {subtitle && <p style={{ fontSize: 13, color: dark ? "rgba(255,255,255,0.65)" : MUTED, margin: "0 0 12px" }}>{subtitle}</p>}
    <div style={{ marginTop: 10 }}>{children}</div>
    {notes && <Notes>{notes}</Notes>}
  </div>
);

const Bullet = ({ children, check = false, cross = false }) => (
  <div style={{ display: "flex", gap: 7, margin: "5px 0", alignItems: "flex-start" }}>
    <span style={{ color: cross ? RED : check ? TEAL : PURPLE, fontWeight: 700, flexShrink: 0, fontSize: 13, lineHeight: 1.4 }}>{cross ? "✗" : check ? "✓" : "▸"}</span>
    <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{children}</span>
  </div>
);

const Step = ({ n, label, color = PURPLE }) => (
  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", margin: "6px 0" }}>
    <span style={{ background: color, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{n}</span>
    <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{label}</span>
  </div>
);

const slides = [

  // ─── 1: TITLE ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 600, background: BLUE_LIGHT, color: BLUE, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>Android track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: GREEN_LIGHT, color: GREEN, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>iOS track</span>
        </div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Mobile Development in the Age of AI · CodePath</p>
        <h1 style={{ fontSize: 32, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.15 }}>Git for Teams</h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Organizations · Kanban · Branches · PRs · Code review</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "Solo Git vs team Git — what changes",
            "GitHub Organizations — shared ownership",
            "GitHub Projects — kanban for your capstone",
            "The branching mental model",
            "Pull requests and code review that isn't painful",
            "Using AI to write better commits and PRs",
            "Merge conflicts — how to read and resolve them",
            "Platform gotchas — .pbxproj, Gradle, .gitignore",
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: AMBER, fontWeight: 700, fontSize: 14, flexShrink: 0, marginTop: 1 }}>▸</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: "24px 0 0" }}>Mobile development in the age of AI · CodePath</p>
    </div>
  ),

  // ─── 2: HOOK ───
  () => (
    <Shell tag="Hook" timer="5" title="You've been committing alone. Now there are three of you." subtitle="Everything you knew about Git still applies. It's just about to get more interesting." notes="Ask for a show of hands: who has had a teammate overwrite their work? Who has seen 'CONFLICT' in their terminal and closed the laptop? This is the emotional hook — Git conflicts are a source of real anxiety for student teams and the #1 reason capstone projects fall apart in the final weeks. The goal of today: make the workflow so clear that conflicts become a minor inconvenience, not a crisis. | Sources: Git documentation — git-scm.com/doc. GitHub Docs — docs.github.com. Pro Git book (free) — git-scm.com/book/en/v2.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>What solo Git looks like</p>
          {[
            { ok: true,  t: "One person editing files" },
            { ok: true,  t: "Commit whenever you feel like it" },
            { ok: true,  t: "Push straight to main" },
            { ok: true,  t: "No one reviews your code" },
            { ok: true,  t: "History is just a backup" },
          ].map(r => (
            <div key={r.t} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: TEXT }}>{r.t}</span>
            </div>
          ))}
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "8px 12px", marginTop: 10 }}>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0 }}>Fine for solo projects. Breaks down immediately with a team.</p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>What team Git looks like without a workflow</p>
          {[
            { t: "Two people edit the same file — one overwrites the other" },
            { t: "Broken code gets pushed to main — everyone is blocked" },
            { t: "No one knows what anyone else is working on" },
            { t: "\"It worked on my machine\" is said constantly" },
            { t: "A conflict in .pbxproj takes 45 minutes to resolve" },
          ].map(r => (
            <div key={r.t} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
              <span style={{ color: RED, fontWeight: 700, flexShrink: 0 }}>✗</span>
              <span style={{ fontSize: 12, color: TEXT }}>{r.t}</span>
            </div>
          ))}
          <div style={{ background: RED_LIGHT, borderRadius: 8, padding: "8px 12px", marginTop: 10 }}>
            <p style={{ fontSize: 11, color: RED, margin: 0 }}>Every one of these is avoidable with the right workflow. That's what today covers.</p>
          </div>
        </div>
      </div>
      <Discussion>{"Think about the last time you worked on a group project — coding or otherwise. What broke down? How much of it was a communication problem vs a tooling problem?"}</Discussion>
    </Shell>
  ),

  // ─── 3: AGENDA ───
  () => (
    <Shell tag="Agenda" title="Today's session — 55 min lecture" notes="This session is unusually dense with tooling setup in the first half. Keep the GitHub Org and Projects sections moving — students can follow along in their browsers during those slides. The payoff is the second half: branching, PRs, and merge conflicts are the things that will save their capstone. | Sources: GitHub Organizations docs — docs.github.com/en/organizations. GitHub Projects docs — docs.github.com/en/issues/planning-and-tracking-with-projects. GitHub branching guide — docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-branches.">
      {[
        { time: "0:00–0:05", label: "Hook",                    desc: "Solo Git vs team Git — what breaks without a workflow",         section: null },
        { time: "0:05–0:12", label: "GitHub Organizations",    desc: "Create an org, add teammates, set repo permissions",            section: null },
        { time: "0:12–0:18", label: "GitHub Projects",         desc: "Kanban board setup, issue types, linking to branches",          section: null },
        { time: "0:18–0:26", label: "Branching mental model",  desc: "main is sacred, feature branches, naming conventions",          section: null },
        { time: "0:26–0:36", label: "PR workflow",             desc: "Open → review → request changes → approve → merge",            section: null },
        { time: "0:36–0:40", label: "AI + Git",                desc: "Claude for commit messages, PR descriptions, self-review",      section: "ai" },
        { time: "0:40–0:48", label: "Merge conflicts",         desc: "Reading a conflict, resolving it, .pbxproj deep dive",          section: null },
        { time: "0:48–0:52", label: "Platform gotchas",        desc: ".gitignore for Android and iOS, API key warning",               section: null },
        { time: "0:52–0:55", label: "Lab intro",               desc: "Org setup, kanban, first branch, first PR",                    section: "lab" },
      ].map(r => (
        <div key={r.time} style={{
          display: "flex", gap: 12, padding: "8px 6px",
          borderBottom: `0.5px solid ${GRAY}`,
          background: r.section === "ai" ? PURPLE_LIGHT : r.section === "lab" ? TEAL_LIGHT : "transparent",
          borderRadius: r.section ? 6 : 0, paddingLeft: r.section ? 8 : 6,
        }}>
          <span style={{ fontSize: 12, minWidth: 90, flexShrink: 0, color: r.section ? PURPLE_DARK : MUTED, fontWeight: r.section ? 600 : 400 }}>{r.time}</span>
          <span style={{ fontSize: 12, fontWeight: 600, minWidth: 168, flexShrink: 0, color: r.section === "ai" ? PURPLE_DARK : r.section === "lab" ? TEAL_DARK : PURPLE }}>{r.label}</span>
          <span style={{ fontSize: 12, color: r.section === "ai" ? PURPLE_DARK : r.section === "lab" ? TEAL_DARK : TEXT }}>{r.desc}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
        {[{ color: PURPLE, label: "AI opportunity" }, { color: TEAL, label: "Lab" }].map(l => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
            <span style={{ fontSize: 11, color: MUTED }}>{l.label}</span>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── 4: GITHUB ORGANIZATIONS ───
  () => (
    <Shell tag="Setup" timer="7" title="GitHub Organizations — shared ownership for your team" subtitle="A repo under one person's account is a liability. An org-owned repo belongs to the team." notes="The key motivation: if one teammate's personal account is the owner and they drop the course or become unresponsive, the team loses access to the repo. An org solves this — ownership is collective. This also mirrors how real companies work — no engineer's personal GitHub account owns the company codebase. Walk through the org creation live if possible, or show screenshots. The free tier is sufficient for student teams. | Sources: GitHub Organizations overview — docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations. Creating an organization — docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch. Organization roles (owner/member) — docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization. Repository permissions — docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Create your org — step by step</p>
          {[
            { n: 1, t: "Go to github.com → + menu → New organization" },
            { n: 2, t: "Choose Free plan — sufficient for student teams" },
            { n: 3, t: "Name it after your app or team (e.g. 'team-recipie-app')" },
            { n: 4, t: "Invite all teammates by GitHub username or email" },
            { n: 5, t: "Create a new repo inside the org — not under anyone's personal account" },
            { n: 6, t: "Add codepathreview as an outside collaborator with Read access" },
          ].map(s => <Step key={s.n} n={s.n} label={s.t} />)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: BLUE_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, margin: "0 0 8px" }}>Org roles — keep it simple</p>
            {[
              { role: "Owner",  detail: "Full admin access — can delete the repo, manage billing, remove members. Assign to all three teammates.", badge: BLUE },
              { role: "Member", detail: "Can push to branches, open PRs, create issues. Default for everyone.", badge: TEAL_DARK },
            ].map(r => (
              <div key={r.role} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
                <span style={{ background: r.badge, color: "#fff", fontSize: 10, fontWeight: 700, padding: "1px 7px", borderRadius: 20, flexShrink: 0, height: 18, display: "flex", alignItems: "center" }}>{r.role}</span>
                <span style={{ fontSize: 11, color: BLUE, lineHeight: 1.4 }}>{r.detail}</span>
              </div>
            ))}
          </div>
          <div style={{ background: GREEN_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, margin: "0 0 8px" }}>Repo visibility settings</p>
            {[
              { setting: "Private repo",       why: "Your capstone code is private — add codepathreview as outside collaborator" },
              { setting: "Branch protection",  why: "Protect main — require at least 1 PR review before merging. Settings → Branches." },
              { setting: "Default branch",     why: "Set to main (not master). Settings → Default branch." },
            ].map(r => (
              <div key={r.setting} style={{ marginBottom: 6 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: GREEN, margin: "0 0 2px" }}>{r.setting}</p>
                <p style={{ fontSize: 11, color: GREEN, margin: 0, opacity: 0.85, lineHeight: 1.4 }}>{r.why}</p>
              </div>
            ))}
          </div>
          <Info>{"Recommendation: make all three teammates Owners. In student teams, 'one owner who controls everything' is a single point of failure. Shared ownership means anyone can unblock anyone."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // ─── 5: GITHUB PROJECTS / KANBAN ───
  () => (
    <Shell tag="Planning" timer="6" title="GitHub Projects — kanban for your capstone" subtitle="Stop tracking work in a group chat. Use a board." notes="Students default to tracking work in WhatsApp or Discord group chats. This breaks down as the project grows — decisions get buried, it's unclear who owns what, and nothing has a clear done/not-done state. GitHub Projects is free, integrated with the repo, and takes 5 minutes to set up. The key behavior change to reinforce: every piece of work should be an issue before it's a branch. Issue → branch → PR → close issue is the loop. | Sources: GitHub Projects quickstart — docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects. Creating a project board — docs.github.com/en/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project. Linking PRs to issues — docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue. GitHub Issues — docs.github.com/en/issues/tracking-your-work-with-issues/about-issues.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Setting up your board</p>
          {[
            { n: 1, t: "Go to your org → Projects tab → New project" },
            { n: 2, t: "Choose Board template — gives you Kanban columns out of the box" },
            { n: 3, t: "Rename columns: To Do / In Progress / In Review / Done" },
            { n: 4, t: "Create issues for every feature on your remaining list" },
            { n: 5, t: "Assign each issue to a teammate and a milestone (M4 / Final)" },
            { n: 6, t: "When you start work on an issue, drag it to In Progress" },
          ].map(s => <Step key={s.n} n={s.n} label={s.t} />)}
          <Warn>{"Don't create a branch before creating an issue. The issue is the source of truth — the branch and PR link back to it."}</Warn>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "12px 14px", border: "0.5px solid var(--color-border-tertiary)" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "0 0 10px" }}>What a good issue looks like</p>
            <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "10px 14px" }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: AMBER, margin: "0 0 6px" }}>#14 — Add favourite button to recipe detail screen</p>
              <p style={{ fontSize: 11, color: "#cdd6f4", margin: "0 0 8px", lineHeight: 1.5 }}>{"User should be able to tap a heart icon on the detail screen to save a recipe. Saved state persists across app restarts (Room / SwiftData)."}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["feature", "persistence", "assigned: Alex", "milestone: M4"].map(t => (
                  <span key={t} style={{ fontSize: 10, background: PURPLE_LIGHT, color: PURPLE_DARK, padding: "1px 7px", borderRadius: 20 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 8px" }}>The issue → branch → PR loop</p>
            {[
              "Create issue #14",
              "Create branch: feature/14-favourite-button",
              "Build the feature, commit to branch",
              "Open PR — write 'Closes #14' in description",
              "Teammate reviews and approves",
              "Merge → issue closes automatically",
            ].map((t, i) => <Step key={i} n={i + 1} label={t} color={TEAL_DARK} />)}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 6: BRANCHING MENTAL MODEL ───
  () => (
    <Shell tag="Concept" timer="8" title="The branching mental model" subtitle="main is a contract. Feature branches are cheap experiments." notes="The key mental model shift: main is not where you work, it's where you ship from. Every commit on main should be in a state someone could demo. Feature branches cost nothing to create and are thrown away after merging. Students resist branching because it feels like 'extra work' — the reframe is that it's insurance. If your branch breaks, main still works. If a teammate's branch breaks, your branch still works. | Sources: Git branching documentation — git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell. GitHub flow — docs.github.com/en/get-started/using-github/github-flow. Branch naming conventions — conventional-commits.org (prefix conventions). Git checkout vs switch — git-scm.com/docs/git-switch (git switch is the modern command).">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>The rule: main is always demoable</p>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 6px" }}>✓ main — the production branch</p>
            {[
              "Every commit here should compile and run",
              "Only updated via merged PRs — never commit directly",
              "Protected branch: require 1 reviewer before merging",
              "This is what your instructor clones for the check-in",
            ].map(t => <Bullet key={t} check>{t}</Bullet>)}
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 6px" }}>▸ Feature branches — where work happens</p>
            {[
              "One branch per issue / feature",
              "Short-lived — create, build, PR, merge, delete",
              "If it breaks, only your branch is broken",
              "Multiple teammates can work simultaneously without conflict",
            ].map(t => <Bullet key={t}>{t}</Bullet>)}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Branch naming conventions</p>
          <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, border: "0.5px solid var(--color-border-tertiary)", overflow: "hidden", marginBottom: 10 }}>
            {[
              { prefix: "feature/",  example: "feature/14-favourite-button",    use: "New functionality" },
              { prefix: "fix/",      example: "fix/21-crash-on-empty-list",     use: "Bug fixes" },
              { prefix: "chore/",    example: "chore/update-dependencies",      use: "Non-feature work" },
              { prefix: "refactor/", example: "refactor/move-to-repository-pattern", use: "Code cleanup" },
            ].map((r, i) => (
              <div key={r.prefix} style={{ display: "grid", gridTemplateColumns: "80px 1fr 100px", gap: 8, padding: "7px 12px", background: i % 2 === 0 ? "transparent" : "var(--color-background-primary)", alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: PURPLE, fontFamily: "monospace" }}>{r.prefix}</span>
                <span style={{ fontSize: 11, color: TEAL_DARK, fontFamily: "monospace" }}>{r.example}</span>
                <span style={{ fontSize: 11, color: MUTED }}>{r.use}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Essential branch commands</p>
          <CodePane title="Terminal" accent={PURPLE}>{`# Create and switch to a new branch
git switch -c feature/14-favourite-button

# See all branches
git branch -a

# Push branch to GitHub (first time)
git push -u origin feature/14-favourite-button

# Keep your branch up to date with main
git fetch origin
git merge origin/main

# Delete branch after PR is merged
git branch -d feature/14-favourite-button`}</CodePane>
        </div>
      </div>
    </Shell>
  ),

  // ─── 7: PR WORKFLOW ───
  () => (
    <Shell tag="Workflow" timer="10" title="Pull requests — the full loop" subtitle="A PR is a conversation, not just a code delivery mechanism" notes="Emphasise that a PR is communication, not bureaucracy. The description tells teammates what changed and why. The review catches bugs before they hit main. The merge is the handoff. A good PR description saves everyone time — including the reviewer. Walk through a real PR on GitHub if possible. | Sources: GitHub Pull Requests overview — docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests. Linking PRs to issues — docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue. Requesting reviewers — docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review. PR review — docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews. Squash and merge — docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squash-and-merge-your-commits.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Opening a PR</p>
          {[
            { n: 1, t: "Push your branch to GitHub" },
            { n: 2, t: "GitHub shows a 'Compare & pull request' banner — click it" },
            { n: 3, t: "Write a clear title and description (see template →)" },
            { n: 4, t: "Request a specific teammate as reviewer" },
            { n: 5, t: "Link the issue: write 'Closes #14' in the description body" },
            { n: 6, t: "Submit — don't merge your own PRs" },
          ].map(s => <Step key={s.n} n={s.n} label={s.t} />)}

          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "14px 0 8px" }}>Good PR description template</p>
          <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "10px 14px" }}>
            <pre style={{ margin: 0, color: "#cdd6f4", fontSize: 11, lineHeight: 1.7, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`## What changed
Added a heart button to RecipeDetailScreen.
Tapping it saves/unsaves the recipe to Room / SwiftData.
State persists across restarts.

## How to test
1. Open any recipe detail screen
2. Tap the heart — should fill in
3. Kill the app and reopen
4. Confirm the heart is still filled

## Screenshots
[attach before/after]

Closes #14`}</pre>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Reviewing a PR</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "✓ Approve",              color: TEAL_LIGHT,   fg: TEAL_DARK,   detail: "Code looks good, test steps pass, no concerns. Use this liberally — a quick approval unblocks your teammate." },
              { label: "△ Request changes",       color: AMBER_LIGHT,  fg: "#633806",   detail: "Something needs to change before merging. Be specific — link to the line, explain why, suggest the fix." },
              { label: "◦ Comment",               color: PURPLE_LIGHT, fg: PURPLE_DARK, detail: "Leaving feedback without blocking the merge. Good for non-critical suggestions or questions." },
            ].map(r => (
              <div key={r.label} style={{ background: r.color, borderRadius: 8, padding: "9px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: r.fg, margin: "0 0 3px" }}>{r.label}</p>
                <p style={{ fontSize: 11, color: r.fg, margin: 0, lineHeight: 1.4, opacity: 0.9 }}>{r.detail}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "12px 0 6px" }}>Merging</p>
          <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 12px", border: "0.5px solid var(--color-border-tertiary)" }}>
            {[
              { method: "Merge commit",   when: "Default — preserves full branch history" },
              { method: "Squash & merge", when: "Condenses all branch commits into one clean commit on main. Recommended for capstone." },
              { method: "Rebase & merge", when: "Linear history — more complex, skip for now" },
            ].map(m => (
              <div key={m.method} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: PURPLE, minWidth: 110, flexShrink: 0 }}>{m.method}</span>
                <span style={{ fontSize: 11, color: MUTED, lineHeight: 1.4 }}>{m.when}</span>
              </div>
            ))}
          </div>
          <Info>{"After merging: delete the branch on GitHub (there's a button). It's merged — keeping it around causes confusion. Your local branch can be deleted with git branch -d."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // ─── 8: CODE REVIEW ───
  () => (
    <Shell tag="Review" timer="5" title="Code review that isn't painful" subtitle="The goal is better code, not ego protection" notes="Code review is genuinely uncomfortable for students — having your code criticized feels personal, and giving criticism feels aggressive. The reframe: a review comment is a question or a suggestion, not a verdict. The best review culture is one where comments are specific, actionable, and kind. The nitpick marker prevents reviewer fatigue — if something is minor, mark it as such so the author knows not to agonise over it. | Sources: GitHub code review docs — docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request. Google Engineering practices — google.github.io/eng-practices/review. Conventional Comments spec — conventionalcomments.org.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What to look for as a reviewer</p>
          {[
            { area: "Does it work?",        detail: "Follow the test steps in the PR description. Does it behave as described?" },
            { area: "Is it readable?",      detail: "Can you understand what the code does without asking the author? If not, a comment is needed." },
            { area: "Does it fit the arch?", detail: "Is business logic in the ViewModel, not the View? Are naming conventions consistent?" },
            { area: "Any obvious bugs?",    detail: "Null pointer risks, unhandled errors, missing edge cases (empty list, no internet, etc.)" },
            { area: "Is anything missing?", detail: "Loading states, error handling, the case where the user does something unexpected." },
          ].map(r => (
            <div key={r.area} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: PURPLE, minWidth: 130, flexShrink: 0, lineHeight: 1.4 }}>{r.area}</span>
              <span style={{ fontSize: 11, color: MUTED, lineHeight: 1.4 }}>{r.detail}</span>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>How to write useful comments</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ background: RED_LIGHT, borderRadius: 8, padding: "9px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: RED, margin: "0 0 3px" }}>✗ Unhelpful</p>
              <p style={{ fontSize: 11, color: RED, margin: 0, fontStyle: "italic" }}>"This is wrong."</p>
              <p style={{ fontSize: 11, color: RED, margin: "4px 0 0", fontStyle: "italic" }}>"Why would you do it this way?"</p>
            </div>
            <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "9px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: TEAL_DARK, margin: "0 0 3px" }}>✓ Helpful</p>
              <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, fontStyle: "italic" }}>"This will crash if the list is empty — we should check for it before calling .first. What do you think about adding a guard here?"</p>
              <p style={{ fontSize: 11, color: TEAL_DARK, margin: "6px 0 0", fontStyle: "italic" }}>"nit: could rename `d` to `description` for readability — minor, your call."</p>
            </div>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px", marginTop: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 6px" }}>The "nit:" prefix</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>Prefix a comment with "nit:" to signal it's a minor style preference, not a blocking issue. The author can fix it or ignore it. This separates "must fix" from "nice to have" without a separate conversation.</p>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px", marginTop: 8 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#633806", margin: "0 0 4px" }}>Turnaround time</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>Agree as a team: reviews should be done within 24 hours. Blocking a teammate's PR for 3 days is worse than merging imperfect code.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 9: AI + GIT ───
  () => (
    <Shell tag="AI opportunity" tagColor="amber" timer="4" title="Using AI to write better commits and PRs" subtitle="The most underused AI workflow in software engineering" notes="Students write terrible commit messages ('fix stuff', 'changes', 'wip') because writing a good one feels like work for no reward. Claude eliminates that excuse. The PR description template prompt is particularly powerful — students who use it get substantially better code reviews because their reviewers actually understand the context. The self-review prompt is the most advanced: ask Claude to review your own diff before opening a PR, find the bugs yourself, fix them, then open the PR. This dramatically reduces back-and-forth in review. | Sources: Conventional Commits spec — conventionalcommits.org (explains the fix:/feat:/chore: prefix convention). Git diff for context — git-scm.com/docs/git-diff. Claude documentation — docs.anthropic.com.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          {
            title: "✍️ Better commit messages",
            prompt: `"Write a conventional commit message
for these changes:

[paste git diff or describe what changed]

Use the format:
type(scope): short description

Types: feat, fix, chore, refactor, docs"`,
            why: "Turns 'wip commit' into 'feat(favourites): persist saved recipes across app restarts via Room database'",
            color: PURPLE_LIGHT, fg: PURPLE_DARK,
          },
          {
            title: "📝 PR descriptions",
            prompt: `"Write a pull request description
for this change:

Branch: feature/14-favourite-button
Issue: #14 — Add favourite button
Summary of changes: [describe briefly]

Include: what changed, how to test,
any gotchas."`,
            why: "Produces a complete PR description in 10 seconds. Your reviewer will actually understand what changed.",
            color: BLUE_LIGHT, fg: BLUE,
          },
          {
            title: "🔍 Self-review before opening PR",
            prompt: `"Review this code diff before
I open a pull request.

[paste git diff]

Look for:
- Potential crashes or null issues
- Missing error handling
- Anything that seems off
Be specific about line numbers."`,
            why: "Find your own bugs before your teammate does. Dramatically reduces review round-trips.",
            color: TEAL_LIGHT, fg: TEAL_DARK,
          },
        ].map(c => (
          <div key={c.title} style={{ background: c.color, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: c.fg, margin: "0 0 8px" }}>{c.title}</p>
            <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "8px 10px", marginBottom: 8 }}>
              <pre style={{ margin: 0, color: "#cdd6f4", fontSize: 10, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{c.prompt}</pre>
            </div>
            <p style={{ fontSize: 11, color: c.fg, margin: 0, lineHeight: 1.5, opacity: 0.9 }}>{c.why}</p>
          </div>
        ))}
      </div>
      <Info>{"These aren't shortcuts — they're multipliers. You still need to understand your own code. Claude fills in the boilerplate so you can focus on the decisions that actually matter."}</Info>
    </Shell>
  ),

  // ─── 10: MERGE CONFLICTS ───
  () => (
    <Shell tag="Concept" timer="8" title="Merge conflicts — how to read and resolve them" subtitle="A conflict isn't a failure. It's Git asking you a question." notes="Normalise conflicts immediately. Students fear them, but a conflict just means two people changed the same lines. Git can't decide which version is correct, so it asks you. The conflict markers are just text — <<<<<<, =======, >>>>>> delimit the two versions. Your job is to edit the file to contain the correct version (which is sometimes one, sometimes the other, sometimes both combined). Walk through the Android example live. The iOS .pbxproj story needs its own attention — covered on the next slide. | Sources: Git merge conflicts — git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts. Resolving conflicts in VS Code — code.visualstudio.com/docs/sourcecontrol/overview#_merge-conflicts. Android Studio Git integration — developer.android.com/studio/projects/version-control. Xcode source control — developer.apple.com/documentation/xcode/source-control-management.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>How a conflict happens</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
            {[
              "Alex and Sam both branch from main",
              "Alex changes HomeScreen.kt line 42",
              "Sam changes HomeScreen.kt line 42 — differently",
              "Alex merges first — main is updated",
              "Sam opens a PR — Git sees two versions of line 42",
              "Git marks the conflict and asks Sam to resolve it",
            ].map((t, i) => <Step key={i} n={i + 1} label={t} />)}
          </div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What a conflict looks like in code</p>
          <CodePane title="HomeScreen.kt — conflicted" accent={RED}>{`<<<<<<< HEAD (your branch — Sam's version)
val title = "My Recipes"
=======
val title = "Saved Recipes"
>>>>>>> origin/main (Alex's version, already merged)

// To resolve: delete the markers and
// keep the correct version (or combine both):
val title = "My Recipes"`}</CodePane>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Resolving the conflict</p>
          {[
            { n: 1, t: "Open the file — look for <<<<<<< markers" },
            { n: 2, t: "Decide: keep your version, keep theirs, or combine both" },
            { n: 3, t: "Delete ALL three marker lines (<<<, ===, >>>)" },
            { n: 4, t: "Save the file — it should now be valid code" },
            { n: 5, t: "git add the resolved file" },
            { n: 6, t: "git commit to complete the merge" },
          ].map(s => <Step key={s.n} n={s.n} label={s.t} />)}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
            <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "9px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, margin: "0 0 4px" }}>🤖 Android Studio</p>
              <p style={{ fontSize: 11, color: BLUE, margin: 0, lineHeight: 1.4 }}>Built-in merge tool — shows three panels (yours / base / theirs). Use VCS → Git → Resolve Conflicts.</p>
            </div>
            <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "9px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: GREEN, margin: "0 0 4px" }}>🍎 Xcode</p>
              <p style={{ fontSize: 11, color: GREEN, margin: 0, lineHeight: 1.4 }}>Source Control → Changes shows conflicts. Click the conflict icon to open inline resolution UI.</p>
            </div>
          </div>
          <Warn>{"If you're confused about which version to keep: talk to your teammate. Don't guess. A wrong merge that deletes someone's work is much worse than a short conversation."}</Warn>
        </div>
      </div>
    </Shell>
  ),

  // ─── 11: PBXPROJ CONFLICTS ───
  () => (
    <Shell tag="iOS gotcha" tagColor="red" timer="5" title="The .pbxproj problem" subtitle="The most feared merge conflict in iOS development" notes="This slide exists because .pbxproj conflicts have derailed iOS capstone teams every cohort. The file is auto-generated XML-ish text that represents the entire Xcode project structure — every file reference, build phase, and target. When two people add different files to the project simultaneously, Xcode writes conflicting entries to .pbxproj. The conflict markers end up inside an auto-generated UUID-keyed dictionary, making it nearly unreadable. The prevention strategies are more valuable than the resolution strategies — teach those first. | Sources: Xcode .pbxproj format — developer.apple.com/library/archive/documentation/DeveloperTools/Reference/XcodeBuildSettingRef (see xcodeproj format). git-xcode-fix tool — github.com/simonwagner/mergepbx (third-party merge driver). Apple's own guidance on resolving Xcode conflicts — developer.apple.com/documentation/xcode/source-control-management. Stack Overflow canonical .pbxproj answer — stackoverflow.com/questions/1483420/how-to-resolve-xcodeproj-conflicts (highly referenced, worth reading before class).">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Why .pbxproj conflicts are uniquely horrible</p>
          <CodePane title=".pbxproj — conflicted (example)" accent={RED}>{`/* Begin PBXBuildFile section */
<<<<<<< HEAD
    A1B2C3D4 /* FavouriteView.swift */ = {
      isa = PBXBuildFile;
      fileRef = A1B2C3D4;
    };
=======
    E5F6G7H8 /* ProfileViewModel.swift */ = {
      isa = PBXBuildFile;
      fileRef = E5F6G7H8;
    };
>>>>>>> feature/profile-screen
/* End PBXBuildFile section */`}</CodePane>
          <p style={{ fontSize: 11, color: MUTED, margin: "8px 0 0", lineHeight: 1.5 }}>The file can be hundreds of lines long and has dozens of conflict markers when two teammates add files simultaneously. UUIDs are auto-generated and meaningless to humans.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 8px" }}>Prevention — much better than resolution</p>
            {[
              "Coordinate file additions — don't add new Swift files at the same time as a teammate",
              "Add one feature at a time and merge to main before the next person starts",
              "Keep your branch short-lived — the longer a branch lives, the more likely a .pbxproj conflict",
              "Communicate in Slack before adding new files: 'I'm adding ProfileViewModel now'",
            ].map(t => <Bullet key={t} check>{t}</Bullet>)}
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#633806", margin: "0 0 8px" }}>Resolution — when prevention fails</p>
            {[
              { step: "Open the .pbxproj in a text editor (not Xcode)", detail: "Xcode will refuse to open a conflicted project" },
              { step: "Find each conflict marker pair (<<<, ===, >>>)", detail: "You need BOTH entries — each UUID entry is a different file. Keep all of them, remove just the markers." },
              { step: "Test: try opening in Xcode", detail: "If the project opens and your files are visible in the navigator, you resolved it correctly" },
              { step: "Nuclear option: re-add files", detail: "Delete all conflict markers choosing one version, then manually re-add the missing Swift files through Xcode's File → Add Files" },
            ].map(r => (
              <div key={r.step} style={{ marginBottom: 7 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#633806", margin: "0 0 2px" }}>{r.step}</p>
                <p style={{ fontSize: 11, color: "#633806", margin: 0, opacity: 0.85, lineHeight: 1.4 }}>{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 12: PLATFORM GITIGNORE + API KEY WARNING ───
  () => (
    <Shell tag="Platform" timer="5" title="Platform-specific .gitignore — and the API key danger" subtitle="What should never be in your repo" notes="The API key warning is short but important — go to your own GitHub and show how easy it is to search for 'sk-ant' in public repos. Students think 'my repo is private, it's fine' — remind them it's currently private, but if they ever make it public or a collaborator's account is compromised, the key is exposed. The .gitignore content is something students should copy directly — don't type it from memory. Link to GitHub's official gitignore templates. | Sources: GitHub gitignore templates — github.com/github/gitignore (Android.gitignore and Swift.gitignore in this repo). Android gitignore best practices — developer.android.com/build/building-cmdline (mentions local.properties). GitHub secret scanning — docs.github.com/en/code-security/secret-scanning/about-secret-scanning. BFG Repo Cleaner (for scrubbing history) — rtyley.github.io/bfg-repo-cleaner. Git filter-branch for history rewriting — git-scm.com/docs/git-filter-branch.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <CodePane title="Android .gitignore" accent={BLUE}>{`# Built output
/build
/app/build

# Gradle
.gradle/
gradle-wrapper.jar

# Android Studio
*.iml
.idea/
local.properties    # ← CONTAINS API KEYS
captures/
.externalNativeBuild
.cxx/

# Keystore files
*.jks
*.keystore`}</CodePane>
          <CodePane title="iOS .gitignore" accent={GREEN}>{`# Xcode user settings
xcuserdata/
*.xcscmblueprint
*.xccheckout

# Build products
DerivedData/
build/
*.moved-aside

# CocoaPods (if used)
Pods/
Podfile.lock

# Swift Package Manager
.swiftpm/

# Secrets
Secrets.xcconfig  # ← CONTAINS API KEYS
*.xcconfig        # be selective`}</CodePane>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: RED_LIGHT, borderRadius: 10, padding: "12px 14px", border: `1px solid ${RED}33` }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: RED, margin: "0 0 8px" }}>⚠️ If you accidentally pushed an API key</p>
            {[
              { n: 1, t: "Rotate the key immediately", detail: "Go to console.anthropic.com → API keys → revoke it. The old key is now dead. Do this first — before anything else." },
              { n: 2, t: "Add the file to .gitignore", detail: "Prevent it from being committed again." },
              { n: 3, t: "Remove from history (optional)", detail: "Use BFG Repo Cleaner or git filter-branch to scrub the key from all past commits. For a private student repo this is less critical than rotating." },
            ].map(r => (
              <div key={r.n} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
                <span style={{ background: RED, color: "#fff", borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{r.n}</span>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: RED, margin: "0 0 2px" }}>{r.t}</p>
                  <p style={{ fontSize: 11, color: RED, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <Info>{"Copy your platform's .gitignore from github.com/github/gitignore — the official repo maintained by GitHub. Don't type it from memory. These are the files that cause the most security and merge problems when they're accidentally committed."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // ─── 13: THE FULL LOOP ───
  () => (
    <Shell tag="Summary" timer="3" title="The team workflow — the full loop" subtitle="Every piece of work follows this path" notes="This slide is the single thing students should memorise. If they follow this loop, the capstone goes smoothly. If they skip steps — especially 'create an issue first' and 'never commit to main' — it falls apart. Leave this on screen for a full minute and ask students to say the steps back to you. | Sources: GitHub flow — docs.github.com/en/get-started/using-github/github-flow (this slide is essentially GitHub flow). Pro Git workflow chapter — git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, alignItems: "center", margin: "8px 0 16px" }}>
        {[
          { emoji: "📋", label: "Create issue", sub: "GitHub Projects board", color: PURPLE_LIGHT, fg: PURPLE_DARK },
          { arrow: true },
          { emoji: "🌿", label: "Create branch", sub: "feature/issue-name", color: BLUE_LIGHT, fg: BLUE },
          { arrow: true },
          { emoji: "💻", label: "Build + commit", sub: "Clear commit messages", color: TEAL_LIGHT, fg: TEAL_DARK },
          { arrow: true },
          { emoji: "🔀", label: "Open PR", sub: "Closes #issue", color: AMBER_LIGHT, fg: "#633806" },
        ].map((item, i) => item.arrow ? (
          <div key={i} style={{ textAlign: "center", fontSize: 20, color: MUTED }}>→</div>
        ) : (
          <div key={i} style={{ background: item.color, borderRadius: 8, padding: "10px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>{item.emoji}</div>
            <p style={{ fontSize: 11, fontWeight: 700, color: item.fg, margin: "0 0 2px" }}>{item.label}</p>
            <p style={{ fontSize: 10, color: item.fg, margin: 0, opacity: 0.75 }}>{item.sub}</p>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, alignItems: "center" }}>
        {[
          { emoji: "✅", label: "Review + approve", sub: "Teammate reviews", color: GREEN_LIGHT, fg: GREEN },
          { arrow: true },
          { emoji: "🔁", label: "Merge to main", sub: "Squash & merge", color: PURPLE_LIGHT, fg: PURPLE_DARK },
          { arrow: true },
          { emoji: "🗑️", label: "Delete branch", sub: "Keep history clean", color: GRAY, fg: MUTED },
          { arrow: true },
          { emoji: "📋", label: "Close issue", sub: "Auto-closes via PR", color: TEAL_LIGHT, fg: TEAL_DARK },
        ].map((item, i) => item.arrow ? (
          <div key={i} style={{ textAlign: "center", fontSize: 20, color: MUTED }}>→</div>
        ) : (
          <div key={i} style={{ background: item.color, borderRadius: 8, padding: "10px 8px", textAlign: "center" }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>{item.emoji}</div>
            <p style={{ fontSize: 11, fontWeight: 700, color: item.fg, margin: "0 0 2px" }}>{item.label}</p>
            <p style={{ fontSize: 10, color: item.fg, margin: 0, opacity: 0.75 }}>{item.sub}</p>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 14 }}>
        {[
          { rule: "Never commit directly to main", detail: "Always go through a branch and PR — even for tiny changes." },
          { rule: "One issue = one branch = one PR", detail: "Mixing multiple features in one PR makes review impossible." },
          { rule: "Merge often, branch short", detail: "Branches that live more than 2–3 days accumulate conflicts." },
        ].map(r => (
          <div key={r.rule} style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 4px" }}>{r.rule}</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{r.detail}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── 14: LAB INTRO ───
  () => (
    <Shell tag="Lab intro" timer="3" title="Lab time — what you're building" subtitle="~50 minutes · Go to the Lab tab" notes="Keep this to 3 minutes. The lab has two parallel tracks: Git setup for teams who haven't done it yet, and capstone work for teams who are already set up correctly. The goal by end of lab: every team has an org, a protected main branch, a kanban board with their remaining issues, and at least one merged PR from each teammate. | Sources: GitHub flow quickstart — docs.github.com/en/get-started/using-github/github-flow. GitHub Projects quickstart — docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Lab steps — every team member</p>
          {[
            { n: 1, t: "Create the GitHub Organization",              time: "5 min" },
            { n: 2, t: "Move capstone repo into the org",             time: "3 min" },
            { n: 3, t: "Set up branch protection on main",            time: "2 min" },
            { n: 4, t: "Create GitHub Projects kanban board",         time: "5 min" },
            { n: 5, t: "Create issues for your remaining features",   time: "8 min" },
            { n: 6, t: "Each member: create a feature branch",        time: "5 min" },
            { n: 7, t: "Make a small capstone change on the branch",  time: "10 min" },
            { n: 8, t: "Open a PR — teammate reviews and merges",     time: "10 min" },
            { n: 9, t: "Confirm main still compiles after merge",     time: "2 min" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "4px 0", alignItems: "center" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: 4, fontSize: 10, fontWeight: 700, padding: "1px 6px", flexShrink: 0 }}>Step {s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, flex: 1 }}>{s.t}</span>
              <span style={{ fontSize: 11, color: MUTED, flexShrink: 0 }}>{s.time}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 6px" }}>✓ End of lab checkpoint</p>
            <p style={{ fontSize: 12, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Every team member has opened and merged at least one PR. The kanban board has issues for all remaining features. main is protected. TA confirms before you leave.</p>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#633806", margin: "0 0 6px" }}>After setup — use remaining time for capstone</p>
            <p style={{ fontSize: 12, color: "#633806", margin: 0, lineHeight: 1.5 }}>Once the workflow is in place, the rest of lab is unstructured capstone build time. Work on your highest-priority open issue. Use the workflow you just set up.</p>
          </div>
          <div style={{ background: GRAY, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 4px" }}>Stuck? In this order:</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.7 }}>1. Re-read the Lab tab on the course site<br />2. Ask a TA<br />3. Ask Claude</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 15: BREAK ───
  () => (
    <div style={{ background: GRAY, border: "1px solid #e5e7eb", borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", textAlign: "center" }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>☕</div>
      <Tag color="teal">5 minute break</Tag>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: TEXT, margin: "16px 0 8px" }}>Take a break</h2>
      <p style={{ fontSize: 15, color: MUTED, margin: "0 0 28px", maxWidth: 400, lineHeight: 1.6 }}>Stretch, grab water. Lab starts in 5 minutes.</p>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 10, padding: "14px 24px", maxWidth: 420 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 6px" }}>While you wait</p>
        <p style={{ fontSize: 12, color: PURPLE, margin: 0, lineHeight: 1.5 }}>Have your capstone repo open. Step 1 is creating the GitHub Organization — you can start that now at github.com.</p>
      </div>
      <Notes>{"Leave this up for the full 5 minutes. Walk around informally — ask teams about their capstone state and mentally note which ones will need the most help with the org setup during lab."}</Notes>
    </div>
  ),

  // ─── 16: WRAP-UP ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Git for Teams — session complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>You now have the workflow that keeps capstone teams from imploding in the final two weeks.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you covered today</p>
            {[
              "GitHub Organizations — shared team ownership",
              "GitHub Projects kanban — issue tracking",
              "Feature branches — main is always demoable",
              "Branch naming conventions",
              "PR workflow — open, review, merge",
              "Code review that isn't painful",
              "AI for commit messages, PR descriptions, self-review",
              "Merge conflicts — how to read and resolve",
              ".pbxproj conflicts — prevention and resolution",
              "Platform .gitignore + API key safety",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>The three rules to live by</p>
            {[
              { rule: "Never commit directly to main", detail: "Branch → PR → review → merge. Every time." },
              { rule: "One issue = one branch = one PR", detail: "Small, focused changes are easier to review and less likely to conflict." },
              { rule: "Merge often, branch short", detail: "Branches that live more than a few days accumulate conflicts. Ship small, ship often." },
            ].map(r => (
              <div key={r.rule} style={{ marginBottom: 10 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: AMBER, margin: "0 0 3px" }}>{r.rule}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.4 }}>{r.detail}</p>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.12)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.5 }}>From here: every piece of work on your capstone goes through the workflow you set up today. Issue → branch → PR → merge → close issue. That's it.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}>Mobile development in the age of AI · CodePath</p>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "8px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#fff", margin: "0 0 2px" }}>Don't forget</p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Fill out the session survey ✏️</p>
        </div>
      </div>
      <Notes>{"Strong close. Remind students: the workflow feels like overhead now, but the teams that use it consistently are the ones who have a working app to demo on day 10. The teams that don't are the ones debugging merge conflicts at 2am before the deadline."}</Notes>
    </div>
  ),

];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Git for Teams · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>Organizations · Kanban · Branches · PRs · Conflicts</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setCur(c => Math.max(0, c - 1))} disabled={cur === 0} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === 0 ? GRAY : PURPLE_LIGHT, color: cur === 0 ? MUTED : PURPLE, cursor: cur === 0 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>← Prev</button>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 64, textAlign: "center" }}>{cur + 1} / {slides.length}</span>
          <button onClick={() => setCur(c => Math.min(slides.length - 1, c + 1))} disabled={cur === slides.length - 1} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === slides.length - 1 ? GRAY : PURPLE, color: cur === slides.length - 1 ? MUTED : "#fff", cursor: cur === slides.length - 1 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>Next →</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: 26, height: 26, borderRadius: 5, border: `1.5px solid ${i === cur ? PURPLE : "#e5e7eb"}`, background: i === cur ? PURPLE : "#fff", color: i === cur ? "#fff" : MUTED, fontSize: 10, fontWeight: 500, cursor: "pointer" }}>{i + 1}</button>
        ))}
      </div>
      {slides[cur]()}
    </div>
  );
}
