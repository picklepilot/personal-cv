'use client'

import LandingHeroMeshBackground from '@/app/components/LandingHeroMeshBackground'
import PicklepilotLogo from '@/app/components/PicklepilotLogo'
import { faAt, faPhone } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LandingHeroHeader from './LandingHeroHeader'
import PageHeader from './PageHeader'
import PageSection from './PageSection'

export default function LandingHero() {
    return (
        <div className='relative isolate mx-auto w-full max-w-3xl overflow-hidden'>
            <LandingHeroMeshBackground />

            <div className='mx-auto w-full max-w-3xl lg:flex'>
                <div className='mx-auto w-full lg:mx-0 lg:flex-shrink-0'>
                    <div className='flex items-center justify-between px-8 pt-6 pb-10 md:px-6 md:pb-6'>
                        <PicklepilotLogo />
                        <span className='group flex flex-col space-x-2 text-right text-sm opacity-65 hover:opacity-100 md:flex-row md:items-center md:text-left'>
                            <span className='flex items-center justify-end md:justify-start'>
                                <FontAwesomeIcon icon={faPhone} className='mr-1 w-3' />
                                <span>845-667-2583</span>
                            </span>
                            <span className='hidden md:inline'>&middot;</span>
                            <span className='flex items-center'>
                                <FontAwesomeIcon icon={faAt} className='mr-1 w-3' />
                                <a
                                    href='mailto:kaczmar.justin@gmail.com'
                                    className='hover:text-blue-500 hover:underline'
                                >
                                    kaczmar.justin@gmail.com
                                </a>
                            </span>
                        </span>
                    </div>

                    <PageSection className='relative isolate mx-auto w-full max-w-3xl overflow-hidden rounded-lg rounded-t-2xl border border-zinc-900/8 bg-gradient-to-br from-white/80 to-white/60 py-10 shadow-2xl shadow-black/10 backdrop-blur-md dark:border-zinc-600/30 dark:bg-gradient-to-br dark:from-zinc-900/60 dark:to-zinc-800/40 dark:shadow-black/50'>
                        <PageHeader title='My name is Justin'>
                            <LandingHeroHeader />

                            <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-100'>
                                I have been a design-driven full-stack engineer for a couple decades now. Born in New
                                York and now living in Minneapolis, Minnesota.
                            </p>

                            <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-100'>
                                My journey to becoming the professional I am today spans decades of diverse experiences
                                and fascinating projects. From crafting mixtape cover art while developing ActionScript
                                based flash websites for local bands to{' '}
                                <a href='/work/mmm' className='link'>
                                    bringing a multinational conglomerate's PIM into the modern age of web
                                </a>
                                —I've done a lot, and come away with some pretty substantial experience leading to my
                                unique toolbox. I've always liked the term "bridge-gapper" for what I can do.
                            </p>

                            <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-100'>
                                I've been actively seeking new opportunities to grow and contribute to innovative teams.
                                What follows will show why I'm excited about the possibilities ahead and ready to make
                                an impact.
                            </p>
                        </PageHeader>
                    </PageSection>
                </div>
            </div>
        </div>
    )
}
