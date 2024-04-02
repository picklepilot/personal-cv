type Technology = {
    name: string
    src: string
}

type Props = {
    className?: string
    technologies: Technology[]
    cols?: number
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
    const { cols = 3, className, technologies } = props
    return (
        <div className={`bg-white ${props.className}`}>
            <div className="mx-auto max-w-7xl">
                <div
                    className={`-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl ${COL_MAP[cols]}`}
                >
                    {props.technologies.map((technology: Technology) => (
                        <div className="bg-zinc-100 p-8 sm:p-10">
                            <img
                                className="max-h-12 w-full object-contain"
                                src={technology.src}
                                alt={`Logo Cloud - ${technology.name}`}
                                width={158}
                                height={48}
                            />
                            <div className="mt-5 text-center text-xs text-zinc-400">
                                {technology.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

PageLogoCloud.cols = Cols
