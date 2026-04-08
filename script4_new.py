import re

with open('src/curriculum/Week 4/week4_unit.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace components block at top
header_start = text.find('const Callout = ({ type, children }) => {')
if header_start == -1:
    header_start = text.find('const TABS = ')
    header_start = text.find('\n\n', header_start) + 2

header_end = text.find('function Overview() {')

new_components = """const PLATFORMS = ["Android", "iOS"];

/* ── colors ── */
const P_C = "#534AB7";
const BL = "#0C447C", BLL = "#E6F1FB";
const GR = "#27500A", GRL = "#EAF3DE";

/* ── shared components ── */
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

const CodeB = ({ title, accent, children }: { title?: string; accent?: string; children: React.ReactNode }) => (
  <div style={{ margin: "10px 0" }}>
    {title && <div style={{ background: accent || P_C, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0" }}>{title}</div>}
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11.5, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Checkpoint = ({ num, children }: { num: number | string; children: React.ReactNode }) => (
  <div style={{ margin: "14px 0", padding: "10px 14px", background: "#E8FCE8", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <strong>{"🎯"} Checkpoint {num}:</strong> {children}
  </div>
);

const AiOpp = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>{"✨"} AI Opportunity</div>
    {children}
  </div>
);

const Warn = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E6", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #EF9F27" }}>
    {"⚠️"} {children}
  </div>
);

const Tip = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>
    {"💡"} {children}
  </div>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: "#E6F1FB", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #B5D4F4" }}>
    {"ℹ️"} {children}
  </div>
);

const Step = ({ num, title, children }: { num: number | string; title: string; children: React.ReactNode }) => (
  <div style={{ margin: "18px 0" }}>
    <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step {num}: {title}</h4>
    <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
  </div>
);

const IC = ({ children }: { children: React.ReactNode }) => (
  <code style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 4, padding: "1px 5px", fontSize: 12 }}>{children}</code>
);

const Checkbox = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "6px 0", fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.5 }}>
    <div style={{ width: 14, height: 14, border: "1.5px solid var(--color-border-secondary)", borderRadius: 3, flexShrink: 0, marginTop: 2 }} />
    <span>{children}</span>
  </div>
);

const UL = ({ items }: { items: React.ReactNode[] }) => (
  <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2, paddingLeft: 20 }}>
    {items.map((t, i) => <li key={i}>{t}</li>)}
  </ul>
);

const PlatformToggle = ({ platform, setPlatform }: { platform: string; setPlatform: (p: string) => void }) => (
  <div style={{ display: "flex", gap: 0, margin: "12px 0", borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
    {PLATFORMS.map(p => (
      <button key={p} onClick={() => setPlatform(p)} style={{
        padding: "6px 18px", fontSize: 12, fontWeight: 500, border: "none", cursor: "pointer",
        background: platform === p ? (p === "Android" ? BLL : GRL) : "var(--color-background-primary)",
        color: platform === p ? (p === "Android" ? BL : GR) : "var(--color-text-secondary)"
      }}>{p === "Android" ? "🤖 Android" : "🍎 iOS"}</button>
    ))}
  </div>
);

"""

text = text[:header_start] + new_components + text[header_end:]

# Turn <Step n="X"> into <Checkbox>
text = re.sub(r'<Step n="(\d+)">(.*?)</Step>', r'<Checkbox>\2</Checkbox>', text, flags=re.DOTALL)

# Header upgrades
text = re.sub(r'<H1>(.*?)</H1>', r'<h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>\1</h1>', text)
text = re.sub(r'<h1 style={{ fontSize: 22(.*?)\}}>(.*?)</h1>', r'<h1 style={{ fontSize: 20\1}}>\2</h1>', text)
text = re.sub(r'<H2>Step (\d+) [—-] (.*?)</H2>', r'<h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step \1: \2</h4>', text)
text = re.sub(r'<H2>(.*?)</H2>', r'<h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>\1</h2>', text)
text = re.sub(r'<H3>(.*?)</H3>', r'<h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>\1</h4>', text)
text = re.sub(r'<P>', r'<p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>', text)
text = re.sub(r'</P>', r'</p>', text)
text = re.sub(r'<P style={{(.*?)}}>', r'<p style={{\1}}>', text)

text = re.sub(r'<Callout type="checkpoint">Checkpoint (\d+|Final): (.*?)</Callout>', r'<Checkpoint num="\1">\2</Checkpoint>', text, flags=re.DOTALL)
text = re.sub(r'<Callout type="checkpoint">(.*?)</Callout>', r'<Checkpoint num="?">\1</Checkpoint>', text, flags=re.DOTALL)
text = re.sub(r'<Callout type="danger">(.*?)</Callout>', r'<Warn>\1</Warn>', text, flags=re.DOTALL)
text = re.sub(r'<Callout type="info">(.*?)</Callout>', r'<Note>\1</Note>', text, flags=re.DOTALL)
text = re.sub(r'<Callout type="tip">(.*?)</Callout>', r'<Tip>\1</Tip>', text, flags=re.DOTALL)
text = re.sub(r'<Callout type="warning">(.*?)</Callout>', r'<Warn>\1</Warn>', text, flags=re.DOTALL)
text = re.sub(r'<Callout type="ai">(.*?)</Callout>', r'<AiOpp>\1</AiOpp>', text, flags=re.DOTALL)

text = text.replace('<CodeBlock>', '<CodeB>')
text = text.replace('</CodeBlock>', '</CodeB>')
text = text.replace('<Code>', '<IC>')
text = text.replace('</Code>', '</IC>')

text = re.sub(r'<Hint title="(.*?)">(.*?)</Hint>', r'<Tip><b>\1</b> \2</Tip>', text, flags=re.DOTALL)

with open('src/curriculum/Week 4/week4_unit.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
