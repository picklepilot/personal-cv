import { TECHNOLOGY_LOGOS_MAP, type TechonologyName } from '@/app/constants'
import { cn } from '@/app/utils/class-name.utils'

type Technology = {
    header?: string
    invert?: boolean
    name: string
    src: string
}

type Props = {
    className?: string
    cols?: number
    technologies: TechonologyName[]
    theme?: {
        containerClassName?: string
        gridClassName?: string
        imageClassName?: string
        logoWrapperClassName?: string
    }
}

enum Cols {
    TWO,
    THREE,
}

const COL_MAP: {
    [key: number]: string
} = {
    [Cols.TWO]: 'md:grid-cols-2',
    [Cols.THREE]: 'md:grid-cols-3',
}

export default function PageLogoCloud(props: Props) {
    const { cols = 3, className, technologies, theme } = props
    const technologyCount = technologies.length
    return (
        <div className={cn(`bg-white dark:bg-zinc-900`, props.className, theme?.containerClassName)}>
            <div className='mx-auto max-w-7xl'>
                <div
                    className={cn(
                        'mx-0 grid grid-cols-3 gap-0.5 overflow-hidden rounded-2xl sm:mx-0 md:grid-cols-3',
                        COL_MAP[cols],
                        theme?.gridClassName
                    )}
                >
                    {props.technologies
                        .filter((technologyName: TechonologyName) => TECHNOLOGY_LOGOS_MAP[technologyName])
                        .map((technologyName: TechonologyName) => (
                            <div
                                key={TECHNOLOGY_LOGOS_MAP[technologyName].name}
                                className={cn(
                                    technologyCount % 2 && 'last:col-span-2',
                                    'bg-zinc-100 p-8 sm:p-10 md:last:col-span-1 dark:bg-zinc-800',
                                    COL_MAP[cols],
                                    theme?.logoWrapperClassName
                                )}
                            >
                                <img
                                    className={cn(
                                        'max-h-10 w-full object-contain sm:max-h-12',
                                        theme?.imageClassName,
                                        TECHNOLOGY_LOGOS_MAP[technologyName].invert && 'dark:invert'
                                    )}
                                    src={TECHNOLOGY_LOGOS_MAP[technologyName].src}
                                    alt={`Logo Cloud - ${TECHNOLOGY_LOGOS_MAP[technologyName].name}`}
                                />
                                <div className='mt-3 text-center text-xs text-zinc-400 dark:text-zinc-300'>
                                    {TECHNOLOGY_LOGOS_MAP[technologyName].name}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

PageLogoCloud.cols = Cols
