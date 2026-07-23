import { ImageResponse } from 'next/og'

export const alt = 'LokiOps — Resilience Testing for Kubernetes'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          backgroundImage:
            'radial-gradient(circle at 25% 30%, rgba(139,92,246,0.35) 0%, rgba(139,92,246,0) 55%), radial-gradient(circle at 80% 75%, rgba(88,28,135,0.35) 0%, rgba(88,28,135,0) 55%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 60%, #4c1d95 100%)',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 46,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            LokiOps
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 56,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Break things before they break you
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 28,
            color: 'rgba(255,255,255,0.45)',
            textAlign: 'center',
            maxWidth: 820,
          }}
        >
          AI-powered chaos engineering for Kubernetes
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
