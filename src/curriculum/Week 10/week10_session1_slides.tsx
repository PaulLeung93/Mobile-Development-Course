import { useState } from "react";

const PURPLE      = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT= "#EEEDFE";
const TEAL        = "#1D9E75";
const TEAL_DARK   = "#0F6E56";
const TEAL_LIGHT  = "#E1F5EE";
const AMBER       = "#EF9F27";
const AMBER_LIGHT = "#FAEEDA";
const BLUE        = "#185FA5";
const BLUE_LIGHT  = "#E6F1FB";
const GREEN       = "#3B6D11";
const GREEN_LIGHT = "#EAF3DE";
const RED_LIGHT   = "#FEECEC";
const RED         = "#B91C1C";
const GRAY        = "#F5F5F7";
const TEXT        = "#1a1a2e";
const MUTED       = "#6b7280";
const CAP_C       = "#993C1D";
const CAP_BG      = "#FAECE7";

const Tag = ({ children, color = "purple" }) => {
  const map = {
    purple: { bg: PURPLE_LIGHT, fg: PURPLE_DARK },
    teal:   { bg: TEAL_LIGHT,   fg: TEAL_DARK },
    amber:  { bg: AMBER_LIGHT,  fg: "#633806" },
    blue:   { bg: BLUE_LIGHT,   fg: BLUE },
    green:  { bg: GREEN_LIGHT,  fg: GREEN },
    red:    { bg: RED_LIGHT,    fg: RED },
    cap:    { bg: CAP_BG,       fg: CAP_C },
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

const Info = ({ children }) => (
  <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
    <p style={{ fontSize: 12, color: PURPLE_DARK, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Notes = ({ children }) => (
  <div style={{ background: GRAY, borderRadius: 8, padding: "8px 12px", marginTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".05em" }}>Speaker notes</p>
    <p style={{ fontSize: 11, color: MUTED, margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Warn = ({ children }) => (
  <div style={{ background: AMBER_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10, borderLeft: `3px solid ${AMBER}` }}>
    <p style={{ fontSize: 12, color: "#633806", margin: 0, lineHeight: 1.5 }}>⚠️ {children}</p>
  </div>
);

const Shell = ({ tag, tagColor = "teal", timer, title, subtitle, children, notes, dark = false }) => (
  <div style={{ background: dark ? `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)` : "var(--color-background-primary)", border: dark ? "none" : "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px 22px", minHeight: 340 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag color="purple">Week 10 · S1</Tag>
        {tag && <Tag color={tagColor}>{tag}</Tag>}
      </div>
      {timer && <span style={{ fontSize: 11, color: dark ? "rgba(255,255,255,0.5)" : MUTED, background: dark ? "rgba(255,255,255,0.1)" : GRAY, padding: "2px 8px", borderRadius: 20 }}>{timer} min</span>}
    </div>
    <h2 style={{ fontSize: 18, fontWeight: 500, color: dark ? "#fff" : TEXT, margin: "0 0 4px", lineHeight: 1.3 }}>{title}</h2>
    {subtitle && <p style={{ fontSize: 13, color: dark ? "rgba(255,255,255,0.65)" : MUTED, margin: "0 0 12px" }}>{subtitle}</p>}
    <div style={{ marginTop: 10 }}>{children}</div>
    {notes && <Notes>{notes}</Notes>}
  </div>
);

const Bullet = ({ children, check = false, cross = false }) => (
  <div style={{ display: "flex", gap: 7, margin: "5px 0", alignItems: "flex-start" }}>
    <span style={{ color: cross ? RED : check ? TEAL : PURPLE, fontWeight: 700, flexShrink: 0, fontSize: 13, lineHeight: 1.4 }}>{cross ? "✗" : check ? "✓" : "▸"}</span>
    <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{children}</span>
  </div>
);

const StepNum = ({ n, label, sub, color = PURPLE }) => (
  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", margin: "7px 0" }}>
    <span style={{ background: color, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{n}</span>
    <div>
      <span style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{label}</span>
      {sub && <p style={{ fontSize: 11, color: MUTED, margin: "1px 0 0", lineHeight: 1.4 }}>{sub}</p>}
    </div>
  </div>
);

const slides = [

  // ─── 1: TITLE ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 10, fontWeight: 600, background: BLUE_LIGHT, color: BLUE, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>Android track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: GREEN_LIGHT, color: GREEN, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>iOS track</span>
          <span style={{ fontSize: 10, fontWeight: 600, background: CAP_BG, color: CAP_C, padding: "2px 10px", borderRadius: 20, letterSpacing: ".05em", textTransform: "uppercase" }}>Final session</span>
        </div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".08em" }}>Week 10 · Session 1</p>
        <h1 style={{ fontSize: 32, fontWeight: 500, color: "#fff", margin: "0 0 8px", lineHeight: 1.15 }}>Ship it.</h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>App store publishing · Polish · Demo prep</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            "From working app to published app",
            "Android: signed APK/AAB + Play Store listing",
            "iOS: Archive, IPA, TestFlight + App Store",
            "What the review process actually looks like",
            "The polish checklist before demo day",
            "What makes a great 5-minute demo",
            "Demo housekeeping — the 5-point structure",
            "Lab: polish sprint + demo rehearsal",
          ].map((t, i) => (
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

  // ─── 2: RECAP + FINISH LINE ───
  () => (
    <Shell tag="Recap" timer="3" title="10 weeks. This is the finish line." notes="Keep this short and celebratory — 2 minutes max. Students have built a lot. Acknowledge it genuinely. Then pivot: the job today is to get every team to a state they're proud to demo tomorrow. The energy should be high. | Sources: No external sources needed for this slide.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
        {[
          { phase: "Phase 1 — Weeks 1–5", items: ["Declarative UI", "Navigation + lists", "Networking + persistence", "MVVM architecture"], color: PURPLE_LIGHT, fg: PURPLE_DARK, done: true },
          { phase: "Phase 2 — Weeks 6–8", items: ["AI coding tools", "Cloud LLM integration", "On-device AI", "Capstone in progress"], color: BLUE_LIGHT, fg: BLUE, done: true },
          { phase: "Phase 3 — Weeks 9–10", items: ["Git for teams", "Testing fundamentals", "Ship + demo prep ← today", "Demo day ← tomorrow"], color: CAP_BG, fg: CAP_C, done: false },
        ].map(col => (
          <div key={col.phase} style={{ background: col.color, borderRadius: 8, padding: "12px 14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: col.fg, margin: 0, textTransform: "uppercase", letterSpacing: ".05em" }}>{col.phase}</p>
              {col.done && <span style={{ fontSize: 10, background: TEAL_LIGHT, color: TEAL_DARK, padding: "1px 7px", borderRadius: 20, fontWeight: 600 }}>Done ✓</span>}
            </div>
            {col.items.map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: t.includes("←") ? AMBER : col.fg, fontWeight: 700, flexShrink: 0, fontSize: 12 }}>{t.includes("←") ? "★" : "▸"}</span>
                <span style={{ fontSize: 11, color: col.fg, fontWeight: t.includes("←") ? 700 : 400 }}>{t}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "12px 16px" }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: TEAL_DARK, margin: "0 0 4px" }}>Where you should be right now</p>
        <p style={{ fontSize: 12, color: TEAL_DARK, margin: 0, lineHeight: 1.6 }}>Core features working. Data persists. Navigation doesn't crash. Today's job: learn how to ship it, polish what's rough, and rehearse your demo. Tomorrow you present.</p>
      </div>
    </Shell>
  ),

  // ─── 3: AGENDA ───
  () => (
    <Shell tag="Agenda" title="Today's session — 55 min lecture" notes="Session 1 is the last real teaching session of the course. The app store content is meaty but genuinely useful — students will want to know how to publish their app even if they don't do it today. The demo prep content is the most immediately actionable — every student has a demo in less than 24 hours. Keep energy high throughout. | Sources: Google Play Developer console — play.google.com/console. App Store Connect — appstoreconnect.apple.com.">
      {[
        { time: "0:00–0:03", label: "Recap",                       desc: "10 weeks — where you are, what today accomplishes",             section: null },
        { time: "0:03–0:09", label: "Publishing — big picture",    desc: "From working app to store listing — the full journey",         section: null },
        { time: "0:09–0:17", label: "Android: build + signing",    desc: "Keystore, signed APK/AAB, release build config",               section: "android" },
        { time: "0:17–0:22", label: "Android: Play Store",         desc: "Developer account, listing, screenshots, review",              section: "android" },
        { time: "0:22–0:30", label: "iOS: Archive + TestFlight",   desc: "Certificates, provisioning profiles, Xcode Organizer",         section: "ios" },
        { time: "0:30–0:35", label: "iOS: App Store",              desc: "App Store Connect, metadata, screenshots, review",             section: "ios" },
        { time: "0:35–0:39", label: "Review process",              desc: "Timelines, common rejections, how to respond",                 section: null },
        { time: "0:39–0:44", label: "The polish checklist",        desc: "What separates a demo-ready app from a working app",           section: null },
        { time: "0:44–0:49", label: "What makes a great demo",     desc: "Story arc, handling failures, the never-scroll-past rule",     section: null },
        { time: "0:49–0:55", label: "Demo housekeeping",           desc: "The 5-point structure, format options, logistics",             section: "cap" },
      ].map(r => (
        <div key={r.time} style={{
          display: "flex", gap: 12, padding: "7px 6px",
          borderBottom: `0.5px solid ${GRAY}`,
          background: r.section === "android" ? BLUE_LIGHT + "88"
            : r.section === "ios" ? GREEN_LIGHT + "88"
            : r.section === "cap" ? CAP_BG
            : "transparent",
          borderRadius: r.section ? 6 : 0, paddingLeft: r.section ? 8 : 6,
        }}>
          <span style={{ fontSize: 12, minWidth: 90, flexShrink: 0, color: r.section ? PURPLE_DARK : MUTED, fontWeight: r.section ? 600 : 400 }}>{r.time}</span>
          <span style={{ fontSize: 12, fontWeight: 600, minWidth: 168, flexShrink: 0, color: r.section === "android" ? BLUE : r.section === "ios" ? GREEN : r.section === "cap" ? CAP_C : PURPLE }}>{r.label}</span>
          <span style={{ fontSize: 12, color: r.section === "android" ? BLUE : r.section === "ios" ? GREEN : r.section === "cap" ? CAP_C : TEXT }}>{r.desc}</span>
        </div>
      ))}
      <div style={{ display: "flex", gap: 12, marginTop: 10, flexWrap: "wrap" }}>
        {[{ color: BLUE, label: "Android" }, { color: GREEN, label: "iOS" }, { color: CAP_C, label: "Demo" }].map(l => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
            <span style={{ fontSize: 11, color: MUTED }}>{l.label}</span>
          </div>
        ))}
      </div>
    </Shell>
  ),

  // ─── 4: PUBLISHING BIG PICTURE ───
  () => (
    <Shell tag="Concept" timer="6" title="From working app to published app" subtitle="The gap between 'it works on my phone' and 'anyone can download it'" notes="Students think publishing is a button press. It's not. There are signing requirements, store metadata, screenshot specs, content ratings, privacy policies, and a human review process. The goal of this slide is to give a mental map of the whole journey so the platform-specific slides that follow make sense in context. The key insight: you can distribute outside the stores (APK sideloading on Android, TestFlight on iOS) which is what they'll actually do for this course. | Sources: Google Play overview — developer.android.com/distribute/google-play. App Store overview — developer.apple.com/distribute. Android App Bundle vs APK — developer.android.com/guide/app-bundle. TestFlight overview — developer.apple.com/testflight.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>The full publishing journey</p>
          {[
            { n: 1, step: "Build a release version of your app",   sub: "Different from the debug build you've been running — optimised, signed, no debug logs" },
            { n: 2, step: "Sign it with a certificate",            sub: "Proves the app came from you. Android: keystore file. iOS: Apple Developer certificate." },
            { n: 3, step: "Create a store listing",                sub: "Name, description, screenshots, icon, content rating, privacy policy URL" },
            { n: 4, step: "Upload the build",                      sub: "Google Play Console / App Store Connect — upload the APK/AAB/IPA" },
            { n: 5, step: "Submit for review",                     sub: "A human (and automated systems) check your app against store policies" },
            { n: 6, step: "Ship",                                  sub: "App is live — anyone with a compatible device can download it" },
          ].map(s => <StepNum key={s.n} n={s.n} label={s.step} sub={s.sub} />)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 8px" }}>For this course: distribute without the store</p>
            {[
              { platform: "Android", method: "Signed APK — share the file directly. Recipient enables 'Install from unknown sources' to install it." },
              { platform: "iOS", method: "TestFlight — Apple's official beta distribution. Invite testers by email, no App Store review required." },
            ].map(r => (
              <div key={r.platform} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: TEAL_DARK, margin: "0 0 3px" }}>{r.platform}</p>
                <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5, opacity: 0.9 }}>{r.method}</p>
              </div>
            ))}
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#633806", margin: "0 0 8px" }}>What you actually need for submission</p>
            {[
              "Signed APK (Android) or IPA via TestFlight (iOS)",
              "GitHub repo with clean history, tagged v1.0",
              "README with app description and screenshots",
              "Written reflection (see final checklist slide)",
            ].map(t => <Bullet key={t} check>{t}</Bullet>)}
            <p style={{ fontSize: 11, color: "#633806", margin: "8px 0 0", fontStyle: "italic" }}>You don't need to go through store review for the course — but today you'll learn how so you can ship it for real after the course ends.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 5: ANDROID BUILD + SIGNING ───
  () => (
    <Shell tag="Android" tagColor="blue" timer="8" title="Android: signed APK/AAB and release build" subtitle="A release build is not the same as a debug build" notes="The keystore is the thing students lose and then panic about. Emphasise: store your keystore file and its passwords somewhere safe — if you lose the keystore, you cannot update your app on the Play Store (you'd have to publish as a new app with a new package name). For the course submission, a debug-signed APK is acceptable — but walk through release signing anyway since they'll need it after the course. The AAB vs APK distinction matters: Play Store now requires AAB for new apps, but APK is fine for direct distribution. | Sources: Sign your Android app — developer.android.com/studio/publish/app-signing. Create an upload keystore — developer.android.com/studio/publish/app-signing#generate-key. Android App Bundle — developer.android.com/guide/app-bundle. Build variants (debug vs release) — developer.android.com/studio/build/build-variants. Generate signed APK/AAB from Android Studio — developer.android.com/studio/publish/preparing#publishing-build.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Debug vs Release — what changes</p>
          <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, overflow: "hidden", marginBottom: 10 }}>
            {[
              { dim: "Signing",       debug: "Automatic debug keystore", release: "Your keystore — you create it once" },
              { dim: "Optimisation",  debug: "Not minified", release: "ProGuard/R8 minification, resource shrinking" },
              { dim: "Debuggable",    debug: "Yes — logs visible", release: "No — logs stripped" },
              { dim: "Size",          debug: "Larger", release: "Smaller (often 30–50% smaller)" },
              { dim: "For",           debug: "Development and testing", release: "Submission and distribution" },
            ].map((r, i) => (
              <div key={r.dim} style={{ display: "grid", gridTemplateColumns: "90px 1fr 1fr", padding: "7px 12px", background: i % 2 === 0 ? "var(--color-background-primary)" : "var(--color-background-secondary)", borderTop: i > 0 ? "0.5px solid var(--color-border-tertiary)" : "none" }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: TEXT }}>{r.dim}</span>
                <span style={{ fontSize: 11, color: MUTED }}>{r.debug}</span>
                <span style={{ fontSize: 11, color: BLUE, fontWeight: 500 }}>{r.release}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Generate a signed APK in Android Studio</p>
          {[
            { n: 1, step: "Build → Generate Signed Bundle / APK" },
            { n: 2, step: "Choose APK (for direct distribution) or Android App Bundle (for Play Store)" },
            { n: 3, step: "Create new keystore → fill in alias, passwords, validity (25 years)" },
            { n: 4, step: "Choose release build variant" },
            { n: 5, step: "Finish → APK written to app/release/" },
          ].map(s => <StepNum key={s.n} n={s.n} label={s.step} color={BLUE} />)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <CodePane title="build.gradle.kts — release signing config" accent={BLUE}>{`android {
    signingConfigs {
        create("release") {
            storeFile = file("my-release-key.jks")
            storePassword = "..."
            keyAlias = "my-key-alias"
            keyPassword = "..."
            // In production: load from
            // local.properties, never hardcode
        }
    }
    buildTypes {
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(
                getDefaultProguardFile(
                    "proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
            signingConfig = signingConfigs
                .getByName("release")
        }
    }
}`}</CodePane>
          <Warn>{"Store your .jks keystore file and both passwords somewhere permanent and safe — password manager, cloud storage, etc. If you lose the keystore, you cannot publish updates to the same app on the Play Store. Ever."}</Warn>
          <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, margin: "0 0 4px" }}>APK vs AAB</p>
            <p style={{ fontSize: 11, color: BLUE, margin: 0, lineHeight: 1.5 }}>APK is the traditional format — share the file directly, anyone can install it. AAB (Android App Bundle) is required for new Play Store listings — Google generates optimised APKs for each device from your bundle. For course submission: APK is fine.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 6: ANDROID PLAY STORE ───
  () => (
    <Shell tag="Android" tagColor="blue" timer="5" title="Android: Play Store listing" subtitle="What you need to go from uploaded build to live app" notes="The $25 developer account fee trips students up — they expect it to be free. The Play Store listing is more forgiving than the App Store on metadata (no human review of description content) but stricter on technical requirements. The content rating questionnaire is required and takes about 10 minutes. Privacy policy is now required for any app that collects any data — even crash analytics. | Sources: Google Play Console — play.google.com/console. Create and set up your app — support.google.com/googleplay/android-developer/answer/9859152. Store listing requirements — support.google.com/googleplay/android-developer/answer/9898842. Content rating — support.google.com/googleplay/android-developer/answer/188189. Privacy policy requirement — support.google.com/googleplay/android-developer/answer/9934799. Review timeline — support.google.com/googleplay/android-developer/answer/9849999 (typically 3–7 days for new apps).">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>What you need before submitting</p>
          {[
            { item: "Google Play Developer account", detail: "One-time $25 registration fee at play.google.com/console. Takes up to 48 hours to activate." },
            { item: "App icon", detail: "512×512px PNG. No transparency. This is different from your launcher icon." },
            { item: "Feature graphic", detail: "1024×500px — shown at the top of your store listing." },
            { item: "Screenshots", detail: "At least 2 screenshots per device type (phone). Max 8. 320–3840px on shortest side." },
            { item: "Short description", detail: "80 characters max. Shown in search results." },
            { item: "Full description", detail: "4000 characters max. Use keywords naturally." },
            { item: "Content rating", detail: "Complete the IARC questionnaire in the console. Required." },
            { item: "Privacy policy URL", detail: "Required if your app collects any data — including crash analytics. Host a simple page on GitHub Pages." },
          ].map(r => (
            <div key={r.item} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
              <span style={{ color: BLUE, fontWeight: 700, flexShrink: 0, fontSize: 12, marginTop: 1 }}>▸</span>
              <div>
                <span style={{ fontSize: 11, fontWeight: 600, color: TEXT }}>{r.item} </span>
                <span style={{ fontSize: 11, color: MUTED, lineHeight: 1.4 }}>{r.detail}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: BLUE_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, margin: "0 0 8px" }}>Publishing tracks — start with Internal Testing</p>
            {[
              { track: "Internal testing", detail: "Up to 100 testers, instant publish (no review), invite by email. Best starting point." },
              { track: "Closed testing", detail: "Named groups of testers, requires brief review." },
              { track: "Open testing", detail: "Public beta, anyone can opt in." },
              { track: "Production", detail: "Full public release — goes through full review (3–7 days for new apps)." },
            ].map(t => (
              <div key={t.track} style={{ marginBottom: 7 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: BLUE, margin: "0 0 2px" }}>{t.track}</p>
                <p style={{ fontSize: 11, color: BLUE, margin: 0, opacity: 0.85, lineHeight: 1.4 }}>{t.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 6px" }}>For course submission</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.6 }}>You don't need a Play Store listing for the course. Generate a signed APK, share the file or a GitHub release link. Anyone on Android can install it with "Install from unknown sources" enabled.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 7: iOS ARCHIVE + TESTFLIGHT ───
  () => (
    <Shell tag="iOS" tagColor="green" timer="8" title="iOS: Archive, IPA and TestFlight" subtitle="Apple's process is more involved — but TestFlight is excellent" notes="iOS signing is the most common source of confusion for students. The key mental model: a certificate proves who you are (developer identity), a provisioning profile authorises a specific app to run on specific devices. Without both, Xcode won't let you install on a real device or upload to App Store Connect. The Apple Developer Program ($99/year) is required for TestFlight and App Store submission. Without it, you can only install on devices registered to your Apple ID (free tier allows a few devices). Walk through this slide slowly — the certificate/profile confusion is real. | Sources: Code signing overview — developer.apple.com/support/code-signing. Creating distribution certificates — developer.apple.com/help/account/create-certificates/create-a-certificate-signing-request. Provisioning profiles — developer.apple.com/help/account/manage-profiles/create-a-development-provisioning-profile. Xcode Organizer — developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases. TestFlight overview — developer.apple.com/testflight. Uploading to App Store Connect — developer.apple.com/help/app-store-connect/manage-builds/upload-builds.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The two signing concepts you need</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 10 }}>
            <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, margin: "0 0 4px" }}>Certificate — proves your identity</p>
              <p style={{ fontSize: 11, color: GREEN, margin: 0, lineHeight: 1.5 }}>Issued by Apple, lives in your Keychain. Proves this build came from a registered Apple Developer. Two types: Development (for testing) and Distribution (for App Store / TestFlight).</p>
            </div>
            <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, margin: "0 0 4px" }}>Provisioning Profile — authorises the app</p>
              <p style={{ fontSize: 11, color: GREEN, margin: 0, lineHeight: 1.5 }}>Ties a specific App ID + Certificate + (for development) a list of devices together. Xcode downloads and manages these automatically if you use Automatic Signing — leave this on unless you have a reason to change it.</p>
            </div>
          </div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Archive and upload to TestFlight</p>
          {[
            { n: 1, step: "Set scheme to Release", sub: "Product → Scheme → Edit Scheme → Run → Build Configuration → Release" },
            { n: 2, step: "Product → Archive", sub: "Builds and archives the app. Xcode Organizer opens automatically." },
            { n: 3, step: "Distribute App → App Store Connect", sub: "Choose Upload (not Export) to send directly to App Store Connect" },
            { n: 4, step: "Automatic signing → Next → Upload", sub: "Xcode handles certificates and profiles automatically" },
            { n: 5, step: "Open App Store Connect → TestFlight", sub: "Find your build (takes ~15 min to process), add testers by email" },
          ].map(s => <StepNum key={s.n} n={s.n} label={s.step} sub={s.sub} color={GREEN} />)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: GREEN_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, margin: "0 0 8px" }}>TestFlight — why it's excellent</p>
            {[
              "Invite up to 10,000 external testers by email",
              "Testers get a link — no device UDID registration needed",
              "No App Store review for TestFlight builds",
              "Testers install from the TestFlight app — official, not sideloaded",
              "Build expires after 90 days — keeps things clean",
              "Crash reports and feedback built in",
            ].map(t => <Bullet key={t} check>{t}</Bullet>)}
          </div>
          <Warn>{"Apple Developer Program costs $99/year and is required for TestFlight and App Store distribution. Without it you can only install on your own device via Xcode. Plan ahead — account activation can take 24–48 hours."}</Warn>
          <div style={{ background: TEAL_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 4px" }}>For course submission</p>
            <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.5 }}>If you have an Apple Developer account: upload to TestFlight and share the invite link. If not: export an IPA via Xcode Organizer → Export → Ad Hoc or Development.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 8: iOS APP STORE LISTING ───
  () => (
    <Shell tag="iOS" tagColor="green" timer="5" title="iOS: App Store Connect listing" subtitle="The App Store has stricter metadata requirements than the Play Store" notes="The App Store is notably stricter than Google Play on metadata quality — vague or keyword-stuffed descriptions get rejected. The screenshot requirement is particularly annoying: you need screenshots for every device size you support (iPhone 6.5in, 5.5in, iPad if applicable). Using the right Simulator in Xcode makes this easy. Privacy nutrition labels are required and detailed — if your app collects any data (even crash logs via Firebase), you have to declare it. | Sources: App Store Connect help — developer.apple.com/help/app-store-connect. App Store screenshot requirements — developer.apple.com/help/app-store-connect/reference/screenshot-specifications. App Privacy details — developer.apple.com/app-store/app-privacy-details. App Store Review Guidelines — developer.apple.com/app-store/review/guidelines (worth reading in full — many common rejection reasons are in here). App Store review timeline — developer.apple.com/app-store/review (typically 24-48 hours for updates, up to 7 days for new apps).">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>App Store Connect — what you fill in</p>
          {[
            { field: "App name", req: "30 characters max. Unique on the App Store." },
            { field: "Subtitle", req: "30 characters max. Appears below the name in search." },
            { field: "Description", req: "4000 characters. First 3 lines show before 'more' — make them count." },
            { field: "Keywords", req: "100 characters total. Comma-separated. Drives search ranking." },
            { field: "Screenshots", req: "Required for 6.5in (iPhone 14 Pro Max) and 5.5in (iPhone 8 Plus). Take them in Simulator." },
            { field: "App icon", req: "1024×1024px, no alpha channel, no rounded corners (Apple clips them)." },
            { field: "Privacy nutrition label", req: "Declare all data you collect. Required. Check the App Store Connect Privacy page carefully." },
            { field: "Age rating", req: "Fill in the questionnaire — takes 5 minutes." },
          ].map(r => (
            <div key={r.field} style={{ display: "flex", gap: 8, margin: "5px 0" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: GREEN, minWidth: 130, flexShrink: 0 }}>{r.field}</span>
              <span style={{ fontSize: 11, color: MUTED, lineHeight: 1.4 }}>{r.req}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: GREEN_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, margin: "0 0 8px" }}>Taking screenshots the right way</p>
            {[
              { step: "Open the right Simulator", detail: "iPhone 15 Pro Max for 6.5in. iPhone 8 Plus for 5.5in. Both required." },
              { step: "Run your app in the Simulator", detail: "Navigate to the screen you want to capture" },
              { step: "File → Take Screenshot (Cmd+S)", detail: "Saved to Desktop. Repeat for each key screen." },
              { step: "Upload in App Store Connect", detail: "Drag and drop into the Screenshots section" },
            ].map((s, i) => <StepNum key={i} n={i + 1} label={s.step} sub={s.detail} color={GREEN} />)}
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#633806", margin: "0 0 6px" }}>Most common first-time rejection reasons</p>
            {[
              "Placeholder text or lorem ipsum in the description",
              "Screenshots don't match the app's current functionality",
              "Missing privacy policy URL when data is collected",
              "App crashes on launch or core functionality is broken",
              "Misleading app name or description",
            ].map(t => <Bullet key={t} cross>{t}</Bullet>)}
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 9: REVIEW PROCESS ───
  () => (
    <Shell tag="Context" timer="4" title="What the review process actually looks like" subtitle="Both platforms review your app before it goes live — plan for this" notes="The review process surprises students who expect instant publishing. The key practical advice: submit early, respond quickly to rejections, and read the rejection message carefully — it usually tells you exactly what to fix. App Store rejections are not the end of the world; most are fixable in an afternoon. Google Play is more automated and faster but will instantly remove apps that violate policies post-launch. | Sources: App Store Review Guidelines — developer.apple.com/app-store/review/guidelines. Google Play Developer Policies — play.google.com/about/developer-content-policy. App Store review timeline — developer.apple.com/app-store/review. Google Play review timeline — support.google.com/googleplay/android-developer/answer/9849999. Appealing App Store rejections — developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/reply-to-app-review-messages.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <div style={{ background: BLUE_LIGHT, borderRadius: "8px 8px 0 0", padding: "8px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: BLUE, margin: 0 }}>🤖 Google Play</p>
          </div>
          <div style={{ border: `1px solid ${BLUE_LIGHT}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "12px 14px" }}>
            {[
              { label: "New app review time", val: "3–7 days typically. Can be faster." },
              { label: "Update review time", val: "Hours to 1–2 days." },
              { label: "Internal testing track", val: "Instant — no review required." },
              { label: "Who reviews", val: "Mostly automated, some human review for new apps." },
              { label: "Rejection reason given?", val: "Yes — email with specific policy violation." },
              { label: "Can appeal?", val: "Yes — Play Console has a policy appeals process." },
            ].map(r => (
              <div key={r.label} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: "0.5px solid " + BLUE_LIGHT }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: BLUE, minWidth: 150, flexShrink: 0 }}>{r.label}</span>
                <span style={{ fontSize: 11, color: BLUE, opacity: 0.85 }}>{r.val}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ background: GREEN_LIGHT, borderRadius: "8px 8px 0 0", padding: "8px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: GREEN, margin: 0 }}>🍎 Apple App Store</p>
          </div>
          <div style={{ border: `1px solid ${GREEN_LIGHT}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "12px 14px" }}>
            {[
              { label: "New app review time", val: "24–48 hours typically. Can be up to 7 days." },
              { label: "Update review time", val: "24 hours typically." },
              { label: "TestFlight review", val: "~1 day for external testing builds." },
              { label: "Who reviews", val: "Human reviewers + automated checks." },
              { label: "Rejection reason given?", val: "Yes — detailed message in App Store Connect with guideline reference." },
              { label: "Can appeal?", val: "Yes — you can reply directly in App Store Connect or request an appeal board." },
            ].map(r => (
              <div key={r.label} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: "0.5px solid " + GREEN_LIGHT }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: GREEN, minWidth: 150, flexShrink: 0 }}>{r.label}</span>
                <span style={{ fontSize: 11, color: GREEN, opacity: 0.85 }}>{r.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Info>{"If you get rejected: read the message carefully, fix the specific issue, and resubmit. Most first-time rejections are metadata issues (missing privacy policy, screenshots mismatch) not fundamental app problems. A rejection is not a failure — it's a checklist item."}</Info>
    </Shell>
  ),

  // ─── 10: POLISH CHECKLIST ───
  () => (
    <Shell tag="Polish" tagColor="amber" timer="5" title="The polish checklist" subtitle="What separates a demo-ready app from a working app" notes="Students often think 'it works' is enough. These items are the difference between an app that looks like a student project and one that looks like a real product. Walk through each category quickly — students can use this as a literal checklist during the polish sprint. The empty state and error message items are the most commonly missed and the most visible during a live demo. | Sources: Material Design — m3.material.io. Apple Human Interface Guidelines — developer.apple.com/design/human-interface-guidelines. Android app quality guidelines — developer.android.com/docs/quality-guidelines/core-app-quality.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          {
            category: "🎨 Visual",
            color: PURPLE_LIGHT, fg: PURPLE_DARK,
            items: [
              { ok: true,  t: "App icon is set — not the default Android/iOS icon" },
              { ok: true,  t: "Launch screen / splash screen doesn't crash" },
              { ok: true,  t: "Colors and fonts are consistent throughout" },
              { ok: true,  t: "Text is readable — no white on white, no tiny fonts" },
              { ok: false, t: "Placeholder text like 'TODO' or 'Lorem ipsum' visible in the UI" },
            ],
          },
          {
            category: "⚡ Behaviour",
            color: BLUE_LIGHT, fg: BLUE,
            items: [
              { ok: true,  t: "All core screens navigate correctly — no dead ends" },
              { ok: true,  t: "Back button / swipe back works on every screen" },
              { ok: true,  t: "Data persists after killing and reopening the app" },
              { ok: false, t: "App crashes when the list is empty" },
              { ok: false, t: "Tapping the same button twice causes unexpected behavior" },
            ],
          },
          {
            category: "🛡️ States",
            color: TEAL_LIGHT, fg: TEAL_DARK,
            items: [
              { ok: true,  t: "Loading state shown while data fetches" },
              { ok: true,  t: "Empty state shown when a list has no items" },
              { ok: true,  t: "Error state shown when a network call fails" },
              { ok: false, t: "Error message says 'Error: null' or shows a stack trace" },
              { ok: false, t: "Blank white screen while loading — no indicator at all" },
            ],
          },
        ].map(col => (
          <div key={col.category} style={{ background: col.color, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: col.fg, margin: "0 0 10px" }}>{col.category}</p>
            {col.items.map(item => (
              <div key={item.t} style={{ display: "flex", gap: 7, margin: "5px 0" }}>
                <span style={{ color: item.ok ? TEAL_DARK : RED, fontWeight: 700, flexShrink: 0, fontSize: 12 }}>{item.ok ? "✓" : "✗"}</span>
                <span style={{ fontSize: 11, color: col.fg, lineHeight: 1.4 }}>{item.t}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
        <Warn>{"The single most common demo-killer: the app crashes on an empty list. Before your demo, test every screen with zero data. Then test again."}</Warn>
        <Info>{"You don't need all of these to have a great demo. Focus first on the three that will be most visible: app icon, empty states, and error messages."}</Info>
      </div>
    </Shell>
  ),

  // ─── 12: TRANSITION — DEMO PREP ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${CAP_C} 0%, #6B2515 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 340, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", textAlign: "center" }}>
      <div style={{ fontSize: 56, marginBottom: 20 }}>{"🎤"}</div>
      <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: ".1em" }}>Now let{"'"}s talk about</p>
      <h1 style={{ fontSize: 36, fontWeight: 600, color: "#fff", margin: "0 0 12px", lineHeight: 1.2 }}>Demo day</h1>
      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", margin: 0, maxWidth: 420, lineHeight: 1.6 }}>What makes a great demo {"·"} The 5-point structure {"·"} Format and logistics</p>
    </div>
  ),

  // ─── 13: GREAT DEMO ───
  () => (
    <Shell tag="Demo prep" tagColor="cap" timer="5" title="What makes a great 5-minute demo" subtitle="A demo is not a feature tour. It's a story." notes="This slide matters a lot — students default to opening the app and clicking through every screen in order, which is boring. The best demos lead with a problem (the hook), then show the solution in action. The 'never scroll past a busy feed' rule is from years of watching live demos fail because the presenter couldn't find the right item. Rehearsal is non-negotiable — mention it explicitly. | Sources: Demo tips from Y Combinator — ycombinator.com/library/6q-how-to-present-to-investors. Apple WWDC keynote structure (general reference). Garr Reynolds, 'Presentation Zen' (general presentation advice).">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>Structure your demo as a story</p>
          {[
            { phase: "The hook (30 sec)", detail: "Start with the problem, not the app. 'Have you ever tried to find a recipe with the ingredients you actually have at home?' Not 'So we built this app called RecipeAI...'", color: AMBER_LIGHT, fg: "#633806" },
            { phase: "The solution (15 sec)", detail: "One sentence. What does your app do? 'We built an AI-powered app that suggests recipes based on what's already in your fridge — no extra shopping required.'", color: PURPLE_LIGHT, fg: PURPLE_DARK },
            { phase: "The demo (2.5 min)", detail: "Show the core loop — the thing that delivers the value you just promised. If you promised recipe suggestions, show a recipe being suggested. Don't open with settings.", color: TEAL_LIGHT, fg: TEAL_DARK },
            { phase: "Next steps (1 min)", detail: "What would you build next? Shows you have a vision beyond what's in front of you.", color: BLUE_LIGHT, fg: BLUE },
          ].map(p => (
            <div key={p.phase} style={{ background: p.color, borderRadius: 8, padding: "9px 12px", marginBottom: 7 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: p.fg, margin: "0 0 3px" }}>{p.phase}</p>
              <p style={{ fontSize: 11, color: p.fg, margin: 0, lineHeight: 1.4, opacity: 0.9 }}>{p.detail}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: TEAL_LIGHT, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: TEAL_DARK, margin: "0 0 8px" }}>The rules that will save you</p>
            {[
              { rule: "Rehearse at least twice", detail: "Out loud, with a timer. The first time takes 9 minutes. The second time takes 6. The third time takes 4:30." },
              { rule: "Pre-load everything", detail: "Log in before you walk up. Navigate to the starting screen. Have test data already entered. Never type a password in front of an audience." },
              { rule: "Never scroll past a busy feed", detail: "If you need to find a specific item in a list, search for it. Don't scroll and hope. Put your demo item at the top." },
              { rule: "Have a backup plan", detail: "Screen recording of your working demo on your phone. If the live demo fails, play the video. A smooth video beats a crashing live demo." },
            ].map(r => (
              <div key={r.rule} style={{ marginBottom: 9 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: TEAL_DARK, margin: "0 0 2px" }}>{r.rule}</p>
                <p style={{ fontSize: 11, color: TEAL_DARK, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{r.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ background: RED_LIGHT, borderRadius: 10, padding: "10px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: RED, margin: "0 0 6px" }}>If something breaks live</p>
            <p style={{ fontSize: 11, color: RED, margin: 0, lineHeight: 1.5 }}>{"Say 'let me show you how this works' and switch to your screen recording. Don't apologise profusely. Don't debug live. Stay calm — the audience mostly won't notice if you transition smoothly."}</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 13: DEMO HOUSEKEEPING ───
  () => (
    <Shell tag="Demo day" tagColor="cap" timer="4" title="Demo housekeeping — what every team needs to know" subtitle="6 minutes per team. Here's exactly how it works." notes="Read through this slide clearly and slowly. Students are anxious about logistics and need specifics. The format flexibility is intentional — some students are terrified of live demos, and a polished recorded video is a completely acceptable substitute. The projector connection step is easy to overlook but causes real delays — remind teams to test their connection before the session starts. | Sources: No external sources needed — this is course logistics.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 10px" }}>The 5-point structure — required for every team</p>
          {[
            { n: 1, title: "Connect", detail: "Connect your phone or laptop to the projector before your time slot. Test the connection during the break before your turn." },
            { n: 2, title: "Introductions", detail: "Introduce every team member by name right at the start. Don't skip this — it matters." },
            { n: 3, title: "Pitch", detail: "What problem does your app solve and how? 30–60 seconds. Lead with the user, not the technology." },
            { n: 4, title: "Demo", detail: "Live walkthrough of your core functionality, presented as a story. Aim for 3 minutes." },
            { n: 5, title: "Next Steps", detail: "What features would you add next? Shows vision beyond what you built. 30–60 seconds." },
          ].map(s => <StepNum key={s.n} n={s.n} label={s.title} sub={s.detail} color={CAP_C} />)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: CAP_BG, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: CAP_C, margin: "0 0 8px" }}>Format — your choice</p>
            {[
              { format: "Live on your phone", detail: "Mirror your device to the projector via USB or AirPlay/Cast. Most immersive — audience sees the real app." },
              { format: "Screen share (laptop)", detail: "Run your app in the emulator/simulator and share your screen. Easier to control, no mirroring setup." },
              { format: "Pre-recorded video", detail: "Record a clean walkthrough in advance. Play it during your demo slot. Safest option if you're worried about crashes." },
              { format: "Slide deck", detail: "Optional — you can use slides for your pitch and next steps while keeping the demo itself as a video or live." },
            ].map(r => (
              <div key={r.format} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: CAP_C, margin: "0 0 2px" }}>{r.format}</p>
                <p style={{ fontSize: 11, color: CAP_C, margin: 0, lineHeight: 1.4, opacity: 0.85 }}>{r.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 10, padding: "10px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 6px" }}>Timing</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {[
                { label: "Total per team", val: "6 minutes" },
                { label: "Demo", val: "~4 minutes" },
                { label: "Live Q&A", val: "~2 minutes" },
                { label: "Transition", val: "Built into schedule" },
              ].map(r => (
                <div key={r.label} style={{ background: "rgba(83,74,183,0.08)", borderRadius: 6, padding: "7px 10px" }}>
                  <p style={{ fontSize: 10, color: PURPLE_DARK, margin: "0 0 2px", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".04em" }}>{r.label}</p>
                  <p style={{ fontSize: 13, fontWeight: 700, color: PURPLE_DARK, margin: 0 }}>{r.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 14: FINAL SUBMISSION CHECKLIST ───
  () => (
    <Shell tag="Submission" tagColor="cap" timer="3" title="The final submission checklist" subtitle="Everything due before demo day" notes="Go through this checklist slowly and ask for a show of hands at each item — who has this done? This surfaces blockers while there's still time to fix them. The written reflection is the most commonly rushed item and the one most worth reading carefully — it's where students articulate what they learned about AI-assisted development. | Sources: No external sources needed — course logistics.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Build deliverables</p>
          <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "12px 14px", border: "0.5px solid var(--color-border-tertiary)", marginBottom: 10 }}>
            {[
              { done: false, item: "Signed APK (Android) or TestFlight build (iOS)", sub: "Runs on a real device without Xcode/Android Studio" },
              { done: false, item: "GitHub repo shared with codepathreview", sub: "Private repo — add as outside collaborator" },
              { done: false, item: "Repo tagged v1.0", sub: "git tag v1.0 && git push origin v1.0" },
              { done: false, item: "Clean commit history", sub: "No 'wip', 'fix', 'asdf' commits on main — squash as needed" },
              { done: false, item: "README with app name, description, team, screenshots", sub: "Use the provided template — mark features with [x]" },
            ].map(r => (
              <div key={r.item} style={{ display: "flex", gap: 8, margin: "7px 0" }}>
                <span style={{ fontSize: 13, flexShrink: 0, color: MUTED }}>☐</span>
                <div>
                  <p style={{ fontSize: 12, color: TEXT, margin: 0, fontWeight: 500 }}>{r.item}</p>
                  <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{r.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Demo deliverables</p>
          <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "12px 14px", border: "0.5px solid var(--color-border-tertiary)" }}>
            {[
              { done: false, item: "Demo rehearsed at least once", sub: "Out loud, timed, with all team members present" },
              { done: false, item: "Backup screen recording ready", sub: "30-second walkthrough of core feature on your phone" },
              { done: false, item: "Projector connection tested", sub: "Test before the session, not when it's your turn" },
            ].map(r => (
              <div key={r.item} style={{ display: "flex", gap: 8, margin: "7px 0" }}>
                <span style={{ fontSize: 13, flexShrink: 0, color: MUTED }}>☐</span>
                <div>
                  <p style={{ fontSize: 12, color: TEXT, margin: 0, fontWeight: 500 }}>{r.item}</p>
                  <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{r.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>Written reflection</p>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 10, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 11, color: PURPLE_DARK, margin: "0 0 8px", lineHeight: 1.5 }}>One submission per team — roughly one page. Answer these three questions:</p>
            {[
              { q: "What did you build?", hint: "Describe your app, its core features, and who it's for. Be specific — not 'a recipe app' but 'an app that suggests recipes based on fridge contents using on-device AI.'" },
              { q: "What would you do differently?", hint: "One or two honest architectural or product decisions you'd change knowing what you know now." },
              { q: "How did AI tools shape your workflow?", hint: "Be specific — which tools, which tasks, what worked well, what didn't. This is the most interesting part." },
            ].map(r => (
              <div key={r.q} style={{ marginBottom: 10 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: PURPLE_DARK, margin: "0 0 3px" }}>{r.q}</p>
                <p style={{ fontSize: 11, color: PURPLE_DARK, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>{r.hint}</p>
              </div>
            ))}
          </div>
          <div style={{ background: CAP_BG, borderRadius: 10, padding: "10px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: CAP_C, margin: "0 0 4px" }}>Deadline</p>
            <p style={{ fontSize: 11, color: CAP_C, margin: 0, lineHeight: 1.5 }}>All deliverables due by the end of demo day (Session 2). Submit via the link in Slack. One submission per team.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 15: LAB INTRO ───
  () => (
    <Shell tag="Lab intro" tagColor="cap" timer="3" title="Lab time — polish sprint and demo rehearsal" subtitle="~50 minutes · Your most important lab of the course" notes="This lab has no new code to write. It's entirely about getting every team to a state they're confident presenting from. TAs should actively circulate — identify teams who are behind and triage aggressively. Demo rehearsals should happen in small groups — two teams rehearse for each other. The goal: every team has run their demo out loud at least once before they leave. | Sources: No external sources needed.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>How to use this lab</p>
          {[
            { n: 1, t: "Run through the polish checklist",       time: "15 min", detail: "Fix the items you haven't done yet — icon, empty states, error messages, back navigation" },
            { n: 2, t: "Rehearse your demo out loud",            time: "15 min", detail: "With your team. Timed. Every team member speaks." },
            { n: 3, t: "Swap and watch another team demo",       time: "10 min", detail: "Give feedback on pacing, what was unclear, what was impressive" },
            { n: 4, t: "Final fixes based on rehearsal feedback", time: "5 min",  detail: "Small adjustments only — no new features" },
            { n: 5, t: "Record a backup screen recording",       time: "5 min",  detail: "30-second walkthrough of your core feature — just in case" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 10, margin: "7px 0", alignItems: "flex-start" }}>
              <span style={{ background: CAP_C, color: "#fff", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{s.n}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 12, color: TEXT, fontWeight: 500 }}>{s.t}</span>
                  <span style={{ fontSize: 11, color: MUTED, flexShrink: 0, marginLeft: 8 }}>{s.time}</span>
                </div>
                <p style={{ fontSize: 11, color: MUTED, margin: "2px 0 0", lineHeight: 1.4 }}>{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ background: CAP_BG, borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: CAP_C, margin: "0 0 6px" }}>✓ Goal before you leave today</p>
            {[
              "App runs without crashing on your demo path",
              "Demo rehearsed out loud at least once",
              "Every team member knows what they're saying",
              "Backup screen recording exists",
            ].map(t => <Bullet key={t} check>{t}</Bullet>)}
          </div>
          <div style={{ background: AMBER_LIGHT, borderRadius: 10, padding: "10px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#633806", margin: "0 0 4px" }}>One rule for today's lab</p>
            <p style={{ fontSize: 11, color: "#633806", margin: 0, lineHeight: 1.5 }}>{"No new features. If you think of something cool to add — write it down for next steps. Today is about polish and confidence, not adding functionality. A stable demo of 3 features beats an unstable demo of 5."}</p>
          </div>
          <div style={{ background: GRAY, borderRadius: 10, padding: "10px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 4px" }}>Need help?</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.7 }}>TAs are here for the whole lab. Crashes, polish questions, rehearsal feedback — ask early.</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── 16: BREAK ───
  () => (
    <div style={{ background: GRAY, border: "1px solid #e5e7eb", borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", textAlign: "center" }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>☕</div>
      <Tag color="teal">5 minute break</Tag>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: TEXT, margin: "16px 0 8px" }}>Take a break</h2>
      <p style={{ fontSize: 15, color: MUTED, margin: "0 0 28px", maxWidth: 400, lineHeight: 1.6 }}>Stretch, grab water. Lab starts in 5 minutes.</p>
      <div style={{ background: CAP_BG, borderRadius: 10, padding: "14px 24px", maxWidth: 440 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: CAP_C, margin: "0 0 6px" }}>While you wait</p>
        <p style={{ fontSize: 12, color: CAP_C, margin: 0, lineHeight: 1.5 }}>Pull up your capstone. Confirm it compiles. Navigate to the screen you plan to start your demo on. Run through the polish checklist in your head.</p>
      </div>
      <Notes>{"Use this time to set up the room for the polish sprint — arrange chairs so teams can rehearse for each other. Note which teams seemed furthest behind during the Q&A and check in with them first when lab starts."}</Notes>
    </div>
  ),

  // ─── 17: WRAP-UP ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>That's all the teaching content.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>Next session is yours — demo day. Go build something you're proud to show.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>What you covered in 10 weeks</p>
            {[
              "Declarative UI — Compose + SwiftUI",
              "Navigation, lists, search",
              "Networking and REST APIs",
              "Local persistence — Room + SwiftData",
              "MVVM architecture",
              "AI coding tools and prompting",
              "Cloud LLM integration + streaming",
              "On-device AI — ML Kit, Gemini Nano, Vision, Apple Intelligence",
              "Git for teams — branching, PRs, code review",
              "Unit testing — JUnit4 + XCTest",
              "App store publishing",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                <span style={{ color: TEAL, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: ".06em" }}>Demo day — tomorrow</p>
            {[
              "6 minutes per team — Connect, Introduce, Pitch, Demo, Next Steps",
              "Q&A for 2 minutes after each team",
              "Live device, screen share, recorded video, or slide deck — your choice",
              "Test your projector connection before your slot",
              "Have a backup screen recording ready",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 6, margin: "5px 0" }}>
                <span style={{ color: AMBER, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 14, background: "rgba(255,255,255,0.12)", borderRadius: 6, padding: "10px 12px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>The only thing left to do</p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.6 }}>Rehearse your demo tonight. Out loud. Timed. You've built something real — now show it confidently.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}>Mobile development in the age of AI · CodePath</p>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "8px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#fff", margin: "0 0 2px" }}>Don't forget</p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>Fill out the session survey ✏️</p>
        </div>
      </div>
      <Notes>{"End with genuine warmth and energy. Students who made it to Week 10 have built something meaningful — acknowledge that. The wrap-up slide lists everything they covered in 10 weeks — let it land. Tomorrow is their moment."}</Notes>
    </div>
  ),

];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 10 · Session 1 · {slides.length} slides</p>
          <p style={{ fontSize: 14, fontWeight: 500, color: TEXT, margin: 0 }}>Ship it — App store publishing · Polish · Demo prep</p>
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
