import './globals.css'
import  { roboto } from './utils/fonts/fonts'
import type { Metadata } from 'next'
import Navbar from './components/Navbar/Navbar'

export const metadata: Metadata = {
  title: 'Next Coffee Delivery',
  description: 'Next Coffee Delivery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="flex flex-col items-center justify-center w-full">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
