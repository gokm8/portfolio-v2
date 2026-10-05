import { ImageResponse } from 'next/og'

/** Fetch only the glyphs we render, so the image uses the site's Geist Mono. */
async function loadGeistMono(text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Geist+Mono:wght@600&text=${encodeURIComponent(text)}`
  ).then((res) => res.text())
  const url = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  )?.[1]
  if (!url) throw new Error('Geist Mono not found')
  return fetch(url).then((res) => res.arrayBuffer())
}

// Dark theme tokens from globals.css, in hex because Satori has no oklch.
const colors = {
  background: '#09090b',
  foreground: '#fafafa',
  muted: '#a1a1aa',
  primary: '#f54a00',
  border: '#27272a'
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || 'Gøkmen Øzbayir'
  const site = 'gokm8.xyz'

  const fonts = await loadGeistMono(title + site)
    .then((data) => [
      {
        name: 'Geist Mono',
        data,
        weight: 600 as const,
        style: 'normal' as const
      }
    ])
    .catch(() => undefined)

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: 80,
          background: colors.background,
          color: colors.foreground,
          fontFamily: fonts ? 'Geist Mono' : undefined
        }}
      >
        <div style={{ width: 24, height: 24, background: colors.primary }} />
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.15
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            paddingTop: 32,
            borderTop: `2px solid ${colors.border}`,
            fontSize: 28,
            color: colors.muted
          }}
        >
          {site}
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts }
  )
}
