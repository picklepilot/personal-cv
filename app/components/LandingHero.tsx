'use client'

import LandingHeroHeader from '@/app/components/LandingHeroHeader'
import LandingHeroMeshBackground from '@/app/components/LandingHeroMeshBackground'
import PicklepilotLogo from '@/app/components/PicklepilotLogo'
import { faAt, faPhone } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageHeader from './PageHeader'
import PageSection from './PageSection'

export default function LandingHero() {
    return (
        <div className='relative isolate overflow-hidden bg-white'>
            <LandingHeroMeshBackground />

            <div className='mx-auto w-full max-w-3xl px-8 pb-10 pt-8 md:px-16 md:pb-8 lg:flex'>
                <div className='mx-auto w-full lg:mx-0 lg:flex-shrink-0'>
                    <div className='flex items-center justify-between'>
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

                    <PageSection>
                        <PageHeader title='My name is Justin'>
                            <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400'>
                                I have been a design-driven full-stack engineer for a couple decades now. Born in New
                                York, I now am a Midwesterner living in Minneapolis, Minnesota.
                            </p>
                            <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400'>
                                My history leading to the professional that I am now is long, varied and full of
                                interesting stories. From designing print mixtape covers while building ActionScript
                                based flash websites for local bands to{' '}
                                <a href='/work/mmm' className='text-sky-600 hover:text-sky-500 hover:underline'>
                                    bringing a multinational conglomerate's PIM into the modern age of web
                                </a>
                                —I've done a lot, and come away with some pretty substantial experience leading to my
                                unique toolbox. I've always liked the term "bridge-gapper" for what I can do.
                            </p>
                        </PageHeader>
                    </PageSection>

                    <LandingHeroHeader />

                    <p className='mt-4 text-base text-zinc-600 md:mt-6 md:text-xl md:leading-7'>
                        I've been actively seeking new opportunities to grow and contribute to innovative teams. What
                        follows will show why I'm excited about the possibilities ahead and ready to make an impact.
                    </p>
                </div>
            </div>
        </div>
    )
}
