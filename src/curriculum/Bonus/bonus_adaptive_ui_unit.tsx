import React, { useState } from 'react';


const P_C = "#6366f1";
const PL = "#e0e7ff";
const PD = "#4338ca";
const BL = "#3b82f6";
const BLL = "#EFF6FF";
const GR = "#10b981";
const GRL = "#ECFDF5";


const TABS = ["Overview", "Lab", "Resources"];
const PLATFORMS = ["Android", "iOS"];

function Section({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div style={{ margin: "14px 0", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--color-background-secondary)", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>
        {title}
        <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div style={{ padding: "12px 14px", fontSize: 13, lineHeight: 1.7, color: "var(--color-text-primary)" }}>{children}</div>}
    </div>
  );
}

function CodeB({ title, accent, children }: { title?: string; accent?: string; children: React.ReactNode }) {
  return (
    <div style={{ margin: "10px 0" }}>
      {title && <div style={{ background: accent || P_C, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0" }}>{title}</div>}
      <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11.5, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
    </div>
  );
}

function Checkbox({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "6px 0", fontSize: 13 }}><span>☐</span><span>{children}</span></div>;
}

function Tip({ children }: { children: React.ReactNode }) {
  return <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>💡 {children}</div>;
}

function Warn({ children }: { children: React.ReactNode }) {
  return <div style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E1", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #F59E0B" }}>⚠️ {children}</div>;
}

function Note({ children }: { children: React.ReactNode }) {
  return <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #64748b" }}>📝 {children}</div>;
}

function AiOpp({ children }: { children: React.ReactNode }) {
  return <div style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}><div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>✨ AI Opportunity</div>{children}</div>;
}

function Checkpoint({ num, children }: { num?: React.ReactNode; children: React.ReactNode }) {
  return <div style={{ margin: "14px 0", padding: "10px 14px", background: "#E8FCE8", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}><strong>🎯 Checkpoint {num ? num + ":" : ""}</strong> {children}</div>;
}

function UL({ items }: { items: string[] }) {
  return <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8, margin: "6px 0" }}>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
}

function IC({ children }: { children: React.ReactNode }) {
  return <code style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 4, padding: "1px 5px", fontSize: 12 }}>{children}</code>;
}

function PlatformToggle({ platform, setPlatform }: { platform: string; setPlatform: (p: string) => void }) {
  return (
    <div style={{ display: "flex", gap: 0, margin: "12px 0", borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
      {PLATFORMS.map(p => {
        const isA = p === "Android";
        const active = platform === p;
        return (
          <button key={p} onClick={() => setPlatform(p)} style={{ padding: "6px 18px", fontSize: 12, fontWeight: 500, border: "none", cursor: "pointer", background: active ? (isA ? BLL : GRL) : "var(--color-background-primary)", color: active ? (isA ? BL : GR) : "var(--color-text-secondary)" }}>
            {isA ? "🤖 Android" : "🍎 iOS"}
          </button>
        );
      })}
    </div>
  );
}

/* ====== OVERVIEW ====== */
function Overview({ platform, setPlatform }: { platform: string; setPlatform: (p: string) => void }) {
  const isAndroid = platform === "Android";
  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>
        Bonus: Shared Elements & Adaptive Layouts
      </h2>

      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
        Take your apps to the next level with two production-quality UX features found in every polished mobile product.
        You{"'"}ll add <strong>shared element transitions</strong> — so the album avatar smoothly animates between the list
        and detail screen — then use AI to refactor your app into an <strong>adaptive layout</strong> that shows a
        side-by-side split view on tablets and large screens.
      </p>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 10px" }}>What this unit covers:</p>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>How shared element transitions create <em>spatial continuity</em> — the feeling that the same object moves between screens</li>
          <li>{isAndroid
            ? "Wrapping NavHost in SharedTransitionLayout and tagging composables with .sharedElement()"
            : "Using @Namespace, .matchedTransitionSource(), and .navigationTransition(.zoom) in SwiftUI"}
          </li>
          <li>Why matching keys are the core mechanic — and what happens when they don{"'"}t match</li>
          <li>Using {isAndroid ? "WindowSizeClass" : "horizontalSizeClass"} to detect screen width and adapt your layout</li>
          <li>The architectural difference between navigation-driven (phone) and state-driven (tablet) detail display</li>
          <li>Using AI to generate adaptive layout boilerplate and then verifying it is correct</li>
        </ul>
      </div>

      <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"📦 This unit at a glance"}</strong>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
          {[
            {
              label: "Lab",
              val: "Add a shared element transition to your album browser, then use AI to refactor for adaptive layouts. ~50–60 minutes."
            },
            {
              label: "Format",
              val: "Self-paced bonus content. Work through the lab at your own pace — no submission required."
            },

            {
              label: "Tools",
              val: isAndroid
                ? "Compose Navigation, SharedTransitionLayout, WindowSizeClass (material3-adaptive)."
                : "SwiftUI NavigationStack, @Namespace, .navigationTransition (iOS 18+)."
            },
          ].map(item => (
            <div key={item.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 16, padding: "12px 14px", background: "#F9F0FF", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>✨ AI-Powered Unit</strong>
        <p style={{ margin: "6px 0 0", color: "var(--color-text-secondary)" }}>
          The shared element transition APIs are verbose and framework-specific. In this unit you{"'"}ll <strong>read and understand</strong> the
          code rather than memorizing it — and use AI to generate the adaptive layout boilerplate. The pedagogical
          goal is <strong>conceptual mastery</strong>: spatial continuity, responsive breakpoints, and state-driven architecture.
        </p>
      </div>
    </div>
  );
}

function LabContent({ platform: _platform }: { platform: string }) {
  return (
    <div style={{ '--platform-accent': _platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Bonus Lab: Premium Polish</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Your album browser works — search, tap, detail, back. In this lab you will add two production-quality UX features: <strong>shared element transitions</strong> (the album avatar animates between screens) and <strong>adaptive layouts</strong> (side-by-side list and detail on tablets). Budget about 50-60 minutes.</p>

      <div style={{ background: "#F9F0FF", borderRadius: 8, padding: "10px 14px", margin: "12px 0", fontSize: 13, lineHeight: 1.6 }}>
        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{"⚡"} AI-Powered Lab</div>
        This lab is heavily scaffolded — you will copy complex framework wrappers and use AI to understand them. The pedagogical goal is <strong>conceptual mastery</strong> of spatial continuity and responsive design, not memorization of verbose API signatures.
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Goals</h2>
      <UL items={[
        "Add shared element transitions — the album avatar animates from list row to detail screen",
        "Understand the concept of 'matching IDs' for spatial continuity",
        "Use AI to refactor your app for adaptive layouts (phone vs tablet)",
        "Verify AI output — check for correct size class detection and state management",
        "Understand the architectural shift from navigation-based to state-based detail display",
      ]} />

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 16px" }}>Lab instructions</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <VStep num={0} title="Verify your working AlbumBrowser">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Make sure your Session 1 app is fully working before adding anything new. You should be able to:</p>
          <Checkbox>See all 8 albums in a styled scrollable list</Checkbox>
          <Checkbox>Tap a row and navigate to the detail screen</Checkbox>
          <Checkbox>Press back and return to the list</Checkbox>
          <Checkbox><em>(Stretch — if completed)</em> Search and filter the list in real time</Checkbox>
          <Tip>If the required items above are not working, fix them first or pair with someone who has a working app. Everything today builds on the complete Session 1 app.</Tip>
        </VStep>

        <VStep num={1} title="Add the shared element wrapper">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>This step adds a shared element transition so the album avatar <strong>animates</strong> from its position in the list row to its larger position on the detail screen. The framework handles the animation — you just <strong>tag</strong> which elements should be treated as the same object across screens. The idea is simple: give the same element in two screens a matching ID, and the framework will automatically animate it between positions.</p>

          {_platform === "Android" ? (
            <>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>You will make three changes: wrap your navigation in a shared transition scope, tag the avatar in the list row, and tag the same avatar in the detail screen with a matching key.</p>

              <VStep num="a" title="Wrap NavHost in SharedTransitionLayout">
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 8px" }}>In <IC>MainActivity.kt</IC>, wrap your existing <IC>NavHost</IC> inside a <IC>SharedTransitionLayout</IC> block. This gives all composables inside it access to the shared transition scope. You also need to pass <IC>this</IC> (the <IC>AnimatedVisibilityScope</IC>) down to each screen via a new parameter called <IC>animatedVisibilityScope</IC>.</p>
                <Tip><IC>SharedTransitionLayout</IC> creates a coordinate system that tracks tagged elements across screens. Without it, Compose has no way to know which elements should animate together during navigation.</Tip>
                <Section title="💡 Show me the syntax">
                  <p style={{ fontSize: 13, margin: "0 0 6px" }}>The pattern is: wrap <IC>NavHost</IC> in <IC>SharedTransitionLayout {"{ ... }"}</IC>, then pass <IC>animatedVisibilityScope = this</IC> to each screen composable inside the <IC>composable()</IC> blocks.</p>
                  <CodeB title="Kotlin — the wrapping pattern" accent={BL}>{`SharedTransitionLayout {
    NavHost(navController, startDestination = "home") {
        composable("home") {
            // 'this' here is the AnimatedVisibilityScope
            MyScreen(animatedVisibilityScope = this)
        }
    }
}`}</CodeB>
                </Section>
                <Section title="✅ Check your work — show me the complete MainActivity.kt so far">
                  <CodeB title="Kotlin — MainActivity.kt (with SharedTransitionLayout)" accent={BL}>{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()
            // NEW: SharedTransitionLayout wraps NavHost
            SharedTransitionLayout {
                NavHost(
                    navController = navController,
                    startDestination = "home"
                ) {
                    composable("home") {
                        AlbumListScreen(
                            onAlbumClicked = { album ->
                                navController.navigate(
                                    "detail/\${album.id}")
                            },
                            // NEW: pass the animated scope down
                            animatedVisibilityScope = this
                        )
                    }
                    composable("detail/{albumId}") { entry ->
                        val id = entry.arguments
                            ?.getString("albumId")
                            ?.toInt() ?: 0
                        val album = sampleAlbums.find {
                            it.id == id
                        }
                        album?.let {
                            AlbumDetailScreen(
                                album = it,
                                // NEW: pass the animated scope
                                animatedVisibilityScope = this
                            )
                        }
                    }
                }
            }
        }
    }
}`}</CodeB>
                </Section>
              </VStep>

              <VStep num="b" title="Tag the avatar in AlbumRow">
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 8px" }}>Open <IC>AlbumRow</IC>. You need to make two changes: (1) change the function signature so it is an extension on <IC>SharedTransitionScope</IC> and accepts an <IC>animatedVisibilityScope</IC> parameter, and (2) add the <IC>.sharedElement()</IC> modifier to the avatar <IC>Box</IC>. The key string must include the album's ID so each row's avatar is uniquely tracked — use <IC>{"\"avatar-${album.id}\""}</IC>.</p>
                <Section title="💡 Show me the syntax">
                  <p style={{ fontSize: 13, margin: "0 0 6px" }}>To make a composable participate in shared transitions, define it as <IC>fun SharedTransitionScope.AlbumRow(...)</IC> instead of <IC>fun AlbumRow(...)</IC>. Then use <IC>Modifier.sharedElement()</IC> on the element to animate:</p>
                  <CodeB title="Kotlin — sharedElement modifier pattern" accent={BL}>{`.sharedElement(
    state = rememberSharedContentState(
        key = "some-unique-key"
    ),
    animatedVisibilityScope = animatedVisibilityScope
)`}</CodeB>
                </Section>
                <Section title="✅ Check your work — show me the complete AlbumRow so far">
                  <CodeB title="Kotlin — AlbumRow.kt (with shared element)" accent={BL}>{`@Composable
fun SharedTransitionScope.AlbumRow(
    album: Album,
    onClick: () -> Unit = {},
    animatedVisibilityScope: AnimatedVisibilityScope
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() }
            .padding(vertical = 6.dp)
            .background(Color.White,
                shape = RoundedCornerShape(12.dp))
            .padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        // Avatar with shared element tag
        Box(
            modifier = Modifier
                .sharedElement(
                    state = rememberSharedContentState(
                        key = "avatar-\${album.id}"
                    ),
                    animatedVisibilityScope =
                        animatedVisibilityScope
                )
                .size(52.dp)
                .background(
                    Color(0xFF534AB7), CircleShape),
            contentAlignment = Alignment.Center
        ) {
            Text(
                album.artist.first().toString(),
                color = Color.White,
                fontSize = 22.sp,
                fontWeight = FontWeight.Bold
            )
        }
        // Info column (unchanged)
        Column(modifier = Modifier.weight(1f)) {
            Text(album.title, fontSize = 15.sp,
                fontWeight = FontWeight.Bold)
            Text(album.artist, fontSize = 13.sp,
                color = Color.Gray)
            Spacer(modifier = Modifier.height(4.dp))
            Row(
                horizontalArrangement =
                    Arrangement.spacedBy(6.dp),
                verticalAlignment =
                    Alignment.CenterVertically
            ) {
                Text(album.genre, fontSize = 11.sp,
                    color = Color(0xFF534AB7),
                    modifier = Modifier
                        .background(Color(0xFFEEEDFE),
                            RoundedCornerShape(20.dp))
                        .padding(horizontal = 8.dp,
                            vertical = 2.dp))
                Text(album.year.toString(),
                    fontSize = 11.sp,
                    color = Color.Gray)
            }
        }
        // Star rating (unchanged)
        Column(
            horizontalAlignment =
                Alignment.CenterHorizontally
        ) {
            Text("★", fontSize = 18.sp,
                color = Color(0xFFEF9F27))
            Text(album.rating.toString(),
                fontSize = 11.sp, color = Color.Gray)
        }
    }
}`}</CodeB>
                </Section>
              </VStep>

              <VStep num="c" title="Tag the avatar in AlbumDetailScreen with the same key" last>
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 8px" }}>Open <IC>AlbumDetailScreen</IC> and make the same two changes: (1) change the function signature to an extension on <IC>SharedTransitionScope</IC> with an <IC>animatedVisibilityScope</IC> parameter (you can remove the <IC>onBack</IC> parameter since the system back button handles navigation), and (2) add <IC>.sharedElement()</IC> to the large avatar <IC>Box</IC> with <strong>the exact same key string</strong> — <IC>{"\"avatar-${album.id}\""}</IC>. The keys must match for the framework to know these are the same object.</p>
                <Tip>The matching key is everything. If the key in AlbumRow is <IC>{"\"avatar-${album.id}\""}</IC> and the key in AlbumDetailScreen is <IC>{"\"detail-avatar-${album.id}\""}</IC>, the framework will treat them as different elements and no animation will happen.</Tip>
                <Section title="✅ Check your work — show me the complete AlbumDetailScreen">
                  <CodeB title="Kotlin — AlbumDetailScreen.kt (with shared element)" accent={BL}>{`@Composable
fun SharedTransitionScope.AlbumDetailScreen(
    album: Album,
    animatedVisibilityScope: AnimatedVisibilityScope
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(start = 4.dp, top = 8.dp,
                    end = 16.dp, bottom = 8.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(album.title, fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold,
                modifier = Modifier.padding(start = 16.dp))
        }
        Divider()
        Column(
            modifier = Modifier
                .padding(24.dp)
                .fillMaxWidth(),
            horizontalAlignment =
                Alignment.CenterHorizontally
        ) {
            // Same key as AlbumRow's avatar!
            Box(
                modifier = Modifier
                    .sharedElement(
                        state = rememberSharedContentState(
                            key = "avatar-\${album.id}"
                        ),
                        animatedVisibilityScope =
                            animatedVisibilityScope
                    )
                    .size(72.dp)
                    .background(
                        Color(0xFF534AB7), CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    album.artist.first().toString(),
                    color = Color.White,
                    fontSize = 30.sp,
                    fontWeight = FontWeight.Bold
                )
            }
            Spacer(modifier = Modifier.height(24.dp))
            listOf(
                "Artist" to album.artist,
                "Year" to album.year.toString(),
                "Genre" to album.genre,
                "Tracks" to "\${album.tracks} tracks",
                "Rating" to "★ \${album.rating}"
            ).forEach { (label, value) ->
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 10.dp),
                    horizontalArrangement =
                        Arrangement.SpaceBetween
                ) {
                    Text(label, fontSize = 14.sp,
                        color = Color.Gray)
                    Text(value, fontSize = 14.sp,
                        fontWeight = FontWeight.Medium)
                }
                Divider(color = Color(0xFFE0E0E0))
            }
        }
    }
}`}</CodeB>
                </Section>
              </VStep>
            </>
          ) : (
            <>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>You will make two changes: create a shared animation namespace and mark the source element in the list, then add a zoom transition on the detail destination.</p>

              <VStep num="a" title="Create the namespace and mark the transition source">
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 8px" }}>In <IC>ContentView.swift</IC>, add a <IC>@Namespace</IC> property called <IC>animation</IC>. This creates a shared coordinate space that SwiftUI uses to track matched elements across views. Pass it into <IC>AlbumListScreen</IC> as a new parameter. Then in <IC>AlbumListScreen</IC>, accept <IC>animation: Namespace.ID</IC> and add <IC>.matchedTransitionSource(id: album.id, in: animation)</IC> to each <IC>NavigationLink</IC>. This tells SwiftUI: "this row is the origin point for a transition."</p>
                <Tip><IC>@Namespace</IC> is like a shared whiteboard — any view that writes an ID into the same namespace can be paired with another view using the same ID. SwiftUI handles the rest.</Tip>
                <Section title="💡 Show me the syntax">
                  <p style={{ fontSize: 13, margin: "0 0 6px" }}>The namespace is declared once, typically in the parent view, and passed down:</p>
                  <CodeB title="Swift — namespace pattern" accent={GR}>{`@Namespace private var animation

// Pass to child:
ChildView(animation: animation)

// In child, mark source:
NavigationLink(value: item.id) { ... }
    .matchedTransitionSource(
        id: item.id, in: animation
    )`}</CodeB>
                </Section>
                <Section title="✅ Check your work — show me the complete ContentView.swift and AlbumListScreen so far">
                  <CodeB title="Swift — ContentView.swift (with namespace)" accent={GR}>{`struct ContentView: View {
    @Namespace private var animation

    var body: some View {
        NavigationStack {
            AlbumListScreen(animation: animation)
        }
    }
}`}</CodeB>
                  <CodeB title="Swift — AlbumListScreen.swift (with matchedTransitionSource)" accent={GR}>{`struct AlbumListScreen: View {
    var animation: Namespace.ID
    @State private var query = ""

    var filtered: [Album] {
        if query.isEmpty { return sampleAlbums }
        return sampleAlbums.filter { album in
            album.title
                .localizedCaseInsensitiveContains(query) ||
            album.artist
                .localizedCaseInsensitiveContains(query)
        }
    }

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            List(filtered) { album in
                NavigationLink(value: album.id) {
                    AlbumRow(album: album)
                }
                // NEW: mark this row as the source
                .matchedTransitionSource(
                    id: album.id, in: animation
                )
                .listRowInsets(EdgeInsets(
                    top: 4, leading: 16,
                    bottom: 4, trailing: 16))
                .listRowBackground(Color.clear)
                .listRowSeparator(.hidden)
            }
            .listStyle(.plain)
            .navigationDestination(for: Int.self) { id in
                let album = sampleAlbums.first {
                    $0.id == id
                }!
                AlbumDetailScreen(album: album)
            }
        }
        .navigationTitle("Albums")
        .searchable(text: $query,
            prompt: "Search albums")
    }
}`}</CodeB>
                </Section>
              </VStep>

              <VStep num="b" title="Add the zoom transition to the detail destination" last>
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 8px" }}>Inside <IC>.navigationDestination</IC> in <IC>AlbumListScreen</IC>, add <IC>.navigationTransition(.zoom(sourceID: id, in: animation))</IC> to the <IC>AlbumDetailScreen</IC>. The <IC>sourceID</IC> must match the <IC>id</IC> you used in <IC>.matchedTransitionSource</IC> — this is how SwiftUI connects the source row to the detail screen for the animation.</p>
                <Section title="✅ Check your work — show me the updated navigationDestination">
                  <CodeB title="Swift — the updated navigationDestination block" accent={GR}>{`.navigationDestination(for: Int.self) { id in
    let album = sampleAlbums.first {
        $0.id == id
    }!
    AlbumDetailScreen(album: album)
        // NEW: zoom transition from source
        .navigationTransition(
            .zoom(sourceID: id, in: animation)
        )
}`}</CodeB>
                </Section>
                <Warn>The <IC>.navigationTransition(.zoom)</IC> API requires iOS 18+. If you are targeting older iOS versions, use <IC>.matchedGeometryEffect</IC> with <IC>@Namespace</IC> instead. Ask AI for the alternative approach if needed.</Warn>
              </VStep>
            </>
          )}

          <AiOpp>If you get stuck with the wrapper code, paste your current AlbumRow, AlbumDetailScreen, and MainActivity/ContentView into Claude and ask: {"\""}I want to add shared element transitions so the album avatar animates from the list row to the detail screen. Here is my current code. Can you add SharedTransitionLayout (Compose) or matchedTransitionSource (SwiftUI) step by step?{"\""}
          </AiOpp>

          <Checkpoint num={1}>Tap any album row. The album avatar should <strong>smoothly animate</strong> from its 52dp size in the row to its 72dp size in the detail screen. Press back — it animates back. This is spatial continuity in action.</Checkpoint>
        </VStep>

        <VStep num={2} title="Test and refine the transition">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Test the shared element transition thoroughly:</p>
          <Checkbox>Tap different album rows — each avatar should animate correctly</Checkbox>
          <Checkbox>Tap back — the avatar should return to its original position in the list</Checkbox>
          <Checkbox>Search for an album, then tap it — the transition should still work on filtered results</Checkbox>
          <Checkbox>The transition feels smooth, not janky or delayed</Checkbox>
          <Tip><b>The avatar jumps instead of animating?</b> Make sure the key strings match exactly: <IC>{"\""}avatar-{"$"}{"{album.id}\""}</IC> in both AlbumRow and AlbumDetailScreen. If the keys are different, the framework cannot match them.</Tip>
          <Tip><b>Want to animate the title text too?</b> Add a second shared element tag on the title Text in both screens with a key like <IC>{"\""}title-{"$"}{"{album.id}\""}</IC>. Each shared element needs its own unique key.</Tip>
        </VStep>

        <VStep num={3} title="Prompt AI for an adaptive layout refactor">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Right now your app uses a navigation push for every screen size. On a tablet or in landscape, this wastes space — there is room to show the list and detail <strong>side by side</strong>. Use AI to refactor your app to detect screen width and adapt the layout.</p>
          <AiOpp>
            <p style={{ marginTop: 0 }}>Copy your complete <IC>MainActivity</IC> (Compose) or <IC>ContentView</IC> (SwiftUI), including AlbumListScreen and AlbumDetailScreen, and paste it into Claude with this prompt:</p>
            <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "12px 14px", margin: "8px 0" }}>
              <p style={{ fontSize: 12, color: "#cdd6f4", margin: 0, lineHeight: 1.6, fontFamily: "monospace" }}>I have a list-to-detail album browser app using {_platform === "Android" ? "NavHost" : "NavigationStack"}. Here is my current code: [paste code]. Refactor it so that on wide screens (tablet or landscape), the list and detail appear side by side in a split view instead of using a navigation push. On narrow screens (phone portrait), keep the current navigation behavior. Use {_platform === "Android" ? "WindowSizeClass" : "horizontalSizeClass"} to detect the screen width.</p>
            </div>
          </AiOpp>

          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: "12px 0 8px" }}>Before applying AI{"'"}s output, verify these checkpoints:</p>
          <Checkbox>Does it check <IC>{_platform === "Android" ? "WindowWidthSizeClass.EXPANDED" : "horizontalSizeClass == .regular"}</IC>?</Checkbox>
          <Checkbox>Is there a <IC>selectedAlbum</IC> state variable at the top level that drives the detail pane on tablet?</Checkbox>
          <Checkbox>Does the phone (compact) path still use <IC>{_platform === "Android" ? "NavHost" : "NavigationStack"}</IC> with navigation push?</Checkbox>
          <Checkbox>Are <IC>AlbumRow</IC> and <IC>AlbumDetailScreen</IC> reused without duplication — only the container changed?</Checkbox>
          <Warn>Common AI mistake: AI sometimes creates a completely new list UI for the tablet path instead of reusing your existing <IC>AlbumListScreen</IC>. If the output duplicates your list code, ask AI to refactor using the existing components with a <IC>selectedAlbum</IC> binding.</Warn>

          <Checkpoint num={2}>Apply AI{"'"}s output and run the app. On a phone-sized screen, the app should behave exactly as before (navigation push). Resize the emulator to tablet width or rotate to landscape — the list and detail should appear <strong>side by side</strong>.</Checkpoint>
        </VStep>

        <VStep num={4} title="Test adaptive behavior">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Test the adaptive layout on both screen sizes:</p>
          <Checkbox>Phone (compact): List fills full width. Tap a row → navigates to detail. Back → returns to list.</Checkbox>
          <Checkbox>Tablet (expanded): List and detail side by side. Tap a row → detail pane updates in place. No navigation animation.</Checkbox>
          <Checkbox>Resize from phone to tablet → layout switches automatically</Checkbox>
          <Checkbox>Search still works in both modes</Checkbox>
          <Tip><b>How to test tablet mode:</b> In Android Studio, use the resizable emulator or create a tablet AVD. In Xcode, select an iPad simulator or use the Preview canvas with a landscape modifier.</Tip>
        </VStep>

        <VStep num={5} title="Ask AI to explain the architecture">
          <AiOpp>Ask Claude: {"\""}In my adaptive layout, tapping a row on a tablet updates a selectedAlbum state variable instead of calling {_platform === "Android" ? "navController.navigate()" : "navigation destination"}. Explain why this architectural difference exists. What problem would occur if I used navigation push on a tablet with a side-by-side layout?{"\""}</AiOpp>
          <Checkbox>Read and understood AI{"'"}s explanation of state-driven vs navigation-driven detail display</Checkbox>
          <Checkbox>Can explain in your own words why the tablet path uses state instead of navigation</Checkbox>
        </VStep>

        <VStep num={6} title="Reflect" last>
          <CodeB>{`// Lab Reflection (Week 3, Session 2)
// 1. What does "object permanence" mean in UI?
//    How does the shared element transition create it?
// 2. What is the architectural difference between
//    the phone layout and the tablet layout? Why does the
//    tablet path use state instead of navigation?
// 3. How did using AI to implement these features feel
//    compared to writing them from scratch? What did
//    you need to understand vs. what could you delegate?`}</CodeB>
          <Checkpoint num="?">Final checkpoint: Show a TA — (1) the shared element transition animating on tap and back, (2) the adaptive layout switching between phone and tablet, and (3) walk them through your reflection.</Checkpoint>
          <Note>These are the same patterns used by Apple Music, Spotify, Gmail, and every production app that feels polished on both phones and tablets. You built them in Week 3 because AI handled the complexity. The concepts — spatial continuity and responsive layout — are transferable to every platform and framework.</Note>
        </VStep>
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Stretch features</h2>
      <Checkbox>Add a second shared element — animate the album title text in addition to the avatar</Checkbox>
      <Checkbox>Customize the transition duration or easing curve using AI assistance</Checkbox>
      <Checkbox>Add a placeholder message in the detail pane when no album is selected on tablet (e.g. {"\""}Select an album to see details{"\""})</Checkbox>
      <Checkbox>Ask AI to add a third layout breakpoint for medium-width screens (large phone landscape)</Checkbox>
    </div>
  );
}

// Reusable VStep component for the lab
function VStep({ num, title, children, last }: { num: number | string, title: string, children: React.ReactNode, last?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--platform-accent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, zIndex: 2 }}>{num}</div>
        {!last && <div style={{ width: 2, flex: 1, background: "var(--color-border-tertiary)", margin: "4px 0" }} />}
      </div>
      <div style={{ flex: 1, paddingBottom: last ? 0 : 32 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, margin: "2px 0 12px", color: "var(--color-text-primary)" }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}

function Lab({ platform, setPlatform }: { platform: string; setPlatform: (p: string) => void }) {
  return (
    <div>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      <LabContent platform={platform} />
    </div>
  );
}

function Resources({ platform, setPlatform }: { platform: string; setPlatform: (p: string) => void }) {
  const isAndroid = platform === "Android";
  return (
    <div>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        {isAndroid ? (
          <>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>🤖 Shared Elements — Android</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><a href="https://developer.android.com/develop/ui/compose/animation/shared-elements" style={{ color: "var(--color-text-info)" }}>Shared element transitions in Compose — developer.android.com</a></li>
              <li><a href="https://developer.android.com/jetpack/compose/animation/quick-guide#shared-element" style={{ color: "var(--color-text-info)" }}>Quick guide: Shared element animation — developer.android.com</a></li>
            </ul>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>🤖 Adaptive Layouts — Android</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><a href="https://developer.android.com/develop/ui/compose/layouts/adaptive" style={{ color: "var(--color-text-info)" }}>Adaptive layouts in Compose — developer.android.com</a></li>
              <li><a href="https://developer.android.com/reference/kotlin/androidx/compose/material3/adaptive/WindowAdaptiveInfo" style={{ color: "var(--color-text-info)" }}>WindowAdaptiveInfo / WindowSizeClass — developer.android.com</a></li>
            </ul>
          </>
        ) : (
          <>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>🍎 Shared Elements — iOS</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><a href="https://developer.apple.com/documentation/swiftui/view/navigationtransition(_:)" style={{ color: "var(--color-text-info)" }}>navigationTransition — developer.apple.com</a></li>
              <li><a href="https://developer.apple.com/documentation/swiftui/view/matchedgeometryeffect(id:in:properties:anchor:issource:)" style={{ color: "var(--color-text-info)" }}>matchedGeometryEffect — developer.apple.com</a></li>
            </ul>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>🍎 Adaptive Layouts — iOS</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><a href="https://developer.apple.com/documentation/swiftui/navigationsplitview" style={{ color: "var(--color-text-info)" }}>NavigationSplitView — developer.apple.com</a></li>
              <li><a href="https://developer.apple.com/documentation/swiftui/environmentvalues/horizontalsizeclass" style={{ color: "var(--color-text-info)" }}>horizontalSizeClass — developer.apple.com</a></li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default function AdaptiveUiUnit() {
  const [tab, setTab] = useState("Overview");
  const [platform, setPlatform] = useState("Android");

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "16px 0", fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", fontWeight: 500, marginBottom: 2 }}>MOBILE DEVELOPMENT IN THE AGE OF AI</div>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>CodePath · Bonus Unit</div>
      </div>
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--color-border-tertiary)", marginBottom: 16, overflowX: "auto" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "8px 14px", fontSize: 13, background: "none", cursor: "pointer",
            borderWidth: "0 0 2px 0", borderStyle: "solid",
            borderColor: tab === t ? P_C : "transparent",
            color: tab === t ? P_C : "var(--color-text-secondary)",
            fontWeight: tab === t ? 500 : 400, whiteSpace: "nowrap"
          }}>{t}</button>
        ))}
      </div>
      {tab === "Overview"  && <Overview platform={platform} setPlatform={setPlatform} />}
      {tab === "Lab"       && <Lab platform={platform} setPlatform={setPlatform} />}
      {tab === "Resources" && <Resources platform={platform} setPlatform={setPlatform} />}
    </div>
  );
}
