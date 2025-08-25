import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-sm leading-relaxed">
            We are a trusted real estate company helping people find their dream
            homes, luxury villas, commercial spaces, and new projects with ease
            and transparency.
          </p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/properties" className="hover:text-white transition">
              Properties
            </Link>
            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@realestate.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 pt-10 border-t border-zinc-800 mt-10">
        © 2025 Real Estate. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
