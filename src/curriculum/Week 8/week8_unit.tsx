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
        <p>Create a new {platform} project called <strong>MLScanner</strong>.</p>
        {isAndroid ? (
          <CodeB title="build.gradle.kts \u2014 add CameraX + ML Kit" accent={BL}>{`// CameraX
implementation("androidx.camera:camera-core:1.3.0")
implementation("androidx.camera:camera-camera2:1.3.0")
implementation("androidx.camera:camera-lifecycle:1.3.0")
implementation("androidx.camera:camera-view:1.3.0")

// ML Kit on-device models
implementation("com.google.mlkit:image-labeling:17.0.8")
implementation("com.google.mlkit:text-recognition:16.0.0")

// Permission helper for Compose
implementation("com.google.accompanist:accompanist-permissions:0.32.0")`}</CodeB>
        ) : (
          <div>
            <p style={{ fontSize: 13, margin: "6px 0" }}>No additional dependencies needed \u2014 Vision and AVFoundation are built into the SDK.</p>
            <CodeB title="Info.plist \u2014 add camera permission" accent={GR}>{`<key>NSCameraUsageDescription</key>
<string>Used to scan and label objects in real time.</string>`}</CodeB>
            <Tip>{"Add NSCameraUsageDescription before writing any camera code. The app will crash silently on a real device without it."}</Tip>
          </div>
        )}
        <Checkpoint num={0}>New project created. Dependencies added and synced. Project compiles.</Checkpoint>
      </Step>

      <Step num={1} title={"Request camera permission (~5 min)"}>
        <p>{"Camera access requires runtime permission on both platforms. Handle all three states: granted, denied, not-yet-asked."}</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 permission wrapper with Accompanist" accent={BL}>{`@Composable
fun CameraPermissionWrapper() {
    val permission = rememberPermissionState(Manifest.permission.CAMERA)
    when {
        permission.status.isGranted ->
            CameraScreen()
        permission.status.shouldShowRationale ->
            Column(
                modifier = Modifier.fillMaxSize().padding(32.dp),
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
            LaunchedEffect(Unit) { permission.launchPermissionRequest() }
    }
}`}</CodeB>
        ) : (
          <CodeB title="Swift \u2014 camera permission flow" accent={GR}>{`import AVFoundation
import SwiftUI

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
}

struct ContentView: View {
    @StateObject private var perm = CameraPermissionManager()
    var body: some View {
        switch perm.status {
        case .authorized:
            CameraView()
        case .denied:
            VStack(spacing: 16) {
                Text("Camera access is required.")
                Button("Open Settings") {
                    UIApplication.shared.open(
                        URL(string: UIApplication.openSettingsURLString)!)
                }
            }
        default:
            Button("Allow Camera Access") { perm.requestPermission() }
                .onAppear { perm.requestPermission() }
        }
    }
}`}</CodeB>
        )}
        <Checkpoint num={1}>App requests camera permission on launch. Granted leads to the camera screen. Denied shows a clear recovery path.</Checkpoint>
      </Step>

      <Step num={2} title={"Build the live camera preview (~10 min)"}>
        <p>{"Get the viewfinder on screen before adding any ML. Confirm the feed is live before proceeding."}</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 CameraPreview composable with ImageAnalysis" accent={BL}>{`@Composable
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
            .setBackpressureStrategy(STRATEGY_KEEP_ONLY_LATEST)
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
        ) : (
          <CodeB title="Swift \u2014 CameraManager + UIViewRepresentable preview" accent={GR}>{`import AVFoundation, SwiftUI

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
        from connection: AVCaptureConnection) { onFrame?(buffer) }
}

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
        )}
        <Checkpoint num={2}>The live camera feed is visible and filling the screen. No ML yet \u2014 just confirm the viewfinder works.</Checkpoint>
      </Step>

      <Step num={3} title={"Add real-time image labeling (~15 min)"}>
        <p>{"Attach ML to the camera feed. For every frame (or every N frames to save battery), run the labeler and overlay the top results on the preview."}</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 ML Kit image labeling on each frame" accent={BL}>{`// In ViewModel:
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
            imageProxy.close() // Always close — camera stalls otherwise
        }
}

// In CameraScreen composable:
val labels by viewModel.labels.collectAsState()
Box(modifier = Modifier.fillMaxSize()) {
    CameraPreview(onFrameAnalyzed = { viewModel.analyzeFrame(it) })
    // Overlay
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
}`}</CodeB>
        ) : (
          <CodeB title="Swift \u2014 VNClassifyImageRequest on live frames" accent={GR}>{`import Vision

class MLScannerViewModel: ObservableObject {
    @Published var detectedLabels: [String] = []
    private var lastProcessed: TimeInterval = 0

    func processFrame(_ buffer: CMSampleBuffer) {
        // Throttle to ~4 fps to prevent overheating
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
}

// Overlay in SwiftUI:
ZStack(alignment: .bottom) {
    CameraPreviewView(session: cameraManager.session)
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
}`}</CodeB>
        )}
        <Warn>{"Always close ImageProxy after processing (Android) or the camera pipeline stalls. On iOS, throttle to every 4th frame or less to prevent thermal throttling."}</Warn>
        <Checkpoint num={3}>{"Point the camera at objects around you. Labels appear at the bottom in real time with confidence percentages. The camera feed keeps running smoothly."}</Checkpoint>
      </Step>

      <Step num={4} title={"Add text recognition mode (~10 min)"}>
        <p>{"Add a toggle so users can switch between object labeling and OCR. Text recognition reads printed text in real time \u2014 perfect for scanning signs, receipts, or books."}</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 ScanMode enum + TextRecognition" accent={BL}>{`enum class ScanMode { LABEL, TEXT }

private val textRecognizer =
    TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)

fun analyzeFrame(imageProxy: ImageProxy, mode: ScanMode) {
    val image = InputImage.fromMediaImage(
        imageProxy.image!!, imageProxy.imageInfo.rotationDegrees)
    when (mode) {
        ScanMode.LABEL -> labeler.process(image)
            .addOnSuccessListener { results ->
                _labels.value = results.take(3).map {
                    "\${it.text}  \${(it.confidence * 100).toInt()}%"
                }
            }.addOnCompleteListener { imageProxy.close() }

        ScanMode.TEXT -> textRecognizer.process(image)
            .addOnSuccessListener { visionText ->
                val text = visionText.text.take(240)
                _labels.value = if (text.isBlank())
                    listOf("No text detected") else listOf(text)
            }.addOnCompleteListener { imageProxy.close() }
    }
}

// In your UI: add a SegmentedButton or Row of buttons to toggle mode`}</CodeB>
        ) : (
          <CodeB title="Swift \u2014 toggle between classify and OCR" accent={GR}>{`enum ScanMode { case label, text }

func processFrame(_ buffer: CMSampleBuffer, mode: ScanMode) {
    let now = Date().timeIntervalSince1970
    guard now - lastProcessed > 0.25 else { return }
    lastProcessed = now

    guard let pixelBuffer = CMSampleBufferGetImageBuffer(buffer)
    else { return }

    let request: VNRequest
    switch mode {
    case .label:
        let r = VNClassifyImageRequest { [weak self] req, _ in
            let top = (req.results as? [VNClassificationObservation])?
                .prefix(3).filter { $0.confidence > 0.08 }
                .map { "\($0.identifier)  \(Int($0.confidence*100))%" } ?? []
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
}`}</CodeB>
        )}
        <Checkpoint num={4}>{"Toggle to Text mode and hold the camera over printed text \u2014 a book, a poster, a keyboard label. Watch it read the text in real time."}</Checkpoint>
      </Step>

      <Step num={5} title={"Polish the overlay and prep for Session 2 (~8 min)"}>
        <p>Make the scanner feel like a real product, and set up the bottom navigation you\u2019ll need in Session 2:</p>
        <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
          <li>{"Add a segmented control / Picker at the top to switch Label \u2194 Text modes"}</li>
          <li>{"Smooth label transitions \u2014 only update when the top result changes, not every frame"}</li>
          <li>{isAndroid
            ? "Add a BottomNavigation bar with two destinations: \u201CScanner\u201D (current screen) and \u201CGallery\u201D (placeholder for Session 2)"
            : "Add a TabView with two tabs: \u201CScanner\u201D (current screen) and \u201CGallery\u201D (placeholder for Session 2)"
          }</li>
        </ul>
        <Tip>{"The Gallery tab can show a placeholder Text(\u201CComing in Session 2\u201D) for now. The important thing is that navigation works so Session 2 has a clean place to build."}</Tip>
        <CodeB title="Session 1 Reflection">{`// 1. How does ML Kit / Vision differ from the Claude API in Week 7?
// 2. What happens when the camera points at something the model
//    doesn\u2019t recognize well? What do the confidence scores look like?
// 3. Name one app you use that probably uses on-device ML.
//    Why do you think it runs on-device rather than in the cloud?`}</CodeB>
        <Checkpoint num={5}>{"Scanner works in both Label and Text modes. A bottom nav / tab bar is in place with a Gallery placeholder. Show a TA before moving on."}</Checkpoint>
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
          : "Apple Intelligence requires iPhone 15 Pro / iPhone 16 running iOS 18+. If your device isn\u2019t supported, follow the Core ML fallback in Step 3. The architecture lesson is identical."
        }
      </Warn>

      <div style={{ fontSize: 13, lineHeight: 1.7, marginTop: 8 }}>
        <strong>{"\uD83C\uDFAF Goals"}</strong>
        <ul style={{ paddingLeft: 20, margin: "6px 0 12px" }}>
          <li>{"Build out the Gallery tab you stubbed in Session 1"}</li>
          <li>{"Let users pick a photo from their gallery and see a preview"}</li>
          <li>{isAndroid
            ? "Run a two-stage on-device pipeline: ML Kit labels \u2192 Gemini Nano natural-language description"
            : "Run a two-stage on-device pipeline: Vision classification \u2192 Apple Intelligence summary"
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
            { label: isAndroid ? "Gemini Nano" : "Apple Intelligence", items: isAndroid
                ? ["Small LLM, runs on Pixel 8+", "Text in \u2192 text out", "Managed by the OS (not your APK)", "No API key, free, offline"]
                : ["On-device AI on Apple Silicon", "Summarization, rewriting, extraction", "System API \u2014 not a queryable LLM", "Private, offline, no key needed"],
              color: TEAL_L, fg: TEAL_D },
            { label: "vs Claude (Week 7)", items: isAndroid
                ? ["Smaller context window", "No vision / image input", "Less complex reasoning", "But: works with no internet"]
                : ["Not a general LLM you can prompt freely", "Requires Apple Silicon device", "Limited language support", "But: private and zero latency"],
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
          <Tip>{"No new dependencies. Vision and Apple Intelligence are both built into the iOS SDK."}</Tip>
        )}
        <Checkpoint num={1}>You understand the on-device model\u2019s capabilities and limits compared to the cloud model from Week 7.</Checkpoint>
      </Step>

      <Step num={2} title={"Build the Gallery tab UI (~10 min)"}>
        <p>{"Replace the placeholder screen with a real UI: image preview box, a pick-from-gallery button, and an analyze button."}</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 GalleryScreen.kt (new file)" accent={BL}>{`@Composable
fun GalleryScreen(viewModel: GalleryViewModel = viewModel()) {
    val bitmap by viewModel.selectedBitmap.collectAsState()
    val result by viewModel.analysisResult.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()

    val launcher = rememberLauncherForActivityResult(
        ActivityResultContracts.PickVisualMedia()
    ) { uri -> uri?.let { viewModel.loadBitmap(it) } }

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        // Preview box
        Box(
            modifier = Modifier.fillMaxWidth().height(260.dp)
                .background(Color.LightGray, RoundedCornerShape(12.dp)),
            contentAlignment = Alignment.Center
        ) {
            if (bitmap != null) {
                Image(bitmap!!.asImageBitmap(), contentDescription = null,
                    modifier = Modifier.fillMaxSize()
                        .clip(RoundedCornerShape(12.dp)),
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
        ) { Text(if (isLoading) "Analyzing on-device\u2026" else "Analyze On-Device") }
        if (result.isNotEmpty()) {
            Spacer(Modifier.height(14.dp))
            Card(modifier = Modifier.fillMaxWidth()) {
                Text(result, modifier = Modifier.padding(14.dp),
                    fontSize = 14.sp, lineHeight = 22.sp)
            }
        }
    }
}`}</CodeB>
        ) : (
          <CodeB title="Swift \u2014 GalleryView.swift (new file)" accent={GR}>{`import PhotosUI, SwiftUI

struct GalleryView: View {
    @StateObject private var viewModel = GalleryViewModel()
    @State private var photoItem: PhotosPickerItem?

    var body: some View {
        ScrollView {
            VStack(spacing: 14) {
                // Preview box
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
                PhotosPicker(selection: \$photoItem, matching: .images) {
                    Label("Choose from Gallery",
                          systemImage: "photo.on.rectangle")
                }.buttonStyle(.bordered)
                .onChange(of: photoItem) { _, item in
                    Task { await viewModel.loadPhoto(item) }
                }
                Button {
                    Task { await viewModel.analyzeOnDevice() }
                } label: {
                    Label(
                        viewModel.isLoading
                            ? "Analyzing on-device\u2026"
                            : "Analyze On-Device",
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
        )}
        <Checkpoint num={2}>Gallery tab shows a preview box, gallery picker, and analyze button. Picking a photo shows a preview. Analyze button is wired up but does nothing yet.</Checkpoint>
      </Step>

      <Step num={3} title={"Wire up the on-device analysis (~15 min)"}>
        <p>{"Two-stage pipeline: use ML to get structured labels from the image, then feed those labels into the generative model for a natural-language response."}</p>
        {isAndroid ? (
          <CodeB title="Kotlin \u2014 GalleryViewModel.kt" accent={BL}>{`class GalleryViewModel : ViewModel() {
    private val _selectedBitmap = MutableStateFlow<Bitmap?>(null)
    val selectedBitmap: StateFlow<Bitmap?> = _selectedBitmap
    private val _analysisResult = MutableStateFlow("")
    val analysisResult: StateFlow<String> = _analysisResult
    private val _isLoading = MutableStateFlow(false)
    val isLoading: StateFlow<Boolean> = _isLoading

    private val labeler =
        ImageLabeling.getClient(ImageLabelerOptions.DEFAULT_OPTIONS)
    private var nanoModel: GenerativeModel? = null

    init { viewModelScope.launch { initNano() } }

    private suspend fun initNano() {
        nanoModel = try {
            val m = GenerativeModel("gemini-nano",
                generationConfig { temperature = 0.7f })
            m.generateContent("hello") // warm-up
            m
        } catch (e: Exception) { null }
    }

    fun loadBitmap(uri: Uri) { /* load bitmap from URI */ }

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
                    model.generateContent(prompt).text
                        ?: "No response from on-device model."
                } catch (e: Exception) {
                    "Detected: $labelText\n(Gemini Nano unavailable on this device)"
                }
            } ?: "Detected: $labelText"

            _isLoading.value = false
        }
    }
}`}</CodeB>
        ) : (
          <CodeB title="Swift \u2014 GalleryViewModel.swift" accent={GR}>{`import Vision, SwiftUI

@MainActor
class GalleryViewModel: ObservableObject {
    @Published var selectedImage: UIImage?
    @Published var analysisResult = ""
    @Published var isLoading = false

    func loadPhoto(_ item: PhotosPickerItem?) async {
        guard let data = try? await item?.loadTransferable(
            type: Data.self),
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

        // Stage 2: Apple Intelligence / fallback
        if #available(iOS 18.0, *) {
            // Writing Tools integration point \u2014 in production use
            // UIWritingToolsCoordinator to summarize the label text.
            // For this lab, format the results for display.
            analysisResult = "On-device analysis: \(labelText)"
        } else {
            analysisResult = topLabels.isEmpty
                ? "No objects detected."
                : topLabels.map { "\u2022 \($0)" }.joined(separator: "\n")
        }
        isLoading = false
    }
}`}</CodeB>
        )}
        <Checkpoint num={3}>Pick a photo, tap Analyze. A result appears with no network call. Now turn on airplane mode and try again \u2014 it should work identically.</Checkpoint>
      </Step>

      <Step num={4} title={"Verify offline, then compare to cloud (~8 min)"}>
        <p><strong>Step 4a \u2014 Airplane mode test.</strong> Enable airplane mode on your device. Pick a different photo and tap Analyze. The result should appear just as fast. That\u2019s the whole point.</p>
        <p style={{ marginTop: 8 }}><strong>Step 4b \u2014 Cloud comparison.</strong> Run the same photo through the Week 7 Claude vision API (or use a screenshot from last week). Compare:</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "10px 0" }}>
          {[
            { label: "On-Device (this lab)", qs: ["What did it identify correctly?", "What did it miss?", "How fast was the response?", "Did airplane mode work?"], color: TEAL_L, fg: TEAL_D },
            { label: "Cloud AI (Week 7)", qs: ["What extra detail did Claude add?", "How was the quality difference?", "How much longer did it take?", "What happened offline?"], color: AML, fg: AM },
          ].map(function(col) {
            return (
              <div key={col.label} style={{ background: col.color, borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: col.fg, margin: "0 0 6px", textTransform: "uppercase" }}>{col.label}</p>
                {col.qs.map(function(q) {
                  return <div key={q} style={{ fontSize: 12, color: col.fg, lineHeight: 1.8 }}>{"  \u25A1 " + q}</div>;
                })}
              </div>
            );
          })}
        </div>
        <AiOpp>
          <em>{"Think through the architecture tradeoff \u2192 "}</em>Ask Claude: <strong>{"\u201CMy mobile app analyzes photos. On-device is fast, private, and offline but less capable. Cloud is powerful but needs internet and costs per call. My users might be in areas with poor connectivity. What architecture would you recommend?\u201D"}</strong>
        </AiOpp>
        <Checkpoint num={4}>{"You\u2019ve run the same photo through both approaches and can articulate the quality vs capability tradeoff out loud."}</Checkpoint>
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
          <p><strong>{isAndroid ? "Gemini Nano throws UnsupportedOperationException" : "Apple Intelligence APIs return nil or do nothing"}</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Your device doesn\u2019t support Gemini Nano. Display the ML Kit label results directly \u2014 the two-stage architecture is identical, you just skip Stage 2. The learning is the same." : "Your device doesn\u2019t support Apple Intelligence. Show the Vision classification labels formatted as a list. The architecture lesson is identical."}</p>
          <p><strong>{"Photo picker crashes or shows nothing"}</strong></p>
          <p style={{ marginLeft: 16 }}>{isAndroid ? "Declare READ_MEDIA_IMAGES in the manifest and request it at runtime on Android 13+. The old READ_EXTERNAL_STORAGE no longer grants photo access." : "Confirm NSPhotoLibraryUsageDescription is in Info.plist. PhotosPicker handles permission automatically on iOS 16+."}</p>
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
