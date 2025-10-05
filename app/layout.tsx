import type { Metadata } from 'next'
import './globals.css'
import { Layout } from 'components/ds'
import { Toaster } from 'components/ui/toaster'
// find the font at https://fonts.google.com/specimen/Poppins
import { Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/new-home-page/wrapper/Footer'
import { Navigation } from '@/components/new-home-page/wrapper/Navbar'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Gøkmen Øzbayir | Software Engineer',
  description: 'I build things with code.'
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Layout className={`${geistMono.variable}`}>
      <body className={`flex min-h-screen flex-col font-mono`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </Layout>
  )
}
