import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Layout } from 'components/craft'
import { Toaster } from 'components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gøkmen Øzbayir | Software Engineer',
  description: 'I build things with code.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Layout>
      <body className={`${inter.className} bg-[#0a0a0a]`}>{children}</body>
    </Layout>
  )
}
