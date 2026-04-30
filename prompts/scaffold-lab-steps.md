# Prompt: Scaffold Lab Steps with Guided Sub-Steps

Use this prompt when a lab step just dumps a code block without letting students attempt anything first. Paste this prompt into Claude, followed by the lab TSX you want to rework.

---

## The Prompt

I'm building a mobile development lab for beginners (Kotlin/Compose and Swift/SwiftUI). The lab is written as a TSX React component. I want you to rework one or more steps so that instead of immediately handing students the full solution code, they are guided to build it themselves piece by piece.

**The goal:** students should attempt each part before seeing the answer. Hints and full code should be collapsible so students who are stuck can still get help, but students who can figure it out get to keep the win.

---

### Components already available in the file

```tsx
// Vertical step with a numbered circle and connecting line
// Use last={true} on the final VStep in a sequence to remove the connector
<VStep num={1} title="...">content</VStep>
<VStep num={2} title="..." last>content</VStep>

// Collapsible section (use for all hints and check-your-work blocks)
<Section title="...">content</Section>

// Inline code
<IC>someCode</IC>

// Code block with optional title and accent color
<CodeB title="Kotlin — file.kt" accent={BL}>{ `...` }</CodeB>
<CodeB title="Swift — file.swift" accent={GR}>{ `...` }</CodeB>

// Green checkpoint callout
<Checkpoint num={2}>What the student should be able to verify at this point.</Checkpoint>

// Purple tip callout
<Tip>...</Tip>

// Checkbox (for student to check off)
<Checkbox>...</Checkbox>
```

If `VStep` is not yet defined in the file, add this component near the other component definitions:

```tsx
const VStep = ({ num, title, children, last = false }: { num: number; title: string; children: React.ReactNode; last?: boolean }) => (
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
```

---

### Rules for breaking a step into sub-steps

**When to apply this treatment:**
- Any step that immediately shows a full working code block (30+ lines) without guidance
- Especially when the code introduces a concept that is new to beginners
- Steps with multiple distinct concerns (layout, content, interaction) lumped together

**When NOT to apply:**
- Simple setup steps (create a new project, sync gradle)
- Reflection or journaling steps
- AI translation / comparison steps
- Stretch features

**How to split a step:**
- Group by logical unit of work: e.g. layout container → text content → interactive elements
- Each sub-step should be independently runnable/compilable where possible
- Order should mirror how a developer would actually build it top-to-bottom

---

### Structure of each sub-step

Each sub-step is a `VStep` with `num` using letters starting at "a" (e.g. `num="a"`, `num="b"`). Pass `last` to the final one in the sequence.

Each sub-step follows this pattern:

1. **Instructions** — plain English description of what to build. Include specific details: modifier names, parameter names, colors/sizes, etc. so students have enough to attempt it without the code.

2. **Partial syntax hint (optional)** — if the syntax is genuinely unfamiliar, show a skeleton with the concept but not the solution. Use a `<Section title="💡 Show me the syntax">` that the student has to click to open. Don't always include this — only when the syntax is new.

3. **Check your work** — at the end of EVERY sub-step, include a collapsible that shows the **complete accumulated file up to that point** (not just the snippet for that sub-step). Title it:
   ```
   ✅ Check your work — show me the complete [FileName] so far
   ```
   Or if it's the last sub-step:
   ```
   ✅ Check your work — show me the complete [FileName]
   ```

4. **Intermediate Checkpoint (optional)** — if the student can run the app and verify something after this sub-step, add a `<Checkpoint>`. Not every sub-step needs one.

---

### Example of the pattern

**Before (bad — just a code dump):**

```tsx
<VStep num={2} title="Build the home screen (~10 min)">
  <p>Build the home screen.</p>
  <CodeB title="Kotlin — HomeScreen.kt" accent={BL}>{`
@Composable
fun HomeScreen(onStartClicked: () -> Unit) {
    Column(...) {
        Text("Trivia Challenge", ...)
        Text("Test your knowledge!", ...)
        Spacer(...)
        Button(onClick = onStartClicked, ...) { Text("Start Quiz") }
    }
}`}</CodeB>
  <Checkpoint num={2}>Run the app. You should see the home screen.</Checkpoint>
</VStep>
```

**After (good — guided sub-steps using VStep):**

```tsx
<VStep num={2} title="Build the home screen (~10 min)">
  <p>Build a simple home screen. Notice that <IC>onStartClicked</IC> is a <em>parameter</em> — a function passed into the screen. This keeps HomeScreen ignorant of navigation: it fires the callback, and whoever calls it decides what to do.</p>

  <VStep num="a" title="Set up the screen layout">
    <p>Create <IC>HomeScreen.kt</IC>. Add a <IC>@Composable</IC> function <IC>HomeScreen</IC> that takes one parameter: <IC>onStartClicked: () -&gt; Unit</IC>. Inside, add a <IC>Column</IC> that fills the screen, has a light-gray background, 32dp padding, and centers children both vertically and horizontally.</p>
    <Section title="✅ Check your work — show me the complete file so far">
      <CodeB title="Kotlin — HomeScreen.kt (layout only)" accent={BL}>{`@Composable
fun HomeScreen(onStartClicked: () -> Unit) {
    Column(
        modifier = Modifier.fillMaxSize().background(Color(0xFFF5F5F5)).padding(32.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // content goes here
    }
}`}</CodeB>
    </Section>
  </VStep>

  <VStep num="b" title="Add the title and tagline">
    <p>Inside the Column, add a bold title "Trivia Challenge" (32sp, purple), a small gray tagline "Test your knowledge!" (16sp), and a 48dp Spacer between the tagline and the button.</p>
    <Section title="✅ Check your work — show me the complete file so far">
      <CodeB title="Kotlin — HomeScreen.kt (with title + tagline)" accent={BL}>{`@Composable
fun HomeScreen(onStartClicked: () -> Unit) {
    Column(...) {
        Text("Trivia Challenge", fontSize = 32.sp, fontWeight = FontWeight.Bold, color = Color(0xFF534AB7))
        Spacer(Modifier.height(8.dp))
        Text("Test your knowledge!", fontSize = 16.sp, color = Color.Gray)
        Spacer(Modifier.height(48.dp))
        // button goes here
    }
}`}</CodeB>
    </Section>
  </VStep>

  <VStep num="c" title="Add the Start Quiz button" last>
    <p>Add a <IC>Button</IC> that calls <IC>onStartClicked</IC>, fills the full width, and uses the purple background color.</p>
    <Section title="✅ Check your work — show me the complete HomeScreen.kt">
      <CodeB title="Kotlin — HomeScreen.kt (complete)" accent={BL}>{`...full final code...`}</CodeB>
    </Section>
  </VStep>

  <Checkpoint num={2}>Run the app. You should see the home screen with the Start Quiz button. Tapping it does nothing yet.</Checkpoint>
</VStep>
```

---

### Additional guidelines

- **Write for beginners.** Students are a few weeks into mobile development. Explain the *why* behind each piece, not just the *what*.
- **Don't over-split.** 2–4 sub-steps per VStep is the right range. A sub-step for adding a single Spacer is too granular.
- **Always pass `last` to the final VStep** in a nested sequence. This removes the connecting line so the visual timeline terminates cleanly.
- **Cumulative file is non-negotiable.** Every sub-step must end with a "check your work" showing the full file at that point. This is the most important rule — students need to be able to verify their entire file, not just the latest snippet.
- **Platform-conditional code:** if the lab has `platform === "Android"` / `platform === "iOS"` branches, maintain both branches in every sub-step and in every "check your work" block.
- **Keep the VStep's own Checkpoint.** The overall `<Checkpoint num={N}>` at the end of the parent VStep (usually the run-the-app verify) should remain — sub-step checkpoints are in addition to it, not replacements.
- **Preserve all existing hints and tips** that are already in the step unless they become redundant.

---

Paste the TSX for the step(s) you want reworked below this line, and tell me which steps to apply this treatment to.
