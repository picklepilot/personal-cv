import ContinuousTimeline from '@/app/components/ContinuousTimeline'
import LandingWorkTimeline from '@/app/components/LandingWorkTimeline'
import PageHeader from '@/app/components/PageHeader'
import PhotoGrid from '@/app/components/PhotoGrid'
import VerticalNav from '@/app/components/VerticalNav'
import work from '@/app/work/work.json'
import WorkGrid from '@/app/work/WorkGrid'
import { faCamera, faHandshake, faStar, faTimeline, faUser } from '@awesome.me/kit-e9b483eadd/icons/classic/regular'
import LandingHero from './components/LandingHero'
import ThankYou from './components/ThankYou'
import { NavItem } from './types'

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

const sectionHeaderTheme = {
    container: 'px-4 sm:px-6 py-10 max-w-3xl',
    header: 'text-3xl sm:text-5xl',
}

const personalProjects = work.filter(project => project.company === 'Personal')
const workProjects = work.filter(project => project.company !== 'Personal')

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between py-2 dark:bg-zinc-900 dark:text-white'>
            {/* <TheAlert /> */}

            {/* Vertical Navigation */}
            <VerticalNav navItems={navItems} />

            {/* Resume Link */}
            {/* <div className='fixed top-20 right-4 z-50'>
                <Link
                    href='/resume'
                    className='flex items-center gap-2 rounded-lg bg-green-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-green-500 hover:shadow-xl'
                >
                    <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                        />
                    </svg>
                    Resume
                </Link>
            </div> */}

            <section id='timeline' className='mx-auto mt-10 w-full max-w-4xl rounded-4xl px-0 sm:mt-2 sm:px-6'>
                {/* Landing Hero */}
                <LandingHero />

                {/* Timeline */}
                <ContinuousTimeline>
                    <PageHeader id='background' title='Background' theme={sectionHeaderTheme}>
                        <p className='lead'>
                            Below is a timeline of my professional journey, interwoven with personal experiences that
                            have shaped my approach to design and development.
                        </p>
                    </PageHeader>
                    <LandingWorkTimeline />
                    <PageHeader id='case-studies' title='Case studies' theme={sectionHeaderTheme}>
                        <p className='lead'>
                            I just want to call out a few of the projects that I am proud of. They have helped shape my
                            go-to toolkit and abilities as a designer/developer in what they are today.
                        </p>
                    </PageHeader>
                    <WorkGrid work={workProjects} />
                    <PageHeader id='personal-projects' title='For fun' theme={sectionHeaderTheme}>
                        <p className='lead'>
                            When I'm not working my day job, I'm usually working on one of the following pet projects.
                        </p>
                    </PageHeader>
                    <WorkGrid work={personalProjects} />
                    <PageHeader id='reality' title='Reality' theme={sectionHeaderTheme}>
                        <p className='lead'>
                            Get to know me (and my family) a bit more though the various photos below.
                        </p>
                    </PageHeader>
                    <PhotoGrid />
                </ContinuousTimeline>
                <ThankYou />
            </section>
        </main>
    )
}
