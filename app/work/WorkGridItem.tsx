'use client'

import { cn } from '@/app/utils/class-name.utils'
import { faArrowRight } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'

export default function WorkGridItem(props: any) {
    const { project } = props
    return (
        <li className='group relative flex min-h-[300px] justify-start overflow-hidden p-4 first:rounded-t-xl last:rounded-b-xl sm:min-h-[500px] md:p-12'>
            {/* Background image with opacity control - hidden on mobile */}
            {project.backgroundImage && (
                <div
                    className={twMerge(
                        `absolute -inset-2 hidden bg-cover bg-top bg-no-repeat opacity-100 sm:block`,
                        project.backgroundImageClasses || ''
                    )}
                    style={{
                        backgroundImage: `url(${project.backgroundImage})`,
                    }}
                ></div>
            )}

            {/* Background overlay mesh */}
            <div className={`absolute inset-0 ${project.color}`}></div>

            {/* Floating glass panel */}
            <div className='relative z-10 flex h-full w-full flex-col items-start rounded-3xl border border-white/8 bg-white/5 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 sm:w-2/3 sm:rounded-2xl dark:border-white/10 dark:bg-black/20'>
                {/* Secondary glass layer for depth */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-black/20 via-transparent to-black/5 dark:from-black/20 dark:via-transparent dark:to-black/5'></div>

                <div className='mb-4 flex w-full items-center justify-between'>
                    <div className='z-20 flex h-7 items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm sm:absolute sm:top-4 sm:left-4 dark:border-white/10 dark:bg-white/5'>
                        <img
                            alt=''
                            loading='lazy'
                            width='32'
                            height='16'
                            decoding='async'
                            data-nimg='1'
                            className={cn('h-auto w-6', project.logoClasses)}
                            src={`/${project.logo}`}
                        />
                    </div>
                    {/* Dates in upper right corner */}
                    {project.dates && (
                        <div className='z-20 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm sm:absolute sm:top-4 sm:right-4 dark:border-white/10 dark:bg-black/20'>
                            <p className={`text-xs font-medium ${project.contentClasses}`}>{project.dates}</p>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className='relative z-10 flex h-full w-full flex-col items-start justify-center'>
                    <div className={cn('flex min-h-px grow flex-col justify-center', project.contentClasses)}>
                        <h2 className='text-2xl font-bold md:text-2xl'>{project.name}</h2>
                        <p className='relative z-10 mt-2 mb-6 text-base'>{project.blurb}</p>
                    </div>

                    <div className='flex w-full items-center justify-end'>
                        {project.enabled && (
                            <a
                                href={project.url}
                                className='group/more-btn relative z-10 mt-auto flex w-auto items-center justify-center space-x-1.5 rounded-full border border-white/8 bg-white/10 px-3 py-2 text-sm font-medium text-stone-900/80 shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-300 hover:border-white/15 hover:bg-white/20 hover:shadow-xl hover:shadow-black/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10'
                                target={project.url.includes('http') ? '_blank' : undefined}
                            >
                                <span className=''>View</span>
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className='h-3 w-3 transition-transform group-hover/more-btn:translate-x-1'
                                />
                            </a>
                        )}
                        {!project.enabled && (
                            <span className={`opacity-60 ${project.contentClasses}`}>Details coming soon</span>
                        )}
                    </div>
                </div>
            </div>
        </li>
    )
}
