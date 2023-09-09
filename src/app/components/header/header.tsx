import Link from "next/link";

export default function Header () {
    return (
        // TODO: Why color getting conflict with daisyUI theme
        <header className="!bg-primary-500 p-[16px]">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                <Link href="/">
                    Your Logo
                </Link>
                </div>
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
