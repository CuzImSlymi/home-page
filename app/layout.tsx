import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Slymi - AI Developer Portfolio',
  description: 'AI developer building custom models, apps, and tools. Check out my YOLO training, P2P messenger, and LLM experiments.',
  openGraph: {
    title: 'Slymi - AI Developer Portfolio',
    description: 'AI developer building custom models, apps, and tools. Check out my YOLO training, P2P messenger, and LLM experiments.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slymi - AI Developer Portfolio',
    description: 'AI developer building custom models, apps, and tools. Check out my YOLO training, P2P messenger, and LLM experiments.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}