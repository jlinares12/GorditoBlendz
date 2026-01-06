import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar flex justify-between ">
            <div className="navbar-left">
                <a href="/" className="logo">
                    ShopNow
                </a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links flex flex-row gap-2">
                    <li>
                        <a href="/products">Portfolio</a>
                    </li>
                    <li>
                        <Link href=".//about">About</Link>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right ">
                <ul className="nav-links flex flex-row gap-2">
                    <li>
                        <a href="/products">instagram</a>
                    </li>
                    <li>
                        <a href="/about">tiktok</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}