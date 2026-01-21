'use client';
import { useState } from "react"

type FilterType = 'all' | 'fades' | 'designs' | 'tapers';

interface FilterOption {
  id: FilterType;
  label: string;
  icon: string;
}

export default function GalleryFilter() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Configuration for filter options
  const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Work', icon: 'grid_view' },
    { id: 'fades', label: 'Fades', icon: 'content_cut' },
    { id: 'designs', label: 'Designs', icon: 'brush' },
    { id: 'tapers', label: 'Tapers', icon: 'straighten' },
  ];

  const activeButton = "flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 transition-all shadow-md shadow-primary/20";
  const inactiveButton = "flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-background px-5 hover:bg-surface transition-all group";
  const activeText = "text-white text-sm font-bold leading-normal";
  const inactiveText = "text-foreground text-sm font-medium leading-normal";
  const activeSymbol = "material-symbols-outlined text-white";
  const inactiveSymbol = "material-symbols-outlined text-gold transition-colors";

  // If you need side effects when filter changes, add useEffect here:
  // useEffect(() => {
  //   // Filter the gallery items based on activeFilter
  //   console.log('Filter changed to:', activeFilter);
  //   // Your filtering logic here
  // }, [activeFilter]);

  return (
    <div className="sticky top-[65px] z-40 py-4 md:mx-0 md:px-0">
      <div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap">
        {filterOptions.map((option) => {
          const isActive = activeFilter === option.id;

          return (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={isActive ? activeButton : inactiveButton}
            >
              <span className={isActive ? activeSymbol : inactiveSymbol}>
                {option.icon}
              </span>
              <p className={isActive ? activeText : inactiveText}>
                {option.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}