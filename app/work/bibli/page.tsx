import HeaderMarkerInfo from '@/app/components/HeaderMarkerInfo'
import HeaderMarkerTailwind from '@/app/components/HeaderMarkerTailwind'
import PageSection from '@/app/components/PageSection'
import TheAlert from '@/app/components/TheAlert'
import WorkHero from '@/app/components/WorkHero'

const workData = {
    company: 'personal',
    name: 'bibli',
    role: 'Design/Client Engineer',
    blurb: "This is my passion project. During the pandemic, I decided I'd finally start building the 'Letterboxd' of the book world. It's literally how I 'relax' after a long day of work.",
    dates: '2017-current',
    logo: 'work/bibli/logo-red.png',
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <TheAlert />

            <WorkHero
                title={workData.name}
                company={'personal'}
                dateStart={'2020-03-01'}
                dateEnd={null}
                logo={workData.logo}
            >
                <p className="mt-4 text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8">
                    This is my passion project. During the pandemic, I decided
                    I'd finally start building the 'Letterboxd' of the book
                    world. Without any expectations other than "make something
                    that I'd enjoy," this project has become my workspace for
                    skills practice. It's literally how I 'relax' after a long
                    day of work.
                </p>
            </WorkHero>

            <PageSection>
                <HeaderMarkerInfo />
                <header className="mx-auto w-full max-w-2xl pb-0">
                    <h1 className="flex items-center space-x-3 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <span>Notes on the design</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        Essentially, I wanted to incorporate a tiny bit of
                        brutalist minimalism—clean, fun and sharp. Aside from it
                        being the prettiest and most complete self-serve app for
                        book lovers out there, I think the most important thing
                        that I'd point out is how the design shows that you can
                        completely follow Tailwind's opinions and still end up
                        with a well-designed view that is a departure from the
                        examples and documentation. I'm likely going to start
                        incorporating some fun interaction animations (like in{' '}
                        <a
                            href="/work/blob"
                            className="text-sky-600 hover:text-sky-500 hover:underline"
                        >
                            BLOB
                        </a>
                        , the little PoC I threw together for y'all).
                    </p>
                </header>
            </PageSection>

            <PageSection>
                <div className="mt-5 grid h-[auto] grid-cols-3 gap-5">
                    <div className="col-span-3 flex space-x-8 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-500 p-5">
                        <div className="flex w-[250px] shrink-0 flex-col items-center justify-center text-center ">
                            <h2 className="text-base font-bold text-zinc-800">
                                All Tailwind
                            </h2>
                            <p className="mt-1.5 text-sm font-light">
                                Interesting take on list groups
                            </p>
                        </div>
                        <div className="relative grow overflow-hidden rounded-sm shadow-lg">
                            <img
                                src={`/work/bibli/bibli__ListGroup.png`}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid h-[440px] grid-cols-3 gap-5">
                    <div className="col-span-3 flex space-x-8 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-500 p-5">
                        <div className="relative grow overflow-hidden rounded-sm shadow-lg">
                            <img
                                src={`/work/bibli/bibli__UserProfile.png`}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex w-[250px] shrink-0 flex-col items-center justify-center text-center ">
                            <h2 className="text-base font-bold text-zinc-800">
                                Visually engaging
                            </h2>
                            <p className="mt-1.5 text-sm font-light">
                                While still being minimal <br />
                                and clean.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid h-[610px] grid-cols-3 gap-5">
                    <div className="col-span-3 flex flex-col space-y-8 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-500 p-5">
                        <div className="mx-auto flex w-[250px] shrink-0 flex-col items-center justify-center text-center ">
                            <h2 className="text-base font-bold text-zinc-800">
                                Interesting style blends
                            </h2>
                            <p className="mt-1.5 text-sm font-light">
                                Hints of brutalism
                            </p>
                        </div>
                        <div className="relative grow overflow-hidden rounded-sm shadow-lg">
                            <img
                                src={`/work/bibli/bibli__Group2.png`}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <h4 className="mt-10 text-lg font-semibold">
                    Examples of progress of full templates
                </h4>

                <div className="mt-5 grid grid-cols-3 gap-5">
                    <div className="col-span-3 overflow-hidden rounded-xl bg-zinc-100 shadow">
                        <img
                            src={`/work/bibli/bibli__List.png`}
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-5">
                    <div className="col-span-3 overflow-hidden rounded-xl bg-zinc-100 shadow">
                        <img
                            src={`/work/bibli/bibli__UserProfile_ReadHistory.png`}
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-5">
                    <div className="col-span-3 overflow-hidden rounded-xl bg-zinc-100 shadow">
                        <img
                            src={`/work/bibli/bibli__BookSuggester.png`}
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-5">
                    <div className="col-span-3 overflow-hidden rounded-xl bg-zinc-100 shadow">
                        <img
                            src={`/work/bibli/bibli__Book.png`}
                            className="object-cover"
                        />
                    </div>
                </div>
            </PageSection>

            <PageSection>
                <HeaderMarkerTailwind />
                <header className="mx-auto w-full max-w-2xl pb-0">
                    <h1 className="flex items-center space-x-3 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <span>Related to Design Engineer role!</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        This is a clear cut example of a project that is pure
                        design. It exists for me to continue to hone my skills
                        where it comes to beauty and function. As an
                        application, everything it does can already be done,
                        albeit not all in one place. (I'm looking at you,
                        aesthetic-usability effect.)
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        I have "the itch" and it'll likely never go away. That's
                        why things like this project exist. It allows me to give
                        into that itch and continually integrate/learn the
                        latest and greatest from design patterns to build
                        tooling. I believe passion projects are vital to
                        discovery and growth as a professional in our field.
                    </p>
                    <p className="mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
                        Technology-wise, this project is Vue3, Vite, TailwindCSS
                        and GCP for backend. (I prefer the Composition API,
                        these days.) I'm also using the new Vue Router and Pinia
                        for global store. I could fairly easily port this as is
                        to Next.js. I already did it with Laravel
                        (Vue+Inertia/Postgres), then AdonisJS and now the stack
                        you see here today.
                    </p>
                </header>
            </PageSection>
        </main>
    )
}
