export default function BadgeRound(props: any) {
    return (
        <div className='relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-900/5 bg-white bg-white shadow-md shadow-zinc-800/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
            {props.children}
        </div>
    )
}
