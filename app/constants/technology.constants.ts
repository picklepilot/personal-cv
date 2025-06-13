export type TechonologyName =
    | 'CSS 3'
    | 'Docker'
    | 'Elasticsearch'
    | 'Figma'
    | 'Framer Motion'
    | 'Git'
    | 'Google Firebase'
    | 'HTML 5'
    | 'Laravel'
    | 'MySQL'
    | 'Next.js'
    | 'OpenAI'
    | 'PHP'
    | 'Postgres'
    | 'React'
    | 'Supabase'
    | 'TailwindCSS'
    | 'Typescript'
    | 'Vite'
    | 'Vue'
    | 'Wordpress'
    | 'Bootstrap'
    | 'Javascript'
    | 'Swift'
    | 'Sass'

export const TECHNOLOGY_LOGOS = [
    {
        name: 'Typescript',
        src: '/technologies/typescript.svg',
        header: 'Languages',
    },
    { name: 'Vue', src: '/technologies/vuedotjs.svg', header: 'Frameworks' },
    { name: 'Vite', src: '/technologies/vite.svg', header: 'Build tools' },
    { name: 'HTML 5', src: '/technologies/html5.svg', header: 'HTML' },
    { name: 'CSS 3', src: '/technologies/css.svg', header: 'CSS' },
    {
        name: 'TailwindCSS',
        src: '/technologies/tailwindcss.svg',
        header: 'CSS Frameworks',
        className: 'w-6 sm:w-9',
    },
    {
        name: 'PHP',
        src: '/technologies/php.svg',
        header: 'Languages',
        invert: true,
        className: 'w-6 sm:w-10',
    },
    { name: 'Laravel', src: '/technologies/laravel.svg', header: 'Frameworks' },
    { name: 'MySQL', src: '/technologies/mysql.svg', header: 'Databases' },
    { name: 'Postgres', src: '/technologies/postgresql.svg', header: 'Databases' },
    { name: 'Git', src: '/technologies/git.svg', header: 'Version Control' },
    { name: 'OpenAI', src: '/technologies/openai.svg', header: 'AI', invert: true },
    { name: 'Supabase', src: '/technologies/supabase.svg', header: 'Databases' },
    { name: 'Firebase', src: '/technologies/firebase.svg', header: 'Cloud' },
    { name: 'Figma', src: '/technologies/figma.svg', header: 'Design' },
    { name: 'Elasticsearch', src: '/technologies/elastic.svg', header: 'Databases' },
    { name: 'Docker', src: '/technologies/docker.svg', header: 'Cloud' },
    { name: 'Wordpress', src: '/technologies/wordpress.svg', header: 'CMS' },
    {
        name: 'Framer Motion',
        src: '/technologies/framer.png',
        header: 'Frameworks',
    },
    { name: 'Next.js', src: '/technologies/nextjs.svg', invert: true },
    { name: 'React', src: '/technologies/react.svg' },
    { name: 'Bootstrap', src: '/technologies/bootstrap.svg' },
    { name: 'Swift', src: '/technologies/swift.svg' },
    { name: 'Javascript', src: '/technologies/javascript.svg' },
    { name: 'Sass', src: '/technologies/sass.svg', className: 'w-6 sm:w-9' },
]

export const TECHNOLOGY_LOGOS_MAP = TECHNOLOGY_LOGOS.reduce(
    (acc, logo) => {
        acc[logo.name] = logo
        return acc
    },
    {} as Record<string, (typeof TECHNOLOGY_LOGOS)[number]>
)
