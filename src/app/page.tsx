import Image from 'next/image'
import Link from 'next/link'

const APP_URL = 'https://app.lokiops.ai'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <NaturalLanguage />
      <Features />
      <ThreePhase />
      <Safety />
      <CTABand />
      <Footer />
    </div>
  )
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="LokiOps" width={26} height={26} />
          <span className="text-sm font-semibold">LokiOps</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-white/40 md:flex">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href={`${APP_URL}/docs`} className="hover:text-white transition-colors">Docs</a>
        </div>
        <div className="flex items-center gap-3">
          <Link href={`${APP_URL}/login`} className="hidden text-sm text-white/40 hover:text-white transition-colors md:block">
            Sign in
          </Link>
          <Link
            href={`${APP_URL}/signup`}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-32 pb-20">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Text */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            AI-powered chaos engineering for Kubernetes
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Break things
            <br />
            <span className="gradient-text">before they</span>
            <br />
            break you
          </h1>
          <p className="mb-8 max-w-md text-lg leading-relaxed text-white/40">
            Describe failures in plain English. LokiOps converts them into precise chaos experiments,
            runs them safely in your cluster, and gives you AI-written root-cause analysis.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={`${APP_URL}/signup`} className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors">
              Start for free
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-white/40 hover:border-white/20 hover:text-white transition-colors">
              See how it works
            </a>
          </div>
        </div>

        {/* Experiment dashboard mockup */}
        <div className="relative">
          <ExperimentDashboard />
        </div>
      </div>
    </section>
  )
}

function ExperimentDashboard() {
  return (
    <div className="relative rounded-2xl p-px" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(139,92,246,0.1) 100%)' }}>
      <div className="rounded-2xl bg-[#0a0a0a] p-6">
        {/* Window chrome */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-white/10" />
            <span className="h-3 w-3 rounded-full bg-white/10" />
            <span className="h-3 w-3 rounded-full bg-white/10" />
          </div>
          <div className="flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
            <span className="font-mono text-xs text-amber-400">RUNNING</span>
          </div>
        </div>

        {/* Experiment name */}
        <div className="mb-1 font-mono text-xs text-white/30">network-delay · checkout-service</div>
        <div className="mb-5 text-sm font-medium">500ms latency injection across 3 pods</div>

        {/* Phase bar */}
        <div className="mb-5">
          <div className="mb-2 flex justify-between font-mono text-xs text-white/30">
            <span>baseline</span><span>chaos active</span><span>recovery</span>
          </div>
          <div className="flex h-1.5 overflow-hidden rounded-full">
            <div className="w-[20%] bg-white/20" />
            <div className="w-[60%] bg-violet-500" />
            <div className="w-[20%] bg-emerald-500/40" />
          </div>
        </div>

        {/* Sparkline */}
        <div className="mb-5 overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-4">
          <div className="mb-1 font-mono text-xs text-white/30">p95 latency (ms)</div>
          <LatencySparkline />
        </div>

        {/* Metrics row */}
        <div className="mb-5 grid grid-cols-3 gap-2">
          {[
            { label: 'p50', baseline: '62ms', current: '487ms', bad: true },
            { label: 'p95', baseline: '89ms', current: '612ms', bad: true },
            { label: 'error rate', baseline: '0.1%', current: '0.3%', bad: false },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
              <div className="mb-1 font-mono text-xs text-white/30">{m.label}</div>
              <div className={`text-sm font-semibold ${m.bad ? 'text-amber-400' : 'text-white/70'}`}>{m.current}</div>
              <div className="font-mono text-xs text-white/20">was {m.baseline}</div>
            </div>
          ))}
        </div>

        {/* AI insight */}
        <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.06] p-4">
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="text-xs text-violet-400">✦</span>
            <span className="text-xs font-medium text-violet-400">AI analysis</span>
          </div>
          <p className="text-xs leading-relaxed text-white/50">
            Checkout degraded to 612ms p95 under 500ms injected delay — circuit breaker not triggering.
            Recommend: set <span className="font-mono text-white/70">timeout: 1500ms</span> and enable retry with{' '}
            <span className="font-mono text-white/70">maxAttempts: 2</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

function LatencySparkline() {
  // baseline ~80ms, chaos spike to ~600ms, recovery back to ~85ms
  const points = [
    [0, 80], [20, 82], [40, 79],      // baseline
    [55, 180], [65, 420], [75, 590],  // injection ramp
    [90, 610], [110, 598], [130, 612], [150, 595], [170, 608], // chaos plateau
    [185, 480], [200, 300], [215, 150], [230, 95],             // recovery
    [250, 86], [270, 83], [300, 84],   // recovered
  ]

  const w = 300
  const h = 70
  const maxY = 700
  const toSvg = ([x, y]: number[]) => `${(x / 300) * w},${h - (y / maxY) * h}`
  const d = 'M ' + points.map(toSvg).join(' L ')
  const fill = d + ` L ${w},${h} L 0,${h} Z`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none" style={{ height: 64 }}>
      <defs>
        <linearGradient id="spk-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="spk-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="30%" stopColor="#a78bfa" />
          <stop offset="75%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="rgba(52,211,153,0.6)" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#spk-fill)" />
      <path d={d} fill="none" stroke="url(#spk-line)" strokeWidth="1.5" />
    </svg>
  )
}

// ─── Stats bar ────────────────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    { value: '24', label: 'chaos operations' },
    { value: '3-phase', label: 'monitoring' },
    { value: 'AI-written', label: 'summaries' },
    { value: 'zero', label: 'data leaves your cluster' },
  ]
  return (
    <div className="border-y border-white/5 py-8">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-xl font-bold text-violet-400">{s.value}</div>
            <div className="mt-0.5 text-xs text-white/30">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Natural language ─────────────────────────────────────────────────────────

function NaturalLanguage() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-400">AI Planning</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Describe failures<br />in plain English
            </h2>
            <p className="mb-6 text-white/40 leading-relaxed">
              No YAML, no Helm values, no chaos engineering expertise required. Just describe what
              you want to test — LokiOps converts it into a precise, safe chaos spec with the right
              blast radius, duration, and success criteria.
            </p>
            <ul className="space-y-3">
              {[
                'Natural language → validated chaos spec in seconds',
                'Guided mode asks clarifying questions before generating',
                'Supports all 24 operation types: pod, network, resource, app',
                'Auto-sets success criteria based on your SLOs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/40">
                  <span className="mt-0.5 shrink-0 text-violet-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NL demo */}
          <div className="space-y-3">
            {/* Input */}
            <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-violet-400" />
                <span className="text-xs text-white/30">you</span>
              </div>
              <p className="text-sm leading-relaxed text-white/70">
                "Add 200ms network delay to the checkout service pods for 60 seconds.
                Fail the experiment if p95 goes above 500ms or error rate exceeds 2%."
              </p>
            </div>

            {/* AI response */}
            <div className="rounded-xl border border-violet-500/15 bg-violet-500/[0.04] p-4">
              <div className="mb-3 flex items-center gap-2">
                <Image src="/logo.png" alt="" width={14} height={14} />
                <span className="text-xs text-violet-400">LokiOps AI</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-white/50">
                <div><span className="text-violet-400">operation:</span> network-delay</div>
                <div><span className="text-violet-400">target:</span> checkout-service (label selector)</div>
                <div><span className="text-violet-400">blast_radius:</span> percentage: 100%</div>
                <div><span className="text-violet-400">duration:</span> 60s</div>
                <div><span className="text-violet-400">latency_ms:</span> 200</div>
                <div><span className="text-violet-400">success_criteria:</span></div>
                <div className="pl-4"><span className="text-white/30">p95_latency_ms:</span> ≤ 500</div>
                <div className="pl-4"><span className="text-white/30">error_rate_pct:</span> ≤ 2.0</div>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="rounded-lg bg-violet-500 px-3 py-1.5 text-xs font-medium text-white">Run experiment</button>
                <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/40">Edit spec</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      icon: <NetworkIcon />,
      label: 'Network chaos',
      description: 'Inject delay, packet loss, duplication, corruption, bandwidth throttling, or full partition. Target individual pods or percentage-based blast radii with label selectors.',
    },
    {
      icon: <CpuIcon />,
      label: 'Resource stress',
      description: 'Pin CPU, exhaust memory, saturate I/O. Configurable intensity and duration to simulate real-world resource contention on any workload.',
    },
    {
      icon: <PodIcon />,
      label: 'Pod & container faults',
      description: 'Kill pods, trigger container failures, or simulate node-level disruptions. Test your HPA thresholds and restart policies under real failure conditions.',
    },
    {
      icon: <LoadIcon />,
      label: 'Load testing',
      description: 'HTTP load tests with constant load or multi-stage ramp patterns. Validate SLOs, find throughput ceilings, and auto-stop on degradation — all against verified targets.',
    },
    {
      icon: <ScheduleIcon />,
      label: 'Scheduled experiments',
      description: 'Cron-based scheduling with timezone support and leader election for HA deployments. Run chaos automatically — continuous resilience validation without manual triggers.',
    },
    {
      icon: <ShieldIcon />,
      label: 'Risk & approvals',
      description: 'Automatic risk scoring (low/medium/high) based on operation type, target namespace, duration, and blast radius. High-risk experiments require org admin approval before execution.',
    },
  ]

  return (
    <section id="features" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-400">Features</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            The full chaos engineering stack
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/40">
            24 chaos operations across pod, network, resource, and application layers — unified with AI and load testing in one platform.
          </p>
        </div>

        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3" style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '16px', overflow: 'hidden' }}>
          {features.map((f) => (
            <div key={f.label} className="bg-black p-8 transition-colors duration-200 hover:bg-white/[0.02]">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 text-violet-400">
                {f.icon}
              </div>
              <h3 className="mb-2 text-sm font-semibold">{f.label}</h3>
              <p className="text-sm leading-relaxed text-white/40">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Three-phase monitoring ────────────────────────────────────────────────────

function ThreePhase() {
  return (
    <section id="how-it-works" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Visualization */}
          <div className="order-2 lg:order-1">
            <ThreePhaseViz />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-400">Monitoring</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Baseline. Chaos. Recovery.<br />
              <span className="text-white/40">Every run, three phases.</span>
            </h2>
            <p className="mb-6 leading-relaxed text-white/40">
              Every experiment captures a baseline before injection, live telemetry during chaos,
              and a recovery window after. LokiOps calculates deltas automatically so you
              know exactly what changed — and whether your system recovered.
            </p>
            <div className="space-y-4">
              {[
                { phase: 'Baseline', color: 'bg-white/20', desc: '10 seconds of pre-chaos telemetry. p50, p95, p99 latency + error rate sampled every 100ms to establish your true baseline.' },
                { phase: 'Chaos active', color: 'bg-violet-500', desc: 'Fault injected for your configured duration. Live delta calculations show degradation in real time against the baseline.' },
                { phase: 'Recovery', color: 'bg-emerald-500', desc: 'Fault removed. LokiOps measures how fast your system recovers and flags if recovery time exceeds your SLO threshold.' },
              ].map((p) => (
                <div key={p.phase} className="flex gap-4">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: p.color === 'bg-white/20' ? 'rgba(255,255,255,0.2)' : p.color === 'bg-violet-500' ? '#8b5cf6' : '#10b981' }} />
                  <div>
                    <div className="mb-0.5 text-sm font-medium">{p.phase}</div>
                    <div className="text-sm text-white/40">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ThreePhaseViz() {
  const phases = [
    { label: 'Baseline', width: '20%', color: 'rgba(255,255,255,0.15)', textColor: 'text-white/40' },
    { label: 'Chaos', width: '55%', color: 'rgba(139,92,246,0.6)', textColor: 'text-violet-300' },
    { label: 'Recovery', width: '25%', color: 'rgba(16,185,129,0.5)', textColor: 'text-emerald-400' },
  ]

  const metrics = [
    { label: 'p50 latency', baseline: '62ms', chaos: '487ms', recovery: '66ms', delta: '+686%' },
    { label: 'p95 latency', baseline: '89ms', chaos: '612ms', recovery: '94ms', delta: '+588%' },
    { label: 'p99 latency', baseline: '120ms', chaos: '890ms', recovery: '128ms', delta: '+641%' },
    { label: 'error rate', baseline: '0.1%', chaos: '0.3%', recovery: '0.1%', delta: '+200%' },
    { label: 'recovery time', baseline: '—', chaos: '—', recovery: '8.2s', delta: '' },
  ]

  return (
    <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-6">
      {/* Phase bar */}
      <div className="mb-1 flex h-8 overflow-hidden rounded-lg">
        {phases.map((p) => (
          <div key={p.label} className="flex items-center justify-center text-xs font-medium" style={{ width: p.width, background: p.color }}>
            <span className={p.textColor}>{p.label}</span>
          </div>
        ))}
      </div>
      <div className="mb-6 flex justify-between font-mono text-xs text-white/20">
        <span>0s</span><span>10s</span><span>65s</span><span>90s</span>
      </div>

      {/* Sparkline */}
      <div className="mb-6 overflow-hidden rounded-xl border border-white/5 bg-black/40 p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="font-mono text-xs text-white/30">p95 latency</span>
          <span className="font-mono text-xs text-amber-400">612ms peak</span>
        </div>
        <LatencySparkline />
      </div>

      {/* Metrics table */}
      <div className="overflow-hidden rounded-xl border border-white/5">
        <div className="grid grid-cols-4 border-b border-white/5 bg-white/[0.03] px-4 py-2 font-mono text-xs text-white/30">
          <span>metric</span><span>baseline</span><span className="text-violet-400">chaos</span><span className="text-emerald-400">recovered</span>
        </div>
        {metrics.map((m, i) => (
          <div key={m.label} className={`grid grid-cols-4 px-4 py-2.5 font-mono text-xs ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
            <span className="text-white/40">{m.label}</span>
            <span className="text-white/40">{m.baseline}</span>
            <span className="text-amber-400/80">{m.chaos}</span>
            <span className="text-emerald-400/80">{m.recovery}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Safety ───────────────────────────────────────────────────────────────────

function Safety() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-white/6" style={{ background: 'rgba(255,255,255,0.015)' }}>
          <div className="grid md:grid-cols-2">
            {/* Text */}
            <div className="p-12 lg:p-16">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-violet-400">Safety first</p>
              <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                Built-in guardrails.<br />No runbook required.
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-white/40">
                Every experiment is automatically risk-scored before it runs. High-risk operations
                require org admin approval. Admins set namespace and domain allowlists so experiments
                can only target what you explicitly permit.
              </p>
              <ul className="space-y-3">
                {[
                  'Auto risk scoring: operation type, namespace, duration, blast radius',
                  'Approval workflows for high-risk experiments with spec hashing',
                  'Namespace and domain allowlists set by org admins',
                  'Per-agent HMAC signing — results can\'t be tampered with',
                  'Runs entirely in your cluster — no data leaves your infrastructure',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/40">
                    <span className="mt-0.5 shrink-0 text-violet-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Risk card visual */}
            <div className="flex items-center justify-center border-t border-white/5 bg-black/30 p-10 md:border-l md:border-t-0">
              <div className="w-full max-w-xs space-y-3">
                {[
                  { op: 'network-delay', target: 'checkout-service', risk: 'low', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
                  { op: 'pod-kill', target: 'payment-svc (50%)', risk: 'high', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
                  { op: 'cpu-stress', target: 'api-gateway', risk: 'medium', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
                ].map((e) => (
                  <div key={e.op} className={`flex items-center justify-between rounded-xl border p-4 ${e.bg}`}>
                    <div>
                      <div className="font-mono text-xs text-white/60">{e.op}</div>
                      <div className="mt-0.5 text-xs text-white/30">{e.target}</div>
                    </div>
                    <div className={`rounded-full border px-2.5 py-1 font-mono text-xs font-medium ${e.color} ${e.bg}`}>
                      {e.risk}
                    </div>
                  </div>
                ))}
                <div className="rounded-xl border border-red-500/20 bg-red-500/[0.05] p-4 text-center">
                  <div className="mb-1 text-xs font-medium text-red-400">Approval required</div>
                  <div className="text-xs text-white/30">pod-kill on 50% of payment pods requires org admin sign-off before execution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTABand() {
  return (
    <section className="px-6 py-32">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl p-px text-center" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(255,255,255,0.05), rgba(139,92,246,0.2))' }}>
        <div className="rounded-2xl bg-[#050505] px-8 py-16">
          <div className="pointer-events-none absolute inset-0 rounded-2xl">
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[80px]" />
          </div>
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Find your failures<br />before production does
            </h2>
            <p className="mb-8 text-white/40">
              Start running chaos experiments on your Kubernetes cluster today.
              Free to get started — no credit card required.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href={`${APP_URL}/signup`} className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors">
                Get started free
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <a href={`${APP_URL}/docs`} className="rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-white/40 hover:border-white/20 hover:text-white transition-colors">
                Read the docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Image src="/logo.png" alt="LokiOps" width={24} height={24} />
              <span className="text-sm font-semibold">LokiOps</span>
            </div>
            <p className="max-w-xs text-xs text-white/25">
              AI-powered chaos engineering and load testing for Kubernetes platform teams.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-xs text-white/30 sm:grid-cols-3">
            <a href={`${APP_URL}/signup`} className="hover:text-white transition-colors">Get started</a>
            <a href={`${APP_URL}/docs`} className="hover:text-white transition-colors">Docs</a>
            <a href={`${APP_URL}/login`} className="hover:text-white transition-colors">Sign in</a>
            <a href="mailto:hello@lokiops.ai" className="hover:text-white transition-colors">Contact</a>
            <a href="https://github.com/lokiops-ai" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/[0.04] pt-8 text-xs text-white/15">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> LokiOps. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function NetworkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-4h14v4M12 12V8" />
    </svg>
  )
}

function CpuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  )
}

function PodIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
}

function LoadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function ScheduleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
