type Props = {
    title: string
    subTitle?: string
    children?: React.ReactNode
}

export default function StatGridStat(props: Props) {
    const { title, subTitle } = props
    return (
        <div className='flex flex-col justify-center rounded-lg bg-zinc-100 px-3 py-4 md:p-6'>
            <dt className='text-xs font-medium text-zinc-500 md:text-sm'>
                {title}
            </dt>
            {props.children}
            <div className='mt-1 text-xs text-zinc-500/70'>{subTitle}</div>
        </div>
    )
}
