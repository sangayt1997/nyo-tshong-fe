import Link from "next/link";

export default function Header () {
    return (
        <header className="bg-blue-500 p-4">
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
