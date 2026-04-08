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

const Tag = ({ children, color = "purple" }) => {
  const map = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK   },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806"   },
    blue:   { bg: BLUE_LIGHT,   fg: BLUE        },
    green:  { bg: GREEN_LIGHT,  fg: GREEN       },
    ai:     { bg: "#F9F0FF",    fg: "#6B21A8"   },
    red:    { bg: "#FCEBEB",    fg: "#A32D2D"   },
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

const slides = [
  // 1: Title
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 600, background: BLUE_LIGHT, color: BLUE, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>Android track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: GREEN_LIGHT, color: GREEN, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>iOS track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: "#F9F0FF", color: "#6B21A8", padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>✨ AI Feature</span>
        </div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 7 · Session 2</p>
        <h1 style={{ fontSize: 30, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.2 }}>UI patterns for AI-generated content</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>The difference between a working feature and a polished product</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "Before vs after — what 'polished' actually means",
            "The AI UI state machine — all 6 states",
            "Typing indicators — animated three-dot implementation",
            "Partial render — blinking cursor + deferred Markdown",
            "Error taxonomy — 6 types and the right UI for each",
            "Cancellation — stop button + coroutine/Task cancellation",
            "Input locking + auto-scroll that respects manual scrolling",
            "Accessibility for streaming content",
            "Capstone integration — which patterns your app needs",
            "Lab: full polish layer on Session 1 chat screen",
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

  // 2: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 2 hours" notes="Session 2 is more UX-focused than Session 1. The coding is lighter but the design thinking is harder. Push students to think about what failure looks like — most developers only design the happy path. Emphasise the capstone angle: every team building an AI feature needs these patterns before demo day. The lab is building on Session 1 — make sure everyone has a working streaming screen before starting.">
      {[
        { time: "0:00–0:05",  label: "Hook",                   desc: "The gap between 'it works' and 'it feels good' — the polish problem", section: null },
        { time: "0:05–0:15",  label: "Before vs after",        desc: "Side-by-side comparison of an unpolished vs polished AI chat screen", section: null },
        { time: "0:15–0:25",  label: "The state machine",      desc: "All 6 states an AI feature can be in — sealed class implementation", section: null },
        { time: "0:25–0:35",  label: "Typing indicators",      desc: "Animated three-dot — implementation on both platforms", section: null },
        { time: "0:35–0:48",  label: "Partial render states",  desc: "Blinking cursor, deferred Markdown, Strategy A vs B", section: null },
        { time: "0:48–1:02",  label: "Error fallback UX",      desc: "6 error types, the error banner pattern, retry logic", section: null },
        { time: "1:02–1:12",  label: "Cancellation + locking",  desc: "Stop button, Job/Task cancel, Send↔Stop swap, input disabled state", section: null },
        { time: "1:12–1:22",  label: "Smart auto-scroll",       desc: "derivedStateOf (Android), PreferenceKey scroll detection (iOS)", section: null },
        { time: "1:22–1:27",  label: "Accessibility + capstone",desc: "TalkBack/VoiceOver APIs + which patterns your app needs", section: null },
        { time: "1:22–1:27",  label: "Lab intro",              desc: "Polish layer checklist walkthrough", section: null },
        { time: "1:27–2:22",  label: "Lab — breakout rooms",   desc: "Add typing indicator, error banner, cancel, auto-scroll", section: "lab" },
        { time: "2:22–2:30",  label: "Wrap-up + survey",       desc: "Week 7 complete · Week 8 preview · Capstone M2 intro", section: "wrapup" },
      ].map(r => (
        <div key={r.time} style={{
          display: "flex", gap: 12, padding: "7px 0",
          borderBottom: `0.5px solid ${GRAY}`,
          background: r.section === "lab" ? TEAL_LIGHT : r.section === "wrapup" ? AMBER_LIGHT : "transparent",
          borderRadius: r.section ? 6 : 0, paddingLeft: r.section ? 8 : 0, marginLeft: r.section ? -8 : 0
        }}>
          <span style={{ fontSize: 11, minWidth: 90, flexShrink: 0, color: r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : MUTED }}>{r.time}</span>
          <span style={{ fontSize: 11, fontWeight: 600, minWidth: 160, flexShrink: 0, color: r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : PURPLE }}>{r.label}</span>
          <span style={{ fontSize: 11, color: r.section === "lab" ? TEAL_DARK : r.section === "wrapup" ? "#633806" : TEXT }}>{r.desc}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
        {[{ color: TEAL, label: "Lab" }, { color: AMBER, label: "Wrap-up" }].map(l => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
            <span style={{ fontSize: 11, color: MUTED }}>{l.label}</span>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 3: Hook
  () => (
    <Shell tag="Hook" timer="5" title="The gap between 'it works' and 'it feels good'" subtitle="Users experience your UI, not your code" notes="Open the Session 1 lab app — or demo one without polish. Show it with zero polish: no typing indicator, input enabled during streaming, no error handling, no auto-scroll. Then describe each fix. The gap between these two states is the entire content of today's session. Ask students to think about apps they use: when did they last notice an AI feature felt broken? Almost always it is one of these five missing patterns.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <div style={{ background: "#FCEBEB", borderRadius: 10, padding: "14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#A32D2D", margin: "0 0 10px" }}>Your Session 1 app — it works ✓</p>
            {[
              { icon: "⌛", issue: "Nothing visible while waiting for the first token — user thinks it crashed" },
              { icon: "🔓", issue: "Input stays enabled — user can send another message mid-stream, breaking history" },
              { icon: "💬", issue: "Long responses scroll off the bottom — manual scrolling required" },
              { icon: "💥", issue: "Network error shows a crash dialog or a blank screen with no recovery path" },
              { icon: "🔁", issue: "No way to stop an unhelpful response that keeps generating" },
            ].map(item => (
              <div key={item.issue} style={{ display: "flex", gap: 8, margin: "7px 0" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: 11, color: "#A32D2D", lineHeight: 1.5 }}>{item.issue}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 10px" }}>After today's session — it feels good ✨</p>
            {[
              { icon: "⋯", feature: "Animated typing indicator appears within 300ms of send" },
              { icon: "🔒", feature: "Input locked + send disabled during streaming — can't corrupt history" },
              { icon: "📜", feature: "List auto-scrolls to follow new tokens; stops if user scrolls up" },
              { icon: "⚠️", feature: "Inline error banner with plain-language message + Retry button" },
              { icon: "⏹", feature: "Stop button cancels the stream; partial response shown with label" },
            ].map(item => (
              <div key={item.feature} style={{ display: "flex", gap: 8, margin: "7px 0" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: 11, color: TEAL_DARK, lineHeight: 1.5 }}>{item.feature}</span>
              </div>
            ))}
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px", marginTop: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>Why this matters for your capstone</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>Demo day judges use your app. A polished AI feature that feels intentional scores significantly higher than one that feels broken — regardless of the underlying code quality. These five patterns are the difference.</p>
          </div>
          <Discussion>{"Think about an AI product you use regularly — ChatGPT, Copilot, Notion AI. Identify one specific UI pattern that makes it feel smooth. What would be missing if that pattern wasn't there?"}</Discussion>
        </div>
      </div>
    </Shell>
  ),

  // 4: Before vs after side-by-side
  () => (
    <Shell tag="Concept" timer="10" title="Before and after — the complete UI transformation" subtitle="The same chat screen, unpolished vs polished" notes="Walk through each row of the comparison table slowly. For each pattern, describe what the user experiences in the 'before' state and why it feels wrong. The before state is not obviously broken — the app works — but each missing pattern creates friction. Students often need to hear the user's perspective articulated explicitly before they internalize why these patterns matter.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <div style={{ background: "#FCEBEB", border: "1.5px solid #fca5a5", borderRadius: 10, padding: "14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#A32D2D", margin: "0 0 12px" }}>Before — Session 1 baseline</p>
            {[
              { moment: "User taps Send", experience: "Input disappears. Nothing happens for 300–2000ms. Screen shows no acknowledgement. User re-taps Send thinking it didn't register — now two messages are queued." },
              { moment: "First token arrives", experience: "A bubble appears suddenly. No progression. No indication that more is coming. If the model is slow, this is the first feedback the user gets — too late." },
              { moment: "Response streams", experience: "Text appears token by token but the list doesn't scroll. User must manually scroll to follow the response. On a long response they frequently lose their place." },
              { moment: "API call fails", experience: "An uncaught exception produces an error toast or crash dialog. The user's message may disappear from the list. There is no retry path — the user must retype their question." },
              { moment: "Response is going wrong", experience: "User realises mid-stream that the model is generating an unhelpful response — 200 tokens and counting. No way to stop it. Must wait for it to finish before trying again." },
            ].map(r => (
              <div key={r.moment} style={{ marginBottom: 10 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", margin: "0 0 2px" }}>{r.moment}</p>
                <p style={{ fontSize: 11, color: "#A32D2D", margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{r.experience}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ background: TEAL_LIGHT, border: `1.5px solid ${TEAL}`, borderRadius: 10, padding: "14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 12px" }}>After — with all 5 polish patterns</p>
            {[
              { moment: "User taps Send", experience: "Input locks immediately — prevents double-send. Within 300ms a typing indicator (animated three dots) appears below the conversation, confirming the request is in flight." },
              { moment: "First token arrives", experience: "Typing indicator transitions into a message bubble with the first word. A blinking cursor at the end signals that more is coming. The transition is seamless — no layout jump." },
              { moment: "Response streams", experience: "The list auto-scrolls to keep the streaming bubble in view as each token arrives. If the user scrolls up to re-read earlier messages, auto-scroll pauses and doesn't forcibly snap them back." },
              { moment: "API call fails", experience: "An inline error banner appears with plain-language text ('Couldn't get a response — check your connection') and a Retry button. The user's message remains in the list. One tap to retry." },
              { moment: "Response is going wrong", experience: "A Stop button replaces the Send button during streaming. One tap cancels the request, shows the partial response with a [stopped] label, and re-enables the input immediately." },
            ].map(r => (
              <div key={r.moment} style={{ marginBottom: 10 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 2px" }}>{r.moment}</p>
                <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{r.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 5: The AI UI state machine
  () => (
    <Shell tag="Concept" timer="10" title="The AI UI state machine — all six states" subtitle="Most UI bugs come from an incomplete state model. Define every state explicitly." notes="This is the most important slide in the session. Most students model only 2 states (loading, done) and wonder why their UI behaves strangely when something goes wrong. Walk through each state and what the user sees and can do. The Cancelled state is often overlooked — it is distinct from Error and Done, and needs its own visual treatment. The sealed class code should look familiar from Session 1 — this is the extended version.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>The six states and what the user sees</p>
          {[
            { state: "Idle",      color: GRAY,        fg: MUTED,       ui: "Input enabled, Send button enabled, no streaming bubble. The default state after every completed interaction." },
            { state: "Sending",   color: AMBER_LIGHT, fg: "#633806",   ui: "Input locked, Send disabled, typing indicator (three dots) visible. Covers the gap between send and first token." },
            { state: "Streaming", color: PURPLE_LIGHT,fg: PURPLE_DARK, ui: "Input locked, Stop button visible, partial text in bubble with cursor, auto-scroll active." },
            { state: "Done",      color: TEAL_LIGHT,  fg: TEAL_DARK,   ui: "Streaming bubble becomes permanent message, cursor removed, input re-enabled, Stop → Send." },
            { state: "Error",     color: "#FCEBEB",   fg: "#A32D2D",   ui: "Error banner with message + Retry, input re-enabled, failed user message still visible." },
            { state: "Cancelled", color: BLUE_LIGHT,  fg: BLUE,        ui: "Partial response shown with [stopped] label, input re-enabled. Conversation continues normally." },
          ].map(s => (
            <div key={s.state} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
              <span style={{ background: s.color, color: s.fg, fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 12, flexShrink: 0, marginTop: 2, letterSpacing: ".04em", textTransform: "uppercase", border: `1px solid ${s.fg}20` }}>{s.state}</span>
              <p style={{ fontSize: 11, color: TEXT, margin: 0, lineHeight: 1.5 }}>{s.ui}</p>
            </div>
          ))}
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "9px 12px", marginTop: 8 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>Valid transitions</p>
            <pre style={{ fontSize: 10, color: TEAL_DARK, margin: 0, fontFamily: "monospace", lineHeight: 1.8, whiteSpace: "pre-wrap", background: "rgba(0,0,0,0.05)", padding: "6px 8px", borderRadius: 4 }}>{`Idle      → Sending    (user taps Send)
Sending   → Streaming  (first token arrives)
Streaming → Done       (stream ends naturally)
Streaming → Cancelled  (user taps Stop)
Sending / Streaming → Error (exception)
Done / Cancelled / Error → Idle`}</pre>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>Sealed class implementation</p>
          <CodePane title="ChatUiState (Kotlin) / ChatState (Swift)" accent={PURPLE}>{`// Kotlin — sealed class
sealed class ChatUiState {
    object Idle      : ChatUiState()
    object Sending   : ChatUiState()
    data class Streaming(val partial: String, val job: Job? = null) : ChatUiState()
    data class Done(val fullText: String)      : ChatUiState()
    data class Error(val message: String, val retryable: Boolean = true) : ChatUiState()
    data class Cancelled(val partial: String)  : ChatUiState()

    val isIdle get() = this is Idle || this is Done || this is Error || this is Cancelled
}

// Swift — enum
enum ChatState: Equatable {
    case idle
    case sending
    case streaming(partial: String)
    case done
    case error(message: String, retryable: Bool = true)
    case cancelled(partial: String)

    var isIdle: Bool {
        switch self {
        case .idle, .done, .error, .cancelled: return true
        default: return false
        }
    }
}`}</CodePane>
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, margin: "0 0 6px" }}>How sendMessage() drives every transition</p>
            <pre style={{ fontSize: 10, color: BLUE, margin: 0, fontFamily: "monospace", lineHeight: 1.85, whiteSpace: "pre-wrap", background: "rgba(0,0,0,0.06)", padding: "8px 10px", borderRadius: 4 }}>{`fun sendMessage(text: String) {
    if (!uiState.isIdle) return          // guard: Idle only
    history.add(Message("user", text))
    streamJob = viewModelScope.launch {
        _uiState.value = Sending         // → Sending
        repo.streamMessage(history)
            .catch { e ->
                history.removeLastOrNull()
                _uiState.value = Error(e.message ?: "")  // → Error
            }
            .collect { token ->
                accumulated += token
                _uiState.value = Streaming(accumulated)  // → Streaming (per token)
            }
        // Only reach here if no exception and not cancelled
        if (_uiState.value is Streaming) {
            history.add(Message("assistant", accumulated))
            _uiState.value = Idle        // → Idle (Done omitted for brevity)
        }
    }
}

fun cancelStream() {
    streamJob?.cancel()
    val partial = (uiState.value as? Streaming)?.partial ?: ""
    _uiState.value = Cancelled(partial)  // → Cancelled
}`}</pre>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 6: Typing indicators
  () => (
    <Shell tag="UI Pattern" tagColor="ai" timer="10" title="Typing indicators — the three-dot animation" subtitle="Covers the 300–2000ms gap between Send and the first token" notes="The typing indicator is shown during Sending state only — not during Streaming. Once the first token arrives, transition to Streaming and the indicator is replaced by the partial text bubble. The key insight: the transition from indicator to streaming text should be seamless — no layout jump. Both implementations use an infinite animation — Android with InfiniteTransition, iOS with a repeating Timer.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>What it looks like and when to show it</p>
          <div style={{ background: GRAY, borderRadius: 12, padding: "14px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ alignSelf: "flex-end", background: PURPLE, color: "#fff", borderRadius: "18px 18px 4px 18px", padding: "9px 14px", fontSize: 13, maxWidth: "80%" }}>What's the best way to learn Kotlin?</div>
            <div style={{ alignSelf: "flex-start", background: "#e5e7eb", borderRadius: "18px 18px 18px 4px", padding: "12px 16px", display: "flex", gap: 5, alignItems: "center" }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: MUTED, opacity: 0.3 + i * 0.35 }} />
              ))}
            </div>
            <div style={{ fontSize: 10, color: MUTED, textAlign: "center", fontStyle: "italic" }}>← shown during Sending state only (~300ms to 2s)</div>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>State transitions for the indicator</p>
            <div style={{ fontSize: 11, color: PURPLE_DARK, fontFamily: "monospace", lineHeight: 1.8 }}>
              <div><strong>Idle → Sending</strong>: show TypingIndicator()</div>
              <div><strong>Sending → Streaming</strong>: hide indicator, show StreamingBubble</div>
              <div><strong>Sending → Error</strong>: hide indicator, show ErrorBanner</div>
            </div>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 3px" }}>⚠️ Don't show the indicator during streaming</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>A common mistake is showing the typing indicator whenever content is loading — including during streaming. This creates a confusing UI where both the indicator and the partial text are visible simultaneously.</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <CodePane title="Android — Compose InfiniteTransition" accent={BLUE}>{`@Composable
fun TypingIndicator() {
    val transition = rememberInfiniteTransition(label = "typing")
    Row(
        Modifier
            .background(Color(0xFFE5E7EB), RoundedCornerShape(18.dp))
            .padding(horizontal = 16.dp, vertical = 12.dp),
        horizontalArrangement = Arrangement.spacedBy(5.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        repeat(3) { index ->
            val alpha by transition.animateFloat(
                initialValue = 0.2f,
                targetValue = 1f,
                animationSpec = infiniteRepeatable(
                    animation = tween(500, easing = EaseInOut),
                    repeatMode = RepeatMode.Reverse,
                    initialStartOffset = StartOffset(index * 180)
                ),
                label = "dot-$index"
            )
            Box(
                Modifier
                    .size(9.dp)
                    .graphicsLayer { this.alpha = alpha }
                    .background(Color(0xFF9CA3AF), CircleShape)
            )
        }
    }
}`}</CodePane>
          <CodePane title="iOS — SwiftUI repeating Timer" accent={GREEN}>{`struct TypingIndicator: View {
    @State private var phase = 0
    let timer = Timer.publish(
        every: 0.35, on: .main, in: .common
    ).autoconnect()

    var body: some View {
        HStack(spacing: 5) {
            ForEach(0..<3) { i in
                Circle()
                    .fill(Color.gray.opacity(
                        i == phase ? 1.0 : 0.25
                    ))
                    .frame(width: 9, height: 9)
                    .animation(
                        .easeInOut(duration: 0.3),
                        value: phase
                    )
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        .background(
            Color(.systemGray5),
            in: RoundedRectangle(cornerRadius: 18)
        )
        .onReceive(timer) { _ in
            phase = (phase + 1) % 3
        }
    }
}`}</CodePane>
        </div>
      </div>
    </Shell>
  ),

  // 7: Partial render states
  () => (
    <Shell tag="UI Pattern" tagColor="ai" timer="13" title="Partial render states — graceful streaming text" subtitle="Half-rendered text is not broken — if you handle it correctly" notes="The core challenge: LLMs often return Markdown, but Markdown only renders correctly when the text is complete. A half-delivered code block or bold marker looks broken if you parse it mid-stream. Two strategies. Strategy A (defer and re-render) is recommended for labs and most production apps. The blinking cursor is a 5-line addition that makes a disproportionate difference — walk through it explicitly.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The Markdown mid-stream problem</p>
          <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", margin: "0 0 6px" }}>Stream paused mid-block — if you parse Markdown eagerly</p>
            <div style={{ fontFamily: "monospace", fontSize: 11, color: "#A32D2D", lineHeight: 1.8 }}>
              <div>Here is how to reverse a string in Kotlin:</div>
              <div style={{ background: "rgba(0,0,0,0.08)", borderRadius: 4, padding: "4px 8px", margin: "4px 0" }}>{"`"}`</div>
              <div>fun reverseString(s: String): S</div>
              <div style={{ color: "#c0392b", fontStyle: "italic", fontSize: 10 }}>← stream paused here. Code block never closed. Renders as garbage.</div>
            </div>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 6px" }}>Strategy A — defer parsing (recommended for labs)</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: "0 0 6px", lineHeight: 1.5 }}>During <code style={{ fontFamily: "monospace", fontSize: 10, background: "rgba(0,0,0,0.08)", borderRadius: 3, padding: "1px 4px" }}>Streaming</code>: render plain text + blinking cursor. On <code style={{ fontFamily: "monospace", fontSize: 10, background: "rgba(0,0,0,0.08)", borderRadius: 3, padding: "1px 4px" }}>Done</code>: re-render as Markdown. Zero dependencies, works for all content types.</p>
            <pre style={{ fontSize: 10, color: PURPLE_DARK, margin: 0, fontFamily: "monospace", lineHeight: 1.75, background: "rgba(0,0,0,0.06)", padding: "7px 9px", borderRadius: 4, whiteSpace: "pre-wrap" }}>{`// In your LazyColumn / LazyVStack:
when (msg.role) {
  "assistant" -> {
    if (isStreaming && msg == history.last())
      StreamingBubble(text = msg.content)  // plain text + cursor
    else
      MarkdownView(text = msg.content)     // full Markdown render
  }
}`}</pre>
          </div>
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, margin: "0 0 6px" }}>Strategy B — streaming Markdown library (capstone stretch goal)</p>
            <p style={{ fontSize: 11, color: BLUE, margin: "0 0 6px", lineHeight: 1.5 }}>Render Markdown incrementally as tokens arrive. Looks better; adds a dependency. Android: <code style={{ fontFamily: "monospace", fontSize: 10 }}>Markwon</code>. iOS: <code style={{ fontFamily: "monospace", fontSize: 10 }}>MarkdownUI</code>.</p>
            <pre style={{ fontSize: 10, color: BLUE, margin: 0, fontFamily: "monospace", lineHeight: 1.75, background: "rgba(0,0,0,0.06)", padding: "7px 9px", borderRadius: 4, whiteSpace: "pre-wrap" }}>{`// Android — build.gradle.kts
implementation("io.noties.markwon:core:4.6.2")
implementation("io.noties.markwon:syntax-highlight:4.6.2")

// Composable wrapper
@Composable
fun MarkdownBubble(text: String) {
    val markwon = remember { Markwon.create(LocalContext.current) }
    AndroidView(factory = { ctx ->
        TextView(ctx).also { markwon.setMarkdown(it, text) }
    }, update = { markwon.setMarkdown(it, text) })
}

// iOS — Package.swift or SPM: 'swift-markdown-ui'
import MarkdownUI
Markdown(partialText)  // re-renders on every token — simple but can flicker`}</pre>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>The blinking cursor — why it matters</p>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>A blinking cursor appended to the streaming text signals: "more is coming." Without it, users sometimes think the stream has stalled, especially when the model pauses between sentences. 5 lines of code, outsized impact.</p>
          </div>
          <CodePane title="Android — cursor in Compose" accent={BLUE}>{`@Composable
fun StreamingBubble(text: String) {
    val cursorVisible by rememberInfiniteTransition(label = "cursor")
        .animateFloat(
            initialValue = 0f, targetValue = 1f,
            animationSpec = infiniteRepeatable(
                tween(500), RepeatMode.Reverse
            ),
            label = "blink"
        )
    // Append block cursor that blinks at ~1Hz
    Text(
        text = text + if (cursorVisible > 0.5f) "▋" else " ",
        style = MaterialTheme.typography.bodyMedium
    )
}`}</CodePane>
          <CodePane title="iOS — cursor in SwiftUI" accent={GREEN}>{`struct StreamingBubble: View {
    let text: String
    @State private var showCursor = true
    let cursorTimer = Timer.publish(
        every: 0.5, on: .main, in: .common
    ).autoconnect()

    var body: some View {
        Text(text + (showCursor ? "▋" : " "))
            .onReceive(cursorTimer) { _ in
                showCursor.toggle()
            }
    }
}`}</CodePane>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>Strategy A in practice</p>
            <pre style={{ fontSize: 10, color: PURPLE_DARK, margin: 0, fontFamily: "monospace", lineHeight: 1.7, background: "rgba(0,0,0,0.06)", padding: "6px 8px", borderRadius: 4, whiteSpace: "pre-wrap" }}>{`// During streaming
if (uiState is Streaming)
    StreamingBubble(text = partial)  // plain text + cursor

// When done: re-render as Markdown
if (uiState is Done || msg.role == "assistant")
    MarkdownView(text = msg.content)  // parsed + formatted`}</pre>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 8: Error fallback UX
  () => (
    <Shell tag="UI Pattern" tagColor="red" timer="14" title="Error fallback UX — design the failure mode first" subtitle="Your users will hit every one of these. What do they see?" notes="Most students only think about errors as 'show a toast'. Walk through the six error categories — they require different UI responses. Network errors are transient and retryable. Rate limits require the user to wait. Context overflow is a product decision — should you truncate silently? The error banner pattern is a concrete UI component they can implement in the lab. The design rule at the bottom is the most important takeaway.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Error taxonomy — 6 types, 6 responses</p>
          {[
            { code: "Network timeout", http: "—",   color: AMBER_LIGHT, fg: "#633806", action: "Show retry button. User's message stays in list. The error is transient — most retries succeed.", retryable: true },
            { code: "401 Unauthorized", http: "401", color: "#FCEBEB", fg: "#A32D2D", action: "API key is invalid or missing. Developer error, not user error. Don't surface the HTTP code — just log it.", retryable: false },
            { code: "429 Rate limited", http: "429", color: AMBER_LIGHT, fg: "#633806", action: "Show 'Too many requests — try again in a moment.' Check Retry-After header for exact cooldown time.", retryable: true },
            { code: "400 Context overflow", http: "400", color: PURPLE_LIGHT, fg: PURPLE_DARK, action: "Conversation history too long. Trim oldest messages and retry silently, or tell user to start a new chat.", retryable: true },
            { code: "5xx Server error", http: "5xx", color: "#FCEBEB", fg: "#A32D2D", action: "Anthropic-side issue. Offer retry. If persistent: 'Service unavailable — try again later.'", retryable: true },
            { code: "Stream interrupted", http: "—",  color: BLUE_LIGHT, fg: BLUE, action: "Show partial response with [connection lost] label. Offer 'Continue' which resumes from the cut-off.", retryable: true },
          ].map(e => (
            <div key={e.code} style={{ background: e.color, borderRadius: 8, padding: "8px 12px", marginBottom: 6, display: "flex", gap: 10 }}>
              <div style={{ minWidth: 100, flexShrink: 0 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: e.fg, margin: 0 }}>{e.code}</p>
                {e.http !== "—" && <p style={{ fontSize: 10, color: e.fg, margin: 0, opacity: 0.7 }}>HTTP {e.http}</p>}
                <span style={{ fontSize: 9, fontWeight: 600, background: e.retryable ? TEAL_LIGHT : "#FCEBEB", color: e.retryable ? TEAL_DARK : "#A32D2D", padding: "1px 5px", borderRadius: 8, textTransform: "uppercase" }}>{e.retryable ? "retryable" : "not retryable"}</span>
              </div>
              <p style={{ fontSize: 11, color: e.fg, margin: 0, lineHeight: 1.5 }}>{e.action}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>The error banner pattern</p>
          <div style={{ background: GRAY, borderRadius: 12, padding: "14px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ alignSelf: "flex-end", background: PURPLE, color: "#fff", borderRadius: "18px 18px 4px 18px", padding: "9px 14px", fontSize: 12 }}>What is the capital of Australia?</div>
            <div style={{ background: "#FCEBEB", border: "1px solid #fca5a5", borderRadius: 10, padding: "10px 14px" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontSize: 16 }}>⚠️</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 2px" }}>Couldn't get a response</p>
                  <p style={{ fontSize: 11, color: "#A32D2D", margin: "0 0 8px" }}>Network error. Check your connection and try again.</p>
                  <div style={{ display: "flex", gap: 8 }}>
                    <div style={{ background: "#A32D2D", color: "#fff", borderRadius: 6, padding: "5px 14px", fontSize: 11, fontWeight: 600 }}>Retry</div>
                    <div style={{ background: "transparent", border: "1px solid #fca5a5", color: "#A32D2D", borderRadius: 6, padding: "5px 14px", fontSize: 11 }}>Dismiss</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CodePane title="Android — error state in Compose" accent={BLUE}>{`@Composable
fun ErrorBanner(message: String, onRetry: () -> Unit) {
    Card(
        colors = CardDefaults.cardColors(
            containerColor = Color(0xFFFCEBEB)
        ),
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 8.dp, vertical = 4.dp)
    ) {
        Row(Modifier.padding(12.dp), verticalAlignment = Alignment.Top) {
            Text("⚠️", fontSize = 16.sp)
            Spacer(Modifier.width(8.dp))
            Column {
                Text(message, color = Color(0xFFA32D2D),
                    fontWeight = FontWeight.SemiBold, fontSize = 13.sp)
                Spacer(Modifier.height(6.dp))
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    Button(onClick = onRetry,
                        colors = ButtonDefaults.buttonColors(
                            containerColor = Color(0xFFA32D2D))) {
                        Text("Retry")
                    }
                }
            }
        }
    }
}`}</CodePane>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px" }}>Design rule</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Never show a raw HTTP status code, exception class name, or stack trace to users. Translate every technical failure into plain language with a clear next action. The user doesn't care that it was a <code style={{ fontFamily: "monospace", fontSize: 10 }}>SocketTimeoutException</code>.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 9: Cancellation + input locking
  () => (
    <Shell tag="UI Pattern" tagColor="ai" timer="8" title="Cancellation and input locking" subtitle="Let users stop. Prevent them from sending twice." notes="Cancellation and input locking are the same underlying concern: controlling when the ViewModel is busy. Walk through cancellation first — it's the more novel pattern. Then show input locking as a direct consequence: if the ViewModel is busy, the input is disabled and the Send button becomes a Stop button. Both platforms follow the exact same logic; only the cancellation primitive differs (Job vs Task).">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Cancellation — how it works</p>
          <p style={{ fontSize: 11, color: MUTED, margin: "0 0 10px", lineHeight: 1.5 }}>Store a reference to the in-flight Job (Android) or Task (iOS). When the user taps Stop, cancel it and transition to the <code style={{ fontFamily: "monospace", fontSize: 10, background: GRAY, padding: "1px 4px", borderRadius: 3 }}>Cancelled</code> state with whatever partial text accumulated.</p>
          <CodePane title="Android — Job cancellation" accent={BLUE}>{`// In ChatViewModel
private var streamJob: Job? = null

fun sendMessage(text: String) {
    if (!uiState.value.isIdle) return
    history.add(Message("user", text))
    streamJob = viewModelScope.launch {
        var accumulated = ""
        _uiState.value = ChatUiState.Sending
        repo.streamMessage(history)
            .catch { e ->
                if (e is CancellationException) return@catch
                history.removeLastOrNull()
                _uiState.value = ChatUiState.Error(e.message ?: "")
            }
            .collect { token ->
                accumulated += token
                _uiState.value = ChatUiState.Streaming(accumulated)
            }
        // Reached only if not cancelled, not error
        if (_uiState.value is ChatUiState.Streaming) {
            history.add(Message("assistant", accumulated))
            _uiState.value = ChatUiState.Idle
        }
    }
}

fun cancelStream() {
    val partial = (_uiState.value as? ChatUiState.Streaming)?.partial ?: ""
    streamJob?.cancel()
    // Append partial as a cancelled assistant message
    if (partial.isNotBlank())
        history.add(Message("assistant", "$partial [stopped]"))
    _uiState.value = ChatUiState.Idle
}`}</CodePane>
          <CodePane title="iOS — Task cancellation" accent={GREEN}>{`private var streamTask: Task<Void, Never>?

func sendMessage(_ text: String) {
    guard chatState.isIdle else { return }
    history.append(Message(role: "user", content: text))
    streamTask = Task {
        var accumulated = ""
        chatState = .sending
        do {
            for try await token in repo.streamMessage(history: history) {
                accumulated += token
                chatState = .streaming(partial: accumulated)
            }
            history.append(Message(role: "assistant", content: accumulated))
            chatState = .idle
        } catch is CancellationError {
            // Handled in cancelStream()
        } catch {
            history.removeLast()
            chatState = .error(message: error.localizedDescription)
        }
    }
}

func cancelStream() {
    if case .streaming(let partial) = chatState, !partial.isEmpty {
        history.append(Message(role: "assistant",
            content: "\(partial) [stopped]"))
    }
    streamTask?.cancel()
    chatState = .idle
}`}</CodePane>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>Input locking — Send ↔ Stop button swap</p>
          <p style={{ fontSize: 11, color: MUTED, margin: "0 0 4px", lineHeight: 1.5 }}>Drive the entire input row directly from <code style={{ fontFamily: "monospace", fontSize: 10, background: GRAY, padding: "1px 4px", borderRadius: 3 }}>uiState.isIdle</code>. One boolean — no separate flags.</p>
          <CodePane title="Android — Compose input row" accent={BLUE}>{`@Composable
fun InputRow(vm: ChatViewModel) {
    val uiState by vm.uiState.collectAsStateWithLifecycle()
    var input by remember { mutableStateOf("") }

    Row(Modifier.fillMaxWidth().padding(8.dp),
        verticalAlignment = Alignment.CenterVertically) {
        TextField(
            value = input,
            onValueChange = { input = it },
            enabled = uiState.isIdle,
            placeholder = { Text("Message...") },
            modifier = Modifier.weight(1f)
        )
        Spacer(Modifier.width(8.dp))
        AnimatedContent(targetState = uiState.isIdle) { idle ->
            if (idle) {
                Button(
                    onClick = { vm.sendMessage(input); input = "" },
                    enabled = input.isNotBlank()
                ) { Text("Send") }
            } else {
                IconButton(onClick = vm::cancelStream) {
                    Icon(Icons.Default.Stop, "Stop response",
                         tint = MaterialTheme.colorScheme.error)
                }
            }
        }
    }
}`}</CodePane>
          <CodePane title="iOS — SwiftUI input row" accent={GREEN}>{`struct InputRow: View {
    @ObservedObject var vm: ChatViewModel
    @State private var input = ""

    var body: some View {
        HStack(spacing: 8) {
            TextField("Message...", text: $input)
                .textFieldStyle(.roundedBorder)
                .disabled(!vm.chatState.isIdle)
                .submitLabel(.send)
                .onSubmit(sendIfReady)

            if vm.chatState.isIdle {
                Button("Send", action: sendIfReady)
                    .buttonStyle(.borderedProminent)
                    .disabled(input.trimmingCharacters(
                        in: .whitespaces).isEmpty)
            } else {
                Button(action: vm.cancelStream) {
                    Image(systemName: "stop.circle.fill")
                        .foregroundStyle(.red)
                        .font(.title2)
                }
                .accessibilityLabel("Stop response")
            }
        }.padding()
    }

    private func sendIfReady() {
        guard !input.trimmingCharacters(in: .whitespaces).isEmpty else { return }
        vm.sendMessage(input)
        input = ""
    }
}`}</CodePane>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: TEAL_DARK, margin: "0 0 3px" }}>Why AnimatedContent / if-else matters</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Without animation, Send → Stop is an instant swap that users miss. <code style={{ fontFamily: "monospace", fontSize: 10 }}>AnimatedContent</code> (Compose) and the SwiftUI conditional rendering both crossfade, making the state change visible and intentional.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 10: Smart auto-scroll
  () => (
    <Shell tag="UI Pattern" tagColor="ai" timer="7" title="Smart auto-scroll — follow tokens, respect the user" subtitle="Scroll to keep new content visible. Stop when the user scrolls up." notes="This is the subtlest of the three patterns but the one users notice most when it's wrong. The 'snap back' problem — where the user scrolls up to re-read something and gets forcibly scrolled back to the bottom on the next token — is one of the most complained-about UX issues in AI chat products. The Android derivedStateOf detection of 'at the bottom' is genuinely idiomatic Compose — explain why derivedStateOf avoids recomposition.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The two auto-scroll behaviours</p>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "14px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 10px" }}>✅ Smart scroll (what users want)</p>
            {[
              { s: "User sends a message", b: "Scroll to bottom immediately" },
              { s: "Streaming starts", b: "Follow each new token to keep streaming bubble in view" },
              { s: "User scrolls up mid-stream", b: "Stop auto-scrolling — let them read in peace" },
              { s: "User scrolls back to bottom", b: "Resume auto-scrolling on next token" },
              { s: "Stream ends", b: "No forced scroll — user is already where they want to be" },
            ].map(r => (
              <div key={r.s} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
                <span style={{ fontSize: 10, color: TEAL_DARK, fontStyle: "italic", minWidth: 150, flexShrink: 0 }}>{r.s}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: TEAL_DARK }}>→ {r.b}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#FCEBEB", borderRadius: 10, padding: "14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 10px" }}>❌ Naive scroll (what you have now)</p>
            {[
              { s: "Streaming starts", b: "Always scroll to bottom on every token" },
              { s: "User scrolls up mid-stream", b: "Snap back to bottom on the next token" },
              { s: "User tries to re-read", b: "Impossible — can't hold position during streaming" },
            ].map(r => (
              <div key={r.s} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
                <span style={{ fontSize: 10, color: "#A32D2D", fontStyle: "italic", minWidth: 150, flexShrink: 0 }}>{r.s}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: "#A32D2D" }}>→ {r.b}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <CodePane title="Android — derivedStateOf + isAtBottom" accent={BLUE}>{`@Composable
fun ChatList(history: List<Message>, uiState: ChatUiState) {
    val listState = rememberLazyListState()

    // derivedStateOf: recomputes only when scroll position changes
    // NOT on every recomposition — avoids performance issues
    val isAtBottom by remember {
        derivedStateOf {
            val info = listState.layoutInfo
            val lastVisible = info.visibleItemsInfo.lastOrNull()
            val total = info.totalItemsCount
            lastVisible == null || lastVisible.index >= total - 2
        }
    }

    // Scroll when a new token arrives, but only if already at bottom
    LaunchedEffect(uiState) {
        if (uiState is ChatUiState.Streaming && isAtBottom) {
            val total = listState.layoutInfo.totalItemsCount
            if (total > 0) listState.animateScrollToItem(total - 1)
        }
    }
    // Always scroll on a new user message send
    LaunchedEffect(history.size) {
        if (uiState is ChatUiState.Idle) {
            val total = listState.layoutInfo.totalItemsCount
            if (total > 0) listState.animateScrollToItem(total - 1)
        }
    }

    LazyColumn(state = listState, modifier = Modifier.fillMaxSize()) {
        items(history) { MessageBubble(it) }
        item {
            when (uiState) {
                is ChatUiState.Sending -> TypingIndicator()
                is ChatUiState.Streaming -> StreamingBubble(uiState.partial)
                else -> {}
            }
        }
    }
}`}</CodePane>
          <CodePane title="iOS — position tracking via preference" accent={GREEN}>{`// iOS approach: track whether content overflows the viewport
// If content height < scroll height, user can't scroll up — always scroll
// Otherwise, track position via GeometryReader preference

struct ChatList: View {
    let history: [Message]
    let chatState: ChatState
    @State private var userScrolledUp = false

    var body: some View {
        ScrollViewReader { proxy in
            ScrollView {
                LazyVStack {
                    ForEach(history) { msg in
                        MessageBubble(message: msg).id(msg.id)
                    }
                    switch chatState {
                    case .sending: TypingIndicator()
                    case .streaming(let p):
                        StreamingBubble(text: p)
                            .id("streaming")
                            .onChange(of: p) { _ in
                                if !userScrolledUp {
                                    withAnimation(.linear(duration: 0.05)) {
                                        proxy.scrollTo("streaming",
                                            anchor: .bottom)
                                    }
                                }
                            }
                    default: EmptyView()
                    }
                }.padding()
            }
            // Reset "scrolled up" flag when user sends a new message
            .onChange(of: history.count) { _ in
                userScrolledUp = false
                proxy.scrollTo(history.last?.id, anchor: .bottom)
            }
        }
    }
}

// Note: Detecting scroll-up in SwiftUI requires a custom PreferenceKey
// for the scroll offset — see Resources tab for the full implementation.`}</CodePane>
        </div>
      </div>
    </Shell>
  ),

  // 11: Accessibility + capstone
  () => (
    <Shell tag="Concept + Capstone" tagColor="teal" timer="5" title="Accessibility and capstone integration" subtitle="Screen readers + which patterns your app needs" notes="Two short topics on one slide — 3 min each. The accessibility patterns are often overlooked entirely by students because they don't test with screen readers. Make it concrete by showing the actual API calls rather than just describing intent. The capstone table is a fast planning tool — send students to breakout rooms with it open.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Accessibility — the actual API calls</p>
          <p style={{ fontSize: 11, color: MUTED, margin: "0 0 8px", lineHeight: 1.5 }}>A streaming text that updates 10×/sec creates an unusable screen reader experience unless you control what gets announced and when.</p>
          <CodePane title="Android — TalkBack" accent={BLUE}>{`// 1. Typing indicator: static announcement, no live region
Box(
    Modifier.semantics {
        contentDescription = "Claude is thinking"
        liveRegion = LiveRegionMode.None
    }
) { TypingIndicator() }

// 2. Completed message: announce once when streaming ends
val isStreaming = uiState is ChatUiState.Streaming
Text(
    text = message.content,
    modifier = Modifier.semantics {
        // Only mark as live region when it's a completed response
        if (!isStreaming) liveRegion = LiveRegionMode.Polite
    }
)

// 3. Error announcement: post immediately
LaunchedEffect(uiState) {
    if (uiState is ChatUiState.Error) {
        accessibilityManager.interrupt()
        view.announceForAccessibility(
            "Error: ${(uiState as ChatUiState.Error).message}"
        )
    }
}`}</CodePane>
          <CodePane title="iOS — VoiceOver" accent={GREEN}>{`// 1. Typing indicator: static label
TypingIndicator()
    .accessibilityLabel("Claude is thinking")
    .accessibilityHidden(false)  // visible to VoiceOver

// 2. Completed message: post notification once
.onChange(of: chatState) { newState in
    if case .idle = newState, let last = history.last,
       last.role == "assistant" {
        UIAccessibility.post(
            notification: .announcement,
            argument: last.content
        )
    }
}

// 3. Error: immediate announcement
.onChange(of: chatState) { newState in
    if case .error(let msg) = newState {
        UIAccessibility.post(
            notification: .announcement,
            argument: "Error: \(msg)"
        )
    }
}`}</CodePane>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Capstone integration — what does your app need?</p>
          <p style={{ fontSize: 11, color: MUTED, margin: "0 0 8px", lineHeight: 1.5 }}>Not every app needs all 7 patterns. Use this to plan before the lab.</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
              <thead>
                <tr style={{ background: PURPLE_LIGHT }}>
                  {["Pattern", "Chat", "Q&A", "Image AI", "Assistant"].map(h => (
                    <th key={h} style={{ padding: "5px 7px", textAlign: "left", color: PURPLE_DARK, fontWeight: 600, fontSize: 10, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Typing indicator", "✅", "✅", "✅", "✅"],
                  ["Blinking cursor", "✅", "✅", "⚪", "✅"],
                  ["Error banner + retry", "✅", "✅", "✅", "✅"],
                  ["Input locking", "✅", "✅", "✅", "✅"],
                  ["Cancellation", "✅", "⚪", "⚪", "✅"],
                  ["Smart auto-scroll", "✅", "⚪", "⛔", "✅"],
                  ["Markdown render", "✅", "⚪", "⛔", "✅"],
                  ["a11y announcements", "✅", "⚪", "⚪", "✅"],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : GRAY }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "4px 7px", color: j === 0 ? TEXT : (cell === "✅" ? TEAL_DARK : cell === "⚪" ? MUTED : "#A32D2D"), fontSize: j === 0 ? 11 : 13, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
            {[{ sym: "✅", label: "Essential", color: TEAL_LIGHT, fg: TEAL_DARK }, { sym: "⚪", label: "Optional", color: GRAY, fg: MUTED }, { sym: "⛔", label: "N/A", color: "#FCEBEB", fg: "#A32D2D" }].map(l => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 5, background: l.color, borderRadius: 6, padding: "3px 9px" }}>
                <span style={{ fontSize: 11 }}>{l.sym}</span>
                <span style={{ fontSize: 11, color: l.fg, fontWeight: 500 }}>{l.label}</span>
              </div>
            ))}
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px", marginTop: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 3px" }}>Minimum viable polish</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>Typing indicator + error banner + input locking on every AI feature. These three take ~30 minutes and turn a working prototype into a demo-ready product.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 11: Lab intro
  () => (
    <Shell tag="Lab intro" timer="5" title="Today's lab — add the polish layer" subtitle="55 minutes in breakout rooms — building on Session 1" notes="Students are building on the Session 1 lab. Confirm everyone has a working streaming screen before breakout rooms. Students who didn't finish Session 1 should use the provided starter project. Walk through the four required features and the stretch goals before sending to rooms.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Required features</p>
          {[
            { num: "1", feature: "Expand ChatUiState / ChatState", detail: "Add Sending, Cancelled states. Update ViewModel to transition through all states correctly.", color: PURPLE_LIGHT, fg: PURPLE_DARK },
            { num: "2", feature: "Typing indicator", detail: "Animated three-dot bubble visible during Sending state only. Disappears when first token arrives.", color: AMBER_LIGHT, fg: "#633806" },
            { num: "3", feature: "Error banner + retry", detail: "Inline error card when API call fails. Retry button re-sends the last user message.", color: "#FCEBEB", fg: "#A32D2D" },
            { num: "4", feature: "Cancel + input locking", detail: "Stop button replaces Send during streaming. Cancels OkHttp call / Task. Input locked until state is idle.", color: BLUE_LIGHT, fg: BLUE },
            { num: "5", feature: "Auto-scroll", detail: "List follows new tokens as they arrive. (iOS: always scroll; Android: only when already at bottom.)", color: TEAL_LIGHT, fg: TEAL_DARK },
          ].map(f => (
            <div key={f.num} style={{ background: f.color, borderRadius: 8, padding: "9px 12px", marginBottom: 7 }}>
              <div style={{ display: "flex", gap: 7, alignItems: "center", marginBottom: 3 }}>
                <span style={{ background: f.fg, color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{f.num}</span>
                <p style={{ fontSize: 12, fontWeight: 600, color: f.fg, margin: 0 }}>{f.feature}</p>
              </div>
              <p style={{ fontSize: 11, color: f.fg, margin: 0, lineHeight: 1.5, paddingLeft: 25 }}>{f.detail}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: "#F9F0FF", borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#6B21A8", margin: "0 0 8px" }}>✨ Stretch goals</p>
            {[
              "Blinking cursor during streaming (5 lines of code, big visual impact)",
              "Strategy A: show plain text while streaming, re-render as Markdown when done",
              "Accessibility: contentDescription on typing indicator and stop button",
              "Persist conversation history across app restarts with Room / SwiftData",
              "'Clear conversation' button that resets history and returns to Idle",
              "System prompt picker: let user choose Claude's persona from a list",
            ].map(s => (
              <div key={s} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: "#6B21A8", fontSize: 11, flexShrink: 0 }}>□</span>
                <span style={{ fontSize: 11, color: "#6B21A8", lineHeight: 1.4 }}>{s}</span>
              </div>
            ))}
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 6px" }}>⚠️ Before you start</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>Make sure your Session 1 streaming chat screen is working first. If you are blocked, use the starter project from the Unit page — it has the Session 1 solution pre-built so you can focus on the polish layer.</p>
          </div>
          <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: GREEN, margin: "0 0 4px" }}>🤖 AI hint</p>
            <p style={{ fontSize: 11, color: GREEN, margin: 0, lineHeight: 1.5 }}>Claude writes excellent Compose animations and SwiftUI state machines. If you are stuck on the typing indicator or the auto-scroll logic: describe the exact behavior you want and ask Claude to generate the implementation. Read the output before copying — understand what each line does.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 12: Wrap-up
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 7 complete</p>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: "#fff", margin: "0 0 8px" }}>Your apps feel intelligent now.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>You did not just call an API. You built the complete AI feature — the plumbing and the polish — on a real mobile platform.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Week 7 — complete picture</p>
            {[
              "S1: LLM APIs — tokens, statelessness, open connections",
              "S1: Messages API anatomy — model, system, messages, roles",
              "S1: SSE wire format and parsing rules",
              "S1: History management — correct append order",
              "S1: Secure API key storage on both platforms",
              "S1: Full 4-file implementation on Android and iOS",
              "S2: The 6-state AI UI state machine",
              "S2: Typing indicators — Sending state coverage",
              "S2: Partial render — blinking cursor + deferred Markdown",
              "S2: Error taxonomy — 6 types, 6 UI responses",
              "S2: Cancellation, input locking, smart auto-scroll",
              "S2: Accessibility for streaming content",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "3px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0, fontSize: 11 }}>✓</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Week 8 preview</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.95)", margin: "0 0 10px", fontWeight: 500 }}>On-device AI — intelligence without the cloud</p>
            {[
              "Run ML models directly on the phone — no internet required",
              "Android: ML Kit for text recognition and image labeling",
              "Android: Gemini Nano via Android AICore",
              "iOS: Core ML + Vision framework",
              "iOS: Create ML for simple custom models",
              "Building a camera feature that identifies objects in real time",
              "On-device vs cloud — when to use which",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, background: "rgba(255,255,255,0.15)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.9)", margin: "0 0 3px", fontWeight: 600 }}>📋 Capstone Milestone 2</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Core navigation complete, at least one networking call working end-to-end. Instructor check-in during Week 8 — 10 min per team.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "8px 14px", flex: 1 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.9)", margin: 0 }}>✏️ Please fill out the <strong>session survey</strong> — 2 minutes. Your feedback shapes the course.</p>
        </div>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "8px 14px" }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.9)", margin: 0 }}>🏗️ <strong>M1</strong> due end of this week.</p>
        </div>
      </div>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 7 · Session 2 · {slides.length} slides · 2 hrs</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>UI patterns for AI-generated content</p>
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
