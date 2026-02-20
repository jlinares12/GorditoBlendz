import GalleryItem from "./GalleryItem"

export default async function GalleryPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <GalleryItem
                src = "/preview/design.jpg"
                alt = "Close up of a clean skin fade haircut from the side"
            />
            <GalleryItem
                src = "/preview/design_side2.jpg"
                alt = "Close up of a clean skin fade haircut from the side"
            />
            <GalleryItem
                src = "/preview/design_side.jpg"
                alt = "Close up of a clean skin fade haircut from the side"
            />
            <GalleryItem
                src = "/preview/fade.jpg"
                alt = "Close up of a clean skin fade haircut from the side"
            />
            <GalleryItem
                src = "https://res.cloudinary.com/dwwvgtx5m/image/upload/v1769117845/qjquxym3eovvz3zmf7cg.jpg"
                alt = "Close up of a clean skin fade haircut from the side"
            />
            <GalleryItem
                src = "/design1.jpg"
                alt = "Close up of a clean skin fade haircut from the side"
            />
        </div>
    )
}