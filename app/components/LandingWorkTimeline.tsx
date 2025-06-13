'use client'

import { faGraduationCap } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import PageLogoCloud from './PageLogoCloud'

const timeline = [
    // {
    //     id: 1,
    //     logo: null,
    //     role: 'Web Developer & UX/UI Design Enthusiast',
    //     company: 'Self',
    //     href: '#',
    //     date: '2002 - today',
    //     datetime: '2002-01-01',
    //     icon: faChild,
    //     iconBackground: null,
    //     toolkitAdditions: [],
    //     content:
    //         "Since youth, I've been more concerned with the relative canvas and how all the things fit onto the canvas in a pleasing/meaningful way. I spent my high school years designing mixtape covers and flash websites for local artists, sometimes even getting paid!",
    // },
    // {
    //     id: 2,
    //     logo: null,
    //     role: 'Touring Musician',
    //     company: 'Warner Music Group',
    //     href: '#',
    //     date: '2004 - 2008',
    //     datetime: '2004-01-01',
    //     icon: faVanShuttle,
    //     iconBackground: null,
    //     howItRelates:
    //         'Being in a touring band taught me, from a young age, the importance of working well in a tight-knit team. No, not just a class project type team, but surviving on your own in the real world type teamwork.',
    //     toolkitAdditions: ['Semantic HTML/5', 'PHP', 'MySQL', 'jQuery'],
    //     content:
    //         'While writing music and touring in an active rock band, I managed to start getting more into traditionally designed websites. Took on freelance work while touring.',
    // },
    {
        id: 3,
        logo: null,
        role: 'Student',
        company: 'SUNY New Paltz',
        href: '#',
        date: '2008 - 2012',
        datetime: '2012-06-01',
        icon: faGraduationCap,
        toolkitAdditions: [],
        // toolkitAdditions: ['MVC Architecture', 'OOP', 'RESTful APIs', 'Collaboration/Teamwork', 'LAMP Stack', 'Java'],
        iconBackground: null,
        content:
            '<ul class="list-disc pl-4"><li>Obtained my BA in Computer Science</li><li>President, Math & Computing Science Club</li><li>Provided mentorship and organized programming competitions</li><li>During my last semester I had moved to NYC and was working full time at a branding agency.</li></ul>',
    },
    {
        id: 4,
        logo: 'mblm-logo.webp',
        role: 'Senior Web Developer',
        company: 'MBLM',
        href: 'https://mblm.com',
        date: '2012 - 2015',
        datetime: '2015-09-30',
        icon: null,
        toolkitAdditions: [
            'Bootstrap',
            'CSS3',
            'HTML 5',
            'Javascript',
            'MySQL',
            'PHP',
            'Sass',
            'Swift',
            'Wordpress',
            // 'Project Management',
            // 'UX/UI',
        ],
        iconBackground: '#fff',
        howItRelates:
            'I created dozens of ad campaign material as part of larger projects, including limited run micro-sites, ad banners and even an iBook. At that point, all animations were done with pure CSS and a bit of JS (gosh, I remember when parallax scrolling would almost guarantee you a win in a pitch). This is the job that completly solidified my opinion and understanding of the importance of design before/during development.',
        // content:
        //     'This would be my first professional career job. I was hired (while still in school) and was asked to build an iPhone app MVP to show a client the next week—and it was then that I realized "smarter not harder" would play a pivotal role. (Do you remember Titanium Mobile? This is pre-React Native or Flutter, mind.) <br /><br />Also, my knack for understanding the language of design bode well for me while working at an agency born of some very well respected architects and designers. I became the go-to for prototyping/proving out what current technologies could allow us to do with a front end.',
        content: `<ul class="list-disc pl-4">
            <li>First professional career job</li>
            <li>Led several successful builds for clients including UL, American Airlines, SLS Hotels and Miami Worldcenter</li>
            <li>Developed one of my most coveted skills—bridging the gap between deigners and developers</li>
            <li>Go-to for prototyping/proving out what current technologies could allow us to do with a front end</li>
        </ul>`,
    },
    {
        id: 5,
        logo: 'studio-tano-logo.jpeg',
        role: 'Director of Digital',
        company: 'Studio Tano',
        href: '#',
        date: '2015 - 2016',
        datetime: '2015-10-01',
        icon: null,
        toolkitAdditions: [
            'CSS 3',
            'Figma',
            'Firebase',
            'HTML 5',
            'Javascript',
            'Laravel',
            'MySQL',
            'PHP',
            'Sass',
            'Vue',
            // 'Client Relations',
            // 'Product Ownership',
        ],
        iconBackground: '#fff',
        howItRelates:
            'This was my first taste of designing and building a tool from the ground up. During my time here, I used Laravel/Vue/Postgres to create a proprietary brand management tool to help our clients organize and collaborate with us privately.',
        content: `<ul class="list-disc pl-4">
            <li>Brought on as first hire for a boutique branding agency started by a former colleague</li>
            <li>Managed technical side of projects e2e</li>
            <li>Oversaw development strategy</li>
            <li>Created a proprietary brand management tool to help our clients organize and collaborate with us privately</li>
        </ul>`,
    },
    {
        id: 6,
        logo: '3M_wordmark.png',
        role: 'Designer & Front-end Engineer, HAMR',
        company: '3M',
        href: '#',
        date: '2017 - 2025',
        datetime: '2017-04-01',
        icon: null,
        toolkitAdditions: [
            'CSS 3',
            'Docker',
            'Elasticsearch',
            'Figma',
            'Linux',
            'MySQL',
            'PHP',
            'TailwindCSS',
            'Typescript',
            'Vite',
            'Vue',
        ],
        iconBackground: '#fff',
        howItRelates:
            "Working for a large corporation has taught me a lot about the importance of being a self-starter, which I've just naturally always been. There is rarely enough time or bandwidth to get the attention of an audience, so a lot of my work has been design-in-code and rapid prototyping/discovery in order to prove that the next move would be worth it (hint: the answer was usually 'yes' and the next move was already done). Read more about this project by visiting a <a href='/work/mmm' class='text-blue-600 hover:text-blue-500 hover:underline'>mini case study page</a>.",
        content: `<ul class="list-disc pl-4">
            <li>Design engineer for an internal product called HAMR</li>
            <li>Designed and built the client application from the ground up</li>
            <li>Most recently completed a full modernization/migration project (Vue 3, Typescript, Vite)</li>
            <li>🏆 2024 Global Marketing Excellence Award winner</li>
        </ul>`,
    },
]

export default function LandingWorkTimeline() {
    const toolkitRef0 = useRef(null)
    const toolkitRef1 = useRef(null)
    const toolkitRef2 = useRef(null)
    const toolkitRef3 = useRef(null)
    const toolkitRef4 = useRef(null)

    const toolkitRefs = [toolkitRef0, toolkitRef1, toolkitRef2, toolkitRef3, toolkitRef4]

    const isInView0 = useInView(toolkitRef0, { once: true, margin: '-100px' })
    const isInView1 = useInView(toolkitRef1, { once: true, margin: '-100px' })
    const isInView2 = useInView(toolkitRef2, { once: true, margin: '-100px' })
    const isInView3 = useInView(toolkitRef3, { once: true, margin: '-100px' })
    const isInView4 = useInView(toolkitRef4, { once: true, margin: '-100px' })

    const isInView = [isInView0, isInView1, isInView2, isInView3, isInView4]

    return (
        <div className='relative mx-auto w-full max-w-3xl'>
            <ul role='list' className='relative space-y-8'>
                {timeline
                    .sort((a, b) => a.id - b.id)
                    .map((event, eventIdx) => {
                        // const isInView = useInView(toolkitRefs[eventIdx], { once: true, margin: '-100px' })

                        return (
                            <li key={event.id}>
                                <div
                                    className={`relative ${eventIdx === 0 ? 'bg-zinc-100' : 'bg-zinc-100'} rounded-xl p-4 sm:p-8 dark:bg-zinc-800`}
                                >
                                    <div className='relative flex space-x-3 pr-4 md:pr-0'>
                                        <div
                                            className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800`}
                                        >
                                            <div className='relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-900/8 bg-white shadow-lg shadow-zinc-800/5 dark:border dark:border-zinc-700/40 dark:bg-white dark:shadow dark:ring-0 dark:shadow-zinc-900/50'>
                                                {event.icon && (
                                                    <FontAwesomeIcon
                                                        icon={event.icon}
                                                        className='h-4 w-4 dark:text-zinc-900'
                                                    />
                                                )}
                                                {event.logo && <img className='w-6' src={`/${event.logo}`} alt='' />}
                                            </div>
                                        </div>
                                        <div className='mb-3 flex min-w-0 flex-1 flex-wrap-reverse justify-between pt-1 md:flex-row md:space-x-4'>
                                            <div className='mt-1 md:mt-0'>
                                                <div className='flex items-center justify-between'>
                                                    <div className='text-lg font-semibold'>{event.role}</div>
                                                    <time className='text-sm text-zinc-500' dateTime={event.datetime}>
                                                        {event.date}
                                                    </time>
                                                </div>
                                                <div className='mt-0.5 flex items-center space-x-2 text-sm font-medium text-zinc-700'>
                                                    <span>{event.company}</span>
                                                    {event.href !== '#' && (
                                                        <span className='flex items-center space-x-2'>
                                                            <span>&middot;</span>
                                                            <a
                                                                href={event.href}
                                                                target={'_blank'}
                                                                className='ml-1 text-blue-600 hover:text-blue-500'
                                                            >
                                                                {event.href}
                                                            </a>
                                                        </span>
                                                    )}
                                                </div>
                                                <div className='mt-2 max-w-sm text-base text-zinc-500 sm:max-w-full md:pr-18'>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: event.content,
                                                        }}
                                                    />
                                                </div>

                                                {/* Toolkit Additions */}
                                                {event.toolkitAdditions?.length > 0 && (
                                                    <div className='mt-6 font-semibold text-zinc-900/40'>
                                                        Primary toolkit:
                                                    </div>
                                                )}
                                                {event.toolkitAdditions?.length > 0 && (
                                                    <motion.div
                                                        ref={toolkitRefs[eventIdx]}
                                                        className='relative mt-2 w-full rounded-xl bg-gradient-to-br from-zinc-200/80 via-zinc-300/60 to-zinc-200/80 p-0.5 dark:from-zinc-800 dark:via-zinc-700/60 dark:to-zinc-800'
                                                        style={{
                                                            border: '2px solid transparent',
                                                            backgroundClip: 'padding-box',
                                                        }}
                                                    >
                                                        <motion.div
                                                            className='absolute inset-0 rounded-xl'
                                                            initial={{
                                                                background:
                                                                    'linear-gradient(90deg, rgb(132 204 22) 0%, rgb(132 204 22) 0%, transparent 0%)',
                                                                opacity: 0,
                                                            }}
                                                            animate={
                                                                isInView[eventIdx]
                                                                    ? {
                                                                          background:
                                                                              'linear-gradient(90deg, rgb(132 204 22) 0%, rgb(132 204 22) 100%, transparent 100%)',
                                                                          opacity: 1,
                                                                      }
                                                                    : {
                                                                          background:
                                                                              'linear-gradient(90deg, rgb(132 204 22) 0%, rgb(132 204 22) 0%, transparent 0%)',
                                                                          opacity: 0,
                                                                      }
                                                            }
                                                            transition={{
                                                                duration: 1,
                                                                ease: 'easeInOut',
                                                            }}
                                                            style={{
                                                                maskImage:
                                                                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                                maskComposite: 'exclude',
                                                                WebkitMaskImage:
                                                                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                                                WebkitMaskComposite: 'xor',
                                                            }}
                                                        />
                                                        <div className='relative z-10 flex w-full flex-wrap items-center rounded-xl'>
                                                            <PageLogoCloud
                                                                cols={PageLogoCloud.cols.THREE}
                                                                className={'rounded-xl'}
                                                                theme={{
                                                                    containerClassName:
                                                                        'rounded-xl bg-transparent dark:bg-transparent md:max-w-full w-full',
                                                                    gridClassName: 'grid-cols-3',
                                                                    imageClassName: 'max-h-6 sm:max-h-8',
                                                                    logoWrapperClassName: 'px-2 py-4 sm:p-4',
                                                                }}
                                                                technologies={event.toolkitAdditions as any}
                                                            />
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
