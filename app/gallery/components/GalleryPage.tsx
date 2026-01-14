'use server';

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
                src = "/preview/mullet.jpg"
                alt = "Close up of a clean skin fade haircut from the side"
            />
            <GalleryItem
                src = "/design1.jpg"
                alt = "Close up of a clean skin fade haircut from the side"
            />
        </div>
    )
}