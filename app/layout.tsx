import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alvest - Climatização Premium do Futuro | Tecnologia Avançada em Refrigeração e Ar Condicionado',
  description: 'Revolucionamos o conceito de climatização com tecnologia de ponta, design inteligente e eficiência energética incomparável. Instalação, manutenção e refrigeração industrial no RN.',
  keywords: 'climatização, ar condicionado, refrigeração industrial, instalação inteligente, manutenção preditiva, eficiência energética, Rio Grande do Norte, tecnologia IoT, sustentabilidade',
  authors: [{ name: 'Alvest' }],
  creator: 'Alvest',
  publisher: 'Alvest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://alvest.com.br'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#3b82f6' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Alvest - Climatização Premium do Futuro',
    description: 'Tecnologia de ponta em climatização com eficiência energética incomparável. Instalação inteligente e manutenção preditiva no RN.',
    url: 'https://alvest.com.br',
    siteName: 'Alvest',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/Screenshot_5.png',
        width: 1200,
        height: 630,
        alt: 'Alvest - Climatização Premium do Futuro - Landing Page',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alvest - Climatização Premium do Futuro',
    description: 'Tecnologia de ponta em climatização com eficiência energética incomparável.',
    images: ['/Screenshot_5.png'],
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
    google: 'seu-codigo-google-verification',
    yandex: 'seu-codigo-yandex-verification',
    yahoo: 'seu-codigo-yahoo-verification',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
