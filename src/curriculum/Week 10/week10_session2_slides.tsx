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
const GRAY        = "#F5F5F7";
const TEXT        = "#1a1a2e";
const MUTED       = "#6b7280";
const CAP_C       = "#993C1D";
const CAP_BG      = "#FAECE7";

const Notes = ({ children }) => (
  <div style={{ background: GRAY, borderRadius: 8, padding: "8px 12px", marginTop: 16 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em" }}>Speaker notes</p>
    <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const slides = [

  // ─── 1: TITLE ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", textAlign: "center" }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
      <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: ".1em" }}>Week 10 · Session 2</p>
      <h1 style={{ fontSize: 48, fontWeight: 700, color: "#fff", margin: "0 0 12px", lineHeight: 1.1 }}>Demo Day</h1>
      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", margin: "0 0 32px", maxWidth: 380, lineHeight: 1.6 }}>10 weeks of building. Today you show the world what you made.</p>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}>Mobile Development in the Age of AI · CodePath</p>
    </div>
  ),

  // ─── 2: RUN OF SHOW ───
  () => (
    <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "24px 28px", minHeight: 360 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", background: CAP_BG, color: CAP_C, padding: "2px 8px", borderRadius: 20 }}>Run of show</span>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: TEXT, margin: "8px 0 2px" }}>{"How today works"}</h2>
          <p style={{ fontSize: 13, color: MUTED, margin: 0 }}>Each team has 6 minutes. Order is at the instructor{"'"}s discretion.</p>
        </div>
        <div style={{ background: CAP_BG, borderRadius: 10, padding: "12px 16px", textAlign: "center", flexShrink: 0, marginLeft: 16 }}>
          <p style={{ fontSize: 28, fontWeight: 800, color: CAP_C, margin: 0, lineHeight: 1 }}>6</p>
          <p style={{ fontSize: 11, color: CAP_C, margin: "2px 0 0", fontWeight: 600 }}>min / team</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
        {/* Timing breakdown */}
        <div style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Timing per team</p>
          {[
            { segment: "Demo",  time: "~4 min", color: PURPLE },
            { segment: "Q&A",   time: "~2 min", color: TEAL_DARK },
          ].map(s => (
            <div key={s.segment} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
              <span style={{ fontSize: 13, color: TEXT, fontWeight: 500 }}>{s.segment}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: s.color }}>{s.time}</span>
            </div>
          ))}
        </div>

        {/* The 5-point structure */}
        <div style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Every demo must include</p>
          {[
            { n: 1, label: "Connect",       sub: "Phone or laptop to projector" },
            { n: 2, label: "Introductions", sub: "Every team member by name" },
            { n: 3, label: "Pitch",         sub: "The problem and how you solve it" },
            { n: 4, label: "Demo",          sub: "Core functionality as a story" },
            { n: 5, label: "Next Steps",    sub: "What you'd build next" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "flex-start" }}>
              <span style={{ background: CAP_C, color: "#fff", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{s.n}</span>
              <div>
                <span style={{ fontSize: 12, fontWeight: 600, color: TEXT }}>{s.label} </span>
                <span style={{ fontSize: 11, color: MUTED }}>{s.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Format reminder */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {[
          { icon: "📱", label: "Live on device" },
          { icon: "💻", label: "Screen share" },
          { icon: "🎬", label: "Pre-recorded video" },
          { icon: "📊", label: "Slide deck optional" },
        ].map(f => (
          <div key={f.label} style={{ display: "flex", gap: 6, alignItems: "center", background: PURPLE_LIGHT, borderRadius: 20, padding: "4px 12px" }}>
            <span style={{ fontSize: 13 }}>{f.icon}</span>
            <span style={{ fontSize: 11, fontWeight: 500, color: PURPLE_DARK }}>{f.label}</span>
          </div>
        ))}
      </div>

      <Notes>{"Call up teams one at a time. Start the timer when they begin talking. Give a gentle 1-minute warning signal. Keep energy high between presentations — brief applause, short transition."}</Notes>
    </div>
  ),

  // ─── 3: PRESENTING NOW ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${CAP_C} 0%, #6B2515 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", textAlign: "center" }}>
      <div style={{ fontSize: 52, marginBottom: 16 }}>🎤</div>
      <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: ".1em" }}>Now presenting</p>
      <h1 style={{ fontSize: 42, fontWeight: 700, color: "#fff", margin: "0 0 10px", lineHeight: 1.15 }}>Team Name</h1>
      <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", margin: "0 0 32px" }}>App Name</p>
      <div style={{ display: "flex", gap: 16 }}>
        {[
          { label: "Demo", time: "~4 min", color: "rgba(255,255,255,0.2)" },
          { label: "Q&A",  time: "~2 min", color: "rgba(255,255,255,0.12)" },
        ].map(s => (
          <div key={s.label} style={{ background: s.color, borderRadius: 10, padding: "10px 20px", textAlign: "center" }}>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: ".06em" }}>{s.label}</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: 0 }}>{s.time}</p>
          </div>
        ))}
      </div>
      <Notes>{"Leave this slide up during each presentation. Update 'Team Name' and 'App Name' in the slide before each team goes up, or just leave the placeholder text — it still sets the stage nicely."}</Notes>
    </div>
  ),

  // ─── 4: CLOSING ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 52, marginBottom: 16 }}>🏆</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>That{"'"}s a wrap.</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", margin: "0 auto 32px", maxWidth: 500, lineHeight: 1.7 }}>
          {"You came in knowing nothing about mobile development. You leave having shipped a native app with AI features, built as a team. That's not nothing — that's real."}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, maxWidth: 560, margin: "0 auto" }}>
          {[
            { icon: "📬", label: "Submit your final deliverables", sub: "Link in Slack — due today" },
            { icon: "🤝", label: "Connect with your teammates", sub: "LinkedIn, GitHub — keep in touch" },
            { icon: "🚀", label: "Keep building", sub: "You know how now" },
          ].map(item => (
            <div key={item.label} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "14px 12px", textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{item.icon}</div>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#fff", margin: "0 0 4px", lineHeight: 1.3 }}>{item.label}</p>
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", margin: 0 }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: "24px 0 0", textAlign: "center" }}>Mobile Development in the Age of AI · CodePath</p>
      <Notes>{"Genuine warmth here. Let the applause land. Remind students to submit deliverables via the Slack link before they leave. Then let them celebrate."}</Notes>
    </div>
  ),

];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 10 · Session 2 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>Demo Day</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setCur(c => Math.max(0, c - 1))} disabled={cur === 0} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === 0 ? GRAY : PURPLE_LIGHT, color: cur === 0 ? MUTED : PURPLE, cursor: cur === 0 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>{"← Prev"}</button>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 64, textAlign: "center" }}>{cur + 1} / {slides.length}</span>
          <button onClick={() => setCur(c => Math.min(slides.length - 1, c + 1))} disabled={cur === slides.length - 1} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === slides.length - 1 ? GRAY : PURPLE, color: cur === slides.length - 1 ? MUTED : "#fff", cursor: cur === slides.length - 1 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>{"Next →"}</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: 26, height: 26, borderRadius: 5, border: `1.5px solid ${i === cur ? PURPLE : "#e5e7eb"}`, background: i === cur ? PURPLE : "#fff", color: i === cur ? "#fff" : MUTED, fontSize: 10, fontWeight: 500, cursor: "pointer" }}>{i + 1}</button>
        ))}
      </div>
      {slides[cur]()}
    </div>
  );
}
