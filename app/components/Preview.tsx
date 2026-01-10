import GalleryPreview from "./GalleryPreview"

export default function Preview() {
    return (
        <section className="py-16" id="portfolio">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">The Work Speaks for Itself</h2>
                    <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
                        Check out our latest cuts. Follow us on Instagram for daily updates.
                    </p>
                </div>
                <GalleryPreview/>
                <div className="mt-8 flex justify-center">
                    <button className="flex items-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-bold text-foreground transition hover:bg-surface">
                        <span className="material-symbols-outlined">grid_view</span>
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    )
}