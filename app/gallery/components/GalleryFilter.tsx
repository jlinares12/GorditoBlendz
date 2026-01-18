'use client';
import { useState } from "react"

export default function GalleryFilter() {

    const [allActive, setAllActive] = useState(true);
    const [fadesActive, setFadesActive] = useState(false);
    const [designsActive, setDesignsActive] = useState(false);
    const [tapersActive, setTapersActive] = useState(false);

    const activeButton = "flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 transition-all shadow-md shadow-primary/20"
    const inactiveButton = "flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-background border border-white/5 px-5 hover:bg-surface transition-all group"
    const activeText = "text-white text-sm font-bold leading-normal"
    const inactiveText = "text-foreground text-sm font-medium leading-normal"
    const activeSymbol = "material-symbols-outlined text-white"
    const inactiveSymbol = "material-symbols-outlined text-gold transition-colors"

    return (
        <div className="sticky top-[65px] z-40 py-4 md:mx-0 md:px-0">
            <div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap">
                <button onClick={ () => {
                    setAllActive(true)
                    setFadesActive(false)
                    setDesignsActive(false)
                    setTapersActive(false)}
                } className={allActive ? activeButton : inactiveButton} >
                    <span className={allActive ? activeSymbol : inactiveSymbol}>grid_view</span>
                    <p className={allActive ? activeText : inactiveText}>All Work</p>
                </button>

                <button
                    onClick={ () => {
                    setAllActive(false)
                    setFadesActive(true)
                    setDesignsActive(false)
                    setTapersActive(false)}
                } className={fadesActive ? activeButton : inactiveButton}>
                    <span className={fadesActive ? activeSymbol : inactiveSymbol}>content_cut</span>
                    <p className={fadesActive ? activeText : inactiveText}>Fades</p>
                </button>

                <button
                    onClick={ () => {
                    setAllActive(false)
                    setFadesActive(false)
                    setDesignsActive(true)
                    setTapersActive(false)}
                } className={designsActive ? activeButton : inactiveButton}>
                    <span className={designsActive ? activeSymbol : inactiveSymbol}>brush</span>
                    <p className={designsActive ? activeText : inactiveText}>Designs</p>
                </button>

                <button
                    onClick={ () => {
                    setAllActive(false)
                    setFadesActive(false)
                    setDesignsActive(false)
                    setTapersActive(true)}
                } className={tapersActive ? activeButton : inactiveButton}>
                    <span className={tapersActive ? activeSymbol : inactiveSymbol}>straighten</span>
                    <p className={tapersActive ? activeText : inactiveText}>Tapers</p>
                </button>
            </div>
        </div>
    )
}