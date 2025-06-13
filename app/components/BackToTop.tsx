'use client'

import { faArrowUp } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function BackToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            onClick={scrollToTop}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-zinc-900/5 transition-all hover:bg-zinc-50 dark:bg-zinc-800 dark:ring-white/10 dark:hover:bg-zinc-700'
            aria-label={`Back to top`}
        >
            <FontAwesomeIcon icon={faArrowUp} className='h-4 w-4 text-zinc-600 dark:text-zinc-400' />
        </button>
    )
}
