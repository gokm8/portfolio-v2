import type { Metadata } from 'next'
import './globals.css'
import { Layout } from 'components/craft'
import { Toaster } from 'components/ui/toaster'
// find the font at https://fonts.google.com/specimen/Poppins
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

// variable of the font
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700']
})

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
      <body className={`${poppins.variable}`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </Layout>
  )
}
