type Props = {
    quote: string
}

export default function TailwindBlockquote(props: Props) {
    return (
        <blockquote className='flex items-center space-x-3 border-l-2 border-sky-200 bg-sky-50 py-3 pl-3 pr-4 text-lg font-medium leading-6'>
            <img
                src={`/Tailwind_CSS_Logo.svg.png`}
                alt='Tailwind mark'
                width={25}
                className='max-w-sm'
            />
            <span className='text-sky-700'>{props.quote}</span>
        </blockquote>
    )
}
