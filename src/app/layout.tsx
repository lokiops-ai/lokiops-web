import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: 'LokiOps — Resilience Testing for Kubernetes',
  description:
    'AI-powered chaos engineering, load testing, and resilience validation for Kubernetes platform teams.',
  openGraph: {
    title: 'LokiOps — Resilience Testing for Kubernetes',
    description:
      'AI-powered chaos engineering, load testing, and resilience validation for Kubernetes platform teams.',
    url: 'https://lokiops.ai',
    siteName: 'LokiOps',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LokiOps — Resilience Testing for Kubernetes',
    description:
      'AI-powered chaos engineering, load testing, and resilience validation for Kubernetes platform teams.',
  },
  metadataBase: new URL('https://lokiops.ai'),
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
