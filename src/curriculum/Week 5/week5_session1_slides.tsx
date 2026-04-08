import { useState } from "react";

const PURPLE = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT = "#EEEDFE";
const TEAL = "#1D9E75";
const TEAL_DARK = "#0F6E56";
const TEAL_LIGHT = "#E1F5EE";
const AMBER = "#EF9F27";
const AMBER_LIGHT = "#FAEEDA";
const GRAY = "#F5F5F7";
const TEXT = "#1a1a2e";
const MUTED = "#6b7280";

const Tag = ({ children, color = "purple" }) => {
  const map = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806" },
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

const Bullet = ({ children, sub, done }) => (
  <div style={{ display: "flex", gap: 8, margin: sub ? "3px 0 3px 20px" : "7px 0", alignItems: "flex-start" }}>
    <span style={{ color: done ? TEAL : sub ? TEAL : PURPLE, fontWeight: 700, fontSize: sub ? 12 : 14, marginTop: 1, flexShrink: 0 }}>{done ? "✓" : sub ? "◦" : "▸"}</span>
    <span style={{ fontSize: sub ? 13 : 14, color: sub ? MUTED : TEXT, lineHeight: 1.5 }}>{children}</span>
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

const Lab = ({ children }) => (
  <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10, borderLeft: `3px solid ${AMBER}` }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".05em" }}>Lab activity</p>
    <p style={{ fontSize: 12, color: "#633806", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Notes = ({ children }) => (
  <div style={{ background: GRAY, borderRadius: 8, padding: "8px 12px", marginTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em" }}>Speaker notes</p>
    <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Shell = ({ tag, timer, title, subtitle, children, notes }) => (
  <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px 22px", minHeight: 340 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag color="purple">Week 5 · S1</Tag>
        {tag && <Tag color="teal">{tag}</Tag>}
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
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 5 · Session 1</p>
        <h1 style={{ fontSize: 30, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.2 }}>Local databases</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Room (Android) · SwiftData (iOS)</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {["Why data disappears — and how to stop it", "Entities, DAOs, and the database layer", "Room in Kotlin: annotations and queries", "SwiftData in Swift: @Model and ModelContext", "Saving favourites from your Week 4 API app"].map((t, i) => (
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

  // 2: Hook — the problem
  () => (
    <Shell tag="Hook" timer="5" title="Your app forgets everything" subtitle="The problem we are solving today" notes="Open with this scenario before touching any code. Students have all experienced this as users — downloading an app, carefully setting it up, and then losing everything after an update or reinstall. Make it concrete: their own Week 4 app loses every favourited item the moment it restarts. Today they will fix that.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#A32D2D", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: ".05em" }}>Without persistence</p>
          {["User opens your app and favourites 10 items", "User closes the app", "User reopens the app", "All favourites are gone"].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
              <span style={{ color: "#A32D2D", fontWeight: 700, flexShrink: 0, fontSize: 12 }}>{i + 1}.</span>
              <span style={{ fontSize: 13, color: "#791F1F" }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: ".05em" }}>With persistence</p>
          {["User opens your app and favourites 10 items", "User closes the app", "User reopens the app", "All favourites are exactly where they left them"].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "6px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0, fontSize: 12 }}>✓</span>
              <span style={{ fontSize: 13, color: TEAL_DARK }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <Discussion>{"Think of an app you use every day — notes, bookmarks, history. What would happen if it had no local storage? Would you still use it?"}</Discussion>
    </Shell>
  ),

  // 3: Two tools for two jobs
  () => (
    <Shell tag="Concept" timer="4" title="Two tools for two jobs" subtitle="Choosing the right persistence strategy" notes="This is a framing slide — not code yet. Students often try to use a full database for everything or a simple key-value store for complex relational data. The goal here is to build the intuition for which tool to reach for before we zoom into Room/SwiftData.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Local database</p>
          <p style={{ fontSize: 11, color: PURPLE, margin: "0 0 10px" }}>Room · SwiftData</p>
          <Bullet>Structured, table-shaped data</Bullet>
          <Bullet>Lists of things (favourites, tasks, messages)</Bullet>
          <Bullet>Need to filter, sort, or search</Bullet>
          <Bullet>Data that grows and changes over time</Bullet>
        </div>
        <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>Key-value store</p>
          <p style={{ fontSize: 11, color: TEAL, margin: "0 0 10px" }}>DataStore · UserDefaults</p>
          <Bullet>Simple settings and preferences</Bullet>
          <Bullet>On/off toggles, theme choice, last login</Bullet>
          <Bullet>Small, standalone values</Bullet>
          <Bullet>Doesn't need querying</Bullet>
        </div>
      </div>
      <Info>{"Today = local databases (Room / SwiftData). Session 2 = key-value stores (DataStore / UserDefaults)."}</Info>
    </Shell>
  ),

  // 4: Recap
  () => (
    <Shell tag="Recap" timer="4" title="Weeks 1–4 — what you have so far" notes="This is a 3-minute recap, not a re-teach. The key message: the list + detail screen students built in Week 4 is the perfect target for today. They are extending an existing app — not building from scratch. This should reduce anxiety and increase motivation.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
        {[
          { week: "Week 1", items: ["Declarative UI", "State and recomposition"] },
          { week: "Week 2", items: ["Navigation", "Passing data between screens"] },
          { week: "Week 3", items: ["Lists and scrolling", "Search and filter"] },
          { week: "Week 4", items: ["REST APIs + JSON", "Loading / error states", "← Today's target app"] },
        ].map(w => (
          <div key={w.week} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: PURPLE, margin: "0 0 6px", textTransform: "uppercase" }}>{w.week}</p>
            {w.items.map(t => (
              <div key={t} style={{ display: "flex", gap: 5, margin: "4px 0" }}>
                <span style={{ color: t.includes("target") ? AMBER : TEAL, fontWeight: 700, flexShrink: 0, fontSize: 11 }}>{t.includes("target") ? "★" : "✓"}</span>
                <span style={{ fontSize: 11, color: t.includes("target") ? "#633806" : TEXT, fontWeight: t.includes("target") ? 600 : 400 }}>{t}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Info>{"Your Week 4 app fetches data live from an API. Today you will add a heart button that saves items locally — so they are still there after the app restarts."}</Info>
    </Shell>
  ),

  // 5: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 60 minutes" notes="Set the expectation: today introduces a new conceptual layer (database vs UI) but very little new syntax — the annotations do the heavy lifting. Reassure students that they don't need to memorise SQL; Room and SwiftData handle the queries for them.">
      {[
        { time: "0–5 min",   label: "Hook",           desc: "Why apps forget everything" },
        { time: "5–10 min",  label: "Two tools",       desc: "Databases vs key-value stores" },
        { time: "10–20 min", label: "Concept",         desc: "Entities, DAOs, and the database layer" },
        { time: "20–35 min", label: "Kotlin / Room",   desc: "Annotations, DAO queries, collecting flows" },
        { time: "35–50 min", label: "Swift / SwiftData", desc: "@Model, ModelContext, @Query" },
        { time: "50–60 min", label: "Lab",             desc: "Add favourites to your Week 4 app" },
      ].map(r => (
        <div key={r.time} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: `0.5px solid ${GRAY}` }}>
          <span style={{ fontSize: 12, color: MUTED, minWidth: 80, flexShrink: 0 }}>{r.time}</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: PURPLE, minWidth: 120, flexShrink: 0 }}>{r.label}</span>
          <span style={{ fontSize: 12, color: TEXT }}>{r.desc}</span>
        </div>
      ))}
    </Shell>
  ),

  // 6: How a local database works (concept)
  () => (
    <Shell tag="Concept" timer="10" title="How a local database works" subtitle="Entities, DAOs, and the database layer" notes="This is the most important conceptual slide of the session. Draw the three layers on a whiteboard if you can: your UI code at the top, the DAO in the middle, the actual database at the bottom. Students who understand this layer separation will find Room and SwiftData much less magical and much easier to debug. Stress that the DAO is just an interface — they describe WHAT they want, not HOW to do it.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "12px 14px", marginBottom: 8 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>Entity (the data shape)</p>
            <p style={{ fontSize: 12, color: PURPLE, margin: 0, lineHeight: 1.5 }}>A Kotlin data class or Swift struct annotated to describe one table row. One entity class = one table.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "12px 14px", marginBottom: 8 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>DAO / ModelContext (the interface)</p>
            <p style={{ fontSize: 12, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Data Access Object — a set of functions for inserting, deleting, and querying. You declare what you want; the framework writes the SQL.</p>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#633806", margin: "0 0 4px" }}>Database (the engine)</p>
            <p style={{ fontSize: 12, color: "#633806", margin: 0, lineHeight: 1.5 }}>The actual SQLite file on disk. Room and SwiftData manage this for you — you never write raw SQL.</p>
          </div>
        </div>
        <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px", fontFamily: "monospace", fontSize: 11, lineHeight: 1.8 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".05em" }}>How they connect</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ background: PURPLE_LIGHT, borderRadius: 6, padding: "6px 10px", fontSize: 12, color: PURPLE_DARK }}>UI / ViewModel — "I want all favourites"</div>
            <div style={{ textAlign: "center", fontSize: 16, color: MUTED }}>↓</div>
            <div style={{ background: TEAL_LIGHT, borderRadius: 6, padding: "6px 10px", fontSize: 12, color: TEAL_DARK }}>DAO — getAllFavourites() / @Query</div>
            <div style={{ textAlign: "center", fontSize: 16, color: MUTED }}>↓</div>
            <div style={{ background: AMBER_LIGHT, borderRadius: 6, padding: "6px 10px", fontSize: 12, color: "#633806" }}>SQLite file on device storage</div>
            <div style={{ textAlign: "center", fontSize: 16, color: MUTED }}>↓</div>
            <div style={{ background: TEAL_LIGHT, borderRadius: 6, padding: "6px 10px", fontSize: 12, color: TEAL_DARK }}>Flow/publisher emits updated list</div>
            <div style={{ textAlign: "center", fontSize: 16, color: MUTED }}>↓</div>
            <div style={{ background: PURPLE_LIGHT, borderRadius: 6, padding: "6px 10px", fontSize: 12, color: PURPLE_DARK }}>UI re-renders automatically</div>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 7: Room — Entity
  () => (
    <Shell tag="Android · Room" timer="5" title="Room — defining the entity" subtitle="A data class that describes one row in your database" notes="The @Entity annotation is the key idea here. Walk through each annotation out loud: @Entity tells Room this class is a table, @PrimaryKey(autoGenerate=true) means Room assigns the ID, @ColumnInfo lets you rename columns. Stress that this is just a Kotlin data class with annotations — nothing exotic.">
      <div style={{ display: "flex", gap: 12 }}>
        <CodePane title="Kotlin — FavouriteEntity.kt" accent={PURPLE}>{`@Entity(tableName = "favourites")
data class FavouriteItem(
    @PrimaryKey(autoGenerate = true)
    val id: Int = 0,

    @ColumnInfo(name = "item_id")
    val itemId: String,

    val title: String,
    val imageUrl: String,
    val savedAt: Long = System.currentTimeMillis()
)`}</CodePane>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 4px" }}>@Entity</p>
            <p style={{ fontSize: 11, color: PURPLE, margin: 0, lineHeight: 1.5 }}>Tells Room to create a database table for this class. tableName is optional — defaults to the class name.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>@PrimaryKey</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>Every table needs a unique ID. autoGenerate=true means Room increments it automatically.</p>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 4px" }}>@ColumnInfo</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>Optional — rename the column in the database without renaming the Kotlin property.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 8: Room — DAO
  () => (
    <Shell tag="Android · Room" timer="5" title="Room — the DAO" subtitle="An interface that describes what you want to do with the database" notes="Emphasise that this is just an interface — no implementation. Room generates all the boilerplate at compile time. The Flow<List<>> return type is the key teachable moment: the UI observes this flow, and every time the database changes, the list automatically updates. No manual refresh needed.">
      <div style={{ display: "flex", gap: 12 }}>
        <CodePane title="Kotlin — FavouriteDao.kt" accent={PURPLE}>{`@Dao
interface FavouriteDao {

    @Query("SELECT * FROM favourites ORDER BY savedAt DESC")
    fun getAllFavourites(): Flow<List<FavouriteItem>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertFavourite(item: FavouriteItem)

    @Delete
    suspend fun deleteFavourite(item: FavouriteItem)

    @Query("SELECT EXISTS(SELECT 1 FROM favourites WHERE item_id = :id)")
    fun isFavourite(id: String): Flow<Boolean>
}`}</CodePane>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>Flow return type</p>
            <p style={{ fontSize: 11, color: PURPLE, margin: 0 }}>The UI observes this like a live stream — when a favourite is added or removed, the list updates automatically.</p>
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px" }}>suspend fun</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0 }}>Write and delete operations are suspend functions — they run off the main thread so the UI never freezes.</p>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 3px" }}>@Query</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0 }}>Room checks your SQL at compile time — typos become build errors, not runtime crashes.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 9: Room — Database + wiring
  () => (
    <Shell tag="Android · Room" timer="5" title="Room — wiring it together" subtitle="The database class and how to use it in your ViewModel" notes="Singleton pattern is important here — only one instance of the database should exist in the app. The companion object with context is the standard pattern. Walk through the ViewModel code slowly: the Flow from the DAO is collected as State in the ViewModel, which the Compose UI observes. Students should recognise this pattern from the networking week.">
      <div style={{ display: "flex", gap: 12 }}>
        <CodePane title="Kotlin — AppDatabase.kt" accent={PURPLE}>{`@Database(entities = [FavouriteItem::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun favouriteDao(): FavouriteDao

    companion object {
        @Volatile private var INSTANCE: AppDatabase? = null

        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "app_database"
                ).build().also { INSTANCE = it }
            }
        }
    }
}

// In your ViewModel:
class FavouritesViewModel(private val dao: FavouriteDao) : ViewModel() {
    val favourites = dao.getAllFavourites()
        .stateIn(viewModelScope, SharingStarted.Lazily, emptyList())

    fun toggleFavourite(item: FavouriteItem) = viewModelScope.launch {
        if (dao.isFavourite(item.itemId).first()) dao.deleteFavourite(item)
        else dao.insertFavourite(item)
    }
}`}</CodePane>
        <div style={{ flex: 1 }}>
          <Info>{"@Volatile + synchronized prevents two threads from creating two database instances simultaneously — the standard Room singleton pattern."}</Info>
          <Info>{"stateIn converts the Flow from the DAO into a StateFlow the Compose UI can collect. You have already used this pattern in Week 4."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 10: SwiftData — @Model
  () => (
    <Shell tag="iOS · SwiftData" timer="5" title="SwiftData — defining the model" subtitle="A Swift class that describes one record in your database" notes="SwiftData is Apple's modern replacement for Core Data, introduced in iOS 17. The @Model macro does what Room's @Entity + annotations do — it marks a class as persistable. The main difference from Room: Swift uses a class (not a struct) for SwiftData models, and the @Model macro generates all the observability infrastructure automatically. Highlight the parallel: @Model ≈ @Entity + @ColumnInfo.">
      <div style={{ display: "flex", gap: 12 }}>
        <CodePane title="Swift — FavouriteItem.swift" accent={TEAL}>{`import SwiftData

@Model
final class FavouriteItem {
    var itemId: String
    var title: String
    var imageUrl: String
    var savedAt: Date

    init(itemId: String, title: String,
         imageUrl: String, savedAt: Date = .now) {
        self.itemId = itemId
        self.title  = title
        self.imageUrl = imageUrl
        self.savedAt  = savedAt
    }
}`}</CodePane>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px" }}>@Model</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0 }}>One macro replaces @Entity, @PrimaryKey, and @ColumnInfo. Swift generates an automatic unique identifier.</p>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>class, not struct</p>
            <p style={{ fontSize: 11, color: PURPLE, margin: 0 }}>SwiftData models must be classes — they use reference semantics so the framework can track changes and sync to disk.</p>
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#633806", margin: "0 0 3px" }}>No schema setup</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0 }}>Unlike Room, there is no database builder class. The ModelContainer is configured at the App entry point — one line.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 11: SwiftData — querying and saving
  () => (
    <Shell tag="iOS · SwiftData" timer="5" title="SwiftData — querying and saving" subtitle="@Query for live updates, ModelContext for writes" notes="@Query is the SwiftData equivalent of a Room Flow — it is a live query that automatically updates the SwiftUI view whenever the underlying data changes. ModelContext is the SwiftData equivalent of the DAO — you insert and delete through it. The parallel is close enough that you can draw a table on the board: @Model ↔ @Entity, @Query ↔ Flow from DAO, ModelContext ↔ DAO suspend functions, ModelContainer ↔ AppDatabase.">
      <div style={{ display: "flex", gap: 12 }}>
        <CodePane title="Swift — FavouritesView.swift" accent={TEAL}>{`import SwiftUI
import SwiftData

struct FavouritesView: View {
    @Environment(\\.modelContext) private var context
    @Query(sort: \\.savedAt, order: .reverse)
    private var favourites: [FavouriteItem]

    var body: some View {
        List(favourites) { item in
            Text(item.title)
        }
    }
}

// To add a favourite from any view:
context.insert(FavouriteItem(
    itemId: result.id,
    title:  result.title,
    imageUrl: result.imageUrl
))

// To delete:
context.delete(item)

// In your App entry point — one line:
.modelContainer(for: FavouriteItem.self)`}</CodePane>
        <div style={{ flex: 1 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 3px" }}>@Query</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0 }}>A live query bound to the view. When you insert or delete through ModelContext, this array updates and the view re-renders. Equivalent to collecting a Room Flow.</p>
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>@Environment(.modelContext)</p>
            <p style={{ fontSize: 11, color: PURPLE, margin: 0 }}>SwiftData injects the ModelContext through SwiftUI's environment system. No need to pass it manually through the view hierarchy.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 12: Side-by-side comparison
  () => (
    <Shell tag="Comparison" timer="4" title="Room vs SwiftData — the parallels" notes="This comparison slide is one of the most valuable in the course — it makes students fluent in both platforms simultaneously. Point out that despite different naming conventions, the mental models are identical. A student who understands Room already understands SwiftData conceptually.">
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
          <thead>
            <tr>
              {["Concept", "Room (Android)", "SwiftData (iOS)"].map(h => (
                <th key={h} style={{ textAlign: "left", padding: "8px 12px", background: GRAY, color: MUTED, fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: ".05em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Define a table/model", "@Entity data class", "@Model final class"],
              ["Primary key", "@PrimaryKey(autoGenerate)", "Auto-generated by framework"],
              ["Query interface", "@Dao interface + @Query", "@Query + ModelContext"],
              ["Live updates", "Flow<List<T>>", "@Query var items: [T]"],
              ["Insert a record", "dao.insert() (suspend)", "context.insert()"],
              ["Delete a record", "dao.delete() (suspend)", "context.delete()"],
              ["Database setup", "Room.databaseBuilder()", ".modelContainer(for:)"],
              ["Thread safety", "suspend fun (coroutines)", "Main actor / async context"],
            ].map(([concept, android, ios], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : GRAY }}>
                <td style={{ padding: "8px 12px", color: TEXT, fontWeight: 500 }}>{concept}</td>
                <td style={{ padding: "8px 12px", color: PURPLE_DARK, fontFamily: "monospace", fontSize: 11 }}>{android}</td>
                <td style={{ padding: "8px 12px", color: TEAL_DARK, fontFamily: "monospace", fontSize: 11 }}>{ios}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  ),

  // 13: Lab
  () => (
    <Shell tag="Lab" timer="10" title="Lab — add favourites to your Week 4 app" subtitle="Session 1 lab activity" notes="Students should already have a working API app from Week 4. The goal is to wire up a local database so that tapping a heart icon saves the item locally. Encourage them to start with the entity definition, then the DAO, then hook it into the ViewModel they already have. For students who finish early, the stretch goal is to show a Favourites tab that lists saved items.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Steps</p>
          {[
            "Open your Week 4 API app",
            "Android: add Room dependency to build.gradle",
            "iOS: enable SwiftData in your project",
            "Define a FavouriteItem entity / @Model class",
            "Android: create the DAO and AppDatabase",
            "iOS: add .modelContainer to your App entry point",
            "Add a heart button to each list row",
            "Wire the button to insert or delete from the database",
            "Restart the app and confirm favourites persist",
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: PURPLE, minWidth: 18 }}>{i + 1}.</span>
              <span style={{ fontSize: 12, color: TEXT }}>{s}</span>
            </div>
          ))}
        </div>
        <div>
          <Lab>{"Add a heart icon to each row in your Week 4 list. Tapping it should save that item to a local database. Close and reopen the app — the hearts should still be filled. Use the comparison table to look up the equivalent API for your platform."}</Lab>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px", marginTop: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>Stretch goal</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0 }}>Add a Favourites tab to your app that shows only saved items, loaded directly from the database (not from the API).</p>
          </div>
          <Info>{"AI tip: Ask your AI tool to generate the entity class from a description of your data shape. Then review what it produces — does each field map to a column you actually need?"}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 14: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 500, color: "#fff", margin: "0 0 8px" }}>Session 1 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Your app now remembers what users care about — even after it restarts.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned</p>
            {["When to use a local database vs key-value store", "Entities define the data shape (@Entity / @Model)", "DAOs describe what you want to do with the data", "Room uses Flow for live-updating lists", "SwiftData uses @Query for the same effect", "Both integrate with your existing ViewModel pattern"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Session 2</p>
            {["DataStore (Android) + UserDefaults (iOS)", "Storing simple preferences — theme, last view, toggles", "The offline-first pattern — show cached data while fetching", "Assignment 5 overview — favourites tab + capstone proposal"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: AMBER, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.1)", borderRadius: 6, padding: "8px 10px" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Tonight: try the lab stretch goal — build the Favourites tab.</p>
            </div>
          </div>
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
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 5 · Session 1 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>Local databases — Room & SwiftData</p>
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
