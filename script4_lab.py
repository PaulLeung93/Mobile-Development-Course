import re

with open('src/curriculum/Week 4/week4_unit.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Lab component update
lab_new = """function Lab() {
  const [step, setStep] = useState(0);
  const [platform, setPlatform] = useState("Android");

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid var(--color-border-tertiary)", paddingBottom: 16, marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <PlatformToggle platform={platform} setPlatform={setPlatform} />
        </div>
        
        <div style={{ display: "flex", background: "var(--color-background-secondary)", padding: 4, borderRadius: 10 }}>
          {["Session 1", "Session 2"].map((s, i) => (
            <button key={s} onClick={() => setStep(i)} style={{ padding: "6px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", background: step === i ? "var(--color-background-primary)" : "transparent", color: step === i ? "var(--color-text-primary)" : "var(--color-text-secondary)", border: "none", boxShadow: step === i ? "0 1px 3px rgba(0,0,0,0.1)" : "none" }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {step === 0 ? <Session1Lab platform={platform} /> : <Session2Lab platform={platform} />}
    </div>
  );
}"""

# Need to replace the old Lab() definition.
text = re.sub(r'function Lab\(\) \{.*?(?=function Project\(\))', lab_new + '\n\n', text, flags=re.DOTALL)

# Add platform prop
text = re.sub(r'function Session1Lab\(\) \{', r'function Session1Lab({ platform }: { platform: string }) {', text)
text = re.sub(r'function Session2Lab\(\) \{', r'function Session2Lab({ platform }: { platform: string }) {', text)

with open('src/curriculum/Week 4/week4_unit.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
