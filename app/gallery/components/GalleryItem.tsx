import Image from 'next/image'

interface Props {
    src: string;
    alt: string;
}

export default function GalleryItem({src, alt}: Props) {
    return (
        <div className="group relative overflow-hidden rounded-xl aspect-[3/4] ">
            <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" data-alt={alt}>
                <Image
                        src={src}
                        fill
                        alt={alt}
                        className="object-cover object-center"
                        sizes="100vw"
                />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">visibility</span>
            </div>
        </div>
    )
}