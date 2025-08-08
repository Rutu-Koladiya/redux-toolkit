import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  
  return (
    <header className="fixed w-full bg-white shadow z-50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto text-[#171717]">
        <h1 className="text-xl font-bold text-primary">Boss Lady</h1>
        <ul className="flex gap-6 text-sm font-medium">
        {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm font-medium ${
            pathname === link.href ? 'text-yellow-400 underline' : 'text-gray-600'
          }`}
        >
          {link.label}
        </Link>
      ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
