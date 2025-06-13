'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const images = [
    {
        src: '/life/jk_fq_japan.jpg',
        alt: 'Justin and Franny Mount Fuji',
    },
    {
        src: '/life/harvey_big_sky.jpg',
        alt: 'Harvey Big Sky Montana',
    },
    {
        src: '/life/jk_fq_chile.jpeg',
        alt: 'Chile',
    },
    {
        src: '/life/jk_fq_japan2.jpeg',
        alt: 'Justin and Franny Japan',
    },
    {
        src: '/life/jk_fq_italy.jpeg',
        alt: 'Justin and Franny Italy',
    },
]

export default function PhotoGrid() {
    const [index, setIndex] = useState(-1)

    return (
        <div className='relative z-10'>
            <div className='grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-4'>
                <div className='relative col-span-1 h-[250px] cursor-pointer overflow-hidden rounded-xl sm:h-[300px] md:col-span-2 md:h-[350px]'>
                    <img
                        src={images[0].src}
                        alt={images[0].alt}
                        className='relative h-full w-full object-cover'
                        onClick={() => setIndex(0)}
                    />
                </div>
                <div className='col-span-1 h-[250px] cursor-pointer overflow-hidden rounded-xl sm:h-[300px] md:col-span-2 md:h-[350px]'>
                    <img
                        src={images[1].src}
                        alt={images[1].alt}
                        className='h-full w-full object-cover'
                        onClick={() => setIndex(1)}
                    />
                </div>
                <div className='col-span-1 h-[250px] cursor-pointer overflow-hidden rounded-xl sm:h-[300px] md:col-span-2 md:h-[350px]'>
                    <img
                        src={images[2].src}
                        alt={images[2].alt}
                        className='h-full w-full object-cover'
                        onClick={() => setIndex(2)}
                    />
                </div>
                <div className='col-span-1 h-[250px] cursor-pointer overflow-hidden rounded-xl sm:h-[300px] md:col-span-2 md:h-[350px]'>
                    <img
                        src={images[3].src}
                        alt={images[3].alt}
                        className='h-full w-full object-cover'
                        onClick={() => setIndex(3)}
                    />
                </div>
                <div className='col-span-1 h-[250px] cursor-pointer overflow-hidden rounded-xl sm:h-[300px] md:col-span-4 md:h-[350px]'>
                    <img
                        src={images[4].src}
                        alt={images[4].alt}
                        className='h-full w-full object-cover'
                        onClick={() => setIndex(4)}
                    />
                </div>
            </div>
            <div className='p-6 text-sm text-zinc-700 backdrop-blur-xs dark:text-zinc-300'>
                That's my wife, Franny. We try to travel as much as possible. Getting to know me would be like getting
                to know her considering many of my good qualities have come from her. And then there's our 8 year old
                Wheaten, Harvey. He's definitely got... qualities.
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
