import { useState } from "react";

const TABS = ["Overview", "Lab", "Resources"];
const PLATFORMS = ["Android", "iOS"];

const P_C = "#534AB7";
const AM = "#633806",
  AML = "#FAEEDA";
const BL = "#7F52FF",
  BLL = "#F0EEFF";
const GR = "#F05138",
  GRL = "#FFF2F0";

function Section({ title, children, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div
      style={{
        margin: "14px 0",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 14px",
          background: "var(--color-background-secondary)",
          border: "none",
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 500,
          color: "var(--color-text-primary)",
        }}
      >
        {title}
        <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>
          {open ? "▲" : "▼"}
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: "12px 14px",
            fontSize: 13,
            lineHeight: 1.7,
            color: "var(--color-text-primary)",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function CodeB({ title, accent, children }) {
  return (
    <div style={{ margin: "10px 0" }}>
      {title && (
        <div
          style={{
            background: accent || P_C,
            color: "#fff",
            fontSize: 11,
            fontWeight: 600,
            padding: "4px 12px",
            borderRadius: "8px 8px 0 0",
          }}
        >
          {title}
        </div>
      )}
      <pre
        style={{
          margin: 0,
          background: "#1e1e2e",
          color: "#cdd6f4",
          fontSize: 11.5,
          padding: "12px 14px",
          borderRadius: title ? "0 0 8px 8px" : 8,
          lineHeight: 1.7,
          overflowX: "auto",
          whiteSpace: "pre-wrap",
          fontFamily: "monospace",
        }}
      >
        {children}
      </pre>
    </div>
  );
}

function AiOpp({ children }) {
  return (
    <div
      className="callout-ai"
      style={{
        margin: "14px 0",
        padding: "10px 14px",
        background: "#F9F0FF",
        borderRadius: 8,
        fontSize: 13,
        lineHeight: 1.6,
      }}
    >
      <div
        style={{
          fontWeight: 600,
          fontSize: 14,
          marginBottom: 4,
          textAlign: "center",
        }}
      >
        ✨ AI Opportunity
      </div>
      {children}
    </div>
  );
}

function Tip({ children }) {
  return (
    <div
      style={{
        margin: "12px 0",
        padding: "10px 14px",
        background: "var(--color-background-secondary)",
        borderRadius: 8,
        fontSize: 13,
        lineHeight: 1.6,
        borderLeft: "3px solid #534AB7",
      }}
    >
      💡 {children}
    </div>
  );
}

function Link({ children }) {
  return (
    <span
      style={{ color: P_C, textDecoration: "underline", cursor: "pointer" }}
    >
      {children}
    </span>
  );
}

function IC({ children }) {
  return (
    <code
      style={{
        background: "var(--color-background-secondary)",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: 4,
        padding: "1px 5px",
        fontSize: 12,
      }}
    >
      {children}
    </code>
  );
}

function VStep({
  num,
  title,
  children,
  last,
}: {
  num: any;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div style={{ display: "flex", gap: 12, margin: "16px 0" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "var(--platform-accent, #534AB7)",
            color: "#fff",
            fontSize: 12,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          {num}
        </div>
        {!last && (
          <div
            style={{
              width: 2,
              flex: 1,
              minHeight: 20,
              background: "var(--color-border-tertiary)",
              margin: "3px 0",
            }}
          />
        )}
      </div>
      <div style={{ paddingBottom: last ? 8 : 24, flex: 1, minWidth: 0 }}>
        <h4
          style={{
            fontSize: 15,
            fontWeight: 600,
            margin: "3px 0 8px",
            color: "var(--color-text-primary)",
          }}
        >
          {title}
        </h4>
        <div>{children}</div>
      </div>
    </div>
  );
}

function Checkpoint({
  num,
  children,
}: {
  num?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="callout-checkpoint"
      style={{
        margin: "14px 0",
        padding: "10px 14px",
        background: "#E8FCE8",
        borderRadius: 8,
        fontSize: 13,
        lineHeight: 1.6,
      }}
    >
      <strong>🎯 Checkpoint {num ? num + ":" : ""}</strong> {children}
    </div>
  );
}

function PlatformToggle({ platform, setPlatform }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 0,
        margin: "12px 0",
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid var(--color-border-tertiary)",
        width: "fit-content",
      }}
    >
      {PLATFORMS.map(function (p) {
        var isA = p === "Android";
        var active = platform === p;
        return (
          <button
            key={p}
            onClick={function () {
              setPlatform(p);
            }}
            style={{
              padding: "6px 18px",
              fontSize: 12,
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              background: active
                ? isA
                  ? BLL
                  : GRL
                : "var(--color-background-primary)",
              color: active ? (isA ? BL : GR) : "var(--color-text-secondary)",
            }}
          >
            {isA ? "🤖 Android" : "🍎 iOS"}
          </button>
        );
      })}
    </div>
  );
}

/* ====== OVERVIEW ====== */
function Overview({ platform, setPlatform }) {
  var isAndroid = platform === "Android";
  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>
        Bonus: App Performance
      </h2>

      <p
        style={{
          fontSize: 13,
          color: "var(--color-text-secondary)",
          lineHeight: 1.7,
          margin: "0 0 16px",
        }}
      >
        Self-paced introduction to mobile app performance. You{"'"}ll learn
        to find jank, detect memory leaks, and identify threading problems
        using your IDE{"'"}s built-in profiling tools — then use Claude to
        scan your own code for issues.
      </p>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 10px" }}>What this unit covers:</p>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>
            The three mobile performance problems: jank, memory leaks, and
            battery drain
          </li>
          <li>
            {isAndroid
              ? "Android Studio Profiler — CPU, Memory, and Energy tabs"
              : "Xcode Instruments — Time Profiler, Leaks, and Allocations"}
          </li>
          <li>
            {isAndroid
              ? "LeakCanary and Android Studio's built-in memory leak detection"
              : "Instruments Leaks template and Xcode Memory Graph"}
          </li>
          <li>
            Common causes of memory leaks on{" "}
            {isAndroid ? "Android" : "iOS"} and how to fix them
          </li>
          <li>
            Using Claude to scan your codebase for performance issues,
            threading mistakes, and memory retention patterns
          </li>
        </ul>
      </div>

      <div
        style={{
          marginTop: 16,
          padding: "12px 14px",
          background: "var(--color-background-secondary)",
          borderRadius: 10,
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        <strong>{"📦 This unit at a glance"}</strong>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            marginTop: 10,
          }}
        >
          {[
            {
              label: "Lab",
              val: "Hunt down jank and a memory leak in a buggy starter app using profiling tools and Claude. ~30 minutes.",
            },
            {
              label: "Format",
              val: "Self-paced bonus content. Work through the lab at your own pace — no submission required.",
            },
            {
              label: "Prereqs",
              val: "Comfort with ViewModels and coroutines/async. Helpful: a project of your own to apply these tools to.",
            },
            {
              label: "Tools",
              val: isAndroid
                ? "Android Studio Profiler, LeakCanary."
                : "Xcode Instruments (Time Profiler), Memory Graph Debugger.",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "var(--color-background-primary)",
                border: "0.5px solid var(--color-border-tertiary)",
                borderRadius: 8,
                padding: "10px 12px",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "var(--color-text-tertiary)",
                  margin: "0 0 4px",
                  textTransform: "uppercase",
                  letterSpacing: ".04em",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--color-text-secondary)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {item.val}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ====== LAB ====== */
function Lab({ platform, setPlatform }) {
  var isAndroid = platform === "Android";
  return (
    <div
      style={
        {
          "--platform-accent": platform === "Android" ? BL : GR,
        } as React.CSSProperties
      }
    >
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>
        Lab: Profiling & App Performance
      </h2>
      <p
        style={{
          fontSize: 13,
          color: "var(--color-text-secondary)",
          margin: "0 0 12px",
        }}
      >
        In this lab, you{"'"}ll hunt down performance bottlenecks in an
        intentionally buggy starter app. You{"'"}ll learn to use IDE profilers
        to find jank, use memory tools to detect leaks, and use Claude to
        resolve them. Budget about 30 minutes.
      </p>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div
        style={{
          background: AML,
          border: "1px solid #FAC775",
          borderRadius: 8,
          padding: "12px 16px",
          margin: "12px 0",
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: AM,
            margin: "0 0 4px",
          }}
        >
          The Three Mobile Performance Problems
        </p>
        <p style={{ fontSize: 13, color: AM, margin: 0, lineHeight: 1.6 }}>
          <strong>🎞️ Jank (Dropped frames):</strong> Usually caused by blocking
          the main thread (heavy processing or network).
          <br />
          <strong>🧠 Memory leaks:</strong> Objects that should be
          garbage-collected are kept alive by lingering references.
          <br />
          <strong>🔋 Battery drain:</strong> Doing unnecessary CPU/network work
          when the app is backgrounded.
        </p>
      </div>

      <VStep num={1} title="Reproduce the Jank (~5 min)">
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            Run the starter app. It contains a screen that fetches and processes
            a large list of images.
          </p>
          <p>
            Tap the <strong>"Load Heavy Data"</strong> button and immediately
            try to scroll the screen or tap other buttons.
          </p>
          <Checkpoint num={1}>
            The app freezes completely for a few seconds. This is classic
            main-thread "jank."
          </Checkpoint>
        </div>
      </VStep>

      <VStep num={2} title="Measure the CPU blockage (~5 min)">
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            You can{"'"}t fix what you can{"'"}t measure. Let{"'"}s see exactly
            what{"'"}s blocking the thread using the built-in IDE profilers.
          </p>
          {isAndroid ? (
            <VStep num="a" title="Use the Android Studio CPU Profiler" last>
              <p>
                While the app is running on your device/emulator, go to{" "}
                <strong>View → Tool Windows → Profiler</strong>.
              </p>
              <p>
                Click on the <strong>CPU</strong> timeline to start a recording.
                Inside your app, tap the <strong>"Load Heavy Data"</strong>{" "}
                button again. Once the freeze is over, click{" "}
                <strong>Stop</strong> in the profiler.
              </p>
              <p>
                Look at the orange "main" thread row. You will see a massive
                block of time where a single function is running, confirming
                that we are blocking the UI.
              </p>
            </VStep>
          ) : (
            <VStep num="a" title="Use Xcode Instruments (Time Profiler)" last>
              <p>
                In Xcode, go to <strong>Product → Profile (⌘I)</strong>. This
                will build your app and open Instruments.
              </p>
              <p>
                Select the <strong>Time Profiler</strong> template. Click the
                red Record button. Inside your app, tap the{" "}
                <strong>"Load Heavy Data"</strong> button again.
              </p>
              <p>
                Once the freeze is over, pause the recording. Look at the Main
                Thread track — you will see a huge spike in CPU usage. Highlight
                that region and look at the call tree to find the offending
                function.
              </p>
            </VStep>
          )}
        </div>
      </VStep>

      <VStep num={3} title="Hunt for Memory Leaks (~10 min)">
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            Now let{"'"}s find the hidden memory leak. This happens when an
            object (like a View or ViewModel) is kept alive in memory by a
            lingering reference even after you navigate away from the screen.
          </p>

          {isAndroid ? (
            <VStep num="a" title="Install LeakCanary" last>
              <p>
                LeakCanary is the industry standard tool for finding memory
                leaks in Android. It automatically watches your Activities and
                ViewModels and sends a notification when it detects a leak.
              </p>
              <CodeB
                title="build.gradle.kts (app) — debug only"
                accent={BL}
              >{`dependencies {
    // Only included in debug builds — never ships to users
    debugImplementation("com.squareup.leakcanary:leakcanary-android:2.12")
}`}</CodeB>
              <p>
                Sync your Gradle files, rebuild, and run the app. Navigate into
                the "Heavy Data" screen, then press the back button to destroy
                the screen.
              </p>
              <p>
                Wait a few seconds. A yellow LeakCanary notification will pop up
                on your device indicating a leak. Tap it to see the leak trace.
              </p>
              <div
                style={{
                  background: "#1e1e2e",
                  borderRadius: 8,
                  padding: "12px 14px",
                  margin: "8px 0",
                  fontSize: 12,
                  fontFamily: "monospace",
                  color: "#cdd6f4",
                  lineHeight: 1.7,
                }}
              >
                {"┬───\n"}
                {"│ GC Root: Local variable in native code\n"}
                {"│\n"}
                {"├─ com.example.app.ui.HeavyListScreen instance\n"}
                {"│    Leaking: YES (Activity is destroyed)\n"}
                {"│    ↓ HeavyListScreen.viewModel\n"}
                {"│\n"}
                {"╰→ com.example.app.network.NetworkCallback\n"}
                {"     Leaking: YES (held by destroyed Activity)"}
              </div>
              <p>
                <strong>How to read this trace:</strong> Read it bottom-up. The
                last line is the leaked object. The arrows show the chain of
                references keeping it alive. This proves our listener is holding
                a strong reference to the destroyed screen!
              </p>
            </VStep>
          ) : (
            <VStep num="a" title="Use the Memory Graph Debugger" last>
              <p>
                iOS memory leaks usually come from{" "}
                <strong>strong reference cycles</strong> — two objects each
                holding a strong reference to the other, meaning ARC (Automatic
                Reference Counting) can never deallocate them.
              </p>
              <p>
                Run the app. Navigate into the "Heavy Data" screen, then press
                the back button to destroy the screen.
              </p>
              <p>
                While the app is running in Xcode, click the{" "}
                <strong>Memory Graph button</strong> (the icon with three
                overlapping circles) in the Debug navigator toolbar at the
                bottom.
              </p>
              <p>
                Xcode will pause the app and show a visual graph of all live
                objects. Look for <strong>purple warning triangles</strong> in
                the left sidebar — these indicate detected retain cycles.
              </p>
              <p>
                Click the warning to see the cycle. You will see that the{" "}
                <IC>HeavyViewModel</IC> and a closure/listener are keeping each
                other alive!
              </p>
            </VStep>
          )}
        </div>
      </VStep>

      <VStep num={4} title="Fix with Claude (~5 min)">
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            Now that we have hard proof of the jank and the leak, let{"'"}s use
            AI to apply the correct technical fix.
          </p>

          <VStep num="a" title="Scan for performance issues">
            <p>
              Open the{" "}
              <IC>
                {isAndroid ? "HeavyViewModel.kt" : "HeavyViewModel.swift"}
              </IC>{" "}
              starter file.
            </p>
            <AiOpp>
              <strong>
                Paste the file AND the leak trace (or Xcode warning) into Claude
              </strong>{" "}
              and use this prompt:
              <br />
              <br />
              <strong>
                "Here is my ViewModel. The profiler shows it is blocking the
                main thread, and{" "}
                {isAndroid ? "LeakCanary" : "the Memory Graph Debugger"} found a
                memory leak here. Look specifically for: work that should be on
                a background dispatcher/actor but isn{"'"}t, and any closures or
                references that could cause memory leaks. Tell me what{"'"}s
                wrong and provide the fixed code."
              </strong>
            </AiOpp>
          </VStep>

          <VStep num="b" title="Apply the fixes" last>
            <p>Claude should point out two things:</p>
            <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
              <li>
                The heavy data parsing is happening synchronously on the main
                thread.
              </li>
              <li>
                {isAndroid
                  ? "There's a listener holding a strong reference to the Activity/Context, causing a memory leak."
                  : "There's a closure capturing 'self' strongly, creating a retain cycle."}
              </li>
            </ol>
            <p>Apply Claude{"'"}s fixed code to your ViewModel.</p>
            <Section title="✅ Check your work — show me what the fixed ViewModel should look like">
              {isAndroid ? (
                <CodeB
                  title="Kotlin — HeavyViewModel.kt (Fixed)"
                  accent={BL}
                >{`// ✅ Fixed: Run heavy work on Dispatchers.IO
fun loadHeavyData() {
    viewModelScope.launch {
        _uiState.value = UiState.Loading
        val result = withContext(Dispatchers.IO) {
            repository.parseMassiveJsonPayload()
        }
        _uiState.value = UiState.Success(result)
    }
}

// ✅ Fixed: Removed the static/long-lived Context reference
// ViewModels should NEVER hold a reference to an Activity or View!`}</CodeB>
              ) : (
                <CodeB
                  title="Swift — HeavyViewModel.swift (Fixed)"
                  accent={GR}
                >{`// ✅ Fixed: Run heavy work on a background detached Task
func loadHeavyData() async {
    uiState = .loading
    let result = await Task.detached(priority: .userInitiated) {
        return self.repository.parseMassiveJsonPayload()
    }.value

    uiState = .success(result)
}

// ✅ Fixed: Weak capture to prevent retain cycles
func startListening() {
    repository.listenForUpdates { [weak self] newData in
        self?.uiState = .success(newData)
    }
}`}</CodeB>
              )}
            </Section>
          </VStep>

          <Checkpoint num={2}>
            Run the app again. Tapping "Load Heavy Data" now shows a loading
            spinner, the UI remains completely responsive, and rotating/exiting
            the screen no longer triggers a memory leak warning.
          </Checkpoint>
        </div>
      </VStep>

      <VStep num={5} title="Apply it to your own project (optional)" last>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            If you have a project of your own, point these tools at it next.
            The fastest way to find low-hanging perf wins is to profile a
            screen you already know feels slow.
          </p>
          <Tip>
            If one of your app{"'"}s screens feels slow, run it through the
            Profiler or paste your most complex ViewModel into Claude using the
            AI scan prompt from Step 4!
          </Tip>
        </div>
      </VStep>

      <Section title="📚 Reference: The Most Common Memory Leaks">
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p>
            Review these common anti-patterns if you suspect a memory leak in
            an app you{"'"}re working on:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
            {(isAndroid
              ? [
                  {
                    title: "Static references to Context or View",
                    fix: "Never store an Activity or View in a static field or singleton. Use ApplicationContext if you need a long-lived context.",
                  },
                  {
                    title: "Anonymous listeners not unregistered",
                    fix: "Any listener/callback that holds a reference to a View or Activity must be unregistered in onStop or onDestroy. Use lifecycle-aware alternatives where possible.",
                  },
                  {
                    title: "Coroutines launched in GlobalScope",
                    fix: "GlobalScope coroutines live for the entire process lifetime. Always use viewModelScope (in ViewModel) or lifecycleScope (in Activity/Fragment).",
                  },
                  {
                    title: "Inner classes holding outer class references",
                    fix: "Non-static inner classes implicitly hold a reference to the outer class. Make them static, or use a WeakReference, or extract them.",
                  },
                ]
              : [
                  {
                    title: "Strong self in closures",
                    fix: "Closures capture self strongly by default. Use [weak self] in the capture list: { [weak self] in guard let self = self else { return } }",
                  },
                  {
                    title: "Delegate properties not declared weak",
                    fix: "Delegate protocols should always be declared with weak: weak var delegate: MyDelegate?. If the delegate is a class type and not weak, it creates a retain cycle.",
                  },
                  {
                    title: "Timer not invalidated",
                    fix: "Timer holds a strong reference to its target. Always call timer.invalidate() when the owning view disappears, or use a weak target wrapper.",
                  },
                  {
                    title: "NotificationCenter observer not removed",
                    fix: "If you use the addObserver API (not the closure API), you must call removeObserver in deinit. The closure API with [weak self] is safer.",
                  },
                ]
            ).map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--color-background-secondary)",
                  border: "0.5px solid var(--color-border-tertiary)",
                  borderRadius: 8,
                  padding: "10px 12px",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    margin: "0 0 4px",
                  }}
                >
                  🚨 {item.title}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--color-text-secondary)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  <strong>Fix:</strong> {item.fix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="📚 Reference: Common Threading Fixes">
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
            {(isAndroid
              ? [
                  {
                    problem: "Main Thread Blockage",
                    bad: "val result = repo.fetch() // blocks UI!",
                    good: "withContext(Dispatchers.IO) { repo.fetch() }",
                  },
                  {
                    problem: "Eager Rendering of Long Lists",
                    bad: "Column { items.forEach { ... } } // slow!",
                    good: "LazyColumn { items(...) { ... } }",
                  },
                ]
              : [
                  {
                    problem: "Main Actor Blockage",
                    bad: "let data = try! Data(...) // blocks UI!",
                    good: "await Task.detached { ... }",
                  },
                  {
                    problem: "Eager Rendering of Long Lists",
                    bad: "ScrollView { ForEach(...) { ... } }",
                    good: "List { ... } or LazyVStack { ... }",
                  },
                ]
            ).map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "8px",
                  background: "var(--color-background-secondary)",
                  borderRadius: 6,
                  border: "0.5px solid var(--color-border-tertiary)",
                }}
              >
                <strong>🚨 {item.problem}</strong>
                <pre
                  style={{
                    margin: "4px 0",
                    background: "#1e1e2e",
                    color: "#f38ba8",
                    padding: "6px",
                    fontSize: 11,
                    borderRadius: 4,
                  }}
                >
                  ❌ {item.bad}
                </pre>
                <pre
                  style={{
                    margin: 0,
                    background: "#1e1e2e",
                    color: "#a6e3a1",
                    padding: "6px",
                    fontSize: 11,
                    borderRadius: 4,
                  }}
                >
                  ✅ {item.good}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

/* ====== RESOURCES TAB ====== */
function ResourcesTab({ platform, setPlatform }) {
  var isAndroid = platform === "Android";
  return (
    <div>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      <div style={{ fontSize: 13, lineHeight: 1.8 }}>
        <p>Helpful links for this unit.</p>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>
          📹 Recordings
        </h4>
        <ul style={{ paddingLeft: 20 }}>
          <li>
            <Link>Weekly Video Playlist</Link>
          </li>
          <li>
            <Link>Office Hours Video Playlist</Link>
          </li>
        </ul>

        {isAndroid ? (
          <>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>
              ⚡ Performance — Android
            </h4>
            <ul style={{ paddingLeft: 20 }}>
              <li>
                <a
                  href="https://developer.android.com/studio/profile"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Android Studio Profiler overview
                </a>
              </li>
              <li>
                <a
                  href="https://developer.android.com/studio/profile/memory-profiler"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Memory Profiler — capture heap dumps and track leaks
                </a>
              </li>
              <li>
                <a
                  href="https://square.github.io/leakcanary/"
                  style={{ color: "var(--color-text-info)" }}
                >
                  LeakCanary — automatic memory leak detection
                </a>
              </li>
              <li>
                <a
                  href="https://developer.android.com/topic/performance/vitals/render"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Slow rendering — how to find and fix jank
                </a>
              </li>
              <li>
                <a
                  href="https://developer.android.com/kotlin/coroutines/coroutines-best-practices"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Coroutines best practices — threading and cancellation
                </a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>
              ⚡ Performance — iOS
            </h4>
            <ul style={{ paddingLeft: 20 }}>
              <li>
                <a
                  href="https://developer.apple.com/documentation/xcode/improving-your-app-s-performance"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Improving your app{"'"}s performance — Apple guide
                </a>
              </li>
              <li>
                <a
                  href="https://developer.apple.com/documentation/xcode/gathering-information-about-memory-use"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Gathering information about memory use — Instruments
                </a>
              </li>
              <li>
                <a
                  href="https://developer.apple.com/documentation/xcode/diagnosing-memory-thread-and-crash-issues-early"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Memory Graph Debugger — Xcode
                </a>
              </li>
              <li>
                <a
                  href="https://developer.apple.com/documentation/swift/maintaining-a-stable-identity"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Avoiding retain cycles in Swift — closures and [weak self]
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

/* ====== MAIN ====== */
export default function PerformanceUnit() {
  var tabState = useState("Overview");
  var tab = tabState[0];
  var setTab = tabState[1];
  var platState = useState("Android");
  var platform = platState[0];
  var setPlatform = platState[1];

  return (
    <div
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "16px 0",
        fontFamily: "var(--font-sans, system-ui, sans-serif)",
      }}
    >
      <div style={{ marginBottom: 8 }}>
        <div
          style={{
            fontSize: 12,
            color: "var(--color-text-tertiary)",
            fontWeight: 500,
            marginBottom: 2,
          }}
        >
          MOBILE DEVELOPMENT IN THE AGE OF AI
        </div>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>
          {"CodePath · Bonus async unit"}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 0,
          borderBottom: "1px solid var(--color-border-tertiary)",
          marginBottom: 16,
          overflowX: "auto",
        }}
      >
        {TABS.map(function (t) {
          return (
            <button
              key={t}
              onClick={function () {
                setTab(t);
              }}
              style={{
                padding: "8px 14px",
                fontSize: 13,
                background: "none",
                cursor: "pointer",
                borderWidth: "0 0 2px 0",
                borderStyle: "solid",
                borderColor: tab === t ? P_C : "transparent",
                color: tab === t ? P_C : "var(--color-text-secondary)",
                fontWeight: tab === t ? 500 : 400,
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </button>
          );
        })}
      </div>
      {tab === "Overview" && (
        <Overview platform={platform} setPlatform={setPlatform} />
      )}
      {tab === "Lab" && (
        <Lab platform={platform} setPlatform={setPlatform} />
      )}
      {tab === "Resources" && (
        <ResourcesTab platform={platform} setPlatform={setPlatform} />
      )}
    </div>
  );
}
