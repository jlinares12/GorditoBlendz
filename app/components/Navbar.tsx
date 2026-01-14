"use client"

import Link from 'next/link'
import { useState } from 'react'
import MobileSidebar from './MobileSidebar'

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 dark:bg-background/90 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link href="/">
                        <div className="flex items-center gap-2 text-foreground">
                            <div className="flex size-8 items-center justify-center rounded bg-primary text-white">
                                <span className="material-symbols-outlined">content_cut</span>
                            </div>
                            <h2 className="text-lg font-bold leading-tight tracking-tight">Gordito Blendz</h2>
                        </div>
                    </Link>
                    <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
                        <Link className="text-sm font-medium hover:text-primary transition-colors text-secondary" href="/gallery">Gallery</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors text-secondary" href="/about">About</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors text-secondary" href="#contact">Contact</Link>
                    </nav>
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden p-2 text-foreground hover:text-primary cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </header>

            <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </>
    )
}