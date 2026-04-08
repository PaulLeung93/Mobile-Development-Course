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

const previewAlbums = [
  { id: 1, title: "Rumours", artist: "Fleetwood Mac", year: 1977, genre: "Rock", tracks: 11, rating: 4.9 },
  { id: 2, title: "Kind of Blue", artist: "Miles Davis", year: 1959, genre: "Jazz", tracks: 5, rating: 4.8 },
  { id: 3, title: "Purple Rain", artist: "Prince", year: 1984, genre: "Pop", tracks: 9, rating: 4.7 },
];

const slides = [
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 3 — Session 2</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>Search, filter, and the<br/>list-to-detail pattern</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Completing the album browser — Weeks 1, 2, and 3 combined</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Builds on Session 1", "Search + filter", "Tap to detail"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${TEAL}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Quick lab check — ask students to show their styled album list from Session 1. Anyone without it needs to get it working before today's content makes sense. Pair them with someone who does. Today we add search, empty states, and navigation — all building on the list from Session 1."}</Notes>
    </div>
  ),

  () => (
    <Shell tag="Recap" timer="5" title="Session 1 recap — lists and custom rows" notes="Keep this brief. If students cannot answer these, spend 2 extra minutes before moving on — today stacks directly on top.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          { q: "Why use LazyColumn instead of Column?", a: "LazyColumn only renders visible rows — efficient for large datasets. Column renders everything at once regardless of scroll position." },
          { q: "What does the key parameter do?", a: "Gives each row a stable unique identity so Compose can update only the changed row instead of redrawing the whole list." },
          { q: "What does Identifiable do in SwiftUI?", a: "Requires an id field that SwiftUI uses to identify each row — the same concept as key in Compose." },
          { q: "What does weight(1f) / Spacer() do in a row?", a: "Fills all remaining horizontal space, pushing everything after it to the far right edge of the row." },
        ].map(item => (
          <div key={item.q} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{item.q}</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <Discussion>{"You have a list of 8 albums. A user types 'rock' in a search bar. Which albums should appear? What data do you need to look at to decide? Where would the filtering logic live?"}</Discussion>
    </Shell>
  ),

  () => (
    <Shell tag="Agenda" title="Today's session — 60 minutes" notes="By the end of today students will have the complete album browser: scrollable list, real-time search, empty state, and a detail screen. This is the most complete app they have built so far — it genuinely looks and feels like a real app.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "5 min",  title: "Recap", desc: "Session 1 — lists, keys, custom rows" },
          { num: "02", time: "8 min",  title: "Filtering a list", desc: "Using filter() with state — how real-time search works" },
          { num: "03", time: "5 min",  title: "Text fields for search", desc: "OutlinedTextField / TextField — the search bar component" },
          { num: "04", time: "8 min",  title: "Empty states", desc: "What to show when nothing matches — good UX practice" },
          { num: "05", time: "8 min",  title: "Tapping a row — the list-to-detail pattern", desc: "Combining lists with Week 2 navigation" },
          { num: "06", time: "8 min",  title: "Building the detail screen", desc: "AlbumDetailScreen — displaying all fields of a selected item" },
          { num: "07", time: "15 min", title: "Live code-along", desc: "Complete the album browser — search, empty state, detail" },
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

  () => (
    <Shell tag="Search" timer="8" title="How real-time list filtering works" subtitle="One state variable, one filter expression, automatic re-render" notes="Connect this back to Week 1's state concepts. When query changes, filteredAlbums recalculates, and because filteredAlbums is used in the LazyColumn, the list re-renders with the new filtered data. No manual update needed.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>How it flows</p>
          {[
            "User types a character in the search bar",
            "query state variable updates",
            "Recomposition triggered — screen re-runs",
            "filteredAlbums recalculated using new query",
            "LazyColumn renders the filtered list",
            "Rows that no longer match disappear instantly",
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "flex-start" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 18, height: 18, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
              <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{s}</span>
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The code</p>
          <CodePane title="Compose" accent={PURPLE}>
{`var query by remember { mutableStateOf("") }

val filteredAlbums = sampleAlbums.filter { a ->
    a.title.contains(query, ignoreCase = true) ||
    a.artist.contains(query, ignoreCase = true)
}

LazyColumn {
    items(filteredAlbums, key = { it.id }) { a ->
        AlbumRow(a)
    }
}
// Change query -> filteredAlbums recalculates
// -> list updates. No manual calls needed.`}
          </CodePane>
        </div>
      </div>
      <Info>{"This is the declarative model from Week 1 doing exactly what it promised. Change the data, the UI follows. The filter is just a computed value."}</Info>
    </Shell>
  ),

  () => (
    <Shell tag="Search" title="The filter() function — Kotlin and Swift" notes="filter() is one of the most useful functions in both languages. The key concept: it takes a lambda that returns true/false for each item. Items where true is returned are kept.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Kotlin — filter()" accent={PURPLE}>
{`// filter() returns a new list with only
// items where the lambda returns true

val filteredAlbums = sampleAlbums.filter { a ->
    a.title.contains(query, ignoreCase = true) ||
    a.artist.contains(query, ignoreCase = true)
}

// ignoreCase = true means "rock" matches "Rock"
// || means OR — match title OR artist

// The original list is NOT modified
// filteredAlbums is a new list each time`}
        </CodePane>
        <CodePane title="Swift — filter()" accent={TEAL}>
{`var filteredAlbums: [Album] {
    if query.isEmpty { return sampleAlbums }
    return sampleAlbums.filter { a in
        a.title.localizedCaseInsensitiveContains(query)
        || a.artist.localizedCaseInsensitiveContains(query)
    }
}
// Computed property — recalculates when
// query (@State) changes automatically

// localizedCaseInsensitiveContains = built-in
// case-insensitive search in Swift`}
        </CodePane>
      </div>
      <Discussion>{"If you wanted to also filter by genre — show only Rock albums when someone types 'rock' — how would you change the filter condition? What would you add?"}</Discussion>
    </Shell>
  ),

  () => (
    <Shell tag="Search" timer="5" title="The search bar — TextField components" notes="Show the binding pattern in SwiftUI — $query uses the $ prefix for a two-way binding. Students often forget the $ and wonder why their search bar does not update.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Compose — OutlinedTextField" accent={PURPLE}>
{`OutlinedTextField(
    value = query,
    onValueChange = { query = it },
    placeholder = { Text("Search albums...") },
    modifier = Modifier
        .fillMaxWidth()
        .padding(horizontal = 16.dp, vertical = 8.dp),
    singleLine = true,
    shape = RoundedCornerShape(12.dp),
    leadingIcon = {
        Icon(Icons.Default.Search,
             contentDescription = null)
    }
)`}
        </CodePane>
        <CodePane title="SwiftUI — TextField" accent={TEAL}>
{`HStack {
    Image(systemName: "magnifyingglass")
        .foregroundColor(.gray)
    TextField("Search albums...", text: $query)
    //                                  ^ $ = two-way binding
    //  typing updates query
    //  query changes update the field
        .font(.subheadline)
}
.padding(10)
.background(Color.white)
.cornerRadius(12)
.padding(.horizontal, 16)
.padding(.vertical, 10)`}
        </CodePane>
      </div>
      <Info>{"The $ binding in SwiftUI connects the TextField to the @State variable in both directions. No $ = the field shows the value but typing does nothing."}</Info>
    </Shell>
  ),

  () => (
    <Shell tag="Empty states" timer="8" title="Empty states — never leave the user staring at nothing" subtitle="Good UX that makes apps feel polished and finished" notes="Show the difference between a blank screen and a friendly empty state. Empty states are one of those details that separate finished apps from student projects.">
      <Discussion>{"Open any well-designed app and search for something that does not exist. What does it show? How does it feel different from just a blank white screen?"}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px" }}>No empty state — blank screen</p>
          <div style={{ background: GRAY, borderRadius: 8, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>(blank white area)</p>
          </div>
          <p style={{ fontSize: 12, color: MUTED, margin: "8px 0 0" }}>User thinks: "Did it break? Is it loading? Did anything happen?"</p>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>With empty state — friendly message</p>
          <div style={{ background: "#fff", borderRadius: 8, padding: "16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <p style={{ fontSize: 28, margin: 0 }}>🎵</p>
            <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: 0 }}>No albums found</p>
            <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>Try a different search term</p>
          </div>
          <p style={{ fontSize: 12, color: "#085041", margin: "8px 0 0" }}>User thinks: "Nothing matched. I will try something else." Clear and reassuring.</p>
        </div>
      </div>
    </Shell>
  ),

  () => (
    <Shell tag="Empty states" title="Empty state — in code" notes="Simple if/else on whether the filtered list is empty. This is the conditional UI pattern from Week 1 Session 2 applied to lists — students have seen this before.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="Compose — conditional empty state" accent={PURPLE}>
{`if (filteredAlbums.isEmpty()) {
    // Empty state
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("No albums found",
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold)
        Text("Try a different search term",
            fontSize = 14.sp,
            color = Color.Gray)
    }
} else {
    LazyColumn(
        contentPadding = PaddingValues(
            horizontal = 16.dp, vertical = 4.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        items(filteredAlbums, key = { it.id }) { a ->
            AlbumRow(a, onClick = { onAlbumClicked(a) })
        }
    }
}`}
        </CodePane>
        <CodePane title="SwiftUI — conditional empty state" accent={TEAL}>
{`if filteredAlbums.isEmpty {
    VStack(spacing: 12) {
        Text("No albums found")
            .font(.headline)
        Text("Try a different search term")
            .font(.subheadline)
            .foregroundColor(.gray)
    }
    .frame(maxWidth: .infinity,
           maxHeight: .infinity)
} else {
    List(filteredAlbums) { a in
        NavigationLink(
            destination: AlbumDetailScreen(album: a)
        ) {
            AlbumRow(album: a)
        }
        .listRowInsets(EdgeInsets(
            top:4,leading:16,bottom:4,trailing:16))
        .listRowBackground(Color.clear)
        .listRowSeparator(.hidden)
    }
    .listStyle(.plain)
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  () => (
    <Shell tag="Navigation" timer="8" title="Tapping a row — the list-to-detail pattern" subtitle="Week 2 navigation applied naturally — no re-teaching needed" notes="Do NOT re-teach navigation. Just apply it. Ask students: where have we seen this before? The trivia app passing questionIndex. Same pattern — passing an ID through a navigation route.">
      <Discussion>{"You built this in Week 2 with the trivia app — passing a question index through a navigation route. How would you apply the same pattern to pass an album ID from the list to the detail screen?"}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
        <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 8px" }}>Compose — passing album ID through route</p>
          <CodePane title="NavHost setup" accent={PURPLE}>
{`composable("home") {
    AlbumListScreen(
        onAlbumClicked = { a ->
            navController.navigate("detail/" + a.id)
        }
    )
}
composable("detail/{albumId}") { entry ->
    val id = entry.arguments
        ?.getString("albumId")?.toInt() ?: 0
    val a = sampleAlbums.find { it.id == id }
    a?.let { AlbumDetailScreen(album = it) }
}

// AlbumRow needs an onClick:
@Composable
fun AlbumRow(album: Album, onClick: () -> Unit = {}) {
    Row(modifier = Modifier.clickable { onClick() }) {
        // ...
    }
}`}
          </CodePane>
        </div>
        <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEAL, margin: "0 0 8px" }}>SwiftUI — NavigationLink wrapping the row</p>
          <CodePane title="List with NavigationLink" accent={TEAL}>
{`List(filteredAlbums) { a in
    NavigationLink(
        destination: AlbumDetailScreen(album: a)
        // Pass the whole Album — simpler than
        // passing just the ID and looking it up
    ) {
        AlbumRow(album: a)
    }
    .listRowInsets(EdgeInsets(
        top:4,leading:16,
        bottom:4,trailing:16))
    .listRowBackground(Color.clear)
    .listRowSeparator(.hidden)
}

// Wrap root in NavigationStack:
struct ContentView: View {
    var body: some View {
        NavigationStack {
            AlbumListScreen()
        }
    }
}`}
          </CodePane>
        </div>
      </div>
      <Info>{"SwiftUI passes the whole Album object directly. Compose passes just the ID through the route string. This is a genuine architectural difference, not just syntax."}</Info>
    </Shell>
  ),

  () => (
    <Shell tag="Detail screen" title="Building AlbumDetailScreen" notes="The detail screen receives an Album and displays all its fields. The label-value row pattern is clean and reusable — students will use it in their assignment.">
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <CodePane title="AlbumDetailScreen — Compose" accent={PURPLE}>
{`@Composable
fun AlbumDetailScreen(album: Album) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
            .padding(24.dp)
    ) {
        Row(
            horizontalArrangement =
                Arrangement.spacedBy(16.dp),
            verticalAlignment =
                Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .size(72.dp)
                    .background(
                        Color(0xFF534AB7), CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    album.artist.first().toString(),
                    color = Color.White,
                    fontSize = 28.sp,
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
        Spacer(Modifier.height(24.dp))
        HorizontalDivider()
        Spacer(Modifier.height(24.dp))
        listOf(
            "Year" to album.year.toString(),
            "Genre" to album.genre,
            "Tracks" to album.tracks.toString() + " tracks",
            "Rating" to "* " + album.rating.toString()
        ).forEach { (label, value) ->
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 10.dp),
                horizontalArrangement =
                    Arrangement.SpaceBetween
            ) {
                Text(label, color = Color.Gray)
                Text(value, fontWeight = FontWeight.Bold)
            }
            HorizontalDivider(color = Color(0xFFEEEEEE))
        }
    }
}`}
        </CodePane>
        <CodePane title="AlbumDetailScreen — SwiftUI" accent={TEAL}>
{`struct AlbumDetailScreen: View {
    let album: Album

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6)
                .ignoresSafeArea()
            VStack(alignment: .leading, spacing: 0) {
                HStack(spacing: 16) {
                    Circle()
                        .fill(Color(red:0.33,
                            green:0.29,blue:0.72))
                        .frame(width:72,height:72)
                        .overlay(
                            Text(String(
                                album.artist.prefix(1)))
                            .font(.title)
                            .fontWeight(.bold)
                            .foregroundColor(.white)
                        )
                    VStack(alignment:.leading,spacing:4) {
                        Text(album.title)
                            .font(.title2)
                            .fontWeight(.bold)
                        Text(album.artist)
                            .foregroundColor(.gray)
                    }
                }
                .padding(24)
                Divider()
                VStack(spacing: 0) {
                    ForEach([
                        ("Year", String(album.year)),
                        ("Genre", album.genre),
                        ("Tracks",
                         String(album.tracks) + " tracks"),
                        ("Rating",
                         "* " + String(album.rating))
                    ], id: \\.0) { label, value in
                        HStack {
                            Text(label)
                                .foregroundColor(.gray)
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
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  () => (
    <Shell tag="Live code-along" timer="15" title="Completing the album browser" subtitle="Open your AlbumBrowser from Session 1." dark notes="Build on Session 1 code. Goal: working search, empty state, and detail navigation. Run the full flow at the end and let students experience the finished app before explaining anything.">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>What we are completing today</p>
          {[
            "Add query state variable to AlbumListScreen",
            "Add OutlinedTextField / TextField search bar",
            "Add filteredAlbums derived from query",
            "Connect LazyColumn / List to filteredAlbums",
            "Add empty state when filteredAlbums is empty",
            "Add onAlbumClicked callback to AlbumListScreen",
            "Build AlbumDetailScreen",
            "Wire NavHost with detail route",
            "Test full flow: search, tap, detail, back",
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "center" }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{s}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 12, display: "flex", flexDirection: "column", gap: 5 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: 0, textTransform: "uppercase" }}>Full flow</p>
          {["All 8 albums in list", "Type 'rock' → 2 results", "Type 'zzz' → empty state", "Clear → all 8 back", "Tap Rumours → detail", "Year, Genre, Tracks, Rating", "Back → list preserved"].map((s, i) => (
            <div key={i} style={{ background: i === 4 ? `${TEAL}33` : "rgba(255,255,255,0.06)", borderRadius: 5, padding: "4px 8px" }}>
              <p style={{ fontSize: 10, color: i === 4 ? TEAL : "rgba(255,255,255,0.6)", margin: 0 }}>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  ),

  () => (
    <Shell tag="Live code-along" title="Part 1 — search bar and filtering" notes="Add query state, then the search bar, then filteredAlbums, then connect to the list. Run after each step. Students should see the list shrink as they type.">
      <CodePane title="Steps 1-4: query state, search bar, filtered list" accent={PURPLE}>
{`@Composable
fun AlbumListScreen(onAlbumClicked: (Album) -> Unit = {}) {
    var query by remember { mutableStateOf("") }

    val filteredAlbums = sampleAlbums.filter { a ->
        a.title.contains(query, ignoreCase = true) ||
        a.artist.contains(query, ignoreCase = true)
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF5F5F5))
    ) {
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

        if (filteredAlbums.isEmpty()) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(32.dp),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text("No albums found", fontSize = 18.sp,
                    fontWeight = FontWeight.Bold)
                Text("Try a different search term",
                    fontSize = 14.sp, color = Color.Gray)
            }
        } else {
            LazyColumn(
                contentPadding = PaddingValues(
                    horizontal = 16.dp, vertical = 4.dp),
                verticalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                items(filteredAlbums, key = { it.id }) { a ->
                    AlbumRow(a, onClick = { onAlbumClicked(a) })
                }
            }
        }
    }
}`}
      </CodePane>
    </Shell>
  ),

  () => (
    <Shell tag="Live code-along" title="Part 2 — NavHost wiring" notes="Wire the NavHost last. Run the full flow. The moment the app navigates to a styled detail screen is one of the most satisfying moments in the course — let students experience it.">
      <CodePane title="Steps 6-8: NavHost with detail route" accent={PURPLE}>
{`class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()

            NavHost(
                navController = navController,
                startDestination = "home"
            ) {
                composable("home") {
                    AlbumListScreen(
                        onAlbumClicked = { a ->
                            navController.navigate(
                                "detail/" + a.id
                            )
                        }
                    )
                }

                composable("detail/{albumId}") { entry ->
                    val id = entry.arguments
                        ?.getString("albumId")?.toInt() ?: 0
                    val a = sampleAlbums.find { it.id == id }
                    a?.let { AlbumDetailScreen(album = it) }
                }
            }
        }
    }
}

// Also update AlbumRow to accept onClick:
@Composable
fun AlbumRow(album: Album, onClick: () -> Unit = {}) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() }
            .background(Color.White,
                RoundedCornerShape(12.dp))
            .padding(12.dp),
        // ... rest is unchanged
    ) { /* ... */ }
}`}
      </CodePane>
      <Info>{"Run the full flow now: search for 'rock', see 2 results, tap Rumours, see the detail screen, go back. The search query is still there. That is because AlbumListScreen is still on the back stack — its state was preserved."}</Info>
    </Shell>
  ),

  () => (
    <Shell tag="Lab intro" timer="6" title="Lab time + Assignment 3 overview" subtitle="Go to the Lab tab on the course site — Session 2 Lab." notes="The Session 2 lab has a live interactive preview in the unit page — show it to students before they start. It demonstrates exactly what they are building. Then give the Assignment 3 brief.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Lab steps — Session 2</p>
          {[
            { n: 0, t: "Open AlbumBrowser from Session 1", time: "2 min" },
            { n: 1, t: "Add search bar + real-time filtering", time: "12 min" },
            { n: 2, t: "Add empty state for no results", time: "8 min" },
            { n: 3, t: "Build AlbumDetailScreen", time: "10 min" },
            { n: 4, t: "Wire navigation — list to detail", time: "8 min" },
            { n: 5, t: "Ask Claude about list + nav differences", time: "5 min" },
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
          <div style={{ marginTop: 10, background: TEAL_LIGHT, borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: "#085041", margin: 0 }}>Record a GIF: scrolling, searching, empty state, tap to detail, back.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Week 3 complete.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>You built the pattern that powers Instagram, Spotify, Gmail, and every browsing app you have ever used.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned this week</p>
            {["LazyColumn and List — efficient scrollable lists", "items() and key / Identifiable", "Custom row layouts with weight and Spacer", "Real-time search with filter() and state", "Empty states — good UX practice", "Tapping a row to navigate to a detail screen", "The list-to-detail pattern"].map(t => (
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
      <Notes>{"End with energy. The album browser looks and feels like a real app. Students have now combined three weeks of learning — declarative UI, state, navigation, lists — into one cohesive app. Remind them that in Week 4 the hardcoded data goes away and they will be building apps powered by real internet data."}</Notes>
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
