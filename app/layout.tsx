import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sameer Baiju | Portfolio',
  description: 'Portfolio website for Sameer Baiju, full-stack developer and machine learning enthusiast.',
  generator: 'Next.js',
  authors: [{ name: 'Sameer Baiju' }],
  keywords: ['Sameer Baiju', 'Portfolio', 'Full-stack Developer', 'React', 'Django', 'Machine Learning', 'Web Development'],
  openGraph: {
    title: 'Sameer Baiju | Portfolio',
    description: 'Portfolio website for Sameer Baiju, full-stack developer and machine learning enthusiast.',
    url: 'https://sameerbaiju.dev',
    siteName: 'Sameer Baiju Portfolio',
    images: [
      {
        url: '/favicon1.png',
        width: 512,
        height: 512,
        alt: 'Sameer Baiju Profile Picture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sameer Baiju | Portfolio',
    description: 'Portfolio website for Sameer Baiju, full-stack developer and machine learning enthusiast.',
    images: ['/favicon1.png'],
    creator: '@sameerbaiju',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon1.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
