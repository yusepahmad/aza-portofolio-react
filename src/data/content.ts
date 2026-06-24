export const navLinks = [
  { href: '#about', label: 'about' },
  { href: '#stack', label: 'stack' },
  { href: '#work', label: 'work' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
];

export const infoRows = [
  { key: 'Currently', value: 'AI-Native Crawling @ eBdesk', teal: true },
  { key: 'Based in', value: 'Bandung / Tangerang' },
  { key: 'Studying', value: 'CS — UPH Jakarta' },
  { key: 'Availability', value: 'Open to work', teal: true },
  { key: 'Instagram', value: '@azaa_.py' },
  { key: 'GitHub', value: '@yusepahmad' },
  { key: 'Work type', value: 'on-site / hybrid / remote' },
];

export type StackCard = {
  category: string;
  title: string;
  tools: string[];
};

export const stackCards: StackCard[] = [
  { category: 'Languages', title: 'Core Lang', tools: ['Python', 'Rust', 'SQL', 'Bash'] },
  { category: 'AI & Agents', title: 'Agentic AI', tools: ['LLM agent orchestration', 'agent codegen', 'OpenRouter', 'vLLM'] },
  { category: 'Streaming & Queue', title: 'Data Flow', tools: ['Apache Kafka', 'Beanstalkd', 'Redis', 'asyncio'] },
  { category: 'Browser & Crawling', title: 'Acquisition', tools: ['Playwright', 'RapidAPI', 'Anti-bot evasion', 'Proxy/Tor rotation'] },
  { category: 'Storage', title: 'Databases', tools: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'S3'] },
  { category: 'Frameworks', title: 'Backend', tools: ['FastAPI', 'Axum', 'SQLAlchemy', 'Streamlit'] },
  { category: 'Infrastructure', title: 'DevOps', tools: ['Docker', 'Kubernetes', 'Linux', 'Git'] },
  { category: 'Soft Skills', title: 'Leadership', tools: ['Team Lead (8mo)', 'Docs', 'Planning'] },
];

export type WorkRow = {
  dateFrom: string;
  dateTo: string;
  isPresent?: boolean;
  role: string;
  roleNote?: string;
  pill?: string;
  company: string;
  description: string;
  tags: string[];
};

export const workHistory: WorkRow[] = [
  {
    dateFrom: 'Jan 2026',
    dateTo: 'present',
    isPresent: true,
    role: 'AI-Native Crawling Specialist',
    pill: 'full-time',
    company: 'PT eBdesk Teknologi, Tangerang Selatan',
    description:
      'Designing and improving AI-native crawling and ingestion pipelines for structured data from web platforms and social media. Building ETL workflows with validation, retry, and monitoring to keep high-volume streams analytics-ready.',
    tags: ['Python · Kafka', 'ETL · REST API', 'Distributed infra'],
  },
  {
    dateFrom: 'Jan 2025',
    dateTo: 'Jan 2026',
    role: 'Data Acquisition Engineer',
    roleNote: '— Team Lead',
    pill: 'contract',
    company: 'PT eBdesk Teknologi',
    description:
      'Led a team running large-scale acquisition from web and social platforms. Designed Kafka-integrated crawling pipelines with scheduling, retry, and S3 storage. Coordinated engineering tasks and improved team pipeline stability.',
    tags: ['Kafka · S3', 'Redis · Crawl', 'Team Lead'],
  },
  {
    dateFrom: 'Apr 2024',
    dateTo: 'Jan 2025',
    role: 'Data Acquisition Engineer',
    pill: 'contract',
    company: 'PT eBdesk Teknologi',
    description:
      'Built ETL pipelines collecting and transforming structured/semi-structured data from external APIs. Supported Elasticsearch indexing. Built internal Streamlit monitoring dashboards with Telegram alerting.',
    tags: ['Python', 'Elasticsearch', 'Streamlit'],
  },
  {
    dateFrom: 'Feb 2024',
    dateTo: 'Apr 2024',
    role: 'Data Collector',
    pill: 'freelance',
    company: 'PT eBdesk Teknologi',
    description:
      'Built automated collection workflows from websites, apps, and social platforms. Deployed services with Docker and REST APIs for scalable, continuous data acquisition.',
    tags: ['Docker · Python', 'REST APIs'],
  },
  {
    dateFrom: 'Jul 2023',
    dateTo: 'Jan 2024',
    role: 'Back-end Engineer',
    roleNote: '— Intern',
    pill: 'internship',
    company: 'PT eBdesk Teknologi, Jakarta Selatan',
    description:
      'Developed backend services and internal APIs. Helped build early data ingestion services and automation using Python and Redis — the foundation everything after was built on.',
    tags: ['FastAPI · Redis', 'Python'],
  },
  {
    dateFrom: 'Aug 2025',
    dateTo: 'Aug 2029',
    role: 'B.Sc. Computer Science',
    roleNote: '— in progress',
    company: 'Universitas Pelita Harapan · AI & Cybersecurity',
    description:
      'Studying CS alongside full-time work. Focused on anomaly detection, adversarial ML, and how to keep AI systems honest under pressure. Year one of four.',
    tags: ['AI · ML', 'Cybersecurity'],
  },
];

export type ProjectVisualKey =
  | 'connection'
  | 'kafka'
  | 'etl'
  | 'vault'
  | 'agentpipeline'
  | 'keywordfanout'
  | 'lifecyclescheduler'
  | 'youtubecrawler'
  | 'playwrightbrowser'
  | 'facebookcrawler'
  | 'rapidapidual'
  | 'threadscrawler'
  | 'fanoutrouter';

export type PipelineStep = {
  label: string;
  detail: string;
};

export type PipelineTrack = {
  name: string;
  steps: PipelineStep[];
};

export type Challenge = {
  problem: string;
  solution: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type ArchitectureLayer = {
  name: string;
  detail: string;
};

export type Component = {
  tag: string;
  name: string;
  role: string;
  tech: string;
};

export type TechGroup = {
  category: string;
  items: string[];
};

export type ProjectDetail = {
  slug: string;
  metrics: Metric[];
  overview: string;
  layers: ArchitectureLayer[];
  architecture: string;
  pipelineTracks: PipelineTrack[];
  components: Component[];
  challenges: Challenge[];
  techGroups: TechGroup[];
  results: string[];
};

export type ProjectCard = {
  reversed?: boolean;
  visual: ProjectVisualKey;
  gradient: string;
  numLabel: string;
  tagLabel: string;
  type: string;
  year: string;
  title: string;
  titleAccent: string;
  tagline: string;
  description: string;
  impact: string;
  stack: string[];
  link?: string;
  detail: ProjectDetail;
};

export const projects: ProjectCard[] = [
  {
    reversed: true,
    visual: 'agentpipeline',
    gradient: 'linear-gradient(145deg,#0a1628,#0d1a14)',
    numLabel: '01 / 17',
    tagLabel: 'multi-agent extraction pipeline',
    type: 'Production · AI Pipeline',
    year: '2026',
    title: 'Clipper',
    titleAccent: 'Agent Pipeline',
    tagline: 'A self-writing news scraper — AI agents generate, validate, and repair their own extraction code per source, across a Rust + Python pipeline.',
    description:
      'A two-service, two-language pipeline for scraping news at scale without writing a single per-site scraper by hand. A Rust service discovers article URLs and generates the regex pattern for each domain; a Python service then runs a chain of LLM agents that analyze each site\'s DOM, generate a working Python extraction function for it, execute it, and — if it fails — regenerate the code automatically until it produces valid structured output.',
    impact:
      'Removed the need to hand-write and maintain a scraper per news domain. New sources onboard by configuration, not by code. Extraction code self-heals when a site changes its layout, with every generated version versioned and auditable, and every LLM call cost-tracked.',
    stack: ['Rust', 'Tokio', 'Python', 'asyncio', 'FastAPI', 'OpenRouter LLMs', 'Kafka', 'Redis', 'PostgreSQL', 'MongoDB', 'S3', 'Playwright'],
    detail: {
      slug: 'clipper-agent-pipeline',
      metrics: [
        { value: '2', label: 'Services (Rust + Python)' },
        { value: '6', label: 'Distinct LLM agents' },
        { value: '3', label: 'Self-healing retry cycles' },
        { value: '0', label: 'Hand-written per-site scrapers' },
      ],
      overview:
        'Clipper turns "add a new news source" from a coding task into a configuration task. A Rust pusher service reads the media registry, fetches each site\'s homepage, and either reuses a cached URL-matching regex or asks an LLM agent to generate one — validating it against real homepage links before trusting it. Matched article URLs become jobs in a shared Redis queue. A Python worker service picks up each job, fetches the article HTML, and runs it through a DOM-analysis agent and a code-generation agent that together produce a working `_extract(soup, domain, country)` Python function for that specific site — written by the LLM, not by me. If the generated function fails to produce valid output, the pipeline feeds the failure back into the agents and regenerates until it works, or gives up and suspends the domain after repeated failures.',
      layers: [
        { name: 'Discovery layer (Rust)', detail: 'Reads the active media registry from PostgreSQL, fetches each site\'s homepage with a multi-fallback fetcher chain (direct → headless browser → Cloudflare bypass), and resolves the article-URL regex for that domain — from cache if still valid, freshly generated by an LLM agent if not.' },
        { name: 'Queueing layer', detail: 'Matched article URLs are deduplicated per domain (Redis set with TTL) and pushed as JSON jobs onto a shared Redis list, enriched with lifecycle and topic metadata pulled from several PostgreSQL tables in one query.' },
        { name: 'Understanding layer (Python)', detail: 'A DOM-analysis agent reads the article HTML and infers the CSS selectors and extraction strategy for title, body, author, and publish date — caching the analysis per source so it isn\'t re-derived on every article.' },
        { name: 'Code-generation layer', detail: 'A second agent turns that analysis into an actual Python `_extract()` function, which is executed against the real page in a sandboxed call with a timeout. A dedicated repair model regenerates the function if execution or validation fails.' },
        { name: 'Output layer', detail: 'Valid, schema-checked article records are published to a Kafka topic for downstream analytics, while every generated code version is archived to S3 and logged to PostgreSQL, and every LLM call is logged with token counts for cost tracking.' },
      ],
      architecture:
        'Two independently deployable services share infrastructure instead of a network call: the Rust pusher writes jobs to a Redis list using a fixed JSON schema, and the Python worker consumes from that exact same list — there is no API between them, just a shared queue contract. Both services also call the same OpenRouter-compatible LLM endpoint independently, and both log their own LLM usage to the same PostgreSQL token-tracking table, distinguished by an `engine` field (`pusher` vs `crawler`) so cost can be attributed to the right stage.',
      pipelineTracks: [
        {
          name: 'Rust: URL discovery & regex generation',
          steps: [
            { label: 'Load active media', detail: 'Reads sources from the PostgreSQL media registry, ordered by priority, skipping anything suspended.' },
            { label: 'Acquire per-domain lock', detail: 'Takes a Redis NX lock keyed by domain with a TTL equal to that source\'s crawl interval, so two pusher instances never double-process the same site.' },
            { label: 'Resolve or generate regex', detail: 'Validates any cached URL-matching regex against fresh homepage links first; if it is missing, matches nothing, or is too permissive, an LLM agent generates a new one from a representative URL sample — with up to 3 diagnose-and-retry cycles on failure.' },
            { label: 'Extract & enrich URLs', detail: 'Applies the validated regex to the homepage, deduplicates against a per-domain "seen" set, and enriches surviving URLs with lifecycle and topic metadata in one join query.' },
            { label: 'Push jobs', detail: 'Writes one JSON job per new URL onto the shared Redis queue for the Python worker to pick up.' },
          ],
        },
        {
          name: 'Python: understanding, codegen & self-healing',
          steps: [
            { label: 'Fetch article HTML', detail: 'Consumes a job from the Redis queue and fetches the article page, falling back through direct fetch → headless browser → Cloudflare-bypass services as needed.' },
            { label: 'Analyze DOM (LLM agent)', detail: 'An analyzer agent reads the HTML and returns the selectors and extraction strategy for that source — cached per source so repeat articles skip this step.' },
            { label: 'Generate extractor (LLM agent)', detail: 'A code-generation agent turns the analysis into a real `_extract(soup, domain, country)` Python function, applying domain-specific constraints (timezone, known noise patterns, no-future-dates rule).' },
            { label: 'Execute & validate', detail: 'The generated function runs against the real page under a timeout; output is checked against a required-fields schema (title, published date, content).' },
            { label: 'Repair on failure', detail: 'A failed run feeds the specific missing fields back into the analyzer for a corrected pass, with a dedicated repair model as the final fallback — domains that keep failing past a threshold are automatically suspended.' },
            { label: 'Publish', detail: 'Valid records are published to a Kafka topic; every generated code version is archived to S3 + PostgreSQL, and every LLM call is logged for token cost.' },
          ],
        },
      ],
      components: [
        { tag: 'UP', name: 'UrlPatternGenerator', role: 'Generates the article-URL regex for a domain from a sampled URL list', tech: 'Rust · LLM agent' },
        { tag: 'RA', name: 'RegexAnalyzerAgent', role: 'Diagnoses why a generated regex failed and feeds corrections back for retry', tech: 'Rust · LLM agent' },
        { tag: 'DA', name: 'AnalyzerDomAgent', role: 'Infers CSS selectors and extraction strategy from sampled article HTML', tech: 'Python · LLM agent' },
        { tag: 'CG', name: 'CodeGeneratorAgent', role: 'Writes the actual `_extract()` Python function from the DOM analysis', tech: 'Python · LLM agent' },
        { tag: 'RP', name: 'RepairAgent', role: 'Fallback model that regenerates extraction code after a validation failure', tech: 'Python · LLM agent' },
        { tag: 'FX', name: 'FetcherChain', role: 'Multi-fallback HTML fetcher: direct → headless browser → Cloudflare bypass', tech: 'Playwright · curl_cffi' },
        { tag: 'TK', name: 'TokenUsageLogger', role: 'Logs every LLM call (both services) per source/model/agent_type for cost tracking', tech: 'PostgreSQL' },
      ],
      challenges: [
        {
          problem: 'Writing and maintaining a hand-coded scraper per news domain doesn\'t scale — every site redesign breaks one more bespoke script.',
          solution: 'Replaced hand-written extractors entirely with an LLM agent that analyzes each site\'s DOM and writes its own extraction function, so onboarding a new source is a registry entry, not a coding task.',
        },
        {
          problem: 'Generated extraction code inevitably fails sometimes — a missing selector or an unexpected layout produces incomplete or wrong data.',
          solution: 'Built a feedback loop: validation failures report exactly which fields are missing back to the analyzer agent, which retries with that context, falling back to a dedicated repair model before finally suspending a chronically-failing domain.',
        },
        {
          problem: 'Sending full homepage HTML to an LLM just to generate a URL regex is slow and expensive in tokens.',
          solution: 'The Rust service extracts and deduplicates candidate URLs first, sending a compact list (capped at 120 URLs) to the LLM instead of raw HTML — cutting prompt size and cost significantly.',
        },
        {
          problem: 'Two independent services (Rust producer, Python consumer) need to agree on a queue contract without a brittle shared library.',
          solution: 'Standardized on a plain JSON job schema over a shared Redis list — each side only needs to agree on the JSON shape and the key naming convention, not on a compiled interface.',
        },
        {
          problem: 'A cached regex or DOM analysis can silently go stale when a site changes its structure, producing wrong results without an obvious error.',
          solution: 'Every cached regex is health-checked against fresh homepage HTML before use (zero-match or too-permissive triggers regeneration), and every extraction failure is what triggers re-analysis — staleness self-corrects instead of needing manual detection.',
        },
      ],
      techGroups: [
        { category: 'Discovery service', items: ['Rust', 'Tokio', 'sqlx', 'reqwest'] },
        { category: 'Extraction service', items: ['Python', 'asyncio', 'FastAPI', 'BeautifulSoup4', 'Playwright'] },
        { category: 'LLM agents', items: ['OpenRouter (OpenAI-compatible)', 'agno', 'multi-model routing'] },
        { category: 'Queueing & cache', items: ['Redis (queue, locks, dedup, regex/code cache)'] },
        { category: 'Storage', items: ['PostgreSQL', 'MongoDB', 'S3 (code archive)'] },
        { category: 'Streaming output', items: ['Apache Kafka', 'Elasticsearch (audit log)'] },
      ],
      results: [
        'Onboarding a new news source no longer requires writing a scraper — it requires a registry entry.',
        'Extraction code self-heals after site layout changes instead of silently breaking and staying broken.',
        'Stale cached regex and DOM analysis are detected and regenerated automatically, not by manual monitoring.',
        'Every AI-generated extraction function is versioned and auditable, with full rollback history.',
        'Per-call LLM token cost is tracked across both services, attributable by source, model, and pipeline stage.',
      ],
    },
  },
  {
    visual: 'connection',
    gradient: 'linear-gradient(145deg,#081a2e,#0d2a1e)',
    numLabel: '02 / 17',
    tagLabel: 'connection topology',
    type: 'Open Source · Library',
    year: '2026',
    title: 'Async Connection',
    titleAccent: 'Registry',
    tagline: 'Factory-based async connection manager — removes hardcoded credentials from ETL code forever.',
    description:
      'Built to solve real friction in multi-database pipeline work. The registry centralizes all DB configurations in MongoDB and dynamically creates pooled async connections for PostgreSQL, MongoDB, and Elasticsearch through one unified interface. Adding a new database driver is non-breaking and minimal effort.',
    impact:
      'Eliminated credential coupling across distributed ETL environments. Connection pooling and auto-caching cut connection overhead significantly in high-throughput workloads. Includes monitoring, stats reporting, and lifecycle management.',
    stack: ['Python', 'asyncio', 'MongoDB', 'PostgreSQL', 'Elasticsearch', 'factory pattern'],
    link: 'https://github.com/yusepahmad/async-connection-registry',
    detail: {
      slug: 'async-connection-registry',
      metrics: [
        { value: '3', label: 'DB drivers unified' },
        { value: '1', label: 'Config source (MongoDB)' },
        { value: '0', label: 'Hardcoded credentials' },
        { value: 'O(1)', label: 'Cached connection lookup' },
      ],
      overview:
        'Most ETL codebases accumulate scattered, hardcoded database credentials and ad-hoc connection logic for every PostgreSQL, MongoDB, or Elasticsearch client they touch. The Async Connection Registry replaces all of that with a single factory-based interface: configs live in MongoDB, connections are created on demand, pooled, cached, and reused across the entire pipeline.',
      layers: [
        { name: 'Config layer', detail: 'Connection profiles (host, credentials, pool size, driver type) live as documents in a dedicated MongoDB collection — never in code or .env files.' },
        { name: 'Factory layer', detail: 'A registry of driver factories, one per database family. Each factory knows how to turn a config profile into a live async client for its driver.' },
        { name: 'Pool & cache layer', detail: 'Built connections are keyed by profile name and cached in-process. Repeat requests for the same profile reuse the warm pooled client instead of reconnecting.' },
        { name: 'Lifecycle layer', detail: 'A central shutdown hook walks every cached pool and closes it gracefully, and each pool reports basic stats (active connections, last used) on demand.' },
      ],
      architecture:
        'A factory pattern sits at the center. Each database type (PostgreSQL, MongoDB, Elasticsearch) registers a driver with the factory. When a pipeline requests a connection by name, the registry looks up its config in MongoDB, builds (or reuses from cache) a pooled async client, and hands it back — the caller never sees credentials or driver-specific setup code.',
      pipelineTracks: [
        {
          name: 'Connection resolution',
          steps: [
            { label: 'Config lookup', detail: 'Registry queries MongoDB for the named connection profile (host, credentials, pool size).' },
            { label: 'Driver resolution', detail: 'Factory matches the profile to the correct async driver (asyncpg, motor, elasticsearch-async).' },
            { label: 'Pool creation / reuse', detail: 'If a pool already exists for that profile, it is reused; otherwise a new pooled connection is created and cached.' },
            { label: 'Lifecycle management', detail: 'Connections report stats and are gracefully closed on shutdown via a central registry hook.' },
          ],
        },
      ],
      components: [
        { tag: 'CF', name: 'ConnectionFactory', role: 'Entry point — resolves a profile name to a live pooled client', tech: 'Python · asyncio' },
        { tag: 'PG', name: 'PostgresDriver', role: 'Builds and pools asyncpg connections from a profile', tech: 'asyncpg' },
        { tag: 'MG', name: 'MongoDriver', role: 'Builds and pools Motor (async MongoDB) clients', tech: 'Motor' },
        { tag: 'ES', name: 'ElasticDriver', role: 'Builds and pools async Elasticsearch clients', tech: 'elasticsearch-async' },
        { tag: 'CC', name: 'ConnectionCache', role: 'In-process cache keyed by profile name, avoids redundant pool creation', tech: 'In-memory dict' },
      ],
      challenges: [
        {
          problem: 'Every new pipeline reinvented its own connection setup, duplicating credentials across services.',
          solution: 'Centralized all configs in MongoDB so adding a new environment or database is a config change, not a code change.',
        },
        {
          problem: 'High-throughput workloads were creating and tearing down connections too often, hurting latency.',
          solution: 'Added connection pooling with auto-caching keyed by profile name, so repeated requests reuse warm connections.',
        },
        {
          problem: 'Supporting a new database type used to mean touching every service that needed it.',
          solution: 'New drivers register with the factory independently — adding PostgreSQL support never breaks existing MongoDB or Elasticsearch usage.',
        },
      ],
      techGroups: [
        { category: 'Language', items: ['Python 3.11+', 'asyncio'] },
        { category: 'Drivers', items: ['asyncpg', 'Motor', 'elasticsearch-async'] },
        { category: 'Config store', items: ['MongoDB'] },
        { category: 'Pattern', items: ['Factory pattern', 'connection pooling', 'in-process caching'] },
      ],
      results: [
        'Removed hardcoded credentials from ETL codebases entirely.',
        'Cut connection overhead significantly under high-throughput, multi-database workloads.',
        'New database drivers are non-breaking, minimal-effort additions.',
        'Built-in monitoring and stats reporting for every active connection pool.',
      ],
    },
  },
  {
    reversed: true,
    visual: 'kafka',
    gradient: 'linear-gradient(145deg,#0d1a2e,#081a1a)',
    numLabel: '03 / 17',
    tagLabel: 'kafka streaming topology',
    type: 'Production · Pipeline',
    year: '2025',
    title: 'Social Media',
    titleAccent: 'Data Pipeline',
    tagline: 'Multi-platform ingestion that turns social media noise into clean, structured analytics-ready data.',
    description:
      'A scalable pipeline collecting high-volume social media data from multiple platforms simultaneously. Built on Kafka for streaming throughput with automated retry logic and rate-limit awareness. Every record is validated and transformed before landing in Elasticsearch for downstream analytics and monitoring systems.',
    impact:
      'Handles sustained concurrent ingestion from multiple platforms under high load. Scheduling, retry, and validation layers ensure stability against unreliable external sources. Feeds both real-time and batch analytics with structured, trust-ready data.',
    stack: ['Python', 'Apache Kafka', 'Redis', 'REST APIs', 'Elasticsearch'],
    detail: {
      slug: 'social-media-data-pipeline',
      metrics: [
        { value: '3+', label: 'Concurrent source platforms' },
        { value: '3', label: 'Dedicated Kafka partitions' },
        { value: '24/7', label: 'Streaming ingestion' },
        { value: '2', label: 'Analytics modes (real-time + batch)' },
      ],
      overview:
        'Social platforms are noisy, rate-limited, and inconsistent. This pipeline ingests from multiple platforms (Twitter/X, Instagram, web scrape sources) simultaneously, pushes everything through Kafka for streaming throughput, and lands clean, validated, analytics-ready records in Elasticsearch.',
      layers: [
        { name: 'Collection layer', detail: 'One collector per platform, each respecting that platform\'s own rate limits via Redis-tracked counters — failures in one source never block the others.' },
        { name: 'Streaming layer', detail: 'Kafka buffers and partitions raw records per source, giving replay safety and isolating per-platform failures from the rest of the pipeline.' },
        { name: 'Processing layer', detail: 'A shared consumer group reads across partitions, normalizes schema differences, and flags or drops malformed records before they reach storage.' },
        { name: 'Serving layer', detail: 'Elasticsearch indexes clean records for both real-time dashboards and scheduled batch analytics jobs.' },
      ],
      architecture:
        'Each source runs its own collector that publishes raw records onto a dedicated Kafka partition. A shared consumer group reads across partitions, applies validation and transformation, and writes to Elasticsearch. Redis tracks rate-limit state and dedupe keys so collectors back off gracefully instead of getting banned.',
      pipelineTracks: [
        {
          name: 'Ingestion flow',
          steps: [
            { label: 'Collect', detail: 'Per-platform collectors poll or stream from twitter/x, instagram, and web_scrape sources, respecting each platform\'s rate limits via Redis-tracked counters.' },
            { label: 'Publish', detail: 'Raw records are published to platform-specific Kafka partitions for buffering and replay safety.' },
            { label: 'Validate & transform', detail: 'Consumers normalize schema differences across platforms and drop or flag malformed records.' },
            { label: 'Index', detail: 'Clean records land in Elasticsearch, ready for real-time dashboards and batch analytics jobs.' },
          ],
        },
      ],
      components: [
        { tag: 'TW', name: 'TwitterCollector', role: 'Polls Twitter/X, respects rate limits, publishes to its own partition', tech: 'Python · REST API' },
        { tag: 'IG', name: 'InstagramCollector', role: 'Streams Instagram source data with Redis-tracked backoff', tech: 'Python · REST API' },
        { tag: 'WS', name: 'WebScrapeCollector', role: 'Pulls from generic web sources outside platform APIs', tech: 'Python' },
        { tag: 'NM', name: 'Normalizer', role: 'Maps every platform\'s raw payload into one canonical schema', tech: 'Kafka consumer group' },
        { tag: 'RL', name: 'RateLimitGuard', role: 'Tracks per-platform limit state and dedupe keys, triggers backoff', tech: 'Redis' },
      ],
      challenges: [
        {
          problem: 'Each social platform has different, frequently-changing rate limits — naive polling got collectors temporarily banned.',
          solution: 'Built Redis-backed rate-limit tracking per platform with automatic backoff and retry scheduling.',
        },
        {
          problem: 'Concurrent ingestion from multiple unreliable sources meant partial failures were common.',
          solution: 'Kafka partitioning isolates failures per source — one platform going down does not block ingestion from the others.',
        },
        {
          problem: 'Downstream analytics needed a single consistent schema despite wildly different source formats.',
          solution: 'A normalization layer maps every platform\'s raw payload into one canonical record shape before indexing.',
        },
      ],
      techGroups: [
        { category: 'Language', items: ['Python'] },
        { category: 'Streaming', items: ['Apache Kafka'] },
        { category: 'Rate limiting', items: ['Redis'] },
        { category: 'Storage & search', items: ['Elasticsearch'] },
        { category: 'Ingestion', items: ['REST APIs', 'web scraping'] },
      ],
      results: [
        'Sustained concurrent ingestion from multiple platforms under high load without manual intervention.',
        'Stable against unreliable external sources via scheduling, retry, and validation layers.',
        'Feeds both real-time and batch analytics with structured, trust-ready data.',
      ],
    },
  },
  {
    visual: 'etl',
    gradient: 'linear-gradient(145deg,#0d1a2a,#121a10)',
    numLabel: '04 / 17',
    tagLabel: 'etl module architecture',
    type: 'Internal · Template',
    year: '2025',
    title: 'ETL Pipeline',
    titleAccent: 'Boilerplate',
    tagline: 'Production-ready ETL template — modular, async, tested, and deploy-safe from day one.',
    description:
      'A reusable boilerplate for processing structured hierarchical datasets and syncing them with relational databases. Clean modular architecture — extract, transform, load, DQ validation, config management. Uses MD5-based unique IDs for deterministic records. Async SQLAlchemy, automated sync across runs.',
    impact:
      'Significantly reduced time-to-production for new pipelines. Docker deploy, environment-aware config, pytest coverage, and production safety checks that prevent accidental live-env execution — all out of the box.',
    stack: ['Python', 'PostgreSQL', 'SQLAlchemy Async', 'Docker', 'pytest'],
    detail: {
      slug: 'etl-pipeline-boilerplate',
      metrics: [
        { value: '4', label: 'Independently testable modules' },
        { value: 'MD5', label: 'Deterministic record IDs' },
        { value: '100%', label: 'Idempotent reruns (upsert)' },
        { value: '1', label: 'Codebase across all environments' },
      ],
      overview:
        'Every new pipeline at the team started from a blank file and re-solved the same problems: extraction structure, transform validation, deterministic IDs, and safe deploys. This boilerplate packages all of that into a clean, modular template so a new pipeline is production-ready from day one.',
      layers: [
        { name: 'Extract layer', detail: 'Pulls structured hierarchical source data and stages it in a raw, unmodified form before any transformation happens.' },
        { name: 'Transform layer', detail: 'Normalizes nested structures into flat relational shapes and computes a deterministic MD5-based ID per record.' },
        { name: 'Data-quality layer', detail: 'Validates every record before it can reach the database — failures are quarantined with a reason, never silently inserted.' },
        { name: 'Load layer', detail: 'Async SQLAlchemy upserts on the deterministic ID, so a rerun after a partial failure never creates duplicates.' },
      ],
      architecture:
        'Strict separation between extract, transform, load, and data-quality (DQ) validation modules, each independently testable. Deterministic MD5-based IDs let reruns sync safely without duplicating records. Config is environment-aware, so the same codebase runs in dev, staging, or production with no code changes — only config.',
      pipelineTracks: [
        {
          name: 'ETL flow',
          steps: [
            { label: 'Extract', detail: 'Pulls structured hierarchical source data and stages it.' },
            { label: 'Transform', detail: 'Normalizes nested structures and computes MD5-based deterministic IDs per record.' },
            { label: 'Validate (DQ)', detail: 'Data-quality checks run before anything reaches the database — bad records are quarantined, not silently inserted.' },
            { label: 'Load', detail: 'Async SQLAlchemy syncs records into PostgreSQL, upserting on the deterministic ID so reruns are idempotent.' },
          ],
        },
      ],
      components: [
        { tag: 'EX', name: 'Extractor', role: 'Stages raw hierarchical source data before any transformation', tech: 'Python' },
        { tag: 'TR', name: 'Transformer', role: 'Flattens nested structures, computes MD5 deterministic IDs', tech: 'Python · hashlib' },
        { tag: 'DQ', name: 'QualityGate', role: 'Validates records pre-load, quarantines failures with a reason', tech: 'Python' },
        { tag: 'LD', name: 'Loader', role: 'Upserts validated records into PostgreSQL on the deterministic ID', tech: 'SQLAlchemy Async' },
        { tag: 'CF', name: 'EnvConfig', role: 'Environment-aware config with safety checks blocking accidental live-env runs', tech: 'Pydantic settings' },
      ],
      challenges: [
        {
          problem: 'Re-running a pipeline after a partial failure used to create duplicate records.',
          solution: 'Deterministic MD5-based IDs make every record\'s identity reproducible, so loads upsert instead of duplicate.',
        },
        {
          problem: 'It was too easy to accidentally point a dev pipeline at the production database.',
          solution: 'Added environment-aware config with explicit safety checks that block live-env execution unless deliberately confirmed.',
        },
        {
          problem: 'New pipelines took days to reach a deployable, tested state.',
          solution: 'Packaged Docker deploy, pytest coverage, and config scaffolding into the template itself.',
        },
      ],
      techGroups: [
        { category: 'Language', items: ['Python'] },
        { category: 'Database', items: ['PostgreSQL', 'SQLAlchemy Async'] },
        { category: 'Testing', items: ['pytest'] },
        { category: 'Deploy', items: ['Docker', 'environment-aware config'] },
      ],
      results: [
        'Significantly reduced time-to-production for new pipelines.',
        'Docker deploy and environment-aware config out of the box.',
        'pytest coverage and production safety checks prevent accidental live-env execution.',
      ],
    },
  },
  {
    reversed: true,
    visual: 'vault',
    gradient: 'linear-gradient(145deg,#0a1a16,#0d1428)',
    numLabel: '05 / 17',
    tagLabel: 'credential vault topology',
    type: 'Internal · Platform',
    year: '2026',
    title: 'ACIS Credential',
    titleAccent: 'Hub',
    tagline: 'Rust service that centralizes every credential and AI-generated extractor used by the crawler fleet.',
    description:
      'A Rust/Axum service acting as the single source of truth for RapidAPI keys, social-platform session credentials, and AI-agent-generated scraping code used across the ACIS crawler fleet. Crawlers resolve credentials and active extractor code from one hub instead of scattering secrets and code versions across services.',
    impact:
      'Removed credential sprawl across the crawler fleet and gave every key, social account, and AI-generated extractor a single auditable lifecycle. Auto-suspends rate-limited keys, prevents two crawlers from claiming the same social account, and lets the news-scraping agent self-heal by versioning its own generated code.',
    stack: ['Rust', 'Axum', 'PostgreSQL', 'Redis', 'S3', 'Infisical', 'AI agent codegen'],
    detail: {
      slug: 'acis-credential-hub',
      metrics: [
        { value: '3', label: 'Credential domains unified' },
        { value: '4', label: 'Social platforms supported' },
        { value: '24', label: 'REST endpoints exposed' },
        { value: '403/429', label: 'Auto-suspend triggers' },
      ],
      overview:
        'The ACIS crawler fleet depends on three things that used to live scattered across services: RapidAPI keys, social-platform login sessions, and — for the AI-driven news scraper — extractor code that an agent writes and rewrites for itself. ACIS Credential Hub is a single Rust service that owns all three, exposing a clean REST API so every crawler resolves credentials and active code from one place instead of duplicating secrets or stepping on each other.',
      layers: [
        { name: 'RapidAPI key layer', detail: 'Hosts and keys with a lifecycle (active → suspended/expired/revoked), LRU-first resolution, and a full usage + status-history audit trail per key.' },
        { name: 'Social account layer', detail: 'A generic credential pool for Threads/Twitter/Facebook/YouTube with atomic checkout/release/heartbeat leasing so concurrent crawlers never collide on the same session.' },
        { name: 'Agent code layer', detail: 'Versioned, S3-archived extractor code that the news-scraping agent writes for itself, with the active version hot-cached in Redis for crawlers to pick up immediately.' },
        { name: 'Secrets proxy layer', detail: 'A thin layer in front of Infisical so every onboarded service\'s secrets are added, read, and updated through one consistent hub endpoint instead of scattered .env files.' },
      ],
      architecture:
        'Built on Axum with PostgreSQL as the system of record, Redis as a hot cache for the AI agent\'s currently-active extractor code, S3 for archived code versions, and a proxy layer in front of Infisical for centralized secret storage. Three domains share the same lifecycle pattern (active → suspended/archived, with a full usage and status-history audit trail): RapidAPI keys, social account sessions, and agent-generated extractor code.',
      pipelineTracks: [
        {
          name: 'RapidAPI key flow',
          steps: [
            { label: 'Key resolution', detail: 'A crawler asks the hub for an active RapidAPI key before every upstream call instead of reading a static config — the hub returns the least-recently-used active key for that platform.' },
            { label: 'Usage + auto-suspend', detail: 'After each call, the crawler reports success/failure back to the hub. A 403/429 response automatically transitions that key to suspended, with the reason and a full status-history trail.' },
          ],
        },
        {
          name: 'Social account lease flow',
          steps: [
            { label: 'Checkout', detail: 'A crawler atomically claims the LRU available account for a platform, getting an exclusive lease with an expiry.' },
            { label: 'Heartbeat / release', detail: 'Long-running jobs extend the lease with heartbeats; finished jobs release the account back into the pool, or an operator can force-release a stuck one.' },
          ],
        },
        {
          name: 'Agent code versioning flow',
          steps: [
            { label: 'Generate / regenerate', detail: 'The news-scraping agent writes its own _extract() function per source, regenerating automatically after a parsing failure (reason: dirty_regen).' },
            { label: 'Archive + activate', detail: 'Every new version is archived to S3, recorded in Postgres as the next monotonic version, and pushed into Redis as the active version for crawlers to use immediately — the previous version is kept as archived, never overwritten.' },
          ],
        },
      ],
      components: [
        { tag: 'RK', name: 'RapidApiKeyStore', role: 'Tracks host/key lifecycle, LRU resolution, usage + status-history audit trail', tech: 'Axum · PostgreSQL' },
        { tag: 'SA', name: 'SocialAccountPool', role: 'Generic credential pool for Threads/Twitter/Facebook/YouTube with checkout/lease', tech: 'Axum · PostgreSQL' },
        { tag: 'CK', name: 'CheckoutLeaseManager', role: 'Atomic LRU-first checkout, heartbeat extension, force-release override', tech: 'PostgreSQL row locking' },
        { tag: 'AC', name: 'AgentCodeRegistry', role: 'Versions and archives AI-generated _extract() code per source', tech: 'PostgreSQL + S3' },
        { tag: 'RC', name: 'ActiveCodeCache', role: 'Hot cache of the currently-active extractor code for instant crawler pickup', tech: 'Redis' },
        { tag: 'TK', name: 'TokenUsageLogger', role: 'Logs every LLM call per source/model/agent_type for cost tracking', tech: 'PostgreSQL' },
        { tag: 'IS', name: 'InfisicalProxy', role: 'Centralizes secret add/get/update per onboarded service', tech: 'reqwest · Infisical API' },
      ],
      challenges: [
        {
          problem: 'RapidAPI keys getting rate-limited (403/429) used to silently break crawlers until someone noticed failed jobs.',
          solution: 'Usage reporting on every call triggers an automatic status transition to suspended the moment a key gets rate-limited, with the reason captured in a permanent status-history table.',
        },
        {
          problem: 'Two crawler workers could grab the same social media session simultaneously, corrupting cookies or triggering platform bans.',
          solution: 'Added an atomic checkout/release/heartbeat lease system — an account is exclusively held by one worker until released or its lease expires, with an operator force-release override for stuck jobs.',
        },
        {
          problem: 'The news-scraping AI agent generates its own extraction code per source, but a bad regeneration after a site layout change could silently break scraping with no way to roll back.',
          solution: 'Every agent-authored code change is versioned (monotonic per source), archived to S3 with metadata (reason: initial / upsert_repair / dirty_regen / manual, author: agent or user), and the previous active version is preserved as archived — never overwritten.',
        },
        {
          problem: 'Secrets for each onboarded ACIS service were duplicated across .env files and manual Infisical lookups.',
          solution: 'Built a thin proxy layer in front of Infisical so every service\'s secrets are added, listed, and updated through one consistent hub endpoint.',
        },
      ],
      techGroups: [
        { category: 'Language & framework', items: ['Rust', 'Axum', 'Tokio'] },
        { category: 'Database', items: ['PostgreSQL', 'sqlx'] },
        { category: 'Cache', items: ['Redis'] },
        { category: 'Storage', items: ['S3 (code archive)'] },
        { category: 'Secrets', items: ['Infisical proxy'] },
        { category: 'AI integration', items: ['Agent codegen versioning', 'LLM token usage tracking'] },
        { category: 'API docs', items: ['utoipa', 'Swagger UI'] },
      ],
      results: [
        'Single source of truth for RapidAPI keys, social account credentials, and AI-generated extractor code across the crawler fleet.',
        'Rate-limited keys auto-suspend instead of silently failing jobs.',
        'Exclusive checkout/lease system eliminates session collisions between concurrent crawlers.',
        'The AI scraping agent can self-heal by regenerating and versioning its own extraction code, with full rollback history.',
        'Centralized, auditable secret management via an Infisical proxy instead of scattered .env files.',
      ],
    },
  },
  {
    visual: 'keywordfanout',
    gradient: 'linear-gradient(145deg,#0d1a2e,#0a1c1a)',
    numLabel: '06 / 17',
    tagLabel: '3-agent keyword fan-out',
    type: 'Internal · AI Pipeline',
    year: '2026',
    title: 'Keyword Intelligence',
    titleAccent: 'Engine',
    tagline: 'Turns one topic brief into a full monitoring setup — search queries, platform keywords, and vetted accounts — across 6 social platforms, automatically.',
    description:
      'A FastAPI service that replaces manual keyword research with a 3-agent LLM pipeline. Give it a topic and a client, and it derives a Lucene search query and semantic query variations, generates platform-correct keywords for Twitter, Instagram, TikTok, YouTube, Facebook, and Threads in parallel, then evaluates real candidate accounts and news outlets from Elasticsearch for relevance before publishing everything as ready-to-crawl objects to Kafka.',
    impact:
      'Cut keyword strategy setup from a manual research task to a single API call. Deduplicates against every other client already tracking similar topics using fuzzy matching, so the same keyword is never crawled twice. Account and media selection is LLM-assessed against real recent activity instead of guessed, including a relevance-weighted decision on whether to even crawl an account\'s comments.',
    stack: ['Python', 'FastAPI', 'asyncio', 'PostgreSQL', 'Elasticsearch', 'Kafka', 'RapidFuzz', 'vLLM', 'OpenRouter'],
    detail: {
      slug: 'keyword-intelligence-engine',
      metrics: [
        { value: '3', label: 'Chained LLM agents' },
        { value: '6', label: 'Platforms generated in parallel' },
        { value: '85', label: 'Fuzzy dedup threshold (token sort)' },
        { value: '20', label: 'Candidate accounts assessed per run' },
      ],
      overview:
        'Manual keyword research doesn\'t scale once you\'re monitoring dozens of clients across six platforms that each need a different keyword style — Instagram wants hashtags, YouTube wants natural-language search phrases, Twitter wants a mix of exact phrases and hashtags. This engine takes a single topic brief and produces all of it: a Lucene boolean query for document search, ten semantic query variations for vector/semantic search, platform-correct keywords per platform, and a vetted shortlist of accounts and news outlets actually worth monitoring — all derived by LLM agents reasoning over real, current data instead of a human guessing at search terms.',
      layers: [
        { name: 'Query construction layer', detail: 'One agent turns a topic or long-form brief into a Lucene boolean query plus ten semantic query variations, using different prompt strategies for "strategic" briefs versus quick "tactical" topics.' },
        { name: 'Fan-out generation layer', detail: 'A second agent is called six times in parallel — once per platform — each call constrained to that platform\'s real keyword conventions (hashtag-only for Instagram, natural-language search phrases for YouTube, and so on).' },
        { name: 'Candidate discovery layer', detail: 'The derived Lucene query is run against live Elasticsearch indices to surface accounts and news outlets that are actually posting about the topic right now, ranked by a relevance × authority blend, not by static lists.' },
        { name: 'Assessment layer', detail: 'A third agent reviews each discovered candidate against real recent posts/articles and decides whether it\'s actually worth monitoring, including a separate decision on whether that account\'s comment section is worth crawling at all.' },
        { name: 'Deduplication & publish layer', detail: 'Every generated keyword is fuzzy-matched against what every other client is already tracking before anything is sent to Kafka — duplicates are dropped, not crawled twice.' },
      ],
      architecture:
        'Three independent LLM agents are chained through a single async orchestrator: QueryConstructorAgent produces the search queries that drive everything downstream, KeywordGeneratorAgent and the Elasticsearch-backed candidate retrievers run in parallel via asyncio.gather() once those queries exist, and EntityAssessorAgent is called inside the retrievers to judge each candidate. Every agent goes through the same lightweight provider abstraction, so a call can be routed to a local vLLM model (Gemma or Qwen, by default) or to OpenAI/OpenRouter without touching the agent logic — only the provider name changes per agent.',
      pipelineTracks: [
        {
          name: 'Query → keyword fan-out',
          steps: [
            { label: 'Resolve topic', detail: 'Looks up the pre-registered topic_id and derives a deterministic client_id (MD5 of the client name) so output objects can be attributed correctly.' },
            { label: 'Construct queries', detail: 'QueryConstructorAgent reads the brief (or topic, for quick "tactical" requests) and returns a Lucene boolean query plus ten semantic query variations.' },
            { label: 'Generate keywords per platform', detail: 'KeywordGeneratorAgent is called once per requested platform, in parallel, each constrained to that platform\'s real conventions — hashtags for Instagram, natural-language phrases for YouTube, exact phrases and hashtags for Twitter, and so on.' },
            { label: 'Deduplicate', detail: 'Every candidate keyword is fuzzy-matched (RapidFuzz token-sort ratio ≥ 85) against keywords already tracked by any client on that platform, plus everything generated earlier in the same batch — duplicates are dropped before they ever reach Kafka.' },
          ],
        },
        {
          name: 'Account & media discovery',
          steps: [
            { label: 'Surface candidates', detail: 'The Lucene query is run against live Elasticsearch indices (social posts and news articles from the last 24h) to aggregate the most active accounts and outlets actually discussing the topic.' },
            { label: 'Rank by relevance × authority', detail: 'Each candidate is scored as relevance_score × log10(authority + 1) — follower count for accounts, a PR/authority value for media outlets — so a highly relevant niche account can still outrank a barely-relevant mega-account.' },
            { label: 'Assess with LLM', detail: 'EntityAssessorAgent reviews each top candidate\'s actual recent content against the topic and brief, in parallel under a concurrency cap, and returns whether it\'s genuinely worth monitoring.' },
            { label: 'Decide comment crawling', detail: 'For the final shortlisted accounts, a sample of their recent comments is pulled and the same agent decides — based on relevance and sentiment, not just volume — whether crawling that account\'s comment section is worth the cost.' },
          ],
        },
      ],
      components: [
        { tag: 'QC', name: 'QueryConstructorAgent', role: 'Turns a topic/brief into a Lucene query + 10 semantic query variations', tech: 'Python · LLM agent' },
        { tag: 'KG', name: 'KeywordGeneratorAgent', role: 'Generates platform-correct keywords, called once per platform in parallel', tech: 'Python · LLM agent' },
        { tag: 'EA', name: 'EntityAssessorAgent', role: 'Judges account/media relevance and decides on comment-crawl worthiness', tech: 'Python · LLM agent' },
        { tag: 'AR', name: 'AccountRetriever', role: 'Aggregates and ranks candidate social accounts from Elasticsearch', tech: 'Elasticsearch async' },
        { tag: 'MR', name: 'MediaRetriever', role: 'Aggregates and ranks candidate news outlets from Elasticsearch', tech: 'Elasticsearch async' },
        { tag: 'DD', name: 'DedupEngine', role: 'Fuzzy-matches new keywords against existing + in-batch keywords per platform', tech: 'RapidFuzz' },
        { tag: 'MP', name: 'ObjectMapper', role: 'Maps every keyword/account/media result into the shared Kafka object schema', tech: 'Python' },
      ],
      challenges: [
        {
          problem: 'A single LLM call asked to generate keywords for all six platforms at once consistently under-generated and blurred platform-specific conventions together.',
          solution: 'Split generation into six parallel, platform-scoped calls instead — each constrained to only that platform\'s rules, run concurrently so total latency stays close to a single call.',
        },
        {
          problem: 'The same keyword could get generated and crawled redundantly across many different clients tracking similar or overlapping topics, wasting crawl budget.',
          solution: 'Fuzzy-matched every new keyword against the existing pool with RapidFuzz token-sort ratio (order-independent, so "BBM Pertamina" and "Pertamina BBM" count as the same keyword) before anything reaches Kafka.',
        },
        {
          problem: 'Picking which accounts and outlets to monitor by follower count or PR value alone surfaced big but barely-relevant accounts ahead of small but highly on-topic ones.',
          solution: 'Blended relevance_score with a logarithmic authority term (log10(followers/PR + 1)) so relevance dominates the ranking while authority still breaks ties sensibly.',
        },
        {
          problem: 'Crawling comments on every monitored account regardless of whether the discussion was substantive wasted crawl budget on dead or spam-only comment sections.',
          solution: 'Added a dedicated LLM decision step that samples real comments and their sentiment distribution before deciding whether that account\'s comments are worth crawling at all.',
        },
        {
          problem: 'LLM JSON output for structured fields (keyword lists, assessment scores) occasionally came back malformed — trailing commas, markdown fences, or near-miss JSON.',
          solution: 'Wrapped every agent response through a lenient JSON-repair step with markdown-fence stripping and automatic retries, instead of letting one malformed response fail the whole batch.',
        },
      ],
      techGroups: [
        { category: 'API service', items: ['Python', 'FastAPI', 'asyncio'] },
        { category: 'LLM agents', items: ['vLLM (Gemma, Qwen)', 'OpenAI', 'OpenRouter', 'provider-agnostic routing'] },
        { category: 'Search & ranking', items: ['Elasticsearch (async)', 'relevance × authority scoring'] },
        { category: 'Deduplication', items: ['RapidFuzz token-sort ratio'] },
        { category: 'Database', items: ['PostgreSQL (asyncpg)'] },
        { category: 'Output', items: ['Apache Kafka'] },
        { category: 'Secrets', items: ['Infisical'] },
      ],
      results: [
        'Keyword strategy setup for a new client/topic dropped from manual research to a single API call.',
        'Every keyword is deduplicated against every other client\'s existing tracking before it can be crawled twice.',
        'Account and media shortlists are LLM-assessed against real recent activity, not static or guessed lists.',
        'Comment crawling is a deliberate, relevance-weighted decision instead of a blanket default.',
        'Platform-specific keyword conventions (hashtag vs. phrase vs. search query) are respected per platform instead of blurred into one generic format.',
      ],
    },
  },
  {
    reversed: true,
    visual: 'lifecyclescheduler',
    gradient: 'linear-gradient(145deg,#0a1c28,#0d1424)',
    numLabel: '07 / 17',
    tagLabel: 'fastest-wins job scheduler',
    type: 'Production · Orchestrator',
    year: '2026',
    title: 'Lifecycle Pipeline',
    titleAccent: 'Orchestrator',
    tagline: 'An event-driven scheduler that turns one tracked object shared by many clients into exactly one crawl job, not many.',
    description:
      'An async Kafka-driven background service that owns the lifecycle of every monitored object (keyword, account, or media source) in the crawler platform. It tracks each object\'s state per client, dynamically schedules crawl jobs based on how "hot" that tracking relationship currently is, and collapses what could be N duplicate jobs — one per client tracking the same object — into a single dispatch using a fastest-wins scheduling rule.',
    impact:
      'Eliminated duplicate crawling of objects tracked by multiple clients — one object now produces exactly one job per due interval regardless of how many clients are watching it. Lifecycle state changes are picked up and rescheduled in real time via PostgreSQL LISTEN/NOTIFY instead of polling, and every dispatch is fully audited end to end.',
    stack: ['Python', 'asyncio', 'aiokafka', 'asyncpg', 'APScheduler', 'PostgreSQL', 'Redis', 'Elasticsearch'],
    detail: {
      slug: 'lifecycle-pipeline-orchestrator',
      metrics: [
        { value: '5', label: 'Kafka topics wired' },
        { value: '4', label: 'Lifecycle states (TRIAL→HOT/COLD/DORMANT)' },
        { value: '3', label: 'Layers of duplicate-message guards' },
        { value: '0ms poll', label: 'Reactive via PG LISTEN/NOTIFY' },
      ],
      overview:
        'When the same keyword or account is tracked by ten different clients, naively scheduling ten separate crawl jobs wastes crawl budget tenfold for zero extra value — the underlying data is identical. This service sits between object ingestion, a lifecycle-scoring engine, and the crawler itself, and makes the scheduling decision smart: it computes the single fastest interval needed across every client watching an object, dispatches exactly one job at that cadence, and still reports the result back to every client that needed it. State changes (an object going from a trial period to "hot" engagement, or fading into dormant) reschedule that object\'s job immediately through a database trigger, not a polling loop.',
      layers: [
        { name: 'Ingestion layer', detail: 'Consumes new object registrations from Kafka and establishes each object\'s identity plus its starting TRIAL lifecycle state per client, guarding against duplicate inserts for the same (object, client, topic) triplet.' },
        { name: 'Lifecycle layer', detail: 'Consumes state/mode transitions from an upstream scoring engine, appends them to an immutable history table, and indexes every transition to Elasticsearch for audit — without ever blocking the Kafka consumer loop if Elasticsearch is briefly unavailable.' },
        { name: 'Scheduling layer', detail: 'Listens for lifecycle changes via PostgreSQL LISTEN/NOTIFY and maintains one APScheduler job per object, recomputing the fastest required trigger across every client tracking it whenever the underlying state changes.' },
        { name: 'Dispatch layer', detail: 'On each trigger fire, filters down to only the clients actually due (per-client interval, not the shared trigger interval), builds a per-client owner manifest, and produces exactly one Kafka job carrying all of them.' },
        { name: 'Signal layer', detail: 'Consumes crawl results from the crawler, updates the per-client job audit log, and fans the result back out — one message per client — to the lifecycle-scoring engine for re-evaluation.' },
      ],
      architecture:
        'Three Kafka consumers (object, lifecycle, crawl-signal) and one Kafka producer run concurrently under a single asyncio event loop, backed by an asyncpg connection pool and a PostgreSQL LISTEN/NOTIFY channel that the scheduler subscribes to directly — so a lifecycle state change reaches the scheduler the moment it\'s committed, not on the next poll. APScheduler holds one dynamic job per tracked object; each job\'s trigger is recomputed, not just its handler, whenever the set of clients or their states change, using a state-priority rule (HOT beats COLD beats DORMANT beats TRIAL) to pick the single fastest cadence that satisfies every client at once.',
      pipelineTracks: [
        {
          name: 'Object → lifecycle → schedule',
          steps: [
            { label: 'Register object', detail: 'A new object arrives on the object topic; its identity is upserted and a TRIAL lifecycle row plus trial-tracking metadata are created for that client.' },
            { label: 'Score & transition', detail: 'An upstream lifecycle-scoring engine evaluates engagement and publishes a state/mode transition (e.g. TRIAL → HOT), which is appended to the immutable lifecycle history table and indexed to Elasticsearch.' },
            { label: 'Notify the scheduler', detail: 'A PostgreSQL trigger fires pg_notify on every lifecycle insert; the scheduler\'s listener receives it immediately and recomputes the fastest trigger needed across all clients tracking that object.' },
            { label: 'Register or update job', detail: 'APScheduler\'s job for that object is (re)registered with the new trigger — switching from a 45-minute cadence to a 5-minute cadence the instant one client goes HOT, for example.' },
          ],
        },
        {
          name: 'Dispatch → crawl → signal back',
          steps: [
            { label: 'Trigger fires', detail: 'At the computed interval, the scheduler filters all clients tracking the object down to only those actually due right now, since different clients can be on different cadences sharing one trigger.' },
            { label: 'Check trial expiry', detail: 'Any client still in TRIAL is checked against its configured max trial days; if exceeded with no scoring update, it auto-graduates to DORMANT instead of being dispatched again.' },
            { label: 'Dispatch one job', detail: 'A single job is produced to the crawler\'s queue carrying a per-client owner array (metadata id, topic id, client id, tags) — one Kafka message regardless of how many clients are due.' },
            { label: 'Crawler reports back', detail: 'The crawler publishes a crawl-success signal; the handler updates the per-client job log (ACK/FAILED) and forwards one result message per client in the owner array to the lifecycle-scoring engine.' },
          ],
        },
      ],
      components: [
        { tag: 'OH', name: 'ObjectHandler', role: 'Upserts object identity and seeds the initial TRIAL lifecycle + trial metadata', tech: 'Python · asyncpg' },
        { tag: 'LH', name: 'LifecycleHandler', role: 'Appends lifecycle transitions, guards duplicates, fire-and-forget indexes to Elasticsearch', tech: 'Python · asyncpg' },
        { tag: 'LS', name: 'LifecycleScheduler', role: 'Maintains one dynamic APScheduler job per object; recomputes the fastest-wins trigger on every change', tech: 'APScheduler · PG LISTEN/NOTIFY' },
        { tag: 'SH', name: 'SignalHandler', role: 'Processes crawl results, updates job audit log, fans results back per client', tech: 'Python · aiokafka' },
        { tag: 'EC', name: 'ElasticBuffer', role: 'Batches lifecycle history writes (50 docs or 5s, whichever first) into rolling monthly indices', tech: 'Elasticsearch async' },
        { tag: 'TG', name: 'TrialGraduator', role: 'Auto-transitions stale TRIAL clients to DORMANT after a configurable max trial period', tech: 'PostgreSQL' },
      ],
      challenges: [
        {
          problem: 'An object tracked by many clients at different engagement levels (one client HOT, another COLD) could trivially produce one crawl job per client, multiplying crawl cost with no added value.',
          solution: 'Built a fastest-wins trigger rule that picks the single fastest cadence required across all clients tracking an object, then dispatches one shared job — while still filtering per-client due-ness so a COLD client isn\'t served more often than its own interval requires.',
        },
        {
          problem: 'Polling the database on an interval to detect lifecycle state changes would add latency and waste cycles checking objects that hadn\'t changed.',
          solution: 'Used PostgreSQL LISTEN/NOTIFY with a database trigger on the lifecycle table, so the scheduler reacts to a state change the instant it\'s committed, with zero polling overhead.',
        },
        {
          problem: 'Kafka consumer groups can redeliver messages after a crash or rebalance, risking duplicate lifecycle rows or duplicate trial entries.',
          solution: 'Layered three independent duplicate guards: a NOT EXISTS check on object insert, an exact-timestamp match check on lifecycle insert, and an in-memory state-cache comparison in the scheduler before re-registering a job.',
        },
        {
          problem: 'Objects could get stuck in TRIAL indefinitely if the upstream scoring engine never produced a transition for them.',
          solution: 'Added a configurable max-trial-days check that runs on every scheduler tick — a TRIAL client past its limit with no scoring update auto-graduates to DORMANT instead of being dispatched forever.',
        },
        {
          problem: 'Indexing every lifecycle transition to Elasticsearch synchronously would block the Kafka consumer loop if Elasticsearch had any latency or downtime.',
          solution: 'Made Elasticsearch indexing fire-and-forget with an in-memory buffer that flushes on a 50-document batch or a 5-second timer, whichever comes first, so an ES outage never stalls lifecycle processing.',
        },
      ],
      techGroups: [
        { category: 'Runtime', items: ['Python 3.11+', 'asyncio'] },
        { category: 'Messaging', items: ['aiokafka', '5 Kafka topics'] },
        { category: 'Database', items: ['PostgreSQL', 'asyncpg', 'LISTEN/NOTIFY'] },
        { category: 'Scheduling', items: ['APScheduler (AsyncIOScheduler)'] },
        { category: 'Cache', items: ['Redis (trial tracking)'] },
        { category: 'Audit & search', items: ['Elasticsearch (rolling monthly indices)'] },
        { category: 'Secrets', items: ['Infisical'] },
      ],
      results: [
        'One object tracked by N clients now produces exactly one crawl job per due interval, not N.',
        'Lifecycle state changes reschedule crawl cadence in real time via database notification, with no polling delay.',
        'Three independent duplicate-message guards make the pipeline safe against Kafka redelivery and consumer rebalances.',
        'Objects can no longer get permanently stuck in a trial state — stale trials auto-graduate to dormant.',
        'A full audit trail exists end to end: every lifecycle transition, every dispatched job, and every crawl result is recorded.',
      ],
    },
  },
  {
    visual: 'youtubecrawler',
    gradient: 'linear-gradient(145deg,#0d1424,#0a1c28)',
    numLabel: '08 / 17',
    tagLabel: 'youtube data api v3 crawler',
    type: 'Production · Crawler',
    year: '2026',
    title: 'YouTube',
    titleAccent: 'Crawler',
    tagline: 'A keyword + channel crawler that leases its own YouTube API keys from the credential hub and hands them back the moment quota runs out.',
    description:
      'A multi-pipeline YouTube crawler covering keyword search, channel video discovery, and Shorts — combining homepage web-scraping with the official YouTube Data API v3 for detail enrichment. Every job checks out a YouTube API key from the Async Connection Registry\'s sibling system, the ACIS Credential Hub, before crawling, and reports the outcome back so a quota-exhausted key gets auto-suspended instead of silently failing the next hundred jobs.',
    impact:
      'YouTube quota exhaustion stopped being a manual fire-drill — a key hitting quotaExceeded gets reported and suspended automatically, and the next job just leases a different key. Per-video and per-job deduplication in Redis means a crawler restart after a crash never re-charges API quota for videos already processed.',
    stack: ['Python', 'asyncio', 'httpx', 'YouTube Data API v3', 'Kafka', 'Beanstalkd', 'Redis', 'MongoDB', 'PostgreSQL'],
    detail: {
      slug: 'youtube-crawler',
      metrics: [
        { value: '3', label: 'Crawl pipelines (keyword, channel, shorts)' },
        { value: '300s', label: 'API key lease duration' },
        { value: '401/403/429', label: 'Auto-suspend status codes' },
        { value: '1h', label: 'Per-job Redis dedup TTL' },
      ],
      overview:
        'YouTube crawling has two very different failure modes that need different tools: discovering new content (search results, channel uploads) is best done by scraping the page directly, while getting reliable structured detail (view counts, channel stats, publish dates) is best done through the official Data API v3 — which is quota-limited per key. This crawler combines both: it scrapes YouTube\'s own search and channel pages to discover candidate videos, then calls the Data API for the authoritative detail on each one, leasing an API key from the ACIS Credential Hub for every job instead of holding a single static key that would get exhausted and silently break every crawler sharing it.',
      layers: [
        { name: 'Discovery layer', detail: 'Scrapes YouTube\'s own search results page or a channel\'s video listing directly — extracting the embedded ytInitialData JSON rather than calling any API, since discovery doesn\'t need authoritative data, just candidate video IDs.' },
        { name: 'Credential layer', detail: 'Checks out a YouTube Data API v3 key from the ACIS Credential Hub for the duration of one job (a 300-second lease) instead of using a static key baked into config — the same credential service that manages RapidAPI keys and social account sessions elsewhere in the platform.' },
        { name: 'Enrichment layer', detail: 'Calls the official YouTube Data API v3 per discovered video and per channel to pull authoritative statistics, metadata, and channel info that scraping alone can\'t reliably provide.' },
        { name: 'Deduplication layer', detail: 'Checks Redis before processing a video or replaying a job, so a crawler restart after a crash never reprocesses (and re-charges quota for) work already done.' },
        { name: 'Signal layer', detail: 'Reports per-job success or failure back to Kafka in the same envelope shape the platform\'s lifecycle orchestrator expects, and reports the API key\'s outcome back to the credential hub so quota exhaustion gets acted on immediately.' },
      ],
      architecture:
        'Jobs arrive over Beanstalkd queues (one per pipeline: keyword search, channel video listing, and a video-detail enrichment queue fed by the channel pipeline) rather than directly from Kafka — a bridging stage upstream translates the platform\'s Kafka job dispatch into these queue-specific jobs. Every job\'s first action is a credential-hub checkout call, and its last action — success or failure — is a credential-hub release call carrying the HTTP status that resulted, so the hub can decide whether that key is still healthy. Output goes two directions: enriched video/channel data to Kafka topics for downstream consumers, and a success/failure signal to the exact topics the platform\'s lifecycle orchestrator listens on.',
      pipelineTracks: [
        {
          name: 'Keyword search pipeline',
          steps: [
            { label: 'Lease an API key', detail: 'Checks out a YouTube Data API v3 key from the ACIS Credential Hub with a 300-second lease before doing any work for the job.' },
            { label: 'Scrape search results', detail: 'Fetches YouTube\'s own search results page, extracts the embedded ytInitialData JSON, and pulls candidate video IDs — retrying up to 3 times, falling back from a filtered to an unfiltered query if the first attempt returns zero results.' },
            { label: 'Enrich via Data API', detail: 'Calls the Data API\'s /videos endpoint per candidate to pull authoritative statistics and metadata, watching the raw response for "quotaExceeded" rather than trusting the HTTP status code alone.' },
            { label: 'Report & release', detail: 'On success, releases the key clean; on a quota error, releases it with the failing status so the credential hub can auto-suspend it — then publishes the enriched results to Kafka and a success/failure signal back to the lifecycle pipeline.' },
          ],
        },
        {
          name: 'Channel → video detail pipeline',
          steps: [
            { label: 'Resolve channel ID', detail: 'Looks up the channel by name in a MongoDB cache first; only falls back to an external resolution call if it\'s never been seen before, then caches the result.' },
            { label: 'List channel videos', detail: 'Scrapes the channel\'s video listing page for video IDs, checking each one against a Redis dedup key before queueing it for detail enrichment — already-seen videos are skipped entirely.' },
            { label: 'Enrich each video', detail: 'A second worker stage pulls video detail and channel detail from the Data API for every new video ID and merges them into one record.' },
            { label: 'Publish', detail: 'Enriched channel video data is published to its own Kafka topic, separate from the keyword pipeline\'s output.' },
          ],
        },
      ],
      components: [
        { tag: 'KW', name: 'YoutubeKeyword', role: 'Scrapes search results and enriches matches via the Data API', tech: 'Python · httpx' },
        { tag: 'CH', name: 'YoutubeGetVideos', role: 'Lists a channel\'s videos and queues new ones for detail enrichment', tech: 'Python · MongoDB' },
        { tag: 'PD', name: 'YoutubeCrawlerPodcast', role: 'Fetches video + channel detail from the Data API and merges them', tech: 'Python · YouTube Data API v3' },
        { tag: 'SH', name: 'YoutubeShorts', role: 'Crawls Shorts from a channel using continuation-token pagination', tech: 'Python' },
        { tag: 'TR', name: 'YoutubeTranscript', role: 'Fetches closed captions in a prioritized language order', tech: 'youtube-transcript-api' },
        { tag: 'CC', name: 'CredentialClient', role: 'Checks out and releases YouTube API keys per job from the credential hub', tech: 'ACIS Credential Hub API' },
      ],
      challenges: [
        {
          problem: 'A single static YouTube API key shared across crawler instances would get rate-limited or quota-exhausted and silently break every job using it until someone noticed and rotated it manually.',
          solution: 'Leased a fresh API key from the ACIS Credential Hub per job instead of a static config value, and reported the real HTTP outcome back so a quota-exhausted key gets auto-suspended by the hub the moment it fails — the same suspend-on-403/429 mechanism the hub uses for RapidAPI keys.',
        },
        {
          problem: 'YouTube doesn\'t always return a clean HTTP error for quota exhaustion — sometimes a 200 response body just contains a "quotaExceeded" error payload.',
          solution: 'Inspected the raw response body for the "quotaExceeded" string rather than trusting the HTTP status code alone, and treated that as equivalent to a hard failure for credential-hub reporting purposes.',
        },
        {
          problem: 'A crawler restart after a crash mid-job could reprocess videos already fetched, wasting API quota on duplicate work.',
          solution: 'Cached every processed video ID in Redis before moving on, checked it before starting work on any video, and cached job-level keys with a 1-hour TTL so a restarted job skips what it already finished.',
        },
        {
          problem: 'Discovering new videos via the official API costs quota just to search, but scraping YouTube\'s search page directly can return zero results if the query or filters don\'t match the page\'s expected shape.',
          solution: 'Used web scraping for discovery (free, no quota) with a 3-attempt retry that falls back from a filtered search URL to an unfiltered one if the first attempt yields zero results, reserving paid API quota for the detail-enrichment step that actually needs authoritative data.',
        },
      ],
      techGroups: [
        { category: 'Language', items: ['Python', 'asyncio'] },
        { category: 'HTTP', items: ['httpx', 'requests'] },
        { category: 'YouTube access', items: ['YouTube Data API v3', 'web scraping (ytInitialData)', 'youtube-transcript-api'] },
        { category: 'Queues', items: ['Beanstalkd', 'Apache Kafka'] },
        { category: 'Storage', items: ['MongoDB (channel cache)', 'PostgreSQL (job config)', 'Redis (dedup)'] },
        { category: 'Credentials', items: ['ACIS Credential Hub (checkout/release)', 'Infisical'] },
      ],
      results: [
        'YouTube API quota exhaustion is handled automatically — a key that fails gets suspended by the credential hub instead of breaking every subsequent job silently.',
        'Per-video and per-job deduplication in Redis means crawler restarts never re-charge quota for already-completed work.',
        'Discovery (scraping) and enrichment (official API) are cleanly separated, so quota is spent only where authoritative data is actually required.',
        'Crawl outcomes are reported in the exact signal shape the platform\'s lifecycle orchestrator already expects, so this crawler plugs into the existing scheduling loop without special-casing.',
      ],
    },
  },
  {
    reversed: true,
    visual: 'playwrightbrowser',
    gradient: 'linear-gradient(145deg,#0a1420,#0d1c28)',
    numLabel: '09 / 17',
    tagLabel: 'headless browser response interception',
    type: 'Production · Crawler',
    year: '2026',
    title: 'Twitter/X',
    titleAccent: 'Playwright Engine',
    tagline: 'A headless-browser crawler that reads Twitter\'s own internal API responses instead of scraping the DOM, with its own account pool to survive session bans.',
    description:
      'A Playwright-driven crawler covering keyword search, account timelines, tweet reply threads, and Twitter Communities — for a platform whose UI is virtually unparseable by static HTML scraping. Rather than scraping rendered markup, it drives a real headless Chromium browser, simulates human scrolling, and intercepts the JSON responses Twitter\'s own frontend uses internally, extracting structured tweet data directly from those payloads.',
    impact:
      'Survives Twitter\'s session bans and rate limits without manual intervention — a logged-out or suspended session is detected and rotated out of an account pool automatically, and rate-limit headers are read directly so the crawler backs off on its own schedule instead of getting hard-banned. Checkpointing means restarting a keyword crawl never re-fetches tweets already seen.',
    stack: ['Python', 'Playwright', 'Chromium', 'Kafka', 'Beanstalkd', 'Redis', 'SSDB', 'Sentry'],
    detail: {
      slug: 'twitter-playwright-engine',
      metrics: [
        { value: '4', label: 'Crawl modes (search, timeline, replies, communities)' },
        { value: '50', label: 'Max scroll iterations per job' },
        { value: '3', label: 'Session-health failure signals detected' },
        { value: '0', label: 'DOM selectors — reads API responses instead' },
      ],
      overview:
        'Twitter/X\'s web UI is a heavily obfuscated, constantly-changing single-page app — scraping its rendered DOM directly is fragile and breaks on every redesign. This crawler takes a different approach entirely: it drives a real headless Chromium browser with Playwright, simulates a human scrolling through a search page, account timeline, reply thread, or community feed, and intercepts the JSON responses that Twitter\'s own frontend already fetches internally (the same data the page itself renders from). That JSON is the same shape Twitter\'s own client relies on, so it\'s far more stable than CSS selectors that change with every UI refresh.',
      layers: [
        { name: 'Browser layer', detail: 'Launches a real headless Chromium instance per job via Playwright, with images, media, and stylesheets blocked at the network level to cut bandwidth and speed up page load.' },
        { name: 'Session layer', detail: 'Injects a Twitter account\'s session cookies into the browser context from an internal accounts pool, and sends a periodic heartbeat to Redis so other tooling can see which account is currently in use.' },
        { name: 'Interaction layer', detail: 'Simulates human scrolling by pressing the spacebar repeatedly with a delay between presses, triggering Twitter\'s own infinite-scroll API calls rather than trying to call any endpoint directly.' },
        { name: 'Interception layer', detail: 'Listens for the browser\'s own network responses and pattern-matches on Twitter\'s internal GraphQL operation names (e.g. the search timeline or user-tweets response) to capture structured JSON the moment it arrives.' },
        { name: 'Health & checkpoint layer', detail: 'Watches for redirects to login or a Cloudflare challenge page, watches API error codes for account suspension, and persists the last-seen tweet ID per keyword so a restarted job never re-walks tweets already collected.' },
      ],
      architecture:
        'Four job types (search, account timeline, reply thread, community) arrive over separate Beanstalkd queues and share one base crawl loop that differs only in which URL it navigates to and which response pattern it watches for. Account session cookies come from a lightweight internal accounts API that this crawler queries directly — a simpler, ad-hoc account pool rather than a formal lease/checkout system; the crawler tracks failed accounts in memory and re-fetches a fresh batch when its local pool runs out, rotating away from any account that gets logged out or suspended mid-job. Output splits two ways: raw tweet data goes to platform-specific Kafka topics, and one job-completion signal goes out per job in the same envelope shape the platform\'s lifecycle scheduler expects.',
      pipelineTracks: [
        {
          name: 'Keyword search crawl',
          steps: [
            { label: 'Acquire an account', detail: 'Pulls an active account with session cookies from the internal accounts pool, refilling from the accounts API if the in-memory pool is empty or a previous account just got rotated out.' },
            { label: 'Open & scroll', detail: 'Navigates a real headless browser to the Twitter search results page for the job\'s keyword, then simulates scrolling by repeatedly pressing the spacebar with a short delay between presses, up to a capped number of iterations.' },
            { label: 'Intercept & extract', detail: 'Listens for the browser\'s own search-timeline API response as it loads more results, parsing the tweet objects directly out of that JSON payload rather than reading anything from the page.' },
            { label: 'Checkpoint & stop conditions', detail: 'Compares each tweet against the last-seen tweet ID cached for that keyword and stops early once it reaches already-collected tweets, respecting an optional date-range filter and a rate-limit budget read from response headers.' },
            { label: 'Publish & signal', detail: 'Sends every extracted tweet to a Kafka topic as it\'s found, then reports one job-completion signal (success or failure with reason) once the job finishes.' },
          ],
        },
        {
          name: 'Account health & rotation',
          steps: [
            { label: 'Detect failure signals', detail: 'Watches the current page URL for a redirect to a login flow or a Cloudflare access-challenge page, and inspects API error payloads for the specific error code Twitter uses for a suspended account.' },
            { label: 'Disable & rotate', detail: 'Marks the failing account as unusable for the rest of this process\'s lifetime, clears its cookies from the browser context, and swaps in the next available account from the pool.' },
            { label: 'Refill on exhaustion', detail: 'If every account in the local pool has failed, blocks and retries the accounts API on a fixed interval until a usable account becomes available again, rather than crashing the worker.' },
            { label: 'Respect rate limits proactively', detail: 'Reads the rate-limit-remaining and rate-limit-reset headers off every intercepted API response, and if a job hits zero remaining, stops that job early and sleeps past the reset window before the next one starts.' },
          ],
        },
      ],
      components: [
        { tag: 'SM', name: 'SearchModule', role: 'Drives keyword search crawl jobs and intercepts the search-timeline response', tech: 'Playwright' },
        { tag: 'AM', name: 'AccountModule', role: 'Drives user-timeline crawl jobs and intercepts the user-tweets response', tech: 'Playwright' },
        { tag: 'RM', name: 'ReplyModule', role: 'Drives reply-thread crawl jobs and intercepts the tweet-detail response', tech: 'Playwright' },
        { tag: 'CM', name: 'CommunityModule', role: 'Drives Twitter Community feed crawl jobs', tech: 'Playwright' },
        { tag: 'AP', name: 'AccountPool', role: 'Fetches and rotates Twitter session cookies from an internal accounts API', tech: 'Python · httpx' },
        { tag: 'CK', name: 'CheckpointStore', role: 'Persists the last-seen tweet ID per keyword to avoid re-walking old results', tech: 'SSDB' },
      ],
      challenges: [
        {
          problem: 'Twitter\'s rendered HTML changes constantly and is heavily obfuscated, making CSS-selector-based scraping brittle and high-maintenance.',
          solution: 'Switched entirely to intercepting the same internal API responses Twitter\'s own frontend uses to render the page, which are far more stable than the DOM that\'s built from them.',
        },
        {
          problem: 'A session that gets logged out or suspended mid-crawl would otherwise silently produce empty or broken results for every job after it, with no obvious error.',
          solution: 'Actively watches for login/Cloudflare redirects and Twitter\'s own account-suspension error code, then rotates to a different account from the pool the moment a failure signal appears, instead of trusting that a session stays healthy.',
        },
        {
          problem: 'Hammering Twitter with requests regardless of its own rate-limit signals risks getting accounts banned outright rather than just temporarily throttled.',
          solution: 'Reads the rate-limit-remaining and rate-limit-reset headers directly off intercepted API responses and proactively stops a job early — sleeping past the reset window — instead of waiting to get hard-blocked.',
        },
        {
          problem: 'Re-crawling the same keyword repeatedly would re-fetch tweets already collected, wasting browser time and producing duplicate downstream data.',
          solution: 'Persists the last tweet ID seen per keyword in a durable checkpoint store and stops early once a crawl walks back into already-seen territory.',
        },
      ],
      techGroups: [
        { category: 'Browser automation', items: ['Playwright', 'headless Chromium'] },
        { category: 'Language', items: ['Python'] },
        { category: 'Queues', items: ['Beanstalkd', 'Apache Kafka'] },
        { category: 'Session & dedup', items: ['Redis (heartbeat)', 'SSDB (checkpoint)'] },
        { category: 'Observability', items: ['Sentry', 'Loguru'] },
        { category: 'Secrets', items: ['Infisical'] },
      ],
      results: [
        'Crawl logic survives Twitter UI redesigns because it reads stable internal API payloads instead of brittle CSS selectors.',
        'Session bans and suspensions are detected and rotated past automatically instead of silently breaking every subsequent job.',
        'Proactive rate-limit handling avoids harder account-level bans from ignoring Twitter\'s own throttling signals.',
        'Checkpointed keyword crawls never re-walk already-collected tweets after a restart.',
      ],
    },
  },
  {
    visual: 'facebookcrawler',
    gradient: 'linear-gradient(145deg,#0d1424,#0a1c20)',
    numLabel: '10 / 17',
    tagLabel: 'graphql + leased session crawler',
    type: 'Production · Crawler',
    year: '2026',
    title: 'Facebook',
    titleAccent: 'Crawler',
    tagline: 'A three-mode Facebook crawler that leases a logged-in session from the credential hub, follows Facebook\'s own redirect canonicalization, and classifies posts as page, group, or personal before extracting them.',
    description:
      'A Facebook crawler covering keyword search, public page timelines, and group feeds, all funneling into one shared post-detail enrichment stage. Keyword search results arrive as Facebook\'s redirect-wrapped tracking URLs rather than direct post links, so before any data can be extracted the crawler has to follow that redirect, classify what it actually points to (a group, a page, a personal profile, or a video/reel), and only then fetch the real post content.',

    impact:
      'Removed manual account management entirely — sessions are leased from the credential hub for a 5-minute window per job and released (or reported as failed) automatically, with rate-limited accounts auto-suspended at the hub instead of getting silently reused until banned harder. Tor and rotating-proxy fallbacks keep the crawler running even when a primary route gets blocked.',
    stack: ['Python', 'asyncio', 'Click', 'Kafka', 'Beanstalkd', 'Redis', 'MongoDB', 'Tor'],
    detail: {
      slug: 'facebook-crawler',
      metrics: [
        { value: '3', label: 'Crawl modes (keyword, page, group)' },
        { value: '300s', label: 'Session lease duration' },
        { value: '50', label: 'Max redirect-follow attempts per post' },
        { value: '6', label: 'Rotating proxies + Tor fallback' },
      ],
      overview:
        'Facebook\'s search results, page feeds, and group feeds don\'t hand back clean post URLs — search results in particular come wrapped in Facebook\'s own click-tracking redirect (l.facebook.com), and a feed item might turn out to be a page post, a group post, a personal share, or a video that should really be treated as a Reel. This crawler handles all three discovery modes (keyword search, page timeline, group feed) through one shared pipeline: discover candidate post references, follow and classify each one, then extract the actual content through the credential hub\'s leased Facebook session.',
      layers: [
        { name: 'Discovery layer', detail: 'Three separate entry points (keyword search via GraphQL, page timeline scroll, group feed scroll) all produce a stream of post references that funnel into the same detail-enrichment stage.' },
        { name: 'Session layer', detail: 'Leases a logged-in Facebook session from the ACIS Credential Hub for a 300-second window per job, and releases it — clean on success, flagged with the failing HTTP status on error — so the hub can auto-suspend an account that gets rate-limited.' },
        { name: 'Canonicalization layer', detail: 'Follows Facebook\'s own redirect-wrapped tracking URLs to their real destination, then classifies what that destination actually is — a group post, a page post, a personal share, or a video that needs to be treated as a Reel.' },
        { name: 'Extraction layer', detail: 'Pulls the full post payload (text, media, reactions, comments, author profile) once the post type is known, normalizing all three source types into one consistent output shape.' },
        { name: 'Resilience layer', detail: 'Rotates across proxies and a Tor circuit when a request gets blocked, and detects an account being logged out from the response HTML itself rather than trusting only HTTP status codes.' },
      ],
      architecture:
        'A Click-based CLI dispatches into one of three crawl modes at startup, each backed by the same Controllers base class that owns credential-hub session leasing, Kafka signaling, and the redirect-following/classification logic. Keyword search hits Facebook\'s GraphQL search endpoint directly with a leased session\'s cookies and CSRF token; page and group modes scroll a public feed without needing a logged-in session at all. Every discovered post — regardless of which mode found it — passes through the same detail-enrichment stage before landing on a Kafka topic, so downstream consumers see one consistent post shape no matter where it came from.',
      pipelineTracks: [
        {
          name: 'Keyword search → post detail',
          steps: [
            { label: 'Lease a session', detail: 'Checks out a logged-in Facebook account session from the credential hub with a 300-second lease, then extracts the page\'s CSRF token and GraphQL document ID needed to make authenticated search requests.' },
            { label: 'Search via GraphQL', detail: 'Sends the keyword to Facebook\'s GraphQL search endpoint, paging through up to 3 result pages via cursor-based pagination.' },
            { label: 'Classify each result', detail: 'Buckets every result as a group post, page post, or personal profile share based on its URL shape before deciding how to fetch its detail.' },
            { label: 'Follow & extract', detail: 'Follows Facebook\'s redirect-wrapped tracking URL to the real post, fetches the full content, and normalizes it into the shared post schema.' },
            { label: 'Release & signal', detail: 'Releases the session back to the credential hub (clean on success, with the failing status on error) and reports one job-completion signal once every result has been processed.' },
          ],
        },
        {
          name: 'Page & group feed crawl',
          steps: [
            { label: 'Scroll the public feed', detail: 'Pages through a page or group\'s public feed using cursor-based pagination, without needing a logged-in session for this discovery step.' },
            { label: 'Enrich via detail stage', detail: 'Every post found in the feed passes through the same redirect-classification and extraction stage the keyword pipeline uses, keeping output format identical across all three modes.' },
            { label: 'Dedup against cache', detail: 'Checks each post ID against a Redis cache before re-enriching it, so the same post discovered across multiple feed scrolls isn\'t processed twice.' },
          ],
        },
      ],
      components: [
        { tag: 'PK', name: 'PostKeyword', role: 'Drives GraphQL keyword search and leases the session it needs', tech: 'Python · asyncio' },
        { tag: 'PG', name: 'PageFeed', role: 'Scrolls a public page timeline without requiring a session', tech: 'Python' },
        { tag: 'GR', name: 'GroupFeed', role: 'Scrolls a public group feed without requiring a session', tech: 'Python' },
        { tag: 'DT', name: 'PostDetail', role: 'Follows redirects, classifies post type, extracts full content', tech: 'Python · BeautifulSoup' },
        { tag: 'CH', name: 'CredentialClient', role: 'Leases and releases Facebook sessions from the credential hub', tech: 'ACIS Credential Hub API' },
        { tag: 'PX', name: 'ProxyRotator', role: 'Rotates HTTP proxies and Tor circuits on blocked requests', tech: 'Tor · stem' },
      ],
      challenges: [
        {
          problem: 'Facebook search results don\'t link directly to posts — they\'re wrapped in a click-tracking redirect, and the real destination could be a group, a page, a personal share, or a video that should be treated as a Reel.',
          solution: 'Built a dedicated canonicalization step that follows the redirect to its real URL and classifies the destination by its URL shape before deciding how to extract it, instead of assuming one fixed post type.',
        },
        {
          problem: 'A shared Facebook account session getting rate-limited or logged out would silently break every job using it until someone noticed empty results.',
          solution: 'Leased sessions per-job from the credential hub with a 300-second window, releasing with the real failure status on error so a rate-limited account gets auto-suspended at the hub instead of quietly reused.',
        },
        {
          problem: 'Requests from a single IP get blocked quickly at Facebook\'s scale of anti-bot defenses.',
          solution: 'Layered proxy rotation across several IPs with a Tor circuit as a final fallback, rotating away from whichever route just got blocked.',
        },
        {
          problem: 'Detecting that a session has been logged out by checking only the HTTP status code missed cases where Facebook returned 200 with a login page instead.',
          solution: 'Checks the response HTML itself for login-page markers, treating that as an expired session regardless of what HTTP status came back.',
        },
      ],
      techGroups: [
        { category: 'Language', items: ['Python', 'asyncio'] },
        { category: 'CLI', items: ['Click'] },
        { category: 'Queues', items: ['Beanstalkd', 'Apache Kafka'] },
        { category: 'Session storage', items: ['MongoDB (token metadata)'] },
        { category: 'Anti-detection', items: ['Rotating proxies', 'Tor'] },
        { category: 'Dedup', items: ['Redis'] },
        { category: 'Credentials', items: ['ACIS Credential Hub (checkout/release)', 'Infisical'] },
      ],
      results: [
        'Three discovery modes (keyword, page, group) converge on one consistent post schema through shared detail-enrichment logic.',
        'Rate-limited or logged-out sessions are detected and reported back to the credential hub instead of silently reused.',
        'Redirect-wrapped search results are reliably classified and resolved to their real post type before extraction.',
        'Proxy and Tor fallback keeps the crawler running through IP-level blocks without manual intervention.',
      ],
    },
  },
  {
    reversed: true,
    visual: 'rapidapidual',
    gradient: 'linear-gradient(145deg,#0a1c20,#0d1424)',
    numLabel: '11 / 17',
    tagLabel: 'dual rapidapi key crawler',
    type: 'Production · Crawler',
    year: '2026',
    title: 'TikTok',
    titleAccent: 'Crawler',
    tagline: 'A keyword-and-account TikTok crawler that leases two different RapidAPI keys from the credential hub — one per upstream provider — and self-suspends either one the moment it gets rate-limited.',
    description:
      'A two-pipeline TikTok crawler: one mode searches by keyword through a RapidAPI scraping provider with cursor-and-level-based pagination depth control, the other resolves a username to a numeric user ID and walks their post history through a second RapidAPI provider with a 7-day lookback cutoff. Both pipelines resolve their RapidAPI key from the ACIS Credential Hub before every call and report the outcome back, so a key that starts returning quota errors gets suspended automatically instead of failing silently for every job after it.',
    impact:
      'Quota and rate-limit failures stopped being a manual cleanup task — a key hitting 403 or 429 gets auto-suspended at the hub and the next job simply resolves a different one. Author profile data is cached per username in Redis so enriching ten posts from the same creator costs one profile lookup instead of ten.',
    stack: ['Python', 'asyncio', 'aiohttp', 'RapidAPI', 'Kafka', 'Beanstalkd', 'Redis', 'Infisical'],
    detail: {
      slug: 'tiktok-crawler',
      metrics: [
        { value: '2', label: 'RapidAPI providers (search + account)' },
        { value: '3', label: 'Max pagination depth levels' },
        { value: '7d', label: 'Account-mode lookback cutoff' },
        { value: '403/429', label: 'Auto-suspend trigger codes' },
      ],
      overview:
        'TikTok crawling here splits into two RapidAPI-backed pipelines that solve different problems: keyword search needs depth-controlled pagination to avoid over-fetching low-relevance results, while account crawling needs to resolve a human-readable username into the numeric user ID TikTok\'s mobile API actually requires, then walk that user\'s post history back exactly 7 days. Both pipelines treat their RapidAPI key as a leased, revocable resource from the credential hub rather than a static secret — the same key-lifecycle pattern this team already uses for YouTube and Instagram, applied here to two separate RapidAPI providers at once.',
      layers: [
        { name: 'Search layer', detail: 'Calls a RapidAPI scraping provider\'s feed-search endpoint with cursor-based pagination and a configurable depth limit (level 1-3), re-queueing the job at the next level instead of looping in-process so other jobs aren\'t starved.' },
        { name: 'Account layer', detail: 'Resolves a TikTok username to its numeric user ID via a second RapidAPI provider, then walks that user\'s posts with offset-based pagination until either the page is exhausted or a post older than 7 days is reached.' },
        { name: 'Credential layer', detail: 'Resolves the correct RapidAPI key for whichever provider the active pipeline is calling from the ACIS Credential Hub before every request, and reports the outcome back — including an automatic suspend call the moment a response comes back 403 or 429.' },
        { name: 'Enrichment layer', detail: 'Fetches and caches each post author\'s profile stats in Redis keyed by username, so repeated posts from the same creator within a job reuse one cached lookup instead of repeating it.' },
        { name: 'Normalization layer', detail: 'Maps every provider\'s raw response field names onto one canonical post shape before publishing, so downstream consumers don\'t need to know which RapidAPI provider a given post came from.' },
      ],
      architecture:
        'Two Beanstalkd tubes feed two independent crawl modes that share one credential-hub client and one Redis cache layer but call entirely different RapidAPI hosts. The search pipeline\'s pagination is recursive-by-requeue: rather than looping until exhausted, it increments a level counter and pushes the job back onto its own tube with an updated cursor, letting other queued jobs interleave instead of one job monopolizing a worker. The account pipeline instead loops in-process with an offset cursor, stopping itself once posts cross the 7-day age threshold. Every RapidAPI call — regardless of pipeline — goes through the same resolve-credential → call → report-usage cycle, with the report step responsible for triggering an auto-suspend if the call came back rate-limited.',
      pipelineTracks: [
        {
          name: 'Keyword search pipeline',
          steps: [
            { label: 'Resolve credential', detail: 'Looks up the search provider\'s RapidAPI key from the credential hub and confirms it\'s still active before spending a request on it.' },
            { label: 'Search & paginate', detail: 'Calls the feed-search endpoint with the keyword and cursor, requesting up to 30 results per page.' },
            { label: 'Enrich authors', detail: 'Fetches and Redis-caches each result\'s author profile stats, skipping the lookup entirely if that username was already cached.' },
            { label: 'Requeue or finish', detail: 'If more results remain and the configured depth level hasn\'t been hit, re-queues the job with an incremented level and the new cursor; otherwise reports job completion.' },
          ],
        },
        {
          name: 'Account crawl pipeline',
          steps: [
            { label: 'Resolve username to ID', detail: 'Calls the account provider to translate a TikTok username into the numeric user ID its post-listing endpoint actually requires.' },
            { label: 'Resolve credential', detail: 'Looks up that provider\'s own separate RapidAPI key from the credential hub before making the post-listing call.' },
            { label: 'Walk posts with cutoff', detail: 'Pages through the user\'s posts via offset and max_cursor, stopping as soon as a post older than 7 days appears in a page.' },
            { label: 'Report & release', detail: 'Reports success or failure (including any quota error text) back to the credential hub, which auto-suspends the key on a 403/429 response.' },
          ],
        },
      ],
      components: [
        { tag: 'SP', name: 'SearchPipeline', role: 'Drives keyword search with level-based pagination depth', tech: 'Python · aiohttp' },
        { tag: 'AP', name: 'AccountPipeline', role: 'Resolves usernames to IDs and walks post history with a 7-day cutoff', tech: 'Python · aiohttp' },
        { tag: 'CR', name: 'CredentialResolver', role: 'Resolves and validates RapidAPI keys per provider before each call', tech: 'ACIS Credential Hub API' },
        { tag: 'US', name: 'UsageReporter', role: 'Reports call outcomes back, triggers auto-suspend on 403/429', tech: 'ACIS Credential Hub API' },
        { tag: 'PC', name: 'ProfileCache', role: 'Caches author profile stats per username to skip repeat lookups', tech: 'Redis' },
        { tag: 'MP', name: 'PostMapper', role: 'Normalizes both providers\' response shapes into one canonical post schema', tech: 'Python' },
      ],
      challenges: [
        {
          problem: 'Unbounded keyword-search pagination could fetch hundreds of low-relevance results for a broad keyword, burning RapidAPI quota for little value.',
          solution: 'Added a configurable depth-level cap (1-3) with requeue-based pagination, so each job processes one page then yields back to the queue instead of looping until the API runs out of results.',
        },
        {
          problem: 'TikTok\'s post-listing API only accepts a numeric user ID, not the username operators actually have on hand.',
          solution: 'Added a resolution step that looks up the numeric ID from the username first via the same RapidAPI provider, before the actual post-listing call.',
        },
        {
          problem: 'A RapidAPI key hitting its quota limit would otherwise keep getting used for every subsequent job until someone manually noticed the failures.',
          solution: 'Every call reports its outcome back to the credential hub, and a 403 or 429 response triggers an automatic status update to suspended — the next job resolves a different key without anyone intervening.',
        },
        {
          problem: 'Fetching a fresh author profile for every single post wasted RapidAPI calls when the same creator posted multiple results in one search.',
          solution: 'Cached author profile lookups in Redis keyed by username, checked before making the profile API call so repeat creators within a job only cost one lookup.',
        },
      ],
      techGroups: [
        { category: 'Language', items: ['Python', 'asyncio', 'aiohttp'] },
        { category: 'Queues', items: ['Beanstalkd', 'Apache Kafka'] },
        { category: 'Cache', items: ['Redis (author profile cache)'] },
        { category: 'Credentials', items: ['ACIS Credential Hub (RapidAPI keys: get-one, log-usage, update-status)', 'Infisical'] },
        { category: 'Upstream', items: ['RapidAPI (two TikTok scraping providers)'] },
      ],
      results: [
        'Keyword search pagination depth is configurable instead of unbounded, controlling RapidAPI cost per job.',
        'A rate-limited RapidAPI key is auto-suspended at the credential hub the moment it fails, not after someone notices a pattern of broken jobs.',
        'Account crawls automatically stop at a 7-day cutoff instead of needing a manual page-count limit.',
        'Author profile lookups are cached per job, avoiding redundant RapidAPI calls for posts from the same creator.',
      ],
    },
  },
  {
    visual: 'rapidapidual',
    gradient: 'linear-gradient(145deg,#0d1424,#0a1c20)',
    numLabel: '12 / 17',
    tagLabel: 'hashtag + unlogged account crawler',
    type: 'Production · Crawler',
    year: '2026',
    title: 'Instagram',
    titleAccent: 'Crawler',
    tagline: 'Two crawl engines for one platform — hashtag search through a credential-hub-leased RapidAPI key, account posts through Instagram\'s own unlogged API to avoid paying for what\'s already free.',
    description:
      'An Instagram crawler split deliberately into two different acquisition strategies: hashtag/keyword search goes through a RapidAPI provider (which costs per call but handles anti-bot defenses), while account-by-username crawling hits Instagram\'s own unlogged public API directly (free, but needs its own proxy rotation and stealth headers to avoid getting blocked). The two pipelines don\'t share an upstream, but they do share the same credential-hub-backed RapidAPI key lifecycle, Redis dedup pattern, and output schema as the rest of the crawler fleet.',
    impact:
      'Avoided paying RapidAPI per-call costs for account crawling, which has a free, unauthenticated alternative — while still using the credential hub\'s managed-key pattern for the hashtag pipeline where a paid provider is genuinely necessary. In-job and cross-job deduplication means the same post never gets published twice, whether it shows up twice in one page or across separate crawl runs of the same keyword.',
    stack: ['Python', 'asyncio', 'aiohttp', 'instagrapi', 'RapidAPI', 'Kafka', 'Beanstalkd', 'Redis'],
    detail: {
      slug: 'instagram-crawler',
      metrics: [
        { value: '2', label: 'Acquisition strategies (RapidAPI + unlogged)' },
        { value: '90d', label: 'Account-mode lookback cutoff' },
        { value: '5', label: 'Tag-feed retry attempts' },
        { value: '403/429', label: 'Auto-suspend trigger codes' },
      ],
      overview:
        'Not every data source is worth paying a third-party API for. Instagram\'s hashtag/tag-feed search needs a RapidAPI provider to reliably get past anti-bot defenses, so that pipeline leases a managed key from the credential hub like the TikTok and YouTube crawlers do. But fetching a public account\'s own posts is something Instagram\'s unauthenticated web API already supports directly — paying RapidAPI for that would be pure overhead. So this crawler runs two genuinely different acquisition strategies side by side, normalizing both into the same post schema before anything reaches Kafka.',
      layers: [
        { name: 'Hashtag layer', detail: 'Splits a job\'s keyword field on whitespace into individual hashtags (the upstream tag-feed endpoint only accepts one hashtag per call) and crawls each separately through a RapidAPI provider leased from the credential hub.' },
        { name: 'Account layer', detail: 'Crawls a username\'s public posts directly through Instagram\'s own unlogged API, with no RapidAPI dependency, using proxy rotation and browser-header spoofing to stay under anti-bot detection.' },
        { name: 'Pagination layer', detail: 'Hashtag pagination re-queues the job to Beanstalkd with an updated cursor for the next page; account pagination loops in-process with a max_id cursor until either pages run out or a post crosses a 90-day age cutoff.' },
        { name: 'Deduplication layer', detail: 'Tracks post IDs already seen within the current job in memory, and separately clears a Redis-cached job key once a crawl completes so the same keyword or account isn\'t immediately re-queued.' },
        { name: 'Credential layer', detail: 'Only the hashtag pipeline touches the credential hub — resolving its RapidAPI key before each call and reporting usage back, including an automatic suspend on a 403 or 429 response.' },
      ],
      architecture:
        'Two independent controller classes — one for hashtags, one for accounts — share a base Controllers class and the same output schema, but diverge completely in how they acquire data. The hashtag controller is RapidAPI-dependent and credential-hub-aware; the account controller wraps Instagram\'s own private mobile-style API directly and instead leans on proxy rotation and spoofed browser headers for stealth, since there\'s no managed key to lease for a source that isn\'t actually a paid API. Both still publish through the same Kafka output driver and report job completion through the same signal format the platform\'s lifecycle orchestrator expects.',
      pipelineTracks: [
        {
          name: 'Hashtag search pipeline',
          steps: [
            { label: 'Split hashtags', detail: 'Breaks a job\'s keyword field on whitespace into individual hashtags, since the tag-feed endpoint only accepts one hashtag per call.' },
            { label: 'Resolve credential', detail: 'Looks up the RapidAPI key for the tag-feed provider from the credential hub before each hashtag\'s first call.' },
            { label: 'Crawl & paginate', detail: 'Calls the tag-feed endpoint per hashtag, retrying up to 5 times on transient failures, and re-queues the job with an updated cursor if more pages remain for the first hashtag.' },
            { label: 'Report & clean up', detail: 'Reports usage back to the credential hub (triggering auto-suspend on quota errors) and clears the job\'s Redis cache key once every hashtag is done.' },
          ],
        },
        {
          name: 'Account crawl pipeline',
          steps: [
            { label: 'Crawl via unlogged API', detail: 'Fetches a username\'s public post feed directly from Instagram\'s own unauthenticated web API, rotating across a proxy pool and spoofed browser headers.' },
            { label: 'Walk with cutoff', detail: 'Pages through posts via a max_id cursor until either no more pages remain or a post older than 90 days appears.' },
            { label: 'Dedup in-job', detail: 'Tracks every post ID already seen in this job in an in-memory set, skipping any post that shows up again across pages.' },
            { label: 'Publish & signal', detail: 'Publishes each new post to Kafka as it\'s found, then reports one job-completion signal once the crawl finishes.' },
          ],
        },
      ],
      components: [
        { tag: 'HT', name: 'HashtagPipeline', role: 'Crawls one hashtag at a time through a leased RapidAPI key', tech: 'Python · aiohttp' },
        { tag: 'AC', name: 'AccountPipeline', role: 'Crawls account posts via Instagram\'s own unlogged API', tech: 'Python · instagrapi' },
        { tag: 'CR', name: 'CredentialResolver', role: 'Resolves and reports RapidAPI key usage for the hashtag pipeline only', tech: 'ACIS Credential Hub API' },
        { tag: 'PX', name: 'ProxyRotator', role: 'Rotates proxies and spoofs headers for the unlogged account pipeline', tech: 'Python · httpx' },
        { tag: 'DD', name: 'InJobDedup', role: 'Tracks seen post IDs within a single crawl job to prevent re-publishing', tech: 'In-memory set' },
      ],
      challenges: [
        {
          problem: 'Paying a per-call RapidAPI fee for account post crawling would be wasted cost when Instagram\'s own unauthenticated API already exposes that data for free.',
          solution: 'Built two separate acquisition pipelines instead of forcing everything through one paid provider — hashtag search uses RapidAPI where it\'s genuinely needed, account crawling goes straight to Instagram\'s unlogged API with its own stealth measures.',
        },
        {
          problem: 'The tag-feed API only accepts one hashtag per call, but job keywords could contain multiple space-separated hashtags.',
          solution: 'Split the keyword field into individual hashtags upfront and crawled each one as its own sub-request within the same job.',
        },
        {
          problem: 'A post appearing twice across paginated results (a common artifact of cursor-based feeds) would otherwise get published to Kafka twice.',
          solution: 'Tracked every post ID seen so far within the job in an in-memory set and skipped any repeat before it reached the output stage.',
        },
      ],
      techGroups: [
        { category: 'Language', items: ['Python', 'asyncio', 'aiohttp'] },
        { category: 'Queues', items: ['Beanstalkd', 'Apache Kafka'] },
        { category: 'Dedup & cache', items: ['Redis', 'in-memory per-job set'] },
        { category: 'Credentials', items: ['ACIS Credential Hub (RapidAPI keys, hashtag pipeline only)', 'Infisical'] },
        { category: 'Upstream', items: ['RapidAPI (hashtag/tag-feed)', 'Instagram unlogged web API (account)'] },
      ],
      results: [
        'Account crawling costs nothing in RapidAPI fees by using Instagram\'s own free unlogged API instead of a paid provider.',
        'Hashtag search still benefits from credential-hub-managed key rotation and auto-suspend where a paid provider is actually required.',
        'In-job deduplication prevents the same post from being published twice within one paginated crawl.',
        'Both acquisition strategies converge on one consistent post schema, so downstream consumers don\'t need to know which pipeline a post came from.',
      ],
    },
  },
  {
    reversed: true,
    visual: 'threadscrawler',
    gradient: 'linear-gradient(145deg,#0a1c20,#0d1424)',
    numLabel: '13 / 17',
    tagLabel: 'graphql crawler with its own session pool',
    type: 'Production · Crawler',
    year: '2026',
    title: 'Threads',
    titleAccent: 'Crawler',
    tagline: 'A Threads.net crawler with its own MongoDB-backed account pool — built before the platform-wide credential hub existed, and never migrated onto it.',
    description:
      'A multi-mode Threads.net crawler covering account timelines, keyword search, post detail, comment threads, and Threads Communities, all driven through GraphQL requests against Threads\' own internal API. Account sessions (cookies, CSRF token, session ID — the same field shape the platform\'s later credential hub eventually standardized on) are sourced from a dedicated MongoDB collection this crawler manages itself, rather than from the centralized credential service used by the Facebook, TikTok, and Instagram crawlers.',
    impact:
      'Sustains high-volume Threads crawling across five distinct modes with browser-grade anti-detection (rotating proxies, Tor fallback, request-header spoofing matched to Threads\' own internal client) without needing a separate session-leasing service. A separate keyword pusher polls a Postgres-backed keyword list independently of the crawl workers, decoupling scheduling from throughput.',
    stack: ['Python', 'asyncio', 'Playwright', 'Kafka', 'Beanstalkd', 'MongoDB', 'PostgreSQL', 'Redis'],
    detail: {
      slug: 'threads-crawler',
      metrics: [
        { value: '5', label: 'Crawl modes (account, keyword, detail, comment, community)' },
        { value: '5', label: 'Max iterations per pagination job' },
        { value: '4', label: 'HTTP statuses that trigger account rotation' },
        { value: '0', label: 'Calls to the platform credential hub' },
      ],
      overview:
        'This crawler predates the platform\'s centralized credential hub — or at least was never migrated onto it — and instead manages its own pool of logged-in Threads accounts directly in MongoDB. The account documents store exactly the cookie fields (csrftoken, sessionid, ds_user_id, and others) that the platform\'s later credential hub schema would standardize for Threads/Instagram-style sessions, which says something about how that schema came to exist: this crawler\'s session shape predates and likely informed it, even though the two were never wired together.',
      layers: [
        { name: 'Account session layer', detail: 'Loads active accounts directly from a dedicated MongoDB collection rather than leasing them from a centralized credential service, marking an account "blocked" in that same collection when it gets rate-limited.' },
        { name: 'Request layer', detail: 'Builds GraphQL requests against Threads\' internal API with spoofed app-identity headers and dozens of internal feature-flag variables that mimic a real logged-in mobile client rather than an obvious bot.' },
        { name: 'Pagination layer', detail: 'Walks cursor-based GraphQL pagination up to a fixed iteration cap per job, covering account timelines, keyword search results, and comment threads with the same pattern.' },
        { name: 'Resilience layer', detail: 'Rotates to a different pooled account immediately on a login redirect, a Cloudflare challenge, or specific HTTP error codes, retrying the same request a few times with a fixed delay before giving up.' },
        { name: 'Scheduling layer', detail: 'A separate pusher process polls a PostgreSQL keyword table on its own interval and pushes new keyword jobs onto Beanstalkd, decoupling what to crawl next from how fast workers can keep up.' },
      ],
      architecture:
        'Five crawl modes (account timeline, keyword search, post detail, comments, community feed) each implement the same shape — build request, paginate, detect failure, rotate account — against Threads\' GraphQL endpoint, differing mainly in which GraphQL document ID and response path they target. A second, independent process (the pusher) decouples scheduling from crawling: it polls a Postgres keyword table every 10 minutes and pushes due keywords onto Beanstalkd, guarding against double-queueing the same keyword with a short-lived Redis flag. The crawl workers themselves never touch Postgres — they only consume from Beanstalkd and read/write account state in MongoDB.',
      pipelineTracks: [
        {
          name: 'Account timeline crawl',
          steps: [
            { label: 'Load an active account', detail: 'Queries MongoDB for an account currently marked active, and builds the cookie set (csrftoken, sessionid, ds_user_id, and related fields) Threads\' GraphQL endpoint expects.' },
            { label: 'Request with spoofed identity', detail: 'Sends the GraphQL request with a real browser user-agent and a long list of internal feature-flag variables designed to read as an authentic, logged-in mobile client.' },
            { label: 'Paginate posts', detail: 'Walks the account\'s timeline via cursor-based pagination, capped at 5 iterations per job, deduplicating against Redis so a post already seen for this account isn\'t re-published.' },
            { label: 'Detect & rotate on failure', detail: 'Watches the response for a login redirect, a Cloudflare challenge, or an explicit account-suspended error code, and immediately swaps to a different pooled account if any of those appear.' },
            { label: 'Publish & signal', detail: 'Publishes each new post to Kafka as it\'s found, then reports a job-completion signal once pagination finishes or the iteration cap is hit.' },
          ],
        },
        {
          name: 'Keyword scheduling & search',
          steps: [
            { label: 'Poll for due keywords', detail: 'A separate pusher process queries a PostgreSQL keyword table on a fixed interval for keywords due to be crawled again.' },
            { label: 'Guard against double-queueing', detail: 'Checks a short-TTL Redis flag before pushing a keyword to Beanstalkd, so a keyword already in flight isn\'t queued a second time.' },
            { label: 'Search via GraphQL', detail: 'A crawl worker picks up the keyword job and runs the same GraphQL-request-and-paginate pattern as the account pipeline, targeting Threads\' search document instead.' },
            { label: 'Clean up & signal', detail: 'Clears the in-flight Redis flag once the keyword crawl completes and reports the job-completion signal.' },
          ],
        },
      ],
      components: [
        { tag: 'AT', name: 'AccountTimeline', role: 'Crawls a single account\'s post history via GraphQL pagination', tech: 'Python · asyncio' },
        { tag: 'KW', name: 'KeywordSearch', role: 'Crawls Threads search results for a keyword', tech: 'Python · asyncio' },
        { tag: 'PD', name: 'PostDetail', role: 'Fetches a single post\'s full detail and reply thread', tech: 'Python' },
        { tag: 'CM', name: 'CommentCrawler', role: 'Walks a post\'s threaded comment/reply chain', tech: 'Python' },
        { tag: 'AP', name: 'AccountPool', role: 'Manages active/blocked account state directly in MongoDB', tech: 'MongoDB' },
        { tag: 'PU', name: 'KeywordPusher', role: 'Polls PostgreSQL on an interval and schedules keyword jobs', tech: 'PostgreSQL · Beanstalkd' },
      ],
      challenges: [
        {
          problem: 'Threads\' GraphQL backend is the same one Instagram\'s mobile client uses internally, and treats anything that doesn\'t look like a real logged-in app session as suspicious.',
          solution: 'Spoofed the full set of internal feature-flag variables and headers a real Threads mobile client sends, rather than a minimal request that would stand out as automated.',
        },
        {
          problem: 'A single shared account hitting a rate limit or getting logged out would otherwise break every subsequent job using it.',
          solution: 'Watches for three distinct failure signals (login redirect, Cloudflare challenge, account-suspended error code) and rotates to a different pooled account from MongoDB the instant any of them appears.',
        },
        {
          problem: 'Decoupling "what to crawl" from "how fast workers can crawl it" needed scheduling logic that didn\'t belong inside the crawl workers themselves.',
          solution: 'Split scheduling into its own pusher process that polls a Postgres keyword table independently and pushes jobs to Beanstalkd, with a Redis flag preventing the same keyword from being queued twice while already in flight.',
        },
      ],
      techGroups: [
        { category: 'Language', items: ['Python', 'asyncio'] },
        { category: 'Browser automation', items: ['Playwright'] },
        { category: 'Queues', items: ['Beanstalkd', 'Apache Kafka'] },
        { category: 'Session storage', items: ['MongoDB (self-managed account pool)'] },
        { category: 'Scheduling source', items: ['PostgreSQL (keyword table)'] },
        { category: 'Dedup & coordination', items: ['Redis'] },
        { category: 'Anti-detection', items: ['Rotating proxies', 'Tor'] },
      ],
      results: [
        'Five distinct Threads crawl modes share one resilient request-paginate-rotate pattern instead of five separate implementations.',
        'Account rotation on rate-limit or session expiry happens automatically within the same job, not as a manual follow-up.',
        'Keyword scheduling is fully decoupled from crawl throughput via an independent pusher process.',
        'Operates with its own self-managed account pool, independent of the platform\'s shared credential service — a deliberate architectural difference worth knowing about when reasoning across the crawler fleet.',
      ],
    },
  },
  {
    visual: 'fanoutrouter',
    gradient: 'linear-gradient(145deg,#0d1424,#0a1c20)',
    numLabel: '14 / 17',
    tagLabel: 'kafka-to-beanstalkd fan-out router',
    type: 'Production · Router',
    year: '2026',
    title: 'ACIS',
    titleAccent: 'Pusher',
    tagline: 'The single bridge between the lifecycle orchestrator\'s job dispatch and an entire crawler fleet — and the reason none of those crawlers need to know Kafka exists.',
    description:
      'A small, deliberately simple Python service that consumes the platform\'s lifecycle orchestrator\'s job-dispatch topic and routes each message onto the exact Beanstalkd tube the right platform-specific crawler is already watching — derived purely from two fields in the message, with zero hardcoded platform mappings. Every crawler in the fleet (TikTok, Instagram, Facebook, Threads, YouTube, Twitter) consumes from Beanstalkd, never from Kafka directly; this service is the only thing that bridges the two.',
    impact:
      'New platforms can be onboarded to the crawler fleet without a single code change to this router — the tube name is computed from the job\'s platform and object-type fields, so a brand-new platform just starts working the moment a crawler subscribes to the tube its jobs would naturally route to. A short-lived Redis dedup window absorbs the lifecycle orchestrator\'s recurring dispatch cadence without ever double-queueing the same object.',
    stack: ['Python', 'kafka-python', 'Beanstalkd', 'Redis', 'Infisical'],
    detail: {
      slug: 'acis-pusher',
      metrics: [
        { value: '0', label: 'Hardcoded platform → tube mappings' },
        { value: '240s', label: 'Dedup TTL (below the fastest dispatch interval)' },
        { value: '3', label: 'Retry attempts per publish, with backoff' },
        { value: '1', label: 'Kafka topic in, N Beanstalkd tubes out' },
      ],
      overview:
        'Every crawler in this fleet was built to consume jobs from a Beanstalkd tube, not from Kafka — simpler for each crawler to implement, and decoupled from the lifecycle orchestrator\'s own Kafka-centric scheduling. This router is the seam between those two worlds: it consumes the orchestrator\'s job-dispatch topic, derives a Beanstalkd tube name purely from the message\'s `platform` and `object.type` fields (`acis_{platform}_{object_type}`), and publishes there — with a Redis-backed dedup window absorbing the orchestrator\'s recurring dispatch cadence so the same object isn\'t pushed onto the queue twice in quick succession.',
      layers: [
        { name: 'Consumption layer', detail: 'Consumes the lifecycle orchestrator\'s job-dispatch topic with manual offset commits, so a message\'s Kafka offset only advances after it has actually been published downstream and recorded.' },
        { name: 'Routing layer', detail: 'Computes the destination Beanstalkd tube name directly from the message\'s platform and object-type fields — there is no lookup table or hardcoded mapping, so a new platform just works the moment a crawler is watching the tube its name would produce.' },
        { name: 'Deduplication layer', detail: 'Checks and sets a Redis key per object before publishing, with a TTL deliberately kept shorter than the fastest dispatch interval the orchestrator uses, so a recurring object can be re-published once that TTL lapses rather than being permanently blocked.' },
        { name: 'Delivery layer', detail: 'Publishes to Beanstalkd through a pool of lazily-created tube connections, retrying with exponential backoff and evicting a dead connection so the next attempt opens a fresh one.' },
        { name: 'Durability layer', detail: 'Only commits the Kafka offset after both the Beanstalkd publish and the Redis dedup write succeed, so a crash mid-pipeline replays the message instead of silently dropping it.' },
      ],
      architecture:
        'A single consumer loop pulls one message at a time from the orchestrator\'s Kafka topic, validates it against a strict schema, enriches it with default search-criteria metadata, computes its destination tube, checks Redis for a recent duplicate, and — if it\'s new — publishes to Beanstalkd and records the dedup key before finally committing the Kafka offset. Every step that talks to an external system (Beanstalkd, Redis) retries up to three times with exponential backoff before giving up, and the dedup check itself fails open: if Redis is unreachable, the message is treated as new rather than stalling the whole pipeline waiting for Redis to recover.',
      pipelineTracks: [
        {
          name: 'Message routing flow',
          steps: [
            { label: 'Consume & validate', detail: 'Pulls one message from the lifecycle orchestrator\'s dispatch topic and validates it against a strict schema before doing anything else with it.' },
            { label: 'Enrich', detail: 'Adds default search-criteria metadata (language, category, source) if the message doesn\'t already carry it, so every downstream crawler receives a consistent shape.' },
            { label: 'Check dedup', detail: 'Builds a Redis key from the platform, object type, and object name, and checks whether it already exists — a hit means this object was already routed recently and the message is dropped here.' },
            { label: 'Route & publish', detail: 'Computes the Beanstalkd tube name from the platform and object-type fields and publishes the message there, retrying with backoff on transient connection failures.' },
            { label: 'Record & commit', detail: 'Writes the dedup key to Redis with a TTL shorter than the fastest dispatch interval, then commits the Kafka offset — only after both prior steps succeeded.' },
          ],
        },
      ],
      components: [
        { tag: 'KC', name: 'KafkaConsumer', role: 'Consumes the lifecycle orchestrator\'s dispatch topic with manual offset commits', tech: 'kafka-python' },
        { tag: 'MM', name: 'AcisMessage', role: 'Validates incoming messages and derives the destination tube name', tech: 'Python dataclass' },
        { tag: 'TP', name: 'TubePool', role: 'Lazily creates and reuses Beanstalkd connections per tube', tech: 'Beanstalkd' },
        { tag: 'BP', name: 'BeanstalkPublisher', role: 'Publishes with retry + exponential backoff, evicting dead connections', tech: 'Beanstalkd' },
        { tag: 'RP', name: 'RedisPublisher', role: 'Fail-open dedup check and TTL-bound key storage', tech: 'Redis' },
      ],
      challenges: [
        {
          problem: 'Every crawler in the fleet was built around consuming from Beanstalkd, but the lifecycle orchestrator dispatches jobs over Kafka — these two needed a bridge that didn\'t require rewriting either side.',
          solution: 'Built a minimal router whose only job is translating one Kafka message into one Beanstalkd publish, keeping both sides of the fleet exactly as they already were.',
        },
        {
          problem: 'Onboarding a new platform to the crawler fleet shouldn\'t require touching this router\'s code every time.',
          solution: 'Derived the destination tube name purely from the message\'s own platform and object-type fields instead of a hardcoded lookup table — a new platform starts working the instant a crawler subscribes to the tube its own jobs would compute to.',
        },
        {
          problem: 'The lifecycle orchestrator dispatches the same object repeatedly at its computed interval — routing every single dispatch would re-queue objects far more often than any crawler needs.',
          solution: 'Added a Redis dedup window with a TTL deliberately set below the orchestrator\'s fastest dispatch interval, so a recurring object is only routed once per window instead of on every dispatch.',
        },
        {
          problem: 'Committing a Kafka offset before confirming the message actually reached Beanstalkd would silently drop messages on a mid-pipeline crash.',
          solution: 'Disabled auto-commit entirely and only commit the offset manually after both the Beanstalkd publish and the Redis dedup write have succeeded.',
        },
      ],
      techGroups: [
        { category: 'Language', items: ['Python'] },
        { category: 'Input', items: ['Apache Kafka (kafka-python)'] },
        { category: 'Output', items: ['Beanstalkd'] },
        { category: 'Dedup', items: ['Redis (fail-open)'] },
        { category: 'Secrets', items: ['Infisical'] },
      ],
      results: [
        'The entire crawler fleet (TikTok, Instagram, Facebook, Threads, YouTube, Twitter) stays decoupled from Kafka — only this router talks to both sides.',
        'New platforms route correctly with zero code changes to this service.',
        'Recurring dispatches from the lifecycle orchestrator are deduplicated within a tunable window instead of flooding crawler queues.',
        'A crash between Kafka consumption and Beanstalkd delivery never silently drops a job — the message replays instead.',
      ],
    },
  },
];

export type SmallProject = {
  slug: string;
  type: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  metrics: Metric[];
  overview: string;
  layers: ArchitectureLayer[];
  architecture: string;
  pipelineTracks: PipelineTrack[];
  components: Component[];
  challenges: Challenge[];
  techGroups: TechGroup[];
  results: string[];
};

export const smallProjects: SmallProject[] = [
  {
    slug: 'automated-ingestion-etl-framework',
    type: 'Internal · Framework',
    year: '2024',
    title: 'Automated Ingestion & ETL Framework',
    description:
      'Modular framework handling batch + streaming ingestion from external APIs. Scheduling and monitoring eliminated most manual reprocessing work for the team.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    metrics: [
      { value: '2', label: 'Ingestion modes (batch + streaming)' },
      { value: '0', label: 'Manual reprocessing needed' },
      { value: 'Auto', label: 'Retry with backoff' },
    ],
    overview:
      'Before this framework, every external API integration was a one-off script. This framework standardizes batch and streaming ingestion behind a single scheduling and monitoring layer, so the team stopped manually re-running failed jobs.',
    layers: [
      { name: 'Scheduling layer', detail: 'FastAPI exposes job registration with a batch interval or streaming trigger per job.' },
      { name: 'Execution layer', detail: 'Each job pulls from its registered external API source on its own schedule.' },
      { name: 'Monitoring layer', detail: 'Status, row counts, and failure reasons are written to PostgreSQL for every run.' },
      { name: 'Recovery layer', detail: 'Failed jobs are automatically rescheduled with backoff instead of needing a human to notice and rerun them.' },
    ],
    architecture:
      'A FastAPI service exposes job registration and status endpoints. Redis backs the job scheduler and tracks retry state. PostgreSQL stores ingestion metadata (last run, row counts, failure reason) for every registered job.',
    pipelineTracks: [
      {
        name: 'Job lifecycle',
        steps: [
          { label: 'Register', detail: 'New ingestion jobs are registered with a schedule (batch interval or streaming trigger).' },
          { label: 'Execute', detail: 'Scheduler triggers jobs via FastAPI, each job pulling from its external API source.' },
          { label: 'Monitor', detail: 'Job status, row counts, and failures are written to PostgreSQL for visibility.' },
          { label: 'Retry', detail: 'Failed jobs are automatically rescheduled with backoff instead of needing manual reprocessing.' },
        ],
      },
    ],
    components: [
      { tag: 'JR', name: 'JobRegistry', role: 'Registers ingestion jobs with their schedule type', tech: 'FastAPI' },
      { tag: 'SC', name: 'Scheduler', role: 'Triggers jobs on interval or streaming basis, tracks retry state', tech: 'Redis' },
      { tag: 'MN', name: 'RunMonitor', role: 'Persists run status, row counts, and failure reasons', tech: 'PostgreSQL' },
    ],
    challenges: [
      {
        problem: 'Manual reprocessing of failed ingestion jobs was consuming significant team time.',
        solution: 'Built automatic retry-with-backoff into the scheduler so failures self-heal without intervention.',
      },
    ],
    techGroups: [
      { category: 'Backend', items: ['Python', 'FastAPI'] },
      { category: 'State & scheduling', items: ['Redis'] },
      { category: 'Storage', items: ['PostgreSQL'] },
    ],
    results: ['Eliminated most manual reprocessing work for the team.', 'Standardized batch and streaming ingestion behind one framework.'],
  },
  {
    slug: 'pipeline-monitoring-dashboard',
    type: 'Internal · Tool',
    year: '2024',
    title: 'Pipeline Monitoring Dashboard',
    description:
      'Streamlit dashboard tracking pipeline health across the team with real-time status and automated Telegram alerts on failures. Boring, useful, well-loved.',
    tags: ['Python', 'Streamlit', 'Telegram Bot'],
    metrics: [
      { value: 'Live', label: 'Pipeline health visibility' },
      { value: 'Instant', label: 'Telegram failure alerts' },
      { value: '1', label: 'Shared status source' },
    ],
    overview:
      'A lightweight Streamlit dashboard that gives the whole team real-time visibility into pipeline health, paired with a Telegram bot that pages the right person the moment something breaks — instead of someone noticing hours later.',
    layers: [
      { name: 'Status collection layer', detail: 'Each pipeline writes its run status and metrics into a shared status table after every run.' },
      { name: 'Visualization layer', detail: 'Streamlit polls the status table on an interval and renders health, throughput, and failure widgets.' },
      { name: 'Alerting layer', detail: 'A Telegram bot watches the same status source and pushes a message the instant a pipeline transitions from healthy to failing.' },
    ],
    architecture:
      'Streamlit polls pipeline status tables on an interval and renders health, throughput, and failure widgets. A separate Telegram bot watches the same status source and pushes alerts on state transitions (healthy → failing).',
    pipelineTracks: [
      {
        name: 'Monitoring flow',
        steps: [
          { label: 'Collect status', detail: 'Each pipeline writes its run status and metrics to a shared status table.' },
          { label: 'Render dashboard', detail: 'Streamlit reads the status table and renders live health widgets for the team.' },
          { label: 'Alert', detail: 'Telegram bot detects failures and immediately notifies the relevant channel.' },
        ],
      },
    ],
    components: [
      { tag: 'SB', name: 'StatusBoard', role: 'Streamlit UI rendering live health, throughput, and failure widgets', tech: 'Streamlit' },
      { tag: 'TB', name: 'AlertBot', role: 'Watches status transitions and pushes Telegram notifications', tech: 'Telegram Bot API' },
    ],
    challenges: [
      {
        problem: 'Pipeline failures were often discovered hours later through downstream symptoms, not directly.',
        solution: 'Telegram alerting closes that gap — failures are reported the moment they happen.',
      },
    ],
    techGroups: [
      { category: 'Backend', items: ['Python'] },
      { category: 'Dashboard', items: ['Streamlit'] },
      { category: 'Alerting', items: ['Telegram Bot'] },
    ],
    results: ['Real-time pipeline status visibility for the whole team.', 'Automated Telegram alerts on failures.', 'Became one of the team\'s most relied-on internal tools.'],
  },
  {
    slug: 'fastapi-async-vs-sync-telegram',
    type: 'Open Source',
    year: '2024',
    title: 'FastAPI Async vs Sync Telegram',
    description:
      'Reference benchmark exploring how Uvicorn worker counts shape FastAPI throughput when fanning out to a Telegram bot. Async vs sync send patterns compared.',
    tags: ['Python', 'FastAPI', 'Uvicorn', 'Telegram'],
    metrics: [
      { value: '2', label: 'Send patterns compared' },
      { value: 'N', label: 'Worker counts benchmarked' },
      { value: 'Data-backed', label: 'Final recommendation' },
    ],
    overview:
      'A reference benchmark answering a question that kept coming up at work: when a FastAPI service fans out notifications to a Telegram bot, does async or sync sending actually perform better, and how much do Uvicorn worker counts matter?',
    layers: [
      { name: 'Service layer', detail: 'Two equivalent FastAPI services, identical except for async vs sync Telegram send calls.' },
      { name: 'Benchmark layer', detail: 'Each service variant is run under multiple Uvicorn worker counts to isolate that variable.' },
      { name: 'Measurement layer', detail: 'Identical load is applied to every configuration and throughput/latency is recorded for comparison.' },
    ],
    architecture:
      'Two FastAPI services — one using async Telegram sends, one using sync — both run under varying Uvicorn worker counts. Load is generated against both, measuring throughput and latency per configuration.',
    pipelineTracks: [
      {
        name: 'Benchmark flow',
        steps: [
          { label: 'Setup', detail: 'Two equivalent FastAPI services built, differing only in async vs sync Telegram send calls.' },
          { label: 'Vary workers', detail: 'Each service is benchmarked across multiple Uvicorn worker counts.' },
          { label: 'Load test', detail: 'Identical load is applied to each configuration and throughput/latency recorded.' },
          { label: 'Compare', detail: 'Results are compared to produce a practical recommendation for worker count and send pattern.' },
        ],
      },
    ],
    components: [
      { tag: 'AS', name: 'AsyncSendService', role: 'FastAPI service fanning out to Telegram via async calls', tech: 'FastAPI · httpx' },
      { tag: 'SS', name: 'SyncSendService', role: 'FastAPI service fanning out to Telegram via blocking calls', tech: 'FastAPI · requests' },
      { tag: 'LB', name: 'LoadBenchmark', role: 'Applies identical load across worker-count configurations and records metrics', tech: 'Uvicorn' },
    ],
    challenges: [
      {
        problem: 'No clear, reproducible answer existed for whether async Telegram sends were worth the added complexity.',
        solution: 'Built a controlled benchmark instead of relying on assumptions, producing data-backed guidance.',
      },
    ],
    techGroups: [
      { category: 'Backend', items: ['Python', 'FastAPI'] },
      { category: 'Server', items: ['Uvicorn'] },
      { category: 'Integration', items: ['Telegram Bot API'] },
    ],
    results: ['Reproducible benchmark comparing async vs sync Telegram send patterns.', 'Clear guidance on Uvicorn worker count trade-offs.'],
  },
];

export const contactLinks = [
  { key: 'Email', value: 'yusepmuhamadzazuli05@gmail.com', href: 'mailto:yusepmuhamadzazuli05@gmail.com', external: false },
  { key: 'LinkedIn', value: 'yusep-muhamad-zazuli', href: 'https://www.linkedin.com/in/yusep-muhamad-zazuli-a2a91b301', external: true },
  { key: 'Instagram', value: '@azaa_.py', href: 'https://instagram.com/azaa_.py', external: true },
  { key: 'GitHub', value: '@yusepahmad', href: 'https://github.com/yusepahmad', external: true },
];
