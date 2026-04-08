import { useState } from "react";

const PURPLE = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT = "#EEEDFE";
const TEAL = "#1D9E75";
const TEAL_LIGHT = "#E1F5EE";
const GRAY = "#F5F5F7";
const TEXT = "#1a1a2e";
const MUTED = "#6b7280";

const Tag = ({ children, color = PURPLE }) => (
  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", background: color === PURPLE ? PURPLE_LIGHT : TEAL_LIGHT, color, padding: "2px 8px", borderRadius: 20 }}>{children}</span>
);

const CodePane = ({ title, accent = PURPLE, children }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0" }}>{title}</div>
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: "0 0 8px 8px", lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Bullet = ({ children, sub }) => (
  <div style={{ display: "flex", gap: 8, margin: sub ? "3px 0 3px 20px" : "7px 0", alignItems: "flex-start" }}>
    <span style={{ color: sub ? TEAL : PURPLE, fontWeight: 700, fontSize: sub ? 12 : 14, marginTop: 1, flexShrink: 0 }}>{sub ? "◦" : "▸"}</span>
    <span style={{ fontSize: sub ? 13 : 14, color: sub ? MUTED : TEXT, lineHeight: 1.5 }}>{children}</span>
  </div>
);

const Notes = ({ children }) => (
  <div style={{ borderTop: `2px dashed ${PURPLE_LIGHT}`, marginTop: 14, paddingTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".06em" }}>Speaker notes</p>
    <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>{children}</p>
  </div>
);

const Discussion = ({ children }) => (
  <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "10px 14px", margin: "10px 0" }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: TEAL, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".06em" }}>Discussion prompt</p>
    <p style={{ fontSize: 13, color: "#085041", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Info = ({ children }) => (
  <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "8px 14px", margin: "8px 0" }}>
    <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Warn = ({ title, children }) => (
  <div className="callout-warn" style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "8px 12px", margin: "8px 0" }}>
    {title && <p style={{ fontSize: 12, fontWeight: 600, color: "#92400e", margin: "0 0 2px" }}>{title}</p>}
    <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Shell = ({ tag, title, subtitle, timer, children, notes, dark }) => (
  <div style={{ background: dark ? PURPLE_DARK : "#fff", border: `1px solid ${dark ? "transparent" : "#e5e7eb"}`, borderRadius: 12, padding: "24px 28px 18px", minHeight: 360, display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        {tag && <Tag color={dark ? "#fff" : PURPLE}>{tag}</Tag>}
        {timer && <span style={{ fontSize: 11, color: MUTED, background: GRAY, padding: "2px 8px", borderRadius: 20 }}>~{timer} min</span>}
      </div>
      <h2 style={{ fontSize: dark ? 24 : 20, fontWeight: 700, color: dark ? "#fff" : TEXT, margin: 0, lineHeight: 1.2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 13, color: dark ? "rgba(255,255,255,0.65)" : MUTED, margin: "5px 0 0", lineHeight: 1.4 }}>{subtitle}</p>}
    </div>
    <div style={{ flex: 1 }}>{children}</div>
    {notes && <Notes>{notes}</Notes>}
  </div>
);

const slides = [
  // 1: Title
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 4 — Session 2</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>Loading states, error handling<br/>and image loading</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Turning a working API call into a production-quality screen</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Loading / Success / Error", "Retry pattern", "Coil + AsyncImage"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${TEAL}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Quick lab check — ask students to show their app displaying real Last.fm data. Anyone who did not get it working needs to pair up. Today's content builds directly on Session 1's API call — a working call is a prerequisite."}</Notes>
    </div>
  ),

  // 2: Recap
  () => (
    <Shell tag="Recap" timer="5" title="Session 1 recap — your first API call" notes="Keep this to 3 minutes. The key check: does everyone have real Last.fm data showing in their list? Anyone who does not should pair with someone who does before today's lab.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          { q: "What is an HTTP GET request?", a: "Your app sends a URL to a server and receives data back — usually JSON. The app always initiates; the server only responds." },
          { q: "What does suspend mean in Kotlin?", a: "The function can pause without blocking the thread. It must be called from a coroutine. The thread is free while the network call waits." },
          { q: "What does async throws mean in Swift?", a: "async = can pause without blocking. throws = can fail with an error that must be caught with do/try/catch." },
          { q: "Why must field names match JSON keys exactly?", a: "Gson and JSONDecoder use the field names to find matching keys in the JSON. A mismatch means null or a decoding error." },
        ].map(item => (
          <div key={item.q} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{item.q}</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <Discussion>{"Your app currently shows a blank screen for a second before the list appears. Open a popular app on your phone and notice: does it show a blank screen while loading? What does it show instead? Why does that feel better?"}</Discussion>
    </Shell>
  ),

  // 3: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 60 minutes" notes="By the end of today the app handles all three network states correctly and displays real album art. This is the session that makes the app feel production-quality rather than a student project.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "5 min",  title: "Recap", desc: "Session 1 — API call, models, coroutines" },
          { num: "02", time: "8 min",  title: "The three UI states", desc: "Loading, success, error — every networked screen needs all three" },
          { num: "03", time: "8 min",  title: "Sealed classes and enums for state", desc: "Modelling the three states cleanly in code" },
          { num: "04", time: "8 min",  title: "The retry pattern", desc: "How to let users recover from a failed request" },
          { num: "05", time: "8 min",  title: "Image loading from URLs", desc: "Coil (Android) and AsyncImage (SwiftUI)" },
          { num: "06", time: "5 min",  title: "Handling missing images", desc: "Fallbacks, placeholders, and error states for images" },
          { num: "07", time: "12 min", title: "Live code-along", desc: "Add all three states and image loading to the album browser" },
          { num: "08", time: "6 min",  title: "Lab intro + Assignment 4 overview", desc: "What you build today and the week's assignment" },
        ].map(item => (
          <div key={item.num} style={{ display: "flex", gap: 10, padding: "9px 11px", background: GRAY, borderRadius: 8, alignItems: "flex-start" }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: PURPLE_LIGHT, flexShrink: 0, lineHeight: 1, minWidth: 22 }}>{item.num}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: 0 }}>{item.title}</p>
                <span style={{ fontSize: 10, color: MUTED, flexShrink: 0, marginLeft: 6 }}>{item.time}</span>
              </div>
              <p style={{ fontSize: 11, color: MUTED, margin: "2px 0 0", lineHeight: 1.3 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 3b: Polished vs unpolished
  () => (
    <Shell tag="Polish matters" title="The difference one hour of work makes" subtitle="Both apps fetch the same data — one feels finished, one feels broken" notes="Let students look at this slide for 30 seconds silently before you say anything. Then ask: which app would you keep on your phone? The answer is obvious. The point: the data is identical. The code that fetches it is identical. The only difference is how the three states are handled. That is what today's session is about.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 10 }}>
        <div style={{ border: "2px solid #fca5a5", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ background: "#fff3f3", padding: "8px 14px", borderBottom: "1px solid #fca5a5" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: 0, textTransform: "uppercase", letterSpacing: ".04em" }}>Without loading + error states</p>
          </div>
          <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ background: GRAY, borderRadius: 8, padding: 16, minHeight: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontSize: 12, color: "#9ca3af", margin: 0, fontStyle: "italic" }}>( blank white screen )</p>
            </div>
            <div style={{ background: GRAY, borderRadius: 8, padding: 14 }}>
              <p style={{ fontSize: 11, color: "#6b7280", margin: "0 0 6px", fontWeight: 600 }}>What the user thinks</p>
              <p style={{ fontSize: 12, color: TEXT, margin: 0, lineHeight: 1.5 }}>"Did it crash? Is it loading? Did I do something wrong? Should I close the app?"</p>
            </div>
            <div style={{ background: "#fff3f3", borderRadius: 8, padding: 14 }}>
              <p style={{ fontSize: 11, color: "#b91c1c", margin: "0 0 6px", fontWeight: 600 }}>When WiFi is off</p>
              <p style={{ fontSize: 12, color: TEXT, margin: 0, lineHeight: 1.5 }}>Blank screen. No message. No retry. User force-quits and leaves a 1-star review.</p>
            </div>
          </div>
        </div>
        <div style={{ border: `2px solid ${TEAL}`, borderRadius: 12, overflow: "hidden" }}>
          <div style={{ background: TEAL_LIGHT, padding: "8px 14px", borderBottom: `1px solid ${TEAL}` }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#085041", margin: 0, textTransform: "uppercase", letterSpacing: ".04em" }}>With loading + error states</p>
          </div>
          <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ background: GRAY, borderRadius: 8, padding: 16, minHeight: 80, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", border: `3px solid ${PURPLE}`, borderTopColor: "transparent", animation: "spin 1s linear infinite" }} />
              <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>Loading artists...</p>
            </div>
            <div style={{ background: GRAY, borderRadius: 8, padding: 14 }}>
              <p style={{ fontSize: 11, color: "#6b7280", margin: "0 0 6px", fontWeight: 600 }}>What the user thinks</p>
              <p style={{ fontSize: 12, color: TEXT, margin: 0, lineHeight: 1.5 }}>"It is loading. I will wait." Then the list appears. Everything feels intentional.</p>
            </div>
            <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: 14 }}>
              <p style={{ fontSize: 11, color: TEAL, margin: "0 0 6px", fontWeight: 600 }}>When WiFi is off</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <p style={{ fontSize: 12, color: TEXT, margin: 0 }}>Something went wrong.</p>
                <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>Check your connection and try again.</p>
                <div style={{ background: PURPLE, borderRadius: 6, padding: "4px 12px", display: "inline-block", marginTop: 4 }}>
                  <p style={{ fontSize: 11, color: "#fff", margin: 0, fontWeight: 600 }}>Retry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </Shell>
  ),

  // 4: The three states
  () => (
    <Shell tag="UI states" timer="8" title="The three states of every networked screen" subtitle="Right now your app only handles one of them" notes="Draw this as a state diagram on the board. Start circle → Loading → (success arrow) → Success. Start circle → Loading → (error arrow) → Error → (retry arrow) → Loading. The retry arrow is what most beginner apps miss — they show an error but give the user no way out.">
      <Discussion>{"Your album browser currently shows a blank white screen for a second before the list appears. What is actually happening during that blank second? What should the user see instead?"}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 10 }}>
        {[
          {
            state: "Loading",
            when: "Request is in flight — waiting for the server",
            show: "A spinner or skeleton UI",
            missing: "Your app shows a blank screen",
            bg: "#E6F1FB", border: "#B5D4F4", text: "#0C447C", accent: "#378ADD"
          },
          {
            state: "Success",
            when: "Data arrived — parse complete",
            show: "The list of artists",
            missing: "This is what your app does — but only after the blank flash",
            bg: TEAL_LIGHT, border: TEAL, text: "#085041", accent: TEAL
          },
          {
            state: "Error",
            when: "Network failed, server error, bad key",
            show: "A message + retry button",
            missing: "Your app shows nothing — user thinks it crashed",
            bg: "#FCEBEB", border: "#F7C1C1", text: "#791F1F", accent: "#E24B4A"
          },
        ].map(s => (
          <div key={s.state} style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 8, padding: "12px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.accent }} />
              <p style={{ fontSize: 13, fontWeight: 700, color: s.text, margin: 0 }}>{s.state}</p>
            </div>
            <p style={{ fontSize: 11, color: s.text, margin: "0 0 6px", lineHeight: 1.4, opacity: 0.85 }}><strong>When:</strong> {s.when}</p>
            <p style={{ fontSize: 11, color: s.text, margin: "0 0 6px", lineHeight: 1.4, opacity: 0.85 }}><strong>Show:</strong> {s.show}</p>
            <p style={{ fontSize: 11, color: s.text, margin: 0, lineHeight: 1.4, fontStyle: "italic", opacity: 0.7 }}>{s.missing}</p>
          </div>
        ))}
      </div>
      <Info>{"A screen that only handles Success is a screen that breaks silently. Always design for all three states — even if your Loading state is just a spinner and your Error state is just a message."}</Info>
    </Shell>
  ),

  // 5: Modelling state with sealed class / enum
  () => (
    <Shell tag="UI states" title="Modelling state cleanly — sealed classes and enums" notes="The key benefit of sealed class / enum over three separate Boolean flags: when you write a when/switch expression, the compiler forces you to handle every case. You cannot accidentally forget the error state. This is exhaustive pattern matching — a powerful feature of both Kotlin and Swift.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Kotlin — sealed class" accent={PURPLE}>
{`// A sealed class restricts which subclasses can exist
// The compiler knows ALL possible cases at compile time
sealed class UiState<out T> {
    // Loading — no data yet
    object Loading : UiState<Nothing>()

    // Success — carries the data
    data class Success<T>(val data: T) : UiState<T>()

    // Error — carries the error message
    data class Error(val message: String) : UiState<Nothing>()
}

// Using it:
var uiState by remember {
    mutableStateOf<UiState<List<Artist>>>(UiState.Loading)
}

// when is EXHAUSTIVE — compiler warns if you miss a case:
when (val state = uiState) {
    is UiState.Loading  -> { /* show spinner  */ }
    is UiState.Success  -> { /* show list     */ }
    is UiState.Error    -> { /* show error    */ }
    // No 'else' needed — sealed class covers all cases
}`}
        </CodePane>
        <CodePane title="Swift — enum with associated values" accent={TEAL}>
{`// Swift enum with associated values — same concept
enum UiState<T> {
    case loading
    case success(T)        // carries the data
    case error(String)     // carries the message
}

// Using it:
@State private var uiState: UiState<[Artist]> = .loading

// switch is EXHAUSTIVE — compiler warns if you miss a case:
switch uiState {
case .loading:
    ProgressView("Loading...")
case .success(let artists):
    // show list with artists
    Text("Loaded " + String(artists.count) + " artists")
case .error(let message):
    Text(message)
// No 'default' needed — enum covers all cases
}

// Helper to check if we are loading (used for .task):
var isLoading: Bool {
    if case .loading = uiState { return true }
    return false
}`}
        </CodePane>
      </div>
      <Info>{"Using sealed class / enum instead of three separate Boolean variables (isLoading, hasError, hasData) means the compiler will catch it if you forget to handle a state. Three Booleans can produce 8 combinations — most of which are impossible."}</Info>
    </Shell>
  ),

  // 6: The retry pattern
  () => (
    <Shell tag="Error handling" timer="8" title="The retry pattern — giving users a way out" notes="The retry pattern is simple but students often miss it. Show the before (error state with no button) and after (error state with Retry). The key implementation detail: the Retry button sets state back to Loading, which triggers the LaunchedEffect/task to re-run. Ask students: how does the screen know to re-fetch when state changes to Loading?">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Compose — full three-state screen with retry" accent={PURPLE}>
{`@Composable
fun ArtistListScreen(onArtistClicked: (Artist) -> Unit = {}) {
    var uiState by remember {
        mutableStateOf<UiState<List<Artist>>>(UiState.Loading)
    }

    // Runs whenever uiState is Loading
    LaunchedEffect(uiState) {
        if (uiState !is UiState.Loading) return@LaunchedEffect
        uiState = try {
            val artists = LastFmApi.service
                .getTopArtists().artists.artist
            UiState.Success(artists)
        } catch (e: Exception) {
            UiState.Error(e.message ?: "Something went wrong")
        }
    }

    when (val state = uiState) {
        is UiState.Loading -> {
            Box(Modifier.fillMaxSize(),
                contentAlignment = Alignment.Center) {
                CircularProgressIndicator(
                    color = Color(0xFF534AB7))
            }
        }
        is UiState.Error -> {
            Column(
                Modifier.fillMaxSize().padding(32.dp),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text("Something went wrong",
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Bold)
                Text(state.message, color = Color.Gray,
                    textAlign = TextAlign.Center)
                Spacer(Modifier.height(16.dp))
                // Retry sets state back to Loading
                // LaunchedEffect sees Loading and re-fetches
                Button(onClick = {
                    uiState = UiState.Loading
                }) { Text("Retry") }
            }
        }
        is UiState.Success -> {
            // Your existing list + search from Week 3
        }
    }
}`}
        </CodePane>
        <CodePane title="SwiftUI — full three-state screen with retry" accent={TEAL}>
{`struct ArtistListScreen: View {
    @State private var uiState: UiState<[Artist]> = .loading

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            switch uiState {
            case .loading:
                ProgressView("Loading artists...")
                    .tint(Color(red:0.33,green:0.29,blue:0.72))

            case .error(let message):
                VStack(spacing: 12) {
                    Text("Something went wrong")
                        .font(.headline)
                    Text(message)
                        .font(.subheadline)
                        .foregroundColor(.gray)
                        .multilineTextAlignment(.center)
                    // Retry sets state back to .loading
                    // .task re-runs because isLoading changed
                    Button("Retry") {
                        uiState = .loading
                    }
                    .buttonStyle(.borderedProminent)
                    .tint(Color(red:0.33,green:0.29,blue:0.72))
                }
                .padding(32)

            case .success(let artists):
                // Your existing list + search from Week 3
                Text("Success: " + String(artists.count))
            }
        }
        // id: uiState.isLoading makes .task re-run on retry
        .task(id: uiState.isLoading) {
            guard case .loading = uiState else { return }
            do {
                let artists = try await
                    LastFmApiService.getTopArtists()
                uiState = .success(artists)
            } catch {
                uiState = .error(error.localizedDescription)
            }
        }
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 7: How retry works
  () => (
    <Shell tag="Error handling" title="How the retry pattern actually works" notes="This slide explains the mechanism behind the retry button. Students are often confused about why setting state to Loading causes a re-fetch. Walk through the flow step by step. The key insight: LaunchedEffect and .task both watch for state changes — when state becomes Loading again, they re-run.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>The flow when Retry is tapped</p>
          {[
            { n: 1, t: "User taps Retry button" },
            { n: 2, t: "uiState is set to Loading" },
            { n: 3, t: "State change triggers recomposition" },
            { n: 4, t: "LaunchedEffect sees Loading → runs the API call again" },
            { n: 5, t: "On success: uiState → Success → list appears" },
            { n: 6, t: "On failure: uiState → Error → message + Retry shown again" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "6px 0", alignItems: "flex-start" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The key insight</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>The Retry button does not call the API directly. It just sets the state back to Loading. The LaunchedEffect/task already knows how to fetch data when the state is Loading — so it does it again automatically.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL, margin: "0 0 6px" }}>Why this design is good</p>
            <Bullet>One place to fetch data — not duplicated in multiple places</Bullet>
            <Bullet>Retry is free — just reset the state</Bullet>
            <Bullet>Easy to add pull-to-refresh later — same pattern</Bullet>
          </div>
          <Warn title="Common mistake">{"Calling the API function directly from the Retry button onClick. This works but bypasses the loading state — the user sees the old error screen until the new data arrives. Always go through the state machine."}</Warn>
        </div>
      </div>
    </Shell>
  ),

  // 8: Image loading
  () => (
    <Shell tag="Image loading" timer="8" title="Loading images from URLs" subtitle="Coil (Android) and AsyncImage (SwiftUI)" notes="Image loading is something students are surprised to learn needs a library. Explain why: downloading an image from a URL is a network call (needs to be async), the image needs to be cached so it does not re-download on every scroll, and it needs a placeholder so the layout does not jump. Coil and AsyncImage handle all of this.">
      <Discussion>{"If loading images from a URL is just a network call, why do we need a library for it? Could we do it ourselves with Retrofit or URLSession?"}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10, marginBottom: 10 }}>
        {[
          { title: "Async loading", desc: "Downloads image on a background thread — UI never blocks" },
          { title: "Caching", desc: "Stores downloaded images in memory and disk — no re-downloading on scroll" },
          { title: "Placeholders", desc: "Shows a fallback while loading so layout does not jump" },
          { title: "Error handling", desc: "Gracefully handles 404s, network failures, and empty URLs" },
        ].map(f => (
          <div key={f.title} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px", display: "flex", gap: 8 }}>
            <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 2px" }}>{f.title}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Android — Coil AsyncImage" accent={PURPLE}>
{`// implementation("io.coil-kt:coil-compose:2.4.0")

AsyncImage(
    model = imageUrl,         // the URL string
    contentDescription = artist.name,
    modifier = Modifier
        .size(52.dp)
        .clip(CircleShape),   // clip to circle shape
    contentScale = ContentScale.Crop,
    // Show a grey circle while loading:
    placeholder = ColorPainter(Color(0xFFEEEDFE)),
    // Show initial letter circle if image fails:
    error = ColorPainter(Color(0xFF534AB7))
)
// That's it — Coil handles async, cache, errors`}
        </CodePane>
        <CodePane title="iOS — SwiftUI AsyncImage" accent={TEAL}>
{`// Built into SwiftUI — no library needed

AsyncImage(url: URL(string: imageUrl)) { phase in
    switch phase {
    case .success(let image):
        // Image loaded — display it
        image
            .resizable()
            .aspectRatio(contentMode: .fill)
            .frame(width: 52, height: 52)
            .clipShape(Circle())

    case .failure:
        // Load failed — show fallback
        initialsAvatar(artist.name)

    case .empty:
        // Loading in progress — show placeholder
        Circle()
            .fill(Color(red:0.93,green:0.93,blue:1.0))
            .frame(width:52,height:52)

    @unknown default:
        EmptyView()
    }
}
// AsyncImage handles async and caching automatically`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 9: Handling missing images
  () => (
    <Shell tag="Image loading" title="Handling missing image URLs — always have a fallback" notes="Last.fm returns empty string for image URLs on many lesser-known artists. If you pass an empty string to Coil or AsyncImage, some versions will silently show nothing, others will log an error. Always check for empty before passing to the image component, and always have a fallback that looks intentional — not broken.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Compose — conditional image with fallback" accent={PURPLE}>
{`@Composable
fun ArtistAvatar(artist: Artist) {
    val imageUrl = artist.getLargeImageUrl()

    if (imageUrl.isNotEmpty()) {
        // URL exists — try to load it
        AsyncImage(
            model = imageUrl,
            contentDescription = artist.name,
            modifier = Modifier
                .size(52.dp)
                .clip(CircleShape),
            contentScale = ContentScale.Crop,
            error = ColorPainter(Color(0xFF534AB7))
            // error = fallback if URL loads but image fails
        )
    } else {
        // URL is empty — show initial letter avatar
        Box(
            modifier = Modifier
                .size(52.dp)
                .background(Color(0xFF534AB7), CircleShape),
            contentAlignment = Alignment.Center
        ) {
            Text(
                artist.name.first().toString(),
                color = Color.White,
                fontSize = 22.sp,
                fontWeight = FontWeight.Bold
            )
        }
    }
}

// Rule: never pass an empty string to AsyncImage.
// Check first, show fallback if empty.`}
        </CodePane>
        <CodePane title="SwiftUI — conditional image with fallback" accent={TEAL}>
{`struct ArtistAvatar: View {
    let artist: Artist

    var body: some View {
        if !artist.largeImageUrl.isEmpty,
           let url = URL(string: artist.largeImageUrl) {
            // URL exists and is valid — try to load
            AsyncImage(url: url) { phase in
                switch phase {
                case .success(let image):
                    image.resizable()
                        .aspectRatio(contentMode: .fill)
                        .frame(width:52,height:52)
                        .clipShape(Circle())
                default:
                    // Loading or failed — show initial
                    initialsCircle
                }
            }
        } else {
            // URL is empty — show initial
            initialsCircle
        }
    }

    var initialsCircle: some View {
        Circle()
            .fill(Color(red:0.33,green:0.29,blue:0.72))
            .frame(width:52,height:52)
            .overlay(
                Text(String(artist.name.prefix(1)))
                    .font(.title2).fontWeight(.bold)
                    .foregroundColor(.white)
            )
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 10: Live code-along intro
  () => (
    <Shell tag="Live code-along" timer="12" title="Completing the album browser" subtitle="Open your AlbumBrowser with the Session 1 API call." dark notes="Build on Session 1's code. The goal: add the three states, then image loading. Run the app and demonstrate turning WiFi off to trigger the error state, then tapping Retry to recover. Students should see the full state machine in action.">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>What we are adding today</p>
          {[
            { n: 1, t: "Define UiState sealed class / enum" },
            { n: 2, t: "Update screen state var to UiState<List<Artist>>" },
            { n: 3, t: "Update LaunchedEffect / .task with try/catch" },
            { n: 4, t: "Add when/switch to render Loading, Error, Success" },
            { n: 5, t: "Add Retry button to Error state" },
            { n: 6, t: "Replace avatar Box with AsyncImage / AsyncImage" },
            { n: 7, t: "Test: turn WiFi off → error state → Retry → success" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "center" }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: 0, textTransform: "uppercase" }}>State machine</p>
          {[
            { state: "Loading", bg: "#378ADD22", text: "#93C5FD", dot: "#378ADD" },
            { state: "↓ success  ↓ error", bg: "transparent", text: "rgba(255,255,255,0.4)", dot: null },
            { state: "Success", bg: `${TEAL}22`, text: TEAL, dot: TEAL },
            { state: "Error + Retry →", bg: "#E24B4A22", text: "#FCA5A5", dot: "#E24B4A" },
            { state: "→ Loading again", bg: "transparent", text: "rgba(255,255,255,0.4)", dot: null },
          ].map((s, i) => (
            <div key={i} style={{ background: s.bg, borderRadius: 6, padding: s.dot ? "6px 10px" : "0 10px", display: "flex", gap: 6, alignItems: "center" }}>
              {s.dot && <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />}
              <p style={{ fontSize: 11, color: s.text, margin: 0, fontWeight: s.dot ? 600 : 400 }}>{s.state}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 11: Code-along — full screen
  () => (
    <Shell tag="Live code-along" title="The complete networked screen" notes="Show this as the target state. Type it out incrementally — sealed class first, then update the state variable, then the LaunchedEffect, then the when block. The order matters: model the state before rendering it.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Full screen — Compose with all three states" accent={PURPLE}>
{`sealed class UiState<out T> {
    object Loading : UiState<Nothing>()
    data class Success<T>(val data: T) : UiState<T>()
    data class Error(val message: String) : UiState<Nothing>()
}

@Composable
fun ArtistListScreen(onArtistClicked: (Artist) -> Unit = {}) {
    var uiState by remember {
        mutableStateOf<UiState<List<Artist>>>(UiState.Loading)
    }
    var query by remember { mutableStateOf("") }

    LaunchedEffect(uiState) {
        if (uiState !is UiState.Loading) return@LaunchedEffect
        uiState = try {
            UiState.Success(
                LastFmApi.service.getTopArtists().artists.artist
            )
        } catch (e: Exception) {
            UiState.Error(e.message ?: "Something went wrong")
        }
    }

    Column(modifier = Modifier.fillMaxSize()
        .background(Color(0xFFF5F5F5))) {
        when (val state = uiState) {
            is UiState.Loading -> {
                Box(Modifier.fillMaxSize(),
                    contentAlignment = Alignment.Center) {
                    CircularProgressIndicator(
                        color = Color(0xFF534AB7))
                }
            }
            is UiState.Error -> {
                Column(
                    Modifier.fillMaxSize().padding(32.dp),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text("Something went wrong",
                        fontSize=18.sp, fontWeight=FontWeight.Bold)
                    Text(state.message, color=Color.Gray)
                    Spacer(Modifier.height(16.dp))
                    Button(onClick = { uiState = UiState.Loading }) {
                        Text("Retry")
                    }
                }
            }
            is UiState.Success -> {
                OutlinedTextField(
                    value = query, onValueChange = { query = it },
                    placeholder = { Text("Search...") },
                    modifier = Modifier.fillMaxWidth().padding(16.dp),
                    singleLine = true)
                val filtered = state.data.filter {
                    it.name.contains(query, ignoreCase = true)
                }
                LazyColumn(contentPadding = PaddingValues(16.dp),
                    verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    items(filtered, key={it.name}) { artist ->
                        ArtistRow(artist,
                            onClick={onArtistClicked(artist)})
                    }
                }
            }
        }
    }
}`}
        </CodePane>
        <CodePane title="ArtistRow with AsyncImage — Compose" accent={TEAL}>
{`@Composable
fun ArtistRow(artist: Artist, onClick: () -> Unit = {}) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() }
            .background(Color.White,
                RoundedCornerShape(12.dp))
            .padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        val imageUrl = artist.getLargeImageUrl()
        if (imageUrl.isNotEmpty()) {
            AsyncImage(
                model = imageUrl,
                contentDescription = artist.name,
                modifier = Modifier
                    .size(52.dp)
                    .clip(CircleShape),
                contentScale = ContentScale.Crop,
                error = ColorPainter(Color(0xFF534AB7))
            )
        } else {
            Box(
                modifier = Modifier
                    .size(52.dp)
                    .background(
                        Color(0xFF534AB7), CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    artist.name.first().toString(),
                    color = Color.White, fontSize = 22.sp,
                    fontWeight = FontWeight.Bold
                )
            }
        }
        Column(modifier = Modifier.weight(1f)) {
            Text(artist.name, fontSize=15.sp,
                fontWeight=FontWeight.Bold)
            Text(
                formatListeners(
                    artist.listeners.toLongOrNull() ?: 0L),
                fontSize=13.sp, color=Color.Gray)
        }
    }
}

fun formatListeners(n: Long) = when {
    n >= 1_000_000 ->
        String.format("%.1fM listeners", n/1_000_000.0)
    n >= 1_000     ->
        String.format("%.0fK listeners", n/1_000.0)
    else           -> "$n listeners"
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 11b: SwiftUI full screen
  () => (
    <Shell tag="Live code-along" title="The complete networked screen — SwiftUI" notes="Walk through this alongside the Compose version. Point out the structural parallels: UiState enum mirrors the sealed class, .task mirrors LaunchedEffect, switch mirrors when. The concepts are identical — the syntax is different. Ask students to spot the differences before you explain them.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Full screen — SwiftUI with all three states" accent={TEAL}>
{`enum UiState<T> {
    case loading
    case success(T)
    case error(String)
}

struct ArtistListScreen: View {
    @State private var uiState: UiState<[Artist]> = .loading
    @State private var query = ""

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            switch uiState {
            case .loading:
                ProgressView("Loading artists...")
                    .tint(Color(red:0.33,green:0.29,blue:0.72))

            case .error(let message):
                VStack(spacing: 12) {
                    Text("Something went wrong")
                        .font(.headline)
                    Text(message)
                        .font(.subheadline)
                        .foregroundColor(.gray)
                        .multilineTextAlignment(.center)
                    Button("Retry") { uiState = .loading }
                        .buttonStyle(.borderedProminent)
                        .tint(Color(red:0.33,green:0.29,blue:0.72))
                }
                .padding(32)

            case .success(let artists):
                VStack(spacing: 0) {
                    HStack {
                        Image(systemName: "magnifyingglass")
                            .foregroundColor(.gray)
                        TextField("Search artists...", text: $query)
                            .font(.subheadline)
                    }
                    .padding(10).background(Color.white)
                    .cornerRadius(12)
                    .padding(.horizontal,16).padding(.vertical,10)

                    let filtered = artists.filter {
                        query.isEmpty ||
                        $0.name.localizedCaseInsensitiveContains(query)
                    }
                    List(filtered) { artist in
                        NavigationLink(
                            destination: ArtistDetailScreen(artist: artist)
                        ) { ArtistRow(artist: artist) }
                        .listRowBackground(Color.clear)
                        .listRowSeparator(.hidden)
                    }
                    .listStyle(.plain)
                }
            }
        }
        .navigationTitle("Top Artists")
        .task(id: uiState.isLoading) {
            guard case .loading = uiState else { return }
            do {
                let artists = try await LastFmApiService.getTopArtists()
                uiState = .success(artists)
            } catch {
                uiState = .error(error.localizedDescription)
            }
        }
    }
}

extension UiState {
    var isLoading: Bool {
        if case .loading = self { return true }
        return false
    }
}`}
        </CodePane>
        <CodePane title="ArtistRow with AsyncImage — SwiftUI" accent={PURPLE}>
{`struct ArtistRow: View {
    let artist: Artist

    var body: some View {
        HStack(spacing: 12) {
            // Image or fallback
            if !artist.largeImageUrl.isEmpty,
               let url = URL(string: artist.largeImageUrl) {
                AsyncImage(url: url) { phase in
                    switch phase {
                    case .success(let image):
                        image.resizable()
                            .aspectRatio(contentMode: .fill)
                            .frame(width:52,height:52)
                            .clipShape(Circle())
                    default:
                        initialsCircle
                    }
                }
            } else {
                initialsCircle
            }

            VStack(alignment: .leading, spacing: 2) {
                Text(artist.name)
                    .font(.subheadline).fontWeight(.bold)
                Text(formatListeners(artist.listeners))
                    .font(.caption).foregroundColor(.gray)
            }
            Spacer()
        }
        .padding(12)
        .background(Color.white)
        .cornerRadius(12)
    }

    var initialsCircle: some View {
        Circle()
            .fill(Color(red:0.33,green:0.29,blue:0.72))
            .frame(width:52,height:52)
            .overlay(
                Text(String(artist.name.prefix(1)))
                    .font(.title2).fontWeight(.bold)
                    .foregroundColor(.white)
            )
    }

    func formatListeners(_ raw: String) -> String {
        guard let n = Int(raw) else { return raw }
        if n >= 1_000_000 {
            return String(format:"%.1fM listeners",
                          Double(n)/1_000_000)
        } else if n >= 1_000 {
            return String(format:"%.0fK listeners",
                          Double(n)/1_000)
        }
        return "\(n) listeners"
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 12: Lab intro + assignment
  () => (
    <Shell tag="Lab intro" timer="6" title="Lab time + Assignment 4 overview" subtitle="Go to the Lab tab on the course site — Session 2 Lab." notes="Keep this brief. The lab follows the slides closely. For Assignment 4, emphasise that students should read their chosen API's documentation thoroughly before writing any models — the JSON structure tells them exactly what data classes they need.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Lab steps — Session 2</p>
          {[
            { n: 0, t: "Open AlbumBrowser with Session 1 API call", time: "2 min" },
            { n: 1, t: "Define UiState sealed class / enum", time: "5 min" },
            { n: 2, t: "Update screen to use UiState with try/catch", time: "12 min" },
            { n: 3, t: "Add loading spinner and error state with Retry", time: "8 min" },
            { n: 4, t: "Replace avatar circle with AsyncImage", time: "12 min" },
            { n: 5, t: "Ask Claude about error handling patterns", time: "5 min" },
            { n: 6, t: "Reflection — 3 questions", time: "5 min" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "4px 0", alignItems: "center" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: 4, fontSize: 10, fontWeight: 700, padding: "1px 5px", flexShrink: 0 }}>Step {s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, flex: 1 }}>{s.t}</span>
              <span style={{ fontSize: 11, color: MUTED, flexShrink: 0 }}>{s.time}</span>
            </div>
          ))}
        </div>
        <div style={{ background: GRAY, borderRadius: 10, padding: 14 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 6px" }}>Assignment 4 — networked browse app</p>
          <p style={{ fontSize: 12, color: MUTED, margin: "0 0 8px", lineHeight: 1.5 }}>Same structure as your album browser, but swap Last.fm for a different public API. Choose any free API with a list endpoint and image URLs.</p>
          {[
            "Real API — no hardcoded data",
            "All three UI states handled",
            "Images loaded from URLs with fallback",
            "Search on live fetched data",
            "Detail screen for each item",
          ].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 10, background: "#FCEBEB", borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: "#791F1F", margin: 0, lineHeight: 1.5 }}>Never commit your API key to GitHub. Add local.properties or Config.xcconfig to .gitignore before your first commit.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 13: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Week 4 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Your app now fetches real data, handles failure, and loads images from the internet. That is a production-quality screen.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned this week</p>
            {["HTTP request/response cycle", "REST APIs and JSON parsing", "Data classes matching JSON structure", "Coroutines (Kotlin) + async/await (Swift)", "Retrofit + URLSession networking", "The three UI states: Loading, Success, Error", "Sealed classes and enums for state modelling", "Image loading with Coil and AsyncImage"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Week 5</p>
            {["Local storage — saving data that persists across sessions", "Room database (Android) and SwiftData (iOS)", "Favourites — saving items locally", "DataStore / UserDefaults — storing user preferences", "The offline-first pattern — show cached data while fetching"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.1)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Due before Week 5: Assignment 4 — networked browse app.</p>
            </div>
          </div>
        </div>
      </div>
      <Notes>{"End with genuine energy. Students now have an app that works like a real production app — live data, loading states, error recovery, real images. That is a huge milestone. Remind them to store their API key safely and never commit it. Due date for Assignment 4 is one week from now."}</Notes>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 4 · Session 2 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 600, color: TEXT, margin: 0 }}>Mobile Development in the Age of AI</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setCur(c => Math.max(0, c - 1))} disabled={cur === 0} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === 0 ? GRAY : PURPLE_LIGHT, color: cur === 0 ? MUTED : PURPLE, cursor: cur === 0 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>← Prev</button>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 64, textAlign: "center" }}>{cur + 1} / {slides.length}</span>
          <button onClick={() => setCur(c => Math.min(slides.length - 1, c + 1))} disabled={cur === slides.length - 1} style={{ padding: "5px 14px", borderRadius: 6, border: `1px solid ${PURPLE_LIGHT}`, background: cur === slides.length - 1 ? GRAY : PURPLE, color: cur === slides.length - 1 ? MUTED : "#fff", cursor: cur === slides.length - 1 ? "default" : "pointer", fontSize: 13, fontWeight: 500 }}>Next →</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 12, flexWrap: "wrap" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: 26, height: 26, borderRadius: 5, border: `1.5px solid ${i === cur ? PURPLE : "#e5e7eb"}`, background: i === cur ? PURPLE : "#fff", color: i === cur ? "#fff" : MUTED, fontSize: 10, fontWeight: 600, cursor: "pointer" }}>{i + 1}</button>
        ))}
      </div>
      {slides[cur]()}
    </div>
  );
}
