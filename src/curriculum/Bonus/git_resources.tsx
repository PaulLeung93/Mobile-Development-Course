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
const BLUE        = "#185FA5";
const BLUE_LIGHT  = "#E6F1FB";
const MUTED       = "#6b7280";

const Tag = ({ children, color = "purple" }: { children: React.ReactNode; color?: string }) => {
  const map: Record<string, { bg: string; fg: string }> = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806" },
    green:  { bg: GREEN_LIGHT,  fg: GREEN },
    blue:   { bg: BLUE_LIGHT,   fg: BLUE },
  };
  const c = map[color] || map.purple;
  return (
    <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", background: c.bg, color: c.fg, padding: "2px 8px", borderRadius: 20 }}>
      {children}
    </span>
  );
};

type ResourceItem = {
  title: string;
  description: string;
  url: string;
  tag: string;
  tagColor?: string;
};

const ResourceCard = ({ title, description, url, tag, tagColor = "purple" }: ResourceItem) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "block", textDecoration: "none", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, padding: "14px 16px", background: "var(--color-background-primary)", transition: "box-shadow 0.15s, border-color 0.15s", cursor: "pointer" }}
    onMouseOver={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(83,74,183,0.10)"; e.currentTarget.style.borderColor = PURPLE; }}
    onMouseOut={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "var(--color-border-tertiary)"; }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-primary)" }}>{title}</span>
      <Tag color={tagColor}>{tag}</Tag>
    </div>
    <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.6, margin: 0 }}>{description}</p>
    <div style={{ marginTop: 8, fontSize: 11, color: PURPLE }}>{url.replace(/^https?:\/\//, "")}</div>
  </a>
);

type ResourceGroup = {
  heading: string;
  accent: string;
  items: ResourceItem[];
};

const groups: ResourceGroup[] = [
  {
    heading: "Interactive Learning",
    accent: TEAL,
    items: [
      {
        title: "Learn Git Branching",
        description: "The best visual, interactive tool for understanding Git commits, branches, rebasing, and remote workflows. Complete the Introduction Sequence and Push & Pull before your first sprint.",
        url: "https://learngitbranching.js.org/",
        tag: "Interactive",
        tagColor: "teal",
      },
      {
        title: "GitHub Skills",
        description: "Official GitHub learning paths — short, project-based courses covering Introduction to GitHub, Code with Codespaces, Resolve merge conflicts, and more.",
        url: "https://skills.github.com/",
        tag: "Guided Course",
        tagColor: "teal",
      },
    ],
  },
  {
    heading: "Reference & Cheat Sheets",
    accent: PURPLE,
    items: [
      {
        title: "GitHub Git Cheat Sheet",
        description: "One-page PDF from GitHub covering setup, staging, branching, merging, history, and remote commands. Great to keep open during your first few sprints.",
        url: "https://education.github.com/git-cheat-sheet-education.pdf",
        tag: "Cheat Sheet",
        tagColor: "purple",
      },
      {
        title: "Atlassian Git Tutorials",
        description: "Deep-dive articles on every Git concept — branching workflows, rebasing, merging strategies, git reset vs revert, and more. Best resource for understanding the 'why.'",
        url: "https://www.atlassian.com/git/tutorials",
        tag: "Reference",
        tagColor: "purple",
      },
      {
        title: "Pro Git (free book)",
        description: "The definitive Git book, freely available online. Chapters 1–3 cover everything you'll need; Chapter 5 covers distributed workflows relevant to team projects.",
        url: "https://git-scm.com/book/en/v2",
        tag: "Book",
        tagColor: "purple",
      },
    ],
  },
  {
    heading: "GitHub & Team Workflow",
    accent: BLUE,
    items: [
      {
        title: "GitHub Flow",
        description: "GitHub's own guide to the simple branch → PR → merge workflow that your capstone team will follow. Short read, high impact.",
        url: "https://docs.github.com/en/get-started/using-github/github-flow",
        tag: "Workflow",
        tagColor: "blue",
      },
      {
        title: "GitHub Organizations Docs",
        description: "Official documentation for managing org members, roles, repository permissions, and team access. Reference this during your GitHub Org Lab setup.",
        url: "https://docs.github.com/en/organizations",
        tag: "Docs",
        tagColor: "blue",
      },
      {
        title: "Protecting Branches",
        description: "How to configure branch protection rules — requiring PRs, status checks, and review approvals before merging to main.",
        url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
        tag: "Docs",
        tagColor: "blue",
      },
      {
        title: "Conventional Commits",
        description: "A lightweight convention for writing commit messages (feat:, fix:, chore:, etc.) that makes your git history readable and enables automatic changelog generation.",
        url: "https://www.conventionalcommits.org/",
        tag: "Convention",
        tagColor: "blue",
      },
    ],
  },
  {
    heading: "Mobile-Specific",
    accent: "#EF9F27",
    items: [
      {
        title: "gitignore.io",
        description: "Generate a .gitignore for any combination of platforms and tools. Select Android, macOS, Kotlin, Swift, Xcode, or Android Studio to get the right file for your project.",
        url: "https://www.toptal.com/developers/gitignore",
        tag: "Tool",
        tagColor: "amber",
      },
      {
        title: "Handling .pbxproj Conflicts",
        description: "Stack Overflow thread on the most common iOS-specific merge conflict. Bookmark this — you will hit it.",
        url: "https://stackoverflow.com/questions/6431577/best-practices-for-pbxproj-merge-conflicts",
        tag: "iOS",
        tagColor: "amber",
      },
    ],
  },
];

export default function GitResources() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 24px", fontFamily: "var(--font-sans, 'Inter', sans-serif)", color: "var(--color-text-primary)" }}>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <Tag color="purple">Bonus</Tag>
          <Tag color="blue">Resources</Tag>
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px" }}>Git & GitHub Resources</h1>
        <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.6 }}>
          A curated set of references, tools, and guides for your capstone and beyond. Organized by category — interactive learning first, reference materials after.
        </p>
      </div>

      {/* Resource Groups */}
      {groups.map(group => (
        <div key={group.heading} style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 3, height: 18, borderRadius: 2, background: group.accent }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-primary)" }}>{group.heading}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 10 }}>
            {group.items.map(item => (
              <ResourceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}
