/* eslint-disable react/no-unescaped-entities */
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r min-h-[100vh] items-center flex align-middle  from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlctwbems/image/upload/v1752511430/IMG_7726_y455w1.jpg')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="text-center animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 h-full">
            <div className="mb-6">
              {/* <Badge className="bg-green-600 text-white mb-4 animate-pulse">
                🇳🇬 Proudly Nigerian
              </Badge> */}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-200">
              Barrister Omolaja Agbeleshe
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-6 animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-200">
              @ O. Agbeleshebioba & Co. (Lord's will chambers)
            </p>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-400">
              Expert In Legal Services | Immigration Laws | Property Consultant
              | Human Rights Advocate
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-800">
              <Link href="/booking">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg min-w-[250px]"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-blue-600 hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 min-w-[250px]"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
