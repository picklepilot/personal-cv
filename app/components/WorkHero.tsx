'use client'

import dayjs from 'dayjs'
import LandingHeroMeshBackground from '@/app/components/LandingHeroMeshBackground'
// import PicklepilotLogo from '@/app/components/PicklepilotLogo'
import BadgeRound from '@/app/components/BadgeRound'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'

type WorkHeroProps = {
    company: string
    title: string
    dateStart: string
    dateEnd: string | null
    logo: string
    children?: React.ReactNode
}

export default function WorkHero(props: WorkHeroProps) {
    const { company, title, dateStart, dateEnd, logo } = props

    return (
        <div className="relative isolate overflow-hidden bg-white pt-6">
            <div className="mx-auto w-full max-w-3xl px-8 pb-10 pt-5 md:px-16 md:pb-8 lg:flex">
                <div className="mx-auto flex w-full flex-col space-y-8 lg:mx-0 lg:flex-shrink-0 ">
                    <div className={``}>
                        <Link
                            href="/"
                            className="inline-flex items-center text-sky-600 hover:text-sky-500 hover:underline"
                        >
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className="mr-2 h-3 w-3"
                            />
                            <span>Back to main page</span>
                        </Link>
                    </div>

                    <div className="space-y-3 text-sm leading-5">
                        <div className="font-medium text-zinc-500">Name</div>
                        <div className="text-3xl font-bold">{title}</div>
                    </div>

                    <div className="grid shrink-0 grid-cols-3 gap-5 md:col-span-3 md:grid-cols-4">
                        <div className="col-span-1 space-y-3 text-sm leading-5 md:col-span-2">
                            <div className="font-medium text-zinc-500">
                                Company
                            </div>
                            <div className="flex items-center space-x-3 text-3xl font-bold text-zinc-800">
                                <BadgeRound>
                                    <img
                                        className="w-6"
                                        src={`/${logo}`}
                                        alt=""
                                    />
                                </BadgeRound>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm leading-5">
                            <div className="font-medium text-zinc-500">
                                Start date
                            </div>
                            <div className="whitespace-nowrap text-xl font-bold">
                                {dayjs(dateStart).format('MMM D, 20YY')}
                            </div>
                        </div>
                        <div className="space-y-3 text-sm leading-5">
                            <div className="font-medium text-zinc-500">
                                End date
                            </div>
                            <div className="text-xl font-bold">
                                {dateEnd
                                    ? dayjs(dateEnd).format('MMM D, 20YY')
                                    : 'Current'}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm leading-5">
                        <div className="font-medium text-zinc-500">Brief</div>

                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
