'use server';
import Image from "next/image";

export default async function Preview() {
    return (
        <section className="py-16" id="portfolio">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">The Work Speaks for Itself</h2>
                    <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
                        Check out our latest cuts. Follow us on Instagram for daily updates.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 auto-rows-[200px]">
                    <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" data-alt="Close up of a design from the back profile" >
                            <Image
                                src="/preview/design.jpg"
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
                            <Image
                                    src="/preview/mullet.jpg"
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
                            <Image
                                    src="/preview/buzz.jpg"
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
                            <Image
                                    src="/preview/design_side.jpg"
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
                            <Image
                                    src="/preview/fade.jpg"
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