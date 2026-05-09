import { useState } from "react";

const TABS = ["Overview", "Lab", "Capstone", "Resources"];
const PLATFORMS = ["Android", "iOS"];

const P_C = "#534AB7",
  PL = "#EEEDFE",
  PD = "#3C3489";
const AM = "#633806",
  AML = "#FAEEDA";
const BL = "#7F52FF",
  BLL = "#F0EEFF";
const GR = "#F05138",
  GRL = "#FFF2F0";
const CAP_C = "#993C1D",
  CAP_BG = "#FAECE7";

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

function Warn({ children }) {
  return (
    <div
      className="callout-warn"
      style={{
        margin: "12px 0",
        padding: "10px 14px",
        background: "#FFF8E6",
        borderRadius: 8,
        fontSize: 13,
        lineHeight: 1.6,
        borderLeft: "3px solid #EF9F27",
      }}
    >
      ⚠️ {children}
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
      <div
        className="callout-checkpoint"
        style={{
          background: "#E8FCE8",
          padding: "10px 14px",
          borderRadius: 8,
          fontSize: 13,
          marginBottom: 12,
        }}
      >
        Don{"'"}t forget to fill out the ✏️ <Link>Session Survey</Link> at the
        end of each class session!
      </div>
      <div
        style={{
          background: CAP_BG,
          padding: "10px 14px",
          borderRadius: 8,
          fontSize: 13,
          marginBottom: 16,
          color: CAP_C,
        }}
      >
        🏗️ <strong>REMINDER:</strong> <Link>Capstone M4</Link> (feature-complete
        build) is due by the end of Session 2 this week.
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>
        Unit 9: Testing &amp; App Performance
      </h2>

      <p
        style={{
          fontSize: 13,
          color: "var(--color-text-secondary)",
          lineHeight: 1.7,
          margin: "0 0 16px",
        }}
      >
        Two focused sessions this week. Session 1 introduces unit testing — a
        professional skill that makes your code more reliable and easier to
        change. Session 2 covers app performance: how to find jank, memory
        leaks, and battery drain in your own apps using profiling tools and
        AI-assisted code scanning. Lab time both sessions is dedicated capstone
        work.
      </p>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 10px" }}>This week we{"'"}ll cover:</p>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>
            {isAndroid
              ? "JUnit4 + test doubles — unit testing a ViewModel in isolation"
              : "XCTest — unit testing a ViewModel in isolation"}
          </li>
          <li>What makes code testable, and how MVVM sets you up for it</li>
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
            Using AI to scan your codebase for performance issues, threading
            mistakes, and memory retention patterns
          </li>
        </ul>
      </div>

      <div
        style={{
          marginTop: 20,
          padding: "14px",
          background: "var(--color-background-secondary)",
          borderRadius: 10,
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        <strong>Session Info</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>📅 See your cohort{"'"}s schedule for session times</li>
          <li>
            ↗ <Link>Session Zoom Link</Link> | Passcode:{" "}
            <strong>codepath</strong>
          </li>
          <li>
            📊 <Link>Link to Slides</Link>
          </li>
        </ul>
        <strong style={{ display: "block", marginTop: 10 }}>
          Upcoming Due Dates
        </strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>
            🏗️ <Link>Capstone M4</Link> — feature-complete build, due end of
            Session 2
          </li>
          <li>
            📬 <Link>Week 9 pre-work</Link> — Git branching concepts (30 min),
            due before Session 1
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
              label: "Session 1",
              val: "Introduction to unit testing. Lab: write tests for a starter ViewModel using fakes, find edge cases with Claude.",
            },
            {
              label: "Session 2",
              val: "App performance — profiling, memory leak detection, and using AI to scan your codebase for issues. Lab: capstone build time.",
            },
            {
              label: "Capstone M4",
              val: "Feature-complete build. All core screens working, data persists, at least one stretch feature. Due end of Session 2.",
            },
            {
              label: "No standalone assignment",
              val: "M4 is the deliverable this week. Lab time both sessions goes toward capstone progress.",
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

/* ====== LAB SESSION 1 ====== */
function LabSession1({ platform }) {
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
        Session 1 Lab: Writing Unit Tests for a ViewModel
      </h2>
      <p
        style={{
          fontSize: 13,
          color: "var(--color-text-secondary)",
          margin: "0 0 12px",
        }}
      >
        Write unit tests for a shared starter ViewModel. Use fakes to isolate
        dependencies from real network calls. Budget about 50–60 minutes.
      </p>

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <strong>🎯 Goals</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
          <li>Understand what a unit test is and why it matters</li>
          <li>
            Write tests that cover Loading, Success, and Error state transitions
          </li>
          <li>
            Use a fake/stub to replace real API calls with predictable test
            doubles
          </li>
          <li>Use Claude to find edge cases you hadn{"'"}t considered</li>
          <li>Debug a failing test and read an assertion error</li>
        </ul>
      </div>

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
          Why test a ViewModel specifically?
        </p>
        <p style={{ fontSize: 13, color: AM, margin: 0, lineHeight: 1.6 }}>
          The ViewModel is the most testable layer in MVVM — it has no UI code
          and no Android/iOS framework dependencies (if you wrote it right in
          Week 6). That means you can run tests on the JVM or in Swift without a
          simulator. If your ViewModel is hard to test, it{"'"}s a signal the
          architecture needs work.
        </p>
      </div>

      {/* Step 0 */}
      <VStep num={0} title="Review the starter ViewModel (~5 min)">
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            You{"'"}re given a simple ViewModel in your starter code that loads
            a list of items. Your job is to write tests that verify each UI
            state transition.
          </p>
          <p>
            Notice that <IC>ItemRepository</IC> is an{" "}
            <strong>interface/protocol</strong>, not a class. This is the secret
            to testable code: it allows us to swap the real repository for a
            "fake" one in our tests (since we cannot subclass final
            classes).{" "}
          </p>
          <Section title="🔍 Show starter code">
            {isAndroid ? (
              <CodeB
                title="Kotlin — ItemViewModel.kt (starter)"
                accent={BL}
              >{`sealed interface ItemUiState {
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
              <CodeB
                title="Swift — ItemViewModel.swift (starter)"
                accent={GR}
              >{`enum ItemUiState {
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
          </Section>
        </div>
      </VStep>

      {/* Step 1 */}
      <VStep num={1} title="Setup test dependencies (~5 min)">
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>Before we can test coroutines, we need the testing library.</p>
          {isAndroid ? (
            <>
              <p>
                <strong>
                  Add this to your app-level <IC>build.gradle.kts</IC>:
                </strong>{" "}
                Make sure it goes into the <IC>dependencies</IC> block as{" "}
                <IC>testImplementation</IC> (not{" "}
                <IC>androidTestImplementation</IC>). Sync Gradle afterwards.
              </p>
              <CodeB
                title="Kotlin — build.gradle.kts"
                accent={BL}
              >{`dependencies {
    // Other dependencies...
    
    // For testing coroutines (runTest, TestDispatchers)
    testImplementation("org.jetbrains.kotlinx:kotlinx-coroutines-test:1.8.0")
}`}</CodeB>
            </>
          ) : (
            <p>
              <strong>Make sure your test target is set up:</strong> In Xcode,
              your <IC>YourAppNameTests</IC> target is where all test files
              should live. No extra dependencies are needed; XCTest is built-in.
            </p>
          )}
        </div>
      </VStep>

      {/* Step 2 */}
      <VStep num={2} title="Create a fake repository (~8 min)">
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            A fake replaces the real network call with a version you control.
            You can make it return success, return an empty list, or throw an
            error — whatever the test needs.
          </p>
          {isAndroid ? (
            <>
              <p>
                <strong>Create a new file</strong> named{" "}
                <IC>FakeItemRepository.kt</IC> in your{" "}
                <IC>app/src/test/java/...</IC> directory (alongside your other
                test files).
              </p>
              <CodeB
                title="Kotlin — FakeItemRepository.kt"
                accent={BL}
              >{`import java.io.IOException

class FakeItemRepository : ItemRepository {
    // Configure these before each test
    var shouldThrow = false
    var itemsToReturn = listOf("Item A", "Item B", "Item C")

    override suspend fun getItems(): List<String> {
        if (shouldThrow) throw IOException("Simulated network error")
        return itemsToReturn
    }
}`}</CodeB>
            </>
          ) : (
            <>
              <p>
                <strong>Create a new file</strong> named{" "}
                <IC>MockItemRepository.swift</IC> in your{" "}
                <IC>YourAppNameTests</IC> folder.
              </p>
              <CodeB
                title="Swift — MockItemRepository.swift"
                accent={GR}
              >{`import Foundation
@testable import YourAppName

class MockItemRepository: ItemRepository {
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
            </>
          )}
          <Checkpoint num={1}>
            Fake compiles with no errors. It conforms to the same{" "}
            <IC>ItemRepository</IC> interface as the real implementation.
          </Checkpoint>
        </div>
      </VStep>

      {/* Step 3 */}
      <VStep num={3} title="Write the tests (~20 min)">
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            We're going to write three tests: initial loading state, success,
            and error.
          </p>

          <VStep num="a" title="Setup the test file and initial state">
            <p>
              {isAndroid
                ? "Because loadItems() launches a coroutine on the Main thread, we must swap the real Main thread for a TestDispatcher."
                : "Mark the test class with @MainActor because the ViewModel is tied to the main thread."}
            </p>
            {isAndroid ? (
              <p>
                Create <IC>ItemViewModelTest.kt</IC> and{" "}
                <IC>MainDispatcherRule.kt</IC> in your <IC>test</IC> directory.
                Add the <IC>MainDispatcherRule</IC> boilerplate. Then, in{" "}
                <IC>ItemViewModelTest</IC>, add the rule and write a test named{" "}
                <IC>initial state — is Loading</IC>. Instantiate the ViewModel
                with a new <IC>FakeItemRepository()</IC>, and assert that the
                value of <IC>uiState</IC> is <IC>ItemUiState.Loading</IC>.
              </p>
            ) : (
              <p>
                Create <IC>ItemViewModelTests.swift</IC> in your{" "}
                <IC>YourAppNameTests</IC> target. Add the <IC>@MainActor</IC>{" "}
                test class. Write a test named{" "}
                <IC>testInitialState_isLoading()</IC>. Instantiate the ViewModel
                with a new <IC>MockItemRepository()</IC>, and verify that{" "}
                <IC>uiState</IC> is <IC>.loading</IC>.
              </p>
            )}

            {isAndroid && (
              <Section title="💡 Show me the MainDispatcherRule boilerplate">
                <CodeB
                  title="Kotlin — MainDispatcherRule.kt"
                  accent={BL}
                >{`import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.test.TestDispatcher
import kotlinx.coroutines.test.UnconfinedTestDispatcher
import kotlinx.coroutines.test.resetMain
import kotlinx.coroutines.test.setMain
import org.junit.rules.TestWatcher
import org.junit.runner.Description

@OptIn(ExperimentalCoroutinesApi::class)
class MainDispatcherRule(
    private val testDispatcher: TestDispatcher = UnconfinedTestDispatcher()
) : TestWatcher() {
    override fun starting(description: Description) {
        Dispatchers.setMain(testDispatcher)
    }
    override fun finished(description: Description) {
        Dispatchers.resetMain()
    }
}`}</CodeB>
              </Section>
            )}

            <Section title="✅ Check your work — show me the test file so far">
              {isAndroid ? (
                <CodeB
                  title="Kotlin — ItemViewModelTest.kt"
                  accent={BL}
                >{`import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.test.advanceUntilIdle
import kotlinx.coroutines.test.runTest
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test

@OptIn(ExperimentalCoroutinesApi::class)
class ItemViewModelTest {

    // Swap the coroutine dispatcher so tests run synchronously
    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()

    @Test
    fun \`initial state — is Loading\`() {
        val vm = ItemViewModel(FakeItemRepository())
        assertTrue(vm.uiState.value is ItemUiState.Loading)
    }
}`}</CodeB>
              ) : (
                <CodeB
                  title="Swift — ItemViewModelTests.swift"
                  accent={GR}
                >{`import XCTest
@testable import YourAppName

@MainActor
final class ItemViewModelTests: XCTestCase {

    func testInitialState_isLoading() {
        let vm = ItemViewModel(repo: MockItemRepository())
        if case .loading = vm.uiState { /* pass */ }
        else { XCTFail("Expected .loading") }
    }
}`}</CodeB>
              )}
            </Section>
          </VStep>

          <VStep num="b" title="Test the happy path">
            <p>
              Now write the Success test.{" "}
              {isAndroid
                ? "Create a function named `loadItems — emits Loading then Success` and wrap the block in `runTest`."
                : "Create an `async` function named `testLoadItems_success`."}{" "}
              Instantiate the fake repo, pass it to the ViewModel, and call{" "}
              <IC>loadItems()</IC>.{" "}
              {isAndroid &&
                "Call advanceUntilIdle() to fast-forward the coroutine. "}{" "}
              Then verify the state is Success and that the items list has size
              3.
            </p>

            <Section title="✅ Check your work — show me the test file so far">
              {isAndroid ? (
                <CodeB
                  title="Kotlin — ItemViewModelTest.kt"
                  accent={BL}
                >{`import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.test.advanceUntilIdle
import kotlinx.coroutines.test.runTest
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test

@OptIn(ExperimentalCoroutinesApi::class)
class ItemViewModelTest {

    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()

    @Test
    fun \`initial state — is Loading\`() {
        val vm = ItemViewModel(FakeItemRepository())
        assertTrue(vm.uiState.value is ItemUiState.Loading)
    }

    @Test
    fun \`loadItems — emits Loading then Success\`() = runTest {
        val repo = FakeItemRepository()
        val vm = ItemViewModel(repo)

        vm.loadItems()
        advanceUntilIdle()  // fast-forward all coroutines

        val state = vm.uiState.value
        assertTrue(state is ItemUiState.Success)
        assertEquals(3, (state as ItemUiState.Success).items.size)
    }
}`}</CodeB>
              ) : (
                <CodeB
                  title="Swift — ItemViewModelTests.swift"
                  accent={GR}
                >{`import XCTest
@testable import YourAppName

@MainActor
final class ItemViewModelTests: XCTestCase {

    func testInitialState_isLoading() {
        let vm = ItemViewModel(repo: MockItemRepository())
        if case .loading = vm.uiState { /* pass */ }
        else { XCTFail("Expected .loading") }
    }

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
}`}</CodeB>
              )}
            </Section>
          </VStep>

          <VStep num="c" title="Test the error path" last>
            <p>
              Write the Error test. Create a new fake repo, but this time
              configure it to throw an error (e.g. <IC>shouldThrow = true</IC>).
              Call <IC>loadItems()</IC>, and verify the state becomes Error and
              that the error message is not empty.
            </p>

            <Section title="✅ Check your work — show me the complete test file">
              {isAndroid ? (
                <CodeB
                  title="Kotlin — ItemViewModelTest.kt"
                  accent={BL}
                >{`import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.test.advanceUntilIdle
import kotlinx.coroutines.test.runTest
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test

@OptIn(ExperimentalCoroutinesApi::class)
class ItemViewModelTest {

    @get:Rule
    val mainDispatcherRule = MainDispatcherRule()

    @Test
    fun \`initial state — is Loading\`() {
        val vm = ItemViewModel(FakeItemRepository())
        assertTrue(vm.uiState.value is ItemUiState.Loading)
    }

    @Test
    fun \`loadItems — emits Loading then Success\`() = runTest {
        val repo = FakeItemRepository()
        val vm = ItemViewModel(repo)

        vm.loadItems()
        advanceUntilIdle()  // fast-forward all coroutines

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
}`}</CodeB>
              ) : (
                <CodeB
                  title="Swift — ItemViewModelTests.swift"
                  accent={GR}
                >{`import XCTest
@testable import YourAppName

@MainActor
final class ItemViewModelTests: XCTestCase {

    func testInitialState_isLoading() {
        let vm = ItemViewModel(repo: MockItemRepository())
        if case .loading = vm.uiState { /* pass */ }
        else { XCTFail("Expected .loading") }
    }

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
}`}</CodeB>
              )}
            </Section>
          </VStep>

          <Checkpoint num={2}>
            All three tests pass. Intentionally break one assertion — change an{" "}
            <IC>assertEquals(3, ...)</IC> (or{" "}
            <IC>XCTAssertEqual(items.count, 3)</IC>) to test for <IC>99</IC>{" "}
            instead — and see what a failing test output looks like. Then fix
            it.
          </Checkpoint>
        </div>
      </VStep>

      {/* Step 4 */}
      <VStep num={4} title="Find edge cases with Claude (~10 min)">
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            You{"'"}ve covered the happy path and the error path. Claude can
            help you think about cases you haven{"'"}t considered.
          </p>
          <AiOpp>
            <em>Edge case finder →</em>{" "}
            <strong>Paste your ViewModel code and your existing tests</strong>{" "}
            into Claude, then use this prompt:
            <br />
            <br />
            <strong>
              {
                "\"I've written unit tests for a ViewModel that loads a list of items. Here's the ViewModel and my current tests. What edge cases am I not testing? List specific test scenarios with the assertion I should write for each one. Focus on state transitions, concurrency, and boundary conditions.\""
              }
            </strong>
            <br />
            <br />
            Pick the two most interesting suggestions and write those tests.
          </AiOpp>
          <Checkpoint num={3}>
            You have at least 5 tests total. At least 2 were suggested by Claude
            and test scenarios you hadn{"'"}t thought of.
          </Checkpoint>
        </div>
      </VStep>

      {/* Step 5 */}
      <VStep num={5} title="Capstone lab time (~remaining time)" last>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            Remaining lab time is for capstone work. If you finish the testing
            steps early, open your capstone project and make progress toward M4.
          </p>
          <Tip>
            The testing pattern you just practiced — fake repository, state
            assertions, edge cases — works identically on your capstone{"'"}s
            own ViewModels. If you have time, try adding one test for your
            capstone{"'"}s main ViewModel.
          </Tip>
        </div>
      </VStep>

      <Section title="💡 Hints">
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          {isAndroid ? (
            <>
              <p>
                <strong>
                  {"runTest"} vs {"runBlocking"}
                </strong>
              </p>
              <p style={{ marginLeft: 16 }}>
                Always use <IC>runTest</IC> from{" "}
                <IC>kotlinx-coroutines-test</IC> for testing suspend functions
                and StateFlow. <IC>runBlocking</IC> does not work correctly with
                coroutine test dispatchers and can cause tests to hang.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>{"@MainActor"} in tests</strong>
              </p>
              <p style={{ marginLeft: 16 }}>
                Mark the entire test class (or individual test functions) with{" "}
                <IC>@MainActor</IC> to match the ViewModel{"'"}s actor context.
                Without it you{"'"}ll get concurrency warnings or unexpected
                behavior.
              </p>
              <p>
                <strong>Async test functions</strong>
              </p>
              <p style={{ marginLeft: 16 }}>
                XCTest supports async test functions natively in Swift 5.5+.
                Mark them <IC>async</IC> and use <IC>await</IC> directly — no
                need for <IC>XCTestExpectation</IC> or{" "}
                <IC>waitForExpectations</IC>.
              </p>
              <p>
                <strong>Test target access</strong>
              </p>
              <p style={{ marginLeft: 16 }}>
                Add <IC>@testable import YourAppName</IC> at the top of your
                test file to access internal types. Make sure your test target
                includes the files it needs in its target membership.
              </p>
            </>
          )}
        </div>
      </Section>

      <Section title="🚀 Stretch Features">
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
          <li>
            Test the empty list case — what state should the ViewModel emit when{" "}
            <IC>getItems()</IC> returns <IC>[]</IC>?
          </li>
          <li>
            Test that calling <IC>loadItems()</IC> twice in quick succession
            doesn{"'"}t emit a stale Success after a later Error
          </li>
          <li>
            Add a fake that introduces a simulated delay — verify the UI shows
            Loading during the delay
          </li>
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
    <div
      style={
        {
          "--platform-accent": platform === "Android" ? BL : GR,
        } as React.CSSProperties
      }
    >
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>
        Session 2 Lab: Profiling & App Performance
      </h2>
      <p
        style={{
          fontSize: 13,
          color: "var(--color-text-secondary)",
          margin: "0 0 12px",
        }}
      >
        In this lab, you'll hunt down performance bottlenecks in an
        intentionally buggy starter app. You'll learn to use IDE profilers to
        find jank, use memory tools to detect leaks, and use Claude to resolve
        them. Budget about 30 minutes, then switch to capstone work.
      </p>

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
            Run the Week 9 Session 2 starter app. It contains a screen that
            fetches and processes a large list of images.
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
            You can't fix what you can't measure. Let's see exactly what's
            blocking the thread using the built-in IDE profilers.
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
                Thread track—you will see a huge spike in CPU usage. Highlight
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
            Now let's find the hidden memory leak. This happens when an object
            (like a View or ViewModel) is kept alive in memory by a lingering
            reference even after you navigate away from the screen.
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
                the left sidebar—these indicate detected retain cycles.
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
            Now that we have hard proof of the jank and the leak, let's use AI
            to apply the correct technical fix.
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
                a background dispatcher/actor but isn't, and any closures or
                references that could cause memory leaks. Tell me what's wrong
                and provide the fixed code."
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
            <p>Apply Claude's fixed code to your ViewModel.</p>
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

      <VStep num={5} title="Capstone lab time (~remaining time)" last>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            The rest of this session is for capstone work. Your goal is to reach
            the M4 Milestone (Feature-Complete Build).
          </p>
          <Tip>
            If your capstone app feels slow, run it through the Profiler or
            paste your most complex screen into Claude using the AI scan prompt
            from Step 4!
          </Tip>
        </div>
      </VStep>

      {/* Reference Material from old lecture */}
      <Section title="📚 Reference: The Most Common Memory Leaks">
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p>
            Review these common anti-patterns if you suspect a memory leak in
            your capstone app:
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

/* ====== LAB TAB SWITCHER ====== */
function LabTab({ platform, setPlatform }) {
  var [session, setSession] = useState(1);
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 0,
          marginBottom: 12,
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid var(--color-border-tertiary)",
          width: "fit-content",
        }}
      >
        {[1, 2].map(function (n) {
          return (
            <button
              key={n}
              onClick={function () {
                setSession(n);
              }}
              style={{
                padding: "8px 20px",
                fontSize: 13,
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                background:
                  session === n ? PL : "var(--color-background-primary)",
                color: session === n ? PD : "var(--color-text-secondary)",
              }}
            >
              {n === 1
                ? "Session 1 — Unit Testing"
                : "Session 2 — App Performance"}
            </button>
          );
        })}
      </div>
      <PlatformToggle platform={platform} setPlatform={setPlatform} />
      {session === 1 ? (
        <LabSession1 platform={platform} />
      ) : (
        <LabSession2 platform={platform} />
      )}
    </div>
  );
}

/* ====== CAPSTONE TAB ====== */
function CapstoneTab({ platform, setPlatform }) {
  var isAndroid = platform === "Android";
  return (
    <div>
      <div
        style={{
          background: CAP_BG,
          padding: "14px",
          borderRadius: 10,
          marginBottom: 16,
        }}
      >
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            margin: "0 0 6px",
            color: CAP_C,
          }}
        >
          🏗️ Capstone M4: Feature-Complete Build
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: CAP_C }}>
          Due end of Session 2. Submit by sharing the GitHub repo link in Slack.
          This is the last milestone before demo day.
        </p>
      </div>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>
          ✅ M4 Deliverables
        </h4>
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

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 20 }}>
          📋 What the week looks like
        </h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            margin: "10px 0",
          }}
        >
          {[
            {
              label: "Session 1 lab",
              val: "After unit testing steps are done, switch to capstone. TAs available.",
            },
            {
              label: "Session 2 lab",
              val: "Full capstone work session. Use performance tools from the lecture if useful.",
            },
            {
              label: "Between sessions",
              val: "Finish any remaining M4 features. Review teammate PRs. Run a quick perf audit.",
            },
            {
              label: "End of Session 2",
              val: "Submit M4 via the Slack form. Repo link + confirmation that required features are done.",
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

        <Warn>
          {
            'Have your app running on a device or emulator when you submit M4. The instructor will do a quick check during demo prep — "works on my machine" needs to be demonstrable, not theoretical.'
          }
        </Warn>

        <AiOpp>
          <em>Scope what{"'"}s left → </em>Ask Claude:{" "}
          <strong>
            {
              '"Our capstone has these features still to build: [list]. We have one week left until demo day. Which features are highest priority for a great demo? What\'s safe to cut?"'
            }
          </strong>
        </AiOpp>

        <div
          className="callout-ai"
          style={{
            marginTop: 16,
            padding: "12px 14px",
            background: "#F9F0FF",
            borderRadius: 8,
          }}
        >
          <strong>📅 Capstone Timeline</strong>
          <ul style={{ paddingLeft: 20, margin: "6px 0 0", lineHeight: 2 }}>
            <li style={{ opacity: 0.5 }}>
              Week 5: Team formation + platform selection ✅
            </li>
            <li style={{ opacity: 0.5 }}>Week 6: Proposal due ✅</li>
            <li style={{ opacity: 0.5 }}>
              Week 7: M1 — Repo setup, architecture scaffolded ✅
            </li>
            <li style={{ opacity: 0.5 }}>
              Week 8: M3 — Instructor check-in ✅
            </li>
            <li>
              <strong>Week 9 (this week):</strong> M4 — Feature-complete, Git
              branching workflow
            </li>
            <li>
              <strong>Week 10:</strong> Final — APK/TestFlight, demo day,
              written reflection
            </li>
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

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>
          📹 Session Recordings
        </h4>
        <ul style={{ paddingLeft: 20 }}>
          <li>
            <Link>Weekly Video Playlist</Link>
          </li>
          <li>
            <Link>Office Hours Video Playlist</Link>
          </li>
        </ul>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>
          May take 24–48 hours to appear after the session.
        </p>

        {isAndroid ? (
          <>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>
              🧪 Unit Testing — Android
            </h4>
            <ul style={{ paddingLeft: 20 }}>
              <li>
                <a
                  href="https://developer.android.com/training/testing/local-tests"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Local unit tests — Android developer guide
                </a>
              </li>
              <li>
                <a
                  href="https://kotlinlang.org/docs/coroutines-test.html"
                  style={{ color: "var(--color-text-info)" }}
                >
                  kotlinx-coroutines-test — runTest and advanceUntilIdle
                </a>
              </li>
              <li>
                <a
                  href="https://developer.android.com/training/testing/unit-testing/local-unit-tests"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Test doubles (fakes, mocks, stubs) — Android guide
                </a>
              </li>
            </ul>

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
              🧪 Unit Testing — iOS
            </h4>
            <ul style={{ paddingLeft: 20 }}>
              <li>
                <a
                  href="https://developer.apple.com/documentation/xctest"
                  style={{ color: "var(--color-text-info)" }}
                >
                  XCTest documentation — Apple developer docs
                </a>
              </li>
              <li>
                <a
                  href="https://developer.apple.com/documentation/xctest/asynchronous_tests_and_expectations"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Async tests with XCTest
                </a>
              </li>
              <li>
                <a
                  href="https://developer.apple.com/documentation/swift/testing"
                  style={{ color: "var(--color-text-info)" }}
                >
                  Swift Testing framework (Swift 6+)
                </a>
              </li>
            </ul>

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
export default function Week9Unit() {
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
          {"CodePath \u00B7 10 weeks \u00B7 2 sessions/week"}
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
        <LabTab platform={platform} setPlatform={setPlatform} />
      )}
      {tab === "Capstone" && (
        <CapstoneTab platform={platform} setPlatform={setPlatform} />
      )}
      {tab === "Resources" && (
        <ResourcesTab platform={platform} setPlatform={setPlatform} />
      )}
    </div>
  );
}
