import TopNav from '@/app/components/TopNav'
import PageSection from '@/app/components/PageSection'
import WorkHero from '@/app/components/WorkHero'
import PageLogoCloud from '@/app/components/PageLogoCloud'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowLeft,
    faArrowUp,
    faInfoCircle,
} from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import HeaderMarkerTailwind from '@/app/components/HeaderMarkerTailwind'
import HeaderMarkerInfo from '@/app/components/HeaderMarkerInfo'
import TheAlert from '@/app/components/TheAlert'
import HeaderMarker from '@/app/components/HeaderMarker'
import Image from 'next/image'
import StatGridStat from '@/app/components/StatGridStat'
import React from 'react'

const workData = {
    company: '3M',
    name: 'HAMR',
    role: 'Design/Client Engineer',
    blurb: 'Led design and client build of an internal product data management tool from the ground up to handle for the management of 190+ million records.',
    dates: '2017-current',
    logo: '3M_wordmark.png',
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <TheAlert />

            <WorkHero
                title={workData.name}
                company={'3M'}
                dateStart={'2017-04-01'}
                dateEnd={null}
                logo={workData.logo}
            >
                <p className="mt-4 text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8">
                    What started as an opportunity for me to design and
                    implement an internal tool to manage keyword data for SEO
                    led to an enterprise level product data management platform.
                    Currently, I now lead design and client build of an internal
                    product data management tool from the ground up to handle
                    for the management of 66+ million records across 87 locales
                    globally.
                </p>
                <p className="mt-4 text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8">
                    When a new product is introduced it makes its way to the
                    HAMR database. HAMR has done its part to improve several
                    internal processes in reporting, dashboarding, discovery and
                    KPI measurement. This has definitely saved money, sure, but
                    also has improved the QoL of the user (perhaps my biggest
                    joy in my professional life). I friggin' love when I build
                    something that makes someone's life easier and can see that
                    happening in real time.
                </p>
                <p className="mt-4 text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8">
                    Due to what would be a whole conversation on its own, design
                    consideration generally would come as an afterthought in the
                    enterprise (at least the one I'm used to), so I've been very
                    proud to see how this particular tool has improved both
                    productivity and growth while being prettier than most of
                    the other "buy not build" products in our suite.
                </p>
            </WorkHero>

            <PageSection>
                <dl className="grid grid-cols-2 gap-5 text-center">
                    <StatGridStat
                        title={'Productivity per page'}
                        subTitle={'hours saved'}
                    >
                        <dd className="mt-1 text-4xl font-semibold tracking-tight text-zinc-900">
                            4.7
                        </dd>
                    </StatGridStat>
                    <StatGridStat
                        title={'Page views'}
                        subTitle={'as of Q1 2024'}
                    >
                        <dd className="mt-1 flex items-center justify-center space-x-3 text-4xl font-semibold tracking-tight text-zinc-900">
                            <FontAwesomeIcon
                                icon={faArrowUp}
                                className="w-3 text-green-500 md:w-4"
                            />
                            <span className="text-2xl md:text-4xl">26.5%</span>
                        </dd>
                    </StatGridStat>
                </dl>

                <PageLogoCloud
                    cols={PageLogoCloud.cols.THREE}
                    className={'mt-5'}
                    technologies={[
                        { name: 'Vue (3)', src: '/technologies/vuedotjs.svg' },
                        { name: 'Vite', src: '/technologies/vite.svg' },
                        {
                            name: 'TailwindCSS',
                            src: '/technologies/tailwindcss.svg',
                        },
                        {
                            name: 'Typescript',
                            src: '/technologies/typescript.svg',
                        },
                        { name: 'PHP', src: '/technologies/php.svg' },
                        { name: 'Laravel', src: '/technologies/laravel.svg' },
                        { name: 'MySQL', src: '/technologies/mysql.svg' },
                        {
                            name: 'Elasticsearch',
                            src: '/technologies/elastic.svg',
                        },
                        { name: 'OpenAI', src: '/technologies/openai.svg' },
                    ]}
                />

                <div className="mt-5 grid grid-cols-5 gap-5">
                    <div className="relative col-span-3 h-full overflow-hidden rounded-lg bg-gray-50">
                        <Image
                            src="/work/mmm/JK-Github-Contribution-MMM-2.png"
                            width={550}
                            height={400}
                            className="absolute -right-10 bottom-0 w-[550px] max-w-[2000px] rounded-lg shadow-xl md:-left-[150px]"
                            alt="JK Github screenshot"
                        />
                    </div>
                    <div className="col-span-2 rounded-2xl">
                        <dl className="grid grid-cols-1 gap-5 text-center">
                            <StatGridStat
                                title={'Commits'}
                                subTitle={'over 7 years'}
                            >
                                <dd className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
                                    6,568
                                </dd>
                            </StatGridStat>
                            <StatGridStat
                                title={'Additions'}
                                subTitle={'on main repo'}
                            >
                                <dd className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
                                    1.47mil
                                </dd>
                            </StatGridStat>
                        </dl>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-5 md:h-[440px]">
                    <div className="col-span-3 flex flex-col overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-800 via-violet-900 to-purple-800 p-3 md:flex-row md:space-x-8 md:p-5">
                        <div className="mx-auto mb-6 flex w-[250px] shrink-0 flex-col items-center justify-center text-center text-white md:mb-0">
                            <h2 className="text-base font-bold">
                                Activity Feed
                            </h2>
                            <p className="mt-1.5 text-sm font-light text-white">
                                With custom combobox, including advanced mention
                                tagging, for comments.
                            </p>
                        </div>
                        <div className="relative grow">
                            <img
                                src={`/work/mmm/PCM_ActivityLog.png`}
                                className="right-2 top-2 w-[300px] max-w-[1000px] rounded-lg shadow-2xl md:absolute"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-5 md:h-[390px]">
                    <div className="col-span-3 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-800 via-violet-900 to-purple-800 p-3 md:p-7">
                        <div className="mx-auto max-w-sm shrink-0 text-center text-white">
                            <h2 className="text-lg font-bold">
                                Enterprise Query Builder
                            </h2>
                            <p className="mt-1.5 text-sm font-light text-white">
                                With custom combobox, including advanced mention
                                tagging, for comments.
                            </p>
                        </div>
                        <div className="relative min-h-px grow">
                            <img
                                src={`/work/mmm/SQB.png`}
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-5 md:h-[390px]">
                    <div className="col-span-3 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-800 via-violet-900 to-purple-800 p-3 md:p-7">
                        <div className="mx-auto max-w-sm shrink-0 text-center text-white">
                            <h2 className="text-base font-bold">Dashboard</h2>
                            <p className="mt-1.5 text-sm font-light text-white">
                                It's got the works. Whole layout using Tailwind
                                classes. Fully virtualized table.
                            </p>
                        </div>
                        <div className="relative min-h-px grow">
                            <img
                                src={`/work/mmm/Dashboard.png`}
                                className="w-full max-w-[2000px] rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </PageSection>

            <PageSection>
                <HeaderMarker
                    color={HeaderMarker.color.ORANGE}
                    icon={HeaderMarker.icon.INFO}
                    size={HeaderMarker.size.SMALL}
                />
                <header className="mx-auto w-full max-w-2xl pb-0 pl-4 md:pl-0">
                    <h1 className="flex items-center space-x-3 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <span>Note on included screenshots</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        <span className="italic">
                            It's a tale as old as... uh, internal software.
                        </span>{' '}
                        Due to the nature of the ownership over the product, I
                        am unable to share too much of it in full view. I have
                        to be careful with the amount of proprietary information
                        I share.
                    </p>
                </header>
            </PageSection>

            <PageSection>
                <HeaderMarker
                    color={HeaderMarker.color.SKY}
                    icon={HeaderMarker.icon.TAILWIND}
                    size={HeaderMarker.size.SMALL}
                />
                <header className="mx-auto w-full max-w-2xl pb-0 pl-4 md:pl-0">
                    <h1 className="flex items-center space-x-3 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <span>Related to Design Engineer role!</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        This job might very well be the final stage in preparing
                        me for the title of "Design Engineer". I've been made
                        into an expert of the art of designing in code. Last
                        summer I sold the organization on a complete front end
                        technology migration effort. A major piece of that is a
                        multi-phase rollout of Tailwind as the sole style
                        framework.
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        I have also been greatly prepared for managing user
                        expectations and input. The "Issues" tab of a highly
                        popular Github repo can be very daunting for a small
                        product team. Similarly, the issues backlog of an
                        enterprise level software that is used by 10,000 plus
                        corporate employees and contract marketers can be
                        daunting for a small product team. Through brute force,
                        we've adapted and learned to manage this process using
                        one key tool: transparency. It's important to be smart
                        about what you can and can't show and tell to users, but
                        always be honest and striving to tell them as much as
                        possible.
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        Another big lesson learned has been that "Yes to death"
                        is an almost certain death. I can expand more on my
                        experience and expectation there if/when the time comes,
                        but your interaction history with the TailwindCSS users
                        let's me feel good knowing that you know the value of
                        both "Yes" and "No" in product development.
                    </p>
                </header>
            </PageSection>

            <div className="relative mx-auto w-full max-w-3xl bg-white px-8 pb-6 md:px-16">
                <Link
                    href="/"
                    className="inline-flex items-center text-sky-600 hover:text-sky-500 hover:underline"
                >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="mr-2 h-3 w-3"
                    />
                    <span>Back to main page</span>
                </Link>
            </div>
        </main>
    )
}
