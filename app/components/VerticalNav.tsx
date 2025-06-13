'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { NavItem } from '../types'
import { BackToTopButton } from './BackToTop'
import { ThemeToggle } from './ThemeToggle'

interface VerticalNavProps {
    navItems: NavItem[]
}

export default function VerticalNav({ navItems }: VerticalNavProps) {
    const [activeSection, setActiveSection] = useState('')
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isAtBottom, setIsAtBottom] = useState(false)

    // Flatten nav items to include children for intersection observer
    const getAllNavItems = (items: NavItem[]): NavItem[] => {
        const allItems: NavItem[] = []
        items.forEach(item => {
            allItems.push(item)
            if (item.children) {
                allItems.push(...getAllNavItems(item.children))
            }
        })
        return allItems
    }

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0,
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, observerOptions)

        const allItems = getAllNavItems(navItems)
        allItems.forEach(item => {
            const element = document.getElementById(item.id)
            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [navItems])

    // Handle scroll direction detection and bottom detection
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            // Check if we're at the bottom of the page
            const isBottom = Math.ceil(currentScrollY + windowHeight) >= documentHeight - 100
            setIsAtBottom(isBottom)

            // Show nav when at the top of the page
            if (currentScrollY <= 0) {
                setIsMobileNavVisible(true)
                setLastScrollY(currentScrollY)
                return
            }

            // Show nav when scrolling up, hide when scrolling down
            if (currentScrollY < lastScrollY) {
                setIsMobileNavVisible(true)
            } else {
                setIsMobileNavVisible(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    const isItemActive = (item: NavItem): boolean => {
        if (activeSection === item.id) return true
        if (item.children) {
            return item.children.some(child => isItemActive(child))
        }
        return false
    }

    const renderNavItem = (item: NavItem, level: number = 0, isMobile: boolean = false) => (
        <div key={item.id} className={level > 0 && !isMobile ? 'ml-2' : ''}>
            <button
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center justify-center rounded-xl transition-all duration-200 ${
                    isMobile ? 'h-12 w-12 hover:scale-105 active:scale-95' : 'h-12 w-12 hover:scale-110'
                } ${
                    activeSection === item.id
                        ? 'bg-lime-400 text-lime-50 dark:bg-zinc-600/80 dark:text-lime-400'
                        : isItemActive(item) && level === 0
                          ? 'bg-lime-400/50 text-lime-700 dark:bg-lime-500/30 dark:text-lime-300'
                          : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700/50 dark:hover:text-zinc-200'
                } ${level > 0 && !isMobile ? 'scale-90' : ''}`}
                aria-label={item.label}
            >
                <FontAwesomeIcon icon={item.icon} className={`${isMobile ? 'h-5 w-5' : 'h-4 w-4'}`} />

                {/* Desktop Tooltip */}
                {!isMobile && (
                    <div className='pointer-events-none absolute left-full z-50 ml-3 rounded-lg bg-zinc-900 px-3 py-2 text-sm whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-zinc-700'>
                        {item.label}
                        <div className='absolute top-1/2 left-0 h-2 w-2 -translate-x-1 -translate-y-1/2 rotate-45 bg-zinc-900 dark:bg-zinc-700'></div>
                    </div>
                )}
            </button>

            {/* Render nested items (only on desktop) */}
            {!isMobile && item.children && (
                <div className={`mt-1 space-y-1 ${level === 0 && isItemActive(item) ? 'block' : 'hidden'}`}>
                    {item.children.map(child => renderNavItem(child, level + 1, false))}
                </div>
            )}
        </div>
    )

    // Filter out children items for mobile (show only top-level items)
    const mobileNavItems = navItems.filter(item => !item.children || item.children.length === 0)
    const topLevelItems = navItems

    return (
        <>
            {/* Desktop Navigation - Vertical Left Side */}
            <nav className='fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 xl:block'>
                <div className='flex flex-col space-y-1 rounded-2xl border border-zinc-200/50 bg-white/80 p-3 shadow-lg backdrop-blur-sm dark:border-zinc-700/50 dark:bg-zinc-800/80'>
                    {topLevelItems.map(item => renderNavItem(item, 0, false))}
                </div>
                <div className='mt-4 flex justify-center'>
                    <ThemeToggle />
                </div>
            </nav>

            {/* Mobile Navigation - Horizontal Bottom */}
            <nav
                className={`fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 transition-transform duration-300 xl:hidden ${
                    isMobileNavVisible ? 'translate-y-0' : 'translate-y-32'
                }`}
            >
                {isAtBottom && (
                    <div className='mr-4 flex items-center'>
                        <BackToTopButton />
                    </div>
                )}
                <div className='flex space-x-2 rounded-2xl border border-zinc-200/50 bg-white/90 p-3 shadow-lg backdrop-blur-sm dark:border-zinc-700/50 dark:bg-zinc-800/90'>
                    {getAllNavItems(topLevelItems).map(item => renderNavItem(item, 0, true))}
                </div>
                <div className='ml-4 flex items-center'>
                    <ThemeToggle />
                </div>
            </nav>
        </>
    )
}
