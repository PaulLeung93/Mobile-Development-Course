import { useState } from "react";

const TABS = ["Overview", "Lab", "Capstone", "Resources"];
const PLATFORMS = ["Android", "iOS"];

const P_C = "#534AB7", PL = "#EEEDFE", PD = "#3C3489";
const AM = "#633806", AML = "#FAEEDA";
const BL = "#7F52FF", BLL = "#F0EEFF";
const GR = "#F05138", GRL = "#FFF2F0";
const CAP_C = "#993C1D", CAP_BG = "#FAECE7";
const TEAL_L = "#E1F5EE", TEAL_D = "#0F6E56";

function Section({ title, children, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div style={{ margin: "14px 0", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 10, overflow: "hidden" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "var(--color-background-secondary)", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>
        {title}<span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{open ? "\u25B2" : "\u25BC"}</span>
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

function Checkpoint({ num, children }) {
  return (
    <div className="callout-checkpoint" style={{ margin: "14px 0", padding: "10px 14px", background: "#E8FCE8", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
      <strong>{"\uD83C\uDFAF Checkpoint " + num + ":"}</strong> {children}
    </div>
  );
}

function AiOpp({ children }) {
  return (
    <div className="callout-ai" style={{ margin: "14px 0", padding: "10px 14px", background: "#F9F0FF", borderRadius: 8, fontSize: 13, lineHeight: 1.6 }}>
      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, textAlign: "center" }}>{"\u2728 AI Opportunity"}</div>
      {children}
    </div>
  );
}

function Warn({ children }) {
  return (
    <div className="callout-warn" style={{ margin: "12px 0", padding: "10px 14px", background: "#FFF8E6", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #EF9F27" }}>
      {"\u26A0\uFE0F "}{children}
    </div>
  );
}

function Tip({ children }) {
  return (
    <div style={{ margin: "12px 0", padding: "10px 14px", background: "var(--color-background-secondary)", borderRadius: 8, fontSize: 13, lineHeight: 1.6, borderLeft: "3px solid #534AB7" }}>
      {"\uD83D\uDCA1 "}{children}
    </div>
  );
}

function Step({ num, title, children }) {
  return (
    <div style={{ margin: "18px 0" }}>
      <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--platform-accent, var(--color-text-primary))", margin: "0 0 8px" }}>Step {num}: {title}</h4>
      <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

function VStep({ num, title, children, last }) {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 4 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--platform-accent, #534AB7)", color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{num}</div>
        {!last && <div style={{ width: 2, flex: 1, minHeight: 20, background: "var(--color-border-tertiary)", margin: "3px 0" }} />}
      </div>
      <div style={{ paddingBottom: last ? 8 : 24, flex: 1, minWidth: 0 }}>
        <h4 style={{ fontSize: 13, fontWeight: 600, margin: "3px 0 8px", color: "var(--color-text-primary)" }}>{title}</h4>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>{children}</div>
      </div>
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
          }}>{isA ? "\uD83E\uDD16 Android" : "\uD83C\uDF4E iOS"}</button>
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
        {"Don't forget to fill out the \u270F\uFE0F "}<Link>Session Survey</Link>{" at the end of each class session!"}
      </div>
      <div style={{ background: CAP_BG, padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 16, color: CAP_C }}>
        {"\uD83C\uDFD7\uFE0F "}<strong>REMINDER:</strong>{" "}<Link>Capstone M3</Link>{" check-ins happen during Session 2 lab time. Your instructor will pull your team aside for 10 minutes. Have your app running. See the Capstone tab."}
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>Unit 8: On-Device AI — Inference Without the Cloud</h2>

      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7, margin: "0 0 16px" }}>
        {"Last week you called a cloud LLM from your app. This week you go offline. On-device AI runs entirely on the phone — no internet, no API key, no latency. You'll use the live camera to recognize objects and text in real time, then run a local generative model to analyze a photo from your gallery. Both sessions are AI-focused."}
      </p>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 10px" }}>This week you will learn:</p>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>{"The difference between cloud AI (Week 7) and on-device AI (this week)"}</li>
          <li>{isAndroid
            ? "ML Kit — Google\u2019s on-device ML library for real-time image labeling and OCR"
            : "Core ML + Vision framework — Apple\u2019s on-device inference stack"
          }</li>
          <li>{"How to process live camera frames for real-time ML results"}</li>
          <li>{isAndroid
            ? "Gemini Nano via Android AI Core — a small generative LLM running entirely on the device"
            : "Apple Intelligence APIs — on-device generative AI on Apple Silicon"
          }</li>
          <li>{"When to use on-device AI vs cloud AI, and how to make that call in your own apps"}</li>
        </ul>
      </div>

      <div style={{ marginTop: 20, padding: "14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>Session Info</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>{"\uD83D\uDCC5 See your cohort\u2019s schedule for session times"}</li>
          <li>{"\u2197\uFE0F "}<Link>Session Zoom Link</Link>{" | Passcode: "}<strong>codepath</strong></li>
          <li>{"\uD83D\uDCCA "}<Link>Link to Slides</Link></li>
        </ul>
        <strong style={{ display: "block", marginTop: 10 }}>Upcoming Due Dates</strong>
        <ul style={{ margin: "6px 0 0", paddingLeft: 20 }}>
          <li>{"\uD83C\uDFD7\uFE0F "}<Link>Capstone M3</Link>{" \u2014 check-in during Session 2 lab (no separate submission)"}</li>
          <li>{"\uD83D\uDCEC "}<Link>Week 9 pre-work</Link>{" \u2014 Git branching concepts (30 min)"}</li>
        </ul>
      </div>

      <div style={{ marginTop: 16, padding: "14px", background: isAndroid ? BLL : GRL, borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong style={{ color: isAndroid ? BL : GR }}>
          {isAndroid ? "\uD83E\uDD16 Android Track" : "\uD83C\uDF4E iOS Track"}{" \u2014 This Week"}
        </strong>
        <p style={{ margin: "6px 0 0", color: isAndroid ? BL : GR }}>
          {isAndroid
            ? "Session 1 uses ML Kit\u2019s image labeling and text recognition APIs with CameraX for live frame analysis. Session 2 introduces Gemini Nano via the Android AI Core API \u2014 a small generative LLM running entirely on-device."
            : "Session 1 uses Vision framework (VNClassifyImageRequest, VNRecognizeTextRequest) with AVFoundation for live camera input. Session 2 introduces Apple Intelligence APIs for on-device summarization and analysis on Apple Silicon devices."
          }
        </p>
      </div>

      <div className="callout-ai" style={{ marginTop: 16, padding: "14px", background: "#F9F0FF", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"\uD83D\uDD04 Cloud AI vs On-Device AI \u2014 the key tradeoffs"}</strong>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
          {[
            { label: "Cloud AI (Week 7)", items: ["Powerful \u2014 large models like Claude", "Requires internet + API key", "Higher latency (network round trip)", "Costs money per token", "Always up-to-date model"], color: AML, fg: AM },
            { label: "On-Device AI (this week)", items: ["Smaller models, limited capability", "Works offline, no API key needed", "Low latency \u2014 runs on the device chip", "Free after installation", "Private \u2014 data never leaves the phone"], color: TEAL_L, fg: TEAL_D },
          ].map(function(col) {
            return (
              <div key={col.label} style={{ background: col.color, borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: col.fg, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>{col.label}</p>
                {col.items.map(function(item) {
                  return (
                    <div key={item} style={{ display: "flex", gap: 6, margin: "4px 0" }}>
                      <span style={{ color: col.fg, flexShrink: 0, fontSize: 11 }}>{"\u25B8"}</span>
                      <span style={{ fontSize: 11, color: col.fg, lineHeight: 1.4 }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 10, fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"\uD83D\uDCE6 This unit at a glance"}</strong>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
          {[
            { label: "Session 1", val: "Live camera feed with real-time ML overlay. Lab: build a scanner that labels objects and reads text in the viewfinder \u2014 no internet." },
            { label: "Session 2", val: isAndroid ? "Gemini Nano on-device. Lab: analyze a photo from your gallery using a local generative model \u2014 airplane mode required to verify." : "Apple Intelligence on-device. Lab: analyze a photo using Vision + Apple Intelligence \u2014 airplane mode required to verify." },
            { label: "Capstone M3", val: "No submission \u2014 instructor check-in during Session 2 lab. Have your app running with core navigation + at least one network call working." },
            { label: "No standalone assignment", val: "M3 check-in replaces the weekly assignment. Use your lab time to make capstone progress after your check-in." },
          ].map(function(item) {
            return (
              <div key={item.label} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-tertiary)", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: ".04em" }}>{item.label}</p>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>{item.val}</p>
              </div>
            );
          })}
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
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 8 Lab \u2014 Session 1: Build the Scanner</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>
        {"You\u2019re building \u2014 MLScanner \u2014 a single app you\u2019ll extend in Session 2. Today: live camera feed with real-time object labeling and text recognition. No internet required."}
      </p>
      <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", fontSize: 12, marginBottom: 14, lineHeight: 1.6 }}>
        <strong>{"Two-session arc:"}</strong>
        <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
          <div style={{ background: P_C, color: "#fff", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 600 }}>{"Session 1 \u2192 Camera scanner"}</div>
          <div style={{ background: "var(--color-border-tertiary)", color: "var(--color-text-secondary)", borderRadius: 6, padding: "4px 10px", fontSize: 11 }}>{"Session 2 \u2192 Gallery analyzer"}</div>
        </div>
      </div>
      <div style={{ display: "inline-block", fontSize: 11, fontWeight: 500, padding: "2px 9px", borderRadius: 20, background: AML, color: AM, marginBottom: 12 }}>AI feature</div>

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <strong>{"\uD83C\uDFAF Goals"}</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
          <li>{isAndroid ? "Set up CameraX with an ImageAnalysis use case" : "Set up AVCaptureSession with a live preview and frame output"}</li>
          <li>{isAndroid ? "Run ML Kit image labeling on each camera frame in real time" : "Run VNClassifyImageRequest and VNRecognizeTextRequest on live frames"}</li>
          <li>{"Display ML results as an overlay on the live viewfinder"}</li>
          <li>{"Handle the camera permission flow gracefully"}</li>
          <li>{"Toggle between object labeling mode and text recognition (OCR) mode"}</li>
          <li>{"Leave the project in a state that Session 2 can build directly on top of"}</li>
        </ul>
      </div>

      <Step num={0} title={"Create a new project \u2014 MLScanner (~3 min)"}>
        <p>Create a new {isAndroid ? "Empty Activity" : "App"} project in {isAndroid ? "Android Studio" : "Xcode"}. Name it <strong>MLScanner</strong>.{isAndroid ? " Set Minimum SDK to API 24 and confirm Kotlin + Compose are selected." : ""}</p>
        {isAndroid ? (
          <div>
            <p style={{ fontSize: 13, margin: "8px 0 4px" }}>Open <strong>build.gradle.kts (Module: app)</strong> \u2014 the one inside the <IC>app</IC> folder, not the top-level project file. Add these lines inside the <IC>dependencies</IC> block:</p>
            <CodeB title="build.gradle.kts (Module: app) \u2014 add CameraX + ML Kit" accent={BL}>{`// CameraX
implementation("androidx.camera:camera-core:1.3.0")
implementation("androidx.camera:camera-camera2:1.3.0")
implementation("androidx.camera:camera-lifecycle:1.3.0")
implementation("androidx.camera:camera-view:1.3.0")

// ML Kit on-device models
implementation("com.google.mlkit:image-labeling:17.0.8")
implementation("com.google.mlkit:text-recognition:16.0.0")

// Permission helper for Compose
implementation("com.google.accompanist:accompanist-permissions:0.32.0")`}</CodeB>
            <p style={{ fontSize: 13, margin: "8px 0 4px" }}>Click <strong>Sync Now</strong> in the yellow banner at the top of the editor (or go to <strong>File \u2192 Sync Project with Gradle Files</strong>). Wait for the sync to finish \u2014 you won\u2019t be able to import these libraries until it completes.</p>
          </div>
        ) : (
          <div>
            <p style={{ fontSize: 13, margin: "8px 0 4px" }}>Vision and AVFoundation are built into the iOS SDK \u2014 no package dependencies needed. The one required step before writing any camera code is declaring the camera permission string.</p>
            <p style={{ fontSize: 13, margin: "8px 0 4px" }}>In Xcode: select the <strong>MLScanner</strong> project in the Navigator \u2192 select the <strong>MLScanner target</strong> \u2192 open the <strong>Info</strong> tab \u2192 hover over any row and click <strong>+</strong> \u2192 type <IC>NSCameraUsageDescription</IC> \u2192 set the value to a user-facing description.</p>
            <CodeB title="Info.plist entry to add" accent={GR}>{`Key:   NSCameraUsageDescription
Type:  String
Value: Used to scan and label objects in real time.`}</CodeB>
            <Warn>{"If NSCameraUsageDescription is missing, the app crashes silently the moment it requests camera access \u2014 no error message, no log. Add it first."}</Warn>
          </div>
        )}
        <Checkpoint num={0}>{isAndroid ? "Gradle synced with no errors. Project builds clean." : "NSCameraUsageDescription is in Info.plist. Project builds clean."}</Checkpoint>
      </Step>

      <Step num={1} title={"Request camera permission (~5 min)"}>
        <p>{"Camera access is a \"dangerous\" permission on both platforms \u2014 the OS won't grant it automatically. You must ask at runtime and handle three distinct outcomes. Build this before touching the camera so you never silently crash on a real device."}</p>

        <VStep num="a" title={isAndroid ? "Create CameraPermissionWrapper.kt" : "Create CameraPermissionManager.swift"}>
          {isAndroid ? (
            <div>
              <p>Create a new Kotlin file called <IC>CameraPermissionWrapper.kt</IC>. Add a <IC>@Composable</IC> function <IC>CameraPermissionWrapper</IC> with no parameters. Use Accompanist's <IC>rememberPermissionState</IC>, passing <IC>android.Manifest.permission.CAMERA</IC>, to get an object that tracks the current permission status.</p>
              <Section title="\u2705 Check your work \u2014 CameraPermissionWrapper.kt so far" defaultOpen={false}>
                <CodeB title="Kotlin \u2014 CameraPermissionWrapper.kt (skeleton)" accent={BL}>{`import androidx.compose.runtime.Composable
import com.google.accompanist.permissions.ExperimentalPermissionsApi
import com.google.accompanist.permissions.rememberPermissionState

@OptIn(ExperimentalPermissionsApi::class)
@Composable
fun CameraPermissionWrapper() {
    val permission = rememberPermissionState(
        android.Manifest.permission.CAMERA
    )
    // when block goes in the next sub-step
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Create a new Swift file called <IC>CameraPermissionManager.swift</IC>. Add a class <IC>CameraPermissionManager: ObservableObject</IC>. Give it a <IC>@Published var status: AVAuthorizationStatus</IC> initialized with <IC>AVCaptureDevice.authorizationStatus(for: .video)</IC>. Add a <IC>requestPermission()</IC> method that calls <IC>AVCaptureDevice.requestAccess(for: .video)</IC> and updates <IC>status</IC> on the main thread.</p>
              <Section title="\u2705 Check your work \u2014 CameraPermissionManager.swift" defaultOpen={false}>
                <CodeB title="Swift \u2014 CameraPermissionManager.swift" accent={GR}>{`import AVFoundation

class CameraPermissionManager: ObservableObject {
    @Published var status: AVAuthorizationStatus =
        AVCaptureDevice.authorizationStatus(for: .video)

    func requestPermission() {
        AVCaptureDevice.requestAccess(for: .video) { granted in
            DispatchQueue.main.async {
                self.status = granted ? .authorized : .denied
            }
        }
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="b" title="Handle all three permission states">
          {isAndroid ? (
            <div>
              <p>Inside <IC>CameraPermissionWrapper</IC>, add a <IC>when</IC> block on <IC>permission.status</IC>:</p>
              <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
                <li><IC>isGranted</IC> \u2014 call <IC>CameraScreen()</IC> (you'll create this in Step 2)</li>
                <li><IC>shouldShowRationale</IC> \u2014 the user denied once; show a <IC>Column</IC> centered on screen with an explanation and a <IC>Button</IC> that calls <IC>permission.launchPermissionRequest()</IC></li>
                <li><IC>else</IC> \u2014 first launch or permanently denied; use <IC>LaunchedEffect(Unit)</IC> to auto-request</li>
              </ul>
              <Tip>{"shouldShowRationale is Android's signal that the user denied once but can be asked again. If they deny twice, Android permanently blocks the permission \u2014 that also falls into the else branch, which is why the LaunchedEffect becomes a no-op. You'd need to send them to Settings instead."}</Tip>
              <Section title="\u2705 Check your work \u2014 complete CameraPermissionWrapper.kt" defaultOpen={false}>
                <CodeB title="Kotlin \u2014 CameraPermissionWrapper.kt" accent={BL}>{`import androidx.compose.foundation.layout.*
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.google.accompanist.permissions.ExperimentalPermissionsApi
import com.google.accompanist.permissions.isGranted
import com.google.accompanist.permissions.rememberPermissionState
import com.google.accompanist.permissions.shouldShowRationale

@OptIn(ExperimentalPermissionsApi::class)
@Composable
fun CameraPermissionWrapper() {
    val permission = rememberPermissionState(
        android.Manifest.permission.CAMERA
    )
    when {
        permission.status.isGranted ->
            CameraScreen()

        permission.status.shouldShowRationale ->
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(32.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                Text("Camera access is needed to scan and label objects.")
                Spacer(Modifier.height(12.dp))
                Button(onClick = { permission.launchPermissionRequest() }) {
                    Text("Grant Camera Permission")
                }
            }

        else ->
            LaunchedEffect(Unit) {
                permission.launchPermissionRequest()
            }
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Open <IC>ContentView.swift</IC> (the default one Xcode created). Replace its body with a <IC>switch perm.status</IC> block using a <IC>@StateObject private var perm = CameraPermissionManager()</IC>:</p>
              <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
                <li><IC>.authorized</IC> \u2014 show <IC>CameraView()</IC> (you'll create this in Step 2)</li>
                <li><IC>.denied</IC> \u2014 show a <IC>VStack</IC> with a message and an "Open Settings" <IC>Button</IC></li>
                <li><IC>default</IC> \u2014 show <IC>Color.clear</IC> with <IC>.onAppear {"{ perm.requestPermission() }"}</IC></li>
              </ul>
              <Section title="\u2705 Check your work \u2014 ContentView.swift" defaultOpen={false}>
                <CodeB title="Swift \u2014 ContentView.swift" accent={GR}>{`import SwiftUI
import AVFoundation

struct ContentView: View {
    @StateObject private var perm = CameraPermissionManager()

    var body: some View {
        switch perm.status {
        case .authorized:
            CameraView()
        case .denied:
            VStack(spacing: 16) {
                Text("Camera access is required.")
                    .multilineTextAlignment(.center)
                Button("Open Settings") {
                    UIApplication.shared.open(
                        URL(string: UIApplication.openSettingsURLString)!)
                }
            }.padding()
        default:
            Color.clear.onAppear {
                perm.requestPermission()
            }
        }
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="c" title={isAndroid ? "Wire CameraPermissionWrapper into MainActivity" : "Confirm ContentView is the app entry point"} last>
          {isAndroid ? (
            <div>
              <p>Open <IC>MainActivity.kt</IC>. Inside <IC>setContent {"{ }"}</IC>, replace the default content with <IC>CameraPermissionWrapper()</IC>. The <IC>CameraScreen()</IC> reference will show a compile error until Step 2 \u2014 that's expected.</p>
              <Section title="\u2705 Check your work \u2014 MainActivity.kt" defaultOpen={false}>
                <CodeB title="Kotlin \u2014 MainActivity.kt" accent={BL}>{`import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.MaterialTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                CameraPermissionWrapper()
            }
        }
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Open your <IC>MLScannerApp.swift</IC> (the <IC>@main</IC> struct). Confirm <IC>ContentView()</IC> is already set as the <IC>WindowGroup</IC> body \u2014 Xcode puts it there by default, so no change is needed.</p>
              <Section title="\u2705 Check your work \u2014 MLScannerApp.swift" defaultOpen={false}>
                <CodeB title="Swift \u2014 MLScannerApp.swift" accent={GR}>{`import SwiftUI

@main
struct MLScannerApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <Checkpoint num={1}>{"Run on a real device. On first launch it requests camera permission. Granting it navigates to CameraScreen/CameraView (shows a build error until Step 2 \u2014 that's fine). Denying shows a recovery path."}</Checkpoint>
      </Step>

      <Step num={2} title={"Build the live camera preview (~10 min)"}>
        <p>{"Get the viewfinder on screen and confirm the live feed works before adding any ML. Build this first \u2014 if the camera isn't showing, nothing else will work."}</p>
        {isAndroid && <Tip>{"CameraX organizes camera work into use cases bound to the activity lifecycle: Preview (viewfinder), ImageCapture (single photo \u2014 from Week 7), and ImageAnalysis (called for every frame \u2014 new this week). You'll bind Preview + ImageAnalysis together."}</Tip>}

        <VStep num="a" title={isAndroid ? "Create CameraPreview.kt with the composable skeleton" : "Create CameraManager.swift"}>
          {isAndroid ? (
            <div>
              <p>Create a new file <IC>CameraPreview.kt</IC>. Add a <IC>@Composable</IC> function <IC>CameraPreview</IC> that takes one parameter: <IC>onFrameAnalyzed: (ImageProxy) -{">"} Unit</IC>. Inside, use <IC>remember {"{ PreviewView(context) }"}</IC> to create the native view, and wrap it in an <IC>AndroidView</IC> that fills the max size. Leave the camera binding for the next sub-step.</p>
              <Section title="\u2705 Check your work \u2014 CameraPreview.kt (skeleton)" defaultOpen={false}>
                <CodeB title="Kotlin \u2014 CameraPreview.kt (skeleton)" accent={BL}>{`import androidx.camera.view.PreviewView
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLifecycleOwner
import androidx.compose.ui.viewinterop.AndroidView

@Composable
fun CameraPreview(onFrameAnalyzed: (ImageProxy) -> Unit) {
    val context = LocalContext.current
    val lifecycleOwner = LocalLifecycleOwner.current
    val previewView = remember { PreviewView(context) }

    // camera binding goes in the next sub-step

    AndroidView(
        factory = { previewView },
        modifier = Modifier.fillMaxSize()
    )
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Create a new Swift file <IC>CameraManager.swift</IC>. Add a class <IC>CameraManager: NSObject, ObservableObject, AVCaptureVideoDataOutputSampleBufferDelegate</IC>. Give it a <IC>let session = AVCaptureSession()</IC> property and a <IC>var onFrame: ((CMSampleBuffer) -{">"} Void)?</IC> callback. In <IC>init()</IC>: set <IC>session.sessionPreset = .high</IC>, add the back camera as input, add an <IC>AVCaptureVideoDataOutput</IC> with <IC>self</IC> as delegate on a serial queue. Add a <IC>start()</IC> method that calls <IC>session.startRunning()</IC> on a background thread. Implement the delegate's <IC>captureOutput</IC> to call <IC>onFrame?(buffer)</IC>.</p>
              <Section title="\u2705 Check your work \u2014 CameraManager.swift" defaultOpen={false}>
                <CodeB title="Swift \u2014 CameraManager.swift" accent={GR}>{`import AVFoundation

class CameraManager: NSObject, ObservableObject,
    AVCaptureVideoDataOutputSampleBufferDelegate {

    let session = AVCaptureSession()
    var onFrame: ((CMSampleBuffer) -> Void)?

    override init() {
        super.init()
        session.sessionPreset = .high
        guard
            let device = AVCaptureDevice.default(
                .builtInWideAngleCamera, for: .video, position: .back),
            let input = try? AVCaptureDeviceInput(device: device)
        else { return }
        session.addInput(input)
        let output = AVCaptureVideoDataOutput()
        output.setSampleBufferDelegate(
            self, queue: DispatchQueue(label: "cameraQueue"))
        session.addOutput(output)
    }

    func start() {
        DispatchQueue.global(qos: .userInitiated).async {
            self.session.startRunning()
        }
    }

    func captureOutput(_ output: AVCaptureOutput,
        didOutput buffer: CMSampleBuffer,
        from connection: AVCaptureConnection) {
        onFrame?(buffer)
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="b" title={isAndroid ? "Bind the Preview + ImageAnalysis use cases" : "Create CameraPreviewView.swift (UIViewRepresentable)"}>
          {isAndroid ? (
            <div>
              <p>Inside <IC>CameraPreview</IC>, add a <IC>LaunchedEffect(Unit)</IC> block. Inside it:</p>
              <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
                <li>Get the camera provider: <IC>ProcessCameraProvider.getInstance(context).await()</IC></li>
                <li>Build a <IC>Preview</IC> use case and set its <IC>surfaceProvider</IC> to <IC>previewView.surfaceProvider</IC></li>
                <li>Build an <IC>ImageAnalysis</IC> use case with <IC>STRATEGY_KEEP_ONLY_LATEST</IC> and attach an analyzer on a single-thread executor that calls <IC>onFrameAnalyzed(imageProxy)</IC></li>
                <li>Call <IC>bindToLifecycle</IC> with both use cases</li>
              </ol>
              <Section title="\u2705 Check your work \u2014 complete CameraPreview.kt" defaultOpen={false}>
                <CodeB title="Kotlin \u2014 CameraPreview.kt (complete)" accent={BL}>{`import androidx.camera.core.*
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.view.PreviewView
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLifecycleOwner
import androidx.compose.ui.viewinterop.AndroidView
import kotlinx.coroutines.guava.await
import java.util.concurrent.Executors

@Composable
fun CameraPreview(onFrameAnalyzed: (ImageProxy) -> Unit) {
    val context = LocalContext.current
    val lifecycleOwner = LocalLifecycleOwner.current
    val previewView = remember { PreviewView(context) }

    LaunchedEffect(Unit) {
        val cameraProvider =
            ProcessCameraProvider.getInstance(context).await()

        val preview = Preview.Builder().build().also {
            it.setSurfaceProvider(previewView.surfaceProvider)
        }
        val imageAnalysis = ImageAnalysis.Builder()
            .setBackpressureStrategy(
                ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST)
            .build().also { analysis ->
                analysis.setAnalyzer(
                    Executors.newSingleThreadExecutor()
                ) { imageProxy -> onFrameAnalyzed(imageProxy) }
            }
        cameraProvider.bindToLifecycle(
            lifecycleOwner,
            CameraSelector.DEFAULT_BACK_CAMERA,
            preview, imageAnalysis
        )
    }
    AndroidView(
        factory = { previewView },
        modifier = Modifier.fillMaxSize()
    )
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Create a new file <IC>CameraPreviewView.swift</IC>. Add a struct <IC>CameraPreviewView: UIViewRepresentable</IC> with a <IC>let session: AVCaptureSession</IC> property. SwiftUI can't display an <IC>AVCaptureSession</IC> directly \u2014 this wrapper bridges it to a UIKit view with a preview layer. In <IC>makeUIView</IC>: create a <IC>UIView</IC>, create an <IC>AVCaptureVideoPreviewLayer</IC> with the session, set <IC>videoGravity = .resizeAspectFill</IC>, set <IC>layer.frame = view.bounds</IC>, add it as a sublayer, return the view. Leave <IC>updateUIView</IC> empty.</p>
              <Section title="\u2705 Check your work \u2014 CameraPreviewView.swift" defaultOpen={false}>
                <CodeB title="Swift \u2014 CameraPreviewView.swift" accent={GR}>{`import AVFoundation
import SwiftUI

struct CameraPreviewView: UIViewRepresentable {
    let session: AVCaptureSession

    func makeUIView(context: Context) -> UIView {
        let view = UIView(frame: UIScreen.main.bounds)
        let layer = AVCaptureVideoPreviewLayer(session: session)
        layer.videoGravity = .resizeAspectFill
        layer.frame = view.bounds
        view.layer.addSublayer(layer)
        return view
    }

    func updateUIView(_ uiView: UIView, context: Context) {}
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="c" title={isAndroid ? "Create CameraScreen.kt to host the preview" : "Create CameraView.swift to host the preview"} last>
          {isAndroid ? (
            <div>
              <p>Create a new file <IC>CameraScreen.kt</IC>. Add a <IC>@Composable</IC> fun <IC>CameraScreen</IC>. For now: a <IC>Box(Modifier.fillMaxSize())</IC> containing <IC>CameraPreview(onFrameAnalyzed = {"{ it.close() }"})</IC>. Calling <IC>close()</IC> immediately (without analysis) keeps the pipeline running so you can verify the feed before adding ML.</p>
              <Section title="\u2705 Check your work \u2014 CameraScreen.kt (so far)" defaultOpen={false}>
                <CodeB title="Kotlin \u2014 CameraScreen.kt" accent={BL}>{`import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

@Composable
fun CameraScreen() {
    Box(modifier = Modifier.fillMaxSize()) {
        CameraPreview(onFrameAnalyzed = { it.close() })
        // ML overlay goes here in Step 3
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Create a new file <IC>CameraView.swift</IC>. Add a <IC>struct CameraView: View</IC> with a <IC>@StateObject private var cameraManager = CameraManager()</IC>. In the body: wrap <IC>CameraPreviewView(session: cameraManager.session)</IC> in a <IC>ZStack</IC> that ignores safe areas. Call <IC>cameraManager.start()</IC> in <IC>.onAppear</IC>.</p>
              <Section title="\u2705 Check your work \u2014 CameraView.swift (so far)" defaultOpen={false}>
                <CodeB title="Swift \u2014 CameraView.swift" accent={GR}>{`import SwiftUI

struct CameraView: View {
    @StateObject private var cameraManager = CameraManager()

    var body: some View {
        ZStack {
            CameraPreviewView(session: cameraManager.session)
                .ignoresSafeArea()
            // ML overlay goes here in Step 3
        }
        .onAppear { cameraManager.start() }
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <Checkpoint num={2}>{"Run on a real device. The live camera feed fills the screen. No labels yet \u2014 just confirm the viewfinder works before plugging in ML."}</Checkpoint>
      </Step>

      <Step num={3} title={"Add real-time image labeling (~15 min)"}>
        <p>{"Now that the camera feed is running, plug in the ML library. The ViewModel will own the ML client and expose a list of label strings that the UI observes. Each camera frame flows through the ViewModel, which runs inference and posts the results."}</p>

        <VStep num="a" title={isAndroid ? "Create MLScannerViewModel.kt" : "Create MLScannerViewModel.swift"}>
          {isAndroid ? (
            <div>
              <p>Create a new Kotlin file <IC>MLScannerViewModel.kt</IC>. Add a class <IC>MLScannerViewModel : ViewModel()</IC>. Inside, instantiate the ML Kit image labeler with <IC>ImageLabeling.getClient(ImageLabelerOptions.DEFAULT_OPTIONS)</IC>. Then declare a private <IC>{"MutableStateFlow<List<String>>"}</IC> initialized to an empty list, and expose it publicly as <IC>{"StateFlow<List<String>>"}</IC>. You will add the analysis method in the next sub-step.</p>
              <Section title="✅ Check your work — MLScannerViewModel.kt so far" defaultOpen={false}>
                <CodeB title="Kotlin — MLScannerViewModel.kt (skeleton)" accent={BL}>{`import androidx.lifecycle.ViewModel
import com.google.mlkit.vision.label.ImageLabeling
import com.google.mlkit.vision.label.defaults.ImageLabelerOptions
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

class MLScannerViewModel : ViewModel() {
    private val labeler =
        ImageLabeling.getClient(ImageLabelerOptions.DEFAULT_OPTIONS)

    private val _labels = MutableStateFlow<List<String>>(emptyList())
    val labels: StateFlow<List<String>> = _labels

    // analyzeFrame goes in the next sub-step
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Create a new Swift file <IC>MLScannerViewModel.swift</IC>. Add a class <IC>MLScannerViewModel: ObservableObject</IC>. Declare <IC>@Published var detectedLabels: [String] = []</IC>. Add a private <IC>var lastProcessed: TimeInterval = 0</IC> — you will use this in the next sub-step to throttle frame processing rate.</p>
              <Section title="✅ Check your work — MLScannerViewModel.swift so far" defaultOpen={false}>
                <CodeB title="Swift — MLScannerViewModel.swift (skeleton)" accent={GR}>{`import Foundation
import Vision

class MLScannerViewModel: ObservableObject {
    @Published var detectedLabels: [String] = []
    private var lastProcessed: TimeInterval = 0

    // processFrame goes in the next sub-step
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="b" title={isAndroid ? "Implement analyzeFrame" : "Implement processFrame"}>
          {isAndroid ? (
            <div>
              <p>Add <IC>fun analyzeFrame(imageProxy: ImageProxy)</IC> to <IC>MLScannerViewModel</IC>. Inside:</p>
              <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
                <li>Convert <IC>imageProxy.image</IC> to an <IC>InputImage</IC> via <IC>InputImage.fromMediaImage</IC>, passing the image and rotation degrees. If the image is null, close the proxy and return early.</li>
                <li>Call <IC>labeler.process(image)</IC>. In <IC>addOnSuccessListener</IC>, take the top 3 results and map each to a string with the label text and confidence percentage. Store in <IC>_labels.value</IC>.</li>
                <li>Add a separate <IC>addOnCompleteListener</IC> that calls <IC>imageProxy.close()</IC>.</li>
              </ol>
              <Warn>{"addOnCompleteListener fires whether the ML call succeeds OR fails. If you put imageProxy.close() inside addOnSuccessListener instead, a failed frame never closes — CameraX interprets the analyzer as still busy and stops delivering new frames. The camera freezes with no error message."}</Warn>
              <Section title="✅ Check your work — complete MLScannerViewModel.kt" defaultOpen={false}>
                <CodeB title="Kotlin — MLScannerViewModel.kt" accent={BL}>{`import androidx.camera.core.ImageProxy
import androidx.lifecycle.ViewModel
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.label.ImageLabeling
import com.google.mlkit.vision.label.defaults.ImageLabelerOptions
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

class MLScannerViewModel : ViewModel() {
    private val labeler =
        ImageLabeling.getClient(ImageLabelerOptions.DEFAULT_OPTIONS)

    private val _labels = MutableStateFlow<List<String>>(emptyList())
    val labels: StateFlow<List<String>> = _labels

    fun analyzeFrame(imageProxy: ImageProxy) {
        val mediaImage = imageProxy.image
            ?: run { imageProxy.close(); return }
        val image = InputImage.fromMediaImage(
            mediaImage, imageProxy.imageInfo.rotationDegrees)

        labeler.process(image)
            .addOnSuccessListener { results ->
                _labels.value = results.take(3).map { label ->
                    "\${label.text}  \${(label.confidence * 100).toInt()}%"
                }
            }
            .addOnCompleteListener {
                imageProxy.close() // Must be here, not in addOnSuccessListener
            }
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Add <IC>func processFrame(_ buffer: CMSampleBuffer)</IC> to <IC>MLScannerViewModel</IC>. Inside:</p>
              <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
                <li>Throttle to ~4 fps: compare <IC>Date().timeIntervalSince1970</IC> to <IC>lastProcessed</IC>. Return early if less than 0.25 s have passed; otherwise update <IC>lastProcessed</IC>.</li>
                <li>Get the pixel buffer from <IC>CMSampleBufferGetImageBuffer(buffer)</IC>. Return if nil.</li>
                <li>Create a <IC>VNClassifyImageRequest</IC>. In its completion handler, filter above 0.08 confidence, take the top 3, map to label strings, and update <IC>detectedLabels</IC> on the main thread.</li>
                <li>Create a <IC>VNImageRequestHandler</IC> and call <IC>perform</IC>.</li>
              </ol>
              <Tip>{"Vision's perform call is synchronous on the calling thread. CameraManager calls processFrame from a serial background queue, so no extra DispatchQueue wrapper is needed around perform. But you do need DispatchQueue.main.async before updating detectedLabels — @Published must be set on the main thread."}</Tip>
              <Section title="✅ Check your work — complete MLScannerViewModel.swift" defaultOpen={false}>
                <CodeB title="Swift — MLScannerViewModel.swift" accent={GR}>{`import Foundation
import Vision
import AVFoundation

class MLScannerViewModel: ObservableObject {
    @Published var detectedLabels: [String] = []
    private var lastProcessed: TimeInterval = 0

    func processFrame(_ buffer: CMSampleBuffer) {
        let now = Date().timeIntervalSince1970
        guard now - lastProcessed > 0.25 else { return }
        lastProcessed = now

        guard let pixelBuffer = CMSampleBufferGetImageBuffer(buffer)
        else { return }

        let request = VNClassifyImageRequest { [weak self] req, _ in
            guard let results =
                req.results as? [VNClassificationObservation]
            else { return }
            let top = results.prefix(3)
                .filter { $0.confidence > 0.08 }
                .map { "\($0.identifier)  \(Int($0.confidence * 100))%" }
            DispatchQueue.main.async {
                self?.detectedLabels = top
            }
        }
        let handler = VNImageRequestHandler(
            cvPixelBuffer: pixelBuffer, orientation: .up)
        try? handler.perform([request])
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="c" title={isAndroid ? "Add the label overlay to CameraScreen" : "Wire the ViewModel into CameraView"} last>
          {isAndroid ? (
            <div>
              <p>Open <IC>CameraScreen.kt</IC>. Add a <IC>viewModel: MLScannerViewModel = viewModel()</IC> parameter. Collect <IC>viewModel.labels</IC> with <IC>collectAsState()</IC>. Replace the temporary <IC>{"onFrameAnalyzed = { it.close() }"}</IC> with <IC>{"{ viewModel.analyzeFrame(it) }"}</IC>. Then add a <IC>Column</IC> inside the <IC>Box</IC> aligned to <IC>Alignment.BottomCenter</IC> with a semi-transparent black background (alpha 0.55) and 16 dp padding. Iterate over <IC>labels</IC> and show each as white <IC>Text</IC>.</p>
              <Section title="✅ Check your work — complete CameraScreen.kt" defaultOpen={false}>
                <CodeB title="Kotlin — CameraScreen.kt" accent={BL}>{`import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel

@Composable
fun CameraScreen(viewModel: MLScannerViewModel = viewModel()) {
    val labels by viewModel.labels.collectAsState()

    Box(modifier = Modifier.fillMaxSize()) {
        CameraPreview(onFrameAnalyzed = { viewModel.analyzeFrame(it) })
        Column(
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .fillMaxWidth()
                .background(Color.Black.copy(alpha = 0.55f))
                .padding(16.dp)
        ) {
            labels.forEach { label ->
                Text(label, color = Color.White, fontSize = 16.sp,
                     fontWeight = FontWeight.Medium)
            }
        }
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Open <IC>CameraView.swift</IC>. Add <IC>@StateObject private var viewModel = MLScannerViewModel()</IC>. In <IC>.onAppear</IC>, set <IC>{"cameraManager.onFrame = { viewModel.processFrame($0) }"}</IC> before calling <IC>cameraManager.start()</IC>. Add an overlay inside the <IC>ZStack</IC>: a <IC>VStack</IC> with leading alignment and 6-pt spacing, padded, anchored to the bottom with a semi-transparent black background. Use <IC>ForEach</IC> over <IC>viewModel.detectedLabels</IC> to show each label in white title3 font.</p>
              <Section title="✅ Check your work — complete CameraView.swift" defaultOpen={false}>
                <CodeB title="Swift — CameraView.swift" accent={GR}>{`import SwiftUI

struct CameraView: View {
    @StateObject private var cameraManager = CameraManager()
    @StateObject private var viewModel = MLScannerViewModel()

    var body: some View {
        ZStack(alignment: .bottom) {
            CameraPreviewView(session: cameraManager.session)
                .ignoresSafeArea()
            VStack(alignment: .leading, spacing: 6) {
                ForEach(viewModel.detectedLabels, id: \.self) { label in
                    Text(label)
                        .foregroundColor(.white)
                        .font(.title3).fontWeight(.medium)
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding()
            .background(.black.opacity(0.55))
        }
        .onAppear {
            cameraManager.onFrame = { viewModel.processFrame($0) }
            cameraManager.start()
        }
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <Checkpoint num={3}>{"Point the camera at objects around you. Labels appear at the bottom in real time with confidence percentages. The camera feed keeps running smoothly."}</Checkpoint>
      </Step>

      <Step num={4} title={"Add text recognition mode (~10 min)"}>
        <p>{"Add a toggle so users can switch between object labeling and OCR. Text recognition reads printed text in real time — perfect for scanning signs, receipts, or books. You will extend the ViewModel to support both modes and add a segmented control to the UI."}</p>

        <VStep num="a" title={"Add ScanMode and the text recognizer to the ViewModel"}>
          {isAndroid ? (
            <div>
              <p>At the top of <IC>MLScannerViewModel.kt</IC> (outside the class), add an enum: <IC>{"enum class ScanMode { LABEL, TEXT }"}</IC>. Then inside the class, add a second ML client: <IC>private val textRecognizer = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)</IC>. You will use it in the next sub-step.</p>
              <Section title="✅ Check your work — MLScannerViewModel.kt so far" defaultOpen={false}>
                <CodeB title="Kotlin — MLScannerViewModel.kt (with ScanMode)" accent={BL}>{`import androidx.camera.core.ImageProxy
import androidx.lifecycle.ViewModel
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.label.ImageLabeling
import com.google.mlkit.vision.label.defaults.ImageLabelerOptions
import com.google.mlkit.vision.text.TextRecognition
import com.google.mlkit.vision.text.latin.TextRecognizerOptions
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

enum class ScanMode { LABEL, TEXT }

class MLScannerViewModel : ViewModel() {
    private val labeler =
        ImageLabeling.getClient(ImageLabelerOptions.DEFAULT_OPTIONS)
    private val textRecognizer =
        TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)

    private val _labels = MutableStateFlow<List<String>>(emptyList())
    val labels: StateFlow<List<String>> = _labels

    // analyzeFrame updated in next sub-step
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>At the top of <IC>MLScannerViewModel.swift</IC> (outside the class), add: <IC>{"enum ScanMode { case label, text }"}</IC>. Inside the class, add a published mode property: <IC>@Published var currentMode: ScanMode = .label</IC>. The UI will bind a <IC>Picker</IC> to this property in sub-step c, and <IC>processFrame</IC> will read it in sub-step b.</p>
              <Section title="✅ Check your work — MLScannerViewModel.swift so far" defaultOpen={false}>
                <CodeB title="Swift — MLScannerViewModel.swift (with ScanMode)" accent={GR}>{`import Foundation
import Vision
import AVFoundation

enum ScanMode { case label, text }

class MLScannerViewModel: ObservableObject {
    @Published var detectedLabels: [String] = []
    @Published var currentMode: ScanMode = .label
    private var lastProcessed: TimeInterval = 0

    // processFrame updated in next sub-step
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="b" title={"Update the frame analysis method to branch on mode"}>
          {isAndroid ? (
            <div>
              <p>Change <IC>analyzeFrame</IC> to accept a second parameter: <IC>mode: ScanMode</IC>. Replace the method body with a <IC>when (mode)</IC> block:</p>
              <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
                <li><IC>ScanMode.LABEL</IC> — same logic as before: run <IC>labeler.process(image)</IC>, take top 3 results, format as label + confidence string.</li>
                <li><IC>ScanMode.TEXT</IC> — run <IC>textRecognizer.process(image)</IC>, take the first 240 characters of the full text block, store as a single-item list. If blank, store <IC>listOf("No text detected")</IC>.</li>
              </ul>
              <p>Both branches must call <IC>imageProxy.close()</IC> inside their own <IC>addOnCompleteListener</IC>.</p>
              <Section title="✅ Check your work — complete MLScannerViewModel.kt" defaultOpen={false}>
                <CodeB title="Kotlin — MLScannerViewModel.kt" accent={BL}>{`import androidx.camera.core.ImageProxy
import androidx.lifecycle.ViewModel
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.label.ImageLabeling
import com.google.mlkit.vision.label.defaults.ImageLabelerOptions
import com.google.mlkit.vision.text.TextRecognition
import com.google.mlkit.vision.text.latin.TextRecognizerOptions
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

enum class ScanMode { LABEL, TEXT }

class MLScannerViewModel : ViewModel() {
    private val labeler =
        ImageLabeling.getClient(ImageLabelerOptions.DEFAULT_OPTIONS)
    private val textRecognizer =
        TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)

    private val _labels = MutableStateFlow<List<String>>(emptyList())
    val labels: StateFlow<List<String>> = _labels

    fun analyzeFrame(imageProxy: ImageProxy, mode: ScanMode) {
        val mediaImage = imageProxy.image
            ?: run { imageProxy.close(); return }
        val image = InputImage.fromMediaImage(
            mediaImage, imageProxy.imageInfo.rotationDegrees)

        when (mode) {
            ScanMode.LABEL -> labeler.process(image)
                .addOnSuccessListener { results ->
                    _labels.value = results.take(3).map {
                        "\${it.text}  \${(it.confidence * 100).toInt()}%"
                    }
                }
                .addOnCompleteListener { imageProxy.close() }

            ScanMode.TEXT -> textRecognizer.process(image)
                .addOnSuccessListener { visionText ->
                    val text = visionText.text.take(240)
                    _labels.value = if (text.isBlank())
                        listOf("No text detected") else listOf(text)
                }
                .addOnCompleteListener { imageProxy.close() }
        }
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Update <IC>processFrame</IC> to read <IC>self.currentMode</IC> and branch on it with a <IC>switch</IC>. For <IC>.label</IC>, use the same <IC>VNClassifyImageRequest</IC> logic as before. For <IC>.text</IC>, use a <IC>VNRecognizeTextRequest</IC>: compactMap the top candidate strings from each observation, join them with a space, and store as a single-item array (or <IC>["No text detected"]</IC> if empty). Set <IC>recognitionLevel = .accurate</IC> on the request before running it.</p>
              <Section title="✅ Check your work — complete MLScannerViewModel.swift" defaultOpen={false}>
                <CodeB title="Swift — MLScannerViewModel.swift" accent={GR}>{`import Foundation
import Vision
import AVFoundation

enum ScanMode { case label, text }

class MLScannerViewModel: ObservableObject {
    @Published var detectedLabels: [String] = []
    @Published var currentMode: ScanMode = .label
    private var lastProcessed: TimeInterval = 0

    func processFrame(_ buffer: CMSampleBuffer) {
        let now = Date().timeIntervalSince1970
        guard now - lastProcessed > 0.25 else { return }
        lastProcessed = now

        guard let pixelBuffer = CMSampleBufferGetImageBuffer(buffer)
        else { return }

        let request: VNRequest
        switch currentMode {
        case .label:
            let r = VNClassifyImageRequest { [weak self] req, _ in
                let top = (req.results as? [VNClassificationObservation])?
                    .prefix(3).filter { $0.confidence > 0.08 }
                    .map { "\($0.identifier)  \(Int($0.confidence * 100))%" } ?? []
                DispatchQueue.main.async { self?.detectedLabels = top }
            }
            request = r

        case .text:
            let r = VNRecognizeTextRequest { [weak self] req, _ in
                let text = (req.results as? [VNRecognizedTextObservation])?
                    .compactMap { $0.topCandidates(1).first?.string }
                    .joined(separator: " ") ?? ""
                DispatchQueue.main.async {
                    self?.detectedLabels = text.isEmpty
                        ? ["No text detected"] : [text]
                }
            }
            r.recognitionLevel = .accurate
            request = r
        }

        try? VNImageRequestHandler(
            cvPixelBuffer: pixelBuffer, orientation: .up
        ).perform([request])
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="c" title={"Add the mode toggle to the UI"} last>
          {isAndroid ? (
            <div>
              <p>Open <IC>CameraScreen.kt</IC>. Add <IC>{"var scanMode by remember { mutableStateOf(ScanMode.LABEL) }"}</IC> near the top of the composable. Update the <IC>CameraPreview</IC> call to pass the mode: <IC>{"onFrameAnalyzed = { viewModel.analyzeFrame(it, scanMode) }"}</IC>. Then add a <IC>Row</IC> of two <IC>FilterChip</IC> components inside the <IC>Box</IC>, anchored to <IC>Alignment.TopCenter</IC> with 16 dp top padding. One chip for "Label", one for "Text" — set <IC>selected</IC> based on the current mode and update <IC>scanMode</IC> in each chip's <IC>onClick</IC>.</p>
              <Section title="✅ Check your work — complete CameraScreen.kt" defaultOpen={false}>
                <CodeB title="Kotlin — CameraScreen.kt" accent={BL}>{`import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.FilterChip
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel

@Composable
fun CameraScreen(viewModel: MLScannerViewModel = viewModel()) {
    val labels by viewModel.labels.collectAsState()
    var scanMode by remember { mutableStateOf(ScanMode.LABEL) }

    Box(modifier = Modifier.fillMaxSize()) {
        CameraPreview(onFrameAnalyzed = { viewModel.analyzeFrame(it, scanMode) })

        Row(
            modifier = Modifier
                .align(Alignment.TopCenter)
                .padding(top = 16.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            FilterChip(
                selected = scanMode == ScanMode.LABEL,
                onClick = { scanMode = ScanMode.LABEL },
                label = { Text("Label") }
            )
            FilterChip(
                selected = scanMode == ScanMode.TEXT,
                onClick = { scanMode = ScanMode.TEXT },
                label = { Text("Text") }
            )
        }

        Column(
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .fillMaxWidth()
                .background(Color.Black.copy(alpha = 0.55f))
                .padding(16.dp)
        ) {
            labels.forEach { label ->
                Text(label, color = Color.White, fontSize = 16.sp,
                     fontWeight = FontWeight.Medium)
            }
        }
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Open <IC>CameraView.swift</IC>. Add a <IC>Picker</IC> bound to <IC>$viewModel.currentMode</IC> inside the <IC>ZStack</IC>, anchored to the top. Use <IC>.pickerStyle(.segmented)</IC>, padding, and a semi-transparent black background so it is visible over the camera feed. The <IC>cameraManager.onFrame</IC> callback does not need to change — <IC>processFrame</IC> now reads <IC>currentMode</IC> directly from the ViewModel.</p>
              <Section title="✅ Check your work — complete CameraView.swift" defaultOpen={false}>
                <CodeB title="Swift — CameraView.swift" accent={GR}>{`import SwiftUI

struct CameraView: View {
    @StateObject private var cameraManager = CameraManager()
    @StateObject private var viewModel = MLScannerViewModel()

    var body: some View {
        ZStack(alignment: .bottom) {
            CameraPreviewView(session: cameraManager.session)
                .ignoresSafeArea()

            VStack {
                Picker("Mode", selection: $viewModel.currentMode) {
                    Text("Label").tag(ScanMode.label)
                    Text("Text").tag(ScanMode.text)
                }
                .pickerStyle(.segmented)
                .padding(.horizontal)
                .padding(.top, 56)
                .background(.black.opacity(0.4))
                Spacer()
            }

            VStack(alignment: .leading, spacing: 6) {
                ForEach(viewModel.detectedLabels, id: \.self) { label in
                    Text(label)
                        .foregroundColor(.white)
                        .font(.title3).fontWeight(.medium)
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding()
            .background(.black.opacity(0.55))
        }
        .onAppear {
            cameraManager.onFrame = { viewModel.processFrame($0) }
            cameraManager.start()
        }
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <Checkpoint num={4}>{"Toggle between Label and Text modes using the chips at the top. In Label mode, point at objects — in Text mode, hold the camera over printed text. Both should update the overlay in real time."}</Checkpoint>
      </Step>

      <Step num={5} title={"Polish the overlay and prep for Session 2 (~8 min)"}>
        <p>{"Two things to finish before Session 2: smooth out the label flicker, and wire up bottom navigation so Session 2 has a clean tab to build into."}</p>

        <VStep num="a" title={"Reduce label flicker"}>
          <p>Right now <IC>_labels</IC> / <IC>detectedLabels</IC> updates on every processed frame — even when the camera is pointing at the same thing. This causes the overlay text to flicker. Fix it by only updating when the top result actually changes.</p>
          {isAndroid ? (
            <div>
              <p>In <IC>MLScannerViewModel</IC>, add a private <IC>var lastTop = ""</IC> field. In the <IC>ScanMode.LABEL</IC> success listener, compute <IC>{"val newTop = results.firstOrNull()?.text ?: \"\""}</IC>. Only update <IC>_labels.value</IC> (and set <IC>lastTop = newTop</IC>) when <IC>newTop != lastTop</IC>.</p>
              <Section title="✅ Check your work — LABEL branch in analyzeFrame" defaultOpen={false}>
                <CodeB title="Kotlin — updated LABEL branch" accent={BL}>{`// Add this field to MLScannerViewModel:
private var lastTop = ""

// Updated LABEL branch inside analyzeFrame:
ScanMode.LABEL -> labeler.process(image)
    .addOnSuccessListener { results ->
        val newTop = results.firstOrNull()?.text ?: ""
        if (newTop != lastTop) {
            lastTop = newTop
            _labels.value = results.take(3).map {
                "\${it.text}  \${(it.confidence * 100).toInt()}%"
            }
        }
    }
    .addOnCompleteListener { imageProxy.close() }`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>In <IC>MLScannerViewModel</IC>, add a private <IC>var lastTop = ""</IC> field. In the <IC>.label</IC> case completion handler, compute the top identifier from results. Only update <IC>detectedLabels</IC> (and set <IC>lastTop</IC>) when the top result differs from the previous one.</p>
              <Section title="✅ Check your work — .label case in processFrame" defaultOpen={false}>
                <CodeB title="Swift — updated .label case" accent={GR}>{`// Add this field to MLScannerViewModel:
private var lastTop = ""

// Updated .label case inside processFrame:
case .label:
    let r = VNClassifyImageRequest { [weak self] req, _ in
        guard let self else { return }
        let observations = req.results as? [VNClassificationObservation] ?? []
        let newTop = observations.first?.identifier ?? ""
        guard newTop != self.lastTop else { return }
        self.lastTop = newTop
        let top = observations.prefix(3)
            .filter { $0.confidence > 0.08 }
            .map { "\($0.identifier)  \(Int($0.confidence * 100))%" }
        DispatchQueue.main.async { self.detectedLabels = top }
    }
    request = r`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="b" title={isAndroid ? "Add bottom navigation with a Gallery placeholder" : "Add a TabView with a Gallery placeholder"} last>
          {isAndroid ? (
            <div>
              <p>Create a new file <IC>MainScreen.kt</IC>. Add a <IC>@Composable fun MainScreen()</IC> that uses a <IC>Scaffold</IC> with a <IC>NavigationBar</IC> at the bottom. The bar has two <IC>NavigationBarItem</IC> entries: "Scanner" (camera icon) and "Gallery" (photo library icon). Use a <IC>{"var selectedTab by remember { mutableStateOf(0) }"}</IC> to track the active tab. When <IC>selectedTab == 0</IC>, show <IC>CameraPermissionWrapper()</IC>. When <IC>selectedTab == 1</IC>, show a centered <IC>Text("Coming in Session 2")</IC>. Finally, open <IC>MainActivity.kt</IC> and replace <IC>CameraPermissionWrapper()</IC> with <IC>MainScreen()</IC>.</p>
              <Section title="✅ Check your work — MainScreen.kt" defaultOpen={false}>
                <CodeB title="Kotlin — MainScreen.kt" accent={BL}>{`import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CameraAlt
import androidx.compose.material.icons.filled.PhotoLibrary
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier

@Composable
fun MainScreen() {
    var selectedTab by remember { mutableStateOf(0) }

    Scaffold(
        bottomBar = {
            NavigationBar {
                NavigationBarItem(
                    selected = selectedTab == 0,
                    onClick = { selectedTab = 0 },
                    icon = { Icon(Icons.Default.CameraAlt, "Scanner") },
                    label = { Text("Scanner") }
                )
                NavigationBarItem(
                    selected = selectedTab == 1,
                    onClick = { selectedTab = 1 },
                    icon = { Icon(Icons.Default.PhotoLibrary, "Gallery") },
                    label = { Text("Gallery") }
                )
            }
        }
    ) { padding ->
        Box(Modifier.padding(padding)) {
            when (selectedTab) {
                0 -> CameraPermissionWrapper()
                1 -> Box(
                    Modifier.fillMaxSize(),
                    contentAlignment = Alignment.Center
                ) { Text("Coming in Session 2") }
            }
        }
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Open <IC>ContentView.swift</IC>. Wrap the existing permission switch in a <IC>TabView</IC>. The Scanner tab is the permission switch you already have. Add a second tab with <IC>Text("Coming in Session 2")</IC> as the placeholder. Use <IC>.tabItem</IC> with <IC>Label("Scanner", systemImage: "camera")</IC> and <IC>Label("Gallery", systemImage: "photo.on.rectangle")</IC>.</p>
              <Section title="✅ Check your work — ContentView.swift" defaultOpen={false}>
                <CodeB title="Swift — ContentView.swift" accent={GR}>{`import SwiftUI
import AVFoundation

struct ContentView: View {
    @StateObject private var perm = CameraPermissionManager()

    var body: some View {
        TabView {
            Group {
                switch perm.status {
                case .authorized:
                    CameraView()
                case .denied:
                    VStack(spacing: 16) {
                        Text("Camera access is required.")
                            .multilineTextAlignment(.center)
                        Button("Open Settings") {
                            UIApplication.shared.open(
                                URL(string: UIApplication.openSettingsURLString)!)
                        }
                    }.padding()
                default:
                    Color.clear.onAppear { perm.requestPermission() }
                }
            }
            .tabItem { Label("Scanner", systemImage: "camera") }

            Text("Coming in Session 2")
                .tabItem { Label("Gallery", systemImage: "photo.on.rectangle") }
        }
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <CodeB title="Session 1 Reflection" accent={P_C}>{`// 1. How does ML Kit / Vision differ from the Claude API in Week 7?
// 2. What happens when the camera points at something the model
//    doesn’t recognize well? What do the confidence scores look like?
// 3. Name one app you use that probably uses on-device ML.
//    Why do you think it runs on-device rather than in the cloud?`}</CodeB>
        <Checkpoint num={5}>{"Scanner works in both Label and Text modes with smooth label transitions. A bottom nav / tab bar is in place with a Gallery placeholder. Show a TA before moving on."}</Checkpoint>
      </Step>

      <Section title={"\uD83D\uDCA1 Hints"}>
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p><strong>{"Camera preview is black or not showing"}</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Make sure you\u2019re calling bindToLifecycle inside a LaunchedEffect and that the PreviewView surfaceProvider is set before binding." : "Ensure AVCaptureSession.startRunning() is called on a background thread and the preview layer frame matches the view bounds."}</p>
          <p><strong>{"Labels stop updating after a few seconds"}</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "You\u2019re not closing the ImageProxy. Call imageProxy.close() inside addOnCompleteListener \u2014 not addOnSuccessListener. If the proxy isn\u2019t closed, CameraX stops delivering new frames." : "Make sure you create a new VNImageRequestHandler for each frame rather than reusing one instance."}</p>
          <p><strong>{"Device gets hot or battery drains fast"}</strong></p>
          <p style={{ marginLeft: 16 }}>{"Throttle processing to every 250ms (4 fps). You don\u2019t need ML on every frame \u2014 it looks smooth and uses far less power."}</p>
          <AiOpp>
            <em>{"Use AI to interpret ML results \u2192 "}</em>Ask Claude: <strong>{"\u201CI\u2019m getting these confidence scores from image labeling: [paste your results]. The top result is often wrong. How should I interpret low confidence scores, and what threshold makes sense for a real-time overlay?\u201D"}</strong>
          </AiOpp>
        </div>
      </Section>

      <Section title={"\uD83D\uDE80 Stretch Features"}>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
          <li>{"Freeze frame \u2014 tap the preview to pause and lock the current label"}</li>
          <li>{isAndroid ? "Bounding boxes \u2014 switch from ML Kit Image Labeling to Object Detection for per-object rectangles" : "Bounding boxes \u2014 use VNDetectRectanglesRequest alongside classification"}</li>
          <li>{isAndroid ? "Barcode mode \u2014 add a third scan mode using ML Kit BarcodeScanning" : "QR code mode \u2014 add VNDetectBarcodesRequest as a third scan mode"}</li>
          <li>{"Confidence threshold slider \u2014 let users filter out labels below a chosen confidence %"}</li>
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
      <h2 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>Unit 8 Lab \u2014 Session 2: Add the Gallery Analyzer</h2>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>
        {"Open your MLScanner project from Session 1. Today you\u2019ll fill in the Gallery tab \u2014 pick a photo, run on-device generative AI, verify it works offline, then compare it to the cloud result from Week 7."}
      </p>
      <div style={{ background: "var(--color-background-secondary)", borderRadius: 8, padding: "10px 14px", fontSize: 12, marginBottom: 14, lineHeight: 1.6 }}>
        <strong>{"Two-session arc:"}</strong>
        <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
          <div style={{ background: "var(--color-border-tertiary)", color: "var(--color-text-secondary)", borderRadius: 6, padding: "4px 10px", fontSize: 11 }}>{"Session 1 \u2192 Camera scanner \u2714"}</div>
          <div style={{ background: P_C, color: "#fff", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 600 }}>{"Session 2 \u2192 Gallery analyzer"}</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        <div style={{ display: "inline-block", fontSize: 11, fontWeight: 500, padding: "2px 9px", borderRadius: 20, background: AML, color: AM }}>AI feature</div>
        <div style={{ display: "inline-block", fontSize: 11, fontWeight: 500, padding: "2px 9px", borderRadius: 20, background: TEAL_L, color: TEAL_D }}>No internet required</div>
      </div>

      <Warn>
        {isAndroid
          ? "Gemini Nano requires a Pixel 8 or newer. If your device isn\u2019t supported, follow the fallback note in Step 3 \u2014 you\u2019ll display ML Kit labels directly. The architecture lesson is identical."
          : "Foundation Models requires iPhone 15 Pro or newer running iOS 26+ with Apple Intelligence enabled. If your device isn\u2019t supported, follow the Vision-only fallback in Step 3 \u2014 the architecture lesson is identical."
        }
      </Warn>

      <div style={{ fontSize: 13, lineHeight: 1.7, marginTop: 8 }}>
        <strong>{"\uD83C\uDFAF Goals"}</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
          <li>{"Build out the Gallery tab you stubbed in Session 1"}</li>
          <li>{"Let users pick a photo from their gallery and see a preview"}</li>
          <li>{isAndroid
            ? "Run a two-stage on-device pipeline: ML Kit labels \u2192 Gemini Nano natural-language description"
            : "Run a two-stage on-device pipeline: Vision classification \u2192 Foundation Models description"
          }</li>
          <li>{"Verify the whole thing works in airplane mode"}</li>
          <li>{"Compare on-device output to the Week 7 cloud result on the same photo"}</li>
        </ul>
      </div>

      <Step num={0} title={"Open MLScanner and check your Session 1 state (~3 min)"}>
        <p>Open the project from Session 1. Confirm:</p>
        <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li>{"The Scanner tab works \u2014 camera feed, labels, OCR mode toggle"}</li>
          <li>{"The Gallery tab exists with a placeholder screen"}</li>
          <li>{"Navigation between the two tabs works"}</li>
        </ul>
        <Tip>{"If you didn\u2019t finish the bottom nav in Session 1, add it now before continuing. The rest of this lab lives entirely in the Gallery tab."}</Tip>
        <Checkpoint num={0}>MLScanner opens, Scanner tab is working, Gallery tab navigates to a placeholder screen.</Checkpoint>
      </Step>

      <Step num={1} title={"Understand the on-device generative model (~5 min)"}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "8px 0 12px" }}>
          {[
            { label: isAndroid ? "Gemini Nano" : "Foundation Models", items: isAndroid
                ? ["Small LLM, runs on Pixel 8+", "Text in \u2192 text out", "Managed by the OS (not your APK)", "No API key, free, offline"]
                : ["On-device LLM on Apple Silicon (iOS 26+)", "Text in \u2192 text out via LanguageModelSession", "Managed by iOS, updates automatically", "Private, offline, no key needed"],
              color: TEAL_L, fg: TEAL_D },
            { label: "vs Claude (Week 7)", items: isAndroid
                ? ["Smaller context window", "No vision / image input", "Less complex reasoning", "But: works with no internet"]
                : ["Smaller context window", "Requires iOS 26+ and Apple Intelligence enabled", "Less complex reasoning", "But: works with no internet"],
              color: AML, fg: AM },
          ].map(function(col) {
            return (
              <div key={col.label} style={{ background: col.color, borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: col.fg, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: ".05em" }}>{col.label}</p>
                {col.items.map(function(item) {
                  return <div key={item} style={{ fontSize: 12, color: col.fg, lineHeight: 1.8 }}>{"\u25B8 " + item}</div>;
                })}
              </div>
            );
          })}
        </div>
        {isAndroid ? (
          <CodeB title="build.gradle.kts \u2014 add AI Core (if not already present)" accent={BL}>{`implementation("com.google.ai.edge.aicore:aicore:0.0.1-exp01")`}</CodeB>
        ) : (
          <Tip>{"No third-party dependencies needed. Add import FoundationModels alongside import Vision in your ViewModel \u2014 both are built into the iOS SDK."}</Tip>
        )}
        <Checkpoint num={1}>You understand the on-device model\u2019s capabilities and limits compared to the cloud model from Week 7.</Checkpoint>
      </Step>

      <Step num={2} title={"Build the Gallery tab UI (~10 min)"}>
        <p>{"Replace the placeholder screen with a real UI. The Gallery tab lets users pick a photo and displays a preview before sending it to the on-device AI for analysis."}</p>

        <VStep num="a" title={isAndroid ? "Create the ViewModel skeleton" : "Create the ViewModel skeleton"}>
          {isAndroid ? (
            <div>
              <p>Create a new Kotlin file <IC>GalleryViewModel.kt</IC>. The ViewModel will own the image state so it survives orientation changes. Add a class <IC>GalleryViewModel : ViewModel()</IC>. Declare three <IC>MutableStateFlow</IC> properties and their public <IC>StateFlow</IC> counterparts: <IC>selectedBitmap</IC> (type <IC>Bitmap?</IC>), <IC>analysisResult</IC> (type <IC>String</IC>), and <IC>isLoading</IC> (type <IC>Boolean</IC>).</p>
              <p style={{ marginTop: 8 }}>Next, add a method to load a selected photo: <IC>fun loadBitmap(uri: Uri, context: Context)</IC>. Use the <IC>ContentResolver</IC> to open an input stream from the URI, decode it into a <IC>Bitmap</IC>, and set it to <IC>_selectedBitmap.value</IC>. Also clear the <IC>_analysisResult</IC>.</p>
              <Section title="✅ Check your work — GalleryViewModel.kt so far" defaultOpen={false}>
                <CodeB title="Kotlin — GalleryViewModel.kt" accent={BL}>{`import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.net.Uri
import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

class GalleryViewModel : ViewModel() {
    private val _selectedBitmap = MutableStateFlow<Bitmap?>(null)
    val selectedBitmap: StateFlow<Bitmap?> = _selectedBitmap

    private val _analysisResult = MutableStateFlow("")
    val analysisResult: StateFlow<String> = _analysisResult

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading

    fun loadBitmap(uri: Uri, context: Context) {
        val bitmap = context.contentResolver.openInputStream(uri)?.use {
            BitmapFactory.decodeStream(it)
        }
        _selectedBitmap.value = bitmap
        _analysisResult.value = ""
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Create a new Swift file <IC>GalleryViewModel.swift</IC>. The ViewModel centralizes our state so the UI stays clean. Add a class <IC>GalleryViewModel: ObservableObject</IC> marked with <IC>@MainActor</IC>. Declare three <IC>@Published</IC> properties: <IC>selectedImage</IC> (type <IC>UIImage?</IC>), <IC>analysisResult</IC> (initialized to <IC>""</IC>), and <IC>isLoading</IC> (initialized to <IC>false</IC>).</p>
              <p style={{ marginTop: 8 }}>Next, add a method to load a selected photo: <IC>func loadPhoto(_ item: PhotosPickerItem?) async</IC>. Load a <IC>Data</IC> transferable from the item, convert it to a <IC>UIImage</IC>, and update the state.</p>
              <Section title="✅ Check your work — GalleryViewModel.swift so far" defaultOpen={false}>
                <CodeB title="Swift — GalleryViewModel.swift" accent={GR}>{`import SwiftUI
import PhotosUI

@MainActor
class GalleryViewModel: ObservableObject {
    @Published var selectedImage: UIImage?
    @Published var analysisResult = ""
    @Published var isLoading = false

    func loadPhoto(_ item: PhotosPickerItem?) async {
        guard let data = try? await item?.loadTransferable(type: Data.self),
              let image = UIImage(data: data)
        else { return }
        selectedImage = image
        analysisResult = ""
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="b" title={isAndroid ? "Build the image preview and photo picker" : "Build the image preview and photo picker"}>
          {isAndroid ? (
            <div>
              <p>Create <IC>GalleryScreen.kt</IC>. Add a <IC>@Composable fun GalleryScreen(viewModel: GalleryViewModel = viewModel())</IC>. Collect the three state flows. To pick a photo without needing storage permissions, use <IC>rememberLauncherForActivityResult</IC> with <IC>ActivityResultContracts.PickVisualMedia()</IC>. In the result callback, call <IC>viewModel.loadBitmap</IC>.</p>
              <p style={{ marginTop: 8 }}>Inside a <IC>Column</IC>, add a <IC>Box</IC> for the preview (260.dp height, light gray background). If the bitmap is not null, show an <IC>Image</IC> with <IC>ContentScale.Crop</IC>. Otherwise, show "Tap below to choose a photo". Add a <IC>Button</IC> below it that launches the picker.</p>
              <Section title="💡 Show me the syntax — photo picker launcher" defaultOpen={false}>
                <CodeB title="Kotlin — Activity Result Launcher" accent={BL}>{`val context = LocalContext.current
val launcher = rememberLauncherForActivityResult(
    ActivityResultContracts.PickVisualMedia()
) { uri -> 
    if (uri != null) {
        viewModel.loadBitmap(uri, context)
    }
}

// To launch it from a button:
launcher.launch(PickVisualMediaRequest(ActivityResultContracts.PickVisualMedia.ImageOnly))`}</CodeB>
              </Section>
              <Section title="✅ Check your work — GalleryScreen.kt so far" defaultOpen={false}>
                <CodeB title="Kotlin — GalleryScreen.kt" accent={BL}>{`import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.PickVisualMediaRequest
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel

@Composable
fun GalleryScreen(viewModel: GalleryViewModel = viewModel()) {
    val bitmap by viewModel.selectedBitmap.collectAsState()
    val result by viewModel.analysisResult.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()
    val context = LocalContext.current
    
    val launcher = rememberLauncherForActivityResult(
        ActivityResultContracts.PickVisualMedia()
    ) { uri -> uri?.let { viewModel.loadBitmap(it, context) } }

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Box(
            modifier = Modifier.fillMaxWidth().height(260.dp)
                .background(Color.LightGray, RoundedCornerShape(12.dp)),
            contentAlignment = Alignment.Center
        ) {
            if (bitmap != null) {
                Image(bitmap!!.asImageBitmap(), contentDescription = null,
                    modifier = Modifier.fillMaxSize().clip(RoundedCornerShape(12.dp)),
                    contentScale = ContentScale.Crop)
            } else {
                Text("Tap below to choose a photo", color = Color.Gray)
            }
        }
        Spacer(Modifier.height(12.dp))
        Button(
            onClick = { launcher.launch(PickVisualMediaRequest(
                ActivityResultContracts.PickVisualMedia.ImageOnly)) },
            modifier = Modifier.fillMaxWidth()
        ) { Text("Choose from Gallery") }
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Create <IC>GalleryView.swift</IC>. Inside the view, add <IC>@StateObject private var viewModel = GalleryViewModel()</IC> and a <IC>@State private var photoItem: PhotosPickerItem?</IC>. We use <IC>PhotosPicker</IC> because it handles photo library access out-of-process, meaning your app doesn't need to ask for permission to use it.</p>
              <p style={{ marginTop: 8 }}>Inside a <IC>ScrollView</IC> and <IC>VStack</IC>, add a <IC>ZStack</IC> for the preview box (height 260, gray background). Show the <IC>selectedImage</IC> if available. Below the box, add a <IC>PhotosPicker</IC> bound to <IC>$photoItem</IC>. Use the <IC>.onChange</IC> modifier to watch for new selections and pass them to <IC>viewModel.loadPhoto</IC>.</p>
              <Section title="💡 Show me the syntax — PhotosPicker onChange" defaultOpen={false}>
                <CodeB title="Swift — PhotosPicker onChange" accent={GR}>{`PhotosPicker(selection: $photoItem, matching: .images) {
    Label("Choose from Gallery", systemImage: "photo.on.rectangle")
}
.buttonStyle(.bordered)
.onChange(of: photoItem) { _, item in
    Task { await viewModel.loadPhoto(item) }
}`}</CodeB>
              </Section>
              <Section title="✅ Check your work — GalleryView.swift so far" defaultOpen={false}>
                <CodeB title="Swift — GalleryView.swift" accent={GR}>{`import SwiftUI
import PhotosUI

struct GalleryView: View {
    @StateObject private var viewModel = GalleryViewModel()
    @State private var photoItem: PhotosPickerItem?

    var body: some View {
        ScrollView {
            VStack(spacing: 14) {
                ZStack {
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color.gray.opacity(0.15))
                        .frame(height: 260)
                    if let image = viewModel.selectedImage {
                        Image(uiImage: image).resizable()
                            .scaledToFill().frame(height: 260)
                            .clipShape(RoundedRectangle(cornerRadius: 12))
                    } else {
                        Text("Tap below to choose a photo")
                            .foregroundColor(.secondary)
                    }
                }
                PhotosPicker(selection: $photoItem, matching: .images) {
                    Label("Choose from Gallery", systemImage: "photo.on.rectangle")
                }.buttonStyle(.bordered)
                .onChange(of: photoItem) { _, item in
                    Task { await viewModel.loadPhoto(item) }
                }
            }.padding()
        }
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="c" title="Add the Analyze button, result card, and wire into the tab bar" last>
          {isAndroid ? (
            <div>
              <p>Back in <IC>GalleryScreen</IC>, add the remaining UI below the "Choose from Gallery" button:</p>
              <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
                <li>An "Analyze On-Device" <IC>Button</IC>. Set <IC>{"enabled = bitmap != null && !isLoading"}</IC> so it's disabled before an image is picked or during analysis. On tap, call <IC>viewModel.analyzeOnDevice()</IC> (you'll implement this in Step 3).</li>
                <li>A result <IC>Card</IC> that appears only when <IC>result.isNotEmpty()</IC>, displaying the analysis text.</li>
                <li>Open <IC>MainScreen.kt</IC> and replace <IC>Text("Coming in Session 2")</IC> with <IC>GalleryScreen()</IC>.</li>
              </ol>
              <Section title="✅ Check your work — complete GalleryScreen.kt" defaultOpen={false}>
                <CodeB title="Kotlin — GalleryScreen.kt" accent={BL}>{`import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.PickVisualMediaRequest
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel

@Composable
fun GalleryScreen(viewModel: GalleryViewModel = viewModel()) {
    val bitmap by viewModel.selectedBitmap.collectAsState()
    val result by viewModel.analysisResult.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()
    val context = LocalContext.current

    val launcher = rememberLauncherForActivityResult(
        ActivityResultContracts.PickVisualMedia()
    ) { uri -> uri?.let { viewModel.loadBitmap(it, context) } }

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Box(
            modifier = Modifier.fillMaxWidth().height(260.dp)
                .background(Color.LightGray, RoundedCornerShape(12.dp)),
            contentAlignment = Alignment.Center
        ) {
            if (bitmap != null) {
                Image(bitmap!!.asImageBitmap(), contentDescription = null,
                    modifier = Modifier.fillMaxSize().clip(RoundedCornerShape(12.dp)),
                    contentScale = ContentScale.Crop)
            } else {
                Text("Tap below to choose a photo", color = Color.Gray)
            }
        }
        Spacer(Modifier.height(12.dp))
        Button(
            onClick = { launcher.launch(PickVisualMediaRequest(
                ActivityResultContracts.PickVisualMedia.ImageOnly)) },
            modifier = Modifier.fillMaxWidth()
        ) { Text("Choose from Gallery") }
        Spacer(Modifier.height(8.dp))
        Button(
            onClick = { viewModel.analyzeOnDevice() },
            enabled = bitmap != null && !isLoading,
            modifier = Modifier.fillMaxWidth()
        ) { Text(if (isLoading) "Analyzing on-device…" else "Analyze On-Device") }
        if (result.isNotEmpty()) {
            Spacer(Modifier.height(14.dp))
            Card(modifier = Modifier.fillMaxWidth()) {
                Text(result, modifier = Modifier.padding(14.dp),
                    fontSize = 14.sp, lineHeight = 22.sp)
            }
        }
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Back in <IC>GalleryView</IC>, add the remaining UI below the <IC>PhotosPicker</IC>:</p>
              <ol style={{ paddingLeft: 20, margin: "6px 0" }}>
                <li>An "Analyze On-Device" <IC>Button</IC> with <IC>.buttonStyle(.borderedProminent)</IC>. Wrap the action in a <IC>Task</IC> to await <IC>viewModel.analyzeOnDevice()</IC> (you'll implement this in Step 3). Disable it when <IC>selectedImage == nil</IC> or <IC>isLoading</IC> is true.</li>
                <li>A <IC>Text</IC> view that appears only when <IC>analysisResult</IC> is not empty, styled with padding and a gray background.</li>
                <li>Open <IC>ContentView.swift</IC> and replace <IC>Text("Coming in Session 2")</IC> with <IC>GalleryView()</IC>.</li>
              </ol>
              <Section title="✅ Check your work — complete GalleryView.swift" defaultOpen={false}>
                <CodeB title="Swift — GalleryView.swift" accent={GR}>{`import PhotosUI
import SwiftUI

struct GalleryView: View {
    @StateObject private var viewModel = GalleryViewModel()
    @State private var photoItem: PhotosPickerItem?

    var body: some View {
        ScrollView {
            VStack(spacing: 14) {
                ZStack {
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color.gray.opacity(0.15))
                        .frame(height: 260)
                    if let image = viewModel.selectedImage {
                        Image(uiImage: image).resizable()
                            .scaledToFill().frame(height: 260)
                            .clipShape(RoundedRectangle(cornerRadius: 12))
                    } else {
                        Text("Tap below to choose a photo")
                            .foregroundColor(.secondary)
                    }
                }
                PhotosPicker(selection: $photoItem, matching: .images) {
                    Label("Choose from Gallery", systemImage: "photo.on.rectangle")
                }.buttonStyle(.bordered)
                .onChange(of: photoItem) { _, item in
                    Task { await viewModel.loadPhoto(item) }
                }
                
                Button {
                    Task { await viewModel.analyzeOnDevice() }
                } label: {
                    Label(viewModel.isLoading ? "Analyzing on-device…" : "Analyze On-Device",
                          systemImage: "cpu")
                }
                .buttonStyle(.borderedProminent)
                .disabled(viewModel.selectedImage == nil || viewModel.isLoading)

                if !viewModel.analysisResult.isEmpty {
                    Text(viewModel.analysisResult).font(.body)
                        .padding().background(Color.gray.opacity(0.1))
                        .cornerRadius(10)
                }
            }.padding()
        }
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>
        <Checkpoint num={2}>Gallery tab shows a preview box, gallery picker, and analyze button. Picking a photo shows a preview. Analyze button is wired up but does nothing yet.</Checkpoint>
      </Step>

      <Step num={3} title={"Wire up the on-device analysis (~15 min)"}>
        <p>{"Two-stage pipeline: use ML to get structured labels from the image, then feed those labels into the generative model for a natural-language response."}</p>
        
        <VStep num="a" title={isAndroid ? "Add the ML labeler and implement Stage 1" : "Add the Vision classifier and implement Stage 1"}>
          {isAndroid ? (
            <div>
              <p>In <IC>GalleryViewModel</IC>, add an <IC>ImageLabeler</IC> instance using the exact same code from Session 1. This handles our first stage. Then, start implementing <IC>analyzeOnDevice()</IC>. For now, just run the ML Kit labeler and display the raw results in <IC>_analysisResult</IC>.</p>
              <Tip>{"This step uses the same ML Kit and coroutines dependencies from Session 1. If await() or ImageLabeling show red, confirm you have com.google.mlkit:image-labeling and org.jetbrains.kotlinx:kotlinx-coroutines-play-services in your build.gradle.kts."}</Tip>
              <p style={{ marginTop: 6 }}>{"We use Dispatchers.IO because image classification is CPU-intensive work that would freeze your UI if run on the main thread."}</p>
              <Section title="✅ Check your work — Stage 1 only" defaultOpen={false}>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>{"Add this code to your GalleryViewModel below the existing properties and loadBitmap method from Step 2a. The complete file is in Step 3c."}</p>
                <CodeB title="Kotlin — GalleryViewModel.kt" accent={BL}>{`    private val labeler = ImageLabeling.getClient(ImageLabelerOptions.DEFAULT_OPTIONS)

    fun analyzeOnDevice() {
        val bitmap = _selectedBitmap.value ?: return
        _isLoading.value = true
        viewModelScope.launch(Dispatchers.IO) {
            // Stage 1: ML Kit labels
            val image = InputImage.fromBitmap(bitmap, 0)
            val labels = labeler.process(image).await()
            val labelText = labels.take(5).joinToString(", ") {
                "\${it.text} (\${(it.confidence * 100).toInt()}%)"
            }
            
            _analysisResult.value = "Raw Labels: $labelText"
            _isLoading.value = false
        }
    }`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>In <IC>GalleryViewModel</IC>, start implementing <IC>analyzeOnDevice()</IC>. Use <IC>VNImageRequestHandler</IC> and <IC>VNClassifyImageRequest</IC> to get structured labels from the image. This is exactly what we did in Session 1, just applied to a static image instead of a camera feed.</p>
              <Section title="✅ Check your work — Stage 1 only" defaultOpen={false}>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>{"Add this method to your GalleryViewModel below the existing properties and loadPhoto method from Step 2a. The complete file is in Step 3c."}</p>
                <CodeB title="Swift — GalleryViewModel.swift" accent={GR}>{`    func analyzeOnDevice() async {
        guard let image = selectedImage, let cgImage = image.cgImage else { return }
        isLoading = true

        // Stage 1: Vision classification
        let handler = VNImageRequestHandler(cgImage: cgImage)
        let request = VNClassifyImageRequest()
        try? handler.perform([request])
        let topLabels = (request.results as? [VNClassificationObservation])?
            .prefix(5).filter { $0.confidence > 0.05 }
            .map { "\($0.identifier) (\(Int($0.confidence*100))%)" }
            ?? []
        let labelText = topLabels.joined(separator: ", ")
        
        analysisResult = "Raw Labels: \(labelText)"
        isLoading = false
    }`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="b" title="Add Stage 2 — the on-device generative model">
          {isAndroid ? (
            <div>
              <p>Now we add the generative LLM. In Android, this is Gemini Nano. Add a <IC>GenerativeModel</IC> property and an <IC>init</IC> block to warm it up.</p>
              <Tip>{"The warm-up call forces the model to load into memory during ViewModel init, so the first real analysis doesn\u2019t suffer a multi-second cold start. Without it, students will think the app is frozen on first tap."}</Tip>
              <Section title="✅ Check your work — Gemini Nano setup" defaultOpen={false}>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>{"Add these properties and methods above loadBitmap in your GalleryViewModel. The complete file is in Step 3c."}</p>
                <CodeB title="Kotlin — GalleryViewModel.kt" accent={BL}>{`    private var nanoModel: GenerativeModel? = null

    init { viewModelScope.launch { initNano() } }

    private suspend fun initNano() {
        nanoModel = try {
            val m = GenerativeModel("gemini-nano", generationConfig { temperature = 0.7f })
            m.generateContent("hello") // warm-up
            m
        } catch (e: Exception) { null }
    }`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Now we add the generative LLM. In iOS 26+, Apple provides the <IC>FoundationModels</IC> framework. We can create a <IC>LanguageModelSession</IC> to run prompts completely offline on supported devices (iPhone 15 Pro+, Apple Silicon Macs). We first check if the model is available.</p>
              <Warn>You must have an iOS 26+ simulator or device, and Apple Intelligence must be turned on in Settings, otherwise the model will return unavailable.</Warn>
              <Section title="💡 Show me the syntax — Foundation Models check" defaultOpen={false}>
                <CodeB title="Swift — Foundation Models" accent={GR}>{`import FoundationModels

let model = SystemLanguageModel.default
if case .available = model.availability {
    let session = LanguageModelSession()
    let response = try await session.respond(to: "Hello!")
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>

        <VStep num="c" title="Complete the pipeline: feed labels into the LLM" last>
          {isAndroid ? (
            <div>
              <p>Update <IC>analyzeOnDevice()</IC>. Instead of just showing the raw labels, feed them into a prompt for Gemini Nano. Add a fallback mechanism in case the device doesn't support Nano.</p>
              <Tip>{"Notice the fallback: if the generative model isn\u2019t available, we still show the ML labels. Real-world apps must always have a graceful degradation path \u2014 never assume a specific device capability."}</Tip>
              <Section title="✅ Check your work — complete GalleryViewModel.kt" defaultOpen={false}>
                <CodeB title="Kotlin — GalleryViewModel.kt" accent={BL}>{`import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.net.Uri
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.google.ai.edge.aicore.GenerativeModel
import com.google.ai.edge.aicore.generationConfig
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.label.ImageLabeling
import com.google.mlkit.vision.label.defaults.ImageLabelerOptions
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.tasks.await

class GalleryViewModel : ViewModel() {
    private val _selectedBitmap = MutableStateFlow<Bitmap?>(null)
    val selectedBitmap: StateFlow<Bitmap?> = _selectedBitmap

    private val _analysisResult = MutableStateFlow("")
    val analysisResult: StateFlow<String> = _analysisResult

    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading

    private val labeler = ImageLabeling.getClient(ImageLabelerOptions.DEFAULT_OPTIONS)
    private var nanoModel: GenerativeModel? = null

    init { viewModelScope.launch { initNano() } }

    private suspend fun initNano() {
        nanoModel = try {
            val m = GenerativeModel("gemini-nano", generationConfig { temperature = 0.7f })
            m.generateContent("hello") // warm-up
            m
        } catch (e: Exception) { null }
    }

    fun loadBitmap(uri: Uri, context: Context) {
        val bitmap = context.contentResolver.openInputStream(uri)?.use {
            BitmapFactory.decodeStream(it)
        }
        _selectedBitmap.value = bitmap
        _analysisResult.value = ""
    }

    fun analyzeOnDevice() {
        val bitmap = _selectedBitmap.value ?: return
        _isLoading.value = true
        viewModelScope.launch(Dispatchers.IO) {
            // Stage 1: ML Kit labels
            val image = InputImage.fromBitmap(bitmap, 0)
            val labels = labeler.process(image).await()
            val labelText = labels.take(5).joinToString(", ") {
                "\${it.text} (\${(it.confidence * 100).toInt()}%)"
            }

            // Stage 2: Gemini Nano (with fallback)
            _analysisResult.value = nanoModel?.let { model ->
                try {
                    val prompt = """
                        On-device ML detected: $labelText
                        Write a natural 2-sentence description
                        of what this photo probably shows.
                    """.trimIndent()
                    model.generateContent(prompt).text ?: "No response from on-device model."
                } catch (e: Exception) {
                    "Detected: $labelText\n(Gemini Nano unavailable on this device)"
                }
            } ?: "Detected: $labelText"

            _isLoading.value = false
        }
    }
}`}</CodeB>
              </Section>
            </div>
          ) : (
            <div>
              <p>Update <IC>analyzeOnDevice()</IC>. Instead of showing raw labels, check if the <IC>SystemLanguageModel</IC> is available. If it is, use a <IC>LanguageModelSession</IC> to generate a natural description from the labels. If not, fallback to a bulleted list.</p>
              <Tip>{"Notice the fallback: if the Foundation Model isn\u2019t available, we still show the Vision labels. Real-world apps must always have a graceful degradation path \u2014 never assume a specific device capability."}</Tip>
              <Section title="✅ Check your work — complete GalleryViewModel.swift" defaultOpen={false}>
                <CodeB title="Swift — GalleryViewModel.swift" accent={GR}>{`import SwiftUI
import PhotosUI
import Vision
import FoundationModels

@MainActor
class GalleryViewModel: ObservableObject {
    @Published var selectedImage: UIImage?
    @Published var analysisResult = ""
    @Published var isLoading = false

    func loadPhoto(_ item: PhotosPickerItem?) async {
        guard let data = try? await item?.loadTransferable(type: Data.self),
              let image = UIImage(data: data)
        else { return }
        selectedImage = image
        analysisResult = ""
    }

    func analyzeOnDevice() async {
        guard let image = selectedImage,
              let cgImage = image.cgImage else { return }
        isLoading = true

        // Stage 1: Vision classification
        let handler = VNImageRequestHandler(cgImage: cgImage)
        let request = VNClassifyImageRequest()
        try? handler.perform([request])
        let topLabels = (request.results as? [VNClassificationObservation])?
            .prefix(5).filter { $0.confidence > 0.05 }
            .map { "\($0.identifier) (\(Int($0.confidence*100))%)" }
            ?? []
        let labelText = topLabels.joined(separator: ", ")

        // Stage 2: Apple Foundation Models / fallback
        let model = SystemLanguageModel.default
        if case .available = model.availability {
            do {
                let session = LanguageModelSession()
                let prompt = """
                On-device ML detected: \(labelText)
                Write a natural 2-sentence description of what this photo probably shows.
                """
                analysisResult = try await session.respond(to: prompt).content
            } catch {
                analysisResult = "Generation error: \(error.localizedDescription)"
            }
        } else {
            // Fallback if Apple Intelligence is unavailable
            analysisResult = topLabels.isEmpty
                ? "No objects detected."
                : topLabels.map { "• \($0)" }.joined(separator: "\n")
        }
        isLoading = false
    }
}`}</CodeB>
              </Section>
            </div>
          )}
        </VStep>
        <Checkpoint num={3}>Pick a photo, tap Analyze. A result appears with no network call. Now turn on airplane mode and try again — it should work identically.</Checkpoint>
      </Step>

      <Step num={4} title={"Verify offline, then compare to cloud (~8 min)"}>
        <VStep num="a" title="Airplane mode test">
          <p>Enable airplane mode on your device or simulator. Pick a different photo and tap Analyze. The result should appear just as fast. That's the whole point of on-device ML!</p>
        </VStep>
        
        <VStep num="b" title="Cloud comparison" last>
          <p>Run the same photo through the Week 7 Claude vision API project (or use a screenshot from last week's lab if you don't have it running). Compare the two approaches:</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "10px 0" }}>
            {[
              { label: "On-Device (this lab)", qs: ["What did it identify correctly?", "What did it miss?", "How fast was the response?", "Did airplane mode work?"], color: TEAL_L, fg: TEAL_D },
              { label: "Cloud AI (Week 7)", qs: ["What extra detail did Claude add?", "How was the quality difference?", "How much longer did it take?", "What happened offline?"], color: AML, fg: AM },
            ].map(function(col) {
              return (
                <div key={col.label} style={{ background: col.color, borderRadius: 8, padding: "10px 12px" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: col.fg, margin: "0 0 6px", textTransform: "uppercase" }}>{col.label}</p>
                  {col.qs.map(function(q) {
                    return <div key={q} style={{ fontSize: 12, color: col.fg, lineHeight: 1.8 }}>{"  □ " + q}</div>;
                  })}
                </div>
              );
            })}
          </div>
          <AiOpp>
            <em>{"Think through the architecture tradeoff → "}</em>Ask Claude: <strong>{"“My mobile app analyzes photos. On-device is fast, private, and offline but less capable. Cloud is powerful but needs internet and costs per call. My users might be in areas with poor connectivity. What architecture would you recommend?”"}</strong>
          </AiOpp>
          <Checkpoint num={4}>{"You’ve run the same photo through both approaches and can articulate the quality vs capability tradeoff out loud."}</Checkpoint>
        </VStep>
      </Step>

      <Step num={5} title={"Reflect (~5 min)"}>
        <CodeB title="Session 2 Reflection">{`// 1. Which result was higher quality \u2014 on-device or cloud?
//    In what real-world scenario would you prefer the
//    lower-quality result anyway?

// 2. Your capstone app \u2014 should it use on-device AI,
//    cloud AI, or both? What drove that decision?

// 3. What does "privacy-preserving AI" mean, and why might
//    a user prefer on-device inference even if it\u2019s less
//    accurate?`}</CodeB>
        <div style={{ background: CAP_BG, borderRadius: 8, padding: "12px 14px", margin: "14px 0", fontSize: 13, lineHeight: 1.6 }}>
          <strong style={{ color: CAP_C }}>{"\uD83C\uDFD7\uFE0F Capstone M3 check-in happens during this lab"}</strong>
          <p style={{ color: CAP_C, margin: "6px 0 0" }}>{"Your instructor will pull your team aside for 10 minutes. Have your capstone running on a device or emulator. Be ready to walk through current state, what\u2019s working, and your plan for Week 9."}</p>
        </div>
      </Step>

      <Section title={"\uD83D\uDCA1 Hints"}>
        <div style={{ fontSize: 13, lineHeight: 1.8 }}>
          <p><strong>{isAndroid ? "Gemini Nano throws UnsupportedOperationException" : "Foundation Models returns unavailable"}</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Your device doesn\u2019t support Gemini Nano. Display the ML Kit label results directly \u2014 the two-stage architecture is identical, you just skip Stage 2. The learning is the same." : "Your device doesn\u2019t support Foundation Models. Show the Vision classification labels formatted as a list \u2014 the two-stage architecture is identical, you just skip Stage 2."}</p>
          <p><strong>{"Photo picker crashes or shows nothing"}</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "PickVisualMedia uses the system photo picker and does not require storage permissions. If the picker shows no photos, check that your emulator has images in its gallery \u2014 drag and drop a JPEG onto the running emulator to add one." : "Confirm NSPhotoLibraryUsageDescription is in Info.plist. PhotosPicker handles permission automatically on iOS 16+."}</p>
          <p><strong>{"Analysis is slow on first tap"}</strong></p>
          <p style={{ marginLeft: 16 }}>{"The model loads from storage into memory on first use. Subsequent calls will be much faster. Always run inference on a background thread."}</p>
        </div>
      </Section>

      <Section title={"\uD83D\uDE80 Stretch Features"}>
        <ul style={{ paddingLeft: 20, fontSize: 13, lineHeight: 1.8 }}>
          <li>{"Side-by-side view: show on-device and Week 7 cloud results in two columns on the same screen"}</li>
          <li>{"Latency timer: show how long each approach took in milliseconds"}</li>
          <li>{"Offline banner: detect airplane mode and show a \u2018Running on-device\u2019 indicator"}</li>
          <li>{"Cross-week combo: tap a label in the Gallery result to open a Claude chat about it (on-device classification \u2192 cloud conversation)"}</li>
          <li>{"Save results: store each analysis result to " + (isAndroid ? "Room" : "SwiftData") + " for a history tab (combines Week 5 + 8)"}</li>
        </ul>
      </Section>
    </div>
  );
}
/* ====== LAB TAB SWITCHER ====== */
var SESSION_LABELS = ["Session 1: Build the Scanner", "Session 2: Add the Gallery Analyzer"];

function LabTab({ platform, setPlatform }) {
  var s = useState(1);
  var session = s[0];
  var setSession = s[1];
  return (
    <div>
      <div style={{ display: "flex", gap: 0, marginBottom: 12, borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-tertiary)", width: "fit-content" }}>
        {[1, 2].map(function(n) {
          return (
            <button key={n} onClick={function() { setSession(n); }} style={{
              padding: "8px 20px", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer",
              background: session === n ? PL : "var(--color-background-primary)",
              color: session === n ? PD : "var(--color-text-secondary)"
            }}>{SESSION_LABELS[n - 1]}</button>
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
        <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px", color: CAP_C }}>{"\uD83C\uDFD7\uFE0F Capstone M3: Mid-Point Check-In"}</h3>
        <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, color: CAP_C }}>
          {"No submission required. Your instructor checks in with your team for 10 minutes during Session 2 lab time. App should be runnable \u2014 not polished, but working."}
        </p>
      </div>

      <PlatformToggle platform={platform} setPlatform={setPlatform} />

      <div style={{ fontSize: 13, lineHeight: 1.7 }}>
        <p>{"You\u2019re past the halfway mark. M3 is a progress check, not a graded deliverable. The goal: every team leaves knowing exactly what to build in the final two weeks."}</p>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\u2705 What to have ready for the check-in"}</h4>
        <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
          <li>{"\u2610 App runs on "}{isAndroid ? "a device or emulator" : "the Simulator or a device"}{" without crashing on launch"}</li>
          <li>{"\u2610 "}<strong>Core navigation</strong>{" working \u2014 you can move between main screens"}</li>
          <li>{"\u2610 At least "}<strong>one real network call</strong>{" working end-to-end (not mocked)"}</li>
          <li>{"\u2610 "}<strong>Local persistence</strong>{" in place \u2014 data survives an app restart"}</li>
          <li>{"\u2610 Every team member has "}<strong>meaningful commits</strong>{" on the main branch"}</li>
          <li>{"\u2610 A clear list of what\u2019s still left to build"}</li>
        </ul>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83C\uDFAF What the 10-minute check-in looks like"}</h4>
        <ol style={{ paddingLeft: 20, lineHeight: 2 }}>
          <li>{"Demo your current state (2 min) \u2014 just show what\u2019s working, no polish needed"}</li>
          <li>{"Walk through your remaining feature list (2 min)"}</li>
          <li>{"Surface blockers and get advice (4 min)"}</li>
          <li>{"Confirm the plan for Week 9 and M4 (2 min)"}</li>
        </ol>

        <Warn>{"Have your app running on a device or emulator before the check-in starts. Don\u2019t spend your 10 minutes waiting for a build."}</Warn>

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83D\uDEA8 If you\u2019re behind"}</h4>
        <p>{"The check-in is the right moment to surface problems \u2014 not hide them. If core navigation or networking isn\u2019t working yet, say so. Your instructor can help you scope down or unblock. Staying quiet now will make Week 9 much harder."}</p>

        <AiOpp>
          <em>{"Use AI to scope what\u2019s left \u2192 "}</em>Ask Claude: <strong>{"\u201COur capstone has these features still to build: [list]. We have 2 weeks left, 3 people, and classes twice a week. Which features are highest priority for a good demo? What\u2019s safe to cut if we run out of time?\u201D"}</strong>
        </AiOpp>

        <div className="callout-ai" style={{ marginTop: 16, padding: "12px 14px", background: "#F9F0FF", borderRadius: 8 }}>
          <strong>{"\uD83D\uDCC5 Capstone Timeline"}</strong>
          <ul style={{ paddingLeft: 20, margin: "6px 0 0", lineHeight: 2 }}>
            <li style={{ opacity: 0.5 }}>{"Week 5: Team formation + platform selection \u2705"}</li>
            <li style={{ opacity: 0.5 }}>{"Week 6: Proposal due \u2705"}</li>
            <li style={{ opacity: 0.5 }}>{"Week 7: M1 \u2014 Repo setup, architecture scaffolded \u2705"}</li>
            <li style={{ opacity: 0.5 }}>{"Week 7: M2 \u2014 Core navigation + networking \u2705"}</li>
            <li><strong>{"Week 8 (this week):"}</strong>{" M3 \u2014 Instructor check-in during Session 2 lab"}</li>
            <li><strong>{"Week 9:"}</strong>{" M4 \u2014 Feature-complete, Git branching workflow in place"}</li>
            <li><strong>{"Week 10:"}</strong>{" Final \u2014 APK/TestFlight, demo day, written reflection"}</li>
          </ul>
        </div>

        <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--color-background-secondary)", borderRadius: 8 }}>
          <strong>{"\uD83D\uDCEC No submission needed"}</strong>
          <p style={{ margin: "6px 0 0" }}>{"M3 is a synchronous check-in only. Your instructor marks you as checked in after the conversation. Use remaining lab time for capstone work after your team is done."}</p>
        </div>

        <Tip>{"If you want to add on-device AI to your capstone, this week\u2019s labs give you everything you need. The Session 1 real-time labeling pattern and the Session 2 gallery analysis pattern can both be lifted directly into your project."}</Tip>
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

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 12 }}>{"\uD83D\uDCF9 Session Recordings"}</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><Link>Weekly Video Playlist</Link></li>
          <li><Link>Office Hours Video Playlist</Link></li>
        </ul>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>May take 24\u201348 hours to appear.</p>

        {isAndroid ? (
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83E\uDD16 Android \u2014 ML Kit"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link>ML Kit Image Labeling</Link>{" \u2014 on-device object recognition"}</li>
              <li><Link>ML Kit Text Recognition v2 (OCR)</Link>{" \u2014 read printed text"}</li>
              <li><Link>ML Kit Object Detection</Link>{" \u2014 bounding boxes (stretch)"}</li>
              <li><Link>ML Kit Barcode Scanning</Link>{" \u2014 QR codes (stretch)"}</li>
            </ul>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83D\uDCF7 Android \u2014 CameraX"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link>CameraX overview</Link>{" \u2014 lifecycle-aware camera API"}</li>
              <li><Link>ImageAnalysis use case</Link>{" \u2014 frame-by-frame analysis"}</li>
              <li><Link>CameraX with Jetpack Compose</Link></li>
            </ul>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\u26A1 Android \u2014 Gemini Nano / AI Core"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link>Android AI Core overview</Link></li>
              <li><Link>Gemini Nano on-device API reference</Link></li>
              <li><Link>Google AI Edge SDK for Android</Link></li>
              <li><Link>Supported devices for Gemini Nano</Link></li>
            </ul>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83D\uDCE6 Dependencies"}</h4>
            <CodeB title="build.gradle.kts (app)" accent={BL}>{`// CameraX
implementation("androidx.camera:camera-core:1.3.0")
implementation("androidx.camera:camera-camera2:1.3.0")
implementation("androidx.camera:camera-lifecycle:1.3.0")
implementation("androidx.camera:camera-view:1.3.0")

// ML Kit
implementation("com.google.mlkit:image-labeling:17.0.8")
implementation("com.google.mlkit:text-recognition:16.0.0")

// Camera permissions helper
implementation("com.google.accompanist:accompanist-permissions:0.32.0")

// On-device generative AI (Gemini Nano)
implementation("com.google.ai.edge.aicore:aicore:0.0.1-exp01")`}</CodeB>
          </div>
        ) : (
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83C\uDF4E iOS \u2014 Vision Framework"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link>VNClassifyImageRequest</Link>{" \u2014 classify image content"}</li>
              <li><Link>VNRecognizeTextRequest</Link>{" \u2014 OCR on images or live frames"}</li>
              <li><Link>VNDetectRectanglesRequest</Link>{" \u2014 document scanning (stretch)"}</li>
              <li><Link>Performing Vision requests on video frames</Link></li>
            </ul>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83D\uDCF7 iOS \u2014 AVFoundation / Camera"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link>AVCaptureSession overview</Link></li>
              <li><Link>AVCaptureVideoDataOutput</Link>{" \u2014 access live video frames"}</li>
              <li><Link>Using AVFoundation in SwiftUI apps</Link></li>
            </ul>
            <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\u26A1 iOS \u2014 Apple Intelligence"}</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li><Link>Apple Intelligence overview (WWDC 2024)</Link></li>
              <li><Link>Writing Tools API \u2014 UIWritingToolsCoordinator</Link></li>
              <li><Link>Core ML overview</Link>{" \u2014 run bundled custom models"}</li>
              <li><Link>Create ML</Link>{" \u2014 train simple custom models (stretch)"}</li>
              <li><Link>Supported devices for Apple Intelligence</Link></li>
            </ul>
          </div>
        )}

        <h4 style={{ fontSize: 14, fontWeight: 600, marginTop: 16 }}>{"\uD83E\uDDE0 Further Reading"}</h4>
        <ul style={{ paddingLeft: 20 }}>
          <li><Link>{"On-device AI vs cloud AI \u2014 when to use each (a16z)"}</Link></li>
          <li><Link>{"Privacy implications of on-device machine learning"}</Link></li>
          <li><Link>{"Edge AI in mobile: 2024 landscape"}</Link></li>
        </ul>
      </div>
    </div>
  );
}

/* ====== MAIN ====== */
export default function Week8Unit() {
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
