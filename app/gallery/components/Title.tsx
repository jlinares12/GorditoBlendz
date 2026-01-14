export default function Title() {
    return (
        <div className="flex flex-wrap items-end justify-between gap-6 mt-8 mb-4">
            <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">The Cut Gallery</h1>
                <p className="text-secondary text-base font-normal leading-normal max-w-2xl">From precision fades to intricate designs, explore the Gordito Blendz signature style. Browse our work and find inspiration for your next cut.</p>
            </div>
            <div className="hidden md:block">
                <button className="flex items-center gap-2 text-accent font-bold hover:text-foreground transition-colors">
                    <span>Follow on Instagram</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                </button>
            </div>
        </div>
    )
}