"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, MessageSquare } from "lucide-react";
import { SuccessModal } from "@/components/modals/SuccessModal";
import { FailureModal } from "@/components/modals/FailureModal";

// Reusable input components
const Field = ({ label, name, ...rest }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      name={name}
      {...rest}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
    />
  </div>
);

const TextArea = ({ label, name, ...rest }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      name={name}
      {...rest}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
    />
  </div>
);

const SelectField = ({ label, name, options, ...rest }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <select
      name={name}
      {...rest}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
    >
      <option value="">Select a subject</option>
      {options.map((opt: any) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default function ClientForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_aotrse8";
    const templateID = "template_ml4lnuk";
    const userID = "8JrcwPoNdmjtYy3yN";

    const templateParams = {
      name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setSuccessOpen(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrorOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card className="shadow-xl animate-in fade-in-50 slide-in-from-left-10 duration-1000">
        <CardHeader className="bg-blue-50">
          <CardTitle className="text-2xl text-blue-900 flex items-center">
            <MessageSquare className="mr-3 h-6 w-6" />
            Send Us a Message
          </CardTitle>
          <CardDescription>
            Fill out the form below and we will get back to you within 24 hours.
            For urgent matters, please call us directly.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Field
                label="Full Name *"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
              />
              <Field
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+234 xxx xxx xxxx"
              />
            </div>
            <Field
              label="Email Address *"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
            />
            <SelectField
              label="Subject *"
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              options={[
                { label: "Immigration & Visa Inquiry", value: "immigration" },
                { label: "Property Law Consultation", value: "property" },
                { label: "Human Rights Matter", value: "human-rights" },
                { label: "Corporate Legal Services", value: "corporate" },
                { label: "Family Law", value: "family" },
                { label: "Criminal Defense", value: "criminal" },
                { label: "General Legal Inquiry", value: "general" },
                { label: "Emergency Legal Matter", value: "emergency" },
              ]}
            />
            <TextArea
              label="Message *"
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Describe your legal matter..."
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                    />
                  </svg>
                  <span>Sending...</span>
                </span>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Modals */}
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
      <FailureModal open={errorOpen} onClose={() => setErrorOpen(false)} />
    </>
  );
}
