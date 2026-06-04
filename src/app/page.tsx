import Link from 'next/link'

const APP_URL = 'https://app.lokiops.ai'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080C14] text-[#F0F4FF]">
      <Navbar />
      <Hero />
      <LogoBar />
      <Features />
      <HowItWorks />
      <DeepDive />
      <CTABand />
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#1E2A3D] bg-[#080C14]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <LokiLogo />
          <span className="text-lg font-semibold tracking-tight">LokiOps</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-[#7A8FA6] md:flex">
          <a href="#features" className="hover:text-[#F0F4FF] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[#F0F4FF] transition-colors">How it works</a>
          <a href={`${APP_URL}/docs`} className="hover:text-[#F0F4FF] transition-colors">Docs</a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={`${APP_URL}/login`}
            className="hidden text-sm text-[#7A8FA6] hover:text-[#F0F4FF] transition-colors md:block"
          >
            Sign in
          </Link>
          <Link
            href={`${APP_URL}/signup`}
            className="rounded-lg bg-[#4F86FF] px-4 py-2 text-sm font-medium text-white hover:bg-[#3A6EE8] transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <div className="mt-16 h-[600px] w-[900px] rounded-full bg-[#4F86FF]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1E2A3D] bg-[#0E1420] px-4 py-1.5 text-sm text-[#7A8FA6]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4F86FF]" />
          AI-native resilience testing for Kubernetes
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Break things{' '}
          <span className="bg-gradient-to-r from-[#4F86FF] to-[#A78BFA] bg-clip-text text-transparent">
            before they
          </span>
          <br />
          break you
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#7A8FA6]">
          LokiOps gives platform teams AI agents that probe, stress, and validate every corner of
          your Kubernetes infrastructure — automatically, on a schedule, before production finds
          the gaps first.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={`${APP_URL}/signup`}
            className="rounded-lg bg-[#4F86FF] px-6 py-3 font-medium text-white hover:bg-[#3A6EE8] transition-colors"
          >
            Start testing free →
          </Link>
          <a
            href="#how-it-works"
            className="rounded-lg border border-[#1E2A3D] px-6 py-3 font-medium text-[#7A8FA6] hover:border-[#2E3A4D] hover:text-[#F0F4FF] transition-colors"
          >
            See how it works
          </a>
        </div>

        {/* Terminal preview */}
        <div className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-xl border border-[#1E2A3D] bg-[#0E1420] text-left shadow-2xl">
          <div className="flex items-center gap-2 border-b border-[#1E2A3D] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            <span className="ml-2 text-xs text-[#3A4A5C]">lokiops-agent — experiment runner</span>
          </div>
          <div className="p-5 font-mono text-sm">
            <TerminalLine prompt="$" text="lokiops run experiment --target payments-api --type cpu-stress" />
            <TerminalLine color="text-[#7A8FA6]" text="  Connecting to cluster..." delay />
            <TerminalLine color="text-[#28C840]" text="  ✓ Agent deployed to payments-api (3 replicas)" delay />
            <TerminalLine color="text-[#7A8FA6]" text="  Ramping CPU load to 80% over 60s..." delay />
            <TerminalLine color="text-[#FEBC2E]" text="  ⚠ Replica payments-api-6d8f9b (pod/node: node-2) degraded at 73%" delay />
            <TerminalLine color="text-[#28C840]" text="  ✓ HPA triggered — scaled from 3 → 5 replicas" delay />
            <TerminalLine color="text-[#4F86FF]" text="  ✦ AI analysis: autoscaling threshold too high, recommend 60%" delay />
          </div>
        </div>
      </div>
    </section>
  )
}

function TerminalLine({
  prompt,
  text,
  color = 'text-[#F0F4FF]',
  delay = false,
}: {
  prompt?: string
  text: string
  color?: string
  delay?: boolean
}) {
  return (
    <div className={`mb-1.5 ${color} ${delay ? 'opacity-90' : ''}`}>
      {prompt && <span className="mr-2 text-[#4F86FF]">{prompt}</span>}
      {text}
    </div>
  )
}

function LogoBar() {
  return (
    <div className="border-y border-[#1E2A3D] py-10">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-8 text-center text-sm text-[#3A4A5C]">BUILT FOR TEAMS RUNNING KUBERNETES IN PRODUCTION</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[#3A4A5C]">
          {['Platform Engineering', 'SRE Teams', 'DevOps', 'Cloud Native', 'FinTech', 'SaaS Infra'].map((label) => (
            <span key={label} className="text-sm font-medium">{label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Features() {
  const features = [
    {
      icon: <ChaosIcon />,
      title: 'Chaos Experiments',
      description:
        'Inject CPU pressure, memory stress, and network disruption into your workloads. Understand exactly how your services behave under failure — before your users experience it.',
    },
    {
      icon: <AgentIcon />,
      title: 'AI Agents',
      description:
        'Intelligent agents that learn your cluster topology and autonomously identify failure modes across services, namespaces, and node pools — no manual scenario scripting.',
    },
    {
      icon: <LoadIcon />,
      title: 'Load Testing',
      description:
        'Generate realistic traffic at scale against your Kubernetes services. Validate SLAs, find throughput ceilings, and expose bottlenecks before your next big traffic spike.',
    },
    {
      icon: <ScheduleIcon />,
      title: 'Scheduled Reliability',
      description:
        'Run chaos experiments and load tests on a recurring schedule. Continuously validate resilience without manual intervention — reliability as a background process.',
    },
    {
      icon: <InsightIcon />,
      title: 'AI-Powered Insights',
      description:
        'Every experiment produces an AI analysis: what failed, why, and what to fix. Turn raw Kubernetes metrics into concrete, actionable recommendations your team can act on immediately.',
    },
    {
      icon: <OperatorIcon />,
      title: 'Kubernetes-Native',
      description:
        'Deployed as a Kubernetes operator. No external SaaS dependencies, no data leaves your cluster. Fits naturally into your existing GitOps workflows and RBAC policies.',
    },
  ]

  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[#4F86FF]">
          Features
        </div>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Everything your platform team needs
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-[#7A8FA6]">
          One platform for the full resilience lifecycle — from automated chaos injection to AI
          root-cause analysis.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-[#1E2A3D] bg-[#0E1420] p-6 hover:border-[#2E3A4D] transition-colors"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#4F86FF]/10 text-[#4F86FF]">
                {f.icon}
              </div>
              <h3 className="mb-2 font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-[#7A8FA6]">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Connect your cluster',
      description:
        'Install the LokiOps operator with a single kubectl command. It connects to your cluster, discovers your workloads, and maps service dependencies automatically. No code changes required.',
    },
    {
      step: '02',
      title: 'Define your targets',
      description:
        'Point LokiOps at the services you care about. Our AI agent analyses your deployments, resource requests, and topology to generate a tailored resilience testing plan — or you can build your own.',
    },
    {
      step: '03',
      title: 'Run and learn',
      description:
        'Execute chaos experiments and load tests from a unified dashboard or CLI. Every run produces an AI-written analysis: what held up, what degraded, and exactly what to change.',
    },
  ]

  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-[#4F86FF]">
          How it works
        </div>
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          Up and running in minutes
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+2rem)] top-5 hidden h-px w-full bg-[#1E2A3D] md:block" />
              )}
              <div className="mb-4 text-4xl font-bold text-[#1E2A3D]">{s.step}</div>
              <h3 className="mb-3 text-xl font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-[#7A8FA6]">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DeepDive() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl border border-[#1E2A3D] bg-[#0E1420]">
          <div className="grid md:grid-cols-2">
            {/* Text side */}
            <div className="p-10 lg:p-14">
              <div className="mb-4 text-sm font-medium uppercase tracking-widest text-[#4F86FF]">
                AI Analysis
              </div>
              <h2 className="mb-4 text-3xl font-bold leading-tight">
                From raw metrics to actionable fixes
              </h2>
              <p className="mb-8 text-[#7A8FA6] leading-relaxed">
                Most chaos tools show you that something broke. LokiOps tells you why — and what
                to do about it. Our AI agent correlates Kubernetes events, resource metrics, and
                experiment timelines to produce clear, specific recommendations your team can
                implement immediately.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  'Automatic root-cause correlation across pods, nodes, and services',
                  'Concrete recommendations: resource limits, HPA thresholds, probe tuning',
                  'Tracks improvements run-over-run as you apply fixes',
                  'Exportable reports for incident post-mortems and compliance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#7A8FA6]">
                    <span className="mt-0.5 text-[#4F86FF]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual side */}
            <div className="flex items-center justify-center border-t border-[#1E2A3D] bg-[#080C14] p-10 md:border-l md:border-t-0">
              <div className="w-full max-w-sm space-y-3 font-mono text-xs">
                <div className="rounded-lg border border-[#1E2A3D] bg-[#0E1420] p-4">
                  <div className="mb-2 text-[#4F86FF] font-semibold">Experiment Summary</div>
                  <div className="space-y-1 text-[#7A8FA6]">
                    <div className="flex justify-between"><span>Target</span><span className="text-[#F0F4FF]">payments-api</span></div>
                    <div className="flex justify-between"><span>Type</span><span className="text-[#F0F4FF]">CPU Stress 80%</span></div>
                    <div className="flex justify-between"><span>Duration</span><span className="text-[#F0F4FF]">5m 00s</span></div>
                    <div className="flex justify-between"><span>SLO Breached</span><span className="text-[#FEBC2E]">Yes (p99 &gt; 500ms)</span></div>
                  </div>
                </div>
                <div className="rounded-lg border border-[#28C840]/30 bg-[#28C840]/5 p-4">
                  <div className="mb-2 font-semibold text-[#28C840]">AI Recommendation</div>
                  <p className="text-[#7A8FA6] leading-relaxed">
                    CPU limit of <span className="text-[#F0F4FF]">500m</span> is too low for observed peak load. Recommend raising to{' '}
                    <span className="text-[#F0F4FF]">800m</span> and lowering HPA target utilization from{' '}
                    <span className="text-[#FEBC2E]">80%</span> →{' '}
                    <span className="text-[#28C840]">60%</span> to trigger scaling earlier.
                  </p>
                </div>
                <div className="rounded-lg border border-[#1E2A3D] bg-[#0E1420] p-4">
                  <div className="mb-2 text-[#4F86FF] font-semibold">Affected Resources</div>
                  <div className="space-y-1 text-[#7A8FA6]">
                    <div>payments-api/deployment.yaml <span className="text-[#FEBC2E]">→ resources.limits.cpu</span></div>
                    <div>payments-hpa/hpa.yaml <span className="text-[#FEBC2E]">→ targetCPUUtilizationPercentage</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTABand() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="rounded-2xl border border-[#4F86FF]/20 bg-gradient-to-b from-[#4F86FF]/10 to-transparent p-14">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Find your failures before production does
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-[#7A8FA6]">
            Start running chaos experiments and load tests on your Kubernetes cluster today.
            Free to get started — no credit card required.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`${APP_URL}/signup`}
              className="rounded-lg bg-[#4F86FF] px-8 py-3 font-medium text-white hover:bg-[#3A6EE8] transition-colors"
            >
              Get started free
            </Link>
            <a
              href={`${APP_URL}/docs`}
              className="rounded-lg border border-[#1E2A3D] px-8 py-3 font-medium text-[#7A8FA6] hover:border-[#2E3A4D] hover:text-[#F0F4FF] transition-colors"
            >
              Read the docs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#1E2A3D] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <LokiLogo />
              <span className="font-semibold">LokiOps</span>
            </div>
            <p className="max-w-xs text-sm text-[#3A4A5C]">
              AI-powered resilience testing for Kubernetes platform teams.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-sm text-[#7A8FA6] sm:grid-cols-3">
            <a href={`${APP_URL}/signup`} className="hover:text-[#F0F4FF] transition-colors">Get started</a>
            <a href={`${APP_URL}/docs`} className="hover:text-[#F0F4FF] transition-colors">Docs</a>
            <a href={`${APP_URL}/login`} className="hover:text-[#F0F4FF] transition-colors">Sign in</a>
            <a href="mailto:hello@lokiops.ai" className="hover:text-[#F0F4FF] transition-colors">Contact</a>
            <a href="https://github.com/lokiops-ai" className="hover:text-[#F0F4FF] transition-colors">GitHub</a>
          </div>
        </div>
        <div className="mt-8 border-t border-[#1E2A3D] pt-8 text-sm text-[#3A4A5C]">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> LokiOps. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// ---- Icons ----

function LokiLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#4F86FF" />
      <path d="M7 17L12 7L17 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ChaosIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function AgentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
    </svg>
  )
}

function LoadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function ScheduleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function InsightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

function OperatorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}
