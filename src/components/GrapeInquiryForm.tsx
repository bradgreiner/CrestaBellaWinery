"use client";

import { useState, FormEvent } from "react";

export default function GrapeInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meelgzlj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch {
      // Fallback: open mailto
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;
      window.location.href = `mailto:dongreiner1957@gmail.com?subject=Grape Inquiry from ${name}&body=${encodeURIComponent(
        `From: ${name} (${email})\n\n${message}`
      )}`;
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <svg
          className="w-12 h-12 text-olive mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="font-serif text-xl text-burgundy mb-2">
          Inquiry Received
        </h3>
        <p className="text-charcoal/60 text-sm">
          Thank you for your interest. We will reach out when availability is confirmed.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="grape-name"
          className="block text-sm font-medium text-charcoal/80 mb-1"
        >
          Name <span className="text-burgundy" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          type="text"
          id="grape-name"
          name="name"
          required
          autoComplete="name"
          className="w-full px-4 py-3 bg-cream-light border border-cream-dark rounded-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy/50 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="grape-email"
          className="block text-sm font-medium text-charcoal/80 mb-1"
        >
          Email <span className="text-burgundy" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          type="email"
          id="grape-email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 bg-cream-light border border-cream-dark rounded-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy/50 transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="grape-message"
          className="block text-sm font-medium text-charcoal/80 mb-1"
        >
          Message <span className="text-burgundy" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="grape-message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-cream-light border border-cream-dark rounded-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy/50 transition-colors resize-vertical"
          placeholder="Varietals of interest, estimated quantity, and any other details..."
        />
      </div>

      {/* Hidden field to identify form type */}
      <input type="hidden" name="form-type" value="grape-inquiry" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 bg-olive text-cream-light text-sm tracking-widest uppercase hover:bg-olive-dark focus:outline-none focus:ring-2 focus:ring-olive/50 focus:ring-offset-2 focus:ring-offset-cream-light disabled:opacity-50 transition-colors duration-200"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
