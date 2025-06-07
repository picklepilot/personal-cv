'use client'

type PageHeaderProps = {
    title: string
    children?: React.ReactNode
}

export default function PageHeader(props: PageHeaderProps) {
    const { title } = props
    return (
        <header className='mx-auto w-full max-w-2xl pb-0'>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                {props.title}
            </h1>
            {props.children}
        </header>
    )
}
