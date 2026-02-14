const placeholders = [
  {
    label: "Vineyard rows with Santa Rosa Plateau views",
    gradient: "from-olive/60 to-olive-dark/80",
  },
  {
    label: "Close-up of grape clusters on the vine",
    gradient: "from-burgundy/50 to-burgundy-deep/70",
  },
  {
    label: "Barrel room or aging cellar",
    gradient: "from-burgundy-deep/60 to-charcoal/70",
  },
  {
    label: "Sunset over the vineyard estate",
    gradient: "from-burgundy/40 via-olive/30 to-cream-dark/50",
  },
  {
    label: "Wine bottles or tasting setup",
    gradient: "from-burgundy/50 to-olive/40",
  },
  {
    label: "Aerial view of the estate and surrounding plateau",
    gradient: "from-olive/50 to-burgundy/30",
  },
];

export default function PhotoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
      {placeholders.map((item, i) => (
        <div
          key={i}
          className={`aspect-[4/3] rounded-sm bg-gradient-to-br ${item.gradient} placeholder-image`}
          role="img"
          aria-label={`Placeholder: ${item.label}`}
        >
          {/* TODO: Replace with real photos using next/image */}
          <span className="text-xs sm:text-sm px-2">[{item.label}]</span>
        </div>
      ))}
    </div>
  );
}
