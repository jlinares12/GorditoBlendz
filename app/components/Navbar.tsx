import Link from 'next/link'

export default function Navbar() {
    return (
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
                <button className="md:hidden p-2 text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    )
}