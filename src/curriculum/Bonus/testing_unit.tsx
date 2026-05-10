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
        Bonus: Unit Testing
      </h2>

      <p
        style={{
          fontSize: 13,
          color: "var(--color-text-secondary)",
          lineHeight: 1.7,
          margin: "0 0 16px",
        }}
      >
        Self-paced introduction to unit testing on mobile — a professional
        skill that makes your code more reliable and easier to change. You{"'"}ll
        write tests for a starter ViewModel using fakes, then use Claude to
        find edge cases you hadn{"'"}t thought of.
      </p>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 10px" }}>What this unit covers:</p>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>
            {isAndroid
              ? "JUnit4 + test doubles — unit testing a ViewModel in isolation"
              : "XCTest — unit testing a ViewModel in isolation"}
          </li>
          <li>What makes code testable, and how MVVM sets you up for it</li>
          <li>
            Writing tests for Loading, Success, and Error state transitions
          </li>
          <li>
            Using fakes/stubs to swap real network calls for predictable test
            doubles
          </li>
          <li>Using Claude to find edge cases you haven{"'"}t considered</li>
          <li>Reading assertion errors and debugging a failing test</li>
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
              val: "Write tests for a starter ViewModel using fakes. Find edge cases with Claude. ~50–60 minutes.",
            },
            {
              label: "Format",
              val: "Self-paced bonus content. Work through the lab at your own pace — no submission required.",
            },
            {
              label: "Prereqs",
              val: "Comfort with MVVM and a working ViewModel pattern. Helpful: a project of your own to apply this to.",
            },
            {
              label: "Tools",
              val: isAndroid
                ? "JUnit4, kotlinx-coroutines-test (runTest, TestDispatcher)."
                : "XCTest with async test functions (Swift 5.5+).",
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
        Lab: Writing Unit Tests for a ViewModel
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

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

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
          and no Android/iOS framework dependencies (if it was written
          correctly). That means you can run tests on the JVM or in Swift
          without a simulator. If your ViewModel is hard to test, it{"'"}s a
          signal the architecture needs work.
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
      <VStep num={5} title="Apply it to your own project (optional)" last>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          <p>
            If you have a project of your own, the next step is to write one
            real test against one of its ViewModels.
          </p>
          <Tip>
            The testing pattern you just practiced — fake repository, state
            assertions, edge cases — works identically on any MVVM ViewModel.
            Pick the simplest ViewModel in your project and add one Loading or
            Success test for it.
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
          <li>Write one test for a ViewModel in your own project</li>
        </ul>
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
          </>
        )}
      </div>
    </div>
  );
}

/* ====== MAIN ====== */
export default function TestingUnit() {
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
