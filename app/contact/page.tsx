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
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Menu,
  X,
  Building,
  Globe,
  Users,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    alert(
      "Thank you for your message! We will get back to you within 24 hours."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-in fade-in-50 slide-in-from-bottom-10 duration-1000">
            <Badge className="bg-green-600 text-white mb-4 animate-pulse">
              🇳🇬 Lagos, Nigeria
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get in Touch with Barrister Omolaja Agbeleshe for Professional
              Legal Services
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <MapPin className="h-5 w-5" />
              <span>Located in the Heart of Lagos, Serving All of Nigeria</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-in fade-in-50 slide-in-from-left-10 duration-1000">
              <Card className="shadow-xl">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-2xl text-blue-900 flex items-center">
                    <MessageSquare className="mr-3 h-6 w-6" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we will get back to you within
                    24 hours. For urgent matters, please call us directly.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="+234 xxx xxx xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="immigration">
                          Immigration & Visa Inquiry
                        </option>
                        <option value="property">
                          Property Law Consultation
                        </option>
                        <option value="human-rights">
                          Human Rights Matter
                        </option>
                        <option value="corporate">
                          Corporate Legal Services
                        </option>
                        <option value="family">Family Law</option>
                        <option value="criminal">Criminal Defense</option>
                        <option value="general">General Legal Inquiry</option>
                        <option value="emergency">
                          Emergency Legal Matter
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Please describe your legal matter in detail..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-3 text-lg font-semibold"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-in fade-in-50 slide-in-from-right-10 duration-1000">
              {/* Office Information */}
              <Card className="shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-xl text-blue-900 flex items-center">
                    <Building className="mr-3 h-6 w-6" />
                    Office Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Address</h4>
                        <p className="text-gray-700">Lagos, Nigeria</p>
                        <p className="text-sm text-gray-600">
                          Serving Lagos State and All of Nigeria
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">
                          Phone Numbers
                        </h4>
                        <p className="text-gray-700">+234 (0) 123 456 7890</p>
                        <p className="text-sm text-gray-600">
                          Emergency Line: Available 24/7
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Email</h4>
                        <p className="text-gray-700">info@agbeleshelaw.com</p>
                        <p className="text-sm text-gray-600">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">
                          Office Hours
                        </h4>
                        <p className="text-gray-700">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-700">
                          Saturday: 10:00 AM - 2:00 PM
                        </p>
                        <p className="text-sm text-gray-600">
                          Sunday: By Appointment Only
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services Overview */}
              <Card className="shadow-lg">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl text-blue-900 flex items-center">
                    <Scale className="mr-3 h-6 w-6" />
                    Our Legal Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-700">
                        Immigration Law
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-700">
                        Property Law
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-700">
                        Human Rights
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Scale className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-700">
                        Corporate Law
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Us */}
              <Card className="shadow-lg">
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="text-xl text-blue-900">
                    Why Contact Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <span className="text-gray-700">
                        Free initial consultation
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <span className="text-gray-700">
                        20+ years of legal experience
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <span className="text-gray-700">
                        Specialized in Nigerian law
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <span className="text-gray-700">
                        Available for urgent matters
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <span className="text-gray-700">
                        Multilingual support
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="shadow-lg border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-xl text-red-900">
                    Emergency Legal Matters
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    For urgent legal matters requiring immediate attention,
                    please call our emergency line:
                  </p>
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="h-6 w-6 text-red-600" />
                    <span className="text-lg font-semibold text-red-900">
                      +234 (0) 123 456 7890
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Available 24/7 for criminal matters, police custody issues,
                    and other urgent legal emergencies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Lagos Nigeria Office Location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    O. Agbeleshebioba & Co.
                  </h3>
                  <p className="text-lg">Lagos, Nigeria</p>
                  <p className="text-sm mt-2">
                    Serving Lagos State and All of Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
