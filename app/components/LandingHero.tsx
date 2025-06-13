'use client'

import LandingHeroMeshBackground from '@/app/components/LandingHeroMeshBackground'
import JKPictureWithAnimations from './JKPictureWithAnimations'
import LandingHeroHeader from './LandingHeroHeader'

export default function LandingHero() {
    return (
        <div id='hero' className='relative isolate mx-auto flex w-full max-w-3xl justify-center'>
            <LandingHeroMeshBackground />

            {/* Bento Grid Layout */}
            <div className='mx-auto w-full max-w-3xl lg:flex'>
                <div className='mx-auto w-full px-6 sm:px-0 lg:mx-0 lg:flex-shrink-0'>
                    {/* <div className='flex items-center justify-between px-6 pt-4 pb-6 sm:px-6 md:px-6 md:pb-6 lg:pt-6 lg:pb-10'>
                        <PicklepilotLogo />
                        <div className='group flex hidden flex-col space-y-1 text-right text-xs opacity-65 hover:opacity-100 sm:text-sm md:flex-row md:items-center md:space-y-0 md:space-x-2 md:text-left'>
                            <span className='flex items-center justify-end md:justify-start'>
                                <FontAwesomeIcon icon={faPhone} className='mr-1 w-3' />
                                <span>845-667-2583</span>
                            </span>
                            <span className='hidden md:inline'>&middot;</span>
                            <span className='flex items-center justify-end md:justify-start'>
                                <FontAwesomeIcon icon={faAt} className='mr-1 w-3' />
                                <a
                                    href='mailto:kaczmar.justin@gmail.com'
                                    className='hover:text-blue-500 hover:underline'
                                >
                                    kaczmar.justin@gmail.com
                                </a>
                            </span>
                        </div>
                    </div> */}

                    {/* Hero Grid */}

                    <div className='relative order-1 lg:col-span-3 lg:row-span-3'>
                        <div className='absolute inset-px rounded-4xl bg-white shadow-lg dark:bg-zinc-800'></div>
                        <div className='relative flex h-full flex-col overflow-hidden'>
                            <div className='@container relative mx-auto min-h-[600px] w-full grow sm:min-h-96 lg:min-h-120'>
                                {/* JK Picture with Animations */}
                                <JKPictureWithAnimations />

                                <div className='absolute inset-px z-20 flex rounded-4xl bg-gradient-to-t from-amber-900/0 via-amber-900/20 to-amber-900/40 p-6 transition-all duration-700 sm:bg-gradient-to-r dark:from-black/0 dark:via-black/20 dark:to-black/40'>
                                    <div className='pointer-events-auto flex w-full transform flex-col p-6 text-right text-lime-400 transition-all duration-500 hover:translate-y-[-4px] sm:justify-between sm:p-4 sm:px-6 sm:py-8 dark:text-lime-400'>
                                        <h3 className='text-center text-[70px]/18 font-bold transition-all duration-300 sm:grow sm:text-right sm:text-[130px]/24'>
                                            Justin <br /> Kaczmar
                                        </h3>
                                        <LandingHeroHeader />
                                        {/* <p className='mt-5 text-center text-lg text-zinc-900/20 opacity-90 transition-all duration-300 hover:opacity-100 sm:mt-2 sm:text-right sm:text-base'>
                                            Design Engineer
                                        </p> */}
                                    </div>
                                </div>

                                {/* <div className='absolute inset-0 z-20 flex items-center justify-end p-6 transition-all duration-700'>
                                    <div className='relative z-10 flex h-auto w-full flex-col items-start rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 sm:w-1/2 sm:rounded-2xl dark:border-white/10 dark:bg-black/20'>
                                        <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-white/5 dark:from-black/20 dark:via-transparent dark:to-black/5'></div>
                                        <div className='relative z-10 flex h-full min-h-px w-full grow flex-col items-start justify-center'>
                                            <div className='pointer-events-auto w-full transform p-4 text-center text-white transition-all duration-500 hover:translate-y-[-4px] sm:px-6 sm:py-12'>
                                                <h3 className='text-3xl font-bold transition-all duration-300 hover:text-lime-300 sm:text-5xl'>
                                                    Justin Kaczmar
                                                </h3>
                                                <p className='mt-1 text-sm opacity-90 transition-all duration-300 hover:opacity-100 sm:mt-2 sm:text-base'>
                                                    Design Engineer
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className='pointer-events-none absolute inset-px rounded-4xl shadow-sm ring-1 ring-black/10 transition-all duration-700 dark:ring-white/10'></div>
                    </div>

                    {/* <div className='grid gap-3 px-6 sm:gap-4 sm:px-0 lg:grid-cols-2 lg:grid-rows-3'>

                        <div className='relative order-2 max-lg:row-start-1 lg:row-span-1'>
                            <div className='absolute inset-px rounded-lg opacity-80 backdrop-blur-md max-lg:rounded-t-4xl sm:bg-gradient-to-br md:from-lime-500 md:via-lime-600/70 md:to-lime-600 lg:rounded-tr-4xl md:dark:from-lime-900 md:dark:via-lime-800 md:dark:to-lime-700'></div>
                            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tr-[calc(2rem+1px)]'>
                                <div className='min-h-px grow px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8'>
                                    <LandingHeroHeader />
                                </div>
                            </div>
                            <div className='pointer-events-none absolute inset-px rounded-lg max-lg:rounded-t-4xl sm:shadow-sm sm:ring-1 sm:ring-lime-600/70 lg:rounded-tr-4xl dark:ring-white/10'></div>
                        </div>
                        <div className='relative -top-14 z-0 order-3 max-lg:row-start-3 sm:top-0 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-2'>
                            <div className='absolute inset-px rounded-4xl rounded-t-none bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500 opacity-80 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:from-lime-900 dark:via-lime-800 dark:to-lime-700'></div>
                            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]'>
                                <div className='p-8 pt-16 pb-6 sm:px-6 sm:pt-8 sm:pb-0 lg:p-10'>
                                    <p className='text-center text-xl/6 leading-relaxed text-lime-600 sm:text-left sm:text-base md:text-lg lg:text-2xl'>
                                        Actively seeking new opportunities to grow and contribute to innovative teams.
                                        Passionate about internal tools and building products that help people work
                                        better.
                                    </p>
                                </div>
                            </div>
                            <div className='pointer-events-none absolute inset-px rounded-4xl ring-1 ring-black/0 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:ring-white/10'></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
