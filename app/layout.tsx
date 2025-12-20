import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'My Project',
    template: '%s | My Project',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navbar = (
    <Navbar
      logo={<span>My Project</span>}
      projectLink="https://github.com/shuding/nextra-docs-template"
      chatLink="https://discord.com"
    />
  )

  const footer = <Footer>Nextra Docs Template</Footer>

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {/* Additional head tags can be added here */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra-docs-template"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
