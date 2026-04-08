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
  <div style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "8px 12px", margin: "8px 0" }}>
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

const sampleAlbums = [
  { id: 1, title: "Rumours", artist: "Fleetwood Mac", year: 1977, genre: "Rock", rating: 4.9 },
  { id: 2, title: "Kind of Blue", artist: "Miles Davis", year: 1959, genre: "Jazz", rating: 4.8 },
  { id: 3, title: "Purple Rain", artist: "Prince", year: 1984, genre: "Pop", rating: 4.7 },
  { id: 4, title: "Thriller", artist: "Michael Jackson", year: 1982, genre: "Pop", rating: 4.8 },
];

const AlbumRowPreview = ({ album }) => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 14px", background: "#fff", borderRadius: 10, marginBottom: 4 }}>
    <div style={{ width: 44, height: 44, background: PURPLE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 16, flexShrink: 0 }}>{album.artist[0]}</div>
    <div style={{ flex: 1 }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 2px" }}>{album.title}</p>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <span style={{ fontSize: 11, color: PURPLE, background: PURPLE_LIGHT, padding: "1px 7px", borderRadius: 20 }}>{album.genre}</span>
        <span style={{ fontSize: 11, color: MUTED }}>{album.year}</span>
      </div>
    </div>
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: 14, color: "#EF9F27", margin: 0 }}>★</p>
      <p style={{ fontSize: 10, color: MUTED, margin: 0 }}>{album.rating}</p>
    </div>
  </div>
);

const slides = [
  // 1: Title
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 3 — Session 1</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>Lists and scrolling —<br/>building the album browser</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Session 1: LazyColumn / List, and custom row layouts</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Builds on Weeks 1-2", "Music album browser", "LazyColumn + List"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${TEAL}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Start with Assignment 2 check — ask students to show their trivia app. Note who has and has not submitted. This is also a good moment to celebrate: students now have a working multi-screen app from Week 2. Today they add the pattern that powers almost every social feed, inbox, and catalogue they have ever used."}</Notes>
    </div>
  ),

  // 2: Recap
  () => (
    <Shell tag="Recap" timer="5" title="Weeks 1-2 recap — the foundation so far" notes="Keep this crisp. Students have now covered declarative UI, state, and navigation — the three pillars. Everything from here builds on these. If anyone is shaky on navigation, reassure them: today we are barely touching it. It comes back naturally in Session 2.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          { week: "Week 1", icon: "🖼️", title: "Declarative UI", desc: "Screens are functions of state. Compose and SwiftUI share the same mental model." },
          { week: "Week 1-2", icon: "🔄", title: "State", desc: "remember / @State makes values observable. Change the data, the UI follows." },
          { week: "Week 2", icon: "🗺️", title: "Navigation", desc: "NavHost / NavigationStack. Push with navigate(), pop with popBackStack() / dismiss()." },
        ].map(item => (
          <div key={item.week} style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 20, margin: "0 0 6px" }}>{item.icon}</p>
            <p style={{ fontSize: 11, color: PURPLE, fontWeight: 600, margin: "0 0 4px", textTransform: "uppercase" }}>{item.week}</p>
            <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 4px" }}>{item.title}</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.4 }}>{item.desc}</p>
          </div>
        ))}
      </div>
      <Discussion>{"Think about the apps you use most. Almost all of them open on a list — a feed, an inbox, a search results page. What would those apps be like without scrollable lists? What is the list in Instagram, Spotify, Gmail?"}</Discussion>
    </Shell>
  ),

  // 3: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 60 minutes" notes="Point out that today introduces the most reusable UI pattern students will ever build. The list-to-detail pattern appears in virtually every app. Once they have it, they can build most category of browsing apps.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "5 min",  title: "Recap", desc: "Weeks 1-2 foundations" },
          { num: "02", time: "8 min",  title: "Why lists need special components", desc: "The problem with Column/VStack for large data — lazy loading" },
          { num: "03", time: "10 min", title: "LazyColumn and List", desc: "The APIs, key/Identifiable, and how items() works" },
          { num: "04", time: "8 min",  title: "Custom row layouts", desc: "Building AlbumRow with Row+Column / HStack+VStack" },
          { num: "05", time: "5 min",  title: "List performance tips", desc: "Keys, stable data, and what not to do" },
          { num: "06", time: "18 min", title: "Live code-along", desc: "Build the album browser list screen from scratch" },
          { num: "07", time: "4 min",  title: "Week 4 teaser", desc: "Where the hardcoded data goes — a glimpse at networking" },
          { num: "08", time: "5 min",  title: "Lab intro + Q&A", desc: "What you build today" },
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

  // 4: Lists are everywhere
  () => (
    <Shell tag="Lists are everywhere" title="You have used lists thousands of times today" subtitle="Almost every screen you have ever scrolled is a list" notes="This is the energy-setter before diving into code. Do not rush it. Let students actually open their phones and count. The goal is for them to feel the significance of what they are about to learn — this is not a niche skill, it is the single most reused UI pattern in all of mobile development.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8, marginBottom: 12 }}>
        {[
          { app: "Instagram", list: "Photo feed — infinite scroll of posts", color: "#E1306C" },
          { app: "Spotify", list: "Song queue, playlist tracks, search results", color: "#1DB954" },
          { app: "Gmail", list: "Every email in your inbox", color: "#EA4335" },
          { app: "iMessages", list: "Every conversation thread", color: "#34AADC" },
          { app: "Amazon", list: "Search results, recommendations, orders", color: "#FF9900" },
          { app: "YouTube", list: "Home feed, search results, subscriptions", color: "#FF0000" },
        ].map(item => (
          <div key={item.app} style={{ borderRadius: 8, padding: "10px 12px", background: GRAY, display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
              <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: 0 }}>{item.app}</p>
            </div>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{item.list}</p>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[
          { stat: "~80%", label: "Of mobile screens contain at least one scrollable list" },
          { stat: "#1", label: "Most-built UI component across all native mobile apps" },
          { stat: "∞", label: "Instagram feed — technically infinite, loaded in batches" },
        ].map(s => (
          <div key={s.stat} style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px", textAlign: "center" }}>
            <p style={{ fontSize: 26, fontWeight: 800, color: PURPLE, margin: "0 0 4px" }}>{s.stat}</p>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.4 }}>{s.label}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 5: Personal reflection
  () => (
    <Shell tag="Lists are everywhere" title="Your turn — open your most used app right now" subtitle="Do this for real. Take 60 seconds." notes="Actually give students 60 seconds of silence to do this. Then ask 3-4 students to share what they found. The typical answer surprises them — most apps are almost entirely lists. After they share, bridge to: 'Today you learn how to build exactly that.'">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
        <div style={{ background: GRAY, borderRadius: 10, padding: "18px 20px" }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: TEXT, margin: "0 0 16px" }}>Try this right now</p>
          {[
            { n: "1", t: "Open the app you use most on your phone" },
            { n: "2", t: "Count how many lists you can see or scroll to from the home screen" },
            { n: "3", t: "Tap into one list item — is the detail screen also a list?" },
            { n: "4", t: "Notice: does scrolling feel instant even with hundreds of items?" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 10, margin: "8px 0", alignItems: "flex-start" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 22, height: 22, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</span>
              <span style={{ fontSize: 13, color: TEXT, lineHeight: 1.5 }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 10, padding: "14px 16px", flex: 1 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: TEAL, margin: "0 0 8px" }}>What you will likely find</p>
            <Bullet>Most apps are 70-90% lists of some kind</Bullet>
            <Bullet>Even detail screens often contain lists — a product page lists reviews, specs, related items</Bullet>
            <Bullet>Scrolling feels instant even on huge datasets — that is lazy loading at work</Bullet>
            <Bullet>The pattern is almost always: row taps to detail screen</Bullet>
          </div>
          <div style={{ background: PURPLE_LIGHT, border: `1px solid ${PURPLE}33`, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>By the end of today</p>
            <p style={{ fontSize: 12, color: PURPLE, margin: 0, lineHeight: 1.5 }}>You will know how to build the exact pattern you just interacted with — a performant, scrollable list rendered from a data model. One of the highest-value skills in this course.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 6: Why lists need special components
  () => (
    <Shell tag="Lists" timer="8" title="Why you cannot use Column / VStack for long lists" subtitle="The performance problem that LazyColumn / List solves" notes="This is a conceptual slide — no code yet. Draw the analogy: Column/VStack is like printing every page of a book before you open it. LazyColumn/List is like printing each page just before you read it. For 10 items, Column is fine. For 1000 items, Column will freeze the app. Always use LazyColumn/List for data-driven scrollable lists.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 4px", textTransform: "uppercase" }}>Column / VStack — renders everything upfront</p>
          <p style={{ fontSize: 11, color: "#b91c1c", margin: "0 0 8px" }}>Compose: Column &nbsp;·&nbsp; SwiftUI: VStack (inside ScrollView)</p>
          <Bullet>Creates ALL child views immediately, even off-screen ones</Bullet>
          <Bullet>Fine for small, fixed layouts — profile cards, forms, settings</Bullet>
          <Bullet>With 1000 items: slow startup, high memory usage, janky scroll</Bullet>
          <Bullet sub>Think: printing the whole book before you open it</Bullet>
          <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "8px 10px", marginTop: 8 }}>
            <pre style={{ margin: 0, color: "#fca5a5", fontSize: 10, fontFamily: "monospace" }}>{`// Compose — DON'T do this for data lists:
Column {
    items.forEach { item ->
        ItemRow(item)  // ALL 1000 created at once
    }
}

// SwiftUI — same problem with ScrollView+VStack:
ScrollView {
    VStack {
        ForEach(items) { item in
            ItemRow(item: item)  // ALL created at once
        }
    }
}`}</pre>
          </div>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 4px", textTransform: "uppercase" }}>LazyColumn / List — renders only what is visible</p>
          <p style={{ fontSize: 11, color: TEAL, margin: "0 0 8px" }}>Compose: LazyColumn &nbsp;·&nbsp; SwiftUI: List (lazy by default)</p>
          <Bullet>Creates only the views currently visible on screen</Bullet>
          <Bullet>As you scroll, new rows are created and old ones recycled</Bullet>
          <Bullet>With 1000 items: fast startup, low memory, smooth scroll</Bullet>
          <Bullet sub>Think: printing each page just before you read it</Bullet>
          <div style={{ background: "#1e1e2e", borderRadius: 6, padding: "8px 10px", marginTop: 8 }}>
            <pre style={{ margin: 0, color: "#9FE1CB", fontSize: 10, fontFamily: "monospace" }}>{`// Compose — DO this instead:
LazyColumn {
    items(items) { item ->
        ItemRow(item)  // Only visible ones created
    }
}

// SwiftUI — List is lazy by default:
List(items) { item in
    ItemRow(item: item)  // Only visible ones created
}`}</pre>
          </div>
        </div>
      </div>
      <Info>{"Rule of thumb: if the number of items could ever grow beyond what fits on one screen, use LazyColumn (Compose) or List (SwiftUI). For fixed, small layouts, Column / VStack is fine."}</Info>
    </Shell>
  ),

  // 7: LazyColumn anatomy
  () => (
    <Shell tag="Lists" title="LazyColumn / List anatomy — understanding items()" notes="Walk through each part of both APIs in parallel. The key concept: items() in Compose and List(_:) in SwiftUI both describe what to render per item — they are conceptually identical. The key/Identifiable mechanism is the same idea on both platforms: give each row a unique identity so the framework updates only what changed.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="LazyColumn — annotated (Compose)" accent={PURPLE}>
{`@Composable
fun AlbumListScreen() {
    LazyColumn(
        // Modifier for the whole list container
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5)),

        // Padding around the entire list
        // (not each item — that goes on the item itself)
        contentPadding = PaddingValues(16.dp),

        // Spacing between items
        verticalArrangement = Arrangement.spacedBy(4.dp)

    ) {
        // items() — the DSL for rendering a list of data
        items(
            items = sampleAlbums,   // the data list

            // key = unique ID for each item
            // Lets Compose update only changed rows
            key = { album -> album.id }

        ) { album ->
            // This lambda runs once per visible item
            // 'album' is the current item in the loop
            AlbumRow(album = album)
        }
    }
}`}
        </CodePane>
        <CodePane title="List — annotated (SwiftUI)" accent={TEAL}>
{`struct AlbumListScreen: View {
    var body: some View {
        // List = SwiftUI's LazyColumn equivalent
        // It is lazy by default — no "Lazy" prefix needed
        List(
            sampleAlbums
            // SwiftUI uses the Identifiable protocol
            // to identify each row (see Album.swift below)
        ) { album in
            // This closure runs once per visible item
            // 'album' is the current item
            AlbumRow(album: album)
        }
        // .plain removes the default grouped background
        .listStyle(.plain)
        // Per-item spacing:
        .listRowSpacing(4)
        // Background color for the whole list:
        .scrollContentBackground(.hidden)
        .background(Color(UIColor.systemGray6))
    }
}

// Album.swift — Identifiable protocol:
struct Album: Identifiable {
    let id: Int     // 'id' required by Identifiable
    // SwiftUI uses this to track rows — same as
    // Compose's key parameter
    let title: String
    let artist: String
    // ...
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 8: key vs Identifiable
  () => (
    <Shell tag="Lists" title="Keys and Identifiable — why unique IDs matter" notes="This is an important concept that students often skip over. The analogy: imagine a classroom register. If two students have the same name, the teacher cannot tell them apart. Keys/Identifiable are the same — they give each row a unique identity so the framework knows which row changed and can update only that one instead of redrawing the whole list.">
      <Discussion>{"If you have a list of 100 albums and you change the rating of album number 50, how should the framework know to only update that one row and leave the other 99 alone?"}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
        <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 8px" }}>Compose — key parameter</p>
          <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "10px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`items(
    items = sampleAlbums,
    key = { album -> album.id }
    // album.id is unique per album
    // Compose uses it to track which row is which
) { album ->
    AlbumRow(album = album)
}

// Without key: Compose redraws ALL rows on any change
// With key: Compose only redraws the changed row`}</pre>
        </div>
        <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL, margin: "0 0 8px" }}>SwiftUI — Identifiable protocol</p>
          <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "10px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`// Making Album Identifiable:
struct Album: Identifiable {
    let id: Int   // must have an 'id' field
    // ...
}

// Then List uses id automatically:
List(sampleAlbums) { album in
    AlbumRow(album: album)
}
// SwiftUI uses album.id to track each row
// Same concept as Compose's key parameter

// Alternative — id: \\.someField — if you can't
// add Identifiable conformance:
List(sampleAlbums, id: \\.id) { album in
    AlbumRow(album: album)
}`}</pre>
        </div>
      </div>
      <Warn title="What happens without a key/Identifiable?">{"Without unique keys, the framework cannot tell rows apart. This causes bugs: wrong rows updating, animations glitching, or scroll position jumping. Always provide a key in Compose and Identifiable in SwiftUI."}</Warn>
    </Shell>
  ),

  // 9: Building a custom row
  () => (
    <Shell tag="Custom rows" timer="8" title="Custom row layouts — beyond plain Text" subtitle="Rows are just Composables / Views — you can put anything in them" notes="This is where students start to see real app UI. The key insight: a row is just a regular Composable or View. Everything they learned about layout in Week 1 applies inside a row. Row/HStack for horizontal layout, Column/VStack for vertical, Box/ZStack for overlay.">
      <Discussion>{"Look at a row in the Spotify app — it has an album cover, a song title, an artist name, a duration, and a more button. What layout containers would you use to build that? Sketch it in your head before we look at code."}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Anatomy of a row</p>
          {[
            { part: "Outer container", desc: "Row / HStack — puts avatar and content side by side" },
            { part: "Avatar", desc: "Box+CircleShape / Circle overlay — letter or image" },
            { part: "Content column", desc: "Column / VStack inside the Row — title above, subtitle below" },
            { part: "Trailing element", desc: "Rating badge — pushed right with weight(1f) / Spacer()" },
            { part: "Row background", desc: "White card with rounded corners on the outer container" },
          ].map(r => (
            <div key={r.part} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "flex-start" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: 4, fontSize: 10, fontWeight: 700, padding: "1px 5px", flexShrink: 0, marginTop: 2 }}>{r.part.split(" ")[0]}</span>
              <div>
                <span style={{ fontSize: 12, fontWeight: 600, color: TEXT }}>{r.part}</span>
                <span style={{ fontSize: 12, color: MUTED }}> — {r.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: GRAY, borderRadius: 10, padding: 14 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: ".04em" }}>What we are building</p>
          {sampleAlbums.slice(0, 3).map(a => <AlbumRowPreview key={a.id} album={a} />)}
        </div>
      </div>
    </Shell>
  ),

  // 10: AlbumRow code
  () => (
    <Shell tag="Custom rows" title="Building AlbumRow — the code" notes="Walk through each section of the row in both platforms in parallel. Point out how weight(1f) / Spacer() pushes the rating to the right edge — this is the same layout intent expressed differently in each framework. Compose uses weight to consume remaining space; SwiftUI uses an explicit Spacer view.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="AlbumRow — Compose" accent={PURPLE}>
{`@Composable
fun AlbumRow(album: Album, onClick: () -> Unit = {}) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() }
            .background(Color.White, RoundedCornerShape(12.dp))
            .padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        // Avatar circle
        Box(
            modifier = Modifier
                .size(52.dp)
                .background(Color(0xFF534AB7), CircleShape),
            contentAlignment = Alignment.Center
        ) {
            Text(album.artist.first().toString(),
                color = Color.White, fontSize = 22.sp,
                fontWeight = FontWeight.Bold)
        }

        // Content — weight(1f) fills remaining space,
        // pushing the rating to the far right
        Column(modifier = Modifier.weight(1f)) {
            Text(album.title, fontSize = 15.sp,
                fontWeight = FontWeight.Bold)
            Text(album.artist, fontSize = 13.sp,
                color = Color.Gray)
            Row(horizontalArrangement = Arrangement.spacedBy(6.dp),
                verticalAlignment = Alignment.CenterVertically) {
                Text(album.genre, fontSize = 11.sp,
                    color = Color(0xFF534AB7),
                    modifier = Modifier
                        .background(Color(0xFFEEEDFE),
                            RoundedCornerShape(20.dp))
                        .padding(horizontal=8.dp, vertical=2.dp))
                Text(album.year.toString(), fontSize=11.sp,
                    color=Color.Gray)
            }
        }

        // Rating — at the far right
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text("★", fontSize = 18.sp, color = Color(0xFFEF9F27))
            Text(album.rating.toString(), fontSize=11.sp,
                color=Color.Gray)
        }
    }
}`}
        </CodePane>
        <CodePane title="AlbumRow — SwiftUI" accent={TEAL}>
{`struct AlbumRow: View {
    let album: Album

    var body: some View {
        HStack(spacing: 12) {
            // Avatar circle — Circle with letter overlay
            Circle()
                .fill(Color(red:0.33,green:0.29,blue:0.72))
                .frame(width:52,height:52)
                .overlay(
                    Text(String(album.artist.prefix(1)))
                        .font(.title2).fontWeight(.bold)
                        .foregroundColor(.white)
                )

            // Content — natural width
            VStack(alignment:.leading, spacing:2) {
                Text(album.title)
                    .font(.subheadline).fontWeight(.bold)
                Text(album.artist)
                    .font(.caption).foregroundColor(.gray)
                HStack(spacing:6) {
                    Text(album.genre)
                        .font(.caption2)
                        .foregroundColor(
                            Color(red:0.33,green:0.29,blue:0.72))
                        .padding(.horizontal,8).padding(.vertical,2)
                        .background(Color(red:0.93,green:0.93,blue:1.0))
                        .cornerRadius(20)
                    Text(String(album.year))
                        .font(.caption2).foregroundColor(.gray)
                }
            }

            Spacer()  // fills remaining space,
                      // pushing rating to the far right

            // Rating — at the far right
            VStack(spacing:2) {
                Text("★")
                    .foregroundColor(
                        Color(red:0.94,green:0.62,blue:0.15))
                Text(String(album.rating))
                    .font(.caption2).foregroundColor(.gray)
            }
        }
        .padding(12)
        .background(Color.white)
        .cornerRadius(12)
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 11: weight vs Spacer
  () => (
    <Shell tag="Layout" title="weight(1f) and Spacer() — pushing things to the edges" subtitle="One of the most used layout patterns in mobile" notes="This pattern appears everywhere — navigation bars, list rows, form fields. Weight fills all available space in a Row/HStack, pushing everything after it to the far edge. Spacer() in a HStack/Row does the same thing. Show this live by adding and removing the modifier and watching the layout shift.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 8px" }}>Compose — weight modifier</p>
          <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: 8, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`Row(modifier = Modifier.fillMaxWidth()) {
    // Avatar — fixed size
    AvatarCircle()

    // Content — weight(1f) consumes
    // all remaining horizontal space
    Column(modifier = Modifier.weight(1f)) {
        Text("Title")
        Text("Subtitle")
    }

    // Rating — pushed to far right
    // because weight(1f) consumed the space
    RatingBadge()
}`}</pre>
          <div style={{ display: "flex", gap: 6, alignItems: "center", background: "#fff", borderRadius: 8, padding: "8px 12px", marginTop: 8 }}>
            <div style={{ width: 36, height: 36, background: PURPLE, borderRadius: "50%", flexShrink: 0 }} />
            <div style={{ flex: 1, background: PURPLE_LIGHT, height: 24, borderRadius: 4 }} />
            <div style={{ width: 28, height: 36, background: GRAY, borderRadius: 4, flexShrink: 0 }} />
          </div>
          <p style={{ fontSize: 11, color: MUTED, margin: "4px 0 0", textAlign: "center" }}>Avatar — content fills space — rating</p>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL, margin: "0 0 8px" }}>SwiftUI — Spacer()</p>
          <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: 8, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`HStack(spacing: 12) {
    // Avatar — fixed size
    AvatarCircle()

    // Content — natural size
    VStack(alignment: .leading) {
        Text("Title")
        Text("Subtitle")
    }

    Spacer()  // explicit view that expands
              // to fill remaining space,
              // pushing rating to the far right

    // Rating — at the far right edge
    RatingBadge()
}`}</pre>
          <div style={{ display: "flex", gap: 6, alignItems: "center", background: "#fff", borderRadius: 8, padding: "8px 12px", marginTop: 8 }}>
            <div style={{ width: 36, height: 36, background: TEAL, borderRadius: "50%", flexShrink: 0 }} />
            <div style={{ flex: 1, background: TEAL_LIGHT, height: 24, borderRadius: 4 }} />
            <div style={{ width: 28, height: 36, background: GRAY, borderRadius: 4, flexShrink: 0 }} />
          </div>
          <p style={{ fontSize: 11, color: MUTED, margin: "4px 0 0", textAlign: "center" }}>Avatar — content — spacer — rating</p>
        </div>
      </div>
    </Shell>
  ),

  // 12: List performance tips
  () => (
    <Shell tag="Performance" timer="5" title="List performance — what to know early" notes="Keep this brief. Students do not need to be performance experts in Week 3. The two things worth knowing now: always provide keys, and avoid doing expensive work inside the row composable/view. Everything else they will learn when they actually hit a performance problem.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>Good practices</p>
          <Bullet>Always provide a key (Compose) or Identifiable (SwiftUI)</Bullet>
          <Bullet>Keep row content simple — heavy computation slows scrolling</Bullet>
          <Bullet>Use LazyColumn/List even for medium-sized lists — be consistent</Bullet>
          <Bullet>Compose: use contentPadding on LazyColumn, not padding on a wrapper</Bullet>
          <Bullet sub>contentPadding preserves scroll insets correctly</Bullet>
          <Bullet>SwiftUI: use .listRowInsets() on each row for per-item padding</Bullet>
        </div>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px" }}>Common mistakes</p>
          <Bullet>Using Column / ScrollView+VStack instead of LazyColumn / List</Bullet>
          <Bullet>Forgetting the key parameter / Identifiable — causes subtle update bugs</Bullet>
          <Bullet>Doing network requests or heavy computation inside items() / List rows</Bullet>
          <Bullet>Using index as the key — if items reorder, indices change</Bullet>
          <Bullet sub>Always use a stable unique ID like album.id, not the list index</Bullet>
        </div>
      </div>
      <Info>{"Right now your data is hardcoded — performance is not a concern. But when you connect a real API in Week 4, these practices become important. Build the habit now."}</Info>
    </Shell>
  ),

  // 13: Live code-along intro
  () => (
    <Shell tag="Live code-along" timer="18" title="Let us build together — the album browser" subtitle="New project: AlbumBrowser. Open your IDE." dark notes="Build from scratch. Define the Album data class/struct first, then a basic list with plain Text rows, then replace with the styled AlbumRow. This progression is important — students see the before (ugly but working) and after (styled). The visual transformation from plain text to styled cards is satisfying and memorable.">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>What we are building today</p>
          {[
            { n: 1, t: "New project — AlbumBrowser (Android + iOS)" },
            { n: 2, t: "Album data class / struct + sampleAlbums list" },
            { n: 3, t: "Basic LazyColumn / List with plain Text rows" },
            { n: 4, t: "AlbumRow — avatar, title, artist, genre badge, rating" },
            { n: 5, t: "Replace plain Text with AlbumRow in the list" },
            { n: 6, t: "Add background color and contentPadding / listStyle" },
            { n: 7, t: "Extract AlbumRow as a separate Composable / View" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "center" }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 12 }}>
          {sampleAlbums.slice(0, 3).map(a => (
            <div key={a.id} style={{ display: "flex", gap: 10, alignItems: "center", padding: "8px 10px", background: "rgba(255,255,255,0.06)", borderRadius: 8, marginBottom: 4 }}>
              <div style={{ width: 36, height: 36, background: TEAL, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{a.artist[0]}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: "#fff", margin: 0 }}>{a.title}</p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", margin: 0 }}>{a.artist}</p>
              </div>
              <p style={{ fontSize: 12, color: "#EF9F27", margin: 0 }}>★</p>
            </div>
          ))}
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", textAlign: "center", margin: "6px 0 0" }}>+ 5 more albums</p>
        </div>
      </div>
    </Shell>
  ),

  // 14: Code-along part 1
  () => (
    <Shell tag="Live code-along" title="Part 1 — data model and basic list" notes="Type the data class/struct first, then the basic list with plain Text. Run it — students should see a plain scrollable list of album titles. Point out that it scrolls — even with plain Text, LazyColumn/List handles scrolling automatically. This is the foundation we build on.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Steps 1-3: Album model + basic list (Compose)" accent={PURPLE}>
{`// Album.kt
data class Album(
    val id: Int,
    val title: String,
    val artist: String,
    val year: Int,
    val genre: String,
    val tracks: Int,
    val rating: Double
)

val sampleAlbums = listOf(
    Album(1,"Rumours","Fleetwood Mac",1977,"Rock",11,4.9),
    Album(2,"Kind of Blue","Miles Davis",1959,"Jazz",5,4.8),
    Album(3,"Purple Rain","Prince",1984,"Pop",9,4.7),
    Album(4,"Thriller","Michael Jackson",1982,"Pop",9,4.8),
    Album(5,"Blue","Joni Mitchell",1971,"Folk",10,4.7),
    Album(6,"OK Computer","Radiohead",1997,"Rock",12,4.8),
    Album(7,"What's Going On","Marvin Gaye",1971,"Soul",9,4.9),
    Album(8,"Abbey Road","The Beatles",1969,"Rock",17,4.9)
)

// Basic list — plain Text for now
@Composable
fun AlbumListScreen() {
    LazyColumn(
        modifier = Modifier.fillMaxSize(),
        contentPadding = PaddingValues(16.dp)
    ) {
        items(sampleAlbums, key = { it.id }) { album ->
            Text(text = album.title)  // plain for now
        }
    }
}
// Run this first — confirm scrolling works before styling`}
        </CodePane>
        <CodePane title="Steps 1-3: Album model + basic list (SwiftUI)" accent={TEAL}>
{`// Album.swift
struct Album: Identifiable {
    let id: Int
    let title: String
    let artist: String
    let year: Int
    let genre: String
    let tracks: Int
    let rating: Double
}

let sampleAlbums: [Album] = [
    Album(id:1,title:"Rumours",artist:"Fleetwood Mac",
          year:1977,genre:"Rock",tracks:11,rating:4.9),
    Album(id:2,title:"Kind of Blue",artist:"Miles Davis",
          year:1959,genre:"Jazz",tracks:5,rating:4.8),
    Album(id:3,title:"Purple Rain",artist:"Prince",
          year:1984,genre:"Pop",tracks:9,rating:4.7),
    Album(id:4,title:"Thriller",artist:"Michael Jackson",
          year:1982,genre:"Pop",tracks:9,rating:4.8),
    Album(id:5,title:"Blue",artist:"Joni Mitchell",
          year:1971,genre:"Folk",tracks:10,rating:4.7),
    Album(id:6,title:"OK Computer",artist:"Radiohead",
          year:1997,genre:"Rock",tracks:12,rating:4.8),
    Album(id:7,title:"What's Going On",artist:"Marvin Gaye",
          year:1971,genre:"Soul",tracks:9,rating:4.9),
    Album(id:8,title:"Abbey Road",artist:"The Beatles",
          year:1969,genre:"Rock",tracks:17,rating:4.9),
]

// Basic list — plain Text for now
struct AlbumListScreen: View {
    var body: some View {
        List(sampleAlbums) { album in
            Text(album.title)  // plain for now
        }
        .listStyle(.plain)
    }
}
// Run this first — confirm the list scrolls`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 15: Code-along part 2
  () => (
    <Shell tag="Live code-along" title="Part 2 — building and connecting AlbumRow" notes="Now replace the plain Text with the styled row. Build AlbumRow as a separate component first, then plug it into the list. Remind students this is the same component extraction pattern from Week 1. Also call out the Compose vs SwiftUI differences: background modifier vs .background() view modifier, CircleShape vs Circle(), weight(1f) vs Spacer().">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Steps 4-7: AlbumRow + styled list (Compose)" accent={PURPLE}>
{`@Composable
fun AlbumRow(album: Album) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(Color.White, RoundedCornerShape(12.dp))
            .padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        Box(
            modifier = Modifier
                .size(52.dp)
                .background(Color(0xFF534AB7), CircleShape),
            contentAlignment = Alignment.Center
        ) {
            Text(album.artist.first().toString(),
                color = Color.White, fontSize = 22.sp,
                fontWeight = FontWeight.Bold)
        }
        Column(modifier = Modifier.weight(1f)) {
            Text(album.title, fontSize = 15.sp,
                fontWeight = FontWeight.Bold)
            Text(album.artist, fontSize = 13.sp,
                color = Color.Gray)
            Spacer(Modifier.height(4.dp))
            Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                Text(album.genre, fontSize = 11.sp,
                    color = Color(0xFF534AB7),
                    modifier = Modifier
                        .background(Color(0xFFEEEDFE),
                            RoundedCornerShape(20.dp))
                        .padding(horizontal=8.dp, vertical=2.dp))
                Text(album.year.toString(), fontSize=11.sp,
                    color=Color.Gray)
            }
        }
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text("★", fontSize = 18.sp, color = Color(0xFFEF9F27))
            Text(album.rating.toString(), fontSize=11.sp,
                color=Color.Gray)
        }
    }
}

@Composable
fun AlbumListScreen() {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5)),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        items(sampleAlbums, key = { it.id }) { album ->
            AlbumRow(album = album)  // styled row
        }
    }
}`}
        </CodePane>
        <CodePane title="Steps 4-7: AlbumRow + styled list (SwiftUI)" accent={TEAL}>
{`struct AlbumRow: View {
    let album: Album

    var body: some View {
        HStack(spacing: 12) {
            Circle()
                .fill(Color(red:0.33,green:0.29,blue:0.72))
                .frame(width:52,height:52)
                .overlay(
                    Text(String(album.artist.prefix(1)))
                        .font(.title2).fontWeight(.bold)
                        .foregroundColor(.white)
                )
            VStack(alignment:.leading, spacing:2) {
                Text(album.title)
                    .font(.subheadline).fontWeight(.bold)
                Text(album.artist)
                    .font(.caption).foregroundColor(.gray)
                HStack(spacing:6) {
                    Text(album.genre)
                        .font(.caption2)
                        .foregroundColor(
                            Color(red:0.33,green:0.29,blue:0.72))
                        .padding(.horizontal,8).padding(.vertical,2)
                        .background(
                            Color(red:0.93,green:0.93,blue:1.0))
                        .cornerRadius(20)
                    Text(String(album.year))
                        .font(.caption2).foregroundColor(.gray)
                }
            }
            Spacer()
            VStack(spacing:2) {
                Text("★")
                    .foregroundColor(
                        Color(red:0.94,green:0.62,blue:0.15))
                Text(String(album.rating))
                    .font(.caption2).foregroundColor(.gray)
            }
        }
        .padding(12)
        .background(Color.white)
        .cornerRadius(12)
        // Remove default List row separators and insets:
        .listRowSeparator(.hidden)
        .listRowInsets(EdgeInsets(
            top:4, leading:16, bottom:0, trailing:16))
        .listRowBackground(Color(UIColor.systemGray6))
    }
}

struct AlbumListScreen: View {
    var body: some View {
        List(sampleAlbums) { album in
            AlbumRow(album: album)  // styled row
        }
        .listStyle(.plain)
        .scrollContentBackground(.hidden)
        .background(Color(UIColor.systemGray6))
    }
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // 16: Week 4 teaser
  () => (
    <Shell tag="Week 4 teaser" timer="4" title="Where does the hardcoded data go?" subtitle="A glimpse at what is coming next week" notes="Keep this to 3-4 minutes. The goal is not to teach networking — it is to show students that the list screen they just built barely needs to change when real data arrives. The data source swaps out; the list and row stay the same. This is one of the benefits of clean component design.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Right now sampleAlbums is a hardcoded Kotlin list or Swift array. In Week 4 you will replace it with a real API call.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Today — hardcoded</p>
          <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "10px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`// Compose
val sampleAlbums = listOf(
    Album(1, "Rumours", ...),
    Album(2, "Kind of Blue", ...),
)
LazyColumn {
    items(sampleAlbums) { album ->
        AlbumRow(album)
    }
}

// SwiftUI
let sampleAlbums: [Album] = [
    Album(id:1, title:"Rumours", ...),
    Album(id:2, title:"Kind of Blue", ...),
]
List(sampleAlbums) { album in
    AlbumRow(album: album)
}`}</pre>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>Week 4 — from a real API</p>
          <pre style={{ margin: 0, background: "#1e1e2e", color: "#9FE1CB", fontSize: 10, padding: "10px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`// Compose
var albums by remember { mutableStateOf(emptyList()) }
LaunchedEffect(Unit) {
    albums = api.getAlbums()  // Week 4!
}
LazyColumn {
    items(albums) { album ->
        AlbumRow(album)  // unchanged!
    }
}

// SwiftUI
@State var albums: [Album] = []
List(albums) { album in
    AlbumRow(album: album)  // unchanged!
}
.task {
    albums = await api.getAlbums()  // Week 4!
}`}</pre>
          <p style={{ fontSize: 11, color: TEAL, margin: "8px 0 0" }}>AlbumRow and the list screen stay exactly the same. Only the data source changes.</p>
        </div>
      </div>
      <Info>{"This is why clean component design matters. AlbumRow just takes an Album and renders it — it does not care where the data came from. Swapping the source in Week 4 is trivial."}</Info>
    </Shell>
  ),

  // 17: Lab intro
  () => (
    <Shell tag="Lab intro" timer="5" title="Lab time — building the album browser" subtitle="Go to the Lab tab on the course site — Session 1 Lab." notes="Remind students to start the emulator / simulator now. Also remind Android students to add the Navigation Compose dependency — they will need it in Session 2 and it is annoying to add mid-lab.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Lab steps — Session 1</p>
          {[
            { n: 0, t: "New project — AlbumBrowser", time: "3 min" },
            { n: 1, t: "Album data model + sampleAlbums list", time: "8 min" },
            { n: 2, t: "Basic LazyColumn / List with plain Text", time: "8 min" },
            { n: 3, t: "AlbumRow — custom row layout", time: "15 min" },
            { n: 4, t: "Ask Claude to translate + compare lists", time: "8 min" },
            { n: 5, t: "Reflection — 3 questions", time: "5 min" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "4px 0", alignItems: "center" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: 4, fontSize: 10, fontWeight: 700, padding: "1px 5px", flexShrink: 0 }}>Step {s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, flex: 1 }}>{s.t}</span>
              <span style={{ fontSize: 11, color: MUTED, flexShrink: 0 }}>{s.time}</span>
            </div>
          ))}
        </div>
        <div style={{ background: GRAY, borderRadius: 10, padding: 14 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Before you leave, show a TA</p>
          {[
            "Scrollable album list with all 8 albums",
            "Styled AlbumRow with avatar, title, artist, genre, rating",
            "Both platform versions (Android + iOS) working",
            "Reflection comment block complete",
          ].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 10, background: PURPLE_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0 }}>Android students: add the Navigation Compose dependency now — you will need it in Session 2.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 18: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Questions before lab?</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Open your IDE — the album browser is waiting</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned today</p>
            {[
              "Why LazyColumn / List exists — lazy loading",
              "items() and keys — how rows are identified",
              "Identifiable protocol in SwiftUI vs key in Compose",
              "Custom row layouts: Row+Column / HStack+VStack",
              "weight(1f) vs Spacer() for edge-to-edge layouts",
              "Extracting rows as reusable Composables / Views",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Session 2</p>
            {[
              "Search bar — filtering the list in real time",
              "Empty state — what to show when nothing matches",
              "Tapping a row — combining lists with Week 2 navigation",
              "Building the album detail screen",
              "The full list-to-detail pattern",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>{"Send students to lab with energy. The styled album list they build today is the most visually satisfying thing they have made so far — it genuinely looks like a real app. That feeling is important for motivation heading into the second half of the course."}</Notes>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 3 · Session 1 · {slides.length} slides</p>
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
