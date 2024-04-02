'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const headers = [
    { id: 1, text: 'Creative problem solver' },
    { id: 2, text: 'Design engineer' },
    { id: 3, text: 'Full stack developer' },
    { id: 4, text: 'UI/UX enthusiast' },
    { id: 5, text: 'Bridge gapper' },
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
        <div className="relative h-[110px] md:h-[100px] lg:h-[120px]">
            <AnimatePresence>
                <motion.h1
                    className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:whitespace-nowrap"
                    key={headers[index].id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ ease: 'easeInOut' }}
                    style={{ position: 'absolute' }}
                >
                    {headers[index].text}
                </motion.h1>
            </AnimatePresence>
        </div>
    )
}
