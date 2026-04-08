import { useState } from "react";

const TABS = ["Overview", "Lab", "Project", "Resources"];

const albums = [
  { id: 1, title: "Rumours", artist: "Fleetwood Mac", year: 1977, genre: "Rock", tracks: 11, rating: 4.9 },
  { id: 2, title: "Kind of Blue", artist: "Miles Davis", year: 1959, genre: "Jazz", tracks: 5, rating: 4.8 },
  { id: 3, title: "Purple Rain", artist: "Prince", year: 1984, genre: "Pop", tracks: 9, rating: 4.7 },
  { id: 4, title: "Thriller", artist: "Michael Jackson", year: 1982, genre: "Pop", tracks: 9, rating: 4.8 },
  { id: 5, title: "Blue", artist: "Joni Mitchell", year: 1971, genre: "Folk", tracks: 10, rating: 4.7 },
];

const PLATFORMS = ["Android", "iOS"];

/* -- colors -- */
const P_C = "#534AB7";
const BL = "#7F52FF", BLL = "#F0EEFF";
const GR = "#F05138", GRL = "#FFF2F0";

/* -- shared components -- */
const Section = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ margin: "14px 0", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--color-background-secondary)", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>
        {title}<span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div style={{ padding: "12px 14px", fontSize: 13, lineHeight: 1.7, color: "var(--color-text-primary)" }}>{children}</div>}
    </div>
  );
};

const CodeB = ({ title, accent, children }: { title?: string; accent?: string; children: React.ReactNode }) => (
  <div style={{ margin: "10px 0" }}>
    {title && <div style={{ background: accent || P_C, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0" }}>{title}</div>}
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11.5, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Checkpoint = ({ num, children }: { num: number | string; children: React.ReactNode }) => (
  <div className="callout-checkpoint" style={{ margin: "14px 0", padding: "10px 14px", background: "#E8FCE8", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <strong>{"🎯"} Checkpoint {num}:</strong> {children}
  </div>
);

const AiOpp = ({ children }: { children: React.ReactNode }) => (
  <div className="callout-ai" style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>{"✨"} AI Opportunity</div>
    {children}
  </div>
);

const Warn = ({ children }: { children: React.ReactNode }) => (
  <div className="callout-warn" style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E6", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #EF9F27" }}>
    {"⚠️"} {children}
  </div>
);

const Tip = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>
    {"💡"} {children}
  </div>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="callout-note" style={{ margin: "12px 0", padding: "10px 14px", background: "#E6F1FB", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #B5D4F4" }}>
    {"ℹ️"} {children}
  </div>
);

const Step = ({ num, title, children }: { num: number | string; title: string; children: React.ReactNode }) => (
  <div style={{ margin: "18px 0" }}>
    <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--platform-accent, var(--color-text-primary))", margin: "0 0 8px" }}>Step {num}: {title}</h4>
    <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
  </div>
);

const IC = ({ children }: { children: React.ReactNode }) => (
  <code style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 4, padding: "1px 5px", fontSize: 12 }}>{children}</code>
);

const Checkbox = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "6px 0", fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.5 }}>
    <div style={{ width: 14, height: 14, border: "1.5px solid var(--color-border-secondary)", borderRadius: 3, flexShrink: 0, marginTop: 2 }} />
    <span>{children}</span>
  </div>
);

const UL = ({ items }: { items: React.ReactNode[] }) => (
  <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2, paddingLeft: 20 }}>
    {items.map((t, i) => <li key={i}>{t}</li>)}
  </ul>
);

const PlatformToggle = ({ platform, setPlatform }: { platform: string; setPlatform: (p: string) => void }) => (
  <div style={{ display: "flex", gap: 0, margin: "12px 0", borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
    {PLATFORMS.map(p => (
      <button key={p} onClick={() => setPlatform(p)} style={{
        padding: "6px 18px", fontSize: 12, fontWeight: 500, border: "none", cursor: "pointer",
        background: platform === p ? (p === "Android" ? BLL : GRL) : "var(--color-background-primary)",
        color: platform === p ? (p === "Android" ? BL : GR) : "var(--color-text-secondary)"
      }}>{p === "Android" ? "🤖 Android" : "🍎 iOS"}</button>
    ))}
  </div>
);

function Overview() {
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 12px", color: "var(--color-text-primary)" }}>Unit 3: Lists, scrolling and the detail screen pattern</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Almost every real app has a list — a feed, a catalogue, an inbox, a search results page. This week you learn how to build them properly. By the end of Week 3 you will have a scrollable, searchable list that navigates to a detail screen when a row is tapped. That pattern is the backbone of most apps you use every day.</p>
      <div style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 16px", margin: "12px 0" }}>
        <p style={{ color: "var(--color-text-primary)", margin: 0 }}>This week deliberately reuses navigation from Week 2 without re-teaching it. If tapping a row and navigating to a detail screen feels familiar — good. That is the point. Week 3 is about lists; Week 2 is about navigation. Together they make something that feels like a real app.</p>
      </div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>What you will learn</h2>
      <UL items={[
        "LazyColumn (Compose) and List (SwiftUI) — efficient scrolling lists",
        "How lazy loading works and why it matters for performance",
        "Building a custom row layout for each item",
        "Filtering a list in real time based on a search query",
        "Handling empty states gracefully",
        "Tapping a row to navigate to a detail screen — combining Weeks 2 and 3",
      ]} />
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>This unit at a glance</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "8px 0" }}>
        {[
          { label: "Session 1", val: "LazyColumn / List basics and custom row layouts. Lab: build the album browser list screen." },
          { label: "Session 2", val: "Search, filter, empty states, and tapping a row to navigate to a detail screen." },
          { label: "Lab (each session)", val: "Build the album browser in one platform, use Claude to translate to the other, then compare list patterns." },
          { label: "Assignment 3", val: "Guided starter — same album browser structure, your own content and theme." },
        ].map(item => (
          <div key={item.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
          </div>
        ))}
      </div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Upcoming due dates</h2>
      <UL items={[
        "Assignment 3 (browse app) — due before Week 4 Session 1",
      ]} />
      <Warn>Assignment 2 is due before this week starts. Submit it before coming to Session 1.</Warn>
      <Note>Do not forget to fill out the Session Survey at the end of each class session.</Note>
    </div>
  );
}

function Session1Lab({ platform: _platform }: { platform: string }) {
  return (
    <div style={{ '--platform-accent': _platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 1 Lab: Album Browser — The List Screen</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>You are going to build the main screen of a music album browser — a scrollable list of albums, each displayed as a custom row card. No search or navigation yet — that is Session 2. Budget about 50-60 minutes.</p>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Goals</h2>
      <UL items={[
        "Define an Album data model with multiple fields",
        "Build a LazyColumn (Compose) or List (SwiftUI) that renders a list of albums",
        "Design a custom row layout for each album",
        "Understand how lazy loading differs from a regular Column",
        "Use Claude to translate your list implementation to the other platform",
      ]} />

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Lab instructions</h2>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 0: Set up your project (~3 min)</h4>
      <Checkbox>Create a new project called AlbumBrowser</Checkbox>
      <Tip>Add the Navigation Compose dependency to your build.gradle now — you will need it in Session 2: <IC>implementation("androidx.navigation:navigation-compose:2.7.0")</IC></Tip>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 1: Create the Album data model (~8 min)</h4>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Define what an album looks like as a data structure, then create a hardcoded list of sample albums.</p>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For Android — create <IC>Album.kt</IC>:</p>
      <CodeB>{`data class Album(
    val id: Int,
    val title: String,
    val artist: String,
    val year: Int,
    val genre: String,
    val tracks: Int,
    val rating: Double
)

val sampleAlbums = listOf(
    Album(1, "Rumours", "Fleetwood Mac", 1977, "Rock", 11, 4.9),
    Album(2, "Kind of Blue", "Miles Davis", 1959, "Jazz", 5, 4.8),
    Album(3, "Purple Rain", "Prince", 1984, "Pop", 9, 4.7),
    Album(4, "Thriller", "Michael Jackson", 1982, "Pop", 9, 4.8),
    Album(5, "Blue", "Joni Mitchell", 1971, "Folk", 10, 4.7),
    Album(6, "OK Computer", "Radiohead", 1997, "Rock", 12, 4.8),
    Album(7, "What's Going On", "Marvin Gaye", 1971, "Soul", 9, 4.9),
    Album(8, "Abbey Road", "The Beatles", 1969, "Rock", 17, 4.9)
)`}</CodeB>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For iOS — create <IC>Album.swift</IC>:</p>
      <CodeB>{`struct Album: Identifiable {
    let id: Int
    let title: String
    let artist: String
    let year: Int
    let genre: String
    let tracks: Int
    let rating: Double
}

let sampleAlbums: [Album] = [
    Album(id: 1, title: "Rumours", artist: "Fleetwood Mac", year: 1977, genre: "Rock", tracks: 11, rating: 4.9),
    Album(id: 2, title: "Kind of Blue", artist: "Miles Davis", year: 1959, genre: "Jazz", tracks: 5, rating: 4.8),
    Album(id: 3, title: "Purple Rain", artist: "Prince", year: 1984, genre: "Pop", tracks: 9, rating: 4.7),
    Album(id: 4, title: "Thriller", artist: "Michael Jackson", year: 1982, genre: "Pop", tracks: 9, rating: 4.8),
    Album(id: 5, title: "Blue", artist: "Joni Mitchell", year: 1971, genre: "Folk", tracks: 10, rating: 4.7),
    Album(id: 6, title: "OK Computer", artist: "Radiohead", year: 1997, genre: "Rock", tracks: 12, rating: 4.8),
    Album(id: 7, title: "What's Going On", artist: "Marvin Gaye", year: 1971, genre: "Soul", tracks: 9, rating: 4.9),
    Album(id: 8, title: "Abbey Road", artist: "The Beatles", year: 1969, genre: "Rock", tracks: 17, rating: 4.9)
]`}</CodeB>
      <Checkpoint num="1">The data model compiles with no errors. Note that the iOS version uses <IC>Identifiable</IC> — SwiftUI needs this to know how to uniquely identify each row in the list.</Checkpoint>
      <Tip><b>Why does the iOS struct need Identifiable?</b> SwiftUI's List needs a way to uniquely identify each item so it can efficiently update only the rows that changed. The Identifiable protocol requires an id field. Compose's LazyColumn uses the key parameter for the same purpose.</Tip>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 2: Build a basic list — no custom rows yet (~8 min)</h4>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Before styling the rows, get a plain list rendering first. Confirm the data is showing up before adding complexity.</p>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For Android (Compose):</p>
      <CodeB>{`@Composable
fun AlbumListScreen() {
    LazyColumn(
        modifier = Modifier.fillMaxSize(),
        contentPadding = PaddingValues(16.dp)
    ) {
        items(
            items = sampleAlbums,
            key = { album -> album.id }
        ) { album ->
            Text(text = album.title)
        }
    }
}`}</CodeB>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For iOS (SwiftUI):</p>
      <CodeB>{`struct AlbumListScreen: View {
    var body: some View {
        List(sampleAlbums) { album in
            Text(album.title)
        }
    }
}`}</CodeB>
      <Checkpoint num="2">Run the app. You should see a plain scrollable list of album titles. It is not pretty yet — we fix that in the next step.</Checkpoint>
      <Tip><b>LazyColumn vs Column — what is the difference?</b> A regular Column renders ALL its children at once, even if they are off screen. LazyColumn only renders the items currently visible on screen — as you scroll, it creates new rows and recycles old ones. For short lists it does not matter. For a list of 1000 items, Column would crash. Always use LazyColumn/List for scrollable lists of data.</Tip>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 3: Build a custom row layout (~15 min)</h4>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Replace the plain Text with a proper album row — artist initial avatar, title, artist name, year, genre badge, and star rating.</p>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For Android (Compose):</p>
      <CodeB>{`@Composable
fun AlbumRow(album: Album) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp)
            .background(Color.White, shape = RoundedCornerShape(12.dp))
            .padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        // Artist initial avatar
        Box(
            modifier = Modifier
                .size(52.dp)
                .background(Color(0xFF534AB7), CircleShape),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = album.artist.first().toString(),
                color = Color.White,
                fontSize = 22.sp,
                fontWeight = FontWeight.Bold
            )
        }

        // Album info
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = album.title,
                fontSize = 15.sp,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = album.artist,
                fontSize = 13.sp,
                color = Color.Gray
            )
            Spacer(modifier = Modifier.height(4.dp))
            Row(
                horizontalArrangement = Arrangement.spacedBy(6.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Genre badge
                Text(
                    text = album.genre,
                    fontSize = 11.sp,
                    color = Color(0xFF534AB7),
                    modifier = Modifier
                        .background(
                            Color(0xFFEEEDFE),
                            RoundedCornerShape(20.dp)
                        )
                        .padding(horizontal = 8.dp, vertical = 2.dp)
                )
                Text(
                    text = album.year.toString(),
                    fontSize = 11.sp,
                    color = Color.Gray
                )
            }
        }

        // Star rating
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(text = "★", fontSize = 18.sp, color = Color(0xFFEF9F27))
            Text(text = album.rating.toString(), fontSize = 11.sp, color = Color.Gray)
        }
    }
}

// Update AlbumListScreen to use AlbumRow:
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
            AlbumRow(album = album)
        }
    }
}`}</CodeB>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For iOS (SwiftUI):</p>
      <CodeB>{`struct AlbumRow: View {
    let album: Album

    var body: some View {
        HStack(spacing: 12) {
            // Artist initial avatar
            Circle()
                .fill(Color(red: 0.33, green: 0.29, blue: 0.72))
                .frame(width: 52, height: 52)
                .overlay(
                    Text(String(album.artist.prefix(1)))
                        .font(.title2).fontWeight(.bold)
                        .foregroundColor(.white)
                )

            // Album info
            VStack(alignment: .leading, spacing: 2) {
                Text(album.title)
                    .font(.subheadline).fontWeight(.bold)
                Text(album.artist)
                    .font(.caption).foregroundColor(.gray)
                HStack(spacing: 6) {
                    Text(album.genre)
                        .font(.caption2)
                        .foregroundColor(
                            Color(red: 0.33, green: 0.29, blue: 0.72)
                        )
                        .padding(.horizontal, 8).padding(.vertical, 2)
                        .background(Color(red: 0.93, green: 0.93, blue: 1.0))
                        .cornerRadius(20)
                    Text(String(album.year))
                        .font(.caption2).foregroundColor(.gray)
                }
            }
            Spacer()

            // Star rating
            VStack(spacing: 2) {
                Text("★")
                    .foregroundColor(Color(red: 0.94, green: 0.62, blue: 0.15))
                Text(String(album.rating))
                    .font(.caption2).foregroundColor(.gray)
            }
        }
        .padding(12)
        .background(Color.white)
        .cornerRadius(12)
    }
}

struct AlbumListScreen: View {
    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            List(sampleAlbums) { album in
                AlbumRow(album: album)
                    .listRowInsets(EdgeInsets(
                        top: 4, leading: 16,
                        bottom: 4, trailing: 16))
                    .listRowBackground(Color.clear)
                    .listRowSeparator(.hidden)
            }
            .listStyle(.plain)
        }
        .navigationTitle("Albums")
    }
}`}</CodeB>
      <Checkpoint num="3">Each album now has a proper row card with an avatar, title, artist, genre badge, year, and star rating. Scroll down — all 8 albums are there.</Checkpoint>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 4: Ask Claude to translate and compare (~8 min)</h4>
      <AiOpp>Paste your full list screen into Claude and use this prompt: "I built an album list screen using [LazyColumn / SwiftUI List]. Please translate it to [SwiftUI List / LazyColumn]. Then explain: what is the equivalent of LazyColumn's items() in SwiftUI, and what does Identifiable do in SwiftUI that Compose handles differently?"</AiOpp>
      <Checkbox>Received and read Claude's translation and explanation</Checkbox>
      <Checkbox>Both platform versions show the full styled album list</Checkbox>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 5: Reflect (~5 min)</h4>
      <CodeB>{`// Lab 5 Reflection (Week 3, Session 1)
// 1. In your own words: what is lazy loading and why does it matter?
// 2. What does the key parameter in LazyColumn / Identifiable in SwiftUI do?
// 3. What was the trickiest part of building the custom row layout?`}</CodeB>
      <Checkpoint num="?">Final checkpoint: Show a TA your styled scrollable album list and walk them through your reflection.</Checkpoint>
      <Note>Right now the albums are hardcoded in a Kotlin list or Swift array. In Week 4 you will replace this with a real API call — fetching albums from the internet. The list screen will not need to change much — just the data source.</Note>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Stretch features</h2>
      <Checkbox>Add a header above the list showing the total number of albums</Checkbox>
      <Checkbox>Add a tracks count to each row — shown as "11 tracks" in small gray text</Checkbox>
      <Checkbox>Sort the list alphabetically by title using sortedBy</Checkbox>
      <Checkbox>Color-code the avatar background by genre instead of always purple</Checkbox>
    </div>
  );
}

function Session2Lab({ platform: _platform }: { platform: string }) {
  const [query, setQuery] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState<typeof albums[0] | null>(null);

  const filtered = albums.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.artist.toLowerCase().includes(query.toLowerCase())
  );

  if (selectedAlbum) {
    return (
      <div style={{ '--platform-accent': _platform === "Android" ? BL : GR } as React.CSSProperties}>
        <button onClick={() => setSelectedAlbum(null)} style={{ background: "none", border: "none", color: "#534AB7", fontSize: 13, fontWeight: 500, cursor: "pointer", padding: "0 0 12px", display: "flex", alignItems: "center", gap: 4 }}>← Back to lab</button>
        <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Lab preview: Detail screen</h1>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: 20, marginTop: 8 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 16 }}>
            <div style={{ width: 64, height: 64, background: "#534AB7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 24, flexShrink: 0 }}>{selectedAlbum.artist[0]}</div>
            <div>
              <p style={{ fontSize: 18, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 2px" }}>{selectedAlbum.title}</p>
              <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>{selectedAlbum.artist}</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[["Year", selectedAlbum.year], ["Genre", selectedAlbum.genre], ["Tracks", selectedAlbum.tracks], ["Rating", `★ ${selectedAlbum.rating}`]].map(([k, v]) => (
              <div key={k} style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, color: "var(--color-text-tertiary)", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: ".04em" }}>{k}</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)", margin: 0 }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 2 Lab: Album Browser — Search, Filter and Detail Screen</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>In this lab you will add a search bar that filters the list in real time, handle the empty state when no results are found, and wire up row taps to navigate to an album detail screen. Budget about 50-60 minutes.</p>
      <p style={{ fontStyle: "italic" }}>Try the interactive preview below — it shows the search and detail features you are building today.</p>

      <div style={{ background: "var(--color-background-secondary)", borderRadius: 12, padding: 16, margin: "12px 0" }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search albums or artists..."
          style={{ width: "100%", padding: "8px 12px", borderRadius: 8, border: "0.5px solid var(--color-border-tertiary)", fontSize: 13, background: "var(--color-background-primary)", color: "var(--color-text-primary)", boxSizing: "border-box", marginBottom: 10 }}
        />
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <p style={{ fontSize: 28, margin: "0 0 6px" }}>🎵</p>
            <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)", margin: "0 0 4px" }}>No albums found</p>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0 }}>Try a different search term</p>
          </div>
        ) : (
          filtered.map(album => (
            <div key={album.id} onClick={() => setSelectedAlbum(album)} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 12px", background: "var(--color-background-primary)", borderRadius: 10, marginBottom: 6, cursor: "pointer" }}>
              <div style={{ width: 44, height: 44, background: "#534AB7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 18, flexShrink: 0 }}>{album.artist[0]}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 2px" }}>{album.title}</p>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0 }}>{album.artist} · {album.year}</p>
              </div>
              <span style={{ fontSize: 12, color: "#534AB7", background: "#EEEDFE", padding: "2px 8px", borderRadius: 20 }}>{album.genre}</span>
            </div>
          ))
        )}
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Goals</h2>
      <UL items={[
        "Add a search bar that filters the album list in real time",
        "Handle the empty state when no albums match the query",
        "Make rows tappable — navigate to an album detail screen",
        "Build the album detail screen using data passed from the list",
        "Combine everything: list + search + navigation in one app",
      ]} />

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Lab instructions</h2>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 0: Open AlbumBrowser from Session 1 (~2 min)</h4>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Make sure your styled album list from Session 1 is still working before adding anything new.</p>
      <Tip>If your Session 1 lab is not working, pair with someone who has it working before continuing. Everything today builds on it.</Tip>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 1: Add a search bar with real-time filtering (~12 min)</h4>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Add a state variable to hold the search query, a text field at the top of the screen, and filter the album list based on the query.</p>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For Android (Compose) — update AlbumListScreen:</p>
      <CodeB>{`@Composable
fun AlbumListScreen(onAlbumClicked: (Album) -> Unit = {}) {
    var query by remember { mutableStateOf("") }

    // Filter the list — recomputes whenever query changes
    val filteredAlbums = sampleAlbums.filter { album ->
        album.title.contains(query, ignoreCase = true) ||
        album.artist.contains(query, ignoreCase = true)
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
    ) {
        // Search bar
        OutlinedTextField(
            value = query,
            onValueChange = { query = it },
            placeholder = { Text("Search albums or artists...") },
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            singleLine = true,
            shape = RoundedCornerShape(12.dp)
        )

        // List of filtered albums
        LazyColumn(
            contentPadding = PaddingValues(horizontal = 16.dp, vertical = 4.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            items(filteredAlbums, key = { it.id }) { album ->
                AlbumRow(
                    album = album,
                    onClick = { onAlbumClicked(album) }
                )
            }
        }
    }
}`}</CodeB>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For iOS (SwiftUI) — update AlbumListScreen:</p>
      <CodeB>{`struct AlbumListScreen: View {
    @State private var query = ""

    var filteredAlbums: [Album] {
        if query.isEmpty { return sampleAlbums }
        return sampleAlbums.filter {
            $0.title.localizedCaseInsensitiveContains(query) ||
            $0.artist.localizedCaseInsensitiveContains(query)
        }
    }

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 0) {
                // Search bar
                HStack {
                    Image(systemName: "magnifyingglass")
                        .foregroundColor(.gray)
                    TextField("Search albums or artists...", text: $query)
                        .font(.subheadline)
                }
                .padding(10)
                .background(Color.white)
                .cornerRadius(12)
                .padding(.horizontal, 16)
                .padding(.vertical, 10)

                // Filtered list
                List(filteredAlbums) { album in
                    AlbumRow(album: album)
                        .listRowInsets(EdgeInsets(top:4,leading:16,bottom:4,trailing:16))
                        .listRowBackground(Color.clear)
                        .listRowSeparator(.hidden)
                }
                .listStyle(.plain)
            }
        }
        .navigationTitle("Albums")
    }
}`}</CodeB>
      <Checkpoint num="1">Type in the search bar — the list filters in real time. Clear it — all albums come back. Notice that query is a state variable: when it changes, the UI re-renders with the filtered list automatically.</Checkpoint>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 2: Handle the empty state (~8 min)</h4>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>When the search returns no results, show a friendly empty state instead of a blank screen.</p>
      <CodeB>{`// In AlbumListScreen Column, replace the LazyColumn with:
if (filteredAlbums.isEmpty()) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(text = "No albums found",
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold)
        Text(
            text = "Try a different search term",
            fontSize = 14.sp,
            color = Color.Gray
        )
    }
} else {
    LazyColumn(
        contentPadding = PaddingValues(horizontal=16.dp, vertical=4.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        items(filteredAlbums, key = { it.id }) { a ->
            AlbumRow(album = a, onClick = { onAlbumClicked(a) })
        }
    }
}`}</CodeB>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For iOS — add the empty state inside the VStack:</p>
      <CodeB>{`if filteredAlbums.isEmpty {
    VStack(spacing: 12) {
        Text("🎵").font(.system(size: 48))
        Text("No albums found")
            .font(.headline)
        Text("Try a different search term")
            .font(.subheadline).foregroundColor(.gray)
    }
    .frame(maxWidth: .infinity, maxHeight: .infinity)
} else {
    List(filteredAlbums) { album in
        // ... same as before
    }
}`}</CodeB>
      <Checkpoint num="2">Search for something that does not exist — like "zzz". You should see the empty state with the music note and message instead of a blank list.</Checkpoint>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 3: Build the detail screen (~10 min)</h4>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Build an album detail screen that receives an Album and displays it fully.</p>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For Android (Compose):</p>
      <CodeB>{`@Composable
fun AlbumDetailScreen(album: Album) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(24.dp)
    ) {
        Row(
            horizontalArrangement = Arrangement.spacedBy(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .size(72.dp)
                    .background(Color(0xFF534AB7), CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = album.artist.first().toString(),
                    color = Color.White, fontSize = 28.sp,
                    fontWeight = FontWeight.Bold
                )
            }
            Column {
                Text(album.title, fontSize = 22.sp,
                    fontWeight = FontWeight.Bold)
                Text(album.artist, fontSize = 15.sp,
                    color = Color.Gray)
            }
        }
        Spacer(modifier = Modifier.height(24.dp))
        HorizontalDivider()
        Spacer(modifier = Modifier.height(24.dp))
        listOf(
            "Year" to album.year.toString(),
            "Genre" to album.genre,
            "Tracks" to album.tracks.toString() + " tracks",
            "Rating" to "* " + album.rating.toString()
        ).forEach { (label, value) ->
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 8.dp),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(label, color = Color.Gray, fontSize = 14.sp)
                Text(value, fontWeight = FontWeight.Bold,
                    fontSize = 14.sp)
            }
            HorizontalDivider(color = Color(0xFFEEEEEE))
        }
    }
}`}</CodeB>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For iOS (SwiftUI):</p>
      <CodeB>{`struct AlbumDetailScreen: View {
    let album: Album

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(alignment: .leading, spacing: 0) {
                // Album hero
                HStack(spacing: 16) {
                    Circle()
                        .fill(Color(red:0.33,green:0.29,blue:0.72))
                        .frame(width:72,height:72)
                        .overlay(
                            Text(String(album.artist.prefix(1)))
                                .font(.title).fontWeight(.bold)
                                .foregroundColor(.white)
                        )
                    VStack(alignment:.leading, spacing:4) {
                        Text(album.title)
                            .font(.title2).fontWeight(.bold)
                        Text(album.artist)
                            .foregroundColor(.gray)
                    }
                }
                .padding(24)

                Divider()

                // Detail rows
                VStack(spacing:0) {
                    ForEach([
                        ("Year", String(album.year)),
                        ("Genre", album.genre),
                        ("Tracks", "\(album.tracks) tracks"),
                        ("Rating", "★ \(album.rating)")
                    ], id: \.0) { label, value in
                        HStack {
                            Text(label).foregroundColor(.gray)
                            Spacer()
                            Text(value).fontWeight(.bold)
                        }
                        .padding(.horizontal,24)
                        .padding(.vertical,14)
                        Divider().padding(.horizontal,24)
                    }
                }
            }
        }
        .navigationTitle(album.title)
        .navigationBarTitleDisplayMode(.inline)
    }
}`}</CodeB>
      <Checkpoint num="3">The detail screen compiles. You cannot reach it yet — we wire it up in the next step.</Checkpoint>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 4: Wire up navigation from list to detail (~8 min)</h4>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Add navigation so tapping a row in the list pushes the detail screen. Use what you learned in Week 2 — this should feel familiar.</p>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For Android — update MainActivity and add a nav route:</p>
      <CodeB>{`// In NavHost — add a detail route:
composable("detail/{albumId}") { entry ->
    val id = entry.arguments?.getString("albumId")?.toInt() ?: 0
    val album = sampleAlbums.find { it.id == id }
    album?.let { AlbumDetailScreen(album = it) }
}

// In the home route — pass the click handler:
composable("home") {
    AlbumListScreen(
        onAlbumClicked = { album ->
            navController.navigate("detail/\${album.id}")
        }
    )
}

// Update AlbumRow to accept and call onClick:
@Composable
fun AlbumRow(album: Album, onClick: () -> Unit = {}) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() }  // add this
            // ... rest of modifiers
    ) { /* ... */ }
}`}</CodeB>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For iOS — wrap rows in NavigationLink inside AlbumListScreen:</p>
      <CodeB>{`List(filteredAlbums) { album in
    NavigationLink(destination: AlbumDetailScreen(album: album)) {
        AlbumRow(album: album)
    }
    .listRowInsets(EdgeInsets(top:4,leading:16,bottom:4,trailing:16))
    .listRowBackground(Color.clear)
    .listRowSeparator(.hidden)
}

// Wrap ContentView in NavigationStack if not already:
struct ContentView: View {
    var body: some View {
        NavigationStack {
            AlbumListScreen()
        }
    }
}`}</CodeB>
      <Checkpoint num="4">Tap any album row — you navigate to the detail screen showing that album's info. Tap back — you return to the list with your search query preserved.</Checkpoint>
      <Tip><b>My search query resets when I come back from detail</b> This is a common issue. The query state variable lives inside AlbumListScreen — it should survive navigation back because the screen is still on the back stack. If it is resetting, check that you are using popBackStack (or the system back button) and not navigating to a fresh home screen.</Tip>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 5: Ask Claude about combining lists and navigation (~5 min)</h4>
      <AiOpp>Ask Claude: "I just combined a searchable list with navigation in [Compose / SwiftUI]. Can you translate the full AlbumListScreen and AlbumDetailScreen to [SwiftUI / Compose]? Then explain: how does tapping a row and passing data to a detail screen differ between the two platforms?"</AiOpp>
      <Checkbox>Both platform versions have working search, empty state, and detail navigation</Checkbox>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 6: Reflect (~5 min)</h4>
      <CodeB>{`// Lab 6 Reflection (Week 3, Session 2)
// 1. How does the filter work? Trace what happens when you type one letter.
// 2. What triggers the empty state to appear and disappear?
// 3. How did combining lists with Week 2's navigation feel?
//    Was there anything you had to look up or ask Claude about?`}</CodeB>
      <Checkpoint num="?">Final checkpoint: Show a TA the full flow — search filtering, empty state, tapping a row to detail, and back. Walk them through your reflection.</Checkpoint>
      <Note>Right now albums are hardcoded. In Week 4 you will replace sampleAlbums with a real API call. The list screen, search, and detail screen will not need to change — only where the data comes from.</Note>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Stretch features</h2>
      <Checkbox>Add a filter by genre — a row of tappable genre chips above the list that filter in addition to the search query</Checkbox>
      <Checkbox>Add a sort toggle — alphabetical vs by rating</Checkbox>
      <Checkbox>Add a favorites feature — tap a heart icon on the detail screen to save an album to a favorites list</Checkbox>
    </div>
  );
}

function Lab() {
  const [step, setStep] = useState(0);
  const [platform, setPlatform] = useState("Android");

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid var(--color-border-tertiary)", paddingBottom: 16, marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <PlatformToggle platform={platform} setPlatform={setPlatform} />
        </div>
        
        <div style={{ display: "flex", background: "var(--color-background-secondary)", padding: 4, borderRadius: 10 }}>
          {["Session 1", "Session 2"].map((s, i) => (
            <button key={s} onClick={() => setStep(i)} style={{ padding: "6px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", background: step === i ? "var(--color-background-primary)" : "transparent", color: step === i ? "var(--color-text-primary)" : "var(--color-text-secondary)", border: "none", boxShadow: step === i ? "0 1px 3px rgba(0,0,0,0.1)" : "none" }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {step === 0 ? <Session1Lab platform={platform} /> : <Session2Lab platform={platform} />}
    </div>
  );
}

function Project() {
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Unit 3 Project: Browse App</h1>
      <Warn>Submit this assignment by the end of Week 4 Session 1 using the Submit button on this page.</Warn>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>You are going to build a browse app — a scrollable, searchable list that navigates to a detail screen when a row is tapped. The structure is the same as the album browser you built in lab. The theme and content are entirely yours.</p>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>You may build in either Android (Jetpack Compose) or iOS (SwiftUI). You do not need to submit both.</p>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Step 1 — pick your theme</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Choose a category of things you genuinely know about. You need to write at least 8 items, each with at least 4 meaningful fields. The more specific your theme, the more interesting the app.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, margin: "10px 0" }}>
        {[
          { theme: "Video games", fields: "Title, studio, year, genre, platform, rating" },
          { theme: "National parks", fields: "Name, state, area (sq mi), established year, best season" },
          { theme: "Sneakers", fields: "Name, brand, year released, colorway, retail price" },
          { theme: "Films", fields: "Title, director, year, genre, runtime, Rotten Tomatoes score" },
          { theme: "Coffee shops", fields: "Name, city, specialty, rating, must-order item" },
          { theme: "Programming languages", fields: "Name, created year, creator, primary use case, typing" },
        ].map(ex => (
          <div key={ex.theme} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 3px" }}>{ex.theme}</p>
            <p style={{ fontSize: 11, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.4 }}>{ex.fields}</p>
          </div>
        ))}
      </div>
      <Tip>You are not limited to these examples. Any theme works as long as you can write 8 genuine items with real data. Do not make things up — use actual values.</Tip>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Step 2 — define your data model</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Before writing any UI, define your data model. It must have:</p>
      <Checkbox>An <IC>id</IC> field (Int) — required for LazyColumn keys and SwiftUI Identifiable</Checkbox>
      <Checkbox>At least 4 additional fields with meaningful types (String, Int, Double, Boolean)</Checkbox>
      <Checkbox>At least 8 hardcoded items in your sample data list</Checkbox>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Example for a video games theme:</p>
      <CodeB>{`data class Game(
    val id: Int,
    val title: String,
    val studio: String,
    val year: Int,
    val genre: String,
    val rating: Double
)`}</CodeB>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Required features</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Each feature below has a clear acceptance criterion — what a reviewer will check when grading.</p>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>1. List screen</h4>
      <Checkbox>Uses LazyColumn (Compose) or List (SwiftUI) — not a Column with forEach</Checkbox>
      <Checkbox>Shows all 8+ items on launch, each in a custom row layout</Checkbox>
      <Checkbox>Each row displays at least 3 fields — not just the title</Checkbox>
      <Checkbox>Rows have a visible background card style (white background, rounded corners) — not plain text on a gray screen</Checkbox>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>2. Search</h4>
      <Checkbox>A search bar is visible at the top of the list screen</Checkbox>
      <Checkbox>Typing filters the list in real time — the list updates on every keystroke without tapping a button</Checkbox>
      <Checkbox>Search matches at least 2 fields (e.g. title AND artist, not just title)</Checkbox>
      <Checkbox>Clearing the search restores the full list</Checkbox>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>3. Empty state</h4>
      <Checkbox>When the search produces no results, a message is shown — not a blank screen</Checkbox>
      <Checkbox>The empty state includes at least a title ("No results found") and a subtitle ("Try a different search term")</Checkbox>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>4. Detail screen</h4>
      <Checkbox>Tapping any row navigates to a detail screen for that item</Checkbox>
      <Checkbox>The detail screen shows ALL fields from the data model — not just the ones visible in the row</Checkbox>
      <Checkbox>The detail screen has a visible back button or gesture that returns to the list</Checkbox>
      <Checkbox>The search query is preserved when returning to the list — it does not reset</Checkbox>

      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>5. Code quality</h4>
      <Checkbox>The row UI is extracted as a separate Composable or View — not inlined inside items()</Checkbox>
      <Checkbox>The app does not crash at any point during normal use</Checkbox>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Stretch features</h2>
      <Checkbox>Add a second filter dimension — a row of tappable chips (e.g. genre buttons) that filter in addition to the search bar</Checkbox>
      <Checkbox>Add a sort toggle — e.g. alphabetical vs by rating — that reorders the list without reloading</Checkbox>
      <Checkbox>Add a favorites feature — a heart or bookmark icon on the detail screen saves the item to a separate favorites list accessible from the main screen</Checkbox>
      <Checkbox>Add a result count label above the list — "Showing 3 of 8 results" — that updates with the filter</Checkbox>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Submitting your project</h2>
      <ol style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li>Create a GitHub repository for your project</li>
        <li>Push your code to the repository</li>
        <li>Create a README using the Unit 3 README template</li>
        <li>Check off all features you implemented by changing <IC>-[ ]</IC> to <IC>-[x]</IC></li>
        <li>Record a GIF that shows: the list on launch, typing a search query, the empty state, tapping a row to detail, and pressing back to return to the list</li>
        <li>Add the GIF to the README</li>
        <li>Make the repo private and add <IC>codepathreview</IC> as a collaborator</li>
      </ol>
      <Note>The GIF is required. A reviewer cannot grade an app they cannot see running. If your GIF is missing, your submission will be returned ungraded.</Note>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Hints</h2>
      <Tip><b>My filter is not updating in real time</b> Make sure query is a state variable — remember + mutableStateOf in Compose, or @State in SwiftUI. A regular var does not trigger re-renders, so the list will appear frozen even though the value is changing.</Tip>
      <Tip><b>My detail screen shows the wrong item</b> In Compose, make sure you are finding the item by ID from your sample list after navigating — not trying to pass the whole object through the route string. Route strings only carry primitive values like Int or String.</Tip>
      <Tip><b>The search query resets when I navigate back from detail</b> This happens when you navigate() to a new list screen instead of using the system back button or popBackStack(). The system back button pops the detail screen and returns to the existing list screen — with its state intact. Navigate() would create a fresh list screen with an empty query.</Tip>
      <Tip><b>My row layout looks cramped or misaligned</b> Check that your content Column inside the Row uses Modifier.weight(1f) in Compose, or Spacer() in SwiftUI, to fill remaining space. Without it, the trailing element (rating, badge, etc.) will overlap the content column.</Tip>
    </div>
  );
}

function Resources() {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Official documentation</h2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/jetpack/compose/lists" style={{ color: "var(--color-text-info)" }}>Lists and grids in Compose — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/list" style={{ color: "var(--color-text-info)" }}>List — developer.apple.com</a></li>
        <li><a href="https://developer.android.com/reference/kotlin/androidx/compose/foundation/lazy/package-summary" style={{ color: "var(--color-text-info)" }}>LazyColumn reference — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/building-a-great-list-app" style={{ color: "var(--color-text-info)" }}>Building a great list app — developer.apple.com</a></li>
      </ul>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Lab resources</h2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/jetpack/compose/text/user-input" style={{ color: "var(--color-text-info)" }}>Text fields in Compose — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/textfield" style={{ color: "var(--color-text-info)" }}>TextField in SwiftUI — developer.apple.com</a></li>
        <li><a href="https://developer.android.com/jetpack/compose/gestures" style={{ color: "var(--color-text-info)" }}>Gestures in Compose (clickable modifier) — developer.android.com</a></li>
      </ul>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Extra practice</h2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/courses/android-basics-compose/unit-3" style={{ color: "var(--color-text-info)" }}>Android Basics with Compose — Unit 3: Display lists and use Material Design</a></li>
        <li><a href="https://developer.apple.com/tutorials/swiftui/building-lists-and-navigation" style={{ color: "var(--color-text-info)" }}>SwiftUI: Building lists and navigation — Apple tutorial</a></li>
      </ul>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("Overview");
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "16px 0", fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", fontWeight: 500, marginBottom: 2 }}>MOBILE DEVELOPMENT IN THE AGE OF AI</div>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>CodePath · 10 weeks · 2 sessions/week</div>
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
      {tab === "Overview"  && <Overview />}
      {tab === "Lab"       && <Lab />}
      {tab === "Project"   && <Project />}
      {tab === "Resources" && <Resources />}
    </div>
  );
}
