export default function DividerSection() {
  return (
    <div className="relative z-0 -mt-24">
      <svg
        viewBox="0 0 1440 320"
        className="w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="glowGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00d9f5" />
            <stop offset="100%" stopColor="#ff4c4c" />
          </linearGradient>
        </defs>
        <path
          fill="url(#glowGradient)"
          fillOpacity="0.1"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,149.3C840,139,960,149,1080,154.7C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
