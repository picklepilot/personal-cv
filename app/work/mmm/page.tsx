'use client'

import PageHeader from '@/app/components/PageHeader'
import PageLogoCloud from '@/app/components/PageLogoCloud'
import PageSection from '@/app/components/PageSection'
import VerticalNav from '@/app/components/VerticalNav'
import WorkHero from '@/app/components/WorkHero'
import { NavItem } from '@/app/types'
import Accomplishments from '@/app/work/mmm/accomplishments'
import {
    faArrowLeft,
    faSearch,
    faStar,
    faTimeline,
    faToolbox,
    faUser,
} from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const workData = {
    company: '3M',
    name: 'HAMR',
    role: 'Design/Client Engineer',
    blurb: 'Led design and client build of an internal product data management tool from the ground up to handle for the management of 66+ million records across 87 locales.',
    dates: '2017-2025',
    logo: '3M_wordmark.png',
}

const navItems: NavItem[] = [
    { id: 'work-hero', label: 'About', icon: faUser },
    { id: 'accomplishments', label: 'Accomplishments', icon: faStar },
    { id: 'search', label: 'Enterprise Search', icon: faSearch },
    { id: 'pcm', label: 'PCM', icon: faTimeline },
    { id: 'technical-highlights', label: 'Technical Highlights', icon: faToolbox },
]

const images = [
    {
        id: 0,
        src: '/work/mmm/HAMR-PCM-ActivityLog-1.webp',
        alt: 'PCM Activity Log',
    },
    {
        id: 1,
        src: '/work/mmm/HAMR-Dashboard-1.webp',
        alt: 'HAMR Dashboard',
    },
    {
        id: 2,
        src: '/work/mmm/HAMR-PCM-Editor-1.webp',
        alt: 'HAMR PCM Editor',
    },
    {
        id: 3,
        src: '/work/mmm/HAMR-Search-1.webp',
        alt: 'HAMR Search',
    },
    {
        id: 4,
        src: '/work/mmm/HAMRv3-Dashboard-1.png',
        alt: 'HAMR v3 Dashboard',
    },
    {
        id: 5,
        src: '/work/mmm/HAMR-Report-1.webp',
        alt: 'HAMR Report',
    },

    {
        id: 6,
        src: '/work/mmm/HAMR-PCM-Precheck-1.webp',
        alt: 'HAMR PCM Precheck',
    },
]

export default function Home() {
    const [index, setIndex] = useState(-1)

    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            {/* Theme Toggle */}
            {/* <div className='fixed top-4 right-4 z-50'>
                <ThemeToggle />
            </div> */}

            {/* Vertical Navigation */}
            <VerticalNav navItems={navItems} />

            <WorkHero
                title={workData.name}
                company={'3M'}
                dateStart={'2017-04-01'}
                dateEnd={'2025-07-01'}
                logo={workData.logo}
            >
                <p className='mt-4 text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8 dark:text-white'>
                    What started as an opportunity for me to design and implement an internal tool to manage keyword
                    data for SEO led to 8 years as a design engineer for an enterprise level product data management
                    platform. Currently, I now lead design and client build of an internal product data management tool
                    from the ground up to handle for the management of 66+ million records across 87 locales globally.
                </p>
                <p className='mt-4 text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8 dark:text-white'>
                    Every new product enters the HAMR database, where it becomes part of our comprehensive data
                    ecosystem. HAMR has transformed our internal operations by streamlining reporting, enhancing
                    dashboard capabilities, improving data discovery, and enabling precise KPI tracking. Beyond the
                    tangible benefits of time and cost savings, what truly excites me is seeing how HAMR directly
                    improves our users' daily work experience. There's nothing more rewarding than witnessing firsthand
                    how technology can make someone's work life better and more efficient.
                </p>
            </WorkHero>

            <PageSection id='accomplishments' className='max-w-4xl bg-transparent px-4'>
                <PageHeader
                    title='Accomplishments'
                    theme={{ container: 'mx-auto w-full max-w-2xl px-4', header: 'sm:text-4xl' }}
                >
                    <p className='lead'>
                        In case you are feeling a bit "TL;DR" at the moment, here are a few tidbits that make me proud
                        to have been a core member of the HAMR team.
                    </p>
                </PageHeader>
                <Accomplishments />
            </PageSection>

            <PageSection id='search' className='max-w-5xl bg-transparent px-0'>
                <PageHeader
                    title='Enterprise Search'
                    theme={{
                        container: 'mx-auto w-full max-w-2xl px-4',
                        header: 'sm:text-4xl',
                    }}
                >
                    <p className='lead'>
                        The HAMR platform is built on top of Elasticsearch, a very powerful search and analytics engine,
                        which we leveraged as the source of truth for product and asset data. This search view, widely
                        beloved as the best way to search and report on product data at 3M, is used by thousands of
                        users in various levels of the company.
                    </p>
                </PageHeader>

                <div className='col-span-3 mt-10 flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-5'>
                    <div className='mx-auto mb-4 flex w-[250px] shrink-0 flex-col items-center justify-center py-4 text-center sm:w-full sm:max-w-2xl md:mb-0'>
                        <h2 className='text-base font-bold text-indigo-50 sm:text-xl'>Query Builder</h2>
                        <p className='mt-1.5 text-sm font-light text-indigo-100 sm:text-base'>
                            Our users needed to be able to build complex queries to search for product data. I built a
                            query builder that allows users to build queries using a fluent interface. Finding the
                            fields they needed from the 8,000+ possible attributes is a zippy process now. The query
                            builder allows for an operator, various compilers and a robust value picker. It also
                            supports advanced date operations and logical grouping.
                        </p>
                    </div>
                    <div
                        className='relative mt-6 flex grow cursor-pointer items-center justify-center rounded-lg shadow-lg'
                        onClick={() => setIndex(3)}
                    >
                        <img
                            src={images[3].src}
                            className='rounded-lg object-cover transition-all duration-300 hover:scale-102'
                        />
                    </div>
                    <div className='mt-2 flex justify-end text-xs text-indigo-100'>2025 (v3)</div>
                </div>

                <div className='col-span-3 mt-10 flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-5'>
                    <div className='mx-auto mb-4 flex w-[250px] shrink-0 flex-col items-center justify-center py-4 text-center sm:w-full sm:max-w-2xl md:mb-0'>
                        <h2 className='text-base font-bold text-indigo-50 sm:text-xl'>Report View</h2>
                        <p className='mt-1.5 text-sm font-light text-indigo-100 sm:text-base'>
                            The report view is driven by AG Grid, the most powerful data grid on the market. Very
                            necessary for handling large datasets (one locale could have 1,000,000+ records and this
                            view can handle it).
                        </p>
                    </div>
                    <div
                        className='relative mt-6 flex grow cursor-pointer items-center justify-center rounded-lg shadow-lg'
                        onClick={() => setIndex(5)}
                    >
                        <img
                            src={images[5].src}
                            className='rounded-lg object-cover transition-all duration-300 hover:scale-102'
                        />
                    </div>
                    <div className='mt-2 flex justify-end text-xs text-indigo-100'>2025 (v3)</div>
                </div>

                <div className='mt-10 grid h-auto grid-cols-3 gap-5'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-5'>
                        <div className='mx-auto mb-4 flex w-[250px] shrink-0 flex-col items-center justify-center py-4 text-center sm:w-full sm:max-w-2xl md:mb-0'>
                            <h2 className='text-base font-bold text-indigo-50 sm:text-xl'>Dashboards</h2>
                            <p className='mt-1.5 text-sm font-light text-indigo-100 sm:text-base'>
                                Enabled by the efficiency and scalability of Elasticsearch, I was able to build an
                                advanced dashboarding system that can handle nested aggregations of large datasets. The
                                primary difference between this view and the Report view is that the data in this grid
                                is specially formatted in deeply nested structure. Behind the scenes, I created a custom
                                data transformer that could handle the complex data structure and display it in a way
                                that was easy for AG Grid to understand and use. Additionally, the whole dataset,
                                1,000,000+ records, is loaded into memory in the client side and virtualized.
                            </p>
                        </div>
                        <div
                            className='relative mt-6 flex grow cursor-pointer items-center justify-center rounded-lg shadow-lg'
                            onClick={() => setIndex(1)}
                        >
                            <img
                                src={images[1].src}
                                className='rounded-lg object-cover transition-all duration-300 hover:scale-102'
                            />
                        </div>
                        <div className='mt-2 flex justify-end text-xs text-indigo-100'>2025 (v3)</div>
                    </div>
                </div>
            </PageSection>

            <PageSection id='pcm' className='max-w-5xl bg-transparent px-0'>
                <PageHeader
                    title='PCM (Product Content Management)'
                    theme={{ container: 'mx-auto w-full max-w-2xl px-4', header: 'sm:text-4xl' }}
                >
                    <p className='lead'>
                        PCM is a product data management tool that allows users to manage global product data. After a
                        complete rearchitecture of the ETL pipeline, HAMR had an API that enabled the managememnt
                        lifecycle of product data updates to be minutes instead of days.
                    </p>
                    <p className='lead'>
                        I rapidly designed and coded the following interfaces to meet the demands of the multiple
                        businesses that were piloting these tools. Our small core team was the winner of the 2024 3M
                        Global Marketing Excellence Award for the PCM project.
                    </p>
                </PageHeader>

                <div className='mt-10 grid h-auto grid-cols-3 gap-5'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-5'>
                        <div className='mx-auto mb-4 flex w-[250px] shrink-0 flex-col items-center justify-center py-4 text-center sm:w-full sm:max-w-2xl md:mb-0'>
                            <h2 className='text-base font-bold text-indigo-50 sm:text-xl'>Product Editor</h2>
                            <p className='mt-1.5 text-sm font-light text-indigo-100 sm:text-base'>
                                The product editor view makes it possible to quickly make edits to product data more
                                efficiently by providing a more structured anatomy of the product data, using modern
                                interfaces and leveraging LLMs.
                            </p>
                        </div>
                        <div
                            className='relative mt-6 flex grow cursor-pointer items-center justify-center rounded-lg shadow-lg'
                            onClick={() => setIndex(2)}
                        >
                            <img
                                src={images[2].src}
                                className='rounded-lg object-cover transition-all duration-300 hover:scale-102'
                            />
                        </div>
                        <div className='mt-2 flex justify-end text-xs text-indigo-100'>
                            2023 (v2) &middot; Shown with test data
                        </div>
                    </div>
                </div>

                <div className='mt-10 grid h-auto grid-cols-3 gap-5'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-5'>
                        <div className='mx-auto mb-4 flex w-[250px] shrink-0 flex-col items-center justify-center py-4 text-center sm:w-full sm:max-w-2xl md:mb-0'>
                            <h2 className='text-base font-bold text-indigo-50 sm:text-xl'>Precheck</h2>
                            <p className='mt-1.5 text-sm font-light text-indigo-100 sm:text-base'>
                                With a fair amount of prompt iteration and RAG, I rapidly prototyped a content precheck
                                that could check the written content for a number of issues, which would otherwise need
                                to caught by different people at different moments in the approval workflow.
                            </p>
                        </div>
                        <div
                            className='relative mt-6 flex grow cursor-pointer items-center justify-center rounded-lg shadow-lg'
                            onClick={() => setIndex(6)}
                        >
                            <img
                                src={images[6].src}
                                className='rounded-lg object-cover transition-all duration-300 hover:scale-102'
                            />
                        </div>
                        <div className='mt-2 flex justify-end text-xs text-indigo-100'>
                            2024 (v2) &middot; Shown with test data
                        </div>
                    </div>
                </div>

                <div className='mt-10 grid h-auto grid-cols-3 gap-5'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-5 md:flex-row md:space-x-8'>
                        <div className='mx-auto mb-4 flex w-[250px] shrink-0 flex-col items-center justify-center text-center md:mb-0'>
                            <h2 className='text-base font-bold text-indigo-50 sm:text-xl'>Activity Feed</h2>
                            <p className='mt-1.5 text-sm font-light text-indigo-100 sm:text-base'>
                                For the first time, users can now easily see the history of changes to a product,
                                including who made the change, the approval workflow and status changes.
                            </p>
                        </div>
                        <div>
                            <div
                                className='relative flex max-w-md grow cursor-pointer items-center justify-center rounded-sm shadow-lg'
                                onClick={() => setIndex(0)}
                            >
                                <img
                                    src={images[0].src}
                                    className='rounded-lg object-cover transition-all duration-300 hover:scale-102'
                                />
                            </div>
                            <div className='mt-2 flex justify-end text-xs text-indigo-100'>
                                2023 (v2) &middot; Shown with test data
                            </div>
                        </div>
                    </div>
                </div>
            </PageSection>

            <PageSection id='testimonials' className='max-w-5xl bg-transparent px-0'>
                <PageHeader
                    title='Overheard'
                    theme={{ container: 'mx-auto w-full max-w-2xl px-4', header: 'sm:text-4xl' }}
                >
                    <p className='lead'>Below are some quotes from users of the HAMR platform.</p>
                </PageHeader>

                <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-6'>
                        <p className='text-sm font-light text-indigo-100'>
                            "For image remediation, it was a genius way to manage finding and managing all the
                            division's assets."
                        </p>
                    </div>

                    <div className='flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-6'>
                        <p className='text-sm font-light text-indigo-100'>
                            "HAMR has consolidated and greatly simplified much of the reporting my team relies on to
                            complete our work."
                        </p>
                    </div>

                    <div className='flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-6'>
                        <p className='text-sm font-light text-indigo-100'>
                            "It is the only easy place to search for assets that are approved to use in educational
                            presentations, etc..."
                        </p>
                    </div>

                    <div className='flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-6'>
                        <p className='text-sm font-light text-indigo-100'>
                            "It helps me every day, identifies content gaps. I rely 100% on that tool and wouldn't be
                            able to conduct my duties without it."
                        </p>
                    </div>

                    <div className='flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-6'>
                        <p className='text-sm font-light text-indigo-100'>
                            "Dashboards have assisted us with identifying prioritized gap-filling opportunities for
                            photography. HAMR is also part of our documented analysis process."
                        </p>
                    </div>

                    <div className='flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-indigo-800/70 via-indigo-900/90 to-indigo-800/80 p-6'>
                        <p className='text-sm font-light text-indigo-100'>
                            "...ensures that our distribution websites stay up to date with current information."
                        </p>
                    </div>
                </div>
            </PageSection>

            <section id='toolkit' className='mx-auto w-full max-w-3xl'>
                <PageHeader
                    title='Toolkit'
                    theme={{ container: 'mx-auto w-full max-w-2xl px-4', header: 'sm:text-4xl' }}
                >
                    <p className='lead'>The following technologies are being used to build this project.</p>
                </PageHeader>

                <PageLogoCloud
                    cols={PageLogoCloud.cols.TWO}
                    className={'mt-10'}
                    technologies={[
                        'Docker',
                        'Elasticsearch',
                        'Laravel',
                        'MySQL',
                        'OpenAI',
                        'PHP',
                        'TailwindCSS',
                        'Typescript',
                        'Vite',
                        'Vue',
                    ]}
                />
            </section>

            {/* <PageSection className='max-w-3xl bg-transparent px-0'>
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
            </PageSection> */}

            <Lightbox
                slides={images}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                carousel={{ finite: false }}
            />

            <div className='relative mx-auto my-10 w-full max-w-3xl px-8 pb-6 md:px-16'>
                <Link href='/' className='inline-flex items-center text-blue-600 hover:text-blue-500 hover:underline'>
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2 h-3 w-3' />
                    <span>Back to main page</span>
                </Link>
            </div>
        </main>
    )
}
