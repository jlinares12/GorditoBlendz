export default function GalleryFilter() {
    return (
        <div className="sticky top-[65px] z-40 py-4 md:mx-0 md:px-0">
            <div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap">
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 transition-all hover:bg-red-700 shadow-md shadow-red-900/20">
                    <span className="material-symbols-outlined text-white">grid_view</span>
                    <p className="text-white text-sm font-bold leading-normal">All Work</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-background border border-white/5 px-5 hover:bg-surface transition-all group">
                    <span className="material-symbols-outlined text-gold group-hover:text-white transition-colors">content_cut</span>
                    <p className="text-white text-sm font-medium leading-normal">Fades</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-background border border-white/5 px-5 hover:bg-surface transition-all group">
                    <span className="material-symbols-outlined text-gold group-hover:text-white transition-colors">brush</span>
                    <p className="text-white text-sm font-medium leading-normal">Designs</p>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-background border border-white/5 px-5 hover:bg-surface transition-all group">
                    <span className="material-symbols-outlined text-gold group-hover:text-white transition-colors">straighten</span>
                    <p className="text-white text-sm font-medium leading-normal">Tapers</p>
                </button>
            </div>
        </div>
    )
}