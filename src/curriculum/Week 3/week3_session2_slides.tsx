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
          { num: "02", time: "8 min",  title: "Object Permanence in UI", desc: "Why spatial continuity matters — what pro apps do differently" },
          { num: "03", time: "8 min",  title: "Shared Element Transitions", desc: "The code — wrappers, tagging elements, matching IDs" },
          { num: "04", time: "5 min",  title: "AI's role with complex wrappers", desc: "Why this course can teach this — the AI-powered advantage" },
          { num: "05", time: "8 min",  title: "UI as a Function of Space", desc: "Adaptive layouts — phone vs tablet, compact vs expanded" },
          { num: "06", time: "8 min",  title: "Prompt engineering — adaptive refactor", desc: "How to ask AI to refactor navigation into a split view" },
          { num: "07", time: "8 min",  title: "Live demo", desc: "The full experience — transitions on phone, split view on tablet" },
          { num: "08", time: "6 min",  title: "Lab intro + Assignment 3 overview", desc: "What you build today and the week's assignment" },
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
    <Shell tag="Spatial continuity" timer="8" title={"Object Permanence in UI"} subtitle="Why professional apps feel different when you tap a row" notes="This is the most important conceptual slide in the session. Do NOT rush it. The idea is simple: when an element exists on screen A and also on screen B, the user's brain expects continuity — the element should MOVE, not teleport. Show students the difference by demoing a before/after if possible. Ask them: 'Have you ever noticed that album art in Apple Music slides from the list into the detail screen? That is not decoration — it is helping your brain understand where you are.'">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px" }}>Without spatial continuity — "hard cut"</p>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <div style={{ flex: 1, background: GRAY, borderRadius: 6, padding: 10 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 32, height: 32, background: PURPLE, borderRadius: "50%", flexShrink: 0 }} />
                <div><p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: 0 }}>Rumours</p><p style={{ fontSize: 10, color: MUTED, margin: 0 }}>Fleetwood Mac</p></div>
              </div>
            </div>
            <span style={{ fontSize: 18, color: MUTED, alignSelf: "center" }}>→</span>
            <div style={{ flex: 1, background: GRAY, borderRadius: 6, padding: 10, textAlign: "center" }}>
              <div style={{ width: 48, height: 48, background: PURPLE, borderRadius: "50%", margin: "0 auto 4px" }} />
              <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: 0 }}>Rumours</p>
            </div>
          </div>
          <p style={{ fontSize: 11, color: "#b91c1c", margin: 0, lineHeight: 1.4 }}>The avatar appears in two places but there is no visual connection. The user{"'"}s brain has to re-find it. Feels disconnected and jarring.</p>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>With spatial continuity — smooth transition</p>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <div style={{ flex: 1, background: "#fff", borderRadius: 6, padding: 10 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 32, height: 32, background: PURPLE, borderRadius: "50%", flexShrink: 0, border: `2px solid ${TEAL}` }} />
                <div><p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: 0 }}>Rumours</p><p style={{ fontSize: 10, color: MUTED, margin: 0 }}>Fleetwood Mac</p></div>
              </div>
            </div>
            <span style={{ fontSize: 18, color: TEAL, alignSelf: "center" }}>⟿</span>
            <div style={{ flex: 1, background: "#fff", borderRadius: 6, padding: 10, textAlign: "center" }}>
              <div style={{ width: 48, height: 48, background: PURPLE, borderRadius: "50%", margin: "0 auto 4px", border: `2px solid ${TEAL}` }} />
              <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: 0 }}>Rumours</p>
            </div>
          </div>
          <p style={{ fontSize: 11, color: "#085041", margin: 0, lineHeight: 1.4 }}>The avatar <strong>animates</strong> from its position in the row to its position in the detail screen. The user{"'"}s brain says: {"\""}same thing, just bigger.{"\""}  Object permanence.</p>
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

  // 5: Shared Element Transitions — the wrapper code
  () => (
    <Shell tag="Shared elements" timer="8" title="Shared Element Transitions — the wrapper" subtitle="The framework handles the animation. You just tag which elements match." notes="Walk through both platforms in parallel. Emphasize the CONCEPT over the syntax: 'All you are doing is wrapping your navigation in a special container, then marking two elements — one on each screen — with the same ID. The framework figures out the animation.' Students do NOT need to memorize this API. They will copy the wrapper and use AI to understand it.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Compose — SharedTransitionLayout wrapping NavHost" accent={PURPLE}>
{`// Step 1: Wrap your NavHost
SharedTransitionLayout {
    NavHost(
        navController = navController,
        startDestination = "home"
    ) {
        composable("home") {
            AlbumListScreen(
                onAlbumClicked = { album ->
                    navController.navigate(
                        "detail/\${album.id}"
                    )
                },
                // Pass the scopes down so rows
                // can register shared elements
                animatedVisibilityScope = this
            )
        }
        composable("detail/{albumId}") {
            val id = it.arguments
                ?.getString("albumId")?.toInt() ?: 0
            val album = sampleAlbums.find { it.id == id }
            album?.let {
                AlbumDetailScreen(
                    album = it,
                    animatedVisibilityScope = this
                )
            }
        }
    }
}
// The SharedTransitionLayout provides the
// context for matching elements across screens`}
        </CodePane>
        <CodePane title="SwiftUI — @Namespace + navigation transition" accent={TEAL}>
{`// Step 1: Declare a namespace for matching
@Namespace private var animation

NavigationStack {
    List(filteredAlbums) { album in
        NavigationLink(value: album.id) {
            AlbumRow(album: album)
        }
        // Step 2: Mark the source of the transition
        .matchedTransitionSource(
            id: album.id, in: animation
        )
    }
    .navigationDestination(for: Int.self) { id in
        let album = sampleAlbums.first {
            $0.id == id
        }!
        AlbumDetailScreen(album: album)
            // Step 3: Connect the destination
            .navigationTransition(
                .zoom(sourceID: id, in: animation)
            )
    }
}
// The @Namespace links the source row
// to the destination screen automatically`}
        </CodePane>
      </div>
      <Info>{"This wrapper code is scaffolded for you — you will copy it into your project. The concept to understand: a shared transition container watches for elements with matching IDs on two screens and animates between them."}</Info>
    </Shell>
  ),

  // 6: Tagging elements with matching IDs
  () => (
    <Shell tag="Shared elements" title="Tagging elements — matching IDs across screens" notes="This is the key hands-on concept. Both platforms use the same mental model: give the same string key to an element on Screen A and Screen B. The framework knows they are 'the same thing' and animates the transition. In Compose, you use .sharedElement() modifier. In SwiftUI, the zoom transition handles this automatically when you use matchedTransitionSource with a matching ID.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Compose — .sharedElement() modifier" accent={PURPLE}>
{`// In AlbumRow — tag the avatar:
Box(
    modifier = Modifier
        .sharedElement(
            state = rememberSharedContentState(
                key = "avatar-\${album.id}"
                //     ^^^^^^^^^^^^^^^^^^
                // This key MUST match the one
                // in AlbumDetailScreen
            ),
            animatedVisibilityScope =
                animatedVisibilityScope
        )
        .size(52.dp)
        .background(Color(0xFF534AB7), CircleShape),
    contentAlignment = Alignment.Center
) {
    Text(
        album.artist.first().toString(),
        color = Color.White
    )
}

// In AlbumDetailScreen — SAME key:
Box(
    modifier = Modifier
        .sharedElement(
            state = rememberSharedContentState(
                key = "avatar-\${album.id}"
                //     ^^^^^^^^^^^^^^^^^^
                // MATCHES the row's key!
            ),
            animatedVisibilityScope =
                animatedVisibilityScope
        )
        .size(72.dp)
        .background(Color(0xFF534AB7), CircleShape),
    // ...
)`}
        </CodePane>
        <CodePane title="SwiftUI — automatic with zoom transition" accent={TEAL}>
{`// SwiftUI's .zoom transition handles matching
// automatically when you use the same ID:

// In the list — the source:
NavigationLink(value: album.id) {
    AlbumRow(album: album)
}
.matchedTransitionSource(
    id: album.id, in: animation
    // This ID links to the destination's
    // .navigationTransition below
)

// In the destination:
AlbumDetailScreen(album: album)
    .navigationTransition(
        .zoom(
            sourceID: album.id, in: animation
            // MATCHES the source's ID!
        )
    )

// The whole row zooms into the detail screen
// No need to tag individual elements —
// SwiftUI handles the visual interpolation

// Want to tag a specific element instead?
// Use matchedGeometryEffect:
Circle()
    .matchedGeometryEffect(
        id: "avatar-\\(album.id)",
        in: animation
    )`}
        </CodePane>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8 }}>
        {[
          { label: "Same key", desc: "Both screens use the exact same string key — that is how the framework matches them" },
          { label: "Auto size/position", desc: "The framework automatically interpolates size and position between the two locations" },
          { label: "Multiple elements", desc: "You can tag multiple elements — avatar AND title text — each with their own key" },
        ].map(item => (
          <div key={item.label} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{item.label}</p>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 7: AI's role with complex wrappers
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

  // 8: UI as a Function of Space
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
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textAlign: "center" }}>List fills full width → tap → <strong>navigate</strong> to detail</p>
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
          <p style={{ fontSize: 11, color: "#085041", margin: 0, textAlign: "center" }}>List and detail <strong>side by side</strong> → tap updates the detail pane</p>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <CodePane title="Compose — WindowSizeClass" accent={PURPLE}>
{`// Check the width of the current window:
val windowInfo = currentWindowAdaptiveInfo()
val isExpanded = windowInfo.windowSizeClass
    .windowWidthSizeClass ==
    WindowWidthSizeClass.EXPANDED

// EXPANDED  = tablet landscape (> 840dp)
// MEDIUM    = large phone landscape (600-840dp)
// COMPACT   = normal phone portrait (< 600dp)`}
        </CodePane>
        <CodePane title="SwiftUI — horizontalSizeClass" accent={TEAL}>
{`// Check the horizontal size class:
@Environment(\\.horizontalSizeClass)
var sizeClass

// .regular  = iPad, or iPhone landscape
// .compact  = iPhone portrait

// Use it in the body:
if sizeClass == .regular {
    // Show side-by-side layout
} else {
    // Show navigation push layout
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 9: Adaptive Layout — the refactor
  () => (
    <Shell tag="Adaptive layouts" timer="8" title="The architectural refactor — one state, two layouts" subtitle="The same selectedAlbum drives both phone and tablet" notes="The key insight: on a tablet, tapping a row does NOT navigate to a new screen. Instead, it updates a selectedAlbum state variable at the top level, and the detail pane re-renders with the new album. On a phone, tapping still navigates. The ONLY difference is how the tap handler behaves and how the two screens are spatially arranged. Walk students through the code side by side.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Compose — adaptive top-level" accent={PURPLE}>
{`@Composable
fun AlbumApp() {
    val windowInfo = currentWindowAdaptiveInfo()
    val isExpanded = windowInfo.windowSizeClass
        .windowWidthSizeClass ==
        WindowWidthSizeClass.EXPANDED

    var selectedAlbum by remember {
        mutableStateOf<Album?>(null)
    }

    if (isExpanded) {
        // TABLET: side by side
        Row(Modifier.fillMaxSize()) {
            AlbumListScreen(
                modifier = Modifier.weight(1f),
                onAlbumClicked = {
                    selectedAlbum = it  // no navigate!
                }
            )
            selectedAlbum?.let { album ->
                AlbumDetailScreen(
                    album = album,
                    modifier = Modifier.weight(1.5f)
                )
            }
        }
    } else {
        // PHONE: navigation push (as before)
        val navController = rememberNavController()
        NavHost(navController, "home") {
            composable("home") {
                AlbumListScreen(
                    onAlbumClicked = { album ->
                        navController.navigate(
                            "detail/\${album.id}")
                    }
                )
            }
            composable("detail/{albumId}") { /* ... */ }
        }
    }
}`}
        </CodePane>
        <CodePane title="SwiftUI — adaptive top-level" accent={TEAL}>
{`struct AlbumApp: View {
    @Environment(\\.horizontalSizeClass)
    var sizeClass

    @State private var selectedAlbum: Album?

    var body: some View {
        if sizeClass == .regular {
            // TABLET: NavigationSplitView
            NavigationSplitView {
                AlbumListScreen(
                    selectedAlbum: $selectedAlbum
                )
            } detail: {
                if let album = selectedAlbum {
                    AlbumDetailScreen(album: album)
                } else {
                    Text("Select an album")
                        .foregroundColor(.gray)
                }
            }
        } else {
            // PHONE: NavigationStack (as before)
            NavigationStack {
                AlbumListScreen()
            }
        }
    }
}

// On iPad: tapping a row sets selectedAlbum
// On iPhone: tapping a row pushes detail screen
// Same data, same row, different spatial result`}
        </CodePane>
      </div>
      <Info>{"Notice: the AlbumRow and AlbumDetailScreen components are UNCHANGED. Only the top-level container decides how they are arranged. This is the power of component-based architecture — swap the container, keep the content."}</Info>
    </Shell>
  ),

  // 10: Prompt Engineering
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

  // 11: Live demo
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

  // 12: Lab intro
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

  // 13: Closing
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
