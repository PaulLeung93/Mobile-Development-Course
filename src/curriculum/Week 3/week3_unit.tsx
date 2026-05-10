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

const VStep = ({ num, title, children, last = false }: { num: number | string; title: string; children: React.ReactNode; last?: boolean }) => (
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
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 12px", color: "var(--color-text-primary)" }}>Unit 3: Lists & Local Data Mutation (Forms & Sheets)</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Almost every real app has a list — a feed, a catalogue, an inbox, a search results page. This week you learn how to build them with production-quality polish. Session 1 gives you a scrollable, searchable list with tap-to-detail navigation. Session 2 takes that foundation further by exploring <strong>Local Data Mutation (Create & Delete)</strong> via forms, modal bottom sheets, and swipe-to-dismiss—teaching you the mechanics of Unidirectional Data Flow and how declarative UI reacts to state changes.</p>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>What you will learn</h2>
      <UL items={[
        "LazyColumn (Compose) and List (SwiftUI) — efficient scrolling lists",
        "Custom row layouts, unique tracking keys, and list-to-detail navigation wiring",
        "State Mutation & Unidirectional Data Flow — how events trigger state changes and redraw the UI",
        "Local Data CRUD — creating and deleting data in an app",
        "Form fields and input validation — capturing user input defensively",
        "Modal bottom sheets — triggering floating UI with local state",
        "Swipe-to-dismiss — modifying list state via gestures",
        "Prompt engineering — using AI to implement complex interactive patterns",
      ]} />
      <div style={{ marginTop: 12, padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
        <strong>✨ Bonus:</strong> Want to add shared element transitions and adaptive tablet layouts to your album browser? Check out the <strong>Bonus: Shared Elements & Adaptive Layouts</strong> unit after completing Week 3.
      </div>
      <div style={{ marginTop: 16, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
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
            { label: "Session 1", val: "LazyColumn / List basics, custom row layouts, and list-to-detail navigation wiring. Lab: build the album browser. Stretch: real-time search and empty state." },
            { label: "Session 2", val: "Local Data Mutation (Create & Delete) and Unidirectional Data Flow — mastering state updates using forms, bottom sheets, and swipe-to-dismiss." },
            { label: "Lab (each session)", val: "Session 1: build the album browser. Session 2: add a form, a bottom sheet, and swipe-to-dismiss to your album app." },
            { label: "Assignment 3", val: "Guided starter — same album browser structure, your own content and theme. Stretch: add a form or bottom sheet." },
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

          <VStep num="a" title="Create the row skeleton with an avatar">
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

          <VStep num="b" title="Add the album info column">
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

          <VStep num="c" title="Add the star rating" last>
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

          <VStep num="a" title="Make rows tappable">
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

          <VStep num="b" title="Add the pre-built detail screen">
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

          <VStep num="c" title={_platform === "Android" ? "Set up the NavHost" : "Verify navigation works"} last>
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
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 2 Lab: Local Data Mutation — Forms, Sheets & Swipe Actions</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>You are going to build on top of the AlbumBrowser you finished in Session 1. Right now the list is read-only — it shows albums but you cannot add or remove any. By the end of this lab, tapping a + button opens a modal sheet with a form to add a new album, and swiping a row deletes it. Budget about 80–90 minutes.</p>

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"🎯"} Goals</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
          <li>Understand Unidirectional Data Flow — why you mutate <em>data</em>, not UI</li>
          <li>Convert a static list into observable, mutable state</li>
          <li>Add a floating action button (Android) or toolbar button (iOS) to trigger a sheet</li>
          <li>Build a form with text fields to capture user input</li>
          <li>Append a new album to the list and watch the UI update automatically</li>
          <li>Delete albums with a swipe gesture</li>
          <li><strong>Stretch:</strong> Input validation, delete confirmation dialog, undo delete</li>
        </ul>
      </div>

      <div style={{ marginTop: 20 }}>

        <VStep num={0} title="Open your AlbumBrowser project from Session 1">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Open the AlbumBrowser project you built in Session 1. If you did not finish Session 1, ask your TA for the starter code before continuing.</p>
          {_platform === "Android"
            ? <Tip>No new dependencies needed — <IC>ModalBottomSheet</IC> and <IC>SwipeToDismissBox</IC> are both in Material3, which is included in every new Compose project. If you did not add the material-icons-extended dependency in Session 1, you may need it for the delete icon: <IC>implementation("androidx.compose.material:material-icons-extended")</IC>. If you add it now, click <strong>Sync Now</strong> in the toolbar after saving the file.</Tip>
            : <Tip>No new dependencies needed — <IC>.sheet</IC> and <IC>.onDelete</IC> are built into SwiftUI.</Tip>}
          <Note>Right now <IC>sampleAlbums</IC> is a plain {_platform === "Android" ? "Kotlin list" : "Swift array"} defined outside any view. It can never change — the UI has no way to observe it. The first task is turning it into something the framework watches and reacts to.</Note>
        </VStep>

        <VStep num={1} title="Make the album list mutable state">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Before you can add or delete albums, the list must be <em>observable state</em> — a value the framework watches. When it changes, the UI redraws automatically. This is Unidirectional Data Flow in action: you mutate data, and the UI follows.</p>

          <VStep num="a" title="Understand why a plain list does not work">
            <p style={{ fontSize: 13, margin: "0 0 8px" }}>Open <IC>{_platform === "Android" ? "AlbumListScreen.kt" : "AlbumListScreen.swift"}</IC>. Right now the list screen reads directly from the global <IC>sampleAlbums</IC> constant:</p>
            {_platform === "Android" ? (
              <CodeB title="Kotlin — current AlbumListScreen.kt" accent={BL}>{`// sampleAlbums is a top-level val — it never changes.
// LazyColumn renders it once. Even if you could mutate it,
// Compose has no way to know the data changed and the
// screen would never update.
items(sampleAlbums, key = { it.id }) { album ->
    AlbumRow(album = album, onClick = { onAlbumClicked(album) })
}`}</CodeB>
            ) : (
              <CodeB title="Swift — current AlbumListScreen.swift" accent={GR}>{`// sampleAlbums is a global constant.
// SwiftUI is watching nothing — if you could mutate it,
// the List would not know and would not redraw.
List(sampleAlbums) { album in
    AlbumRow(album: album)
}`}</CodeB>
            )}
            <Tip><strong>The core rule of Unidirectional Data Flow:</strong> never reach into the UI to add or remove a view. Instead, mutate the underlying data. The framework detects the change and redraws only what is affected.</Tip>
          </VStep>

          <VStep num="b" title="Convert the list to observable state" last>
            <p style={{ fontSize: 13, margin: "0 0 8px" }}>
              {_platform === "Android"
                ? <>Inside <IC>AlbumListScreen</IC>, declare a mutable state list at the top of the composable function body. Then replace every reference to <IC>sampleAlbums</IC> with your new <IC>albums</IC> variable.</>
                : <>Inside <IC>AlbumListScreen</IC>, add a <IC>{"@State"}</IC> property that holds the albums array. Then replace every reference to <IC>sampleAlbums</IC> with <IC>albums</IC> — including the one inside <IC>.navigationDestination</IC>, so newly added albums can still be navigated to.</>}
            </p>
            {_platform === "Android" ? (
              <>
                <p style={{ fontSize: 13, margin: "0 0 6px" }}>Add this line <strong>at the very top of your <IC>AlbumListScreen</IC> function body</strong>, before the LazyColumn:</p>
                <CodeB title="Kotlin — add inside AlbumListScreen" accent={BL}>{`// mutableStateListOf creates a list Compose observes.
// remember keeps it alive across recompositions.
// The spread operator (*) copies sampleAlbums into the new
// list so you start with data but can now add or remove items.
val albums = remember { mutableStateListOf(*sampleAlbums.toTypedArray()) }`}</CodeB>
                <p style={{ fontSize: 13, margin: "8px 0 6px" }}>Then update the <IC>items()</IC> call to use <IC>albums</IC> instead of <IC>sampleAlbums</IC>:</p>
                <CodeB title="Kotlin — update items() call" accent={BL}>{`items(albums, key = { it.id }) { album ->
    AlbumRow(album = album, onClick = { onAlbumClicked(album) })
}`}</CodeB>
              </>
            ) : (
              <>
                <p style={{ fontSize: 13, margin: "0 0 6px" }}>Add this property <strong>at the top of the <IC>AlbumListScreen</IC> struct</strong>, before <IC>var body</IC>:</p>
                <CodeB title="Swift — add to AlbumListScreen" accent={GR}>{`// @State marks this as observable.
// When albums changes, SwiftUI redraws the List automatically.
@State private var albums = sampleAlbums`}</CodeB>
                <p style={{ fontSize: 13, margin: "8px 0 6px" }}>Replace <IC>sampleAlbums</IC> with <IC>albums</IC> in two places — the <IC>List()</IC> call and the <IC>.navigationDestination</IC> lookup:</p>
                <CodeB title="Swift — update List and navigationDestination" accent={GR}>{`// Change List(sampleAlbums) → List(albums):
List(albums) { album in ...

// Update the lookup so newly added albums are navigable too:
.navigationDestination(for: Int.self) { id in
    let album = albums.first { $0.id == id }!
    AlbumDetailScreen(album: album)
}`}</CodeB>
              </>
            )}
            <Section title={`✅ Check your work — show me the complete ${_platform === "Android" ? "AlbumListScreen.kt" : "AlbumListScreen.swift"} so far`}>
              {_platform === "Android" ? (
                <CodeB title="Kotlin — AlbumListScreen.kt (mutable state)" accent={BL}>{`@Composable
fun AlbumListScreen(onAlbumClicked: (Album) -> Unit = {}) {
    val albums = remember { mutableStateListOf(*sampleAlbums.toTypedArray()) }

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5)),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        items(albums, key = { it.id }) { album ->
            AlbumRow(album = album, onClick = { onAlbumClicked(album) })
        }
    }
}`}</CodeB>
              ) : (
                <CodeB title="Swift — AlbumListScreen.swift (mutable state)" accent={GR}>{`struct AlbumListScreen: View {
    @State private var albums = sampleAlbums

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            List(albums) { album in
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
                let album = albums.first { $0.id == id }!
                AlbumDetailScreen(album: album)
            }
        }
        .navigationTitle("Albums")
    }
}`}</CodeB>
              )}
            </Section>
            <Checkpoint num={1}>Run the app. It should look <strong>identical</strong> to Session 1 — all albums visible, navigation working. Nothing visible changed yet, but the list is now observable state. Any mutation you make in the next steps will instantly appear on screen.</Checkpoint>
          </VStep>
        </VStep>

        <VStep num={2} title="Add a button to trigger the Add Album flow">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>
            {_platform === "Android"
              ? "You need a way for the user to say \"I want to add an album.\" On Android, a Floating Action Button (FAB) is the standard pattern for a screen's primary action. You will place it via Scaffold — the layout container that knows where to position FABs, top bars, and bottom bars relative to system insets."
              : "On iOS, a toolbar button in the navigation bar is the standard way to trigger a primary action. You will add a + button that toggles sheet visibility."}
          </p>

          <VStep num="a" title={_platform === "Android" ? "Wrap AlbumListScreen in a Scaffold" : "Add a state variable for sheet visibility"}>
            {_platform === "Android" ? (
              <>
                <p style={{ fontSize: 13, margin: "0 0 8px" }}><IC>Scaffold</IC> is a Material3 layout composable with slots for FABs, top bars, and bottom bars. It also handles inset padding so content does not slide under system UI. Add a <IC>showSheet</IC> state variable, then wrap the existing <IC>LazyColumn</IC> inside a <IC>Scaffold</IC>. Pass <IC>innerPadding</IC> from the Scaffold lambda into the LazyColumn's modifier:</p>
                <CodeB title="Kotlin — AlbumListScreen with Scaffold" accent={BL}>{`@Composable
fun AlbumListScreen(onAlbumClicked: (Album) -> Unit = {}) {
    val albums = remember { mutableStateListOf(*sampleAlbums.toTypedArray()) }
    var showSheet by remember { mutableStateOf(false) }

    Scaffold(
        floatingActionButton = { /* FAB goes here in sub-step b */ }
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFFF5F5F5))
                .padding(innerPadding),  // keeps content above the FAB
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            items(albums, key = { it.id }) { album ->
                AlbumRow(album = album, onClick = { onAlbumClicked(album) })
            }
        }
    }
}`}</CodeB>
                <Tip><strong>Why innerPadding?</strong> Scaffold calculates how much space the FAB, top bar, and bottom bar occupy and passes it to you as <IC>innerPadding</IC>. Without it, the last list item scrolls under the FAB and becomes unreachable.</Tip>
                <Section title="✅ Check your work — show me the complete AlbumListScreen.kt so far">
                  <CodeB title="Kotlin — AlbumListScreen.kt (Scaffold added)" accent={BL}>{`@Composable
fun AlbumListScreen(onAlbumClicked: (Album) -> Unit = {}) {
    val albums = remember { mutableStateListOf(*sampleAlbums.toTypedArray()) }
    var showSheet by remember { mutableStateOf(false) }

    Scaffold(
        floatingActionButton = { }
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFFF5F5F5))
                .padding(innerPadding),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            items(albums, key = { it.id }) { album ->
                AlbumRow(album = album, onClick = { onAlbumClicked(album) })
            }
        }
    }
}`}</CodeB>
                </Section>
              </>
            ) : (
              <>
                <p style={{ fontSize: 13, margin: "0 0 8px" }}>Add a second <IC>{"@State"}</IC> property to <IC>AlbumListScreen</IC> that tracks whether the Add Album sheet is visible. This is a simple boolean that starts as <IC>false</IC> — setting it to <IC>true</IC> will open the sheet once you wire everything up.</p>
                <CodeB title="Swift — add to AlbumListScreen" accent={GR}>{`struct AlbumListScreen: View {
    @State private var albums = sampleAlbums
    @State private var showingAddSheet = false   // ← add this
    ...
}`}</CodeB>
                <Section title="✅ Check your work — show me the complete AlbumListScreen.swift so far">
                  <CodeB title="Swift — AlbumListScreen.swift (sheet state added)" accent={GR}>{`struct AlbumListScreen: View {
    @State private var albums = sampleAlbums
    @State private var showingAddSheet = false

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            List(albums) { album in
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
                let album = albums.first { $0.id == id }!
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

          <VStep num="b" title={_platform === "Android" ? "Add the FloatingActionButton" : "Add the toolbar button"} last>
            {_platform === "Android" ? (
              <>
                <p style={{ fontSize: 13, margin: "0 0 8px" }}>Fill in the <IC>floatingActionButton</IC> slot with a <IC>FloatingActionButton</IC> that sets <IC>showSheet = true</IC> when tapped. Inside it, add an <IC>Icon</IC> using <IC>Icons.Filled.Add</IC>:</p>
                <CodeB title="Kotlin — fill in the FAB slot" accent={BL}>{`Scaffold(
    floatingActionButton = {
        FloatingActionButton(onClick = { showSheet = true }) {
            Icon(
                imageVector = Icons.Filled.Add,
                contentDescription = "Add album"
            )
        }
    }
) { innerPadding -> ... }`}</CodeB>
                <Section title="💡 Hint: Red squiggle under Icons.Filled.Add">
                  <p style={{ fontSize: 13, margin: "0 0 6px" }}>Press Alt+Enter (Option+Enter on Mac) to auto-import. If it does not appear in the list, add the extended icons dependency to <IC>build.gradle.kts</IC>:</p>
                  <CodeB accent={BL}>{`implementation("androidx.compose.material:material-icons-extended")`}</CodeB>
                  <p style={{ fontSize: 13, margin: "8px 0 0" }}>After adding the line, click <strong>Sync Now</strong> in the toolbar at the top of the editor to download the library.</p>
                </Section>
                <Section title="✅ Check your work — show me the complete AlbumListScreen.kt so far">
                  <CodeB title="Kotlin — AlbumListScreen.kt (FAB added)" accent={BL}>{`@Composable
fun AlbumListScreen(onAlbumClicked: (Album) -> Unit = {}) {
    val albums = remember { mutableStateListOf(*sampleAlbums.toTypedArray()) }
    var showSheet by remember { mutableStateOf(false) }

    Scaffold(
        floatingActionButton = {
            FloatingActionButton(onClick = { showSheet = true }) {
                Icon(
                    imageVector = Icons.Filled.Add,
                    contentDescription = "Add album"
                )
            }
        }
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFFF5F5F5))
                .padding(innerPadding),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            items(albums, key = { it.id }) { album ->
                AlbumRow(album = album, onClick = { onAlbumClicked(album) })
            }
        }
    }
}`}</CodeB>
                </Section>
              </>
            ) : (
              <>
                <p style={{ fontSize: 13, margin: "0 0 8px" }}>Add a <IC>.toolbar</IC> modifier to the outer <IC>ZStack</IC> in <IC>AlbumListScreen</IC>. Place a <IC>ToolbarItem</IC> in the <IC>.navigationBarTrailing</IC> position with a <IC>Button</IC> that sets <IC>showingAddSheet = true</IC>:</p>
                <CodeB title="Swift — toolbar modifier" accent={GR}>{`// Add after .navigationTitle("Albums")
.toolbar {
    ToolbarItem(placement: .navigationBarTrailing) {
        Button(action: { showingAddSheet = true }) {
            Image(systemName: "plus")
        }
    }
}`}</CodeB>
                <Section title="✅ Check your work — show me the complete AlbumListScreen.swift so far">
                  <CodeB title="Swift — AlbumListScreen.swift (toolbar added)" accent={GR}>{`struct AlbumListScreen: View {
    @State private var albums = sampleAlbums
    @State private var showingAddSheet = false

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            List(albums) { album in
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
                let album = albums.first { $0.id == id }!
                AlbumDetailScreen(album: album)
            }
        }
        .navigationTitle("Albums")
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Button(action: { showingAddSheet = true }) {
                    Image(systemName: "plus")
                }
            }
        }
    }
}`}</CodeB>
                </Section>
              </>
            )}
            <Checkpoint num={2}>{_platform === "Android" ? "A floating action button with a + icon appears at the bottom right. Tapping it does nothing visible yet — but showSheet is toggling to true." : "A + button appears in the top-right corner of the navigation bar. Tapping it does nothing visible yet — but showingAddSheet is toggling."}</Checkpoint>
          </VStep>
        </VStep>

        <VStep num={3} title="Build the Add Album form">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Now you will build the form that collects album details. It lives inside a modal — a {_platform === "Android" ? "ModalBottomSheet that slides up from the bottom" : "sheet that slides up from the bottom"}. You will create a separate file for the form content, then connect it to <IC>AlbumListScreen</IC>.</p>

          <VStep num="a" title={_platform === "Android" ? "Create AddAlbumSheet.kt with text fields" : "Create AddAlbumView.swift with text fields"}>
            <p style={{ fontSize: 13, margin: "0 0 8px" }}>
              {_platform === "Android"
                ? <>In Android Studio, right-click your package folder in the Project panel → <strong>New → Kotlin Class/File → File</strong>. Name it <IC>AddAlbumSheet.kt</IC>. Then define a <IC>{"@Composable"}</IC> function <IC>AddAlbumSheet</IC> that takes one parameter: <IC>{"onSave: (Album) -> Unit"}</IC>. This is a callback — the sheet does not know what to do with the new album; it just packages the user input and fires the callback. <IC>AlbumListScreen</IC> will receive it and mutate its state.</>
                : <>In Xcode, right-click your project group in the Navigator → <strong>New File → Swift File</strong> (not SwiftUI View). Name it <IC>AddAlbumView.swift</IC>. Then define a <IC>struct AddAlbumView: View</IC> with one property: <IC>{"let onSave: (Album) -> Void"}</IC>. This view does not mutate state directly — it gathers input and fires the callback. <IC>AlbumListScreen</IC> will handle the mutation.</>}
            </p>
            {_platform === "Android" ? (
              <ul style={{ paddingLeft: 20, margin: "0 0 8px", lineHeight: 1.8, fontSize: 13 }}>
                <li>Declare four state variables — one for each field: <IC>title</IC>, <IC>artist</IC>, <IC>year</IC>, <IC>genre</IC></li>
                <li>Add a <IC>Column</IC> with 24dp padding and <IC>fillMaxWidth()</IC></li>
                <li>Inside the Column: a bold 18sp <IC>Text("Add Album")</IC> heading, then a 16dp <IC>Spacer</IC></li>
                <li>Four <IC>OutlinedTextField</IC>s, each with <IC>fillMaxWidth()</IC> and a matching <IC>label</IC></li>
                <li>For the Year field, also add <IC>keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)</IC></li>
              </ul>
            ) : (
              <ul style={{ paddingLeft: 20, margin: "0 0 8px", lineHeight: 1.8, fontSize: 13 }}>
                <li>Declare four <IC>{"@State"}</IC> properties: <IC>title</IC>, <IC>artist</IC>, <IC>year</IC>, <IC>genre</IC></li>
                <li>Declare <IC>{"@Environment(\\.dismiss) var dismiss"}</IC> — you will wire this to the Cancel button in sub-step b</li>
                <li>In the body: a <IC>NavigationStack</IC> wrapping a <IC>Form</IC></li>
                <li>Inside the Form: <IC>{"Section(\"Album Details\")"}</IC> containing four <IC>TextField</IC>s</li>
                <li>For the Year field, add <IC>.keyboardType(.numberPad)</IC></li>
                <li>Add <IC>.navigationTitle("Add Album")</IC> and <IC>.navigationBarTitleDisplayMode(.inline)</IC> to the Form</li>
              </ul>
            )}
            {_platform === "Android" ? (
              <Section title="💡 Show me the OutlinedTextField syntax">
                <CodeB title="Kotlin — OutlinedTextField pattern" accent={BL}>{`OutlinedTextField(
    value = title,
    onValueChange = { title = it },
    label = { Text("Title") },
    modifier = Modifier.fillMaxWidth()
)
// For the Year field, also add:
// keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)`}</CodeB>
              </Section>
            ) : (
              <Section title="💡 Show me the TextField syntax">
                <CodeB title="Swift — TextField pattern" accent={GR}>{`TextField("Title", text: $title)
// For the Year field, also add:
// .keyboardType(.numberPad)`}</CodeB>
              </Section>
            )}
            <Section title={`✅ Check your work — show me the complete ${_platform === "Android" ? "AddAlbumSheet.kt" : "AddAlbumView.swift"} so far`}>
              {_platform === "Android" ? (
                <CodeB title="Kotlin — AddAlbumSheet.kt (fields only, no Save yet)" accent={BL}>{`@Composable
fun AddAlbumSheet(onSave: (Album) -> Unit) {
    var title  by remember { mutableStateOf("") }
    var artist by remember { mutableStateOf("") }
    var year   by remember { mutableStateOf("") }
    var genre  by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(24.dp)
    ) {
        Text("Add Album", fontSize = 18.sp, fontWeight = FontWeight.Bold)
        Spacer(modifier = Modifier.height(16.dp))
        OutlinedTextField(
            value = title,
            onValueChange = { title = it },
            label = { Text("Title") },
            modifier = Modifier.fillMaxWidth()
        )
        OutlinedTextField(
            value = artist,
            onValueChange = { artist = it },
            label = { Text("Artist") },
            modifier = Modifier.fillMaxWidth()
        )
        OutlinedTextField(
            value = year,
            onValueChange = { year = it },
            label = { Text("Year") },
            modifier = Modifier.fillMaxWidth(),
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Number
            )
        )
        OutlinedTextField(
            value = genre,
            onValueChange = { genre = it },
            label = { Text("Genre") },
            modifier = Modifier.fillMaxWidth()
        )
        // Save button goes in sub-step b
    }
}`}</CodeB>
              ) : (
                <CodeB title="Swift — AddAlbumView.swift (fields only, no Save yet)" accent={GR}>{`struct AddAlbumView: View {
    @Environment(\\.dismiss) var dismiss
    @State private var title  = ""
    @State private var artist = ""
    @State private var year   = ""
    @State private var genre  = ""

    let onSave: (Album) -> Void

    var body: some View {
        NavigationStack {
            Form {
                Section("Album Details") {
                    TextField("Title",  text: $title)
                    TextField("Artist", text: $artist)
                    TextField("Year",   text: $year)
                        .keyboardType(.numberPad)
                    TextField("Genre",  text: $genre)
                }
            }
            .navigationTitle("Add Album")
            .navigationBarTitleDisplayMode(.inline)
            // toolbar with Cancel + Save buttons goes in sub-step b
        }
    }
}`}</CodeB>
              )}
            </Section>
          </VStep>

          <VStep num="b" title="Add the Save button">
            <p style={{ fontSize: 13, margin: "0 0 8px" }}>
              {_platform === "Android"
                ? <>Below the last <IC>OutlinedTextField</IC>, add a 16dp <IC>Spacer</IC> and then a full-width <IC>Button</IC> labelled "Save Album". In its <IC>onClick</IC>: build a new <IC>Album</IC> from the field values, then call <IC>onSave(newAlbum)</IC>. Use <IC>{"(0..Int.MAX_VALUE).random()"}</IC> for the id (a random number in a safe Int range — unique enough for a single session), <IC>{"year.toIntOrNull() ?: 2024"}</IC> to parse the year safely, and <IC>0</IC> / <IC>0.0</IC> as placeholder values for tracks and rating.</>
                : <>Add a <IC>.toolbar</IC> modifier to the <IC>Form</IC> with two toolbar items: a Cancel button using <IC>.cancellationAction</IC> placement that calls <IC>dismiss()</IC>, and a Save button using <IC>.confirmationAction</IC> that builds a new <IC>Album</IC> and calls <IC>onSave(newAlbum)</IC>. Use <IC>{"Int.random(in: 1000...9999)"}</IC> for the id, <IC>{"Int(year) ?? 2024"}</IC> to parse the year, and <IC>0</IC> / <IC>0.0</IC> for tracks and rating.</>}
            </p>
            <Section title={`✅ Check your work — show me the complete ${_platform === "Android" ? "AddAlbumSheet.kt" : "AddAlbumView.swift"}`}>
              {_platform === "Android" ? (
                <CodeB title="Kotlin — AddAlbumSheet.kt (complete)" accent={BL}>{`@Composable
fun AddAlbumSheet(onSave: (Album) -> Unit) {
    var title  by remember { mutableStateOf("") }
    var artist by remember { mutableStateOf("") }
    var year   by remember { mutableStateOf("") }
    var genre  by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(24.dp)
    ) {
        Text("Add Album", fontSize = 18.sp, fontWeight = FontWeight.Bold)
        Spacer(modifier = Modifier.height(16.dp))
        OutlinedTextField(
            value = title, onValueChange = { title = it },
            label = { Text("Title") }, modifier = Modifier.fillMaxWidth()
        )
        OutlinedTextField(
            value = artist, onValueChange = { artist = it },
            label = { Text("Artist") }, modifier = Modifier.fillMaxWidth()
        )
        OutlinedTextField(
            value = year, onValueChange = { year = it },
            label = { Text("Year") }, modifier = Modifier.fillMaxWidth(),
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)
        )
        OutlinedTextField(
            value = genre, onValueChange = { genre = it },
            label = { Text("Genre") }, modifier = Modifier.fillMaxWidth()
        )
        Spacer(modifier = Modifier.height(16.dp))
        Button(
            onClick = {
                val newAlbum = Album(
                    id     = (0..Int.MAX_VALUE).random(),
                    title  = title,
                    artist = artist,
                    year   = year.toIntOrNull() ?: 2024,
                    genre  = genre,
                    tracks = 0,
                    rating = 0.0
                )
                onSave(newAlbum)
            },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text("Save Album")
        }
    }
}`}</CodeB>
              ) : (
                <CodeB title="Swift — AddAlbumView.swift (complete)" accent={GR}>{`struct AddAlbumView: View {
    @Environment(\\.dismiss) var dismiss
    @State private var title  = ""
    @State private var artist = ""
    @State private var year   = ""
    @State private var genre  = ""

    let onSave: (Album) -> Void

    var body: some View {
        NavigationStack {
            Form {
                Section("Album Details") {
                    TextField("Title",  text: $title)
                    TextField("Artist", text: $artist)
                    TextField("Year",   text: $year)
                        .keyboardType(.numberPad)
                    TextField("Genre",  text: $genre)
                }
            }
            .navigationTitle("Add Album")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("Cancel") { dismiss() }
                }
                ToolbarItem(placement: .confirmationAction) {
                    Button("Save") {
                        let newAlbum = Album(
                            id:     Int.random(in: 1000...9999),
                            title:  title,
                            artist: artist,
                            year:   Int(year) ?? 2024,
                            genre:  genre,
                            tracks: 0,
                            rating: 0.0
                        )
                        onSave(newAlbum)
                    }
                }
            }
        }
    }
}`}</CodeB>
              )}
            </Section>
          </VStep>

          <VStep num="c" title={_platform === "Android" ? "Connect ModalBottomSheet to AlbumListScreen" : "Connect the sheet to AlbumListScreen"} last>
            <p style={{ fontSize: 13, margin: "0 0 8px" }}>
              {_platform === "Android"
                ? <>Back in <IC>AlbumListScreen.kt</IC>, add a <IC>ModalBottomSheet</IC> <strong>after the closing brace of the Scaffold block</strong>. Guard it with <IC>if (showSheet)</IC> so it only appears when triggered. Pass an <IC>onSave</IC> lambda that appends the new album to <IC>albums</IC> and sets <IC>showSheet = false</IC>.</>
                : <>Back in <IC>AlbumListScreen.swift</IC>, add a <IC>.sheet(isPresented: $showingAddSheet)</IC> modifier to the outer <IC>ZStack</IC>, after <IC>.toolbar</IC>. In the sheet closure, create an <IC>AddAlbumView</IC> and pass an <IC>onSave</IC> closure that appends the album to <IC>albums</IC> and sets <IC>showingAddSheet = false</IC>. Setting the binding to <IC>false</IC> is what dismisses the sheet — <IC>.sheet(isPresented:)</IC> watches the binding and slides the sheet away whenever it becomes false.</>}
            </p>
            {_platform === "Android" ? (
              <CodeB title="Kotlin — add after Scaffold { } in AlbumListScreen" accent={BL}>{`if (showSheet) {
    ModalBottomSheet(
        onDismissRequest = { showSheet = false }
    ) {
        AddAlbumSheet(
            onSave = { newAlbum ->
                albums.add(newAlbum)  // mutate state → list redraws
                showSheet = false     // dismiss the sheet
            }
        )
    }
}`}</CodeB>
            ) : (
              <CodeB title="Swift — add to ZStack in AlbumListScreen" accent={GR}>{`// Add after .toolbar { }
.sheet(isPresented: $showingAddSheet) {
    AddAlbumView { newAlbum in
        albums.append(newAlbum)   // mutate state → list redraws
        showingAddSheet = false   // dismiss the sheet
    }
}`}</CodeB>
            )}
            <Section title={`✅ Check your work — show me the complete ${_platform === "Android" ? "AlbumListScreen.kt" : "AlbumListScreen.swift"}`}>
              {_platform === "Android" ? (
                <CodeB title="Kotlin — AlbumListScreen.kt (complete with sheet)" accent={BL}>{`@Composable
fun AlbumListScreen(onAlbumClicked: (Album) -> Unit = {}) {
    val albums = remember { mutableStateListOf(*sampleAlbums.toTypedArray()) }
    var showSheet by remember { mutableStateOf(false) }

    Scaffold(
        floatingActionButton = {
            FloatingActionButton(onClick = { showSheet = true }) {
                Icon(
                    imageVector = Icons.Filled.Add,
                    contentDescription = "Add album"
                )
            }
        }
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFFF5F5F5))
                .padding(innerPadding),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            items(albums, key = { it.id }) { album ->
                AlbumRow(album = album, onClick = { onAlbumClicked(album) })
            }
        }
    }

    if (showSheet) {
        ModalBottomSheet(
            onDismissRequest = { showSheet = false }
        ) {
            AddAlbumSheet(
                onSave = { newAlbum ->
                    albums.add(newAlbum)
                    showSheet = false
                }
            )
        }
    }
}`}</CodeB>
              ) : (
                <CodeB title="Swift — AlbumListScreen.swift (complete with sheet)" accent={GR}>{`struct AlbumListScreen: View {
    @State private var albums = sampleAlbums
    @State private var showingAddSheet = false

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            List(albums) { album in
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
                let album = albums.first { $0.id == id }!
                AlbumDetailScreen(album: album)
            }
        }
        .navigationTitle("Albums")
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Button(action: { showingAddSheet = true }) {
                    Image(systemName: "plus")
                }
            }
        }
        .sheet(isPresented: $showingAddSheet) {
            AddAlbumView { newAlbum in
                albums.append(newAlbum)
                showingAddSheet = false
            }
        }
    }
}`}</CodeB>
              )}
            </Section>
            <Checkpoint num={3}>Tap the {_platform === "Android" ? "FAB" : "+ button"}. The sheet slides up. Fill in a title, artist, year, and genre, then tap Save. The sheet closes and the new album appears at the bottom of the list — immediately, with no refresh. This is Unidirectional Data Flow: you mutated <IC>albums</IC>, and the UI followed automatically.</Checkpoint>
          </VStep>
        </VStep>

        <VStep num={4} title="Swipe to delete">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>
            {_platform === "Android"
              ? "Deleting is the other half of local mutation. You will wrap each row in a SwipeToDismissBox so that swiping left reveals a red delete background and removes the album from state."
              : "SwiftUI's List has a built-in .onDelete modifier that handles the swipe gesture automatically. You need to switch from the List(albums) shorthand to an explicit ForEach so .onDelete has somewhere to attach, then tell it how to update state."}
          </p>

          {_platform === "Android" ? (
            <>
              <VStep num="a" title="Wrap AlbumRow in SwipeToDismissBox" last>
                <p style={{ fontSize: 13, margin: "0 0 8px" }}>Inside the <IC>items()</IC> block, wrap <IC>AlbumRow</IC> in a <IC>SwipeToDismissBox</IC>. It takes two key parameters:</p>
                <ul style={{ fontSize: 13, paddingLeft: 20, margin: "0 0 8px", lineHeight: 1.7 }}>
                  <li><IC>state</IC> — created with <IC>rememberSwipeToDismissBoxState</IC>, tracks how far the user has swiped. The <IC>confirmValueChange</IC> lambda fires when a full swipe completes. Return <IC>true</IC> to confirm the dismiss (item is removed) or <IC>false</IC> to snap the row back.</li>
                  <li><IC>backgroundContent</IC> — the red panel revealed as the row slides away. Use a full-size red <IC>Box</IC> with a white delete icon aligned to the end edge.</li>
                </ul>
                <CodeB title="Kotlin — SwipeToDismissBox inside items()" accent={BL}>{`items(albums, key = { it.id }) { album ->
    SwipeToDismissBox(
        state = rememberSwipeToDismissBoxState(
            confirmValueChange = { value ->
                if (value == SwipeToDismissBoxValue.EndToStart) {
                    albums.remove(album)  // mutate state
                    true                  // confirm: row animates out
                } else {
                    false                 // cancel: row snaps back
                }
            }
        ),
        backgroundContent = {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(Color.Red)
                    .padding(end = 20.dp),
                contentAlignment = Alignment.CenterEnd
            ) {
                Icon(
                    imageVector = Icons.Filled.Delete,
                    contentDescription = "Delete",
                    tint = Color.White
                )
            }
        }
    ) {
        AlbumRow(album = album, onClick = { onAlbumClicked(album) })
    }
}`}</CodeB>
                <Section title="💡 Hint: Red squiggles under SwipeToDismissBox or Icons.Filled.Delete">
                  Press Alt+Enter on each symbol to auto-import. You need <IC>SwipeToDismissBox</IC>, <IC>SwipeToDismissBoxValue</IC>, <IC>rememberSwipeToDismissBoxState</IC>, and <IC>Icons.Filled.Delete</IC>.
                </Section>
                <Section title="✅ Check your work — show me the complete AlbumListScreen.kt">
                  <CodeB title="Kotlin — AlbumListScreen.kt (complete with swipe-to-delete)" accent={BL}>{`@Composable
fun AlbumListScreen(onAlbumClicked: (Album) -> Unit = {}) {
    val albums = remember { mutableStateListOf(*sampleAlbums.toTypedArray()) }
    var showSheet by remember { mutableStateOf(false) }

    Scaffold(
        floatingActionButton = {
            FloatingActionButton(onClick = { showSheet = true }) {
                Icon(Icons.Filled.Add, contentDescription = "Add album")
            }
        }
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFFF5F5F5))
                .padding(innerPadding),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            items(albums, key = { it.id }) { album ->
                SwipeToDismissBox(
                    state = rememberSwipeToDismissBoxState(
                        confirmValueChange = { value ->
                            if (value == SwipeToDismissBoxValue.EndToStart) {
                                albums.remove(album)
                                true
                            } else false
                        }
                    ),
                    backgroundContent = {
                        Box(
                            modifier = Modifier
                                .fillMaxSize()
                                .background(Color.Red)
                                .padding(end = 20.dp),
                            contentAlignment = Alignment.CenterEnd
                        ) {
                            Icon(
                                Icons.Filled.Delete,
                                contentDescription = "Delete",
                                tint = Color.White
                            )
                        }
                    }
                ) {
                    AlbumRow(album = album, onClick = { onAlbumClicked(album) })
                }
            }
        }
    }

    if (showSheet) {
        ModalBottomSheet(onDismissRequest = { showSheet = false }) {
            AddAlbumSheet(
                onSave = { newAlbum ->
                    albums.add(newAlbum)
                    showSheet = false
                }
            )
        }
    }
}`}</CodeB>
                </Section>
              </VStep>
              <Note><IC>albums.remove(album)</IC> triggers a recomposition of the <IC>LazyColumn</IC>. Because every row has a unique <IC>key</IC>, Compose knows exactly which row to animate out — it does not redraw the whole list.</Note>
            </>
          ) : (
            <>
              <VStep num="a" title="Switch to ForEach and add .onDelete" last>
                <p style={{ fontSize: 13, margin: "0 0 8px" }}>The <IC>.onDelete</IC> modifier must attach to a <IC>ForEach</IC> inside the list, not the list itself. Change <IC>List(albums) {"{"} album in ... {"}"}</IC> to <IC>List {"{"} ForEach(albums) {"{"} album in ... {"}"} .onDelete {"{"} ... {"}"} {"}"}</IC>. The visual result is identical — only the structure changes:</p>
                <CodeB title="Swift — List + ForEach + .onDelete" accent={GR}>{`List {
    ForEach(albums) { album in
        NavigationLink(value: album.id) {
            AlbumRow(album: album)
        }
        .listRowInsets(EdgeInsets(
            top: 4, leading: 16,
            bottom: 4, trailing: 16))
        .listRowBackground(Color.clear)
        .listRowSeparator(.hidden)
    }
    .onDelete { indexSet in
        albums.remove(atOffsets: indexSet)  // mutate state
    }
}`}</CodeB>
                <Tip><strong>Why ForEach instead of List(_:)?</strong> <IC>List(_:)</IC> with a data array is a convenience shorthand that creates an implicit <IC>ForEach</IC> internally. <IC>.onDelete</IC> needs to attach to an <em>explicit</em> <IC>ForEach</IC> so SwiftUI knows which rows are deletable. Switching gives you that control — one extra line of structure for built-in swipe gestures.</Tip>
                <Section title="✅ Check your work — show me the complete AlbumListScreen.swift">
                  <CodeB title="Swift — AlbumListScreen.swift (complete with swipe-to-delete)" accent={GR}>{`struct AlbumListScreen: View {
    @State private var albums = sampleAlbums
    @State private var showingAddSheet = false

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            List {
                ForEach(albums) { album in
                    NavigationLink(value: album.id) {
                        AlbumRow(album: album)
                    }
                    .listRowInsets(EdgeInsets(
                        top: 4, leading: 16,
                        bottom: 4, trailing: 16))
                    .listRowBackground(Color.clear)
                    .listRowSeparator(.hidden)
                }
                .onDelete { indexSet in
                    albums.remove(atOffsets: indexSet)
                }
            }
            .listStyle(.plain)
            .navigationDestination(for: Int.self) { id in
                let album = albums.first { $0.id == id }!
                AlbumDetailScreen(album: album)
            }
        }
        .navigationTitle("Albums")
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Button(action: { showingAddSheet = true }) {
                    Image(systemName: "plus")
                }
            }
        }
        .sheet(isPresented: $showingAddSheet) {
            AddAlbumView { newAlbum in
                albums.append(newAlbum)
                showingAddSheet = false
            }
        }
    }
}`}</CodeB>
                </Section>
              </VStep>
              <Note><IC>albums.remove(atOffsets:)</IC> is one line. SwiftUI handles the swipe gesture, the red Delete button reveal, the animation, and the list update — all because the list is backed by <IC>{"@State"}</IC>.</Note>
            </>
          )}

          <Checkbox>Swipe any album row to the left. A red delete indicator appears.</Checkbox>
          <Checkbox>Complete the swipe — the album disappears with an animation. Other rows stay in place.</Checkbox>
          <Checkbox>Add a new album via the form, then swipe it away. Confirms delete works on dynamically added rows.</Checkbox>
          <Checkbox>Navigate into a detail screen, press back, and swipe that album away. State is consistent across navigation.</Checkbox>
          <Checkpoint num={4}>Every row is swipeable. Deleting an album removes only that row — all others stay exactly in place. This is the key in action: because every item has a unique ID, the framework updates only the affected row.</Checkpoint>
        </VStep>

        <VStep num={5} title="Ask Claude to translate and compare">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>You have implemented local data mutation on one platform. Ask Claude to translate the key pieces to the other and explain how the patterns compare.</p>
          <AiOpp>
            Paste your <IC>AlbumListScreen</IC> and <IC>{_platform === "Android" ? "AddAlbumSheet" : "AddAlbumView"}</IC> into Claude and use this prompt: <em>{_platform === "Android"
              ? "\"I built a Compose screen with mutableStateListOf, a ModalBottomSheet with a form, and SwipeToDismissBox for delete. Translate AlbumListScreen and AddAlbumSheet to SwiftUI. Then compare: mutableStateListOf vs @State array, ModalBottomSheet vs .sheet, SwipeToDismissBox vs .onDelete — which required more code and why?\""
              : "\"I built a SwiftUI screen with @State albums, a .sheet with a Form, and ForEach + .onDelete for delete. Translate AlbumListScreen and AddAlbumView to Compose. Then compare: @State array vs mutableStateListOf, .sheet vs ModalBottomSheet, .onDelete vs SwipeToDismissBox — which required more code and why?\""}</em>
          </AiOpp>
          <Checkbox>Received and read Claude's translation and explanation</Checkbox>
          <Checkbox>Both platform versions compile and run: add works, swipe-to-delete works</Checkbox>
        </VStep>

        <VStep num={6} title="Reflect" last>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>Add a reflection comment block at the top of <IC>{_platform === "Android" ? "AlbumListScreen.kt" : "AlbumListScreen.swift"}</IC> and answer these questions in your own words:</p>
          <CodeB title="Lab Reflection (Week 3, Session 2)">{`// Lab Reflection (Week 3, Session 2)
// 1. What is Unidirectional Data Flow? Describe it in one or two
//    sentences using the "add album" feature as your example.
// 2. What would happen if you forgot mutableStateListOf / @State and
//    just used a plain list? Why would the UI not update?
// 3. When you swipe to delete, only the deleted row animates away.
//    Why doesn't the whole list re-render?
// 4. Compare the swipe-to-delete APIs on both platforms. Which gave
//    you more control? Which required less code?`}</CodeB>
          <Checkpoint num="Final">Show a TA your album browser: add a new album and watch it appear instantly; swipe an album away and watch it disappear. Walk them through your reflection answers.</Checkpoint>
        </VStep>

      </div>

      <Section title="🚀 Stretch Features">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, margin: "0 0 16px" }}>If you finished early, these extend what you built. None are covered in lecture — use Claude if you get stuck.</p>

        <div style={{ marginBottom: 24 }}>
          <h4 style={{ fontSize: 14, fontWeight: 600, color: _platform === "Android" ? BL : GR, margin: "0 0 8px" }}>Stretch A — Input validation</h4>
          <p style={{ fontSize: 13, margin: "0 0 8px" }}>Prevent saving when title or artist is empty. Disable the Save button when either required field is blank.</p>
          {_platform === "Android" ? (
            <CodeB title="Kotlin — validation hint" accent={BL}>{`Button(
    onClick = { ... },
    enabled = title.isNotBlank() && artist.isNotBlank(),
    modifier = Modifier.fillMaxWidth()
) { Text("Save Album") }`}</CodeB>
          ) : (
            <CodeB title="Swift — validation hint" accent={GR}>{`Button("Save") { ... }
    .disabled(title.isEmpty || artist.isEmpty)`}</CodeB>
          )}
          <Checkpoint num="A">Try tapping Save with an empty title — the button is disabled. Fill in all required fields — the button enables.</Checkpoint>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h4 style={{ fontSize: 14, fontWeight: 600, color: _platform === "Android" ? BL : GR, margin: "0 0 8px" }}>Stretch B — Delete confirmation</h4>
          <p style={{ fontSize: 13, margin: "0 0 8px" }}>Before permanently deleting, show a confirmation dialog. Only delete if the user confirms.</p>
          <AiOpp>
            Use this prompt: <em>{_platform === "Android"
              ? "\"In my Compose app, when a SwipeToDismissBox swipe completes, I want to show an AlertDialog — 'Delete [album title]? This cannot be undone.' with Cancel and Delete buttons — before calling albums.remove(album). Show me how.\""
              : "\"In my SwiftUI app, when a user triggers .onDelete, I want to show a confirmationDialog — 'Delete [album title]?' with Cancel and Delete buttons — before removing it from state. Show me how to modify the .onDelete handler.\""}</em>
          </AiOpp>
        </div>

        <h4 style={{ fontSize: 14, fontWeight: 600, margin: "8px 0 8px" }}>More stretch ideas</h4>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8, margin: 0 }}>
          <li>Add an undo toast — briefly show a {"\""}Deleted [title] — Undo{"\""}  message that re-inserts the album if tapped</li>
          <li>Add a character counter below the title field: {"\""}12 / 50{"\""}  that updates as the user types</li>
          <li>Add a rating slider (1.0–5.0) to the form and display the saved rating in the row</li>
          <li>Long-press a row to open the sheet pre-filled with that album{"'"}s data for editing</li>
        </ul>
      </Section>
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
          }}>{s}{i === 0 ? " — The List Screen" : " — Forms, Sheets & Swipe Actions"}</button>
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
