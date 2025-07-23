"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Globe,
  Users,
  Scale,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import ClientForm from "@/components/form/ClientForm";

// Reusable Cards
const InfoCard = ({ icon: Icon, title, bg = "bg-blue-50", children }: any) => (
  <Card className="shadow-lg">
    <CardHeader className={bg}>
      <CardTitle className="text-xl text-blue-900 flex items-center">
        <Icon className="mr-3 h-6 w-6" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="p-6">{children}</CardContent>
  </Card>
);

const ServiceItem = ({ icon: Icon, label }: any) => (
  <div className="flex items-center space-x-2">
    <Icon className="h-5 w-5 text-blue-600" />
    <span className="text-sm text-gray-700">{label}</span>
  </div>
);

const WhyItem = ({ text }: { text: string }) => (
  <li className="flex items-start space-x-3">
    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
    <span className="text-gray-700">{text}</span>
  </li>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const services = [
    { icon: Globe, label: "Immigration Law" },
    { icon: Building, label: "Property Law" },
    { icon: Users, label: "Human Rights" },
    { icon: Scale, label: "Corporate Law" },
  ];

  const whyUs = [
    "Free initial consultation",
    "20+ years of legal experience",
    "Specialized in Nigerian law",
    "Available for urgent matters",
    "Multilingual support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-green-600 text-white mb-4 animate-pulse">
            🇳🇬 Lagos, Nigeria
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Get in Touch with Barrister Omolaja Agbeleshe for Professional Legal
            Services
          </p>
          <div className="flex justify-center items-center space-x-2 text-blue-200">
            <MapPin className="h-5 w-5" />
            <span>Located in the Heart of Lagos, Serving All of Nigeria</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="shadow-xl animate-in fade-in-50 slide-in-from-left-10 duration-1000">
            <ClientForm />
          </Card>

          {/* Info */}
          <div className="space-y-6 animate-in fade-in-50 slide-in-from-right-10 duration-1000">
            <InfoCard
              icon={Building}
              title="Office Information"
              bg="bg-green-50"
            >
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p>Lagos, Nigeria</p>
                    <p className="text-sm text-gray-600">
                      Serving All of Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p>+234 (0) 803 454 0129</p>
                    <p className="text-sm text-gray-600">
                      Emergency Line: 24/7
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>agbelesheomolaja@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Office Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 10:00 AM - 2:00 PM</p>
                    <p className="text-sm text-gray-600">
                      Sunday: Appointment Only
                    </p>
                  </div>
                </div>
              </div>
            </InfoCard>

            <InfoCard icon={Scale} title="Our Legal Services">
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <ServiceItem key={service.label} {...service} />
                ))}
              </div>
            </InfoCard>

            <InfoCard
              icon={CheckCircle}
              title="Why Contact Us?"
              bg="bg-yellow-50"
            >
              <ul className="space-y-3">
                {whyUs.map((text) => (
                  <WhyItem key={text} text={text} />
                ))}
              </ul>
            </InfoCard>

            <InfoCard
              icon={Phone}
              title="Emergency Legal Matters"
              bg="bg-red-50"
            >
              <p className="text-gray-700 mb-4">
                For urgent legal matters requiring immediate attention, please
                call:
              </p>
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="h-6 w-6 text-red-600" />
                <span className="text-lg font-semibold text-red-900">
                  +234 (0) 803 454 0129
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Available 24/7 for police custody, criminal, or emergency
                issues.
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Lagos, Nigeria
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image
                src="https://res.cloudinary.com/dlctwbems/image/upload/v1752511428/IMG_7731_mexhlf.jpg"
                alt="Lagos Nigeria Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center text-white text-center">
                <div>
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    O. Agbeleshebioba & Co.
                  </h3>
                  <p className="text-lg">Lagos, Nigeria</p>
                  <p className="text-sm mt-2">Serving All of Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
