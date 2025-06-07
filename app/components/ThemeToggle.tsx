'use client'

import { faMoon, faSun } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-zinc-900/5 transition-all hover:bg-zinc-50 dark:bg-zinc-800 dark:ring-white/10 dark:hover:bg-zinc-700'
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <FontAwesomeIcon
                icon={theme === 'light' ? faMoon : faSun}
                className='h-4 w-4 text-zinc-600 dark:text-zinc-400'
            />
        </button>
    )
}
