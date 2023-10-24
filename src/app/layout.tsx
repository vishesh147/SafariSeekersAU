import './globals.css'
import type { Metadata } from 'next'
import {Providers} from "./providers";

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
          {children}
        </Providers>
      </body>
    </html>
  )
}
