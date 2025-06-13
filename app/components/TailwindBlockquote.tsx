type Props = {
    quote: string
}

export default function TailwindBlockquote(props: Props) {
    return (
        <blockquote className='flex items-center space-x-3 border-l-2 border-blue-200 bg-blue-50 py-3 pr-4 pl-3 text-lg leading-6 font-medium'>
            <img src={`/Tailwind_CSS_Logo.svg.png`} alt='Tailwind mark' width={25} className='max-w-sm' />
            <span className='text-blue-700'>{props.quote}</span>
        </blockquote>
    )
}
