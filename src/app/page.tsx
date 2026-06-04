import Image from 'next/image'
import Link from 'next/link'

const APP_URL = 'https://app.lokiops.ai'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <LokiLogo />
          <span className="text-sm font-semibold tracking-tight">LokiOps</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-white/40 md:flex">
          <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors duration-200">How it works</a>
          <a href={`${APP_URL}/docs`} className="hover:text-white transition-colors duration-200">Docs</a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={`${APP_URL}/login`}
            className="hidden text-sm text-white/40 hover:text-white transition-colors duration-200 md:block"
          >
            Sign in
          </Link>
          <Link
            href={`${APP_URL}/signup`}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 transition-colors duration-200"
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
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute right-1/4 top-2/3 h-[400px] w-[400px] rounded-full bg-violet-500/[0.08] blur-[100px]" />
      </div>

      <div className="relative max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/50 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          AI-native resilience testing for Kubernetes
        </div>

        <h1 className="mb-6 text-6xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Break things
          <br />
          <span className="gradient-text">before they</span>
          <br />
          break you
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/40">
          LokiOps gives platform teams AI agents that probe, stress, and validate
          every corner of your Kubernetes infrastructure — automatically.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href={`${APP_URL}/signup`}
            className="group flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90"
          >
            Start testing free
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
          <a
            href="#how-it-works"
            className="rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-white/50 transition-colors duration-200 hover:border-white/20 hover:text-white"
          >
            See how it works
          </a>
        </div>

        {/* Terminal */}
        <div className="mx-auto mt-20 max-w-2xl overflow-hidden rounded-2xl border border-white/8 bg-white/3 shadow-2xl backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-white/10" />
            <span className="h-3 w-3 rounded-full bg-white/10" />
            <span className="h-3 w-3 rounded-full bg-white/10" />
            <span className="ml-3 font-mono text-xs text-white/20">experiment runner</span>
          </div>
          <div className="p-6 font-mono text-xs leading-relaxed">
            <div className="text-white/30">$ <span className="text-white/70">lokiops run experiment --target payments-api --type cpu-stress</span></div>
            <div className="mt-2 text-white/30">  Connecting to cluster<span className="animate-pulse">...</span></div>
            <div className="mt-1 text-emerald-400/80">  ✓ Agent deployed to payments-api (3 replicas)</div>
            <div className="mt-1 text-white/30">  Ramping CPU load to 80% over 60s</div>
            <div className="mt-1 text-amber-400/80">  ⚠ Replica payments-api-6d8f9b degraded at 73% utilization</div>
            <div className="mt-1 text-emerald-400/80">  ✓ HPA triggered — scaled 3 → 5 replicas</div>
            <div className="mt-1 text-violet-400/90">  ✦ AI: autoscaling threshold too high, recommend lowering to 60%</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: <ChaosIcon />,
      label: 'Chaos Experiments',
      description: 'Inject CPU pressure, memory stress, and network disruption. Understand exactly how services fail before users experience it.',
    },
    {
      icon: <AgentIcon />,
      label: 'AI Agents',
      description: 'Intelligent agents that learn your cluster topology and autonomously probe for failure modes across services and namespaces.',
    },
    {
      icon: <LoadIcon />,
      label: 'Load Testing',
      description: 'Generate realistic traffic at scale. Validate SLAs, find throughput ceilings, and expose bottlenecks before the next spike.',
    },
    {
      icon: <ScheduleIcon />,
      label: 'Scheduled Reliability',
      description: 'Run chaos experiments on a recurring schedule. Continuously validate resilience without manual intervention.',
    },
    {
      icon: <InsightIcon />,
      label: 'AI-Powered Insights',
      description: 'Every experiment produces an AI analysis: what failed, why, and exactly what to fix. Actionable, not just descriptive.',
    },
    {
      icon: <OperatorIcon />,
      label: 'Kubernetes-Native',
      description: 'Deployed as an operator. No external SaaS dependencies, no data leaves your cluster. Fits your existing GitOps workflow.',
    },
  ]

  return (
    <section id="features" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-400">Features</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything your platform team needs</h2>
          <p className="mx-auto mt-4 max-w-md text-white/40">
            One platform for the full resilience lifecycle.
          </p>
        </div>

        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3" style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '16px', overflow: 'hidden' }}>
          {features.map((f) => (
            <div
              key={f.label}
              className="group bg-black p-8 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50">
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

function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Connect your cluster',
      description: 'Install the LokiOps operator with a single kubectl command. It discovers your workloads and maps service dependencies automatically.',
    },
    {
      n: '02',
      title: 'Define your targets',
      description: 'Point LokiOps at the services you care about. Our AI generates a tailored resilience testing plan — or you build your own.',
    },
    {
      n: '03',
      title: 'Run and learn',
      description: 'Execute experiments from a unified dashboard or CLI. Every run produces an AI analysis: what held up, what degraded, what to change.',
    },
  ]

  return (
    <section id="how-it-works" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-400">How it works</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Up and running in minutes</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="mb-6 text-5xl font-bold" style={{ color: 'rgba(255,255,255,0.06)', fontVariantNumeric: 'tabular-nums' }}>
                {s.n}
              </div>
              <h3 className="mb-3 font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/40">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DeepDive() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div
          className="overflow-hidden rounded-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-12 lg:p-16">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-violet-400">AI Analysis</p>
              <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                From raw metrics<br />to actionable fixes
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-white/40">
                Most chaos tools show you that something broke. LokiOps tells you why — and what to do about it.
                Our AI correlates events, metrics, and experiment timelines into clear, specific recommendations.
              </p>
              <ul className="space-y-3">
                {[
                  'Root-cause correlation across pods, nodes, and services',
                  'Concrete fixes: resource limits, HPA thresholds, probe tuning',
                  'Tracks improvements run-over-run as you apply changes',
                  'Exportable reports for post-mortems and compliance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/40">
                    <span className="mt-0.5 shrink-0 text-violet-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="flex items-center justify-center p-10"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.4)' }}
            >
              <div className="w-full max-w-sm space-y-2 font-mono text-xs">
                <div className="rounded-xl p-4" style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
                  <div className="mb-3 text-xs font-semibold text-violet-400">Experiment Summary</div>
                  <div className="space-y-1.5">
                    {[
                      ['Target', 'payments-api'],
                      ['Type', 'CPU Stress 80%'],
                      ['Duration', '5m 00s'],
                      ['SLO Breach', 'p99 > 500ms'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="text-white/30">{k}</span>
                        <span className={k === 'SLO Breach' ? 'text-amber-400/80' : 'text-white/60'}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-4" style={{ border: '1px solid rgba(52,211,153,0.15)', background: 'rgba(52,211,153,0.04)' }}>
                  <div className="mb-2 text-xs font-semibold text-emerald-400">AI Recommendation</div>
                  <p className="leading-relaxed text-white/40">
                    CPU limit <span className="text-white/60">500m</span> is insufficient at peak. Raise to{' '}
                    <span className="text-white/60">800m</span> and lower HPA target from{' '}
                    <span className="text-amber-400/80">80%</span> →{' '}
                    <span className="text-emerald-400/80">60%</span> to scale proactively.
                  </p>
                </div>

                <div className="rounded-xl p-4" style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
                  <div className="mb-2 text-xs font-semibold text-violet-400">Affected Resources</div>
                  <div className="space-y-1 text-white/30">
                    <div>deployment.yaml <span className="text-amber-400/60">→ limits.cpu</span></div>
                    <div>hpa.yaml <span className="text-amber-400/60">→ targetCPUUtilizationPercentage</span></div>
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
    <section className="px-6 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Find your failures<br />before production does
        </h2>
        <p className="mb-8 text-white/40">
          Start running chaos experiments and load tests on your cluster today.
          Free to get started — no credit card required.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href={`${APP_URL}/signup`}
            className="group flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90"
          >
            Get started free
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
          <a
            href={`${APP_URL}/docs`}
            className="rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-white/40 transition-colors hover:border-white/20 hover:text-white"
          >
            Read the docs
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <LokiLogo />
              <span className="text-sm font-semibold">LokiOps</span>
            </div>
            <p className="max-w-xs text-xs text-white/25">
              AI-powered resilience testing for Kubernetes platform teams.
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
        <div className="mt-8 text-xs text-white/15" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '2rem' }}>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> LokiOps. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// ---- Icons ----

function LokiLogo() {
  return <Image src="/logo.png" alt="LokiOps" width={28} height={28} />
}

function ChaosIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function AgentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
    </svg>
  )
}

function LoadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function ScheduleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function InsightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function OperatorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}
