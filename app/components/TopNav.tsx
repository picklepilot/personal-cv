'use client'

import Link from 'next/link'

type TopNavProps = {
    show: boolean
}

export default function TopNav(props: TopNavProps) {
    const variants = {
        open: { top: 65 },
        close: { top: -40 },
    }

    return (
        <div className={`fixed top-16 z-10 w-full bg-white/5`}>
            <nav className="pointer-events-auto mx-auto flex max-w-3xl px-5">
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                    <li>
                        <Link
                            className="relative block px-3 py-2 transition hover:text-lime-500 dark:hover:text-lime-400"
                            href="/"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="relative block px-3 py-2 transition hover:text-lime-500 dark:hover:text-lime-400"
                            href="/"
                        >
                            Me
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="relative block px-3 py-2 transition hover:text-lime-500 dark:hover:text-lime-400"
                            href="/work"
                        >
                            Work
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
