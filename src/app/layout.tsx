import type { Metadata } from 'next'
import './globals.css'

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
    <html lang='en' className='font-poppins'>
      <body className='bg-neutral-950'>{children}</body>
    </html>
  )
}
