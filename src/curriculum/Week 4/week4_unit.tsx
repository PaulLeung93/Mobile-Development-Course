import { useState } from "react";

const TABS = ["Overview", "API Setup", "Lab", "Project", "Resources"];

const Callout = ({ type, children }) => {
  const s = {
    info:       { bg: "#E6F1FB", border: "#B5D4F4", text: "#0C447C", label: "Note" },
    tip:        { bg: "#E1F5EE", border: "#9FE1CB", text: "#085041", label: "Tip" },
    warning:    { bg: "#FAEEDA", border: "#FAC775", text: "#633806", label: "Reminder" },
    ai:         { bg: "#EEEDFE", border: "#CECBF6", text: "#3C3489", label: "AI Opportunity" },
    checkpoint: { bg: "#EAF3DE", border: "#C0DD97", text: "#27500A", label: "Checkpoint" },
    danger:     { bg: "#FCEBEB", border: "#F7C1C1", text: "#791F1F", label: "Important" },
  }[type] || { bg: "#E6F1FB", border: "#B5D4F4", text: "#0C447C", label: "Note" };
  return (
    <div style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 8, padding: "10px 14px", margin: "12px 0", fontSize: 13, color: s.text, lineHeight: 1.6 }}>
      <strong>{s.label}:</strong> {children}
    </div>
  );
};

const Hint = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, margin: "10px 0", overflow: "hidden" }}>
      <div onClick={() => setOpen(o => !o)} style={{ padding: "8px 12px", cursor: "pointer", background: "var(--color-background-secondary)", fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", display: "flex", justifyContent: "space-between" }}>
        <span>💡 Hint: {title}</span><span>{open ? "▲" : "▼"}</span>
      </div>
      {open && <div style={{ padding: "10px 14px", fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{children}</div>}
    </div>
  );
};

const Code = ({ children }) => (
  <code style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 4, padding: "1px 5px", fontSize: 12, fontFamily: "var(--font-mono)" }}>{children}</code>
);

const CodeBlock = ({ children }) => (
  <pre style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 14px", fontSize: 12, fontFamily: "var(--font-mono)", overflowX: "auto", lineHeight: 1.6, margin: "8px 0", color: "var(--color-text-primary)", whiteSpace: "pre-wrap" }}>{children}</pre>
);

const Checkbox = ({ children }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, margin: "6px 0", fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.5 }}>
    <div style={{ width: 14, height: 14, border: "1.5px solid var(--color-border-secondary)", borderRadius: 3, flexShrink: 0, marginTop: 2 }} />
    <span>{children}</span>
  </div>
);

const Step = ({ n, children }) => (
  <div style={{ display: "flex", gap: 12, margin: "14px 0", alignItems: "flex-start" }}>
    <span style={{ background: "#534AB7", color: "#fff", borderRadius: "50%", width: 26, height: 26, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{n}</span>
    <div style={{ flex: 1, fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.6 }}>{children}</div>
  </div>
);

const H2 = ({ children }) => <h2 style={{ fontSize: 18, fontWeight: 500, margin: "24px 0 8px", color: "var(--color-text-primary)" }}>{children}</h2>;
const H3 = ({ children }) => <h3 style={{ fontSize: 15, fontWeight: 500, margin: "16px 0 6px", color: "var(--color-text-primary)" }}>{children}</h3>;
const P = ({ children, style }) => <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, margin: "6px 0", ...style }}>{children}</p>;
const UL = ({ items }) => <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2, paddingLeft: 20 }}>{items.map((t, i) => <li key={i}>{t}</li>)}</ul>;

function Overview() {
  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 12px", color: "var(--color-text-primary)" }}>Unit 4: Networking and REST APIs</h1>
      <P>Until now every app you have built uses hardcoded data. This week that changes. You will make your album browser fetch real data from the internet — replacing the static sampleAlbums list with live results from the Last.fm API. By the end of Week 4 your app will work like a real production app.</P>
      <div style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 16px", margin: "12px 0" }}>
        <P style={{ color: "var(--color-text-primary)", margin: 0 }}>This is one of the most significant weeks in the course. Networking is what separates a demo app from a real one. The list screen, search, and detail screen you built in Week 3 will not change much — only where the data comes from.</P>
      </div>
      <Callout type="warning">You need a Last.fm API key before Session 1. Go to the API Setup tab and complete the setup steps now. It takes about 5 minutes and you need it to follow the lab.</Callout>

      <H2>What you will learn</H2>
      <UL items={[
        "How HTTP works — requests, responses, status codes",
        "What a REST API is and how to read API documentation",
        "How to parse JSON responses into Kotlin data classes or Swift structs",
        "Coroutines (Kotlin) and async/await (Swift) — making network calls without freezing the UI",
        "Retrofit (Android) and URLSession (iOS) — industry-standard networking libraries",
        "Loading states — showing a spinner while data is being fetched",
        "Error handling — what to show when the network call fails",
        "Image loading from URLs using Coil (Android) and AsyncImage (SwiftUI)",
      ]} />

      <H2>This unit at a glance</H2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "8px 0" }}>
        {[
          { label: "Session 1", val: "HTTP basics, REST APIs, JSON parsing, coroutines/async-await. Lab: make your first Last.fm API call and display results." },
          { label: "Session 2", val: "Loading states, error handling, and image loading from URLs. Lab: polish the album browser with real album art and proper error UX." },
          { label: "Lab (each session)", val: "Both sessions extend the album browser from Week 3. Use Claude to translate networking code between Compose and SwiftUI." },
          { label: "Assignment 4", val: "Guided starter — same album browser structure, replace Last.fm with a different public API of your choice." },
        ].map(item => (
          <div key={item.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
          </div>
        ))}
      </div>

      <H2>Upcoming due dates</H2>
      <UL items={[
        "Assignment 3 (browse app) — due before Session 1 of this week",
        "Assignment 4 (networked app) — due one week after Session 2",
      ]} />
      <Callout type="info">Do not forget to fill out the Session Survey at the end of each class session.</Callout>
    </div>
  );
}

function ApiSetup() {
  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Last.fm API Setup</h1>
      <P>Complete these steps before Session 1. The whole process takes about 5 minutes. You will not be able to follow the lab without an API key.</P>
      <Callout type="danger">Do not share your API key publicly — do not commit it to GitHub, post it in Slack, or include it in a README. Treat it like a password.</Callout>

      <H2>Step 1 — Create a Last.fm account</H2>
      <Step n="1">Go to <a href="https://www.last.fm/join" style={{ color: "var(--color-text-info)" }}>last.fm/join</a> and create a free account. If you already have one, skip to Step 2.</Step>
      <Step n="2">Verify your email address. Last.fm will send a confirmation email — click the link inside it.</Step>

      <H2>Step 2 — Get your API key</H2>
      <Step n="1">Go to <a href="https://www.last.fm/api/account/create" style={{ color: "var(--color-text-info)" }}>last.fm/api/account/create</a>. You must be logged in.</Step>
      <Step n="2">Fill in the form:
        <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2, paddingLeft: 20, marginTop: 6 }}>
          <li><strong>Application name:</strong> AlbumBrowser (or anything you like)</li>
          <li><strong>Application description:</strong> CodePath mobile development course project</li>
          <li><strong>Application homepage:</strong> leave blank</li>
          <li><strong>Callback URL:</strong> leave blank</li>
        </ul>
      </Step>
      <Step n="3">Click Submit. You will see your <strong>API key</strong> and <strong>Shared secret</strong> on the next page. Copy the API key — you only need this one, not the shared secret.</Step>
      <Callout type="tip">Save your API key somewhere safe — a notes app or password manager. If you lose it you can always return to last.fm/api/accounts to view it again.</Callout>

      <H2>Step 3 — Test your key</H2>
      <P>Paste this URL into your browser, replacing <Code>YOUR_API_KEY</Code> with your actual key:</P>
      <CodeBlock>{"https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json&limit=10"}</CodeBlock>
      <P>You should see a JSON response with a list of top tracks. If you see an error message, double-check that you pasted the key correctly.</P>
      <Callout type="checkpoint">Checkpoint: you can see a JSON response in your browser. You are ready for lab.</Callout>

      <H2>Step 4 — Store your key safely in your project</H2>
      <P>Never hardcode an API key directly in your source code — it will end up on GitHub. Use a local config file that is excluded from version control instead.</P>

      <H3>Android — local.properties</H3>
      <P>Open or create <Code>local.properties</Code> in your project root (this file is already in <Code>.gitignore</Code> by default):</P>
      <CodeBlock>{"LASTFM_API_KEY=your_actual_key_here"}</CodeBlock>
      <P>Then read it in your <Code>build.gradle.kts</Code>:</P>
      <CodeBlock>{`import java.util.Properties

val localProperties = Properties()
localProperties.load(rootProject.file("local.properties").inputStream())

android {
    defaultConfig {
        buildConfigField(
            "String",
            "LASTFM_API_KEY",
            "\\"" + localProperties["LASTFM_API_KEY"] + "\\""
        )
    }
    buildFeatures { buildConfig = true }
}`}</CodeBlock>
      <P>Access it in code with <Code>BuildConfig.LASTFM_API_KEY</Code>.</P>

      <H3>iOS — Config.xcconfig</H3>
      <P>Create a new file called <Code>Config.xcconfig</Code> in your project root. Add it to <Code>.gitignore</Code>.</P>
      <CodeBlock>{"LASTFM_API_KEY = your_actual_key_here"}</CodeBlock>
      <P>In your <Code>Info.plist</Code>, add a new row:</P>
      <CodeBlock>{"LASTFM_API_KEY = $(LASTFM_API_KEY)"}</CodeBlock>
      <P>Access it in code:</P>
      <CodeBlock>{`let apiKey = Bundle.main.infoDictionary?["LASTFM_API_KEY"] as? String ?? ""`}</CodeBlock>
      <Callout type="info">For this course it is acceptable to store the key in a constant at the top of your networking file, as long as you add that file to .gitignore. The xcconfig approach is best practice for real projects.</Callout>

      <H2>Last.fm API endpoints you will use</H2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6, margin: "8px 0" }}>
        {[
          { method: "chart.getTopArtists", desc: "Returns the top artists globally. Good for a list screen.", url: "?method=chart.gettopartists&api_key=KEY&format=json&limit=20" },
          { method: "chart.getTopTracks", desc: "Returns the top tracks globally.", url: "?method=chart.gettoptracks&api_key=KEY&format=json&limit=20" },
          { method: "artist.getTopAlbums", desc: "Returns the top albums for a given artist.", url: "?method=artist.gettopalbums&artist=Coldplay&api_key=KEY&format=json" },
          { method: "artist.getInfo", desc: "Returns detailed info about an artist — for the detail screen.", url: "?method=artist.getinfo&artist=Coldplay&api_key=KEY&format=json" },
        ].map(ep => (
          <div key={ep.method} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 4 }}>
              <code style={{ fontSize: 12, fontWeight: 600, color: "#534AB7", fontFamily: "var(--font-mono)" }}>{ep.method}</code>
            </div>
            <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "0 0 4px" }}>{ep.desc}</p>
            <code style={{ fontSize: 11, color: "var(--color-text-tertiary)", fontFamily: "var(--font-mono)", wordBreak: "break-all" }}>{"https://ws.audioscrobbler.com/2.0/" + ep.url}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

function Session1Lab() {
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 1 Lab: First API Call — Fetching Top Artists</h1>
      <P>You are going to replace the hardcoded sampleAlbums list with real data from Last.fm. By the end of this lab your album browser will fetch and display live top artists from the chart.getTopArtists endpoint. Budget about 50-60 minutes.</P>
      <Callout type="danger">You need your Last.fm API key before starting this lab. If you have not completed the API Setup tab, do that first.</Callout>

      <H2>Goals</H2>
      <UL items={[
        "Add Retrofit (Android) or URLSession (iOS) to your project",
        "Define a data model that matches the Last.fm JSON response",
        "Make a network call to chart.getTopArtists",
        "Display the results in your existing album browser list",
        "Understand coroutines (Android) and async/await (iOS) at a basic level",
      ]} />

      <H2>Lab instructions</H2>

      <H3>Step 0: Open your AlbumBrowser from Week 3 (~2 min)</H3>
      <P>Your existing list screen, search, and detail screen all stay. You are only changing where the data comes from.</P>
      <Callout type="tip">Make a copy of your Week 3 project before starting — call it AlbumBrowserV2. That way you have a working fallback if something goes wrong.</Callout>

      <H3>Step 1: Add dependencies (~5 min)</H3>
      <P>For Android — add to <Code>build.gradle.kts (app)</Code>:</P>
      <CodeBlock>{`dependencies {
    // Retrofit — HTTP client
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    // Gson converter — parses JSON into data classes
    implementation("com.squareup.retrofit2:converter-gson:2.9.0")
    // Coil — image loading (used in Session 2)
    implementation("io.coil-kt:coil-compose:2.4.0")
}`}</CodeBlock>
      <P>Also add internet permission to <Code>AndroidManifest.xml</Code>:</P>
      <CodeBlock>{"<uses-permission android:name=\"android.permission.INTERNET\" />"}</CodeBlock>
      <P>For iOS — no extra dependencies needed. URLSession and AsyncImage are built into the SDK.</P>
      <Callout type="checkpoint">Checkpoint 1: Project syncs without errors after adding dependencies.</Callout>

      <H3>Step 2: Understand the Last.fm JSON response (~5 min)</H3>
      <P>Before writing any code, paste this URL into your browser and read the response:</P>
      <CodeBlock>{"https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=YOUR_KEY&format=json&limit=10"}</CodeBlock>
      <P>The JSON structure looks like this:</P>
      <CodeBlock>{`{
  "artists": {
    "artist": [
      {
        "name": "Taylor Swift",
        "playcount": "123456789",
        "listeners": "9876543",
        "url": "https://www.last.fm/music/Taylor+Swift",
        "image": [
          { "#text": "https://...small.jpg", "size": "small" },
          { "#text": "https://...medium.jpg", "size": "medium" },
          { "#text": "https://...large.jpg", "size": "large" },
          { "#text": "https://...extralarge.jpg", "size": "extralarge" }
        ]
      }
    ]
  }
}`}</CodeBlock>
      <Callout type="tip">Reading the raw JSON before writing any models is a good habit. It tells you exactly what field names to use and which fields are nested inside which objects.</Callout>

      <H3>Step 3: Define the response data model (~8 min)</H3>
      <P>Create data classes/structs that match the JSON structure exactly. Field names must match the JSON keys.</P>
      <P>For Android — create <Code>LastFmModels.kt</Code>:</P>
      <CodeBlock>{`import com.google.gson.annotations.SerializedName

data class TopArtistsResponse(
    val artists: ArtistsWrapper
)

data class ArtistsWrapper(
    val artist: List<Artist>
)

data class Artist(
    val name: String,
    val playcount: String,
    val listeners: String,
    val url: String,
    val image: List<ArtistImage>
)

data class ArtistImage(
    @SerializedName("#text") val url: String,
    val size: String
)

// Helper to get the large image URL
fun Artist.getLargeImageUrl(): String =
    image.find { it.size == "extralarge" }?.url
        ?: image.lastOrNull()?.url
        ?: ""`}</CodeBlock>
      <P>For iOS — create <Code>LastFmModels.swift</Code>:</P>
      <CodeBlock>{`struct TopArtistsResponse: Codable {
    let artists: ArtistsWrapper
}

struct ArtistsWrapper: Codable {
    let artist: [Artist]
}

struct Artist: Codable, Identifiable {
    var id: String { name }   // use name as unique ID
    let name: String
    let playcount: String
    let listeners: String
    let url: String
    let image: [ArtistImage]

    var largeImageUrl: String {
        image.first { $0.size == "extralarge" }?.text
            ?? image.last?.text
            ?? ""
    }
}

struct ArtistImage: Codable {
    let text: String
    let size: String

    // Map "#text" JSON key to "text" Swift property
    enum CodingKeys: String, CodingKey {
        case text = "#text"
        case size
    }
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 2: Models compile without errors. The field names exactly match the Last.fm JSON keys.</Callout>
      <Hint title="Why does the image field use a hash in the JSON?">{"Last.fm uses \"#text\" as the key for image URLs — it is an unusual naming choice. In Kotlin, @SerializedName(\"#text\") maps it to a regular property name. In Swift, CodingKeys does the same thing."}</Hint>

      <H3>Step 4: Create the API service (~8 min)</H3>
      <P>For Android — create <Code>LastFmApiService.kt</Code>:</P>
      <CodeBlock>{`import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET
import retrofit2.http.Query

const val BASE_URL = "https://ws.audioscrobbler.com/2.0/"
const val API_KEY = BuildConfig.LASTFM_API_KEY

interface LastFmApiService {
    @GET(".")
    suspend fun getTopArtists(
        @Query("method") method: String = "chart.gettopartists",
        @Query("api_key") apiKey: String = API_KEY,
        @Query("format") format: String = "json",
        @Query("limit") limit: Int = 20
    ): TopArtistsResponse
}

// Singleton — create once and reuse
object LastFmApi {
    val service: LastFmApiService by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(LastFmApiService::class.java)
    }
}`}</CodeBlock>
      <P>For iOS — create <Code>LastFmApiService.swift</Code>:</P>
      <CodeBlock>{`import Foundation

struct LastFmApiService {
    static let baseURL = "https://ws.audioscrobbler.com/2.0/"
    static let apiKey = Bundle.main.infoDictionary?["LASTFM_API_KEY"] as? String ?? ""

    static func getTopArtists(limit: Int = 20) async throws -> [Artist] {
        var components = URLComponents(string: baseURL)!
        components.queryItems = [
            URLQueryItem(name: "method", value: "chart.gettopartists"),
            URLQueryItem(name: "api_key", value: apiKey),
            URLQueryItem(name: "format", value: "json"),
            URLQueryItem(name: "limit", value: String(limit))
        ]
        let (data, _) = try await URLSession.shared.data(from: components.url!)
        let response = try JSONDecoder().decode(TopArtistsResponse.self, from: data)
        return response.artists.artist
    }
}`}</CodeBlock>
      <Hint title="What does suspend mean in Kotlin?">{"A suspend function can pause and resume without blocking the thread. When getTopArtists() makes a network call, it suspends — the thread is freed to do other work. When the response arrives, it resumes. This is how Kotlin handles async work without freezing the UI."}</Hint>
      <Hint title="What does async throws mean in Swift?">{"async means the function runs asynchronously — it can pause while waiting for the network without blocking the main thread. throws means it can fail and throw an error, which you handle with do/try/catch."}</Hint>

      <H3>Step 5: Call the API from your screen (~10 min)</H3>
      <P>Update your list screen to fetch artists from the API instead of using sampleAlbums.</P>
      <P>For Android — update <Code>AlbumListScreen</Code>:</P>
      <CodeBlock>{`@Composable
fun ArtistListScreen(onArtistClicked: (Artist) -> Unit = {}) {
    var artists by remember { mutableStateOf<List<Artist>>(emptyList()) }
    var query by remember { mutableStateOf("") }

    // LaunchedEffect — runs once when the screen first appears
    LaunchedEffect(Unit) {
        artists = LastFmApi.service.getTopArtists().artists.artist
    }

    val filtered = artists.filter {
        it.name.contains(query, ignoreCase = true)
    }

    Column(modifier = Modifier.fillMaxSize()
        .background(Color(0xFFF5F5F5))) {
        OutlinedTextField(
            value = query,
            onValueChange = { query = it },
            placeholder = { Text("Search artists...") },
            modifier = Modifier.fillMaxWidth().padding(16.dp),
            singleLine = true,
            shape = RoundedCornerShape(12.dp)
        )
        LazyColumn(
            contentPadding = PaddingValues(horizontal=16.dp, vertical=4.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            items(filtered, key = { it.name }) { artist ->
                ArtistRow(artist, onClick = { onArtistClicked(artist) })
            }
        }
    }
}`}</CodeBlock>
      <P>For iOS — update <Code>ArtistListScreen</Code>:</P>
      <CodeBlock>{`struct ArtistListScreen: View {
    @State private var artists: [Artist] = []
    @State private var query = ""

    var filtered: [Artist] {
        if query.isEmpty { return artists }
        return artists.filter {
            $0.name.localizedCaseInsensitiveContains(query)
        }
    }

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            VStack(spacing: 0) {
                // Search bar (same as Week 3)
                HStack {
                    Image(systemName: "magnifyingglass")
                        .foregroundColor(.gray)
                    TextField("Search artists...", text: $query)
                        .font(.subheadline)
                }
                .padding(10).background(Color.white)
                .cornerRadius(12)
                .padding(.horizontal,16).padding(.vertical,10)

                List(filtered) { artist in
                    NavigationLink(
                        destination: ArtistDetailScreen(artist: artist)
                    ) {
                        ArtistRow(artist: artist)
                    }
                    .listRowBackground(Color.clear)
                    .listRowSeparator(.hidden)
                }
                .listStyle(.plain)
            }
        }
        .navigationTitle("Top Artists")
        // task runs when the view appears — async equivalent of onAppear
        .task {
            do {
                artists = try await LastFmApiService.getTopArtists()
            } catch {
                print("Failed to fetch artists: " + error.localizedDescription)
            }
        }
    }
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 3: Run your app. After a brief pause, real artist names from Last.fm should appear in your list. Search still works. If the list is empty, check your API key and internet connection.</Callout>
      <Hint title="My list is empty but there are no errors">{"Check that INTERNET permission is added to AndroidManifest.xml (Android). On iOS, make sure your Info.plist has the LASTFM_API_KEY entry. Also try pasting the URL into your browser to confirm your key is valid."}</Hint>
      <Hint title="I am getting a NetworkOnMainThreadException on Android">{"You must make network calls from a coroutine, not from the main thread directly. Make sure your call is inside a LaunchedEffect or a ViewModel with viewModelScope."}</Hint>

      <H3>Step 6: Ask Claude to explain the async patterns (~5 min)</H3>
      <Callout type="ai">Ask Claude: "I just made my first network call in [Compose / SwiftUI]. Can you explain in plain English: what is a coroutine in Kotlin and what is async/await in Swift? How are they similar and how do they differ? Why do we need them for network calls?"</Callout>
      <Checkbox>Real artist data is showing in your list from the Last.fm API</Checkbox>
      <Checkbox>Search still filters the live data correctly</Checkbox>

      <H3>Step 7: Reflect (~5 min)</H3>
      <CodeBlock>{`// Lab 7 Reflection (Week 4, Session 1)
// 1. In your own words: what is a network request?
//    Describe it like you're explaining to a non-developer.
// 2. What did LaunchedEffect / .task replace in your code?
//    What was happening before that it now handles?
// 3. What surprised you about the Last.fm JSON structure?`}</CodeBlock>
      <Callout type="checkpoint">Final checkpoint: Show a TA your app displaying live Last.fm data. Walk them through your reflection.</Callout>

      <H2>Stretch features</H2>
      <Checkbox>Switch the endpoint to chart.getTopTracks and display top tracks instead of artists</Checkbox>
      <Checkbox>Add a limit selector — let users choose between top 10, top 20, and top 50</Checkbox>
      <Checkbox>Log the raw JSON response to the console using println / print and read through it</Checkbox>
    </div>
  );
}

function Session2Lab() {
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 2 Lab: Loading States, Error Handling and Album Art</h1>
      <P>Your app now fetches real data. But it shows a blank screen while loading and crashes silently on errors. This lab fixes both and adds album art images loaded from URLs. Budget about 50-60 minutes.</P>

      <H2>Goals</H2>
      <UL items={[
        "Show a loading spinner while the API call is in progress",
        "Show a friendly error message when the network call fails",
        "Load artist images from URLs using Coil (Android) and AsyncImage (SwiftUI)",
        "Handle the case where an image URL is empty or broken",
        "Understand the three UI states every networked screen needs: loading, success, error",
      ]} />

      <H2>Lab instructions</H2>

      <H3>Step 0: The three states of a networked screen (~5 min)</H3>
      <P>Every screen that loads data from a network has exactly three possible states. Right now your screen only handles one of them.</P>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, margin: "10px 0" }}>
        {[
          { state: "Loading", desc: "The request is in flight. Show a spinner. Do not show stale or empty content.", color: "#E6F1FB", text: "#0C447C" },
          { state: "Success", desc: "Data arrived. Show the list. This is what your app does now — but only after a blank screen flash.", color: "#E1F5EE", text: "#085041" },
          { state: "Error", desc: "Something went wrong — no internet, server down, bad API key. Show a message and a retry button.", color: "#FCEBEB", text: "#791F1F" },
        ].map(s => (
          <div key={s.state} style={{ background: s.color, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: s.text, margin: "0 0 4px" }}>{s.state}</p>
            <p style={{ fontSize: 12, color: s.text, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <H3>Step 1: Model the UI state (~5 min)</H3>
      <P>Create a sealed class (Kotlin) or enum (Swift) to represent the three states cleanly.</P>
      <P>For Android:</P>
      <CodeBlock>{`sealed class UiState<out T> {
    object Loading : UiState<Nothing>()
    data class Success<T>(val data: T) : UiState<T>()
    data class Error(val message: String) : UiState<Nothing>()
}`}</CodeBlock>
      <P>For iOS:</P>
      <CodeBlock>{`enum UiState<T> {
    case loading
    case success(T)
    case error(String)
}`}</CodeBlock>
      <Hint title="What is a sealed class in Kotlin?">{"A sealed class restricts which subclasses can exist — only the ones defined inside it. This means when you write a when expression on a UiState, Kotlin knows all the possible cases and can warn you if you miss one. It is perfect for modelling a fixed set of states."}</Hint>

      <H3>Step 2: Update the screen to use UiState (~12 min)</H3>
      <P>For Android — update <Code>ArtistListScreen</Code>:</P>
      <CodeBlock>{`@Composable
fun ArtistListScreen(onArtistClicked: (Artist) -> Unit = {}) {
    var uiState by remember {
        mutableStateOf<UiState<List<Artist>>>(UiState.Loading)
    }
    var query by remember { mutableStateOf("") }

    LaunchedEffect(Unit) {
        uiState = try {
            val artists = LastFmApi.service.getTopArtists().artists.artist
            UiState.Success(artists)
        } catch (e: Exception) {
            UiState.Error(e.message ?: "Something went wrong")
        }
    }

    Column(modifier = Modifier.fillMaxSize()
        .background(Color(0xFFF5F5F5))) {
        OutlinedTextField(
            value = query, onValueChange = { query = it },
            placeholder = { Text("Search artists...") },
            modifier = Modifier.fillMaxWidth().padding(16.dp),
            singleLine = true, shape = RoundedCornerShape(12.dp)
        )
        when (val state = uiState) {
            is UiState.Loading -> {
                Box(modifier = Modifier.fillMaxSize(),
                    contentAlignment = Alignment.Center) {
                    CircularProgressIndicator(color = Color(0xFF534AB7))
                }
            }
            is UiState.Error -> {
                Column(
                    modifier = Modifier.fillMaxSize().padding(32.dp),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text("Something went wrong", fontSize = 18.sp,
                        fontWeight = FontWeight.Bold)
                    Text(state.message, fontSize = 13.sp,
                        color = Color.Gray, textAlign = TextAlign.Center)
                    Spacer(Modifier.height(16.dp))
                    Button(onClick = {
                        // reset to loading to retry
                        uiState = UiState.Loading
                    }) { Text("Retry") }
                }
            }
            is UiState.Success -> {
                val filtered = state.data.filter {
                    it.name.contains(query, ignoreCase = true)
                }
                if (filtered.isEmpty()) {
                    // empty state from Week 3
                } else {
                    LazyColumn(
                        contentPadding = PaddingValues(horizontal=16.dp),
                        verticalArrangement = Arrangement.spacedBy(4.dp)
                    ) {
                        items(filtered, key = { it.name }) { artist ->
                            ArtistRow(artist, onClick = { onArtistClicked(artist) })
                        }
                    }
                }
            }
        }
    }
}`}</CodeBlock>
      <P>For iOS — update <Code>ArtistListScreen</Code>:</P>
      <CodeBlock>{`struct ArtistListScreen: View {
    @State private var uiState: UiState<[Artist]> = .loading
    @State private var query = ""

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            switch uiState {
            case .loading:
                ProgressView("Loading artists...")
                    .tint(Color(red:0.33,green:0.29,blue:0.72))
            case .error(let message):
                VStack(spacing: 12) {
                    Text("Something went wrong").font(.headline)
                    Text(message).font(.subheadline)
                        .foregroundColor(.gray)
                        .multilineTextAlignment(.center)
                    Button("Retry") { uiState = .loading }
                        .buttonStyle(.borderedProminent)
                }
                .padding(32)
            case .success(let artists):
                VStack(spacing: 0) {
                    // search bar (same as before)
                    List(artists.filter {
                        query.isEmpty ||
                        $0.name.localizedCaseInsensitiveContains(query)
                    }) { artist in
                        NavigationLink(
                            destination: ArtistDetailScreen(artist: artist)
                        ) { ArtistRow(artist: artist) }
                        .listRowBackground(Color.clear)
                        .listRowSeparator(.hidden)
                    }
                    .listStyle(.plain)
                }
            }
        }
        .navigationTitle("Top Artists")
        .task(id: uiState.isLoading) {
            guard case .loading = uiState else { return }
            do {
                let artists = try await LastFmApiService.getTopArtists()
                uiState = .success(artists)
            } catch {
                uiState = .error(error.localizedDescription)
            }
        }
    }
}

extension UiState {
    var isLoading: Bool {
        if case .loading = self { return true }
        return false
    }
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 1: You should see a loading spinner when the screen first opens, then the list appears. Turn off your WiFi and reopen the app — you should see the error state with a Retry button.</Callout>

      <H3>Step 3: Add image loading (~12 min)</H3>
      <P>Last.fm returns image URLs for each artist. Display them in the row using Coil (Android) or AsyncImage (SwiftUI) instead of the initial avatar circle.</P>
      <P>For Android — update <Code>ArtistRow</Code>:</P>
      <CodeBlock>{`@Composable
fun ArtistRow(artist: Artist, onClick: () -> Unit = {}) {
    val imageUrl = artist.getLargeImageUrl()

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() }
            .background(Color.White, RoundedCornerShape(12.dp))
            .padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        // Image or fallback avatar
        if (imageUrl.isNotEmpty()) {
            AsyncImage(
                model = imageUrl,
                contentDescription = artist.name,
                modifier = Modifier
                    .size(52.dp)
                    .clip(CircleShape),
                contentScale = ContentScale.Crop,
                // Show initial while loading
                placeholder = rememberVectorPainter(Icons.Default.Person),
                // Show initial if image fails
                error = rememberVectorPainter(Icons.Default.Person)
            )
        } else {
            // Fallback — same avatar circle from Week 3
            Box(
                modifier = Modifier
                    .size(52.dp)
                    .background(Color(0xFF534AB7), CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Text(artist.name.first().toString(),
                    color = Color.White, fontSize = 22.sp,
                    fontWeight = FontWeight.Bold)
            }
        }

        Column(modifier = Modifier.weight(1f)) {
            Text(artist.name, fontSize = 15.sp,
                fontWeight = FontWeight.Bold)
            Text(
                artist.listeners.toLongOrNull()
                    ?.let { formatListeners(it) }
                    ?: artist.listeners + " listeners",
                fontSize = 13.sp, color = Color.Gray
            )
        }
    }
}

fun formatListeners(count: Long): String = when {
    count >= 1_000_000 -> String.format("%.1fM listeners", count / 1_000_000.0)
    count >= 1_000     -> String.format("%.0fK listeners", count / 1_000.0)
    else               -> "$count listeners"
}`}</CodeBlock>
      <P>For iOS — update <Code>ArtistRow</Code>:</P>
      <CodeBlock>{`struct ArtistRow: View {
    let artist: Artist

    var body: some View {
        HStack(spacing: 12) {
            if !artist.largeImageUrl.isEmpty,
               let url = URL(string: artist.largeImageUrl) {
                AsyncImage(url: url) { phase in
                    switch phase {
                    case .success(let image):
                        image.resizable()
                            .aspectRatio(contentMode: .fill)
                            .frame(width:52, height:52)
                            .clipShape(Circle())
                    case .failure, .empty:
                        // Fallback avatar
                        Circle()
                            .fill(Color(red:0.33,green:0.29,blue:0.72))
                            .frame(width:52,height:52)
                            .overlay(
                                Text(String(artist.name.prefix(1)))
                                    .font(.title2).fontWeight(.bold)
                                    .foregroundColor(.white)
                            )
                    @unknown default:
                        ProgressView().frame(width:52,height:52)
                    }
                }
            } else {
                Circle()
                    .fill(Color(red:0.33,green:0.29,blue:0.72))
                    .frame(width:52,height:52)
                    .overlay(
                        Text(String(artist.name.prefix(1)))
                            .font(.title2).fontWeight(.bold)
                            .foregroundColor(.white)
                    )
            }

            VStack(alignment: .leading, spacing: 2) {
                Text(artist.name)
                    .font(.subheadline).fontWeight(.bold)
                Text(formatListeners(artist.listeners))
                    .font(.caption).foregroundColor(.gray)
            }
            Spacer()
        }
        .padding(12)
        .background(Color.white)
        .cornerRadius(12)
    }

    func formatListeners(_ raw: String) -> String {
        guard let count = Int(raw) else { return raw + " listeners" }
        if count >= 1_000_000 {
            return String(format: "%.1fM listeners",
                          Double(count) / 1_000_000)
        } else if count >= 1_000 {
            return String(format: "%.0fK listeners",
                          Double(count) / 1_000)
        }
        return "\(count) listeners"
    }
}`}</CodeBlock>
      <Callout type="checkpoint">Checkpoint 2: Artist images load from Last.fm URLs. Rows with no image show the initial avatar fallback. The listener count is formatted as "9.8M listeners" instead of a raw number.</Callout>
      <Hint title="My images are not loading on Android">{"Make sure you added the INTERNET permission to AndroidManifest.xml in Step 1. Also check that your Coil dependency was synced correctly."}</Hint>
      <Hint title="Last.fm is returning empty image URLs">{"This is common for some artists. That is exactly why the fallback avatar exists — always handle the empty URL case. Never assume an image URL will be present."}</Hint>

      <H3>Step 4: Ask Claude about error handling patterns (~5 min)</H3>
      <Callout type="ai">Ask Claude: "I just added loading and error states to my networked screen. Can you translate my [Compose / SwiftUI] UiState implementation to [SwiftUI / Compose]? Then explain: what other error scenarios should a production app handle that I am not handling yet?"</Callout>
      <Checkbox>Loading spinner appears on first launch</Checkbox>
      <Checkbox>Error state appears when network is off — with a working Retry button</Checkbox>
      <Checkbox>Images load from URLs with a fallback for missing ones</Checkbox>

      <H3>Step 5: Reflect (~5 min)</H3>
      <CodeBlock>{`// Lab 8 Reflection (Week 4, Session 2)
// 1. What are the three UI states every networked screen needs?
//    Why does ignoring any one of them create a bad user experience?
// 2. What does the Retry button actually do in your code?
//    Trace exactly what happens when it is tapped.
// 3. What happens in your app if an image URL is empty?
//    What would happen if you had not handled that case?`}</CodeBlock>
      <Callout type="checkpoint">Final checkpoint: Show a TA the full flow — loading spinner, real artist data with images, error state with retry, and search still working. Walk them through your reflection.</Callout>

      <H2>Stretch features</H2>
      <Checkbox>Cache the API response — if the user navigates away and comes back, show the cached data instantly while refetching in the background</Checkbox>
      <Checkbox>Add a pull-to-refresh gesture that refetches the artist list</Checkbox>
      <Checkbox>Show a skeleton loading state — placeholder rows with an animated shimmer effect instead of a spinner</Checkbox>
    </div>
  );
}

function Lab() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {["Session 1 Lab", "Session 2 Lab"].map((s, i) => (
          <button key={s} onClick={() => setStep(i)} style={{
            padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: "pointer",
            background: step === i ? "#534AB7" : "var(--color-background-secondary)",
            color: step === i ? "#fff" : "var(--color-text-secondary)",
            border: step === i ? "none" : "0.5px solid var(--color-border-tertiary)"
          }}>{s}</button>
        ))}
      </div>
      {step === 0 ? <Session1Lab /> : <Session2Lab />}
    </div>
  );
}

function Project() {
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Unit 4 Project: Networked Browse App</h1>
      <Callout type="warning">Submit this assignment by the end of Week 5 Session 1.</Callout>
      <P>You are going to replace the Last.fm API with a different public API of your choice. The app structure — list, search, detail screen, loading states, error handling, and images — stays the same. Only the data source changes.</P>
      <P>You may build in either Android (Jetpack Compose) or iOS (SwiftUI). You do not need to submit both.</P>

      <H2>Step 1 — pick your API</H2>
      <P>Choose any free, public REST API that returns a list of items with at least 4 fields and an image URL. A few starting points:</P>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, margin: "10px 0" }}>
        {[
          { name: "PokeAPI", url: "pokeapi.co", desc: "Pokémon — no key needed, great for lists" },
          { name: "Open Library", url: "openlibrary.org/dev/docs/api", desc: "Books — no key, returns covers and metadata" },
          { name: "The Dog API", url: "thedogapi.com", desc: "Dog breeds — free key, great images" },
          { name: "Unsplash", url: "unsplash.com/developers", desc: "Photos — free key, high quality images" },
          { name: "NASA APOD", url: "api.nasa.gov", desc: "Astronomy photos — free key, daily images" },
          { name: "Open Movie DB", url: "omdbapi.com", desc: "Movies — free key, posters and details" },
        ].map(api => (
          <div key={api.name} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 2px" }}>{api.name}</p>
            <p style={{ fontSize: 11, color: "var(--color-text-secondary)", margin: "0 0 3px", lineHeight: 1.4 }}>{api.desc}</p>
            <code style={{ fontSize: 10, color: "var(--color-text-tertiary)", fontFamily: "var(--font-mono)" }}>{api.url}</code>
          </div>
        ))}
      </div>
      <Callout type="tip">Read your chosen API's documentation and paste a sample response URL into your browser before writing any code. Make sure you can see real JSON data before starting.</Callout>

      <H2>Required features</H2>
      <H3>1. Networking</H3>
      <Checkbox>App fetches data from a real public API — no hardcoded lists</Checkbox>
      <Checkbox>Network call uses Retrofit (Android) or URLSession (iOS)</Checkbox>
      <Checkbox>API key is stored safely — not hardcoded in source files committed to GitHub</Checkbox>

      <H3>2. UI states</H3>
      <Checkbox>A loading indicator is shown while the API call is in progress</Checkbox>
      <Checkbox>The list appears when data loads successfully</Checkbox>
      <Checkbox>An error message and retry button are shown when the call fails</Checkbox>
      <Checkbox>Turning off WiFi and reopening the app triggers the error state</Checkbox>

      <H3>3. List and search</H3>
      <Checkbox>A scrollable list of at least 15 items fetched from the API</Checkbox>
      <Checkbox>Custom row layout showing at least 3 fields per row</Checkbox>
      <Checkbox>Real-time search filtering the fetched results</Checkbox>
      <Checkbox>Empty state when search returns no results</Checkbox>

      <H3>4. Images</H3>
      <Checkbox>Row images loaded from URLs using Coil (Android) or AsyncImage (SwiftUI)</Checkbox>
      <Checkbox>A fallback is shown when an image URL is empty or fails to load</Checkbox>

      <H3>5. Detail screen</H3>
      <Checkbox>Tapping a row navigates to a detail screen</Checkbox>
      <Checkbox>Detail screen shows all available fields from the API response</Checkbox>

      <H2>Stretch features</H2>
      <Checkbox>Add pull-to-refresh to reload the list from the API</Checkbox>
      <Checkbox>Add pagination — load more items when the user scrolls to the bottom</Checkbox>
      <Checkbox>Show a shimmer skeleton loading state instead of a spinner</Checkbox>
      <Checkbox>Cache the last successful response and show it immediately on relaunch while refetching</Checkbox>

      <H2>Submitting your project</H2>
      <ol style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li>Create a GitHub repository for your project</li>
        <li>Push your code to the repository</li>
        <li>Create a README using the Unit 4 README template</li>
        <li>Check off all features by changing <Code>-[ ]</Code> to <Code>-[x]</Code></li>
        <li>Record a GIF showing: loading spinner, list with images, search filtering, empty state, tapping to detail, and the error state with WiFi off</li>
        <li>Add the GIF to the README</li>
        <li>Make the repo private and add <Code>codepathreview</Code> as a collaborator</li>
      </ol>
      <Callout type="danger">Do not commit your API key to GitHub. Add your local.properties or Config.xcconfig to .gitignore before your first commit. If you accidentally push a key, regenerate it immediately on the API provider's website.</Callout>

      <H2>Hints</H2>
      <Hint title="I am not sure how to read the JSON structure of my API">Paste a sample API URL into your browser and look at the raw JSON. Identify the top-level key that contains the list of items. Then trace one item and note every field name and its type. Those become your data class or struct fields.</Hint>
      <Hint title="My data class field names do not match the JSON">In Kotlin, use @SerializedName("json_key") to map a JSON key to a different property name. In Swift, use CodingKeys enum. This is how we handled the "#text" field in the Last.fm models.</Hint>
      <Hint title="The error state is not triggering even when WiFi is off">On Android emulator, toggling WiFi on the host machine may not affect the emulator. Go to the emulator's Extended Controls and toggle the network there. On iOS simulator, use the Network Link Conditioner in Xcode.</Hint>
      <Hint title="Images are loading but they look stretched or cropped wrong">Use contentScale = ContentScale.Crop (Compose) or .aspectRatio(contentMode: .fill) (SwiftUI) to fill the circle without distorting the image. Also make sure your clip modifier comes after the size modifier, not before.</Hint>
    </div>
  );
}

function Resources() {
  return (
    <div>
      <H2>Official documentation</H2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://square.github.io/retrofit/" style={{ color: "var(--color-text-info)" }}>Retrofit — square.github.io</a></li>
        <li><a href="https://coil-kt.github.io/coil/compose/" style={{ color: "var(--color-text-info)" }}>Coil for Compose — coil-kt.github.io</a></li>
        <li><a href="https://developer.apple.com/documentation/foundation/urlsession" style={{ color: "var(--color-text-info)" }}>URLSession — developer.apple.com</a></li>
        <li><a href="https://developer.apple.com/documentation/swiftui/asyncimage" style={{ color: "var(--color-text-info)" }}>AsyncImage — developer.apple.com</a></li>
        <li><a href="https://kotlinlang.org/docs/coroutines-overview.html" style={{ color: "var(--color-text-info)" }}>Coroutines overview — kotlinlang.org</a></li>
        <li><a href="https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/" style={{ color: "var(--color-text-info)" }}>Swift concurrency — swift.org</a></li>
      </ul>
      <H2>Last.fm API</H2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://www.last.fm/api" style={{ color: "var(--color-text-info)" }}>Last.fm API documentation</a></li>
        <li><a href="https://www.last.fm/api/account/create" style={{ color: "var(--color-text-info)" }}>Create a Last.fm API account</a></li>
        <li><a href="https://www.last.fm/api/show/chart.getTopArtists" style={{ color: "var(--color-text-info)" }}>chart.getTopArtists endpoint docs</a></li>
        <li><a href="https://www.last.fm/api/show/artist.getInfo" style={{ color: "var(--color-text-info)" }}>artist.getInfo endpoint docs</a></li>
      </ul>
      <H2>Extra practice</H2>
      <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2.2, paddingLeft: 20 }}>
        <li><a href="https://developer.android.com/courses/android-basics-compose/unit-5" style={{ color: "var(--color-text-info)" }}>Android Basics with Compose — Unit 5: Connect to the internet</a></li>
        <li><a href="https://developer.apple.com/tutorials/data" style={{ color: "var(--color-text-info)" }}>Fetching and caching data in SwiftUI — Apple tutorial</a></li>
        <li><a href="https://jsonplaceholder.typicode.com" style={{ color: "var(--color-text-info)" }}>JSONPlaceholder — free fake REST API for practice</a></li>
      </ul>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("Overview");
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ marginBottom: 4 }}>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "0 0 2px" }}>Mobile Development in the Age of AI</p>
        <p style={{ fontSize: 18, fontWeight: 500, color: "var(--color-text-primary)", margin: 0 }}>Unit 4</p>
      </div>
      <div style={{ display: "flex", gap: 4, borderBottom: "0.5px solid var(--color-border-tertiary)", margin: "12px 0 20px", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "8px 14px", fontSize: 13, cursor: "pointer", background: "none",
            border: "none", borderBottom: tab === t ? "2px solid #534AB7" : "2px solid transparent",
            color: tab === t ? "#534AB7" : "var(--color-text-secondary)",
            fontWeight: tab === t ? 500 : 400
          }}>{t}</button>
        ))}
      </div>
      {tab === "Overview"   && <Overview />}
      {tab === "API Setup"  && <ApiSetup />}
      {tab === "Lab"        && <Lab />}
      {tab === "Project"    && <Project />}
      {tab === "Resources"  && <Resources />}
    </div>
  );
}
