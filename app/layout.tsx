import type { Metadata, Viewport } from 'next';
import './globals.css'


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Abu Sayed — Portfolio',
  description: 'Full‑stack React/Next.js engineer portfolio',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}