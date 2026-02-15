"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  /** Full-screen hero ("home") or shorter banner ("page") */
  variant?: "home" | "page";
  /** Path to MP4 video source (cross-browser) */
  videoMp4?: string;
  /** Path to MOV video source (Safari/iOS) */
  videoMov?: string;
  /** Path to poster/fallback image */
  posterImage?: string;
  /** Playback rate (e.g. 0.25 for very slow motion). Defaults to 1. */
  playbackRate?: number;
  /** Show CTA button (home variant only) */
  ctaHref?: string;
  ctaText?: string;
}

export default function VideoHero({
  title,
  subtitle,
  variant = "page",
  videoMp4,
  videoMov,
  posterImage,
  playbackRate = 1,
  ctaHref,
  ctaText,
}: VideoHeroProps) {
  const isHome = variant === "home";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    // Attempt to play video; silently fall back if it fails
    const video = videoRef.current;
    if (video) {
      video.playbackRate = playbackRate;
      video.play().catch(() => {
        setVideoFailed(true);
      });
    }
  }, [playbackRate]);

  const hasVideo = (videoMp4 || videoMov) && !videoFailed;
  const objectPosition = isHome ? "object-[center_55%]" : "object-[center_60%]";

  return (
    <section
      className={`relative flex items-center justify-center text-center overflow-hidden ${
        isHome ? "min-h-screen" : "min-h-[70vh]"
      }`}
      aria-label={isHome ? "Welcome to Cresta Bella Vineyards" : title}
    >
      {/* Video background */}
      {hasVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={posterImage}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover ${objectPosition}`}
        >
          {videoMp4 && <source src={videoMp4} type="video/mp4" />}
          {videoMov && <source src={videoMov} type="video/quicktime" />}
        </video>
      )}

      {/* Poster image fallback (when video unavailable or fails) */}
      {!hasVideo && posterImage && (
        <Image
          src={posterImage}
          alt=""
          fill
          priority
          className={`object-cover ${objectPosition}`}
          aria-hidden="true"
        />
      )}

      {/* Gradient fallback (when no video or poster available) */}
      {!hasVideo && !posterImage && (
        <div
          className={`absolute inset-0 ${
            isHome
              ? "bg-gradient-to-br from-burgundy-deep via-burgundy to-olive-dark"
              : "bg-gradient-to-br from-burgundy-deep via-burgundy/90 to-olive/70"
          }`}
          aria-hidden="true"
        />
      )}

      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto">
        {isHome && (
          <div className="mb-8 animate-fade-in">
            <div className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Cresta Bella Vineyards logo"
                width={180}
                height={180}
                className="mx-auto"
                priority
              />
            </div>
          </div>
        )}

        <h1
          className={`font-serif text-cream-light leading-tight tracking-wide ${
            isHome
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              : "text-3xl sm:text-4xl md:text-5xl"
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`mt-4 sm:mt-6 font-serif italic text-cream/70 ${
              isHome ? "text-lg sm:text-xl md:text-2xl" : "text-lg sm:text-xl"
            }`}
          >
            {subtitle}
          </p>
        )}

        {isHome && ctaHref && (
          <div
            className="mt-12 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href={ctaHref}
              className="inline-block px-8 py-3 border border-cream/40 text-cream/80 text-sm tracking-widest uppercase hover:bg-cream/10 hover:border-cream/60 transition-all duration-300"
            >
              {ctaText || "Learn More"}
            </a>
          </div>
        )}
      </div>

      {/* Scroll indicator for home */}
      {isHome && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
        >
          <svg
            className="w-6 h-6 text-cream/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
