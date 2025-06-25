'use client'

import { motion, useAnimation, useMotionValue } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from './ThemeProvider'

export default function LandingHero() {
    const { theme, setTheme } = useTheme()
    const isDarkMode = theme === 'dark'

    // Start with consistent state for SSR/client hydration
    const [sunglassesOnFace, setSunglassesOnFace] = useState(false) // Always start with sunglasses off
    const [isHydrated, setIsHydrated] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const [offset, setOffset] = useState(80)
    const constraintsRef = useRef(null)

    const [snapPoint, setSnapPoint] = useState({ x: 94, y: 24 }) // Default values
    const [startingPosition, setStartingPosition] = useState({ x: 94, y: 24 }) // Default values
    const containerRef = useRef<HTMLDivElement>(null)

    // Update snap point and starting position based on container size
    useEffect(() => {
        const updatePositions = () => {
            if (!containerRef.current) return

            const containerWidth = containerRef.current.offsetWidth
            console.log('Container width:', containerWidth) // Debug log
            setOffset(containerWidth < 640 ? 30 : 80)

            // Breakpoint configuration for snap points (relative to the parent container's width)
            const breakpoints = [
                { maxWidth: 327, x: 134, y: -10 }, // iPhone SE
                { maxWidth: 342, x: 142, y: -2 }, // iPhone 12 Pro
                { maxWidth: 366, x: 151, y: 8 }, // iPhone SE
                { maxWidth: 382, x: 157, y: 13 }, // iPhone 12 Pro
                { maxWidth: 414, x: 151, y: -13 }, // iPhone XR
                { maxWidth: 430, x: 155, y: 10 }, // iPhone 14 Pro Max
                { maxWidth: 640, x: 155, y: -10 }, // Small tablets
                { maxWidth: 720, x: 96, y: 2 }, // Tablets
                { maxWidth: 768, x: 96, y: 26 }, // Tablets
                // { maxWidth: 1024, x: 94, y: 24 }, // Small desktops
                // { maxWidth: Infinity, x: 94, y: 24 }, // Large desktops
            ]

            // Find the appropriate breakpoint
            const breakpoint =
                breakpoints.find(bp => containerWidth <= bp.maxWidth) || breakpoints[breakpoints.length - 1]

            const newSnapPoint = {
                x: breakpoint.x,
                y: breakpoint.y,
            }

            setSnapPoint(newSnapPoint)
            setStartingPosition({
                x: newSnapPoint.x,
                y: newSnapPoint.y - offset,
            })
        }

        // Initial update
        updatePositions()

        // Add resize observer for container
        const resizeObserver = new ResizeObserver(updatePositions)
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current)
        }

        // Cleanup
        return () => {
            resizeObserver.disconnect()
        }
    }, [])

    // Define snap point (where sunglasses should naturally sit on the face)
    const snapRadius = 60

    // Motion values for sunglasses position
    const sunglassesX = useMotionValue(startingPosition.x)
    const sunglassesY = useMotionValue(startingPosition.y)
    const sunglassesControls = useAnimation()

    // Animation controls for mask reveal
    const maskRevealControls = useAnimation()
    const secondaryMaskControls = useAnimation()

    // Function to calculate distance between two points
    const calculateDistance = (point1: { x: number; y: number }, point2: { x: number; y: number }) => {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2))
    }

    // The two allowed Y positions for the sunglasses
    const onFaceY = snapPoint.y
    const offFaceY = snapPoint.y - offset

    // Update sunglassesX to always be at snapPoint.x
    useEffect(() => {
        sunglassesX.set(snapPoint.x)
    }, [snapPoint.x, sunglassesX])

    // Handle drag start
    const handleDragStart = () => {
        setIsDragging(true)
    }

    // Handle drag end for lightswitch pattern
    const handleDragEnd = () => {
        setIsDragging(false)
        const currentY = sunglassesY.get()
        // Find which position is closer
        const distToOn = Math.abs(currentY - onFaceY)
        const distToOff = Math.abs(currentY - offFaceY)
        if (distToOn < distToOff) {
            // Snap to on-face
            sunglassesControls.start({
                x: snapPoint.x,
                y: onFaceY,
                transition: { type: 'spring', stiffness: 600, damping: 25 },
            })
            sunglassesY.set(onFaceY)
            setSunglassesOnFace(true)
            setTheme('light')
        } else {
            // Snap to off-face
            sunglassesControls.start({
                x: snapPoint.x,
                y: offFaceY,
                transition: { type: 'spring', stiffness: 600, damping: 25 },
            })
            sunglassesY.set(offFaceY)
            setSunglassesOnFace(false)
            setTheme('dark')
        }
    }

    // Trigger mask reveal animation when theme changes
    useEffect(() => {
        const triggerMaskReveal = async () => {
            // Start from small circle and expand with new theme
            maskRevealControls.set({ clipPath: 'circle(0% at 50% 40%)' })

            // Then expand with new theme
            await maskRevealControls.start({
                clipPath: 'circle(150% at 50% 40%)',
                transition: { duration: 0.6, ease: 'easeInOut' },
            })

            // Animate secondary layer
            secondaryMaskControls.start({
                scale: isDarkMode ? 1.2 : 1.5,
                opacity: isDarkMode ? 0.8 : 0.6,
                transition: { duration: 0.8, ease: 'easeOut' },
            })
        }

        if (isHydrated) {
            triggerMaskReveal()
        }
    }, [theme, maskRevealControls, secondaryMaskControls, isHydrated])

    // Sync sunglasses position when theme changes externally (e.g., from ThemeToggle)
    useEffect(() => {
        if (!isHydrated) return

        if (theme === 'light' && !sunglassesOnFace && !isDragging) {
            // Theme changed to light externally, move sunglasses to face
            setSunglassesOnFace(true)
            sunglassesControls.start({
                x: snapPoint.x,
                y: onFaceY,
                transition: { type: 'spring', stiffness: 600, damping: 25 },
            })
            sunglassesY.set(onFaceY)
        } else if (theme === 'dark' && sunglassesOnFace && !isDragging) {
            // Theme changed to dark externally, move sunglasses off face
            setSunglassesOnFace(false)
            sunglassesControls.start({
                x: snapPoint.x,
                y: offFaceY,
                transition: { type: 'spring', stiffness: 600, damping: 25 },
            })
            sunglassesY.set(offFaceY)
        }
    }, [theme, isHydrated, sunglassesOnFace, sunglassesControls, sunglassesY, snapPoint, onFaceY, offFaceY, isDragging])

    // Initial theme setup - only runs once after hydration
    useEffect(() => {
        if (!isHydrated) return

        const initializeTheme = () => {
            // Check localStorage first
            const stored = localStorage.getItem('theme')
            if (stored === 'light') {
                setTheme('light')
                setSunglassesOnFace(true)
                sunglassesX.set(snapPoint.x)
                sunglassesY.set(snapPoint.y)
                setStartingPosition(snapPoint)
            } else if (stored === 'dark') {
                setTheme('dark')
                setSunglassesOnFace(false)
                const awayPosition = { x: snapPoint.x + 200, y: snapPoint.y - 200 }
                setStartingPosition(awayPosition)
                sunglassesX.set(awayPosition.x)
                sunglassesY.set(awayPosition.y)
            } else {
                // Check system preference
                const isDark =
                    document.documentElement.classList.contains('dark') ||
                    document.body.classList.contains('dark') ||
                    document.documentElement.getAttribute('data-theme') === 'dark' ||
                    window.matchMedia('(prefers-color-scheme: dark)').matches

                if (isDark) {
                    setTheme('dark')
                    setSunglassesOnFace(false)
                    const awayPosition = { x: snapPoint.x + 200, y: snapPoint.y - 200 }
                    setStartingPosition(awayPosition)
                    sunglassesX.set(awayPosition.x)
                    sunglassesY.set(awayPosition.y)
                } else {
                    setTheme('light')
                    setSunglassesOnFace(true)
                    sunglassesX.set(snapPoint.x)
                    sunglassesY.set(snapPoint.y)
                    setStartingPosition(snapPoint)
                }
            }
        }

        initializeTheme()
    }, [isHydrated, snapPoint])

    // Set hydration state
    useEffect(() => {
        setIsHydrated(true)
    }, [])

    return (
        <div
            ref={containerRef}
            className='absolute inset-0 overflow-hidden rounded-4xl bg-[#FFFFFF] dark:border-zinc-600 dark:bg-zinc-900'
        >
            <img
                className='absolute top-0 left-0 z-1 mx-auto w-full object-cover transition-all duration-700 ease-out hover:scale-105 sm:-top-10'
                src='./JK-real.webp'
                alt=''
            />

            {/* Lime green glow behind JK-cutout (animated) */}
            <motion.div
                className='pointer-events-none absolute top-0 left-0 z-30 mx-auto h-full w-full'
                style={{
                    filter: 'blur(32px)',
                    background:
                        'radial-gradient(circle at 50% 40%, rgba(132, 255, 110, 0.55) 0%, rgba(0,255,0,0.18) 60%, transparent 80%)',
                }}
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                }}
            />

            <img
                className='absolute top-0 left-0 z-31 mx-auto w-full object-cover drop-shadow-2xl transition-all duration-700 ease-out sm:-top-10'
                src='./JK-cutout.webp'
                alt=''
            />

            {/* Creative Motion Mask Reveal Background */}
            {/* <motion.div
                className='pointer-events-none absolute inset-0 z-5 opacity-50'
                style={{
                    backgroundColor: isDarkMode
                        ? 'rgba(30, 41, 59, 0.8)' // Dark slate color
                        : 'rgba(255, 215, 0, 0.7)', // Bright poppy yellow
                }}
                animate={maskRevealControls}
                initial={{
                    clipPath: 'circle(0% at 50% 40%)', // Start from sunglasses area
                }}
            /> */}

            {/* Secondary mask layer for more complex reveal */}
            {/* <motion.div
                className='pointer-events-none absolute inset-0 z-6 opacity-50'
                style={{
                    background: isDarkMode
                        ? 'radial-gradient(circle at 50% 40%, rgba(71, 85, 105, 0.6) 0%, transparent 70%)'
                        : 'radial-gradient(circle at 50% 40%, rgba(255, 193, 7, 0.8) 0%, rgba(255, 215, 0, 0.4) 40%, transparent 70%)',
                }}
                animate={secondaryMaskControls}
                initial={{
                    scale: 1,
                    opacity: 0.5,
                }}
            /> */}

            {/* Animated Sunglasses - Always visible for dragging */}
            <motion.div
                drag='y'
                dragConstraints={{ top: offFaceY, bottom: onFaceY }}
                dragElastic={0.1}
                dragMomentum={false}
                whileDrag={{ scale: 1.1, zIndex: 56 }}
                whileHover={{ scale: sunglassesOnFace ? 1.05 : 1.05 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                className='absolute top-[35%] z-51 cursor-grab active:cursor-grabbing md:top-[45%] md:left-[28%]'
                style={{
                    x: snapPoint.x,
                    y: sunglassesY,
                }}
                animate={{
                    opacity: sunglassesOnFace ? 0.95 : 0.5, // Always visible for interaction
                    scale: sunglassesOnFace ? 1 : 1, // Small when not on face, normal when on face
                }}
                transition={{
                    duration: 0.3, // Faster scaling (was 0.8)
                    ease: [0.4, 0, 0.2, 1],
                }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <img
                    src='./sunglasses.png'
                    alt='Sunglasses'
                    className='pointer-events-none aspect-auto h-auto w-[70px] -rotate-2 drop-shadow-lg @[366px]:w-[75px] @[375px]:w-[75px] @[382px]:w-[80px] @[390px]:w-[70px] @[414px]:w-[75px] @[430px]:w-[80px] @[640px]:w-[85px] @[720px]:w-[150px] @[768px]:w-[170px] @[1024px]:w-[174px]'
                />

                {/* Hover tooltip for when sunglasses are not on face */}
                {false && !sunglassesOnFace && !isDragging && (
                    <motion.div
                        className='pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 transform rounded-lg bg-black/80 px-3 py-2 text-sm whitespace-nowrap text-white'
                        animate={{
                            opacity: isHovering ? 1 : 0,
                            y: isHovering ? 0 : -10,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: 'easeInOut',
                        }}
                    >
                        Drag me, uh... somewhere
                        {/* Tooltip arrow */}
                        <div className='absolute top-full left-1/2 -translate-x-1/2 transform border-4 border-transparent border-t-black/80'></div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}
