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
  Globe,
  Users,
  Calendar,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Building,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/reuseables/hero-section";
import scale from "@/public/scale.png";
import { PracticingLicenseCard } from "@/components/reuseables/PracticingLicenseCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white  ">
      <HeroSection />
      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Scale className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">20+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">500+</h3>
              <p className="text-gray-600">Clients Served</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">24/7</h3>
              <p className="text-gray-600">Legal Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal solutions tailored for the Nigerian market and
              international clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Immigration Services"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-blue-900">Immigration Law</CardTitle>
                <CardDescription>
                  Expert visa processing and immigration services for Nigeria
                  and international destinations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Property Development"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
              <CardHeader>
                <Building className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-blue-900">Property Law</CardTitle>
                <CardDescription>
                  Comprehensive property development and real estate legal
                  services across Lagos and Nigeria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Human Rights"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-blue-900">Human Rights</CardTitle>
                <CardDescription>
                  Dedicated advocacy for human rights and social justice in
                  Nigeria and beyond
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dlctwbems/image/upload/v1752511452/IMG_7733_gnrbdl.jpg"
                alt="Lagos Legal Services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">Based in Lagos </p>
                <p className="text-sm">sub-branch Abeokuta</p>
              </div>

              <div className="absolute left-0 top-0 md:top-10 md:left-10 ">
                <Image
                  src={scale}
                  alt="scale"
                  width={100}
                  height={100}
                  className=" mt-4 h-16 w-16 md:h-16 md:w-16"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Why Choose O. Agbeleshebioba & Co.?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">
                      Local Expertise, Global Reach
                    </h3>
                    <p className="text-gray-600">
                      Deep understanding of Nigerian law with international
                      legal experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">
                      Proven Track Record
                    </h3>
                    <p className="text-gray-600">
                      Successfully handled complex cases across immigration,
                      property, and human rights
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">
                      Client-Centered Approach
                    </h3>
                    <p className="text-gray-600">
                      Personalized legal solutions tailored to each clients
                      unique needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">
                      Integrity & Excellence
                    </h3>
                    <p className="text-gray-600">
                      Committed to the highest ethical standards and
                      professional excellence
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Testimonials from satisfied clients across Nigeria and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  Barrister Agbeleshe efficiently handled our company’s
                  expatriate quarterly returns and visa regularisations. His
                  professionalism, attention to detail, and timely delivery made
                  the entire process smooth. We confidently recommend his
                  services.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-blue-900">Sun Chinko</p>
                    <p className="text-sm text-gray-600">China</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  Barrister Agbeleshe provided legal services and expert counsel
                  on immigration matters for our company, Shashi Industries. His
                  guidance was clear and dependable, ensuring compliance and
                  peace of mind throughout the process.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-blue-900">
                      Apratim Bhattacharjee
                    </p>
                    <p className="text-sm text-gray-600">India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  Barrister Agbeleshe has been handling my property in Lagos
                  since 2005, for over 20 years with unwavering honesty,
                  transparency, and professionalism. His integrity and
                  dedication have earned my complete trust and highest
                  recommendation.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-blue-900">
                      Abiola Babalola Joseph
                    </p>
                    <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practicing Licnse */}
      <PracticingLicenseCard />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a consultation today and let us help you navigate your
            legal matters with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 transition-colors min-w-[250px]"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-500 hover:bg-white hover:text-blue-900 transition-colors min-w-[250px]"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
