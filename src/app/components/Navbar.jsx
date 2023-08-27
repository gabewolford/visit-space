import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <ul className="flex flex-row space-x-6">
                <Link href="/">Home</Link>
                <Link href="/destination">Destination</Link>
                <Link href="/crew">Crew</Link>
                <Link href="/technology">Technology</Link>
            </ul>
        </nav>
    )
}