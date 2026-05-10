import React, { useState } from "react";

const PURPLE = "#534AB7";
const PURPLE_DARK = "#3C3489";
const PURPLE_LIGHT = "#EEEDFE";
const TEAL = "#1D9E75";
const TEAL_LIGHT = "#E1F5EE";
const GRAY = "#F5F5F7";
const TEXT = "#1a1a2e";
const MUTED = "#6b7280";

const preStyle = { margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 10, padding: "8px 12px", borderRadius: 6, lineHeight: 1.6, fontFamily: "monospace", whiteSpace: "pre-wrap" as const };

const Tag = ({ children, color = PURPLE }: { [k: string]: any }) => (
  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", background: color === PURPLE ? PURPLE_LIGHT : TEAL_LIGHT, color, padding: "2px 8px", borderRadius: 20 }}>{children}</span>
);

const CodePane = ({ title, accent = PURPLE, children }: { [k: string]: any }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    {title && <div style={{ background: accent, color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: "8px 8px 0 0", letterSpacing: ".04em" }}>{title}</div>}
    <pre style={{ margin: 0, background: "#1e1e2e", color: "#cdd6f4", fontSize: 11, padding: "12px 14px", borderRadius: title ? "0 0 8px 8px" : 8, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>{children}</pre>
  </div>
);

const Step = ({ n, title, children, accent = PURPLE }: { [k: string]: any }) => (
  <div style={{ marginBottom: 10, paddingLeft: 24, borderLeft: `2px solid #e5e7eb`, position: "relative" }}>
    <div style={{ position: "absolute", left: -14, top: 0, width: 26, height: 26, borderRadius: "50%", background: "#fff", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: accent }}>
      {n}
    </div>
    <p style={{ fontSize: 12, fontWeight: 700, color: TEXT, margin: "2px 0 6px" }}>{title}</p>
    <div>{children}</div>
  </div>
);

const Bullet = ({ children, sub, done }: { [k: string]: any }) => (
  <div style={{ display: "flex", gap: 8, margin: sub ? "3px 0 3px 20px" : "7px 0", alignItems: "flex-start" }}>
    <span style={{ color: done ? TEAL : sub ? TEAL : PURPLE, fontWeight: 700, fontSize: sub ? 12 : 14, marginTop: 1, flexShrink: 0 }}>{done ? "✓" : sub ? "◦" : "▸"}</span>
    <span style={{ fontSize: sub ? 13 : 14, color: sub ? MUTED : TEXT, lineHeight: 1.5 }}>{children}</span>
  </div>
);

const Notes = ({ children }: { [k: string]: any }) => (
  <div style={{ borderTop: `2px dashed ${PURPLE_LIGHT}`, marginTop: 14, paddingTop: 10 }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: PURPLE, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".06em" }}>Speaker notes</p>
    <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.6 }}>{children}</p>
  </div>
);

const Discussion = ({ children }: { [k: string]: any }) => (
  <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "10px 14px", margin: "10px 0" }}>
    <p style={{ fontSize: 11, fontWeight: 600, color: TEAL, margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".06em" }}>Discussion prompt</p>
    <p style={{ fontSize: 13, color: "#085041", margin: 0, lineHeight: 1.5 }}>{children}</p>
  </div>
);

const Info = ({ children }: { [k: string]: any }) => (
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

const Shell = ({ tag, tagColor, title, subtitle, timer, children, notes, dark }: { [k: string]: any }) => (
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

const OSToggle = ({ android, ios }: { [k: string]: any }) => {
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

const ViewToggle = ({ steps, full }: { [k: string]: any }) => {
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

  // ─── SLIDE 5: Conceptual A (Why inputs don't hold state) ───
  () => (
    <Shell tag="Concept" title="Why inputs don't hold their own state" notes="Explain declarative UI state binding.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>In traditional UI, a TextField is a box that remembers what you typed. In Declarative UI, a TextField is just a window showing the current value of a variable.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px" }}>Traditional UI (Imperative)</p>
          <div style={{ background: "#fff", border: "1px solid #ccc", padding: 8, borderRadius: 4, marginBottom: 8, color: "#aaa" }}>User types "Hello"</div>
          <p style={{ fontSize: 12, color: "#b91c1c" }}>The text field holds the string internally. When you need it, you query the field: <code>textField.getText()</code></p>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>Declarative UI (Compose / SwiftUI)</p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ background: "#fff", border: `1px solid ${TEAL}`, padding: 8, borderRadius: 4, flex: 1, color: TEAL, fontWeight: 600 }}>State: "Hello"</div>
            <span style={{ fontSize: 20 }}>↔️</span>
            <div style={{ background: "#fff", border: "1px solid #ccc", padding: 8, borderRadius: 4, flex: 1 }}>UI shows "Hello"</div>
          </div>
          <p style={{ fontSize: 12, color: TEAL }}>The field has no memory. It displays the state. When the user types, it asks the state to update. The UI then redraws.</p>
        </div>
      </div>
      <Info>{"This is why we must bind inputs to a state variable. Without state, the input is read-only and won't change when you type!"}</Info>
    </Shell>
  ),

  // ─── SLIDE 6: Form Inputs (Merged OSToggle) ───
  () => (
    <Shell tag="Forms" title="Form Inputs in Declarative UI" notes="Show how to bind inputs to state on both platforms.">
      <OSToggle
        android={
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <CodePane title="OutlinedTextField" accent={PURPLE}>{`var title by remember { mutableStateOf("") }\n\nOutlinedTextField(\n    value = title,\n    onValueChange = { title = it },\n    label = { Text("Album Title") }\n)`}</CodePane>
            <CodePane title="Switch" accent={PURPLE}>{`var isFavorite by remember { mutableStateOf(false) }\n\nSwitch(\n    checked = isFavorite,\n    onCheckedChange = { isFavorite = it }\n)`}</CodePane>
            <div style={{ gridColumn: "1 / -1" }}>
                <CodePane title="Slider (e.g. for a 1-5 rating)" accent={PURPLE}>{`var rating by remember { mutableStateOf(3f) }\n\nSlider(\n    value = rating,\n    onValueChange = { rating = it },\n    valueRange = 1f..5f,\n    steps = 3\n)`}</CodePane>
            </div>
          </div>
        }
        ios={
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <CodePane title="TextField" accent={TEAL}>{`@State private var title = ""\n\nTextField("Album Title", text: $title)\n    .textFieldStyle(.roundedBorder)`}</CodePane>
            <CodePane title="Toggle" accent={TEAL}>{`@State private var isFavorite = false\n\nToggle("Favorite", isOn: $isFavorite)`}</CodePane>
            <div style={{ gridColumn: "1 / -1" }}>
                <CodePane title="Slider (e.g. for a 1-5 rating)" accent={TEAL}>{`@State private var rating: Double = 3\n\nSlider(\n    value: $rating, \n    in: 1...5, \n    step: 1\n)`}</CodePane>
            </div>
            <div style={{ gridColumn: "1 / -1", marginTop: 8 }}>
                <Info>{"The '$' in SwiftUI creates a two-way binding. It means 'I am giving this UI element permission to read AND write to my state variable.' It's shorthand for Compose's `value = x, onValueChange = { x = it }`."}</Info>
            </div>
          </div>
        }
      />
    </Shell>
  ),

  // ─── SLIDE 7: The Bottom Sheet UX ───
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

  // ─── SLIDE 8: Conceptual B (How a Bottom Sheet is wired) ───
  () => (
    <Shell tag="Concept" title="How a Bottom Sheet is wired" notes="Explain the state mechanism behind bottom sheets.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>A bottom sheet isn't a new screen. It's an overlay controlled by a simple boolean switch.</p>
      <div style={{ display: "flex", gap: 20, alignItems: "center", background: GRAY, padding: 20, borderRadius: 12 }}>
        <div style={{ flex: 1, background: "#fff", border: `2px solid ${PURPLE}`, borderRadius: 8, padding: 16, textAlign: "center" }}>
          <p style={{ fontSize: 14, fontWeight: "bold", color: PURPLE, margin: "0 0 8px" }}>State Variable</p>
          <div style={{ display: "inline-block", background: PURPLE_LIGHT, padding: "4px 12px", borderRadius: 20, color: PURPLE_DARK, fontFamily: "monospace", fontWeight: "bold" }}>showSheet = true</div>
        </div>
        <div style={{ fontSize: 24, color: MUTED }}>→</div>
        <div style={{ flex: 1.5 }}>
          <Bullet><strong>The boolean is the on/off switch.</strong></Bullet>
          <Bullet>Setting it to <code>true</code> (e.g., tapping an Add button) renders the sheet overlay.</Bullet>
          <Bullet>Setting it to <code>false</code> (e.g., tapping Submit, or swiping it down) hides the sheet.</Bullet>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 9: Implementing a Bottom Sheet (Merged OSToggle) ───
  () => (
    <Shell tag="Bottom Sheets" title="Adding the Sheet" notes="Show how to trigger the sheet on both platforms.">
      <OSToggle
        android={
          <div style={{ display: "flex", gap: 10 }}>
            <CodePane title="Compose ModalBottomSheet" accent={PURPLE}>{`var showSheet by remember { mutableStateOf(false) }\n\nFloatingActionButton(onClick = { showSheet = true }) {\n    Icon(Icons.Default.Add, contentDescription = "Add")\n}\n\nif (showSheet) {\n    ModalBottomSheet(onDismissRequest = { showSheet = false }) {\n        Column(modifier = Modifier.padding(16.dp)) {\n            Text("Add Item")\n        }\n    }\n}`}</CodePane>
            <div style={{ flex: 0.6, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Info>{"ModalBottomSheet is stable in Material 3. Simply wrap it in an `if (showSheet)` condition, and pass `showSheet = false` to onDismissRequest so it can close itself."}</Info>
            </div>
          </div>
        }
        ios={
          <div style={{ display: "flex", gap: 10 }}>
            <CodePane title="SwiftUI .sheet Modifier" accent={TEAL}>{`@State private var showSheet = false\n\nvar body: some View {\n    List { /* ... */ }\n    .toolbar {\n        Button("Add") { showSheet = true }\n    }\n    .sheet(isPresented: $showSheet) {\n        VStack {\n            Text("Add Item")\n        }\n        .padding()\n        .presentationDetents([.medium, .large])\n    }\n}`}</CodePane>
            <div style={{ flex: 0.6, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Info>{"In SwiftUI, `.sheet` is a modifier attached to the List or main view. Notice `presentationDetents` — this incredible one-liner lets the sheet snap to the middle or top of the screen."}</Info>
            </div>
          </div>
        }
      />
    </Shell>
  ),

  // ─── SLIDE 10: Live Code-Along Intro ───
  () => (
    <Shell tag="Live code-along" timer="15" title="Build: The Album Tracker" subtitle="Bringing it all together" dark notes="This is the core of the class. Walk through building this step-by-step.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: "0 0 10px" }}>Our Goal Today</p>
          {[
            { n: 1, t: "Create a list backed by state" },
            { n: 2, t: "Add a toolbar / Floating Action Button" },
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
          <OSToggle
            android={<CodePane dark accent={PURPLE}>{`val albums = remember { \n    mutableStateListOf<Album>() \n}`}</CodePane>}
            ios={<CodePane dark accent={TEAL}>{`@State private var albums: [Album] = []`}</CodePane>}
          />
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 8 }}>By keeping the list state and the sheet in the same file, the form can simply add new items directly to the list array, and the UI will automatically update!</p>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE: Unique IDs ───
  () => (
    <Shell tag="Concept" title="The importance of Unique IDs" notes="Explain why lazy lists need unique IDs when items can be deleted or added.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>When lists become interactive (adding and deleting items), the UI needs to know exactly which item changed to animate smoothly and avoid bugs.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c", margin: "0 0 8px" }}>Bad: Relying on Index</p>
          <Bullet>If you delete item at index 1, item 2 becomes index 1.</Bullet>
          <Bullet>The UI gets confused about what to animate.</Bullet>
          <Bullet>Can cause crashes when deleting items fast.</Bullet>
        </div>
        <div style={{ background: TEAL_LIGHT, border: `1px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: TEAL, margin: "0 0 8px" }}>Good: Stable Unique IDs</p>
          <Bullet>Every item has a unique string/UUID.</Bullet>
          <Bullet>Compose uses the <code>key</code> parameter.</Bullet>
          <Bullet>SwiftUI uses the <code>Identifiable</code> protocol.</Bullet>
        </div>
      </div>
      <Info>{"Always assign a unique ID (like a UUID) to data models when they will be displayed in an interactive list."}</Info>
    </Shell>
  ),

  // ─── SLIDE 11: Live Code 1 (Add Album 1/3) ───
  () => (
    <Shell tag="Live code-along — Step 1 of 3" title="State & The Add Button" subtitle="Setting up the list state and trigger">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Make the list mutable">
                    <pre style={preStyle}>{`val albums = remember { mutableStateListOf<Album>() }\nvar showAddSheet by remember { mutableStateOf(false) }`}</pre>
                  </Step>
                  <Step n={2} title="Add the Floating Action Button">
                    <pre style={preStyle}>{`Scaffold(\n    floatingActionButton = {\n        FloatingActionButton(onClick = { showAddSheet = true }) {\n            Icon(Icons.Default.Add, contentDescription = "Add Album")\n        }\n    }\n) { paddingValues ->\n    // ...`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={1} title="Define the state variables" accent={TEAL}>
                    <pre style={preStyle}>{`@State private var albums: [Album] = []\n@State private var showAddSheet = false`}</pre>
                  </Step>
                  <Step n={2} title="Add a toolbar button to trigger it" accent={TEAL}>
                    <pre style={preStyle}>{`NavigationStack {\n    List(albums) { album in\n        AlbumRow(album: album)\n    }\n    .toolbar {\n        ToolbarItem(placement: .navigationBarTrailing) {\n            Button(action: { showAddSheet = true }) {\n                Image(systemName: "plus")\n            }\n        }\n    }\n}`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
             <OSToggle
                android={<CodePane title="Kotlin — Step 1 & 2" accent={PURPLE}>{`val albums = remember { mutableStateListOf<Album>() }\nvar showAddSheet by remember { mutableStateOf(false) }\n\nScaffold(\n    floatingActionButton = {\n        FloatingActionButton(onClick = { showAddSheet = true }) {\n            Icon(Icons.Default.Add, contentDescription = "Add Album")\n        }\n    }\n) { paddingValues ->\n    LazyColumn(contentPadding = paddingValues) {\n        items(albums) { album -> AlbumRow(album) }\n    }\n}`}</CodePane>}
                ios={<CodePane title="Swift — Step 1 & 2" accent={TEAL}>{`@State private var albums: [Album] = []\n@State private var showAddSheet = false\n\nvar body: some View {\n    NavigationStack {\n        List(albums) { album in\n            AlbumRow(album: album)\n        }\n        .navigationTitle("Albums")\n        .toolbar {\n            ToolbarItem(placement: .navigationBarTrailing) {\n                Button(action: { showAddSheet = true }) {\n                    Image(systemName: "plus")\n                }\n            }\n        }\n    }\n}`}</CodePane>}
             />
          }
        />
      </div>
      <Info>{"First, we need state to hold our albums and a boolean to control the bottom sheet. Then we add a button to set that boolean to true."}</Info>
    </Shell>
  ),

  // ─── SLIDE: Testing the connection ───
  () => (
    <Shell tag="Checkpoint" title="Testing the connection" notes="Take a moment to verify the FAB toggles the boolean.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Before we build the complex Bottom Sheet form, let's verify our state is working!</p>
      <div style={{ background: GRAY, borderRadius: 8, padding: "16px", textAlign: "center" }}>
        <p style={{ fontSize: 14, fontWeight: "bold", color: TEXT, marginBottom: 12 }}>Does your button flip the boolean?</p>
        <OSToggle
          android={<CodePane title="Print to Logcat" accent={PURPLE}>{`FloatingActionButton(onClick = {\n    showAddSheet = true\n    println("Sheet state is now: $showAddSheet")\n})`}</CodePane>}
          ios={<CodePane title="Print to Console" accent={TEAL}>{`Button(action: {\n    showAddSheet = true\n    print("Sheet state is now: \\(showAddSheet)")\n})`}</CodePane>}
        />
      </div>
      <Info>{"Debugging UI is hard. Always verify your state updates before building the UI that depends on it!"}</Info>
    </Shell>
  ),

  // ─── SLIDE 12: Live Code 2 (Add Album 2/3) ───
  () => (
    <Shell tag="Live code-along — Step 2 of 3" title="The Bottom Sheet UI" subtitle="Creating the form overlay">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={3} title="Add the ModalBottomSheet conditionally">
                    <pre style={preStyle}>{`if (showAddSheet) {\n    ModalBottomSheet(onDismissRequest = { showAddSheet = false }) {\n        AddAlbumForm() // We will build this next!\n    }\n}`}</pre>
                  </Step>
                  <Step n={4} title="Create the Form Composable">
                    <pre style={preStyle}>{`@Composable\nfun AddAlbumForm() {\n    var title by remember { mutableStateOf("") }\n    var artist by remember { mutableStateOf("") }\n    \n    Column(modifier = Modifier.padding(16.dp)) {\n        Text("Add New Album", style = MaterialTheme.typography.titleLarge)\n        OutlinedTextField(value = title, onValueChange = { title = it }, label = { Text("Title") })\n        OutlinedTextField(value = artist, onValueChange = { artist = it }, label = { Text("Artist") })\n        // Submit button next...\n    }\n}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={3} title="Attach the .sheet modifier" accent={TEAL}>
                    <pre style={preStyle}>{`    // ... List closing bracket\n    .sheet(isPresented: $showAddSheet) {\n        AddAlbumForm()\n            .presentationDetents([.medium])\n    }\n}`}</pre>
                  </Step>
                  <Step n={4} title="Create the Form View" accent={TEAL}>
                    <pre style={preStyle}>{`struct AddAlbumForm: View {\n    @State private var title = ""\n    @State private var artist = ""\n    \n    var body: some View {\n        NavigationStack {\n            Form {\n                TextField("Title", text: $title)\n                TextField("Artist", text: $artist)\n            }\n            .navigationTitle("Add New Album")\n            // Submit button next...\n        }\n    }\n}`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
             <OSToggle
                android={<CodePane title="Kotlin — Step 3 & 4" accent={PURPLE}>{`if (showAddSheet) {\n    ModalBottomSheet(onDismissRequest = { showAddSheet = false }) {\n        AddAlbumForm()\n    }\n}\n\n// Somewhere else in the file\n@Composable\nfun AddAlbumForm() {\n    var title by remember { mutableStateOf("") }\n    var artist by remember { mutableStateOf("") }\n    \n    Column(modifier = Modifier.padding(16.dp)) {\n        Text("Add New Album", style = MaterialTheme.typography.titleLarge)\n        OutlinedTextField(value = title, onValueChange = { title = it }, label = { Text("Title") })\n        OutlinedTextField(value = artist, onValueChange = { artist = it }, label = { Text("Artist") })\n    }\n}`}</CodePane>}
                ios={<CodePane title="Swift — Step 3 & 4" accent={TEAL}>{`    .sheet(isPresented: $showAddSheet) {\n        AddAlbumForm()\n            .presentationDetents([.medium])\n    }\n\n// Somewhere else in the file\nstruct AddAlbumForm: View {\n    @State private var title = ""\n    @State private var artist = ""\n    \n    var body: some View {\n        NavigationStack {\n            Form {\n                TextField("Title", text: $title)\n                TextField("Artist", text: $artist)\n            }\n            .navigationTitle("Add New Album")\n        }\n    }\n}`}</CodePane>}
             />
          }
        />
      </div>
    </Shell>
  ),

  // ─── SLIDE 13: Live Code 3 (Add Album 3/3) ───
  () => (
    <Shell tag="Live code-along — Step 3 of 3" title="Saving the Data" subtitle="Sending the form data back to the list">
      <div style={{ marginTop: 8 }}>
        <ViewToggle
          steps={
            <OSToggle
              android={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={5} title="Pass a callback to the form">
                    <pre style={preStyle}>{`@Composable\nfun AddAlbumForm(onSubmit: (Album) -> Unit) {\n    // ... form fields ...\n    Button(onClick = {\n        val newAlbum = Album(id = UUID.randomUUID().toString(), title = title, artist = artist)\n        onSubmit(newAlbum)\n    }) {\n        Text("Save Album")\n    }\n}`}</pre>
                  </Step>
                  <Step n={6} title="Handle the submission">
                    <pre style={preStyle}>{`if (showAddSheet) {\n    ModalBottomSheet(onDismissRequest = { showAddSheet = false }) {\n        AddAlbumForm(onSubmit = { newAlbum -> \n            albums.add(newAlbum)\n            showAddSheet = false\n        })\n    }\n}`}</pre>
                  </Step>
                </div>
              }
              ios={
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Step n={5} title="Pass a callback closure" accent={TEAL}>
                    <pre style={preStyle}>{`struct AddAlbumForm: View {\n    var onSubmit: (Album) -> Void\n    // ... form fields ...\n    Button("Save Album") {\n        let newAlbum = Album(id: UUID().uuidString, title: title, artist: artist)\n        onSubmit(newAlbum)\n    }\n}`}</pre>
                  </Step>
                  <Step n={6} title="Handle the submission" accent={TEAL}>
                    <pre style={preStyle}>{`.sheet(isPresented: $showAddSheet) {\n    AddAlbumForm { newAlbum in\n        albums.append(newAlbum)\n        showAddSheet = false\n    }\n    .presentationDetents([.medium])\n}`}</pre>
                  </Step>
                </div>
              }
            />
          }
          full={
             <OSToggle
                android={<CodePane title="Kotlin — Step 5 & 6" accent={PURPLE}>{`if (showAddSheet) {\n    ModalBottomSheet(onDismissRequest = { showAddSheet = false }) {\n        AddAlbumForm(onSubmit = { newAlbum -> \n            albums.add(newAlbum)\n            showAddSheet = false\n        })\n    }\n}\n\n@Composable\nfun AddAlbumForm(onSubmit: (Album) -> Unit) {\n    var title by remember { mutableStateOf("") }\n    var artist by remember { mutableStateOf("") }\n    Column(modifier = Modifier.padding(16.dp)) {\n        OutlinedTextField(value = title, onValueChange = { title = it }, label = { Text("Title") })\n        OutlinedTextField(value = artist, onValueChange = { artist = it }, label = { Text("Artist") })\n        Button(onClick = {\n            val newAlbum = Album(id = UUID.randomUUID().toString(), title = title, artist = artist)\n            onSubmit(newAlbum)\n        }) {\n            Text("Save Album")\n        }\n    }\n}`}</CodePane>}
                ios={<CodePane title="Swift — Step 5 & 6" accent={TEAL}>{`.sheet(isPresented: $showAddSheet) {\n    AddAlbumForm { newAlbum in\n        albums.append(newAlbum)\n        showAddSheet = false\n    }\n    .presentationDetents([.medium])\n}\n\nstruct AddAlbumForm: View {\n    var onSubmit: (Album) -> Void\n    @State private var title = ""\n    @State private var artist = ""\n    \n    var body: some View {\n        NavigationStack {\n            Form {\n                TextField("Title", text: $title)\n                TextField("Artist", text: $artist)\n                Button("Save Album") {\n                    let newAlbum = Album(id: UUID().uuidString, title: title, artist: artist)\n                    onSubmit(newAlbum)\n                }\n            }\n            .navigationTitle("Add New Album")\n        }\n    }\n}`}</CodePane>}
             />
          }
        />
      </div>
    </Shell>
  ),

  // ─── SLIDE 14: Swipe Actions (OSToggle merged) ───
  () => (
    <Shell tag="Gestures" timer="10" title="Swipe to Delete" notes="Show how to delete items natively.">
      <OSToggle
        android={
          <div style={{ display: "flex", gap: 10 }}>
            <CodePane title="Compose SwipeToDismissBox" accent={PURPLE}>{`val dismissState = rememberSwipeToDismissBoxState(\n    confirmValueChange = { dismissValue ->\n        if (dismissValue == SwipeToDismissBoxValue.EndToStart) {\n            albums.remove(album)\n            true\n        } else false\n    }\n)\n\nSwipeToDismissBox(\n    state = dismissState,\n    backgroundContent = {\n        Box(Modifier.fillMaxSize().background(Color.Red)) {\n            Icon(Icons.Default.Delete, contentDescription = "Delete")\n        }\n    }\n) {\n    AlbumRow(album)\n}`}</CodePane>
          </div>
        }
        ios={
          <div style={{ display: "flex", gap: 10 }}>
            <CodePane title="SwiftUI .swipeActions" accent={TEAL}>{`List {\n    ForEach(albums) { album in\n        AlbumRow(album: album)\n            .swipeActions(edge: .trailing) {\n                Button(role: .destructive) {\n                    // Note: 'albums' must be accessible in this scope\n                    albums.removeAll { $0.id == album.id }\n                } label: {\n                    Label("Delete", systemImage: "trash")\n                }\n            }\n    }\n}`}</CodePane>
          </div>
        }
      />
      <div style={{ marginTop: 8 }}>
        <Info>{"SwiftUI makes this remarkably easy with `.swipeActions`. Jetpack Compose's `SwipeToDismissBox` is a bit more manual, giving you full control over the background drawing."}</Info>
      </div>
    </Shell>
  ),

  // ─── SLIDE 15: Conceptual D (When to confirm) ───
  () => (
    <Shell tag="UX Pattern" title="When to confirm vs. when to just do it" notes="Discuss when alert dialogs are appropriate.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Before we build an Alert Dialog, let's ask: should we?</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        <div style={{ background: GRAY, padding: 16, borderRadius: 8 }}>
          <p style={{ fontSize: 14, fontWeight: "bold", color: TEXT }}>Swipe to archive email</p>
          <p style={{ fontSize: 12, color: TEAL, fontWeight: "bold" }}>No confirmation</p>
          <p style={{ fontSize: 12, color: MUTED }}>It's easily reversible (undo button or find it in archive).</p>
        </div>
        <div style={{ background: GRAY, padding: 16, borderRadius: 8 }}>
          <p style={{ fontSize: 14, fontWeight: "bold", color: TEXT }}>Marking an item as read</p>
          <p style={{ fontSize: 12, color: TEAL, fontWeight: "bold" }}>No confirmation</p>
          <p style={{ fontSize: 12, color: MUTED }}>Non-destructive and trivial to revert.</p>
        </div>
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", padding: 16, borderRadius: 8 }}>
          <p style={{ fontSize: 14, fontWeight: "bold", color: "#b91c1c" }}>Deleting an album forever</p>
          <p style={{ fontSize: 12, color: "#b91c1c", fontWeight: "bold" }}>Always confirm</p>
          <p style={{ fontSize: 12, color: MUTED }}>Destructive and irreversible. We must catch accidental swipes!</p>
        </div>
      </div>
      <Info>{"Rule of Thumb: If an action is destructive and irreversible, always show a confirmation dialog."}</Info>
    </Shell>
  ),

  // ─── SLIDE 16: Alert Dialogs (Merged) ───
  () => (
    <Shell tag="Alerts" title="Confirming Destructive Actions" notes="Show Alert Dialog implementations.">
      <OSToggle
        android={
            <CodePane title="Compose AlertDialog" accent={PURPLE}>{`var showDialog by remember { mutableStateOf(false) }\n\nif (showDialog) {\n    AlertDialog(\n        onDismissRequest = { showDialog = false },\n        title = { Text("Delete Album?") },\n        text = { Text("This cannot be undone.") },\n        confirmButton = {\n            TextButton(onClick = {\n                // Delete logic\n                showDialog = false\n            }) { Text("Delete", color = Color.Red) }\n        },\n        dismissButton = {\n            TextButton(onClick = { showDialog = false }) {\n                Text("Cancel")\n            }\n        }\n    )\n}`}</CodePane>
        }
        ios={
            <CodePane title="SwiftUI .alert" accent={TEAL}>{`@State private var showDialog = false\n\n// Attach modifier to your view\n.alert("Delete Album?", isPresented: $showDialog) {\n    Button("Cancel", role: .cancel) { }\n    Button("Delete", role: .destructive) {\n        // Delete logic here\n    }\n} message: {\n    Text("This cannot be undone.")\n}`}</CodePane>
        }
      />
    </Shell>
  ),

  // ─── SLIDE: Full Code: Swipe to Delete + Alert ───
  () => (
    <Shell tag="Live code-along — Wrap up" title="Full Code: Swipe to Delete" subtitle="Combining gestures and alerts">
      <div style={{ marginTop: 8 }}>
        <OSToggle
          android={
            <CodePane title="Kotlin — SwipeToDismissBox + AlertDialog" accent={PURPLE}>{`var albumToDelete by remember { mutableStateOf<Album?>(null) }\n\n// Swipe to dismiss state\nval dismissState = rememberSwipeToDismissBoxState(\n    confirmValueChange = { dismissValue ->\n        if (dismissValue == SwipeToDismissBoxValue.EndToStart) {\n            albumToDelete = album\n            false // Don't dismiss until confirmed\n        } else false\n    }\n)\n\n// Render list with swipe\nSwipeToDismissBox(state = dismissState, /* ... */) { AlbumRow(album) }\n\n// Alert Dialog\nif (albumToDelete != null) {\n    AlertDialog(\n        onDismissRequest = { albumToDelete = null },\n        title = { Text("Delete Album?") },\n        text = { Text("This cannot be undone.") },\n        confirmButton = {\n            TextButton(onClick = {\n                albums.remove(albumToDelete)\n                albumToDelete = null\n            }) { Text("Delete", color = Color.Red) }\n        },\n        dismissButton = {\n            TextButton(onClick = { albumToDelete = null }) { Text("Cancel") }\n        }\n    )\n}`}</CodePane>
          }
          ios={
            <CodePane title="Swift — .swipeActions + .alert" accent={TEAL}>{`@State private var albumToDelete: Album? = nil\n@State private var showDeleteAlert = false\n\nList(albums) { album in\n    AlbumRow(album: album)\n        .swipeActions(edge: .trailing) {\n            Button(role: .destructive) {\n                albumToDelete = album\n                showDeleteAlert = true\n            } label: {\n                Label("Delete", systemImage: "trash")\n            }\n        }\n}\n.alert("Delete Album?", isPresented: $showDeleteAlert) {\n    Button("Cancel", role: .cancel) { albumToDelete = nil }\n    Button("Delete", role: .destructive) {\n        if let album = albumToDelete {\n            albums.removeAll { $0.id == album.id }\n        }\n        albumToDelete = nil\n    }\n} message: {\n    Text("This cannot be undone.")\n}`}</CodePane>
          }
        />
      </div>
    </Shell>
  ),

  // ─── SLIDE 17: Conceptual E (Putting it together) ───
  () => (
    <Shell tag="Concept" title="Putting it together — The Full Flow" notes="Trace the data lifecycle.">
      <p style={{ fontSize: 13, color: MUTED, margin: "0 0 10px" }}>Let's trace how all three patterns connect in our app's lifecycle.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", background: GRAY, padding: 12, borderRadius: 8 }}>
          <span style={{ fontSize: 20 }}>1️⃣</span>
          <div>
            <p style={{ fontSize: 13, fontWeight: "bold", margin: 0 }}>Trigger Sheet</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>User taps Add button. <code>showAddSheet = true</code>. Bottom Sheet appears.</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", background: GRAY, padding: 12, borderRadius: 8 }}>
          <span style={{ fontSize: 20 }}>2️⃣</span>
          <div>
            <p style={{ fontSize: 13, fontWeight: "bold", margin: 0 }}>Submit Form</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>User taps Save. Album is appended to <code>albums</code> state. Sheet closes.</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", background: GRAY, padding: 12, borderRadius: 8 }}>
          <span style={{ fontSize: 20 }}>3️⃣</span>
          <div>
            <p style={{ fontSize: 13, fontWeight: "bold", margin: 0 }}>Swipe & Confirm</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>User swipes row. <code>showDialog = true</code>. Alert Dialog catches accidental swipes.</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", background: GRAY, padding: 12, borderRadius: 8 }}>
          <span style={{ fontSize: 20 }}>4️⃣</span>
          <div>
            <p style={{ fontSize: 13, fontWeight: "bold", margin: 0 }}>Delete</p>
            <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>User confirms. Album is removed from <code>albums</code> state. UI automatically updates!</p>
          </div>
        </div>
      </div>
    </Shell>
  ),

  // ─── SLIDE 18: Wrap-up & Lab ───
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
          <p style={{ fontSize: 13, fontWeight: 700, color: TEAL, margin: "0 0 8px", textTransform: "uppercase" }}>The Lab: Album Browser</p>
          <Bullet>Extend your Album Browser from Session 1.</Bullet>
          <Bullet>Use a Bottom Sheet to add new albums (Title, Artist).</Bullet>
          <Bullet>Add swipe-to-delete for albums.</Bullet>
          <Bullet>Challenge: Use an Alert Dialog to confirm deletions!</Bullet>
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
