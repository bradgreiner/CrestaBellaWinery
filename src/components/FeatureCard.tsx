import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "vineyard" | "winemaking" | "grapes";
  href?: string;
  linkText?: string;
}

function CardIcon({ type }: { type: FeatureCardProps["icon"] }) {
  const className = "w-12 h-12 text-burgundy/80";

  switch (type) {
    case "vineyard":
      return (
        <svg
          viewBox="0 0 48 48"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path d="M8 40l8-16 8 16" />
          <path d="M16 40l8-16 8 16" />
          <path d="M24 40l8-16 8 16" />
          <circle cx="24" cy="12" r="6" />
          <path d="M24 18v6" />
        </svg>
      );
    case "winemaking":
      return (
        <svg
          viewBox="0 0 48 48"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path d="M16 8h16v8c0 6-4 10-8 12-4-2-8-6-8-12V8z" />
          <path d="M24 28v12" />
          <path d="M16 40h16" />
          <circle cx="20" cy="16" r="2" fill="currentColor" opacity="0.3" />
          <circle cx="28" cy="14" r="1.5" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case "grapes":
      return (
        <svg
          viewBox="0 0 48 48"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <circle cx="20" cy="20" r="4" />
          <circle cx="28" cy="20" r="4" />
          <circle cx="16" cy="28" r="4" />
          <circle cx="24" cy="28" r="4" />
          <circle cx="32" cy="28" r="4" />
          <circle cx="20" cy="36" r="4" />
          <circle cx="28" cy="36" r="4" />
          <path d="M24 8c-4 0-6 4-6 8" />
          <path d="M24 8c4 0 6 4 6 8" />
          <path d="M24 8v-4" />
        </svg>
      );
  }
}

export default function FeatureCard({
  title,
  description,
  icon,
  href,
  linkText,
}: FeatureCardProps) {
  return (
    <div className="group flex flex-col h-full text-center p-8 rounded-sm bg-cream-light hover:bg-cream transition-colors duration-300">
      <div className="mb-6 flex justify-center">
        <CardIcon type={icon} />
      </div>
      <h3 className="font-serif text-xl sm:text-2xl text-burgundy mb-3">
        {title}
      </h3>
      <p className="text-charcoal/70 leading-relaxed text-sm sm:text-base mb-4 flex-1">
        {description}
      </p>
      {href && linkText && (
        <Link
          href={href}
          className="inline-block text-sm tracking-wider uppercase text-burgundy/70 hover:text-burgundy transition-colors border-b border-burgundy/30 hover:border-burgundy/60 pb-0.5 mt-auto"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
