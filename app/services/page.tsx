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
  Home,
  Users,
  Calendar,
  Award,
  CheckCircle,
  Star,
  Menu,
  X,
  ArrowRight,
  Shield,
  Building,
  FileText,
  Briefcase,
  Gavel,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Immigration & Visa Services",
      icon: Globe,
      image:
        "https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Expert immigration consultation and visa processing for Nigerian citizens seeking opportunities abroad",
      features: [
        "Canadian Immigration Processing",
        "UK Visa Applications",
        "US Immigration Consultation",
        "Student Visa Assistance",
        "Work Permit Applications",
        "Family Reunification Cases",
      ],
      price: "From ₦150,000",
    },
    {
      title: "Property Development & Law",
      icon: Building,
      image:
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Comprehensive property legal services across Lagos State and Nigeria",
      features: [
        "Property Documentation",
        "Property Management",
        "Land Acquisition Support",
        "Title Verification Services",
        "Property Development Consultation",
        "Real Estate Investment Advisory",
        "Landlord-Tenant Dispute Resolution",
      ],
      price: "From ₦200,000",
    },
    {
      title: "Human Rights Advocacy",
      icon: Users,
      image:
        "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Dedicated advocacy for human rights and social justice in Nigeria",
      features: [
        "Civil Rights Protection",
        "Police Brutality Cases",
        "Workplace Discrimination",
        "Gender-Based Violence Support",
        "Community Legal Education",
        "Pro Bono Legal Services",
        "Legal Representation in Human Rights Cases",
      ],
      price: "Consultation Available",
    },
    {
      title: "Corporate Legal Services",
      icon: Briefcase,
      image:
        "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Business legal solutions for Nigerian enterprises and international companies",
      features: [
        "Company Registration",
        "Contract Drafting & Review",
        "Intellectual Property Protection",
        "Employment Law Compliance",
        "Merger & Acquisition Support",
        "Regulatory Compliance",
      ],
      price: "From ₦100,000",
    },
    {
      title: "Family Law Services",
      icon: Home,
      image:
        "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Compassionate family law services with cultural sensitivity",
      features: [
        "Divorce Proceedings",
        "Child Custody Matters",
        "Adoption Services",
        "Marriage Documentation",
        "Inheritance Disputes",
        "Family Mediation",
      ],
      price: "From ₦80,000",
    },
    {
      title: "Criminal Defense",
      icon: Gavel,
      image:
        "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Strong criminal defense representation across Nigerian courts",
      features: [
        "Criminal Case Defense",
        "Bail Applications",
        "Appeal Proceedings",
        "Police Station Representation",
        "White Collar Crime Defense",
        "Traffic Offense Defense",
      ],
      price: "From ₦250,000",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-in fade-in-50 slide-in-from-bottom-10 duration-1000">
            <Badge className="bg-green-600 text-white mb-4 animate-pulse">
              🇳🇬 Lagos, Nigeria
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Legal Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive Legal Solutions for Nigerian and International
              Clients
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <MapPin className="h-5 w-5" />
              <span>Serving Lagos State and All of Nigeria</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Professional Legal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert legal representation with deep understanding of Nigerian
              law and international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-in fade-in-50 slide-in-from-bottom-10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/30"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 p-2 rounded-full">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-blue-900 text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-green-600">
                    {service.price}
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/booking">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors group-hover:scale-105 transform duration-200">
                      Book Consultation
                      <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose Our Legal Services?
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by clients across Lagos and Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                20+ Years Experience
              </h3>
              <p className="text-gray-600">
                Extensive experience in Nigerian legal system
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                500+ Clients Served
              </h3>
              <p className="text-gray-600">
                Trusted by individuals and businesses
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                98% Success Rate
              </h3>
              <p className="text-gray-600">
                Proven track record of successful cases
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Always available for urgent legal matters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for professional legal consultation and
            representation
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
    </div>
  );
}
