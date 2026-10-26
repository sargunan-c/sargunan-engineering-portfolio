// Single source of truth for all resume-derived content.
// Every fact here is taken directly from Sargunan's uploaded resume.
// Do not add metrics, clients, or claims not present in the source.

export const profile = {
  name: 'Sargunan C',
  title: 'ECE Engineer | Embedded Firmware & AI Systems',
  location: 'Bengaluru, Karnataka, India',
  email: 'csargunan04@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sargunanchandran',
  github: 'https://github.com/sargunan-c',
  resumeUrl: '/resumes/embedded-firmware-resume.pdf',
  embeddedResumeUrl: '/resumes/embedded-firmware-resume.pdf',
  aiResumeUrl: '/resumes/ai-software-resume.pdf',

  positioning:
    'Embedded Software & Firmware Validation | GenAI Applications & AI Systems',

  summary:
    'B.Tech Electronics and Communication Engineering graduate (2026) building modular embedded software, automated firmware validation systems, practical LLM/RAG applications, and end-to-end workflow automation. Experienced in C11 finite-state machines, black-box regression testing, vector search retrieval pipelines, and structured API extraction. Focused on deterministic system design, boundary-tested firmware validation, and production-oriented AI engineering.',

  status: 'Available for Embedded Firmware & AI Opportunities',
}

export interface SkillGroup {
  id: string
  label: string
  emphasis: boolean
  note?: string
  items: readonly string[]
}

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'embedded-firmware',
    label: 'Embedded C & Firmware',
    emphasis: true,
    items: [
      'C11',
      'Modular C programming',
      'Finite-state machines',
      'Threshold handling',
      'Fault detection and recovery',
      'Error handling',
    ],
  },
  {
    id: 'testing-validation',
    label: 'Testing & Validation',
    emphasis: true,
    items: [
      'Unit testing',
      'Boundary-value testing',
      'Automated test execution',
      'Expected-versus-actual checks',
      'Regression testing',
      'Timeout and failure handling',
      'JSON reporting',
    ],
  },
  {
    id: 'genai',
    label: 'AI & GenAI',
    emphasis: true,
    items: [
      'LLM APIs',
      'RAG',
      'Embeddings',
      'Vector and semantic search',
      'Prompt engineering',
      'Structured extraction',
      'n8n automation',
    ],
  },
  {
    id: 'embedded-fundamentals',
    label: 'Embedded Fundamentals',
    emphasis: false,
    note: 'Conceptual / simulation-level knowledge',
    items: [
      'Microcontroller architecture',
      'Registers and memory organization',
      'GPIO',
      'Timers and interrupts',
      'ADC and PWM',
    ],
  },
  {
    id: 'communication-protocols',
    label: 'Communication Protocols',
    emphasis: false,
    note: 'Conceptual / simulation-level knowledge',
    items: ['UART', 'I2C', 'SPI'],
  },
  {
    id: 'software-tools',
    label: 'Software & Tools',
    emphasis: false,
    items: [
      'Python',
      'JavaScript',
      'TypeScript',
      'React',
      'REST APIs',
      'JSON',
      'Git and GitHub',
    ],
  },
] as const

// A project's live-demo link is one of three states:
// - a real URL (string) to an external live deployment
// - the literal 'self' sentinel, meaning "this portfolio site is the demo"
// - null, meaning no live demo exists and no link should render
type LiveDemo = string | 'self' | null

export interface Project {
  id: string
  track: 'embedded' | 'ai'
  index: string
  name: string
  tags: string[]
  tech: string[]
  problem: string
  approach: string
  architecture: string
  implementation: string
  decisions: string
  result: string
  screenshot: string | null
  screenshotAlt: string | null
  pipeline: string[]
  liveDemo: LiveDemo
  github: string
}

export const projects: Project[] = [
  // Track A: Embedded Systems & Firmware
  {
    id: 'sensor-fault-controller',
    track: 'embedded',
    index: '01',
    name: 'Sensor Fault Controller',
    tags: ['C11', 'WebAssembly', 'Embedded C', 'Unit Testing'],
    tech: ['C11', 'WebAssembly', 'Embedded C', 'Unit Testing'],
    problem:
      'Safety-critical thermal systems require deterministic fault detection, strict memory constraints, and fail-safe latching to prevent catastrophic damage and relay chattering from erratic sensor readings.',
    approach:
      'Modular C11 sensor controller implementing NORMAL, WARNING, and FAULT states, temperature thresholds, sensor-error detection, latched over-temperature faults, and recovery logic.',
    architecture:
      'Decoupled architecture separating core FSM logic, hardware telemetry validation, and CLI/Wasm interfaces. State transitions execute in deterministic O(1) constant time with zero heap allocation.',
    implementation:
      'Implemented in freestanding ISO C11 with defensive telemetry validation (IEEE-754 NaN/Inf, disconnect flags, and -40°C to +150°C limits). Compiled natively and to freestanding WebAssembly (7.0 KB binary, 20-byte RAM footprint) for simulated browser-based verification.',
    decisions:
      'Enforced zero dynamic memory allocation (0B heap) to eliminate fragmentation risks in embedded runtimes. Built a thermal hysteresis safety latch requiring temperatures to drop below 75.0°C before resetting an over-temperature trip (≥ 80.0°C). Note: Uses simulated sensor inputs, not physical hardware testing.',
    result:
      'Verified with 31 / 31 passing native C unit and boundary test scenarios and 31 / 31 automated WebAssembly scenarios with simulated sensor inputs, running live with a freestanding browser console and deterministic process exit codes.',
    screenshot: 'project-sensor-fault-screenshot.png',
    screenshotAlt:
      'WebAssembly verification console for C11 Sensor Fault Controller showing the FSM engine, temperature gauges, telemetry readout, and simulated sensor controls.',
    pipeline: ['Simulated Input', 'Defensive Validation', 'FSM State Evaluation', 'Hysteresis Safety Latch', 'Control Output'],
    liveDemo: 'https://sensor-fault-controller.vercel.app/',
    github: 'https://github.com/sargunan-c/sensor-fault-controller',
  },
  {
    id: 'firmware-validation-framework',
    track: 'embedded',
    index: '02',
    name: 'Firmware Validation Framework',
    tags: ['Python', 'C', 'Regression Testing', 'JSON Reporting'],
    tech: ['Python', 'C', 'Regression Testing', 'JSON Reporting'],
    problem:
      'Firmware binaries require non-intrusive, automated black-box verification to guarantee deterministic behavior across operational boundaries, timeouts, and hardware fault conditions without modifying production C code.',
    approach:
      'Automated validation framework that executes a compiled C controller, checks expected versus actual results, handles timeouts, runs regression suites, and generates structured JSON reports.',
    architecture:
      'Decoupled validation pipeline: Web/CLI Runner → ValidationRunner → ControllerClient (isolated subprocess management with timeouts) → AssertionEngine (multi-domain comparison) → Standardized JSON Summary.',
    implementation:
      'Built using Python standard library without external dependencies. Spawns the compiled C binary as an isolated child process, captures telemetry via regex from stdout/stderr, and compares outputs across 5 verification dimensions.',
    decisions:
      'Maintained zero external Python dependencies to ensure seamless portability across host environments and CI/CD containers. Implemented strict subprocess timeouts to safeguard test pipelines against hung or unresponsive firmware binaries. Deployed according to cloud web architecture with mock-isolated telemetry execution.',
    result:
      'Automated regression testing successfully validating 37 / 37 controller test cases (100% pass rate, 0 failures) and 16 framework unit tests (including timeout handling) across normal, warning, fault, boundary, invalid input, and sensor error domains. Serves live interactive telemetry and machine-readable JSON reports.',
    screenshot: 'project-firmware-validation-screenshot.png',
    screenshotAlt:
      'Firmware Validation Framework interactive console showing real-time test execution statistics (37/37 passed, 100% pass rate), subprocess telemetry console, and test results.',
    pipeline: ['Test Scenarios', 'Subprocess Execution', 'C Controller Binary', 'Assertion Engine', 'JSON Report'],
    liveDemo: 'https://firmware-validation-framework.onrender.com/',
    github: 'https://github.com/sargunan-c/firmware-validation-framework',
  },

  // Track B: AI & Software Engineering
  {
    id: 'rag-assistant',
    track: 'ai',
    index: '03',
    name: 'RAG-Powered Component Specification Assistant',
    tags: ['RAG', 'LLM', 'Embeddings', 'Vector Search', 'n8n'],
    tech: ['n8n', 'Groq', 'Qdrant', 'Hugging Face Embeddings'],
    problem:
      'Component specification queries need answers grounded in a real knowledge source — not a model guessing from general training data, where domain-specific details are easy to hallucinate.',
    approach:
      'Built a retrieval-augmented generation assistant that grounds LLM responses in a dedicated knowledge source instead of relying on model memory alone.',
    architecture:
      'Source documents are converted into embeddings and indexed for vector search, enabling semantic (meaning-based) rather than keyword-based lookup of relevant content.',
    implementation:
      'Retrieval and generation are integrated using n8n as the orchestration layer: a form submission triggers PDF extraction, recursive text splitting, embedding generation via Hugging Face, and insertion into a Qdrant vector store. A separate chat-triggered agent uses a Groq-hosted LLM with a Qdrant search tool to answer engineering questions.',
    decisions:
      'Chose semantic vector search over keyword search specifically to handle component-spec queries where the right answer is not always a literal keyword match. Used n8n as the orchestration layer to keep retrieval and generation stages explicit and inspectable rather than hiding them inside a single opaque call.',
    result:
      'A working assistant that fetches relevant context before generation, reducing hallucination risk on domain-specific queries. This is a personal / demo-scale build, not a deployed production system.',
    screenshot: 'project-rag-screenshot.png',
    screenshotAlt:
      'n8n workflow canvas showing the RAG-Powered Component Specification Assistant: a chat trigger connected to a Component Spec RAG Agent using a Groq Chat Model and a Qdrant search tool, alongside a document ingestion pipeline with PDF extraction, text splitting, Hugging Face embeddings, and Qdrant insert.',
    pipeline: ['Documents', 'Embeddings', 'Vector Search', 'RAG', 'LLM', 'Response'],
    liveDemo: null,
    github: 'https://github.com/sargunan-c/rag-component-specification-assistant',
  },
  {
    id: 'rfq-parser',
    track: 'ai',
    index: '04',
    name: 'AI-Powered Supply Chain RFQ & Email Parser',
    tags: ['LLM', 'n8n', 'Groq', 'IMAP', 'JSON', 'Google Sheets'],
    tech: ['n8n', 'Groq', 'IMAP', 'Google Sheets API'],
    problem:
      'Supplier RFQ emails arrive as unstructured text and require manual reading and re-entry into structured records — slow and error-prone at any real volume.',
    approach:
      'Automated ingestion of unstructured supplier RFQ emails via IMAP monitoring in n8n, triggering a processing workflow on new incoming mail without manual intervention.',
    architecture:
      'Incoming email → LLM extraction → structured JSON → validation → Google Sheets. A Groq-hosted LLM extracts structured fields from unstructured email text — supplier name, email, product, quantity, unit, delivery date, price, currency, and notes.',
    implementation:
      'An IMAP trigger watches for new mail. A Basic LLM Chain node calls Groq to extract fields as JSON. A validation step checks the extracted JSON against the expected field structure before logging. Validated records are appended to Google Sheets for downstream use.',
    decisions:
      'Added an explicit JSON validation step before logging rather than trusting LLM output directly, since structured-extraction output needs a integrity check before it reaches a shared spreadsheet.',
    result:
      'A working automation that turns unstructured supplier emails into validated, structured spreadsheet rows without manual re-entry. This is a personal / demo-scale build, not a deployed production system.',
    screenshot: 'project-rfq-screenshot.png',
    screenshotAlt:
      'n8n workflow canvas showing the Supply Chain RFQ & Email Parser: an IMAP email trigger connected to a Basic LLM Chain using a Groq Chat Model, followed by a Parse & Validate JSON node and a Log to Google Sheet node.',
    pipeline: ['Incoming Email', 'LLM Extraction', 'Structured JSON', 'Validation', 'Google Sheets'],
    liveDemo: null,
    github: 'https://github.com/sargunan-c/ai-supply-chain-rfq-email-parser',
  },
  {
    id: 'portfolio',
    track: 'ai',
    index: '05',
    name: '3D AI Engineer Personal Portfolio',
    tags: ['React', 'TypeScript', 'Three.js / React Three Fiber', 'Framer Motion'],
    tech: ['React', 'TypeScript', 'React Three Fiber', 'Framer Motion', 'Tailwind CSS'],
    problem:
      'A static resume page does not communicate how an AI and systems engineer actually thinks about pipelines, retrieval, orchestration, and interactive tooling.',
    approach:
      'Designed and built an interactive 3D personal portfolio using React, TypeScript, and React Three Fiber to present engineering projects with an immersive, responsive interface.',
    architecture:
      'Component-based architecture separating 3D scenes, content sections, and shared data, with scroll-linked state driving which part of the 3D system is highlighted.',
    implementation:
      'Implemented smooth UI animations and transitions with Framer Motion, ensuring the site remains performant and professional across devices.',
    decisions:
      'Kept the 3D scene to one reused system rather than a different 3D element per section, to avoid decoration for its own sake and keep performance predictable on lower-end devices.',
    result:
      'An interactive engineering portfolio presenting both Embedded Firmware and Applied GenAI systems through a performance-conscious, dark-mode 3D interface.',
    screenshot: null,
    screenshotAlt: null,
    pipeline: [],
    liveDemo: 'self',
    github: 'https://github.com/sargunan-c/sargunan-genai-portfolio',
  },
]

export const timeline = [
  {
    id: 'innerwhispers',
    kind: 'Experience',
    title: 'AI & Automation Intern',
    org: 'InnerWhispers',
    location: 'Remote',
    period: 'Aug 2026 – Oct 2026',
    points: [
      'Contributing to AI and automation initiatives, supporting assigned product and development workflows.',
      'Supporting front-end and software development tasks across ongoing projects using web and AI technologies.',
      'Applying AI frameworks and automation tools to assigned development requirements.',
      'Participating in development, testing, debugging, and project reviews to improve assigned solutions.',
    ],
  },
  {
    id: 'bsnl',
    kind: 'Experience',
    title: 'Industrial Training',
    org: 'Bharat Sanchar Nigam Limited (BSNL)',
    location: 'Chennai, India',
    period: 'Jun – Jul 2025',
    points: [
      'Gained hands-on exposure to optical-fibre communication, OTDR testing, and high-speed network transmission systems.',
      'Studied broadband infrastructure, FTTH (Fiber to the Home) architecture, and telecommunications exchange equipment operations.',
      'Observed digital switching systems, telephone exchange routing, and live network monitoring procedures.',
      'Learned structured cable distribution, ODF/MDF wiring protocols, and preventative telecom maintenance practices.',
    ],
  },
  {
    id: 'education',
    kind: 'Education',
    title: 'B.Tech — Electronics & Communication Engineering',
    org: 'SASTRA Deemed University',
    location: null,
    period: '2022 – 2026',
    points: [
      'Core coursework and laboratory exposure in embedded systems, microcontrollers, digital signal processing, communication networks, and software development.',
    ],
  },
] as const

export const certifications = [
  {
    name: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn Learning (2026)',
    detail: 'Generative AI, Microsoft Copilot, Responsible AI',
  },
  {
    name: 'AI and Neural Networks',
    issuer: 'SASTRA Deemed University',
    detail: null,
  },
] as const

export const architectureNodes = [
  {
    id: 'documents',
    label: 'Documents',
    short: 'Source material',
    detail:
      'Raw source documents (specs, emails, PDFs) are the starting point of the pipeline before any AI processing happens.',
  },
  {
    id: 'embeddings',
    label: 'Embeddings',
    short: 'Vector representation',
    detail:
      'Text is converted into numerical vector embeddings that capture meaning, enabling comparison by semantic similarity rather than exact words.',
  },
  {
    id: 'vector-db',
    label: 'Vector Search',
    short: 'Semantic retrieval',
    detail:
      'Embeddings are indexed in a vector store (Qdrant) so relevant content can be retrieved by meaning-based similarity search.',
  },
  {
    id: 'rag',
    label: 'RAG',
    short: 'Grounded context',
    detail:
      'Retrieves relevant context before generation, improving factual grounding and reducing hallucination on domain-specific queries.',
  },
  {
    id: 'llm',
    label: 'LLM',
    short: 'Generation & extraction',
    detail:
      'A hosted LLM (Groq, Gemini) generates responses or extracts structured fields from unstructured text, using the retrieved context where applicable.',
  },
  {
    id: 'agent',
    label: 'AI Agent',
    short: 'Tool-using reasoning',
    detail:
      'Connects models with tools and external services — an LLM-driven agent reasons over a query and calls what it needs, like a vector search tool, before responding.',
  },
  {
    id: 'automation',
    label: 'Automation',
    short: 'Orchestration',
    detail:
      'n8n connects triggers (form submissions, incoming email), AI steps, and downstream actions (Google Sheets, vector inserts) into one working pipeline.',
  },
] as const
