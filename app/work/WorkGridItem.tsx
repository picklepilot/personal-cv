'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'

export default function WorkGridItem(props: any) {
    const { project } = props
    return (
        <li className="group relative flex flex-col items-start">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                    alt=""
                    loading="lazy"
                    width="32"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    className="h-auto w-8"
                    src={`/${project.logo}`}
                />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                {project.url ? (
                    <a href={project.url}>
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">{project.name}</span>
                    </a>
                ) : (
                    <span>
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">{project.name}</span>
                    </span>
                )}
            </h2>
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.blurb}
            </p>
            <p className="relative z-10 mt-6 flex items-center space-x-1.5 text-sm font-medium text-zinc-400 transition group-hover:text-sky-500 dark:text-zinc-200">
                <FontAwesomeIcon icon={faInfoCircle} className="h-3 w-3" />
                <span className="ml-2">Click to learn more</span>
            </p>
        </li>
    )
}
