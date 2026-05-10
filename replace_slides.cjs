const fs = require('fs');
const file = 'C:/Users/Paul/OneDrive/Desktop/Mobile Course/src/curriculum/Week 7/week7_session1_slides.tsx';
let content = fs.readFileSync(file, 'utf8');

const slide9Start = content.indexOf('  // 9: Android implementation');
const slide11Start = content.indexOf('  // 11: Platform comparison');

if (slide9Start === -1 || slide11Start === -1) {
    console.error("Could not find boundaries", slide9Start, slide11Start);
    process.exit(1);
}

const replacement = `  // 9: Concept - OkHttp Streaming and URLSession AsyncBytes
  () => (
    <Shell tag="Concept" timer="5" title="Connecting the streams to your UI" subtitle="How we bridge raw HTTP bytes to the ViewModel" notes="The conceptual difference is critical. Compare the one-shot wait to the streaming sequence.">
      <OSToggle
        android={
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The standard way (One-shot)</p>
              <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, color: "#A32D2D", margin: 0, lineHeight: 1.5 }}>Normally with Retrofit or OkHttp, you make a request and get a single JSON string back. The entire string is buffered in memory before you can read it.</p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The streaming way (Flow)</p>
              <div style={{ background: BLUE_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, color: BLUE, margin: 0, lineHeight: 1.5 }}>We use OkHttp's synchronous <code style={{fontFamily:"monospace"}}>execute()</code> inside a coroutine. As bytes arrive, we read them line-by-line and <code style={{fontFamily:"monospace"}}>emit()</code> them into a Kotlin <code style={{fontFamily:"monospace"}}>Flow&lt;String&gt;</code>. The ViewModel collects this flow and updates the UI instantly.</p>
              </div>
            </div>
          </div>
        }
        ios={
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The standard way (One-shot)</p>
              <div style={{ background: "#FCEBEB", borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, color: "#A32D2D", margin: 0, lineHeight: 1.5 }}>Normally with URLSession, you use <code style={{fontFamily:"monospace"}}>data(for: request)</code> to wait until the entire response is downloaded into a single Data object.</p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>The streaming way (AsyncSequence)</p>
              <div style={{ background: GREEN_LIGHT, borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 11, color: GREEN, margin: 0, lineHeight: 1.5 }}>We use <code style={{fontFamily:"monospace"}}>URLSession.shared.bytes(for:)</code>. This returns an <code style={{fontFamily:"monospace"}}>AsyncBytes</code> sequence. We can loop over it using <code style={{fontFamily:"monospace"}}>for try await line in bytes.lines</code>. Each line is yielded into an <code style={{fontFamily:"monospace"}}>AsyncThrowingStream</code> for the ViewModel to consume.</p>
              </div>
            </div>
          </div>
        }
      />
    </Shell>
  ),

  // 10: Implementation
  () => (
    <Shell tag="Code-along" timer="18" title="Implementation — building the streaming chat" subtitle="Four files — data model, repository, ViewModel, UI" notes="Walk each file in order. Remind them about thread safety and the UI lifecycle.">
      <ViewToggle
        steps={
          <OSToggle
            android={
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Step n={1} title="Message.kt — data model" accent={BLUE}>
                  <pre style={preStyle}>{\`data class Message(val role: String, val content: String)

sealed class ChatUiState {
    object Idle    : ChatUiState()
    object Sending : ChatUiState()
    data class Streaming(val partial: String) : ChatUiState()
    data class Done(val fullText: String)     : ChatUiState()
    data class Error(val message: String, val retryable: Boolean = true) : ChatUiState()
}\`}</pre>
                </Step>
                <Step n={2} title="ClaudeRepository.kt — OkHttp Flow" accent={BLUE}>
                  <pre style={preStyle}>{\`fun streamMessage(history: List<Message>, systemPrompt: String): Flow<String> = flow {
    val request = Request.Builder().url("https://api.anthropic.com/v1/messages")
        // ... headers and body ...
        .build()

    client.newCall(request).execute().use { response ->
        val source = response.body!!.source()
        while (!source.exhausted()) {
            val line = source.readUtf8Line() ?: break
            if (!line.startsWith("data: ")) continue
            val payload = line.removePrefix("data: ")
            if (payload == "[DONE]") break
            extractToken(payload)?.let { emit(it) }
        }
    }
}.flowOn(Dispatchers.IO)\`}</pre>
                </Step>
                <Step n={3} title="ChatViewModel.kt — Flow Collector" accent={BLUE}>
                  <pre style={preStyle}>{\`fun sendMessage(userText: String) {
    if (_uiState.value !is ChatUiState.Idle) return 
    _history.add(Message("user", userText))
    viewModelScope.launch {
        var accumulated = ""
        _uiState.value = ChatUiState.Sending
        repo.streamMessage(_history).catch { e ->
            // error handling
        }.collect { token ->
            accumulated += token
            _uiState.value = ChatUiState.Streaming(accumulated)
        }
        if (_uiState.value is ChatUiState.Streaming) {
            _history.add(Message("assistant", accumulated))
            _uiState.value = ChatUiState.Idle
        }
    }
}\`}</pre>
                </Step>
                <Step n={4} title="ChatScreen.kt — Compose UI" accent={BLUE}>
                  <pre style={preStyle}>{\`@Composable
fun ChatScreen(vm: ChatViewModel = viewModel()) {
    val uiState by vm.uiState.collectAsStateWithLifecycle()
    // ... LazyColumn with MessageBubbles
    item {
        when (uiState) {
            is ChatUiState.Sending   -> TypingIndicator()
            is ChatUiState.Streaming -> MessageBubble(Message("assistant", (uiState as ChatUiState.Streaming).partial), isStreaming = true)
            is ChatUiState.Error     -> ErrorBanner((uiState as ChatUiState.Error).message)
            else -> {}
        }
    }
}\`}</pre>
                </Step>
              </div>
            }
            ios={
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Step n={1} title="Message.swift — data model" accent={GREEN}>
                  <pre style={preStyle}>{\`struct Message: Identifiable {
    let id = UUID()
    let role: String     // "user" or "assistant"
    var content: String
}

enum ChatState: Equatable {
    case idle, sending, streaming(partial: String), done, error(message: String)
}\`}</pre>
                </Step>
                <Step n={2} title="ClaudeRepository.swift — AsyncSequence" accent={GREEN}>
                  <pre style={preStyle}>{\`func streamMessage(history: [Message], systemPrompt: String) -> AsyncThrowingStream<String, Error> {
    AsyncThrowingStream { continuation in
        Task {
            do {
                // ... URLRequest setup ...
                let (bytes, _) = try await URLSession.shared.bytes(for: req)

                for try await line in bytes.lines {
                    guard line.hasPrefix("data: ") else { continue }
                    let payload = String(line.dropFirst(6))
                    if payload == "[DONE]" { break }
                    if let token = extractToken(from: payload) {
                        continuation.yield(token)
                    }
                }
                continuation.finish()
            } catch { continuation.finish(throwing: error) }
        }
    }
}\`}</pre>
                </Step>
                <Step n={3} title="ChatViewModel.swift — MainActor" accent={GREEN}>
                  <pre style={preStyle}>{\`@MainActor 
class ChatViewModel: ObservableObject {
    func sendMessage(_ text: String) {
        guard chatState.isIdle else { return }
        history.append(Message(role: "user", content: text))
        Task {
            var accumulated = ""
            chatState = .sending
            do {
                for try await token in repo.streamMessage(history: history) {
                    accumulated += token
                    chatState = .streaming(partial: accumulated)
                }
                history.append(Message(role: "assistant", content: accumulated))
                chatState = .idle
            } catch {
                history.removeLast()
                chatState = .error(message: error.localizedDescription)
            }
        }
    }
}\`}</pre>
                </Step>
                <Step n={4} title="ChatView.swift — SwiftUI" accent={GREEN}>
                  <pre style={preStyle}>{\`struct ChatView: View {
    @StateObject private var vm = ChatViewModel()
    
    var body: some View {
        // ... ScrollView with LazyVStack
        switch vm.chatState {
        case .sending:
            TypingIndicator()
        case .streaming(let partial):
            MessageBubble(message: Message(role:"assistant", content: partial), isStreaming: true)
                .id("streaming")
                .onChange(of: partial) { _ in proxy.scrollTo("streaming", anchor: .bottom) }
        case .error(let msg):
            ErrorBanner(message: msg) { vm.sendMessage(input) }
        default: EmptyView()
        }
    }
}\`}</pre>
                </Step>
              </div>
            }
          />
        }
        full={
          <OSToggle
            android={
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <CodePane title="Message.kt — data model" accent={BLUE}>{\`data class Message(val role: String, val content: String)

sealed class ChatUiState {
    object Idle    : ChatUiState()
    object Sending : ChatUiState()
    data class Streaming(val partial: String) : ChatUiState()
    data class Done(val fullText: String)     : ChatUiState()
    data class Error(
        val message: String,
        val retryable: Boolean = true
    ) : ChatUiState()
}\`}</CodePane>
                <CodePane title="ClaudeRepository.kt" accent={BLUE}>{\`class ClaudeRepository {
    private val client = OkHttpClient.Builder()
        .readTimeout(60, TimeUnit.SECONDS).build()

    fun streamMessage(
        history: List<Message>,
        systemPrompt: String = "You are a helpful assistant."
    ): Flow<String> = flow {
        val request = Request.Builder()
            .url("https://api.anthropic.com/v1/messages")
            .addHeader("x-api-key", BuildConfig.CLAUDE_API_KEY)
            .addHeader("anthropic-version", "2023-06-01")
            .addHeader("content-type", "application/json")
            .post(buildJsonBody(history, systemPrompt)
                .toRequestBody("application/json".toMediaType()))
            .build()

        client.newCall(request).execute().use { response ->
            if (!response.isSuccessful)
                throw IOException("API error \\\${response.code}")
            val source = response.body!!.source()
            while (!source.exhausted()) {
                val line = source.readUtf8Line() ?: break
                if (!line.startsWith("data: ")) continue
                val payload = line.removePrefix("data: ")
                if (payload == "[DONE]") break
                extractToken(payload)?.let { emit(it) }
            }
        }
    }.flowOn(Dispatchers.IO)

    // ← The helper students often forget to write
    private fun buildJsonBody(
        history: List<Message>,
        systemPrompt: String
    ): String {
        val messages = JSONArray().apply {
            history.forEach { msg ->
                put(JSONObject().apply {
                    put("role", msg.role)
                    put("content", msg.content)
                })
            }
        }
        return JSONObject().apply {
            put("model", "claude-opus-4-5")
            put("max_tokens", 1024)
            put("stream", true)
            put("system", systemPrompt)
            put("messages", messages)
        }.toString()
    }

    private fun extractToken(payload: String): String? = try {
        val j = JSONObject(payload)
        if (j.getString("type") == "content_block_delta")
            j.getJSONObject("delta").getString("text")
        else null
    } catch (e: Exception) { null }
}\`}</CodePane>
                <CodePane title="ChatViewModel.kt" accent={BLUE}>{\`class ChatViewModel(
    private val repo: ClaudeRepository = ClaudeRepository()
) : ViewModel() {
    private val _history = mutableStateListOf<Message>()
    val history: List<Message> get() = _history

    private val _uiState = MutableStateFlow<ChatUiState>(ChatUiState.Idle)
    val uiState = _uiState.asStateFlow()

    fun sendMessage(userText: String) {
        if (_uiState.value !is ChatUiState.Idle) return // guard against double-send
        _history.add(Message("user", userText))
        viewModelScope.launch {
            var accumulated = ""
            _uiState.value = ChatUiState.Sending
            repo.streamMessage(_history)
                .catch { e ->
                    _history.removeLastOrNull()
                    _uiState.value = ChatUiState.Error(e.message ?: "Unknown error")
                }
                .collect { token ->
                    accumulated += token
                    _uiState.value = ChatUiState.Streaming(accumulated)
                }
            if (_uiState.value is ChatUiState.Streaming) {
                _history.add(Message("assistant", accumulated))
                _uiState.value = ChatUiState.Idle
            }
        }
    }
}\`}</CodePane>
                <CodePane title="ChatScreen.kt — Compose" accent={BLUE}>{\`@Composable
fun ChatScreen(vm: ChatViewModel = viewModel()) {
    val uiState by vm.uiState.collectAsStateWithLifecycle()
    var input by remember { mutableStateOf("") }
    val listState = rememberLazyListState()
    val isIdle = uiState is ChatUiState.Idle

    LaunchedEffect(vm.history.size, uiState) {
        if (vm.history.isNotEmpty())
            listState.animateScrollToItem(
                listState.layoutInfo.totalItemsCount - 1)
    }
    Column(Modifier.fillMaxSize().imePadding()) {
        LazyColumn(Modifier.weight(1f), state = listState) {
            items(vm.history) { MessageBubble(it) }
            item {
                when (uiState) {
                    is ChatUiState.Sending   -> TypingIndicator()
                    is ChatUiState.Streaming ->
                        MessageBubble(Message("assistant",
                            (uiState as ChatUiState.Streaming).partial),
                            isStreaming = true)
                    is ChatUiState.Error     ->
                        ErrorBanner((uiState as ChatUiState.Error).message)
                    else -> {}
                }
            }
        }
        Row(Modifier.padding(8.dp)) {
            TextField(input, { input = it }, Modifier.weight(1f),
                enabled = isIdle,
                placeholder = { Text("Message...") })
            Button(
                onClick = { vm.sendMessage(input); input = "" },
                enabled = isIdle && input.isNotBlank()
            ) { Text("Send") }
        }
    }
}\`}</CodePane>
              </div>
            }
            ios={
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <CodePane title="Message.swift" accent={GREEN}>{\`struct Message: Identifiable {
    let id = UUID()
    let role: String     // "user" or "assistant"
    var content: String
}

enum ChatState: Equatable {
    case idle
    case sending
    case streaming(partial: String)
    case done
    case error(message: String)

    var isIdle: Bool {
        switch self {
        case .idle, .done, .error: return true
        default: return false
        }
    }
}\`}</CodePane>
                <CodePane title="ClaudeRepository.swift" accent={GREEN}>{\`class ClaudeRepository {
    private let apiKey: String
    init() {
        let path = Bundle.main.path(forResource:"Secrets", ofType:"plist")!
        apiKey = NSDictionary(contentsOfFile: path)!["CLAUDE_API_KEY"] as! String
    }

    func streamMessage(
        history: [Message],
        systemPrompt: String = "You are a helpful assistant."
    ) -> AsyncThrowingStream<String, Error> {
        AsyncThrowingStream { continuation in
            Task {
                do {
                    var req = URLRequest(url: URL(string:
                        "https://api.anthropic.com/v1/messages")!)
                    req.httpMethod = "POST"
                    req.setValue(apiKey, forHTTPHeaderField: "x-api-key")
                    req.setValue("2023-06-01", forHTTPHeaderField: "anthropic-version")
                    req.setValue("application/json", forHTTPHeaderField: "content-type")
                    req.httpBody = try buildBody(
                        history: history, systemPrompt: systemPrompt)

                    let (bytes, response) = try await URLSession.shared.bytes(for: req)
                    guard (response as? HTTPURLResponse)?.statusCode == 200
                    else { throw URLError(.badServerResponse) }

                    for try await line in bytes.lines {
                        guard line.hasPrefix("data: ") else { continue }
                        let payload = String(line.dropFirst(6))
                        if payload == "[DONE]" { break }
                        if let token = extractToken(from: payload) {
                            continuation.yield(token)
                        }
                    }
                    continuation.finish()
                } catch { continuation.finish(throwing: error) }
            }
        }
    }

    // ← The helper students often forget to write
    private func buildBody(history: [Message], systemPrompt: String) throws -> Data {
        let messages = history.map { ["role": $0.role, "content": $0.content] }
        let body: [String: Any] = [
            "model": "claude-opus-4-5",
            "max_tokens": 1024,
            "stream": true,
            "system": systemPrompt,
            "messages": messages
        ]
        return try JSONSerialization.data(withJSONObject: body)
    }

    private func extractToken(from payload: String) -> String? {
        guard let data = payload.data(using: .utf8),
              let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
              json["type"] as? String == "content_block_delta",
              let delta = json["delta"] as? [String: Any]
        else { return nil }
        return delta["text"] as? String
    }
}\`}</CodePane>
                <CodePane title="ChatViewModel.swift" accent={GREEN}>{\`@MainActor  // ← ALL @Published mutations happen on main thread
class ChatViewModel: ObservableObject {
    @Published var history: [Message] = []
    @Published var chatState: ChatState = .idle

    private let repo = ClaudeRepository()

    func sendMessage(_ text: String) {
        guard chatState.isIdle else { return }
        history.append(Message(role: "user", content: text))
        Task {
            var accumulated = ""
            chatState = .sending
            do {
                for try await token in repo.streamMessage(history: history) {
                    accumulated += token
                    chatState = .streaming(partial: accumulated)
                }
                history.append(Message(role: "assistant", content: accumulated))
                chatState = .idle
            } catch {
                history.removeLast()
                chatState = .error(message: error.localizedDescription)
            }
        }
    }
}\`}</CodePane>
                <CodePane title="ChatView.swift — SwiftUI" accent={GREEN}>{\`struct ChatView: View {
    @StateObject private var vm = ChatViewModel()
    @State private var input = ""

    var body: some View {
        VStack(spacing: 0) {
            ScrollViewReader { proxy in
                ScrollView {
                    LazyVStack(alignment: .leading) {
                        ForEach(vm.history) { msg in
                            MessageBubble(message: msg).id(msg.id)
                        }
                        switch vm.chatState {
                        case .sending:
                            TypingIndicator()
                        case .streaming(let partial):
                            MessageBubble(
                                message: Message(role:"assistant", content: partial),
                                isStreaming: true)
                            .id("streaming")
                            .onChange(of: partial) { _ in
                                withAnimation {
                                    proxy.scrollTo("streaming", anchor: .bottom)
                                }
                            }
                        case .error(let msg):
                            ErrorBanner(message: msg) { vm.sendMessage(input) }
                        default: EmptyView()
                        }
                    }.padding()
                }
            }
            HStack {
                TextField("Message...", text: $input)
                    .textFieldStyle(.roundedBorder)
                    .disabled(!vm.chatState.isIdle)
                Button("Send") { vm.sendMessage(input); input = "" }
                    .disabled(!vm.chatState.isIdle || input.isEmpty)
            }.padding()
        }
    }
}\`}</CodePane>
              </div>
            }
          />
        }
      />
    </Shell>
  ),

`;

content = content.substring(0, slide9Start) + replacement + content.substring(slide11Start);

fs.writeFileSync(file, content, 'utf8');
console.log('done');
