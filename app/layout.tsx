import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
