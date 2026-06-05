export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Node.js v25 exposes a partial localStorage global that exists but has
    // non-functional methods (getItem, setItem, etc. are not functions).
    // Next.js dev overlay guards with `if (localStorage)` — that check passes
    // on Node 25, so getItem() throws and crashes every SSR request.
    // Nullify it here so Next.js treats it as unavailable (browser-only).
    Object.defineProperty(globalThis, 'localStorage', {
      value: undefined,
      writable: true,
      configurable: true,
    })
  }
}
