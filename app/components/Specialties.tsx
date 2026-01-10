import SpecialtyCard from "./SpecialtyCard"

export default function Specialties() {
    return (
        <section className="py-16" id="services">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">Our Specialties</h2>
                            <p className="mt-4 text-lg text-secondary">
                                More than just a haircut. We provide a grooming experience tailored to your unique style.
                            </p>
                    </div>
                    <a className="hidden items-center gap-1 text-sm font-bold text-primary hover:underline md:flex" href="#">
                            View Full Menu <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <SpecialtyCard
                        icon = "brush"
                        title="Custom Designs"
                        description="Intricate razor work and freestyle designs. From geometric patterns to portraits, we make your vision reality."
                    />
                    <SpecialtyCard
                        icon = "gradient"
                        title="Clean Fades"
                        description="Seamless gradients that blend perfectly. Low, mid, high, or drop fades executed with surgical precision."
                    />
                    <SpecialtyCard
                        icon = "content_cut"
                        title="Sharp Tapers"
                        description="Crisp edges and outlines that define your look. Perfect for maintaining length while keeping it clean."
                    />
                </div>
            </div>
        </section>
    )
}