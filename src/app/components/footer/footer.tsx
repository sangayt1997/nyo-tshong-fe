export default function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white shadow-top px-[16px] py-[32px]">
            <div className="text-center">
                <p className="text-gray-600">&copy; {currentYear} Nyo Tshong. All rights reserved.</p>
            </div>
        </footer>
    );
}
