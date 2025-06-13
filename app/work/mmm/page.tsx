import HeaderMarker from '@/app/components/HeaderMarker'
import PageHeader from '@/app/components/PageHeader'
import PageLogoCloud from '@/app/components/PageLogoCloud'
import PageSection from '@/app/components/PageSection'
import StatGridStat from '@/app/components/StatGridStat'
import { ThemeToggle } from '@/app/components/ThemeToggle'
import VerticalNav from '@/app/components/VerticalNav'
import WorkHero from '@/app/components/WorkHero'
import { NavItem } from '@/app/types'
import {
    faArrowLeft,
    faArrowUp,
    faStar,
    faTimeline,
    faToolbox,
    faUser,
} from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const workData = {
    company: '3M',
    name: 'HAMR',
    role: 'Design/Client Engineer',
    blurb: 'Led design and client build of an internal product data management tool from the ground up to handle for the management of 190+ million records.',
    dates: '2017-current',
    logo: '3M_wordmark.png',
}

const navItems: NavItem[] = [
    { id: 'work-hero', label: 'About', icon: faUser },
    { id: 'accomplishments', label: 'Accomplishments', icon: faStar },
    { id: 'pcm', label: 'PCM', icon: faTimeline },
    { id: 'technical-highlights', label: 'Technical Highlights', icon: faToolbox },
    { id: 'note-on-included-screenshots', label: 'Note on Included Screenshots', icon: faStar },
    { id: 'related-to-design-engineer-role', label: 'Related to Design Engineer Role', icon: faTimeline },
]

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            {/* Theme Toggle */}
            <div className='fixed top-4 right-4 z-50'>
                <ThemeToggle />
            </div>

            {/* Vertical Navigation */}
            <VerticalNav navItems={navItems} />

            <WorkHero title={workData.name} company={'3M'} dateStart={'2017-04-01'} dateEnd={null} logo={workData.logo}>
                <p className='mt-4 text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8 dark:text-white'>
                    What started as an opportunity for me to design and implement an internal tool to manage keyword
                    data for SEO led to building an enterprise level product data management platform. Currently, I now
                    lead design and client build of an internal product data management tool from the ground up to
                    handle for the management of 66+ million records across 87 locales globally.
                </p>
                <p className='mt-4 text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8 dark:text-white'>
                    When a new product is introduced it makes its way to the HAMR database. HAMR has done its part to
                    improve several internal processes in reporting, dashboarding, discovery and KPI measurement. In
                    addition to saving time and money, it has also improved the QoL of the user. I love when I've
                    contributed to a technology that makes someone's life easier and can see that happening in real
                    time.
                </p>
                {/* <p className='mt-4 text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8 dark:text-white'>
                    Due to what would be a whole conversation on its own, design consideration generally would come as
                    an afterthought in the enterprise (at least the one I'm used to), so I've been very proud to see how
                    this particular tool has improved both productivity and growth while being prettier than most of the
                    other "buy not build" products in our suite.
                </p> */}
            </WorkHero>

            <PageSection id='accomplishments' className='max-w-4xl bg-transparent px-4'>
                <PageHeader
                    title='Accomplishments'
                    theme={{ container: 'mx-auto w-full max-w-2xl px-4', header: 'sm:text-4xl ' }}
                >
                    <p className='lead'>
                        In case you are feeling a bit "TL;DR" at the moment, here are a few tidbits that make me proud
                        to have been a core member of the HAMR team.
                    </p>
                </PageHeader>
                <div className='mx-auto w-full max-w-3xl px-4'>
                    <div className='mt-6 rounded-xl bg-gradient-to-br from-lime-500 via-lime-600 to-lime-700 p-8 shadow-lg'>
                        <ul className='space-y-4 text-base leading-7 text-zinc-700'>
                            <li className='rounded-lg bg-white/10 p-4 text-lime-50 shadow-sm ring-1 ring-white/30 backdrop-blur-md transition-shadow hover:shadow-md'>
                                <span className='font-semibold'>Led design and front-end development</span> of
                                enterprise product data management platform leading to a{' '}
                                <span className='font-semibold'>productivity savings of 4.7 hours per page</span>
                            </li>
                            <li className='rounded-lg bg-white/10 p-4 text-lime-50 shadow-sm ring-1 ring-white/30 backdrop-blur-md transition-shadow hover:shadow-md'>
                                <span className='font-semibold'>Modernized search and reporting experience </span> of
                                the global assortment of records leading to a drastically reduced effort to find and
                                report on 60+ million product and 20+ million asset records across 87 global locales
                            </li>
                            <li className='rounded-lg bg-white/10 p-4 text-lime-50 shadow-sm ring-1 ring-white/30 backdrop-blur-md transition-shadow hover:shadow-md'>
                                <span className='font-semibold'>Greatly improved the developer experience</span> for
                                other devs by championing several iterations of the techstack when the opportunity
                                presented itself
                            </li>
                            <li className='rounded-lg bg-white/10 p-4 text-lime-50 shadow-sm ring-1 ring-white/30 backdrop-blur-md transition-shadow hover:shadow-md'>
                                <span className='font-semibold'>Developed custom virtualized table component</span>{' '}
                                optimizing performance by 300% for large dataset rendering
                            </li>
                            <li className='rounded-lg bg-white/10 p-4 text-lime-50 shadow-sm ring-1 ring-white/30 backdrop-blur-md transition-shadow hover:shadow-md'>
                                <span className='font-semibold'>
                                    Delivered 6,568 commits and 1.47 million lines of code over 8 years
                                </span>
                            </li>
                            <li className='rounded-lg bg-white/10 p-4 text-lime-50 shadow-sm ring-1 ring-white/30 backdrop-blur-md transition-shadow hover:shadow-md'>
                                <span className='font-semibold'>Transformed enterprise tool adoption</span> by
                                prioritizing user experience design over traditional "buy not build" solutions, leading
                                to a <span className='font-semibold'>20% increase in adoption YoY</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </PageSection>

            <PageSection id='pcm' className='max-w-5xl bg-transparent px-0'>
                <PageHeader
                    title='PCM (Product Content Management)'
                    theme={{ container: 'mx-auto w-full max-w-2xl px-4', header: 'sm:text-4xl ' }}
                    label='2023'
                >
                    <p className='lead'>
                        PCM is a product data management tool that allows users to manage global product data. After a
                        complete rearchitecture of the ETL pipeline, HAMR had an API that enabled the managememnt
                        lifecycle of product data updates to be minutes instead of days. backend that was capable of
                        handling 190+ million records across 87 locales.
                    </p>
                </PageHeader>

                <div className='mt-10 grid h-auto grid-cols-3 gap-5'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500/40 via-indigo-900/50 to-indigo-800/80 p-5 md:flex-row md:space-x-8'>
                        <div className='mx-auto mb-4 flex w-[250px] shrink-0 flex-col items-center justify-center text-center md:mb-0'>
                            <h2 className='text-base font-bold text-zinc-800 sm:text-xl dark:text-white'>
                                Activity Feed
                            </h2>
                            <p className='mt-1.5 text-sm font-light sm:text-base dark:text-white'>
                                With custom combobox, including advanced mention tagging, for comments.
                            </p>
                        </div>
                        <div className='relative flex max-w-md grow items-center justify-center overflow-hidden rounded-sm shadow-lg'>
                            <img src={`/work/mmm/PCM_ActivityLog.png`} className='object-cover' />
                        </div>
                    </div>
                </div>
            </PageSection>

            <PageSection>
                <dl className='grid grid-cols-2 gap-5 text-center'>
                    <StatGridStat title={'Productivity per page'} subTitle={'hours saved'}>
                        <dd className='mt-1 text-4xl font-semibold tracking-tight text-zinc-900'>4.7</dd>
                    </StatGridStat>
                    <StatGridStat title={'Page views'} subTitle={'as of Q1 2024'}>
                        <dd className='mt-1 flex items-center justify-center space-x-3 text-4xl font-semibold tracking-tight text-zinc-900'>
                            <FontAwesomeIcon icon={faArrowUp} className='w-3 text-green-500 md:w-4' />
                            <span className='text-2xl md:text-4xl'>26.5%</span>
                        </dd>
                    </StatGridStat>
                </dl>

                <PageLogoCloud
                    cols={PageLogoCloud.cols.THREE}
                    className={'mt-5'}
                    technologies={[
                        'Vue',
                        'Vite',
                        'TailwindCSS',
                        'Typescript',
                        'PHP',
                        'Laravel',
                        'MySQL',
                        'Elasticsearch',
                        'OpenAI',
                    ]}
                />

                <div className='mt-5 grid grid-cols-5 gap-5'>
                    <div className='relative col-span-3 h-full overflow-hidden rounded-lg bg-zinc-50'>
                        <Image
                            src='/work/mmm/JK-Github-Contribution-MMM-2.png'
                            width={550}
                            height={400}
                            className='absolute -right-10 bottom-0 w-[550px] max-w-[2000px] rounded-lg shadow-xl md:-left-[150px]'
                            alt='JK Github screenshot'
                        />
                    </div>
                    <div className='col-span-2 rounded-2xl'>
                        <dl className='grid grid-cols-1 gap-5 text-center'>
                            <StatGridStat title={'Commits'} subTitle={'over 7 years'}>
                                <dd className='mt-1 text-2xl font-semibold tracking-tight text-zinc-900 md:text-4xl'>
                                    6,568
                                </dd>
                            </StatGridStat>
                            <StatGridStat title={'Additions'} subTitle={'on main repo'}>
                                <dd className='mt-1 text-2xl font-semibold tracking-tight text-zinc-900 md:text-4xl'>
                                    1.47mil
                                </dd>
                            </StatGridStat>
                        </dl>
                    </div>
                </div>

                <div className='mt-5 grid grid-cols-3 gap-5 md:h-[440px]'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-500 p-3 md:flex-row md:space-x-8 md:p-5'>
                        <div className='mx-auto mb-6 flex w-[250px] shrink-0 flex-col items-center justify-center text-center text-white md:mb-0'>
                            <h2 className='text-base font-bold'>Activity Feed</h2>
                            <p className='mt-1.5 text-sm font-light text-white'>
                                With custom combobox, including advanced mention tagging, for comments.
                            </p>
                        </div>
                        <div className='relative grow'>
                            <img
                                src={`/work/mmm/PCM_ActivityLog.png`}
                                className='top-2 right-2 w-[300px] max-w-[1000px] rounded-lg shadow-2xl md:absolute'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5 grid grid-cols-3 gap-5 md:h-[390px]'>
                    <div className='bg-gradient-radial col-span-3 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl from-lime-500 via-violet-900 to-lime-500 p-3 md:p-7'>
                        <div className='mx-auto max-w-sm shrink-0 text-center text-white'>
                            <h2 className='text-lg font-bold'>Enterprise Query Builder</h2>
                            <p className='mt-1.5 text-sm font-light text-white'>
                                With custom combobox, including advanced mention tagging, for comments.
                            </p>
                        </div>
                        <div className='relative min-h-px grow'>
                            <img src={`/work/mmm/HAMRv3-sqb.png`} className='rounded-lg shadow-2xl' />
                        </div>
                    </div>
                </div>

                <div className='mt-5 grid grid-cols-3 gap-5 md:h-[390px]'>
                    <div className='col-span-3 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-lime-500 via-violet-900 to-lime-500 p-3 md:p-7'>
                        <div className='mx-auto max-w-sm shrink-0 text-center text-white'>
                            <h2 className='text-base font-bold'>Dashboard</h2>
                            <p className='mt-1.5 text-sm font-light text-white'>
                                It's got the works. Whole layout using Tailwind classes. Fully virtualized table.
                            </p>
                        </div>
                        <div className='relative min-h-px grow'>
                            <img
                                src={`/work/mmm/HAMRv3-Dashboard-1.png`}
                                className='w-full max-w-[2000px] rounded-lg shadow-2xl'
                            />
                        </div>
                    </div>
                </div>
            </PageSection>

            <section id='toolkit' className='mx-auto w-full max-w-3xl'>
                <PageHeader title='Toolkit' theme={{ container: 'sm:px-6 sm:py-10 max-w-3xl', header: 'sm:text-4xl' }}>
                    <p className='lead'>The following technologies are being used to build this project.</p>
                </PageHeader>
                <PageLogoCloud
                    cols={PageLogoCloud.cols.TWO}
                    className={'mt-5'}
                    technologies={[
                        'Vue',
                        'Vite',
                        'TailwindCSS',
                        'Typescript',
                        'PHP',
                        'Laravel',
                        'MySQL',
                        'Elasticsearch',
                        'OpenAI',
                    ]}
                />
            </section>

            <PageSection className='max-w-3xl bg-transparent px-0'>
                <PageHeader
                    title='Technical highlights'
                    theme={{ container: 'mx-auto w-full max-w-3xl px-0', header: 'sm:text-4xl ' }}
                >
                    <p className='lead'>The following are some of the technical highlights of the project.</p>
                </PageHeader>

                <div className='mt-10'>
                    <div className='relative pb-10 pl-8 before:absolute before:top-0 before:left-0 before:h-full before:w-0.5 before:bg-lime-500'>
                        <div className='absolute top-0 -left-2 h-4 w-4 rounded-full bg-lime-500'></div>
                        <div className='mb-2 text-sm font-medium text-zinc-400'>2023 Q3</div>
                        <h3 className='text-lg font-semibold text-gray-900'>Frontend Migration</h3>
                        <p className='mt-2 text-gray-600'>
                            Led the migration from legacy CSS to Tailwind CSS, implementing a phased rollout strategy
                            across the application.
                        </p>
                    </div>

                    <div className='relative pb-10 pl-8 before:absolute before:top-0 before:left-0 before:h-full before:w-0.5 before:bg-lime-500'>
                        <div className='absolute top-0 -left-2 h-4 w-4 rounded-full bg-lime-500'></div>
                        <div className='mb-2 text-sm font-medium text-zinc-400'>2023 Q2</div>
                        <h3 className='text-lg font-semibold text-gray-900'>Virtualized Table Implementation</h3>
                        <p className='mt-2 text-gray-600'>
                            Developed a custom virtualized table component to handle large datasets efficiently,
                            improving performance by 300%.
                        </p>
                    </div>

                    <div className='relative pb-10 pl-8 before:absolute before:top-0 before:left-0 before:h-full before:w-0.5 before:bg-lime-500'>
                        <div className='absolute top-0 -left-2 h-4 w-4 rounded-full bg-lime-500'></div>
                        <div className='mb-2 text-sm font-medium text-zinc-400'>2023 Q1</div>
                        <h3 className='text-lg font-semibold text-gray-900'>Dashboard Redesign</h3>
                        <p className='mt-2 text-gray-600'>
                            Completely redesigned the main dashboard interface, focusing on user experience and
                            performance optimization.
                        </p>
                    </div>

                    <div className='relative pb-10 pl-8'>
                        <div className='absolute top-0 -left-2 h-4 w-4 rounded-full bg-lime-500'></div>
                        <div className='mb-2 text-sm font-medium text-zinc-400'>2022 Q4</div>
                        <h3 className='text-lg font-semibold text-gray-900'>Initial Architecture Planning</h3>
                        <p className='mt-2 text-gray-600'>
                            Developed the technical architecture and migration strategy for modernizing the frontend
                            stack.
                        </p>
                    </div>
                </div>
            </PageSection>

            <PageSection className='max-w-5xl bg-transparent px-0'>
                <HeaderMarker
                    color={HeaderMarker.color.SKY}
                    icon={HeaderMarker.icon.TAILWIND}
                    size={HeaderMarker.size.SMALL}
                />
                <PageHeader
                    title='Related to Design Engineer role!'
                    theme={{ container: 'mx-auto w-full max-w-2xl px-4', header: 'sm:text-4xl ' }}
                >
                    <p className='lead'>
                        This job might very well be the final stage in preparing me for the title of "Design Engineer".
                        I've been made into an expert of the art of designing in code. Last summer I sold the
                        organization on a complete front end technology migration effort. A major piece of that is a
                        multi-phase rollout of Tailwind as the sole style framework.
                    </p>
                    <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400'>
                        I have also been greatly prepared for managing user expectations and input. The "Issues" tab of
                        a highly popular Github repo can be very daunting for a small product team. Similarly, the
                        issues backlog of an enterprise level software that is used by 10,000 plus corporate employees
                        and contract marketers can be daunting for a small product team. Through brute force, we've
                        adapted and learned to manage this process using one key tool: transparency. It's important to
                        be smart about what you can and can't show and tell to users, but always be honest and striving
                        to tell them as much as possible.
                    </p>
                    <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400'>
                        Another big lesson learned has been that "Yes to death" is an almost certain death. I can expand
                        more on my experience and expectation there if/when the time comes, but your interaction history
                        with the TailwindCSS users let's me feel good knowing that you know the value of both "Yes" and
                        "No" in product development.
                    </p>
                </PageHeader>
            </PageSection>

            <div className='relative mx-auto w-full max-w-3xl bg-white px-8 pb-6 md:px-16'>
                <Link href='/' className='inline-flex items-center text-blue-600 hover:text-blue-500 hover:underline'>
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2 h-3 w-3' />
                    <span>Back to main page</span>
                </Link>
            </div>
        </main>
    )
}
