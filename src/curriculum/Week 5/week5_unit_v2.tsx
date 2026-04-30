import { useState } from "react";

const TABS = ["Overview", "Lab", "Project", "Capstone", "Resources"];
const PLATFORMS = ["Android", "iOS"];

/* ── colors (same as Week 6) ── */
const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const G = "#085041", GL = "#E1F5EE";
const AM = "#633806", AML = "#FAEEDA";
const BL = "#7F52FF", BLL = "#F0EEFF";
const GR = "#F05138", GRL = "#FFF2F0";
const CAP_C = "#993C1D", CAP_BG = "#FAECE7";

/* ── shared components (matching Week 6) ── */
const Section = ({ title, children, defaultOpen = false }) => {
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

const CodeB = ({ title, accent, children }) => (
  <div style={{ margin: "10px 0" }}>
    {title && <div style={{ background: accent || P_C, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0" }}>{title}</div>}
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11.5, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Checkpoint = ({ num, children }) => (
  <div className="callout-checkpoint" style={{ margin: "14px 0", padding: "10px 14px", background: "#E8FCE8", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <strong>{"🎯"} Checkpoint {num}:</strong> {children}
  </div>
);

const AiOpp = ({ children }) => (
  <div className="callout-ai" style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>{"✨"} AI Opportunity</div>
    {children}
  </div>
);

const Warn = ({ children }) => (
  <div className="callout-warn" style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E6", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #EF9F27" }}>
    {"⚠️"} {children}
  </div>
);

const Tip = ({ children }) => (
  <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>
    {"💡"} {children}
  </div>
);

const Step = ({ num, title, children }) => (
  <div style={{ margin: "18px 0" }}>
    <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--platform-accent, var(--color-text-primary))", margin: "0 0 8px" }}>Step {num}: {title}</h4>
    <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
  </div>
);

const VStep = ({ num, title, children, last = false }) => (
  <div style={{ display: "flex", gap: 12 }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--platform-accent, #534AB7)", color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{num}</div>
      {!last && <div style={{ width: 2, flex: 1, minHeight: 20, background: "var(--color-border-tertiary)", margin: "3px 0" }} />}
    </div>
    <div style={{ paddingBottom: last ? 8 : 24, flex: 1, minWidth: 0 }}>
      <h4 style={{ fontSize: 13, fontWeight: 600, margin: "3px 0 8px", color: "var(--color-text-primary)" }}>{title}</h4>
      <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
    </div>
  </div>
);

const Link = ({ children }) => <span style={{ color: P_C, textDecoration: "underline", cursor: "pointer" }}>{children}</span>;
const IC = ({ children }) => <code style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 4, padding: "1px 5px", fontSize: 12 }}>{children}</code>;

const PlatformToggle = ({ platform, setPlatform }) => (
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

/* ══════════════════════ OVERVIEW ══════════════════════ */
const Overview = () => (
  <div>
    <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 12 }}>
      Don{"'"}t forget to fill out the {"✏️"} <Link>Session Survey</Link> at the end of each class session!
    </div>
    <div className="callout-warn" style={{ background: "#FFF8E6", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 16 }}>
      {"🎯"} <strong>REMINDER:</strong> Assignment 4 (networked app) is due before this week{"'"}s Session 1. Also: <Link>team formation + platform selection</Link> due by end of Session 2 (see Capstone tab).
    </div>

    <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>Unit 5: Local Storage & Persistence</h2>

    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
      Your app can now fetch real data from the internet. But the moment you close it, everything is gone. This week you learn how to save data locally — so favourites persist between sessions, preferences are remembered, and your app works even without a network connection.
    </p>

    <div style={{ background: AML, border: "1px solid #FAC775", borderRadius: 8, padding: "12px 16px", margin: "0 0 16px" }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: AM, margin: "0 0 4px" }}>{"🎓"} Last individual assignment week</p>
      <p style={{ fontSize: 13, color: AM, margin: 0, lineHeight: 1.6 }}>By the end of this week you{"'"}ll have touched every major mobile concept — UI, state, navigation, lists, networking, and now persistence. Starting Week 6, you{"'"}ll work in teams on your capstone project.</p>
    </div>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <p style={{ margin: "0 0 10px" }}>This week we{"'"}ll cover:</p>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        <li>Why apps need local storage — and when to use a database vs simple key-value storage</li>
        <li>Room (Android) and SwiftData (iOS) — defining entities, reading and writing data</li>
        <li>Building a favourites feature that persists across app restarts</li>
        <li>The offline-first pattern — showing cached data instantly while fetching fresh data in the background</li>
        <li>DataStore (Android) and UserDefaults (iOS) — storing simple user preferences</li>
      </ul>
    </div>

    <div style={{ marginTop: 20, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
      <strong>Session Info</strong>
      <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
        <li>{"📅"} See your cohort{"'"}s schedule for session times</li>
        <li>{"↗"} <Link>Session Zoom Link</Link> | Passcode: <strong>codepath</strong></li>
        <li>{"📊"} <Link>Link to Slides</Link></li>
      </ul>
      <strong style={{ display: "block", marginTop: 10 }}>Upcoming Due Dates</strong>
      <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
        <li>{"📬"} <Link>Assignment 5</Link> (persistence) due end of Week 6 Session 1</li>
        <li>{"🤝"} Team formation + platform selection due by end of Session 2</li>
      </ul>
    </div>

    <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
      <strong>{"📦 This unit at a glance"}</strong>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
        {[
          { label: "Session 1", val: "Room / SwiftData basics. Define an entity, insert and read data, build a favourites feature on the album browser." },
          { label: "Session 2", val: "Offline-first pattern — cache API responses locally. DataStore / UserDefaults for user preferences." },
          { label: "Lab (each session)", val: "Both sessions extend the album browser from Week 4. Toggle between Android and iOS code." },
          { label: "Assignment 5", val: "Add persistence to your own Week 4 networked app. Last individual assignment before the capstone." },
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

/* ══════════════════════ LAB SESSION 1 ══════════════════════ */
const LabSession1 = ({ platform }) => (
  <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 5 Lab: Room / SwiftData & Favourites</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
      In this lab you{"'"}ll add a local database to your Week 4 album browser so users can save favourites that persist across app restarts. Budget about 50–60 minutes.
    </p>

    <div style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 24 }}>
      <strong>{"🎯"} Goals</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
        <li>Understand the difference between in-memory state (gone on restart) and persisted storage (survives restart)</li>
        <li>Define a {platform === "Android" ? "Room Entity" : "SwiftData Model"} for a favourite artist</li>
        <li>Insert and delete favourites from the local database</li>
        <li>Read favourites and display them in a dedicated tab or section</li>
        <li>Use Claude to translate your setup to the other platform and compare</li>
      </ul>
    </div>

    <VStep num={0} title="Open your album browser from Week 4 (~2 min)">
      <p>Make sure your Week 4 app is fetching real data from Last.fm before adding persistence on top.</p>
      {platform === "Android" && <Tip>Add the Room dependency now before starting. It takes a minute to sync and you don{"'"}t want to wait mid-lab.</Tip>}
      <Checkpoint num={0}>Your Week 4 album browser is running and showing data from the API.</Checkpoint>
    </VStep>

    <VStep num={1} title="Add dependencies (~5 min)">
      {platform === "Android" ? (
        <>
          <p>Add Room to your Gradle file:</p>
          <CodeB title="Kotlin — build.gradle.kts (app)" accent={BL}>{`dependencies {
    val roomVersion = "2.6.0"
    implementation("androidx.room:room-runtime:$roomVersion")
    implementation("androidx.room:room-ktx:$roomVersion")
    kapt("androidx.room:room-compiler:$roomVersion")
}

// Also add kapt plugin at the top:
plugins {
    id("kotlin-kapt")
}`}</CodeB>
        </>
      ) : (
        <p>SwiftData is built into iOS 17+ — no dependencies needed. If you{"'"}re targeting iOS 16 or below, use Core Data instead and let the instructor know.</p>
      )}
      <Checkpoint num={1}>Project {platform === "Android" ? "syncs" : "builds"} without errors. You{"'"}re ready to define the database schema.</Checkpoint>
    </VStep>

    <VStep num={2} title="Define the favourite entity (~8 min)">
      <p>A database {platform === "Android" ? "entity" : "model"} is a table definition. Each favourite album will be one row in this table.</p>

      <VStep num="a" title="Create the class" last>
        <p>Create a new file named {platform === "Android" ? <IC>FavouriteAlbum.kt</IC> : <IC>FavouriteAlbum.swift</IC>}. {platform === "Android" ? "Define a data class that holds the " : "Define a class that holds the "}<IC>name</IC>, <IC>artist</IC>, and <IC>imageUrl</IC> as strings. Add the necessary {platform === "Android" ? "Room annotations to mark it as an entity and make the name the primary key." : "SwiftData macro to mark it as a model, and ensure the name is unique."}</p>
        <Section title="💡 Show me the syntax">
          {platform === "Android" ? (
            <CodeB title="Kotlin" accent={BL}>{`@Entity(tableName = "table_name")
data class MyEntity(
    @PrimaryKey val id: String,
    // ...
)`}</CodeB>
          ) : (
            <CodeB title="Swift" accent={GR}>{`import SwiftData

@Model
class MyModel {
    @Attribute(.unique) var id: String
    // ...
    
    init(...) {
        // ...
    }
}`}</CodeB>
          )}
        </Section>
        <Section title={platform === "Android" ? "✅ Check your work — show me the complete FavouriteAlbum.kt" : "✅ Check your work — show me the complete FavouriteAlbum.swift"}>
          {platform === "Android" ? (
            <CodeB title="Kotlin — FavouriteAlbum.kt" accent={BL}>{`@Entity(tableName = "favourites")
data class FavouriteAlbum(
    @PrimaryKey val name: String,
    val artist: String,
    val imageUrl: String
)`}</CodeB>
          ) : (
            <CodeB title="Swift — FavouriteAlbum.swift" accent={GR}>{`import SwiftData

@Model
class FavouriteAlbum {
    @Attribute(.unique) var name: String
    var artist: String
    var imageUrl: String

    init(name: String, artist: String, imageUrl: String) {
        self.name = name
        self.artist = artist
        self.imageUrl = imageUrl
    }
}`}</CodeB>
          )}
        </Section>
      </VStep>
      <Checkpoint num={2}>The {platform === "Android" ? "entity" : "model"} file compiles with no errors.</Checkpoint>
    </VStep>

    <VStep num={3} title={platform === "Android" ? "Create the DAO and Database (~10 min)" : "Configure the model container (~10 min)"}>
      {platform === "Android" ? (
        <>
          <p>A DAO (Data Access Object) defines how to read and write favourites. Each function maps to a SQL query.</p>

          <VStep num="a" title="Create the DAO interface">
            <p>Create <IC>FavouriteDao.kt</IC>. Add a <IC>@Dao</IC> interface. Inside, define three operations: a function returning a <IC>Flow&lt;List&lt;FavouriteAlbum&gt;&gt;</IC> for getting all favourites, a <IC>suspend</IC> function for inserting an album (replacing on conflict), and a <IC>suspend</IC> function for deleting an album.</p>
            <Section title="✅ Check your work — show me the complete FavouriteDao.kt">
              <CodeB title="Kotlin — FavouriteDao.kt" accent={BL}>{`@Dao
interface FavouriteDao {
    @Query("SELECT * FROM favourites")
    fun getAll(): Flow<List<FavouriteAlbum>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(album: FavouriteAlbum)

    @Delete
    suspend fun delete(album: FavouriteAlbum)
}`}</CodeB>
            </Section>
          </VStep>

          <VStep num="b" title="Create the AppDatabase" last>
            <p>Create <IC>AppDatabase.kt</IC>. Create an abstract class that extends <IC>RoomDatabase</IC>. Annotate it with <IC>@Database</IC>, passing in your <IC>FavouriteAlbum</IC> entity class and setting the version to 1. Add an abstract function that returns your <IC>FavouriteDao</IC>.</p>
            <Section title="✅ Check your work — show me the complete AppDatabase.kt">
              <CodeB title="Kotlin — AppDatabase.kt" accent={BL}>{`@Database(entities = [FavouriteAlbum::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun favouriteDao(): FavouriteDao
}`}</CodeB>
            </Section>
          </VStep>
        </>
      ) : (
        <>
          <p>Configure the model container in your App entry point. SwiftData handles querying through the <IC>@Query</IC> property wrapper — no DAO needed.</p>

          <VStep num="a" title="Add the model container" last>
            <p>Open your main App entry point file (usually <IC>AppNameApp.swift</IC>). Add the <IC>.modelContainer</IC> modifier to the <IC>WindowGroup</IC>, passing in the <IC>FavouriteAlbum.self</IC> type.</p>
            <Section title="✅ Check your work — show me the complete App entry point">
              <CodeB title="Swift — App entry point" accent={GR}>{`import SwiftUI
import SwiftData

@main
struct AlbumBrowserApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(for: FavouriteAlbum.self)
    }
}`}</CodeB>
            </Section>
          </VStep>
        </>
      )}
      <Tip>{platform === "Android" ? "A DAO is Android's way of defining database operations as Kotlin functions. Each @Query, @Insert, and @Delete annotation maps to SQL under the hood." : "SwiftData handles persistence through the ModelContext — you insert, delete, and query directly. The @Query property wrapper automatically observes changes and updates your view."}</Tip>
      <Checkpoint num={3}>The database setup compiles. You haven{"'"}t inserted any data yet — that{"'"}s next.</Checkpoint>
    </VStep>

    <VStep num={4} title="Add and remove favourites (~15 min)">
      <p>Wire up the UI. Add a heart/favourite button to each album row. Tapping it should insert or delete the album from the local database.</p>

      <VStep num="a" title="Read the favourites state">
        <p>In the view that displays your list or row, {platform === "Android" ? "get the database instance and collect the list of favourites as state. You'll need to use Room.databaseBuilder to get your AppDatabase." : "use the @Environment property wrapper to access the model context, and the @Query wrapper to get the array of favourites."}</p>
        <Section title="✅ Check your work: Setup Code" type="check">
          {platform === "Android" ? (
            <CodeB title="Kotlin — Setup in Composable" accent={BL}>{`// Get database instance
val context = LocalContext.current
val db = remember {
    Room.databaseBuilder(
        context, AppDatabase::class.java, "album-db"
    ).build()
}
val dao = db.favouriteDao()
val favourites by dao.getAll().collectAsState(initial = emptyList())`}</CodeB>
          ) : (
            <CodeB title="Swift — Setup in SwiftUI View" accent={GR}>{`@Environment(\\.modelContext) private var context
@Query private var favourites: [FavouriteAlbum]`}</CodeB>
          )}
        </Section>
      </VStep>

      <VStep num="b" title="Check if the album is a favourite">
        <p>Use the array of favourites you just retrieved to see if the current album is already saved. Create a boolean variable called <IC>isFav</IC> that is true if the album is found in the list.</p>
        <Section title="✅ Check your work: isFav logic" type="check">
          {platform === "Android" ? (
            <CodeB title="Kotlin" accent={BL}>{`val isFav = favourites.any { it.name == album.name }`}</CodeB>
          ) : (
            <CodeB title="Swift" accent={GR}>{`let isFav = favourites.contains { $0.name == album.name }`}</CodeB>
          )}
        </Section>
      </VStep>
      
      <VStep num="c" title="Add an interactive button">
        <p>Add an icon button to each row. Use your <IC>isFav</IC> boolean to change the icon: if true, show a filled red heart; if false, show an outlined gray heart.</p>
        <Section title="✅ Check your work: UI Button" type="check">
          {platform === "Android" ? (
            <CodeB title="Kotlin — IconButton" accent={BL}>{`IconButton(onClick = { /* TODO: Toggle favourite */ }) {
    Icon(
        if (isFav) Icons.Filled.Favorite
        else Icons.Outlined.FavoriteBorder,
        tint = if (isFav) Color.Red else Color.Gray
    )
}`}</CodeB>
          ) : (
            <CodeB title="Swift — Button" accent={GR}>{`Button(action: {
    // TODO: Toggle favourite
}) {
    Image(systemName: isFav ? "heart.fill" : "heart")
        .foregroundColor(isFav ? .red : .gray)
}`}</CodeB>
          )}
        </Section>
      </VStep>

      <VStep num="d" title="Implement the toggle action" last>
        <p>Inside your button's tap action, write an if-statement: if the album is already favourited, <strong>delete</strong> it from the database. Otherwise, <strong>insert</strong> a new <IC>FavouriteAlbum</IC> into the database.</p>
        <Tip>{platform === "Android" ? "Because DAO operations are suspend functions, you must run them inside a coroutine scope. Use rememberCoroutineScope() to get a scope." : "To delete an object in SwiftData, you must pass the actual model instance retrieved from the database, not just create a new one with the same name."}</Tip>
        <Section title="✅ Check your work: Complete toggle logic" type="check">
          {platform === "Android" ? (
            <CodeB title="Kotlin — toggle favourite in Composable" accent={BL}>{`// Toggle favourite on tap
val scope = rememberCoroutineScope()
IconButton(onClick = {
    scope.launch {
        if (isFav) dao.delete(
            FavouriteAlbum(album.name, album.artist, album.imageUrl)
        )
        else dao.insert(
            FavouriteAlbum(album.name, album.artist, album.imageUrl)
        )
    }
}) {
    Icon(
        if (isFav) Icons.Filled.Favorite
        else Icons.Outlined.FavoriteBorder,
        tint = if (isFav) Color.Red else Color.Gray
    )
}`}</CodeB>
          ) : (
            <CodeB title="Swift — toggle favourite in SwiftUI View" accent={GR}>{`// Toggle favourite on tap
Button(action: {
    if isFav {
        if let existing = favourites.first(where: {
            $0.name == album.name
        }) {
            context.delete(existing)
        }
    } else {
        context.insert(FavouriteAlbum(
            name: album.name,
            artist: album.artist,
            imageUrl: album.imageUrl
        ))
    }
}) {
    Image(systemName: isFav ? "heart.fill" : "heart")
        .foregroundColor(isFav ? .red : .gray)
}`}</CodeB>
          )}
        </Section>
      </VStep>

      <Checkpoint num={4}>Tap the heart to favourite an album. Force-quit the app and reopen it — your favourites should still be there. This is the key moment: <strong>data survives a restart!</strong></Checkpoint>
    </VStep>

    <VStep num={5} title="Display a favourites section (~8 min)">
      <p>Add a way for users to see only their favourited albums. This could be a separate tab, a filter toggle, or a dedicated section at the top of the list.</p>
      <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
        <li>Favourites are displayed in a dedicated section or tab</li>
        <li>The section updates live as users add/remove favourites</li>
        <li>An empty state message appears when there are no favourites yet</li>
      </ul>
      <Checkpoint num={5}>Your favourites section shows saved albums, updates live, and handles the empty state.</Checkpoint>
    </VStep>

    <VStep num={6} title="Ask Claude to translate (~5 min)">
      <AiOpp>
        <em>Use AI as a platform translator →</em> Paste your {platform === "Android" ? "Entity, DAO, and Database" : "SwiftData Model and View"} code into Claude and ask: <strong>{"\""}Can you show me the equivalent {platform === "Android" ? "SwiftData" : "Room"} setup and explain the key differences?{"\"}"}</strong>
      </AiOpp>
    </VStep>

    <VStep num={7} title="Reflect (~3 min)" last>
      <CodeB title="Lab 9 Reflection">{`// 1. What is the difference between saving data in a state
//    variable vs saving it in Room / SwiftData?
// 2. Why does the favourites list update automatically when
//    you insert or delete? (Hint: think about Flow / @Query)
// 3. What surprised you about the Room vs SwiftData comparison?`}</CodeB>
      <Checkpoint num={7}>Show a TA your favourites feature. Demonstrate that favourites persist after a force-quit. Walk them through your reflection.</Checkpoint>
    </VStep>

    <Section title="🚀 Stretch Features">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
        <li>Add a swipe-to-delete gesture on favourited items</li>
        <li>Show the total number of favourites as a badge on the Favourites tab</li>
        <li>Add a {"\""}favourited at{"\""} timestamp to each favourite and sort by most recently added</li>
      </ul>
    </Section>
  </div>
);

/* ══════════════════════ LAB SESSION 2 ══════════════════════ */
const LabSession2 = ({ platform }) => (
  <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 5 Lab: Offline-First & User Preferences</h2>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
      In this lab you{"'"}ll implement the offline-first pattern — showing cached data immediately while fetching fresh data in the background — and add a persistent user preference. Budget about 50–60 minutes.
    </p>

    <div style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
      <strong>{"🎯"} Goals</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
        <li>Cache the Last.fm API response in {platform === "Android" ? "Room" : "SwiftData"} so the app shows data instantly on relaunch</li>
        <li>Implement the offline-first pattern — show cache immediately, refetch in background</li>
        <li>Save a user preference (view mode) with {platform === "Android" ? "DataStore" : "UserDefaults"}</li>
        <li>Restore the preference on app relaunch</li>
        <li>Understand when to use a database vs simple key-value storage</li>
      </ul>
    </div>

    <VStep num={0} title="Verify prerequisites (~2 min)">
      <Tip>The offline-first pattern requires a working API call (Week 4) and {platform === "Android" ? "Room" : "SwiftData"} already set up (Session 1). Make sure both are working before you start.</Tip>
    </VStep>

    <VStep num={1} title="Create a cache entity (~5 min)">
      <p>You already have a <IC>FavouriteAlbum</IC> {platform === "Android" ? "entity" : "model"}. Now create a separate one for caching API results. The difference: favourites are user-curated, the cache is a mirror of the last API response.</p>
      
      <VStep num="a" title="Define the model">
        <p>Create a new model called <IC>CachedAlbum</IC>. It should have the same properties as your API result (name, artist, imageUrl, listeners).</p>
        <Section title="Check your work: CachedAlbum definition" type="check">
          {platform === "Android" ? (
            <CodeB title="Kotlin — CachedAlbum.kt" accent={BL}>{`@Entity(tableName = "cached_albums")
data class CachedAlbum(
    @PrimaryKey val name: String,
    val artist: String,
    val imageUrl: String,
    val listeners: Int
)`}</CodeB>
          ) : (
            <CodeB title="Swift — CachedAlbum.swift" accent={GR}>{`@Model
class CachedAlbum {
    @Attribute(.unique) var name: String
    var artist: String
    var imageUrl: String
    var listeners: Int

    init(name: String, artist: String,
         imageUrl: String, listeners: Int) {
        self.name = name
        self.artist = artist
        self.imageUrl = imageUrl
        self.listeners = listeners
    }
}`}</CodeB>
          )}
        </Section>
      </VStep>

      <VStep num="b" title={`Register with ${platform === "Android" ? "Database" : "Context"}`} last>
        <p>{platform === "Android" ? "Update your AppDatabase to include this new entity class, and add the corresponding DAO methods." : "Update the model container in your App entry point to include this new type."}</p>
        <Section title={`Check your work: Registration`} type="check">
          {platform === "Android" ? (
            <CodeB title="Kotlin — Database setup" accent={BL}>{`@Database(entities = [FavouriteAlbum::class, CachedAlbum::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    // ...
    abstract fun cachedDao(): CachedDao
}

@Dao
interface CachedDao {
    @Query("SELECT * FROM cached_albums")
    fun getAllCached(): Flow<List<CachedAlbum>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertAllCached(albums: List<CachedAlbum>)

    @Query("DELETE FROM cached_albums")
    suspend fun clearCache()
}`}</CodeB>
          ) : (
            <CodeB title="Swift — ModelContainer setup" accent={GR}>{`@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(for: [FavouriteAlbum.self, CachedAlbum.self])
    }
}`}</CodeB>
          )}
        </Section>
      </VStep>
    </VStep>

    <VStep num={2} title="Implement the offline-first pattern (~15 min)">
      <p>The pattern is simple:</p>
      <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
        <li>On app launch, immediately load data from the local cache</li>
        <li>In the background, fetch fresh data from the API</li>
        <li>When fresh data arrives, update the cache and the UI</li>
        <li>If the network call fails, the user still sees the cached data</li>
      </ol>

      <VStep num="a" title="Load cached data">
        <p>Set up your UI to observe the cached albums from the database instead of directly holding the API response in state.</p>
      </VStep>

      <VStep num="b" title="Refresh on launch" last>
        <p>When the view appears, fetch fresh data from the API. Instead of updating the UI state directly, update the database cache. Since your UI is observing the cache, it will update automatically.</p>
        <Section title="Check your work: Offline-first pattern" type="check">
          {platform === "Android" ? (
            <CodeB title="Kotlin — offline-first pattern" accent={BL}>{`// 1. Load from cache first
val cached = dao.getAllCached()  // Returns Flow<List<CachedAlbum>>
// Display cached data immediately

// 2. Fetch from API in background
viewModelScope.launch {
    try {
        val fresh = apiService.getTopAlbums()
        // 3. Update cache
        dao.clearCache()
        dao.insertAllCached(fresh.map { it.toCachedAlbum() })
        // UI updates automatically via Flow
    } catch (e: Exception) {
        // 4. Network failed — cached data is still showing
        Log.d("Offline", "Using cached data: \${e.message}")
    }
}`}</CodeB>
          ) : (
            <CodeB title="Swift — offline-first pattern" accent={GR}>{`// 1. @Query loads cached data instantly on launch
@Query private var cachedAlbums: [CachedAlbum]

// 2. Fetch fresh data in background
func refreshFromAPI() async {
    do {
        let fresh = try await apiService.getTopAlbums()
        // 3. Update cache
        try context.delete(model: CachedAlbum.self)
        for album in fresh {
            context.insert(album.toCachedAlbum())
        }
    } catch {
        // 4. Network failed — cached data still showing
        print("Using cached data: \\(error)")
    }
}`}</CodeB>
          )}
        </Section>
        <Checkpoint num={2}>Launch the app with WiFi on — data loads. Force-quit. Turn WiFi off. Reopen the app — <strong>cached data appears instantly</strong>. Turn WiFi back on — the list silently refreshes with live data.</Checkpoint>
      </VStep>
    </VStep>

    <VStep num={3} title={`Save a user preference with ${platform === "Android" ? "DataStore" : "UserDefaults"} (~10 min)`}>
      <p>Add a view mode preference — List or Grid — that is remembered between sessions.</p>
      
      <VStep num="a" title="Implement preferences storage">
        <p>Use {platform === "Android" ? "DataStore" : "UserDefaults"} to persist the selected view mode.</p>
        <Tip>{platform === "Android" ? "DataStore" : "UserDefaults"} is for simple key-value preferences — a theme setting, a sort order, a boolean flag. {platform === "Android" ? "Room" : "SwiftData"} is for structured relational data — a list of favourites, a cache of API responses. Use the simplest tool that fits.</Tip>
      </VStep>

      <VStep num="b" title="Connect preference to UI" last>
        <p>Add a toggle button that switches the view mode and saves the new choice.</p>
        <Section title={`Check your work: ${platform === "Android" ? "DataStore" : "UserDefaults"}`} type="check">
          {platform === "Android" ? (
            <CodeB title="Kotlin — DataStore preferences" accent={BL}>{`// build.gradle.kts — add dependency:
implementation("androidx.datastore:datastore-preferences:1.0.0")

// PreferencesManager.kt:
class PreferencesManager(context: Context) {
    private val dataStore = context.dataStore

    val viewMode: Flow<String> = dataStore.data
        .map { prefs -> prefs[VIEW_MODE_KEY] ?: "list" }

    suspend fun setViewMode(mode: String) {
        dataStore.edit { prefs -> prefs[VIEW_MODE_KEY] = mode }
    }

    companion object {
        val VIEW_MODE_KEY = stringPreferencesKey("view_mode")
        val Context.dataStore by preferencesDataStore(
            name = "user_preferences"
        )
    }
}

// In your Composable:
val prefs = remember { PreferencesManager(context) }
val viewMode by prefs.viewMode.collectAsState(initial = "list")`}</CodeB>
          ) : (
            <CodeB title="Swift — UserDefaults with @AppStorage" accent={GR}>{`// @AppStorage reads from and writes to UserDefaults automatically
// The value persists across app restarts — no extra setup needed
@AppStorage("view_mode") private var viewMode = "list"

// Toggle between list and grid:
Button(action: {
    viewMode = viewMode == "list" ? "grid" : "list"
}) {
    Image(systemName: viewMode == "list"
        ? "list.bullet" : "square.grid.2x2")
}`}</CodeB>
          )}
        </Section>
        <Checkpoint num={3}>Toggle view mode, force-quit the app, reopen it — the view mode you selected is restored.</Checkpoint>
      </VStep>
    </VStep>

    <VStep num={4} title="Implement a Dark Mode toggle (~10 min)">
      <p>Now that you know how to save preferences, add a global Dark Mode toggle that persists between app launches.</p>
      
      <VStep num="a" title="Add a new preference key">
        <p>In your preferences storage ({platform === "Android" ? "DataStore" : "UserDefaults"}), add a boolean property to track if dark mode is enabled.</p>
      </VStep>

      <VStep num="b" title="Apply the theme globally" last>
        <p>Read the preference at the root of your application and apply the theme to the entire app. Add a toggle somewhere in your UI to test it.</p>
        <Section title="Check your work: Global Dark Mode" type="check">
          {platform === "Android" ? (
            <CodeB title="Kotlin — Global Theme" accent={BL}>{`// In PreferencesManager.kt:
val isDarkMode: Flow<Boolean> = dataStore.data
    .map { prefs -> prefs[DARK_MODE_KEY] ?: false }

suspend fun setDarkMode(enabled: Boolean) {
    dataStore.edit { prefs -> prefs[DARK_MODE_KEY] = enabled }
}
// don't forget to add DARK_MODE_KEY to companion object!

// In MainActivity.kt (or root Composable):
val prefs = remember { PreferencesManager(context) }
val isDark by prefs.isDarkMode.collectAsState(initial = false)

AppTheme(darkTheme = isDark) {
    // Your entire app content
}`}</CodeB>
          ) : (
            <CodeB title="Swift — preferredColorScheme" accent={GR}>{`// In your App or root ContentView:
@AppStorage("is_dark_mode") private var isDarkMode = false

var body: some Scene {
    WindowGroup {
        ContentView()
            .preferredColorScheme(isDarkMode ? .dark : .light)
    }
}`}</CodeB>
          )}
        </Section>
        <Checkpoint num={4}>Toggle dark mode, force-quit the app, reopen it — the app should remember its theme state and display it instantly on launch.</Checkpoint>
      </VStep>
    </VStep>

    <VStep num={5} title="Ask Claude about persistence strategies (~5 min)">
      <AiOpp>
        <em>Use AI as a platform translator →</em> Ask Claude: <strong>{"\""}I just implemented the offline-first pattern and user preferences in {platform === "Android" ? "Compose" : "SwiftUI"}. Can you translate both to {platform === "Android" ? "SwiftUI" : "Compose"}? Then explain: what is the difference between {platform === "Android" ? "Room and DataStore" : "SwiftData and UserDefaults"}? When would you choose one over the other?{"\"}"}</strong>
      </AiOpp>
    </VStep>

    <VStep num={6} title="Reflect (~5 min)" last>
      <CodeB title="Lab 10 Reflection">{`// 1. Describe the offline-first pattern in one sentence.
//    What does the user experience that makes it worth it?
// 2. What is the difference between \${platform === "Android" ? "DataStore and Room" : "UserDefaults and SwiftData"}?
//    Give one example of something you'd store in each.
// 3. How does this week's work change what your capstone
//    app could do?`}</CodeB>
      <Checkpoint num={5}>Show a TA the offline-first behaviour and the persistent view mode. Walk them through your reflection.</Checkpoint>
    </VStep>

    <Section title="🚀 Stretch Features">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
        <li>Add a cache timestamp — show {"\""}Last updated 3 minutes ago{"\""} at the top of the list</li>
        <li>Add a sort preference — alphabetical vs by listeners — that persists across sessions</li>
      </ul>
    </Section>
  </div>
);

/* ══════════════════════ LAB (switcher) ══════════════════════ */
const LabTab = ({ platform, setPlatform }) => {
  const [session, setSession] = useState(1);
  return (
    <div>
      <div style={{ display: "flex", gap: 0, marginBottom: 12, borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
        {[1, 2].map(s => (
          <button key={s} onClick={() => setSession(s)} style={{
            padding: "8px 20px", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer",
            background: session === s ? PL : "var(--color-background-primary)",
            color: session === s ? PD : "var(--color-text-secondary)"
          }}>Session {s}{s === 1 ? " — Favourites" : " — Offline-First"}</button>
        ))}
      </div>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      {session === 1 ? <LabSession1 platform={platform} /> : <LabSession2 platform={platform} />}
    </div>
  );
};

/* ══════════════════════ PROJECT ══════════════════════ */
const ProjectTab = ({ platform, setPlatform }) => (
  <div>
    <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 14 }}>
      {"📬"} Submit this project by the end of Week 6 Session 1 using the <strong>Submit</strong> button {"👉"} <span style={{ float: "right", background: P_C, color: "#fff", padding: "4px 14px", borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: "pointer" }}>Submit</span>
    </div>

    <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 5: Project — Persistent Networked App</h2>
    <PlatformToggle platform={platform} setPlatform={setPlatform} />

    <div style={{ background: AML, border: "1px solid #FAC775", borderRadius: 8, padding: "12px 16px", margin: "12px 0" }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: AM, margin: "0 0 4px" }}>{"🎓"} Last individual assignment</p>
      <p style={{ fontSize: 13, color: AM, margin: 0, lineHeight: 1.6 }}>Starting in Week 6, you{"'"}ll be working in teams on your capstone. The persistence skills you build here will carry directly into your capstone project.</p>
    </div>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <p>Take the networked app you built for Assignment 4 (using your own API choice) and add local persistence. By the end, your app should feel like a real, polished mobile app — data loads instantly from cache, users can save favourites, and preferences are remembered.</p>

      <strong>{"🎯"} Goals</strong>
      <ul style={{ paddingLeft: 20, margin: "6px 0 14px" }}>
        <li>Practice integrating a local database into an existing app</li>
        <li>Build a feature (favourites) that users expect from real apps</li>
        <li>Experience the full lifecycle: network → cache → display</li>
      </ul>
    </div>

    <Section title="✅ Required Features" defaultOpen={true}>
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
        <li>{"☐"} App fetches data from an API (carried over from Week 4)</li>
        <li>{"☐"} A <strong>favourites feature</strong> — users can save items to a local database ({platform === "Android" ? "Room" : "SwiftData"}) that persists across app restarts</li>
        <li>{"☐"} A dedicated <strong>favourites section or tab</strong> that displays saved items</li>
        <li>{"☐"} An <strong>empty state</strong> when there are no favourites</li>
        <li>{"☐"} Users can <strong>remove</strong> items from favourites</li>
        <li>{"☐"} Favourites <strong>survive a force-quit</strong> — relaunch the app and they{"'"}re still there</li>
      </ul>
    </Section>

    <Section title="🚀 Stretch Features">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
        <li>{"☐"} Implement the <strong>offline-first pattern</strong> — cache the API response and show it on relaunch before fetching fresh data</li>
        <li>{"☐"} Save a <strong>user preference</strong> (sort order, view mode, theme) using {platform === "Android" ? "DataStore" : "UserDefaults"}</li>
        <li>{"☐"} Add a <strong>pull-to-refresh</strong> gesture that refetches from the API and updates the cache</li>
        <li>{"☐"} Show a <strong>{"\""}Last updated{"\""} timestamp</strong> based on when the cache was last refreshed</li>
      </ul>
    </Section>

    <Section title="📘 Resources">
      <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 2 }}>
        {platform === "Android" ? (
          <>
            <li><Link>Room Persistence Library</Link> — Android developer docs</li>
            <li><Link>DataStore guide</Link> — Android Jetpack</li>
            <li><Link>Room dependency setup</Link> — latest version and Gradle config</li>
          </>
        ) : (
          <>
            <li><Link>SwiftData documentation</Link> — Apple developer docs</li>
            <li><Link>@AppStorage property wrapper</Link> — SwiftUI UserDefaults integration</li>
            <li><Link>ModelContainer and ModelContext</Link> — SwiftData management</li>
          </>
        )}
        <li>This unit{"'"}s <strong>Resources tab</strong></li>
      </ul>
    </Section>

    <Section title="💡 Hints">
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        <p><strong>Where do I start?</strong></p>
        <p style={{ marginLeft: 16 }}>Start by adding the favourites feature first — it{"'"}s the most straightforward. Get insert and delete working, verify persistence across restarts, then build the favourites section.</p>
        <p><strong>My database changes aren{"'"}t showing up</strong></p>
        <p style={{ marginLeft: 16 }}>{platform === "Android" ? "Make sure you're observing the Flow returned by the DAO — use collectAsState() in Compose. Also check that your @Database annotation includes the entity." : "Make sure the @Query property wrapper is watching the right model type and the model container is configured in your App entry point."}</p>
        <p><strong>I{"'"}m stuck on something</strong></p>
        <p style={{ marginLeft: 16 }}>Don{"'"}t skip the Resources section! Use Claude as a debugging partner — paste your code and the error message.</p>
        <AiOpp>
          <em>Use AI to debug persistence issues →</em> Paste your {platform === "Android" ? "entity, DAO, and the error message" : "SwiftData model, view code, and the error message"} into Claude and ask: <strong>{"\""}Review my {platform === "Android" ? "Room" : "SwiftData"} setup. Is there anything I{"'"}m missing that could cause data not to persist?{"\"}"}</strong>
        </AiOpp>
      </div>
    </Section>

    <div style={{ marginTop: 20, borderTop: "1px solid var(--color-border-tertiary)", paddingTop: 16 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 10px" }}>{"📬"} Submitting Your Project</h3>
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        <p>Once you{"'"}ve completed all required features:</p>
        <ol style={{ paddingLeft: 20 }}>
          <li>Create a GitHub repo (or use a new branch on your Week 4 repo)</li>
          <li>Push your project code</li>
          <li>Create a README using the <Link>Unit 5 Project — README Template</Link></li>
          <li>Mark off implemented features by changing <IC>{"-[ ]"}</IC> to <IC>{"-[x]"}</IC></li>
          <li>Record a Video/GIF walkthrough showing favourites persisting across restarts</li>
          <li>Add the Video/GIF to your repo and link it in the README</li>
          <li>Make the repo private and add <IC>codepathreview</IC> as a collaborator</li>
        </ol>
      </div>
    </div>
  </div>
);

/* ══════════════════════ CAPSTONE ══════════════════════ */
const CapstoneTab = () => (
  <div>
    <div style={{ background: CAP_BG, padding: "14px", borderRadius: 10, marginBottom: 16 }}>
      <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px", color: CAP_C }}>{"🤝"} Capstone: Team Formation & Platform Selection</h3>
      <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: CAP_C }}>
        This week you{"'"}ll form your capstone team and commit to a platform. No code deliverables yet — your capstone proposal is due next week (Week 6).
      </p>
    </div>

    <div style={{ fontSize: 13, lineHeight: 1.7 }}>
      <p>For the first 5 weeks, you{"'"}ve been in randomized groups each session — getting exposure to different classmates and working styles. Now it{"'"}s time to form the team you{"'"}ll build your capstone project with.</p>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"📋"} What{"'"}s Due This Week</h4>
      <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
        <li>{"☐"} <strong>Platform selection</strong> — submit whether you want to build on <strong>Android</strong> or <strong>iOS</strong> for your capstone</li>
        <li>{"☐"} <strong>Team formation</strong> — teams of 3 (see process below)</li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🔀"} How Team Matching Works</h4>
      <p>There are two paths to forming your team:</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "12px 0" }}>
        <div style={{ background: PL, padding: "12px 14px", borderRadius: 10 }}>
          <strong style={{ color: PD, fontSize: 13 }}>Option A: Choose Your Team</strong>
          <p style={{ margin: "6px 0 0", fontSize: 12, color: PD, lineHeight: 1.5 }}>Found classmates you work well with over the past 5 weeks? You can form a team together — as long as all members agree on the <strong>same platform</strong> (all Android or all iOS). Submit your team as a group.</p>
        </div>
        <div style={{ background: GL, padding: "12px 14px", borderRadius: 10 }}>
          <strong style={{ color: G, fontSize: 13 }}>Option B: Get Matched</strong>
          <p style={{ margin: "6px 0 0", fontSize: 12, color: G, lineHeight: 1.5 }}>Submit your platform preference individually. You{"'"}ll be matched into a team of 3 with other students who chose the <strong>same platform</strong>. This is a great way to meet new collaborators!</p>
        </div>
      </div>

      <Warn>Your platform choice is <strong>final</strong> for the capstone. Choose based on which platform you{"'"}re more excited about — you{"'"}ll be spending the next 5 weeks building on it. Both are equally valid and will teach you the same core skills.</Warn>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"💭"} Things to Consider When Choosing a Platform</h4>
      <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
        <li>Which platform did you enjoy more during Weeks 1–5?</li>
        <li>Do you or your teammates own a Mac? (iOS development requires Xcode, which only runs on macOS)</li>
        <li>Do you have a physical device to test on? (Android emulator is solid; iOS Simulator is good but a real device is better for camera/sensor features)</li>
        <li>Does your app idea involve platform-specific features? (e.g., widgets, watch integration)</li>
      </ul>

      <div className="callout-ai" style={{ marginTop: 16, padding: "12px 14px", background: "#F9F0FF", borderRadius: 8 }}>
        <strong>{"🗓"} Capstone Timeline</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 0", lineHeight: 2 }}>
          <li><strong>Week 5 (this week):</strong> Team formation + platform selection</li>
          <li><strong>Week 6:</strong> Capstone proposal due</li>
          <li><strong>Week 7:</strong> M1 — Repo setup, architecture scaffolded, at least one screen with data</li>
          <li><strong>Week 8:</strong> M2 — Core navigation, networking end-to-end. Instructor check-in (10 min/team)</li>
          <li><strong>Week 9:</strong> M3 — Feature-complete. Git branching workflow in place</li>
          <li><strong>Week 10:</strong> Final — APK/TestFlight build, demo day, written reflection</li>
        </ul>
      </div>

      <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 8 }}>
        <strong>{"📬"} Submission</strong>
        <p style={{ margin: "6px 0 0" }}>Submit your platform choice and team info via the form linked in Slack. If you{"'"}re choosing your own team (Option A), one person submits for the whole group. If you want to be matched (Option B), submit individually. <strong>Deadline: end of this week{"'"}s Session 2.</strong></p>
      </div>

      <Tip>Start thinking about your capstone idea this week! You don{"'"}t need to submit a proposal yet (that{"'"}s Week 6), but brainstorming now with your new teammates will give you a head start.</Tip>
    </div>
  </div>
);

/* ══════════════════════ RESOURCES ══════════════════════ */
const ResourcesTab = () => (
  <div>
    <div style={{ fontSize: 13, lineHeight: 1.8 }}>
      <p>A list of helpful links relevant to this unit.</p>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>{"📹"} Session Recordings</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><Link>Weekly Video Playlist</Link></li>
        <li><Link>Office Hours Video Playlist</Link></li>
      </ul>
      <p style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>Note: It may take up to 24–48 hours after the session to appear on the playlist.</p>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🗄"} Room (Android)</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><Link>Save data in a local database using Room</Link> — Android developer guide</li>
        <li><Link>Room with a Flow</Link> — reading data reactively</li>
        <li><Link>Defining entities</Link> — Room entity docs</li>
        <li><Link>Data Access Objects (DAOs)</Link> — Room DAO docs</li>
        <li><Link>Room dependency setup</Link> — latest version and Gradle config</li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"🍎"} SwiftData (iOS)</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><Link>SwiftData documentation</Link> — Apple developer docs</li>
        <li><Link>Defining your data model with @Model</Link></li>
        <li><Link>Querying data with @Query</Link></li>
        <li><Link>ModelContainer and ModelContext</Link> — how SwiftData manages your database</li>
        <li><Link>Migrating from Core Data to SwiftData</Link> (if needed)</li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"⚙️"} DataStore / UserDefaults</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><Link>DataStore guide</Link> — Android Jetpack Preferences DataStore</li>
        <li><Link>UserDefaults documentation</Link> — Apple developer docs</li>
        <li><Link>@AppStorage property wrapper</Link> — SwiftUI integration with UserDefaults</li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"📡"} Offline-First Patterns</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><Link>Build an offline-first app</Link> — Android architecture guide</li>
        <li><Link>Caching strategies for mobile apps</Link> — overview</li>
      </ul>

      <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"✏️"} Extra Practice</h4>
      <ul style={{ paddingLeft: 20 }}>
        <li><Link>Room with a View codelab</Link> — Google step-by-step tutorial</li>
        <li><Link>SwiftData tutorial</Link> — Hacking with Swift</li>
      </ul>
    </div>
  </div>
);

/* ══════════════════════ MAIN ══════════════════════ */
export default function Week5Unit() {
  const [tab, setTab] = useState("Overview");
  const [platform, setPlatform] = useState("Android");

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
      {tab === "Lab"       && <LabTab platform={platform} setPlatform={setPlatform} />}
      {tab === "Project"   && <ProjectTab platform={platform} setPlatform={setPlatform} />}
      {tab === "Capstone"  && <CapstoneTab />}
      {tab === "Resources" && <ResourcesTab />}
    </div>
  );
}
