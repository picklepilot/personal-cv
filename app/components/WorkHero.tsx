'use client'

import BadgeRound from '@/app/components/BadgeRound'
import { faArrowLeft } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'

type WorkHeroProps = {
    children?: React.ReactNode
    company: string
    dateEnd: string | null
    dateStart: string
    logo: string
    title: string
}

export default function WorkHero(props: WorkHeroProps) {
    const { company, title, dateStart, dateEnd, logo } = props

    return (
        <div id='work-hero' className='overflow-hidde relative isolate pt-6'>
            <div className='mx-auto w-full max-w-3xl px-8 pt-5 pb-10 md:px-16 md:pb-8 lg:flex'>
                <div className='mx-auto flex w-full flex-col space-y-8 lg:mx-0 lg:flex-shrink-0'>
                    <div className={``}>
                        <Link
                            href='/'
                            className='inline-flex items-center text-blue-600 hover:text-blue-500 hover:underline'
                        >
                            <FontAwesomeIcon icon={faArrowLeft} className='mr-2 h-3 w-3' />
                            <span>Back to main page</span>
                        </Link>
                    </div>

                    <div className='space-y-3 text-sm leading-5'>
                        <div className='font-medium text-zinc-500'>Name</div>
                        <div className='text-3xl font-bold sm:text-5xl dark:text-white'>{title}</div>
                    </div>

                    <div className='grid shrink-0 grid-cols-3 gap-5 md:col-span-3 md:grid-cols-4'>
                        <div className='col-span-1 space-y-3 text-sm leading-5 md:col-span-2'>
                            <div className='font-medium text-zinc-500'>Company</div>
                            <div className='flex items-center space-x-3 text-3xl font-bold text-zinc-800 dark:text-white'>
                                <BadgeRound>
                                    <img className='w-5' src={`/${logo}`} alt='' />
                                </BadgeRound>
                            </div>
                        </div>
                        <div className='space-y-3 text-sm leading-5'>
                            <div className='font-medium text-zinc-500'>Start date</div>
                            <div className='text-xl font-bold whitespace-nowrap dark:text-white'>
                                {dayjs(dateStart).format('MMM D, 20YY')}
                            </div>
                        </div>
                        <div className='space-y-3 text-sm leading-5'>
                            <div className='font-medium text-zinc-500'>End date</div>
                            <div className='text-xl font-bold dark:text-white'>
                                {dateEnd ? dayjs(dateEnd).format('MMM D, 20YY') : 'Current'}
                            </div>
                        </div>
                    </div>

                    <div className='text-sm leading-5'>
                        <div className='font-medium text-zinc-500'>Brief</div>

                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
