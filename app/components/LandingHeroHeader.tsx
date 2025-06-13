'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const headers = [
    { id: 1, text: 'Design engineer' },
    { id: 2, text: 'Full stack developer' },
    { id: 3, text: 'Creative solver' },
    // { id: 5, text: 'Bridge-gapper' },
]

export default function LandingHeroHeader() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % headers.length)
        }, 2000)

        return () => clearInterval(interval)
    })

    return (
        <div className='relative h-[80px] md:h-[100px] lg:h-full'>
            <AnimatePresence>
                <motion.h1
                    className='block text-center text-3xl font-bold tracking-tight sm:mt-9 sm:text-3xl sm:text-lime-50 md:whitespace-nowrap dark:text-lime-200'
                    key={headers[index].id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ ease: 'easeInOut' }}
                    style={{ position: 'absolute', width: '100%', textAlign: 'center' }}
                >
                    {headers[index].text}
                </motion.h1>
            </AnimatePresence>
        </div>
    )
}
