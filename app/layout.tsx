import type { Metadata } from 'next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './globals.css'


export const metadata: Metadata = {
  title: 'Abu Sayed — Portfolio',
  description: 'Full‑stack React/Next.js engineer portfolio',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}