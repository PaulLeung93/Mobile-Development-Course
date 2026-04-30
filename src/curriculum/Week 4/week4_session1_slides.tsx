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

const Step = ({ n, title, children, accent = PURPLE }) => (
  <div style={{ marginBottom: 10, paddingLeft: 24, borderLeft: `2px solid #e5e7eb`, position: "relative" }}>
    <div style={{ position: "absolute", left: -14, top: 0, width: 26, height: 26, borderRadius: "50%", background: "#fff", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: accent }}>
      {n}
    </div>
    <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "2px 0 6px" }}>{title}</p>
    <div>{children}</div>
  </div>
);

const OSToggle = ({ android, ios }) => {
  const [platform, setPlatform] = useState<'android' | 'ios'>('android');
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", borderRadius: 8, overflow: "hidden", border: "1px solid #e5e7eb", width: "fit-content" }}>
        <button onClick={() => setPlatform('android')} style={{ padding: "5px 16px", fontSize: 11, fontWeight: 700, letterSpacing: ".04em", background: platform === 'android' ? PURPLE : "#fff", color: platform === 'android' ? "#fff" : MUTED, border: "none", borderRight: "1px solid #e5e7eb", cursor: "pointer" }}>
          Android · Kotlin
        </button>
        <button onClick={() => setPlatform('ios')} style={{ padding: "5px 16px", fontSize: 11, fontWeight: 700, letterSpacing: ".04em", background: platform === 'ios' ? TEAL : "#fff", color: platform === 'ios' ? "#fff" : MUTED, border: "none", cursor: "pointer" }}>
          iOS · Swift
        </button>
      </div>
      {platform === 'android' ? android : ios}
    </div>
  );
};

const ViewToggle = ({ steps, full }) => {
  const [view, setView] = useState<'steps' | 'full'>('steps');
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 6 }}>
        <div style={{ display: "flex", borderRadius: 20, overflow: "hidden", border: "1px solid #e5e7eb", width: "fit-content" }}>
          <button onClick={() => setView('steps')} style={{ padding: "3px 12px", fontSize: 10, fontWeight: 700, letterSpacing: ".04em", background: view === 'steps' ? PURPLE : "#fff", color: view === 'steps' ? "#fff" : MUTED, border: "none", borderRight: "1px solid #e5e7eb", cursor: "pointer" }}>
            Step by step
          </button>
          <button onClick={() => setView('full')} style={{ padding: "3px 12px", fontSize: 10, fontWeight: 700, letterSpacing: ".04em", background: view === 'full' ? PURPLE : "#fff", color: view === 'full' ? "#fff" : MUTED, border: "none", cursor: "pointer" }}>
            Full code
          </button>
        </div>
      </div>
      {view === 'steps' ? steps : full}
    </div>
  );
};

const Bullet = ({ children, sub }: { [k: string]: any }) => (
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

const Warn = ({ title, children }: { [k: string]: any }) => (
  <div className="callout-warn" style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "8px 12px", margin: "8px 0" }}>
    {title && <p style={{ fontSize: 12, fontWeight: 600, color: "#92400e", margin: "0 0 2px" }}>{title}</p>}
    <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Shell = ({ tag, title, subtitle, timer, children, notes, dark }: { [k: string]: any }) => (
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

const slides = [
  // 1: Title
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 4 — Session 1</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>Networking —<br/>your app meets the internet</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Session 1: HTTP, REST APIs, JSON, and your first real API call</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Last.fm API", "Retrofit + URLSession", "Coroutines + async/await"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${TEAL}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Start with the Assignment 3 check. Ask students to show their browse app. Then set the expectation: today is the biggest step of the course. Every app they admire — Spotify, Instagram, Twitter — is a list screen connected to a server. After today, their app will be too."}</Notes>
    </div>
  ),

  // 2: Fun opener
  () => (
    <Shell tag="Every app you love" title="Your favourite apps have a secret" subtitle="None of them store their data on your phone" notes="Do not rush this. Let the reality land. Ask students to think about how Spotify knows about a song released yesterday, or how Instagram shows a post from 10 seconds ago. The answer is a network call. Every single piece of fresh content in every app they use came through an HTTP request. Today they learn how to make one.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8, marginBottom: 14 }}>
        {[
          { app: "Spotify", secret: "Every song, playlist, and recommendation comes from Spotify's servers — not your phone", color: "#1DB954" },
          { app: "Instagram", secret: "Every photo, story, and reel is fetched live from Meta's servers when you open the app", color: "#E1306C" },
          { app: "Weather app", secret: "Your local forecast is fetched from a weather API every time you open it", color: "#378ADD" },
          { app: "Google Maps", secret: "Every map tile, business listing, and direction is fetched in real time", color: "#EA4335" },
          { app: "Your news app", secret: "Every headline is fetched from an API — that is why it shows today's news, not last year's", color: "#FF9900" },
          { app: "Your bank app", secret: "Your balance is fetched live — the app has no idea what it is until it asks the server", color: TEAL },
        ].map(item => (
          <div key={item.app} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
              <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: 0 }}>{item.app}</p>
            </div>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{item.secret}</p>
          </div>
        ))}
      </div>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px", textAlign: "center" }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: PURPLE_DARK, margin: 0 }}>Until now your apps used hardcoded data. Today that changes.</p>
      </div>
    </Shell>
  ),

  // 3: Recap
  () => (
    <Shell tag="Recap" timer="5" title="Weeks 1-3 recap — the foundation" notes="Keep this brief — 3 minutes. Students have covered a lot. The key message: everything they have built so far still applies. The list, the search, the detail screen, the navigation — none of that changes today. Only the data source changes.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 6 }}>
        {[
          { week: "Week 1", items: ["Declarative UI", "State — remember / @State", "Basic layout and modifiers"] },
          { week: "Week 2", items: ["Navigation stack", "NavHost / NavigationStack", "Passing data between screens"] },
          { week: "Week 3", items: ["LazyColumn / List", "Custom row layouts", "Search, filter, detail screen"] },
        ].map(w => (
          <div key={w.week} style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE, margin: "0 0 8px", textTransform: "uppercase" }}>{w.week}</p>
            {w.items.map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Info>{"Everything from Weeks 1-3 still applies. Today you add one thing: where the data comes from. The list screen, search, and detail screen you built in Week 3 will barely change — only the data source does."}</Info>
      <Discussion>{"Your album browser shows hardcoded albums from a Kotlin list or Swift array. What would need to change to make it show different albums every day — albums that are actually popular right now?"}</Discussion>
    </Shell>
  ),

  // 4: Agenda
  () => (
    <Shell tag="Agenda" title="Today's session — 60 minutes" notes="Set the expectation clearly: this session introduces more new concepts than any previous one. Networking, HTTP, JSON, Retrofit/URLSession, coroutines/async-await — that is a lot. Reassure students that they do not need to memorise the API. They need to understand what each piece does. Claude and documentation handle the rest.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "3 min",  title: "Every app you love", desc: "The moment hardcoded data became real" },
          { num: "02", time: "5 min",  title: "Recap", desc: "Weeks 1-3 — the foundation that stays the same" },
          { num: "03", time: "10 min", title: "HTTP and REST APIs", desc: "How the internet works — requests, responses, JSON" },
          { num: "04", time: "5 min",  title: "Reading API documentation", desc: "How to find what you need in the Last.fm docs" },
          { num: "05", time: "12 min", title: "Async — the mental model and the code", desc: "Why network calls are different, and the keywords that fix it" },
          { num: "06", time: "10 min", title: "Retrofit and URLSession", desc: "What they are, why they exist, and step-by-step setup" },
          { num: "07", time: "12 min", title: "Live code-along (3 steps)", desc: "Models → API service → connect to screen" },
          { num: "08", time: "3 min",  title: "Lab intro + Q&A", desc: "What you build today" },
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

  // 5: HTTP explained
  () => (
    <Shell tag="HTTP" timer="10" title="How HTTP works — the request/response cycle" subtitle="Every network call your app makes follows this exact pattern" notes="Draw this on the board as you explain it. Phone on the left, server on the right, arrow going right labeled REQUEST, arrow going left labeled RESPONSE. This visual is more memorable than any code. Emphasise that the phone never receives data it did not ask for — it always initiates with a request.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr", gap: 0, alignItems: "center", margin: "12px 0 14px", background: GRAY, borderRadius: 10, padding: "16px 12px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 4 }}>📱</div>
          <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: 0 }}>Your app</p>
          <p style={{ fontSize: 10, color: MUTED, margin: 0 }}>the client</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1, height: 2, background: PURPLE }} />
            <div style={{ background: PURPLE, color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 20, whiteSpace: "nowrap" }}>REQUEST →</div>
            <div style={{ flex: 1, height: 2, background: PURPLE }} />
          </div>
          <div style={{ background: "#fff", borderRadius: 8, padding: "8px 12px", fontSize: 11 }}>
            <p style={{ color: PURPLE, fontWeight: 600, margin: "0 0 3px" }}>HTTP GET Request</p>
            <code style={{ color: MUTED, fontSize: 10, display: "block", wordBreak: "break-all" }}>GET /2.0/?method=chart.gettopartists&api_key=abc123</code>
          </div>
          <div style={{ background: "#fff", borderRadius: 8, padding: "8px 12px", fontSize: 11 }}>
            <p style={{ color: TEAL, fontWeight: 600, margin: "0 0 3px" }}>HTTP 200 Response</p>
            <code style={{ color: MUTED, fontSize: 10, display: "block" }}>{`{ "artists": { "artist": [...] } }`}</code>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1, height: 2, background: TEAL }} />
            <div style={{ background: TEAL, color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 20, whiteSpace: "nowrap" }}>← RESPONSE</div>
            <div style={{ flex: 1, height: 2, background: TEAL }} />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 4 }}>🖥️</div>
          <p style={{ fontSize: 11, fontWeight: 600, color: TEXT, margin: 0 }}>Last.fm server</p>
          <p style={{ fontSize: 10, color: MUTED, margin: 0 }}>the server</p>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[
          { term: "GET", desc: "The most common HTTP method — fetch data from a server. You will use this for all read operations." },
          { term: "200 OK", desc: "Status code meaning success. Other common ones: 404 Not Found, 401 Unauthorized, 500 Server Error." },
          { term: "JSON", desc: "JavaScript Object Notation — the format almost all APIs use to send data. Plain text that looks like a Kotlin map." },
        ].map(t => (
          <div key={t.term} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <code style={{ fontSize: 13, fontWeight: 700, color: PURPLE, display: "block", marginBottom: 4 }}>{t.term}</code>
            <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{t.desc}</p>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 6: What is a REST API
  () => (
    <Shell tag="REST APIs" title="What is a REST API?" subtitle="The convention that almost every app API follows" notes="Keep this conceptual — no code yet. The key things students need to understand: a URL identifies a resource, the HTTP method says what to do with it, and the response is JSON. The Last.fm API is a good example because it uses query parameters rather than path segments, which is slightly unusual but easy to read.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div>
          <Bullet>A REST API is a web service that lets your app communicate with a server using URLs</Bullet>
          <Bullet>Each URL represents a resource — a list of artists, a specific artist, a set of top tracks</Bullet>
          <Bullet>You make a GET request to a URL and receive JSON data back</Bullet>
          <Bullet>Almost every public API — Spotify, Twitter, GitHub, Last.fm — is a REST API</Bullet>
          <Bullet sub>They all follow the same basic pattern: URL + parameters → JSON response</Bullet>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px", marginTop: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 6px" }}>Last.fm API URL anatomy</p>
            <div style={{ fontFamily: "monospace", fontSize: 11, lineHeight: 2 }}>
              <span style={{ color: PURPLE, fontWeight: 600 }}>https://ws.audioscrobbler.com/2.0/</span>
              <br />
              <span style={{ color: TEAL }}>?method=chart.gettopartists</span>
              <br />
              <span style={{ color: "#E67E22" }}>&api_key=YOUR_KEY</span>
              <br />
              <span style={{ color: MUTED }}>&format=json&limit=20</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 }}>
              {[
                { color: PURPLE, label: "Base URL", desc: "Always the same" },
                { color: TEAL, label: "method", desc: "Which endpoint to call" },
                { color: "#E67E22", label: "api_key", desc: "Your authentication" },
                { color: MUTED, label: "format + limit", desc: "Options" },
              ].map(p => (
                <div key={p.label} style={{ display: "flex", gap: 5, alignItems: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 10, color: TEXT, fontWeight: 600 }}>{p.label}:</span>
                  <span style={{ fontSize: 10, color: MUTED }}>{p.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The JSON response — what comes back</p>
          <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: 8, lineHeight: 1.7, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`{
  "artists": {
    "artist": [
      {
        "name": "Taylor Swift",
        "listeners": "9876543",
        "playcount": "123456789",
        "image": [
          {
            "#text": "https://...jpg",
            "size": "extralarge"
          }
        ]
      },
      // ... 19 more artists
    ]
  }
}`}</pre>
          <Info>{"Your app reads this text, parses it into Kotlin data classes or Swift structs, and then your LazyColumn/List renders it exactly like the hardcoded data did in Week 3."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 7: Reading API docs
  () => (
    <Shell tag="API docs" title="Reading API documentation — a live demo" subtitle="Open last.fm/api in your browser right now" notes="Do this as a live demo — open the Last.fm API docs in your browser and navigate them in real time. Show students how to find the chart.getTopArtists endpoint, read the required parameters, and then paste the URL into the browser to see the raw response. This demystifies API documentation enormously.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Before writing any code, always read the docs and test the URL in your browser. This takes 3 minutes and saves hours of debugging.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What to look for in any API docs</p>
          {[
            { n: 1, t: "Base URL — the root address all endpoints share" },
            { n: 2, t: "Authentication — how to pass your API key" },
            { n: 3, t: "Required parameters — what the endpoint needs to work" },
            { n: 4, t: "Optional parameters — pagination, format, limit" },
            { n: 5, t: "Response format — what JSON structure comes back" },
            { n: 6, t: "Example responses — copy one and paste it to understand the shape" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "flex-start" }}>
              <span style={{ background: PURPLE, color: "#fff", borderRadius: "50%", width: 18, height: 18, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{s.n}</span>
              <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Live demo — paste this into your browser</p>
          <pre style={{ margin: 0, background: "#1e1e2e", color: "#9FE1CB", fontSize: 10, padding: "10px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>{`https://ws.audioscrobbler.com/2.0/
?method=chart.gettopartists
&api_key=YOUR_KEY_HERE
&format=json
&limit=5`}</pre>
          <p style={{ fontSize: 11, color: MUTED, margin: "8px 0 0", lineHeight: 1.5 }}>You should see raw JSON. The shape of that JSON is exactly what your data classes need to match.</p>
          <Warn>{"Read the JSON before writing any models. The field names in your data class must EXACTLY match the JSON keys — including case, underscores, and unusual names like #text."}</Warn>
        </div>
      </div>
    </Shell>
  ),

  // 8: Why async matters
  () => (
    <Shell tag="Async" timer="12" title="Why network calls need special handling" subtitle="The problem with doing slow work on the main thread" notes="This is a conceptual slide — no code yet. The restaurant analogy works brilliantly here. Ask students: have you ever been in a restaurant where the waiter disappeared for 10 minutes while you waited? That is what blocking the main thread feels like to the user. The UI freezes completely. Coroutines and async/await let the waiter take your order and come back when the food is ready.">
      <Discussion>{"Imagine you are at a restaurant. The waiter takes your order, then stands at your table staring at you in silence for 10 minutes while the kitchen prepares your food. Nothing else happens in the restaurant. How does that feel? That is what happens when a network call blocks the main thread."}</Discussion>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px", textTransform: "uppercase" }}>Blocking — the bad way</p>
          <Bullet>Network call runs on the main (UI) thread</Bullet>
          <Bullet>Main thread is busy waiting for the response</Bullet>
          <Bullet>UI cannot update, scroll, or respond to taps</Bullet>
          <Bullet>App appears frozen — user thinks it crashed</Bullet>
          <Bullet sub>Android throws NetworkOnMainThreadException</Bullet>
          <Bullet sub>iOS silently freezes the UI</Bullet>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px", textTransform: "uppercase" }}>Non-blocking — the right way</p>
          <Bullet>Network call runs on a background thread</Bullet>
          <Bullet>Main thread stays free — UI remains responsive</Bullet>
          <Bullet>When data arrives, update the UI on the main thread</Bullet>
          <Bullet>User sees a spinner, can still scroll and navigate</Bullet>
          <Bullet sub>Kotlin: coroutines with suspend functions</Bullet>
          <Bullet sub>Swift: async/await with Task or .task modifier</Bullet>
        </div>
      </div>
    </Shell>
  ),

  // 9: NEW — suspend / async mental model
  () => (
    <Shell tag="Async" title="suspend and async — the mental model" subtitle="What pausing without blocking actually looks like in practice">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 6 }}>
        <div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "0 0 8px" }}>What is a thread?</p>
            <p style={{ fontSize: 12, color: MUTED, margin: "0 0 8px", lineHeight: 1.6 }}>A thread is a worker that executes your code one instruction at a time. Your app has one <strong style={{ color: TEXT }}>main thread</strong> — it is the only one allowed to update the UI.</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>When that thread is busy doing a network call, it cannot redraw the screen, respond to taps, or do anything else. From the user's perspective: the app is frozen.</p>
          </div>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "0 0 8px" }}>What suspend / async actually does</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { n: 1, t: "Main thread starts the network call" },
                { n: 2, t: "Main thread says \"notify me when done\" and steps away" },
                { n: 3, t: "A background thread handles the actual network work" },
                { n: 4, t: "Main thread is free — it keeps drawing UI and handling taps" },
                { n: 5, t: "Background thread finishes → main thread resumes with the data" },
              ].map(s => (
                <div key={s.n} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 18, height: 18, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{s.n}</span>
                  <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{s.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "0 0 8px" }}>The keywords at a glance</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 10 }}>
            {[
              { kotlin: "suspend fun", swift: "async func", what: "This function can pause without blocking — safe to call a network API inside it" },
              { kotlin: "LaunchedEffect(Unit)", swift: ".task modifier", what: "Starts a coroutine/task when the view appears — the right place to load data" },
              { kotlin: "viewModelScope.launch", swift: "Task { }", what: "Manually start a coroutine or async task from non-UI code" },
            ].map(row => (
              <div key={row.kotlin} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
                  <code style={{ fontSize: 10, background: PURPLE_LIGHT, color: PURPLE, padding: "1px 7px", borderRadius: 3, whiteSpace: "nowrap" }}>{row.kotlin}</code>
                  <span style={{ fontSize: 10, color: MUTED }}>↔</span>
                  <code style={{ fontSize: 10, background: TEAL_LIGHT, color: TEAL, padding: "1px 7px", borderRadius: 3, whiteSpace: "nowrap" }}>{row.swift}</code>
                </div>
                <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.4 }}>{row.what}</p>
              </div>
            ))}
          </div>
          <Info>{"suspend and async do NOT make network calls faster. They keep the UI thread free so your app stays responsive while waiting. The network call takes the same amount of time either way."}</Info>
          <Warn>{"Retrofit automatically runs @GET functions on a background thread. URLSession.shared.data() also runs on a background thread. You do not need to manually switch threads for basic API calls."}</Warn>
        </div>
      </div>
    </Shell>
  ),

  // 10: Coroutines vs async/await — code (OSToggle)
  () => (
    <Shell tag="Async" title="Coroutines vs async/await — same idea, different syntax" notes="Students often think coroutines and async/await are completely different things. Emphasise that they solve the exact same problem with very similar concepts. The keyword suspend in Kotlin and async in Swift both mean: this function can pause without blocking. The difference is mostly syntax.">
      <div style={{ marginTop: 6 }}>
        <OSToggle
          android={
            <CodePane title="Kotlin — suspend functions and coroutines" accent={PURPLE}>
{`// 'suspend' marks a function that can pause without blocking
// Must be called from inside a coroutine or another suspend function
suspend fun getTopArtists(): List<Artist> {
    return LastFmApi.service.getTopArtists().artists.artist
}

// LaunchedEffect — a coroutine that runs when the Composable appears
// key = Unit means "run exactly once on first composition"
LaunchedEffect(Unit) {
    artists = getTopArtists()   // safe to call suspend functions here
}

// viewModelScope is an alternative coroutine scope from a ViewModel:
viewModelScope.launch {
    artists = getTopArtists()
}

// Rule: network calls must happen inside a coroutine scope.
// LaunchedEffect and viewModelScope.launch are both valid scopes.`}
            </CodePane>
          }
          ios={
            <CodePane title="Swift — async/await" accent={TEAL}>
{`// 'async' = can pause without blocking
// 'throws' = can fail and throw an error you must handle
func getTopArtists() async throws -> [Artist] {
    let (data, _) = try await URLSession.shared
        .data(from: url)
    return try JSONDecoder().decode(
        TopArtistsResponse.self, from: data
    ).artists.artist
}

// .task modifier — runs when the view appears
// Automatically cancelled when the view disappears
.task {
    do {
        artists = try await getTopArtists()
    } catch {
        print(error.localizedDescription)
    }
}

// Rule: async functions must be called with 'await'
// inside a Task { } or .task modifier.`}
            </CodePane>
          }
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 10 }}>
        {[
          { kotlin: "suspend fun", swift: "async func", label: "Mark an async function" },
          { kotlin: "LaunchedEffect", swift: ".task modifier", label: "Run on screen appear" },
          { kotlin: "viewModelScope.launch", swift: "Task { }", label: "Start an async task" },
        ].map(row => (
          <div key={row.label} style={{ background: GRAY, borderRadius: 6, padding: "8px 10px", textAlign: "center" }}>
            <p style={{ fontSize: 11, color: MUTED, margin: "0 0 4px" }}>{row.label}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 6, alignItems: "center" }}>
              <code style={{ fontSize: 10, background: PURPLE_LIGHT, color: PURPLE, padding: "1px 5px", borderRadius: 3 }}>{row.kotlin}</code>
              <span style={{ fontSize: 10, color: MUTED }}>↔</span>
              <code style={{ fontSize: 10, background: TEAL_LIGHT, color: TEAL, padding: "1px 5px", borderRadius: 3 }}>{row.swift}</code>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // 11: NEW — What is Retrofit?
  () => (
    <Shell tag="Retrofit + URLSession" timer="10" title="What is Retrofit — and why does it exist?" subtitle="The problem it solves, and the idea behind annotated interfaces" notes="The before/after comparison is the most effective teaching tool here. Show students the raw HttpURLConnection code and let them feel the pain, then show the Retrofit version. The reaction is always immediate. Then explain the two pieces: Retrofit handles the HTTP plumbing, Gson converts JSON to objects. URLSession and JSONDecoder play the same roles on iOS.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 6px" }}>Without Retrofit — the manual way</p>
          <pre style={{ margin: "0 0 10px", background: "#1e1e2e", color: "#fca5a5", fontSize: 10, padding: "10px 12px", borderRadius: 8, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`val url = URL("https://ws.audioscrobbler.com/2.0/
    ?method=chart.gettopartists&api_key=...")
val conn = url.openConnection() as HttpURLConnection
conn.requestMethod = "GET"
val stream = conn.inputStream
val json = stream.bufferedReader().readText()
// Now manually parse every field from a raw JSON string...
val obj = JSONObject(json)
val arr = obj.getJSONObject("artists")
              .getJSONArray("artist")
// ...repeat for every field on every object`}</pre>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 6px" }}>With Retrofit — what you actually write</p>
          <pre style={{ margin: 0, background: "#1e1e2e", color: "#9FE1CB", fontSize: 10, padding: "10px 12px", borderRadius: 8, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`@GET(".")
suspend fun getTopArtists(
    @Query("method") method: String = "chart.gettopartists",
    @Query("api_key") apiKey: String = API_KEY,
    @Query("format") format: String = "json"
): TopArtistsResponse
// Retrofit + Gson handle everything else`}</pre>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: GRAY, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "0 0 10px" }}>The two pieces working together</p>
            {[
              { name: "Retrofit", color: PURPLE, role: "Reads your @GET annotations and builds the HTTP request. Sends it on a background thread. Hands the raw JSON response to Gson." },
              { name: "Gson", color: "#E67E22", role: "Converts the raw JSON string into your Kotlin data classes automatically. The field names in your class must match the JSON keys exactly." },
            ].map(p => (
              <div key={p.name} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                  <p style={{ fontSize: 12, fontWeight: 700, color: p.color, margin: 0 }}>{p.name}</p>
                </div>
                <p style={{ fontSize: 11, color: MUTED, margin: "0 0 0 16px", lineHeight: 1.5 }}>{p.role}</p>
              </div>
            ))}
          </div>
          <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 6px" }}>iOS — no Retrofit needed</p>
            <p style={{ fontSize: 12, color: "#085041", margin: 0, lineHeight: 1.5 }}>URLSession is built into the iOS SDK and handles the HTTP request. JSONDecoder is Swift's equivalent of Gson — it maps JSON keys to your struct properties. Together they replace Retrofit + Gson entirely, with no additional libraries.</p>
          </div>
          <Info>{"Retrofit's key insight: you describe WHAT you want (an endpoint with these parameters), not HOW to fetch it. Retrofit generates the implementation for you at runtime."}</Info>
        </div>
      </div>
    </Shell>
  ),

  // 12: Retrofit + URLSession setup — step by step (OSToggle)
  () => (
    <Shell tag="Retrofit + URLSession" title="Setting up Retrofit and URLSession — step by step" subtitle="Toggle between platforms to see how each one is configured" notes="Walk through each step with students — do not paste the whole thing at once. Each step is a small, isolated task. Students often get overwhelmed when they see a full setup block; breaking it into steps shows them it is not as complex as it looks.">
      <div style={{ marginTop: 8 }}>
        <OSToggle
          android={
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Step n={1} title="Add dependencies to build.gradle.kts">
                <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`implementation("com.squareup.retrofit2:retrofit:2.9.0")
implementation("com.squareup.retrofit2:converter-gson:2.9.0")`}</pre>
              </Step>
              <Step n={2} title="Add INTERNET permission to AndroidManifest.xml">
                <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`<uses-permission android:name="android.permission.INTERNET" />`}</pre>
                <p style={{ fontSize: 11, color: MUTED, margin: "4px 0 0" }}>Without this, all network calls fail silently on Android.</p>
              </Step>
              <Step n={3} title="Define the API interface — describe what you want">
                <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`interface LastFmApiService {
    @GET(".")
    suspend fun getTopArtists(
        @Query("method") method: String = "chart.gettopartists",
        @Query("api_key") apiKey: String = API_KEY,
        @Query("format") format: String = "json",
        @Query("limit") limit: Int = 20
    ): TopArtistsResponse
}`}</pre>
              </Step>
              <Step n={4} title="Create a singleton — one instance for the whole app">
                <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`object LastFmApi {
    val service: LastFmApiService by lazy {
        Retrofit.Builder()
            .baseUrl("https://ws.audioscrobbler.com/2.0/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(LastFmApiService::class.java)
    }
}`}</pre>
              </Step>
            </div>
          }
          ios={
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Step n={1} title="No installation needed — URLSession is built into iOS" accent={TEAL}>
                <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 6, padding: "8px 12px" }}>
                  <p style={{ fontSize: 12, color: "#085041", margin: 0, lineHeight: 1.5 }}>URLSession and JSONDecoder are part of the iOS SDK. No Podfile, no Swift Package Manager entry, no build.gradle changes. You can use them in any Swift file immediately.</p>
                </div>
              </Step>
              <Step n={2} title="Build the URL with query parameters" accent={TEAL}>
                <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`var components = URLComponents(
    string: "https://ws.audioscrobbler.com/2.0/"
)!
components.queryItems = [
    URLQueryItem(name: "method", value: "chart.gettopartists"),
    URLQueryItem(name: "api_key", value: apiKey),
    URLQueryItem(name: "format",  value: "json"),
    URLQueryItem(name: "limit",   value: "20")
]`}</pre>
              </Step>
              <Step n={3} title="Fetch the data with async/await" accent={TEAL}>
                <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`// URLSession.shared = the default session (handles caching, cookies)
let (data, _) = try await URLSession.shared
    .data(from: components.url!)`}</pre>
              </Step>
              <Step n={4} title="Decode JSON into your models with JSONDecoder" accent={TEAL}>
                <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`// JSONDecoder maps JSON keys to struct property names
let response = try JSONDecoder().decode(
    TopArtistsResponse.self,
    from: data
)
let artists = response.artists.artist`}</pre>
              </Step>
            </div>
          }
        />
      </div>
    </Shell>
  ),

  // 13: Data models for JSON (OSToggle)
  () => (
    <Shell tag="JSON parsing" title="Mapping JSON to data classes and structs" subtitle="One class or struct per JSON object — field names must match exactly" notes="Walk through the JSON shape and then the data class that mirrors it. Emphasise that the field names MUST match exactly — this is the most common source of bugs for beginners. The #text field is a great teaching moment because it looks illegal in Kotlin/Swift but both have a way to handle it.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 6px" }}>The JSON from Last.fm</p>
          <pre style={{ margin: "0 0 10px", background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "10px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`{
  "artists": {          // → ArtistsWrapper
    "artist": [         // → List<Artist> / [Artist]
      {
        "name": "...",  // → String
        "listeners":".",// → String
        "image": [      // → List<ArtistImage>
          {
            "#text":".",// ⚠ unusual key!
            "size": "."
          }
        ]
      }
    ]
  }
}`}</pre>
          <div style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#92400e", margin: "0 0 4px" }}>The three mapping rules</p>
            <div style={{ fontSize: 11, color: "#92400e", lineHeight: 1.6 }}>
              <div>① One class per JSON object</div>
              <div>② One property per JSON key</div>
              <div>③ Property names must match keys <em>exactly</em></div>
            </div>
          </div>
        </div>
        <div>
          <OSToggle
            android={
              <CodePane title="Kotlin — data classes mirror the JSON" accent={PURPLE}>
{`data class TopArtistsResponse(
    val artists: ArtistsWrapper
)
data class ArtistsWrapper(
    val artist: List<Artist>
)
data class Artist(
    val name: String,
    val listeners: String,
    val image: List<ArtistImage>
)
data class ArtistImage(
    // #text is not valid Kotlin — @SerializedName maps it
    @SerializedName("#text") val url: String,
    val size: String
)

// Helper to get the largest image URL:
fun Artist.getLargeImageUrl(): String =
    image.lastOrNull { it.size == "extralarge" }?.url ?: ""`}
              </CodePane>
            }
            ios={
              <CodePane title="Swift — Codable structs + CodingKeys" accent={TEAL}>
{`struct TopArtistsResponse: Codable {
    let artists: ArtistsWrapper
}
struct ArtistsWrapper: Codable {
    let artist: [Artist]
}
struct Artist: Codable, Identifiable {
    var id: String { name }
    let name: String
    let listeners: String
    let image: [ArtistImage]

    var largeImageUrl: String {
        image.last { $0.size == "extralarge" }?.text ?? ""
    }
}
struct ArtistImage: Codable {
    let text: String   // "text" maps to "#text" in JSON
    let size: String
    enum CodingKeys: String, CodingKey {
        case text = "#text"  // CodingKeys remaps the key
        case size
    }
}`}
              </CodePane>
            }
          />
        </div>
      </div>
    </Shell>
  ),

  // 14: Code-along intro
  () => (
    <Shell tag="Live code-along" timer="12" title="Making the first API call — 3 steps" subtitle="Open your AlbumBrowser from Week 3. We build on it." dark notes="Open the Week 3 project. Walk through each step deliberately. The goal is for students to see the exact moment the hardcoded list disappears and real API data appears. That moment is worth pausing on — it is the most exciting thing that has happened in the course so far.">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>Three focused steps — each on its own slide</p>
          {[
            { n: 1, t: "Define data models", desc: "TopArtistsResponse → ArtistsWrapper → Artist → ArtistImage" },
            { n: 2, t: "Create the API service", desc: "The @GET interface + Retrofit singleton (Android) or fetchArtists() function (iOS)" },
            { n: 3, t: "Connect to the screen", desc: "Replace hardcoded data with LaunchedEffect / .task — watch real data appear" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 10, margin: "8px 0", alignItems: "flex-start" }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 22, height: 22, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{s.n}</span>
              <div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", fontWeight: 600, margin: 0 }}>{s.t}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", margin: "2px 0 0", lineHeight: 1.4 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: 0, textTransform: "uppercase", fontWeight: 600 }}>Before vs After</p>
          <div style={{ background: "rgba(255,0,0,0.15)", borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 10, color: "#fca5a5", fontWeight: 600, margin: "0 0 3px" }}>Before</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0, fontFamily: "monospace" }}>val sampleAlbums = listOf(...)</p>
          </div>
          <div style={{ fontSize: 16, textAlign: "center", color: TEAL }}>↓</div>
          <div style={{ background: "rgba(29,158,117,0.2)", borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 10, color: TEAL, fontWeight: 600, margin: "0 0 3px" }}>After</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0, fontFamily: "monospace" }}>LastFmApi.service.getTopArtists()</p>
          </div>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: "4px 0 0", lineHeight: 1.5 }}>The list screen, search, and detail screen do not change. Only the data source.</p>
        </div>
      </div>
    </Shell>
  ),

  // 15: Code-along step 1 — data models
  () => (
    <Shell tag="Live code-along — Step 1 of 3" title="Define your data models" subtitle="One class or struct per JSON object — build them from the outside in">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="The outer wrappers — mirror the JSON nesting">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`data class TopArtistsResponse(val artists: ArtistsWrapper)
data class ArtistsWrapper(val artist: List<Artist>)`}</pre>
                  </Step>
                  <Step n={2} title="The Artist class — one property per JSON field">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`data class Artist(
    val name: String,
    val listeners: String,    // Last.fm sends listener counts as strings
    val image: List<ArtistImage>
)`}</pre>
                  </Step>
                  <Step n={3} title='ArtistImage — @SerializedName handles the "#text" key'>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`data class ArtistImage(
    @SerializedName("#text") val url: String,  // "#text" is illegal as a Kotlin identifier
    val size: String                           // "small", "medium", "large", "extralarge"
)`}</pre>
                  </Step>
                  <Step n={4} title="Helper — get the largest image URL">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`fun Artist.getLargeImageUrl(): String =
    image.lastOrNull { it.size == "extralarge" }?.url ?: ""`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="The outer wrappers — mirror the JSON nesting" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`struct TopArtistsResponse: Codable { let artists: ArtistsWrapper }
struct ArtistsWrapper: Codable { let artist: [Artist] }`}</pre>
                  </Step>
                  <Step n={2} title="The Artist struct — one property per JSON field" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`struct Artist: Codable, Identifiable {
    var id: String { name }
    let name: String
    let listeners: String    // Last.fm sends listener counts as strings
    let image: [ArtistImage]
    var largeImageUrl: String {
        image.last { $0.size == "extralarge" }?.text ?? ""
    }
}`}</pre>
                  </Step>
                  <Step n={3} title='ArtistImage — CodingKeys remaps "#text" to a valid name' accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`struct ArtistImage: Codable {
    let text: String    // our name for the property
    let size: String
    enum CodingKeys: String, CodingKey {
        case text = "#text"    // tells JSONDecoder: JSON key "#text" → property "text"
        case size
    }
}`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={
                <CodePane title="Kotlin — all data models" accent={PURPLE}>
{`data class TopArtistsResponse(val artists: ArtistsWrapper)
data class ArtistsWrapper(val artist: List<Artist>)

data class Artist(
    val name: String,
    val listeners: String,
    val image: List<ArtistImage>
)

data class ArtistImage(
    @SerializedName("#text") val url: String,
    val size: String
)

fun Artist.getLargeImageUrl(): String =
    image.lastOrNull { it.size == "extralarge" }?.url ?: ""`}
                </CodePane>
              }
              ios={
                <CodePane title="Swift — all data models" accent={TEAL}>
{`struct TopArtistsResponse: Codable { let artists: ArtistsWrapper }
struct ArtistsWrapper: Codable { let artist: [Artist] }

struct Artist: Codable, Identifiable {
    var id: String { name }
    let name: String
    let listeners: String
    let image: [ArtistImage]
    var largeImageUrl: String {
        image.last { $0.size == "extralarge" }?.text ?? ""
    }
}

struct ArtistImage: Codable {
    let text: String
    let size: String
    enum CodingKeys: String, CodingKey {
        case text = "#text"
        case size
    }
}`}
                </CodePane>
              }
            />
          }
        />
      </div>
      <Info>{"Build models from the outside in — TopArtistsResponse first, then Artist, then ArtistImage. Each level of nesting in the JSON becomes its own class or struct."}</Info>
    </Shell>
  ),

  // 16: Code-along step 2 — API service
  () => (
    <Shell tag="Live code-along — Step 2 of 3" title="Create the API service" subtitle="The layer between your screen and the network">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Define the interface — describe the endpoint you want">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`interface LastFmApiService {
    @GET(".")
    suspend fun getTopArtists(
        @Query("method") method: String = "chart.gettopartists",
        @Query("api_key") apiKey: String = BuildConfig.LAST_FM_KEY,
        @Query("format") format: String = "json",
        @Query("limit")  limit:  Int    = 20
    ): TopArtistsResponse    // Retrofit + Gson decode the JSON automatically
}`}</pre>
                  </Step>
                  <Step n={2} title="Create the singleton — one Retrofit instance for the whole app">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`object LastFmApi {
    val service: LastFmApiService by lazy {    // created only on first use
        Retrofit.Builder()
            .baseUrl("https://ws.audioscrobbler.com/2.0/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(LastFmApiService::class.java)
    }
}
// Usage: LastFmApi.service.getTopArtists()`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Declare the struct and build the URL" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`struct LastFmApiService {
    private static let apiKey  = "YOUR_API_KEY_HERE"
    private static let baseURL = "https://ws.audioscrobbler.com/2.0/"

    static func getTopArtists() async throws -> [Artist] {
        var components = URLComponents(string: baseURL)!
        components.queryItems = [
            URLQueryItem(name: "method", value: "chart.gettopartists"),
            URLQueryItem(name: "api_key", value: apiKey),
            URLQueryItem(name: "format",  value: "json"),
            URLQueryItem(name: "limit",   value: "20"),
        ]`}</pre>
                  </Step>
                  <Step n={2} title="Fetch the data and decode JSON" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`        let (data, _) = try await URLSession.shared
            .data(from: components.url!)
        return try JSONDecoder()
            .decode(TopArtistsResponse.self, from: data)
            .artists.artist
    }
}
// Usage: try await LastFmApiService.getTopArtists()`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={
                <CodePane title="Kotlin — interface + singleton" accent={PURPLE}>
{`interface LastFmApiService {
    @GET(".")
    suspend fun getTopArtists(
        @Query("method") method: String = "chart.gettopartists",
        @Query("api_key") apiKey: String = BuildConfig.LAST_FM_KEY,
        @Query("format") format: String = "json",
        @Query("limit")  limit:  Int    = 20
    ): TopArtistsResponse
}

object LastFmApi {
    val service: LastFmApiService by lazy {
        Retrofit.Builder()
            .baseUrl("https://ws.audioscrobbler.com/2.0/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(LastFmApiService::class.java)
    }
}`}
                </CodePane>
              }
              ios={
                <CodePane title="Swift — LastFmApiService struct" accent={TEAL}>
{`struct LastFmApiService {
    private static let apiKey  = "YOUR_API_KEY_HERE"
    private static let baseURL = "https://ws.audioscrobbler.com/2.0/"

    static func getTopArtists() async throws -> [Artist] {
        var components = URLComponents(string: baseURL)!
        components.queryItems = [
            URLQueryItem(name: "method", value: "chart.gettopartists"),
            URLQueryItem(name: "api_key", value: apiKey),
            URLQueryItem(name: "format",  value: "json"),
            URLQueryItem(name: "limit",   value: "20"),
        ]
        let (data, _) = try await URLSession.shared
            .data(from: components.url!)
        return try JSONDecoder()
            .decode(TopArtistsResponse.self, from: data)
            .artists.artist
    }
}`}
                </CodePane>
              }
            />
          }
        />
      </div>
      <Warn title="Store your API key safely">{"Never hardcode your key as a plain String in a committed file. Use local.properties on Android or a Config.xcconfig on iOS to keep it out of source control."}</Warn>
    </Shell>
  ),

  // 17: Code-along step 3 — connect to the screen
  () => (
    <Shell tag="Live code-along — Step 3 of 3" title="Connect the API call to your screen" subtitle="Replace the hardcoded list — watch real data appear">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Declare state — empty list to start">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`var artists by remember { mutableStateOf<List<Artist>>(emptyList()) }
var query   by remember { mutableStateOf("") }`}</pre>
                  </Step>
                  <Step n={2} title="LaunchedEffect — fetch once when the screen first appears">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`LaunchedEffect(Unit) {        // Unit = run exactly once on first composition
    artists = LastFmApi.service
        .getTopArtists()      // suspend call — safe inside LaunchedEffect
        .artists
        .artist
}`}</pre>
                  </Step>
                  <Step n={3} title="Filter and display — same LazyColumn as Week 3">
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`val filtered = artists.filter {
    it.name.contains(query, ignoreCase = true)
}
LazyColumn(contentPadding = PaddingValues(horizontal = 16.dp)) {
    items(filtered, key = { it.name }) { artist ->
        ArtistRow(artist, onClick = { onArtistClicked(artist) })
    }
}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Declare state and filtered computed property" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`@State private var artists: [Artist] = []
@State private var query = ""

var filtered: [Artist] {
    if query.isEmpty { return artists }
    return artists.filter {
        $0.name.localizedCaseInsensitiveContains(query)
    }
}`}</pre>
                  </Step>
                  <Step n={2} title=".task — fetch when the view appears" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`.task {
    do {
        artists = try await LastFmApiService.getTopArtists()
    } catch {
        print(error.localizedDescription)
    }
}`}</pre>
                  </Step>
                  <Step n={3} title="Display — same List as Week 3" accent={TEAL}>
                    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>{`List(filtered) { artist in
    NavigationLink(
        destination: ArtistDetailScreen(artist: artist)
    ) { ArtistRow(artist: artist) }
    .listRowBackground(Color.clear)
    .listRowSeparator(.hidden)
}
.listStyle(.plain)`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
            <OSToggle
              android={
                <CodePane title="Kotlin — state + LaunchedEffect + LazyColumn" accent={PURPLE}>
{`var artists by remember { mutableStateOf<List<Artist>>(emptyList()) }
var query   by remember { mutableStateOf("") }

LaunchedEffect(Unit) {
    artists = LastFmApi.service.getTopArtists().artists.artist
}

val filtered = artists.filter { it.name.contains(query, ignoreCase = true) }
LazyColumn(contentPadding = PaddingValues(horizontal = 16.dp)) {
    items(filtered, key = { it.name }) { artist ->
        ArtistRow(artist, onClick = { onArtistClicked(artist) })
    }
}`}
                </CodePane>
              }
              ios={
                <CodePane title="Swift — state + .task + List" accent={TEAL}>
{`@State private var artists: [Artist] = []
@State private var query = ""

var filtered: [Artist] {
    if query.isEmpty { return artists }
    return artists.filter { $0.name.localizedCaseInsensitiveContains(query) }
}

// In body:
.task {
    do {
        artists = try await LastFmApiService.getTopArtists()
    } catch { print(error.localizedDescription) }
}

List(filtered) { artist in
    NavigationLink(destination: ArtistDetailScreen(artist: artist)) {
        ArtistRow(artist: artist)
    }
    .listRowBackground(Color.clear)
    .listRowSeparator(.hidden)
}
.listStyle(.plain)`}
                </CodePane>
              }
            />
          }
        />
      </div>
      <Info>{"The list, search, and navigation code did not change — only the data source did. That is the benefit of the clean state management you built in Weeks 1-3."}</Info>
    </Shell>
  ),

  // 18: Lab intro
  () => (
    <Shell tag="Lab intro" timer="4" title="Lab time — your first real API call" subtitle="Go to the Lab tab on the course site — Session 1 Lab." notes="Remind students to check the API Setup tab first if they have not already registered their Last.fm key. Without the key, they cannot complete the lab. Also remind them to make a copy of their Week 3 project before starting.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Lab steps — Session 1</p>
          {[
            { n: 0, t: "Copy Week 3 project → AlbumBrowserV2", time: "2 min" },
            { n: 1, t: "Add Retrofit + INTERNET permission", time: "5 min" },
            { n: 2, t: "Paste API URL in browser — read the JSON", time: "5 min" },
            { n: 3, t: "Define response data models", time: "8 min" },
            { n: 4, t: "Create LastFmApiService", time: "8 min" },
            { n: 5, t: "Call API from screen with LaunchedEffect / .task", time: "10 min" },
            { n: 6, t: "Ask Claude to explain coroutines vs async/await", time: "5 min" },
            { n: 7, t: "Reflection — 3 questions", time: "5 min" },
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
            "Real Last.fm artist data in your list",
            "Search still filters live data correctly",
            "No crashes or empty screens",
            "Reflection comment block complete",
          ].map(t => (
            <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
              <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: TEXT }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 10, background: "#FCEBEB", border: "0.5px solid #F7C1C1", borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ fontSize: 11, color: "#791F1F", margin: 0, lineHeight: 1.5 }}>API key not set up yet? Go to the API Setup tab first — you cannot complete this lab without it.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // 19: Closing
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Questions before lab?</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Your app is about to talk to the internet for the first time</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you learned today</p>
            {["How HTTP request/response works", "What a REST API is and how to read its docs", "JSON structure and how to map it to data classes", "What a thread is, and why blocking it freezes the UI", "suspend functions and coroutines in Kotlin", "async/await and .task in Swift", "What Retrofit and Gson do — and why they exist", "URLSession and JSONDecoder in Swift"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Coming in Session 2</p>
            {["Loading states — spinner while data loads", "Error handling — what to show when it fails", "The retry pattern", "Loading images from URLs with Coil and AsyncImage", "Formatting raw data — listener counts, dates"].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Notes>{"End with energy. Today is a watershed moment — students just connected their app to the internet. That is a real engineering skill. Remind them: the list, search, and navigation from Week 3 did not change. Only the data source did. That is good architecture paying off."}</Notes>
    </div>
  ),
];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 4 · Session 1 · {slides.length} slides</p>
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
