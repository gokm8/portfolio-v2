import type { Metadata } from 'next'
import './globals.css'
import { Layout } from 'components/ds'
import { Toaster } from 'components/ui/toaster'
// find the font at https://fonts.google.com/specimen/Poppins
import { Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/new-home-page/Footer'

// variable of the font
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Gøkmen Øzbayir | Software Engineer',
  description: 'I build things with code.'
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Layout className=''>
      <body className={`${geistMono.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </Layout>
  )
}
