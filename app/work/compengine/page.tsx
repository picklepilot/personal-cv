import HeaderMarker from '@/app/components/HeaderMarker'
import PageSection from '@/app/components/PageSection'
import TheAlert from '@/app/components/TheAlert'
import WorkHero from '@/app/components/WorkHero'
import { faArrowLeft } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const workData = {
    company: 'CompEngine',
    name: 'CompEngine',
    role: 'Frontend Developer',
    blurb: 'A sports head-to-head voting platform that lets users create and participate in competitive tournaments across various sports categories.',
    dates: '2024',
    logo: 'work/compengine/logo.png', // You may need to add a logo
}

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            <TheAlert />

            <WorkHero
                title={workData.name}
                company={'CompEngine'}
                dateStart={'2024-01-01'}
                dateEnd={null}
                logo={workData.logo}
            >
                <p className='mt-4 text-base leading-7 text-zinc-600 md:mt-6 md:text-xl md:leading-8'>
                    CompEngine is a dynamic sports head-to-head voting platform that brings competitive tournaments to
                    life. Users can create, participate in, and vote on various sports competitions, from snowboarding
                    championships to multi-sport tournaments. The platform combines user engagement with competitive
                    analytics to create an immersive sporting experience.
                </p>
            </WorkHero>

            <PageSection>
                <HeaderMarker
                    color={HeaderMarker.color.ORANGE}
                    icon={HeaderMarker.icon.INFO}
                    size={HeaderMarker.size.SMALL}
                />
                <header className='mx-auto w-full max-w-2xl pb-0 pl-4 md:pl-0'>
                    <h1 className='flex items-center space-x-3 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <span>Platform Overview</span>
                    </h1>
                    <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400'>
                        CompEngine serves as a comprehensive platform for sports competition management and fan
                        engagement. The platform allows users to create tournaments, submit entries, and participate in
                        head-to-head voting competitions across various sports categories. With features like the
                        Bell-to-Bell Snowboard 2025 championship, it demonstrates the versatility of modern sports
                        engagement platforms.
                    </p>
                    <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400'>
                        The user experience focuses on intuitive navigation, engaging visual design, and seamless
                        interaction flows that encourage participation and community building within the sports
                        ecosystem.
                    </p>
                </header>
            </PageSection>

            <PageSection>
                <div className='mt-5 grid h-auto grid-cols-3 gap-5'>
                    <div className='col-span-3 flex flex-col overflow-hidden rounded-xl bg-gradient-to-r from-blue-200 to-blue-500 p-5 md:flex-row md:space-x-8'>
                        <div className='mx-auto mb-4 flex w-[250px] shrink-0 flex-col items-center justify-center text-center md:mb-0'>
                            <h2 className='text-base font-bold text-white'>Competition Detail</h2>
                            <p className='mt-1.5 text-sm font-light text-blue-100'>
                                Clean, engaging tournament interface
                            </p>
                        </div>
                        <div className='relative grow overflow-hidden rounded-sm shadow-lg'>
                            <img src={`/work/compengine/COMPENGINE-competition-detail.png`} className='object-cover' />
                        </div>
                    </div>
                </div>
            </PageSection>

            <PageSection>
                <HeaderMarker
                    color={HeaderMarker.color.LIME}
                    icon={HeaderMarker.icon.GIFT}
                    size={HeaderMarker.size.SMALL}
                />
                <header className='mx-auto w-full max-w-2xl pb-0 pl-4 md:pl-0'>
                    <h1 className='flex items-center space-x-3 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <span>Technical Implementation</span>
                    </h1>
                    <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400'>
                        The platform leverages modern web technologies to deliver a responsive, interactive experience.
                        Key features include real-time voting systems, dynamic tournament brackets, user authentication,
                        and comprehensive competition management tools.
                    </p>
                    <div className='mt-6 max-w-xl'>
                        <h3 className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>Key Features:</h3>
                        <ul className='mt-2 space-y-1 text-base leading-6 text-zinc-600 dark:text-zinc-400'>
                            <li>• Head-to-head voting system</li>
                            <li>• Tournament creation and management</li>
                            <li>• User registration and profiles</li>
                            <li>• Real-time competition updates</li>
                            <li>• Cross-platform responsive design</li>
                            <li>• Sports category organization</li>
                        </ul>
                    </div>
                </header>
            </PageSection>

            <PageSection>
                <HeaderMarker
                    color={HeaderMarker.color.SKY}
                    icon={HeaderMarker.icon.TAILWIND}
                    size={HeaderMarker.size.SMALL}
                />
                <header className='mx-auto w-full max-w-2xl pb-0 pl-4 md:pl-0'>
                    <h1 className='flex items-center space-x-3 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <span>Design & User Experience</span>
                    </h1>
                    <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400'>
                        The CompEngine platform prioritizes user engagement through clean design patterns and intuitive
                        user flows. The interface balances competitive excitement with functional clarity, ensuring
                        users can easily navigate between competitions, cast votes, and track tournament progress.
                    </p>
                    <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400'>
                        Visual hierarchy and strategic use of color help guide users through the voting process while
                        maintaining the competitive atmosphere that makes sports tournaments exciting. The responsive
                        design ensures consistent experience across desktop and mobile platforms.
                    </p>
                    <p className='mt-6 max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400'>
                        As demonstrated in competitions like the Bell-to-Bell Snowboard 2025, the platform successfully
                        combines functionality with engaging visual design to create an immersive sports competition
                        experience that encourages user participation and community building.
                    </p>
                </header>
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
