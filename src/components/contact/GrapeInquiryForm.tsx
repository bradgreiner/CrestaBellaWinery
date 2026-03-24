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
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch {
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
      <div className="text-center py-12">
        <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-6 h-6 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-serif text-xl text-offwhite mb-2">
          Inquiry Received
        </h3>
        <p className="text-muted text-sm">
          Thank you for your interest. We will reach out when availability is confirmed.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="grape-name"
          className="block text-xs tracking-[0.15em] uppercase text-muted mb-2 font-sans"
        >
          Name <span className="text-wine" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          type="text"
          id="grape-name"
          name="name"
          required
          autoComplete="name"
          className="w-full px-4 py-3 bg-primary border border-offwhite/10 text-offwhite placeholder:text-muted/30 focus:outline-none focus:border-gold/40 transition-colors duration-300"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="grape-email"
          className="block text-xs tracking-[0.15em] uppercase text-muted mb-2 font-sans"
        >
          Email <span className="text-wine" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          type="email"
          id="grape-email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 bg-primary border border-offwhite/10 text-offwhite placeholder:text-muted/30 focus:outline-none focus:border-gold/40 transition-colors duration-300"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="grape-message"
          className="block text-xs tracking-[0.15em] uppercase text-muted mb-2 font-sans"
        >
          Message <span className="text-wine" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="grape-message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-primary border border-offwhite/10 text-offwhite placeholder:text-muted/30 focus:outline-none focus:border-gold/40 transition-colors duration-300 resize-vertical"
          placeholder="Varietals of interest, estimated quantity, and any other details..."
        />
      </div>

      <input type="hidden" name="form-type" value="grape-inquiry" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 border border-wine/40 text-wine-light text-xs tracking-[0.25em] uppercase hover:bg-wine/10 hover:border-wine/60 focus:outline-none focus:border-wine/60 disabled:opacity-50 transition-all duration-500"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
