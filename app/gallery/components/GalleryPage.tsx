import cloudinary from '@/lib/cloudinary'
import GalleryItem from "./GalleryItem"

interface GalleryPageProps {
    filter: string
}

interface CloudinaryResource {
    public_id: string
    tags: string[]
}

async function fetchImages(filter: string): Promise<CloudinaryResource[]> {
    try {
        const expression =
            filter === 'all'
            ? 'folder:gorditoBlendz'
            : `folder:gorditoBlendz AND tags=${filter}`

        const result = await cloudinary.search
            .expression(expression)
            .sort_by('created_at', 'desc')
            .max_results(30)
            .execute()

        return result.resources as CloudinaryResource[]
    } catch (error) {
        console.error('Cloudinary search error:', error)
    }
    return []
}

export default async function GalleryPage({ filter }: GalleryPageProps) {
    const images = await fetchImages(filter)

    if (images.length === 0) {
        return (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
            <span className="material-symbols-outlined text-5xl text-secondary">
            photo_library
            </span>
            <p className="text-secondary text-lg font-medium">
            No images found{filter !== 'all' ? ` for "${filter}"` : ''}.
            </p>
        </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
                <GalleryItem
                key={image.public_id}
                src={image.public_id}
                alt={`${filter !== 'all' ? filter : 'haircut'} photo`}
                />
            ))}
        </div>
    )
}