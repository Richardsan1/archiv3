import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4">
            <h1 className="text-4xl font-semibold text-green-500">
                A<span className="text-black">rchiv</span>3
            </h1>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/library">Biblioteca</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
