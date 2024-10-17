import type { Metadata } from 'next'
import './globals.css'
import { Layout } from 'components/craft'
import { Toaster } from 'components/ui/toaster'
// find the font at https://fonts.google.com/specimen/Anonymous+Pro
import { Anonymous_Pro } from 'next/font/google'

// variable of the font
const anonymousPro = Anonymous_Pro({
  subsets: ['latin'],
  variable: '--font-anonymousPro',
  weight: ['400', '700'],
  style: ['normal', 'italic']
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
      <body className={`${anonymousPro.variable} bg-[#0a0a0a]`}>
        {children}
        <Toaster />
      </body>
    </Layout>
  )
}
