'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

interface ContinuousTimelineProps {
    children: React.ReactNode
}

export default function ContinuousTimeline({ children }: ContinuousTimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    })

    const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <div ref={containerRef} className='relative px-4 sm:px-0'>
            {/* Continuous Timeline Line */}
            <div className='absolute left-15 z-9 -ml-px h-[calc(100%+2rem)] w-[2px] bg-zinc-400 sm:left-12 md:left-17 lg:left-25'>
                <motion.div
                    className='w-full bg-lime-500'
                    style={{
                        height: fillHeight,
                        boxShadow: '0 0 12px rgba(132, 204, 22, 0.8), 0 0 20px rgba(132, 204, 22, 0.4)',
                    }}
                    animate={{
                        boxShadow: [
                            '0 0 12px rgba(132, 204, 22, 0.8), 0 0 20px rgba(132, 204, 22, 0.4)',
                            '0 0 20px rgba(132, 204, 22, 0.9), 0 0 30px rgba(132, 204, 22, 0.6)',
                            '0 0 25px rgba(132, 204, 22, 1), 0 0 35px rgba(132, 204, 22, 0.8)',
                            '0 0 20px rgba(132, 204, 22, 0.9), 0 0 30px rgba(132, 204, 22, 0.6)',
                            '0 0 12px rgba(132, 204, 22, 0.8), 0 0 20px rgba(132, 204, 22, 0.4)',
                        ],
                    }}
                    transition={{
                        duration: 3,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                />
            </div>
            <div className='relative'>{children}</div>
        </div>
    )
}
