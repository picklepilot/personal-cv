'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const images = [
    {
        src: '/life/jk_fq_japan.webp',
        alt: 'Justin and Franny Mount Fuji',
    },
    {
        src: '/life/harvey_big_sky.webp',
        alt: 'Harvey Big Sky Montana',
    },
    {
        src: '/life/jk_fq_chile.webp',
        alt: 'Chile',
    },
    {
        src: '/life/jk_fq_japan2.webp',
        alt: 'Justin and Franny Japan',
    },
    {
        src: '/life/jk_fq_italy.webp',
        alt: 'Justin and Franny Italy',
    },
]

export default function PhotoGrid() {
    const [index, setIndex] = useState(-1)

    return (
        <div className='relative z-10'>
            <div className='grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-4'>
                <div className='relative col-span-1 h-[250px] cursor-pointer overflow-hidden rounded-xl sm:h-[300px] md:col-span-2 md:h-[350px]'>
                    <Image
                        src={images[0].src}
                        alt={images[0].alt}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='relative object-cover'
                        onClick={() => setIndex(0)}
                    />
                </div>
                <div className='relative col-span-1 h-[250px] cursor-pointer overflow-hidden rounded-xl sm:h-[300px] md:col-span-2 md:h-[350px]'>
                    <Image
                        src={images[1].src}
                        alt={images[1].alt}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='object-cover'
                        onClick={() => setIndex(1)}
                    />
                </div>
                <div className='relative col-span-1 h-[250px] cursor-pointer overflow-hidden rounded-xl sm:h-[300px] md:col-span-2 md:h-[350px]'>
                    <Image
                        src={images[2].src}
                        alt={images[2].alt}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='object-cover'
                        onClick={() => setIndex(2)}
                    />
                </div>
                <div className='relative col-span-1 h-[250px] cursor-pointer overflow-hidden rounded-xl sm:h-[300px] md:col-span-2 md:h-[350px]'>
                    <Image
                        src={images[3].src}
                        alt={images[3].alt}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='object-cover'
                        onClick={() => setIndex(3)}
                    />
                </div>
                <div className='relative col-span-1 h-[250px] cursor-pointer overflow-hidden rounded-xl sm:h-[300px] md:col-span-4 md:h-[350px]'>
                    <Image
                        src={images[4].src}
                        alt={images[4].alt}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='object-cover'
                        onClick={() => setIndex(4)}
                    />
                </div>
            </div>
            <div className='p-6 text-sm text-zinc-700 backdrop-blur-xs dark:text-zinc-300'>
                That's my wife, Franny. We try to travel as much as possible. Also pictured is our 9 year old Wheaten,
                Harvey. He's definitely got... qualities.
            </div>

            <Lightbox
                slides={images}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                carousel={{ finite: false }}
            />
        </div>
    )
}
