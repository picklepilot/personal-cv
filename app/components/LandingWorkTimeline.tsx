import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChild,
    faVanShuttle,
    faDiploma,
    faToolbox,
} from '@awesome.me/kit-e9b483eadd/icons/classic/regular'

const timeline = [
    {
        id: 1,
        logo: null,
        role: 'Web Developer & UX/UI Design Enthusiast',
        company: 'Self',
        href: '#',
        date: '2002 - today',
        datetime: '2002-01-01',
        icon: faChild,
        iconBackground: null,
        toolkitAdditions: [],
        content:
            "Since youth, I've been more concerned with the relative canvas and how all the things fit onto the canvas in a pleasing/meaningful way. I spent my high school years designing mixtape covers and flash websites for local artists, sometimes even getting paid!",
    },
    {
        id: 2,
        logo: null,
        role: 'Touring Musician',
        company: 'Warner Music Group',
        href: '#',
        date: '2004 - 2008',
        datetime: '2004-01-01',
        icon: faVanShuttle,
        iconBackground: null,
        howItRelates:
            'Being in a touring band taught me, from a young age, the importance of working well in a tight-knit team. No, not just a class project type team, but surviving on your own in the real world type teamwork.',
        toolkitAdditions: ['Semantic HTML/5', 'PHP', 'MySQL', 'jQuery'],
        content:
            'While writing music and touring in an active rock band, I managed to start getting more into traditionally designed websites. Took on freelance work while touring.',
    },
    {
        id: 3,
        logo: null,
        role: 'Student',
        company: 'SUNY New Paltz',
        href: '#',
        date: '2008 - 2012',
        datetime: '2012-06-01',
        icon: faDiploma,
        toolkitAdditions: [
            'MVC Architecture',
            'OOP',
            'RESTful APIs',
            'Collaboration/Teamwork',
            'LAMP Stack',
            'Java',
        ],
        iconBackground: null,
        content:
            'I decided to take a few years off from living and get my BA in Computer Science. Somewhere in there my Computing & Math team won a few first places at comps and I built a conference management/networking app during a paid internship. By my last semester I had moved to NYC and was working full time at a branding agency.',
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
            'Project Management',
            'UX/UI',
            'Javascript',
            'CSS3',
            'SASS',
            'Bootstrap',
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
            'Google Cloud Platform',
            'Laravel Ecosystem',
            'Vue.js',
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
        role: 'Lead Design/Client Engineer',
        company: '3M',
        href: '#',
        date: '2017 - today',
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
            "Working for a large corporation has taught me a lot about the importance of being a self-starter, which I've just naturally always been. There is rarely enough time or bandwidth to get the attention of an audience, so a lot of my work has been design-in-code and rapid prototyping/discovery in order to prove that the next move would be worth it (hint: the answer was usually 'yes' and the next move was already done). Read more about this project by visiting a <a href='/work/mmm' class='text-sky-600 hover:text-sky-500 hover:underline'>mini case study page</a>.",
        content:
            'Design engineer for a PIM called HAMR. I incepted, designed and built the client application from the ground up. I am now working to modernize the full client-side tech stack in carefully planned migration. Spend all day knee deep in TailwindCSS, Vue 3, Typescript and Vite.',
    },
]

export default function LandingWorkTimeline() {
    return (
        <div className='-mx-3 mt-5 flow-root md:mx-0'>
            <ul role='list' className='-mb-8'>
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className='relative pb-8'>
                            {eventIdx !== timeline.length - 1 ? (
                                <span
                                    className='absolute left-7 top-4 -ml-px h-full w-0.5 bg-gray-200'
                                    aria-hidden='true'
                                />
                            ) : null}
                            <div className='relative flex space-x-3 pr-4 md:pr-0'>
                                <div className='relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white'>
                                    <div
                                        className='relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-900/5 bg-white shadow-md shadow-zinc-800/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'
                                        style={{
                                            backgroundColor:
                                                event.iconBackground ||
                                                '#ffffff',
                                        }}
                                    >
                                        {event.icon && (
                                            <FontAwesomeIcon
                                                icon={event.icon}
                                                className='h-4 w-4'
                                            />
                                        )}
                                        {event.logo && (
                                            <img
                                                className='w-6'
                                                src={`/${event.logo}`}
                                                alt=''
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className='mb-3 flex min-w-0 flex-1 flex-wrap-reverse justify-between pt-3 md:flex-row md:space-x-4'>
                                    <div className='mt-1 md:mt-0'>
                                        <div className='font-semibold'>
                                            {event.role}
                                        </div>
                                        <div className='mt-1 flex items-center space-x-2 text-sm font-medium text-zinc-700'>
                                            <span>{event.company}</span>
                                            {event.href !== '#' && (
                                                <span className='flex items-center space-x-2'>
                                                    <span>&middot;</span>
                                                    <a
                                                        href={event.href}
                                                        target={'_blank'}
                                                        className='ml-1 text-sky-600 hover:text-sky-500'
                                                    >
                                                        {event.href}
                                                    </a>
                                                </span>
                                            )}
                                        </div>
                                        <p className='mt-1 max-w-sm text-sm text-zinc-500'>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: event.content,
                                                }}
                                            ></span>
                                        </p>

                                        {event.howItRelates && (
                                            <div className='mt-4 w-full max-w-sm rounded-lg bg-sky-50 px-5 pb-3 pt-4'>
                                                <h4 className='flex items-center space-x-1.5 text-sm font-bold text-zinc-800 dark:text-zinc-100'>
                                                    <img
                                                        src={`/Tailwind_CSS_Logo.svg.png`}
                                                        width={18}
                                                    />
                                                    <span>
                                                        Related to Design
                                                        Engineer role!
                                                    </span>
                                                </h4>
                                                <p className='mt-2 text-sm text-zinc-600'>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: event.howItRelates,
                                                        }}
                                                    ></span>
                                                </p>
                                            </div>
                                        )}

                                        {event.toolkitAdditions?.length > 0 && (
                                            <div className='mt-4 w-full max-w-sm rounded-lg bg-zinc-100 px-5 pb-3 pt-4 dark:bg-zinc-800'>
                                                <div className='flex items-center space-x-1.5'>
                                                    <FontAwesomeIcon
                                                        icon={faToolbox}
                                                        className='h-4 w-4'
                                                    />
                                                    <span className='text-sm font-semibold'>
                                                        Toolkit additions
                                                    </span>
                                                </div>
                                                <div className='mt-3 flex flex-wrap items-center'>
                                                    {event.toolkitAdditions.map(
                                                        (
                                                            technology: string
                                                        ) => (
                                                            <span
                                                                key={technology}
                                                                className='mb-2 mr-2 whitespace-nowrap rounded-full bg-lime-600/80 px-2 py-0.5 text-xs font-medium text-lime-50'
                                                            >
                                                                {technology}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className='whitespace-nowrap text-right text-sm text-zinc-400/60'>
                                        <time dateTime={event.datetime}>
                                            {event.date}
                                        </time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
