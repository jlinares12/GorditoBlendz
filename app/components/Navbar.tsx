import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 dark:bg-background/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 text-foreground">
                    <div className="flex size-8 items-center justify-center rounded bg-primary text-white">
                        <span className="material-symbols-outlined">content_cut</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight">Gordito Blendz</h2>
                </div>
                <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
                    <a className="text-sm font-medium hover:text-primary transition-colors text-secondary" href="#gallery">Gallery</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors text-secondary" href="#about">About</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors text-secondary" href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}