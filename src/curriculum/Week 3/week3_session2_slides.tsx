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

const CodePane = ({ title = undefined, accent = PURPLE, children }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    {title && <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0", letterSpacing: ".04em" }}>{title}</div>}
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Step = ({ n, title, accent = PURPLE, children }) => (
  <div style={{ marginBottom: 12, paddingLeft: 20, borderLeft: `2px solid #e5e7eb`, position: "relative" }}>
    <div style={{ position: "absolute", left: -14, top: -2, width: 26, height: 26, borderRadius: "50%", background: "#fff", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: accent }}>
      {n}
    </div>
    <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: "0 0 8px" }}>{title}</p>
    <div>{children}</div>
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

const OSToggle = ({ android, ios }) => {
  const [platform, setPlatform] = useState<'android' | 'ios'>('android');
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: "1px solid #e5e7eb", width: "fit-content", marginBottom: 2 }}>
        <button
          onClick={() => setPlatform('android')}
          style={{ padding: "5px 16px", fontSize: 11, fontWeight: 700, letterSpacing: ".04em", background: platform === 'android' ? PURPLE : "#fff", color: platform === 'android' ? "#fff" : MUTED, border: "none", borderRight: "1px solid #e5e7eb", cursor: "pointer" }}
        >
          Android · Kotlin
        </button>
        <button
          onClick={() => setPlatform('ios')}
          style={{ padding: "5px 16px", fontSize: 11, fontWeight: 700, letterSpacing: ".04em", background: platform === 'ios' ? TEAL : "#fff", color: platform === 'ios' ? "#fff" : MUTED, border: "none", cursor: "pointer" }}
        >
          iOS · Swift
        </button>
      </div>
      {platform === 'android' ? android : ios}
    </div>
  );
};

const slides = [
  // 1: Title
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 3 — Session 2</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>Premium Polish:<br/>Shared Elements &amp; Adaptive Layouts</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>From a working app to a production-quality experience</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Builds on Session 1", "Spatial continuity", "Responsive design"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${TEAL}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Quick check — ask students to show their album browser from Session 1. Everyone should have a working list-to-detail app with search and navigation. Today we take that working app and make it feel like something you would download from the App Store. Two industry-grade UX patterns, both unlocked by AI assistance."}</Notes>
    </div>
  ),

  // 2: Recap
  () => (
    <Shell tag="Recap" timer="5" title="Session 1 recap — the working app" notes="Keep this brief. Students should be able to answer these from Session 1. The key transition: 'Your app WORKS. Users can search, tap, see detail, and go back. But does it FEEL professional? Today we close that gap.'">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          { q: "What makes LazyColumn/List different from Column/VStack?", a: "Lazy loading — only renders visible rows. Column renders everything at once, which crashes with large datasets." },
          { q: "Why does each row need a unique key / Identifiable?", a: "So the framework can track which row changed and update only that one — not redraw the entire list." },
          { q: "How does the list-to-detail navigation work?", a: "Compose: navigate('detail/' + id) in NavHost. SwiftUI: NavigationLink wrapping the row inside NavigationStack." },
          { q: "What happens to the search state when you navigate back?", a: "It is preserved — the list screen stays on the back stack with its state intact." },
        ].map(item => (
          <div key={item.q} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{item.q}</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <Discussion>{"Your album browser works — search, tap, detail, back. But compare it to Apple Music or Spotify. What is different about the transition when you tap a song or album in those apps? What happens visually?"}</Discussion>
    </Shell>
  ),

  // 3: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 60 minutes" notes="This session has two distinct halves. Part 1 is shared element transitions — teaching spatial continuity. Part 2 is adaptive layouts — teaching responsive design. Both are premium UX concepts that would normally take weeks in a traditional class. AI makes them accessible today.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "5 min",  title: "Recap", desc: "Session 1 — the working list-to-detail app" },
          { num: "02", time: "8 min",  title: "Object Permanence & Mechanics", desc: "Why spatial continuity matters and how interpolation works" },
          { num: "03", time: "8 min",  title: "Shared Elements in Code", desc: "The wrapper and tagging the views" },
          { num: "04", time: "5 min",  title: "The AI Advantage", desc: "Why this course can teach this in Week 3" },
          { num: "05", time: "10 min", title: "Adaptive Architecture & Patterns", desc: "UI as a function of space, Master-Detail pattern" },
          { num: "06", time: "8 min",  title: "Adaptive Refactor in Code", desc: "Detecting size classes and switching layouts" },
          { num: "07", time: "8 min",  title: "Foldables & Prompting", desc: "Designing for canvas, prompt engineering" },
          { num: "08", time: "8 min",  title: "Live Demo & Lab", desc: "The full experience + Assignment 3 overview" },
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

  // 4: Object Permanence in UI
  () => (
    <Shell tag="Spatial continuity" timer="8" title={"The What & Why: Shared Element Transitions"} subtitle="Object permanence and spatial context in UI design" notes="This is the most important conceptual slide in the session. Do NOT rush it. The idea is simple: when an element exists on screen A and also on screen B, the user's brain expects continuity — the element should MOVE, not teleport. Show students the difference by demoing a before/after if possible. Ask them: 'Have you ever noticed that album art in Apple Music slides from the list into the detail screen? That is not decoration — it is helping your brain understand where you are.'">
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 12, marginTop: 6 }}>
        <div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE, margin: "0 0 6px" }}>What is it?</p>
            <Bullet sub>A visual technique where an element on Screen A smoothly transforms into a matching element on Screen B.</Bullet>
            <Bullet sub>Instead of pushing a new screen abruptly, the common element acts as an anchor during the navigation.</Bullet>
          </div>
          <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 6px" }}>Why do we teach it?</p>
            <Bullet sub><strong>Object Permanence:</strong> It tells the user's brain "this is the exact same object, just bigger."</Bullet>
            <Bullet sub><strong>Context:</strong> Helps users understand where they are in the navigation hierarchy.</Bullet>
            <Bullet sub><strong>Premium Polish:</strong> It's the hallmark of App Store-ready applications.</Bullet>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "10px 14px", flex: 1 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#b91c1c", margin: "0 0 4px" }}>Without (Hard Cut)</p>
            <p style={{ fontSize: 11, color: "#b91c1c", margin: 0, lineHeight: 1.4 }}>The avatar "teleports". The user's brain has to re-find it on the new screen. Feels disconnected.</p>
          </div>
          <div style={{ background: "#fff", border: `1px solid ${TEAL}`, borderRadius: 8, padding: "10px 14px", flex: 1 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: TEAL, margin: "0 0 4px" }}>With (Transition)</p>
            <p style={{ fontSize: 11, color: "#085041", margin: 0, lineHeight: 1.4 }}>The avatar moves and grows. The brain tracks it seamlessly.</p>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 10 }}>
        {[
          { app: "Apple Music", desc: "Album art slides from list row into the full player screen" },
          { app: "iOS App Store", desc: "App card expands in place to become the full detail page" },
          { app: "Google Photos", desc: "Thumbnail grows smoothly into the full-screen photo viewer" },
        ].map(ex => (
          <div key={ex.app} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{ex.app}</p>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{ex.desc}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 5: NEW CONCEPT: Mechanics of Shared Elements
  () => (
    <Shell tag="Spatial continuity" timer="5" title="The Mechanics of Shared Elements" subtitle="How frameworks understand what to animate" notes="Explain the mental model before showing code. You need a boundary (the wrapper) that watches everything inside it. And you need to tag things inside that boundary with matching keys.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
         <div style={{ background: GRAY, borderRadius: 8, padding: "16px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: PURPLE, margin: "0 0 8px" }}>1. The Boundary (Wrapper)</p>
            <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.5, marginBottom: 8 }}>The framework needs to know where to look for transitions. We wrap our entire navigation stack in a special transition container. Anything inside this boundary can animate to anything else inside it.</p>
            <Bullet sub><strong>Compose:</strong> <code>SharedTransitionLayout</code></Bullet>
            <Bullet sub><strong>SwiftUI:</strong> <code>@Namespace</code></Bullet>
            <Bullet sub>Must wrap both the source and destination screens.</Bullet>
         </div>
         <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "16px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>2. The Tags (IDs)</p>
            <p style={{ fontSize: 12, color: "#085041", lineHeight: 1.5, marginBottom: 8 }}>Once inside the boundary, how does the framework know which element on Screen A matches the element on Screen B? We give them both the exact same string ID. The framework connects the dots.</p>
            <Bullet sub><strong>Compose:</strong> <code>Modifier.sharedElement(key)</code></Bullet>
            <Bullet sub><strong>SwiftUI:</strong> <code>.matchedTransitionSource(id)</code></Bullet>
            <Bullet sub>IDs must match <strong>exactly</strong> (e.g. "avatar-123").</Bullet>
         </div>
      </div>
    </Shell>
  ),

  // 6: NEW CONCEPT: Under the Hood: Interpolation
  () => (
    <Shell tag="Spatial continuity" timer="5" title="Under the Hood: Interpolation" subtitle="What the framework is actually doing" notes="It's important students know this isn't magic. The framework isn't physically moving their code. It's taking a picture, drawing it on top of everything, and animating the picture's size and position while hiding the real views.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 10 }}>
        <div style={{ background: GRAY, borderRadius: 8, padding: "14px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}><div style={{ width: 40, height: 40, background: PURPLE_LIGHT, border: `2px dashed ${PURPLE}`, borderRadius: 4 }}></div></div>
          <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE, margin: "0 0 6px", textAlign: "center" }}>1. Measure & Snapshot</p>
          <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.5 }}>
            <Bullet sub>Calculates `(x,y)` screen coordinates</Bullet>
            <Bullet sub>Measures `width` and `height`</Bullet>
            <Bullet sub>Generates an overlay graphic layer</Bullet>
          </div>
        </div>
        <div style={{ background: GRAY, borderRadius: 8, padding: "14px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}><div style={{ width: 40, height: 40, background: TEAL_LIGHT, border: `2px dashed ${TEAL}`, borderRadius: "50%", transform: "scale(1.2)" }}></div></div>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 6px", textAlign: "center" }}>2. Interpolate</p>
          <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.5 }}>
            <Bullet sub>Hides the original static views</Bullet>
            <Bullet sub>Animates layer using a physics spring</Bullet>
            <Bullet sub>Morphs position, size, and corners</Bullet>
          </div>
        </div>
        <div style={{ background: GRAY, borderRadius: 8, padding: "14px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}><div style={{ width: 40, height: 40, background: "#fff3f3", border: `2px dashed #fca5a5`, borderRadius: "50%", transform: "scale(1.5)" }}></div></div>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 6px", textAlign: "center" }}>3. Swap</p>
          <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.5 }}>
            <Bullet sub>Animation reaches destination bounds</Bullet>
            <Bullet sub>Removes the temporary overlay graphic</Bullet>
            <Bullet sub>Reveals the real destination view</Bullet>
          </div>
        </div>
      </div>
      <Info>{"Because it is an overlay, Z-index and clipping matter! If your list row has overflow: hidden or clips its children, the animation might get cut off as it tries to grow outside the row."}</Info>
    </Shell>
  ),

  // 7: Shared Elements in code
  () => (
    <Shell tag="Code implementation" timer="10" title="Shared Elements: Step by Step" subtitle="Wrapping the navigation and tagging the views" notes="Explain how we attach a unique identifier to the element we want to animate out of. Emphasize that the ID must EXACTLY match the source ID. That's the secret.">
      <OSToggle
        android={
          <>
            <Step n={1} title="The Wrapper (SharedTransitionLayout)" accent={PURPLE}>
              <CodePane accent={PURPLE}>
{`// Wrap your entire NavHost
SharedTransitionLayout {
    NavHost(navController = navController, startDestination = "home") {
        composable("home") {
            AlbumListScreen(
                animatedVisibilityScope = this // Pass scope down
            )
        }
        // ... detail composable ...
    }
}`}
              </CodePane>
            </Step>
            <Step n={2} title="Tagging the Source (List Row)" accent={PURPLE}>
              <CodePane accent={PURPLE}>
{`// Inside AlbumRow's avatar Box:
Box(
    modifier = Modifier.sharedElement(
        state = rememberSharedContentState(
            key = "avatar-\${album.id}" // The unique ID
        ),
        animatedVisibilityScope = animatedVisibilityScope
    )
) { /* avatar content */ }`}
              </CodePane>
            </Step>
            <Step n={3} title="Tagging the Destination (Detail)" accent={PURPLE}>
              <CodePane accent={PURPLE}>
{`// Inside AlbumDetailScreen's avatar Box:
Box(
    modifier = Modifier.sharedElement(
        state = rememberSharedContentState(
            key = "avatar-\${album.id}" // MUST match the row's ID
        ),
        animatedVisibilityScope = animatedVisibilityScope
    )
) { /* larger avatar content */ }`}
              </CodePane>
            </Step>
          </>
        }
        ios={
          <>
            <Step n={1} title="The Wrapper (@Namespace)" accent={TEAL}>
              <CodePane accent={TEAL}>
{`// 1. Declare a namespace for matching
@Namespace private var animation

NavigationStack {
    List(albums) { album in
        NavigationLink(value: album.id) {
            AlbumRow(album: album)
        }
    }
    .navigationDestination(for: Int.self) { id in
        // ... destination view ...
    }
}`}
              </CodePane>
            </Step>
            <Step n={2} title="Tagging the Source (List Row)" accent={TEAL}>
              <CodePane accent={TEAL}>
{`// Attach to the NavigationLink in the list
NavigationLink(value: album.id) {
    AlbumRow(album: album)
}
.matchedTransitionSource(
    id: album.id, 
    in: animation
)
// In SwiftUI, tagging the link is often enough for the zoom transition`}
              </CodePane>
            </Step>
            <Step n={3} title="Tagging the Destination (Detail)" accent={TEAL}>
              <CodePane accent={TEAL}>
{`// Attach to the destination view
AlbumDetailScreen(album: album)
    .navigationTransition(
        .zoom(
            sourceID: album.id, 
            in: animation
        )
    )
// The ID matches the source link ID, creating the connection`}
              </CodePane>
            </Step>
          </>
        }
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
        <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>Same key</p>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>Both screens use the exact same string key — that is how the framework matches them.</p>
        </div>
        <div style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>Auto size/position</p>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>The framework automatically interpolates size and position between the two locations.</p>
        </div>
      </div>
    </Shell>
  ),

  // 9: AI's role with complex wrappers
  () => (
    <Shell tag="AI-powered learning" timer="5" title={"AI's role — why this works in Week 3"} subtitle="This is the pedagogical advantage of an AI-powered course" notes="This is a meta-moment. Pause and be explicit about WHY you are teaching shared element transitions in Week 3. In a traditional CS class, this would be a Week 8-10 topic. But because AI handles the dense framework-specific boilerplate, students can focus on the CONCEPT (matching IDs, spatial continuity) and use the API without memorizing it. The goal is conceptual mastery and UX architecture, not rote memorization of SharedTransitionLayout parameters.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px" }}>Traditional course — Week 3</p>
          <Bullet>Still teaching basic loops and arrays</Bullet>
          <Bullet>Shared element transitions? Maybe Week 10</Bullet>
          <Bullet sub>{"\""}First you need 6 weeks of prerequisites...{"\"}"}</Bullet>
          <Bullet>Students never reach production-quality UX patterns</Bullet>
          <Bullet sub>The gap between {"\""}student project{"\""}  and {"\""}real app{"\""} stays wide</Bullet>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>AI-powered course — Week 3</p>
          <Bullet>AI provides the complex wrapper code</Bullet>
          <Bullet>Students focus on the <strong>concept</strong>: matching IDs = spatial continuity</Bullet>
          <Bullet sub>The API is a tool, not the lesson</Bullet>
          <Bullet>Result: production-quality UX in 3 weeks</Bullet>
          <Bullet sub>The gap between student and professional <strong>closes early</strong></Bullet>
        </div>
      </div>
      <Discussion>{"When you used AI to help write the SharedTransitionLayout wrapper, did you need to understand every parameter? Or did you mostly need to understand the concept of matching IDs? Which part is worth memorizing — the API surface or the design pattern?"}</Discussion>
      <Info>{"The framework API will change. The concept of spatial continuity will not. Learn the concept deeply, use AI for the API details. That is the model for this entire course."}</Info>
    </Shell>
  ),

  // Transition to Part 2
  () => (
    <div style={{ background: `linear-gradient(135deg, ${TEAL} 0%, #0f766e 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", boxSizing: "border-box" }}>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", background: "rgba(255,255,255,0.2)", color: "#fff", padding: "4px 12px", borderRadius: 20 }}>Part 2</span>
      </div>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Adaptive Layouts</h2>
      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", margin: 0, maxWidth: 400, lineHeight: 1.5 }}>
        We solved how our UI <strong>moves</strong>.<br/>Now let{"'"}s solve how it <strong>adapts</strong>.
      </p>
      <Notes>{"Use this moment to reset the room. We are shifting gears from 'animation' to 'layout'. Ask the students: 'What happens to our list if someone opens this app on an iPad? It just stretches to be 1000 pixels wide. Is that a good experience?'"}</Notes>
    </div>
  ),

  // 10: UI as a Function of Space
  () => (
    <Shell tag="Adaptive layouts" timer="8" title={"UI as a Function of Space"} subtitle="Same data, same components — different spatial arrangement" notes="Second major concept of the session. The key insight: when you rotate an iPhone to landscape, or when someone uses your app on an iPad, the list-to-detail navigation push is wasteful — you have enough space to show BOTH at once. This is not a new screen — it is the same data arranged differently based on available space. Call out WindowSizeClass (Compose) and horizontalSizeClass (SwiftUI) as the APIs that tell you how much space you have.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div style={{ background: GRAY, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE, margin: "0 0 8px" }}>Phone (Compact width)</p>
          <div style={{ background: "#fff", borderRadius: 8, padding: 10, marginBottom: 8 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {["Rumours", "Kind of Blue", "Purple Rain"].map(t => (
                <div key={t} style={{ display: "flex", gap: 8, alignItems: "center", padding: "6px 8px", background: GRAY, borderRadius: 6 }}>
                  <div style={{ width: 24, height: 24, background: PURPLE, borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: TEXT }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 11, color: MUTED, margin: "0 0 8px", textAlign: "center" }}>List fills full width → tap → <strong>navigate</strong> to detail</p>
          <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: 8 }}>
             <Bullet sub><strong>Width:</strong> {"< 600dp"} (Compact)</Bullet>
             <Bullet sub><strong>Behavior:</strong> Pushes new screen to stack</Bullet>
          </div>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>Tablet / Landscape (Expanded width)</p>
          <div style={{ background: "#fff", borderRadius: 8, padding: 10, marginBottom: 8 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ flex: 1 }}>
                {["Rumours", "Kind of Blue", "Purple Rain"].map(t => (
                  <div key={t} style={{ display: "flex", gap: 6, alignItems: "center", padding: "4px 6px", background: t === "Rumours" ? PURPLE_LIGHT : GRAY, borderRadius: 4, marginBottom: 3 }}>
                    <div style={{ width: 18, height: 18, background: PURPLE, borderRadius: "50%", flexShrink: 0 }} />
                    <span style={{ fontSize: 9, fontWeight: 600, color: TEXT }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ flex: 1.5, background: GRAY, borderRadius: 6, padding: 8, textAlign: "center" }}>
                <div style={{ width: 36, height: 36, background: PURPLE, borderRadius: "50%", margin: "0 auto 4px" }} />
                <p style={{ fontSize: 10, fontWeight: 600, color: TEXT, margin: 0 }}>Rumours</p>
                <p style={{ fontSize: 9, color: MUTED, margin: 0 }}>Fleetwood Mac · 1977</p>
              </div>
            </div>
          </div>
          <p style={{ fontSize: 11, color: "#085041", margin: "0 0 8px", textAlign: "center" }}>List and detail <strong>side by side</strong> → tap updates the detail pane</p>
          <div style={{ borderTop: `1px solid ${TEAL}`, paddingTop: 8 }}>
             <Bullet sub><strong>Width:</strong> {">= 840dp"} (Expanded)</Bullet>
             <Bullet sub><strong>Behavior:</strong> Updates state, no navigation</Bullet>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 11: NEW CONCEPT: Adaptive Architecture: Navigation vs. State
  () => (
    <Shell tag="Adaptive layouts" timer="5" title="Adaptive Architecture: Navigation vs. State" subtitle="Rethinking what a 'tap' means" notes="The key insight: on a tablet, tapping a row does NOT navigate to a new screen. Instead, it updates a selectedAlbum state variable at the top level, and the detail pane re-renders with the new album. On a phone, tapping still navigates. The ONLY difference is how the tap handler behaves and how the two screens are spatially arranged.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
         <div style={{ background: GRAY, borderRadius: 8, padding: "16px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: PURPLE, margin: "0 0 8px" }}>On a Phone (Navigation)</p>
            <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.5, marginBottom: 12 }}>Tapping a row pushes a completely new screen onto the stack. The list disappears, and the detail view takes over the entire display.</p>
            <div style={{ background: "#fff", padding: "8px 12px", borderRadius: 6 }}>
               <p style={{ fontSize: 11, fontFamily: "monospace", color: TEXT, margin: 0 }}>onClick = {"{"}<br/>&nbsp;&nbsp;navController.navigate("detail/1")<br/>{"}"}</p>
            </div>
         </div>
         <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "16px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>On a Tablet (State Update)</p>
            <p style={{ fontSize: 12, color: "#085041", lineHeight: 1.5, marginBottom: 12 }}>Tapping a row <strong>does not navigate</strong>. It simply updates a <code>selectedAlbum</code> state variable. The detail pane, which is already on screen, re-renders with the new data.</p>
            <div style={{ background: "#fff", padding: "8px 12px", borderRadius: 6, border: `1px solid ${TEAL}` }}>
               <p style={{ fontSize: 11, fontFamily: "monospace", color: TEXT, margin: 0 }}>onClick = {"{"}<br/>&nbsp;&nbsp;selectedAlbum = album<br/>{"}"}</p>
            </div>
         </div>
      </div>
      <Info>{"Notice: the AlbumRow and AlbumDetailScreen components are UNCHANGED. Only the top-level container decides how they are arranged. This is the power of component-based architecture — swap the container, keep the content."}</Info>
    </Shell>
  ),

  // 12: NEW CONCEPT: The Master-Detail Pattern
  () => (
    <Shell tag="Adaptive layouts" timer="5" title="The Master-Detail Pattern" subtitle="A foundational UX pattern for large screens" notes="Give context that this is an industry standard pattern. It's not just something we invented for this app. Have them check their phone vs iPad for Mail or Settings.">
      <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
        <div style={{ flex: 1.2 }}>
          <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.6, margin: "0 0 12px" }}>The side-by-side layout you are building is called <strong>Master-Detail</strong> (or List-Detail). It is the most common responsive pattern in mobile development.</p>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 4px" }}>The "Master" Pane (List)</p>
            <Bullet sub>Occupies ~1/3 of the screen width.</Bullet>
            <Bullet sub>Used for navigation, selection, and searching.</Bullet>
            <Bullet sub>Typically persists and does not change entirely.</Bullet>
          </div>
          <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL, margin: "0 0 4px" }}>The "Detail" Pane (Content)</p>
            <Bullet sub>Occupies ~2/3 of the screen width.</Bullet>
            <Bullet sub>Displays the full content of the selected master item.</Bullet>
            <Bullet sub>Should provide an "Empty State" if nothing is selected.</Bullet>
          </div>
        </div>
        <div style={{ flex: 1, background: "#1e1e2e", borderRadius: 10, padding: 16, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#cdd6f4", margin: "0 0 12px", textAlign: "center" }}>Real-world examples</p>
          {["iOS Mail / Gmail", "Settings App", "Notes", "Slack (Channels vs Chat)"].map(app => (
            <div key={app} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 6, padding: "8px 12px", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: TEAL }}>▸</span>
              <span style={{ fontSize: 12, color: "#fff" }}>{app}</span>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  // 13: Adaptive Refactor in code
  () => (
    <Shell tag="Code implementation" timer="12" title="Adaptive Refactor: Step by Step" subtitle="Detecting the screen size and switching layouts" notes="Show how we detect the window size class and set up our state variable. Then show the wide layout where we don't navigate, followed by the narrow layout where we do navigate.">
      <OSToggle
        android={
          <>
            <Step n={1} title="Detect screen size & set up state" accent={PURPLE}>
              <CodePane accent={PURPLE}>
{`@Composable
fun AlbumApp() {
    // 1. Detect screen size
    val windowInfo = currentWindowAdaptiveInfo()
    val isExpanded = windowInfo.windowSizeClass.windowWidthSizeClass == WindowWidthSizeClass.EXPANDED

    // 2. State for the tablet layout
    var selectedAlbum by remember { mutableStateOf<Album?>(null) }`}
              </CodePane>
            </Step>
            <Step n={2} title="The Tablet Path (Side-by-side)" accent={PURPLE}>
              <CodePane accent={PURPLE}>
{`    if (isExpanded) {
        Row(Modifier.fillMaxSize()) {
            AlbumListScreen(
                modifier = Modifier.weight(1f),
                onAlbumClicked = { selectedAlbum = it }  // Update state!
            )
            selectedAlbum?.let { album ->
                AlbumDetailScreen(album = album, modifier = Modifier.weight(1.5f))
            }
        }
    }`}
              </CodePane>
            </Step>
            <Step n={3} title="The Phone Path (Navigation push)" accent={PURPLE}>
              <CodePane accent={PURPLE}>
{`    } else {
        val navController = rememberNavController()
        NavHost(navController, "home") {
            composable("home") {
                AlbumListScreen(
                    onAlbumClicked = { album ->
                        navController.navigate("detail/\${album.id}") // Push!
                    }
                )
            }
            composable("detail/{albumId}") { /*...*/ }
        }
    }
}`}
              </CodePane>
            </Step>
          </>
        }
        ios={
          <>
            <Step n={1} title="Detect screen size & set up state" accent={TEAL}>
              <CodePane accent={TEAL}>
{`struct AlbumApp: View {
    // 1. Detect screen size
    @Environment(\\.horizontalSizeClass) var sizeClass

    // 2. State for the tablet layout
    @State private var selectedAlbum: Album?

    var body: some View {`}
              </CodePane>
            </Step>
            <Step n={2} title="The Tablet Path (Split View)" accent={TEAL}>
              <CodePane accent={TEAL}>
{`        if sizeClass == .regular {
            NavigationSplitView {
                // Pass binding to list
                AlbumListScreen(selectedAlbum: $selectedAlbum)
            } detail: {
                if let album = selectedAlbum {
                    AlbumDetailScreen(album: album)
                } else {
                    Text("Select an album").foregroundColor(.gray)
                }
            }
        }`}
              </CodePane>
            </Step>
            <Step n={3} title="The Phone Path (Navigation push)" accent={TEAL}>
              <CodePane accent={TEAL}>
{`        } else {
            NavigationStack {
                AlbumListScreen()
                // list handles its own navigationDestinations
            }
        }
    }
}`}
              </CodePane>
            </Step>
          </>
        }
      />
    </Shell>
  ),

  // 14: NEW CONCEPT: Beyond Tablets
  () => (
    <Shell tag="Adaptive layouts" timer="4" title="Beyond Tablets: Foldables & Resizable Windows" subtitle="Why checking WindowSizeClass is future-proof" notes="Explain why we don't just check 'is this an iPad'. A phone can unfold into a tablet. A tablet can run apps in tiny floating windows.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
         <div style={{ background: GRAY, borderRadius: 8, padding: "16px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: PURPLE, margin: "0 0 8px" }}>Foldable Devices</p>
            <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.5, marginBottom: 12 }}>Devices like the Galaxy Z Fold switch from a compact phone screen to an expanded tablet screen instantly. Your app must react to this physical hardware change.</p>
            <Bullet sub>Closed: Compact window class</Bullet>
            <Bullet sub>Opened: Expanded window class</Bullet>
            <Bullet sub>App must preserve state during unfold.</Bullet>
         </div>
         <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "16px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>Multi-Window / Stage Manager</p>
            <p style={{ fontSize: 12, color: "#085041", lineHeight: 1.5, marginBottom: 12 }}>On an iPad or ChromeOS, users can drag your app into a narrow column. Even if the hardware is a 12-inch tablet, your app might only have 300px of space.</p>
            <Bullet sub>Hardware: 12" Tablet</Bullet>
            <Bullet sub>Available Space: 300px (Compact)</Bullet>
            <Bullet sub>Result: Must fall back to phone layout.</Bullet>
         </div>
      </div>
      <Info>{"This is why we check the available SPACE (WindowSizeClass), not the hardware device type. Always design for the available canvas, never for the device."}</Info>
    </Shell>
  ),

  // 15: Prompt engineering
  () => (
    <Shell tag="Prompt engineering" timer="5" title="Prompting AI to refactor for adaptive layouts" subtitle="The exact prompt you will use in the lab — and what to verify" notes="This is a practical slide. Show the prompt, emphasize that students should NOT just paste AI output blindly. They need to verify: does it check WindowSizeClass/horizontalSizeClass correctly? Is selectedAlbum a state variable at the top level? Does the phone path still use navigation? Does the tablet path show side-by-side? These are the checkpoints.">
      <div style={{ background: "#1e1e2e", borderRadius: 10, padding: "16px 18px", marginTop: 6, marginBottom: 10 }}>
        <p style={{ fontSize: 11, color: TEAL, fontWeight: 600, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>The prompt</p>
        <p style={{ fontSize: 13, color: "#cdd6f4", margin: 0, lineHeight: 1.7, fontFamily: "monospace" }}>
          {"\"I have a list-to-detail album browser app using [NavHost / NavigationStack]. Here is my current code: [paste AlbumListScreen, AlbumDetailScreen, and MainActivity/ContentView]. Refactor it so that on wide screens (tablet/landscape), the list and detail appear side by side in a split view instead of using a navigation push. On narrow screens (phone portrait), keep the current navigation behavior. Use [WindowSizeClass / horizontalSizeClass] to detect the screen width.\""}
        </p>
      </div>
      <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What to verify in AI{"'"}s output</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {[
          { check: "Size class detection", desc: "Does it check WindowWidthSizeClass.EXPANDED (Compose) or horizontalSizeClass == .regular (SwiftUI)?" },
          { check: "State variable", desc: "Is there a selectedAlbum state at the top level that drives the detail pane on tablet?" },
          { check: "Phone path preserved", desc: "Does the phone path still use NavHost / NavigationStack with navigation push?" },
          { check: "Components unchanged", desc: "Are AlbumRow and AlbumDetailScreen reused without modification — only the container changed?" },
        ].map(item => (
          <div key={item.check} style={{ display: "flex", gap: 8, padding: "8px 10px", background: GRAY, borderRadius: 8, alignItems: "flex-start" }}>
            <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 2px" }}>{item.check}</p>
              <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Warn title="Common AI mistake">{"AI sometimes creates a completely new list screen for the tablet path instead of reusing AlbumListScreen. If the output duplicates your list UI, ask it to refactor using the existing component with a selectedAlbum binding."}</Warn>
    </Shell>
  ),

  // 16: Live demo
  () => (
    <Shell tag="Live demo" timer="8" title="The full experience — see it in action" subtitle="Shared element transitions on phone + split view on tablet" dark notes="This is the wow moment. Run the app with shared element transitions on a phone emulator — tap a row, watch the avatar animate into the detail screen, go back, watch it animate back. Then resize the emulator to tablet size or rotate to landscape — the split view activates and tapping a row updates the detail pane without navigation. Let students soak this in before sending them to the lab. This is the payoff for the whole session.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 14 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>Demo 1: Shared Element Transitions</p>
          {[
            "Open album browser on phone emulator",
            "Tap 'Rumours' — watch avatar animate into detail",
            "Press back — avatar animates back to the row",
            "Tap 'Kind of Blue' — same smooth transition",
            "Note: the avatar smoothly changes size and position",
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "center" }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)" }}>{s}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 14 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>Demo 2: Adaptive Layouts</p>
          {[
            "Resize emulator to tablet width (or rotate to landscape)",
            "List and detail appear side by side automatically",
            "Tap 'Purple Rain' — detail pane updates in place",
            "No navigation animation — just a state update",
            "Resize back to phone — navigation push returns",
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "center" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.85)" }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>
          <strong style={{ color: "rgba(255,255,255,0.8)" }}>What just happened:</strong> The same components — AlbumRow and AlbumDetailScreen — are arranged differently based on screen size, and connected with animated transitions. This is the difference between a student project and a production app. You built this in 3 weeks because AI handled the wrapper complexity.
        </p>
      </div>
    </Shell>
  ),

  // 17: Lab intro
  () => (
    <Shell tag="Lab intro" timer="6" title="Lab time + Assignment 3 overview" subtitle="Go to the Lab tab on the course site — Session 2 Lab." notes="The Session 2 lab is heavily scaffolded — students copy the wrapper code and focus on understanding the concept. The AI Opportunity sections are the centerpiece: students use AI to understand the wrappers and to refactor for adaptive layouts. Emphasize that this lab is about UNDERSTANDING and APPLYING, not writing everything from scratch.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Lab steps — Session 2</p>
          {[
            { n: 0, t: "Open your working AlbumBrowser", time: "2 min" },
            { n: 1, t: "Add the shared element wrapper", time: "15 min" },
            { n: 2, t: "Test the transition", time: "5 min" },
            { n: 3, t: "Prompt AI for adaptive layout", time: "15 min" },
            { n: 4, t: "Test adaptive behavior", time: "5 min" },
            { n: 5, t: "Ask AI to explain the architecture", time: "5 min" },
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
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 6px" }}>Assignment 3 — browse app</p>
          <p style={{ fontSize: 12, color: MUTED, margin: "0 0 8px", lineHeight: 1.5 }}>Same structure as the album browser. Your own theme: video games, sneakers, national parks, coffee shops, films...</p>
          {["8+ items with a custom data model", "LazyColumn / List with custom rows", "Real-time search and empty state", "Tap to detail screen — all fields shown"].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 8, background: PURPLE_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, fontWeight: 600 }}>Stretch goals</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: "2px 0 0" }}>Add shared element transitions to your browse app. Add an adaptive layout for tablets.</p>
          </div>
          <div style={{ marginTop: 6, background: TEAL_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: "#085041", margin: 0 }}>Record a GIF: scrolling, searching, empty state, tap to detail (with transition), back.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 18: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Week 3 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>You built production-quality UX patterns that most courses do not reach until the final weeks.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned this week</p>
            {["LazyColumn and List — efficient scrollable lists", "Custom row layouts and unique tracking keys", "List-to-detail navigation wiring", "Shared Element Transitions — object permanence in UI", "Adaptive Layouts — UI as a function of space", "Prompt engineering for complex framework refactors", "Using AI to implement production-grade UX"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Week 4</p>
            {["Networking — HTTP and REST APIs", "Fetching real data from the internet", "Async patterns — coroutines and async/await", "Loading states and error handling", "Your album browser — powered by real data"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.1)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Due before Week 4: Assignment 3 — your browse app.</p>
            </div>
          </div>
        </div>
      </div>
      <Notes>{"End with energy. This session is the best example of what the AI-powered curriculum enables. In 3 weeks, students have built an app with scrollable lists, real-time search, navigation, shared element transitions, and adaptive layouts. That is a production-quality feature set. Remind them that in Week 4 the hardcoded data goes away and they will power their apps with real internet data."}</Notes>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 3 · Session 2 · {slides.length} slides</p>
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
