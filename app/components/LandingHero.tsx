'use client'

import LandingHeroHeader from '@/app/components/LandingHeroHeader'
import LandingHeroMeshBackground from '@/app/components/LandingHeroMeshBackground'
import PicklepilotLogo from '@/app/components/PicklepilotLogo'

export default function LandingHero() {
    return (
        <div className="relative isolate overflow-hidden bg-white">
            <LandingHeroMeshBackground />

            <div className="mx-auto w-full max-w-3xl px-6 pb-24 pt-8 md:px-16 md:pb-8 lg:flex">
                <div className="mx-auto w-full lg:mx-0 lg:flex-shrink-0">
                    <PicklepilotLogo />

                    <LandingHeroHeader />

                    <p className="mt-4 text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8">
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
