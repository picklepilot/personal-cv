'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const headers = [
    { id: 1, text: 'Front-end design engineer' },
    { id: 2, text: 'Full stack developer' },
    { id: 3, text: 'Creative problem solver' },
    { id: 4, text: 'Bridge-gapper' },
    { id: 5, text: 'Lifelong learner' },
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
        <div className='absolute top-[400px] z-55 h-[80px] w-full transition-all duration-700 sm:top-[500px] sm:left-10'>
            <AnimatePresence>
                <motion.h1
                    className='mt-7 block text-center text-xl font-medium tracking-tight text-zinc-50/80 sm:mt-9 sm:text-center sm:text-3xl md:whitespace-nowrap lg:text-left dark:text-zinc-50/80'
                    key={headers[index].id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ ease: 'easeInOut' }}
                    style={{ position: 'absolute', width: '100%', zIndex: 100 }}
                >
                    {headers[index].text}
                </motion.h1>
            </AnimatePresence>
        </div>
    )
}
