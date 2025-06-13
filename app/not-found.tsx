import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex h-screen flex-col items-center justify-center'>
            <Image
                src='/404-justin-drip.webp'
                alt='Little Justin'
                width={100}
                height={100}
                sizes='(max-width: 768px) 100vw, 100px'
                className='relative drop-shadow-lg'
                priority
            />

            <h1 className='mt-5 text-xl font-semibold text-zinc-900/30'>Error 1995 - Little Justin Found</h1>
            <Link href='/' className='mt-3 text-blue-500 hover:underline'>
                Go back home
            </Link>
        </div>
    )
}
