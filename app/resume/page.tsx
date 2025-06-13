import PageSection from '@/app/components/PageSection'
import { ThemeToggle } from '@/app/components/ThemeToggle'
import VerticalNav from '@/app/components/VerticalNav'
import {
    faAt,
    faBriefcase,
    faCalendarAlt,
    faCamera,
    faCode,
    faGlobe,
    faGraduationCap,
    faHandshake,
    faMapMarkerAlt,
    faPhone,
    faStar,
    faTimeline,
    faTools,
    faUser,
} from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { NavItem } from '../types'

const navItems: NavItem[] = [
    { id: 'hero', label: 'Introduction', icon: faUser },
    { id: 'background', label: 'Background', icon: faTimeline },
    // { id: 'toolkit', label: 'Toolkit', icon: faToolbox },
    {
        id: 'case-studies',
        label: 'Case Studies',
        icon: faStar,
    },
    { id: 'reality', label: 'Reality', icon: faCamera },
    { id: 'thank-you', label: 'Thank You!', icon: faHandshake },
]

export default function Resume() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between py-2 dark:bg-zinc-900 dark:text-white'>
            {/* Vertical Navigation */}
            <VerticalNav navItems={navItems} />

            {/* Theme Toggle */}
            <div className='fixed top-4 right-4 z-50'>
                <ThemeToggle />
            </div>

            {/* Back to Home Link */}
            <div className='fixed top-4 left-4 z-50'>
                <Link
                    href='/'
                    className='flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 backdrop-blur-sm transition-all hover:bg-white hover:shadow-md dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-800'
                >
                    ← Back to Home
                </Link>
            </div>

            {/* Resume Header */}
            <section id='resume-header' className='mt-16 flex w-full justify-center'>
                <div className='mx-auto w-full max-w-4xl px-6'>
                    <div className='rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-xl dark:from-green-900/20 dark:to-emerald-900/20'>
                        <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
                            <div className='flex-1'>
                                <div className='mb-4'>
                                    <div className='mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500'>
                                        <span className='text-xl font-bold text-white'>JK</span>
                                    </div>
                                </div>
                                <h1 className='mb-2 text-4xl font-bold text-zinc-900 dark:text-white'>
                                    MY NAME IS{' '}
                                    <span className='text-green-600 dark:text-green-400'>JUSTIN KACZMAR</span>
                                </h1>
                                <p className='max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300'>
                                    I am a professional web developer and UI/UX enthusiast looking to fill a role that
                                    involves solving problems to create engaging, meaningful web applications.
                                </p>
                            </div>
                            <div className='flex flex-col gap-3 text-sm'>
                                <div className='flex items-center gap-2 text-zinc-600 dark:text-zinc-400'>
                                    <FontAwesomeIcon icon={faPhone} className='h-4 w-4' />
                                    <span>845.667.2583</span>
                                </div>
                                <div className='flex items-center gap-2 text-zinc-600 dark:text-zinc-400'>
                                    <FontAwesomeIcon icon={faAt} className='h-4 w-4' />
                                    <span>kaczmar.justin@gmail.com</span>
                                </div>
                                <div className='flex items-center gap-2 text-zinc-600 dark:text-zinc-400'>
                                    <FontAwesomeIcon icon={faGlobe} className='h-4 w-4' />
                                    <span>kaczmar.com</span>
                                </div>
                                <div className='flex items-center gap-2 text-zinc-600 dark:text-zinc-400'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='h-4 w-4' />
                                    <div>
                                        <div>6525 Knox Ave S</div>
                                        <div>Minneapolis, MN 55423</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills and Languages */}
            <section id='skills' className='mx-auto mt-8 w-full max-w-4xl px-6'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                    {/* Languages */}
                    <PageSection>
                        <div className='mb-6 flex items-center gap-3'>
                            <FontAwesomeIcon icon={faCode} className='h-6 w-6 text-green-600 dark:text-green-400' />
                            <h2 className='text-2xl font-bold text-zinc-900 dark:text-white'>LANGUAGES</h2>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='space-y-2'>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>PHP</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Javascript</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>MySQL / NoSQL</div>
                            </div>
                            <div className='space-y-2'>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>HTML5</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>CSS 3 / Sass</div>
                            </div>
                        </div>
                    </PageSection>

                    {/* Skills & Technology */}
                    <PageSection>
                        <div className='mb-6 flex items-center gap-3'>
                            <FontAwesomeIcon icon={faTools} className='h-6 w-6 text-green-600 dark:text-green-400' />
                            <h2 className='text-2xl font-bold text-zinc-900 dark:text-white'>TOOLKIT</h2>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='space-y-2'>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Meteor.js</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Vue.js</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Handlebars</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Express.js</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>React Native</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>REST APIs</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Sketch</div>
                            </div>
                            <div className='space-y-2'>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Laravel</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Craft CMS</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Wordpress</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Bootstrap</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>MongoDB</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Git</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>Build Tools</div>
                                <div className='font-medium text-zinc-800 dark:text-zinc-200'>SEO</div>
                            </div>
                        </div>
                    </PageSection>
                </div>
            </section>

            {/* Work History */}
            <section id='work-history' className='mx-auto mt-8 w-full max-w-4xl px-6'>
                <PageSection>
                    <div className='mb-8 flex items-center gap-3'>
                        <FontAwesomeIcon icon={faBriefcase} className='h-6 w-6 text-green-600 dark:text-green-400' />
                        <h2 className='text-2xl font-bold text-zinc-900 dark:text-white'>WORK HISTORY</h2>
                    </div>

                    <div className='space-y-8'>
                        {/* Current Role */}
                        <div className='border-l-4 border-green-500 pl-6'>
                            <div className='mb-2 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCalendarAlt} className='h-4 w-4 text-zinc-500' />
                                <span className='text-sm font-medium text-green-600 dark:text-green-400'>
                                    Dec 2016 - Current
                                </span>
                            </div>
                            <h3 className='mb-2 text-xl font-bold text-zinc-900 dark:text-white'>
                                Freelance Web Developer
                            </h3>
                            <p className='text-zinc-600 dark:text-zinc-400'>
                                I led every digital effort for Studio Tano. From client requirements to production.
                                Built brand management software using a BaaS and Vue.js. Clients included Watergate
                                Hotel, Simply Tao, Miami House Hotel.
                            </p>
                        </div>

                        {/* Previous Role */}
                        <div className='border-l-4 border-zinc-300 pl-6 dark:border-zinc-600'>
                            <div className='mb-2 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCalendarAlt} className='h-4 w-4 text-zinc-500' />
                                <span className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
                                    Oct 2015 - Nov 2016
                                </span>
                            </div>
                            <h3 className='mb-2 text-xl font-bold text-zinc-900 dark:text-white'>
                                Director of Digital @ Studio Tano
                            </h3>
                            <p className='text-zinc-600 dark:text-zinc-400'>
                                I led every digital effort for Studio Tano. From client requirements to production.
                                Built brand management software using a BaaS and Vue.js. Clients included Watergate
                                Hotel, Simply Tao, Miami House Hotel.
                            </p>
                        </div>

                        {/* Senior Developer */}
                        <div className='border-l-4 border-zinc-300 pl-6 dark:border-zinc-600'>
                            <div className='mb-2 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCalendarAlt} className='h-4 w-4 text-zinc-500' />
                                <span className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
                                    Feb 2012 - Sep 2015
                                </span>
                            </div>
                            <h3 className='mb-2 text-xl font-bold text-zinc-900 dark:text-white'>
                                Senior Web Developer @ MBLM NYC
                            </h3>
                            <p className='text-zinc-600 dark:text-zinc-400'>
                                I led several development efforts at the NYC based branding agency. Built out marketing
                                and extensively. A few clients I worked on are UL, SLS Hotels, Miami Worldcenter and
                                American Airlines.
                            </p>
                        </div>

                        {/* Mobile Developer */}
                        <div className='border-l-4 border-zinc-300 pl-6 dark:border-zinc-600'>
                            <div className='mb-2 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faCalendarAlt} className='h-4 w-4 text-zinc-500' />
                                <span className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
                                    Jan 2011 - Jan 2012
                                </span>
                            </div>
                            <h3 className='mb-2 text-xl font-bold text-zinc-900 dark:text-white'>
                                Mobile Web Developer @ Mixpool, Inc.
                            </h3>
                            <p className='text-zinc-600 dark:text-zinc-400'>
                                I developed a mobile web version of an event planning platform as created by Mixpool.
                                Leveraged CakePHP & jQuery Mobile as my main toolkit.
                            </p>
                        </div>
                    </div>
                </PageSection>
            </section>

            {/* Education */}
            <section id='education' className='mx-auto mt-8 mb-16 w-full max-w-4xl px-6'>
                <PageSection>
                    <div className='mb-6 flex items-center gap-3'>
                        <FontAwesomeIcon
                            icon={faGraduationCap}
                            className='h-6 w-6 text-green-600 dark:text-green-400'
                        />
                        <h2 className='text-2xl font-bold text-zinc-900 dark:text-white'>EDUCATION</h2>
                    </div>

                    <div className='border-l-4 border-green-500 pl-6'>
                        <h3 className='mb-2 text-xl font-bold text-zinc-900 dark:text-white'>
                            Bachelors of Science, Computer Science
                        </h3>
                        <p className='mb-2 text-zinc-600 dark:text-zinc-400'>SUNY New Paltz, 2012</p>
                        <div className='text-sm text-zinc-500 dark:text-zinc-500'>
                            <p>President of Math & Computing Science Club</p>
                        </div>
                    </div>

                    <div className='mt-6 rounded-lg bg-zinc-100/50 p-4 dark:bg-zinc-700/50'>
                        <p className='text-sm text-zinc-600 dark:text-zinc-400'>
                            The story continues at{' '}
                            <a href='https://kaczmar.com' className='link'>
                                kaczmar.com
                            </a>
                        </p>
                    </div>
                </PageSection>
            </section>
        </main>
    )
}
