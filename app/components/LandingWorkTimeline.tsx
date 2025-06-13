'use client'

import { faDiploma } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
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
        icon: faDiploma,
        toolkitAdditions: [],
        // toolkitAdditions: ['MVC Architecture', 'OOP', 'RESTful APIs', 'Collaboration/Teamwork', 'LAMP Stack', 'Java'],
        iconBackground: null,
        content:
            'Obtained my BA in Computer Science from SUNY New Paltz. During my time there, the Computing & Math team won a few first places at comps and I built a conference management/networking app during a paid internship. By my last semester I had moved to NYC and was working full time at a branding agency.',
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
            // 'Project Management',
            // 'UX/UI',
            'Javascript',
            'CSS3',
            'PHP',
            'MySQL',
            'HTML 5',
            'Sass',
            'Swift',
            'Bootstrap',
            'Wordpress',
        ],
        iconBackground: '#fff',
        howItRelates:
            'I created dozens of ad campaign material as part of larger projects, including limited run micro-sites, ad banners and even an iBook. At that point, all animations were done with pure CSS and a bit of JS (gosh, I remember when parallax scrolling would almost guarantee you a win in a pitch). This is the job that completly solidified my opinion and understanding of the importance of design before/during development.',
        content:
            'This would be my first professional career job. I was hired (while still in school) and was asked to build an iPhone app MVP to show a client the next week—and it was then that I realized "smarter not harder" would play a pivotal role. (Do you remember Titanium Mobile? This is pre-React Native or Flutter, mind.) <br /><br />Also, my knack for understanding the language of design bode well for me while working at an agency born of some very well respected architects and designers. I became the go-to for prototyping/proving out what current technologies could allow us to do with a front end.',
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
            'Product Ownership',
            'Client Relations',
            'Firebase',
            'Laravel',
            'Vue',
            'NoSQL (MongoDB/Firebase)',
        ],
        iconBackground: '#fff',
        howItRelates:
            'This was my first taste of designing and building a tool from the ground up. During my time here, I used Laravel/Vue/Postgres to create a proprietary brand management tool to help our clients organize and collaborate with us privately.',
        content:
            'A former colleague of mine had started a branding agency and asked me to come on board to help build out the digital department. I was tasked with managing the digital projects, the technical digital strategy and execution of all client projects.',
    },
    {
        id: 6,
        logo: '3M_wordmark.png',
        role: 'Design Engineer',
        company: '3M',
        href: '#',
        date: '2017 - 2025',
        datetime: '2017-04-01',
        icon: null,
        toolkitAdditions: [
            'TailwindCSS/UI',
            'Typescript',
            'Vue 3',
            'Vite',
            'Design in Code',
            'Team Management',
            'Pinia',
            'Elasticsearch',
        ],
        iconBackground: '#fff',
        howItRelates:
            "Working for a large corporation has taught me a lot about the importance of being a self-starter, which I've just naturally always been. There is rarely enough time or bandwidth to get the attention of an audience, so a lot of my work has been design-in-code and rapid prototyping/discovery in order to prove that the next move would be worth it (hint: the answer was usually 'yes' and the next move was already done). Read more about this project by visiting a <a href='/work/mmm' class='text-blue-600 hover:text-blue-500 hover:underline'>mini case study page</a>.",
        content:
            'Design engineer for a PIM called HAMR. I incepted, designed and built the client application from the ground up. I am now working to modernize the full client-side tech stack in carefully planned migration. Spend all day knee deep in TailwindCSS, Vue 3, Typescript and Vite.',
    },
]

interface SparkleProps {
    delay?: number
    angle?: number
    distance?: number
}

const Sparkle = ({ delay = 0, angle = 0, distance = 100 }: SparkleProps) => {
    const x = Math.cos(angle * (Math.PI / 180)) * distance
    const y = Math.sin(angle * (Math.PI / 180)) * distance

    return (
        <motion.div
            initial={{
                scale: 0,
                opacity: 0,
                x: 0,
                y: 0,
            }}
            animate={{
                scale: [0, 1, 0.5, 0],
                opacity: [0, 1, 0.8, 0],
                x: [0, x * 0.5, x],
                y: [0, y * 0.5, y],
            }}
            transition={{
                delay,
                duration: 1,
                times: [0, 0.2, 0.6, 1],
                ease: 'easeOut',
            }}
            className='absolute h-1 w-1 rounded-full bg-lime-500'
            style={{
                boxShadow: '0 0 8px rgba(132, 204, 22, 0.8), 0 0 16px rgba(132, 204, 22, 0.4)',
                left: '50%',
                top: '50%',
            }}
        />
    )
}

const RippleWave = ({ delay = 0 }) => (
    <motion.div
        initial={{
            scale: 1,
            opacity: 1,
            borderWidth: '2px',
        }}
        animate={{
            scale: 3,
            opacity: 0,
            borderWidth: '1px',
        }}
        transition={{
            delay,
            duration: 1.6,
            ease: 'easeInOut',
        }}
        className='pointer-events-none absolute inset-0 rounded-3xl border-lime-500'
        style={{
            boxShadow: '0 0 12px rgba(132, 204, 22, 0.8), 0 0 24px rgba(132, 204, 22, 0.4)',
        }}
    />
)

export default function LandingWorkTimeline() {
    return (
        <div className='relative mx-auto w-full max-w-3xl'>
            <ul role='list' className='relative space-y-8'>
                {timeline
                    .sort((a, b) => a.id - b.id)
                    .map((event, eventIdx) => {
                        const toolkitRef = useRef(null)
                        const isInView = useInView(toolkitRef, { once: true, margin: '-100px' })

                        return (
                            <li key={event.id}>
                                <div
                                    className={`relative ${eventIdx === 0 ? 'bg-zinc-100' : 'bg-zinc-100'} rounded-3xl p-4 sm:p-8 dark:bg-zinc-800`}
                                >
                                    <div className='relative flex space-x-3 pr-4 md:pr-0'>
                                        <div
                                            className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800`}
                                        >
                                            <div className='relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-900/8 bg-white shadow-lg shadow-zinc-800/5 dark:border dark:border-zinc-700/40 dark:bg-zinc-800 dark:shadow dark:ring-0 dark:shadow-zinc-900/50'>
                                                {event.icon && (
                                                    <FontAwesomeIcon icon={event.icon} className='h-4 w-4' />
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
                                                <p className='mt-2 max-w-sm text-base text-zinc-500 sm:max-w-md'>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: event.content,
                                                        }}
                                                    ></span>
                                                </p>

                                                {/* Toolkit Additions */}
                                                {event.toolkitAdditions?.length > 0 && (
                                                    <motion.div
                                                        ref={toolkitRef}
                                                        className='relative mt-4 w-full rounded-3xl bg-gradient-to-br from-zinc-200/80 via-zinc-300/60 to-zinc-200/80 p-0.5 dark:from-zinc-800 dark:via-zinc-700/60 dark:to-zinc-800'
                                                        style={{
                                                            border: '2px solid transparent',
                                                            backgroundClip: 'padding-box',
                                                        }}
                                                    >
                                                        <motion.div
                                                            className='absolute inset-0 rounded-2xl'
                                                            initial={{
                                                                background:
                                                                    'linear-gradient(90deg, rgb(132 204 22) 0%, rgb(132 204 22) 0%, transparent 0%)',
                                                                opacity: 0,
                                                            }}
                                                            animate={
                                                                isInView
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
                                                        <div className='relative z-10 flex flex-wrap items-center rounded-3xl'>
                                                            <PageLogoCloud
                                                                cols={PageLogoCloud.cols.THREE}
                                                                className={'rounded-2xl'}
                                                                theme={{
                                                                    containerClassName:
                                                                        'rounded-2xl bg-transparent dark:bg-transparent',
                                                                    gridClassName: 'md:grid-cols-5',
                                                                    imageClassName: 'max-h-6 sm:max-h-8',
                                                                    logoWrapperClassName: 'p-2 sm:p-4',
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
