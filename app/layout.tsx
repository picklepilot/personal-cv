import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { ThemeProvider } from './components/ThemeProvider'
import './globals.css'

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
            <body className={`bg-zinc-50 dark:bg-zinc-900`}>
                <ThemeProvider defaultTheme='light'>{children}</ThemeProvider>
                <Analytics />
            </body>
        </html>
    )
}
