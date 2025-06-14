'use client'

import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

// Helper to generate a random point along a rounded rectangle border
function getRandomBorderPoint(width: number, height: number, radius: number) {
    const straight = 2 * (width + height - 4 * radius)
    const curve = 2 * Math.PI * radius
    const perimeter = straight + curve
    let d = Math.random() * perimeter
    // Top
    if (d < width - 2 * radius) return { x: radius + d, y: 0 }
    d -= width - 2 * radius
    // Top-right curve
    if (d < (Math.PI / 2) * radius)
        return { x: width - radius + Math.sin(d / radius), y: radius - Math.cos(d / radius) }
    d -= (Math.PI / 2) * radius
    // Right
    if (d < height - 2 * radius) return { x: width, y: radius + d }
    d -= height - 2 * radius
    // Bottom-right curve
    if (d < (Math.PI / 2) * radius)
        return { x: width - radius + Math.cos(d / radius), y: height - radius + Math.sin(d / radius) }
    d -= (Math.PI / 2) * radius
    // Bottom
    if (d < width - 2 * radius) return { x: width - radius - d, y: height }
    d -= width - 2 * radius
    // Bottom-left curve
    if (d < (Math.PI / 2) * radius)
        return { x: radius - Math.sin(d / radius), y: height - radius + Math.cos(d / radius) }
    d -= (Math.PI / 2) * radius
    // Left
    if (d < height - 2 * radius) return { x: 0, y: height - radius - d }
    // Top-left curve
    return { x: radius - Math.cos(d / radius), y: radius - Math.sin(d / radius) }
}

// Generate a smooth, jagged arc (lightning) between two points using quadratic Bézier curves
function jaggedArc(x1: number, y1: number, x2: number, y2: number, segments = 12, jag = 10) {
    const points = [[x1, y1]]
    for (let i = 1; i < segments; i++) {
        const t = i / segments
        const x = x1 + (x2 - x1) * t + (Math.random() - 0.5) * jag
        const y = y1 + (y2 - y1) * t + (Math.random() - 0.5) * jag
        points.push([x, y])
    }
    points.push([x2, y2])
    // Build a smooth path using quadratic Bézier curves
    let d = `M${points[0][0]},${points[0][1]}`
    for (let i = 1; i < points.length - 1; i++) {
        const [xPrev, yPrev] = points[i - 1]
        const [xCurr, yCurr] = points[i]
        const [xNext, yNext] = points[i + 1]
        // Control point is the current point, end point is midpoint between current and next
        const cx = xCurr
        const cy = yCurr
        const ex = (xCurr + xNext) / 2
        const ey = (yCurr + yNext) / 2
        d += ` Q${cx},${cy} ${ex},${ey}`
    }
    // Last segment: curve to the last point
    const n = points.length
    d += ` Q${points[n - 2][0]},${points[n - 2][1]} ${points[n - 1][0]},${points[n - 1][1]}`
    return d
}

// Starburst SVG path for dramatic sparks
function starburstPath(cx: number, cy: number, r: number, points = 8) {
    let d = ''
    for (let i = 0; i < points * 2; i++) {
        const angle = (Math.PI * 2 * i) / (points * 2)
        const len = i % 2 === 0 ? r : r * 0.4
        const x = cx + Math.cos(angle) * len
        const y = cy + Math.sin(angle) * len
        d += i === 0 ? `M${x},${y}` : `L${x},${y}`
    }
    d += 'Z'
    return d
}

export default function Accomplishments() {
    const [arcs, setArcs] = useState<{ d: string; key: number; strokeWidth: number }[]>([])
    const [size, setSize] = useState({ width: 400, height: 300 })
    const [showArcs, setShowArcs] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const radius = 28
    const arcCount = 4

    // Measure container size responsively
    useEffect(() => {
        function updateSize() {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                setSize({ width: rect.width, height: rect.height })
            }
        }
        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    useEffect(() => {
        if (!showArcs) {
            setArcs([])
            return
        }
        const interval = setInterval(() => {
            const { width, height } = size
            if (width < 50 || height < 50) return
            const newArcs = []
            for (let i = 0; i < arcCount; i++) {
                const p1 = getRandomBorderPoint(width, height, radius)
                let p2
                do {
                    p2 = getRandomBorderPoint(width, height, radius)
                } while (Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y) > width / 2)
                // Skinnier stroke width between 1.2 and 3.2
                const strokeWidth = 1.2 + Math.random() * 2
                newArcs.push({ d: jaggedArc(p1.x, p1.y, p2.x, p2.y, 8, 16), key: Math.random(), strokeWidth })
            }
            setArcs(newArcs)
        }, 120)
        return () => clearInterval(interval)
    }, [size, showArcs])

    return (
        <div className='accomplishments mx-auto mt-5 w-full max-w-3xl px-4'>
            {/* Toggle Switch */}
            <div className='mb-2 flex items-center justify-end gap-2'>
                <label htmlFor='electric-arcs-toggle' className='text-sm font-medium text-lime-700'>
                    Make it {showArcs ? 'less fun' : 'more fun'}
                </label>
                <input
                    id='electric-arcs-toggle'
                    type='checkbox'
                    checked={showArcs}
                    onChange={e => setShowArcs(e.target.checked)}
                    className='peer sr-only'
                />
                <div
                    className='relative h-6 w-11 cursor-pointer rounded-full bg-lime-200 transition peer-checked:bg-lime-500'
                    onClick={() => setShowArcs(v => !v)}
                >
                    <div
                        className='absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow transition peer-checked:translate-x-5'
                        style={{ transform: showArcs ? 'translateX(20px)' : 'translateX(0)' }}
                    />
                </div>
            </div>
            <div
                ref={containerRef}
                className={`relative mt-6 rounded-xl p-8 shadow-lg transition-colors duration-300 ${showArcs ? 'bg-gradient-to-br from-lime-500 via-lime-600 to-lime-700' : 'bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200/60 ring-1 ring-zinc-900/5 dark:from-zinc-950/30 dark:via-zinc-950/50 dark:to-zinc-950/70 dark:ring-zinc-800/30'}`}
                style={{
                    boxShadow: showArcs ? '0 0 32px 4px #a3ff12, 0 0 0 2px #a3ff1233' : '',
                    minHeight: 220,
                    transition: 'box-shadow 0.3s',
                }}
            >
                {/* <div
                    className={`absolute inset-0 z-10 rounded-xl bg-gradient-to-br from-indigo-200 via-indigo-50 to-indigo-300 ${showArcs ? 'opacity-0' : 'opacity-100'}`}
                ></div> */}

                {/* SVG Electric Border */}
                {showArcs && (
                    <svg
                        width='100%'
                        height='100%'
                        viewBox={`0 0 ${size.width} ${size.height}`}
                        className='pointer-events-none absolute top-0 left-0 z-10'
                    >
                        <defs>
                            <filter id='electric-glow' x='-50%' y='-50%' width='200%' height='200%'>
                                <feDropShadow dx='0' dy='0' stdDeviation='6' floodColor='#d0ff00' floodOpacity='0.85' />
                                <feDropShadow dx='0' dy='0' stdDeviation='12' floodColor='#a3ff12' floodOpacity='0.7' />
                            </filter>
                        </defs>
                        {arcs.map(arc => (
                            <motion.path
                                key={arc.key}
                                d={arc.d}
                                stroke='#d0ff00'
                                strokeWidth={arc.strokeWidth}
                                strokeLinejoin='round'
                                strokeLinecap='round'
                                fill='none'
                                filter='url(#electric-glow)'
                                initial={{ opacity: 0.7 }}
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 0.18, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        ))}
                    </svg>
                )}
                <ul
                    className={`relative z-20 space-y-4 text-base leading-7 ${showArcs ? 'text-lime-50' : 'text-zinc-700 dark:text-zinc-50'}`}
                >
                    <li
                        className={`rounded-lg bg-white/10 p-4 backdrop-blur-md transition-shadow hover:shadow-md ${showArcs ? 'shadow-sm ring-1 ring-white/30' : 'bg-zinc-900/3 dark:bg-zinc-900/80'}`}
                    >
                        <span className='font-semibold'>Led design and front-end development</span> of enterprise
                        product data management platform leading to a{' '}
                        <span className='font-semibold'>productivity savings of 4.7 hours per page</span>
                    </li>
                    <li
                        className={`rounded-lg bg-white/10 p-4 backdrop-blur-md transition-shadow hover:shadow-md ${showArcs ? 'shadow-sm ring-1 ring-white/30' : 'bg-zinc-900/3 dark:bg-zinc-900/80'}`}
                    >
                        ...as well as a <span className='font-semibold'>26% increase in page views</span>
                    </li>
                    <li
                        className={`rounded-lg bg-white/10 p-4 backdrop-blur-md transition-shadow hover:shadow-md ${showArcs ? 'shadow-sm ring-1 ring-white/30' : 'bg-zinc-900/3 dark:bg-zinc-900/80'}`}
                    >
                        <span className='font-semibold'>Modernized search and reporting experience </span> of the global
                        assortment of records leading to a drastically reduced effort to find and report on 60+ million
                        product and 20+ million asset records across 87 global locales
                    </li>
                    <li
                        className={`rounded-lg bg-white/10 p-4 backdrop-blur-md transition-shadow hover:shadow-md ${showArcs ? 'shadow-sm ring-1 ring-white/30' : 'bg-zinc-900/3 dark:bg-zinc-900/80'}`}
                    >
                        <span className='font-semibold'>Greatly improved the developer experience</span> for other devs
                        by championing several iterations of the tech stack when the opportunity presented itself
                    </li>

                    <li
                        className={`rounded-lg bg-white/10 p-4 backdrop-blur-md transition-shadow hover:shadow-md ${showArcs ? 'shadow-sm ring-1 ring-white/30' : 'bg-zinc-900/3 dark:bg-zinc-900/80'}`}
                    >
                        <span className='font-semibold'>Transformed enterprise tool adoption</span> by prioritizing user
                        experience design over traditional "buy not build" solutions, leading to a{' '}
                        <span className='font-semibold'>corporate user base of over 13,000 employees</span>
                    </li>
                    <li
                        className={`rounded-lg bg-white/10 p-4 backdrop-blur-md transition-shadow hover:shadow-md ${showArcs ? 'shadow-sm ring-1 ring-white/30' : 'bg-zinc-900/3 dark:bg-zinc-900/80'}`}
                    >
                        Delivered <span className='font-semibold'>6,568 commits and 1.47 million lines of code </span>
                        over 8 years
                    </li>
                    <li
                        className={`rounded-lg bg-white/10 p-4 backdrop-blur-md transition-shadow hover:shadow-md ${showArcs ? 'shadow-sm ring-1 ring-white/30' : 'bg-zinc-900/3 dark:bg-zinc-900/80'}`}
                    >
                        🏆 Winner of the 2024 3M Global Marketing Excellence Award
                    </li>
                </ul>
            </div>
        </div>
    )
}
