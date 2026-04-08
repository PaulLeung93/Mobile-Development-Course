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
        <Tag color="purple">Week 8 · S1</Tag>
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
        </div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 8 · Session 1</p>
        <h1 style={{ fontSize: 32, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.15 }}>On-device AI</h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Inference without the cloud</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "Why on-device AI — the offline argument",
            "Cloud vs on-device — cost, privacy, capability, latency",
            "Device coverage — why not every phone qualifies",
            "How inference works without a server",
            "ML Kit (Android) + Vision framework (iOS)",
            "CameraX / AVFoundation — reading live frames",
            "Live code-along: real-time object labeling",
            "Lab: build the MLScanner live camera app",
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
    <Shell tag="Recap" timer="3" title="Week 7 — what you built" notes="Keep this to 3 minutes. The key points to reinforce: students can now call a cloud LLM from a mobile app and handle streaming. That's a big deal. Today we ask: what happens when there's no internet? That's the bridge into on-device. | Sources: Claude Messages API — docs.anthropic.com/en/api/messages. Streaming SSE format — docs.anthropic.com/en/api/messages-streaming.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { title: "Chat with Claude", items: ["Claude Messages API from mobile", "Streaming — word by word", "Conversation history management", "Typing indicators + error states"], color: PURPLE_LIGHT, fg: PURPLE_DARK },
          { title: "Photo Describer", items: ["Camera + gallery integration", "Image → base64 encoding", "Multimodal API: image + text", "Loading states for slow responses"], color: BLUE_LIGHT, fg: BLUE },
          { title: "The pattern", items: ["Mobile app → HTTPS → cloud LLM", "Powerful but needs internet", "Costs money per token", "Today: what if that arrow disappears?"], color: AMBER_LIGHT, fg: "#633806" },
        ].map(col => (
          <div key={col.title} style={{ background: col.color, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: col.fg, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".05em" }}>{col.title}</p>
            {col.items.map(t => <Bullet key={t}>{t}</Bullet>)}
          </div>
        ))}
      </div>
      <Discussion>{"Last week your app called Claude across the internet. Today: can you make an AI feature that works when that connection doesn't exist?"}</Discussion>
    </Shell>
  ),

  // ─── 3: AGENDA ───
  () => (
    <Shell tag="Agenda" title="Today's session — 55 min lecture" notes="Session 1 is concept-heavy up front — the cloud vs on-device tradeoff is worth spending real time on because it shapes every architectural decision. The code-along is meaty but students have done this pattern before (camera from Week 7 photo describer). The new thing is plugging ML into the frame pipeline. | Sources: ML Kit overview — developers.google.com/ml-kit. Vision framework overview — developer.apple.com/documentation/vision. CameraX overview — developer.android.com/training/camerax.">
      {[
        { time: "0:00–0:03", label: "Recap",                    desc: "Week 7 — cloud LLM, streaming, photo describer",      section: null },
        { time: "0:03–0:10", label: "Hook",                     desc: "Google Translate demo — AI that works offline",        section: null },
        { time: "0:10–0:19", label: "Cloud vs on-device",       desc: "Cost math, privacy, capability, latency — the full tradeoff", section: null },
        { time: "0:19–0:24", label: "Device coverage",          desc: "Why on-device doesn't mean universal — Android fragmentation, OEM deals, iOS hardware gates", section: null },
        { time: "0:24–0:31", label: "How inference works",      desc: "Model weights, forward pass, no round trip",           section: null },
        { time: "0:31–0:39", label: "The ML stack",             desc: "ML Kit (Android) + Vision framework (iOS) side by side", section: null },
        { time: "0:39–0:43", label: "Camera frames",            desc: "CameraX ImageAnalysis / AVCaptureVideoDataOutput",     section: null },
        { time: "0:43–0:52", label: "Live code-along",          desc: "Permission → preview → labeling overlay → OCR toggle", section: "code" },
        { time: "0:52–0:55", label: "Lab intro",                desc: "MLScanner steps + Session 2 preview",                  section: "lab" },
      ].map(r => (
        <div key={r.time} style={{
          display: "flex", gap: 12, padding: "8px 6px",
          borderBottom: `0.5px solid ${GRAY}`,
          background: r.section === "code" ? PURPLE_LIGHT : r.section === "lab" ? TEAL_LIGHT : "transparent",
          borderRadius: r.section ? 6 : 0, paddingLeft: r.section ? 8 : 6,
        }}>
          <span style={{ fontSize: 12, minWidth: 90, flexShrink: 0, color: r.section ? PURPLE_DARK : MUTED, fontWeight: r.section ? 600 : 400 }}>{r.time}</span>
          <span style={{ fontSize: 12, fontWeight: 600, minWidth: 150, flexShrink: 0, color: r.section === "code" ? PURPLE_DARK : r.section === "lab" ? TEAL_DARK : PURPLE }}>{r.label}</span>
          <span style={{ fontSize: 12, color: r.section ? PURPLE_DARK : TEXT }}>{r.desc}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
        {[{ color: PURPLE, label: "Code-along" }, { color: TEAL, label: "Lab" }].map(l => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
            <span style={{ fontSize: 11, color: MUTED }}>{l.label}</span>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── 4: HOOK ───
  () => (
    <Shell tag="Hook" timer="7" title="Open Google Translate. Point it at text. Turn on airplane mode." subtitle="It still works. That's on-device AI." notes="Do this live. Pull out your phone, open Google Translate, switch to camera mode, point it at something with text in the room — a poster, a slide, a book. Show it translating. Then visibly turn on airplane mode and do it again. Same result. Let the silence sit for a second. Then ask the discussion question. Students have used these features for years without thinking about how they work. | Sources: Google Translate offline/camera mode — support.google.com/translate/answer/6142473. Apple Live Text announcement — developer.apple.com/videos/play/wwdc2021/10041 (WWDC 2021). Siri on-device processing — apple.com/privacy/docs/Siri_Privacy_and_Grading_Apple.pdf. Apple Photos on-device ML — apple.com/privacy/features (search 'Photos').">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 4 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Apps you use every day that run AI on your phone</p>
          {[
            { app: "Google Translate",    feature: "Camera translation — reads text in real time, no internet" },
            { app: "Snapchat / Instagram",feature: "Face filters — detect and track your face at 30fps" },
            { app: "iOS Camera",          feature: "Live text — tap any text in a photo to copy it" },
            { app: "Siri / Google",       feature: "Wake word detection — 'Hey Siri' never leaves the device" },
            { app: "Photos app",          feature: "People recognition — runs entirely on your phone" },
          ].map(row => (
            <div key={row.app} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: `0.5px solid ${GRAY}` }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: PURPLE, minWidth: 150, flexShrink: 0 }}>{row.app}</span>
              <span style={{ fontSize: 12, color: MUTED, lineHeight: 1.4 }}>{row.feature}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "14px 16px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>What just happened</p>
            <p style={{ fontSize: 13, color: TEAL_DARK, margin: 0, lineHeight: 1.6 }}>The ML model — the thing doing the translation — is downloaded to your phone when you install the app. When you point the camera at text, inference happens on your CPU/GPU, not on a server. No bytes leave your device.</p>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 10, padding: "14px 16px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#633806", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Why it matters for you</p>
            <p style={{ fontSize: 13, color: "#633806", margin: 0, lineHeight: 1.6 }}>This week you build exactly this: a camera app that labels what it sees in real time, entirely on-device. No API key. No cost per frame. Works in a tunnel, on a plane, with zero bars.</p>
          </div>
        </div>
      </div>
      <Discussion>{"What other features in apps you use every day do you think run on-device? Why would a company choose that over sending data to a server?"}</Discussion>
    </Shell>
  ),

  // ─── 5: CLOUD VS ON-DEVICE — DEEP TRADEOFFS ───
  () => (
    <Shell tag="Concept" timer="9" title="Cloud AI vs on-device AI — the real tradeoffs" subtitle="The decision that shapes your entire feature architecture" notes="Go deep on cost and privacy — these are the two that catch students off guard. For cost, do the back-of-napkin math live: 1000 users, 10 images/day, ~750 tokens/image = 7.5M tokens/day. At Claude Sonnet pricing (~$3/M input tokens) that's $22/day or $660/month just for one feature. On-device: $0. For privacy, ask: would your users be comfortable if every photo they took was sent to a server? Probably not. That's why Apple Intelligence runs on-device by default. | Sources: Claude pricing — anthropic.com/pricing (verify current rates before class, pricing changes). ML Kit image labeling latency benchmarks — developers.google.com/ml-kit/vision/image-labeling/performance. Apple Intelligence privacy whitepaper — apple.com/privacy/docs/Apple_Intelligence_Privacy_Overview.pdf. Apple 'Private AI' framing — apple.com/apple-intelligence.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>

        {/* Cost */}
        <div style={{ background: RED_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: RED, margin: "0 0 8px" }}>💸 Cost — cloud adds up fast</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 8 }}>
            {[
              { label: "Cloud AI", val: "~$3–15 per 1M tokens\n+ image encoding costs\n+ bandwidth\nScales linearly with users", bad: true },
              { label: "On-Device", val: "Free after install\nNo per-call cost\nNo bandwidth cost\nScales to ∞ users for $0", bad: false },
            ].map(c => (
              <div key={c.label} style={{ background: c.bad ? "#fca5a522" : TEAL_LIGHT, borderRadius: 7, padding: "8px 10px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: c.bad ? RED : TEAL_DARK, margin: "0 0 4px" }}>{c.label}</p>
                <p style={{ fontSize: 11, color: c.bad ? RED : TEAL_DARK, margin: 0, lineHeight: 1.7, whiteSpace: "pre-line" }}>{c.val}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", borderRadius: 7, padding: "8px 10px", border: `1px solid ${RED}33` }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: RED, margin: "0 0 3px" }}>Back-of-napkin math</p>
            <p style={{ fontSize: 11, color: RED, margin: 0, lineHeight: 1.6 }}>1,000 users × 10 photos/day × ~750 tokens each = <strong>7.5M tokens/day</strong>. At $3/M input tokens → <strong>$660/month</strong> for one AI feature. On-device: $0.</p>
          </div>
        </div>

        {/* Privacy */}
        <div style={{ background: PURPLE_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 8px" }}>🔒 Privacy — data that never leaves the phone</p>
          <p style={{ fontSize: 12, color: PURPLE_DARK, margin: "0 0 8px", lineHeight: 1.5 }}>Every cloud API call sends your user's data to a third-party server. For most content, that's fine. For some, it isn't.</p>
          {[
            { scenario: "Medical photos", detail: "Skin condition checker, wound assessment — HIPAA implications if sent to cloud" },
            { scenario: "Kids' apps",     detail: "COPPA requires extra scrutiny on any data leaving the device" },
            { scenario: "Financial docs", detail: "Receipt scanner, tax document reader — sensitive data users don't want uploaded" },
            { scenario: "Live camera",    detail: "Continuous camera feed: users expect their home/face/surroundings to stay private" },
          ].map(s => (
            <div key={s.scenario} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: PURPLE, minWidth: 110, flexShrink: 0 }}>{s.scenario}</span>
              <span style={{ fontSize: 11, color: PURPLE_DARK, lineHeight: 1.4, opacity: 0.85 }}>{s.detail}</span>
            </div>
          ))}
          <div style={{ background: "rgba(83,74,183,0.12)", borderRadius: 7, padding: "7px 10px", marginTop: 8 }}>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>{"Apple's marketing explicitly calls out \"Private AI\" — Apple Intelligence processes on-device by default. It's a competitive advantage, not just a technical detail."}</p>
          </div>
        </div>

        {/* Capability */}
        <div style={{ background: BLUE_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, margin: "0 0 8px" }}>🧠 Capability — cloud wins, by a lot</p>
          {[
            { dim: "Model size",    cloud: "Claude 3 Opus: 200B+ params", device: "Gemini Nano: ~1.8B params" },
            { dim: "Context",       cloud: "200K tokens (Claude)", device: "~512–2K tokens on-device" },
            { dim: "Multimodal",    cloud: "Text, image, video, audio", device: "Text + image (limited)" },
            { dim: "Reasoning",     cloud: "Complex multi-step tasks", device: "Simple classification / short generation" },
            { dim: "Knowledge",     cloud: "Trained up to recent cutoff", device: "Static, frozen at ship time" },
          ].map(r => (
            <div key={r.dim} style={{ display: "flex", gap: 8, padding: "4px 0", borderBottom: `0.5px solid ${BLUE_LIGHT}` }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: BLUE, minWidth: 80, flexShrink: 0 }}>{r.dim}</span>
              <span style={{ fontSize: 11, color: BLUE, flex: 1 }}>{r.cloud}</span>
              <span style={{ fontSize: 11, color: MUTED, flex: 1 }}>{r.device}</span>
            </div>
          ))}
        </div>

        {/* Latency + offline */}
        <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 8px" }}>⚡ Latency + offline — on-device wins</p>
          {[
            { label: "Cloud latency",   val: "100ms–2s minimum (network + server)\nStreaming helps perceived speed\nUnreliable on slow networks" },
            { label: "On-device latency", val: "<50ms typical\nML Kit image label: ~20ms\nNo network dependency at all" },
          ].map(c => (
            <div key={c.label} style={{ background: c.label.includes("Cloud") ? "#ffffff88" : "rgba(15,110,86,0.12)", borderRadius: 7, padding: "8px 10px", marginBottom: 6 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: c.label.includes("Cloud") ? MUTED : TEAL_DARK, margin: "0 0 4px" }}>{c.label}</p>
              <p style={{ fontSize: 11, color: c.label.includes("Cloud") ? MUTED : TEAL_DARK, margin: 0, lineHeight: 1.7, whiteSpace: "pre-line" }}>{c.val}</p>
            </div>
          ))}
          <div style={{ background: "rgba(15,110,86,0.12)", borderRadius: 7, padding: "7px 10px" }}>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>{"Real-world offline scenarios: subway, airplane, rural areas, emerging markets where data is expensive. Your app keeps working."}</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 5b: DEVICE COVERAGE — WHY ON-DEVICE ISN'T UNIVERSAL ───
  () => (
    <Shell tag="Concept" timer="7" title="The device coverage problem" subtitle="On-device AI doesn't run on every phone — here's why" notes="This is the most important 'gotcha' of the week and one students rarely think about. They assume on-device means it works for everyone. It doesn't. The Android fragmentation story is especially important: it's not just about specs, it's about OEM relationships, OS version rollout speed, and the fact that Google has to negotiate chip-level NPU access with Qualcomm, MediaTek, Samsung, etc. for each Gemini Nano feature. The iOS story is cleaner but still hardware-gated. | Sources: Gemini Nano supported devices list — developer.android.com/ai/gemini-nano (check 'Supported devices' section). Android OS distribution dashboard — developer.android.com/about/dashboards (updated monthly — check before class). Android AI Core overview — developer.android.com/ai/overview. Apple Intelligence device requirements — support.apple.com/en-us/111900. Apple Neural Engine introduction (A11) — developer.apple.com/videos/play/wwdc2017/709. Qualcomm AI Engine specs — qualcomm.com/products/mobile/snapdragon/ai-engine (TOPS figures vary by chip generation — verify for current flagship).">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>

        {/* Android fragmentation */}
        <div>
          <div style={{ background: BLUE_LIGHT, borderRadius: "8px 8px 0 0", padding: "8px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, margin: 0 }}>🤖 Android — a fragmentation problem</p>
          </div>
          <div style={{ border: `1px solid ${BLUE_LIGHT}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "12px 14px" }}>
            <p style={{ fontSize: 12, color: TEXT, margin: "0 0 10px", lineHeight: 1.5 }}>Android runs on thousands of device models from hundreds of manufacturers. Not all of them can run advanced on-device AI.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {[
                {
                  title: "Hardware requirements",
                  detail: "Gemini Nano needs a dedicated NPU (Neural Processing Unit). Low-end phones use older Snapdragon or MediaTek chips with no NPU, or an NPU too weak to run a 1.8B parameter model.",
                  color: RED_LIGHT, fg: RED,
                },
                {
                  title: "The OEM relationship",
                  detail: "Google must work directly with each chip maker (Qualcomm, MediaTek, Samsung Exynos) to write NPU drivers that Android AI Core can call. This requires licensing agreements and engineering work per chip.",
                  color: AMBER_LIGHT, fg: "#633806",
                },
                {
                  title: "Android AI Core distribution",
                  detail: "Gemini Nano is distributed through Android AI Core, a system service Google pushes via Play Store. Requires Android 10+, Play Services, and a supported device. OEMs can opt out.",
                  color: PURPLE_LIGHT, fg: PURPLE_DARK,
                },
                {
                  title: "OS fragmentation",
                  detail: "Android 14 has ~30% market share. Many users are on Android 10–12. Newer AI features require newer APIs that older OS versions simply don't have.",
                  color: BLUE_LIGHT, fg: BLUE,
                },
              ].map(item => (
                <div key={item.title} style={{ background: item.color, borderRadius: 7, padding: "8px 10px" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: item.fg, margin: "0 0 3px" }}>{item.title}</p>
                  <p style={{ fontSize: 11, color: item.fg, margin: 0, lineHeight: 1.5, opacity: 0.9 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* iOS + the coverage reality */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div>
            <div style={{ background: GREEN_LIGHT, borderRadius: "8px 8px 0 0", padding: "8px 14px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, margin: 0 }}>🍎 iOS — cleaner, but still hardware-gated</p>
            </div>
            <div style={{ border: `1px solid ${GREEN_LIGHT}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "12px 14px" }}>
              <p style={{ fontSize: 12, color: TEXT, margin: "0 0 8px", lineHeight: 1.5 }}>Apple controls both hardware and software, so the story is simpler — but the gate is still real.</p>
              {[
                { item: "Vision framework (this week)", coverage: "iPhone 6s+ — ~99% of active iPhones", ok: true },
                { item: "Core ML (bundled models)", coverage: "iPhone 6s+ — ~99% of active iPhones", ok: true },
                { item: "Apple Intelligence", coverage: "iPhone 15 Pro / iPhone 16+ only — A17 Pro or M-series chip required", ok: false },
                { item: "Neural Engine (fast inference)", coverage: "A11 Bionic (iPhone 8) and newer", ok: true },
              ].map(r => (
                <div key={r.item} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: `0.5px solid ${GREEN_LIGHT}` }}>
                  <span style={{ fontSize: 10, color: r.ok ? TEAL : RED, flexShrink: 0, marginTop: 2 }}>{r.ok ? "✓" : "⚠"}</span>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: 0 }}>{r.item}</p>
                    <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{r.coverage}</p>
                  </div>
                </div>
              ))}
              <p style={{ fontSize: 11, color: GREEN, margin: "8px 0 0", lineHeight: 1.5 }}>Apple controls the chip → OS → API pipeline end to end. When they ship a feature, it works consistently on every supported device. No per-OEM negotiation.</p>
            </div>
          </div>

          {/* The practical takeaway */}
          <div style={{ background: AMBER_LIGHT, borderRadius: 10, padding: "12px 14px", flex: 1 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#633806", margin: "0 0 8px" }}>📐 The practical rule for your apps</p>
            {[
              { rule: "ML Kit (Android) / Vision (iOS)", reach: "Works on virtually every phone — safe to ship without a fallback" },
              { rule: "Gemini Nano", reach: "Pixel 8+ and a small set of partner devices. Always build a fallback. ~5–10% of Android users." },
              { rule: "Apple Intelligence", reach: "iPhone 15 Pro+ only today. Growing as newer iPhones ship. ~15–20% of active iPhones as of 2025." },
              { rule: "Bundled Core ML models", reach: "You control the model file — it works wherever you ship it. Total control, but APK/IPA size increases." },
            ].map(r => (
              <div key={r.rule} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
                <span style={{ color: "#633806", fontWeight: 700, flexShrink: 0, fontSize: 11, marginTop: 2 }}>▸</span>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#633806", margin: 0 }}>{r.rule}</p>
                  <p style={{ fontSize: 11, color: "#633806", margin: 0, opacity: 0.85, lineHeight: 1.4 }}>{r.reach}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Info>{"This week: ML Kit + Vision run on everything. Gemini Nano + Apple Intelligence (Session 2) are advanced features — you'll always write a fallback path. That's real engineering."}</Info>
    </Shell>
  ),

  // ─── 6: HOW ON-DEVICE INFERENCE WORKS ───
  () => (
    <Shell tag="Concept" timer="7" title="How on-device inference works" subtitle="A model is just math. Your phone can do math." notes="Students often think AI requires a data centre. This slide reframes it: a trained model is just a file full of numbers (weights), and inference is just matrix multiplication. Modern phones have chips (Neural Engine, GPU) specifically designed to do this math fast. The key conceptual point: training is hard and expensive — we don't do that on the phone. Inference (using a trained model) is the cheap part. | Sources: Apple Neural Engine — 38 TOPS figure is for A17 Pro, cited in apple.com/iphone-15-pro/specs. Google Tensor G3 TPU — blog.google/products/pixel/pixel-8-pro (Tensor G3 announcement). Qualcomm AI Engine TOPS — qualcomm.com/news/releases/2023/10/qualcomm-announces-snapdragon-8-gen-3 (73 TOPS for Snapdragon 8 Gen 3 — verify current flagship). TensorFlow Lite as ML Kit runtime — developers.google.com/ml-kit/guides#how_ml_kit_is_built. Core ML framework — developer.apple.com/documentation/coreml.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Two phases of ML — only one happens on your phone</p>
          {[
            { phase: "Training", where: "Data centre", desc: "Billions of examples → adjust weights until the model predicts correctly. Takes weeks, costs thousands of dollars. Happens once.", color: AMBER_LIGHT, fg: "#633806", phone: false },
            { phase: "Inference", where: "Your phone ✓", desc: "Take a trained model (a file of numbers). Feed it an image. Run the math. Get a prediction. Takes milliseconds. Happens every frame.", color: TEAL_LIGHT, fg: TEAL_DARK, phone: true },
          ].map(row => (
            <div key={row.phase} style={{ background: row.color, borderRadius: 8, padding: "12px 14px", marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: row.fg, margin: 0 }}>{row.phase}</p>
                <span style={{ fontSize: 10, fontWeight: 600, color: row.fg, background: `${row.fg}22`, padding: "2px 8px", borderRadius: 20 }}>{row.where}</span>
              </div>
              <p style={{ fontSize: 12, color: row.fg, margin: 0, lineHeight: 1.5 }}>{row.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What makes phones fast enough</p>
          {[
            { chip: "Apple Neural Engine", detail: "Dedicated ML accelerator in every iPhone since A11. 38 TOPS on A17 Pro. Runs Core ML models at high speed with low power." },
            { chip: "Google Tensor chip",   detail: "Custom chip in Pixel phones with a dedicated TPU. Powers Gemini Nano, real-time translation, and voice features." },
            { chip: "Qualcomm AI Engine",  detail: "NPU in Snapdragon chips found in most Android devices. 73 TOPS on the latest. Accelerates ML Kit operations." },
          ].map(c => (
            <div key={c.chip} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{c.chip}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>{c.detail}</p>
            </div>
          ))}
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px", marginTop: 4 }}>
            <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>{"The model file (e.g. ML Kit's image labeler) is downloaded once when you add the dependency. After that, it lives on the device and runs locally — forever."}</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 7: THE ML STACK SIDE BY SIDE ───
  () => (
    <Shell tag="Platform" timer="8" title="The ML stack — Android and iOS side by side" subtitle="Different APIs, same mental model" notes="The key insight here is symmetry. Both platforms have a 'request' concept — you describe what you want to detect, hand it an image, and get back structured results. ML Kit and Vision are both high-level abstractions over the underlying model. Students should recognise this pattern: it's exactly like Retrofit vs URLSession — different syntax, same idea. | Sources: ML Kit image labeling Android — developers.google.com/ml-kit/vision/image-labeling/android. ML Kit text recognition v2 — developers.google.com/ml-kit/vision/text-recognition/v2/android. Vision framework VNClassifyImageRequest — developer.apple.com/documentation/vision/vnclassifyimagerequest. VNRecognizeTextRequest — developer.apple.com/documentation/vision/vnrecognizetextrequest. ML Kit model delivery via Play Services — developers.google.com/ml-kit/guides#use-cases.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[
          {
            platform: "Android — ML Kit",
            color: BLUE_LIGHT, fg: BLUE, accent: BLUE,
            tagLabel: "🤖 Android",
            stack: [
              { layer: "Your code",       detail: "Call labeler.process(image).addOnSuccessListener { }" },
              { layer: "ML Kit API",      detail: "com.google.mlkit — high-level, task-specific APIs" },
              { layer: "Google Play",     detail: "Models downloaded via Play Services — not in your APK" },
              { layer: "TensorFlow Lite", detail: "The runtime that executes the model on-device" },
              { layer: "Qualcomm / Tensor NPU", detail: "Hardware acceleration on the chip" },
            ],
            apis: ["Image Labeling — what's in this photo?", "Text Recognition — read printed text (OCR)", "Object Detection — where are things, with boxes", "Barcode Scanning — QR codes and more", "Face Detection, Pose, Segmentation"],
          },
          {
            platform: "iOS — Vision Framework",
            color: GREEN_LIGHT, fg: GREEN, accent: GREEN,
            tagLabel: "🍎 iOS",
            stack: [
              { layer: "Your code",         detail: "Create VNRequest → VNImageRequestHandler → perform()" },
              { layer: "Vision framework",  detail: "Built into iOS SDK — no dependency needed" },
              { layer: "Core ML",           detail: "Apple's ML runtime — .mlmodel files" },
              { layer: "Apple Neural Engine", detail: "Hardware acceleration on A-series / M-series chips" },
            ],
            apis: ["VNClassifyImageRequest — classify image content", "VNRecognizeTextRequest — OCR on any image", "VNDetectFaceRectanglesRequest — face detection", "VNDetectBarcodesRequest — QR and barcodes", "VNGeneratePersonSegmentationRequest"],
          },
        ].map(p => (
          <div key={p.platform}>
            <div style={{ background: p.color, borderRadius: "8px 8px 0 0", padding: "8px 14px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: p.fg, margin: 0 }}>{p.tagLabel} — {p.platform}</p>
            </div>
            <div style={{ border: `1px solid ${p.color}`, borderTop: "none", borderRadius: "0 0 8px 8px", overflow: "hidden" }}>
              <div style={{ padding: "10px 14px", background: "var(--color-background-primary)" }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Stack (top to bottom)</p>
                {p.stack.map((s, i) => (
                  <div key={s.layer} style={{ display: "flex", gap: 8, padding: "5px 8px", background: i === 0 ? p.color : i % 2 === 0 ? GRAY : "var(--color-background-secondary)", borderRadius: 4, marginBottom: 3 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: i === 0 ? p.fg : TEXT, minWidth: 120, flexShrink: 0 }}>{s.layer}</span>
                    <span style={{ fontSize: 11, color: i === 0 ? p.fg : MUTED, lineHeight: 1.4 }}>{s.detail}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "10px 14px", background: "var(--color-background-secondary)", borderTop: `0.5px solid var(--color-border-tertiary)` }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Built-in APIs (this week: first two)</p>
                {p.apis.map((a, i) => (
                  <div key={a} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                    <span style={{ color: i < 2 ? p.fg : MUTED, fontWeight: i < 2 ? 700 : 400, flexShrink: 0, fontSize: 12 }}>{i < 2 ? "★" : "○"}</span>
                    <span style={{ fontSize: 11, color: i < 2 ? p.fg : MUTED, fontWeight: i < 2 ? 600 : 400 }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── 8: CAMERA FRAMES ───
  () => (
    <Shell tag="Concept" timer="5" title="Getting frames out of the camera" subtitle="The camera delivers images — we plug ML into that pipeline" notes="Students have used the camera before (Week 7 photo describer) but always as a single snapshot. This is different: a live video feed gives you 30 frames per second. The key concept is the analysis use case / sample buffer delegate — a callback that fires for each frame. The critical gotcha: if you don't close the ImageProxy (Android) or throttle processing (iOS), you'll either stall the camera or melt the battery. | Sources: CameraX ImageAnalysis use case — developer.android.com/training/camerax/analyze. ImageProxy.close() requirement — developer.android.com/reference/androidx/camera/core/ImageProxy#close(). AVCaptureVideoDataOutputSampleBufferDelegate — developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate. CMSampleBuffer — developer.apple.com/documentation/coremedia/cmsamplebuffer-u71.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <div style={{ background: BLUE_LIGHT, borderRadius: "8px 8px 0 0", padding: "8px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, margin: 0 }}>🤖 Android — CameraX ImageAnalysis</p>
          </div>
          <div style={{ border: `1px solid ${BLUE_LIGHT}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "12px 14px" }}>
            <p style={{ fontSize: 12, color: TEXT, margin: "0 0 8px", lineHeight: 1.5 }}>CameraX has three <em>use cases</em> you bind to the lifecycle:</p>
            {[
              { uc: "Preview", desc: "Shows the viewfinder on screen" },
              { uc: "ImageCapture", desc: "Takes a single photo (Week 7)" },
              { uc: "ImageAnalysis ★", desc: "Calls your analyzer for every frame" },
            ].map(u => (
              <div key={u.uc} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: BLUE, minWidth: 130, flexShrink: 0 }}>{u.uc}</span>
                <span style={{ fontSize: 11, color: MUTED }}>{u.desc}</span>
              </div>
            ))}
            <Warn>{"Always call imageProxy.close() when done. If you don't, CameraX stops delivering new frames entirely."}</Warn>
          </div>
        </div>
        <div>
          <div style={{ background: GREEN_LIGHT, borderRadius: "8px 8px 0 0", padding: "8px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, margin: 0 }}>🍎 iOS — AVCaptureVideoDataOutput</p>
          </div>
          <div style={{ border: `1px solid ${GREEN_LIGHT}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "12px 14px" }}>
            <p style={{ fontSize: 12, color: TEXT, margin: "0 0 8px", lineHeight: 1.5 }}>Implement <code style={{ fontSize: 11, background: GRAY, padding: "1px 5px", borderRadius: 4 }}>AVCaptureVideoDataOutputSampleBufferDelegate</code>:</p>
            {[
              { method: "captureOutput(_:didOutput:from:)", desc: "Called for each frame — gives you a CMSampleBuffer" },
              { method: "CMSampleBufferGetImageBuffer()", desc: "Extract a CVPixelBuffer from the frame" },
              { method: "VNImageRequestHandler", desc: "Feed the pixel buffer to your Vision request" },
            ].map(m => (
              <div key={m.method} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
                <code style={{ fontSize: 10, color: GREEN, background: GREEN_LIGHT, padding: "1px 5px", borderRadius: 4, flexShrink: 0 }}>{m.method}</code>
                <span style={{ fontSize: 11, color: MUTED, lineHeight: 1.4 }}>{m.desc}</span>
              </div>
            ))}
            <Warn>{"Throttle to every 4th frame (~250ms). Running Vision on all 30fps will cause thermal throttling and drain the battery fast."}</Warn>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 9: CODE-ALONG INTRO ───
  () => (
    <Shell tag="Live code-along" timer="12" title="Let's build together — MLScanner" subtitle="New project. Open your IDE." dark notes="New project from scratch. Walk through this in order: permission wrapper first, then preview, then attach ML labeling, then the text mode toggle. Don't rush the permission step — it's where most students get stuck and it sets up a pattern they'll use in the capstone. Build on Android first while iOS students follow along, then show the iOS equivalent for each step. | Sources: Accompanist permissions library — google.github.io/accompanist/permissions. AVAuthorizationStatus — developer.apple.com/documentation/avfoundation/avauthorizationstatus. CameraX with Compose — developer.android.com/training/camerax/compose.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { n: "01", title: "New project — MLScanner", sub: "Add CameraX + ML Kit / Vision deps", time: "2 min" },
          { n: "02", title: "Camera permission wrapper", sub: "Handle granted / denied / not-yet-asked", time: "3 min" },
          { n: "03", title: "Live camera preview", sub: "CameraPreview composable / AVCaptureSession + UIViewRepresentable", time: "4 min" },
          { n: "04", title: "Attach image labeling", sub: "ImageAnalysis → ML Kit / VNClassifyImageRequest per frame", time: "8 min" },
          { n: "05", title: "Overlay on the viewfinder", sub: "Box layout with labels at the bottom", time: "4 min" },
          { n: "06", title: "Add text recognition mode", sub: "ScanMode enum + TextRecognizer / VNRecognizeTextRequest", time: "5 min" },
          { n: "07", title: "Mode toggle in the UI", sub: "Segmented control to switch Label ↔ Text", time: "2 min" },
          { n: "08", title: "Stub the Gallery tab", sub: "Bottom nav / TabView with placeholder for Session 2", time: "2 min" },
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

  // ─── 10: CODE — PERMISSION + PREVIEW ───
  () => (
    <Shell tag="Live code-along" timer="5" title="Part 1 — permission wrapper and live preview" notes="Start with a completely empty project. Add the permission wrapper before touching the camera — students who skip this will get silent crashes on real devices. The three-branch pattern (granted / shouldShowRationale / else) is worth explaining: Android has a subtlety where if the user denies twice, you can't ask again and must send them to Settings. | Sources: Android runtime permissions guide — developer.android.com/training/permissions/requesting. shouldShowRationale explained — developer.android.com/training/permissions/requesting#explain. Accompanist rememberPermissionState — google.github.io/accompanist/permissions/#usage. iOS AVCaptureDevice.requestAccess — developer.apple.com/documentation/avfoundation/avcapturedevice/1624584-requestaccess.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Android — CameraPermissionWrapper.kt" accent={BLUE}>{`@Composable
fun CameraPermissionWrapper() {
    val permission = rememberPermissionState(
        Manifest.permission.CAMERA
    )
    when {
        permission.status.isGranted ->
            CameraScreen()

        permission.status.shouldShowRationale ->
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(32.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                Text("Camera needed to scan objects.")
                Spacer(Modifier.height(12.dp))
                Button(onClick = {
                    permission.launchPermissionRequest()
                }) { Text("Grant Permission") }
            }

        else ->
            LaunchedEffect(Unit) {
                permission.launchPermissionRequest()
            }
    }
}
// Dependency: accompanist-permissions:0.32.0`}</CodePane>
        <CodePane title="iOS — CameraPermissionView.swift" accent={GREEN}>{`import AVFoundation

class CameraPermissionManager: ObservableObject {
    @Published var status: AVAuthorizationStatus =
        AVCaptureDevice.authorizationStatus(for: .video)

    func requestPermission() {
        AVCaptureDevice.requestAccess(for: .video) { granted in
            DispatchQueue.main.async {
                self.status = granted
                    ? .authorized : .denied
            }
        }
    }
}

struct ContentView: View {
    @StateObject private var perm =
        CameraPermissionManager()

    var body: some View {
        switch perm.status {
        case .authorized:
            CameraView()
        case .denied:
            VStack(spacing: 16) {
                Text("Camera access required.")
                Button("Open Settings") {
                    UIApplication.shared.open(URL(
                        string: UIApplication
                            .openSettingsURLString)!)
                }
            }
        default:
            Color.clear.onAppear {
                perm.requestPermission()
            }
        }
    }
}`}</CodePane>
      </div>
    </Shell>
  ),

  // ─── 11: CODE — ATTACH ML LABELING ───
  () => (
    <Shell tag="Live code-along" timer="8" title="Part 2 — attach ML labeling to the camera feed" notes="This is the core of the session. The key insight to emphasise: we're not changing the camera code at all — we're just plugging a callback into the existing frame pipeline. The camera delivers frames; we hand them to ML Kit / Vision; we get back labels; we update state. The UI reacts to the state change and re-renders the overlay. This is MVVM in action. | Sources: ML Kit image labeling Android — developers.google.com/ml-kit/vision/image-labeling/android. InputImage from MediaImage — developers.google.com/ml-kit/reference/android/com/google/mlkit/vision/common/InputImage. ImageProxy.close() — developer.android.com/reference/androidx/camera/core/ImageProxy#close() (CRITICAL: failing to call this stalls the pipeline). VNClassifyImageRequest — developer.apple.com/documentation/vision/vnclassifyimagerequest. VNImageRequestHandler — developer.apple.com/documentation/vision/vnimagerequesthandler.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Android — image labeling on each frame" accent={BLUE}>{`// In ViewModel:
private val labeler = ImageLabeling.getClient(
    ImageLabelerOptions.DEFAULT_OPTIONS
)
private val _labels = MutableStateFlow<List<String>>(emptyList())
val labels: StateFlow<List<String>> = _labels

fun analyzeFrame(imageProxy: ImageProxy) {
    val image = InputImage.fromMediaImage(
        imageProxy.image!!,
        imageProxy.imageInfo.rotationDegrees
    )
    labeler.process(image)
        .addOnSuccessListener { results ->
            _labels.value = results.take(3).map {
                "\${it.text}  \${(it.confidence*100).toInt()}%"
            }
        }
        .addOnCompleteListener {
            imageProxy.close() // ← CRITICAL
        }
}

// In CameraScreen:
Box(modifier = Modifier.fillMaxSize()) {
    CameraPreview(onFrameAnalyzed = {
        viewModel.analyzeFrame(it)
    })
    Column(
        modifier = Modifier
            .align(Alignment.BottomCenter)
            .fillMaxWidth()
            .background(Color.Black.copy(alpha = 0.55f))
            .padding(16.dp)
    ) {
        labels.forEach { label ->
            Text(label, color = Color.White,
                fontSize = 16.sp,
                fontWeight = FontWeight.Medium)
        }
    }
}`}</CodePane>
        <CodePane title="iOS — VNClassifyImageRequest on live frames" accent={GREEN}>{`class MLScannerViewModel: ObservableObject {
    @Published var detectedLabels: [String] = []
    private var lastProcessed: TimeInterval = 0

    func processFrame(_ buffer: CMSampleBuffer) {
        // Throttle to ~4 fps
        let now = Date().timeIntervalSince1970
        guard now - lastProcessed > 0.25 else { return }
        lastProcessed = now

        guard let pixelBuffer =
            CMSampleBufferGetImageBuffer(buffer)
        else { return }

        let request = VNClassifyImageRequest {
            [weak self] req, _ in
            let top = (req.results
                as? [VNClassificationObservation])?
                .prefix(3)
                .filter { \$0.confidence > 0.08 }
                .map {
                    "\(\$0.identifier)  "
                    + "\(Int(\$0.confidence*100))%"
                } ?? []
            DispatchQueue.main.async {
                self?.detectedLabels = top
            }
        }
        try? VNImageRequestHandler(
            cvPixelBuffer: pixelBuffer,
            orientation: .up
        ).perform([request])
    }
}

// In SwiftUI:
ZStack(alignment: .bottom) {
    CameraPreviewView(session: cameraManager.session)
    VStack(alignment: .leading, spacing: 6) {
        ForEach(viewModel.detectedLabels, id: \.self) {
            label in
            Text(label)
                .foregroundColor(.white)
                .font(.title3).fontWeight(.medium)
        }
    }
    .frame(maxWidth: .infinity, alignment: .leading)
    .padding()
    .background(.black.opacity(0.55))
}`}</CodePane>
      </div>
    </Shell>
  ),

  // ─── 12: CODE — TEXT RECOGNITION MODE ───
  () => (
    <Shell tag="Live code-along" timer="6" title="Part 3 — adding text recognition (OCR) mode" subtitle="One enum, one toggle, two completely different capabilities" notes="The elegance here is in the enum. ScanMode.LABEL and ScanMode.TEXT share the same camera pipeline — the only thing that changes is which request you send the frame to. This is a good moment to pause and ask: how would you add a third mode? (barcode scanning, face detection, etc.) The answer is obvious once students see the pattern. | Sources: ML Kit text recognition v2 — developers.google.com/ml-kit/vision/text-recognition/v2/android. TextRecognition.getClient() — developers.google.com/ml-kit/reference/android/com/google/mlkit/vision/text/TextRecognition. VNRecognizeTextRequest — developer.apple.com/documentation/vision/vnrecognizetextrequest. VNRecognizeTextRequest.recognitionLevel — developer.apple.com/documentation/vision/vnrecognizetextrequest/recognitionlevel (.accurate vs .fast tradeoff). Compose FilterChip — developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#FilterChip. SwiftUI Picker segmented style — developer.apple.com/documentation/swiftui/pickerstyle/segmented.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Android — ScanMode + TextRecognition" accent={BLUE}>{`enum class ScanMode { LABEL, TEXT }

private val textRecognizer = TextRecognition.getClient(
    TextRecognizerOptions.DEFAULT_OPTIONS
)

fun analyzeFrame(imageProxy: ImageProxy, mode: ScanMode) {
    val image = InputImage.fromMediaImage(
        imageProxy.image!!,
        imageProxy.imageInfo.rotationDegrees
    )
    when (mode) {
        ScanMode.LABEL ->
            labeler.process(image)
                .addOnSuccessListener { results ->
                    _labels.value = results.take(3).map {
                        "\${it.text} \${(it.confidence*100).toInt()}%"
                    }
                }
                .addOnCompleteListener {
                    imageProxy.close()
                }

        ScanMode.TEXT ->
            textRecognizer.process(image)
                .addOnSuccessListener { text ->
                    _labels.value =
                        if (text.text.isBlank())
                            listOf("No text detected")
                        else
                            listOf(text.text.take(240))
                }
                .addOnCompleteListener {
                    imageProxy.close()
                }
    }
}

// In Compose UI — segmented control to switch:
Row(horizontalArrangement = Arrangement.Center,
    modifier = Modifier.fillMaxWidth()) {
    ScanMode.values().forEach { mode ->
        FilterChip(
            selected = currentMode == mode,
            onClick = { currentMode = mode },
            label = { Text(mode.name) }
        )
        Spacer(Modifier.width(8.dp))
    }
}`}</CodePane>
        <CodePane title="iOS — ScanMode enum + VNRecognizeTextRequest" accent={GREEN}>{`enum ScanMode { case label, text }

func processFrame(
    _ buffer: CMSampleBuffer,
    mode: ScanMode
) {
    let now = Date().timeIntervalSince1970
    guard now - lastProcessed > 0.25 else { return }
    lastProcessed = now
    guard let pixelBuffer =
        CMSampleBufferGetImageBuffer(buffer)
    else { return }

    let request: VNRequest
    switch mode {
    case .label:
        let r = VNClassifyImageRequest { [weak self] req, _ in
            let top = (req.results
                as? [VNClassificationObservation])?
                .prefix(3).filter { \$0.confidence > 0.08 }
                .map { "\(\$0.identifier)  "
                    + "\(Int(\$0.confidence*100))%" }
                ?? []
            DispatchQueue.main.async {
                self?.detectedLabels = top
            }
        }
        request = r

    case .text:
        let r = VNRecognizeTextRequest { [weak self] req, _ in
            let text = (req.results
                as? [VNRecognizedTextObservation])?
                .compactMap { \$0.topCandidates(1).first?.string }
                .joined(separator: " ") ?? ""
            DispatchQueue.main.async {
                self?.detectedLabels = text.isEmpty
                    ? ["No text detected"] : [text]
            }
        }
        r.recognitionLevel = .accurate
        request = r
    }
    try? VNImageRequestHandler(
        cvPixelBuffer: pixelBuffer, orientation: .up
    ).perform([request])
}

// Picker in SwiftUI:
Picker("Mode", selection: \$scanMode) {
    Text("Label").tag(ScanMode.label)
    Text("Text").tag(ScanMode.text)
}.pickerStyle(.segmented).padding()`}</CodePane>
      </div>
    </Shell>
  ),

  // ─── 13: KEY GOTCHAS ───
  () => (
    <Shell tag="Watch out" timer="3" title="The three gotchas that will bite you" notes="These come up every time. Put them on screen before lab so students can refer back. The imageProxy.close() one is the most common — it causes a mysterious bug where labels update for about 10 seconds and then freeze, which is very hard to diagnose without knowing to look for it. | Sources: ImageProxy.close() requirement — developer.android.com/reference/androidx/camera/core/ImageProxy#close() ('The image data becomes invalid after this method is called'). CameraX backpressure strategy — developer.android.com/reference/androidx/camera/core/ImageAnalysis#STRATEGY_KEEP_ONLY_LATEST (explains why not closing causes stalls). Vision framework performance best practices — developer.apple.com/documentation/vision/recognizing_text_in_images (throttling guidance). iOS thermal state monitoring — developer.apple.com/documentation/foundation/processinfo/thermalstate (what happens when you don't throttle). NSCameraUsageDescription requirement — developer.apple.com/documentation/uikit/protecting_the_user_s_privacy/requesting_access_to_protected_resources.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
        {[
          {
            title: "1. Not closing the ImageProxy (Android)",
            detail: "If you don't call imageProxy.close() in addOnCompleteListener, CameraX will stop delivering new frames after a few seconds. Labels freeze. The camera preview keeps running. Very confusing to debug.",
            fix: "Always close in addOnCompleteListener — not addOnSuccessListener. The complete listener fires whether the analysis succeeded or failed.",
            color: RED_LIGHT, fg: RED,
          },
          {
            title: "2. Running ML on every frame (both platforms)",
            detail: "A modern camera runs at 30fps. Running a Vision request or ML Kit on every frame will spike CPU/GPU usage, cause thermal throttling, and drain the battery in minutes on a real device.",
            fix: "Throttle to 4 fps (250ms gap). Labels still look smooth, power usage drops dramatically. Track the last processed timestamp and skip frames that arrive too soon.",
            color: AMBER_LIGHT, fg: "#633806",
          },
          {
            title: "3. Forgetting to declare camera permission (iOS)",
            detail: "On iOS, if NSCameraUsageDescription is missing from Info.plist, the app crashes silently when you request camera access. No error message, no log — just a crash.",
            fix: "Add NSCameraUsageDescription to Info.plist before writing any camera code. Make this the very first thing you do when creating the project.",
            color: PURPLE_LIGHT, fg: PURPLE_DARK,
          },
        ].map(g => (
          <div key={g.title} style={{ background: g.color, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: g.fg, margin: "0 0 4px" }}>{g.title}</p>
            <p style={{ fontSize: 12, color: g.fg, margin: "0 0 6px", lineHeight: 1.5, opacity: 0.85 }}>{g.detail}</p>
            <p style={{ fontSize: 12, color: g.fg, margin: 0, lineHeight: 1.5 }}><strong>Fix:</strong> {g.fix}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── 14: LAB INTRO ───
  () => (
    <Shell tag="Lab intro" timer="3" title="Lab time — what you're building" subtitle="~50 minutes · Go to the Lab tab → Session 1" notes="Keep this to 3 minutes. Students are eager to build. Walk through the step list in 60 seconds, emphasise the Gallery tab stub at the end — that's the Session 2 handoff and it's important they don't skip it. Remind them that the TA will check their work before they leave. | Sources: ML Kit image labeling quickstart — developers.google.com/ml-kit/vision/image-labeling/android#before_you_begin. Vision framework getting started — developer.apple.com/documentation/vision/classifying_images_with_vision_and_core_ml. CameraX getting started — developer.android.com/training/camerax/getting-started. Accompanist permissions setup — google.github.io/accompanist/permissions/#setup.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Session 1 lab steps</p>
          {[
            { n: 0, t: "New project — MLScanner",          time: "3 min" },
            { n: 1, t: "Camera permission wrapper",          time: "5 min" },
            { n: 2, t: "Live camera preview",                time: "10 min" },
            { n: 3, t: "Image labeling on frames",           time: "15 min" },
            { n: 4, t: "Text recognition mode toggle",       time: "10 min" },
            { n: 5, t: "Polish + stub the Gallery tab",      time: "8 min" },
            { n: 6, t: "Reflect (3 questions)",              time: "4 min" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "center" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: 4, fontSize: 10, fontWeight: 700, padding: "1px 6px", flexShrink: 0 }}>Step {s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, flex: 1 }}>{s.t}</span>
              <span style={{ fontSize: 11, color: MUTED, flexShrink: 0 }}>{s.time}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 6px" }}>✓ End of Session 1 checkpoint</p>
            <p style={{ fontSize: 12, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Scanner works in both Label and Text modes. Bottom nav / TabView in place with a Gallery placeholder. TA signs off before you leave.</p>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#633806", margin: "0 0 6px" }}>Session 2 preview</p>
            <p style={{ fontSize: 12, color: "#633806", margin: 0, lineHeight: 1.5 }}>You'll extend MLScanner — build out the Gallery tab with a photo picker, run Gemini Nano or Apple Intelligence on the photo on-device, and verify it works in airplane mode.</p>
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
      <p style={{ fontSize: 15, color: MUTED, margin: "0 0 28px", maxWidth: 400, lineHeight: 1.6 }}>Stretch, grab water, get comfortable. Lab starts in 5 minutes.</p>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 10, padding: "14px 24px", maxWidth: 400 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 6px" }}>While you wait</p>
        <p style={{ fontSize: 12, color: PURPLE, margin: 0, lineHeight: 1.5 }}>Start your emulator or simulator now if it isn't already running. First boot can take a few minutes.</p>
      </div>
      <Notes>{"Leave this slide up for the full 5 minutes. Walk around, answer quick questions informally."}</Notes>
    </div>
  ),

  // ─── 16: WRAP-UP ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Session 1 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>You built a real-time AI scanner that runs entirely on the device.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you built today</p>
            {["Live camera feed with ML overlay", "Real-time image labeling on every frame", "Text recognition (OCR) mode", "Mode toggle between Label and Text", "Bottom nav stub ready for Session 2"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Session 2 — next class</p>
            {["Extend MLScanner — open your project", "Build out the Gallery tab", "Pick a photo → run Gemini Nano / Apple Intelligence", "Verify it works in airplane mode", "Compare on-device vs cloud — same photo, both APIs", "Capstone M3 check-ins during lab (10 min/team)"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: AMBER, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 10, background: "rgba(255,255,255,0.12)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Come with MLScanner open and the Gallery tab stubbed. Session 2 builds directly on Session 1.</p>
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
      <Notes>{"End with genuine energy. A live ML scanner on a real phone is impressive — students can show this to anyone and it looks like magic. Remind them to fill out the survey."}</Notes>
    </div>
  ),

];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 8 · Session 1 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>On-device AI — the live scanner</p>
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
