export default function HeaderMarkerTailwind() {
    return (
        <div className='absolute left-[0] top-[calc(5rem+5px)] h-[25px] w-[3px] bg-sky-400'>
            <img
                src={`/Tailwind_CSS_Logo.svg.png`}
                alt='Tailwind mark'
                width={25}
                className='relative left-2.5 top-[5px] max-w-sm'
            />
        </div>
    )
}
