import Link from 'next/link'
import { useEffect } from 'react'

interface MobileSidebarProps {
    isOpen: boolean
    onClose: () => void
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    },[isOpen])

    if(!isOpen) return null;
    return (
        <div className="md:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Sidebar Panel */}
            <div className="fixed inset-y-0 right-0 w-64 bg-background border-l border-border shadow-xl">
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-6 border-b border-border">
                        <Link href="/" onClick={onClose}>
                            <div className="flex items-center gap-2 text-foreground">
                                <div className="flex size-8 items-center justify-center rounded bg-primary text-white">
                                    <span className="material-symbols-outlined">content_cut</span>
                                </div>
                                <h2 className="text-m font-bold">Gordito Blendz</h2>
                            </div>
                        </Link>
                    </div>

                    {/* Sidebar Navigation */}
                    <nav className="flex flex-col flex-1 p-6">
                        <Link 
                            className="py-3 text-m font-medium hover:text-primary transition-colors text-secondary"
                            href="/gallery"
                            onClick={onClose}
                        >
                            Gallery
                        </Link>
                        <Link 
                            className="py-3 text-m font-medium hover:text-primary transition-colors text-secondary"
                            href="/about"
                            onClick={onClose}
                        >
                            About
                        </Link>
                        <Link 
                            className="py-3 text-m font-medium hover:text-primary transition-colors text-secondary"
                            href="#contact"
                            onClick={onClose}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-6 border-t border-border">
                        <p className="text-sm text-secondary">
                            © {new Date().getFullYear()} Gordito Blendz
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}