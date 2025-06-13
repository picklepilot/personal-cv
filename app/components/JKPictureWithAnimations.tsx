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
    const constraintsRef = useRef(null)

    const [snapPoint, setSnapPoint] = useState({ x: -61, y: 51 }) // Default values
    const [startingPosition, setStartingPosition] = useState({ x: -61 + 200, y: 51 - 200 }) // Default values

    // Update snap point and starting position based on window size
    useEffect(() => {
        const updatePositions = () => {
            const width = window.innerWidth
            const newSnapPoint = {
                x: width < 640 ? 132 : width < 768 ? 195 : width < 1024 ? -61 : -61,
                y: width < 640 ? 210 : width < 768 ? 121 : width < 1024 ? 51 : 45,
            }
            setSnapPoint(newSnapPoint)
            setStartingPosition({
                x: newSnapPoint.x + 200,
                y: newSnapPoint.y - 200,
            })
        }

        // Initial update
        updatePositions()

        // Add resize listener
        window.addEventListener('resize', updatePositions)

        // Cleanup
        return () => window.removeEventListener('resize', updatePositions)
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

    // Handle drag start - check if moving away from face
    const handleDragStart = () => {
        setIsDragging(true)
        if (sunglassesOnFace) {
            // If sunglasses were on face and now being dragged, switch to dark mode
            setTheme('dark')
            setSunglassesOnFace(false)
        }
    }

    // Handle drag end to check for snapping
    const handleDragEnd = () => {
        setIsDragging(false)
        const currentX = sunglassesX.get()
        const currentY = sunglassesY.get()
        const currentPosition = { x: currentX, y: currentY }

        console.log('currentPosition', currentPosition)

        const distance = calculateDistance(currentPosition, snapPoint)

        console.log('distance', distance)

        if (distance <= snapRadius) {
            // Snap to the point
            sunglassesControls.start({
                x: snapPoint.x,
                y: snapPoint.y,
                transition: {
                    type: 'spring',
                    stiffness: 600,
                    damping: 25,
                },
            })
            // Update motion values to match
            sunglassesX.set(snapPoint.x)
            sunglassesY.set(snapPoint.y)

            // Sunglasses are now on face - switch to light mode
            setSunglassesOnFace(true)
            setTheme('light')
        } else {
            // Sunglasses are not on face - ensure dark mode
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

        // Skip if this is the initial theme setup
        if (theme === 'light' && !sunglassesOnFace && !isDragging) {
            // Theme changed to light externally, move sunglasses to face
            setSunglassesOnFace(true)
            sunglassesControls.start({
                x: snapPoint.x,
                y: snapPoint.y,
                transition: { type: 'spring', stiffness: 600, damping: 25 },
            })
            sunglassesX.set(snapPoint.x)
            sunglassesY.set(snapPoint.y)
        } else if (theme === 'dark' && sunglassesOnFace && !isDragging) {
            // Theme changed to dark externally, move sunglasses away
            setSunglassesOnFace(false)
            const awayPosition = startingPosition
            sunglassesControls.start({
                x: awayPosition.x,
                y: awayPosition.y,
                transition: { type: 'spring', stiffness: 600, damping: 25 },
            })
            sunglassesX.set(awayPosition.x)
            sunglassesY.set(awayPosition.y)
        }
    }, [
        theme,
        isHydrated,
        sunglassesOnFace,
        sunglassesControls,
        sunglassesX,
        sunglassesY,
        snapPoint,
        startingPosition,
        isDragging,
    ])

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
            ref={constraintsRef}
            className='absolute inset-0 overflow-hidden rounded-4xl bg-[#FFFFFF] dark:border-zinc-600 dark:bg-zinc-900'
        >
            <img
                className='absolute -bottom-14 left-0 z-20 mx-auto w-full object-cover transition-all duration-700 ease-out hover:scale-105 sm:w-[435px]'
                src='./JK-removebg.png'
                alt=''
            />

            {/* Creative Motion Mask Reveal Background */}
            <motion.div
                className='pointer-events-none absolute inset-0 z-5'
                style={{
                    backgroundColor: isDarkMode
                        ? 'rgba(30, 41, 59, 0.8)' // Dark slate color
                        : 'rgba(255, 215, 0, 0.7)', // Bright poppy yellow
                }}
                animate={maskRevealControls}
                initial={{
                    clipPath: 'circle(0% at 50% 40%)', // Start from sunglasses area
                }}
            />

            {/* Secondary mask layer for more complex reveal */}
            <motion.div
                className='pointer-events-none absolute inset-0 z-6'
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
            />

            {/* Animated Sunglasses - Always visible for dragging */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                dragMomentum={false}
                whileDrag={{ scale: 1.1, zIndex: 30 }}
                whileHover={{ scale: sunglassesOnFace ? 1.05 : 0.6 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                className='absolute top-[35%] z-25 cursor-grab active:cursor-grabbing md:top-[45%] md:left-[28%]'
                style={{
                    x: sunglassesX,
                    y: sunglassesY,
                }}
                animate={{
                    opacity: 1, // Always visible for interaction
                    scale: sunglassesOnFace ? 1 : 0.54, // Small when not on face, normal when on face
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
                    className='pointer-events-none aspect-auto h-auto w-[120px] drop-shadow-lg md:w-[129px]'
                />

                {/* Hover tooltip for when sunglasses are not on face */}
                {!sunglassesOnFace && !isDragging && (
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
