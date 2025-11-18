type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  theme?: "dark" | "light";
};

export function Logo({
  className = "",
  showWordmark = true,
  theme = "dark",
}: LogoProps) {
  const wordmarkMainClass =
    theme === "light"
      ? "text-slate-950 md:text-4xl"
      : "text-white md:text-4xl";
  const wordmarkAccentClass =
    theme === "light" ? "text-[#5C5EFF]" : "text-sky-100/80";
  const taglineClass =
    theme === "light" ? "text-slate-500" : "text-sky-100/60";

  return (
    <div
      className={`flex items-center gap-5 ${className}`.trim()}
      aria-label="LyftrAi logo"
    >
      <svg
        role="img"
        aria-hidden={!showWordmark}
        viewBox="0 0 96 96"
        className="h-24 w-24"
      >
        <defs>
          <linearGradient
            id="lyftr-gradient"
            x1="12%"
            y1="90%"
            x2="88%"
            y2="10%"
          >
            <stop offset="0%" stopColor="#6931FF" />
            <stop offset="52%" stopColor="#826BFF" />
            <stop offset="100%" stopColor="#6DF6DC" />
          </linearGradient>
          <linearGradient
            id="lyftr-glow"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(122, 118, 255, 0.35)" />
            <stop offset="100%" stopColor="rgba(109, 246, 220, 0.35)" />
          </linearGradient>
        </defs>
        <rect
          x="6"
          y="6"
          width="84"
          height="84"
          rx="24"
          fill="url(#lyftr-gradient)"
        />
        <path
          d="M30 64V34c0-2.21 1.79-4 4-4h6c2.2 0 4 1.79 4 4v30h-8c-3.31 0-6-2.69-6-6Z"
          fill="white"
          fillOpacity="0.96"
        />
        <path
          d="M46 56.5l8.18-10.68c1.45-1.89 4.29-1.89 5.74 0L68 56.5c1.7 2.22.05 5.41-2.87 5.41H48.9c-2.92 0-4.57-3.19-2.9-5.41Z"
          fill="white"
          fillOpacity="0.96"
        />
        <path
          d="M46.5 72.5l5.2-6.5c1.55-1.94 4.51-1.94 6.06 0l5.24 6.5c1.78 2.19.18 5.5-3 5.5H49.5c-3.18 0-4.78-3.31-3-5.5Z"
          fill="url(#lyftr-glow)"
        />
      </svg>
      {showWordmark ? (
        <div className="flex flex-col">
          <span
            className={`text-3xl font-semibold tracking-tight ${wordmarkMainClass}`}
          >
            Lyftr<span className={wordmarkAccentClass}>Ai</span>
          </span>
          <span
            className={`text-sm uppercase tracking-[0.5em] ${taglineClass}`}
          >
            Lifted Intelligence
          </span>
        </div>
      ) : null}
    </div>
  );
}
