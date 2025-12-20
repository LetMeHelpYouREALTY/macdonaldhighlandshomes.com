"use client";

import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";

type ContactFormProps = {
  formTitle?: string;
  formDescription?: string;
  ctaText?: string;
  source?: string;
};

export default function ContactForm({
  formTitle = "Get in Touch",
  formDescription = "Fill out the form below and we'll get back to you within 24 hours.",
  ctaText = "Send Message",
  source = "contact-form"
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyInterest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with your Follow Up Boss webhook endpoint
      const response = await fetch("/api/leads/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          propertyInterest: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">{formTitle}</h3>
        {formDescription && (
          <p className="text-neutral-600 mb-6">{formDescription}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors"
            placeholder="(702) 555-1234"
          />
        </div>

        <div>
          <label htmlFor="propertyInterest" className="block text-sm font-medium text-neutral-700 mb-2">
            Interest
          </label>
          <select
            id="propertyInterest"
            name="propertyInterest"
            value={formData.propertyInterest}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors"
          >
            <option value="">Select an option</option>
            <option value="buying">Buying a Home</option>
            <option value="selling">Selling a Home</option>
            <option value="valuation">Home Valuation</option>
            <option value="relocation">Relocation</option>
            <option value="investment">Investment</option>
            <option value="off-market">Off-Market Opportunities</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-colors"
          placeholder="Tell us about your real estate needs..."
        />
      </div>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800">
            Thank you! We've received your message and will contact you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800">
            There was an error submitting your form. Please call us directly at{" "}
            <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="underline font-semibold">
              {siteConfig.contact.phoneFormatted}
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : ctaText}
      </button>

      <p className="text-sm text-neutral-500 text-center">
        Or call us directly:{" "}
        <a 
          href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} 
          className="text-primary-600 font-semibold hover:underline"
        >
          {siteConfig.contact.phoneFormatted}
        </a>
      </p>
    </form>
  );
}
