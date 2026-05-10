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
    {title && <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0", letterSpacing: ".04em" }}>{title}</div>}
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Step = ({ n, title, children, accent = PURPLE }) => (
  <div style={{ marginBottom: 12, paddingLeft: 20, borderLeft: `2px solid #e5e7eb`, position: "relative" }}>
    <div style={{ position: "absolute", left: -14, top: -2, width: 26, height: 26, borderRadius: "50%", background: "#fff", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: accent }}>
      {n}
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: TEXT, margin: 0 }}>{title}</p>
    </div>
    <div>{children}</div>
  </div>
);

const Bullet = ({ children, sub, done }) => (
  <div style={{ display: "flex", gap: 8, margin: sub ? "3px 0 3px 20px" : "7px 0", alignItems: "flex-start" }}>
    <span style={{ color: done ? TEAL : sub ? TEAL : PURPLE, fontWeight: 700, fontSize: sub ? 12 : 14, marginTop: 1, flexShrink: 0 }}>{done ? "✓" : sub ? "◦" : "▸"}</span>
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

const Warn = ({ title, children }) => (
  <div className="callout-warn" style={{ background: "#fff3cd", border: "1px solid #f59e0b", borderRadius: 8, padding: "8px 12px", margin: "8px 0" }}>
    {title && <p style={{ fontSize: 12, fontWeight: 600, color: "#92400e", margin: "0 0 2px" }}>{title}</p>}
    <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Shell = ({ tag, tagColor, title, subtitle, timer, children, notes, dark }) => (
  <div style={{ background: dark ? PURPLE_DARK : "#fff", border: `1px solid ${dark ? "transparent" : "#e5e7eb"}`, borderRadius: 12, padding: "24px 28px 18px", minHeight: 360, display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        {tag && <Tag color={dark ? "#fff" : (tagColor || PURPLE)}>{tag}</Tag>}
        {timer && <span style={{ fontSize: 11, color: MUTED, background: GRAY, padding: "2px 8px", borderRadius: 20 }}>~{timer} min</span>}
      </div>
      <h2 style={{ fontSize: dark ? 24 : 20, fontWeight: 700, color: dark ? "#fff" : TEXT, margin: 0, lineHeight: 1.2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 13, color: dark ? "rgba(255,255,255,0.65)" : MUTED, margin: "5px 0 0", lineHeight: 1.4 }}>{subtitle}</p>}
    </div>
    <div style={{ flex: 1 }}>{children}</div>
    {notes && <Notes>{notes}</Notes>}
  </div>
);

export const slides = [
  // ─── SLIDE 1: Title ───
  () => (
    <div style={{ background: `linear-gradient(135deg, ${PURPLE_DARK} 0%, ${PURPLE} 100%)`, borderRadius: 12, padding: "44px 40px", minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
      <div>
        <div style={{ marginBottom: 10 }}><Tag color="#fff">Week 3 — Session 2</Tag></div>
        <h1 style={{ fontSize: 30, fontWeight: 800, color: "#fff", margin: "10px 0 8px", lineHeight: 1.2 }}>Forms, Sheets &<br/>Swipe Actions</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: "0 0 28px" }}>Making your lists fully interactive</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Builds on Session 1", "Android · Jetpack Compose", "iOS · SwiftUI"].map(t => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", borderLeft: `2px solid ${TEAL}`, paddingLeft: 8 }}>{t}</span>
          ))}
        </div>
      </div>
      <Notes>{"Welcome back! In Session 1, we learned how to build beautiful, scrolling lists. But they were read-only. Today, we're taking off the training wheels and making our lists fully interactive: adding items through forms, deleting items with swipe gestures, and using native mobile UX patterns like bottom sheets."}</Notes>
    </div>
  ),

  // ─── SLIDE 2: Recap ───
  () => (
    <Shell tag="Recap" timer="5" title="Quick recap — lists and state" notes="Warm up the room by asking these questions. We covered state in Week 1 and lists in Week 3 Session 1. Today brings those two concepts together.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Before we go further — let's review what we know about lists and state.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { q: "What is LazyColumn / List?", a: "A UI component that only renders items currently visible on the screen, saving memory." },
          { q: "What is state?", a: "The 'memory' of your screen. When state changes, the UI automatically updates (recomposes/re-evaluates)." },
          { q: "How do we hold state?", a: "var count by remember { mutableStateOf(0) } (Compose) or @State private var count = 0 (SwiftUI)." },
          { q: "What happens if a list isn't backed by state?", a: "It's read-only. If the underlying data changes, the list won't know to redraw." },
        ].map(item => (
          <div key={item.q} style={{ background: GRAY, borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: PURPLE, margin: "0 0 4px" }}>{item.q}</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.5 }}>{item.a}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        <Discussion>{"If we want to build a To-Do list where we can ADD and DELETE items, a standard List or LazyColumn isn't enough. We need a list backed by state. What UI elements do we need to actually gather the user's input to add a new item?"}</Discussion>
      </div>
    </Shell>
  ),

  // ─── SLIDE 3: Agenda ───
  () => (
    <Shell tag="Agenda" title="Today's session — ~55 minutes" notes="This is a highly interactive session. We're going to build out a full 'Add Item' flow using a bottom sheet, and add swipe-to-delete. It's our first taste of real CRUD operations on mobile!">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
        {[
          { num: "01", time: "5 min",  title: "Recap", desc: "Reviewing lists and state" },
          { num: "02", time: "8 min",  title: "Mobile Forms", desc: "Inputs, sliders, and toggles" },
          { num: "03", time: "10 min", title: "The Bottom Sheet UX", desc: "Why we use them & how they solve state headaches" },
          { num: "04", time: "15 min", title: "Live code: Add Item", desc: "Building a form in a bottom sheet to add to a list" },
          { num: "05", time: "10 min", title: "Swipe Actions", desc: "Swipe-to-delete: a core mobile gesture" },
          { num: "06", time: "5 min",  title: "Alert Dialogs", desc: "Confirming destructive actions" },
          { num: "07", time: "2 min",  title: "Recap + Lab", desc: "Review what we covered, then break before lab" },
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

  // ─── SLIDE 4: Mobile Forms vs Web Forms ───
  () => (
    <Shell tag="Forms" title="Mobile Forms aren't Web Forms" notes="Mobile input is tedious. Typing on a glass screen is inherently worse than a physical keyboard. Therefore, good mobile UX minimizes typing. If something can be a toggle, a slider, or a segmented control, it should be!">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px", textTransform: "uppercase" }}>Web Mental Model</p>
          <Bullet>Giant pages with 20 text fields</Bullet>
          <Bullet>Radio buttons and dropdowns</Bullet>
          <Bullet>Submit button at the very bottom</Bullet>
          <Bullet>Typing is fast on a physical keyboard</Bullet>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px", textTransform: "uppercase" }}>Mobile Mental Model</p>
          <Bullet>Small, focused tasks (3-4 inputs max)</Bullet>
          <Bullet>Sliders, Switches, and Date Pickers</Bullet>
          <Bullet>Keyboard pushes UI up (needs scrolling)</Bullet>
          <Bullet>Typing on glass is slow — use gestures!</Bullet>
        </div>
      </div>
      <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 10 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 3px" }}>Rule of Thumb</p>
        <p style={{ fontSize: 12, color: PURPLE, margin: 0 }}>Never make a user type if they can swipe, tap, or drag instead. Use the native components built for touch.</p>
      </div>
    </Shell>
  ),

  // ─── SLIDE 5a: Form Inputs (Compose) ───
  () => (
    <Shell tag="Forms" title="Form Inputs — Jetpack Compose" notes="Show them the core building blocks of a form in Compose. Remind them that inputs in declarative UI are 'stateless' — they don't hold their own text! We must pass state into them, and update state on change.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Inputs in declarative UI are "dumb" — they don't hold their own text. We must bind them to state.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <CodePane title="OutlinedTextField" accent={PURPLE}>
{`var title by remember { mutableStateOf("") }

OutlinedTextField(
    value = title,
    onValueChange = { title = it },
    label = { Text("Album Title") }
)`}
        </CodePane>
        <CodePane title="Switch" accent={PURPLE}>
{`var isFavorite by remember { mutableStateOf(false) }

Switch(
    checked = isFavorite,
    onCheckedChange = { isFavorite = it }
)`}
        </CodePane>
        <div style={{ gridColumn: "1 / -1" }}>
            <CodePane title="Slider (e.g. for a 1-5 rating)" accent={PURPLE}>
{`var rating by remember { mutableStateOf(3f) }

Slider(
    value = rating,
    onValueChange = { rating = it },
    valueRange = 1f..5f,
    steps = 3 // creates discrete steps (1, 2, 3, 4, 5)
)`}
            </CodePane>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 5b: Form Inputs (SwiftUI) ───
  () => (
    <Shell tag="Forms" title="Form Inputs — SwiftUI" notes="Show the SwiftUI equivalents. Notice how SwiftUI uses the '$' binding syntax, which makes two-way data binding slightly cleaner than Compose's value/onValueChange pairs.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>SwiftUI uses the <code>$</code> syntax to create a two-way binding directly to the @State variable.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <CodePane title="TextField" accent={TEAL}>
{`@State private var title = ""

TextField("Album Title", text: $title)
    .textFieldStyle(.roundedBorder)`}
        </CodePane>
        <CodePane title="Toggle" accent={TEAL}>
{`@State private var isFavorite = false

Toggle("Favorite", isOn: $isFavorite)`}
        </CodePane>
        <div style={{ gridColumn: "1 / -1" }}>
            <CodePane title="Slider (e.g. for a 1-5 rating)" accent={TEAL}>
{`@State private var rating: Double = 3

Slider(
    value: $rating, 
    in: 1...5, 
    step: 1
)`}
            </CodePane>
        </div>
      </div>
      <Info>{"The '$' in SwiftUI means 'I am giving this UI element permission to read AND write to my state variable.' It's shorthand for Compose's `value = x, onValueChange = { x = it }`."}</Info>
    </Shell>
  ),

  // ─── SLIDE 6: The Bottom Sheet UX ───
  () => (
    <Shell tag="UX Pattern" title="The Bottom Sheet" notes="Explain WHY we use bottom sheets. From a UX perspective, it keeps context. From a technical perspective (which is the real secret here), it keeps the form and the list in the same scope, so we don't have to pass state between screens yet!">
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 12, marginTop: 6 }}>
        <div>
          <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Why don't we navigate to a new "Add Item" screen?</p>
          <div style={{ background: GRAY, borderRadius: 8, padding: "14px 16px" }}>
            <Bullet><strong>Maintains Context:</strong> Users don't feel like they left the app.</Bullet>
            <Bullet><strong>Easy Dismissal:</strong> Just swipe it down to cancel.</Bullet>
            <Bullet><strong>Reachability:</strong> Keeps inputs close to the thumb on large phones.</Bullet>
            <Bullet><strong>State Simplification:</strong> Because it overlays the current screen, it shares the same state variables as the list! No complex state-passing required.</Bullet>
          </div>
        </div>
        <div style={{ background: PURPLE_LIGHT, borderRadius: 12, border: `2px solid ${PURPLE}`, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ flex: 1, padding: 10, opacity: 0.5, background: "#fff" }}>
            <div style={{ height: 10, width: "60%", background: "#e5e7eb", borderRadius: 4, marginBottom: 8 }}></div>
            <div style={{ height: 40, width: "100%", background: "#e5e7eb", borderRadius: 8, marginBottom: 8 }}></div>
            <div style={{ height: 40, width: "100%", background: "#e5e7eb", borderRadius: 8 }}></div>
          </div>
          <div style={{ background: "#fff", height: "60%", borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 16, boxShadow: "0 -4px 10px rgba(0,0,0,0.1)" }}>
            <div style={{ height: 4, width: 40, background: "#d1d5db", borderRadius: 2, margin: "0 auto 12px" }}></div>
            <p style={{ fontSize: 14, fontWeight: "bold", margin: "0 0 10px" }}>Add New Item</p>
            <div style={{ height: 30, width: "100%", border: "1px solid #e5e7eb", borderRadius: 4, marginBottom: 8 }}></div>
            <div style={{ height: 30, width: "100%", background: PURPLE, borderRadius: 4 }}></div>
          </div>
        </div>
      </div>
      <Warn title="The Secret Reason">{"State hoisting (passing data between totally separate screens) is hard. By using a Bottom Sheet, the form and the list live in the same file. The form can easily add items to the list's state!"}</Warn>
    </Shell>
  ),

  // ─── SLIDE 7a: Implementing a Bottom Sheet (Compose) ───
  () => (
    <Shell tag="Bottom Sheets" title="ModalBottomSheet in Compose" notes="Android's Bottom Sheet is slightly verbose. This is a perfect moment to suggest using AI to scaffold it. Explain that we need a boolean state to track if it's open, and the ModalBottomSheet composable itself.">
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="Compose Bottom Sheet" accent={PURPLE}>
{`var showSheet by remember { mutableStateOf(false) }

// A button to open it
FloatingActionButton(onClick = { showSheet = true }) {
    Icon(Icons.Default.Add, contentDescription = "Add")
}

// The sheet itself
if (showSheet) {
    ModalBottomSheet(
        onDismissRequest = { showSheet = false }
    ) {
        // Sheet Content goes here!
        Column(modifier = Modifier.padding(16.dp)) {
            Text("Add Item", fontSize = 24.sp)
            // TextField, Slider, etc.
        }
    }
}`}
        </CodePane>
        <div style={{ flex: 0.6, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ background: PURPLE_LIGHT, borderRadius: 8, padding: "14px 16px" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: PURPLE_DARK, margin: "0 0 8px" }}>Verbose? Yes.</p>
            <p style={{ fontSize: 12, color: PURPLE, margin: 0, lineHeight: 1.5 }}>Android's <code>ModalBottomSheet</code> requires experimental APIs and specific scaffolds in some versions.<br/><br/><strong>Pro tip:</strong> This is the perfect time to use AI. <br/><br/><em>"Claude, write me a simple Jetpack Compose screen with a LazyColumn and a FloatingActionButton that opens a ModalBottomSheet."</em></p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 7b: Implementing a Bottom Sheet (SwiftUI) ───
  () => (
    <Shell tag="Bottom Sheets" title="Sheets in SwiftUI" notes="SwiftUI makes sheets incredibly elegant. You just attach the `.sheet` modifier to a view, and pass the binding.">
      <div style={{ display: "flex", gap: 10 }}>
        <CodePane title="SwiftUI Sheet" accent={TEAL}>
{`@State private var showSheet = false

var body: some View {
    List {
        // list content
    }
    .safeAreaInset(edge: .bottom) {
        Button("Add Item") { showSheet = true }
    }
    // The modifier that attaches the sheet
    .sheet(isPresented: $showSheet) {
        // Sheet Content goes here!
        VStack {
            Text("Add Item").font(.title)
            // TextField, Slider, etc.
        }
        .padding()
        // Optional: Make it only take up half the screen!
        .presentationDetents([.medium, .large]) 
    }
}`}
        </CodePane>
      </div>
      <Info>{"In SwiftUI, `.sheet` is a modifier. Notice `presentationDetents` — this incredible one-liner lets the sheet snap to the middle or top of the screen."}</Info>
    </Shell>
  ),

  // ─── SLIDE 8: Live Code-Along Intro ───
  () => (
    <Shell tag="Live code-along" timer="15" title="Build: The Album Tracker" subtitle="Bringing it all together" dark notes="This is the core of the class. Walk through building this step-by-step.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>Our Goal Today</p>
          {[
            { n: 1, t: "Create a list backed by state" },
            { n: 2, t: "Add a FAB (Floating Action Button)" },
            { n: 3, t: "Open a Bottom Sheet on tap" },
            { n: 4, t: "Build an 'Add Album' form" },
            { n: 5, t: "Save the form data back to the list" },
          ].map(s => (
            <div key={s.n} style={{ display: "flex", gap: 8, margin: "5px 0", alignItems: "center" }}>
              <span style={{ background: TEAL, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{s.t}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: 12, color: TEAL, margin: "0 0 8px" }}>The List State:</p>
          <CodePane dark>
{`// Compose
val albums = remember { 
    mutableStateListOf<Album>() 
}

// SwiftUI
@State private var albums: [Album] = []`}
          </CodePane>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 8 }}>By keeping the list state and the sheet in the same file, the form can simply call <code>albums.add(newAlbum)</code> and the list instantly updates!</p>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 9: Swipe Actions ───
  () => (
    <Shell tag="Gestures" timer="10" title="Swipe to Delete" notes="We added data, now we need to remove it. Swipe-to-delete is the industry standard for removing items from a list on mobile. Show how it's done natively.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>You added data to the list. How do you remove it? A tiny 'X' button? No. We use gestures.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <CodePane title="Compose: SwipeToDismissBox" accent={PURPLE}>
{`// Requires experimental APIs currently
val dismissState = rememberSwipeToDismissBoxState(
    confirmValueChange = { dismissValue ->
        if (dismissValue == SwipeToDismissBoxValue.EndToStart) {
            albums.remove(album)
            true
        } else false
    }
)

SwipeToDismissBox(
    state = dismissState,
    backgroundContent = {
        // Red background with trash icon
        Box(Modifier.background(Color.Red)) {
            Icon(Icons.Default.Delete)
        }
    }
) {
    // Your normal list row goes here
    AlbumRow(album)
}`}
        </CodePane>
        <CodePane title="SwiftUI: .swipeActions" accent={TEAL}>
{`List {
    ForEach(albums) { album in
        AlbumRow(album: album)
            .swipeActions(edge: .trailing) {
                Button(role: .destructive) {
                    // Logic to delete
                    albums.removeAll { $0.id == album.id }
                } label: {
                    Label("Delete", systemImage: "trash")
                }
            }
    }
}`}
        </CodePane>
      </div>
      <Info>{"SwiftUI makes this remarkably easy with `.swipeActions`. Jetpack Compose's `SwipeToDismissBox` is a bit more manual, giving you full control over the background drawing."}</Info>
    </Shell>
  ),

  // ─── SLIDE 10: Alert Dialogs ───
  () => (
    <Shell tag="UX Pattern" timer="5" title="Confirming Destructive Actions" notes="Before deleting user data, always ask for confirmation. Explain the AlertDialog.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Wait! If a user accidentally swipes, their data is gone forever. We need an Alert Dialog.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <CodePane title="Compose AlertDialog" accent={PURPLE}>
{`var showDialog by remember { mutableStateOf(false) }

if (showDialog) {
    AlertDialog(
        onDismissRequest = { showDialog = false },
        title = { Text("Delete Album?") },
        text = { Text("This cannot be undone.") },
        confirmButton = {
            TextButton(onClick = {
                // Delete logic
                showDialog = false
            }) { Text("Delete", color = Color.Red) }
        },
        dismissButton = {
            TextButton(onClick = { showDialog = false }) {
                Text("Cancel")
            }
        }
    )
}`}
        </CodePane>
        <CodePane title="SwiftUI .alert" accent={TEAL}>
{`@State private var showDialog = false

// Attach modifier to your view
.alert("Delete Album?", isPresented: $showDialog) {
    Button("Cancel", role: .cancel) { }
    Button("Delete", role: .destructive) {
        // Delete logic here
    }
} message: {
    Text("This cannot be undone.")
}`}
        </CodePane>
      </div>
    </Shell>
  ),

  // ─── SLIDE 11: Wrap-up & Lab ───
  () => (
    <Shell tag="Lab Intro" title="Time to build: Interactive Lists" notes="Wrap up and transition to the lab.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
        <div style={{ background: GRAY, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: PURPLE, margin: "0 0 8px", textTransform: "uppercase" }}>What we learned today</p>
          <Bullet>Mobile inputs (Sliders, Switches) are better than typing.</Bullet>
          <Bullet>Bottom Sheets keep context and simplify state management.</Bullet>
          <Bullet>Swipe actions are the native way to delete data.</Bullet>
          <Bullet>Alert dialogs prevent accidental data loss.</Bullet>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: TEAL, margin: "0 0 8px", textTransform: "uppercase" }}>The Lab: Expense Tracker</p>
          <Bullet>Build an app to track your expenses.</Bullet>
          <Bullet>Use a Bottom Sheet to add new expenses (Name, Amount, Category).</Bullet>
          <Bullet>Add swipe-to-delete for mistakes.</Bullet>
          <Bullet>Challenge: Calculate and display the total amount dynamically!</Bullet>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <p style={{ fontSize: 16, fontWeight: "bold", color: TEXT }}>Take a 5 minute break, then open your Lab instructions!</p>
      </div>
    </Shell>
  ),

];

export default function App() {
  const [cur, setCur] = useState(0);
  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: ".06em" }}>Week 3 · Session 2 · {slides.length} slides</p>
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
