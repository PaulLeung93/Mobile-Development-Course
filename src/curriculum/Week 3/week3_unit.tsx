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
const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
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

const VStep = ({ num, title, children, last = false }: { num: number; title: string; children: React.ReactNode; last?: boolean }) => (
  <div style={{ display: "flex", gap: 12 }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--platform-accent, #534AB7)", color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{num}</div>
      {!last && <div style={{ width: 2, flex: 1, minHeight: 20, background: "var(--color-border-tertiary)", margin: "3px 0" }} />}
    </div>
    <div style={{ paddingBottom: last ? 8 : 24, flex: 1, minWidth: 0 }}>
      <h4 style={{ fontSize: 13, fontWeight: 600, margin: "3px 0 8px", color: "var(--color-text-primary)" }}>{title}</h4>
      <div>{children}</div>
    </div>
  </div>
);

const Checkbox = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "6px 0", fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.5 }}>
    <div style={{ width: 14, height: 14, border: "2px solid var(--color-text-tertiary)", borderRadius: 3, flexShrink: 0, marginTop: 2 }} />
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
      <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 12 }}>
        Don{"'"}t forget to fill out the {"✏️"} Session Survey at the end of each class session!
      </div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 12px", color: "var(--color-text-primary)" }}>Unit 3: Lists, Shared Transitions, and Adaptive Layouts</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Almost every real app has a list — a feed, a catalogue, an inbox, a search results page. This week you learn how to build them with production-quality polish. By the end of Week 3 you will have a scrollable, searchable list that navigates to a detail screen with smooth shared element transitions and adapts its layout for tablets. This is the pattern that powers every browsing app you use every day — and you will build it with a level of polish that most courses do not reach until the final weeks.</p>
      <div style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 16px", margin: "12px 0" }}>
        <p style={{ color: "var(--color-text-primary)", margin: 0 }}><strong>{"⚡"} AI-Powered Advantage:</strong> This course relies heavily on AI to handle boilerplate and dense framework syntax. Because AI handles the scaffolding, we can teach advanced UX concepts — like shared element transitions and adaptive layouts — much earlier than a traditional CS class. The goal is conceptual mastery and UX architecture, not rote memorization of complex API wrappers.</p>
      </div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>What you will learn</h2>
      <UL items={[
        "LazyColumn (Compose) and List (SwiftUI) — efficient scrolling lists",
        "Custom row layouts, unique tracking keys, and list-to-detail navigation wiring",
        "Real-time search filtering and empty state handling (stretch)",
        "Shared Element Transitions — spatial continuity and 'object permanence' in UI",
        "Adaptive Layouts — responsive design that adapts from phone to tablet",
        "Prompt engineering — using AI to implement complex framework patterns",
      ]} />
      <div style={{ marginTop: 20, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>Session Info</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>{"📅"} See your cohort{"'"}'s schedule for session times</li>
          <li>{"↗"} Session Zoom Link | Passcode: <strong>codepath</strong></li>
          <li>{"📊"} Link to Slides</li>
        </ul>
        <strong style={{ display: "block", marginTop: 10 }}>Upcoming Due Dates</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>{"📬"} Assignment 3 (browse app) — due before Week 4 Session 1</li>
        </ul>
      </div>

      <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"📦 This unit at a glance"}</strong>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
          {[
            { label: "Session 1", val: "LazyColumn / List basics, custom row layouts, and list-to-detail navigation wiring. Lab: build the album browser with a pre-built detail screen. Stretch: real-time search and empty state." },
            { label: "Session 2", val: "Premium polish — shared element transitions for spatial continuity, and adaptive layouts for tablet/landscape. AI-driven scaffolding throughout." },
            { label: "Lab (each session)", val: "Session 1: build the album browser. Session 2: add shared element transitions and use AI to refactor for adaptive layouts." },
            { label: "Assignment 3", val: "Guided starter — same album browser structure, your own content and theme. Stretch: add shared element transitions and adaptive layouts." },
          ].map(item => (
            <div key={item.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Session1Lab({ platform: _platform }: { platform: string }) {
  return (
    <div style={{ '--platform-accent': _platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 1 Lab: Album Browser — The List Screen</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>You are going to build a music album browser — a scrollable list of albums with a custom row layout and tap-to-detail navigation. Session 2 will add shared element transitions and adaptive layouts on top of what you build here. Budget about 80–90 minutes.</p>

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"🎯"} Goals</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
          <li>Define an Album data model with multiple fields</li>
          <li>Build a LazyColumn (Compose) or List (SwiftUI) that renders a list of albums</li>
          <li>Design a custom row layout for each album</li>
          <li>Understand how lazy loading differs from a regular Column</li>
          <li>Wire up list-to-detail navigation so tapping a row opens a detail screen</li>
          <li>Use Claude to translate your implementation to the other platform</li>
          <li><strong>Stretch:</strong> Add a real-time search bar and an empty state when no results match</li>
        </ul>
      </div>

      <div style={{ marginTop: 20 }}>
        <VStep num={0} title="Set up your project">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Create a new project, just like you did in Week 1.</p>
          {_platform === "Android" ? (
            <>
              <Checkbox>New Empty Activity project in Android Studio — name it <IC>AlbumBrowser</IC>, language Kotlin, min SDK API 24.</Checkbox>
              <Tip>Add the Navigation Compose dependency to your <IC>build.gradle</IC> now — you will need it in Step 7: <IC>implementation({"\""}androidx.navigation:navigation-compose:2.7.0{"\""})</IC></Tip>
            </>
          ) : (
            <>
              <Checkbox>New App project in Xcode — name it <IC>AlbumBrowser</IC>, interface SwiftUI, language Swift.</Checkbox>
              <Tip>No extra dependencies needed for iOS — SwiftUI{"'"}s <IC>NavigationStack</IC> and <IC>List</IC> are built in.</Tip>
            </>
          )}
          <Section title="💡 Hint: My emulator/simulator won't start">
            {_platform === "Android"
              ? "Make sure you have an emulator created in Device Manager. If it is your first time, it can take a few minutes to download the system image. Start it now so it is ready by Step 1."
              : "Select a simulator from the scheme dropdown at the top of Xcode (e.g. iPhone 16). The first boot takes a minute — start it now so it is ready by Step 1."}
          </Section>
        </VStep>

        <VStep num={1} title="Create the Album data model">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Define what an album looks like as a data structure, then create a hardcoded list of sample albums.</p>
          {_platform === "Android" ? (
            <>
              <p style={{ fontSize: 13, margin: "0 0 6px" }}>Create a new file called <IC>Album.kt</IC>:</p>
              <CodeB title="Kotlin — Album.kt" accent={BL}>{`data class Album(
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
            </>
          ) : (
            <>
              <p style={{ fontSize: 13, margin: "0 0 6px" }}>Create a new file called <IC>Album.swift</IC>:</p>
              <CodeB title="Swift — Album.swift" accent={GR}>{`struct Album: Identifiable {
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
            </>
          )}
          <Checkpoint num="1">The data model compiles with no errors.{_platform === "iOS" && <> Note that the iOS version uses <IC>Identifiable</IC> — SwiftUI needs this to uniquely identify each row in the list.</>}</Checkpoint>
          <Tip><b>{_platform === "Android" ? "Why does Compose need a key?" : "Why does the iOS struct need Identifiable?"}</b> {_platform === "Android" ? <>LazyColumn uses the <IC>key</IC> parameter to uniquely track items. When the list updates, Compose uses keys to figure out which rows changed, which moved, and which can be recycled.</> : <>SwiftUI{"'"}s List needs a way to uniquely identify each item so it can efficiently update only the rows that changed. The <IC>Identifiable</IC> protocol requires an <IC>id</IC> field. Compose{"'"}s LazyColumn uses the <IC>key</IC> parameter for the same purpose.</>}</Tip>
        </VStep>

        <VStep num={2} title="Build a basic list — no custom rows yet">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Before styling the rows, get a plain list rendering first. Confirm the data is showing up before adding complexity.</p>
          {_platform === "Android" ? (
            <>
              <p style={{ fontSize: 13, margin: "0 0 6px" }}>Create a new file called <IC>AlbumListScreen.kt</IC>:</p>
              <CodeB title="Kotlin — AlbumListScreen.kt" accent={BL}>{`@Composable
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
            </>
          ) : (
            <>
              <p style={{ fontSize: 13, margin: "0 0 6px" }}>Create a new file called <IC>AlbumListScreen.swift</IC>:</p>
              <CodeB title="Swift — AlbumListScreen.swift" accent={GR}>{`struct AlbumListScreen: View {
    var body: some View {
        List(sampleAlbums) { album in
            Text(album.title)
        }
    }
}`}</CodeB>
            </>
          )}
          <Checkpoint num="2">Run the app. You should see a plain scrollable list of album titles. It is not pretty yet — we fix that in the next step.</Checkpoint>
          <Tip><b>LazyColumn vs Column — what is the difference?</b> A regular Column renders ALL its children at once, even if they are off screen. LazyColumn only renders the items currently visible — as you scroll, it creates new rows and recycles old ones. For short lists it does not matter. For 1000 items, Column would crash. Always use LazyColumn/List for scrollable lists of data.</Tip>
        </VStep>

        <VStep num={3} title="Design a custom row layout">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Replace the plain <IC>Text</IC> with a proper album row — artist initial avatar, title, artist name, year, genre badge, and star rating. You will build a new {_platform === "Android" ? <><IC>@Composable</IC> function called <IC>AlbumRow</IC></> : <>view called <IC>AlbumRow</IC></>} in a separate file, then swap it into your list screen in the next step.</p>

          <VStep num={1} title="Create the row skeleton with an avatar">
            <p style={{ fontSize: 13, margin: "0 0 8px" }}>Create a new file called <IC>{_platform === "Android" ? "AlbumRow.kt" : "AlbumRow.swift"}</IC>. Define {_platform === "Android" ? <>a <IC>@Composable</IC> function <IC>AlbumRow</IC> that takes an <IC>Album</IC> parameter. Inside, add a <IC>Row</IC> with <IC>fillMaxWidth()</IC>, 6dp vertical padding, a white background with 12dp rounded corners, 12dp inner padding, and 12dp spacing between children. Center children vertically.</> : <>a <IC>struct AlbumRow: View</IC> with a <IC>let album: Album</IC> property. In the body, add an <IC>HStack(spacing: 12)</IC> with 12pt padding, a white background, and 12pt corner radius.</>}</p>
            <p style={{ fontSize: 13, margin: "0 0 8px" }}>Inside that container, add a circular avatar showing the artist{"'"}s first initial: {_platform === "Android" ? <>a 52dp <IC>Box</IC> with a purple (<IC>0xFF534AB7</IC>) <IC>CircleShape</IC> background, centered content, and a bold white 22sp <IC>Text</IC> showing <IC>album.artist.first().toString()</IC>.</> : <>a 52×52 <IC>Circle()</IC> filled with purple (rgb 0.33, 0.29, 0.72), with a <IC>.overlay</IC> containing a bold white <IC>.title2</IC> <IC>Text</IC> showing <IC>String(album.artist.prefix(1))</IC>.</>}</p>
            {_platform === "Android" ? (
              <Section title="💡 Show me the syntax">
                <p style={{ fontSize: 13, margin: "0 0 6px" }}>A circular avatar in Compose uses <IC>Box</IC> with <IC>CircleShape</IC>:</p>
                <CodeB title="Kotlin — avatar pattern" accent={BL}>{`Box(
    modifier = Modifier
        .size(52.dp)
        .background(Color(0xFF534AB7), CircleShape),
    contentAlignment = Alignment.Center
) {
    Text(/* first initial */)
}`}</CodeB>
              </Section>
            ) : (
              <Section title="💡 Show me the syntax">
                <p style={{ fontSize: 13, margin: "0 0 6px" }}>A circular avatar in SwiftUI uses <IC>Circle()</IC> with an <IC>.overlay</IC>:</p>
                <CodeB title="Swift — avatar pattern" accent={GR}>{`Circle()
    .fill(Color(...))
    .frame(width: 52, height: 52)
    .overlay(
        Text(/* first initial */)
    )`}</CodeB>
              </Section>
            )}
            <Section title={`✅ Check your work — show me the complete ${_platform === "Android" ? "AlbumRow.kt" : "AlbumRow.swift"} so far`}>
              {_platform === "Android" ? (
                <CodeB title="Kotlin — AlbumRow.kt (avatar only)" accent={BL}>{`@Composable
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
    }
}`}</CodeB>
              ) : (
                <CodeB title="Swift — AlbumRow.swift (avatar only)" accent={GR}>{`struct AlbumRow: View {
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
        }
        .padding(12)
        .background(Color.white)
        .cornerRadius(12)
    }
}`}</CodeB>
              )}
            </Section>
          </VStep>

          <VStep num={2} title="Add the album info column">
            <p style={{ fontSize: 13, margin: "0 0 8px" }}>Inside the {_platform === "Android" ? <IC>Row</IC> : <IC>HStack</IC>}, after the avatar, add {_platform === "Android" ? <>a <IC>Column</IC> with <IC>Modifier.weight(1f)</IC> so it fills the remaining horizontal space. Inside, add: a bold 15sp title (<IC>album.title</IC>), a gray 13sp artist name (<IC>album.artist</IC>), a 4dp spacer, and a nested <IC>Row</IC> containing a genre badge and year.</> : <>a <IC>VStack(alignment: .leading, spacing: 2)</IC> containing: a bold <IC>.subheadline</IC> title, a gray <IC>.caption</IC> artist name, and an inner <IC>HStack(spacing: 6)</IC> with a genre badge and year. After the VStack, add a <IC>Spacer()</IC> to push content left.</>}</p>
            <p style={{ fontSize: 13, margin: "0 0 8px" }}>For the genre badge, display <IC>album.genre</IC> as small text ({_platform === "Android" ? "11sp" : ".caption2"}) in purple on a light-purple background with rounded-pill corners ({_platform === "Android" ? "20dp" : "20pt"} radius). Show the year next to it in gray.</p>
            {_platform === "Android" ? (
              <Section title="💡 Show me the syntax">
                <p style={{ fontSize: 13, margin: "0 0 6px" }}><IC>Modifier.weight(1f)</IC> tells the Column to take all leftover space in the Row — this prevents the avatar and rating from being squished:</p>
                <CodeB title="Kotlin — weight pattern" accent={BL}>{`Column(modifier = Modifier.weight(1f)) {
    Text(/* title */)
    Text(/* artist */)
    // genre badge row goes here
}`}</CodeB>
              </Section>
            ) : (
              <Section title="💡 Show me the syntax">
                <p style={{ fontSize: 13, margin: "0 0 6px" }}><IC>Spacer()</IC> pushes everything before it to the left — without it, the info and rating would be crammed together:</p>
                <CodeB title="Swift — spacer pattern" accent={GR}>{`VStack(alignment: .leading, spacing: 2) {
    Text(/* title */)
    Text(/* artist */)
    // genre badge row goes here
}
Spacer()  // pushes content left`}</CodeB>
              </Section>
            )}
            <Section title={`✅ Check your work — show me the complete ${_platform === "Android" ? "AlbumRow.kt" : "AlbumRow.swift"} so far`}>
              {_platform === "Android" ? (
                <CodeB title="Kotlin — AlbumRow.kt (avatar + info)" accent={BL}>{`@Composable
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
    }
}`}</CodeB>
              ) : (
                <CodeB title="Swift — AlbumRow.swift (avatar + info)" accent={GR}>{`struct AlbumRow: View {
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
        }
        .padding(12)
        .background(Color.white)
        .cornerRadius(12)
    }
}`}</CodeB>
              )}
            </Section>
          </VStep>

          <VStep num={3} title="Add the star rating" last>
            <p style={{ fontSize: 13, margin: "0 0 8px" }}>After the {_platform === "Android" ? <>info <IC>Column</IC> (still inside the outer <IC>Row</IC>)</> : <><IC>Spacer()</IC> (still inside the <IC>HStack</IC>)</>}, add a small rating display: {_platform === "Android" ? <>a <IC>Column</IC> with <IC>Alignment.CenterHorizontally</IC> containing a gold (<IC>0xFFEF9F27</IC>) star character at 18sp, and the numeric rating below it in gray 11sp text.</> : <>a <IC>VStack(spacing: 2)</IC> containing a gold (rgb 0.94, 0.62, 0.15) star character, and the numeric rating below it in gray <IC>.caption2</IC> text.</>}</p>
            <Section title={`✅ Check your work — show me the complete ${_platform === "Android" ? "AlbumRow.kt" : "AlbumRow.swift"}`}>
              {_platform === "Android" ? (
                <CodeB title="Kotlin — AlbumRow.kt (complete)" accent={BL}>{`@Composable
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
}`}</CodeB>
              ) : (
                <CodeB title="Swift — AlbumRow.swift (complete)" accent={GR}>{`struct AlbumRow: View {
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
}`}</CodeB>
              )}
            </Section>
          </VStep>

          <Checkpoint num="3">Run the app. Each album should now have a proper row card with an avatar, title, artist, genre badge, year, and star rating.</Checkpoint>
          {_platform === "Android" ? (
            <Section title="💡 Hint: Red squiggles under RoundedCornerShape, CircleShape, etc.">
              Press Alt+Enter (Option+Enter on Mac) on each red name to auto-import. Common imports you will need: <IC>CircleShape</IC>, <IC>RoundedCornerShape</IC>, <IC>Arrangement</IC>, <IC>Alignment</IC>.
            </Section>
          ) : (
            <Section title="💡 Hint: My rows are full-width but the text is cut off">
              Make sure you have a <IC>Spacer()</IC> between the info <IC>VStack</IC> and the rating <IC>VStack</IC>. Without it, the info column will try to take all the space and push the rating off screen.
            </Section>
          )}
        </VStep>

        <VStep num={4} title="Wire up the complete list screen">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Go back to your <IC>{_platform === "Android" ? "AlbumListScreen.kt" : "AlbumListScreen.swift"}</IC> from Step 2. Make two changes:</p>
          <p style={{ fontSize: 13, margin: "0 0 8px" }}><strong>1.</strong> Replace the plain <IC>Text(album.title)</IC> inside the list with <IC>{_platform === "Android" ? "AlbumRow(album = album)" : "AlbumRow(album: album)"}</IC> so each row uses your new custom layout.</p>
          <p style={{ fontSize: 13, margin: "0 0 8px" }}><strong>2.</strong> Add a light gray background ({_platform === "Android" ? <><IC>Color(0xFFF5F5F5)</IC> on the <IC>LazyColumn</IC> modifier</> : <>a <IC>ZStack</IC> with <IC>Color(UIColor.systemGray6).ignoresSafeArea()</IC> behind the <IC>List</IC></>}) so the white row cards have visual contrast.{_platform === "Android" ? <> Also add <IC>verticalArrangement = Arrangement.spacedBy(4.dp)</IC> for spacing between rows.</> : <> Also add <IC>.listRowBackground(Color.clear)</IC> and <IC>.listRowSeparator(.hidden)</IC> on each row so the cards float cleanly, and <IC>.listStyle(.plain)</IC> on the List. Add a <IC>.navigationTitle("Albums")</IC> to the ZStack.</>}</p>
          <Section title={`✅ Check your work — show me the complete ${_platform === "Android" ? "AlbumListScreen.kt" : "AlbumListScreen.swift"}`}>
            {_platform === "Android" ? (
              <CodeB title="Kotlin — AlbumListScreen.kt (complete)" accent={BL}>{`@Composable
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
            ) : (
              <CodeB title="Swift — AlbumListScreen.swift (complete)" accent={GR}>{`struct AlbumListScreen: View {
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
            )}
          </Section>
          <Checkpoint num="4">Scroll down — all 8 albums are there, each with a styled card layout on a contrasting background.</Checkpoint>
        </VStep>

        <VStep num={5} title="Wire up navigation to the detail screen">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Tapping a row should navigate to a detail screen that shows all the album{"'"}s fields. You will make three changes: make rows tappable, add a provided detail screen, and wire up the navigation controller.</p>

          <VStep num={1} title="Make rows tappable">
            {_platform === "Android" ? (
              <>
                <p style={{ fontSize: 13, margin: "0 0 8px" }}>Two changes are needed. First, add an <IC>onClick: () -&gt; Unit = {"{}"}</IC> parameter to your <IC>AlbumRow</IC> composable, then add a <IC>.clickable {"{"} onClick() {"}"}</IC> modifier on the outer <IC>Row</IC> (place it <em>before</em> the padding and background modifiers). Second, add an <IC>onAlbumClicked: (Album) -&gt; Unit = {"{}"}</IC> parameter to <IC>AlbumListScreen</IC> and pass it through: <IC>AlbumRow(album = album, onClick = {"{"} onAlbumClicked(album) {"}"})</IC>.</p>
                <Section title="✅ Check your work — show me the updated AlbumRow and AlbumListScreen">
                  <CodeB title="Kotlin — AlbumRow (updated signature)" accent={BL}>{`@Composable
fun AlbumRow(album: Album, onClick: () -> Unit = {}) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() }    // ← add this
            .padding(vertical = 6.dp)
            .background(Color.White,
                shape = RoundedCornerShape(12.dp))
            .padding(12.dp),
        // ... rest unchanged
    ) { /* ... */ }
}`}</CodeB>
                  <CodeB title="Kotlin — AlbumListScreen (updated)" accent={BL}>{`@Composable
fun AlbumListScreen(onAlbumClicked: (Album) -> Unit = {}) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5)),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        items(sampleAlbums, key = { it.id }) { album ->
            AlbumRow(album = album, onClick = { onAlbumClicked(album) })
        }
    }
}`}</CodeB>
                </Section>
              </>
            ) : (
              <>
                <p style={{ fontSize: 13, margin: "0 0 8px" }}>In SwiftUI, tappable rows use <IC>NavigationLink</IC> instead of a click handler. Update <IC>ContentView.swift</IC> to wrap <IC>AlbumListScreen()</IC> in a <IC>NavigationStack</IC> — this manages the back stack. Then, in <IC>AlbumListScreen</IC>, wrap each <IC>AlbumRow</IC> inside a <IC>NavigationLink(value: album.id)</IC>. Finally, add a <IC>.navigationDestination(for: Int.self)</IC> modifier on the List to define what screen to show when a link fires.</p>
                <Section title="💡 Show me the syntax">
                  <p style={{ fontSize: 13, margin: "0 0 6px" }}><IC>NavigationLink</IC> wraps a row — tapping pushes a new screen. <IC>.navigationDestination</IC> defines <em>which</em> screen to build for a given value type:</p>
                  <CodeB title="Swift — navigation pattern" accent={GR}>{`NavigationLink(value: someId) {
    SomeRow()
}
// ...
.navigationDestination(for: Int.self) { id in
    SomeDetailScreen(id: id)
}`}</CodeB>
                </Section>
                <Section title="✅ Check your work — show me ContentView and AlbumListScreen">
                  <CodeB title="Swift — ContentView.swift" accent={GR}>{`struct ContentView: View {
    var body: some View {
        // NavigationStack manages the navigation back stack in SwiftUI.
        // Any NavigationLink inside it can push a new screen onto the stack.
        NavigationStack {
            AlbumListScreen()
        }
    }
}`}</CodeB>
                  <CodeB title="Swift — AlbumListScreen (updated)" accent={GR}>{`struct AlbumListScreen: View {
    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            List(sampleAlbums) { album in
                // NavigationLink wraps a row — tapping it pushes a new screen.
                // value: passes data to the destination (matched by .navigationDestination below).
                NavigationLink(value: album.id) {
                    AlbumRow(album: album)
                }
                .listRowInsets(EdgeInsets(
                    top: 4, leading: 16,
                    bottom: 4, trailing: 16))
                .listRowBackground(Color.clear)
                .listRowSeparator(.hidden)
            }
            .listStyle(.plain)
            // .navigationDestination says: when a NavigationLink fires with an Int,
            // build this view. Int.self matches NavigationLink(value: album.id)
            // because album.id is an Int.
            .navigationDestination(for: Int.self) { id in
                let album = sampleAlbums.first { $0.id == id }!
                AlbumDetailScreen(album: album)
            }
        }
        .navigationTitle("Albums")
    }
}`}</CodeB>
                </Section>
              </>
            )}
          </VStep>

          <VStep num={2} title="Add the pre-built detail screen">
            <p style={{ fontSize: 13, margin: "0 0 8px" }}>Create a new file called <IC>{_platform === "Android" ? "AlbumDetailScreen.kt" : "AlbumDetailScreen.swift"}</IC> and paste in the detail screen below. You do not need to build this from scratch — it is provided so you can focus on navigation wiring. Read through it to understand the layout.</p>
            {_platform === "Android" ? (
              <CodeB title="Kotlin — AlbumDetailScreen.kt (provided)" accent={BL}>{`@Composable
fun AlbumDetailScreen(album: Album, onBack: () -> Unit) {
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
            IconButton(onClick = onBack) {
                Icon(Icons.Filled.ArrowBack,
                    contentDescription = "Back")
            }
            Text(album.title, fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold)
        }
        Divider()
        Column(
            modifier = Modifier
                .padding(24.dp)
                .fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                modifier = Modifier
                    .size(72.dp)
                    .background(Color(0xFF534AB7), CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Text(album.artist.first().toString(),
                    color = Color.White, fontSize = 30.sp,
                    fontWeight = FontWeight.Bold)
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
            ) : (
              <CodeB title="Swift — AlbumDetailScreen.swift (provided)" accent={GR}>{`struct AlbumDetailScreen: View {
    let album: Album

    private func infoRow(
        _ label: String, _ value: String
    ) -> some View {
        HStack {
            Text(label).foregroundColor(.gray)
            Spacer()
            Text(value).fontWeight(.medium)
        }
        .font(.subheadline)
        .padding(.horizontal, 20)
        .padding(.vertical, 12)
    }

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            ScrollView {
                VStack(spacing: 0) {
                    Circle()
                        .fill(Color(red: 0.33, green: 0.29,
                            blue: 0.72))
                        .frame(width: 72, height: 72)
                        .overlay(
                            Text(String(album.artist.prefix(1)))
                                .font(.largeTitle)
                                .fontWeight(.bold)
                                .foregroundColor(.white)
                        )
                        .padding(.top, 24)
                        .padding(.bottom, 20)
                    VStack(spacing: 0) {
                        infoRow("Artist", album.artist)
                        Divider().padding(.horizontal, 20)
                        infoRow("Year", String(album.year))
                        Divider().padding(.horizontal, 20)
                        infoRow("Genre", album.genre)
                        Divider().padding(.horizontal, 20)
                        infoRow("Tracks",
                            "\\(album.tracks) tracks")
                        Divider().padding(.horizontal, 20)
                        infoRow("Rating", "★ \\(album.rating)")
                    }
                    .background(Color.white)
                    .cornerRadius(12)
                    .padding(16)
                }
            }
        }
        .navigationTitle(album.title)
        .navigationBarTitleDisplayMode(.inline)
    }
}`}</CodeB>
            )}
          </VStep>

          <VStep num={3} title={_platform === "Android" ? "Set up the NavHost" : "Verify navigation works"} last>
            {_platform === "Android" ? (
              <>
                <p style={{ fontSize: 13, margin: "0 0 8px" }}>Replace your <IC>setContent {"{ ... }"}</IC> block in <IC>MainActivity.kt</IC> with a <IC>NavHost</IC> that defines two routes: <IC>"home"</IC> (showing <IC>AlbumListScreen</IC>) and <IC>"detail/{"{albumId}"}"</IC> (showing <IC>AlbumDetailScreen</IC>). Create a <IC>rememberNavController()</IC> to manage the back stack. In the home route, call <IC>navController.navigate("detail/${"{album.id}"}")</IC> when an album is clicked. In the detail route, extract the album ID from <IC>entry.arguments</IC>, find the matching album, and pass <IC>navController.popBackStack()</IC> as the <IC>onBack</IC> handler.</p>
                <Section title="💡 Show me the syntax">
                  <p style={{ fontSize: 13, margin: "0 0 6px" }}>NavHost uses string-based routes with path parameters:</p>
                  <CodeB title="Kotlin — NavHost pattern" accent={BL}>{`val navController = rememberNavController()
NavHost(navController, startDestination = "home") {
    composable("home") {
        // list screen — call navController.navigate("detail/\${id}")
    }
    composable("detail/{albumId}") { entry ->
        val id = entry.arguments?.getString("albumId")?.toInt() ?: 0
        // find album and show detail screen
    }
}`}</CodeB>
                </Section>
                <Section title="✅ Check your work — show me the complete MainActivity.kt">
                  <CodeB title="Kotlin — MainActivity.kt" accent={BL}>{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            // NavController manages the back stack and handles navigate() / popBackStack()
            val navController = rememberNavController()
            // NavHost defines all the screens (routes) in the app
            NavHost(navController,
                startDestination = "home") {  // "home" is the first screen shown
                composable("home") {
                    AlbumListScreen(
                        onAlbumClicked = { album ->
                            // Push the detail route onto the back stack,
                            // passing the album id in the URL path
                            navController.navigate(
                                "detail/\${album.id}")
                        }
                    )
                }
                // {albumId} is a path parameter — it matches any value in that position
                composable("detail/{albumId}") { entry ->
                    val id = entry.arguments
                        ?.getString("albumId")?.toInt() ?: 0
                    val album = sampleAlbums.find {
                        it.id == id
                    }
                    album?.let {
                        AlbumDetailScreen(
                            album = it,
                            onBack = {
                                // Pop the detail screen off the stack, returning to the list
                                navController.popBackStack()
                            }
                        )
                    }
                }
            }
        }
    }
}`}</CodeB>
                </Section>
              </>
            ) : (
              <p style={{ fontSize: 13, margin: "0 0 8px" }}>If you completed sub-steps 1 and 2 correctly, navigation should already be working. Build and run the app to verify.</p>
            )}
          </VStep>

          <Checkpoint num={5}>Tap any album row — the detail screen opens showing all fields. Press back — the list is exactly as you left it. <IC>{_platform === "Android" ? "popBackStack()" : "NavigationStack"}</IC> returns to the existing screen rather than creating a fresh one.</Checkpoint>
          <Note>This is the key distinction between <strong>push navigation</strong> and <strong>replacing the screen</strong>. <IC>{_platform === "Android" ? "popBackStack()" : "NavigationStack"}</IC> preserves the list screen in memory and uncovers it on back — state is kept exactly as it was.</Note>
          {_platform === "Android" && (
            <Section title="💡 Hint: Red squiggles under NavHost, rememberNavController">
              Press Alt+Enter on each to auto-import. You need <IC>androidx.navigation.compose.NavHost</IC>, <IC>androidx.navigation.compose.composable</IC>, and <IC>androidx.navigation.compose.rememberNavController</IC>.
            </Section>
          )}
        </VStep>

        <VStep num={6} title="Ask Claude to translate and compare">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Now that you have a working album browser with tap-to-detail navigation, ask Claude to translate the key pieces to the other platform.</p>
          <AiOpp>
            Paste your <IC>AlbumListScreen</IC> and <IC>AlbumRow</IC> into Claude and use this prompt: <em>{"\""}{_platform === "Android" ? "I built an album browser with tap-to-detail navigation using LazyColumn in Compose. Please translate AlbumListScreen and AlbumRow to SwiftUI. Then explain: how does NavigationLink in SwiftUI compare to NavHost/navController.navigate() in Compose?" : "I built an album browser with tap-to-detail navigation using List in SwiftUI. Please translate AlbumListScreen and AlbumRow to Compose with LazyColumn. Then explain: how does NavHost/navController.navigate() in Compose compare to NavigationLink in SwiftUI?"}{"\""}</em>
          </AiOpp>
          <Checkbox>Received and read Claude{"'"}s translation and explanation</Checkbox>
          <Checkbox>Both platform versions show the album list with tap-to-detail navigation working</Checkbox>
          <Section title="💡 Hint: Claude gave me code with errors">
            That happens — this is a feature, not a bug. Try asking Claude: {"\""}{`This gave me a compile error: [paste error]. What is wrong and how do I fix it?`}{"\""} Do not just ask it to rewrite everything.
          </Section>
        </VStep>

        <VStep num={7} title="Reflect" last>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Add a comment block at the top of your file and answer these questions in your own words.</p>
          <CodeB title="Lab Reflection (Week 3, Session 1)">{`// Lab Reflection (Week 3, Session 1)
// 1. In your own words: what is lazy loading and why does it matter?
// 2. What does the key parameter in LazyColumn / Identifiable in SwiftUI do?
// 3. What was the trickiest part of building the custom row layout?
// 4. What happens to the list screen's state when you tap Back from the detail screen?
//    Why does push navigation preserve state, while replacing the screen would not?`}</CodeB>
          <Checkpoint num="Final">Show a TA your album browser — styled list and tap-to-detail navigation — and walk them through your reflection.</Checkpoint>
          <Note>Right now the albums are hardcoded in a {_platform === "Android" ? "Kotlin list" : "Swift array"}. In Week 4 you will replace this with a real API call — the list screen will not need to change much — just the data source.</Note>
        </VStep>
      </div>

      <Section title="🚀 Stretch Features">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, margin: "0 0 16px" }}>These features were not covered in lecture — the code comments explain what each piece does so you can learn while implementing.</p>

        <div style={{ marginBottom: 24 }}>
          <h4 style={{ fontSize: 14, fontWeight: 600, color: _platform === "Android" ? BL : GR, margin: "0 0 8px" }}>Stretch A — Real-time search</h4>
          <p style={{ fontSize: 13, margin: "0 0 8px" }}>Add a search bar above the list that filters albums by title and artist as the user types. You need two things: a state variable for the text input, and a filtered list derived from it.</p>
          {_platform === "Android" ? (
            <>
              <p style={{ fontSize: 13, margin: "0 0 6px" }}>At the top of <IC>AlbumListScreen</IC>, add the state variable and filtered list, then wrap the LazyColumn in a Column and add a TextField above it:</p>
              <CodeB title="Kotlin — AlbumListScreen with search" accent={BL}>{`@Composable
fun AlbumListScreen(onAlbumClicked: (Album) -> Unit = {}) {
    // remember { mutableStateOf("") } creates a state variable for the search text.
    // - remember: keeps the value across recompositions (like a field on the screen)
    // - mutableStateOf: tells Compose to watch it — any change triggers a redraw
    var query by remember { mutableStateOf("") }

    // filter: goes through every album and keeps only those matching the query.
    // If query is empty, we skip filtering and return the full list unchanged.
    val filtered = if (query.isEmpty()) sampleAlbums
        else sampleAlbums.filter { album ->
            // ignoreCase = true: matches "fleetwood" and "Fleetwood"
            album.title.contains(query, ignoreCase = true) ||
            album.artist.contains(query, ignoreCase = true)
        }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
    ) {
        // TextField is the search bar — onValueChange fires on every keystroke
        TextField(
            value = query,
            onValueChange = { query = it },
            placeholder = { Text("Search albums…") },
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 8.dp),
            singleLine = true
        )
        LazyColumn(
            contentPadding = PaddingValues(
                start = 16.dp, end = 16.dp, bottom = 16.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            // Use filtered here instead of sampleAlbums
            items(filtered, key = { it.id }) { album ->
                AlbumRow(
                    album = album,
                    onClick = { onAlbumClicked(album) })
            }
        }
    }
}`}</CodeB>
            </>
          ) : (
            <>
              <p style={{ fontSize: 13, margin: "0 0 6px" }}>Add a <IC>@State</IC> variable for the query and a computed <IC>filtered</IC> property to <IC>AlbumListScreen</IC>, then attach <IC>.searchable</IC> to the List:</p>
              <CodeB title="Swift — AlbumListScreen with search" accent={GR}>{`struct AlbumListScreen: View {
    // @State tells SwiftUI to watch this variable — any change triggers a redraw.
    // private: only this view can change it; parent views never touch it.
    @State private var query = ""

    // var (not let): a computed property — recalculated every time the view redraws.
    // When query changes, SwiftUI redraws the view, filtered is recalculated,
    // and the List shows only the matching albums.
    var filtered: [Album] {
        if query.isEmpty { return sampleAlbums }
        return sampleAlbums.filter { album in
            // localizedCaseInsensitiveContains: built-in Swift method,
            // matches "fleetwood" and "Fleetwood"
            album.title.localizedCaseInsensitiveContains(query) ||
            album.artist.localizedCaseInsensitiveContains(query)
        }
    }

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            // Use filtered here instead of sampleAlbums
            List(filtered) { album in
                NavigationLink(value: album.id) {
                    AlbumRow(album: album)
                }
                .listRowInsets(EdgeInsets(
                    top: 4, leading: 16,
                    bottom: 4, trailing: 16))
                .listRowBackground(Color.clear)
                .listRowSeparator(.hidden)
            }
            .listStyle(.plain)
            .navigationDestination(for: Int.self) { id in
                let album = sampleAlbums.first { $0.id == id }!
                AlbumDetailScreen(album: album)
            }
        }
        .navigationTitle("Albums")
        // .searchable adds a search bar to the navigation bar automatically.
        // $query is a two-way binding — typing updates query, which updates filtered.
        .searchable(text: $query, prompt: "Search albums")
    }
}`}</CodeB>
            </>
          )}
          <Checkpoint num="A">Type a few letters in the search bar — the list filters in real time. Clear the bar — all albums return.</Checkpoint>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h4 style={{ fontSize: 14, fontWeight: 600, color: _platform === "Android" ? BL : GR, margin: "0 0 8px" }}>Stretch B — Empty search state</h4>
          <p style={{ fontSize: 13, margin: "0 0 8px" }}>When no albums match the search, show a friendly message instead of a blank list.</p>
          <Note>Complete Stretch A before attempting this — it builds directly on the <IC>filtered</IC> list you added there.</Note>
          {_platform === "Android" ? (
            <>
              <p style={{ fontSize: 13, margin: "8px 0 6px" }}>Inside the <IC>Column</IC> in <IC>AlbumListScreen</IC>, replace the <IC>LazyColumn</IC> with a conditional that checks whether <IC>filtered</IC> is empty:</p>
              <CodeB title="Kotlin — empty state check" accent={BL}>{`// Replace the LazyColumn with this if/else block:
if (filtered.isEmpty()) {
    // Box centers its content both horizontally and vertically
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Text("🎵", fontSize = 40.sp)
            Text(
                // \$ inside a template string inserts the variable value
                text = "No albums found for \"\$query\"",
                fontSize = 14.sp,
                color = Color.Gray
            )
        }
    }
} else {
    LazyColumn(
        contentPadding = PaddingValues(
            start = 16.dp, end = 16.dp, bottom = 16.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        items(filtered, key = { it.id }) { album ->
            AlbumRow(
                album = album,
                onClick = { onAlbumClicked(album) })
        }
    }
}`}</CodeB>
            </>
          ) : (
            <>
              <p style={{ fontSize: 13, margin: "8px 0 6px" }}>Add an <IC>.overlay</IC> modifier to the <IC>List</IC> in <IC>AlbumListScreen</IC>:</p>
              <CodeB title="Swift — empty state overlay" accent={GR}>{`// .overlay draws content on top of the List.
// We only show it when filtered is empty.
List(filtered) { album in
    // ... same row content as before ...
}
.overlay {
    // if filtered.isEmpty is only true when the user has typed something
    // that matches no albums — the list itself stays in the hierarchy below
    if filtered.isEmpty {
        VStack(spacing: 8) {
            Text("🎵")
                .font(.largeTitle)
            // \(query) inserts the variable value into the string
            Text("No albums found for \"\(query)\"")
                .font(.subheadline)
                .foregroundColor(.gray)
        }
    }
}`}</CodeB>
            </>
          )}
          <Checkpoint num="B">Search for something that matches nothing (e.g. "zzz") — a friendly empty state appears. Clear the bar — the full list comes back.</Checkpoint>
        </div>

        <h4 style={{ fontSize: 14, fontWeight: 600, margin: "8px 0 8px" }}>More stretch ideas</h4>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8, margin: 0 }}>
          <li>Add a header above the list showing the total number of albums</li>
          <li>Add a tracks count to each row — shown as {"\""}11 tracks{"\""} in small gray text</li>
          <li>Sort the list alphabetically by title using {_platform === "Android" ? <IC>sortedBy</IC> : <IC>sorted(by:)</IC>}</li>
          <li>Color-code the avatar background by genre instead of always purple</li>
        </ul>
      </Section>
    </div>
  );
}
function Session2Lab({ platform: _platform }: { platform: string }) {
  return (
    <div style={{ '--platform-accent': _platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 2 Lab: Premium Polish — Shared Elements &amp; Adaptive Layouts</h1>
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

              <VStep num={1} title="Wrap NavHost in SharedTransitionLayout">
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

              <VStep num={2} title="Tag the avatar in AlbumRow">
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

              <VStep num={3} title="Tag the avatar in AlbumDetailScreen with the same key" last>
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

              <VStep num={1} title="Create the namespace and mark the transition source">
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

              <VStep num={2} title="Add the zoom transition to the detail destination" last>
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


function Lab() {
  const [step, setStep] = useState(0);
  const [platform, setPlatform] = useState("Android");

  return (
    <div>
      <div style={{ display: "flex", gap: 0, marginBottom: 12, borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
        {["Session 1", "Session 2"].map((s, i) => (
          <button key={s} onClick={() => setStep(i)} style={{
            padding: "8px 20px", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer",
            background: step === i ? PL : "var(--color-background-primary)",
            color: step === i ? PD : "var(--color-text-secondary)"
          }}>{s}{i === 0 ? " — The List Screen" : " — Shared Elements & Adaptive"}</button>
        ))}
      </div>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      {step === 0 ? <Session1Lab platform={platform} /> : <Session2Lab platform={platform} />}
    </div>
  );
}

function Project() {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 3 Project: Browse App</h2>
      <Warn>Submit this assignment by the end of Week 4 Session 1 using the Submit button on this page.</Warn>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>
        Build a browse app — a scrollable, searchable list that navigates to a detail screen when a row is tapped. The structure is the same as the album browser you built in lab. The theme and content are entirely yours. You may build in either Android (Jetpack Compose) or iOS (SwiftUI). You do not need to submit both.
      </p>

      <Section title="📋 Step 1 — Pick your theme">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 10px" }}>Choose a category of things you genuinely know about. You need at least 8 items, each with at least 4 meaningful fields. The more specific your theme, the more interesting the app.</p>
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
      </Section>

      <Section title="🗂️ Step 2 — Define your data model">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 10px" }}>Before writing any UI, define your data model. It must have:</p>
        <Checkbox>An <IC>id</IC> field (Int) — required for LazyColumn keys and SwiftUI <IC>Identifiable</IC></Checkbox>
        <Checkbox>At least 4 additional fields with meaningful types (String, Int, Double, Boolean)</Checkbox>
        <Checkbox>At least 8 hardcoded items in your sample data list</Checkbox>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "10px 0 6px" }}>Example for a video games theme:</p>
        <CodeB>{`data class Game(
    val id: Int,
    val title: String,
    val studio: String,
    val year: Int,
    val genre: String,
    val rating: Double
)`}</CodeB>
      </Section>

      <Section title="✅ Required Features" defaultOpen={true}>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 10px" }}>Each feature below has a clear acceptance criterion — what a reviewer will check when grading.</p>

        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".04em", margin: "12px 0 6px" }}>1. List screen</p>
        <Checkbox>Uses <IC>LazyColumn</IC> (Compose) or <IC>List</IC> (SwiftUI) — not a Column with forEach</Checkbox>
        <Checkbox>Shows all 8+ items on launch, each in a custom row layout</Checkbox>
        <Checkbox>Each row displays at least 3 fields — not just the title</Checkbox>
        <Checkbox>Rows have a visible card style (background + rounded corners) — not plain text on a gray screen</Checkbox>

        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".04em", margin: "12px 0 6px" }}>2. Search</p>
        <Checkbox>A search bar is visible at the top of the list screen</Checkbox>
        <Checkbox>Typing filters the list in real time — updates on every keystroke without tapping a button</Checkbox>
        <Checkbox>Search matches at least 2 fields (e.g. title AND artist, not just title)</Checkbox>
        <Checkbox>Clearing the search restores the full list</Checkbox>

        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".04em", margin: "12px 0 6px" }}>3. Empty state</p>
        <Checkbox>When search produces no results, a message is shown — not a blank screen</Checkbox>
        <Checkbox>The empty state includes at least a title ("No results found") and a subtitle ("Try a different search term")</Checkbox>

        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".04em", margin: "12px 0 6px" }}>4. Detail screen</p>
        <Checkbox>Tapping any row navigates to a detail screen for that item</Checkbox>
        <Checkbox>The detail screen shows ALL fields from the data model — not just the ones visible in the row</Checkbox>
        <Checkbox>The detail screen has a visible back button or gesture that returns to the list</Checkbox>
        <Checkbox>The search query is preserved when returning to the list — it does not reset</Checkbox>

        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".04em", margin: "12px 0 6px" }}>5. Code quality</p>
        <Checkbox>The row UI is extracted as a separate Composable or View — not inlined inside <IC>items()</IC></Checkbox>
        <Checkbox>The app does not crash at any point during normal use</Checkbox>
      </Section>

      <Section title="🚀 Stretch Features">
        <Checkbox>Add a second filter dimension — a row of tappable chips (e.g. genre buttons) that filter in addition to the search bar</Checkbox>
        <Checkbox>Add a sort toggle — e.g. alphabetical vs by rating — that reorders the list without reloading</Checkbox>
        <Checkbox>Add a favorites feature — a heart or bookmark icon on the detail screen saves the item to a separate favorites list accessible from the main screen</Checkbox>
        <Checkbox>Add a result count label above the list — "Showing 3 of 8 results" — that updates with the filter</Checkbox>
      </Section>

      <Section title="📘 Submitting your project">
        <ol style={{ fontSize: 13, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
          <li>Create a GitHub repository for your project</li>
          <li>Push your code to the repository</li>
          <li>Create a README using the Unit 3 README template</li>
          <li>In the README, check off all features you implemented by changing <IC>-[ ]</IC> to <IC>-[x]</IC></li>
          <li>Record a GIF that shows: the list on launch, typing a search query, the empty state, tapping a row to detail, and pressing back</li>
          <li>Add the GIF to the README</li>
          <li>Make the repo private and add <IC>codepathreview</IC> as a collaborator</li>
        </ol>
        <Note>The GIF is required. A reviewer cannot grade an app they cannot see running. If your GIF is missing, your submission will be returned ungraded.</Note>
      </Section>

      <Section title="💡 Hints">
        <ul style={{ fontSize: 13, lineHeight: 1.6, paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 10 }}>
            <strong>My filter is not updating in real time</strong>
            <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>Make sure <IC>query</IC> is a state variable — <IC>remember {"{ mutableStateOf(\"\") }"}</IC> in Compose, or <IC>@State</IC> in SwiftUI. A regular <IC>var</IC> does not trigger re-renders, so the list will appear frozen even though the value is changing.</p>
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>My detail screen shows the wrong item</strong>
            <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>In Compose, find the item by ID from your sample list after navigating — do not try to pass the whole object through the route string. Route strings only carry primitive values like <IC>Int</IC> or <IC>String</IC>.</p>
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>The search query resets when I navigate back from detail</strong>
            <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>This happens when you call <IC>navigate()</IC> to a new list screen instead of using <IC>popBackStack()</IC>. Popping returns to the existing list screen with its state intact — navigating creates a fresh one with an empty query.</p>
          </li>
          <li style={{ marginBottom: 0 }}>
            <strong>My row layout looks cramped or misaligned</strong>
            <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>In Compose, use <IC>Modifier.weight(1f)</IC> on the content column inside the row. In SwiftUI, use <IC>Spacer()</IC>. Without it, the trailing element (rating, badge, etc.) will overlap the content.</p>
          </li>
        </ul>
      </Section>
    </div>
  );
}

function Resources() {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Official documentation — Lists</h2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/jetpack/compose/lists" style={{ color: "var(--color-text-info)" }}>Lists and grids in Compose — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/list" style={{ color: "var(--color-text-info)" }}>List — developer.apple.com</a></li>
        <li><a href="https://developer.android.com/reference/kotlin/androidx/compose/foundation/lazy/package-summary" style={{ color: "var(--color-text-info)" }}>LazyColumn reference — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/building-a-great-list-app" style={{ color: "var(--color-text-info)" }}>Building a great list app — developer.apple.com</a></li>
      </ul>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Shared element transitions</h2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/develop/ui/compose/animation/shared-elements" style={{ color: "var(--color-text-info)" }}>Shared element transitions in Compose — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/view/navigationtransition(_:)" style={{ color: "var(--color-text-info)" }}>navigationTransition — developer.apple.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/view/matchedgeometryeffect(id:in:properties:anchor:issource:)" style={{ color: "var(--color-text-info)" }}>matchedGeometryEffect — developer.apple.com</a></li>
      </ul>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Adaptive layouts</h2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/develop/ui/compose/layouts/adaptive" style={{ color: "var(--color-text-info)" }}>Adaptive layouts in Compose — developer.android.com</a></li>
        <li><a href="https://developer.android.com/reference/kotlin/androidx/compose/material3/adaptive/WindowAdaptiveInfo" style={{ color: "var(--color-text-info)" }}>WindowAdaptiveInfo / WindowSizeClass — developer.android.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/navigationsplitview" style={{ color: "var(--color-text-info)" }}>NavigationSplitView — developer.apple.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/environmentvalues/horizontalsizeclass" style={{ color: "var(--color-text-info)" }}>horizontalSizeClass — developer.apple.com</a></li>
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
