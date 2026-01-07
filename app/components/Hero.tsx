import Image from 'next/image'
import "../globals.css";

export default function Hero() {
  return (
        <section className="relative flex flex-col justify-center overflow-hidden py-12 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent w-fit">
                            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                            Accepting New Clients
                        </div>
                        <h1 className="text-4xl font-black leading-[1.1] tracking-tighter text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                            Precision Cuts.<br/>
                            <span className="text-primary ">Masterful</span> Style.
                        </h1>
                        <p className="max-w-md text-lg text-slate-600 dark:text-slate-400">
                            Gordito Blendz specializes in the sharpest looks in Whittier. From artistic designs to fresh fades, we will get you right
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button className="h-12 rounded-lg bg-primary px-8 text-base font-bold text-white transition hover:bg-primary/90">
                                View Portfolio
                            </button>
                            <button className="flex h-12 items-center justify-center rounded-lg border border-slate-400 px-8 text-base font-bold text-white transition hover:bg-zinc-900">
                                Book Appointment
                            </button>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2 h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-white/20">
                        <div className="absolute inset-0 bg-cover bg-center" data-alt="Barber precisely cutting hair with clippers" >
                            <Image
                                src="/hero.png"
                                width={500}
                                height={500}
                                alt='Logo of company'
                                className='h-full w-full'
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
  )
}