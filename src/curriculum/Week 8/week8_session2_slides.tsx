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
const CAP_C       = "#993C1D";
const CAP_BG      = "#FAECE7";

const Tag = ({ children, color = "purple" }) => {
  const map = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806" },
    blue:   { bg: BLUE_LIGHT,   fg: BLUE },
    green:  { bg: GREEN_LIGHT,  fg: GREEN },
    red:    { bg: RED_LIGHT,    fg: RED },
    cap:    { bg: CAP_BG,       fg: CAP_C },
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
        <Tag color="purple">Week 8 · S2</Tag>
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

const slides = [

  // ─── 1: TITLE ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 600, background: BLUE_LIGHT, color: BLUE, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>Android track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: GREEN_LIGHT, color: GREEN, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>iOS track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: AMBER_LIGHT, color: "#633806", padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>AI feature</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: CAP_BG, color: CAP_C, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>M3 check-ins today</span>
        </div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 8 · Session 2</p>
        <h1 style={{ fontSize: 32, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.15 }}>On-device generative AI</h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Extending MLScanner with the Gallery Analyzer</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "Session 1 recap — scanner, labels, OCR",
            "Narrow ML vs generative ML — what changes",
            "Gemini Nano deep dive — Android AI Core",
            "Apple Intelligence deep dive — on-device LLM on Apple Silicon",
            "The two-stage pipeline — ML labels → language model",
            "Live code-along: build the Gallery Analyzer tab",
            "Airplane mode demo — verify zero network calls",
            "Cloud vs on-device comparison — same photo, both APIs",
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

  // ─── 2: RECAP ───
  () => (
    <Shell tag="Recap" timer="3" title="Session 1 — what you built" notes="Keep this tight — 3 minutes max. The goal is to confirm everyone has a working MLScanner with the Gallery tab stubbed. If students didn't finish Session 1, they should use the first 10 minutes of today's lab to catch up to the checkpoint before their M3 check-in. Don't let the recap balloon — students who finished are eager to build. | Sources: CameraX ImageAnalysis — developer.android.com/training/camerax/analyze. ML Kit image labeling — developers.google.com/ml-kit/vision/image-labeling/android. VNClassifyImageRequest — developer.apple.com/documentation/vision/vnclassifyimagerequest. VNRecognizeTextRequest — developer.apple.com/documentation/vision/vnrecognizetextrequest.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { title: "Scanner tab ✓", items: ["Live camera feed running", "Image labeling overlay at ~4fps", "Text recognition (OCR) mode", "ScanMode enum + toggle UI"], color: TEAL_LIGHT, fg: TEAL_DARK },
          { title: "Architecture ✓", items: ["Permission wrapper pattern", "ImageAnalysis / AVCaptureOutput", "ViewModel holds label state", "UI reacts to StateFlow / @Published"], color: PURPLE_LIGHT, fg: PURPLE_DARK },
          { title: "Today's starting point", items: ["Gallery tab exists but is a placeholder", "Bottom nav / TabView wired up", "Open MLScanner now — don't create a new project", "Session 2 builds directly on Session 1"], color: AMBER_LIGHT, fg: "#633806" },
        ].map(col => (
          <div key={col.title} style={{ background: col.color, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: col.fg, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".05em" }}>{col.title}</p>
            {col.items.map(t => <Bullet key={t}>{t}</Bullet>)}
          </div>
        ))}
      </div>
      <Discussion>{"You built a real-time ML scanner. The model ran on your phone with no internet. Today: what if instead of just labeling objects, you could ask the phone to describe the scene in natural language — still with no internet?"}</Discussion>
    </Shell>
  ),

  // ─── 3: AGENDA ───
  () => (
    <Shell tag="Agenda" title="Today's session — 55 min lecture" notes="Session 2 has a tighter lecture window than Session 1 because M3 check-ins eat into lab time. The conceptual slides (narrow ML vs generative ML, Gemini Nano, Apple Intelligence) are meaty — but the two-stage pipeline slide is the key insight students need to write the code. Don't rush it. The airplane mode demo should feel like a moment — let the room react before moving on. | Sources: Gemini Nano overview — developer.android.com/ai/gemini-nano. Apple Intelligence overview — developer.apple.com/apple-intelligence. Android AI Core — developer.android.com/ai/overview.">
      {[
        { time: "0:00–0:03", label: "Recap",                       desc: "Session 1 — scanner working, Gallery tab stubbed",           section: null },
        { time: "0:03–0:09", label: "Narrow ML vs generative ML",  desc: "What changes when the model can generate text",              section: null },
        { time: "0:09–0:18", label: "Gemini Nano deep dive",       desc: "Android AI Core, architecture, capabilities, device support", section: "android" },
        { time: "0:18–0:27", label: "Apple Intelligence deep dive", desc: "On-device LLM, Apple Silicon requirement, Writing Tools API", section: "ios" },
        { time: "0:27–0:34", label: "The two-stage pipeline",      desc: "ML labels → generative model — why this pattern exists",     section: null },
        { time: "0:34–0:46", label: "Live code-along",             desc: "Gallery tab: photo picker → pipeline → result card",         section: "code" },
        { time: "0:46–0:50", label: "Airplane mode demo",          desc: "Live verification — same result, zero network calls",        section: "demo" },
        { time: "0:50–0:55", label: "Lab intro + M3 reminder",     desc: "Lab steps + capstone check-in logistics",                   section: "lab" },
      ].map(r => (
        <div key={r.time} style={{
          display: "flex", gap: 12, padding: "8px 6px",
          borderBottom: `0.5px solid ${GRAY}`,
          background: r.section === "android" ? BLUE_LIGHT + "88"
            : r.section === "ios"     ? GREEN_LIGHT + "88"
            : r.section === "code"    ? PURPLE_LIGHT
            : r.section === "demo"    ? TEAL_LIGHT
            : r.section === "lab"     ? CAP_BG
            : "transparent",
          borderRadius: r.section ? 6 : 0,
          paddingLeft: r.section ? 8 : 6,
        }}>
          <span style={{ fontSize: 12, minWidth: 90, flexShrink: 0, color: r.section ? PURPLE_DARK : MUTED, fontWeight: r.section ? 600 : 400 }}>{r.time}</span>
          <span style={{ fontSize: 12, fontWeight: 600, minWidth: 168, flexShrink: 0, color: r.section === "android" ? BLUE : r.section === "ios" ? GREEN : r.section === "code" ? PURPLE_DARK : r.section === "demo" ? TEAL_DARK : r.section === "lab" ? CAP_C : PURPLE }}>{r.label}</span>
          <span style={{ fontSize: 12, color: r.section === "android" ? BLUE : r.section === "ios" ? GREEN : r.section === "code" ? PURPLE_DARK : r.section === "demo" ? TEAL_DARK : r.section === "lab" ? CAP_C : TEXT }}>{r.desc}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: 12, marginTop: 10, flexWrap: "wrap" }}>
        {[
          { color: BLUE,    label: "Android" },
          { color: GREEN,   label: "iOS" },
          { color: PURPLE,  label: "Code-along" },
          { color: TEAL,    label: "Demo" },
          { color: CAP_C,   label: "Lab / M3" },
        ].map(l => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
            <span style={{ fontSize: 11, color: MUTED }}>{l.label}</span>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── 4: NARROW ML VS GENERATIVE ML ───
  () => (
    <Shell tag="Concept" timer="6" title="Narrow ML vs generative ML — what actually changes" subtitle="Session 1 and Session 2 are doing fundamentally different things on the same device" notes="This is the conceptual bridge between the two sessions. Students need to understand that ML Kit / Vision are discriminative models — they output a fixed set of labels from a closed vocabulary. Generative models output arbitrary tokens — they can say anything. The tradeoff: generative models are vastly more expressive but also larger, slower, and more hardware-constrained. The analogy: narrow ML is a multiple-choice exam, generative ML is an open-ended essay question. | Sources: Discriminative vs generative models — Goodfellow et al. 'Deep Learning' textbook ch. 1 (available free at deeplearningbook.org). Gemini Nano model card — deepmind.google/technologies/gemini/nano. Apple Intelligence technical overview — machinelearning.apple.com/research/apple-intelligence.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <div style={{ background: TEAL_LIGHT, borderRadius: "8px 8px 0 0", padding: "8px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: 0 }}>Session 1 — Narrow / Discriminative ML</p>
          </div>
          <div style={{ border: `1px solid ${TEAL_LIGHT}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "12px 14px" }}>
            {[
              { q: "What does it output?",      a: "A label from a fixed vocabulary. 'Coffee cup', 'Dog', 'Car'. Always one of the known categories." },
              { q: "Model size?",               a: "Tiny — ML Kit image labeler is ~3MB downloaded via Play Services." },
              { q: "Works on which devices?",   a: "Virtually every Android and iOS device — no special hardware needed." },
              { q: "Example question it answers", a: "'What object is in this image?' → 'Coffee cup (94%)'" },
              { q: "Speed?",                    a: "~20ms per frame. Fast enough to run 30fps without throttling." },
            ].map(row => (
              <div key={row.q} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 2px" }}>{row.q}</p>
                <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, opacity: 0.85, lineHeight: 1.4 }}>{row.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: "8px 8px 0 0", padding: "8px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: 0 }}>Session 2 — Generative ML</p>
          </div>
          <div style={{ border: `1px solid ${PURPLE_LIGHT}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "12px 14px" }}>
            {[
              { q: "What does it output?",      a: "Arbitrary text tokens. It can say anything — descriptions, summaries, questions, code. Open vocabulary." },
              { q: "Model size?",               a: "Gemini Nano: ~1.8B parameters. Still small — but requires dedicated NPU hardware and ~1GB storage." },
              { q: "Works on which devices?",   a: "Hardware-gated — Pixel 8+ (Android), iPhone 15 Pro+ (Apple Intelligence). Fallback always required." },
              { q: "Example question it answers", a: "'What is in this image?' → 'A ceramic coffee mug sits on a wooden desk next to an open laptop, suggesting a work-from-home setup.'" },
              { q: "Speed?",                    a: "300–800ms for a short response. Token generation takes time even on-device." },
            ].map(row => (
              <div key={row.q} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 2px" }}>{row.q}</p>
                <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, opacity: 0.85, lineHeight: 1.4 }}>{row.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Info>{"The key shift: Session 1 answers a fixed question about an image. Session 2 answers an open-ended question. Same device, same no-internet guarantee — completely different capability."}</Info>
    </Shell>
  ),

  // ─── 5: GEMINI NANO DEEP DIVE ───
  () => (
    <Shell tag="Android" tagColor="blue" timer="9" title="Gemini Nano — Android AI Core deep dive" subtitle="Google's on-device LLM for Android" notes="Gemini Nano is the most interesting Android AI story in years — but it's also the most complex to explain because of the three-layer architecture (model / AICore / your app). The key insight students need: Gemini Nano is a system service, not an APK dependency. Google controls the model version, the download, and the runtime. Your app is just a client. This is why it only works on approved devices — Google has to certify each OEM's hardware can run the model safely. | Sources: Gemini Nano overview — developer.android.com/ai/gemini-nano. Android AI Core architecture — developer.android.com/ai/overview. Gemini Nano supported devices — developer.android.com/ai/gemini-nano#supported-devices. Google I/O 2024 Gemini Nano talk — io.google/2024/program (search 'Gemini Nano'). Gemini Nano model card (1.8B params, context window) — deepmind.google/technologies/gemini/nano. Google AI Edge SDK — ai.google.dev/edge.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: BLUE_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, margin: "0 0 8px" }}>What is Gemini Nano?</p>
            {[
              { label: "Type",        val: "Decoder-only language model — generates tokens one at a time" },
              { label: "Size",        val: "~1.8 billion parameters. Smallest of the Gemini family." },
              { label: "Context",     val: "~2,048 token context window (vs Claude's 200K)" },
              { label: "Capability",  val: "Summarization, short Q&A, rewriting, classification by prompt" },
              { label: "Limitation",  val: "Text only — no vision input (unlike the cloud Gemini models)" },
            ].map(r => (
              <div key={r.label} style={{ display: "flex", gap: 8, padding: "4px 0", borderBottom: `0.5px solid ${BLUE_LIGHT}` }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: BLUE, minWidth: 80, flexShrink: 0 }}>{r.label}</span>
                <span style={{ fontSize: 11, color: BLUE, opacity: 0.85, lineHeight: 1.4 }}>{r.val}</span>
              </div>
            ))}
          </div>
          <div style={{ background: GRAY, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "0 0 8px" }}>Supported devices (as of 2025)</p>
            {[
              { device: "Pixel 8, 8 Pro, 8a",    chip: "Google Tensor G3" },
              { device: "Pixel 9, 9 Pro, 9 Pro XL", chip: "Google Tensor G4" },
              { device: "Samsung Galaxy S24 series", chip: "Snapdragon 8 Gen 3" },
              { device: "More via partner program", chip: "Requires NPU certification" },
            ].map(d => (
              <div key={d.device} style={{ display: "flex", gap: 8, margin: "4px 0" }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: PURPLE, minWidth: 170, flexShrink: 0 }}>{d.device}</span>
                <span style={{ fontSize: 11, color: MUTED }}>{d.chip}</span>
              </div>
            ))}
            <p style={{ fontSize: 11, color: MUTED, margin: "8px 0 0", fontStyle: "italic" }}>Verify current list at developer.android.com/ai/gemini-nano — Google updates this regularly.</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: BLUE_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, margin: "0 0 8px" }}>How Android AI Core works</p>
            <p style={{ fontSize: 11, color: BLUE, margin: "0 0 10px", lineHeight: 1.5 }}>Unlike ML Kit (models bundled via Play Services), Gemini Nano is a <strong>system service</strong> managed entirely by Google:</p>
            {[
              { n: "1", step: "Google certifies the device hardware (NPU specs, RAM, storage)" },
              { n: "2", step: "Android AI Core service is pre-installed or pushed via system update" },
              { n: "3", step: "Gemini Nano model (~1GB) is downloaded separately via AI Core — NOT in your APK" },
              { n: "4", step: "Your app calls the AI Core API — Google controls the model version and runtime" },
              { n: "5", step: "Inference happens on the NPU — your app never touches the model weights directly" },
            ].map(s => (
              <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
                <span style={{ background: BLUE, color: "#fff", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>{s.n}</span>
                <span style={{ fontSize: 11, color: BLUE, lineHeight: 1.4 }}>{s.step}</span>
              </div>
            ))}
          </div>
          <Warn>{"Gemini Nano is still in developer preview (experimental API). The SDK string 'aicore:0.0.1-exp01' signals this. Always build a fallback path — the API can change between releases. Source: developer.android.com/ai/gemini-nano#availability."}</Warn>
        </div>
      </div>
    </Shell>
  ),

  // ─── 6: APPLE INTELLIGENCE DEEP DIVE ───
  () => (
    <Shell tag="iOS" tagColor="green" timer="9" title="Apple Intelligence — on-device generative AI deep dive" subtitle="Apple's approach: private, on-device, deeply integrated into the OS" notes="Apple's approach is philosophically different from Google's. Google exposes Gemini Nano as a general-purpose text API your app can call freely. Apple exposes specific capabilities (summarize, rewrite, proofread) through system UI — Writing Tools. Your app doesn't call an LLM directly; it hooks into the system's text pipeline. This is more limited for custom use cases but means Apple can guarantee privacy and quality more tightly. The Private Cloud Compute story is also worth mentioning — when on-device isn't enough, Apple routes to servers it operates with a no-persistence guarantee. | Sources: Apple Intelligence overview — apple.com/apple-intelligence. WWDC 2024 — 'Introducing Apple Intelligence' session — developer.apple.com/videos/play/wwdc2024/101. Writing Tools API (UIWritingToolsCoordinator) — developer.apple.com/documentation/uikit/uiwritingtoolscoordinator. Apple Intelligence device requirements — support.apple.com/en-us/111900. Private Cloud Compute technical summary — security.apple.com/blog/private-cloud-compute. Apple Intelligence privacy overview — apple.com/privacy/docs/Apple_Intelligence_Privacy_Overview.pdf. Foundation Models framework (iOS 26) — developer.apple.com/documentation/foundationmodels (note: may not be available in current iOS — verify before class).">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: GREEN_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, margin: "0 0 8px" }}>What is Apple Intelligence?</p>
            {[
              { label: "Type",       val: "Family of on-device models — not a single LLM. Each task has a specialized model." },
              { label: "Capability", val: "Summarization, rewriting, proofreading, priority mail detection, Siri enhancements" },
              { label: "Privacy",    val: "Processes on-device by default. When cloud is needed, uses Private Cloud Compute." },
              { label: "Devices",    val: "iPhone 15 Pro / iPhone 16+ (A17 Pro or M-series chip required)" },
              { label: "Languages",  val: "English initially; expanding in iOS 18.x updates" },
            ].map(r => (
              <div key={r.label} style={{ display: "flex", gap: 8, padding: "4px 0", borderBottom: `0.5px solid ${GREEN_LIGHT}` }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: GREEN, minWidth: 80, flexShrink: 0 }}>{r.label}</span>
                <span style={{ fontSize: 11, color: GREEN, opacity: 0.85, lineHeight: 1.4 }}>{r.val}</span>
              </div>
            ))}
          </div>
          <div style={{ background: GRAY, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "0 0 8px" }}>Private Cloud Compute — when on-device isn't enough</p>
            <p style={{ fontSize: 11, color: MUTED, margin: "0 0 6px", lineHeight: 1.5 }}>For tasks too complex for the on-device model, Apple routes to their own servers with a hard guarantee:</p>
            {[
              "Request data is never stored or logged",
              "Apple employees cannot access the data",
              "Cryptographic verification of server code",
              "Third-party security researchers can audit",
            ].map(t => <Bullet key={t} check>{t}</Bullet>)}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: GREEN_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, margin: "0 0 8px" }}>How Apple Intelligence differs from Gemini Nano</p>
            {[
              { dim: "API style",       nano: "General text-in / text-out. You write the prompt.", apple: "System capabilities (summarize, rewrite, proofread). Fixed task types." },
              { dim: "Integration",     nano: "Your app calls an SDK directly", apple: "OS-level — Writing Tools appear in any text view automatically" },
              { dim: "Custom prompts",  nano: "Yes — you control the full prompt", apple: "Limited — you hook into system tasks, not free-form prompts" },
              { dim: "Privacy model",   nano: "On-device, Google controls the runtime", apple: "On-device + Private Cloud Compute with no-persistence guarantee" },
            ].map(r => (
              <div key={r.dim} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: GREEN, margin: "0 0 2px" }}>{r.dim}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                  <p style={{ fontSize: 10, color: BLUE, background: BLUE_LIGHT, borderRadius: 4, padding: "3px 6px", margin: 0, lineHeight: 1.4 }}>Nano: {r.nano}</p>
                  <p style={{ fontSize: 10, color: GREEN, background: GREEN_LIGHT + "99", borderRadius: 4, padding: "3px 6px", margin: 0, lineHeight: 1.4 }}>Apple: {r.apple}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#633806", margin: "0 0 6px" }}>⚠️ For this lab</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>{"Apple Intelligence Writing Tools integrate at the OS level — the API attaches to any UITextView/TextEditor. For our Gallery Analyzer we'll use Vision classification (Session 1 pattern) as Stage 1 and format the labels as a structured on-device result. Students on unsupported devices follow the same fallback path."}</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 7: THE TWO-STAGE PIPELINE ───
  () => (
    <Shell tag="Concept" timer="7" title="The two-stage pipeline" subtitle="Why we chain ML labeling into the generative model — not send the image directly" notes="This is the most important architectural slide of the session. Students will ask: why not just send the photo straight to Gemini Nano? The answer has two parts: (1) Gemini Nano is text-only — it has no vision input, so you can't send pixels at all. (2) Even on models that do accept images on-device, it's more efficient to reduce a photo to a compact text description first. This pattern — extract structured data with a fast narrow model, then enrich with a slower generative model — appears in production ML pipelines constantly. | Sources: Gemini Nano text-only constraint — deepmind.google/technologies/gemini/nano ('designed for on-device text tasks'). ML Kit image labeling output format — developers.google.com/ml-kit/reference/android/com/google/mlkit/vision/label/ImageLabel. Vision VNClassificationObservation — developer.apple.com/documentation/vision/vnclassificationobservation. Two-stage ML pipelines (general) — developers.google.com/machine-learning/guides/rules-of-ml (Rule 38: 'Don't overthink your feature').">
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
        {/* Pipeline diagram */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, margin: "0 0 14px" }}>
          {[
            { label: "📷 Photo", sub: "From gallery", color: GRAY, fg: TEXT, width: "15%" },
            { arrow: true },
            { label: "Stage 1", sub: "ML Kit / Vision\nClassify image\n~20ms", color: TEAL_LIGHT, fg: TEAL_DARK, width: "22%" },
            { arrow: true, note: "Labels + confidence" },
            { label: "Stage 2", sub: "Gemini Nano /\nApple Intelligence\nGenerate description\n300–800ms", color: PURPLE_LIGHT, fg: PURPLE_DARK, width: "22%" },
            { arrow: true },
            { label: "🗒️ Result", sub: "Natural language\ndescription", color: GRAY, fg: TEXT, width: "15%" },
          ].map((item, i) => item.arrow ? (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: 18, color: MUTED }}>→</div>
              {item.note && <span style={{ fontSize: 9, color: MUTED, textAlign: "center", lineHeight: 1.3 }}>{item.note}</span>}
            </div>
          ) : (
            <div key={i} style={{ width: item.width, background: item.color, borderRadius: 8, padding: "10px 8px", textAlign: "center" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: item.fg, margin: "0 0 4px" }}>{item.label}</p>
              <p style={{ fontSize: 10, color: item.fg, margin: 0, lineHeight: 1.5, opacity: 0.8, whiteSpace: "pre-line" }}>{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Why this pattern */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Why not send the photo directly to Gemini Nano?</p>
            {[
              { reason: "Gemini Nano is text-only", detail: "Unlike cloud Gemini models, the on-device version has no vision encoder. It cannot process pixels — only text tokens." },
              { reason: "Efficiency", detail: "A photo is megabytes of pixel data. A label list ('coffee cup 94%, laptop 89%') is a few dozen tokens. Stage 2 runs much faster on the compressed representation." },
              { reason: "Context window limits", detail: "Gemini Nano has a ~2K token context window. A raw image-to-text encoding would consume most of it before you even add your prompt." },
            ].map(r => (
              <div key={r.reason} style={{ background: RED_LIGHT, borderRadius: 8, padding: "8px 10px", marginBottom: 6 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: RED, margin: "0 0 3px" }}>✗ {r.reason}</p>
                <p style={{ fontSize: 11, color: RED, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{r.detail}</p>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What Stage 1 feeds into Stage 2</p>
            <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "10px 14px", marginBottom: 8 }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: "#7c93b8", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Stage 1 output (ML Kit / Vision)</p>
              <pre style={{ margin: 0, color: "#cdd6f4", fontSize: 11, lineHeight: 1.6, fontFamily: "monospace" }}>{`coffee cup (94%)
laptop computer (89%)
wooden desk (78%)
notebook (61%)
pen (52%)`}</pre>
            </div>
            <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "10px 14px" }}>
              <p style={{ fontSize: 10, fontWeight: 600, color: "#7c93b8", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Prompt to Gemini Nano (Stage 2)</p>
              <pre style={{ margin: 0, color: "#cdd6f4", fontSize: 11, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`On-device ML detected:
coffee cup (94%), laptop (89%),
wooden desk (78%).

Write a natural 2-sentence
description of this scene.`}</pre>
            </div>
          </div>
        </div>
      </div>
      <Info>{"This two-stage pattern — fast narrow model feeds a slower generative model — appears constantly in production ML systems. You're learning a real architectural pattern, not just a lab exercise."}</Info>
    </Shell>
  ),

  // ─── 8: CODE-ALONG INTRO ───
  () => (
    <Shell tag="Live code-along" timer="12" title="Let's build — the Gallery Analyzer tab" subtitle="Open MLScanner from Session 1. Go to the Gallery tab." dark notes="No new project. Students open the MLScanner they built in Session 1. The Gallery tab should already have a placeholder screen. Today's code-along fills that in. Build Android first, then iOS. The GalleryViewModel is a new file — create it first, then wire it to the existing tab. Remind students: if Session 1 isn't complete, spend the first 10 minutes of lab finishing the checkpoint, then join the M3 check-in. | Sources: ActivityResultContracts.PickVisualMedia — developer.android.com/training/data-storage/shared/photopicker. PhotosPicker SwiftUI — developer.apple.com/documentation/photokit/photospicker. PickVisualMediaRequest — developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { n: "01", title: "Create GalleryViewModel", sub: "selectedBitmap / selectedImage state, isLoading, analysisResult", time: "3 min" },
          { n: "02", title: "Build the Gallery UI", sub: "Image preview box, gallery picker button, analyze button, result card", time: "5 min" },
          { n: "03", title: "Wire up gallery photo picker", sub: "PickVisualMedia (Android) / PhotosPicker (iOS)", time: "4 min" },
          { n: "04", title: "Stage 1 — ML labels from photo", sub: "ML Kit fromBitmap / VNImageRequestHandler on selected image", time: "5 min" },
          { n: "05", title: "Stage 2 — Gemini Nano / Apple Intelligence", sub: "Pass label text as prompt to on-device generative model", time: "7 min" },
          { n: "06", title: "Availability check + fallback", sub: "Handle unsupported devices gracefully — display labels directly", time: "3 min" },
          { n: "07", title: "Wire to the Gallery tab", sub: "Replace placeholder with GalleryScreen / GalleryView", time: "1 min" },
        ].map(s => (
          <div key={s.n} style={{ display: "flex", gap: 10, padding: "9px 11px", background: "rgba(255,255,255,0.1)", borderRadius: 8, alignItems: "flex-start" }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: "rgba(255,255,255,0.3)", flexShrink: 0, lineHeight: 1, minWidth: 22 }}>{s.n}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#fff", margin: 0 }}>{s.title}</p>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", flexShrink: 0, marginLeft: 8 }}>{s.time}</span>
              </div>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", margin: "2px 0 0", lineHeight: 1.3 }}>{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── 9: CODE — GALLERY UI + PHOTO PICKER ───
  () => (
    <Shell tag="Live code-along" timer="5" title="Part 1 — Gallery UI and photo picker" notes="The gallery picker API changed significantly in Android 13+ — use ActivityResultContracts.PickVisualMedia (the new Photo Picker) rather than the old ACTION_PICK intent. It's scoped storage-safe and gives a better UX. On iOS, PhotosPicker is the modern SwiftUI-native API (iOS 16+) — don't use UIImagePickerController for new apps. | Sources: Android Photo Picker — developer.android.com/training/data-storage/shared/photopicker. PickVisualMedia contract — developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia. PhotosPicker SwiftUI docs — developer.apple.com/documentation/photokit/photospicker. PhotosPickerItem.loadTransferable — developer.apple.com/documentation/photokit/photospickeritem/loadtransferable(type:).">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Android — GalleryScreen.kt" accent={BLUE}>{`@Composable
fun GalleryScreen(vm: GalleryViewModel = viewModel()) {
    val bitmap  by vm.selectedBitmap.collectAsState()
    val result  by vm.analysisResult.collectAsState()
    val loading by vm.isLoading.collectAsState()

    val picker = rememberLauncherForActivityResult(
        ActivityResultContracts.PickVisualMedia()
    ) { uri -> uri?.let { vm.loadBitmap(it) } }

    Column(Modifier.fillMaxSize().padding(16.dp)) {
        // Image preview
        Box(
            Modifier.fillMaxWidth().height(260.dp)
                .background(Color.LightGray,
                    RoundedCornerShape(12.dp)),
            Alignment.Center
        ) {
            if (bitmap != null) {
                Image(bitmap!!.asImageBitmap(), null,
                    Modifier.fillMaxSize()
                        .clip(RoundedCornerShape(12.dp)),
                    contentScale = ContentScale.Crop)
            } else {
                Text("Pick a photo to analyze",
                    color = Color.Gray)
            }
        }
        Spacer(Modifier.height(12.dp))
        Button(onClick = {
            picker.launch(PickVisualMediaRequest(
                ActivityResultContracts
                    .PickVisualMedia.ImageOnly))
        }, Modifier.fillMaxWidth()) {
            Text("Choose from Gallery")
        }
        Spacer(Modifier.height(8.dp))
        Button(
            onClick = { vm.analyzeOnDevice() },
            enabled = bitmap != null && !loading,
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(if (loading)
                "Analyzing on-device…"
            else "Analyze On-Device")
        }
        if (result.isNotEmpty()) {
            Spacer(Modifier.height(14.dp))
            Card(Modifier.fillMaxWidth()) {
                Text(result,
                    Modifier.padding(14.dp),
                    fontSize = 14.sp,
                    lineHeight = 22.sp)
            }
        }
    }
}`}</CodePane>
        <CodePane title="iOS — GalleryView.swift" accent={GREEN}>{`import PhotosUI, SwiftUI

struct GalleryView: View {
    @StateObject private var vm =
        GalleryViewModel()
    @State private var photoItem:
        PhotosPickerItem?

    var body: some View {
        ScrollView {
            VStack(spacing: 14) {
                // Image preview
                ZStack {
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color.gray.opacity(0.15))
                        .frame(height: 260)
                    if let image = vm.selectedImage {
                        Image(uiImage: image)
                            .resizable()
                            .scaledToFill()
                            .frame(height: 260)
                            .clipShape(
                                RoundedRectangle(
                                    cornerRadius: 12))
                    } else {
                        Text("Pick a photo to analyze")
                            .foregroundColor(.secondary)
                    }
                }
                PhotosPicker(
                    selection: \$photoItem,
                    matching: .images
                ) {
                    Label("Choose from Gallery",
                        systemImage:
                            "photo.on.rectangle")
                }
                .buttonStyle(.bordered)
                .onChange(of: photoItem) { _, item in
                    Task {
                        await vm.loadPhoto(item)
                    }
                }
                Button {
                    Task {
                        await vm.analyzeOnDevice()
                    }
                } label: {
                    Text(vm.isLoading
                        ? "Analyzing on-device…"
                        : "Analyze On-Device")
                }
                .buttonStyle(.borderedProminent)
                .disabled(vm.selectedImage == nil
                    || vm.isLoading)

                if !vm.analysisResult.isEmpty {
                    Text(vm.analysisResult).font(.body)
                        .padding()
                        .background(
                            Color.gray.opacity(0.1))
                        .cornerRadius(10)
                }
            }.padding()
        }
    }
}`}</CodePane>
      </div>
    </Shell>
  ),

  // ─── 10: CODE — TWO-STAGE ANALYSIS ───
  () => (
    <Shell tag="Live code-along" timer="10" title="Part 2 — the two-stage on-device pipeline" notes="This is the payoff of the session. Walk through Stage 1 first (students have seen this pattern), then add Stage 2. The key line to highlight on Android: the try/catch around nanoModel.generateContent() — this is where unsupported devices will throw, and the catch block is your fallback. On iOS: the #available(iOS 18.0, *) guard is the device check. Make sure students understand the prompt construction — what you pass to Gemini Nano is just a string, exactly like calling Claude in Week 7. | Sources: ML Kit ImageLabeling.getClient — developers.google.com/ml-kit/vision/image-labeling/android#1_create_an_instance_of_imagelabeler. InputImage.fromBitmap — developers.google.com/ml-kit/reference/android/com/google/mlkit/vision/common/InputImage#fromBitmap(android.graphics.Bitmap,int). GenerativeModel.generateContent (AI Edge) — ai.google.dev/edge/mediapipe/solutions/genai/llm_inference/android. VNClassifyImageRequest on static image — developer.apple.com/documentation/vision/classifying_images_with_vision_and_core_ml. PhotosPickerItem.loadTransferable — developer.apple.com/documentation/photokit/photospickeritem/loadtransferable(type:).">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Android — GalleryViewModel.kt (two-stage)" accent={BLUE}>{`class GalleryViewModel : ViewModel() {
    private val _selectedBitmap =
        MutableStateFlow<Bitmap?>(null)
    val selectedBitmap = _selectedBitmap.asStateFlow()
    private val _analysisResult =
        MutableStateFlow("")
    val analysisResult = _analysisResult.asStateFlow()
    private val _isLoading =
        MutableStateFlow(false)
    val isLoading = _isLoading.asStateFlow()

    private val labeler = ImageLabeling.getClient(
        ImageLabelerOptions.DEFAULT_OPTIONS)
    private var nanoModel: GenerativeModel? = null

    init { viewModelScope.launch { initNano() } }

    private suspend fun initNano() {
        nanoModel = try {
            GenerativeModel("gemini-nano",
                generationConfig { temperature = 0.7f }
            ).also { it.generateContent("hi") }
        } catch (e: Exception) { null }
    }

    fun loadBitmap(uri: Uri) {
        // decode Uri → Bitmap and set _selectedBitmap
    }

    fun analyzeOnDevice() {
        val bmp = _selectedBitmap.value ?: return
        _isLoading.value = true
        viewModelScope.launch(Dispatchers.IO) {
            // ── Stage 1: ML Kit labels ──────────
            val image = InputImage.fromBitmap(bmp, 0)
            val labels = labeler.process(image).await()
            val labelText = labels.take(5).joinToString(", ") {
                "\${it.text} (\${(it.confidence*100).toInt()}%)"
            }

            // ── Stage 2: Gemini Nano ─────────────
            _analysisResult.value = nanoModel?.let { m ->
                try {
                    m.generateContent("""
                        On-device ML detected: ${'$'}labelText
                        Write a natural 2-sentence description
                        of what this photo probably shows.
                    """.trimIndent()).text
                        ?: "No response from on-device model."
                } catch (e: Exception) {
                    // Device doesn't support Nano
                    "Detected: ${'$'}labelText"
                }
            } ?: "Detected: ${'$'}labelText"

            _isLoading.value = false
        }
    }
}`}</CodePane>
        <CodePane title="iOS — GalleryViewModel.swift (two-stage)" accent={GREEN}>{`import Vision, PhotosUI, SwiftUI

@MainActor
class GalleryViewModel: ObservableObject {
    @Published var selectedImage: UIImage?
    @Published var analysisResult = ""
    @Published var isLoading = false

    func loadPhoto(_ item: PhotosPickerItem?) async {
        guard let data = try? await item?
            .loadTransferable(type: Data.self),
            let image = UIImage(data: data)
        else { return }
        selectedImage = image
        analysisResult = ""
    }

    func analyzeOnDevice() async {
        guard let image = selectedImage,
              let cgImage = image.cgImage
        else { return }
        isLoading = true

        // ── Stage 1: Vision classification ──────
        let handler =
            VNImageRequestHandler(cgImage: cgImage)
        let request = VNClassifyImageRequest()
        try? handler.perform([request])

        let topLabels = (request.results
            as? [VNClassificationObservation])?
            .prefix(5)
            .filter { \$0.confidence > 0.05 }
            .map {
                "\(\$0.identifier) "
                + "(\(Int(\$0.confidence*100))%)"
            } ?? []
        let labelText =
            topLabels.joined(separator: ", ")

        // ── Stage 2: Apple Intelligence ──────────
        if #available(iOS 18.0, *) {
            // Writing Tools integration point.
            // For the lab: format labels as result.
            // Production: use UIWritingToolsCoordinator
            // to summarise the label context text.
            analysisResult =
                "On-device analysis: \(labelText)"
        } else {
            // Fallback: show Vision labels directly
            analysisResult = topLabels.isEmpty
                ? "No objects detected."
                : topLabels
                    .map { "• \(\$0)" }
                    .joined(separator: "\n")
        }
        isLoading = false
    }
}`}</CodePane>
      </div>
    </Shell>
  ),

  // ─── 11: AIRPLANE MODE DEMO ───
  () => (
    <Shell tag="Live demo" tagColor="teal" timer="4" title="Airplane mode — prove it works offline" subtitle="Pull out your phone. Turn on airplane mode. Run it." notes="This is the moment of the session. Do it live on stage. Pick a photo — something with obvious objects in the room. Tap Analyze. Show the result. Then visibly turn on airplane mode. Pick a different photo. Tap Analyze again. Same speed, same quality. Let the class react before saying anything. Then ask the discussion question. The contrast with Week 7 (where airplane mode would have shown an error) makes the point viscerally. | Sources: Android airplane mode programmatic detection — developer.android.com/reference/android/net/ConnectivityManager. iOS Network framework for connectivity state — developer.android.com/reference/android/net/NetworkInfo (Android) / developer.apple.com/documentation/network/nwpathmonitor (iOS). Gemini Nano offline guarantee — developer.android.com/ai/gemini-nano ('inference is performed on-device and does not require a network connection').">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>The demo</p>
          {[
            { n: "1", step: "Pick a photo from gallery", detail: "Something with clear objects — not abstract" },
            { n: "2", step: "Tap Analyze On-Device", detail: "Result appears. Note the time — ~300–800ms." },
            { n: "3", step: "Turn on airplane mode", detail: "Do it visibly — settings panel, show the airplane icon" },
            { n: "4", step: "Pick a different photo", detail: "Gallery still works — photos are local" },
            { n: "5", step: "Tap Analyze again", detail: "Same result. Same speed. No network." },
            { n: "6", step: "Turn airplane mode off", detail: "This wasn't magic — there was no connection to restore" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 10, padding: "7px 0", borderBottom: `0.5px solid ${GRAY}` }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{s.n}</span>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>{s.step}</p>
                <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "14px 16px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 8px" }}>What this proves</p>
            {[
              "Zero bytes left the device — no API call, no DNS lookup, nothing",
              "The model lives on the phone permanently after installation",
              "Inference runs on the NPU — the network chip is never involved",
              "This would work in a subway, on a plane, in a remote area with no signal",
            ].map(t => <Bullet key={t} check>{t}</Bullet>)}
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 10, padding: "14px 16px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 8px" }}>Contrast with Week 7</p>
            {[
              "Week 7 cloud call → airplane mode → immediate error",
              "Week 8 on-device → airplane mode → works identically",
              "Same input. Same output quality. Completely different infrastructure.",
            ].map(t => <Bullet key={t}>{t}</Bullet>)}
          </div>
        </div>
      </div>
      <Discussion>{"You just saw on-device AI work with no internet. What use cases does this unlock that would be impossible or unacceptable with a cloud API?"}</Discussion>
    </Shell>
  ),

  // ─── 12: CLOUD VS ON-DEVICE COMPARISON ───
  () => (
    <Shell tag="Comparison" tagColor="amber" timer="5" title="Same photo — cloud vs on-device" subtitle="Now you can compare them directly" notes="Ask students to do this comparison themselves during lab using the same photo in both their Week 7 PhotoDescriber and today's Gallery Analyzer. The point isn't to declare a winner — it's to make the tradeoff concrete and personal. The quality gap is real and measurable. The offline guarantee is also real and measurable. Students should leave being able to articulate when each approach is the right choice. | Sources: Claude vision API for comparison — docs.anthropic.com/en/docs/vision. Gemini Nano capability benchmarks — deepmind.google/technologies/gemini/nano (MMLU, HellaSwag scores vs larger models). Vision framework classification accuracy — developer.apple.com/documentation/vision/classifying_images_with_vision_and_core_ml.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <div style={{ background: BLUE_LIGHT, borderRadius: "8px 8px 0 0", padding: "8px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, margin: 0 }}>☁️ Cloud AI — Week 7 (Claude vision)</p>
          </div>
          <div style={{ border: `1px solid ${BLUE_LIGHT}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "12px 14px" }}>
            <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "10px 12px", marginBottom: 10 }}>
              <p style={{ fontSize: 10, color: "#7c93b8", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Example Claude response</p>
              <p style={{ fontSize: 11, color: "#cdd6f4", margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>{"\"The image shows a home workspace setup with a ceramic coffee mug in the foreground, a laptop open to what appears to be a code editor, and a spiral-bound notebook with handwritten notes visible on the right side. Natural light from a window to the left creates soft shadows across the wooden desk surface.\""}</p>
            </div>
            {[
              { label: "Detail level",     val: "High — spatial relationships, lighting, specific identifications" },
              { label: "Latency",          val: "800ms–2s (network + inference)" },
              { label: "Cost",             val: "~$0.005 per image at Sonnet pricing" },
              { label: "Offline?",         val: "No — fails immediately with no connection" },
              { label: "Privacy",          val: "Image sent to Anthropic servers" },
            ].map(r => (
              <div key={r.label} style={{ display: "flex", gap: 8, padding: "4px 0", borderBottom: `0.5px solid ${BLUE_LIGHT}` }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: BLUE, minWidth: 100, flexShrink: 0 }}>{r.label}</span>
                <span style={{ fontSize: 11, color: BLUE, opacity: 0.85 }}>{r.val}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ background: TEAL_LIGHT, borderRadius: "8px 8px 0 0", padding: "8px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: 0 }}>📱 On-Device — today (Gemini Nano / Vision)</p>
          </div>
          <div style={{ border: `1px solid ${TEAL_LIGHT}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "12px 14px" }}>
            <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "10px 12px", marginBottom: 10 }}>
              <p style={{ fontSize: 10, color: "#7c93b8", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Example on-device response</p>
              <p style={{ fontSize: 11, color: "#cdd6f4", margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>{"\"A workspace with a coffee cup and laptop is visible on a wooden desk. The setup suggests a productive work environment with writing materials nearby.\""}</p>
            </div>
            {[
              { label: "Detail level",     val: "Moderate — captures the scene, misses fine details" },
              { label: "Latency",          val: "300–500ms (local NPU, no network)" },
              { label: "Cost",             val: "$0 — no API cost ever" },
              { label: "Offline?",         val: "Yes — works with zero connectivity" },
              { label: "Privacy",          val: "Image never leaves the device" },
            ].map(r => (
              <div key={r.label} style={{ display: "flex", gap: 8, padding: "4px 0", borderBottom: `0.5px solid ${TEAL_LIGHT}` }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, minWidth: 100, flexShrink: 0 }}>{r.label}</span>
                <span style={{ fontSize: 11, color: TEAL_DARK, opacity: 0.85 }}>{r.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Info>{"The right choice depends entirely on context. Medical app scanning documents? On-device — privacy is non-negotiable. Creative writing assistant needing rich descriptions? Cloud — capability matters more. Most production apps use both, routing based on connectivity and sensitivity."}</Info>
    </Shell>
  ),

  // ─── 13: LAB INTRO + M3 ───
  () => (
    <Shell tag="Lab intro" tagColor="cap" timer="5" title="Lab time + Capstone M3 check-ins" subtitle="~50 minutes · Go to the Lab tab → Session 2" notes="Two things happening in parallel during this lab: students building the Gallery Analyzer, and M3 check-ins. Stagger the check-ins — call up teams while everyone is building, so no one sits idle. If a team's app isn't running, use the first 10 minutes to unblock them before pulling them for the check-in. | Sources: No additional sources needed for this slide — all lab code covered in previous slides.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Session 2 lab steps</p>
          {[
            { n: 0, t: "Open MLScanner from Session 1",         time: "2 min" },
            { n: 1, t: "Create GalleryViewModel",               time: "5 min" },
            { n: 2, t: "Build Gallery tab UI",                  time: "10 min" },
            { n: 3, t: "Wire up gallery photo picker",          time: "5 min" },
            { n: 4, t: "Stage 1 — ML labels from photo",        time: "8 min" },
            { n: 5, t: "Stage 2 — Gemini Nano / Apple Intel.",  time: "10 min" },
            { n: 6, t: "Airplane mode verification",            time: "3 min" },
            { n: 7, t: "Compare to Week 7 cloud result",        time: "5 min" },
            { n: 8, t: "Reflect (3 questions)",                 time: "4 min" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "4px 0", alignItems: "center" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: 4, fontSize: 10, fontWeight: 700, padding: "1px 6px", flexShrink: 0 }}>Step {s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, flex: 1 }}>{s.t}</span>
              <span style={{ fontSize: 11, color: MUTED, flexShrink: 0 }}>{s.time}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: CAP_BG, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: CAP_C, margin: "0 0 8px" }}>🏗️ Capstone M3 check-ins — happening now</p>
            <p style={{ fontSize: 12, color: CAP_C, margin: "0 0 8px", lineHeight: 1.5 }}>Your instructor will call your team during lab. Plan for 10 minutes.</p>
            {[
              "Have your capstone app running on a device or emulator",
              "Be ready to demo your current state — no polish needed",
              "Know your remaining feature list",
              "Surface any blockers — now is the time",
            ].map(t => <Bullet key={t} check>{t}</Bullet>)}
            <div style={{ background: "rgba(153,60,29,0.1)", borderRadius: 7, padding: "8px 10px", marginTop: 8 }}>
              <p style={{ fontSize: 11, color: CAP_C, margin: 0, lineHeight: 1.5 }}>If your capstone isn't running yet: fix that first. A non-running app is the only thing that blocks a check-in.</p>
            </div>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 6px" }}>✓ End of Session 2 checkpoint</p>
            <p style={{ fontSize: 12, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Gallery Analyzer tab works. On-device result appears with no internet. You ran it in airplane mode. TA signs off before you leave.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 14: BREAK ───
  () => (
    <div style={{ background: GRAY, border: "1px solid #e5e7eb", borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", textAlign: "center" }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>☕</div>
      <Tag color="teal">5 minute break</Tag>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: TEXT, margin: "16px 0 8px" }}>Take a break</h2>
      <p style={{ fontSize: 15, color: MUTED, margin: "0 0 28px", maxWidth: 400, lineHeight: 1.6 }}>Stretch, grab water. Lab starts in 5 minutes.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 500 }}>
        <div style={{ background: PURPLE_LIGHT, borderRadius: 10, padding: "12px 16px", textAlign: "left" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>While you wait — builders</p>
          <p style={{ fontSize: 11, color: PURPLE, margin: 0, lineHeight: 1.5 }}>Open MLScanner. Confirm the Gallery tab placeholder is there. Start creating GalleryViewModel.</p>
        </div>
        <div style={{ background: CAP_BG, borderRadius: 10, padding: "12px 16px", textAlign: "left" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: CAP_C, margin: "0 0 4px" }}>While you wait — capstone</p>
          <p style={{ fontSize: 11, color: CAP_C, margin: 0, lineHeight: 1.5 }}>Open your capstone project and confirm it compiles. M3 check-ins start as soon as lab begins.</p>
        </div>
      </div>
      <Notes>{"Leave this slide up for the full 5 minutes. Use the time to prepare the M3 check-in order — note which teams need to go first based on what you saw during lecture."}</Notes>
    </div>
  ),

  // ─── 15: WRAP-UP ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Week 8 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>You built an AI-powered scanner that runs entirely on the device — live camera labels, text recognition, and generative analysis. No cloud, no API key, no internet.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you built across both sessions</p>
            {[
              "Live camera feed with real-time ML labeling overlay",
              "Text recognition (OCR) mode",
              "Mode toggle — Label ↔ Text",
              "Gallery photo picker with image preview",
              "Two-stage on-device pipeline: Vision → Gemini Nano / Apple Intelligence",
              "Airplane mode verified — zero network calls",
              "Cloud vs on-device comparison — same photo, both APIs",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Week 9 — next class</p>
            {[
              "Git for teams — branching, PRs, code review",
              "Setting up .gitignore for Android and iOS",
              "Resolving merge conflicts in Gradle / .pbxproj",
              "Feature branches and pull request workflow",
              "Capstone M4 — feature-complete build",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: AMBER, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 10, background: "rgba(255,255,255,0.12)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Pre-work: Git branching concepts (30 min) — linked in Slack. Come with your capstone repo accessible.</p>
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
      <Notes>{"Strong close. Students now understand the full spectrum: cloud AI (Week 7) for power, on-device narrow ML (Session 1) for speed and universal coverage, on-device generative AI (Session 2) for privacy and offline. That mental model carries through the rest of the course and into their careers. Remind them to fill out the survey."}</Notes>
    </div>
  ),

];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 8 · Session 2 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>On-device generative AI — Gallery Analyzer</p>
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
