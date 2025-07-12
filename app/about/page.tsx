"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scale,
  Award,
  Users,
  Globe,
  Building,
  Heart,
  CheckCircle,
  Calendar,
  Menu,
  X,
  MapPin,
  GraduationCap,
  Briefcase,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const achievements = [
    {
      icon: Award,
      title: "20+ Years Experience",
      description:
        "Extensive experience in Nigerian legal system and international law",
    },
    {
      icon: Users,
      title: "500+ Clients Served",
      description:
        "Successfully represented individuals, families, and businesses",
    },
    {
      icon: Globe,
      title: "International Expertise",
      description:
        "Specialized knowledge in immigration and international legal matters",
    },
    {
      icon: Heart,
      title: "Human Rights Advocate",
      description: "Dedicated to social justice and human rights protection",
    },
  ];

  const qualifications = [
    "Barrister and Solicitor of the Supreme Court of Nigeria",
    "Minister of Justice in the Temple of Humanity",
    "Certified Immigration Law Specialist",
    "Property Development Legal Consultant",
    "Human Rights Advocacy Certification",
    "Corporate Law Practice License",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center group">
              <Scale className="h-8 w-8 text-blue-600 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold text-blue-900">
                O. Agbeleshebioba & Co.
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-blue-900 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold">
                About
              </Link>
              <Link
                href="/services"
                className="text-blue-900 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/booking"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Book Consultation
              </Link>
              <Link
                href="/contact"
                className="text-blue-900 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
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
            <div className="md:hidden bg-white border-t animate-in slide-in-from-top-2 duration-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-blue-900 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-blue-600 font-semibold"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="block px-3 py-2 text-blue-900 hover:text-blue-600 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/booking"
                  className="block px-3 py-2 text-blue-900 hover:text-blue-600 transition-colors"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-blue-900 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-in fade-in-50 slide-in-from-bottom-10 duration-1000">
            <Badge className="bg-green-600 text-white mb-4 animate-pulse">
              🇳🇬 Lagos, Nigeria
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Barrister Omolaja Agbeleshe
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Minister of Justice in the Temple of Humanity | Expert Legal
              Practitioner
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <MapPin className="h-5 w-5" />
              <span>Serving Nigeria with Excellence and Integrity</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Info */}
            <div className="animate-in fade-in-50 slide-in-from-left-10 duration-1000">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Barrister Omolaja Agbeleshe"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 animate-in fade-in-50 slide-in-from-right-10 duration-1000">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  Distinguished Legal Practitioner
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Barrister Omolaja Agbeleshe is a highly respected legal
                  practitioner with over 15 years of experience serving clients
                  across Nigeria and internationally. As a qualified Barrister
                  and Solicitor of the Supreme Court of Nigeria, he has built a
                  reputation for excellence in immigration law, property
                  development, and human rights advocacy.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  His dedication to justice and human rights has earned him the
                  distinguished title of "Minister of Justice in the Temple of
                  Humanity," reflecting his unwavering commitment to social
                  justice and the protection of human dignity.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Core Values
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Integrity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Excellence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Justice</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Compassion</span>
                  </div>
                </div>
              </div>

              <Link href="/booking">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Professional Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Recognition and milestones in legal practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-in fade-in-50 slide-in-from-bottom-10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Qualifications */}
            <div className="animate-in fade-in-50 slide-in-from-left-10 duration-1000">
              <Card className="shadow-lg">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-2xl text-blue-900 flex items-center">
                    <GraduationCap className="mr-3 h-6 w-6" />
                    Professional Qualifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Areas of Practice */}
            <div className="animate-in fade-in-50 slide-in-from-right-10 duration-1000">
              <Card className="shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-2xl text-blue-900 flex items-center">
                    <Briefcase className="mr-3 h-6 w-6" />
                    Areas of Practice
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Globe className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">
                          Immigration Law
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Visa processing, citizenship applications, and
                          immigration consultation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Building className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">
                          Property Development
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Real estate law, property transactions, and
                          development consultation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">
                          Human Rights Advocacy
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Civil rights protection, social justice, and human
                          rights litigation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Scale className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">
                          Corporate Law
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Business formation, contracts, and corporate legal
                          services
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg animate-in fade-in-50 slide-in-from-left-10 duration-1000">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  To provide exceptional legal services that protect our
                  clients' rights and interests while promoting justice,
                  equality, and human dignity. We are committed to delivering
                  personalized, professional, and effective legal solutions that
                  make a positive impact in our clients' lives and the broader
                  Nigerian society.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg animate-in fade-in-50 slide-in-from-right-10 duration-1000">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  To be the leading law firm in Nigeria, recognized for our
                  expertise in immigration law, property development, and human
                  rights advocacy. We envision a society where justice is
                  accessible to all, human rights are protected, and legal
                  services contribute to the development and prosperity of
                  individuals and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Experience the difference of working with a dedicated legal
            professional who puts your interests first
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 transition-colors"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 transition-colors"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
                <li>📞 +234 (0) 123 456 7890</li>
                <li>✉️ info@agbeleshelaw.com</li>
                <li>🕒 Mon-Fri: 9AM-6PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p className="text-blue-100 text-sm">
              © 2024 O. Agbeleshebioba & Co.. All rights reserved. | Barrister
              Omolaja Agbeleshe - Licensed Legal Practitioner in Nigeria
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
