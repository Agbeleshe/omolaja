import { Scale } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Scale className="h-8 w-8 text-blue-300 mr-2" />
                <span className="text-xl font-bold">
                  O. Agbeleshebioba & Co.
                </span>
              </div>
              <p className="text-blue-100 mb-4">
                Professional legal services with integrity, expertise, and
                dedication to justice.
              </p>
              <div className="flex space-x-2">
                <Badge variant="secondary">🇳🇬 Nigerian Law Firm</Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="hover:text-white transition-colors"
                  >
                    Book Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal Services</h4>
              <ul className="space-y-2 text-blue-100">
                <li>Immigration & Visa Services</li>
                <li>Property Development</li>
                <li>Human Rights Advocacy</li>
                <li>Corporate Law</li>
                <li>Legal Consultation</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-blue-100">
                <li>📍 Lagos, Nigeria</li>
                <li>📞 +234 (0) 803 454 0129</li>
                <li>✉️ agbelesheomolaja@gmail.com</li>
                <li>🕒 Mon-Fri: 9AM-6PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p className="text-blue-100 text-sm">
              © 2025 O. Agbeleshebioba & Co.. All rights reserved. | Barrister
              Omolaja Agbeleshe - Licensed Legal Practitioner in Nigeria
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
