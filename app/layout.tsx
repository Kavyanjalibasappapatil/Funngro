import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Funngro — Earn Real Money Doing Real Brand Work',
  description: 'Join 70 lakh young Indians earning ₹1K–₹15K+ per month doing brand campaigns, content creation, surveys, and more. Download Funngro and start earning today.',
  keywords: 'earn money online, brand campaigns, student income, gig work India, Funngro, part-time income, UGC creator',
  authors: [{ name: 'Funngro' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://funngro.com',
    siteName: 'Funngro',
    title: 'Funngro — Earn Real Money Doing Real Brand Work',
    description: 'Join 70 lakh young Indians earning ₹1K–₹15K+ per month doing brand campaigns, content creation, surveys, and more.',
    images: [
      {
        url: 'https://funngro.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Funngro — Earn Real Money',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Funngro — Earn Real Money Doing Real Brand Work',
    description: 'Join 70 lakh young Indians earning ₹1K–₹15K+ per month doing brand campaigns.',
    images: ['https://funngro.com/og-image.jpg'],
    creator: '@funngro',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Funngro',
  url: 'https://funngro.com',
  logo: 'https://funngro.com/logo.png',
  description: 'Platform connecting young Indians with brand campaigns to earn real income.',
  sameAs: [
    'https://twitter.com/funngro',
    'https://instagram.com/funngro',
    'https://linkedin.com/company/funngro',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@funngro.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0F14] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
