import LandingHero from './components/LandingHero'
import LandingSectionWhoIAm from '@/app/components/LandingSectionWhoIAm'
import LandingWorkTimeline from '@/app/components/LandingWorkTimeline'
import PageHeader from '@/app/components/PageHeader'
import PageSection from '@/app/components/PageSection'
import TheAlert from '@/app/components/TheAlert'
import WorkGrid from '@/app/work/WorkGrid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import HeaderMarker from '@/app/components/HeaderMarker'
import PageLogoCloud from '@/app/components/PageLogoCloud'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <TheAlert />

            <LandingHero />

            <PageSection>
                <PageHeader title="My name is Justin Kaczmar.">
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        I have been a design-driven full-stack engineer for a
                        few decades now (36 years old). Born in New York, I now
                        am a Midwesterner living in Minneapolis, Minnesota. (I
                        really hope the one hour time difference from your
                        posting can be overlooked, at least until you've read
                        on!)
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        My history leading to the professional that I am now is
                        long, varied and full of interesting stories. From
                        designing print mixtape covers while building
                        ActionScript based flash websites for local bands to{' '}
                        <a
                            href="/work/mmm"
                            className="text-sky-600 hover:text-sky-500 hover:underline"
                        >
                            bringing a multinational conglomerate's PIM into the
                            modern age of web
                        </a>
                        —I've done a lot, and come away with some pretty
                        substantial experience leading to what I think is a
                        pretty unique toolbox. (I've always liked the term
                        "bridge-gapper" for what I can do.)
                    </p>
                </PageHeader>
            </PageSection>

            <PageSection>
                <PageHeader title="The story so far...">
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        Below is a timeline of my work history, colored with
                        some other non-work blips that may have had an impact on
                        who I am professionally today.
                    </p>
                </PageHeader>
                <LandingWorkTimeline />
            </PageSection>

            <PageSection>
                <PageHeader title="Why am I a great fit?">
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        Firstly, I have exclusively been using TailwindCS/UI as
                        a front-end framework solution in every project for
                        several years. Your job posting, specifically the "Who
                        you are" section, seemed tailor-made to me for the most
                        part. It would only make sense to let me explain by
                        expanding on some of the "Who you are" points."
                    </p>
                </PageHeader>
                <div className="w-full">
                    <LandingSectionWhoIAm />
                </div>
            </PageSection>

            <PageSection>
                <PageHeader title="Stuff I'm proud of">
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        I just want to call out a few of the projects that I am
                        proud of. They have helped shape my go-to toolbox and
                        abilities as a designer/developer in what they are
                        today.
                    </p>
                </PageHeader>
                <div className="w-full">
                    <WorkGrid />
                </div>
            </PageSection>

            <PageSection>
                <PageHeader title="What excites me">
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        <span className="italic">
                            To date, this is the most magnetic job posting I've
                            come across.
                        </span>{' '}
                        To re-iterate from my intro, it was this job posting
                        that compelled me to put this all together and submit
                        (including a nice bonus offering near the end). You all
                        are rock stars and I miss being one as well. I yearn for
                        the feeling of being on a smaller, more concentrated
                        team, all working towards the same goal.
                    </p>
                </PageHeader>

                <h4 className="mt-5 text-lg font-semibold">
                    Here's what excites me personally:
                </h4>

                <ul className="mt-3 max-w-lg list-disc space-y-3 pl-5 text-zinc-600">
                    <li>
                        ...to be a part of something lasting and helpful to the
                        world of web design.
                    </li>
                    <li>
                        ...to apply my ever-working idea-machine of a mind to
                        help Tailwind products stay on top of the "best of"
                        lists.
                    </li>
                    <li>
                        ...to be a part of a team that is as passionate about
                        the work as I am.
                    </li>
                    <li>
                        ...to have the means to contribute to larger
                        conversation on bridging gaps between design and
                        development.
                    </li>
                    <li>
                        ...to completely satisfy my non-stop urge to just build
                        (in an environment/with a group of like-minded peers).
                    </li>
                    <li>
                        ...and to continue to grow and learn with the best to do
                        it.
                    </li>
                </ul>

                <h4 className="mt-5 text-lg font-semibold">
                    Some things I think we could accomplish together:
                </h4>

                <ul className="mt-3 max-w-lg list-disc space-y-3 pl-5 text-zinc-600">
                    <li>
                        Design/build some more TailwindUI components and use
                        those components to build beautiful/accessible/compliant
                        web properties. I love nothing more than feeling that
                        "click" of "this is what it's supposed to be" and then
                        entering robot-mode to just construct.
                    </li>
                    <li>
                        Get some more Vuejs representation in the templates
                        <ul className="mt-3 max-w-lg list-disc space-y-3 pl-5 text-zinc-600">
                            <li>
                                I know Framer Motion is big for React, but
                                things like{' '}
                                <a
                                    href="https://motion.vueuse.org/"
                                    target={'_blank'}
                                    className="link"
                                >
                                    @vueuse/motion
                                </a>{' '}
                                are helping Vue catch up, making 1:1 parity
                                between React/Vue template systems more feasible
                            </li>
                        </ul>
                    </li>
                    <li>
                        Introducing more enterprise level components that
                        achieve more complex business UIs
                        <ul className="mt-3 max-w-lg list-disc space-y-3 pl-5 text-zinc-600">
                            <li>Interesting ways of visualizing KPIs</li>
                            <li>Complex query builder shell</li>
                            <li>Advance the dashboard-eque templates</li>
                            <li>
                                I have a fascination with virtualized tables,
                                mainly because I struggled to find one that does
                                all the right stuff until I ran across AG Grid
                                years ago. But, it's expensive, aimed at the
                                enterprise and has way too many bells and
                                whistles for most use cases. I've been jonesing
                                to build out a quasi-headless Tailwind styled
                                table that could easily be powered by an
                                external datasource composable. Mainly, I'm
                                primarily talking bringing virtualized X/Y
                                scrolling and a few excel-like features to the
                                UI.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Deeply research trends and theory to help introduce what
                        we think would be a great addition to the existing
                        design system (color palettes, typography, preferred
                        spacing, is Nu Neumorphism going to be a thing 💀, etc.)
                    </li>
                    <li>
                        Explore and develop Tailwind Labs internal tools (gosh
                        am I big on modernizing and maturing internal processes
                        to make team-life better)
                        <ul className="mt-3 max-w-lg list-disc space-y-3 pl-5 text-zinc-600">
                            <li>
                                For example, I see that sometimes PRs are based
                                on new/updated CSS properties and their
                                availability on Can I Use. It'd be cool to have
                                a very simple dashboard connected to the{' '}
                                <a
                                    href="https://github.com/Fyrd/caniuse/blob/main/fulldata-json/data-2.0.json"
                                    target={'_blank'}
                                    className="link"
                                >
                                    raw data file
                                </a>{' '}
                                that we could poll to see a list of filtered
                                properties (say with the tag{' '}
                                <span className="rounded-sm bg-sky-100 px-1 py-0.5 text-xs font-medium">
                                    CSS
                                </span>
                                ). Then use that view to stay on top of/track
                                the modernization of TailwindCSS (get ahead of
                                PRs, discover possible additions/updates before
                                they need to be a PR, auto-generate a PR when
                                clicking from this custom dashboard).
                            </li>
                        </ul>
                    </li>
                </ul>

                <h4 className="mt-5 text-lg font-semibold">
                    A few things authoring this resume inspired me to get around
                    to:
                </h4>

                <ul className="mt-3 max-w-lg list-disc space-y-3 pl-5 text-zinc-600">
                    <li>
                        Continue on the project listed below to see it working
                        with real REST api data from JIRA enterprise
                    </li>
                    <li>
                        Abstract some of my virtualized scrolling work to a
                        package to a TailwindUI table component
                    </li>
                    <li>
                        Write a generalized TS based datasource for tabular data
                        that can be used by any standard JSON REST API
                    </li>
                    <li>
                        Prototype project "Should We Use," using Catalyst
                        components where available!
                    </li>
                </ul>
            </PageSection>

            <PageSection>
                <HeaderMarker
                    color={HeaderMarker.color.SKY}
                    icon={HeaderMarker.icon.GIFT}
                    size={HeaderMarker.size.SMALL}
                />
                <PageHeader title="Bonus!">
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        When I saw the job posting, I was immediately driven to
                        prove out the tech stack described within. I took
                        several (after)hours over the past half week and
                        prototyped this idea that'd been floating around in my
                        head for a bit.
                    </p>
                </PageHeader>

                <div className="mt-5 flex flex-col rounded-xl bg-fuchsia-100 p-5 md:flex-row md:space-x-6">
                    <div className="shrink-0">
                        <img
                            alt=""
                            loading="lazy"
                            width="32"
                            height="16"
                            decoding="async"
                            data-nimg="1"
                            className="h-auto w-28"
                            src={`/work/blob/fpo-logo.png`}
                        />
                    </div>
                    <div className="mt-4 grow md:mt-0">
                        <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
                            BLOB is an attempt to make team resource/sprint
                            planning a wee bit more fun and interactive.
                            Currently, I am using a super dated and somewhat
                            clunky version of Jira at work. It lacks a certain
                            ability to fluidly move issues around and see
                            capacity/burden in real time. I want to see if I can
                            rectify that.{' '}
                            <span className="bg-fuchsia-200 text-fuchsia-700">
                                Current state was incepted, designed and built
                                in less than 10 hours, was not built
                                mobile-first (I wanted to focus on desktop
                                interaction motion) and is wired up to no data
                                source, yet.
                            </span>
                        </p>
                        <div className="mt-4 flex items-center justify-end">
                            <a
                                href="https://github.com/picklepilot-apps/capacity"
                                target={'_blank'}
                                className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 p-1.5 text-white shadow-sm transition-[transform] hover:scale-105 hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 fill-white"
                                >
                                    <title>GitHub</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                            <a
                                href="https://blob-tau.vercel.app/"
                                target={'_blank'}
                                className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-600 p-1.5 text-white shadow-sm transition-[transform] hover:scale-105 hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
                            >
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="w-2"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <PageLogoCloud
                    cols={PageLogoCloud.cols.TWO}
                    className={'mt-5'}
                    technologies={[
                        { name: 'Next.js', src: '/technologies/nextdotjs.svg' },
                        {
                            name: 'TailwindCSS',
                            src: '/technologies/tailwindcss.svg',
                        },
                        {
                            name: 'Typescript',
                            src: '/technologies/typescript.svg',
                        },
                        {
                            name: 'Framer Motion',
                            src: '/technologies/framer.svg',
                        },
                    ]}
                />
            </PageSection>

            <PageSection>
                <PageHeader title="Me, photographically">
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        Here are a few photos from our travels.
                    </p>
                    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-4">
                        <div className="relative col-span-2 h-[350px] overflow-hidden rounded-xl">
                            <img
                                src="/life/jk_fq_japan.jpg"
                                alt="Justin and Franny Mount Fuji"
                                className="relative w-full object-bottom"
                            />
                        </div>
                        <div className="col-span-2 h-[350px] overflow-hidden rounded-xl">
                            <img
                                src="/life/harvey_big_sky.jpg"
                                alt="Harvey Big Sky Montana"
                                className="h-full object-cover"
                            />
                        </div>
                        <div className="col-span-2 h-[350px] overflow-hidden rounded-xl">
                            <img
                                src="/life/jk_fq_chile.jpeg"
                                alt="Chile"
                                className="h-full object-cover"
                            />
                        </div>
                        <div className="col-span-2 h-[350px] overflow-hidden rounded-xl">
                            <img
                                src="/life/jk_fq_japan2.jpeg"
                                alt="Justin and Franny Japan"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </PageHeader>
                <div className="mt-5 text-xs text-zinc-700">
                    That's my wife, Franny. We try to travel as much as
                    possible. Getting to know me would be like getting to know
                    her considering many of my good qualities have come from
                    her. And then there's our 8 year old Wheaten, Harvey. He's
                    definitely got... qualities.
                </div>
            </PageSection>

            <PageSection>
                <PageHeader title="Wrap it up, Justin">
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        The keep it short, I hope what you've seen here has
                        moved you to consider me in the running for this
                        position. This is definitely a dream-level job the way I
                        see it. Regardless I'll definitely continue to ❤️
                        Tailwind and the ways y'all make my life much easier.
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        Looking forward to your response and thanks for taking
                        the time to make it to the end! 🤘🏻
                    </p>
                </PageHeader>
            </PageSection>
        </main>
    )
}
