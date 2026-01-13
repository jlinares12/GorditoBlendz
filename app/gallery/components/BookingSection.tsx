export default function BookingSection() {
    return (
        <div className="bg-surface rounded-2xl overflow-hidden relative border border-foreground/5">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_50%,#DC2626_0%,transparent_60%)]"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-12 md:px-16 md:py-16">
                <div className="flex flex-col gap-3 text-center md:text-left max-w-xl">
                    <h2 className="text-foreground tracking-tight text-3xl font-black leading-tight md:text-4xl">
                        Ready for your transformation?
                    </h2>
                    <p className="text-secondary text-base md:text-lg font-normal leading-relaxed">
                        Book your appointment today and get the signature Gordito Blendz look you deserve. Slots fill up fast.
                    </p>
                </div>
                <div className="flex shrink-0">
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-accent text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-foreground transition-colors shadow-lg shadow-yellow-900/20">
                        <span className="truncate">Book Appointment</span>
                    </button>
                </div>
            </div>
        </div>
    )
}