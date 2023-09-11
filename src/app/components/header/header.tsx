import Link from "next/link";

export default function Header () {
    return (
        <header className="shadow-bottom p-[24px]">
            <div className="flex justify-between items-center">
                <Link href="/">
                    Your Logo
                </Link>
                <nav className="space-x-4">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
