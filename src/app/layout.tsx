import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import { ThemeProvider } from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Devnauta',
  description:
    'Devnauta é o seu destino para explorar o vasto universo da programação e tecnologia. Navegue por artigos envolventes, tutoriais práticos e análises de tendências que o manterão atualizado no mundo em constante evolução da ciência da computação. Prepare-se para mergulhar no conhecimento tecnológico com os nossos conteúdos atualizados regularmente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
