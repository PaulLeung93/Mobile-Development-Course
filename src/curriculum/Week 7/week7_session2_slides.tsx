import { useState } from "react";

const PURPLE      = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT= "#EEEDFE";
const TEAL        = "#1D9E75";
const TEAL_DARK   = "#0F6E56";
const TEAL_LIGHT  = "#E1F5EE";
const AMBER       = "#EF9F27";
const AMBER_LIGHT = "#FAEEDA";
const AMBER_DARK  = "#633806";
const BLUE        = "#185FA5";
const BLUE_LIGHT  = "#E6F1FB";
const GREEN       = "#3B6D11";
const GREEN_LIGHT = "#EAF3DE";
const CORAL       = "#993C1D";
const CORAL_LIGHT = "#FAECE7";
const GRAY        = "#F5F5F7";
const TEXT        = "#1a1a2e";
const MUTED       = "#6b7280";

const Tag = ({ children, color = "purple" }) => {
  const map = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: AMBER_DARK },
    blue:   { bg: BLUE_LIGHT,   fg: BLUE },
    green:  { bg: GREEN_LIGHT,  fg: GREEN },
    coral:  { bg: CORAL_LIGHT,  fg: CORAL },
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

const Callout = ({ color = "amber", label, children }) => {
  const map = { amber: { bg: AMBER_LIGHT, fg: AMBER_DARK, border: AMBER }, teal: { bg: TEAL_LIGHT, fg: TEAL_DARK, border: TEAL }, coral: { bg: CORAL_LIGHT, fg: CORAL, border: CORAL }, blue: { bg: BLUE_LIGHT, fg: BLUE, border: BLUE } };
  const c = map[color] || map.amber;
  return (
    <div style={{ background: c.bg, borderLeft: `3px solid ${c.border}`, borderRadius: "0 8px 8px 0", padding: "10px 14px", marginTop: 10 }}>
      {label && <p style={{ fontSize: 10, fontWeight: 700, color: c.fg, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</p>}
      <p style={{ fontSize: 12, color: c.fg, margin: 0, lineHeight: 1.5 }}>{children}</p>
    </div>
  );
};

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

const Shell = ({ tag, tagColor = "teal", timer, title, subtitle, children, notes }) => (
  <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px 22px", minHeight: 340 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag color="purple">Week 7 · S2</Tag>
        {tag && <Tag color={tagColor}>{tag}</Tag>}
      </div>
      {timer && <span style={{ fontSize: 11, color: MUTED, background: GRAY, padding: "2px 8px", borderRadius: 20 }}>{timer} min</span>}
    </div>
    <h2 style={{ fontSize: 18, fontWeight: 500, color: TEXT, margin: "0 0 4px", lineHeight: 1.3 }}>{title}</h2>
    {subtitle && <p style={{ fontSize: 13, color: MUTED, margin: "0 0 12px" }}>{subtitle}</p>}
    <div style={{ marginTop: 10 }}>{children}</div>
    {notes && <Notes>{notes}</Notes>}
  </div>
);

const Arrow = ({ label, color = MUTED, horizontal = false }) => (
  horizontal
    ? <div style={{ display: "flex", alignItems: "center", margin: "0 6px" }}>
        <div style={{ height: 2, width: 16, background: color, opacity: 0.5 }} />
        <div style={{ width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: `6px solid ${color}`, opacity: 0.5 }} />
        {label && <p style={{ fontSize: 10, color, margin: "0 0 0 4px", opacity: 0.7 }}>{label}</p>}
      </div>
    : <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "4px 0" }}>
        <div style={{ width: 2, height: 10, background: color, opacity: 0.5 }} />
        <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `6px solid ${color}`, opacity: 0.5 }} />
        {label && <p style={{ fontSize: 10, color, margin: "2px 0 0", opacity: 0.7 }}>{label}</p>}
      </div>
);

// ─── SLIDES ────────────────────────────────────────────────────────────────

const slides = [

  // 1 ─ Title
  () => (
    <div style={{ background: `linear-gradient(135deg, ${TEAL_DARK} 0%, ${TEAL} 60%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 600, background: BLUE_LIGHT, color: BLUE, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>Android track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: GREEN_LIGHT, color: GREEN, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>iOS track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: "rgba(255,255,255,0.2)", color: "#fff", padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>Multimodal</span>
        </div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 7 · Session 2</p>
        <h1 style={{ fontSize: 30, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.2 }}>Mobile as an input device</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", margin: "0 0 28px" }}>Multimodal messages · Camera & gallery · Vision API · What's next</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "Session 1 recap — what we built",
            "Text is just one modality",
            "What makes mobile uniquely powerful for AI",
            "The multimodal message structure",
            "Base64 — what it is and why APIs use it",
            "Camera vs. gallery — two UX patterns",
            "Platform permissions model",
            "Image size, compression, and cost tradeoffs",
            "Live demo — PhotoDescriber",
            "Week 8 preview — what if there's no network?",
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

  // 2 ─ Session 1 Recap
  () => (
    <Shell tag="Recap" tagColor="blue" timer="5" title="Session 1 recap — what we built" subtitle="A quick look back before we go further">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: BLUE_LIGHT, borderRadius: 10, padding: "14px 16px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".05em" }}>What we built</p>
          {[
            "ChatWithClaude — a streaming chat app",
            "POST to Claude Messages API",
            "SSE streaming: response appears word by word",
            "Secure API key storage",
            "MVVM with StateFlow / @Published",
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 6, marginBottom: 5 }}>
              <span style={{ color: BLUE, flexShrink: 0, fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: 12, color: BLUE, lineHeight: 1.4 }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: PURPLE_LIGHT, borderRadius: 10, padding: "14px 16px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".05em" }}>The key insight</p>
          <p style={{ fontSize: 13, color: PURPLE_DARK, lineHeight: 1.6, margin: "0 0 10px" }}>The Claude API is just HTTP. Request in, response out. Once you know the pattern, you can build anything on top of it.</p>
          <p style={{ fontSize: 13, color: PURPLE_DARK, lineHeight: 1.6, margin: 0, fontWeight: 600 }}>Today we extend that pattern — but the input changes.</p>
        </div>
      </div>
      <div style={{ marginTop: 12, background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px" }}>
        <p style={{ fontSize: 12, color: AMBER_DARK, margin: 0, lineHeight: 1.5 }}>
          <strong>Session 1 = make it work.</strong> You can talk to Claude from a mobile app. Today: <strong>Session 2 = expand what "talk" means.</strong>
        </p>
      </div>
      <Notes>Spend 2–3 minutes on this. Ask: who got streaming working? Who got stuck? Normalize the struggle — the SSE parsing is genuinely fiddly. Then pivot: "Today we're doing something conceptually different — not a new API trick, but a new idea about what the input to an AI can be."</Notes>
    </Shell>
  ),

  // 3 ─ Text is just one modality
  () => (
    <Shell tag="Concept" tagColor="purple" timer="5" title="Text is just one modality" subtitle="LLMs didn't start multimodal — they grew into it">
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6, margin: "0 0 12px" }}>
            When you call the Messages API with a string, you're using the simplest possible input: plain text. But the same API can accept <strong>mixed content</strong> — text, images, and documents combined in a single message.
          </p>
          <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6, margin: "0 0 12px" }}>
            Each <code style={{ background: GRAY, padding: "1px 5px", borderRadius: 4, fontSize: 12 }}>content</code> block in a message can be a different type:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
            {[
              { type: "text", desc: "A string — what you used in Session 1", color: BLUE_LIGHT, fg: BLUE },
              { type: "image", desc: "A base64-encoded image or a URL", color: GREEN_LIGHT, fg: GREEN },
              { type: "document", desc: "A PDF or plain-text file (Claude 3+)", color: PURPLE_LIGHT, fg: PURPLE_DARK },
            ].map(r => (
              <div key={r.type} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ background: r.color, color: r.fg, fontFamily: "monospace", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 6, flexShrink: 0 }}>{r.type}</span>
                <span style={{ fontSize: 12, color: MUTED }}>{r.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: 180, flexShrink: 0 }}>
          <div style={{ background: GRAY, borderRadius: 10, padding: "12px", fontSize: 11, fontFamily: "monospace", color: TEXT, lineHeight: 1.7 }}>
            <span style={{ color: PURPLE }}>messages</span>: [{"\n"}
            {"  {"}<span style={{ color: TEAL }}>"role"</span>: <span style={{ color: AMBER_DARK }}>"user"</span>,{"\n"}
            {"   "}<span style={{ color: TEAL }}>"content"</span>: [{"\n"}
            {"    {"}<span style={{ color: TEAL }}>"type"</span>: <span style={{ color: AMBER_DARK }}>"image"</span>,{"\n"}
            {"     ..."}{"},\n"}
            {"    {"}<span style={{ color: TEAL }}>"type"</span>: <span style={{ color: AMBER_DARK }}>"text"</span>,{"\n"}
            {"     "}<span style={{ color: TEAL }}>"text"</span>: <span style={{ color: AMBER_DARK }}>"Describe this"</span>{"\n"}
            {"    }"}
            {"\n   ]\n  }"}
            {"\n]"}
          </div>
          <p style={{ fontSize: 10, color: MUTED, margin: "6px 0 0", textAlign: "center" }}>content is now an array, not a string</p>
        </div>
      </div>
      <Info>The Claude docs call this a "vision" feature, but the underlying mechanism is just: content blocks. Once you understand that, sending an image is just adding one more block to the array.</Info>
      <Notes>Source: https://docs.anthropic.com/en/api/messages — the content field documentation. Key point to emphasise: in Session 1, messages was [{"{"}role: "user", content: "hello"{"}"}] — content was a plain string. Today content becomes an array. That's the only structural change.</Notes>
    </Shell>
  ),

  // 4 ─ Why mobile is uniquely positioned
  () => (
    <Shell tag="Concept" tagColor="teal" timer="5" title="Why mobile is uniquely positioned for multimodal AI" subtitle="A phone is a rich input machine — not just a small screen">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {[
          { icon: "📷", label: "Camera", desc: "Photos, video, live frames, document scanning, AR overlays — the most versatile sensor on any device", color: TEAL_LIGHT, fg: TEAL_DARK },
          { icon: "🎙️", label: "Microphone", desc: "Voice commands, ambient sound classification, speech-to-text for hands-free AI interaction", color: TEAL_LIGHT, fg: TEAL_DARK },
          { icon: "📍", label: "GPS & Location", desc: "Geofencing, region-aware responses, location-tagged photos — context no desktop has", color: BLUE_LIGHT, fg: BLUE },
          { icon: "🏃", label: "Accelerometer & Gyroscope", desc: "Motion state (walking, driving, still), shake gestures, pose estimation, activity-aware AI", color: BLUE_LIGHT, fg: BLUE },
          { icon: "👆", label: "Touch & Stylus", desc: "Handwriting recognition, drawn diagrams as AI input, pressure-sensitive gestures, pinch-to-crop", color: PURPLE_LIGHT, fg: PURPLE_DARK },
          { icon: "📡", label: "Bluetooth, NFC & UWB", desc: "Proximity to IoT devices, smart tag reading, spatial awareness of nearby hardware", color: PURPLE_LIGHT, fg: PURPLE_DARK },
          { icon: "🔐", label: "Biometrics", desc: "Face ID / fingerprint to gate sensitive AI actions, per-user personalisation, secure confirmations", color: AMBER_LIGHT, fg: AMBER_DARK },
          { icon: "🔋", label: "Always-on Presence", desc: "A phone is always with you — background triggers, notifications, geofence + AI, passive context capture", color: AMBER_LIGHT, fg: AMBER_DARK },
        ].map(s => (
          <div key={s.label} style={{ display: "flex", gap: 8, background: s.color, borderRadius: 8, padding: "8px 10px" }}>
            <span style={{ fontSize: 16, flexShrink: 0 }}>{s.icon}</span>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: s.fg, margin: "0 0 1px" }}>{s.label}</p>
              <p style={{ fontSize: 10, color: s.fg, margin: 0, lineHeight: 1.35, opacity: 0.85 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "8px 12px", marginTop: 10 }}>
        <p style={{ fontSize: 11, color: AMBER_DARK, margin: 0, lineHeight: 1.5 }}>
          <strong>The takeaway:</strong> A phone doesn't just have a camera — it's an always-on, context-rich sensor platform. The most compelling AI features on mobile are the ones that would be impossible anywhere else.
        </p>
      </div>
      <Notes>Walk through each row and ask students which ones they've seen used in real apps. Most will get camera and mic immediately, but GPS + AI (e.g. Google Maps suggestions), accelerometer + AI (e.g. fall detection), and Bluetooth + AI (e.g. AirTag) are often surprising. The point: desktop AI apps are limited to text and file upload. Mobile AI apps can sense the real world.</Notes>
    </Shell>
  ),

  // 4b ─ Discussion: mobile-only AI ideas
  () => (
    <Shell tag="Discussion" tagColor="teal" timer="3" title="What can you build that only works on a phone?" subtitle="Combine two or more of those inputs — what app idea emerges?">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: TEAL_DARK, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".05em" }}>Starter combinations</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { combo: "📷 + 📍", idea: "Point at a plant → identify species by region" },
              { combo: "🎙️ + 📷", idea: "\"What am I looking at?\" — spoken question about a live frame" },
              { combo: "📷 + 👆", idea: "Circle an object in a photo → ask AI about just that area" },
              { combo: "🏃 + 🔋", idea: "Detect driving → auto-summarise missed messages on arrival" },
              { combo: "📡 + 📍", idea: "Walk near a museum exhibit (NFC) → AI narrates its history" },
              { combo: "🔐 + 🎙️", idea: "Face-verified voice journal → private AI life coach" },
            ].map(r => (
              <div key={r.combo} style={{ display: "flex", gap: 8, background: TEAL_LIGHT, borderRadius: 8, padding: "7px 10px" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: TEAL_DARK, flexShrink: 0, minWidth: 44 }}>{r.combo}</span>
                <span style={{ fontSize: 11, color: TEAL_DARK, lineHeight: 1.4 }}>{r.idea}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Discussion>{"Think of an app idea that's only possible on mobile — not just because it's on a phone, but because it genuinely needs two or more of these inputs working together. Share with a neighbour."}</Discussion>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>The litmus test</p>
            <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>Could a user accomplish this by uploading a file to a website? If yes, it's not a mobile-native AI feature. If no — you've found something worth building.</p>
          </div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "10px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: TEXT, margin: "0 0 4px" }}>Today's lab</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>We start with the most universal mobile input: the <strong>camera</strong>. Take a photo → send to Claude → get a description. But keep your multi-sensor idea in mind — it could be your final project.</p>
          </div>
        </div>
      </div>
      <Notes>Give students 60–90 seconds to brainstorm with a neighbour. Then cold-call 2–3 pairs. The best answers always involve sensor fusion — not just "camera + AI" but "camera + location + time of day." Reinforce that today's lab is the foundation: once you can send one image, combining it with other sensor data is just adding more context to the prompt string.</Notes>
    </Shell>
  ),

  // 4b ─ Three modalities
  () => (
    <Shell tag="Concept" tagColor="purple" timer="6" title="Three input modalities — how they reach Claude" subtitle="Same API pattern, different content block types">
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
        {[
          {
            icon: "📷", label: "Images", tag: "Lab today", tagBg: TEAL_LIGHT, tagFg: TEAL_DARK,
            what: "A photo, screenshot, or camera frame encoded as base64 JPEG/PNG",
            code: '{ "type": "image", "source": { "type": "base64",\n  "media_type": "image/jpeg", "data": "..." } }',
            usecase: "Visual identification, OCR, scene description, document scanning",
            accent: TEAL_DARK,
          },
          {
            icon: "🎙️", label: "Audio (via transcription)", tag: "Transcribe first", tagBg: BLUE_LIGHT, tagFg: BLUE,
            what: "Claude does not accept raw audio — transcribe on-device first, then send the transcript as a text block",
            code: '// 1. Transcribe: Android SpeechRecognizer / iOS SFSpeechRecognizer\n// 2. Send transcript:\n{ "type": "text", "text": "<transcribed speech>" }',
            usecase: "Voice commands, meeting notes, voice-to-action, dictation",
            accent: BLUE,
          },
          {
            icon: "📄", label: "Documents", tag: "Claude 3+ only", tagBg: PURPLE_LIGHT, tagFg: PURPLE_DARK,
            what: "A PDF or plain-text file sent as base64 — Claude reads and reasons over the full content",
            code: '{ "type": "document", "source": { "type": "base64",\n  "media_type": "application/pdf", "data": "..." } }',
            usecase: "Contract analysis, study materials, form extraction, report summarisation",
            accent: PURPLE_DARK,
          },
        ].map(r => (
          <div key={r.label} style={{ display: "flex", gap: 12, background: "var(--color-background-secondary)", borderRadius: 10, padding: "12px 14px", borderLeft: `3px solid ${r.accent}` }}>
            <div style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{r.icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: 0 }}>{r.label}</p>
                <span style={{ fontSize: 10, fontWeight: 600, background: r.tagBg, color: r.tagFg, padding: "1px 7px", borderRadius: 20 }}>{r.tag}</span>
              </div>
              <p style={{ fontSize: 12, color: MUTED, margin: "0 0 5px", lineHeight: 1.4 }}>{r.what}</p>
              <pre style={{ margin: "0 0 5px", background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "6px 10px", borderRadius: 6, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{r.code}</pre>
              <p style={{ fontSize: 11, color: r.accent, margin: 0, fontWeight: 500 }}>{"Use cases: " + r.usecase}</p>
            </div>
          </div>
        ))}
      </div>
      <Callout color="amber" label="Today's focus">The lab uses images — the most universally available mobile input. The document pattern is identical. Audio just needs a transcription step first, then it's plain text.</Callout>
      <Notes>{"Source for document support: https://docs.anthropic.com/en/docs/build-with-claude/files. Source for vision: https://docs.anthropic.com/en/docs/build-with-claude/vision. Important audio note: as of mid-2025, Claude does not accept raw audio as a content block. The correct pattern is: record on device -> transcribe with Android SpeechRecognizer or iOS SFSpeechRecognizer (or OpenAI Whisper) -> send transcript as a text block. Worth stating explicitly so students don't go looking for an audio content type."}</Notes>
    </Shell>
  ),

  // 5 ─ The message structure change
  () => (
    <Shell tag="API" tagColor="blue" timer="6" title="The multimodal message structure" subtitle="One structural change unlocks image input">
      <div style={{ display: "flex", gap: 14 }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Session 1 — text only</p>
          <CodePane title="Request body" accent={BLUE}>{`{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "What's the weather like?"
    }
  ]
}`}</CodePane>
          <p style={{ fontSize: 11, color: MUTED, marginTop: 6 }}>content is a <strong>string</strong></p>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: TEAL_DARK, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Session 2 — multimodal</p>
          <CodePane title="Request body" accent={TEAL_DARK}>{`{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "image",
          "source": {
            "type": "base64",
            "media_type": "image/jpeg",
            "data": "<base64 string>"
          }
        },
        {
          "type": "text",
          "text": "Describe this image."
        }
      ]
    }
  ]
}`}</CodePane>
          <p style={{ fontSize: 11, color: MUTED, marginTop: 6 }}>content is now an <strong>array of blocks</strong></p>
        </div>
      </div>
      <Callout color="teal" label="The only change">content switches from a string to an array. Everything else — API key, model, max_tokens, response parsing — is identical to Session 1. The response is still plain text.</Callout>
      <Notes>Source: https://docs.anthropic.com/en/api/messages#vision — the vision / multimodal section. Walk through this side-by-side carefully. Students often over-complicate this in their heads. The key message: the response side is unchanged. You still get back a text completion. The only thing that changed is what you put in the content field of your message.</Notes>
    </Shell>
  ),

  // 6 ─ Base64
  () => (
    <Shell tag="Concept" tagColor="amber" timer="5" title="Base64 — what it is and why APIs use it" subtitle="Images need to travel inside a JSON string">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6, margin: "0 0 10px" }}>
            JSON is text. Images are binary. You can't put raw binary bytes inside a JSON string — they'll corrupt the encoding.
          </p>
          <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6, margin: "0 0 10px" }}>
            <strong>Base64</strong> is a simple encoding scheme that converts binary data into a safe string of 64 printable ASCII characters. Any JSON parser can handle it.
          </p>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: AMBER_DARK, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>The math</p>
            <p style={{ fontSize: 12, color: AMBER_DARK, margin: "0 0 4px", lineHeight: 1.5 }}>Every 3 bytes of binary → 4 base64 characters.</p>
            <p style={{ fontSize: 12, color: AMBER_DARK, margin: 0, lineHeight: 1.5 }}>A 500 KB JPEG becomes ~667 KB of base64 text — roughly 33% overhead.</p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: MUTED, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>What base64 looks like</p>
          <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
            <p style={{ fontSize: 10, color: "#6272a4", margin: "0 0 4px", fontFamily: "monospace" }}>// First ~80 chars of a JPEG encoded as base64</p>
            <p style={{ fontSize: 10, color: "#cdd6f4", margin: 0, fontFamily: "monospace", wordBreak: "break-all", lineHeight: 1.5 }}>/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcG BQgHBwcJCQgKDBQNDAsLDBkSEw8U...</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { label: "Platform support", val: "Built-in on Android and iOS — no dependencies" },
              { label: "Performance", val: "Fast encode for compressed JPEGs. Resize first." },
              { label: "Alternatives", val: "URL source type exists but requires public URL" },
            ].map(r => (
              <div key={r.label} style={{ background: GRAY, borderRadius: 6, padding: "6px 10px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: TEXT, margin: "0 0 1px" }}>{r.label}</p>
                <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{r.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>Students don't need to understand base64 deeply — just enough to know why it exists and not be surprised by the string they see. The key practical point: compress and resize your image before encoding, otherwise you'll hit payload size limits and slow down the API call. The Anthropic API accepts JPEG, PNG, GIF, and WebP. Max image size is 5 MB per image. Source: https://docs.anthropic.com/en/api/messages#vision</Notes>
    </Shell>
  ),

  // 7 ─ Image size and cost
  () => (
    <Shell tag="Cost" tagColor="coral" timer="4" title="Image size, compression, and cost" subtitle="Every pixel you send costs tokens">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6, margin: "0 0 10px" }}>
            Claude counts image input as tokens. A large, uncompressed photo can cost hundreds of tokens just for the image — before you've even added text.
          </p>
          <div style={{ background: CORAL_LIGHT, borderRadius: 8, padding: "10px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: CORAL, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Rough cost guide (Sonnet 4)</p>
            {[
              { size: "Small (512×512)", tokens: "~800 tokens" },
              { size: "Medium (1024×1024)", tokens: "~1600 tokens" },
              { size: "Large (2048×2048)", tokens: "~6400 tokens" },
            ].map(r => (
              <div key={r.size} style={{ display: "flex", justifyContent: "space-between", padding: "3px 0", borderBottom: `1px solid ${CORAL}20` }}>
                <span style={{ fontSize: 12, color: CORAL }}>{r.size}</span>
                <span style={{ fontSize: 12, color: CORAL, fontWeight: 600 }}>{r.tokens}</span>
              </div>
            ))}
            <p style={{ fontSize: 10, color: CORAL, margin: "6px 0 0", opacity: 0.8 }}>Pricing: $3 / M input tokens (claude-sonnet-4). Source: anthropic.com/pricing</p>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: TEXT, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".05em" }}>Best practices</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { icon: "📐", title: "Resize before encoding", desc: "Cap at 1024px on the longest side. Claude doesn't need a 12-megapixel photo to describe a coffee cup." },
              { icon: "📦", title: "Compress to JPEG", desc: "80% quality JPEG is visually indistinguishable and half the size of a lossless PNG." },
              { icon: "⏱️", title: "Latency scales with size", desc: "A smaller payload reaches the API faster, and the first token returns sooner. Users feel this." },
              { icon: "🔁", title: "Don't re-encode unnecessarily", desc: "Encode once and cache the base64 string if the user hasn't picked a new image." },
            ].map(r => (
              <div key={r.icon} style={{ display: "flex", gap: 8, background: GRAY, borderRadius: 8, padding: "8px 10px" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{r.icon}</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "0 0 1px" }}>{r.title}</p>
                  <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>Sources: https://docs.anthropic.com/en/docs/build-with-claude/vision#image-costs for token counts, and https://www.anthropic.com/pricing for pricing. The token counts use Claude's "base" image tokenisation. The practical rule: resize to max 1024px, JPEG at 80%. That handles 95% of use cases. This is a good moment to preview the cost/tradeoff discussion that will run throughout Week 8 — if you're calling the API for every photo a user takes, costs add up quickly.</Notes>
    </Shell>
  ),

  // 9 ─ The multimodal landscape
  () => (
    <Shell tag="Concept" tagColor="purple" timer="6" title="The multimodal landscape" subtitle="Inputs, fusion, AI providers, and outputs — the full picture">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>

        {/* Section 1: Sensor fusion */}
        <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 6px" }}>🔀 Sensor fusion — combining inputs</p>
          <p style={{ fontSize: 11, color: TEAL_DARK, lineHeight: 1.5, margin: "0 0 8px" }}>
            The most compelling mobile AI features combine multiple inputs simultaneously. A single Claude call can include an image, a location string, and a text prompt — giving the model richer context than any one input alone.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {[
              { combo: "📷 + 📍", result: "Photo + location → identify local plant species by region" },
              { combo: "📷 + 🎙️", result: "Photo + voice prompt → answer spoken questions about what you see" },
              { combo: "📄 + 📍", result: "Scanned receipt + location → categorise expense by city" },
              { combo: "📷 + 🏃", result: "Camera frame + motion data → context-aware AR overlay" },
            ].map(r => (
              <div key={r.combo} style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: TEAL_DARK, flexShrink: 0, minWidth: 48 }}>{r.combo}</span>
                <span style={{ fontSize: 11, color: TEAL_DARK, lineHeight: 1.4 }}>{r.result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: AI providers */}
        <div style={{ background: PURPLE_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 6px" }}>🤖 AI providers — Claude is not the only option</p>
          <p style={{ fontSize: 11, color: PURPLE_DARK, lineHeight: 1.5, margin: "0 0 8px" }}>
            Different providers have different strengths. Claude excels at reasoning over images and documents. Others are optimised for classification speed, labelling, or specialist tasks.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {[
              { name: "Claude (Anthropic)", strength: "Image reasoning, document Q&A, multimodal chat", tag: "This week" },
              { name: "GPT-4o (OpenAI)", strength: "Strong vision, function calling, wide model family", tag: "" },
              { name: "Gemini (Google)", strength: "Long context, native Android integration, Vertex AI", tag: "" },
              { name: "ML Kit Vision", strength: "On-device, free, fast — text recognition, face, barcode", tag: "Week 8" },
              { name: "AWS Rekognition", strength: "Object labels, moderation, celebrity recognition at scale", tag: "" },
            ].map(r => (
              <div key={r.name} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: PURPLE_DARK }}>{r.name} </span>
                  {r.tag && <span style={{ fontSize: 9, fontWeight: 700, background: r.tag === "This week" ? TEAL_LIGHT : AMBER_LIGHT, color: r.tag === "This week" ? TEAL_DARK : AMBER_DARK, padding: "1px 5px", borderRadius: 10 }}>{r.tag}</span>}
                  <p style={{ fontSize: 10, color: PURPLE_DARK, margin: "1px 0 0", opacity: 0.8, lineHeight: 1.3 }}>{r.strength}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Output modalities */}
        <div style={{ background: BLUE_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, margin: "0 0 6px" }}>📤 Output modalities — AI responds beyond text</p>
          <p style={{ fontSize: 11, color: BLUE, lineHeight: 1.5, margin: "0 0 8px" }}>
            Claude always returns text — but your app decides how to present it. Multimodal output is about what you do with the response, not what the API returns.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {[
              { icon: "🔊", output: "Text-to-speech", how: "AVSpeechSynthesizer (iOS) · TextToSpeech API (Android)" },
              { icon: "📳", output: "Haptics", how: "Core Haptics (iOS) · VibrationEffect (Android)" },
              { icon: "🪄", output: "AR overlays", how: "RealityKit / ARKit (iOS) · ARCore / SceneView (Android)" },
              { icon: "🗺️", output: "Map annotations", how: "MapKit (iOS) · Google Maps SDK (Android)" },
            ].map(r => (
              <div key={r.output} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{r.icon}</span>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, margin: 0 }}>{r.output}</p>
                  <p style={{ fontSize: 10, color: BLUE, margin: 0, opacity: 0.8, lineHeight: 1.3 }}>{r.how}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: The full pipeline */}
        <div style={{ background: AMBER_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: AMBER_DARK, margin: "0 0 6px" }}>🔁 The full pipeline</p>
          <p style={{ fontSize: 11, color: AMBER_DARK, lineHeight: 1.5, margin: "0 0 8px" }}>A mature multimodal app isn't just input → Claude → text. It chains sensors, models, and outputs together.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              "📷 Camera frame + 📍 GPS",
              "↓  On-device pre-filter (ML Kit: is there text?)",
              "↓  If yes: send to Claude with context prompt",
              "↓  Parse structured response",
              "↓  🔊 Speak it · 🪄 Overlay it · 📳 Confirm with haptic",
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 6 }}>
                <span style={{ fontSize: 11, color: AMBER_DARK, lineHeight: 1.5, fontFamily: i === 0 ? "inherit" : "monospace", fontWeight: i === 0 ? 600 : 400 }}>{step}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 8, background: "rgba(255,255,255,0.5)", borderRadius: 6, padding: "6px 8px" }}>
            <p style={{ fontSize: 10, color: AMBER_DARK, margin: 0, fontWeight: 600 }}>{"This is what separates a demo from a product."}</p>
          </div>
        </div>

      </div>
      <Notes>{"Sources: AVSpeechSynthesizer — https://developer.apple.com/documentation/avfoundation/avspeechsynthesizer. Android TextToSpeech — https://developer.android.com/reference/android/speech/tts/TextToSpeech. Core Haptics — https://developer.apple.com/documentation/corehaptics. VibrationEffect — https://developer.android.com/reference/android/os/VibrationEffect. RealityKit — https://developer.apple.com/documentation/realitykit. ARCore — https://developers.google.com/ar. ML Kit Vision — https://developers.google.com/ml-kit/vision. AWS Rekognition — https://aws.amazon.com/rekognition. GPT-4o vision — https://platform.openai.com/docs/guides/vision. Gemini — https://ai.google.dev. The sensor fusion and full pipeline sections are conceptual — the goal is to show students the design space, not teach every API. The pipeline example is deliberately concrete so students can imagine building it."}</Notes>
    </Shell>
  ),

  // 10 ─ Android: capturing the image
  () => (
    <Shell tag="Android" tagColor="blue" timer="5" title="Android: capturing an image" subtitle="ActivityResultContracts — the modern way to launch camera and gallery">
      <div style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6, margin: "0 0 6px" }}>
          Android's <strong>ActivityResultContracts</strong> API lets you launch the camera or photo picker and receive the result in a clean callback — no <code style={{ background: GRAY, fontSize: 11, padding: "1px 4px", borderRadius: 3 }}>onActivityResult</code> boilerplate. There are two contracts you need:
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 10 }}>
        <div style={{ background: BLUE_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <span style={{ background: BLUE, color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 12, flexShrink: 0, marginTop: 2 }}>Camera</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12, color: BLUE, margin: "0 0 6px", lineHeight: 1.5 }}><strong>TakePicturePreview</strong> — launches the system camera and returns a <code style={{ background: "rgba(0,0,0,0.08)", fontSize: 11, padding: "1px 4px", borderRadius: 3 }}>Bitmap</code> directly in the callback. Simple, no file URI needed. Thumbnail quality — fine for AI analysis.</p>
              <CodePane title="Register launcher in your Composable" accent={BLUE}>{`val cameraLauncher = rememberLauncherForActivityResult(
    ActivityResultContracts.TakePicturePreview()
) { bitmap ->
    // bitmap is non-null if user took a photo, null if cancelled
    viewModel.onPhotoCaptured(bitmap)
}`}</CodePane>
            </div>
          </div>
        </div>
        <div style={{ background: BLUE_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <span style={{ background: BLUE, color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 12, flexShrink: 0, marginTop: 2 }}>Gallery</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12, color: BLUE, margin: "0 0 6px", lineHeight: 1.5 }}><strong>GetContent</strong> — opens the system photo picker and returns a content <code style={{ background: "rgba(0,0,0,0.08)", fontSize: 11, padding: "1px 4px", borderRadius: 3 }}>Uri</code>. You then load it into a Bitmap via ContentResolver — one extra step, but gives you full-resolution images.</p>
              <CodePane title="Register launcher in your Composable" accent={BLUE}>{`val galleryLauncher = rememberLauncherForActivityResult(
    ActivityResultContracts.GetContent()
) { uri ->
    // uri points to the selected image in the photo library
    viewModel.onPhotoSelected(uri, context.contentResolver)
}`}</CodePane>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <Callout color="blue" label="Launching the intent">{"Call cameraLauncher.launch(null) or galleryLauncher.launch('image/*') from your Button onClick."}</Callout>
        <Callout color="amber" label="ViewModel receives the result">{"Both callbacks call into the ViewModel — it stores the Bitmap in a StateFlow so the UI recomposes automatically."}</Callout>
      </div>
      <Notes>{"Source: https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts. rememberLauncherForActivityResult must be called at the Composable level, not inside a lambda or coroutine — it registers the callback during composition. TakePicturePreview returns a downscaled thumbnail; for full resolution use TakePicture with a FileProvider URI. GetContent with MIME type image/* opens the system photo picker on Android 13+ (PickVisualMedia is preferred on 13+ but GetContent works everywhere)."}</Notes>
    </Shell>
  ),

  // 10b ─ Android: encode and send
  () => (
    <Shell tag="Android" tagColor="blue" timer="5" title="Android: encode and send to Claude" subtitle="Bitmap → compress → base64 → multimodal API call">
      <div style={{ marginBottom: 8 }}>
        <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6 }}>Once you have a <strong>Bitmap</strong>, three steps get it to Claude: resize it, compress it to JPEG, encode as base64. The API call itself is nearly identical to Session 1.</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          {
            step: "1", label: "Resize + compress",
            why: "Large images waste tokens and increase latency. Cap at 1024px and compress to JPEG 80% — visually identical, much smaller payload.",
            code: `// Scale down — keep within 1024px on the longest side
val scaled = Bitmap.createScaledBitmap(
    bmp, minOf(bmp.width, 1024), minOf(bmp.height, 1024), true)

// Compress to JPEG at 80% quality
val stream = ByteArrayOutputStream()
scaled.compress(Bitmap.CompressFormat.JPEG, 80, stream)`,
          },
          {
            step: "2", label: "Encode to base64",
            why: "The API only accepts text. Base64 converts binary image bytes into a safe ASCII string that fits inside a JSON field.",
            code: `val imageBytes = stream.toByteArray()
val b64 = Base64.encodeToString(imageBytes, Base64.NO_WRAP)
// Base64.NO_WRAP omits line breaks — required for JSON`,
          },
          {
            step: "3", label: "Build the multimodal content array",
            why: "Instead of content being a plain string, it's now an array with an image block first, then a text block with your prompt.",
            code: `// content is now an array of blocks, not a string
val imageBlock = mapOf(
    "type" to "image",
    "source" to mapOf(
        "type" to "base64",
        "media_type" to "image/jpeg",
        "data" to b64
    )
)
val textBlock = mapOf("type" to "text", "text" to "Describe this image.")
// Serialize imageBlock + textBlock into your JSON body`,
          },
        ].map(r => (
          <div key={r.step} style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "10px 14px", borderLeft: "3px solid " + BLUE }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 5 }}>
              <span style={{ background: BLUE, color: "#fff", width: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{r.step}</span>
              <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: 0 }}>{r.label}</p>
            </div>
            <p style={{ fontSize: 12, color: MUTED, margin: "0 0 6px", lineHeight: 1.4 }}>{r.why}</p>
            <CodePane title="" accent={BLUE}>{r.code}</CodePane>
          </div>
        ))}
      </div>
      <Notes>{"Sources: Bitmap.compress — https://developer.android.com/reference/android/graphics/Bitmap#compress. Base64 — https://developer.android.com/reference/android/util/Base64. Claude vision API — https://docs.anthropic.com/en/docs/build-with-claude/vision. The OkHttp POST itself is identical to Session 1 — same headers, same URL, same response parsing. Only the request body changes. Use kotlinx.serialization or Gson to build the JSON body properly rather than string concatenation."}</Notes>
    </Shell>
  ),

  // 11 ─ iOS: capturing the image
  () => (
    <Shell tag="iOS" tagColor="green" timer="5" title="iOS: capturing an image" subtitle="PhotosPicker for gallery · UIImagePickerController for camera">
      <div style={{ marginBottom: 10 }}>
        <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6, margin: "0 0 6px" }}>
          iOS has two separate capture paths. The modern <strong>PhotosPicker</strong> (iOS 16+) handles the gallery declaratively in SwiftUI. For the camera, you still wrap <strong>UIImagePickerController</strong> in a <code style={{ background: GRAY, fontSize: 11, padding: "1px 4px", borderRadius: 3 }}>UIViewControllerRepresentable</code>.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 10 }}>
        <div style={{ background: GREEN_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <span style={{ background: GREEN, color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 12, flexShrink: 0, marginTop: 2 }}>Gallery</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12, color: GREEN, margin: "0 0 6px", lineHeight: 1.5 }}><strong>PhotosPicker</strong> is a native SwiftUI view — no UIKit bridge needed. Bind it to a <code style={{ background: "rgba(0,0,0,0.08)", fontSize: 11, padding: "1px 4px", borderRadius: 3 }}>PhotosPickerItem</code> state property. When the user picks a photo, load it via <code style={{ background: "rgba(0,0,0,0.08)", fontSize: 11, padding: "1px 4px", borderRadius: 3 }}>loadTransferable</code> to get <code style={{ background: "rgba(0,0,0,0.08)", fontSize: 11, padding: "1px 4px", borderRadius: 3 }}>Data</code>, then convert to <code style={{ background: "rgba(0,0,0,0.08)", fontSize: 11, padding: "1px 4px", borderRadius: 3 }}>UIImage</code>.</p>
              <CodePane title="PhotoViewModel.swift" accent={GREEN}>{`// In your ViewModel
@Published var photoItem: PhotosPickerItem? {
    didSet { Task { await loadImage() } }
}
@Published var selectedImage: UIImage?

private func loadImage() async {
    guard let item = photoItem else { return }
    if let data = try? await item.loadTransferable(type: Data.self),
       let image = UIImage(data: data) {
        selectedImage = image  // triggers UI update
    }
}`}</CodePane>
              <CodePane title="PhotoScreen.swift — PhotosPicker button" accent={GREEN}>{"PhotosPicker(selection: $vm.photoItem, matching: .images) {\n    Label(\"Gallery\", systemImage: \"photo.on.rectangle\")\n}.buttonStyle(.bordered)"}</CodePane>
            </div>
          </div>
        </div>
        <div style={{ background: GREEN_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <span style={{ background: GREEN, color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 12, flexShrink: 0, marginTop: 2 }}>Camera</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12, color: GREEN, margin: "0 0 6px", lineHeight: 1.5 }}><strong>UIImagePickerController</strong> is UIKit-only, so you wrap it in a <code style={{ background: "rgba(0,0,0,0.08)", fontSize: 11, padding: "1px 4px", borderRadius: 3 }}>UIViewControllerRepresentable</code> to use it in SwiftUI. Set <code style={{ background: "rgba(0,0,0,0.08)", fontSize: 11, padding: "1px 4px", borderRadius: 3 }}>sourceType = .camera</code> and implement the delegate to receive the image.</p>
              <CodePane title="CameraPicker.swift (UIViewControllerRepresentable)" accent={GREEN}>{`struct CameraPicker: UIViewControllerRepresentable {
    var onImagePicked: (UIImage) -> Void

    func makeUIViewController(context: Context)
        -> UIImagePickerController {
        let picker = UIImagePickerController()
        picker.sourceType = .camera
        picker.delegate = context.coordinator
        return picker
    }
    // makeCoordinator + Coordinator implement
    // imagePickerController(_:didFinishPickingMediaWithInfo:)
    // to call onImagePicked with the selected UIImage
}`}</CodePane>
            </div>
          </div>
        </div>
      </div>
      <Notes>{"Sources: PhotosPicker — https://developer.apple.com/documentation/photokit/photospicker. loadTransferable — https://developer.apple.com/documentation/photokit/photospickeritem/loadtransferable(type:). UIImagePickerController — https://developer.apple.com/documentation/uikit/uiimagepickercontroller. Key gotcha: UIImagePickerController is deprecated for photo library access (use PhotosPicker instead), but it is still the standard and correct API for camera capture. PhotosPicker cannot open the camera — it is gallery-only. This asymmetry is a real SwiftUI limitation; UIViewControllerRepresentable is the right bridge."}</Notes>
    </Shell>
  ),

  // 11b ─ iOS: encode and send
  () => (
    <Shell tag="iOS" tagColor="green" timer="5" title="iOS: encode and send to Claude" subtitle="UIImage → compress → base64 → multimodal API call">
      <div style={{ marginBottom: 8 }}>
        <p style={{ fontSize: 13, color: TEXT, lineHeight: 1.6 }}>Once you have a <strong>UIImage</strong>, the path to Claude mirrors Android: resize, compress to JPEG, encode as base64. The URLSession call is identical to Session 1.</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          {
            step: "1", label: "Resize + compress",
            why: "UIGraphicsImageRenderer redraws the image at the target size. jpegData(compressionQuality: 0.8) gives you a small, Claude-ready payload. Skip this and a 12MP photo becomes ~4 MB of base64.",
            code: `let maxSize = CGSize(width: 1024, height: 1024)
let renderer = UIGraphicsImageRenderer(size: maxSize)
let resized = renderer.image { _ in
    image.draw(in: CGRect(origin: .zero, size: maxSize))
}
guard let jpegData = resized.jpegData(compressionQuality: 0.8)
    else { return }`,
          },
          {
            step: "2", label: "Encode to base64",
            why: "base64EncodedString() converts the raw JPEG bytes into a safe ASCII string. No external library needed — Foundation provides this.",
            code: `let b64 = jpegData.base64EncodedString()
// b64 is now ready to embed in the API request body`,
          },
          {
            step: "3", label: "Build the multimodal content array",
            why: "The content field switches from a String to an array of dictionaries. Order matters — image first, then the text prompt.",
            code: `let body: [String: Any] = [
    "model": "claude-sonnet-4-20250514",
    "max_tokens": 512,
    "messages": [[
        "role": "user",
        "content": [
            ["type": "image", "source": [
                "type": "base64",
                "media_type": "image/jpeg",
                "data": b64
            ]],
            ["type": "text", "text": "Describe this image."]
        ]
    ]]
]`,
          },
        ].map(r => (
          <div key={r.step} style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "10px 14px", borderLeft: "3px solid " + GREEN }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 5 }}>
              <span style={{ background: GREEN, color: "#fff", width: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{r.step}</span>
              <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: 0 }}>{r.label}</p>
            </div>
            <p style={{ fontSize: 12, color: MUTED, margin: "0 0 6px", lineHeight: 1.4 }}>{r.why}</p>
            <CodePane title="" accent={GREEN}>{r.code}</CodePane>
          </div>
        ))}
      </div>
      <Notes>{"Sources: UIGraphicsImageRenderer — https://developer.apple.com/documentation/uikit/uigraphicsimagerenderer. jpegData — https://developer.apple.com/documentation/uikit/uiimage/1624115-jpegdata. base64EncodedString — https://developer.apple.com/documentation/foundation/data/1779858-base64encodedstring. Claude vision API — https://docs.anthropic.com/en/docs/build-with-claude/vision. The URLSession POST is exactly the same as Session 1 — same headers (x-api-key, anthropic-version, content-type), same URL, same response parsing. Only the request body dict changes. Note that the resize here does not preserve aspect ratio for simplicity; production code should use AVMakeRect or similar."}</Notes>
    </Shell>
  ),

  // 12 ─ Live demo slide
  () => (
    <Shell tag="Demo" tagColor="teal" timer="6" title="Live demo — PhotoDescriber" subtitle="Camera → base64 → Claude → description">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>What to show</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { step: "1", label: "Launch the app", desc: "Show the empty state — image preview placeholder, two buttons" },
              { step: "2", label: "Gallery pick", desc: "Open gallery, pick a photo, show it load into the preview" },
              { step: "3", label: "Tap Describe", desc: "Watch the loading state, then the description appear" },
              { step: "4", label: "Try camera", desc: "Take a live photo — point at something in the room" },
              { step: "5", label: "Try a hard one", desc: "Point at text (a slide, a whiteboard) — Claude can read it" },
            ].map(r => (
              <div key={r.step} style={{ display: "flex", gap: 8, background: TEAL_LIGHT, borderRadius: 8, padding: "8px 10px" }}>
                <span style={{ background: TEAL_DARK, color: "#fff", width: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{r.step}</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 1px" }}>{r.label}</p>
                  <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.4 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>What to highlight while demoing</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { icon: "⏱️", point: "Latency is visible", detail: "Students should see the ~1–2 second round trip. This is the cost of cloud AI — the image travels to Anthropic's servers and back. Keep this in mind for Week 8." },
              { icon: "🔑", point: "API key lives on the device", detail: "In this lab the key is hardcoded in your build. That's fine for a demo, but shipping this to the App Store or Play Store would expose your key. Production apps proxy through a backend." },
              { icon: "📝", point: "Claude reads text in images", detail: "This is OCR without writing a single OCR line. Point the camera at text in the room and ask Claude to read it. Show students what this unlocks." },
              { icon: "🌍", point: "Language agnostic", detail: "Point at foreign-language text and ask Claude to translate. You get translation + description for free — the model already knows how." },
            ].map(r => (
              <div key={r.icon} style={{ display: "flex", gap: 8, background: GRAY, borderRadius: 8, padding: "8px 10px" }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{r.icon}</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "0 0 2px" }}>{r.point}</p>
                  <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>Have the demo app built and running on a physical device before class. The emulator camera is awkward for live demos — a real phone is much more compelling. If you're pointing at something in the room, a printed photo or a piece of fruit on the desk works well as a consistent prop. The "Claude reads text in images" moment is reliably impressive and worth spending 30 seconds on.</Notes>
    </Shell>
  ),

  // 13 ─ What this unlocks (app ideas)
  () => (
    <Shell tag="Applications" tagColor="purple" timer="4" title="What multimodal unlocks" subtitle="A new class of mobile app that couldn't exist before">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
        {[
          { icon: "🌿", name: "PlantID", desc: "Point at a plant, get species + care instructions instantly" },
          { icon: "🍽️", name: "NutriScan", desc: "Photo of a meal → estimated calories, macros, ingredients" },
          { icon: "♿", name: "Describe", desc: "Accessibility app — photos narrated aloud for vision impaired users" },
          { icon: "🔧", name: "FixIt", desc: "Photo of a broken appliance → repair steps, parts needed" },
          { icon: "📄", name: "DocScan", desc: "Photo of a document, invoice, or form → structured data extracted" },
          { icon: "🗺️", name: "Translate+", desc: "Live camera translation of signs, menus, handwriting" },
          { icon: "👗", name: "StyleMatch", desc: "Photo of clothing → suggested outfits, where to buy similar items" },
          { icon: "📦", name: "ShelfCheck", desc: "Photo of a pantry shelf → recipe suggestions from what's visible" },
          { icon: "🎨", name: "ArtGuide", desc: "Photo at a museum → artist, movement, historical context" },
        ].map(app => (
          <div key={app.name} style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <div style={{ fontSize: 18, marginBottom: 3 }}>{app.icon}</div>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 2px" }}>{app.name}</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{app.desc}</p>
          </div>
        ))}
      </div>
      <Callout color="teal" label="Capstone opportunity">Any of these are viable capstone directions. If your team hasn't locked a concept yet, this is a productive brainstorm source. The pattern is always the same: camera/gallery → base64 → Claude → display.</Callout>
      <Notes>This slide is energising but keep it brief — students don't need to analyse every app, just get a feeling for the possibility space. The capstone callout is intentional: Milestone 1 is due this week and some teams may still be figuring out what to build. Multimodal opens up a lot of concrete, demonstrable app ideas that work well for a capstone demo.</Notes>
    </Shell>
  ),

  // 14 ─ Cloud limitations preview
  () => (
    <Shell tag="Bridge → Week 8" tagColor="amber" timer="5" title="The cloud model has real limits" subtitle="Everything you built this week has a hidden assumption">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>What we've been doing</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
            {[
              { label: "User takes photo", icon: "📷" },
              { label: "App encodes to base64", icon: "📦" },
              { label: "HTTPS POST to Anthropic", icon: "🌐" },
              { label: "Model runs on Anthropic's GPU", icon: "⚡" },
              { label: "Response travels back", icon: "↩️" },
              { label: "UI updates", icon: "📱" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", background: i === 2 || i === 3 ? AMBER_LIGHT : GRAY, borderRadius: 6, padding: "6px 10px" }}>
                <span style={{ fontSize: 14 }}>{s.icon}</span>
                <span style={{ fontSize: 12, color: i === 2 || i === 3 ? AMBER_DARK : TEXT, fontWeight: i === 2 || i === 3 ? 600 : 400 }}>{s.label}</span>
                {(i === 2 || i === 3) && <span style={{ fontSize: 10, color: AMBER_DARK, marginLeft: "auto", fontWeight: 600 }}>← this requires internet</span>}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>The hidden assumption: network</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { icon: "✈️", issue: "Airplane mode", impact: "App completely stops working" },
              { icon: "🚇", issue: "Subway / tunnel", impact: "Requests time out mid-stream" },
              { icon: "🏥", issue: "Hospital / secure wifi", impact: "Restricted networks may block API calls" },
              { icon: "🌍", issue: "International roaming", impact: "Data costs may be prohibitive" },
              { icon: "🔒", issue: "Privacy-sensitive use cases", impact: "User's photo leaves their device" },
            ].map(r => (
              <div key={r.icon} style={{ display: "flex", gap: 8, background: CORAL_LIGHT, borderRadius: 8, padding: "7px 10px" }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>{r.icon}</span>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: CORAL, margin: "0 0 1px" }}>{r.issue}</p>
                  <p style={{ fontSize: 11, color: CORAL, margin: 0 }}>{r.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>This is the Week 8 motivating slide — end Week 7 by making students feel the pain of the cloud dependency. Don't fully answer the question yet. The answer (on-device inference) is what Week 8 is for. A good line: "Everything you built this week is impressive. But it only works if Anthropic's servers are reachable. Next week we ask: what if they're not?"</Notes>
    </Shell>
  ),

  // 15 ─ Week 8 preview
  () => (
    <div style={{ background: `linear-gradient(135deg, #0F1220 0%, ${PURPLE_DARK} 60%, #0F1220 100%)`, borderRadius: 12, padding: "36px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <Tag color="purple">Week 7 · S2</Tag>
          <Tag color="amber">Coming up</Tag>
        </div>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 600 }}>Week 8 Preview</p>
        <h2 style={{ fontSize: 26, fontWeight: 500, color: "#fff", margin: "0 0 6px", lineHeight: 1.2 }}>On-device AI inference</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>What if the model ran on the phone itself?</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
          {[
            { icon: "🚫", label: "No network required", desc: "Inference happens entirely on-device" },
            { icon: "⚡", label: "Zero latency", desc: "No round trip to a server — results in milliseconds" },
            { icon: "🔒", label: "Privacy by default", desc: "User data never leaves the device" },
            { icon: "💸", label: "No API costs", desc: "You pay for the app, not per inference call" },
          ].map(r => (
            <div key={r.label} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "12px 14px" }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{r.icon}</div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#fff", margin: "0 0 2px" }}>{r.label}</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.4 }}>{r.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 16px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: AMBER, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you'll build in Week 8</p>
          {[
            "Android: ML Kit for on-device text and image recognition",
            "iOS: Core ML + Create ML for on-device inference",
            "Compare latency, accuracy, and capability vs. cloud",
            "Decide: when to use cloud, when to use on-device, when to use both",
          ].map(t => (
            <div key={t} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              <span style={{ color: AMBER, fontWeight: 700, flexShrink: 0 }}>▸</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: "24px 0 0" }}>Mobile development in the age of AI · CodePath</p>
    </div>
  ),

  // 16 ─ Lab intro
  () => (
    <Shell tag="Lab" tagColor="teal" timer="55" title="Lab — build PhotoDescriber" subtitle="Camera + gallery + vision API in one session">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What you're building</p>
          <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: "0 0 12px" }}>A standalone app with an image preview, two input buttons (camera + gallery), and a Describe button that sends the image to Claude's vision API and shows the response.</p>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: TEAL_DARK, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Steps</p>
            {[
              "New project: PhotoDescriber",
              "Declare camera + photo permissions",
              "Build the UI (preview + two buttons + describe)",
              "Wire up camera launcher / PhotosPicker",
              "Compress and encode to base64",
              "POST multimodal request to Claude API",
              "Display the description",
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                <span style={{ background: TEAL_DARK, color: "#fff", width: 16, height: 16, borderRadius: "50%", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                <span style={{ fontSize: 12, color: TEAL_DARK, lineHeight: 1.4 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Checkpoints</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
            {[
              "Project runs. Permissions declared.",
              "Image preview shows a selected photo.",
              "Camera and gallery both work.",
              "base64 string logged to console.",
              "Claude returns a description.",
              "Description renders in the UI.",
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 8, background: GRAY, borderRadius: 6, padding: "6px 10px" }}>
                <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>☐ {i}</span>
                <span style={{ fontSize: 12, color: TEXT }}>{c}</span>
              </div>
            ))}
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>🚀 Stretch goals</p>
            {[
              "Add a prompt selector (describe / identify / read text / translate)",
              "Stream the response word by word",
              "Save photo + description pairs with history view",
              "Combine with Session 1 — add image attachment to chat app",
            ].map(s => (
              <div key={s} style={{ display: "flex", gap: 6, marginBottom: 3 }}>
                <span style={{ color: PURPLE_DARK, fontWeight: 700 }}>·</span>
                <span style={{ fontSize: 11, color: PURPLE_DARK }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>This is the lab kickoff slide. Read through the steps and checkpoints aloud, answer any setup questions, then let students work. Circulate and watch for: (1) students who haven't got their API key working from Session 1 — the key setup is identical, (2) students confused about the content array vs. string difference — refer back to slide 5, (3) students on iOS confused about the camera path — UIImagePickerController wrapped in UIViewControllerRepresentable is the scaffold in the unit page.</Notes>
    </Shell>
  ),

  // 17 ─ Wrap-up
  () => (
    <Shell tag="Wrap-up" tagColor="teal" title="Week 7 wrap-up" subtitle="What you can now build">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>This week you learned</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { s: "Session 1", t: "Call an LLM from a mobile app. Handle streaming. Build a real-time chat UI." },
              { s: "Session 2", t: "Send images to an LLM. Access camera and gallery. Understand multimodal message structure." },
            ].map(r => (
              <div key={r.s} style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "8px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: TEAL_DARK, margin: "0 0 2px", textTransform: "uppercase", letterSpacing: ".04em" }}>{r.s}</p>
                <p style={{ fontSize: 12, color: TEAL_DARK, margin: 0, lineHeight: 1.4 }}>{r.t}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The bigger picture</p>
          <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6, margin: "0 0 10px" }}>You can now put a world-class LLM behind any mobile input: text, photos, documents. The cloud model is powerful but has tradeoffs — latency, cost, and network dependency.</p>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px" }}>
            <p style={{ fontSize: 12, color: AMBER_DARK, margin: 0, lineHeight: 1.5 }}>
              <strong>Next week:</strong> We flip the model. The intelligence moves from Anthropic's servers onto the phone itself. Same capabilities, radically different tradeoffs.
            </p>
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid var(--color-border-tertiary)`, paddingTop: 14 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Before you leave</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[
            { icon: "📋", label: "Fill out the session survey", sub: "link in the unit page" },
            { icon: "📁", label: "Push your PhotoDescriber code", sub: "even if incomplete" },
            { icon: "🏗️", label: "Capstone M1 due this week", sub: "repo + architecture scaffolded" },
            { icon: "💭", label: "Reflection", sub: "What would you build with multimodal AI?" },
          ].map(r => (
            <div key={r.label} style={{ background: GRAY, borderRadius: 8, padding: "8px 12px", flex: "1 1 40%" }}>
              <p style={{ fontSize: 16, margin: "0 0 2px" }}>{r.icon}</p>
              <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 1px" }}>{r.label}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{r.sub}</p>
            </div>
          ))}
        </div>
      </div>
      <Notes>Keep wrap-up to 5 minutes. Survey first (they forget if you save it for last). Remind about Capstone M1 — it's due this week and some teams are still figuring out their architecture. The reflection prompt is optional — good to ask out loud if energy is still high, otherwise just post it in Slack for async responses.</Notes>
    </Shell>
  ),
];

// ─── NAVIGATOR ──────────────────────────────────────────────────────────────

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 7 · Session 2 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>Mobile as an input device — Multimodal AI</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setCur(c => Math.max(0, c - 1))} disabled={cur === 0} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${TEAL_LIGHT}`, background: cur === 0 ? GRAY : TEAL_LIGHT, color: cur === 0 ? MUTED : TEAL_DARK, cursor: cur === 0 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>← Prev</button>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 64, textAlign: "center" }}>{cur + 1} / {slides.length}</span>
          <button onClick={() => setCur(c => Math.min(slides.length - 1, c + 1))} disabled={cur === slides.length - 1} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${TEAL_LIGHT}`, background: cur === slides.length - 1 ? GRAY : TEAL_DARK, color: cur === slides.length - 1 ? MUTED : "#fff", cursor: cur === slides.length - 1 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>Next →</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: 26, height: 26, borderRadius: 5, border: `1.5px solid ${i === cur ? TEAL_DARK : "#e5e7eb"}`, background: i === cur ? TEAL_DARK : "#fff", color: i === cur ? "#fff" : MUTED, fontSize: 10, fontWeight: 500, cursor: "pointer" }}>{i + 1}</button>
        ))}
      </div>
      {slides[cur]()}
    </div>
  );
}
