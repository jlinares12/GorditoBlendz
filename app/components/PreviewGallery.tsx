import CldImage from './cloudinary/CldImage'

export default async function PreviewGallery() {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" data-alt="Close up of a design from the back profile" >
                    <CldImage
                        src="ubqujehxiasduattasfb"
                        fill
                        alt="Close up of a design from the back profile"
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-4xl">visibility</span>
                </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" data-alt="Side profile of a taper fade/mullet">
                    <CldImage
                            src="fpbbzstgonax8itx0obq"
                            fill
                            alt="Side profile of a taper fade/mullet"
                            className="object-cover object-center"
                            sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">visibility</span>
                </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" data-alt="Man with a buzz cut and a high fade">
                    <CldImage
                            src="y97i94kjqmtyhg7u6klc"
                            fill
                            alt="Man with a buzz cut and a high fade"
                            className="object-cover object-center"
                            sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">visibility</span>
                </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" data-alt="Side profile of a taper fade with a design">
                    <CldImage
                            src="uersrcx5nhm8zfmsrywz"
                            fill
                            alt="Side profile of a taper fade with a design"
                            className="object-cover object-center"
                            sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">visibility</span>
                </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" data-alt="Back and side profile of a mid fade">
                    <CldImage
                            src="mp1ixq1jb29epctri3d2"
                            fill
                            alt="Back and side profile of a mid fade"
                            className="object-cover object-center"
                            sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">visibility</span>
                </div>
            </div>
        </div>
    )
}