import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import iconLogo from '@/assets/img/logo-icon.png'


export const metadata: Metadata = {
  title: 'Ensinio - A melhor plataforma para seus cursos digitais',
  description: 'A maior plataforma premium com área de membros do Brasil · A Ensinio 2.0 traz uma solução all-in-one de vendas, aprendizado online, comunidade e streaming que já existiu',
  icons: {
    icon:['/favicon.ico']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
