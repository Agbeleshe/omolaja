"use client";
import { Menu, Scale, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "font-semibold text-blue-900"
      : "font-medium text-blue-900";

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white shadow-lg top-0 z-50 backdrop-blur-md bg-white/95 fixed right-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center group">
              <Scale className="h-8 w-8 text-blue-600 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold text-blue-900">
                O. Agbeleshebioba & CO.
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`${isActive(
                  "/"
                )} hover:text-blue-600 transition-colors`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${isActive(
                  "/about"
                )} hover:text-blue-600 transition-colors`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`${isActive(
                  "/services"
                )} hover:text-blue-600 transition-colors`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`${isActive(
                  "/contact"
                )} hover:text-blue-600 transition-colors`}
              >
                Contact
              </Link>
              <Link
                href="/booking"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-900 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t animate-in slide-in-from-top-2 duration-200 absolute right-0 left-0 top-16">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/booking", label: "Book Consultation" },
                  { href: "/contact", label: "Contact" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={handleMobileLinkClick}
                    className={`block px-3 py-2 ${isActive(
                      href
                    )} hover:text-blue-600 transition-colors`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
