import { useState } from "react";

const TABS = ["Overview", "Lab", "Capstone", "Resources"];
const PLATFORMS = ["Android", "iOS"];

const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const AM = "#633806", AML = "#FAEEDA";
const BL = "#7F52FF", BLL = "#F0EEFF";
const GR = "#F05138", GRL = "#FFF2F0";
const CAP_C = "#993C1D", CAP_BG = "#FAECE7";

function Section({ title, children, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div style={{ margin: "14px 0", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--color-background-secondary)", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>
        {title}<span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && <div style={{ padding: "12px 14px", fontSize: 13, lineHeight: 1.7, color: "var(--color-text-primary)" }}>{children}</div>}
    </div>
  );
}

function CodeB({ title, accent, children }) {
  return (
    <div style={{ margin: "10px 0" }}>
      {title && <div style={{ background: accent || P_C, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0" }}>{title}</div>}
      <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11.5, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
    </div>
  );
}

function AiOpp({ children }) {
  return (
    <div className="callout-ai" style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>✨ AI Opportunity</div>
      {children}
    </div>
  );
}

function Warn({ children }) {
  return (
    <div className="callout-warn" style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E6", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #EF9F27" }}>
      ⚠️ {children}
    </div>
  );
}

function Tip({ children }) {
  return (
    <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>
      💡 {children}
    </div>
  );
}

function Link({ children }) {
  return <span style={{ color: P_C, textDecoration: "underline", cursor: "pointer" }}>{children}</span>;
}

function IC({ children }) {
  return <code style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 4, padding: "1px 5px", fontSize: 12 }}>{children}</code>;
}

function PlatformToggle({ platform, setPlatform }) {
  return (
    <div style={{ display: "flex", gap: 0, margin: "12px 0", borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
      {PLATFORMS.map(function(p) {
        var isA = p === "Android";
        var active = platform === p;
        return (
          <button key={p} onClick={function() { setPlatform(p); }} style={{
            padding: "6px 18px", fontSize: 12, fontWeight: 500, border: "none", cursor: "pointer",
            background: active ? (isA ? BLL : GRL) : "var(--color-background-primary)",
            color: active ? (isA ? BL : GR) : "var(--color-text-secondary)"
          }}>{isA ? "🤖 Android" : "🍎 iOS"}</button>
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
      <div className="callout-checkpoint" style={{ background: "#E8FCE8", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 12 }}>
        Don{"'"}t forget to fill out the ✏️ <Link>Session Survey</Link> at the end of each class session!
      </div>
      <div style={{ background: CAP_BG, padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 16, color: CAP_C }}>
        🏗️ <strong>REMINDER:</strong> <Link>Capstone M4</Link> (feature-complete build) is due by the end of Session 2 this week.
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>Unit 9: Testing &amp; App Performance</h2>

      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
        Two focused sessions this week. Session 1 introduces unit testing — a professional skill that makes your code more reliable and easier to change. Session 2 covers app performance: how to find jank, memory leaks, and battery drain in your own apps using profiling tools and AI-assisted code scanning. Lab time both sessions is dedicated capstone work.
      </p>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 10px" }}>This week we{"'"}ll cover:</p>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>
            {isAndroid
              ? "JUnit4 + test doubles — unit testing a ViewModel in isolation"
              : "XCTest — unit testing a ViewModel in isolation"
            }
          </li>
          <li>What makes code testable, and how MVVM sets you up for it</li>
          <li>The three mobile performance problems: jank, memory leaks, and battery drain</li>
          <li>
            {isAndroid
              ? "Android Studio Profiler — CPU, Memory, and Energy tabs"
              : "Xcode Instruments — Time Profiler, Leaks, and Allocations"
            }
          </li>
          <li>
            {isAndroid
              ? "LeakCanary and Android Studio's built-in memory leak detection"
              : "Instruments Leaks template and Xcode Memory Graph"
            }
          </li>
          <li>Using AI to scan your codebase for performance issues, threading mistakes, and memory retention patterns</li>
        </ul>
      </div>

      <div style={{ marginTop: 20, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>Session Info</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>📅 See your cohort{"'"}s schedule for session times</li>
          <li>↗ <Link>Session Zoom Link</Link> | Passcode: <strong>codepath</strong></li>
          <li>📊 <Link>Link to Slides</Link></li>
        </ul>
        <strong style={{ display: "block", marginTop: 10 }}>Upcoming Due Dates</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>🏗️ <Link>Capstone M4</Link> — feature-complete build, due end of Session 2</li>
          <li>📬 <Link>Week 9 pre-work</Link> — Git branching concepts (30 min), due before Session 1</li>
        </ul>
      </div>

      <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"📦 This unit at a glance"}</strong>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
          {[
            { label: "Session 1", val: "Introduction to unit testing. Lab: write tests for a starter ViewModel using fakes, find edge cases with Claude." },
            { label: "Session 2", val: "App performance — profiling, memory leak detection, and using AI to scan your codebase for issues. Lab: capstone build time." },
            { label: "Capstone M4", val: "Feature-complete build. All core screens working, data persists, at least one stretch feature. Due end of Session 2." },
            { label: "No standalone assignment", val: "M4 is the deliverable this week. Lab time both sessions goes toward capstone progress." },
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

/* ====== LAB SESSION 1 ====== */
function LabSession1({ platform }) {
  var isAndroid = platform === "Android";
  return (
    <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Session 1 Lab: Writing Unit Tests for a ViewModel</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
        Write unit tests for a shared starter ViewModel. Use fakes to isolate dependencies from real network calls. Budget about 50–60 minutes.
      </p>

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <strong>🎯 Goals</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
          <li>Understand what a unit test is and why it matters</li>
          <li>Write tests that cover Loading, Success, and Error state transitions</li>
          <li>Use a fake/stub to replace real API calls with predictable test doubles</li>
          <li>Use Claude to find edge cases you hadn{"'"}t considered</li>
          <li>Debug a failing test and read an assertion error</li>
        </ul>
      </div>

      <div style={{ background: AML, border: "1px solid #FAC775", borderRadius: 8, padding: "12px 16px", margin: "12px 0" }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: AM, margin: "0 0 4px" }}>Why test a ViewModel specifically?</p>
        <p style={{ fontSize: 13, color: AM, margin: 0, lineHeight: 1.6 }}>
          The ViewModel is the most testable layer in MVVM — it has no UI code and no Android/iOS framework dependencies (if you wrote it right in Week 6). That means you can run tests on the JVM or in Swift without a simulator. If your ViewModel is hard to test, it{"'"}s a signal the architecture needs work.
        </p>
      </div>

      {/* Step 0 */}
      <div style={{ margin: "18px 0" }}>
        <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--platform-accent, var(--color-text-primary))", margin: "0 0 8px" }}>Step 0: The starter ViewModel (~5 min)</h4>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>You{"'"}re given a simple ViewModel that loads a list of items. Your job: write tests that verify each UI state transition. The interface it depends on is <IC>ItemRepository</IC> — you{"'"}ll replace that with a fake.</p>
          {isAndroid ? (
            <CodeB title="Kotlin — ItemViewModel.kt (starter)" accent={BL}>{`sealed interface ItemUiState {
    object Loading : ItemUiState
    data class Success(val items: List<String>) : ItemUiState
    data class Error(val message: String) : ItemUiState
}

interface ItemRepository {
    suspend fun getItems(): List<String>
}

class ItemViewModel(
    private val repo: ItemRepository
) : ViewModel() {
    private val _uiState =
        MutableStateFlow<ItemUiState>(ItemUiState.Loading)
    val uiState: StateFlow<ItemUiState> = _uiState

    fun loadItems() {
        _uiState.value = ItemUiState.Loading
        viewModelScope.launch {
            try {
                val items = repo.getItems()
                _uiState.value = ItemUiState.Success(items)
            } catch (e: Exception) {
                _uiState.value = ItemUiState.Error(
                    e.message ?: "Unknown error"
                )
            }
        }
    }
}`}</CodeB>
          ) : (
            <CodeB title="Swift — ItemViewModel.swift (starter)" accent={GR}>{`enum ItemUiState {
    case loading
    case success([String])
    case error(String)
}

protocol ItemRepository {
    func getItems() async throws -> [String]
}

@MainActor
class ItemViewModel: ObservableObject {
    @Published var uiState: ItemUiState = .loading
    private let repo: ItemRepository

    init(repo: ItemRepository) {
        self.repo = repo
    }

    func loadItems() async {
        uiState = .loading
        do {
            let items = try await repo.getItems()
            uiState = .success(items)
        } catch {
            uiState = .error(error.localizedDescription)
        }
    }
}`}</CodeB>
          )}
        </div>
      </div>

      {/* Step 1 */}
      <div style={{ margin: "18px 0" }}>
        <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 1: Create a fake repository (~8 min)</h4>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>A fake replaces the real network call with a version you control. You can make it return success, return an empty list, or throw an error — whatever the test needs.</p>
          {isAndroid ? (
            <CodeB title="Kotlin — FakeItemRepository.kt" accent={BL}>{`class FakeItemRepository : ItemRepository {
    // Configure these before each test
    var shouldThrow = false
    var itemsToReturn = listOf("Item A", "Item B", "Item C")

    override suspend fun getItems(): List<String> {
        if (shouldThrow) throw IOException("Simulated network error")
        return itemsToReturn
    }
}`}</CodeB>
          ) : (
            <CodeB title="Swift — MockItemRepository.swift" accent={GR}>{`class MockItemRepository: ItemRepository {
    // Configure these before each test
    var shouldThrow = false
    var itemsToReturn = ["Item A", "Item B", "Item C"]

    func getItems() async throws -> [String] {
        if shouldThrow {
            throw URLError(.notConnectedToInternet)
        }
        return itemsToReturn
    }
}`}</CodeB>
          )}
          <div className="callout-checkpoint" style={{ margin: "14px 0", padding: "10px 14px", background: "#E8FCE8", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
            <strong>🎯 Checkpoint 1:</strong> Fake compiles with no errors. It conforms to the same <IC>ItemRepository</IC> interface as the real implementation.
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div style={{ margin: "18px 0" }}>
        <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 2: Write the tests (~20 min)</h4>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>Write at least three tests: success, error, and initial loading state.</p>
          {isAndroid ? (
            <>
              <Tip>Add these dependencies to your test build.gradle if not already present: <IC>{"kotlinx-coroutines-test"}</IC> for <IC>runTest</IC> and <IC>advanceUntilIdle</IC>.</Tip>
              <CodeB title="Kotlin — ItemViewModelTest.kt" accent={BL}>{`@ExperimentalCoroutinesApi
class ItemViewModelTest {

    // Swap the coroutine dispatcher so tests run synchronously
    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()

    @Test
    fun \`loadItems — emits Loading then Success\`() = runTest {
        val repo = FakeItemRepository()
        val vm = ItemViewModel(repo)

        vm.loadItems()
        advanceUntilIdle()  // let all coroutines finish

        val state = vm.uiState.value
        assertTrue(state is ItemUiState.Success)
        assertEquals(3, (state as ItemUiState.Success).items.size)
    }

    @Test
    fun \`loadItems — emits Error when repo throws\`() = runTest {
        val repo = FakeItemRepository()
            .also { it.shouldThrow = true }
        val vm = ItemViewModel(repo)

        vm.loadItems()
        advanceUntilIdle()

        val state = vm.uiState.value
        assertTrue(state is ItemUiState.Error)
        assertTrue(
            (state as ItemUiState.Error).message.isNotBlank()
        )
    }

    @Test
    fun \`initial state — is Loading\`() {
        val vm = ItemViewModel(FakeItemRepository())
        assertTrue(vm.uiState.value is ItemUiState.Loading)
    }
}`}</CodeB>
              <CodeB title="Kotlin — MainDispatcherRule.kt (boilerplate)" accent={BL}>{`// Put this in your test source set — used by all ViewModel tests
class MainDispatcherRule(
    private val dispatcher: TestCoroutineDispatcher =
        TestCoroutineDispatcher()
) : TestWatcher() {
    override fun starting(description: Description) {
        Dispatchers.setMain(dispatcher)
    }
    override fun finished(description: Description) {
        Dispatchers.resetMain()
        dispatcher.cleanupTestCoroutines()
    }
}`}</CodeB>
            </>
          ) : (
            <CodeB title="Swift — ItemViewModelTests.swift" accent={GR}>{`import XCTest
@testable import YourAppName

@MainActor
final class ItemViewModelTests: XCTestCase {

    func testLoadItems_success() async {
        let mock = MockItemRepository()
        let vm = ItemViewModel(repo: mock)

        await vm.loadItems()

        if case .success(let items) = vm.uiState {
            XCTAssertEqual(items.count, 3)
        } else {
            XCTFail("Expected .success, got \\(vm.uiState)")
        }
    }

    func testLoadItems_error() async {
        let mock = MockItemRepository()
        mock.shouldThrow = true
        let vm = ItemViewModel(repo: mock)

        await vm.loadItems()

        if case .error(let msg) = vm.uiState {
            XCTAssertFalse(msg.isEmpty)
        } else {
            XCTFail("Expected .error, got \\(vm.uiState)")
        }
    }

    func testInitialState_isLoading() {
        let vm = ItemViewModel(repo: MockItemRepository())
        if case .loading = vm.uiState { /* pass */ }
        else { XCTFail("Expected .loading") }
    }
}`}</CodeB>
          )}
          <div className="callout-checkpoint" style={{ margin: "14px 0", padding: "10px 14px", background: "#E8FCE8", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
            <strong>🎯 Checkpoint 2:</strong> All three tests pass. Intentionally break one assertion — change an <IC>assertEquals(3, ...)</IC> to <IC>assertEquals(99, ...)</IC> — and see what a failing test output looks like. Then fix it.
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div style={{ margin: "18px 0" }}>
        <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 3: Find edge cases with Claude (~10 min)</h4>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>You{"'"}ve covered the happy path and the error path. Claude can help you think about cases you haven{"'"}t considered.</p>
          <AiOpp>
            <em>Edge case finder →</em> Paste your ViewModel code and your existing tests into Claude, then use this prompt:
            <br /><br />
            <strong>{"\"I've written unit tests for a ViewModel that loads a list of items. Here's the ViewModel and my current tests. What edge cases am I not testing? List specific test scenarios with the assertion I should write for each one. Focus on state transitions, concurrency, and boundary conditions.\""}</strong>
            <br /><br />
            Pick the two most interesting suggestions and write those tests.
          </AiOpp>
          <div className="callout-checkpoint" style={{ margin: "14px 0", padding: "10px 14px", background: "#E8FCE8", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
            <strong>🎯 Checkpoint 3:</strong> You have at least 5 tests total. At least 2 were suggested by Claude and test scenarios you hadn{"'"}t thought of.
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div style={{ margin: "18px 0" }}>
        <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 8px" }}>Step 4: Capstone lab time (~remaining time)</h4>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>Remaining lab time is for capstone work. If you finish the testing steps early, open your capstone project and make progress toward M4.</p>
          <Tip>The testing pattern you just practiced — fake repository, state assertions, edge cases — works identically on your capstone{"'"}s own ViewModels. If you have time, try adding one test for your capstone{"'"}s main ViewModel.</Tip>
        </div>
      </div>

      <Section title="💡 Hints">
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          {isAndroid ? (
            <>
              <p><strong>{"runTest"} vs {"runBlocking"}</strong></p>
              <p style={{ marginLeft: 16 }}>Always use <IC>runTest</IC> from <IC>kotlinx-coroutines-test</IC> for testing suspend functions and StateFlow. <IC>runBlocking</IC> does not work correctly with coroutine test dispatchers and can cause tests to hang.</p>
              <p><strong>{"advanceUntilIdle()"}</strong></p>
              <p style={{ marginLeft: 16 }}>Advances time to complete all pending coroutines without actually waiting. Call this after triggering ViewModel operations that launch coroutines. Without it, your assertions run before the coroutine finishes.</p>
              <p><strong>{"Cannot mock final class"}</strong></p>
              <p style={{ marginLeft: 16 }}>Kotlin classes are final by default — you can{"'"}t subclass them in a fake. Define <IC>ItemRepository</IC> as an <IC>interface</IC>, not a class. Your fake then implements the interface. This is the main reason interfaces exist in testable code.</p>
            </>
          ) : (
            <>
              <p><strong>{"@MainActor"} in tests</strong></p>
              <p style={{ marginLeft: 16 }}>Mark the entire test class (or individual test functions) with <IC>@MainActor</IC> to match the ViewModel{"'"}s actor context. Without it you{"'"}ll get concurrency warnings or unexpected behavior.</p>
              <p><strong>Async test functions</strong></p>
              <p style={{ marginLeft: 16 }}>XCTest supports async test functions natively in Swift 5.5+. Mark them <IC>async</IC> and use <IC>await</IC> directly — no need for <IC>XCTestExpectation</IC> or <IC>waitForExpectations</IC>.</p>
              <p><strong>Test target access</strong></p>
              <p style={{ marginLeft: 16 }}>Add <IC>@testable import YourAppName</IC> at the top of your test file to access internal types. Make sure your test target includes the files it needs in its target membership.</p>
            </>
          )}
        </div>
      </Section>

      <Section title="🚀 Stretch Features">
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
          <li>Test the empty list case — what state should the ViewModel emit when <IC>getItems()</IC> returns <IC>[]</IC>?</li>
          <li>Test that calling <IC>loadItems()</IC> twice in quick succession doesn{"'"}t emit a stale Success after a later Error</li>
          <li>Add a fake that introduces a simulated delay — verify the UI shows Loading during the delay</li>
          <li>Write one test for your own capstone ViewModel</li>
        </ul>
      </Section>
    </div>
  );
}

/* ====== LAB SESSION 2 ====== */
function LabSession2({ platform }) {
  var isAndroid = platform === "Android";
  return (
    <div style={{ '--platform-accent': platform === "Android" ? BL : GR } as React.CSSProperties}>
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Session 2: App Performance — Profiling, Leaks &amp; AI Scanning</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 12px" }}>
        This session is a lecture on mobile app performance. You{"'"}ll learn to find and fix jank, memory leaks, and battery drain using profiling tools and AI-assisted code scanning. Lab time after the lecture is for capstone work.
      </p>

      {/* Section 1: The three problems */}
      <div style={{ margin: "20px 0 8px" }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 12px", borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 8 }}>
          Part 1 — The three mobile performance problems
        </h3>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
          Mobile devices have real constraints that desktops don{"'"}t: limited RAM, a battery to protect, and a CPU that throttles under sustained load. Performance problems fall into three categories — each with a different cause and a different fix.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, margin: "12px 0" }}>
          {[
            {
              title: "🎞️ Jank",
              desc: "Dropped frames. The UI feels sluggish or stuttery. Usually caused by doing too much work on the main thread — blocking network calls, heavy image processing, or long loops during layout.",
              cause: "Main thread work",
              fix: "Move to background thread / coroutine",
              color: "#E6F1FB", fg: "#0C447C"
            },
            {
              title: "🧠 Memory leaks",
              desc: "Objects that should be garbage-collected are kept alive by a lingering reference. Memory grows over time, the app slows down, eventually crashes with OutOfMemoryError / EXC_RESOURCE_EXCEPTION.",
              cause: "Lingering references",
              fix: "Cancel coroutines, weak refs, lifecycle-aware components",
              color: "#FAEEDA", fg: "#633806"
            },
            {
              title: "🔋 Battery drain",
              desc: "The app uses CPU or network more than needed — running work when the app is backgrounded, polling instead of subscribing, never cancelling ongoing operations.",
              cause: "Unnecessary background work",
              fix: "Cancel on lifecycle, use subscriptions not polling",
              color: "#EAF3DE", fg: "#27500A"
            },
          ].map(item => (
            <div key={item.title} style={{ background: item.color, borderRadius: 8, padding: "12px 14px" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: item.fg, margin: "0 0 6px" }}>{item.title}</p>
              <p style={{ fontSize: 12, color: item.fg, lineHeight: 1.5, margin: "0 0 8px", opacity: 0.9 }}>{item.desc}</p>
              <p style={{ fontSize: 11, color: item.fg, margin: "0 0 2px", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".04em" }}>Cause</p>
              <p style={{ fontSize: 11, color: item.fg, margin: "0 0 6px" }}>{item.cause}</p>
              <p style={{ fontSize: 11, color: item.fg, margin: "0 0 2px", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".04em" }}>Fix</p>
              <p style={{ fontSize: 11, color: item.fg, margin: 0 }}>{item.fix}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Profiling tools */}
      <div style={{ margin: "24px 0 8px" }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 12px", borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 8 }}>
          Part 2 — Profiling tools
        </h3>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
          {"You can't fix what you can't measure. Both platforms ship professional-grade profilers built into the IDE — most developers never open them. You should."}
        </p>

        {isAndroid ? (
          <>
            <p style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: 500, margin: "0 0 8px" }}>Android Studio Profiler</p>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 10px" }}>
              Open via <strong>View → Tool Windows → Profiler</strong> while your app is running. Three tabs matter:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, margin: "0 0 12px" }}>
              {[
                { tab: "CPU", what: "Shows which methods are running and for how long. Look for long-running work on the main thread — anything over 16ms causes a dropped frame.", how: "Record a CPU trace: tap the CPU row → Start recording → scroll/interact with your app → Stop. Look for orange 'main thread' spikes." },
                { tab: "Memory", what: "Shows heap usage over time. Look for a sawtooth pattern that never comes back down — that's a leak. A healthy app's memory rises and falls as screens open and close.", how: "Tap the Memory row → interact with the app (open and close screens) → watch the heap line. If it trends up and never drops, you have a leak. Capture a heap dump to see what's alive." },
                { tab: "Energy", what: "Shows CPU, network, and GPS usage over time. Look for CPU staying high when the app is in the background.", how: "Put your app in the background → watch the energy profiler for 30 seconds. CPU should drop to near zero." },
              ].map(item => (
                <div key={item.tab} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: BL, margin: "0 0 4px", background: BLL, display: "inline-block", padding: "1px 8px", borderRadius: 4 }}>{item.tab} tab</p>
                  <p style={{ fontSize: 12, color: "var(--color-text-primary)", margin: "6px 0 4px", lineHeight: 1.5 }}><strong>What to look for:</strong> {item.what}</p>
                  <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}><strong>How:</strong> {item.how}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <p style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: 500, margin: "0 0 8px" }}>Xcode Instruments</p>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 10px" }}>
              Open via <strong>Xcode → Product → Profile (⌘I)</strong>. Choose a template when Instruments launches. Three templates matter:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8, margin: "0 0 12px" }}>
              {[
                { tab: "Time Profiler", what: "Shows CPU usage over time broken down by function. Look for your code appearing in long call stacks on the main thread.", how: "Launch with Time Profiler → interact with your app → pause recording → look for tall bars. Click through the call tree to find your code." },
                { tab: "Leaks", what: "Detects objects that are allocated but can never be freed. The Leaks instrument highlights them in red.", how: "Launch with Leaks → use the app for 1–2 minutes opening and closing screens → any red marks in the timeline indicate a leak." },
                { tab: "Allocations", what: "Tracks every object allocation. Use this to find objects that pile up — especially ViewModels, images, or closures.", how: "Use the Generation Analysis: mark a generation, interact with the app, mark again. Objects that survive multiple generations without being released are suspect." },
              ].map(item => (
                <div key={item.tab} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: GR, margin: "0 0 4px", background: GRL, display: "inline-block", padding: "1px 8px", borderRadius: 4 }}>{item.tab}</p>
                  <p style={{ fontSize: 12, color: "var(--color-text-primary)", margin: "6px 0 4px", lineHeight: 1.5 }}><strong>What to look for:</strong> {item.what}</p>
                  <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}><strong>How:</strong> {item.how}</p>
                </div>
              ))}
            </div>
            <Tip>Also use the <strong>Memory Graph Debugger</strong> in Xcode directly (Debug → View Memory Graph Hierarchy while running). It shows a visual graph of what{"'"}s keeping objects alive — faster than Instruments for tracking down a specific suspected leak.</Tip>
          </>
        )}
      </div>

      {/* Section 3: LeakCanary / memory leak detection */}
      <div style={{ margin: "24px 0 8px" }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 12px", borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 8 }}>
          Part 3 — {isAndroid ? "LeakCanary & Android Studio leak detection" : "Xcode Memory Graph & common iOS leak patterns"}
        </h3>

        {isAndroid ? (
          <>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 10px" }}>
              Android Studio now has built-in memory leak detection, and LeakCanary is the industry-standard library that makes leaks impossible to miss. Both are worth knowing.
            </p>

            <p style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: 500, margin: "12px 0 6px" }}>Android Studio built-in leak detection</p>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 8px" }}>
              In the Memory Profiler, capture a heap dump after navigating away from a screen. Android Studio will highlight any <IC>Activity</IC>, <IC>Fragment</IC>, or <IC>ViewModel</IC> that is still in the heap when it shouldn{"'"}t be — with a clear "leaked" label and the reference chain keeping it alive.
            </p>

            <p style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: 500, margin: "12px 0 6px" }}>LeakCanary</p>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 8px" }}>
              LeakCanary automatically watches your Activities, Fragments, and ViewModels. When it detects a leak, it sends a notification to the device with a full leak trace — no profiler needed. Add it as a debug-only dependency and it works with zero configuration.
            </p>
            <CodeB title="build.gradle.kts (app) — debug only" accent={BL}>{`dependencies {
    // Only included in debug builds — never ships to users
    debugImplementation("com.squareup.leakcanary:leakcanary-android:2.12")
}`}</CodeB>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "8px 0" }}>
              That{"'"}s the entire setup. LeakCanary installs a content provider automatically and hooks into the lifecycle. When you navigate away from a screen and a leak is detected, you{"'"}ll see a notification like:
            </p>
            <div style={{ background: "#1e1e2e", borderRadius: 8, padding: "12px 14px", margin: "8px 0", fontSize: 12, fontFamily: "monospace", color: "#cdd6f4", lineHeight: 1.7 }}>
              {"┬───\n"}
              {"│ GC Root: Local variable in native code\n"}
              {"│\n"}
              {"├─ com.example.app.ui.AlbumListScreen instance\n"}
              {"│    Leaking: YES (Activity is destroyed)\n"}
              {"│    ↓ AlbumListScreen.viewModel\n"}
              {"│\n"}
              {"├─ com.example.app.viewmodel.AlbumViewModel instance\n"}
              {"│    Leaking: YES\n"}
              {"│    ↓ AlbumViewModel.listener\n"}
              {"│\n"}
              {"╰→ com.example.app.network.NetworkCallback\n"}
              {"     Leaking: YES (held by destroyed Activity)"}
            </div>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "8px 0" }}>
              Read the trace bottom-up: the last line is the leaked object. The arrows show the chain of references keeping it alive. The fix is almost always at one of those reference points.
            </p>

            <p style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: 500, margin: "16px 0 8px" }}>The most common Android memory leaks</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
              {[
                { title: "Static references to Context or View", fix: "Never store an Activity or View in a static field or singleton. Use ApplicationContext if you need a long-lived context." },
                { title: "Anonymous listeners not unregistered", fix: "Any listener/callback that holds a reference to a View or Activity must be unregistered in onStop or onDestroy. Use lifecycle-aware alternatives where possible." },
                { title: "Coroutines launched in GlobalScope", fix: "GlobalScope coroutines live for the entire process lifetime. Always use viewModelScope (in ViewModel) or lifecycleScope (in Activity/Fragment)." },
                { title: "Inner classes holding outer class references", fix: "Non-static inner classes implicitly hold a reference to the outer class. Make them static, or use a WeakReference, or extract them." },
              ].map(item => (
                <div key={item.title} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 4px" }}>🚨 {item.title}</p>
                  <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>Fix: {item.fix}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 10px" }}>
              iOS memory leaks usually come from strong reference cycles — two objects each holding a strong reference to the other, so neither can be deallocated. Swift{"'"}s ARC (Automatic Reference Counting) can{"'"}t break cycles automatically.
            </p>

            <p style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: 500, margin: "12px 0 6px" }}>Finding cycles with the Memory Graph Debugger</p>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 8px" }}>
              While the app is running in Xcode, click the memory graph button (the three overlapping circles) in the Debug navigator. Xcode shows a visual graph of all live objects and the references between them. Look for purple warning triangles — those indicate detected cycles.
            </p>

            <p style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: 500, margin: "16px 0 8px" }}>The most common iOS memory leaks</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
              {[
                { title: "Strong self in closures", fix: "Closures capture self strongly by default. Use [weak self] in the capture list: { [weak self] in guard let self = self else { return } }" },
                { title: "Delegate properties not declared weak", fix: "Delegate protocols should always be declared with weak: weak var delegate: MyDelegate?. If the delegate is a class type and not weak, it creates a retain cycle." },
                { title: "Timer not invalidated", fix: "Timer holds a strong reference to its target. Always call timer.invalidate() when the owning view disappears, or use a weak target wrapper." },
                { title: "NotificationCenter observer not removed", fix: "If you use the addObserver(_:selector:name:object:) API (not the closure API), you must call removeObserver(_:) in deinit. The closure API with [weak self] is safer." },
              ].map(item => (
                <div key={item.title} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 4px" }}>🚨 {item.title}</p>
                  <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>Fix: {item.fix}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Section 4: Common fixes */}
      <div style={{ margin: "24px 0 8px" }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 12px", borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 8 }}>
          Part 4 — Common performance fixes
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
          {(isAndroid ? [
            {
              problem: "Network or database call on the main thread",
              bad: `// ❌ Blocks the main thread — freezes the UI
fun loadData() {
    val result = repository.fetchItems() // blocks!
    updateUI(result)
}`,
              good: `// ✅ Run on IO dispatcher, post result to main
fun loadData() {
    viewModelScope.launch(Dispatchers.IO) {
        val result = repository.fetchItems()
        withContext(Dispatchers.Main) { updateUI(result) }
    }
}`,
            },
            {
              problem: "Coroutine launched in a screen that is destroyed",
              bad: `// ❌ GlobalScope lives forever — leaks the ViewModel
GlobalScope.launch { 
    val data = repository.fetchItems()
    _uiState.value = UiState.Success(data)
}`,
              good: `// ✅ viewModelScope cancels automatically when ViewModel clears
viewModelScope.launch {
    val data = repository.fetchItems()
    _uiState.value = UiState.Success(data)
}`,
            },
            {
              problem: "Long list rendered with Column instead of LazyColumn",
              bad: `// ❌ Renders ALL items at once — O(n) memory and layout
Column {
    items.forEach { item ->
        ItemRow(item)
    }
}`,
              good: `// ✅ Only renders visible items — constant memory
LazyColumn {
    items(items, key = { it.id }) { item ->
        ItemRow(item)
    }
}`,
            },
          ] : [
            {
              problem: "Heavy work on the main actor",
              bad: `// ❌ Parsing 10MB of JSON on the main thread — freezes UI
@MainActor
func loadData() async {
    let data = try! Data(contentsOf: url)   // blocks!
    let items = try! JSONDecoder().decode([Item].self, from: data)
    self.items = items
}`,
              good: `// ✅ Parse off main actor, publish result on main actor
func loadData() async {
    let items = await Task.detached(priority: .userInitiated) {
        let data = try! Data(contentsOf: url)
        return try! JSONDecoder().decode([Item].self, from: data)
    }.value
    await MainActor.run { self.items = items }
}`,
            },
            {
              problem: "Task not cancelled when view disappears",
              bad: `// ❌ Task keeps running even after view is gone
.onAppear {
    Task {
        await viewModel.startLongOperation()
    }
}`,
              good: `// ✅ .task cancels automatically when view disappears
.task {
    await viewModel.startLongOperation()
}`,
            },
            {
              problem: "Long list with ForEach inside ScrollView",
              bad: `// ❌ Renders ALL items at once
ScrollView {
    ForEach(items) { item in
        ItemRow(item: item)
    }
}`,
              good: `// ✅ Only renders visible items
List(items) { item in
    ItemRow(item: item)
}
// or: LazyVStack inside ScrollView for custom styling`,
            },
          ]).map(item => (
            <div key={item.problem} style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ padding: "8px 12px", background: "var(--color-background-secondary)", fontSize: 12, fontWeight: 600, color: "var(--color-text-primary)", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
                {item.problem}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div style={{ borderRight: "0.5px solid var(--color-border-tertiary)" }}>
                  <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "10px 12px", lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap", minHeight: 80 }}>{item.bad}</pre>
                </div>
                <div>
                  <pre style={{ margin: 0, background: "#0d1a0d", color: "#a8d8a8", fontSize: 11, padding: "10px 12px", lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap", minHeight: 80 }}>{item.good}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: AI perf scanner */}
      <div style={{ margin: "24px 0 8px" }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 12px", borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 8 }}>
          Part 5 — Using AI to scan your project for performance issues
        </h3>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
          Memory leaks and threading mistakes are notoriously hard to spot in code review — they often don{"'"}t crash immediately, they just make the app slow over time. AI is surprisingly good at identifying these patterns, especially in mobile code where the same anti-patterns recur constantly.
        </p>

        <p style={{ fontSize: 13, color: "var(--color-text-primary)", fontWeight: 500, margin: "0 0 10px" }}>The scanning workflow</p>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
          Rather than asking Claude a generic question, give it specific files and ask it to look for specific categories of issue. Paste one file at a time for the most actionable results.
        </p>

        <AiOpp>
          <p style={{ margin: "0 0 12px" }}>Use these prompts to scan your capstone code. Do them in order — start with the ViewModel (most critical), then screens, then the rest.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
            {[
              {
                label: "1. ViewModel memory scan",
                prompt: `"Here is my ViewModel. Please scan it for memory leaks and performance issues. Look specifically for: coroutines launched in GlobalScope or with lifecycles that won't be cancelled, strong references to Context or View objects, any work that should be on a background dispatcher but isn't, and StateFlow/LiveData patterns that might hold references longer than necessary. For each issue found, explain why it's a problem and show me the fix."`,
              },
              {
                label: "2. Screen / composable threading scan",
                prompt: isAndroid
                  ? `"Here is my Composable screen. Please check for: any work being done directly in the composable body that should be in a LaunchedEffect or ViewModel, Column used where LazyColumn should be, heavy operations triggered directly from onClick without moving to a coroutine, and any remember {} blocks doing expensive computation on every recomposition."`
                  : `"Here is my SwiftUI View. Please check for: heavy computation in the body property that should be cached or moved to a ViewModel, ForEach inside ScrollView where List would be more efficient, tasks that aren't being cancelled when the view disappears, and any synchronous blocking calls on the main thread."`,
              },
              {
                label: "3. Network / async code scan",
                prompt: `"Here is my networking/repository code. Please look for: operations not properly scoped to a lifecycle, missing cancellation handling, places where errors could silently crash background threads, and any patterns that would cause this code to keep running after the user navigates away from the screen."`,
              },
              {
                label: "4. Full architectural review",
                prompt: `"Here are my main ViewModel and Screen files together. Looking at how they interact: are there any reference patterns that could cause memory leaks? Is state being held in the right layer — should anything currently in the View be in the ViewModel, or vice versa? Are there any observable patterns that won't be cleaned up properly?"`,
              },
            ].map(item => (
              <div key={item.label} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: P_C, margin: "0 0 6px" }}>{item.label}</p>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>{item.prompt}</p>
              </div>
            ))}
          </div>

          <Warn>
            {"AI-generated performance advice is a starting point, not a verdict. Always verify the suggested fix makes sense before applying it — Claude can occasionally misread context or suggest an over-engineered solution. Use the profiler to confirm that a suspected issue is actually happening before spending time fixing it."}
          </Warn>
        </AiOpp>
      </div>

      {/* Section 6: Self-audit checklist */}
      <div style={{ margin: "24px 0 8px" }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", margin: "0 0 12px", borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 8 }}>
          Part 6 — Capstone performance self-audit
        </h3>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
          A 5-minute scan you can run on your capstone right now, before lab time starts.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
          {(isAndroid ? [
            { q: "Does any network or database call happen outside a coroutine or on Dispatchers.Main?", hint: "Search your codebase for .getItems(), .fetch(), or any repository call not inside viewModelScope.launch or withContext(Dispatchers.IO)." },
            { q: "Are all coroutines launched in viewModelScope, lifecycleScope, or rememberCoroutineScope — never GlobalScope?", hint: "Search for 'GlobalScope' in your project. There should be zero results." },
            { q: "Do you have any non-lazy lists (Column with forEach) containing more than ~20 items?", hint: "Search for 'ForEach' or '.forEach' inside a Column. If the list can grow, switch to LazyColumn / List." },
            { q: "Does LeakCanary show any leaks after opening and closing your main screens?", hint: "Add LeakCanary, run the app, navigate around for 2 minutes. Check the notification tray for any leak reports." },
            { q: "Does the Memory Profiler show heap usage trending up over 5 minutes of use?", hint: "Open the Memory tab, use the app for 5 minutes, watch the graph. It should stay roughly flat after initial load." },
          ] : [
            { q: "Are there any synchronous operations on the main thread — Data(contentsOf:), JSONDecoder on large payloads, or heavy image processing?", hint: "Search for 'Data(contentsOf', 'try! JSONDecoder', or 'UIGraphicsBeginImageContext'. These should all happen off the main actor." },
            { q: "Do all long-running Tasks use .task {} (which auto-cancels) rather than Task {} in onAppear?", hint: "Search for 'onAppear' and check if any create Tasks. Switch to .task modifier instead." },
            { q: "Are there any closures capturing self strongly that could cause retain cycles?", hint: "Search for closures ('{' followed by uses of self) in ViewModel and networking code. Check they use [weak self] where the closure outlives the calling scope." },
            { q: "Do any ForEach inside ScrollView contain potentially large lists?", hint: "Switch large lists to List or LazyVStack. SwiftUI renders all ForEach children eagerly inside ScrollView." },
            { q: "Does the Memory Graph Debugger show any purple warning triangles after navigating between screens?", hint: "Run the app, open and close 3–4 screens, then open the Memory Graph. Purple triangles = detected retain cycles." },
          ]).map((item, i) => (
            <div key={i} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px", display: "flex", gap: 10 }}>
              <div style={{ width: 20, height: 20, border: "1.5px solid var(--color-border-secondary)", borderRadius: 4, flexShrink: 0, marginTop: 1 }} />
              <div>
                <p style={{ fontSize: 13, color: "var(--color-text-primary)", margin: "0 0 4px", lineHeight: 1.5 }}>{item.q}</p>
                <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: 0, lineHeight: 1.5 }}>💡 {item.hint}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lab time */}
      <div style={{ margin: "24px 0 8px", background: CAP_BG, borderRadius: 10, padding: "14px 16px" }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: CAP_C, margin: "0 0 8px" }}>🏗️ Lab time — Capstone work session</h3>
        <p style={{ fontSize: 13, color: CAP_C, lineHeight: 1.6, margin: 0 }}>
          The rest of this session is for capstone work. There is no required deliverable tied to the lecture content — use the performance tools and AI scanning prompts above if they{"'"}re useful for your capstone, but your main goal is progress toward M4.
        </p>
      </div>
    </div>
  );
}

/* ====== LAB TAB SWITCHER ====== */
function LabTab({ platform, setPlatform }) {
  var [session, setSession] = useState(1);
  return (
    <div>
      <div style={{ display: "flex", gap: 0, marginBottom: 12, borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
        {[1, 2].map(function(n) {
          return (
            <button key={n} onClick={function() { setSession(n); }} style={{
              padding: "8px 20px", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer",
              background: session === n ? PL : "var(--color-background-primary)",
              color: session === n ? PD : "var(--color-text-secondary)"
            }}>
              {n === 1 ? "Session 1 — Unit Testing" : "Session 2 — App Performance"}
            </button>
          );
        })}
      </div>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      {session === 1 ? <LabSession1 platform={platform} /> : <LabSession2 platform={platform} />}
    </div>
  );
}

/* ====== CAPSTONE TAB ====== */
function CapstoneTab({ platform, setPlatform }) {
  var isAndroid = platform === "Android";
  return (
    <div>
      <div style={{ background: CAP_BG, padding: "14px", borderRadius: 10, marginBottom: 16 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px", color: CAP_C }}>🏗️ Capstone M4: Feature-Complete Build</h3>
        <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: CAP_C }}>
          Due end of Session 2. Submit by sharing the GitHub repo link in Slack. This is the last milestone before demo day.
        </p>
      </div>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>✅ M4 Deliverables</h4>
        <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
          {[
            "All core screens navigable end-to-end — no dead ends or placeholder screens",
            "At least one real network call or AI feature working end-to-end",
            "Local persistence working — data survives an app restart",
            "At least one stretch feature from your original proposal is implemented",
            "Git branching workflow in place — feature branches merged via PRs, not pushed directly to main",
            "Every team member has meaningful commits on the main branch",
            "App icon is set — not the default placeholder",
            "No build-breaking crashes during a normal use flow",
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 20 }}>📋 What the week looks like</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "10px 0" }}>
          {[
            { label: "Session 1 lab", val: "After unit testing steps are done, switch to capstone. TAs available." },
            { label: "Session 2 lab", val: "Full capstone work session. Use performance tools from the lecture if useful." },
            { label: "Between sessions", val: "Finish any remaining M4 features. Review teammate PRs. Run a quick perf audit." },
            { label: "End of Session 2", val: "Submit M4 via the Slack form. Repo link + confirmation that required features are done." },
          ].map(item => (
            <div key={item.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
            </div>
          ))}
        </div>

        <Warn>
          {"Have your app running on a device or emulator when you submit M4. The instructor will do a quick check during demo prep — \"works on my machine\" needs to be demonstrable, not theoretical."}
        </Warn>

        <AiOpp>
          <em>Scope what{"'"}s left → </em>Ask Claude: <strong>{"\"Our capstone has these features still to build: [list]. We have one week left until demo day. Which features are highest priority for a great demo? What's safe to cut?\""}</strong>
        </AiOpp>

        <div className="callout-ai" style={{ marginTop: 16, padding: "12px 14px", background: "#F9F0FF", borderRadius: 8 }}>
          <strong>📅 Capstone Timeline</strong>
          <ul style={{ paddingLeft: 20, margin: "6px 0 0", lineHeight: 2 }}>
            <li style={{ opacity: 0.5 }}>Week 5: Team formation + platform selection ✅</li>
            <li style={{ opacity: 0.5 }}>Week 6: Proposal due ✅</li>
            <li style={{ opacity: 0.5 }}>Week 7: M1 — Repo setup, architecture scaffolded ✅</li>
            <li style={{ opacity: 0.5 }}>Week 8: M3 — Instructor check-in ✅</li>
            <li><strong>Week 9 (this week):</strong> M4 — Feature-complete, Git branching workflow</li>
            <li><strong>Week 10:</strong> Final — APK/TestFlight, demo day, written reflection</li>
          </ul>
        </div>
      </div>
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

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>📹 Session Recordings</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><Link>Weekly Video Playlist</Link></li>
          <li><Link>Office Hours Video Playlist</Link></li>
        </ul>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>May take 24–48 hours to appear after the session.</p>

        {isAndroid ? (
          <>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>🧪 Unit Testing — Android</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><a href="https://developer.android.com/training/testing/local-tests" style={{ color: "var(--color-text-info)" }}>Local unit tests — Android developer guide</a></li>
              <li><a href="https://kotlinlang.org/docs/coroutines-test.html" style={{ color: "var(--color-text-info)" }}>kotlinx-coroutines-test — runTest and advanceUntilIdle</a></li>
              <li><a href="https://developer.android.com/training/testing/unit-testing/local-unit-tests" style={{ color: "var(--color-text-info)" }}>Test doubles (fakes, mocks, stubs) — Android guide</a></li>
            </ul>

            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>⚡ Performance — Android</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><a href="https://developer.android.com/studio/profile" style={{ color: "var(--color-text-info)" }}>Android Studio Profiler overview</a></li>
              <li><a href="https://developer.android.com/studio/profile/memory-profiler" style={{ color: "var(--color-text-info)" }}>Memory Profiler — capture heap dumps and track leaks</a></li>
              <li><a href="https://square.github.io/leakcanary/" style={{ color: "var(--color-text-info)" }}>LeakCanary — automatic memory leak detection</a></li>
              <li><a href="https://developer.android.com/topic/performance/vitals/render" style={{ color: "var(--color-text-info)" }}>Slow rendering — how to find and fix jank</a></li>
              <li><a href="https://developer.android.com/kotlin/coroutines/coroutines-best-practices" style={{ color: "var(--color-text-info)" }}>Coroutines best practices — threading and cancellation</a></li>
            </ul>
          </>
        ) : (
          <>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>🧪 Unit Testing — iOS</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><a href="https://developer.apple.com/documentation/xctest" style={{ color: "var(--color-text-info)" }}>XCTest documentation — Apple developer docs</a></li>
              <li><a href="https://developer.apple.com/documentation/xctest/asynchronous_tests_and_expectations" style={{ color: "var(--color-text-info)" }}>Async tests with XCTest</a></li>
              <li><a href="https://developer.apple.com/documentation/swift/testing" style={{ color: "var(--color-text-info)" }}>Swift Testing framework (Swift 6+)</a></li>
            </ul>

            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>⚡ Performance — iOS</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><a href="https://developer.apple.com/documentation/xcode/improving-your-app-s-performance" style={{ color: "var(--color-text-info)" }}>Improving your app{"'"}s performance — Apple guide</a></li>
              <li><a href="https://developer.apple.com/documentation/xcode/gathering-information-about-memory-use" style={{ color: "var(--color-text-info)" }}>Gathering information about memory use — Instruments</a></li>
              <li><a href="https://developer.apple.com/documentation/xcode/diagnosing-memory-thread-and-crash-issues-early" style={{ color: "var(--color-text-info)" }}>Memory Graph Debugger — Xcode</a></li>
              <li><a href="https://developer.apple.com/documentation/swift/maintaining-a-stable-identity" style={{ color: "var(--color-text-info)" }}>Avoiding retain cycles in Swift — closures and [weak self]</a></li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

/* ====== MAIN ====== */
export default function Week9Unit() {
  var tabState = useState("Overview");
  var tab = tabState[0];
  var setTab = tabState[1];
  var platState = useState("Android");
  var platform = platState[0];
  var setPlatform = platState[1];

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "16px 0", fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 12, color: "var(--color-text-tertiary)", fontWeight: 500, marginBottom: 2 }}>MOBILE DEVELOPMENT IN THE AGE OF AI</div>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{"CodePath \u00B7 10 weeks \u00B7 2 sessions/week"}</div>
      </div>
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--color-border-tertiary)", marginBottom: 16, overflowX: "auto" }}>
        {TABS.map(function(t) {
          return (
            <button key={t} onClick={function() { setTab(t); }} style={{
              padding: "8px 14px", fontSize: 13, background: "none", cursor: "pointer",
              borderWidth: "0 0 2px 0", borderStyle: "solid",
              borderColor: tab === t ? P_C : "transparent",
              color: tab === t ? P_C : "var(--color-text-secondary)",
              fontWeight: tab === t ? 500 : 400, whiteSpace: "nowrap"
            }}>{t}</button>
          );
        })}
      </div>
      {tab === "Overview"  && <Overview platform={platform} setPlatform={setPlatform} />}
      {tab === "Lab"       && <LabTab platform={platform} setPlatform={setPlatform} />}
      {tab === "Capstone"  && <CapstoneTab platform={platform} setPlatform={setPlatform} />}
      {tab === "Resources" && <ResourcesTab platform={platform} setPlatform={setPlatform} />}
    </div>
  );
}
