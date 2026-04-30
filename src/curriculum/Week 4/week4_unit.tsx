import { useState } from "react";

const TABS = ["Overview", "API Setup", "Lab", "Project", "Resources"];

const PLATFORMS = ["Android", "iOS"];

/* ── colors ── */
const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const BL = "#7F52FF", BLL = "#F0EEFF";
const GR = "#F05138", GRL = "#FFF2F0";

/* ── shared components ── */
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

const IC = ({ children }: { children: React.ReactNode }) => (
  <code style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 4, padding: "1px 5px", fontSize: 12 }}>{children}</code>
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
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 12px", color: "var(--color-text-primary)" }}>Unit 4: Networking and REST APIs</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Until now every app you have built uses hardcoded data. This week that changes. You will make your album browser fetch real data from the internet — replacing the static sampleAlbums list with live results from the Last.fm API. By the end of Week 4 your app will work like a real production app.</p>
      <div style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "12px 16px", margin: "12px 0" }}>
        <p style={{ color: "var(--color-text-primary)", margin: 0 }}>This is one of the most significant weeks in the course. Networking is what separates a demo app from a real one. The list screen, search, and detail screen you built in Week 3 will not change much — only where the data comes from.</p>
      </div>
      <Warn>You need a Last.fm API key before Session 1. Go to the API Setup tab and complete the setup steps now. It takes about 5 minutes and you need it to follow the lab.</Warn>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>What you will learn</h2>
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

      <div style={{ marginTop: 20, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>Session Info</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>{"📅"} See your cohort{"'"}s schedule for session times</li>
          <li>{"↗"} Session Zoom Link | Passcode: <strong>codepath</strong></li>
          <li>{"📊"} Link to Slides</li>
        </ul>
        <strong style={{ display: "block", marginTop: 10 }}>Upcoming Due Dates</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>{"📬"} Assignment 4 (networked app) — due before Week 5 Session 1</li>
        </ul>
      </div>

      <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"📦 This unit at a glance"}</strong>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
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
      </div>
    </div>
  );
}

function ApiSetup() {
  const [platform, setPlatform] = useState("Android");
  
  return (
    <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Last.fm API Setup</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Complete these steps before Session 1. The whole process takes about 5 minutes. You will not be able to follow the lab without an API key.</p>
      
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      
      <Warn>Do not share your API key publicly — do not commit it to GitHub, post it in Slack, or include it in a README. Treat it like a password.</Warn>

      <VStep num={1} title="Create a Last.fm account">
        <Checkbox>Go to <a href="https://www.last.fm/join" style={{ color: "var(--color-text-info)" }}>last.fm/join</a> and create a free account. If you already have one, skip to Step 2.</Checkbox>
        <Checkbox>Verify your email address. Last.fm will send a confirmation email — click the link inside it.</Checkbox>
      </VStep>

      <VStep num={2} title="Get your API key">
        <Checkbox>Go to <a href="https://www.last.fm/api/account/create" style={{ color: "var(--color-text-info)" }}>last.fm/api/account/create</a>. You must be logged in.</Checkbox>
        <Checkbox>Fill in the form:
          <ul style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 2, paddingLeft: 20, marginTop: 6 }}>
            <li><strong>Application name:</strong> AlbumBrowser (or anything you like)</li>
            <li><strong>Application description:</strong> CodePath mobile development course project</li>
            <li><strong>Application homepage:</strong> leave blank</li>
            <li><strong>Callback URL:</strong> leave blank</li>
          </ul>
        </Checkbox>
        <Checkbox>Click Submit. You will see your <strong>API key</strong> and <strong>Shared secret</strong> on the next page. Copy the API key — you only need this one, not the shared secret.</Checkbox>
        <Tip>Save your API key somewhere safe — a notes app or password manager. If you lose it you can always return to last.fm/api/accounts to view it again.</Tip>
      </VStep>

      <VStep num={3} title="Test your key">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Paste this URL into your browser, replacing <IC>YOUR_API_KEY</IC> with your actual key:</p>
        <CodeB>{"https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json&limit=10"}</CodeB>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>You should see a JSON response with a list of top tracks. If you see an error message, double-check that you pasted the key correctly.</p>
        <Checkpoint num="?">Checkpoint: you can see a JSON response in your browser. You are ready for lab.</Checkpoint>
      </VStep>

      <VStep num={4} title="Store your key safely in your project" last>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Never hardcode an API key directly in your source code — it will end up on GitHub. Use a local config file that is excluded from version control instead.</p>

        {platform === "Android" && (
          <VStep num="a" title="Add to local.properties" last>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Open or create <IC>local.properties</IC> in your project root (this file is already in <IC>.gitignore</IC> by default) and add your key:</p>
            <CodeB title="local.properties" accent={BL}>{"LASTFM_API_KEY=your_actual_key_here"}</CodeB>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Then read it in your app-level <IC>build.gradle.kts</IC> inside the <IC>android</IC> block. This will generate a <IC>BuildConfig</IC> class.</p>
            <Section title="💡 Show me how to configure build.gradle.kts">
              <CodeB title="app/build.gradle.kts" accent={BL}>{`import java.util.Properties

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
}`}</CodeB>
            </Section>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>You can now access it anywhere in your code with <IC>BuildConfig.LASTFM_API_KEY</IC>.</p>
          </VStep>
        )}

        {platform === "iOS" && (
          <VStep num="a" title="Create a Config.xcconfig file" last>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Create a new file called <IC>Config.xcconfig</IC> in your project root. Add it to your <IC>.gitignore</IC> file immediately. Put your key inside:</p>
            <CodeB title="Config.xcconfig" accent={GR}>{"LASTFM_API_KEY = your_actual_key_here"}</CodeB>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Next, open your project's <IC>Info.plist</IC> and add a new row to map the value from your config file into the app's info dictionary:</p>
            <CodeB title="Info.plist" accent={GR}>{"LASTFM_API_KEY = $(LASTFM_API_KEY)"}</CodeB>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>You can now access it in your Swift code like this:</p>
            <CodeB title="Swift" accent={GR}>{`let apiKey = Bundle.main.infoDictionary?["LASTFM_API_KEY"] as? String ?? ""`}</CodeB>
            <Note>For this course it is acceptable to store the key in a constant at the top of your networking file, as long as you add that file to .gitignore. The xcconfig approach is best practice for real projects.</Note>
          </VStep>
        )}
      </VStep>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Last.fm API endpoints you will use</h2>
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

function Session1Lab({ platform }: { platform: string }) {
  return (
    <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 1 Lab: First API Call — Fetching Top Artists</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>You are going to replace the hardcoded sampleAlbums list with real data from Last.fm. By the end of this lab your album browser will fetch and display live top artists from the chart.getTopArtists endpoint. Budget about 50-60 minutes.</p>
      <Warn>You need your Last.fm API key before starting this lab. If you have not completed the API Setup tab, do that first.</Warn>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Goals</h2>
      <UL items={[
        "Add Retrofit (Android) or URLSession (iOS) to your project",
        "Define a data model that matches the Last.fm JSON response",
        "Make a network call to chart.getTopArtists",
        "Display the results in your existing album browser list",
        "Understand coroutines (Android) and async/await (iOS) at a basic level",
      ]} />

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Lab instructions</h2>

      <VStep num={0} title="Open your AlbumBrowser from Week 3 (~2 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Your existing list screen, search, and detail screen all stay. You are only changing where the data comes from.</p>
        <Tip>Make a copy of your Week 3 project before starting — call it AlbumBrowserV2. That way you have a working fallback if something goes wrong.</Tip>
      </VStep>

      <VStep num={1} title="Add dependencies (~5 min)">
        {platform === "Android" && <>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For Android — add to <IC>build.gradle.kts (app)</IC>:</p>
          <CodeB>{`dependencies {
    // Retrofit — HTTP client
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    // Gson converter — parses JSON into data classes
    implementation("com.squareup.retrofit2:converter-gson:2.9.0")
    // Coil — image loading (used in Session 2)
    implementation("io.coil-kt:coil-compose:2.4.0")
}`}</CodeB>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Also add internet permission to <IC>AndroidManifest.xml</IC>:</p>
          <CodeB>{"<uses-permission android:name=\"android.permission.INTERNET\" />"}</CodeB>
        </>}
        {platform === "iOS" && <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For iOS — no extra dependencies needed. URLSession and AsyncImage are built into the SDK.</p>}
        <Checkpoint num="1">Project syncs without errors after adding dependencies.</Checkpoint>
      </VStep>

      <VStep num={2} title="Understand the Last.fm JSON response (~5 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Before writing any code, paste this URL into your browser and read the response:</p>
        <CodeB>{"https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=YOUR_KEY&format=json&limit=10"}</CodeB>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>The JSON structure looks like this:</p>
        <CodeB>{`{
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
}`}</CodeB>
        <Tip>Reading the raw JSON before writing any models is a good habit. It tells you exactly what field names to use and which fields are nested inside which objects.</Tip>
      </VStep>

      <VStep num={3} title="Define the response data model (~8 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Create data classes/structs that match the JSON structure exactly. Field names must match the JSON keys.</p>

        <VStep num="a" title="Define the ArtistImage model">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Create a file named <IC>LastFmModels</IC> and define the <IC>ArtistImage</IC> model to represent the items in the "image" array. Notice that Last.fm uses "#text" as the key for the image URL.</p>
          <Section title="💡 Show me the syntax for special JSON keys">
            {platform === "Android" && <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For Android (Gson): Use <IC>@SerializedName("#text")</IC> above the property.</p>}
            {platform === "iOS" && <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>For iOS (Swift): Use an enum <IC>CodingKeys: String, CodingKey</IC> inside the struct to map property names to JSON keys.</p>}
          </Section>
          <Section title="✅ Check your work — show me the complete file so far">
            {platform === "Android" && <CodeB title="Kotlin — LastFmModels.kt" accent={BL}>{`import com.google.gson.annotations.SerializedName

data class ArtistImage(
    @SerializedName("#text") val url: String,
    val size: String
)`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift — LastFmModels.swift" accent={GR}>{`struct ArtistImage: Codable {
    let text: String
    let size: String

    // Map "#text" JSON key to "text" Swift property
    enum CodingKeys: String, CodingKey {
        case text = "#text"
        case size
    }
}`}</CodeB>}
          </Section>
        </VStep>

        <VStep num="b" title="Define the Artist model">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Above <IC>ArtistImage</IC>, define the <IC>Artist</IC> model containing strings for <IC>name</IC>, <IC>playcount</IC>, <IC>listeners</IC>, <IC>url</IC>, and a list/array of <IC>ArtistImage</IC>. Also include a helper property/function to grab the "extralarge" image URL or fallback to the last one.</p>
          <Section title="✅ Check your work — show me the complete file so far">
            {platform === "Android" && <CodeB title="Kotlin — LastFmModels.kt" accent={BL}>{`import com.google.gson.annotations.SerializedName

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
        ?: ""`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift — LastFmModels.swift" accent={GR}>{`struct Artist: Codable, Identifiable {
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
}`}</CodeB>}
          </Section>
        </VStep>

        <VStep num="c" title="Define the wrapper response models" last>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Looking at the JSON, the artists list is nested inside <IC>"artist"</IC> which is nested inside <IC>"artists"</IC>. Create two wrapper models: <IC>ArtistsWrapper</IC> holding the list of <IC>Artist</IC>, and <IC>TopArtistsResponse</IC> holding the <IC>ArtistsWrapper</IC>.</p>
          <Section title="✅ Check your work — show me the complete LastFmModels">
            {platform === "Android" && <CodeB title="Kotlin — LastFmModels.kt" accent={BL}>{`import com.google.gson.annotations.SerializedName

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
        ?: ""`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift — LastFmModels.swift" accent={GR}>{`struct TopArtistsResponse: Codable {
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
}`}</CodeB>}
          </Section>
        </VStep>
        
        <Checkpoint num="2">Models compile without errors. The field names exactly match the Last.fm JSON keys.</Checkpoint>
        {platform === "Android" && <Tip><b>Why does the image field use a hash in the JSON?</b> {"Last.fm uses \"#text\" as the key for image URLs — it is an unusual naming choice. In Kotlin, @SerializedName(\"#text\") maps it to a regular property name."}</Tip>}
        {platform === "iOS" && <Tip><b>Why does the image field use a hash in the JSON?</b> {"Last.fm uses \"#text\" as the key for image URLs — it is an unusual naming choice. In Swift, CodingKeys does the same thing."}</Tip>}
      </VStep>

      <VStep num={4} title="Create the API service (~8 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Now that we have the models, let's create the networking layer to actually call the API.</p>

        <VStep num="a" title="Define the API base URL and Key">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Create a new file called <IC>LastFmApiService</IC>. Define constants for the <IC>BASE_URL</IC> (<IC>"https://ws.audioscrobbler.com/2.0/"</IC>) and your <IC>API_KEY</IC> (loaded safely from your configuration).</p>
          <Section title="✅ Check your work — show me the complete file so far">
            {platform === "Android" && <CodeB title="Kotlin — LastFmApiService.kt" accent={BL}>{`const val BASE_URL = "https://ws.audioscrobbler.com/2.0/"
const val API_KEY = BuildConfig.LASTFM_API_KEY`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift — LastFmApiService.swift" accent={GR}>{`import Foundation

struct LastFmApiService {
    static let baseURL = "https://ws.audioscrobbler.com/2.0/"
    static let apiKey = Bundle.main.infoDictionary?["LASTFM_API_KEY"] as? String ?? ""
}`}</CodeB>}
          </Section>
        </VStep>

        <VStep num="b" title="Add the fetch method" last>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Create the method to fetch the top artists. It must be asynchronous (use <IC>suspend</IC> in Kotlin or <IC>async throws</IC> in Swift).</p>
          {platform === "Android" && <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}><strong>Android:</strong> Define a Retrofit interface with a <IC>@GET(".")</IC> function, passing query parameters like "method" and "api_key". Then create a Singleton object to build the Retrofit instance.</p>}
          {platform === "iOS" && <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}><strong>iOS:</strong> Use <IC>URLComponents</IC> to append the query items, then call <IC>URLSession.shared.data</IC> and decode the JSON response.</p>}
          
          <Section title="💡 Show me the syntax for Retrofit / URLSession">
             {platform === "Android" && <CodeB title="Kotlin (Retrofit)" accent={BL}>{`interface MyApiService {
    @GET(".")
    suspend fun getItems(@Query("param") param: String): ResponseModel
}`}</CodeB>}
             {platform === "iOS" && <CodeB title="Swift (URLSession)" accent={GR}>{`static func getItems() async throws -> [Item] {
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode(ResponseModel.self, from: data).items
}`}</CodeB>}
          </Section>

          <Section title="✅ Check your work — show me the complete LastFmApiService">
            {platform === "Android" && <CodeB title="Kotlin — LastFmApiService.kt" accent={BL}>{`import retrofit2.Retrofit
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
}`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift — LastFmApiService.swift" accent={GR}>{`import Foundation

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
}`}</CodeB>}
          </Section>
        </VStep>
        {platform === "Android" && <Tip><b>What does suspend mean in Kotlin?</b> {"A suspend function can pause and resume without blocking the thread. When getTopArtists() makes a network call, it suspends — the thread is freed to do other work. When the response arrives, it resumes. This is how Kotlin handles async work without freezing the UI."}</Tip>}
        {platform === "iOS" && <Tip><b>What does async throws mean in Swift?</b> {"async means the function runs asynchronously — it can pause while waiting for the network without blocking the main thread. throws means it can fail and throw an error, which you handle with do/try/catch."}</Tip>}
      </VStep>

      <VStep num={5} title="Call the API from your screen (~10 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Update your list screen to fetch artists from the API instead of using sampleAlbums.</p>
        
        <VStep num="a" title="Replace sample data with state and fetch logic">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>In <IC>ArtistListScreen</IC>, change the <IC>artists</IC> variable to be an empty state array. Then, use <IC>LaunchedEffect(Unit)</IC> (Android) or <IC>.task</IC> (iOS) to call the API service and update the state when the screen appears.</p>
          <Section title="💡 Show me the syntax for fetching data">
            {platform === "Android" && <CodeB title="Kotlin" accent={BL}>{`var artists by remember { mutableStateOf<List<Artist>>(emptyList()) }

LaunchedEffect(Unit) {
    artists = LastFmApi.service.getTopArtists().artists.artist
}`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift" accent={GR}>{`@State private var artists: [Artist] = []

// Attach to the main View
.task {
    do {
        artists = try await LastFmApiService.getTopArtists()
    } catch {
        print("Failed: " + error.localizedDescription)
    }
}`}</CodeB>}
          </Section>
          <Section title="✅ Check your work — show me the complete file so far">
            {platform === "Android" && <CodeB title="Kotlin — ArtistListScreen.kt (fetch logic)" accent={BL}>{`@Composable
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

    // UI goes here
}`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift — ArtistListScreen.swift (fetch logic)" accent={GR}>{`struct ArtistListScreen: View {
    @State private var artists: [Artist] = []
    @State private var query = ""

    var filtered: [Artist] {
        if query.isEmpty { return artists }
        return artists.filter {
            $0.name.localizedCaseInsensitiveContains(query)
        }
    }

    var body: some View {
        // UI goes here
        .task {
            do {
                artists = try await LastFmApiService.getTopArtists()
            } catch {
                print("Failed to fetch artists: " + error.localizedDescription)
            }
        }
    }
}`}</CodeB>}
          </Section>
        </VStep>

        <VStep num="b" title="Ensure the UI uses the fetched data" last>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Verify that your <IC>LazyColumn</IC> or <IC>List</IC> is using the <IC>filtered</IC> list variable that derives from the state. Since the state updates after the network call completes, the UI will automatically re-render with the fetched artists.</p>
          <Section title="✅ Check your work — show me the complete ArtistListScreen">
            {platform === "Android" && <CodeB title="Kotlin — ArtistListScreen.kt" accent={BL}>{`@Composable
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
}`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift — ArtistListScreen.swift" accent={GR}>{`struct ArtistListScreen: View {
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
}`}</CodeB>}
          </Section>
        </VStep>
        
        <Checkpoint num="3">Run your app. After a brief pause, real artist names from Last.fm should appear in your list. Search still works. If the list is empty, check your API key and internet connection.</Checkpoint>
        {platform === "Android" && <Tip><b>My list is empty but there are no errors</b> {"Check that INTERNET permission is added to AndroidManifest.xml. Also try pasting the URL into your browser to confirm your key is valid."}</Tip>}
        {platform === "iOS" && <Tip><b>My list is empty but there are no errors</b> {"Make sure your Info.plist has the LASTFM_API_KEY entry. Also try pasting the URL into your browser to confirm your key is valid."}</Tip>}
        {platform === "Android" && <Tip><b>I am getting a NetworkOnMainThreadException</b> {"You must make network calls from a coroutine, not from the main thread directly. Make sure your call is inside a LaunchedEffect or a ViewModel with viewModelScope."}</Tip>}
      </VStep>

      <VStep num={6} title="Ask Claude to explain the async patterns (~5 min)">
        <AiOpp>Ask Claude: "I just made my first network call in [Compose / SwiftUI]. Can you explain in plain English: what is a coroutine in Kotlin and what is async/await in Swift? How are they similar and how do they differ? Why do we need them for network calls?"</AiOpp>
        <Checkbox>Real artist data is showing in your list from the Last.fm API</Checkbox>
        <Checkbox>Search still filters the live data correctly</Checkbox>
      </VStep>

      <VStep num={7} title="Reflect (~5 min)" last>
        <CodeB>{`// Lab 7 Reflection (Week 4, Session 1)
// 1. In your own words: what is a network request?
//    Describe it like you're explaining to a non-developer.
// 2. What did LaunchedEffect / .task replace in your code?
//    What was happening before that it now handles?
// 3. What surprised you about the Last.fm JSON structure?`}</CodeB>
        <Checkpoint num="?">Final checkpoint: Show a TA your app displaying live Last.fm data. Walk them through your reflection.</Checkpoint>
      </VStep>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Stretch features</h2>
      <Checkbox>Switch the endpoint to chart.getTopTracks and display top tracks instead of artists</Checkbox>
      <Checkbox>Add a limit selector — let users choose between top 10, top 20, and top 50</Checkbox>
      <Checkbox>Log the raw JSON response to the console using println / print and read through it</Checkbox>
    </div>
  );
}

function Session2Lab({ platform }: { platform: string }) {
  return (
    <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Session 2 Lab: Loading States, Error Handling and Album Art</h1>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Your app now fetches real data. But it shows a blank screen while loading and crashes silently on errors. This lab fixes both and adds album art images loaded from URLs. Budget about 50-60 minutes.</p>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Goals</h2>
      <UL items={[
        "Show a loading spinner while the API call is in progress",
        "Show a friendly error message when the network call fails",
        "Load artist images from URLs using Coil (Android) and AsyncImage (SwiftUI)",
        "Handle the case where an image URL is empty or broken",
        "Understand the three UI states every networked screen needs: loading, success, error",
      ]} />

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Lab instructions</h2>

      <VStep num={0} title="The three states of a networked screen (~5 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Every screen that loads data from a network has exactly three possible states. Right now your screen only handles one of them.</p>
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
      </VStep>

      <VStep num={1} title="Model the UI state (~5 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Create a sealed class (Kotlin) or enum (Swift) to represent the three states cleanly.</p>
        <Section title="✅ Check your work — show me the complete file so far">
          {platform === "Android" && <CodeB title="Kotlin" accent={BL}>{`sealed class UiState<out T> {
    object Loading : UiState<Nothing>()
    data class Success<T>(val data: T) : UiState<T>()
    data class Error(val message: String) : UiState<Nothing>()
}`}</CodeB>}
          {platform === "iOS" && <CodeB title="Swift" accent={GR}>{`enum UiState<T> {
    case loading
    case success(T)
    case error(String)
}`}</CodeB>}
        </Section>
        <Tip><b>What is a sealed class in Kotlin?</b> {"A sealed class restricts which subclasses can exist — only the ones defined inside it. This means when you write a when expression on a UiState, Kotlin knows all the possible cases and can warn you if you miss one. It is perfect for modelling a fixed set of states."}</Tip>
      </VStep>

      <VStep num={2} title="Update the screen to use UiState (~12 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Now integrate the <IC>UiState</IC> into your <IC>ArtistListScreen</IC>.</p>

        <VStep num="a" title="Replace state variable and fetch logic">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Instead of a list of artists, your state should now be a <IC>UiState</IC> starting in the <IC>Loading</IC> state. Wrap your API call in a try/catch block. If it succeeds, update the state to <IC>Success</IC> with the data payload. If it fails, catch the error and update the state to <IC>Error</IC>.</p>
          <Section title="💡 Show me the syntax">
            {platform === "Android" && <CodeB title="Kotlin" accent={BL}>{`var uiState by remember { mutableStateOf<UiState<List<Artist>>>(UiState.Loading) }

LaunchedEffect(Unit) {
    uiState = try {
        val artists = LastFmApi.service.getTopArtists().artists.artist
        UiState.Success(artists)
    } catch (e: Exception) {
        UiState.Error(e.message ?: "Something went wrong")
    }
}`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift" accent={GR}>{`@State private var uiState: UiState<[Artist]> = .loading

// ...
.task(id: uiState.isLoading) {
    guard case .loading = uiState else { return }
    do {
        let artists = try await LastFmApiService.getTopArtists()
        uiState = .success(artists)
    } catch {
        uiState = .error(error.localizedDescription)
    }
}`}</CodeB>}
          </Section>
          <Section title="✅ Check your work — show me the complete file so far">
            {platform === "Android" && <CodeB title="Kotlin — ArtistListScreen.kt (with updated state and fetch)" accent={BL}>{`@Composable
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
        // We will update the UI in the next step to use uiState
        // Currently, it might not compile since the list variable is gone
    }
}`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift — ArtistListScreen.swift (with updated state and fetch)" accent={GR}>{`struct ArtistListScreen: View {
    @State private var uiState: UiState<[Artist]> = .loading
    @State private var query = ""

    var body: some View {
        ZStack {
            Color(UIColor.systemGray6).ignoresSafeArea()
            // We will update the UI in the next step to use uiState
            // Currently, it might not compile since the list variable is gone
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
}`}</CodeB>}
          </Section>
        </VStep>

        <VStep num="b" title="Add UI for Loading and Error states">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Below the search bar (Android) or inside your <IC>ZStack</IC> (iOS), replace the list with a <IC>when</IC> (Kotlin) or <IC>switch</IC> (Swift) statement on <IC>uiState</IC>. Show a spinner for <IC>Loading</IC>, and an error message with a Retry button for <IC>Error</IC>. Leave the <IC>Success</IC> state empty for now.</p>
          <Section title="✅ Check your work — show me the complete file so far">
            {platform === "Android" && <CodeB title="Kotlin — ArtistListScreen.kt (with loading and error)" accent={BL}>{`@Composable
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
                // To be implemented in the next step
            }
        }
    }
}`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift — ArtistListScreen.swift (with loading and error)" accent={GR}>{`struct ArtistListScreen: View {
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
                // To be implemented in the next step
                EmptyView()
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
}`}</CodeB>}
          </Section>
        </VStep>

        <VStep num="c" title="Add UI for the Success state" last>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Finally, move your original list rendering logic into the <IC>Success</IC> block. Use the data payload from the state (<IC>state.data</IC> in Kotlin, or the unwrapped <IC>artists</IC> in Swift) to populate the list and handle search filtering.</p>
          <Section title="✅ Check your work — show me the complete ArtistListScreen">
            {platform === "Android" && <CodeB title="Kotlin — ArtistListScreen.kt (complete)" accent={BL}>{`@Composable
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
}`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift — ArtistListScreen.swift (complete)" accent={GR}>{`struct ArtistListScreen: View {
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
                    // Search bar (same as before)
                    HStack {
                        Image(systemName: "magnifyingglass")
                            .foregroundColor(.gray)
                        TextField("Search artists...", text: $query)
                            .font(.subheadline)
                    }
                    .padding(10).background(Color.white)
                    .cornerRadius(12)
                    .padding(.horizontal,16).padding(.vertical,10)

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
}`}</CodeB>}
          </Section>
        </VStep>
        <Checkpoint num="1">You should see a loading spinner when the screen first opens, then the list appears. Turn off your WiFi and reopen the app — you should see the error state with a Retry button.</Checkpoint>
      </VStep>

      <VStep num={3} title="Build a Skeleton Loading State (~15 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>A simple progress spinner is okay, but a <strong>skeleton loading state</strong> (placeholder rows that shimmer) makes your app feel much faster and more premium. Let's upgrade our <IC>Loading</IC> state to show 10 skeleton rows instead.</p>

        <VStep num="a" title="Create the Skeleton Row Component">
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Create a new file for <IC>SkeletonRow</IC>. It should visually match the <IC>ArtistRow</IC>, but instead of text and images, it displays gray rectangles and circles.</p>
          <Section title="💡 Show me the syntax">
            {platform === "Android" && <CodeB title="Kotlin" accent={BL}>{`@Composable
fun SkeletonRow() {
    Row(
        modifier = Modifier.fillMaxWidth()
            .background(Color.White, RoundedCornerShape(12.dp)).padding(12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        Box(modifier = Modifier.size(52.dp).background(Color.LightGray, CircleShape))
        Column(modifier = Modifier.weight(1f)) {
            Box(modifier = Modifier.width(120.dp).height(16.dp).background(Color.LightGray))
            Spacer(Modifier.height(8.dp))
            Box(modifier = Modifier.width(80.dp).height(12.dp).background(Color.LightGray))
        }
    }
}`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift" accent={GR}>{`struct SkeletonRow: View {
    var body: some View {
        HStack(spacing: 12) {
            Circle()
                .fill(Color(UIColor.systemGray5))
                .frame(width: 52, height: 52)
            
            VStack(alignment: .leading, spacing: 8) {
                RoundedRectangle(cornerRadius: 4)
                    .fill(Color(UIColor.systemGray5))
                    .frame(width: 120, height: 16)
                RoundedRectangle(cornerRadius: 4)
                    .fill(Color(UIColor.systemGray5))
                    .frame(width: 80, height: 12)
            }
            Spacer()
        }
        .padding(12)
        .background(Color.white)
        .cornerRadius(12)
    }
}`}</CodeB>}
          </Section>
        </VStep>

        <VStep num="b" title="Replace the spinner with the Skeleton List" last>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>In <IC>ArtistListScreen</IC>, replace the <IC>CircularProgressIndicator</IC> / <IC>ProgressView</IC> in the <IC>Loading</IC> state with a list of 10 <IC>SkeletonRow</IC>s.</p>
          <Section title="✅ Check your work — show me the updated loading state">
            {platform === "Android" && <CodeB title="Kotlin — ArtistListScreen.kt (loading state)" accent={BL}>{`// ... inside when (val state = uiState) ...
is UiState.Loading -> {
    LazyColumn(
        contentPadding = PaddingValues(horizontal=16.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        items(10) { 
            SkeletonRow() 
        }
    }
}`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift — ArtistListScreen.swift (loading state)" accent={GR}>{`// ... inside switch uiState ...
case .loading:
    ScrollView {
        VStack(spacing: 4) {
            ForEach(0..<10, id: \\.self) { _ in
                SkeletonRow()
                    .padding(.horizontal, 16)
            }
        }
        .padding(.vertical, 10)
    }`}</CodeB>}
          </Section>
        </VStep>
        
        <Checkpoint num="2">Restart your app. You should now see a list of gray skeleton placeholders while the API is loading, followed by the real data.</Checkpoint>
      </VStep>

      <VStep num={4} title="Add image loading (~12 min)">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Last.fm returns image URLs for each artist. Display them in the row using Coil (Android) or AsyncImage (SwiftUI) instead of the initial avatar circle.</p>
        <Section title="✅ Check your work — show me the complete ArtistRow">
          {platform === "Android" && <CodeB title="Kotlin — ArtistRow.kt" accent={BL}>{`@Composable
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
}`}</CodeB>}
          {platform === "iOS" && <CodeB title="Swift — ArtistRow.swift" accent={GR}>{`struct ArtistRow: View {
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
        return "\\(count) listeners"
    }
}`}</CodeB>}
        </Section>
        <Checkpoint num="3">Artist images load from Last.fm URLs. Rows with no image show the initial avatar fallback. The listener count is formatted as "9.8M listeners" instead of a raw number.</Checkpoint>
        {platform === "Android" && <Tip><b>My images are not loading</b> {"Make sure you added the INTERNET permission to AndroidManifest.xml in Step 1. Also check that your Coil dependency was synced correctly."}</Tip>}
        <Tip><b>Last.fm is returning empty image URLs</b> {"This is common for some artists. That is exactly why the fallback avatar exists — always handle the empty URL case. Never assume an image URL will be present."}</Tip>
      </VStep>

      <VStep num={5} title="Ask Claude about error handling patterns (~5 min)">
        <AiOpp>Ask Claude: "I just added loading and error states to my networked screen. Can you translate my [Compose / SwiftUI] UiState implementation to [SwiftUI / Compose]? Then explain: what other error scenarios should a production app handle that I am not handling yet?"</AiOpp>
        <Checkbox>Skeleton loading state appears on first launch</Checkbox>
        <Checkbox>Error state appears when network is off — with a working Retry button</Checkbox>
        <Checkbox>Images load from URLs with a fallback for missing ones</Checkbox>
      </VStep>

      <VStep num={6} title="Reflect (~5 min)" last>
        <CodeB>{`// Lab 8 Reflection (Week 4, Session 2)
// 1. What are the three UI states every networked screen needs?
//    Why does ignoring any one of them create a bad user experience?
// 2. What does the Retry button actually do in your code?
//    Trace exactly what happens when it is tapped.
// 3. What happens in your app if an image URL is empty?
//    What would happen if you had not handled that case?`}</CodeB>
        <Checkpoint num="?">Final checkpoint: Show a TA the full flow — skeleton loading state, real artist data with images, error state with retry, and search still working. Walk them through your reflection.</Checkpoint>
      </VStep>

      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "24px 0 8px" }}>Stretch features</h2>
      <VStep num="★" title="Add a pull-to-refresh gesture" last>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>Add a pull-to-refresh gesture to your list so users can manually fetch the latest data.</p>
        
        {platform === "Android" && (
          <VStep num="a" title="Add the material foundation dependency">
            <p>To use <IC>pullRefresh</IC> in Compose, you need the material dependency. Open <IC>app/build.gradle.kts</IC> and add the following inside your <IC>dependencies</IC> block, then click <strong>Sync Now</strong>.</p>
            <CodeB title="build.gradle.kts" accent={BL}>{`implementation("androidx.compose.material:material:1.5.4")`}</CodeB>
          </VStep>
        )}
        
        <VStep num={platform === "Android" ? "b" : "a"} title="Setup the refresh logic">
          {platform === "Android" && <p>In <IC>ArtistListScreen</IC>, you'll need to remember an <IC>isRefreshing</IC> boolean state (initially false) and create a <IC>pullRefreshState</IC> using <IC>rememberPullRefreshState</IC>. Inside the <IC>onRefresh</IC> callback of that state, set your refreshing boolean to true, launch a coroutine to fetch the data from the API again, and when it completes, update your <IC>UiState</IC> and set the refreshing boolean back to false.</p>}
          {platform === "iOS" && <p>For iOS, this is built into SwiftUI. You just need to prepare the asynchronous API call you want to execute when a refresh is triggered. We will use the <IC>.refreshable</IC> modifier in the next step.</p>}
          
          {platform === "Android" && (
            <Section title="💡 Show me the syntax">
              <CodeB title="Kotlin (Compose)" accent={BL}>{`var isRefreshing by remember { mutableStateOf(false) }
val pullRefreshState = rememberPullRefreshState(
    refreshing = isRefreshing,
    onRefresh = {
        isRefreshing = true
        // Launch a coroutine to fetch data again
        // When done, set isRefreshing = false and update uiState to Success/Error
    }
)`}</CodeB>
            </Section>
          )}
        </VStep>
        
        <VStep num={platform === "Android" ? "c" : "b"} title="Attach it to your list layout" last>
          <p>Now, connect this logic to your UI.</p>
          {platform === "Android" && <p>Wrap your <IC>LazyColumn</IC> inside a <IC>Box</IC> and apply the <IC>.pullRefresh(pullRefreshState)</IC> modifier to the Box. Finally, add a <IC>PullRefreshIndicator</IC> inside the Box on top of the list, aligning it to the TopCenter.</p>}
          {platform === "iOS" && <p>Add the <IC>.refreshable</IC> modifier directly to your <IC>List</IC>. Inside the closure, fetch the data again and update your <IC>uiState</IC>. Remember to handle potential errors so you don't destroy the existing list if the refresh fails!</p>}
          
          <Section title="✅ Check your work — show me the completed implementation">
            {platform === "Android" && <CodeB title="Kotlin (Compose)" accent={BL}>{`Box(modifier = Modifier.fillMaxSize().pullRefresh(pullRefreshState)) {
    // Your existing LazyColumn
    LazyColumn { /* existing code */ }
    
    // Add the indicator on top
    PullRefreshIndicator(
        refreshing = isRefreshing,
        state = pullRefreshState,
        modifier = Modifier.align(Alignment.TopCenter)
    )
}`}</CodeB>}
            {platform === "iOS" && <CodeB title="Swift (SwiftUI)" accent={GR}>{`List(artists) { artist in
    // ...
}
.listStyle(.plain)
.refreshable {
    do {
        // Fetch new data
        let newArtists = try await LastFmApiService.getTopArtists()
        uiState = .success(newArtists)
    } catch {
        print(error.localizedDescription)
    }
}`}</CodeB>}
          </Section>
        </VStep>

        <Checkbox>Users can swipe down on the list to trigger a refresh</Checkbox>
      </VStep>
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
          }}>{s}{i === 0 ? " — First API Call" : " — States & Images"}</button>
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
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 4 Project: Networked Browse App</h2>
      <Warn>Submit this assignment by the end of Week 5 Session 1.</Warn>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 14px" }}>
        Replace the Last.fm API with a different public API of your choice. The app structure — list, search, detail screen, loading states, error handling, and images — stays the same. Only the data source changes. You may build in either Android (Jetpack Compose) or iOS (SwiftUI). You do not need to submit both.
      </p>

      <Section title="📋 Step 1 — Pick your API">
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 10px" }}>Choose any free, public REST API that returns a list of items with at least 4 fields and an image URL. A few starting points:</p>
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
        <Tip>Paste a sample response URL into your browser before writing any code. Make sure you can see real JSON data before starting.</Tip>
      </Section>

      <Section title="✅ Required Features" defaultOpen={true}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".04em", margin: "0 0 6px" }}>1. Networking</p>
        <Checkbox>App fetches data from a real public API — no hardcoded lists</Checkbox>
        <Checkbox>Network call uses Retrofit (Android) or URLSession (iOS)</Checkbox>
        <Checkbox>API key is stored safely — not hardcoded in source files committed to GitHub</Checkbox>

        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".04em", margin: "12px 0 6px" }}>2. UI states</p>
        <Checkbox>A loading indicator is shown while the API call is in progress</Checkbox>
        <Checkbox>The list appears when data loads successfully</Checkbox>
        <Checkbox>An error message and retry button are shown when the call fails</Checkbox>
        <Checkbox>Turning off WiFi and reopening the app triggers the error state</Checkbox>

        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".04em", margin: "12px 0 6px" }}>3. List and search</p>
        <Checkbox>A scrollable list of at least 15 items fetched from the API</Checkbox>
        <Checkbox>Custom row layout showing at least 3 fields per row</Checkbox>
        <Checkbox>Real-time search filtering the fetched results</Checkbox>
        <Checkbox>Empty state when search returns no results</Checkbox>

        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".04em", margin: "12px 0 6px" }}>4. Images</p>
        <Checkbox>Row images loaded from URLs using Coil (Android) or <IC>AsyncImage</IC> (SwiftUI)</Checkbox>
        <Checkbox>A fallback is shown when an image URL is empty or fails to load</Checkbox>

        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: ".04em", margin: "12px 0 6px" }}>5. Detail screen</p>
        <Checkbox>Tapping a row navigates to a detail screen</Checkbox>
        <Checkbox>Detail screen shows all available fields from the API response</Checkbox>
      </Section>

      <Section title="🚀 Stretch Features">
        <Checkbox>Add pull-to-refresh to reload the list from the API</Checkbox>
        <Checkbox>Add pagination — load more items when the user scrolls to the bottom</Checkbox>
        <Checkbox>Show a shimmer skeleton loading state instead of a spinner</Checkbox>
        <Checkbox>Cache the last successful response and show it immediately on relaunch while refetching</Checkbox>
      </Section>

      <Section title="📘 Submitting your project">
        <ol style={{ fontSize: 13, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
          <li>Create a GitHub repository for your project</li>
          <li>Push your code to the repository</li>
          <li>Create a README using the Unit 4 README template</li>
          <li>In the README, check off all features by changing <IC>-[ ]</IC> to <IC>-[x]</IC></li>
          <li>Record a GIF showing: loading spinner, list with images, search filtering, empty state, tapping to detail, and the error state with WiFi off</li>
          <li>Add the GIF to the README</li>
          <li>Make the repo private and add <IC>codepathreview</IC> as a collaborator</li>
        </ol>
        <Warn>Do not commit your API key to GitHub. Add your <IC>local.properties</IC> or <IC>Config.xcconfig</IC> to <IC>.gitignore</IC> before your first commit. If you accidentally push a key, regenerate it immediately on the API provider's website.</Warn>
      </Section>

      <Section title="💡 Hints">
        <ul style={{ fontSize: 13, lineHeight: 1.6, paddingLeft: 20, margin: 0 }}>
          <li style={{ marginBottom: 10 }}>
            <strong>I'm not sure how to read the JSON structure of my API</strong>
            <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>Paste a sample API URL into your browser and look at the raw JSON. Identify the top-level key that contains the list of items, then trace one item and note every field name and type — those become your data class or struct fields.</p>
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>My data class field names don't match the JSON</strong>
            <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>In Kotlin, use <IC>@SerializedName("json_key")</IC> to map a JSON key to a different property name. In Swift, use a <IC>CodingKeys</IC> enum. This is how we handled the <IC>"#text"</IC> field in the Last.fm models.</p>
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>The error state isn't triggering even when WiFi is off</strong>
            <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>On Android emulator, toggling WiFi on the host machine may not affect the emulator — use the emulator's Extended Controls to toggle network instead. On iOS simulator, use the Network Link Conditioner in Xcode.</p>
          </li>
          <li style={{ marginBottom: 0 }}>
            <strong>Images are loading but look stretched or cropped wrong</strong>
            <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary)" }}>Use <IC>contentScale = ContentScale.Crop</IC> (Compose) or <IC>.aspectRatio(contentMode: .fill)</IC> (SwiftUI) to fill without distorting. Also make sure your clip modifier comes after the size modifier, not before.</p>
          </li>
        </ul>
      </Section>
    </div>
  );
}

function Resources() {
  return (
    <div>
      <h1 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Week 4 Resources</h1>
      
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        <p>A list of helpful links relevant to this unit.</p>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>📹 Session Recordings</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><a href="#" style={{ color: "var(--color-text-info)" }}>Weekly Video Playlist</a></li>
          <li><a href="#" style={{ color: "var(--color-text-info)" }}>Office Hours Video Playlist</a></li>
        </ul>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>Note: It may take up to 24-48 hours after the session to appear on the playlist.</p>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>🎵 Last.fm API</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><a href="https://www.last.fm/api" style={{ color: "var(--color-text-info)" }}>Last.fm API documentation</a></li>
          <li><a href="https://www.last.fm/api/account/create" style={{ color: "var(--color-text-info)" }}>Create a Last.fm API account</a></li>
          <li><a href="https://www.last.fm/api/show/chart.getTopArtists" style={{ color: "var(--color-text-info)" }}>chart.getTopArtists endpoint docs</a></li>
          <li><a href="https://www.last.fm/api/show/artist.getInfo" style={{ color: "var(--color-text-info)" }}>artist.getInfo endpoint docs</a></li>
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>📖 Official Documentation (Android)</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><a href="https://square.github.io/retrofit/" style={{ color: "var(--color-text-info)" }}>Retrofit</a> — square.github.io</li>
          <li><a href="https://coil-kt.github.io/coil/compose/" style={{ color: "var(--color-text-info)" }}>Coil for Compose</a> — coil-kt.github.io</li>
          <li><a href="https://kotlinlang.org/docs/coroutines-overview.html" style={{ color: "var(--color-text-info)" }}>Coroutines overview</a> — kotlinlang.org</li>
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>📖 Official Documentation (iOS)</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><a href="https://developer.apple.com/documentation/foundation/urlsession" style={{ color: "var(--color-text-info)" }}>URLSession</a> — developer.apple.com</li>
          <li><a href="https://developer.apple.com/documentation/swiftui/asyncimage" style={{ color: "var(--color-text-info)" }}>AsyncImage</a> — developer.apple.com</li>
          <li><a href="https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/" style={{ color: "var(--color-text-info)" }}>Swift concurrency</a> — swift.org</li>
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>🔒 API Key Security</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><a href="https://jordanmungujakisa.com/article/how-to-hide-api-keys-in-android-apps" style={{ color: "var(--color-text-info)" }}>Secure API Keys in Android (local.properties)</a></li>
          <li><a href="https://nshipster.com/secrets/" style={{ color: "var(--color-text-info)" }}>Secure API Keys in iOS (NSHipster .xcconfig guide)</a></li>
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>🌐 Extra Practice & Public APIs</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><a href="https://github.com/public-apis/public-apis" style={{ color: "var(--color-text-info)" }}>Public APIs Directory</a> — Massive list of free APIs</li>
          <li><a href="https://jsonplaceholder.typicode.com" style={{ color: "var(--color-text-info)" }}>JSONPlaceholder</a> — free fake REST API for practice</li>
          <li><a href="https://developer.android.com/courses/android-basics-compose/unit-5" style={{ color: "var(--color-text-info)" }}>Android Basics with Compose — Unit 5: Connect to the internet</a></li>
          <li><a href="https://developer.apple.com/tutorials/data" style={{ color: "var(--color-text-info)" }}>Fetching and caching data in SwiftUI — Apple tutorial</a></li>
        </ul>
      </div>
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
      {tab === "Overview"   && <Overview />}
      {tab === "API Setup"  && <ApiSetup />}
      {tab === "Lab"        && <Lab />}
      {tab === "Project"    && <Project />}
      {tab === "Resources"  && <Resources />}
    </div>
  );
}
