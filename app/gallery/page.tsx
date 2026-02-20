import Title from './components/Title'
import GalleryFilter from './components/GalleryFilter'
import GalleryPage from './components/GalleryPage'
import BookingSection from './components/BookingSection'

interface GalleryProps {
    searchParams: Promise<{ filter?: string }>
}

export default async function Gallery({ searchParams }: GalleryProps) {
    const { filter } = await searchParams
    const activeFilter = filter ?? 'all'

    return (
        <main className="flex flex-col gap-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="layout-content-container flex flex-col flex-1">
                    <Title/>
                    <GalleryFilter activeFilter={activeFilter}/>
                    <GalleryPage filter={activeFilter}/>
                    <div className="flex justify-center pt-8">
                        <button className="flex items-center gap-2 text-foreground border border-foreground/10 px-6 py-3 rounded-lg hover:bg-surface hover:border-primary/30 transition-all font-medium">
                            <span className="material-symbols-outlined text-primary">add</span>
                            Load More Styles
                        </button>
                    </div>
                    <div className="mt-16 mb-8">
                        <BookingSection/>
                    </div>
                </div>
            </div>
        </main>
    )
}