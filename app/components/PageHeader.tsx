'use client'

import { cn } from '@/app/utils/class-name.utils'

type PageHeaderProps = {
    title: string
    label?: string
    children?: React.ReactNode
    theme?: {
        container?: string
        header?: string
    }
    id?: string
}

export default function PageHeader(props: PageHeaderProps) {
    const { title, id } = props
    return (
        <header
            id={id}
            className={cn('relative z-10 mx-auto w-full max-w-2xl pb-0 backdrop-blur-xs', props.theme?.container)}
        >
            {props.label && (
                <span className='absolute top-0 -left-50 pr-4 text-sm font-medium text-zinc-500 md:text-3xl dark:text-zinc-400'>
                    {props.label}
                </span>
            )}
            <h1
                className={cn(
                    'text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100',
                    props.theme?.header
                )}
            >
                {props.title}
            </h1>
            {props.children}
        </header>
    )
}
