import { type Metadata } from 'next'
import '../styles/tailwind.css'

import { Providers } from './providers'
import { Layout } from '../components/layout/Layout'
import { Analytics } from '../components/analytics/analytics'
import { headline, introduction, name } from '../config/infoConfig'

export const metadata: Metadata = {
  title: {
    template: `%s - ${name}`,
    default: `${name} - ${headline}`,
  },
  description: `${introduction}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
