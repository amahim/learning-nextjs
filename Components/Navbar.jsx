import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar font-macondo mb-4">
            <ul className="nav-links flex space-x-4 border-b-2 ">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/service">Service</Link></li>
                <li><Link href="/admin">Admin</Link></li>
                <li><Link href="/clientcomponent">ClientComponent</Link></li>
                <li><Link href="/servercomponent">ServerComponent</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;