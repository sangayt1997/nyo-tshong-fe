import Link from "next/link";

export default function Header () {
    const navData = [
        {
            navText: 'All',
            redirect: '/',
        },
        {
            navText: 'Electronics',
            redirect: '/',
        },
        {
            navText: 'Jewelery',
            redirect: '/',
        },
        {
            navText: `Men's Clothing`,
            redirect: '/',
        },
        {
            navText: `Women's Clothing`,
            redirect: '/',
        },
    ];

    return (
        <header className="sticky top-0 z-10 bg-white shadow-bottom p-[24px]">
            <div className="flex justify-between items-center">
                <Link href="/" className="uppercase text-primary-500 font-poppins_medium text-[18px]">
                    Nyo Tshong
                </Link>
                <nav className="space-x-[16px]">
                    {navData.map((item, index) => (
                        // TODO: Check why color doesn't change in Link tag
                        <Link key={index} href={item.redirect} className="text-black-[0.87] hover:text-primary-400 uppercase">
                            {item.navText}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
