import './globals.css'
import type { Metadata } from 'next'
import {Providers} from "./providers";
import Navbar from './_components/navbar'
import Footer from './_components/footer'

export const metadata: Metadata = {
  title: 'Safari Seekers',
  description: 'Created by Vishesh Patel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className="bg-slate-100 dark:bg-slate-800">
        <Providers>
          <Navbar />
          <div className="[&>.container]:dark:bg-slate-900">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
