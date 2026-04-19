import './CurriculumOverview.css';

export default function CurriculumOverview() {
  return (
    <div className="curriculum-wrap">
      <p className="course-title">Mobile development in the age of AI</p>
      <p className="course-sub">CodePath · 10 weeks · 2 sessions/week · Intro level · No prereqs beyond basic programming · Teams of 3 · Android or iOS from Week 6</p>

      <span className="phase-pill ph1">Phase 1 — Mobile fundamentals (Weeks 1–5)</span>

      <div className="week-card">
        <div className="week-header"><span className="week-num">Week 1</span><p className="week-title">Your first mobile app — screens, layouts & state</p></div>
        <div className="sessions">
          <div className="session">
            <p className="s-label">Session 1</p>
            <p className="s-topic">What is declarative UI?</p>
            <p className="s-lab"><b>Lab:</b> Build a "Hello, world" screen in both Compose & SwiftUI side by side. Spot the similarities.</p>
          </div>
          <div className="session">
            <p className="s-label">Session 2</p>
            <p className="s-topic">State, recomposition & modifiers</p>
            <p className="s-lab"><b>Lab:</b> Build a counter app — a button increments a number and the UI updates reactively.</p>
          </div>
        </div>
        <div className="milestone m-assign">
          <span className="m-label">Assignment 1</span>
          <p className="m-text">Build a personal profile screen with a name, bio, and at least two interactive elements (e.g. a toggle, a button that changes text).</p>
        </div>
      </div>

      <div className="week-card">
        <div className="week-header"><span className="week-num">Week 2</span><p className="week-title">Navigation & multi-screen apps</p></div>
        <div className="sessions">
          <div className="session">
            <p className="s-label">Session 1</p>
            <p className="s-topic">Navigation fundamentals & data classes</p>
            <p className="s-lab"><b>Lab:</b> Build a trivia app — home screen and question screen connected by a NavHost / NavigationStack.</p>
          </div>
          <div className="session">
            <p className="s-label">Session 2</p>
            <p className="s-topic">Passing data between screens & the back stack</p>
            <p className="s-lab"><b>Lab:</b> Extend the trivia app — pass question data between screens, track score, and build a results screen.</p>
          </div>
        </div>
        <div className="milestone m-assign">
          <span className="m-label">Assignment 2</span>
          <p className="m-text">RPG character creator — starter code provided with TODOs and planted bugs. Fix the weapon screen (class-specific options), wire up data passing through a 5-screen flow, and complete the character card.</p>
        </div>
      </div>

      <div className="week-card">
        <div className="week-header"><span className="week-num">Week 3</span><p className="week-title">Lists, scrolling & dynamic data</p></div>
        <div className="sessions">
          <div className="session">
            <p className="s-label">Session 1</p>
            <p className="s-topic">LazyColumn / List & custom row layouts</p>
            <p className="s-lab"><b>Lab:</b> Render a hardcoded list of 20 items with a custom row layout including an image placeholder, title, and subtitle.</p>
          </div>
          <div className="session">
            <p className="s-label">Session 2</p>
            <p className="s-topic">Search, filter & empty states</p>
            <p className="s-lab"><b>Lab:</b> Add a search bar that filters the list in real time as the user types. Handle the empty results state gracefully.</p>
          </div>
        </div>
        <div className="milestone m-assign">
          <span className="m-label">Assignment 3</span>
          <p className="m-text">Build a searchable contacts or movie list app. Tapping a row navigates to a detail screen (combining Weeks 2 + 3). Data can be hardcoded.</p>
        </div>
      </div>

      <div className="week-card">
        <div className="week-header"><span className="week-num">Week 4</span><p className="week-title">Networking & REST APIs</p></div>
        <div className="sessions">
          <div className="session">
            <p className="s-label">Session 1</p>
            <p className="s-topic">HTTP, JSON & async patterns</p>
            <p className="s-lab"><b>Lab:</b> Fetch a list of posts from JSONPlaceholder and display them in a list.</p>
          </div>
          <div className="session">
            <p className="s-label">Session 2</p>
            <p className="s-topic">Loading states, errors & image loading</p>
            <p className="s-lab"><b>Lab:</b> Add a shimmer/skeleton loading state and an error banner to last session's app.</p>
          </div>
        </div>
        <div className="milestone m-assign">
          <span className="m-label">Assignment 4</span>
          <p className="m-text">Build an app that fetches real data from a public API of your choice (weather, movies, Pokémon, etc.), shows results in a list with a detail screen, and handles loading and error states.</p>
        </div>
      </div>

      <div className="week-card">
        <div className="week-header"><span className="week-num">Week 5</span><p className="week-title">Local storage, persistence & Git for teams</p></div>
        <div className="sessions">
          <div className="session">
            <p className="s-label">Session 1</p>
            <p className="s-topic">Local databases & user preferences</p>
            <p className="s-lab"><b>Lab:</b> Save favourited items from the Week 4 API app to a local database that persists across sessions. <b>Stretch:</b> Persist a user preference (e.g. dark/light mode) using DataStore / UserDefaults.</p>
          </div>
          <div className="session">
            <p className="s-label">Session 2</p>
            <p className="s-topic">Git for teams — organizations, branches, PRs & code review</p>
            <p className="s-lab"><b>Lab:</b> Create a GitHub Organization, set up branch protection, create a kanban board, and each team member opens and merges their first PR.</p>
          </div>
        </div>
        <div className="milestone m-assign">
          <span className="m-label">Assignment 5</span>
          <p className="m-text">Extend your Week 4 app with offline favourites saved to a local DB and a Favourites tab. Also due: 1-page capstone proposal with team members, platform choice, app concept, and core features.</p>
        </div>
      </div>

      <div className="divider-split"></div>
      <p className="split-note">Teams of 3 form here and commit to Android or iOS for their capstone</p>

      <span className="phase-pill ph2">Phase 2 — Platform depth + AI features (Weeks 6–8)</span>

      <div className="week-card">
        <div className="week-header"><span className="week-num">Week 6</span><p className="week-title">Architecture, MVVM & AI coding tools</p></div>
        <div className="track-grid">
          <div className="track track-a"><p className="t-label">Android</p><p className="t-detail">ViewModel + StateFlow, Hilt basics, project scaffolding in Android Studio</p></div>
          <div className="track track-b"><p className="t-label">iOS</p><p className="t-detail">ObservableObject + @StateObject, project structure in Xcode, Swift concurrency</p></div>
        </div>
        <div className="sessions">
          <div className="session">
            <p className="s-label">Session 1</p>
            <p className="s-topic">MVVM architecture deep dive</p>
            <p className="s-lab"><b>Lab:</b> Refactor a previous assignment to use proper MVVM — ViewModel holds state, View only renders.</p>
          </div>
          <div className="session">
            <p className="s-label">Session 2 <span className="tag-ai">AI tools</span></p>
            <p className="s-topic">AI-assisted development, prompting patterns & MCP</p>
            <p className="s-lab"><b>Lab:</b> Use Claude to scaffold your capstone project boilerplate. Practice prompting for mobile-specific patterns. Live demo: Google Stitch MCP generating UI from a natural language description.</p>
          </div>
        </div>
        <div className="milestone m-cap">
          <span className="m-label">Capstone M1</span>
          <p className="m-text">Repo set up inside a GitHub Organization, branch protection on main, architecture scaffolded, at least one screen rendering real or mock data. Team roles defined.</p>
        </div>
      </div>

      <div className="week-card">
        <div className="week-header"><span className="week-num">Week 7</span><p className="week-title">Calling an LLM from a mobile app</p></div>
        <div className="track-grid">
          <div className="track track-a"><p className="t-label">Android</p><p className="t-detail">Cloud AI integration (Claude API), processing streaming responses</p></div>
          <div className="track track-b"><p className="t-label">iOS</p><p className="t-detail">Cloud AI integration (Claude API), consuming async LLM streams</p></div>
        </div>
        <div className="sessions">
          <div className="session">
            <p className="s-label">Session 1 <span className="tag-ai">AI feature</span></p>
            <p className="s-topic">Integrating a cloud LLM API</p>
            <p className="s-lab"><b>Lab:</b> Build a chat screen that calls the Claude API and streams the response word by word.</p>
          </div>
          <div className="session">
            <p className="s-label">Session 2 <span className="tag-ai">AI feature</span></p>
            <p className="s-topic">Multimodal AI & Image Description</p>
            <p className="s-lab"><b>Lab:</b> Treat the mobile device as a rich input sensor by sending camera and gallery photos to Claude in a multimodal message.</p>
          </div>
        </div>
        <div className="milestone m-cap">
          <span className="m-label">Capstone M2</span>
          <p className="m-text">Core navigation complete, at least one networking call working end-to-end. Optional: incorporate an LLM feature if it fits your concept.</p>
        </div>
      </div>

      <div className="week-card">
        <div className="week-header"><span className="week-num">Week 8</span><p className="week-title">On-device AI — inference without the cloud</p></div>
        <div className="track-grid">
          <div className="track track-a"><p className="t-label">Android</p><p className="t-detail">ML Kit (text recognition, image labeling), Gemini Nano via Android AICore</p></div>
          <div className="track track-b"><p className="t-label">iOS</p><p className="t-detail">Core ML + Vision framework, Create ML for simple custom models, Apple Intelligence APIs</p></div>
        </div>
        <div className="sessions">
          <div className="session">
            <p className="s-label">Session 1 <span className="tag-ai">AI feature</span></p>
            <p className="s-topic">On-device image & text recognition</p>
            <p className="s-lab"><b>Lab:</b> Use the camera to recognise objects or text in real time — no internet required.</p>
          </div>
          <div className="session">
            <p className="s-label">Session 2 <span className="tag-ai">AI feature</span></p>
            <p className="s-topic">Running a local model end-to-end</p>
            <p className="s-lab"><b>Lab:</b> Run a bundled classification model on a photo from the camera roll and display the structured result in the UI.</p>
          </div>
        </div>
        <div className="milestone m-cap">
          <span className="m-label">Capstone M3</span>
          <p className="m-text">Meaningful progress on capstone issues. Core screens navigable. Instructor check-in this week — 10 min per team.</p>
        </div>
      </div>

      <span className="phase-pill ph3">Phase 3 — Testing, polish & demo day (Weeks 9–10)</span>

      <div className="week-card">
        <div className="week-header"><span className="week-num">Week 9</span><p className="week-title">Introduction to testing & capstone sprint</p></div>
        <div className="sessions">
          <div className="session">
            <p className="s-label">Session 1</p>
            <p className="s-topic">Introduction to unit testing</p>
            <p className="s-lab"><b>Lab:</b> Write unit tests for a shared starter ViewModel using JUnit4 (Android) or XCTest (iOS). Use fakes to isolate dependencies. Find edge cases with Claude.</p>
          </div>
          <div className="session">
            <p className="s-label">Session 2</p>
            <p className="s-topic">Capstone work session</p>
            <p className="s-lab"><b>Lab:</b> Unstructured capstone build time with full TA support. Teams work on their highest-priority remaining features. Goal: feature-complete by end of session.</p>
          </div>
        </div>
        <div className="milestone m-cap">
          <span className="m-label">Capstone M4</span>
          <p className="m-text">Feature-complete build. All core screens working, data persists, at least one stretch feature implemented. Repo reflects the branching workflow set up in Week 6.</p>
        </div>
      </div>

      <div className="week-card">
        <div className="week-header"><span className="week-num">Week 10</span><p className="week-title">Ship it & demo day</p></div>
        <div className="sessions">
          <div className="session">
            <p className="s-label">Session 1 — Lecture (55 min) + Lab (55 min)</p>
            <p className="s-topic">App store publishing + polish + demo prep</p>
            <p className="s-lab"><b>Lecture:</b> App store publishing end-to-end (signing, store listing, review process) for both platforms. Polish checklist. What makes a great 5-minute demo. <b>Lab:</b> Polish sprint — fix empty states, error messages, and app icon. Rehearse the demo out loud with your team at least once.</p>
          </div>
          <div className="session">
            <p className="s-label">Session 2 — Demo day</p>
            <p className="s-topic">Live capstone presentations</p>
            <p className="s-lab"><b>Format:</b> Each team has 6 minutes — ~4 min demo, ~2 min Q&amp;A. Structure: Connect, Introductions, Pitch, Demo, Next Steps. Format options: live device, screen share, pre-recorded video, or slide deck.</p>
          </div>
        </div>
        <div className="milestone m-final">
          <span className="m-label">Capstone final</span>
          <p className="m-text">Submit GitHub repo, a demo video walkthrough, and a slide presentation deck.</p>
        </div>
      </div>

      <div className="legend">
        <div className="legend-item"><div className="legend-dot" style={{ background: "#534AB7" }}></div>Weekly assignment</div>
        <div className="legend-item"><div className="legend-dot" style={{ background: "#993C1D" }}></div>Capstone milestone</div>
        <div className="legend-item"><div className="legend-dot" style={{ background: "#EF9F27" }}></div>AI-focused session</div>
        <div className="legend-item"><div className="legend-dot" style={{ background: "#378ADD" }}></div>Android track</div>
        <div className="legend-item"><div className="legend-dot" style={{ background: "#639922" }}></div>iOS track</div>
      </div>
    </div>
  );
}
