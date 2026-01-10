interface Props {
    icon: string;
    title: string;
    description: string;
}

export default function SpecialtyCard({icon, title, description}: Props) {
    return (
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface p-6 transition hover:shadow-lg hover:border-accent/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
            <div>
                <h3 className="text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-secondary">{description}</p>
            </div>
            <div className="mt-6 border-t border-border pt-4">
                <span className="text-sm font-bold text-primary">Looking for volunteers</span>
            </div>
        </div>
    )
}