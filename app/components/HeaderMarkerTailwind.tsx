export default function HeaderMarkerTailwind() {
    return (
        <div className='absolute top-[calc(5rem+5px)] left-[0] h-[25px] w-[3px] bg-blue-400'>
            <img
                src={`/Tailwind_CSS_Logo.svg.png`}
                alt='Tailwind mark'
                width={25}
                className='relative top-[5px] left-2.5 max-w-sm'
            />
        </div>
    )
}
