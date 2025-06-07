import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
    title: 'Justin Kaczmar',
    description: 'Design Engineer | Justin Kaczmar (picklepilot)',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`bg-zinc-100`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
