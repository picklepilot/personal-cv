import PageHeader from '@/app/components/PageHeader'
import PageLogoCloud from '@/app/components/PageLogoCloud'
import PageSection from '@/app/components/PageSection'
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
        <main className='flex min-h-screen flex-col items-center justify-between'>
            {/* <TheAlert /> */}

            <WorkHero
                title={workData.name}
                company={'personal'}
                dateStart={'2020-03-01'}
                dateEnd={null}
                logo={workData.logo}
            >
                <p className='mt-2 text-base leading-7 text-zinc-600 md:mt-2 md:text-xl md:leading-8'>
                    This is my passion project. During the pandemic, I decided I'd finally start building the
                    'Letterboxd' of the book world. Without any expectations other than "make something that I'd enjoy,"
                    this project has become my workspace for skills practice. It's literally how I 'relax' after a long
                    day of work.
                </p>
            </WorkHero>

            <PageSection className='max-w-5xl bg-transparent px-0'>
                <PageHeader
                    title='Notes on the design'
                    theme={{ container: 'mx-auto w-full max-w-2xl px-4', header: 'sm:text-4xl ' }}
                >
                    <p className='lead'>
                        Essentially, I wanted to incorporate a tiny bit of brutalist minimalism—clean, fun and sharp.
                        Aside from it being the prettiest and most complete self-serve app for book lovers out there, I
                        think the most important thing that I'd point out is how the design shows that you can
                        completely follow Tailwind's opinions and still end up with a well-designed view that is a
                        departure from the examples and documentation.
                    </p>
                </PageHeader>

                <div className='mt-10 grid h-auto grid-cols-3 gap-5'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-500 p-5 md:flex-row md:space-x-8'>
                        <div className='mx-auto mb-4 flex w-[250px] shrink-0 flex-col items-center justify-center text-center md:mb-0'>
                            <h2 className='text-base font-bold text-zinc-800 sm:text-xl'>All Tailwind</h2>
                            <p className='mt-1.5 text-sm font-light sm:text-base'>Fun take on list groups</p>
                        </div>
                        <div className='relative flex max-w-md grow items-center justify-center overflow-hidden rounded-sm shadow-lg'>
                            <img src={`/work/bibli/bibli__ListGroup.png`} className='object-cover' />
                        </div>
                    </div>
                </div>

                <div className='mt-5 grid h-auto grid-cols-3 gap-5 md:h-[440px]'>
                    <div className='col-span-3 flex flex-col-reverse overflow-hidden rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-500 p-5 md:flex-row md:space-x-8'>
                        <div className='relative mt-4 grow overflow-hidden rounded-sm shadow-lg md:mt-0'>
                            <img src={`/work/bibli/bibli__UserProfile.png`} className='object-cover' />
                        </div>
                        <div className='mx-auto flex w-[250px] shrink-0 flex-col items-center justify-center text-center'>
                            <h2 className='text-base font-bold text-zinc-800 sm:text-xl'>Visually engaging</h2>
                            <p className='mt-1.5 text-sm font-light sm:text-base'>
                                While still being minimal <br />
                                and clean.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='mt-5 grid h-auto grid-cols-3 gap-5 md:h-[440px]'>
                    <div className='col-span-3 flex flex-col-reverse overflow-hidden rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-500 p-5 md:flex-row md:space-x-8'>
                        <div className='mx-auto flex w-[280px] shrink-0 flex-col items-center justify-center text-center'>
                            <h2 className='text-base font-bold text-zinc-800 sm:text-xl'>Interesting style blends</h2>
                            <p className='mt-1.5 text-sm font-light sm:text-base'>Hints of brutalism</p>
                        </div>{' '}
                        <div className='relative mt-4 grow overflow-hidden rounded-sm shadow-lg md:mt-0'>
                            <img src={`/work/bibli/bibli__Group2.png`} className='object-cover' />
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
                    technologies={['Typescript', 'Vue', 'Vite', 'TailwindCSS', 'PHP', 'Laravel', 'MySQL', 'Postgres']}
                />
            </section>

            <PageSection className='max-w-5xl bg-transparent px-0'>
                <PageHeader title='More examples' theme={{ container: 'max-w-3xl', header: 'sm:text-4xl' }}>
                    <p className='lead'>Here are some more examples of the design.</p>
                </PageHeader>

                <div className='mt-5 grid h-auto grid-cols-3 gap-5'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-500 p-4 md:flex-row md:space-x-8'>
                        <img
                            src={`/work/bibli/bibli__List.png`}
                            className='w-full rounded-lg object-cover shadow-2xl'
                        />
                    </div>
                </div>

                <div className='mt-5 grid h-auto grid-cols-3 gap-5'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-500 p-4 md:flex-row md:space-x-8'>
                        <img
                            src={`/work/bibli/bibli__UserProfile_ReadHistory.png`}
                            className='w-full rounded-lg object-cover shadow-2xl'
                        />
                    </div>
                </div>

                <div className='mt-5 grid h-auto grid-cols-3 gap-5'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-500 p-4 md:flex-row md:space-x-8'>
                        <img
                            src={`/work/bibli/bibli__BookSuggester.png`}
                            className='w-full rounded-lg object-cover shadow-2xl'
                        />
                    </div>
                </div>

                <div className='mt-5 grid h-auto grid-cols-3 gap-5'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-yellow-200 to-yellow-500 p-4 md:flex-row md:space-x-8'>
                        <img
                            src={`/work/bibli/bibli__Book.png`}
                            className='w-full rounded-lg object-cover shadow-2xl'
                        />
                    </div>
                </div>
            </PageSection>

            {/* <div className='relative mx-auto w-full max-w-3xl bg-white px-8 pb-6 md:px-16'>
                <Link href='/' className='inline-flex items-center text-blue-600 hover:text-blue-500 hover:underline'>
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2 h-3 w-3' />
                    <span>Back to main page</span>
                </Link>
            </div> */}
        </main>
    )
}
