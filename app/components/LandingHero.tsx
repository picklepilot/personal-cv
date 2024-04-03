'use client'

import LandingHeroHeader from '@/app/components/LandingHeroHeader'
import LandingHeroMeshBackground from '@/app/components/LandingHeroMeshBackground'
import PicklepilotLogo from '@/app/components/PicklepilotLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAt } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'

export default function LandingHero() {
    return (
        <div className="relative isolate overflow-hidden bg-white">
            <LandingHeroMeshBackground />

            <div className="mx-auto w-full max-w-3xl px-8 pb-10 pt-8 md:px-16 md:pb-8 lg:flex">
                <div className="mx-auto w-full lg:mx-0 lg:flex-shrink-0">
                    <div className="flex items-center justify-between">
                        <PicklepilotLogo />
                        <span className="group flex items-center space-x-2 text-sm opacity-65 hover:opacity-100">
                            <span className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="mr-1 w-3"
                                />
                                <span>845-667-2583</span>
                            </span>
                            <span>&middot;</span>
                            <span className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faAt}
                                    className="mr-1 w-3"
                                />
                                <a
                                    href="mailto:kaczmar.justin@gmail.com"
                                    className="hover:text-sky-500 hover:underline"
                                >
                                    kaczmar.justin@gmail.com
                                </a>
                            </span>
                        </span>
                    </div>

                    <LandingHeroHeader />

                    <p className="mt-4 text-base text-zinc-600 md:mt-6 md:text-xl md:leading-7 md:leading-8">
                        Until a week ago, I wasn't actively looking for the next
                        thing, yet. What follows should make it clear why I felt
                        compelled to jump at the opportunity that is being
                        offered by Tailwind Labs.
                    </p>
                </div>
            </div>
        </div>
    )
}
